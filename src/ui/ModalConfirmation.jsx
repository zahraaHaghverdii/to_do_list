import styled from "styled-components";
import Button from "./Button";

const StyledConfirmDelete = styled.div`
  /* width: 40rem; */
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & h3 {
    text-transform: capitalize;
  }

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ModalConfirmation({
  children,
  subject,
  disabled,
  onCloseModal,
  resourceName,
  onConfirm,
  status,
  onBack,
}) {
  return (
    <StyledConfirmDelete>
      <h3>
        {subject} {resourceName}
      </h3>
      <p>{children}</p>

      <div>
        {subject !== "back-doing" && (
          <Button
            variations={subject === "Delete" ? "danger" : "primary"}
            sizes="medium"
            disabled={disabled}
            onClick={onConfirm}
          >
            {subject}
          </Button>
        )}

        <Button
          variations="secondary"
          sizes="medium"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>

        {status === "doing" || status === "done" ? (
          <Button
            variations={"secondary"}
            sizes="medium"
            disabled={disabled}
            onClick={onBack}
          >
            Back
          </Button>
        ) : (
          ""
        )}
      </div>
    </StyledConfirmDelete>
  );
}

export default ModalConfirmation;
