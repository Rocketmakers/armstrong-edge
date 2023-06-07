/*
 * Validation utility functions
 * --------------------------------------
 * Various functions useful for interacting with client validation errors
 */
import { z, ZodIssue } from 'zod';

import type {
  IArrayOfZod,
  IObjectOfZod,
  IValidationError,
  IValidationSchema,
  KeyChain,
  ValidationAction,
} from '../types';
import { isMyKeyChainItem, keyStringFromKeyChain } from './keyChain';

/**
 * Filters a set of validation errors based on the `keyChain` of the property.
 * @param rootErrors The root set of validation errors for the entire form.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object. If no key chain to a property is passed, then no errors will be returned.
 * @returns {Array} A filtered set of validation errors that apply to the property in question and its sub-properties.
 */
export function validationErrorsByKeyChain(
  rootErrors: IValidationError[] = [],
  keyChain: KeyChain = []
): IValidationError[] {
  if (!keyChain.length) {
    return [];
  }
  const keyChainAttrStringDots = keyStringFromKeyChain(keyChain, 'dots');
  const keyChainAttrStringSquareArray = keyStringFromKeyChain(keyChain, 'brackets');
  return rootErrors.filter(error => isMyKeyChainItem(error.key, keyChainAttrStringDots, keyChainAttrStringSquareArray));
}

/**
 * The reducer for the client validation error state
 * @param state The current validation error state.
 * @param action The action to respond to.
 * @returns The updated state.
 */
export function clientValidationReducer(state: IValidationError[], action: ValidationAction): IValidationError[] {
  switch (action.type) {
    case 'add-validation':
      return [...state, ...action.errors];
    case 'clear-validation':
      return state.filter(
        s =>
          !(
            (!action.key || action.key === s.key) &&
            (!action.identifiers?.length || action.identifiers?.some(i => i === s.identifier))
          )
      );
    default:
      return state;
  }
}

/**
 * Turns a type safe validation schema into a zod compatible one
 * @param schema The type safe validation schema (usually interfaced from a generated TS object type)
 * @returns A zod schema ready for parsing
 */
export function zodFromValidationSchema<TData>(schema: IValidationSchema<TData>) {
  // type checker utility - is TS validation field an array type
  const isArrayOfZod = (arrayItem: unknown): arrayItem is IArrayOfZod<unknown> => {
    return !!(arrayItem as IArrayOfZod<unknown>)?.itemSchema;
  };

  // type checker utility - is TS validation field an object type
  const isObjectOfZod = (objectItem: unknown): objectItem is IObjectOfZod<unknown> => {
    return !!(objectItem as IObjectOfZod<unknown>)?.schema;
  };

  // unpacks the root TS schema into a key/zod record
  const unpackObject = (incomingObject: object) => {
    return Object.keys(incomingObject).reduce(
      // eslint-disable-next-line @typescript-eslint/no-use-before-define -- these call each other
      (sch, key) => ({ ...sch, [key]: unpackValueToZod(incomingObject[key as keyof typeof incomingObject]) }),
      {}
    );
  };

  // unpacks the value of a TS schema field into a zod equivalent
  const unpackValueToZod = (incomingToZod: unknown): unknown => {
    if (isArrayOfZod(incomingToZod)) {
      const arrayInner = z.array(
        // eslint-disable-next-line no-underscore-dangle -- this is in the zod types
        !(incomingToZod.itemSchema as z.ZodTypeAny)._def
          ? z.object(unpackObject(incomingToZod.itemSchema))
          : incomingToZod.itemSchema
      );
      return incomingToZod.opts ? incomingToZod.opts(arrayInner) : arrayInner;
    }
    if (isObjectOfZod(incomingToZod)) {
      const obInner = z.object(unpackObject(incomingToZod.schema as z.ZodRawShape));
      return incomingToZod.opts ? incomingToZod.opts(obInner) : obInner;
    }
    return incomingToZod;
  };

  // if root schema is an array, return a zod object containing the unpacked TS schema
  if (isArrayOfZod(schema)) {
    return unpackValueToZod(schema) as z.ZodArray<z.ZodAny>;
  }

  // if root schema is an object, return a zod object containing the unpacked TS schema
  return z.object(unpackObject(schema));
}

/**
 * A method to get specific zod errors from a key chain and map them to our standard error shape
 * @param errors An array of errors returned from zod.parse
 * @param keyChainString The key chain to filter the zod errors by
 * @returns An array of validation errors
 */
export const getMyZodErrors = (errors: ZodIssue[], keyChainString?: string) => {
  return errors
    .filter(e => (keyChainString ? isMyKeyChainItem(keyStringFromKeyChain(e.path, 'dots'), keyChainString) : true))
    .map(e => ({
      key: keyStringFromKeyChain(e.path, 'dots'),
      message: e.message,
    }));
};
