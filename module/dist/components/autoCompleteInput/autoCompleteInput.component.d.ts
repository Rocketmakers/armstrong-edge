import React from 'react';
import { IconSet } from '../..';
import { ArmstrongId } from '../../types';
import { IDropdownItem, IDropdownItemsProps } from '../dropdownItems';
import { IIconWrapperProps } from '../iconWrapper';
import { IInputProps } from '../input';
import { IPortalProps } from '../portal';
export interface IAutoCompleteInputOption<Id extends ArmstrongId> extends IIconWrapperProps<IconSet, IconSet>, Pick<IDropdownItem, 'group'> {
    /** the value to be bound */
    id: Id;
    /** the name to be rendered for the option */
    name?: string;
}
export interface IAutoCompleteInputProps<Id extends ArmstrongId> extends Omit<IInputProps<Id>, 'type' | 'onChange' | 'value' | 'disableOnPending' | 'onValueChange' | 'ref'>, Pick<IPortalProps, 'portalToSelector' | 'portalTo'>, Pick<IDropdownItemsProps, 'noItemsText'> {
    /** The options to render when the input is focused */
    options?: IAutoCompleteInputOption<Id>[];
    /** called when the user inputs into the text input - if provided, the hook will not bind internally and therefore this must be used in conjunction with textInputValue  */
    onTextInputChange?: (value: string) => void;
    /** the value used in the text input - must be used in conjunction with onTextInputChange to allow the binding of that input to be handled externally */
    textInputValue?: string;
    /** called when an option is selected  */
    onChange?: (value: Id) => void;
    /** the currently selected option */
    value?: Id;
    /** selector for the element to portal the options into */
    optionsRootElementSelector?: string;
    /** bind the value of the input, rather than just when an item is selected - only supported if the bound value is a string and not a number */
    allowFreeText?: boolean;
    /** whether to filter the available options based on the string in the text input, optionally takes the callback used to do the filtering and by default will just do a option.name.startsWith() */
    filterOptions?: boolean | ((option: IAutoCompleteInputOption<Id>, textInputValue: string) => boolean);
    /** Whether the user should be able to use their keyboard to navigate through the dropdown while focused on something within children like an input */
    allowKeyboardNavigationSelection?: boolean;
    /** Whether to show all the options on focus, even when a value is set. The default is `true` as this means the user will always see all the options before they start typing. */
    showAllOptionsOnFocus?: boolean;
    /** Should setBoundValue to undefined if the user clears the text input - true by default */
    unsetOnClear?: boolean;
}
/** A text input which displays some options in a dropdown */
export declare const AutoCompleteInput: (<Id extends ArmstrongId>(props: IAutoCompleteInputProps<Id> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLSelectElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<IAutoCompleteInputProps<any>> | undefined;
};
