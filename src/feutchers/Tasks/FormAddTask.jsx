import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import ButtonsGroup from "../../ui/ButtonsGroup";
import { useCreateNewTask } from "./useCreateNewTask";
import { useUpdateTask } from "./useUpdateTask";

function FormAddTask({ taskEdite = {}, onCloseModal }) {
  const { id: idTaskEdite, ...task } = taskEdite;
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: idTaskEdite ? task : {},
  });

  const { errors } = formState;
  const { newTask, isLoading } = useCreateNewTask();
  const { updateTask, isLoadingUpdateTask } = useUpdateTask();
  const isIdTaskEdite = Boolean(idTaskEdite);

  function fOnSubmit(data) {
    if (isIdTaskEdite) {
      updateTask(
        { id: idTaskEdite, newTask: data },
        {
          onSuccess: () => {
            reset();
            onCloseModal();
          },
        }
      );
    } else {
      newTask(data, {
        onSuccess: () => {
          reset();
          onCloseModal();
        },
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit(fOnSubmit)} type={onCloseModal && "modal"}>
      <FormRow label={"Title Task"} error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          placeholder="Add title task ..."
          {...register("title", { required: "Forms should not be empty" })}
        />
      </FormRow>
      <FormRow label={"Description Task"} error={errors?.description?.message}>
        <Input
          type="text"
          id="description"
          placeholder="Add description task ..."
          {...register("description", {
            required: "Forms should not be empty",
          })}
        />
      </FormRow>

      <ButtonsGroup>
        <Button
          variations="secondary"
          sizes="medium"
          type="reset"
          onClick={onCloseModal}
        >
          Cancel
        </Button>

        <Button
          variations="primary"
          sizes="medium"
          disabled={isLoading || isLoadingUpdateTask}
        >
          {isIdTaskEdite ? "Edite task" : "Create task"}
        </Button>
      </ButtonsGroup>
    </Form>
  );
}

export default FormAddTask;
