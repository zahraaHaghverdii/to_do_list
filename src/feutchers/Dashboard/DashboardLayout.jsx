import styled from "styled-components";
import Stats from "./Stats";
import TaskToday from "./TaskToday";
import TaskLineChart from "./TaskLineChart";
import TaskPieChart from "./TaskPieChart";
import TaskBarChart from "./TaskBarChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.5rem;
  }
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats />
      <TaskToday />
      <TaskLineChart />
      <TaskBarChart />
      <TaskPieChart />
    </StyledDashboardLayout>
  );
}
export default DashboardLayout;
