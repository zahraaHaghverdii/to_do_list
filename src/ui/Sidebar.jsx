import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.div`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 3.2rem 1rem;
  width: 20rem;
  grid-area: sidebar;

  //باعث میشه هر div داخل سایدبار به اندازه gap فاصله بگیره به صورت عمودی
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 1rem 2.4rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mini_mobile}) {
    padding: 1rem;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
