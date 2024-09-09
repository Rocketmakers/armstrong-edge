import * as React from 'react';
import { IBindingProps } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, DisplaySize, NullOrUndefined } from '../../types';
import { IInputWrapperProps } from '../inputWrapper/inputWrapper.component';
type NativeTextAreaProps = Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'value' | 'ref'>;
export interface ITextAreaProps<TValue extends NullOrUndefined<string> | NullOrUndefined<number>> extends NativeTextAreaProps, Omit<IInputWrapperProps, 'onClick' | 'onValueChange'> {
    /** A class name to apply to the input element */
    textAreaClassName?: string;
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<TValue>;
    /** Called when the value changes, takes into account any delay values and other effects. */
    onValueChange?: (value?: TValue) => void;
    /** The delay config, used to set throttle and debounce values. */
    delay?: number;
    /** The current value of the input */
    value?: TValue;
    /** which size variant to use */
    displaySize?: DisplaySize;
    /** A callback function to handle onChange event */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** An ID for the label to use when testing  */
    testId?: string;
    /** should the input validate automatically against the provided schema? Default: `true` */
    autoValidate?: boolean;
}
/** A component which wraps up a native text area element with some binding logic, labels and validation errors. */
export declare const TextArea: (<TStringValue extends NullOrUndefined<string>>(props: ArmstrongFCProps<ITextAreaProps<TStringValue>, HTMLTextAreaElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<ITextAreaProps<string>>;
export {};
