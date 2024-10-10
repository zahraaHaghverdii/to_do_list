import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTasks as ApiUpdateTask } from "../../services/apiTasks";

export function useDoingTask() {
  const queryClient = useQueryClient();

  const { mutate: doingTask, isLoading: isLoadingDoingTask } = useMutation({
    mutationKey: ["Tasks"],
    mutationFn: (id) =>
      ApiUpdateTask(id, { status: "doing", created_at: new Date() }),

    onSuccess: (data) => {
      toast.success(`Task # ${data[0].id} successfully doing`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { doingTask, isLoadingDoingTask };
}
