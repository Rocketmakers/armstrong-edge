import * as React from 'react';
import { IBindingProps, ValidationMessage } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, DisplaySize, NullOrUndefined } from '../../types';
import { ILabelProps } from '../label/label.component';
import { IStatusWrapperProps } from '../statusWrapper/statusWrapper.component';
import { IValidationErrorsProps } from '../validationErrors/validationErrors.component';
type BindType = NullOrUndefined<boolean | 'indeterminate'>;
export interface ICheckboxProps<TData extends BindType> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'type' | 'checked'>, Omit<IValidationErrorsProps, 'validationErrors' | 'scrollIntoView'>, Pick<ILabelProps, 'required' | 'requiredIndicator'>, Pick<IStatusWrapperProps, 'statusPosition'> {
    /** (Optional) An IBindingProps<TData> object to bind the checkbox input to a form. */
    bind?: IBindingProps<TData>;
    /** (Optional) A TData value representing the initial checked state of the checkbox. This can be true, false, or 'indeterminate'. */
    checked?: TData;
    /** (Optional) A custom JSX.Element for the indeterminate state indicator. */
    customIndeterminateIndicator?: JSX.Element;
    /** (Optional) A custom JSX.Element for the checked indicator. */
    customIndicator?: JSX.Element;
    /** (Optional) A boolean flag to disable the checkbox input. */
    disabled?: boolean;
    /** (Optional) A React.ReactNode to display a label for the checkbox input. */
    label?: React.ReactNode;
    /** (Optional) Class name for the label component */
    labelClassName?: string;
    /** (Optional) Id to use for the checkbox. Falls back to React ID if not provided */
    labelId?: string;
    /** (Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed. */
    onCheckedChange?: (newValue: TData) => void;
    /** (Optional) Classname to use for the status wrapper */
    statusClassName?: string;
    /** (Optional) A string to set a custom data-testid attribute for the checkbox container. */
    testId?: string;
    /** (Optional) Class name for the validation errors */
    validationErrorsClassName?: string;
    /** (Optional) Can be a string or {key, element} key is necessary for animating in new messages   */
    validationErrorMessages?: ValidationMessage[];
    /** (Optional) A boolean flag to automatically scroll validation error messages into view. */
    scrollValidationErrorsIntoView?: boolean;
    /** which size variant to use */
    displaySize?: DisplaySize;
    /** should the input validate automatically against the provided schema? Default: `true` */
    autoValidate?: boolean;
}
export declare const Checkbox: (<TBind extends NullOrUndefined<boolean>>(props: ArmstrongFCProps<ICheckboxProps<TBind>, HTMLInputElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<ICheckboxProps<NullOrUndefined<boolean>>>;
export {};
