import * as React from 'react';
import { IInputWrapperProps } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { ICheckboxInputProps } from '../checkboxInput/checkboxInput.component';
import { IconSet } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
export interface ICheckboxInputListOption<Id extends ArmstrongId> extends IIconWrapperProps<IconSet, IconSet> {
    id: Id;
    name: string;
    group?: string;
}
export interface ICheckboxInputListProps<Id extends ArmstrongId> extends Pick<ICheckboxInputProps, 'checkedIcon' | 'uncheckedIcon'>, Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'> {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<Id[]>;
    /** The options to be shown in the input */
    options: ICheckboxInputListOption<Id>[];
    /** CSS className property */
    className?: string;
    /** the current value of the CheckboxInput */
    value?: Id[];
    /** fired when the value of the checkbox input changes */
    onChange?: (newValue: Id[]) => void;
    /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
    error?: boolean;
}
/** A list of checkboxes which binds to an array of IDs */
export declare const CheckboxInputList: (<Id extends ArmstrongId>(props: ICheckboxInputListProps<Id> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLSelectElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<ICheckboxInputListProps<any>> | undefined;
};
