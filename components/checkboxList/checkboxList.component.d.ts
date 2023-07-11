import * as React from 'react';
import { IBindingProps } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongId, ArmstrongVFCProps, DisplaySize, IArmstrongOption } from '../../types';
import { ICheckboxProps } from '../checkbox/checkbox.component';
import { IInputWrapperProps } from '../inputWrapper';
export interface ICheckboxListProps<Id extends ArmstrongId> extends Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages' | 'validationErrorsClassName'>, React.RefAttributes<HTMLDivElement> {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<Id[]>;
    /** The options to be shown in the input */
    options: IArmstrongOption<Id, Omit<ICheckboxProps<boolean>, 'bind' | 'checked' | 'disabled' | 'label' | 'validationErrorsClassName' | 'validationErrorMessages' | 'scrollValidationErrorsIntoView' | 'ref'>>[];
    /** CSS className property */
    className?: string;
    /** the current value of the radioInput */
    value?: Id[];
    /** Fired when the value changes */
    onChange?: (newValue: Id[]) => void;
    /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
    error?: boolean;
    /** (Optional) A custom JSX.Element for the checked indicator. */
    customIndicator?: JSX.Element;
    /** which size variant to use */
    displaySize?: DisplaySize;
    /** Label for the whole radio group itself */
    label?: string;
    /** (Optional) Class name for the label component */
    labelClassName?: string;
    /** (Optional) Id to use for the checkbox. Falls back to React ID if not provided */
    labelId?: string;
    /** Indicates if field must be used to submit form */
    required?: boolean;
    /** wether input's value can be changed by user */
    disabled?: boolean;
    /** Symbol to use as the required indicator on the label, defaults to "*" */
    requiredIndicator?: React.ReactNode;
}
/** Render a list of radio inputs which binds to a single string */
export declare const CheckboxList: (<Id extends ArmstrongId>(props: ArmstrongVFCProps<ICheckboxListProps<Id>, HTMLDivElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<ICheckboxListProps<ArmstrongId>>;
