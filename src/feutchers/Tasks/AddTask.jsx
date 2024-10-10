import { HiPlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import ButtonsGroup from "../../ui/ButtonsGroup";
import FormAddTask from "./FormAddTask";

function AddTask() {
  return (
    <Modal>
      <ButtonsGroup>
        <Modal.OpenModal opens="add">
          <Button>
            <HiPlus /> add new task
          </Button>
        </Modal.OpenModal>
      </ButtonsGroup>

      <Modal.WindowModal name="add">
        <FormAddTask />
      </Modal.WindowModal>
    </Modal>
  );
}

export default AddTask;
