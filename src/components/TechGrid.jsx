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

export const TechGrid = ({ snapToGrid, formData }) => {
  // This creates each individual job/box in the grid, will eventually need a function to create the

  console.log(formData); // Need to map objects in array into function to create boxes

  const formDataArray = formData.formData

  formDataArray.map((object) => {
    const workOrderNumber = object.workOrderNumber;
    const customerName = object.customerName;
    const jobDescription = object.jobDescription;
    const jobLength = object.jobLength;

    console.log(workOrderNumber);
    console.log(customerName); 
    console.log(jobDescription); 
    console.log(jobLength);
  });

  console.log(formDataArray)
  console.log(typeof formDataArray)

  const { workOrderNumber, customerName, jobDescription, jobLength} = formDataArray
  console.log(workOrderNumber);
  console.log(customerName); 
  console.log(jobDescription); 
  console.log(jobLength);

  const [boxes, setBoxes] = useState([
    {
      top: 1,
      left: 1,
      width: 1000 / techs.Length,
      workOrderNumber: "workOrderNumber",
      customerName: "customerName",
      jobDescription: "jobDescription",
      height: "10",
    },
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

  // The below renders the draggable objects, e.g. the style determines width, border, etc.
  return (
    <div ref={drop}>
      <Columns>
        {boxes.map((boxData, index) => (
          <DraggableBox key={index} id={index} {...boxData} />
        ))}
      </Columns>
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
