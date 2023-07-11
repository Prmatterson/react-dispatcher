import { Box, Button } from "react-bulma-components";
// import { techs } from "./drag-and-drop/TechGrid";

export default function JobEditButtons({ setShowAddJobModal, setShowDeleteUnassignedJobModal }) {
  const handleOpenAddJob = () => setShowAddJobModal(true);
  const handleOpenDeleteUnassignedJob = () => setShowDeleteUnassignedJobModal(true);

  return (
    <>
      {/* Button in toolbar that opens modal */}
      <Box>
        <Button.Group>
          <Button onClick={handleOpenAddJob}>Add Job</Button>
          <Button onClick={handleOpenDeleteUnassignedJob}>Delete Job</Button>
        </Button.Group>
      </Box>
      <br></br>
    </>
  );
}
