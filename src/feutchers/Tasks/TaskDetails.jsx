import styled from "styled-components";
import { useGetTaskId } from "./useGetTaskId";
import { useMoveBack } from "../../hooks/useMoveBack";
import Spinner from "../../ui/Spinner";
import DateTime from "../../ui/DateTime";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ModalConfirmation from "../../ui/ModalConfirmation.JSX";
import { useDoingTask } from "./useDoingTask";
import { useDoneTask } from "./useDoneTask";
import { useBackTask } from "./useBackTask";
import { useNavigate } from "react-router";

const StyledDetails = styled.div`
  background: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-md);
`;
const Header = styled.div`
  background-color: ${({ status }) =>
    status === "all"
      ? "#4f46e5"
      : status === "doing"
      ? "#7ff3a7"
      : status === "done"
      ? "#b8bbc0"
      : "#bb5588eb"};
  border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
  border-bottom: 1px solid var(--color-grey-300);
  color: var(--color-grey-0);
  padding: 1rem;

  & span {
    color: var(--color-grey-800);
  }
`;
const Main = styled.div`
  padding: 1rem;
`;
const Footer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

function TaskDetails() {
  const { taskId, isLoading } = useGetTaskId();
  const { status, title, description, created_at = new Date(), id } = taskId;
  const { doingTask, isLoadingDoingTask } = useDoingTask();
  const { doneTask, isLoadingDoneTask } = useDoneTask();
  const { backTask, isLoadingBackTask } = useBackTask();
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  function handelBackStatus() {
    if (status === "doing") {
      backTask({ id, status: "all" });
      navigate("/to_do_list/task-management");
    } else if (status === "done") {
      backTask({ id, status: "doing" });
      navigate("/to_do_list/task-management");
    }
  }

  return (
    <StyledDetails>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header status={status}>
            <h2>Status : {status}</h2>
            <span>
              <DateTime>{created_at}</DateTime>
            </span>
          </Header>
          <Main>
            <h1>{title}</h1>
            <p>{description}</p>
          </Main>
          <Footer>
            <Button onClick={() => moveBack()} variations={"secondary"}>
              Back
            </Button>

            <Modal>
              {status === "done" ? (
                <Modal.OpenModal opens={"done-details"}>
                  <Button>back doing</Button>
                </Modal.OpenModal>
              ) : status === "doing" ? (
                <Modal.OpenModal opens={"doing-details"}>
                  <Button>done</Button>
                </Modal.OpenModal>
              ) : (
                <Modal.OpenModal opens={"all-details"}>
                  <Button>doing</Button>
                </Modal.OpenModal>
              )}

              {/* all task */}
              <Modal.WindowModal name="all-details">
                <ModalConfirmation
                  subject="doing"
                  resourceName={title}
                  status={status}
                  disabled={isLoadingDoingTask || isLoadingBackTask}
                  onConfirm={() => (
                    doingTask(id), navigate("/to_do_list/task-management")
                  )}
                >
                  Do you want the task ({title}) to be placed in the doing list?
                </ModalConfirmation>
              </Modal.WindowModal>

              {/* doing task */}
              <Modal.WindowModal name="doing-details">
                <ModalConfirmation
                  subject="done"
                  resourceName={title}
                  status={status}
                  disabled={isLoadingDoneTask || isLoadingBackTask}
                  onConfirm={() => (
                    doneTask(id), navigate("/to_do_list/task-management")
                  )}
                  onBack={handelBackStatus}
                >
                  Do you want the task ({title}) to be placed in the done list?
                </ModalConfirmation>
              </Modal.WindowModal>

              {/* done task */}
              <Modal.WindowModal name="done-details">
                <ModalConfirmation
                  subject="back-doing"
                  resourceName={title}
                  status={status}
                  disabled={isLoadingDoingTask || isLoadingBackTask}
                  onConfirm={() => (
                    doingTask(id), navigate("/to_do_list/task-management")
                  )}
                  onBack={handelBackStatus}
                >
                  Do you want the task of completing your intensity (title) to
                  return to all lists?
                </ModalConfirmation>
              </Modal.WindowModal>
            </Modal>
          </Footer>
        </>
      )}
    </StyledDetails>
  );
}

export default TaskDetails;
