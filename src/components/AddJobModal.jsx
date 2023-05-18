import { Form } from "react-bulma-components";
import { techs } from "./drag-and-drop/TechGrid";

export default function AddJobModal() {
  return (
    <Form.Field>
      <Form.Label>Tech Name</Form.Label>
      <Form.Control>
      <Form.Select>
        {techs.map((techDetails) => {
          return (
           <option>{techDetails.name}</option>
          );
        })}
        </Form.Select>
        <Form.Select>
        {techs.map((techDetails) => {
          return (
           <option>{techDetails.number}</option>
          );
        })}
        </Form.Select>
      </Form.Control>
    </Form.Field>
  );
}
