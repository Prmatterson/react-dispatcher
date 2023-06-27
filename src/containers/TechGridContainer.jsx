import { useState } from "react";
import { DragAndDropLayer } from "./DragAndDropLayer";
import { Columns } from "react-bulma-components";
import Header from "./Header";
import JobEditButtons from "./JobEditButtons"
import { AddJobModal } from "../components/modals/AddJobModal";

export function TechGridContainer() {
  const [formData, setFormData] = useState([]);
    const [showAddJobModal, setShowAddJobModal] = useState(false);

  console.log(formData)

  return (
    <div>
      <Columns class='ml-6 mt-3'>
        <Columns.Column>
          <Header />
          <JobEditButtons setShowAddJobModal={setShowAddJobModal}/>
          <AddJobModal formData={formData} setFormData={setFormData} showAddJobModal={showAddJobModal} setShowAddJobModal={setShowAddJobModal}/>
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
