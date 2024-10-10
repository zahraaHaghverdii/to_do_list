import styled from "styled-components";

const Tag = styled.div`
  content: "";
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.status === "all"
      ? "#4f46e5"
      : props.status === "doing"
      ? "#7ff3a7"
      : props.status === "done"
      ? "#b8bbc0"
      : "#bb5588eb"};
`;

export default Tag;
