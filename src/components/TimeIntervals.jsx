import React from "react";
import { Content } from "react-bulma-components";

export default function TimeIntervals() {
  // Function to create Y-axis showing time intervals
  const cells = ["Time"];
  const cellsLimit = 16.4;

  for (let i = 8.0; i < cellsLimit; i += 0.1) {
    cells.push(i.toFixed(1));
  }

  const cellsMap = cells.map((time) => <div>{time}</div>);

  return (
    <>
      <Content>{cellsMap}</Content>
    </>
  );
}
