import { React } from "react";
import { TechGrid } from "./TechGrid";
import { CustomDragLayer } from "./CustomDragLayer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import TimeIntervals from "./TimeIntervals";
import { Columns } from "react-bulma-components";

export const DragAndDrop = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <Columns>
        <Columns.Column size={12}>
          <TechGrid snapToGrid={true} />
        </Columns.Column>
      </Columns>
      <CustomDragLayer snapToGrid={true} />
    </DndProvider>
  );
};
