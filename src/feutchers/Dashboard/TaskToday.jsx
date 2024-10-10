import styled from "styled-components";
import { useTaskTodayActive } from "./useTaskTodayActive";
import TaskTodayItem from "./TaskTodayItem";
import Spinner from "../../ui/Spinner";

const StyledTaskToday = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 2.4rem;
`;
const H2 = styled.h2`
  color: var(--color-grey-600);
`;

const TodayList = styled.ul`
  overflow: auto;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TaskToday() {
  const { taskDoingAndAll, isLoading } = useTaskTodayActive();

  return (
    <StyledTaskToday>
      <H2>Today</H2>

      {isLoading ? (
        <Spinner />
      ) : taskDoingAndAll?.length > 0 ? (
        <TodayList>
          {taskDoingAndAll?.map((task) => (
            <TaskTodayItem task={task} key={task.id} />
          ))}
        </TodayList>
      ) : (
        <NoActivity>You have nothing to do today...</NoActivity>
      )}
    </StyledTaskToday>
  );
}

export default TaskToday;
