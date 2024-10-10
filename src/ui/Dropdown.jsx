import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";

const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative; /* اضافه کردن position relative */
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: relative;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  z-index: 1;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  position: absolute; /* تغییر position به absolute */
  top: ${(props) => props.position + "px"};
  width: max-content;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

//1.
const dropdowncontext = createContext();

//2.
function Dropdown({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null); // اصلاح نام srtPosition به setPosition

  return (
    <dropdowncontext.Provider
      value={{ openId, setOpenId, position, setPosition }} // اصلاح setPosition
    >
      <StyledDropdown>{children}</StyledDropdown>
    </dropdowncontext.Provider>
  );
}

function OpenDropdown({ openDropdown }) {
  const { setOpenId, openId, setPosition } = useContext(dropdowncontext);

  function handleToggle(e) {
    openId === "" || openId !== openDropdown
      ? setOpenId(openDropdown)
      : setOpenId("");
    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition(rect.height + 8); // محاسبه فاصله از بالای دکمه
  }

  return (
    <StyledToggle onClick={handleToggle}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function WindowDropdown({ children, nameDropdown }) {
  const { openId, position } = useContext(dropdowncontext);

  if (openId !== nameDropdown) return null;
  return <StyledList position={position}>{children}</StyledList>;
}

function ButtonDropdown({ children, icon, onClick }) {
  const { setOpenId } = useContext(dropdowncontext);
  function handlern() {
    onClick?.();
    setOpenId("");
  }
  return (
    <li onClick={handlern}>
      <StyledButton>
        <span>{icon}</span>
        {children}
      </StyledButton>
    </li>
  );
}

//3.
Dropdown.OpenDropdown = OpenDropdown;
Dropdown.WindowDropdown = WindowDropdown;
Dropdown.ButtonDropdown = ButtonDropdown;

export default Dropdown;
