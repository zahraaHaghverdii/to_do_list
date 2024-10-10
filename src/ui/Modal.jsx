import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useOuteSideClick } from "../hooks/useOuteSideClick";
import { IoIosClose } from "react-icons/io";

const BackModal = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #c5c5c554;
  backdrop-filter: blur(1px);
`;

const StyledModal = styled.div`
  background: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-gray-600);
  border-radius: var(--border-radius-md);
  width: 40%;
  height: auto;
  padding: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
  }
`;

const CadrModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MainModal = styled.div`
  overflow-y: auto;
  /* height: 50rem; */
`;

const CloseModalButton = styled.span`
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  text-align: left;
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 4rem;
    height: 4rem;
    color: var(--color-grey-500);
  }
`;

//1.

const ModalContext = createContext();

//2.
function Modal({ children }) {
  const [openName, setOpen] = useState("");
  const open = setOpen;
  const close = () => setOpen("");

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

//3.
function OpenModal({ children, opens }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opens),
  });
}

//windoe
function WindowModal({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOuteSideClick(close); // این هوک یک تابع ورودی میگیره برای اجرای هوک

  if (name !== openName) return null;

  return createPortal(
    //ref={ref} ===> یعنی به اون dom الان دسترسی داره
    <BackModal>
      <StyledModal ref={ref}>
        <CadrModal>
          {/* close */}
          <CloseModalButton onClick={() => close()}>
            <IoIosClose />
          </CloseModalButton>

          {/* main */}
          <MainModal onClick={() => close()}>
            {children}
            {/* {cloneElement(children, { onCloseModal: close })} */}
          </MainModal>
        </CadrModal>
      </StyledModal>
    </BackModal>,
    document.body
  );
}

//4.
Modal.OpenModal = OpenModal;
Modal.WindowModal = WindowModal;

export default Modal;
