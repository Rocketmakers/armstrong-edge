import { ClientValidationConfig, IClientValidatorFieldConfig, KeyChain, ValidationMessage, ValidationMessageBuilder } from './form.types';
import { valueByKeyChain } from './form.utils';

function isValidator<TValue>(val: ClientValidationConfig<any>): val is IClientValidatorFieldConfig<TValue> {
  return !!val?.validator;
}

function isValidationMessageBuilder<TData>(val: ValidationMessage | ValidationMessageBuilder<TData>): val is ValidationMessageBuilder<TData> {
  return typeof val === 'function';
}

/**
 * Loops through the validator config
 * @param validatorConfig The validators configuration as passed to the `useForm` hook.
 * @param formState The current form state.
 * @param onValidate The method to call when a validator is triggered.
 * @param baseKeyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 */
export function validateAll<TData>(
  validatorConfig: ClientValidationConfig<TData>,
  formState: TData,
  onValidate: (keyChain: KeyChain, messages: ValidationMessage | ValidationMessage[]) => void,
  baseKeyChain: KeyChain
) {
  Object.keys(validatorConfig).forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    validateKeyChainProperty(valueByKeyChain(validatorConfig, [key]), [key], formState, onValidate, [...baseKeyChain, key]);
  });
}

/**
 * Loops through the validator config
 * @param validatorConfig The validators configuration as passed to the `useForm` hook.
 * @param currentKeyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @param formState The current form state.
 * @param onValidate The method to call when a validator is triggered.
 * @param fullKeyChain The chain of keys passed to `formProp` and used to access the property within a nested form object. This is used solely to dispatch the error
 */
export function validateKeyChainProperty<TData>(
  validatorConfig: ClientValidationConfig<TData> | undefined,
  currentKeyChain: KeyChain,
  formState: TData,
  onValidate: (keyChain: KeyChain, messages: ValidationMessage | ValidationMessage[]) => void,
  fullKeyChain: KeyChain = []
) {
  if (!validatorConfig) {
    return;
  }

  if (!isValidator(validatorConfig)) {
    const state = valueByKeyChain(formState, currentKeyChain);

    const keyChain = [...currentKeyChain];
    keyChain.pop();

    if (Array.isArray(state)) {
      // handle an array of objects. Loop through and validate each object against each key in the respective config
      state.forEach((itemState, objIndex) => {
        Object.keys(validatorConfig).forEach((key) => {
          const childConfig = valueByKeyChain<ClientValidationConfig<TData>, any>(validatorConfig, [...keyChain, key]);
          validateKeyChainProperty(childConfig, [key], itemState, onValidate, [...fullKeyChain, objIndex, key]);
        });
      });

      return;
    }

    const config = valueByKeyChain<ClientValidationConfig<TData>, any>(validatorConfig, keyChain);

    if (!keyChain.length) {
      validateAll(config, state, onValidate, fullKeyChain);
      return;
    }

    validateKeyChainProperty(config, keyChain, state, onValidate, []);
    return;
  }

  const { message, validator } = validatorConfig;

  const value = valueByKeyChain(formState, currentKeyChain);

  if (Array.isArray(value)) {
    // handle a primitive array. Loop through and call onValidate with the index added to the keychain
    value.forEach((itemValue, index) => {
      if (!validator(itemValue)) {
        onValidate([...fullKeyChain, index], isValidationMessageBuilder(message) ? message(itemValue) : message);
      }
    });
    return;
  }

  if (!validator(value)) {
    onValidate(fullKeyChain, isValidationMessageBuilder(message) ? message(value) : message);
  }
}
