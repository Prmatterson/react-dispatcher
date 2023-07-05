import { Modal } from "react-bulma-components";
import { useForm, FormProvider } from "react-hook-form";
import { ControlledFormInputText } from "./ControlledFormInputText";

export function AddJobModal({ show, setShow, addNewJob, unassignedJobs }) {
  const { handleSubmit, control, reset } = useForm();

  const createUnassignedJob = (newJob) => {
    addNewJob([...unassignedJobs, newJob]);
  };

  const onSubmit = (data) => {
    console.log(data), createUnassignedJob(data);
  };

  const handleClose = () => setShow(false);

  // array of times to populate job length form options
  const jobTime = [];
  for (let time = 0.1; time <= 8.0; time += 0.1) {
    jobTime.push(time.toFixed(1));
  }

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
              <ControlledFormInputText
                label="Customer Name"
                inputName="customerName"
                control={control}
                defaultValue=""
              />
              <ControlledFormInputText
                label="Job Description"
                inputName="jobDescription"
                control={control}
                defaultValue=""
              />
              <ControlledFormInputText
                label="Job Length"
                inputName="jobLength"
                control={control}
                defaultValue=""
              />
              <ControlledFormInputText
                label="Promise Time"
                inputName="promiseTime"
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
      {console.log(addNewJob)}
    </>
  );
}
