import { useParams } from "react-router";
import { getTaskId } from "../../services/apiTasks";
import { useQuery } from "@tanstack/react-query";

export function useGetTaskId() {
  const { id } = useParams();

  const { data: taskId = {}, isLoading } = useQuery({
    queryKey: ["Tasks", id],
    queryFn: () => getTaskId(id),
  });

  return { taskId, isLoading };
}
