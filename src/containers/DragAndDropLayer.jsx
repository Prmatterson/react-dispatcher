import { React } from "react";
import { TechGrid } from "./TechGrid";
import { CustomDragLayer } from "./CustomDragLayer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Columns } from "react-bulma-components";

export const DragAndDropLayer = ( addJobData ) => {

  return (
    <DndProvider backend={HTML5Backend}>
      <Columns>
        <Columns.Column size={12}>
          <TechGrid snapToGrid={true} addJobData={addJobData}/>
        </Columns.Column>
      </Columns>
      <CustomDragLayer snapToGrid={true} addJobData={addJobData} />
    </DndProvider>
  );
};
