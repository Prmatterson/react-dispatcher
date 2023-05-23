import { React, useState } from "react";
import { Box, Button, Modal, Form } from "react-bulma-components";
// import { techs } from "./drag-and-drop/TechGrid";

export default function NavButtons() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const jobTime = [];
  for (let time = 0.1; time <= 8.0; time += 0.1) {
    jobTime.push(time.toFixed(1));
  }

  return (
    <>
      <Box>
        <Button.Group>
          <Button onClick={handleShow}>Add Job</Button>
        </Button.Group>
      </Box>

      <Modal show={show} onClose={handleClose}>
        <Modal.Content backgroundColor="white" showClose={true}>
          <Form.Field>
            <Form.Control size={2}>
            {/* <Form.Label>Tech Name</Form.Label> */}
              {/* <Form.Select> 
              ---- Add this back in once I figure out how to have it be created within a specific
              column at a specific time (won't be able to overlap other existing jobs)----
                {techs.map((techDetails) => {
                  return <option>{techDetails.name}</option>;
                })}
              </Form.Select> */}
              <Form.Label>Work Order Number</Form.Label>
              <Form.Input></Form.Input>
              <Form.Label>Customer Name</Form.Label>
              <Form.Input></Form.Input>
              <Form.Label>Job Description</Form.Label>
              <Form.Input></Form.Input>
              <Form.Label>Length of Job</Form.Label>
              <Form.Select>
                {jobTime.map((timeDetails) => {
                  return <option>{timeDetails}</option>;
                })}
              </Form.Select>
            </Form.Control>
          </Form.Field>
          <Box>
            <div>
              <Button color="success" renderAs="span">
                Create Job
              </Button>
              <Button color="danger" renderAs="span" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </Box>
        </Modal.Content>
      </Modal>
      <br></br>
    </>
  );
}
