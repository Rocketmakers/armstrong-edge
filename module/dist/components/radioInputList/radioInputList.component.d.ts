import * as React from 'react';
import { IInputWrapperProps } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { IconSet } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
import { IRadioInputProps } from '../radioInput/radioInput.component';
export interface IRadioInputListOption<Id extends ArmstrongId> extends IIconWrapperProps<IconSet, IconSet> {
    id: Id;
    name?: string;
    group?: string;
}
export interface IRadioInputListProps<Id extends ArmstrongId> extends Pick<IRadioInputProps, 'checkedIcon' | 'uncheckedIcon'>, Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'> {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<Id>;
    /** The options to be shown in the input */
    options: IRadioInputListOption<Id>[];
    /** CSS className property */
    className?: string;
    /** the current value of the radioInput */
    value?: Id;
    /** Fired when the value changes */
    onChange?: (newValue: Id) => void;
    /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
    error?: boolean;
}
/** Render a list of radio inputs which binds to a single string */
export declare const RadioInputList: (<Id extends ArmstrongId>(props: IRadioInputListProps<Id> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLSelectElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<IRadioInputListProps<any>> | undefined;
};
