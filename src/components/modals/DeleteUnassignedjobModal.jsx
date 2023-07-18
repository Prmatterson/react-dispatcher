import { Modal } from "react-bulma-components";
import { useForm, FormProvider } from "react-hook-form";
import { ControlledFormInputText } from "./ControlledFormInputText";

export function DeleteUnassignedJobModal({
  show,
  setShow,
  deleteJob,
  unassignedJobs,
}) {
  const { handleSubmit, control, reset } = useForm();

  const deleteUnassignedJob = (jobToDelete) => {
    deleteJob(
      unassignedJobs.filter(
        job => job.workOrderNumber != jobToDelete
      )
    );
    console.log(unassignedJobs);
  };

  const onSubmit = (data) => {
    console.log(data), deleteUnassignedJob(data);
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
      {console.log(deleteJob)}
    </>
  );
}
