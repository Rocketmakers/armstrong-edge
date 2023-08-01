import * as React from 'react';
import { IBindingProps, ValidationMessage } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, DisplaySize, NullOrUndefined } from '../../types';
import { IValidationErrorsProps } from '../validationErrors/validationErrors.component';
export interface IRangeInputProps<TData extends NullOrUndefined<number>> extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'type' | 'checked' | 'onChange' | 'ref' | 'dir' | 'defaultValue'>, Omit<IValidationErrorsProps, 'validationErrors' | 'scrollIntoView'> {
    /** (Optional) An IBindingProps<TData> object to bind the checkbox input to a form. */
    bind?: IBindingProps<TData>;
    /** (Optional) A TData value representing the value of the input. */
    value?: TData;
    /** (Optional) A custom JSX.Element for the thumb of the slider. */
    customThumb?: JSX.Element;
    /** (Optional) A boolean flag to disable the checkbox input. */
    disabled?: boolean;
    /** Indicates if field must be used to submit form */
    required?: boolean;
    /** Symbol to use as the required indicator on the label, defaults to "*" */
    requiredIndicator?: React.ReactNode;
    /** (Optional) A React.ReactNode to display a label for the checkbox input. */
    label?: React.ReactNode;
    /** (Optional) Class name for the label component */
    labelClassName?: string;
    /** (Optional) Id to use for the checkbox. Falls back to React ID if not provided */
    labelId?: string;
    /** (Optional) A callback function (newValue: TData) => void to handle state when value is changed. */
    onChange?: (newValue: TData) => void;
    /** (Optional) Class name to use for the status wrapper */
    statusClassName?: string;
    /** (Optional) Class name for the validation errors */
    validationErrorsClassName?: string;
    /** (Optional) Can be a string or {key, element} key is necessary for animating in new messages   */
    validationErrorMessages?: ValidationMessage[];
    /** (Optional) A boolean flag to automatically scroll validation error messages into view. */
    scrollValidationErrorsIntoView?: boolean;
    /** which size variant to use */
    displaySize?: DisplaySize;
    /** The minimum value, defaults to `0` */
    min?: number;
    /** The maximum value, defaults to `100` */
    max?: number;
    /** How big should the increments be on the slider. defaults to `1` */
    step?: number;
    /** should the input validate automatically against the provided schema? Default: `true` */
    autoValidate?: boolean;
}
export declare const RangeInput: (<TBind extends NullOrUndefined<number>>(props: ArmstrongFCProps<IRangeInputProps<TBind>, HTMLInputElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<IRangeInputProps<NullOrUndefined<number>>>;
