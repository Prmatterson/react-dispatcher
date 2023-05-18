import { React } from "react";
import { Box, Button } from "react-bulma-components";
import AddJobModal from "./AddJobModal";

export default function NavButtons() {

  return (
    <>
      <Box>
        <Button.Group>
          <Button onClick={AddJobModal()}>Add Job</Button>
        </Button.Group>
      </Box>
      <AddJobModal />
      <br></br>
    </>
  );
}
