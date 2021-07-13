import * as React from 'react';
import { IListBoxOption, IListBoxProps } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongId } from '../../types';
import { IconSet, IIcon } from '../icon';
import { IInputWrapperProps } from '../inputWrapper';
export interface IListBoxMultiProps<Id extends ArmstrongId, TSelectData = any> extends IInputWrapperProps, Pick<IListBoxProps<Id, TSelectData>, 'options' | 'onSelectOption' | 'selectOverlayIcon' | 'placeholder' | 'wrapperClassName' | 'deleteButton' | 'noItemsText'> {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<Id[]>;
    /** the icon overlaying the select element to the right, usually a down arrow */
    selectOverlayIcon?: IIcon<IconSet> | JSX.Element;
    /** the current value */
    value?: Id[];
    /** fired when the value changes */
    onValueChange?: (neWValue: Id[]) => void;
    /** if set, will render a string like "X selected" instead of the selected values as tags */
    renderPreview?: (selectedOptions: IListBoxOption<Id, TSelectData>[]) => React.ReactChild;
}
/** A DOM recreation of a select element, which binds to an array of Id values */
export declare const ListBoxMulti: (<Id extends ArmstrongId, TSelectData = any>(props: IListBoxMultiProps<Id, TSelectData> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLSelectElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<IListBoxMultiProps<any, any>> | undefined;
};
