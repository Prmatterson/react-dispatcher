import { Modal } from "react-bulma-components";
import { useForm, FormProvider } from "react-hook-form";
import { ControlledFormInputText } from "./ControlledFormInputText";

export function DeleteUnassignedJobModal({ show, setShow, deleteUnassignedJob }) {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    deleteUnassignedJob(data.workOrderNumber);
    handleClose();
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <FormProvider>
        <Modal show={show} setShow={setShow} onClose={handleClose}>
          <Modal.Content backgroundColor="white" showClose={true}>
            <form onSubmit={handleSubmit(onSubmit)} size={2}>
              <ControlledFormInputText
                label="Work Order Number"
                inputName="workOrderNumber"
                control={control}
                defaultValue=""
              />
              <br></br>
              <br></br>
              <input className="button" type="submit" value="Delete Job" />
              <input
                className="button"
                type="reset"
                value="Reset"
                onClick={reset}
              />
              <input
                className="button"
                type="cancel"
                value="Cancel"
                onClick={handleClose}
              />
            </form>
          </Modal.Content>
        </Modal>
      </FormProvider>
    </>
  );
}
