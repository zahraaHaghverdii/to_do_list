import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTasks as ApiUpdateTask } from "../../services/apiTasks";

export function useDoneTask() {
  const queryClient = useQueryClient();

  const { mutate: doneTask, isLoading: isLoadingDoneTask } = useMutation({
    mutationKey: ["Tasks"],
    mutationFn: (id) =>
      ApiUpdateTask(id, { status: "done", created_at: new Date() }),

    onSuccess: (data) => {
      toast.success(`Task # ${data[0].id} successfully done`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { doneTask, isLoadingDoneTask };
}
