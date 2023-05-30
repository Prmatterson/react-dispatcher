import { React, useState } from "react";
import { Box, Button, Modal, Form } from "react-bulma-components";
import { useForm } from "react-hook-form";
// import { techs } from "./drag-and-drop/TechGrid";

export default function Buttons() {
  // Setting up state/react-hook-form on form data
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("workOrderNumber")); // watch input value by passing the name of it

  // using state to open/close Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // array of times to populate job length form options
  const jobTime = [];
  for (let time = 0.1; time <= 8.0; time += 0.1) {
    jobTime.push(time.toFixed(1));
  }

  return (
    <>
      {/* Button in toolbar that opens modal */}
      <Box>
        <Button.Group>
          <Button onClick={handleShow}>Add Job</Button>
        </Button.Group>
      </Box>

      {/* Modal itself */}
      <Modal show={show} onClose={handleClose}>
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
      <br></br>
    </>
  );
}
