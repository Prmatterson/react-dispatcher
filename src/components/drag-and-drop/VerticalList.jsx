import { useCallback, useState } from 'react';
import { Container } from './Container';
import { CustomDragLayer } from './CustomDragLayer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export const VerticalList = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container snapToGrid={true} />
      <CustomDragLayer snapToGrid={true} />
    </DndProvider>
  );
};
