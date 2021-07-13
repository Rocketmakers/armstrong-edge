import * as React from 'react';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { IInputWrapperProps } from '../inputWrapper';
import { IStatusWrapperProps } from '../statusWrapper';
import { ITabControlProps } from '../tabControl';
export interface ITabSelectProps<Id extends ArmstrongId> extends Omit<ITabControlProps<Id>, 'currentTab' | 'onTabChange'>, IStatusWrapperProps, Pick<IInputWrapperProps, 'validationErrorMessages' | 'validationMode' | 'scrollValidationErrorsIntoView'> {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<Id>;
    /** the current value of the input */
    value?: Id;
    /** the current value of the input */
    onValueChange?: (newValue: Id) => void;
    /** disable the input */
    disabled?: boolean;
}
/** A TabControl that can have its value bound to an Armstrong form */
export declare const TabSelect: (<Id extends ArmstrongId>(props: ITabSelectProps<Id> & React.RefAttributes<HTMLDivElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<ITabSelectProps<any>> | undefined;
};
