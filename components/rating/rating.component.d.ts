import * as React from 'react';
import { IBindingProps } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, NullOrUndefined } from '../../types';
import { IButtonProps } from '../button';
import { IInputWrapperProps } from '../inputWrapper';
import { IStatusWrapperProps } from '../statusWrapper';
export interface IRatingPartProps extends Pick<IRatingProps<NullOrUndefined<number>>, 'filledIcon' | 'emptyIcon' | 'step' | 'mode' | 'disabled'> {
    /** the index of this rating part */
    index: number;
    /** the value of the Rating */
    value?: number;
    /** triggered when a user selects this part - only used in mode="radio" and mode="buttons"  */
    onSelectPart: (portion: number) => void;
    /** has an onChange or bind been passed to the parent Rating - if not, will just render icons */
    readOnly?: boolean;
}
export type RatingIconDefinition = JSX.Element | ((index: number) => JSX.Element);
export interface IRatingProps<TBind extends NullOrUndefined<number>> extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'>, Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages' | 'statusClassName' | 'validationErrorsClassName' | 'labelClassName' | 'labelId' | 'label' | 'required' | 'requiredIndicator' | 'displaySize'>, Pick<IButtonProps, 'leftOverlay' | 'rightOverlay'>, IStatusWrapperProps {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<TBind>;
    /** current value, as a number, of the rating */
    value?: TBind;
    /** called when the value of the input changes */
    onValueChange?: (newValue: TBind) => void;
    /** the icon to use for a filled star */
    filledIcon?: RatingIconDefinition;
    /** the icon to use for an empty star */
    emptyIcon?: RatingIconDefinition;
    /** the maximum possible value of the rating */
    maximum?: number;
    /** the size of each possible step - defaults to 1, set to 0.5 to allow half stars */
    step?: 1 | 0.5;
    /**
     * the kind of elements used to handle the interaction
     *
     * range will use an input with type='range' to handle the interaction, buttons will render a series of buttons, radio will render radio inputs
     * @default 'buttons'
     */
    mode?: 'range' | 'buttons' | 'radio';
    /** Whether to disable the input */
    disabled?: boolean;
    /** should the input validate automatically against the provided schema? Default: `true` */
    autoValidate?: boolean;
}
export declare const Rating: (<TBind extends NullOrUndefined<number>>(props: ArmstrongVFCProps<IRatingProps<TBind>, HTMLDivElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<IRatingProps<NullOrUndefined<number>>>;
