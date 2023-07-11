import { useState } from "react";
import { DragAndDropLayer } from "./DragAndDropLayer";
import { Columns } from "react-bulma-components";
import Header from "./Header";
import JobEditButtons from "./JobEditButtons";
import { AddJobModal } from "../components/modals/AddJobModal";
import { DeleteUnassignedJobModal } from "../components/modals/DeleteUnassignedjobModal";

export function TechGridContainer() {
  const [showAddJobModal, setShowAddJobModal] = useState(false);
  const [showDeleteUnassignedJobModal, setShowDeleteUnassignedJobModal] =
    useState(false);
  const [allTechJobs, setAllTechJobs] = useState([]); // Array that holds all jobs, with each subcategory being a separate array within it
  const [unassignedJobs, setUnassignedJobs] = useState([]);
  // const [dispatchedJobs, setDispatchedJobs] = useState([]);

  console.log(unassignedJobs);


  return (
    <div>
      <Columns className="ml-6 mt-3">
        <Columns.Column>
          <Header />
          <JobEditButtons
            setShowAddJobModal={setShowAddJobModal}
            setShowDeleteUnassignedJobModal={setShowDeleteUnassignedJobModal}
          />
          <AddJobModal
            addNewJob={setUnassignedJobs}
            unassignedJobs={unassignedJobs}
            show={showAddJobModal}
            setShow={setShowAddJobModal}
          />
          <DeleteUnassignedJobModal
            deleteJob={setUnassignedJobs}
            unassignedJobs={unassignedJobs}
            show={showDeleteUnassignedJobModal}
            setShow={setShowDeleteUnassignedJobModal}
          />
          <Columns>
            <Columns.Column size={12}>
              <DragAndDropLayer
                allTechJobs={allTechJobs}
                setAllTechJobs={setAllTechJobs}
              />
            </Columns.Column>
          </Columns>
        </Columns.Column>
      </Columns>
    </div>
  );
}
