import React from "react";
import { Content, Columns } from 'react-bulma-components'

export default function TimeIntervals() {

  // Function to create Y-axis showing time intervals
  let cells = [];
  let cellsLimit = 16.6
  for (let i = 8.2; i < cellsLimit; i += 0.1) {
    cells.push(i.toFixed(1))
  }

  return (
    <>
          <Columns vertical size={1}>
            <Content>{cells}</Content> 
          </Columns>
    </>
  );
}
