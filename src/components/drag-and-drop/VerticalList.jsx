import { React } from "react";
import { TechGrid } from "./TechGrid";
import { CustomDragLayer } from "./CustomDragLayer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import TimeIntervals from "./TimeIntervals";
import { Columns } from "react-bulma-components";

export const VerticalList = () => {

  // const styles = {
  //   width: "100%",
  //   height: 2150,
  //   border: "1px solid black",
  //   position: "relative",
  //   marginTop: "30px",
  //   marginBottom: "30px",
  // };

  return (
    <DndProvider backend={HTML5Backend}>
      <Columns>
        {/* <Columns.Column size={0}> */}
          {/* <TimeIntervals /> */}
        {/* </Columns.Column> */}
        <Columns.Column size={12}>
          <TechGrid snapToGrid={true} />
        </Columns.Column>
      </Columns>
      <CustomDragLayer snapToGrid={true} />
    </DndProvider>
  );
};
