import { React } from "react";
import { TechGrid } from "./TechGrid";
import { CustomDragLayer } from "./CustomDragLayer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TimeIntervals from "./TimeIntervals"

export const VerticalList = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TimeIntervals />
      <TechGrid snapToGrid={true} />
      <CustomDragLayer snapToGrid={true} />
    </DndProvider>
  );
};
