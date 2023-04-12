import React from "react";
import 'bulma/css/bulma.min.css';
import { Heading } from 'react-bulma-components';

export default function Header() {
  return (
    <>
      <Heading>
        Dispatcher
      </Heading>
      <Heading subtitle>
        The best dispatching program you've ever used
      </Heading>
    </>
  );
}
