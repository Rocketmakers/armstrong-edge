import * as React from 'react';
import { IBindingProps } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { IInputWrapperProps } from '../inputWrapper/inputWrapper.component';
export interface ISwitchProps<TBind extends NullOrUndefined<boolean>> extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onChange' | 'checked'>, Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'validationErrorMessages' | 'disabled' | 'className' | 'displaySize' | 'labelId' | 'required' | 'requiredIndicator'> {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<TBind>;
    /** (Optional) Whether the switch is checked or not */
    checked?: TBind;
    /** (Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed. */
    onCheckedChange?: (newValue: TBind) => void;
    /** (Optional) The state of the switch when it is initially rendered. Use when you do not need to control its state. */
    defaultChecked?: boolean;
    /** (Optional) A boolean flag to disable the checkbox input. */
    disabled?: boolean;
    /** (Optional) A React.ReactNode to display a label for the switch input. */
    label?: React.ReactNode;
    /** (Optional) Class name for the switch label. */
    labelClassName?: string;
    /** (Optional) A boolean flag to automatically scroll validation error messages into view. */
    scrollValidationErrorsIntoView?: boolean;
    /** (Optional) Class name for the validation errors */
    validationErrorsClassName?: string;
    /** should the input validate automatically against the provided schema? Default: `true` */
    autoValidate?: boolean;
}
export declare const Switch: (<TBind extends NullOrUndefined<boolean>>(props: ArmstrongFCProps<ISwitchProps<TBind>, HTMLInputElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<ISwitchProps<NullOrUndefined<boolean>>>;
