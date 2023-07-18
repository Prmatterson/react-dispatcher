import { Box, Button } from "react-bulma-components";
// import { techs } from "./drag-and-drop/TechGrid";

export default function JobEditButtons({
  setShowAddUnassignedJobModal,
  setShowDeleteUnassignedJobModal,
  setShowAddDispatchedJobModal,
}) {
  const handleOpenAddUnassignedJob = () => setShowAddUnassignedJobModal(true);
  const handleOpenDeleteUnassignedJob = () =>
    setShowDeleteUnassignedJobModal(true);
  const handleOpenAddDispatchedJob = () => setShowAddDispatchedJobModal(true);

  return (
    <>
      {/* Button in toolbar that opens modal */}
      <Box>
        <Button.Group>
          <Button onClick={handleOpenAddUnassignedJob}>Add Unassigned Job</Button>
          <Button onClick={handleOpenDeleteUnassignedJob}>Delete Unassigned Job</Button>
          <Button onClick={handleOpenAddDispatchedJob}>Add Dispatched Job</Button>
        </Button.Group>
      </Box>
      <br></br>
    </>
  );
}
