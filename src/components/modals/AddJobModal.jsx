import { Modal, Form } from "react-bulma-components";
import { useForm, Controller, FormProvider } from "react-hook-form";

export function AddJobModal({ show, setShow, formData, setFormData }) {
  const addFormData = (newData) => {
    setFormData([...formData, newData]);
  };

  const methods = useForm();
  const { control, handleSubmit } = methods;

  const onSubmit = (data) => {
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
      <FormProvider {...methods}>
        <Modal show={show} setShow={setShow} onClose={handleClose}>
          <Modal.Content backgroundColor="white" showClose={true}>
            <form onSubmit={handleSubmit(onSubmit)} size={2}>
              <Form.Label>Work Order Number</Form.Label>
              <Controller
                control={control}
                name="workOrderNumber"
                rules={{ required: true }}
                render={(field) => (
                  <Form.Input
                    {...field}
                    type="text"
                    onChange={field.onChange}
                  ></Form.Input>
                )}
              ></Controller>
              <Form.Label>Customer Name</Form.Label>
              <Controller
                control={control}
                name="customerName"
                rules={{ required: true }}
                render={(field) => (
                  <Form.Input
                    {...field}
                    type="text"
                    onChange={field.onChange}
                  ></Form.Input>
                )}
              ></Controller>
              <Form.Label>Job Description</Form.Label>
              <Controller
                control={control}
                name="jobDescription"
                rules={{ required: true }}
                render={(field) => (
                  <Form.Input
                    {...field}
                    type="text"
                    onChange={field.onChange}
                  ></Form.Input>
                )}
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
              ></Controller>

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
