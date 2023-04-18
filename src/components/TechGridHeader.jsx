import React from "react";
import { Content } from "react-bulma-components";

export default function TechGridHeader() {

const headerArray = ["Time "]
const techName = []
const techTotal = 3

for (let i = 0; i < techTotal; i += 1) {
    techName.push(i + ' ')
}

headerArray.push(techName)


  return (
    <Content>
        {headerArray}
    </Content>
  );
}
