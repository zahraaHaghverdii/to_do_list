import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { IoCheckmark, IoCheckmarkDone } from "react-icons/io5";
import { useDeleteTask } from "./useDeleteTask";
import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";
import ModalConfirmation from "../../ui/ModalConfirmation.JSX";
import { BsCheck2Circle } from "react-icons/bs";
import { useDoingTask } from "./useDoingTask";
import { useDoneTask } from "./useDoneTask";
import { useBackTask } from "./useBackTask";
import DateTime from "../../ui/DateTime";
import FormAddTask from "./FormAddTask";
import { useNavigate } from "react-router";

const StyledCardTask = styled.div`
  background: var(--color-grey-50);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  height: 16rem;
  padding: 1rem 1.5rem;
  /* overflow-y: auto; */
  position: relative;

  max-width: 100%; /* عرض کارت از عرض ستون فراتر نرود */

  & h2 {
    color: var(--color-grey-700);
  }
  & p {
    color: var(--color-grey-500);
    height: 6rem;
    overflow-y: auto;
    width: 100%;
    /* @media (max-width: ${({ theme }) => theme.breakpoints.max_tablet}) {
      height: 3.2rem;
    } */
    /* Removing scrollbars for webkit, firefox, and ms, respectively */
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

const StyledFooterCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0.3rem;
  right: 1rem;
  left: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--color-grey-200);
`;

const MenuFooterCard = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.3rem;
`;

function CardTask({ task }) {
  const { deleteTask, isLoading } = useDeleteTask();
  const { doingTask, isLoadingDoingTask } = useDoingTask();
  const { doneTask, isLoadingDoneTask } = useDoneTask();
  const { backTask, isLoadingBackTask } = useBackTask();
  const { id, title, status, created_at } = task;
  const navigate = useNavigate();

  function handelBackStatus() {
    if (status === "doing") {
      backTask({ id, status: "all" });
    } else if (status === "done") {
      backTask({ id, status: "doing" });
    }
  }

  return (
    <Modal>
      <StyledCardTask>
        <h2>{task.title}</h2>
        <p>{task.description}</p>

        <StyledFooterCart>
          <DateTime>{created_at}</DateTime>

          <MenuFooterCard>
            {task.status === "done" ? (
              <Modal.OpenModal opens={"done"}>
                <ButtonIcon>
                  <BsCheck2Circle />
                </ButtonIcon>
              </Modal.OpenModal>
            ) : task.status === "doing" ? (
              <Modal.OpenModal opens={"doing"}>
                <ButtonIcon>
                  <IoCheckmarkDone />
                </ButtonIcon>
              </Modal.OpenModal>
            ) : (
              <Modal.OpenModal opens={"all"}>
                <ButtonIcon>
                  <IoCheckmark />
                </ButtonIcon>
              </Modal.OpenModal>
            )}

            <ButtonIcon
              colorhover="#15803d"
              onClick={() => navigate(`/task-management/${id}`)}
            >
              <LuEye />
            </ButtonIcon>

            {/* edite */}
            {task.status === "done" ? (
              ""
            ) : (
              <Modal.OpenModal opens={"update"}>
                <ButtonIcon colorhover="#4f46e5">
                  <CiEdit />
                </ButtonIcon>
              </Modal.OpenModal>
            )}

            {/* delete task */}
            <Modal.OpenModal opens={"delete"}>
              <ButtonIcon colorhover="#991b1b">
                <MdOutlineDelete />
              </ButtonIcon>
            </Modal.OpenModal>
          </MenuFooterCard>
        </StyledFooterCart>
      </StyledCardTask>

      {/* update task */}
      <Modal.WindowModal name="update">
        <FormAddTask taskEdite={task} />
      </Modal.WindowModal>

      {/* delete task */}
      <Modal.WindowModal name="delete">
        <ModalConfirmation
          subject="Delete"
          resourceName={task.title}
          disabled={isLoading}
          onConfirm={() => deleteTask(task.id)}
        >
          Are you sure you want to delete this ({task.title}) permanently? This
          action cannot be undone.
        </ModalConfirmation>
      </Modal.WindowModal>

      {/* all task */}
      <Modal.WindowModal name="all">
        <ModalConfirmation
          subject="doing"
          resourceName={title}
          status={status}
          disabled={isLoadingDoingTask || isLoadingBackTask}
          onConfirm={() => doingTask(id)}
        >
          Do you want the task ({title}) to be placed in the doing list?
        </ModalConfirmation>
      </Modal.WindowModal>

      {/* doing task */}
      <Modal.WindowModal name="doing">
        <ModalConfirmation
          subject="done"
          resourceName={title}
          status={status}
          disabled={isLoadingDoneTask || isLoadingBackTask}
          onConfirm={() => doneTask(id)}
          onBack={handelBackStatus}
        >
          Do you want the task ({title}) to be placed in the done list?
        </ModalConfirmation>
      </Modal.WindowModal>

      {/* done task */}
      <Modal.WindowModal name="done">
        <ModalConfirmation
          subject="back-doing"
          resourceName={title}
          status={status}
          disabled={isLoadingDoingTask || isLoadingBackTask}
          onConfirm={() => doingTask(id)}
          onBack={handelBackStatus}
        >
          Do you want the task of completing your intensity ({title}) to return
          to all lists?
        </ModalConfirmation>
      </Modal.WindowModal>
    </Modal>
  );
}

export default CardTask;
