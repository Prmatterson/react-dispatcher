import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { DraggableBox } from './DraggableBox';
import { ItemTypes } from './ItemTypes';
import { snapToGrid as doSnapToGrid } from './snapToGrid';
const styles = {
  width: 150,
  height: 2075,
  border: '1px solid black',
  position: 'relative',
};
export const Container = ({ snapToGrid }) => {
  const [boxes, setBoxes] = useState({
    a: { top: 20, left: 0, title: 'Drag me around' },
    b: { top: 180, left: 0, title: 'Drag me around' },
  });
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        if (snapToGrid) {
          [left, top] = doSnapToGrid(left, top);
        }
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );
  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => (
        <DraggableBox key={key} id={key} {...boxes[key]} />
      ))}
    </div>
  );
};
