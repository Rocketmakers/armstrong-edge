import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import * as React from 'react';
import { IBindingProps } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongId, ArmstrongVFCProps, DisplaySize, IArmstrongOption } from '../../types';
import { IInputWrapperProps } from '../inputWrapper';
export interface IRadioGroupProps<Id extends ArmstrongId> extends Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages' | 'validationErrorsClassName'>, React.RefAttributes<HTMLDivElement> {
    /** Whether to show a vertical list of radio buttons or a horizontal set of adjacent buttons */
    displayMode?: 'radio' | 'button';
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<Id>;
    /** The options to be shown in the input */
    options: IArmstrongOption<Id, Omit<RadixRadioGroup.RadioGroupItemProps, 'value'>>[];
    /** CSS className property */
    className?: string;
    /** the current value of the radioInput */
    value?: Id;
    /** Fired when the value changes */
    onChange?: (newValue: Id) => void;
    /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
    error?: boolean;
    /** (Optional) A custom JSX.Element for the checked indicator. */
    customIndicator?: JSX.Element;
    /** which size variant to use */
    displaySize?: DisplaySize;
    /** Label for the whole radio group itself */
    label?: React.ReactNode;
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
    /** should the input validate automatically against the provided schema? Default: `true` */
    autoValidate?: boolean;
}
/** Render a list of radio inputs which binds to a single string */
export declare const RadioGroup: (<Id extends ArmstrongId>(props: ArmstrongVFCProps<IRadioGroupProps<Id>, HTMLDivElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<IRadioGroupProps<ArmstrongId>>;
