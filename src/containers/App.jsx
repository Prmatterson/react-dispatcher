import { React, useState } from "react";
import { DragAndDrop } from "./DragAndDrop";
import { Columns } from "react-bulma-components";
import Header from "./Header";
import Buttons from "./Buttons"

export default function App() {

  const [addJobData, setAddJobData] = useState([])

  return (
    <div>
      <Columns class='ml-6 mt-3'>
        <Columns.Column>
          <Header />
          <Buttons setAddJobData={setAddJobData}/>
          <Columns>
            <Columns.Column size={12}>
              <DragAndDrop addJobData={addJobData}/>
            </Columns.Column>
          </Columns>
        </Columns.Column>
      </Columns>
    </div>
  );
}
