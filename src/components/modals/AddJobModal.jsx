import React from "react";
import { Modal, Form } from "react-bulma-components";
import { useForm, Controller, FormProvider } from "react-hook-form";

export function AddJobModal({ show, setShow }) {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClose = () => setShow(false);

  // array of times to populate job length form options
  const jobTime = [];
  for (let time = 0.1; time <= 8.0; time += 0.1) {
    jobTime.push(time.toFixed(1));
  }

  return (
    <FormProvider {...methods}>
      <Modal show={show} setShow={setShow} onClose={handleClose}>
        <Modal.Content backgroundColor="white" showClose={true}>
          <form onSubmit={handleSubmit(onSubmit)} size={2}>
            {/* <Form.Label>Tech Name</Form.Label> */}
            {/* <Form.Select> 
              ---- Add this back in once I figure out how to have it be created within a specific
              column at a specific time (won't be able to overlap other existing jobs)----
                {techs.map((techDetails) => {
                  return <option>{techDetails.name}</option>;
                })}
              </Form.Select> */}
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
                  onChange={field.onChange}
                  value={field.value}
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
                  onChange={field.onChange}
                  value={field.value}
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
                  onChange={field.onChange}
                  value={field.value}
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
                  onChange={field.onChange}
                  value={field.value}
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
  );
}
