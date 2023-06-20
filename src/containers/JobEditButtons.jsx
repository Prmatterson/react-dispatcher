import { React, useState } from "react";
import { Box, Button } from "react-bulma-components";
import { AddJobModal } from "../components/modals/AddJobModal";
// import { techs } from "./drag-and-drop/TechGrid";

export default function JobEditButtons(formData, setFormData) {

  // using state to open/close Modal
  const [show, setShow] = useState(false);
  const handleOpen = () => {setShow(true)};

  return (
    <>
      {/* Button in toolbar that opens modal */}
      <Box>
        <Button.Group>
          <Button onClick={handleOpen}>Add Job</Button>
        </Button.Group>
      </Box>
      <AddJobModal formData={formData} setFormData={setFormData} show={show} setShow={setShow}/>
      <br></br>
    </>
  );
}
