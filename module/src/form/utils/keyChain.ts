/*
 * Key chain utility functions
 * --------------------------------------
 * Useful functions relating to the "key chain" system of interrogating a nested state object through an array of string keys
 */
import type { KeyChain } from '../types';

/**
 * Returns a specific value from within a nested form state based on a `keyChain`.
 * @param state The form state object to search.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @returns The value if one is set, else undefined.
 */
export function valueByKeyChain<TData extends object>(state?: TData, keyChain?: KeyChain): unknown {
  if (!keyChain?.length) {
    return state;
  }
  return keyChain.reduce((value: {}, key) => {
    return value?.[key as keyof typeof value];
  }, state ?? {});
}

/**
 * Compiles a new piece of form state from an existing state object, a key for the property to access, and a new value to assign.
 * NOTE: This function deliberately maintains references within the state object for values that haven't changed to prevent unnecessary re-renders
 * @param target The incoming form state object
 * @param keyChain The key chain to access a property within the state
 * @param value A new value to assign to the accessed property
 * @returns A new root state object, with the new value assigned to the correct property, and object/array references updated appropriately down the tree
 */
export function mergeDeepFromKeyChain<TObject extends object, TValue>(
  target: TObject,
  keyChain: Array<string | number>,
  value: TValue
): TObject {
  // support setting the root object if the keychain is empty
  if (keyChain.length === 0) {
    if (Array.isArray(value)) {
      return [...value] as TObject;
    }
    if (typeof value === 'object') {
      return { ...value } as unknown as TObject;
    }
  }
  const output = (
    Array.isArray(target) || Number.isInteger(keyChain[0]) ? [...((target || []) as unknown[])] : { ...(target || {}) }
  ) as TObject;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- "any" is almost never the correct type, but this is a reference variable for a recursive loop through a mixed state object, it could genuinely be anything.
  let bookmarkRef = output as any;
  for (let i = 0; i < keyChain.length; i += 1) {
    const key = keyChain[i] as keyof typeof bookmarkRef;
    if (i === keyChain.length - 1) {
      if (Array.isArray(value)) {
        bookmarkRef[key] = [...value];
      } else if (typeof value === 'object') {
        bookmarkRef[key] = { ...value };
      } else {
        bookmarkRef[key] = value;
      }
    } else if (Array.isArray(bookmarkRef[key])) {
      bookmarkRef[key] = [...bookmarkRef[key]];
      bookmarkRef = bookmarkRef[key];
    } else if (typeof bookmarkRef[key] === 'object') {
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

/**
 * Removes the parent key data from the beginning of a keyChain string so that it will work in a child binder.
 * @param childKeyChainString The keyChain string passed to the child binder.
 * @param parentKeyChain The parent keyChain to be stripped from the front.
 * @returns A new keyChain string targeted at the child binding rather than the parent.
 */
export function childKeyChainStringFromParent(
  childKeyChainString: string,
  parentKeyChain: KeyChain | undefined
): string {
  // make the parent key regex safe
  const regexSafeParent = parentKeyChain?.join('.').replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') ?? '';
  // remove the parent keyChain from the beginning of the child string.
  const childWithoutParent = childKeyChainString.replace(new RegExp(`^${regexSafeParent}`), '');
  // strip accessor tokens (. | [n].) from the beginning of the child keyChain string and return.
  return childWithoutParent.replace(/^.*?\./, '');
}

/**
 * Checks an array specific action to make sure it's running on an array value. Throws a helpful error if not.
 * @param value The value of the form prop to check, resulting from a key chain interrogation of a piece of form state
 * @param attemptedAction The action being attempted on the form prop.
 * @returns Throws if not an array or returns true with a cast.
 */
export function isArrayValue(value: unknown, attemptedAction: string): value is unknown[] {
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
 * Converts a keyChain into a key string
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @param mode (dots|brackets) Whether to use dot syntax for array indexes, or square brackets.
 * @returns The key string
 */
export function keyStringFromKeyChain(keyChain: KeyChain | undefined, mode: 'dots' | 'brackets'): string {
  switch (mode) {
    case 'dots':
      return keyChain?.filter(key => key !== undefined && key !== null).join('.') ?? '';
    case 'brackets':
      return (
        keyChain?.reduce<string>((attrString, key) => {
          if (typeof key === 'string') {
            return `${attrString}${attrString ? `.` : ''}${key}`;
          }
          if (typeof key === 'number') {
            return `${attrString}[${key}]`;
          }
          return attrString;
        }, '') ?? ''
      );
    default:
      throw new Error(`Unsupported mode: ${mode} sent to validation key factory`);
  }
}

/**
 * Checks whether an incoming validation either belongs to (or is a child of) a property keyChain.
 * @param itemKey The key of the validation error
 * @param propertyKeyChains The property keyChain strings to check
 * @returns {boolean} `true` if the validation error belongs to (or is a child of) one of the passed property keyChains, else `false`.
 */
export function isMyKeyChainItem(itemKey: string | undefined, ...propertyKeyChains: KeyChain): boolean {
  if (!itemKey) {
    return true;
  }

  return propertyKeyChains.some(propertyKeyChain => {
    return (
      propertyKeyChain === itemKey ||
      itemKey.indexOf(`${propertyKeyChain}.`) === 0 ||
      itemKey.indexOf(`${propertyKeyChain}[`) === 0
    );
  });
}
