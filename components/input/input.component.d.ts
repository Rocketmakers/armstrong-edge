import * as React from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { IBindingProps } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, DisplaySize, NullOrUndefined } from '../../types';
import { IInputWrapperProps } from '../inputWrapper/inputWrapper.component';
type NativeInputProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'value' | 'ref'>;
interface IInputProps<TValue extends NullOrUndefined<string> | NullOrUndefined<number>> extends Omit<NativeInputProps, 'type'>, IInputWrapperProps {
    /** A class name to apply to the input element */
    inputClassName?: string;
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
    /** optional test ID to use for the input wrapper */
    wrapperTestId?: string;
}
type SupportedStringInputTypes = 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
export interface ITextInputProps<TValue extends NullOrUndefined<string>> extends IInputProps<TValue> {
    /** The type of input, used to discriminate the bind/value type */
    type?: Extract<HTMLInputTypeAttribute, SupportedStringInputTypes>;
}
export interface INumberInputProps<TValue extends NullOrUndefined<number>> extends IInputProps<TValue> {
    /** The type of input, used to discriminate the bind/value type */
    type: 'number';
}
/** A component which wraps up a native input element with some binding logic and some repeated elements (icons and stuff) for components which only contain a single input element. */
export declare const Input: (<TStringValue extends NullOrUndefined<string>, TNumberValue extends NullOrUndefined<number>>(props: ArmstrongFCProps<ITextInputProps<TStringValue> | INumberInputProps<TNumberValue>, HTMLInputElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<ITextInputProps<string> | INumberInputProps<number>>;
export {};
