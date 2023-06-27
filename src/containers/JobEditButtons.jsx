import { Box, Button } from "react-bulma-components";
// import { techs } from "./drag-and-drop/TechGrid";

export default function JobEditButtons({ setShow }) {
  const handleOpen = () => setShow(true);

  return (
    <>
      {/* Button in toolbar that opens modal */}
      <Box>
        <Button.Group>
          <Button onClick={handleOpen}>Add Job</Button>
        </Button.Group>
      </Box>
      <br></br>
    </>
  );
}
