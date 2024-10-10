import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/apiTasks";

export function useGetDataTasks() {
  const { data: tasks, isLoading } = useQuery({
    queryFn: getTasks,
    queryKey: ["Tasks"],
  });

  return { tasks, isLoading };
}
