import { Form } from "react-bulma-components";
import { Controller } from "react-hook-form";

export function ControlledFormInputText({
  label,
  control,
  inputName,
  required = false,
  rules,
}) {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Controller
        control={control}
        name={inputName}
        rules={{ required: required, ...rules }}
        render={({ onChange, value }) => (
          <Form.Input
            value={value}
            type="text"
            onChange={(e) => {onChange(e.target.value)}}
          ></Form.Input>
        )}
      />
    </>
  );
}
