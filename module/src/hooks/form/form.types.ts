/* eslint-disable no-dupe-class-members */
/** ******************************************************
 * FORM - Types file.
 * All of the types specifically associated with the form.
 * No real code in here (TypeScript's not real.)
 ******************************************************* */

import { IconSet, IIcon } from '../../components/icon';

/**
 * Works out whether some data is an object, and array, or another type.
 * Used by `formProp` to type the next argument in the array.
 * If it's an object, this type becomes a key of that object.
 * If it's an array, this type becomes `number` to support indexing the array.
 * If it's any other type this type becomes `never`, to prevent `formProp` users digging into a non-nested type.
 */
export type KeyOrIndex<TData, TDataKey extends keyof TData> = TData extends object
  ? Extract<TDataKey, TData extends any[] ? number : unknown>
  : never;

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
  set: (newValue: TValue) => BindingToolsStandard<TValue>;
  /**
   * Gets the current value for a field within the form state.
   * @returns the value if set, or undefined.
   */
  get: () => TValue | undefined;
  /**
   * Adds a validation error for a field within the form state.
   * @param messages The validation error message(s) to add.
   */
  addValidationError: (...messages: string[]) => void;
  /**
   * Clears all validation messages associated with a key.
   */
  clearValidationErrors: () => void;
}

/**
 * The set of tools returned from `formProp` if the property in question is an array.
 */
export interface BindingToolsArray<TValue extends any[]> extends BindingToolsStandard<TValue> {
  /**
   * Sets the value of a field in the form state.
   * @param newValue The value to set the field to.
   * @returns Binding props for chaining.
   */
  set: (newValue: TValue) => BindingToolsArray<TValue>;
  /**
   * Adds a new item to an array field in the form state.
   * @param newItem The new item to add.
   */
  add: (newItem: TValue[0]) => BindingToolsArray<TValue>;
  /**
   * Removes the last item from an array field in the form state.
   */
  pop: () => BindingToolsArray<TValue>;
  /**
   * Inserts a new item into an array field at a specific index.
   * @param newItem The new item to add.
   * @param index The index at which to insert the new item.
   */
  insert: (newItem: TValue[0], index: number) => BindingToolsArray<TValue>;
  /**
   * Removes an item from an array field at a specific index.
   * @param index The index at which to insert the new item.
   */
  remove: (index: number) => BindingToolsArray<TValue>;
}

/**
 * The set of tools returned from `formProp`.
 * - This root type detects whether the value is an array and assigns the correct type accordingly.
 */
export type BindingTools<TValue> = TValue extends any[] ? BindingToolsArray<TValue> : BindingToolsStandard<TValue>;

/**
 * This abstract class is used to handle the typings for the args passed to `formProp`.
 * - Allows `formProp` to receive a strictly typed set of args for targeting nested properties within a complex data object.
 * - Can also allow targeting objects within an array by requesting an index number rather than a key.
 * - The args passed to `formProp` form a "key chain" which is then used to access properties within the data object.
 */
export declare abstract class FormPropFactory<TData extends object> {
  /**
   * A fake initializer for the class, used to provide the type for the form data
   * @param data provides the typing for the form data
   */
  constructor(data: TData);

  /**
   * Used to access a property within the form data.
   * @param args The key of the property to access.
   */
  public formProp<TDataKey extends keyof TData>(...args: [key1: KeyOrIndex<TData, TDataKey>]): BindingTools<TData[TDataKey]>;

  /**
   * Used to access a property within the form data.
   * @param args The keys or indexes used to access a nested property to a depth of 2.
   */
  public formProp<TDataKey extends keyof TData, TData2 extends TData[TDataKey], TDataKey2 extends keyof TData2>(
    ...args: [key1: KeyOrIndex<TData, TDataKey>, key2: KeyOrIndex<TData2, TDataKey2>]
  ): BindingTools<TData2[TDataKey2]>;

  /**
   * Used to access a property within the form data.
   * @param args The keys or indexes used to access a nested property to a depth of 3.
   */
  public formProp<
    TDataKey extends keyof TData,
    TData2 extends TData[TDataKey],
    TDataKey2 extends keyof TData2,
    TData3 extends TData2[TDataKey2],
    TDataKey3 extends keyof TData3
  >(
    ...args: [key1: KeyOrIndex<TData, TDataKey>, key2: KeyOrIndex<TData2, TDataKey2>, key3: KeyOrIndex<TData3, TDataKey3>]
  ): BindingTools<TData3[TDataKey3]>;

  /**
   * Used to access a property within the form data.
   * @param args The keys or indexes used to access a nested property to a depth of 4.
   */
  public formProp<
    TDataKey extends keyof TData,
    TData2 extends TData[TDataKey],
    TDataKey2 extends keyof TData2,
    TData3 extends TData2[TDataKey2],
    TDataKey3 extends keyof TData3,
    TData4 extends TData3[TDataKey3],
    TDataKey4 extends keyof TData4
  >(
    ...args: [
      key1: KeyOrIndex<TData, TDataKey>,
      key2: KeyOrIndex<TData2, TDataKey2>,
      key3: KeyOrIndex<TData3, TDataKey3>,
      key4: KeyOrIndex<TData4, TDataKey4>
    ]
  ): BindingTools<TData4[TDataKey4]>;

  /**
   * Used to access a property within the form data.
   * @param args The keys or indexes used to access a nested property to a depth of 5.
   */
  public formProp<
    TDataKey extends keyof TData,
    TData2 extends TData[TDataKey],
    TDataKey2 extends keyof TData2,
    TData3 extends TData2[TDataKey2],
    TDataKey3 extends keyof TData3,
    TData4 extends TData3[TDataKey3],
    TDataKey4 extends keyof TData4,
    TData5 extends TData4[TDataKey4],
    TDataKey5 extends keyof TData5
  >(
    ...args: [
      key1: KeyOrIndex<TData, TDataKey>,
      key2: KeyOrIndex<TData2, TDataKey2>,
      key3: KeyOrIndex<TData3, TDataKey3>,
      key4: KeyOrIndex<TData4, TDataKey4>,
      key5: KeyOrIndex<TData5, TDataKey5>
    ]
  ): BindingTools<TData5[TDataKey5]>;
}

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
  setValue: (value: TValue) => void;
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
   */
  formConfig?: IFormConfig;
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
   * @param messages (string|string[]) The validation error message(s) to add.
   */
  addValidationError: (...messages: string[]) => void;
  /**
   * Clears all validation messages associated with a key.
   */
  clearValidationErrors: () => void;
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
  data: Partial<TData>;
}

/**
 * A dispatch function used to send an action to the form data reducer.
 */
export type FormDispatcher<TData> = (action: FormAction<TData, any>) => TData;

/**
 * The validation modes supported by form inputs.
 * - `icon` displays an error icon in the event of a validation error.
 * - `message` displays a supplied error message in the event of a validation error.
 * - `both` displays both the icon and the message.
 */
export type FormValidationMode = 'icon' | 'message' | 'both';

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
  message: string;
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
}

/**
 * Optional configuration for the form hook
 */
export interface IFormConfig {
  /**
   * Any current validation errors, usually from an API request.
   */
  validationErrors?: IValidationError[];
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
  validationErrorIcon?: IIcon<IconSet>;
}

/**
 * The root type for a form action to be dispatched to the reducer.
 */
export type FormAction<TData, TValue> = IFormSetOneAction<TValue> | IFormSetPathAction<TValue> | IFormSetAllAction<TData>;

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
  formProp: FormPropFactory<TData>['formProp'];
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
   * Clears all validation errors for the current form state.
   */
  clearAllValidationErrors: () => void;
  /**
   * Adds one or more validation errors to the current form state.
   * - Validation errors consist of a key to target the property, and a message to display.
   * @param validationErrors The errors to add to the current state.
   */
  addValidationError: (...validationErrors: IValidationError[]) => void;
}

/**
 * The delay config, used to set throttle and debounce values.
 */
export interface IDelayInputConfig {
  /**
   * (debounce|throttle) Whether to use a debounce or a throttle delay.
   */
  mode: 'debounce' | 'throttle';

  /**
   * (debounce|throttle) The number of milliseconds to delay for.
   */
  milliseconds: number;
}

export interface IAddValidationAction {
  type: 'add-validation';
  errors: IValidationError[];
}
export interface IClearValidationAction {
  type: 'clear-validation';
  key?: string;
}

export type ValidationAction = IAddValidationAction | IClearValidationAction;
