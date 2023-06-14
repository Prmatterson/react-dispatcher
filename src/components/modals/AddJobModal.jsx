import { React, useState } from "react";
import { Modal, Form } from "react-bulma-components";
import { useForm } from "react-hook-form";

export function AddJobModal() {
  // Setting up state/react-hook-form on form data
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const onSubmit = (data) => {
    console.log(data);
    // setAddJobData((prev) => [...prev, data]);
  };
  console.log(watch("workOrderNumber")); // watch input value by passing the name of it


  // array of times to populate job length form options
  const jobTime = [];
  for (let time = 0.1; time <= 8.0; time += 0.1) {
    jobTime.push(time.toFixed(1));
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
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
          <Form.Input
            {...register("workOrderNumber", { required: true })}
          ></Form.Input>
          <Form.Label>Customer Name</Form.Label>
          <Form.Input
            {...register("customerName", { required: true })}
          ></Form.Input>
          <Form.Label>Job Description</Form.Label>
          <Form.Input
            {...register("jobDescription", { required: true })}
          ></Form.Input>
          <Form.Label>Job Length</Form.Label>
          <Form.Select {...register("jobLength", { required: true })}>
            {jobTime.map((timeDetails) => {
              return <option>{timeDetails}</option>;
            })}
          </Form.Select>
          {errors.exampleRequired && <span>This field is required</span>}
          <br></br>
          <br></br>
          <input
            class="button"
            type="submit"
            renderAs="span"
            value="Create Job"
          />
          <input
            class="button"
            type="cancel"
            renderAs="span"
            onClick={handleClose}
            value="Cancel"
          />
        </form>
      </Modal.Content>
    </Modal>
  );
}
