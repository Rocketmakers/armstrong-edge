/**
 * Types associated with form binding.
 * --------------------------------------
 */

import type {
  ZodArray,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodEffects,
  ZodLiteral,
  ZodNullable,
  ZodNumber,
  ZodObject,
  ZodOptional,
  ZodRawShape,
  ZodString,
  ZodTypeAny,
} from 'zod';

/**
 * Works out whether some data is an object, and array, or another type.ß
 * Used by `formProp` to type the next argument in the array.
 * If it's an object, this type becomes a key of that object.
 * If it's an array, this type becomes `number` to support indexing the array.
 * If it's any other type this type becomes `never`, to prevent `formProp` users digging into a non-nested type.
 */
export type KeyOrIndex<TData, TDataKey extends keyof TData> = TData extends object
  ? Extract<TDataKey, TData extends unknown[] ? number : unknown>
  : never;

/**
 * Returns a string type description for an incoming type.
 * Used by Zod schema type system to return the correct zod type for a form state key
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- any is the correct type here, we need to handle it
type StringType<T> = [any extends T ? 'true' : 'false'] extends ['true']
  ? 'any'
  : T extends boolean
  ? 'boolean'
  : T extends Array<unknown>
  ? 'array'
  : T extends string
  ? 'string'
  : T extends bigint
  ? 'bigint'
  : T extends number
  ? 'number'
  : T extends Date
  ? 'date'
  : T extends object
  ? 'object'
  : 'rest';

/**
 * The set of tools returned from `formProp` if the property in question is NOT an array.
 */
export interface BindingToolsStandard<TValue> {
  /**
   * Binds an input to a `formProp`, the result can be passed to any component `bind` prop.
   * @param config Optional config for the binding.
   * @returns A set of binding props for use by the input or child form component.
   */
  bind: (config?: IBindConfig<TValue>) => IBindingProps<TValue>;
  /**
   * Sets the value of a field in the form state.
   * @param newValue The value to set the field to.
   * @returns Binding props for chaining.
   */
  set: (newValue: TValue) => BindingTools<TValue>;
  /**
   * Clears the value of a field in the form state, setting it to undefined
   * @returns Binding props for chaining.
   */
  clear: () => BindingTools<TValue>;
  /**
   * Gets the current value for a field within the form state.
   * @returns the value if set, or undefined.
   */
  get: () => TValue | undefined;
  /**
   * Adds a validation error for a field within the form state.
   * @param messages The validation error message(s) to add.
   * @param identifier The identifier so use when adding the validation error(s), allows this group to be independently cleared.
   */
  addValidationError: (messages: ValidationMessage | ValidationMessage[], identifier?: string) => void;
  /**
   * Clears all client validation errors for the current form state.
   * @param identifiers an optional array of validation error identifiers, if passed, only errors that match the identifier will be deleted.
   */
  clearClientValidationErrors: (...identifiers: string[]) => void;
  /**
   * Runs specific field validator in the validators schema again the current form state.
   * @param setInputTouched Whether to set the targeted control to "touched" before running the validator, default: true
   * @param silent A boolean representing whether validation errors should be dispatched to the form elements
   * @param validateAll If true, the validator will run against the entire schema, not just the current field
   */
  validate: (setInputTouched?: boolean, silent?: boolean, validateAll?: boolean) => boolean;
  /**
   * Whether the field input has been interacted with
   */
  isTouched: boolean;
  /**
   * Set the field input touched state
   */
  setTouched: (isTouched: boolean) => void;
  /**
   * Whether the field input has any validation errors
   */
  isValid: boolean;
}

/**
 * The set of tools returned from `formProp` if the property in question is an array.
 */
export interface BindingToolsArray<TValue> {
  /**
   * Adds a new item to an array field in the form state.
   * @param newItem The new item to add.
   *
   * WARNING: Available to array properties only
   */
  add: TValue extends unknown[] ? (newItem: TValue[0]) => BindingTools<TValue> : never;
  /**
   * Removes the last item from an array field in the form state.
   *
   * WARNING: Available to array properties only
   */
  pop: TValue extends unknown[] ? () => BindingTools<TValue> : never;
  /**
   * Inserts a new item into an array field at a specific index.
   * @param newItem The new item to add.
   * @param index The index at which to insert the new item.
   *
   * WARNING: Available to array properties only
   */
  insert: TValue extends unknown[] ? (newItem: TValue[0], index: number) => BindingTools<TValue> : never;
  /**
   * Removes an item from an array field at a specific index.
   * @param index The index at which to insert the new item.
   *
   * WARNING: Available to array properties only
   */
  remove: TValue extends unknown[] ? (index: number) => BindingTools<TValue> : never;
}

/**
 * The set of tools returned from `formProp`.
 * - This root type detects whether the value is an array and assigns the correct type accordingly.
 */
export type BindingTools<TValue> = BindingToolsArray<TValue> & BindingToolsStandard<TValue>;

/**
 * This interface is used to handle the typings for the args passed to `formProp`.
 * - Allows `formProp` to receive a strictly typed set of args for targeting nested properties within a complex data object.
 * - Can also allow targeting objects within an array by requesting an index number rather than a key.
 * - The args passed to `formProp` form a "key chain" which is then used to access properties within the data object.
 * - Supports form state nesting up to 5 levels deep
 */
export interface IFormProp<TData extends object> {
  /**
   * Used to access a property within the form data.
   */
  (): BindingTools<Required<TData>>;
  /**
   * Used to access a property within the form data.
   * @param args The key of the property to access.
   */
  <TDataKey extends keyof Required<TData>>(...args: [key1: KeyOrIndex<Required<TData>, TDataKey>]): BindingTools<
    Required<TData>[TDataKey]
  >;
  /**
   * Used to access a property within the form data.
   * @param args The keys or indexes used to access a nested property to a depth of 2.
   */
  <TDataKey extends keyof Required<TData>, TData2 extends Required<TData>[TDataKey], TDataKey2 extends keyof TData2>(
    ...args: [key1: KeyOrIndex<Required<TData>, TDataKey>, key2: KeyOrIndex<TData2, TDataKey2>]
  ): BindingTools<TData2[TDataKey2]>;
  /**
   * Used to access a property within the form data.
   * @param args The keys or indexes used to access a nested property to a depth of 3.
   */
  <
    TDataKey extends keyof Required<TData>,
    TData2 extends Required<TData>[TDataKey],
    TDataKey2 extends keyof TData2,
    TData3 extends TData2[TDataKey2],
    TDataKey3 extends keyof TData3
  >(
    ...args: [
      key1: KeyOrIndex<Required<TData>, TDataKey>,
      key2: KeyOrIndex<TData2, TDataKey2>,
      key3: KeyOrIndex<TData3, TDataKey3>
    ]
  ): BindingTools<TData3[TDataKey3]>;
  /**
   * Used to access a property within the form data.
   * @param args The keys or indexes used to access a nested property to a depth of 4.
   */
  <
    TDataKey extends keyof Required<TData>,
    TData2 extends Required<TData>[TDataKey],
    TDataKey2 extends keyof TData2,
    TData3 extends TData2[TDataKey2],
    TDataKey3 extends keyof TData3,
    TData4 extends TData3[TDataKey3],
    TDataKey4 extends keyof TData4
  >(
    ...args: [
      key1: KeyOrIndex<Required<TData>, TDataKey>,
      key2: KeyOrIndex<TData2, TDataKey2>,
      key3: KeyOrIndex<TData3, TDataKey3>,
      key4: KeyOrIndex<TData4, TDataKey4>
    ]
  ): BindingTools<TData4[TDataKey4]>;
  /**
   * Used to access a property within the form data.
   * @param args The keys or indexes used to access a nested property to a depth of 5.
   */
  <
    TDataKey extends keyof Required<TData>,
    TData2 extends Required<TData>[TDataKey],
    TDataKey2 extends keyof TData2,
    TData3 extends TData2[TDataKey2],
    TDataKey3 extends keyof TData3,
    TData4 extends TData3[TDataKey3],
    TDataKey4 extends keyof TData4,
    TData5 extends TData4[TDataKey4],
    TDataKey5 extends keyof TData5
  >(
    ...args: [
      key1: KeyOrIndex<Required<TData>, TDataKey>,
      key2: KeyOrIndex<TData2, TDataKey2>,
      key3: KeyOrIndex<TData3, TDataKey3>,
      key4: KeyOrIndex<TData4, TDataKey4>,
      key5: KeyOrIndex<TData5, TDataKey5>
    ]
  ): BindingTools<TData5[TDataKey5]>;
}

/**
 * Used to limit the KeyChain template type (part of the client side validation schema.)
 * NOTE: This config currently limits the max nesting depth within a single form state to `5` levels, matching the `formProp` method.
 * If deeper nesting is required, you should probably be using child binders to split the form.
 */
export type KeyChainTemplateLimitMap = [never, 0, 1, 2, 3, 4, 5];

/**
 * Either a `string` key used to index an object or a `number` index used to index an array.
 */
export type PropertyKey = string | number;

/**
 * The array of key strings and array indexes used to target a nested property.
 */
export type KeyChain = Array<PropertyKey>;

/**
 * The tools provided to a component to allow it to bind to a specific property within the form data.
 */
export interface IBindingProps<TValue> {
  /**
   * The current value of the targeted property within the form data.
   */
  value: TValue | undefined;
  /**
   * Sets a new value for the targeted property within the form data.
   */
  setValue: (value: TValue | undefined) => void;
  /**
   * The root dispatcher for all form actions, can be used to send complex state changes to the form binder as a whole.
   */
  dispatch: FormDispatcher<TValue>;
  /**
   * The chain of nesting keys used to access this property from the root of the form data object.
   */
  keyChain: KeyChain;
  /**
   * An array of current validation errors relating to the targeted property within the form data.
   */
  myValidationErrors: IValidationError[];
  /**
   * The root form configuration, these settings should be respected by all bindable components.
   * NOTE: any is OK here because the binding tools object does not need to know the shape of the entire form data.
   */
  formConfig?: IFormConfig<unknown>;
  /**
   * The bind config specific to this property binding, these settings should be respected by all bindable components.
   */
  bindConfig?: IBindConfig<TValue>;
  /**
   * The initial value attributed to the targeted property before any user input.
   */
  initialValue: TValue | undefined;
  /**
   * Adds a validation error for a field within the form state.
   * @param messages (ValidationMessage | ValidationMessage[]) The validation error message(s) to add. A validation message can be a string or a JSX element, if using JSX please add a key to the element to keep the animations consistent
   * @param identifier The identifier so use when adding the validation error(s), allows this group to be independently cleared.
   */
  addValidationError: (messages: ValidationMessage | ValidationMessage[], identifier?: string) => void;
  /**
   * Clears all client validation errors for the current form state.
   * @param identifiers an optional array of validation error identifiers, if passed, only errors that match the identifier will be deleted.
   */
  clearClientValidationErrors: (...identifiers: string[]) => void;
  /**
   * Whether the field input has been interacted with
   */
  isTouched: boolean;
  /**
   * Set the field input touched state
   */
  setTouched: (isTouched: boolean) => void;
  /**
   * An array of touched states relating to the targeted property within the form data.
   */
  myTouchedState: TouchedState;
  /**
   * Provides access to the top level client validation dispatcher.
   * Used pretty much exclusively by child forms to dispatch errors for the correct key
   */
  clientValidationDispatcher: ValidationDispatcher;
  /**
   * Provides access to the top level touched state dispatcher.
   * Used pretty much exclusively by child forms to dispatch touched state for the correct key
   */
  touchedStateDispatcher: TouchedDispatcher;
  /**
   * Whether the parent form has been marked as touched globally
   */
  allTouched: boolean;
  /**
   * Runs specific field validator in the validators schema again the current form state.
   * @param setInputTouched Whether to set the targeted control to "touched" before running the validator, default: true
   * @param silent A boolean representing whether validation errors should be dispatched to the form elements
   * @param validateAll If true, the validator will run against the entire schema, not just the current field
   * NOTE: If no schema has been passed, this will always return `true`
   */
  validate: (setInputTouched?: boolean, silent?: boolean, validateAll?: boolean) => boolean;
  /**
   * Whether the field input has any validation errors
   */
  isValid: boolean;
  /**
   * The method to trigger validation against the validation schema
   * @param keyChain The identifier for the form item to run the validation against
   * @param silent A boolean representing whether validation errors should be dispatched to the form elements
   */
  parseValidationSchema: (keyChain?: KeyChain, silent?: boolean) => boolean;
}

/**
 * Action used to set a root property to a new value, cannot be a nested value.
 */
export interface IFormSetOneAction<TValue> {
  /**
   * The type used to detect a `set-one` action
   */
  type: 'set-one';
  /**
   * The key or index used to retrieve the root property from the form data object.
   */
  propertyKey: PropertyKey;
  /**
   * The new value to set.
   */
  value: TValue;
}

/**
 * Action used to set any property to a new value, supports a nested property through the supplied key chain.
 */
export interface IFormSetPathAction<TValue> {
  /**
   * The type used to detect a `set-path` action
   */
  type: 'set-path';
  /**
   * The chain of keys and/or indexes used to retrieve the property from the form data object.
   */
  keyChain: KeyChain;
  /**
   * The new value to set.
   */
  value: TValue;
}

/**
 * Action used to set the entire form data object to a new value
 */
export interface IFormSetAllAction<TData> {
  /**
   * The type used to detect a `set-all` action
   */
  type: 'set-all';
  /**
   * An optional object to set as the entire new state, can be partial, if not passed form data will be reset to empty.
   */
  data: Partial<TData | undefined>;
}

/**
 * The validation modes supported by form inputs.
 * - `icon` displays an error icon in the event of a validation error.
 * - `message` displays a supplied error message in the event of a validation error.
 * - `both` displays both the icon and the message.
 */
export type FormValidationMode = 'icon' | 'message' | 'both';

/**
 * A dispatch function used to send an action to the form data reducer.
 */
export type FormDispatcher<TData> = (action: FormAction<TData, unknown>) => TData;

/**
 * The validation message
 * Can be a string or an element
 */
export type ValidationMessage = string | JSX.Element;

/**
 * An individual validation error.
 */
export interface IValidationError {
  /**
   * The attribute of the form data to apply the error to.
   * - Should represent a string path to a nested property, or a string key to a root property.
   * - Two formats are accepted:
   * @example `rootObject.subObject.subArray.3.field`
   * @example `rootObject.subObject.subArray[3].field`
   */
  key: string;
  /**
   * The error message
   */
  message: ValidationMessage;
  /**
   * Identifier (optional)
   * - Can be used when dispatching validation errors client side so that they can be grouped and cleared in groups.
   */
  identifier?: string;
}

/**
 * The optional bind config for a specific property binding.
 */
export interface IBindConfig<TValue> {
  /**
   * A set of functions to control the format of the value
   */
  format?: {
    /**
     * Formats the value on its way out of the form data object.
     */
    fromData?: (value?: TValue) => TValue;
    /**
     * Formats the value on its way into the form data object.
     */
    toData?: (value?: TValue) => TValue;
  };
  /**
   * If auto validation is enabled and a schema is passed, this toggle will run validate against the entire schema when this control validates.
   * This is useful if you have a complex schema with a top level `refine` that you want to run against the entire form state when this control is validated.
   */
  autoValidateAll?: boolean;
}

/**
 * Checks a form state field type and adds the necessary zod validation extensions for optional / nullable fields
 */
export type ZodNullOrUndefined<TProp, TZod extends ZodTypeAny> = TProp extends undefined
  ? ZodOptional<TZod>
  : TProp extends null
  ? ZodNullable<TZod>
  : TZod;

/**
 * Defines the zod validation schema for an array
 * NOTE: By splitting the single object properties schema from the array validation options, we can maintain type safety, flexibility and intellisense
 */
export interface IArrayOfZod<TProp> {
  /** The validation for each item within the array (will be an object of key/validator pairs if it's an array of objects) */
  itemSchema: TProp extends object ? { [TKey in keyof TProp]: ToZod<TProp[TKey]> } : ToZod<TProp>;
  /** A function which defines the validation to apply to the array itself (e.g. `opts: arr => arr.min(1).max(5)`) */
  opts?: (
    arr: ZodArray<TProp & ZodTypeAny>
  ) =>
    | ZodArray<TProp & ZodTypeAny>
    | ZodNullable<ZodTypeAny>
    | ZodOptional<ZodTypeAny>
    | ZodOptional<ZodNullable<ZodTypeAny>>
    | ZodEffects<ZodTypeAny>;
}

/**
 * Defines the zod validation schema for an object
 * NOTE: By splitting the single object properties schema from the object validation options, we can maintain type safety, flexibility and intellisense
 */
export interface IObjectOfZod<TProp> {
  /** The validation for each key within the object (will be an object of key/validator pairs) */
  schema: TProp;
  /** A function which defines the validation to apply to the object itself (e.g. `opts: ob => ob.required()`) */
  opts?: (
    ob: ZodObject<TProp & ZodRawShape>
  ) =>
    | ZodObject<TProp & ZodRawShape>
    | ZodNullable<ZodTypeAny>
    | ZodOptional<ZodTypeAny>
    | ZodOptional<ZodNullable<ZodTypeAny>>
    | ZodEffects<ZodTypeAny>;
}

type WithZodAdditions<T extends ZodTypeAny, K> =
  | T
  | ZodLiteral<K>
  | ZodOptional<T>
  | ZodNullable<T>
  | ZodOptional<ZodNullable<T>>
  | ZodEffects<T, K, K>;

/**
 * Root type for applying the correct zod validation type to a prop within form state
 * - Works by creating a type string for the form state prop and using this to index an object type containing zod requirements for each type
 */
export type ToZod<TProp> = {
  any: never;
  array: TProp extends Array<infer TInner> ? IArrayOfZod<TInner> : never;
  string: ZodNullOrUndefined<TProp, WithZodAdditions<ZodString, string>>;
  bigint: ZodNullOrUndefined<TProp, WithZodAdditions<ZodBigInt, number>>;
  number: ZodNullOrUndefined<TProp, WithZodAdditions<ZodNumber, number>>;
  boolean: ZodNullOrUndefined<TProp, WithZodAdditions<ZodBoolean, boolean>>;
  date: ZodNullOrUndefined<TProp, WithZodAdditions<ZodDate, Date>>;
  object: IObjectOfZod<{ [TKey in keyof TProp]: ToZod<TProp[TKey]> }>;
  rest: never;
}[StringType<TProp>];

/**
 * Flat, object based validation schema for a form state object.
 */
export type IObjectValidationSchema<TData> = TData extends Array<infer U>
  ? IArrayOfZod<U>
  : TData extends object
  ? { [K in keyof TData]: ToZod<TData[K]> } | IObjectOfZod<{ [K in keyof TData]: ToZod<TData[K]> }>
  : never;

/**
 * Allows the validation schema to be a function that returns a schema.
 * The function receives the live form state as an argument so it can be used to create dynamic validation schemas.
 */
export type IFunctionValidationSchema<TData> = (data: TData | undefined) => IObjectValidationSchema<TData>;

/**
 * Root type for creating a zod schema type for an existing interface
 * - Zod prefer you to generate the type from the runtime validation schema, but because we're working from a generated TS client, we need this type so we can do things the other way around
 */
export type IValidationSchema<TData> = IObjectValidationSchema<TData> | IFunctionValidationSchema<TData>;

/**
 * Optional configuration for the form hook
 */
export interface IFormConfig<TData> {
  /**
   * Any current validation errors, usually from an API request.
   */
  validationErrors?: IValidationError[];
  /**
   * Optional client side validation schema.
   * - Uses a type safe wrapper around the zod framework.
   */
  validationSchema?: IValidationSchema<TData>;
  /**
   * How to display validation errors
   * - `icon` displays an error icon in the event of a validation error.
   * - `message` displays a supplied error message in the event of a validation error.
   * - `both` displays both the icon and the message.
   */
  validationMode?: FormValidationMode;
  /**
   * An optional icon to use for validation errors in place of the default.
   * @default warning
   */
  validationErrorIcon?: JSX.Element;

  /** should the input validate automatically against the provided schema? Default: `true` */
  autoValidate?: boolean;
}

/**
 * The root type for a form action to be dispatched to the reducer.
 */
export type FormAction<TData, TValue> =
  | IFormSetOneAction<TValue>
  | IFormSetPathAction<TValue>
  | IFormSetAllAction<TData>;

/**
 * The items returned from the `useForm` hooks.
 */
export interface HookReturn<TData extends object> {
  /**
   * The live form state object.
   * - The root reference is redefined on any change so this can be used as a hook dependency.
   * - References below the root are smart and only redefined when data beneath them has changed, so use the most granular possible dependencies in your hooks!
   */
  formState: TData | undefined;
  /**
   * The root method used to access a property within the form data object.
   * - Receives a strictly typed set of args for targeting nested properties within a complex data object.
   * - Can also allow targeting objects within an array by requesting an index number rather than a key.
   * - The args passed to `formProp` form a "key chain" which is then used to access properties within the data object.
   * @returns a set of tools for the property in question, notably `bind` and `set`.
   */
  formProp: IFormProp<TData>;
  /**
   * Resets user inputted form data back to the most recent "initial" value passed into the hook.
   */
  resetFormData: () => void;
  /**
   * Returns all current form data as an object
   * - Will match the value of `formState` but useful as a light dependency for hooks that need to access the data functionally.
   */
  getFormData: () => TData | undefined;
  /**
   * Sets the entire form data object to a new value
   * @param newData The data to set as the active form data.
   */
  setFormData: (newData: TData) => void;
  /**
   * Clears all client validation errors for the current form state.
   * @param identifiers an optional array of validation error identifiers, if passed, only errors that match the identifier will be deleted.
   */
  clearClientValidationErrors: (...identifiers: string[]) => void;
  /**
   * Adds one or more validation errors to the current form state.
   * - Validation errors consist of a key to target the property, and a message to display.
   * @param validationErrors The errors to add to the current state.
   */
  addValidationError: (...validationErrors: IValidationError[]) => void;
  /**
   * Runs all validators in the validators schema again the current form state.
   * @param setAllTouched Whether to set all inputs to "touched" before running the validator, default: true
   * @param silent A boolean representing whether validation errors should be dispatched to the form elements
   */
  validate: (setAllTouched?: boolean, silent?: boolean) => boolean;
  /**
   * Live boolean representing the validity of the current form based on the validation schema.
   */
  isValid: boolean;
  /**
   * Sets the global touch state to true for the context of this form hook
   */
  touchAll: () => void;
  /**
   * Marks all controls as "untouched" essentially resetting the form in terms of user interaction
   */
  resetTouchedState: () => void;
  /**
   * Live boolean representing whether the global touch has been set to true
   */
  allTouched: boolean;
}

/**
 * Action type for adding a client validation error
 */
export interface IAddValidationAction {
  /**
   * Type discriminating property - defines the action type
   */
  type: 'add-validation';
  /**
   * An array of validation errors to add
   */
  errors: IValidationError[];
}

/**
 * Action type for clearing a client validation error
 */
export interface IClearValidationAction {
  /**
   * Type discriminating property - defines the action type
   */
  type: 'clear-validation';
  /**
   * The form property key for the validation messages to clear, will clear all if absent
   */
  key?: string;
  /**
   * An optional array of specific message identifiers to clear, will clear all if absent
   */
  identifiers?: string[];
}

/**
 * Union type for a validation action, supports adding & clearing client validation errors
 */
export type ValidationAction = IAddValidationAction | IClearValidationAction;

/**
 * A dispatch function used to send an action to the form data reducer.
 */
export type ValidationDispatcher = (action: ValidationAction) => void;

/**
 * Type for initial data when passed to the form hook as a functional initializer rather than an object
 */
export type InitialDataFunction<TData extends object> = (currentState?: TData) => TData;

/**
 * Tools and elements returned as the final part of the `useBindingState` hook
 */
interface IUseBindingStateReturnUtils<TData> {
  /** Take any value and use the fromData formatter on it */
  getFormattedValueFromData: (val?: TData) => TData | undefined;

  /** Take any value and use the toData formatter on it */
  getFormattedValueToData: (val?: TData) => TData | undefined;

  /** Validation errors from the binder concatenated with manually passed in errors */
  validationErrorMessages: ValidationMessage[];

  /* Has field been marked as touched */
  isTouched: boolean;

  /* Mark field as touched */
  setTouched: (isTouched: boolean) => void;

  /**
   * Runs specific field validator in the validators schema again the current form state.
   * @param setInputTouched Whether to set the targeted control to "touched" before running the validator, default: true
   * @param silent A boolean representing whether validation errors should be dispatched to the form elements
   */
  validate: (setInputTouched?: boolean, silent?: boolean) => boolean;
  /**
   * Whether the field input has any validation errors
   */
  isValid: boolean;

  /** The current validation mode for the form */
  validationMode?: FormValidationMode;

  /** The current validation mode for the form */
  validationErrorIcon?: JSX.Element;

  /** Derived from the validation mode */
  shouldShowValidationErrorIcon?: boolean;

  /** Derived from the validation mode */
  shouldShowValidationErrorMessage?: boolean;

  /** should the input validate automatically against the provided schema? Default: `true` */
  autoValidate?: boolean;
}

/**
 * Tools and elements returned from the `useBindingState` hook
 * NOTE: This is deliberately structured as a Tuple like React's `useState` ([value, setValue]), but with a 3rd exported element containing tools and elements
 */
export type UseBindingStateReturn<TData> = [
  /** The current value of the form property */
  TData | undefined,
  /** A setter for the form property */
  (newValue: TData | undefined) => void,
  /** Tools and elements returned as the final part of the `useBindingState` hook */
  IUseBindingStateReturnUtils<TData>
];

/** Used as overrides for the bind functionality, for use with component props */
export interface IUseBindingStateOverrides<TData> {
  /** The current value, will override the value from bind if both are provided */
  value?: TData;

  /** Called when the value is updated, is called alongside the binder's onChange */
  onChange?: (newValue: TData) => void;

  /** Component level validation errors, will be concatenated with the validation errors from the binder */
  validationErrorMessages?: ValidationMessage[];

  /** The current validation mode for the form */
  validationMode?: FormValidationMode;

  /** The current validation mode for the form */
  validationErrorIcon?: JSX.Element;

  /** should the input validate automatically against the provided schema? Default: `true` */
  autoValidate?: boolean;
}

/**
 * Action type dispatched to change the touched state of a field
 */
export interface ISetTouchedAction {
  /**
   * Type discriminating property - defines the action type
   */
  type: 'set-touched';
  /**
   * The key chain that references the correct field
   */
  keyChain: KeyChain;
  /**
   * The new touched state for the field
   */
  touched: boolean;
}

/**
 * Action type dispatched to reset all touch states to untouched
 */
export interface IResetTouchAction {
  type: 'reset-touched';
}

/**
 * Union type for touched state actions
 */
export type TouchedAction = ISetTouchedAction | IResetTouchAction;

/**
 * State object for touched state (an array of keys)
 */
export type TouchedState = string[];

/**
 * A dispatch function used to send an action to the interaction state reducer.
 */
export type TouchedDispatcher = (action: TouchedAction) => TouchedState;
