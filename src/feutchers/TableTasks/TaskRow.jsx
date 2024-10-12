import styled from "styled-components";
import Table from "../../ui/Table";
import { format } from "date-fns";
import Dropdown from "../../ui/Dropdown";
import Modal from "../../ui/Modal";
import ModalConfirmation from "../../ui/ModalConfirmation";
import { useDeleteTask } from "../Tasks/useDeleteTask";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import FormAddTask from "../Tasks/FormAddTask";
import { IoCheckmark, IoCheckmarkDone } from "react-icons/io5";
import { BsCheck2Circle } from "react-icons/bs";
import { useBackTask } from "../Tasks/useBackTask";
import { useDoneTask } from "../Tasks/useDoneTask";
import { useDoingTask } from "../Tasks/useDoingTask";
import { useNavigate } from "react-router";

// const NumberTask = styled.div`
//   font-size: 14px;
//   color: var(--color-brand-700);
// `;

const Text = styled.div`
  white-space: nowrap; /* جلوگیری از شکستن خط */
  overflow: hidden; /* پنهان کردن بخش‌های اضافی متن */
  text-overflow: ellipsis; /* نمایش سه نقطه */
`;
const Status = styled.div`
  padding: 0.3rem;
  font-size: 13px;
  text-align: center;
  border-radius: var(--border-radius-md);
  background: ${(props) =>
    props.status === "all"
      ? "#4f46e5"
      : props.status === "doing"
      ? "#7ff3a7"
      : props.status === "done"
      ? "#b8bbc0"
      : "#bb5588eb"};
  color: var(--color-grey-0);
`;

function TaskRow({ task }) {
  const { deleteTask, isLoading } = useDeleteTask();
  const { doingTask, isLoadingDoingTask } = useDoingTask();
  const { doneTask, isLoadingDoneTask } = useDoneTask();
  const { backTask, isLoadingBackTask } = useBackTask();
  const navigate = useNavigate();
  const { id } = task;

  const all = task.status === "all";
  const doing = task.status === "doing";
  const done = task.status === "done";

  function handelBackStatus() {
    if (doing) {
      backTask({ id, status: "all" });
      navigate("/to_do_list/");
    } else if (done) {
      backTask({ id, status: "doing" });
      navigate("/to_do_list/");
    }
  }

  return (
    <Table.RowTable key={task.id}>
      {/* <NumberTask>{index + 1}</NumberTask> */}
      <Text>{task.title}</Text>
      <Text>{task.description}</Text>
      <Status status={task.status}>{task.status}</Status>
      <div>{format(task.created_at, "EEE, MMM dd yyyy")}</div>

      <div>
        <Modal>
          <Dropdown>
            <Dropdown.OpenDropdown openDropdown={task.id} />

            <Dropdown.WindowDropdown nameDropdown={task.id}>
              {/* delete */}
              <Modal.OpenModal opens={"delete"}>
                <Dropdown.ButtonDropdown
                  icon={<MdOutlineDelete />}
                  // onClick={() => console.log("delete")}
                >
                  Delete
                </Dropdown.ButtonDropdown>
              </Modal.OpenModal>

              {/* edite */}
              {task.status !== "done" && (
                <Modal.OpenModal opens={"edite"}>
                  <Dropdown.ButtonDropdown
                    icon={<CiEdit />}
                    // onClick={() => console.log("edite")}
                  >
                    edite
                  </Dropdown.ButtonDropdown>
                </Modal.OpenModal>
              )}

              {/* doing/done */}
              <Modal.OpenModal
                opens={all ? "all" : doing ? "doing" : done ? "done" : ""}
              >
                <Dropdown.ButtonDropdown
                  icon={
                    all ? (
                      <IoCheckmark />
                    ) : doing ? (
                      <IoCheckmarkDone />
                    ) : (
                      done && <BsCheck2Circle />
                    )
                  }
                >
                  {task.status}
                </Dropdown.ButtonDropdown>
              </Modal.OpenModal>
            </Dropdown.WindowDropdown>

            <Modal.WindowModal name="delete">
              <ModalConfirmation
                subject="Delete"
                resourceName={task.title}
                disabled={isLoading}
                onConfirm={() => deleteTask(task.id)}
              >
                Are you sure you want to delete this ({task.title}) permanently?
                This action cannot be undone.
              </ModalConfirmation>
            </Modal.WindowModal>

            {/* edite task */}
            <Modal.WindowModal name="edite">
              <FormAddTask taskEdite={task} />
            </Modal.WindowModal>

            {/* all task */}
            <Modal.WindowModal name="all">
              <ModalConfirmation
                subject="doing"
                resourceName={task.title}
                status={task.status}
                disabled={isLoadingDoingTask || isLoadingBackTask}
                onConfirm={() => (doingTask(id), navigate("/to_do_list/"))}
              >
                Do you want the task ({task.title}) to be placed in the doing
                list?
              </ModalConfirmation>
            </Modal.WindowModal>

            {/* doing task */}
            <Modal.WindowModal name="doing">
              <ModalConfirmation
                subject="done"
                resourceName={task.title}
                status={task.status}
                disabled={isLoadingDoneTask || isLoadingBackTask}
                onConfirm={() => (doneTask(id), navigate("/to_do_list/"))}
                onBack={handelBackStatus}
              >
                Do you want the task ({task.title}) to be placed in the done
                list?
              </ModalConfirmation>
            </Modal.WindowModal>

            {/* done task */}
            <Modal.WindowModal name="done">
              <ModalConfirmation
                subject="back-doing"
                resourceName={task.title}
                status={task.status}
                disabled={isLoadingDoingTask || isLoadingBackTask}
                onConfirm={() => (doingTask(id), navigate("/to_do_list/"))}
                onBack={handelBackStatus}
              >
                Do you want the task of completing your intensity ({task.title})
                to return to all lists?
              </ModalConfirmation>
            </Modal.WindowModal>
          </Dropdown>
        </Modal>
      </div>
    </Table.RowTable>
  );
}

export default TaskRow;
