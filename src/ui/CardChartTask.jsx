import styled from "styled-components";

const CardChartTask = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: ${(props) => props.gridColumn};
  /* grid-column: 2 / span 2; */
  padding-top: 2.4rem;
`;

export default CardChartTask;
