import { Modal } from "react-bulma-components";
import { useForm, FormProvider } from "react-hook-form";
import { ControlledFormInputText } from "./ControlledFormInputText";

export function AddDispatchedJobModal({ show, setShow, addDispatchedJob }) {
  const { handleSubmit, control, reset } = useForm();

  const createDispatchedJob = () => {
    // removeUnassignedJob(unassignedJob.filter((unassignedJob) => unassignedJob.id != dispatchedJob.id));
    // addDispatchedJob([...dispatchedJobs, dispatchedJob]);
    console.log(createDispatchedJob)
    // dispatchedJobs, removeUnassignedJob, unassignedJob
  };

  const onSubmit = (data) => {
    console.log(data), createDispatchedJob(data.workOrderNumber);
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
              <input className="button" type="submit" value="Create Job" />
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
      {console.log(addDispatchedJob)}
    </>
  );
}
