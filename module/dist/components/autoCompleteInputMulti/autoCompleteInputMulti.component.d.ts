import React from 'react';
import { ArmstrongId } from '../../types';
import { IAutoCompleteInputProps } from '../autoCompleteInput/autoCompleteInput.component';
import { IInputProps } from '../input';
import { IPortalProps } from '../portal';
import { ITag, ITagInputProps } from '../tagInput';
export interface IAutoCompleteInputMultiProps<Id extends ArmstrongId> extends Omit<IInputProps<Id[]>, 'type' | 'onChange' | 'value' | 'disableOnPending' | 'onValueChange'>, Pick<ITagInputProps, 'tagPosition'>, Pick<IPortalProps, 'portalToSelector' | 'portalTo'>, Pick<IAutoCompleteInputProps<Id>, 'options' | 'onTextInputChange' | 'textInputValue' | 'optionsRootElementSelector' | 'allowFreeText' | 'filterOptions' | 'allowKeyboardNavigationSelection' | 'noItemsText'> {
    /** called when an option is selected  */
    onChange?: (value: Id[]) => void;
    /** the currently selected option */
    value?: Id[];
    /** convert a selected option's Id into a tag, use if there's a chance a selected option won't be in the options array */
    getSelectedOptionTag?: (option: Id) => ITag;
}
/** A text input which displays some options in a dropdown and allows the user to select multiple */
export declare const AutoCompleteInputMulti: (<Id extends ArmstrongId>(props: IAutoCompleteInputMultiProps<Id> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLSelectElement>) => ReturnType<React.FC>) & {
    defaultProps?: Partial<IAutoCompleteInputMultiProps<any>> | undefined;
};
