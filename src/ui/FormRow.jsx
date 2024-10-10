import styled from "styled-components";

const StyledFormRow = styled.div`
  width: 100%;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-md);
  padding: 0.5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--color-grey-50);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-grey-500);
  padding-top: 0.5rem;
  text-transform: uppercase;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ error, label, children }) {
  return (
    <>
      <StyledFormRow>
        {label && <Label htmlFor={children.props.id}>{label}</Label>}
        {children}
      </StyledFormRow>
      {error && <Error>{error}</Error>}
    </>
  );
}

export default FormRow;
