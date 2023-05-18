import { Form } from "react-bulma-components";
import { techs, timeCell } from "./drag-and-drop/TechGrid";

export default function AddJobModal() {
  return (
    <Form.Field>
      <Form.Label>Tech Name</Form.Label>
      <Form.Control size={2}>
        <Form.Select>
          {techs.map((techDetails) => {
            return <option>{techDetails.name}</option>;
          })}
        </Form.Select>
        <Form.Label>Work Order Number</Form.Label>
        <Form.Input></Form.Input>
        <Form.Label>Length of Job</Form.Label>
        <Form.Select>
          {timeCell.map((timeDetails) => {
            return <option>{timeDetails}</option>;
          })}
        </Form.Select>
      </Form.Control>
    </Form.Field>
  );
}
