/** ******************************************************
 * FORM - Utilities file.
 * A set of helper functions to support the form logic.
 ******************************************************* */

import { IBindingProps, IValidationError, KeyChain } from './form.types';

/**
 * Binds a native input `onChange` event to a set of binding props.
 * @param event The native `onChange` event from the input.
 * @param binding The set of binding props to hook in to.
 * @param onChangeProp An additional `onChange` method to call alongside the binding setValue, useful if the end user has added a `bind` and an `onChange` to the armstrong input.
 * @param formatter An optional formatter to pass the value through before it's sent to the binding.
 * @returns The result of the additional `onChange` method if passed, else `undefined`.
 */
export function bindInputChangeEvent<TValue>(
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  binding?: IBindingProps<TValue>,
  onChangeProp?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  formatter?: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>['currentTarget']['value']) => TValue
) {
  const targetValue = event.currentTarget.value;
  const newValue = formatter?.(targetValue) ?? targetValue;
  if (binding) {
    binding.setValue(newValue as TValue);
  }
  if (onChangeProp) {
    return onChangeProp(event);
  }
}

/**
 * Filters a set of validation errors based on the `keyChain` of the property.
 * @param rootErrors The root set of validation errors for the entire form.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @returns {Array} A filtered set of validation errors that apply to the property in question.
 */
export function validationErrorsByKeyChain(rootErrors: IValidationError[] = [], keyChain: KeyChain = []): IValidationError[] {
  const keyChainAttrStringDots = keyChain.filter((key) => !!key).join('.');
  const keyChainAttrStringSquareArray = keyChain.reduce<string>((attrString, key) => {
    if (typeof key === 'string') {
      return `${attrString}${attrString ? `.` : ''}${key}`;
    }
    if (typeof key === 'number') {
      return `${attrString}[${key}]`;
    }
    return attrString;
  }, '');
  return rootErrors.filter((error) => error.key === keyChainAttrStringDots || error.key === keyChainAttrStringSquareArray);
}

/**
 * Returns a specific value from within a nested form state based on a `keyChain`.
 * @param state The form state object to search.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @returns The value if one is set, else undefined.
 */
export function valueByKeyChain<TData, TValue>(state: TData, keyChain: KeyChain): TValue | undefined {
  return keyChain.reduce<any>((value, key) => value?.[key], state);
}

/**
 * Detects whether something is a set of binding props or not.
 * @param item The item to check.
 * @returns {boolean} `true` if the item passed conforms to the binding props interface `IBindingProps` else `false`. Also casts if `true`.
 */
export function isBindingProps<TValue>(item?: any): item is IBindingProps<TValue> {
  return !!item?.setValue && !!item?.dispatch && !!item?.keyChain && !!item?.myValidationErrors;
}
