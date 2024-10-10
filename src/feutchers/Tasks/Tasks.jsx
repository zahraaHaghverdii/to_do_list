import styled from "styled-components";
import { useGetDataTasks } from "./useGetDataTasks";
import Spinner from "../../ui/Spinner";
import CardTask from "./CardTask";
import Tag from "../../ui/Tag";

const StyledTasks = styled.div`
  overflow-x: auto;
  margin-top: 1rem;
`;
const StyledTaskManagement = styled.div`
  display: grid;
  gap: 25px;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(
    3,
    minmax(0, 1fr)
  ); /* سه ستون برابر با حداقل عرض صفر و حداکثر 1fr */

  @media (max-width: ${({ theme }) => theme.breakpoints.max_tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledCulomns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.max_tablet}) {
    width: 100%;
  }
`;

const StyledTitleCulomn = styled.span`
  color: var(--color-grey-700);
  width: 100%;
  margin-bottom: 0.3rem;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledNotTask = styled.div`
  color: var(--color-grey-400);
  text-align: center;
  margin-top: 5rem;
`;

const StyledCulomnCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  /* @media (max-width: ${({ theme }) => theme.breakpoints.max_tablet}) {
    height: 336px;
    overflow-y: auto;
    border: 1px solid var(--color-grey-50);
  } */
`;

function Tasks() {
  const { tasks, isLoading } = useGetDataTasks();

  // لیست پیش‌فرض status ها
  const defaultStatuses = ["all", "doing", "done"];
  // پیدا کردن وضعیت‌های منحصر به فرد از tasks
  const taskStatuses = [...new Set(tasks?.map((task) => task.status))];

  // اضافه کردن وضعیت‌های جدید به لیست پیش‌فرض
  const combinedStatuses = [
    ...defaultStatuses,
    ...taskStatuses.filter((status) => !defaultStatuses.includes(status)),
  ];

  return (
    <StyledTasks>
      {isLoading && <Spinner />}

      <StyledTaskManagement columns={combinedStatuses.length}>
        {combinedStatuses.map((status) => (
          <StyledCulomns key={status}>
            <StyledTitleCulomn status={status}>
              <Tag status={status} />
              {status.toUpperCase()}(
              {tasks?.filter((task) => task.status === status).length})
            </StyledTitleCulomn>

            <StyledCulomnCard>
              {tasks?.filter((task) => task.status === status).length === 0 ? (
                <StyledNotTask>There is no task</StyledNotTask>
              ) : (
                tasks
                  ?.filter((task) => task.status === status) // فقط taskهایی که وضعیتشان برابر status است
                  .map((task) => <CardTask task={task} key={task.id} />)
              )}
            </StyledCulomnCard>
          </StyledCulomns>
        ))}
      </StyledTaskManagement>
    </StyledTasks>
  );
}

export default Tasks;
