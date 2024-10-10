import styled, { css } from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem 0;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-400);

    &:hover {
      ${(props) =>
        props.colorhover &&
        css`
          transition: all 0.5s ease-in-out;
          color: ${props.colorhover};
        `}
    }
  }
`;

export default ButtonIcon;
