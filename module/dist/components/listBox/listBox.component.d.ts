import * as React from 'react';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { IDropdownItem, IDropdownItemsProps } from '../dropdownItems';
import { IconSet, IIcon } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
import { IInputWrapperProps } from '../inputWrapper';
import { ISelectOption } from '../select';
export interface IListBoxOption<Id extends ArmstrongId, TSelectData = any> extends IIconWrapperProps<IconSet, IconSet>, ISelectOption<Id, TSelectData>, Pick<IDropdownItem, 'group'> {
}
/** A DOM recreation of a select element */
export interface IListBoxProps<Id extends ArmstrongId, TSelectData = any> extends IInputWrapperProps, Pick<IDropdownItemsProps, 'noItemsText'> {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<Id>;
    /** The options to be shown in the input */
    options: IListBoxOption<Id, TSelectData>[];
    /** Called on change to get the  */
    onSelectOption?: (option?: IListBoxOption<Id>) => void;
    /** array of validation errors to render */
    validationErrorMessages?: string[];
    /** how to render the validation errors */
    validationMode?: FormValidationMode;
    /** the icon overlaying the select element to the right, usually a down arrow */
    selectOverlayIcon?: IIcon<IconSet> | JSX.Element;
    /** the current value */
    value?: Id;
    /** the string to show when there is no value */
    placeholder?: string;
    /** should allow deletion of value with a cross */
    deleteButton?: boolean;
    /** ClassName for the wrapper element */
    wrapperClassName?: string;
}
/** A select input which takes an array of options */
export declare const ListBox: (<Id extends ArmstrongId, TSelectData = any>(props: IListBoxProps<Id, TSelectData> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLSelectElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<IListBoxProps<any, any>> | undefined;
};
