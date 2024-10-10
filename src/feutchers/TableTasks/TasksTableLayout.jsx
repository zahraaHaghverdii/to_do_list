import Button from "../../ui/Button";
import ButtonsGroup from "../../ui/ButtonsGroup";
import TaskSortStatus from "../TaskOptional/TaskSortStatus";
import TaskTable from "./TaskTable";

function TasksTableLayout() {
  return (
    <>
      <ButtonsGroup>
        <TaskSortStatus />
        {/* <Button>filter date</Button>
        <Button>filter status</Button> */}
      </ButtonsGroup>

      <TaskTable />
    </>
  );
}

export default TasksTableLayout;
