import { React, useState } from "react";
import { Modal, Form } from "react-bulma-components";
import { useForm, Controller, FormProvider } from "react-hook-form";

export function AddJobModal({ show, setShow }) {
  const [formData, setFormData] = useState([]);

  const addFormData = (newData) => {
    setFormData([...formData, newData]);
  };

  const [workOrderNumber, setWorkOrderNumber] = useState("");
  const handleWorkOrderNumberChange = (event) => {
    setWorkOrderNumber(event.target.value);
  };

  const [customerName, setCustomerName] = useState("");
  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const [jobDescription, setJobDescription] = useState("");
  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const [jobLength, setJobLength] = useState("");
  const handleJobLengthChange = (event) => {
    setJobLength(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFormData({
      workOrderNumber,
      customerName,
      jobDescription,
      jobLength,
    });
    setWorkOrderNumber("");
    setCustomerName("");
    setJobDescription("");
    setJobLength("");
  };

  const handleClose = () => setShow(false);
  const methods = useForm();
  const { control } = methods;

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
        <form onSubmit={handleSubmit} size={2}>
          <Form.Label>Work Order Number</Form.Label>
          <Controller
            control={control}
            name="workOrderNumber"
            rules={{ required: true }}
            render={(field) => (
              <Form.Input
                {...field}
                type="text"
                name={field.name}
                onChange={handleWorkOrderNumberChange}
                value={workOrderNumber}
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
                name={field.name}
                onChange={handleCustomerNameChange}
                value={customerName}
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
                name={field.name}
                onChange={handleJobDescriptionChange}
                value={jobDescription}
              ></Form.Input>
            )}
          ></Controller>
          <Form.Label>Job Length</Form.Label>
          <Controller
            control={control}
            name="jobLength"
            rules={{ required: true }}
            render={(field) => (
              <Form.Select
                {...field}
                name={field.name}
                onChange={handleJobLengthChange}
                value={jobLength}
              >
                {jobTime.map((timeDetails) => {
                  return <option>{timeDetails}</option>;
                })}
              </Form.Select>
            )}
          ></Controller>

          <br></br>
          <br></br>
          <input
            className="button"
            type="submit"
            renderAs="span"
            value="Create Job"
          />
          <input
            className="button"
            type="cancel"
            renderAs="span"
            onClick={handleClose}
            value="Cancel"
          />
        </form>
        </Modal.Content>
        </Modal>
      </FormProvider>
      {/* Need to have the below create a box, not a div below this form */}
      <div>
        {formData.map((formDatum, index) => (
          <div key={index}>{JSON.stringify(formDatum)}</div>
        ))}
      </div>
    </>
  );
}
