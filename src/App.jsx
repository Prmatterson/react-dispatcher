import Header from "./components/Header";
import TechGridBody from "./components/TechGridBody";
import TimeIntervals from "./components/TimeIntervals";
import React from "react";
import { Columns } from "react-bulma-components";

export default function App() {
  return (
    <div>
      <Columns class='ml-6 mt-3'>
        <Columns.Column>
          <Header />
          <Columns>
            <Columns.Column class='mr-6' size={1}>
              <TimeIntervals />
            </Columns.Column>
            <Columns.Column flex size={11}>
              <TechGridBody/>
            </Columns.Column>
          </Columns>
        </Columns.Column>
      </Columns>
    </div>
  );
}
