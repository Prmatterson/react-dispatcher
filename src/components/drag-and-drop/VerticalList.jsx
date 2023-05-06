import { React } from "react";
import { TechOne } from "./TechOne";
import { TechTwo } from "./TechTwo";
import { CustomDragLayer } from "./CustomDragLayer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const VerticalList = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div class="columns">
        <div class="column">
          <TechOne snapToGrid={true} />
          <CustomDragLayer snapToGrid={true} />
        </div>
        <div class="column">
          <TechTwo snapToGrid={true} />
          <CustomDragLayer snapToGrid={true} />
        </div>
      </div>
    </DndProvider>
  );
};
