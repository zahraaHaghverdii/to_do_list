import { format } from "date-fns";
import { GoClock } from "react-icons/go";
import styled from "styled-components";

const StyledDateTime = styled.div`
  & span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: var(--color-grey-400);
    font-size: 1.3rem;
    &::before {
      content: none;
    }
  }
`;

function DateTime({ children }) {
  return (
    <StyledDateTime>
      <span>
        <GoClock />
        {format(new Date(children), "EEE, MMM dd yyyy")}
      </span>
    </StyledDateTime>
  );
}

export default DateTime;
