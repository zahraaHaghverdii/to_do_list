import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTasks as ApiUpdateTask } from "../../services/apiTasks";

export function useBackTask() {
  const queryClient = useQueryClient();

  const { mutate: backTask, isLoading: isLoadingBackTask } = useMutation({
    mutationKey: ["Tasks"],
    mutationFn: ({ id, status }) =>
      ApiUpdateTask(id, { status: status, created_at: new Date() }),

    onSuccess: (data) => {
      toast.success(`Task # ${data[0].id} successfully Back`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { backTask, isLoadingBackTask };
}
