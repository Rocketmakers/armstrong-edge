import type { KeyChain } from '../types';
/**
 * Returns a specific value from within a nested form state based on a `keyChain`.
 * @param state The form state object to search.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @returns The value if one is set, else undefined.
 */
export declare function valueByKeyChain<TData extends object>(state?: TData, keyChain?: KeyChain): unknown;
/**
 * Compiles a new piece of form state from an existing state object, a key for the property to access, and a new value to assign.
 * NOTE: This function deliberately maintains references within the state object for values that haven't changed to prevent unnecessary re-renders
 * @param target The incoming form state object
 * @param keyChain The key chain to access a property within the state
 * @param value A new value to assign to the accessed property
 * @returns A new root state object, with the new value assigned to the correct property, and object/array references updated appropriately down the tree
 */
export declare function mergeDeepFromKeyChain<TObject extends object, TValue>(target: TObject, keyChain: Array<string | number>, value: TValue): TObject;
/**
 * Removes the parent key data from the beginning of a keyChain string so that it will work in a child binder.
 * @param childKeyChainString The keyChain string passed to the child binder.
 * @param parentKeyChain The parent keyChain to be stripped from the front.
 * @returns A new keyChain string targeted at the child binding rather than the parent.
 */
export declare function childKeyChainStringFromParent(childKeyChainString: string, parentKeyChain: KeyChain | undefined): string;
/**
 * Checks an array specific action to make sure it's running on an array value. Throws a helpful error if not.
 * @param value The value of the form prop to check, resulting from a key chain interrogation of a piece of form state
 * @param attemptedAction The action being attempted on the form prop.
 * @returns Throws if not an array or returns true with a cast.
 */
export declare function isArrayValue(value: unknown, attemptedAction: string): value is unknown[];
/**
 * Converts a keyChain into a key string
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @param mode (dots|brackets) Whether to use dot syntax for array indexes, or square brackets.
 * @returns The key string
 */
export declare function keyStringFromKeyChain(keyChain: KeyChain | undefined, mode: 'dots' | 'brackets'): string;
/**
 * Checks whether an incoming validation either belongs to (or is a child of) a property keyChain.
 * @param itemKey The key of the validation error
 * @param propertyKeyChains The property keyChain strings to check
 * @returns {boolean} `true` if the validation error belongs to (or is a child of) one of the passed property keyChains, else `false`.
 */
export declare function isMyKeyChainItem(itemKey: string | undefined, ...propertyKeyChains: KeyChain): boolean;
