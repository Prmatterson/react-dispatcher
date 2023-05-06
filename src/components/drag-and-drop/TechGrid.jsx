import update from "immutability-helper";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { DraggableBox } from "./DraggableBox";
import { ItemTypes } from "./ItemTypes";
import { snapToGrid as doSnapToGrid } from "./snapToGrid";
import { Cell } from './Cell';

const styles = {
  width: "100%",
  height: 2030,
  border: "1px solid black",
  position: "relative",
  marginTop: "30px",
};
export const TechGrid = ({ snapToGrid }) => {
  // This creates each individual job/box in the grid, will eventually need a function to create them
  const [boxes, setBoxes] = useState([
    { top: 24, left: 0, title: "Drag me around", height: "200px" },
    { top: 0, left: 0, title: "Drag me around", height: "50px" },
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

  function renderCells() {
    const cellStyle = { width: '12.5%', height: '4%' }
      return (
        <div style={cellStyle}>
          <Cell />
        </div>)}

  // The below renders the draggable objects, e.g. the style determines width, border, etc.
  return (
    <div ref={drop} style={styles}>
      {renderCells}
      {boxes.map((boxData, index) => (
        <DraggableBox key={index} id={index} {...boxData} />
      ))}
    </div>
  );
};
