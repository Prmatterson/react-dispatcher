import React from "react";
import "bulma/css/bulma.min.css";
import { Heading } from "react-bulma-components";

export default function Header() {
  return (
    <>
      <Heading textAlign="center">Dispatcher</Heading>
      <Heading subtitle textAlign="center">
        The best dispatching program you've ever used
      </Heading>
    </>
  );
}
