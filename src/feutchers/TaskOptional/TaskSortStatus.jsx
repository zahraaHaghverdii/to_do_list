import Sort from "../../ui/Sort";

function TaskSortStatus() {
  return (
    <Sort
      //   sortBy="status"
      options={[
        { value: "All", label: "Status All" },
        { value: "all", label: "Status Waiting" },
        { value: "doing", label: "Status doing" },
        { value: "done", label: "Status done" },
      ]}
    />
  );
}

export default TaskSortStatus;
