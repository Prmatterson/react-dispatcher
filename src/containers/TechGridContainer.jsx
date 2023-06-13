import { React } from "react";
import { DragAndDropLayer } from "./DragAndDropLayer";
import { Columns } from "react-bulma-components";
import Header from "./Header";
import JobEditButtons from "./JobEditButtons"

export function TechGridContainer() {

  return (
    <div>
      <Columns class='ml-6 mt-3'>
        <Columns.Column>
          <Header />
          <JobEditButtons />
          <Columns>
            <Columns.Column size={12}>
              <DragAndDropLayer />
            </Columns.Column>
          </Columns>
        </Columns.Column>
      </Columns>
    </div>
  );
}
