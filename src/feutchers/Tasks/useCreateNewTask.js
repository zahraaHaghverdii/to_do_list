import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTasks } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useCreateNewTask() {
  const queryClient = useQueryClient();

  const { mutate: newTask, isLoading } = useMutation({
    mutationFn: createTasks,
    onSuccess: () => {
      toast.success("New task added successfully");
      //باید ریکت کوئری مربوط به taks و اپدیت کنیم
      queryClient.invalidateQueries({ queryKey: ["Tasks"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { newTask, isLoading };
}
