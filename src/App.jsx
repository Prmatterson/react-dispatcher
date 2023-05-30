import Header from "./components/Header";
import { DragAndDrop } from "./components/drag-and-drop/DragAndDrop";
import React from "react";
import { Columns } from "react-bulma-components";

export default function App() {
  return (
    <div>
      <Columns class='ml-6 mt-3'>
        <Columns.Column>
          <Header />
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
