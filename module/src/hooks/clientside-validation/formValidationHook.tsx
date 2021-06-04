
import * as React from 'react';
import { BindingTools, KeyChain, valueByKeyChain } from '../form';
import { InputState, InputValidator } from './ValidationTypes';

/**
 * Calculate the form validity. This needs to happen separately to user interaction on the form as errors are not shown until
 * the input has been touched.
 * @param dataBinder the form state
 * @param inputValidators  the form validators
 */
export function calculateFormValidity<T>(formState: T, inputValidators: InputValidator[]): boolean {
  for (const inputValidator of inputValidators) {
    for (const validator of inputValidator.validators) {
      if (!validator.validate(valueByKeyChain(formState, inputValidator.key), formState)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Converts a key chain to dot notation.
 * @param key the key chain to convert
 * @returns the key chain in dot notation
 */
function convertKeyChainToDotNotation(keyChain: KeyChain): string {
  return keyChain.filter((key) => !!key).join('.');
}

/**
 * Runs validation on the given input. This sets the error message to the first piece of validation that fails.
 * Otherwise this removes all errors if the input is valid
 * @param input input to test validity against
 * @param state the state of the form
 * @param formProp formProp
 */
function runValidationOnInput<TData>(input: InputValidator, state: TData, formProp: (...keyChain: KeyChain) => BindingTools<TData>) {
  const value = valueByKeyChain(state, input.key);

  formProp(...input.key).clearValidationErrors();
  for (const validator of input.validators) {
    if (!validator.validate(value, state)) {
      formProp(...input.key).addValidationError(validator.message);
      break;
    }
  }
};

/**
 * Hook to enable real time validation of an armstrong form. The form validation is defined in `inputValidators`, and
 * the form state in `state`. This returns an object containing the following:
 *  - `setTouched`: a method provided to tell when a form input control has been interacted with by the user. This must
 * be used on each input with validation. As an example:
 *
 * ```
 * <TextInput {...bind.text('city')} label="City" onBlur={setTouched} />
 * ```
 *
 *  - `formIsValid`: a boolean flag to denote if the form is valid or invalid. This doesn't rely on user interaction, so
 * is independant of error messages displayed on the form.
 *  - `validationErrors`: an array populated with the errors to display on the form. Should be passed to the `DataForm` component:
 *
 * ```
 * <DataForm validationResults={validationErrors} validationMode="both">
 * ```
 *
 * @param inputValidators form validation
 * @param dataBinder form state
 */
export function useValidatedForm<TData>(inputValidators: InputValidator[], state: TData, formProp: (...keyChain: KeyChain) => BindingTools<TData>) {
  // Use this to calculate if this is the first render. If it is, then don't run the validation useEffect as it'll show all of the validation errors prematurely.
  const firstRenderCheck = React.useRef(0);

  // Run validation on individual inputs whenever they change value.
  for (const inputValidator of inputValidators) {
    React.useEffect(() => {
      if (firstRenderCheck.current < inputValidators.length) {
        firstRenderCheck.current++;
        return;
      }
      runValidationOnInput(inputValidator, state, formProp);
    }, [valueByKeyChain(state, inputValidator.key)]);
  }

  // Display all validation error messages on the form
  function showAllValidation() {
    for (const inputValidator of inputValidators) {
      runValidationOnInput(inputValidator, state, formProp);
    }
  }

  const formIsValid = calculateFormValidity(state, inputValidators);

  // Everything to do with input state being touched below:
  const [inputStates, setInputStates] = React.useState<InputState[]>(
    inputValidators.map(input => ({
      key: input.key,
      touched: false,
    }))
  );

  const setTouched = (inputElement: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const inputStatesCopy = [...inputStates];
    const touchedInput = inputStatesCopy.find(
      input => convertKeyChainToDotNotation(input.key) === inputElement.target.name
    );
    if (touchedInput) {
      touchedInput.touched = true;
      setInputStates(inputStatesCopy);
    }
  };


  // Run validation on individual inputs whenever their state changes to 'touched'.
  // This covers the scenario where a user clicks on an input, doesn't change anything, and clicks off.
  for (const inputState of inputStates) {
    React.useEffect(() => {
      if (inputState.touched) {
        runValidationOnInput(inputValidators.find(validator => validator.key === inputState.key)!, state, formProp);
      }
    }, [inputState.touched]);
  }

  return {
    setTouched,
    formIsValid,
    showAllValidation,
  };
}
