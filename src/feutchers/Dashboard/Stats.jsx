import Stat from "./Stat";
import { useGetDataTasks } from "../Tasks/useGetDataTasks";
import { SiTodoist } from "react-icons/si";
import { FaHourglassEnd, FaHourglassStart } from "react-icons/fa";

function Stats() {
  const { tasks } = useGetDataTasks();
  const taskAll = tasks?.filter((status) => status.status === "all");
  const taskDoing = tasks?.filter((status) => status.status === "doing");
  const taskDone = tasks?.filter((status) => status.status === "done");

  return (
    <>
      <Stat
        status={"On the waiting list"}
        lengthTask={taskAll?.length}
        icon={<SiTodoist />}
        color={"#4f46e5"}
      />
      <Stat
        status={"doing"}
        lengthTask={taskDoing?.length}
        icon={<FaHourglassStart />}
        color={"#7ff3a7"}
      />
      <Stat
        status={"done"}
        lengthTask={taskDone?.length}
        icon={<FaHourglassEnd />}
        color={"#b8bbc0"}
      />
    </>
  );
}

export default Stats;
