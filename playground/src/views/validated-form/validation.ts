import { InputValidator, Validator } from "@rocketmakers/armstrong-edge";

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
];