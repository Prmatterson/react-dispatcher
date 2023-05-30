import React from "react";
import { DragAndDrop } from "./components/drag-and-drop/DragAndDrop";
import { Columns } from "react-bulma-components";
import Header from "./components/Header";
import Buttons from "./components/Buttons"

export default function App() {
  return (
    <div>
      <Columns class='ml-6 mt-3'>
        <Columns.Column>
          <Header />
          <Buttons />
          <Columns>
            <Columns.Column size={12}>
              <DragAndDrop />
            </Columns.Column>
          </Columns>
        </Columns.Column>
      </Columns>
    </div>
  );
}
