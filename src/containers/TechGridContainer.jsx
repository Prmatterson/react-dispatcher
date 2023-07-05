import { useState } from "react";
import { DragAndDropLayer } from "./DragAndDropLayer";
import { Columns } from "react-bulma-components";
import Header from "./Header";
import JobEditButtons from "./JobEditButtons";
import { AddJobModal } from "../components/modals/AddJobModal";

export function TechGridContainer() {
  const [show, setShow] = useState(false);
  const [allTechJobs, setAllTechJobs] = useState([]);
  const [unassignedJobs, setUnassignedJobs] = useState([]);
  // const [dispatchedJobs, setDispatchedJobs] = useState([]);

  console.log(unassignedJobs);
  // console.log(dispatchedJobs);
  // console.log(setDispatchedJobs);

  return (
    <div>
      <Columns className="ml-6 mt-3">
        <Columns.Column>
          <Header />
          <JobEditButtons setShow={setShow} />
          <AddJobModal
            addNewJob={setUnassignedJobs}
            unassignedJobs={unassignedJobs}
            show={show}
            setShow={setShow}
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
