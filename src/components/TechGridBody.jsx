import React from "react";
import { Content } from "react-bulma-components";

export default function TechGridBody() {
  const techGrid = []

  const techNames = ["Justin", "Nick", "Blake"];
  
  const numberOfTechs = techNames.length;
//  In future, may have an option in a settings menu to change maxNumberOfRows, likely would be an exported function which would be imported here
  const maxNumberOfRows = 85;
  const maxNumberOfColumns = numberOfTechs;

  // Need to make this work to show appropriate content
  const techGridFunction = () => {
    for (let i = 0; i < maxNumberOfRows; i += 1) {
      for (let j = 0; j < maxNumberOfColumns; j += 1) {
        techGrid.push(j)
      }
      techGrid.push(i)
    }
  };

  return (
    <Content>
      {techGridFunction}
      {console.log(maxNumberOfRows)}
      {console.log(maxNumberOfColumns)}
    </Content>
  );
}
