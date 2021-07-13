import * as React from 'react';
import { ArmstrongId } from '../../types';
import { IDropdownProps } from '../dropdown';
import { IconSet } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
export interface IDropdownItem extends IIconWrapperProps<IconSet, IconSet> {
    /** The text content of the dropdown item */
    content: string;
    /** The string to be passed into onItemSelected */
    id: ArmstrongId;
    /** props to spread onto the div element for the dropdown item */
    htmlProps?: Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'onMouseUp' | 'ref'>;
    /** a group to show this item under */
    group?: string;
}
export interface IDropdownItemProps extends IDropdownItem {
    /** fired when clicking on the dropdown item */
    onMouseUp?: (event: React.MouseEvent) => void;
    /** fired when clicking on the dropdown item */
    onClick?: (event: React.MouseEvent) => void;
    /** fired when the cursor enters the dropdown item */
    onMouseEnter?: (event: React.MouseEvent) => void;
    /** the item is selected by keyboard - adds a data-keyboard-selected attribute */
    isKeyboardSelected: boolean;
    /** the item is selected - adds a data-selected attribute */
    isSelected: boolean;
    /** the prefix for the html ID - used for aria stuff */
    idPrefix?: string;
}
export declare const DropdownItem: React.ForwardRefExoticComponent<IDropdownItemProps & React.RefAttributes<HTMLLIElement>>;
export interface IDropdownItemsProps extends Omit<IDropdownProps, 'dropdownContent'> {
    /** The selectable items rendered inside the dropdown */
    items: IDropdownItem[];
    /** Fired when the user selects and item in the dropdown */
    onItemSelected: (content: ArmstrongId) => void;
    /** Whether the user should be able to use their keyboard to navigate through the dropdown while focused on something within children like an input */
    allowKeyboardNavigation?: boolean;
    /** Currently selected items */
    currentValue?: ArmstrongId[];
    /** adds tabIndex={0} to the wrapper element making it keyboard focusable without needing another focusable element inside it - needed to make keyboard interaction work without a focusable element inside it */
    focusableWrapper?: boolean;
    /** should close when an item is selected */
    closeOnSelection?: boolean;
    /** used to move the keyboard selection to an item that starts with the given term */
    searchTerm?: string;
    /** Text used if there are no items in the items array */
    noItemsText?: string;
}
/** A dropdown which renders a list of selectable options and allows keyboard navigation when its children are focused */
export declare const DropdownItems: React.FunctionComponent<IDropdownItemsProps>;
