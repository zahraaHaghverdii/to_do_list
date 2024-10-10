import { HiOutlineLogout } from "react-icons/hi";
import styled from "styled-components";

const StayledLogout = styled.div`
  background: var(--color-brand-50);
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
    color: var(--color-brand-500);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background: none;
  }
`;

function LogOut() {
  return (
    <StayledLogout>
      <HiOutlineLogout />
    </StayledLogout>
  );
}

export default LogOut;
