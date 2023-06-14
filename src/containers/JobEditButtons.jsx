import { React, useState } from "react";
import { Box, Button } from "react-bulma-components";
import { AddJobModal } from "../components/modals/AddJobModal";
// import { techs } from "./drag-and-drop/TechGrid";

export default function JobEditButtons({setAddJobData}) {


  // using state to open/close Modal
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      {/* Button in toolbar that opens modal */}
      <Box>
        <Button.Group>
          <Button isOpen={isOpen} onClick={handleOpen}>Add Job</Button>
        </Button.Group>
      </Box>
      <AddJobModal />
      <br></br>
    </>
  );
}
