import Header from "./components/Header";
import TechGrid from "./components/TechGrid";
import TimeIntervals from "./components/TimeIntervals";
import React from "react";
import { Tile } from "react-bulma-components";

export default function App() {
  return (
    <div>
      <Header />
      <Tile kind="ancestor">
        <Tile kind="parent" size={1}>
          <Tile kind="child">
            <TimeIntervals />
          </Tile>
        </Tile>
        <Tile>
          <Tile kind="parent" size={11}>
            <Tile kind="child">
              <Tile>
                <TechGrid />
              </Tile>
            </Tile>
          </Tile>
        </Tile>
      </Tile>
    </div>
  );
}
