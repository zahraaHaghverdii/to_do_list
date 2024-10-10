import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  height: 4.6rem;
  width: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 3.5rem;
  }
`;
const P = styled.p`
  color: var(--color-grey-400);
  font-size: 2.8rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.04em;
  margin-left: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo.png" alt="logo" />
      <P>To Do List</P>
    </StyledLogo>
  );
}

export default Logo;
