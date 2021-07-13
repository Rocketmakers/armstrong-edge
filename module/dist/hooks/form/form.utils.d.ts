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
export declare function validationKeyStringFromKeyChain(keyChain: KeyChain, mode: 'dots' | 'brackets'): string;
/**
 * Filters a set of validation errors based on the `keyChain` of the property.
 * @param rootErrors The root set of validation errors for the entire form.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @returns {Array} A filtered set of validation errors that apply to the property in question.
 */
export declare function validationErrorsByKeyChain(rootErrors?: IValidationError[], keyChain?: KeyChain): IValidationError[];
/**
 * Returns a specific value from within a nested form state based on a `keyChain`.
 * @param state The form state object to search.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @returns The value if one is set, else undefined.
 */
export declare function valueByKeyChain<TData, TValue>(state: TData, keyChain: KeyChain): TValue | undefined;
/**
 * Detects whether something is a set of binding props or not.
 * @param item The item to check.
 * @returns {boolean} `true` if the item passed conforms to the binding props interface `IBindingProps` else `false`. Also casts if `true`.
 */
export declare function isBindingProps<TValue>(item?: any): item is IBindingProps<TValue>;
