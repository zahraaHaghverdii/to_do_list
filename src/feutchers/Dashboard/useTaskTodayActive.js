import { useQuery } from "@tanstack/react-query";
import { getTodayTask } from "../../services/apiTasks";

export function useTaskTodayActive() {
  const { data: taskToday, isLoading } = useQuery({
    queryKey: ["Tasks-today"],
    queryFn: getTodayTask,
  });

  const taskDoingAndAll = taskToday?.filter(
    (status) => status.status === "all" || status.status === "doing"
  );
  const taskDone = taskToday?.filter((status) => status.status === "done");

  return { taskToday, taskDone, isLoading, taskDoingAndAll };
}
