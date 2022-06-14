import { IClientValidatorFieldConfig, KeyChain, ValidationMessage, ValidationMessageBuilder } from './form.types';
import { valueByKeyChain } from './form.utils';

function isValidator(val: any): val is IClientValidatorFieldConfig<any> {
  return !!val?.validator;
}

function isValidationMessageBuilder(val: any): val is ValidationMessageBuilder<any> {
  return typeof val === 'function';
}
export const validateKeyChainProperty = (
  data: object,
  kc: KeyChain,
  formState: any,
  onValidate: (keychain: KeyChain, messages: ValidationMessage | ValidationMessage[]) => void
) => {
  Object.keys(data).forEach((k) => {
    const keychain = [...kc, k];
    const dataValue = data?.[k];

    if (!isValidator(dataValue)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      validateKeyChainProperty(dataValue, keychain, formState, onValidate);
      return;
    }

    const { message, validator } = dataValue;
    const value = valueByKeyChain(formState, keychain);

    console.log(!!validator(value));
    if (!validator(value)) {
      if (isValidationMessageBuilder(message)) {
        onValidate(keychain, message(value));
      } else {
        onValidate(keychain, message);
      }
    }
  });
};

// validateMethod(formConfig.validators, []);
