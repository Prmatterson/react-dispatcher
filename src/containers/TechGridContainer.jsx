import { useState } from "react";
import { DragAndDropLayer } from "./DragAndDropLayer";
import { Columns } from "react-bulma-components";
import Header from "./Header";
import JobEditButtons from "./JobEditButtons"

export function TechGridContainer() {
  const [formData, setFormData] = useState([]);
  console.log(formData)

  return (
    <div>
      <Columns class='ml-6 mt-3'>
        <Columns.Column>
          <Header />
          <JobEditButtons formData={formData} setFormData={setFormData}/>
          <Columns>
            <Columns.Column size={12}>
              <DragAndDropLayer formData={formData} setFormData={setFormData}/>
            </Columns.Column>
          </Columns>
        </Columns.Column>
      </Columns>
    </div>
  );
}
