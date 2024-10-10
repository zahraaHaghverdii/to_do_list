import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const StyledHeader = styled.div`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  height: 7rem;
  border-bottom: 1px solid var(--color-grey-100);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 2.4rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mini_mobile}) {
    padding: 1rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
