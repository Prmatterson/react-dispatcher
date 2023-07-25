import update from "immutability-helper";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { DraggableBox } from "./DraggableBox";
import { ItemTypes } from "../constants/ItemTypes";
import { snapToGrid as doSnapToGrid } from "../utils/snapToGrid";
import { Columns } from "react-bulma-components";

export const techs = [
  { name: "Justin", number: 13 },
  { name: "Colin", number: 144 },
  { name: "Luke", number: 166 },
];

export const timeCell = ["Time"];
const startTime = 8.0;
const endTime = 16.5;
for (let i = startTime; i < endTime - 0.1; i += 0.1) {
  timeCell.push(<div>{i.toFixed(1)}</div>);
}

export const TechGrid = ({ snapToGrid, unassignedJobs }) => {

  const unassignedJobsArray = unassignedJobs.unassignedJobs;
  console.log("UnassignedJobsArray in TechGrid", unassignedJobsArray);

  const [boxes, setBoxes] = useState([]);

  const jobBoxes = unassignedJobsArray.map(
    (jobData) =>
      jobData = {
        top: 1,
        left: 1,
        width: 1000 / techs.length,
        workOrderNumber: jobData.workOrderNumber,
        customerName: jobData.customerName,
        jobDescription: jobData.jobDescription,
        height: jobData.jobLength,
        promiseTime: jobData.promiseTime,
      });

  console.log("jobBoxes", jobBoxes)


  console.log("Boxes", boxes);

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

  // The below renders the draggable objects, e.g. the style determines width, border, etc.
  return (
    <div ref={drop}>
      <Columns>
        <Columns.Column
          style={{
            border: "1px solid grey",
            margin: "1px",
            padding: "1px",
          }}
        >
          {boxes.map((boxData, index) => (
            <DraggableBox key={index} id={index} {...boxData} />
          ))}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Columns.Column>
      </Columns>
      <br></br>
      <br></br>
      <Columns>
        <Columns.Column style={{ textAlign: "center" }} size={1}>
          {timeCell}
        </Columns.Column>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "center",
            width: "83%",
          }}
        >
          {techs.map((techDetails) => {
            return (
              <Columns.Column
                key={techs.id}
                style={{
                  border: "1px solid grey",
                  margin: "1px",
                  padding: "1px",
                }}
              >
                {techDetails.name}
              </Columns.Column>
            );
          })}
        </div>
        <Columns.Column style={{ textAlign: "center" }} size={1}>
          {timeCell}
        </Columns.Column>
      </Columns>
    </div>
  );
};
