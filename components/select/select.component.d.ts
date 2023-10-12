import React from 'react';
import { GroupBase } from 'react-select';
import SelectRef from 'react-select/dist/declarations/src/Select';
import { IBindingProps, ValidationMessage } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongId, ArmstrongVFCProps, DisplaySize, IArmstrongOption } from '../../types';
import { IInputWrapperProps } from '../inputWrapper';
import { GroupedOption } from './select.utils';
export type ReactSelectRef<Id extends ArmstrongId> = SelectRef<IArmstrongOption<Id>, false, GroupBase<IArmstrongOption<Id>>>;
type NativeSelectProps = Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'value' | 'ref'>;
type NativeProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
/**
 * Internal type for created options as returned by React Select.
 * NOTE: This type is never exposed by Armstrong and should not be imported in apps that consume Armstrong.
 */
export interface IReactSelectCreateOption {
    label: string;
    value: string;
    __isNew__: boolean;
}
export interface ISingleSelectProps<Id extends ArmstrongId> extends Pick<IInputWrapperProps, 'statusPosition' | 'pending' | 'validationMode' | 'errorIcon' | 'labelId' | 'labelClassName' | 'validationErrorsClassName' | 'statusClassName' | 'disableOnPending' | 'hideIconOnStatus' | 'leftOverlay'>, NativeProps {
    /** Whether to to allow selection of multiple items */
    multi?: false;
    /** CSS className property */
    className?: string;
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<Id>;
    /** the options to be displayed in the input */
    options?: IArmstrongOption<Id>[] | GroupedOption<Id>[];
    /** overrides the aria-label of the input. This is set as default to 'single-select-input' */
    ariaLabel?: string;
    /** overrides the placeholder string in the input when nothing is selected. This is set as default to 'Select... */
    placeholder?: string;
    /** overrides the error message(s) used in the validation display */
    validationErrorMessages?: ValidationMessage[];
    /** overrides the value of the form binder if both are provided  */
    currentValue?: Id;
    /** overrides the handleChange method used when the input option is changed */
    onSelectOption?: (newValue: Id) => void;
    /** retrieves the value string from the selected option */
    getOptionValue?: (option: IArmstrongOption<Id>) => Id;
    /** exposes the input option to be overridden as a React node  */
    formatOptionLabel?: (option: IArmstrongOption<ArmstrongId>) => React.ReactNode;
    /** is the select value clearable, defaults to true */
    clearable?: boolean;
    /** is the select disabled */
    disabled?: boolean;
    /** enable user to search the options by typing in the input, defaults to true */
    searchable?: boolean;
    /** how should the dropdown be positioned vertically */
    position?: 'auto' | 'bottom' | 'top';
    /** overrides the dropdown icon in the input */
    dropdownIcon?: JSX.Element;
    /** overrides the loading icon in the input */
    loadingIcon?: JSX.Element;
    /** overrides the selected icon in the input */
    selectedIcon?: JSX.Element;
    /** close the select menu when the user selects an option. Set to true as default */
    closeMenuOnSelect?: boolean;
    /** enable the user to create select options by typing into the input */
    allowCreate?: boolean;
    /** which size variant to use */
    displaySize?: DisplaySize;
    /** contents of a label to name / describe the input */
    label?: React.ReactNode;
    /** indicates wether the input must be used to submit form */
    required?: boolean;
    /** will scroll the validation errors into view when the length of validationErrors changes */
    scrollValidationErrorsIntoView?: boolean;
    /** Symbol to use as the required indicator on the label, defaults to "*" */
    requiredIndicator?: React.ReactNode;
    /**
     * Called when the input value changes.
     * @param value The current value of the input
     */
    onInputChange?: (value: string) => void;
    /**
     * The current value of the input if state controlled
     */
    inputValue?: string;
    /**
     * String to use as the prefix when creating new options - defaults to `Create:`
     * NOTE: only used in `allowCreate` mode
     */
    createText?: string;
    /**
     * Called when a new option is created. Gives the option to do something with the new value like add it to the option array.
     * @param createdValue The new value that has been typed into the input
     * @returns The id to be set/added to the value, if this return value is falsy, the `createdValue` will be set as the Id.
     */
    onOptionCreated?: (createdValue: string) => Id | undefined;
    /** should the input validate automatically against the provided schema? Default: `true` */
    autoValidate?: boolean;
}
export interface INativeSelectProps<Id extends ArmstrongId> extends NativeSelectProps, Pick<ISingleSelectProps<Id>, 'bind' | 'currentValue' | 'onSelectOption' | 'displaySize' | 'label' | 'required' | 'scrollValidationErrorsIntoView' | 'requiredIndicator' | 'validationMode' | 'validationErrorMessages' | 'errorIcon' | 'statusPosition' | 'dropdownIcon' | 'labelId' | 'labelClassName' | 'validationErrorsClassName' | 'statusClassName' | 'hideIconOnStatus' | 'leftOverlay'> {
    /** the options to be displayed in the input */
    options?: IArmstrongOption<Id>[];
    /** Text to show as a placeholder when nothing is selected */
    placeholderOption?: string;
    /** Should the placeholder option be re-selectable? effectively allows the select to be cleared by the user. */
    placeholderOptionEnabled?: boolean;
    /** should the input validate automatically against the provided schema? Default: `true` */
    autoValidate?: boolean;
}
export interface IMultiSelectProps<Id extends ArmstrongId> extends Omit<ISingleSelectProps<Id>, 'bind' | 'currentValue' | 'onSelectOption' | 'multi'> {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind?: IBindingProps<Id[]>;
    /** overrides the value of the form binder if both are provided  */
    currentValue?: Id[];
    /** overrides the handleChange method used when the input option is changed */
    onSelectOption?: (newValue: Id[]) => void;
}
/**
 * Native select export
 */
export declare const NativeSelect: (<Id extends ArmstrongId>(props: ArmstrongVFCProps<INativeSelectProps<Id>, HTMLSelectElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<INativeSelectProps<ArmstrongId>>;
/**
 * Single select export
 */
export declare const Select: (<Id extends ArmstrongId>(props: ArmstrongVFCProps<ISingleSelectProps<Id>, ReactSelectRef<Id>>) => ArmstrongFCReturn) & ArmstrongFCExtensions<ISingleSelectProps<ArmstrongId>>;
/**
 * Multi select export
 */
export declare const MultiSelect: (<Id extends ArmstrongId>(props: ArmstrongVFCProps<IMultiSelectProps<Id>, ReactSelectRef<Id>>) => ArmstrongFCReturn) & ArmstrongFCExtensions<IMultiSelectProps<ArmstrongId>>;
export {};
