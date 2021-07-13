import { IconSet, IIcon } from '../../components/icon';
import { FormValidationMode, HookReturn, IBindingProps, IFormConfig } from './form.types';
/**
 * Turns an existing set of binding props into a piece of live state and a set of helper tools designed to be used in a form.
 * @param parentBinder A set of binding props associated with a property and returned from another `useForm` hook.
 * @param formConfig (optional) The settings to use with the form.
 * @returns The form state, property accessor, and associated helper methods.
 */
export declare function use<TData extends object>(parentBinder: IBindingProps<TData>, formConfig?: IFormConfig): HookReturn<TData>;
/**
 * Turns a potentially complex nested object or array into a piece of live state and a set of helper tools designed to be used in a form.
 * @param initialData (optional) The initial value of the form data object.
 * @param formConfig (optional) The settings to use with the form.
 * @returns The form state, property accessor, and associated helper methods.
 */
export declare function use<TData extends object>(initialData?: TData, formConfig?: IFormConfig): HookReturn<TData>;
/** The values and callbacks returned from the useBindingTools hook */
interface IUseBindingToolsReturnUtils<TData> {
    /** Take any value and use the fromData formatter on it */
    getFormattedValueFromData: (val?: TData) => TData | undefined;
    /** Take any value and use the toData formatter on it */
    getFormattedValueToData: (val?: TData) => TData | undefined;
    /** Validation errors from the binder concatenated with manually passed in errors */
    validationErrorMessages: string[];
    /** The current validation mode for the form */
    validationMode?: FormValidationMode;
    /** The current validation mode for the form */
    validationErrorIcon?: IIcon<IconSet>;
    /** Derived from the validation mode */
    shouldShowValidationErrorIcon?: boolean;
    /** Derived from the validation mode */
    shouldShowValidationErrorMessage?: boolean;
}
declare type UseBindingToolsReturn<TData> = [TData | undefined, ((newValue: TData) => void) | undefined, IUseBindingToolsReturnUtils<TData>];
/** Used as overrides for the bind functionality, for use with component props */
interface IUseBindingToolsOverrides<TData> {
    /** The current value, will override the value from bind if both are provided */
    value?: TData;
    /** Called when the value is updated, is called alongside the binder's onChange */
    onChange?: (newValue: TData) => void;
    /** Component level validation errors, will be concatenated with the validation errors from the binder */
    validationErrorMessages?: string[];
    /** The current validation mode for the form */
    validationMode?: FormValidationMode;
    /** The current validation mode for the form */
    validationErrorIcon?: IIcon<IconSet>;
}
/**
 * An optional hook for internal form component use. Takes a bind and some optional overrides and ensures that onChange and value
 * use the bind's formatters
 */
export declare function useBindingTools<TData>(bind?: IBindingProps<TData>, overrides?: IUseBindingToolsOverrides<TData>): UseBindingToolsReturn<TData>;
export {};
