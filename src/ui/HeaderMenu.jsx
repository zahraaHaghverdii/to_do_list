import styled from "styled-components";
import DarkLightMode from "./DarkLightMode";
import LogOut from "./LogOut";
import UserAvator from "./UserAvator";

const StyledHeaderMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      {/* dark mode */}
      <li>
        <DarkLightMode />
      </li>
      {/* Logout */}
      <li>
        <LogOut />
      </li>
      {/* profileUser */}
      <li>
        <UserAvator />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
