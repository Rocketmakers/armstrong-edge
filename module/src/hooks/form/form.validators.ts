import { ClientValidationConfig, IClientValidatorFieldConfig, KeyChain, ValidationMessage, ValidationMessageBuilder } from './form.types';
import { valueByKeyChain } from './form.utils';

function isValidator(val: any): val is IClientValidatorFieldConfig<any> {
  return !!val?.validator;
}

function isValidationMessageBuilder(val: any): val is ValidationMessageBuilder<any> {
  return typeof val === 'function';
}

/**
 * Loops through the validator config
 * @param validatorConfig The validators configuration as passed to the `useForm` hook.
 * @param formState The current form state.
 * @param onValidate The method to call when a validator is triggered.
 * @param baseKeyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 */
export const validateAll = (
  validatorConfig: ClientValidationConfig<any>,
  formState: any,
  onValidate: (keyChain: KeyChain, messages: ValidationMessage | ValidationMessage[]) => void,
  baseKeyChain: KeyChain
) => {
  Object.keys(validatorConfig).forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    validateKeyChainProperty(valueByKeyChain(validatorConfig, [key]) as any, [key], formState, onValidate, [...baseKeyChain, key]);
  });
};

/**
 * Loops through the validator config
 * @param validatorConfig The validators configuration as passed to the `useForm` hook.
 * @param currentKeyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @param formState The current form state.
 * @param onValidate The method to call when a validator is triggered.
 * @param fullKeyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 */
export const validateKeyChainProperty = (
  validatorConfig: ClientValidationConfig<any>,
  currentKeyChain: KeyChain,
  formState: any,
  onValidate: (keyChain: KeyChain, messages: ValidationMessage | ValidationMessage[]) => void,
  fullKeyChain: KeyChain = []
) => {
  if (!validatorConfig) {
    return;
  }

  if (!isValidator(validatorConfig)) {
    const keyChain = [...currentKeyChain];
    keyChain.pop();

    const config = valueByKeyChain<any, any>(validatorConfig, keyChain);
    const state = valueByKeyChain(formState, keyChain);

    if (!keyChain.length) {
      validateAll(config, state, onValidate, fullKeyChain);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validateKeyChainProperty(config, keyChain, state, onValidate, []);
    return;
  }

  const { message, validator } = validatorConfig;
  const value = valueByKeyChain(formState, fullKeyChain);

  if (!validator(value)) {
    onValidate(fullKeyChain, isValidationMessageBuilder(message) ? message(value) : message);
  }
};
