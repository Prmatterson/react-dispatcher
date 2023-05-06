import { React } from "react";
import { TechOne } from "./TechOne";
import { CustomDragLayer } from "./CustomDragLayer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const VerticalList = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TechOne snapToGrid={true} />
      <CustomDragLayer snapToGrid={true} />
    </DndProvider>
  );
};
