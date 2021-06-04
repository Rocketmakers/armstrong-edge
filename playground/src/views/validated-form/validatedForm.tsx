import * as React from "react";
import { Form, InputValidator, NumberInput, SwitchInput, TextInput, useValidatedForm, Validator } from "@rocketmakers/armstrong-edge";
import { MemoryServer } from "../../servers/memory";
import { Button } from "@rocketmakers/armstrong";

export const validation: InputValidator[] = [
  {
    key: ['line1'],
    validators: [
      {
        validate: Validator.required(),
        message: 'Please enter a value'
      }
    ],
  },
  {
    key: ['city'],
    validators: [
      {
        validate: Validator.required(),
        message: 'Please enter a value'
      }
    ],
  },
  {
    key: ['postcode'],
    validators: [
      {
        validate: Validator.required(),
        message: 'Please enter a value'
      },
      {
        validate: Validator.pattern(/^[a-zA-Z]{1,2}\d[a-zA-Z\d]?\s*\d[a-zA-Z]{2}$/),
        message: 'Please enter a valid postcode'
      }
    ],
  },
  {
    key: ['garageWidth'],
    validators: [
      {
        validate: Validator.requiredWhenOtherFieldHasValues<ExtendedAddress>(
          ['propertyHasAGarage'],
          [true]
        ),
        message: 'Please enter a value'
      }
    ],
  },
];

interface ExtendedAddress extends MemoryServer.IUserAddress {
  propertyHasAGarage: boolean;
  garageWidth?: number;
}

export const ValidatedForm: React.FC = () => {
  const { formProp, formState } = Form.use<ExtendedAddress>(
    {
      line1: undefined,
      line2: undefined,
      city: undefined,
      postcode: undefined,
      propertyHasAGarage: false,
      garageWidth: undefined
    },
    {}
  );
  const { formIsValid, showAllValidation } = useValidatedForm(validation, formState, formProp);

  return (
    <>
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
          <label htmlFor="postcode">Does the property have a garage?</label>
          <SwitchInput bind={formProp("propertyHasAGarage").bind()} />
          {formProp('propertyHasAGarage').get() === true ?
            <>
              <label htmlFor="postcode">garage width</label>
              <NumberInput bind={formProp("garageWidth").bind()} />
            </>
            : null
          }
          <div>
            form is valid: {formIsValid ? 'true' : 'false'}
          </div>
          <div>
            <Button onClick={showAllValidation}>Run validation on the form</Button>
          </div>
        </fieldset>
      </form>
    </>
  )
};