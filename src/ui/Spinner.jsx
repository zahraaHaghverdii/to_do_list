import styled from "styled-components";

const StyledSpinner = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ebeaea57;
  backdrop-filter: blur(1px);
`;

const Span = styled.span`
  width: 50px;
  height: 50px;
  border: 5px dotted var(--color-brand-700);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20% auto;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Spinner() {
  return (
    <StyledSpinner>
      <Span></Span>
    </StyledSpinner>
  );
}

export default Spinner;
