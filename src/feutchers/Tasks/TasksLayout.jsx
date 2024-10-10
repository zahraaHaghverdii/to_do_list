import styled from "styled-components";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

function TasksLayout() {
  return (
    <>
      <StyledHeader>
        <AddTask />
      </StyledHeader>
      <Tasks />
    </>
  );
}

export default TasksLayout;
