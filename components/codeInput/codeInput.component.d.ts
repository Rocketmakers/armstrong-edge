import * as React from 'react';
import { IBindingProps } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, DisplaySize, NullOrUndefined } from '../../types';
import { ITextInputProps } from '../input';
import { IInputWrapperProps } from '../inputWrapper';
import { CodeInputPartDefinition } from './codeInput.types';
export interface ICodeInputPartProps<TBind extends NullOrUndefined<string>> extends ITextInputProps<TBind> {
    /** The given length of this part. If this is a string, the string will be rendered. */
    part: CodeInputPartDefinition<TBind>;
}
/** A text input where the value is split between multiple inputs, where focus is automatically moved between them as the user edits */
export interface ICodeInputProps<TBind extends NullOrUndefined<string>> extends Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'disabled' | 'pending' | 'error' | 'statusPosition' | 'hideIconOnStatus' | 'validationErrorMessages' | 'leftOverlay' | 'rightOverlay' | 'statusClassName' | 'validationErrorsClassName' | 'labelClassName' | 'labelId' | 'disableOnPending'>, Omit<React.RefAttributes<HTMLDivElement>, 'ref'> {
    /** Prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<TBind>;
    /** The current value of the input */
    value?: TBind;
    /** Fired when the code input changes */
    onChange?: (newValue: TBind) => void;
    /**
     * The parts of the code input
     * Can be a number representing the length of an input, e.g. [1,1,1]
     * Can be a string representing a piece of text in-between inputs, e.g. [1,1,'-',1,1]
     * Can be an object representing an input with some properties
     */
    parts: CodeInputPartDefinition<TBind>[];
    /** Optional className for the code input */
    className?: string;
    /** which size variant to use */
    displaySize?: DisplaySize;
    /** Some optional label content */
    label?: React.ReactNode;
    /** Should the label show a required indicator? */
    required?: boolean;
    /** Symbol to use as the required indicator on the label, defaults to "*" */
    requiredIndicator?: React.ReactNode;
}
export declare const CodeInput: (<TBind extends NullOrUndefined<string>>(props: ArmstrongVFCProps<ICodeInputProps<TBind>, HTMLDivElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<ICodeInputProps<NullOrUndefined<string>>>;
