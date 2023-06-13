import { React, useState } from "react";
import { Box, Button } from "react-bulma-components";
import { AddJobModal } from "../components/modals/AddJobModal";
// import { techs } from "./drag-and-drop/TechGrid";

export default function JobEditButtons(setAddJobData) {


  // using state to open/close Modal
  const [show, setShow] = useState(false);
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
      <AddJobModal />
      <br></br>
    </>
  );
}
