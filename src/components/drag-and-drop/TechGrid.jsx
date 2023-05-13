import update from "immutability-helper";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { DraggableBox } from "./DraggableBox";
import { ItemTypes } from "./ItemTypes";
import { snapToGrid as doSnapToGrid } from "./snapToGrid";
import { Columns } from "react-bulma-components";

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

  // Time Array
  const timeCell = ["Time"];
  const startTime = 8.0;
  const endTime = 16.5;
  for (let i = startTime; i < endTime - 0.1; i += 0.1) {
    timeCell.push(<div>{i.toFixed(1)}</div>);
  }

  // Job/Tech Columns Array
  const techs = ["Justin", "Colin", "Luke"];
  const jobColumns = [];
  for (let i = 0; i < techs.length; i += 1) {
    jobColumns.push(techs[i]);
  }

  // The below renders the draggable objects, e.g. the style determines width, border, etc.
  return (
    <div ref={drop}>
      <Columns>
        <Columns.Column size={1}>{timeCell}</Columns.Column>
        <Columns.Column size={10}>{jobColumns}</Columns.Column>
        <Columns.Column size={1}>{timeCell}</Columns.Column>
      </Columns>
      <Columns>
        {boxes.map((boxData, index) => (
          <DraggableBox key={index} id={index} {...boxData} />
        ))}
      </Columns>
    </div>
  );
};
