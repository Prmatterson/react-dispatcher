import React from "react";
import { Content } from "react-bulma-components";

export default function TimeIntervals() {
  // Function to create Y-axis showing time intervals
  const cells = [];
  const cellsLimit = 16.4;

  // Generates array of times from start to finish = "i" defines the start time, cellsLimit the end time
  for (let i = 8.0; i < cellsLimit; i += 0.1) {
    cells.push(i.toFixed(1));
  }

  // Maps function so it shows up vertically with each element on its own line
  // const cellsMap = cells.map((time) => <div>{time}</div>);

  return (
    <>
      <Content>{cellsMap}</Content>
    </>
  );
}
