import update from "immutability-helper";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { DraggableBox } from "./DraggableBox";
import { ItemTypes } from "./ItemTypes";
import { snapToGrid as doSnapToGrid } from "./snapToGrid";

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

  // This determines how the boxes move
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

  // This determines how the boxes drop
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

// Array of Techs (will eventually determine number of columns and header of grid body)
  const techs = [
    'tech1',
    'tech2',
    'tech3',
  ]
  
  // Variables for creating grid framework by tech (x-axis) and time (y-axis)
  const gridCell = [];
  const techCount = techs.length;
  console.log(techCount)

  // For loop for creating grid framework by tech (x-axis) and time (y-axis)
  for (let x = 0; x <= techCount * 82; x++) {
    gridCell.push(x);
  }

  // The below renders the draggable objects, e.g. the style determines width, border, etc.
  return (
    <div ref={drop} style={styles}>
      {gridCell}
      {boxes.map((boxData, index) => (
        <DraggableBox key={index} id={index} {...boxData} />
      ))}
    </div>
  );
};
