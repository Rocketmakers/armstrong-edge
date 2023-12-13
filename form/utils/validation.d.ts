import { z, ZodIssue } from 'zod';
import type { IFormConfig, IFunctionValidationSchema, IRootValidationSchema, IValidationError, KeyChain, ValidationAction } from '../types';
/**
 * Filters a set of validation errors based on the `keyChain` of the property.
 * @param rootErrors The root set of validation errors for the entire form.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object. If no key chain to a property is passed, then no errors will be returned.
 * @returns {Array} A filtered set of validation errors that apply to the property in question and its sub-properties.
 */
export declare function validationErrorsByKeyChain(rootErrors?: IValidationError[], keyChain?: KeyChain): IValidationError[];
/**
 * The reducer for the client validation error state
 * @param state The current validation error state.
 * @param action The action to respond to.
 * @returns The updated state.
 */
export declare function clientValidationReducer(state: IValidationError[], action: ValidationAction): IValidationError[];
/**
 * Turns a type safe validation schema into a zod compatible one
 * @param schema The type safe validation schema (usually interfaced from a generated TS object type)
 * @returns A zod schema ready for parsing
 */
export declare function zodFromValidationSchema<TData>(schema: IRootValidationSchema<TData>): z.ZodObject<z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodArray<z.ZodAny, "many"> | z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
/**
 * A method to get specific zod errors from a key chain and map them to our standard error shape
 * @param errors An array of errors returned from zod.parse
 * @param keyChainString The key chain to filter the zod errors by
 * @returns An array of validation errors
 */
export declare const getMyZodErrors: (errors: ZodIssue[], keyChainString?: string) => {
    key: string;
    message: string;
}[];
/**
 * Checks if the provided validation schema is a function.
 * @template TData - The type of data that the validation schema operates on.
 * @param schema - The validation schema to be checked.
 *   It can be either an instance of a root validation schema or a function-based validation schema.
 * @returns {boolean} - Returns `true` if the provided schema is a function-based validation, otherwise `false`.
 */
export declare const rootValidationSchemaIsFunction: <TData>(schema?: IRootValidationSchema<TData> | IFunctionValidationSchema<TData> | undefined) => schema is IFunctionValidationSchema<TData>;
