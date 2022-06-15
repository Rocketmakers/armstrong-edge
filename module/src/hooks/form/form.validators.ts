import { IClientValidatorFieldConfig, KeyChain, ValidationMessage, ValidationMessageBuilder } from './form.types';
import { valueByKeyChain } from './form.utils';

function isValidator(val: any): val is IClientValidatorFieldConfig<any> {
  return !!val?.validator;
}

function isValidationMessageBuilder(val: any): val is ValidationMessageBuilder<any> {
  return typeof val === 'function';
}

export const validateKeyChainProperty = (
  validators: object,
  kc: KeyChain,
  formState: any,
  onValidate: (keyChain: KeyChain, messages: ValidationMessage | ValidationMessage[]) => void
) => {
  Object.keys(validators).forEach((key) => {
    const keyChain = [...kc, key];
    const validatorConfig = validators?.[key];

    if (!isValidator(validatorConfig)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      validateKeyChainProperty(validatorConfig, keyChain, formState, onValidate);
      return;
    }

    const { message, validator } = validatorConfig;
    const value = valueByKeyChain(formState, keyChain);

    if (!validator(value)) {
      onValidate(keyChain, isValidationMessageBuilder(message) ? message(value) : message);
    }
  });
};
