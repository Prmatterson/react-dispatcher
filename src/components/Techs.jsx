import React from "react";
import 'bulma/css/bulma.min.css';

export default function Techs() {

const techs = [
    'tech1',
    'tech2',
    'tech3',
]

const techCount = techs.length;
console.log(techCount)

  return (
    <>
      {techs}
    </>
  );
}
