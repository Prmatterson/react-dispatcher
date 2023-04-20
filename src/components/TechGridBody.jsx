import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function TechGridBody() {
  return (
    <DragDropContext>
      <Droppable droppableId="droppable-1">
        <Draggable>Hello World</Draggable>
      </Droppable>
    </DragDropContext>
  );
}
