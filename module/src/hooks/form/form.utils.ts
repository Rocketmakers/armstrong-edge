/** ******************************************************
 * FORM - Utilities file.
 * A set of helper functions to support the form logic.
 ******************************************************* */

import { IBindingProps, IValidationError, KeyChain } from './form.types';

/**
 * Converts a keyChain into a validation error key string
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @param mode (dots|brackets) Whether to use dot syntax for array indexes, or square brackets.
 * @returns The key string
 */
export function validationKeyStringFromKeyChain(keyChain: KeyChain, mode: 'dots' | 'brackets'): string {
  switch (mode) {
    case 'dots':
      return keyChain.filter((key) => !!key).join('.');
    case 'brackets':
      return keyChain.reduce<string>((attrString, key) => {
        if (typeof key === 'string') {
          return `${attrString}${attrString ? `.` : ''}${key}`;
        }
        if (typeof key === 'number') {
          return `${attrString}[${key}]`;
        }
        return attrString;
      }, '');
    default:
      throw new Error(`Unsupported mode: ${mode} sent to validation key factory`);
  }
}

/**
 * Filters a set of validation errors based on the `keyChain` of the property.
 * @param rootErrors The root set of validation errors for the entire form.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @returns {Array} A filtered set of validation errors that apply to the property in question.
 */
export function validationErrorsByKeyChain(rootErrors: IValidationError[] = [], keyChain: KeyChain = []): IValidationError[] {
  const keyChainAttrStringDots = validationKeyStringFromKeyChain(keyChain, 'dots');
  const keyChainAttrStringSquareArray = validationKeyStringFromKeyChain(keyChain, 'brackets');
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

/**
 * Checks an array specific action to make sure it's running on an array value. Throws a helpful error if not.
 * @param value The value of the form prop to check.
 * @param attemptedAction The action being attempted on the form prop.
 * @returns Throws if not an array or returns true with a cast.
 */
export function isArrayValue(value: any, attemptedAction: string): value is any[] {
  if (value && !Array.isArray(value)) {
    throw new Error(
      `"${attemptedAction}" cannot be used on a set form property that does not contain an array value, the current value of this property is: ${JSON.stringify(
        value
      )}`
    );
  }
  return true;
}
