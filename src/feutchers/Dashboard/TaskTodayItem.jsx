import styled from "styled-components";
import Button from "../../ui/Button";
import Tag from "../../ui/Tag";
import { useNavigate } from "react-router";

const StyledTodayItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  & span {
    width: 129px;
    overflow: hidden;
    text-transform: capitalize;
  }
`;

function TaskTodayItem({ task }) {
  const navigate = useNavigate();

  return (
    <StyledTodayItem>
      <Title>
        <Tag status={task.status} />
        <span>{task.title}</span>
      </Title>
      <Button
        sizes={"small"}
        onClick={() => navigate(`/task-management/${task.id}`)}
      >
        {task.status}
      </Button>
    </StyledTodayItem>
  );
}

export default TaskTodayItem;
