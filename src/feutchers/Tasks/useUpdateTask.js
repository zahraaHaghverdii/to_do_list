import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTasks as ApiUpdateTask } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useUpdateTask() {
  const queryClient = useQueryClient();

  const { mutate: updateTask, isLoading: isLoadingUpdateTask } = useMutation({
    mutationKey: ["Tasks"],
    mutationFn: ({ id, newTask }) => ApiUpdateTask(id, newTask),
    onSuccess: (data) => {
      toast.success(`Successfully edit task #${data[0].id}`);
      queryClient.invalidateQueries({ queryKey: ["Tasks"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateTask, isLoadingUpdateTask };
}
