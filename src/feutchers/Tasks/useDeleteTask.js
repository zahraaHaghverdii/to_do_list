import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTasks } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: deleteTasks,
    onSuccess: (data) => {
      toast.success(`delete task # ${data[0].id}`);
      queryClient.invalidateQueries({ queryKey: ["Tasks"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteTask, isLoading };
}
