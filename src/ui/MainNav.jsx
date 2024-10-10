import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import styled from "styled-components";
import { LiaTasksSolid } from "react-icons/lia";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    overflow-x: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mini_mobile}) {
    gap: 2.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1.2rem 0.5rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    & span {
      display: none;
    }
    & svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

function MainNav() {
  return (
    <NavList>
      <li>
        <StyledNavLink to={"/"}>
          <HiOutlineHome />
          <span>Home</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={"/task-management"}>
          <HiOutlineCalendar />
          <span>Task Management</span>
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to={"/tasks"}>
          <LiaTasksSolid />
          <span>All Tasks</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={"/setting"}>
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </StyledNavLink>
      </li>
    </NavList>
  );
}

export default MainNav;
