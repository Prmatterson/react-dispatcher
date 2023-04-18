import React from "react";
import { Content, Columns } from 'react-bulma-components'

export default function TimeIntervals() {

  // Function to create Y-axis showing time intervals
  const cells = [];
  const cellsLimit = 16.4
  
  for (let i = 8.0; i < cellsLimit; i += 0.1) {
    cells.push(i.toFixed(1))
  } 

  const cellsMap = cells.map((time) => (
    <div>
      {time}
    </div>
  ))
  // output = array[0].map((_, colIndex) => array.map(row => row[colIndex]));
  return (
    <>
          <Columns>
            <Content>
              {cellsMap}
            </Content> 
          </Columns>
    </>
  );
}
