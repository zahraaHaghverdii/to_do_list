import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import styled from "styled-components";
import { useDarkMode } from "../context/ContextDarkModeProvider";

const StyledMode = styled.div`
  background: var(--color-darkLight-back-50);
  box-shadow: var(--shadow-sm);
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  cursor: pointer;

  & svg {
    color: var(--color-darkLight-color-50);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: var(--color-darkLight-color-50);
    background: none;
  }
`;

function DarkLightMode() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <StyledMode onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </StyledMode>
  );
}

export default DarkLightMode;
