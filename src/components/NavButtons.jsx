import { React, useState } from "react";
import { Box, Button, Modal, Form } from "react-bulma-components";
import { techs, timeCell } from "./drag-and-drop/TechGrid";

export default function NavButtons() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Box>
        <Button.Group>
          <Button onClick={handleShow}>Add Job</Button>
        </Button.Group>
      </Box>

      <Modal show={show} onClose={handleClose}>
        <Modal.Content backgroundColor="white" padding="100px" showClose={true}>
          <Form.Field>
            <Form.Label>Tech Name</Form.Label>
            <Form.Control size={2}>
              <Form.Select>
                {techs.map((techDetails) => {
                  return <option>{techDetails.name}</option>;
                })}
              </Form.Select>
              <Form.Label>Work Order Number</Form.Label>
              <Form.Input></Form.Input>
              <Form.Label>Length of Job</Form.Label>
              <Form.Select>
                {timeCell.map((timeDetails) => {
                  return <option>{timeDetails}</option>;
                })}
              </Form.Select>
            </Form.Control>
          </Form.Field>
        </Modal.Content>
      </Modal>
      <br></br>
    </>
  );
}
