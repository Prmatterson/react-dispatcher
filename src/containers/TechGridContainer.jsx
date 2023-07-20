import { useState } from "react";
import { DragAndDropLayer } from "./DragAndDropLayer";
import { Columns } from "react-bulma-components";
import Header from "./Header";
import JobEditButtons from "./JobEditButtons";
import { AddUnassignedJobModal } from "../components/modals/AddUnassignedJobModal";
import { DeleteUnassignedJobModal } from "../components/modals/DeleteUnassignedjobModal";
import { AddDispatchedJobModal } from "../components/modals/AddDispatchedJobModal";

export function TechGridContainer() {
  const [showAddUnassignedJobModal, setShowAddUnassignedJobModal] =
    useState(false);
  const [showDeleteUnassignedJobModal, setShowDeleteUnassignedJobModal] =
    useState(false);
  const [showAddDispatchedJobModal, setShowAddDispatchedJobModal] =
    useState(false);

  const [unassignedJobs, setUnassignedJobs] = useState([]);
  // const [allTechJobs, setAllTechJobs] = useState([{ ...unassignedJobs }]); // Array that holds all jobs, with each subcategory being a separate array within it

  const createUnassignedJob = (newJob) => {
    setUnassignedJobs([...unassignedJobs, newJob]);
  };

  const deleteUnassignedJob = (jobToDeleteWorkOrderNumber) => {
    setUnassignedJobs(unassignedJobs.filter((job => job.workOrderNumber != jobToDeleteWorkOrderNumber)));
  };

  return (
    <div>
      <Columns className="ml-6 mt-3">
        <Columns.Column>
          <Header />
          <JobEditButtons
            setShowAddUnassignedJobModal={setShowAddUnassignedJobModal}
            setShowDeleteUnassignedJobModal={setShowDeleteUnassignedJobModal}
            setShowAddDispatchedJobModal={setShowAddDispatchedJobModal}
          />
          <AddUnassignedJobModal
            createUnassignedJob={createUnassignedJob}
            addNewJob={setUnassignedJobs}
            unassignedJobs={unassignedJobs}
            show={showAddUnassignedJobModal}
            setShow={setShowAddUnassignedJobModal}
          />
          <DeleteUnassignedJobModal
            deleteUnassignedJob={deleteUnassignedJob}
            show={showDeleteUnassignedJobModal}
            setShow={setShowDeleteUnassignedJobModal}
          />
          <AddDispatchedJobModal
            show={showAddDispatchedJobModal}
            setShow={setShowAddDispatchedJobModal}
          />
          <Columns>
            <Columns.Column size={12}>
              <DragAndDropLayer
                // allTechJobs={allTechJobs}
                // setAllTechJobs={setAllTechJobs}
                unassignedJobs={unassignedJobs}
              />
            </Columns.Column>
          </Columns>
        </Columns.Column>
      </Columns>
      {console.log("Unassigned Jobs", unassignedJobs)}
    </div>
  );
}
