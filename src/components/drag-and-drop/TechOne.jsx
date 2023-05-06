import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { DraggableBox } from './DraggableBox';
import { ItemTypes } from './ItemTypes';
import { snapToGrid as doSnapToGrid } from './snapToGrid';

const styles = {
  width: '100%',
  height: 2030,
  border: '1px solid black',
  position: 'relative',
  marginTop: '30px',
};
export const TechOne = ({ snapToGrid }) => {
  const [boxes, setBoxes] = useState([
    { top: 24, left: 0, title: 'Drag me around', height: '200px' },
    { top: 0, left: 0, title: 'Drag me around', height: '50px' },
  ]);

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

/** Styling properties applied to each square element */
const cellStyle = { width: '12.5%', height: '4%' }
  // This is where the draggable items are rendered

function renderCell(i) {
    return (
      <div key={i} style={cellStyle}>
      </div>)}

const squares = []
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderCell(i))}

    // The below renders the draggable surface, e.g. the style determines width, border, etc.
  return (
    <div ref={drop} style={styles}>
      {boxes.map((boxData, index) => (
        <DraggableBox key={index} id={index} {...boxData} />
      ))}
    </div>
  );
};
