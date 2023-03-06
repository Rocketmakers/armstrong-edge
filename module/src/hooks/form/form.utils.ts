/** ******************************************************
 * FORM - Utilities file.
 * A set of helper functions to support the form logic.
 ******************************************************* */

import { InitialDataFunction } from '.';
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
 * Checks whether an incoming validation either belongs to (or is a child of) a property keyChain.
 * @param validationErrorKey The key of the validation error
 * @param propertyKeyChainStrings The property keyChain strings to check
 * @returns {boolean} `true` if the validation error belongs to (or is a child of) one of the passed property keyChains, else `false`.
 */
export function isMyValidationError(validationErrorKey: string, ...propertyKeyChainStrings: string[]): boolean {
  return propertyKeyChainStrings.some((propertyKeyChain) => {
    return (
      propertyKeyChain === validationErrorKey ||
      validationErrorKey.indexOf(`${propertyKeyChain}.`) === 0 ||
      validationErrorKey.indexOf(`${propertyKeyChain}[`) === 0
    );
  });
}

/**
 * Filters a set of validation errors based on the `keyChain` of the property.
 * @param rootErrors The root set of validation errors for the entire form.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object. If no keychain to a property is passed, then no errors will be returned.
 * @returns {Array} A filtered set of validation errors that apply to the property in question and its sub-properties.
 */
export function validationErrorsByKeyChain(rootErrors: IValidationError[] = [], keyChain: KeyChain = []): IValidationError[] {
  if (!keyChain.length) {
    return [];
  }
  const keyChainAttrStringDots = validationKeyStringFromKeyChain(keyChain, 'dots');
  const keyChainAttrStringSquareArray = validationKeyStringFromKeyChain(keyChain, 'brackets');
  return rootErrors.filter((error) => isMyValidationError(error.key, keyChainAttrStringDots, keyChainAttrStringSquareArray));
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

/**
 * Detects whether the incoming initial form data is a callback or an object and casts appropriately.
 * @param initialData Either some initial form data, or a function that returns initial form data.
 * @returns true if param is a function, also casts appropriately.
 */
export function initialDataIsCallback<TData extends object>(
  initialData?: TData | InitialDataFunction<TData>
): initialData is InitialDataFunction<TData> {
  return typeof initialData === 'function';
}

/**
 * Removes the parent key data from the beginning of a keyChain string so that it will work in a child binder.
 * @param childKeyChainString The keyChain string passed to the child binder.
 * @param parentKeyChain The parent keyChain to be stripped from the front.
 * @returns A new keyChain string targeted at the child binding rather than the parent.
 */
export function childKeyChainStringFromParent(childKeyChainString: string, parentKeyChain: KeyChain): string {
  // make the parent key regex safe
  const regexSafeParent = parentKeyChain.join('.').replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  // remove the parent keyChain from the beginning of the child string.
  const childWithoutParent = childKeyChainString.replace(new RegExp(`^${regexSafeParent}`), '');
  // strip accessor tokens (. | [n].) from the beginning of the child keyChain string and return.
  return childWithoutParent.replace(/^.*?\./, '');
}

export function mergeDeepFromKeyChain<TObject extends object, TValue>(
  target: TObject,
  keyChain: Array<string | number>,
  value: TValue
): TObject {
  const output = (
    Array.isArray(target) || Number.isInteger(keyChain[0])
      ? [...((target || []) as any[])]
      : { ...(target || {}) }
  ) as TObject;
  let bookmarkRef: any = output;
  for (let i = 0; i < keyChain.length; i += 1) {
    const key = keyChain[i];
    if (i === keyChain.length - 1) {
      if (Array.isArray(value)) {
        bookmarkRef[key] = [...value];
      } else if (typeof value === "object") {
        bookmarkRef[key] = { ...value };
      } else {
        bookmarkRef[key] = value;
      }
    } else if (Array.isArray(bookmarkRef[key])) {
      bookmarkRef[key] = [...bookmarkRef[key]];
      bookmarkRef = bookmarkRef[key];
    } else if (typeof bookmarkRef[key] === "object") {
      bookmarkRef[key] = { ...bookmarkRef[key] };
      bookmarkRef = bookmarkRef[key];
    } else if (Number.isInteger(key)) {
      bookmarkRef[key] = [...bookmarkRef[key]];
      bookmarkRef = bookmarkRef[key];
    } else {
      bookmarkRef[key] = { ...bookmarkRef[key] };
      bookmarkRef = bookmarkRef[key];
    }
  }
  return output;
}