import Filter from "../../ui/Filter";

function TaskFilterDoing() {
  return (
    <>
      <Filter
        filterField={"doing"}
        options={[
          { value: "7", label: "all" },
          { value: "30", label: "doing" },
          { value: "90", label: "done" },
        ]}
      />
    </>
  );
}

export default TaskFilterDoing;
