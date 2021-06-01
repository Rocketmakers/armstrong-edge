import * as React from "react";
import { Form, TextInput, useValidatedForm } from "@rocketmakers/armstrong-edge";
import { MemoryServer } from "../../servers/memory";
import { IValidationError } from "@rocketmakers/armstrong-edge/dist/hooks/form";
import { validation } from "./validation";

export const ValidatedForm: React.FC = () => {
  // const validationErrors: IValidationError[] = [
  //   {
  //     key: 'line1',
  //     message: 'error'
  //   }
  // ];
  const { formProp, formState, getFormData } = Form.use<MemoryServer.IUserAddress>(
    {
      line1: undefined,
      line2: undefined,
      city: undefined,
      postcode: undefined,
    },
    {}
  );
  const { validationErrors } = useValidatedForm(validation, formState);

  return (
    <form>
      <fieldset>
        <h2>Address</h2>
        <label htmlFor="line1">line 1</label>
        <TextInput bind={formProp("line1").bind()} />
        <label htmlFor="line2">line 2</label>
        <TextInput bind={formProp("line2").bind()} />
        <label htmlFor="city">city</label>
        <TextInput bind={formProp("city").bind()} />
        <label htmlFor="postcode">postcode</label>
        <TextInput bind={formProp("postcode").bind()} />
        {validationErrors?.map(error => (
          <>
            <div>{error.key}</div>
            <div>{error.message}</div>
          </>
        ))}
      </fieldset>
    </form>
  )
};