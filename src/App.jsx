import Header from "./components/Header";
import TechGridBody from "./components/TechGridBody";
import TimeIntervals from "./components/TimeIntervals";
import React from "react";
import { Columns } from "react-bulma-components";

export default function App() {
  return (
    <div>
      <Columns>
        <Columns.Column>
          <Header />
          <Columns>
            <Columns.Column offset="1" size={2}>
              <TimeIntervals />
            </Columns.Column>
            <Columns.Column size={11}>
              <TechGridBody/>
            </Columns.Column>
          </Columns>
        </Columns.Column>
      </Columns>
    </div>
  );
}
