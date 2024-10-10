import styled from "styled-components";

const StyledStat = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: ${(props) => props.backgroundColor};

  & svg {
    width: 4.2rem;
    height: 4.2rem;
    color: ${(props) => props.color};
  }
`;

const Title = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  align-self: end;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--color-grey-500);

  & h3 {
    font-weight: 600;
    font-size: 2.8rem;
  }
`;

const Discription = styled.p`
  font-size: 1.4rem;
  line-height: 0.5;
  font-weight: 500;
  color: var(--color-grey-400);
`;

function Stat({ lengthTask, status, icon, color, backgroundColor }) {
  return (
    <StyledStat>
      <Icon color={color} backgroundColor={backgroundColor}>
        {icon}
      </Icon>
      <Title>
        <h3>{lengthTask}</h3> {status}
      </Title>
      <Discription>task {status}</Discription>
    </StyledStat>
  );
}

export default Stat;
