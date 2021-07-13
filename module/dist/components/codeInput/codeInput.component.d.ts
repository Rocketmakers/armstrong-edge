import * as React from 'react';
import { IconSet, IInputWrapperProps } from '../..';
import { IBindingProps } from '../../hooks/form';
import { IIconWrapperProps } from '../iconWrapper';
import { IInputProps } from '../input';
export interface ICodeInputInput extends Omit<IInputProps<string>, 'onChange' | 'value' | 'delay' | 'onValueChange' | 'validationErrorMessages' | 'validationMode' | 'ref' | 'maxLength' | 'onKeyDown' | 'bind'> {
    length: number;
}
/**
 * Can be a number representing the length of an input, I.E [1,1,1]
 * Can be a string representing a piece of text inbetween inputs I.E. [1,1,'-',1,1]
 * Can be an object representing an input with some properties
 */
export declare type CodeInputPartDefinition = ICodeInputInput | string | number;
export interface ICodeInputPartProps {
    part: CodeInputPartDefinition;
    /** the current value of this part */
    value: string;
    /** called when the text input changes */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** called when the user presses a key inside the input */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
/** an individual input from the CodeInput */
export declare const CodeInputPart: React.ForwardRefExoticComponent<ICodeInputPartProps & React.RefAttributes<HTMLInputElement>>;
/** A text input where the value is split between multiple inputs, where focus is automatically moved between them as the user edits */
export interface ICodeInputProps extends IIconWrapperProps<IconSet, IconSet>, Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'disabled' | 'pending' | 'error' | 'statusPosition' | 'validationErrorMessages'> {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<string>;
    /** the current value */
    value?: string;
    /** Fired when the code input changes */
    onChange?: (newValue: string) => void;
    /**
     * the parts of the code input
     * Can be a number representing the length of an input, I.E [1,1,1]
     * Can be a string representing a piece of text inbetween inputs I.E. [1,1,'-',1,1]
     * Can be an object representing an input with some properties
     */
    parts: CodeInputPartDefinition[];
    className?: string;
}
export declare const CodeInput: React.ForwardRefExoticComponent<ICodeInputProps & React.RefAttributes<HTMLDivElement>>;
