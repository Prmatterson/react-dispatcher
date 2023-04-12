import React from "react";
import { Content, Tile } from 'react-bulma-components'

export default function TimeIntervals() {

  // Function to create Y-axis showing time intervals
  // let cells = [];
  // let cellsLimit = 16.6
  // for (let i = 8.2; i < cellsLimit; i + 0.1) {
  //   console.log(i)
  //   cells.push(i)
  // }

  return (
    <>
      <Tile kind="ancestor">
        <Tile kind="parent" vertical>
          <Content> 
            cells
          </Content>
          <Tile kind='child'>
            Test
          </Tile>
          <Tile kind='child'>
            Test 2
          </Tile>
        </Tile>
      </Tile>
    </>
  );
}
