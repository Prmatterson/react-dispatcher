import { Modal } from "react-bulma-components";
import { useForm, FormProvider } from "react-hook-form";
import { ControlledFormInputText } from "./ControlledFormInputText";

export function AddJobModal({ show, setShow, formData, setFormData }) {
  const addFormData = (newData) => {
    setFormData([...formData, newData]);
  };

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data),
    addFormData(data);
  };

  const handleClose = () => setShow(false);

  // array of times to populate job length form options
  const jobTime = [];
  for (let time = 0.1; time <= 8.0; time += 0.1) {
    jobTime.push(time.toFixed(1));
  }

  return (
    <>
      <FormProvider >
        <Modal show={show} setShow={setShow} onClose={handleClose}>
          <Modal.Content backgroundColor="white" showClose={true}>
            <form onSubmit={handleSubmit(onSubmit)} size={2}>
              <ControlledFormInputText label="Work Order Number" inputName="workOrderNumber" control={control} />
              <ControlledFormInputText label="Customer Name" inputName="customerName" control={control} />
              <ControlledFormInputText label="Job Description" inputName="jobDescription" control={control} />
              <ControlledFormInputText label="Job Length" inputName="jobLength" control={control} />
   
                {/* )}
              ></Controller>
              <Form.Label>Job Length</Form.Label>
              <Controller
                control={control}
                name="jobLength"
                rules={{ required: true }}
                render={(field) => (
                  <Form.Select type="text" onChange={field.onChange}>
                    {jobTime.map((timeDetails) => {
                      return <option key={field.name}>{timeDetails}</option>;
                    })}
                  </Form.Select>
                )}
              ></Controller> */}

              <br></br>
              <br></br>
              <input className="button" type="submit" value="Create Job" />
              <input
                className="button"
                type="cancel"
                onClick={handleClose}
                value="Cancel"
              />
            </form>
          </Modal.Content>
        </Modal>
      </FormProvider>
      {console.log(formData)}
      {/* {formData.map((formDatum) => console.log(JSON.stringify(formDatum)))} */}
    </>
  );
}
