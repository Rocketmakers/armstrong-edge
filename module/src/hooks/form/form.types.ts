/********************************************************
 * FORM - Types file.
 * All of the types specifically associated with the form.
 * No real code in here (TypeScript's not real.)
 ********************************************************/

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
 *
 */
export type BindingTools<TValue> = TValue extends any[] ? BindingToolsArray<TValue> : BindingToolsStandard<TValue>;

export declare abstract class BindingToolMaker<TData extends object> {
  constructor(data: TData);

  public getBindingTools<TDataKey extends keyof TData>(key1: TDataKey): BindingTools<TData[TDataKey]>;
  public getBindingTools<TDataKey extends keyof TData>(...args: [key1: KeyOrIndex<TData, TDataKey>]): BindingTools<TData[TDataKey]>;
  public getBindingTools<TDataKey extends keyof TData, TData2 extends TData[TDataKey], TDataKey2 extends keyof TData2>(
    ...args: [key1: KeyOrIndex<TData, TDataKey>, key2: KeyOrIndex<TData2, TDataKey2>]
  ): BindingTools<TData2[TDataKey2]>;
  public getBindingTools<
    TDataKey extends keyof TData,
    TData2 extends TData[TDataKey],
    TDataKey2 extends keyof TData2,
    TData3 extends TData2[TDataKey2],
    TDataKey3 extends keyof TData3
  >(
    ...args: [key1: KeyOrIndex<TData, TDataKey>, key2: KeyOrIndex<TData2, TDataKey2>, key3: KeyOrIndex<TData3, TDataKey3>]
  ): BindingTools<TData3[TDataKey3]>;
  public getBindingTools<
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
  public getBindingTools<
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

export type PropertyKey = string | number;
export type KeyChain = Array<PropertyKey>;

export interface IBindingProps<TValue> {
  value: TValue | undefined;
  setValue: (value: TValue) => void;
  dispatch: FormDispatcher<TValue>;
  keyChain: KeyChain;
  myValidationErrors: IValidationError[];
  formConfig?: IFormConfig;
  bindConfig?: IBindConfig<TValue>;
  initialValue: TValue | undefined;
}

export interface IFormSetOneAction<TData, TValue> {
  type: 'set-one';
  propertyKey: PropertyKey;
  value: TValue;
}

export interface IFormSetPathAction<TValue> {
  type: 'set-path';
  keyChain: KeyChain;
  value: TValue;
}

export interface IFormResetAction<TData> {
  type: 'set-all';
  data?: Partial<TData>;
}

export type FormDispatcher<TData> = (action: FormAction<TData, any>) => TData;

export type FormValidationMode = 'icon' | 'message' | 'both';

export interface IValidationError {
  key: string;
  message: string;
}

export interface IBindConfig<TValue> {
  format?: {
    forScreen?: (value: TValue) => TValue;
    forData?: (value: TValue) => TValue;
  };
}

export interface IFormConfig {
  validationErrors?: IValidationError[];
  validationMode?: FormValidationMode;
}

export type FormAction<TData, TValue> = IFormSetOneAction<TData, TValue> | IFormSetPathAction<TValue> | IFormResetAction<TData>;

export interface HookReturn<TData extends object> {
  formState: TData | undefined;
  formProp: BindingToolMaker<TData>['getBindingTools'];
  resetFormData: () => void;
  getFormData: () => TData | undefined;
  setFormData: (newData: TData) => void;
}
