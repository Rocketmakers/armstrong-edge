import * as React from 'react';

import { Form } from '../..';
import { useIsFocused } from '../../hooks';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { useOverridableState } from '../../hooks/useOverridableState';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps } from '../../types';
import { ArmstrongId } from '../../types/core';
import { IArmstrongExtendedOption } from '../../types/options';
import { ClassNames } from '../../utils/classNames';
import { Objects } from '../../utils/objects';
import { DropdownItems, IDropdownItemsProps } from '../dropdownItems';
import { IInputProps } from '../input';
import { IPortalProps } from '../portal';
import { TextInput } from '../textInput';

// internally, the AutoCompleteInput binds two values - the actual content of the text input, and the selected value
// if allowFreeText is set to true, these two values will be the same, otherwise the value is only bound
// will use bindConfig.fromData to parse the data in options allowing for a pattern where the displayed stuff is different to the bound data

export interface IAutoCompleteInputOption<Id extends ArmstrongId> extends Omit<IArmstrongExtendedOption<Id, never>, 'htmlProps'> {
  /** props to spread onto the li element for the dropdown item */
  dropDownItemHtmlProps?: Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'onMouseUp' | 'ref'>;

  /** props to spread onto the div element for the tag item */
  tagHtmlProps?: Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onMouseUp' | 'ref'>;
}

export interface IAutoCompleteInputProps<Id extends ArmstrongId>
  extends Omit<IInputProps<Id>, 'type' | 'onChange' | 'value' | 'disableOnPending' | 'onValueChange' | 'ref'>,
    Pick<IPortalProps, 'portalToSelector' | 'portalTo'>,
    Pick<
      IDropdownItemsProps,
      | 'noItemsText'
      | 'closeOnScroll'
      | 'closeOnWindowBlur'
      | 'closeOnWindowClick'
      | 'closeOnBackgroundClick'
      | 'closeOnSelection'
      | 'alignment'
      | 'position'
    > {
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

  /** the className given to the content of the dropdown */
  dropdownClassName?: string;

  /** identifier for driving this component with Cypress */
  cypressTag?: string;
}

/** A text input which displays some options in a dropdown */
export const AutoCompleteInput = React.forwardRef(
  <Id extends ArmstrongId>(
    {
      options,
      errorIcon: validationErrorIcon,
      validationMode,
      validationErrorMessages,
      bind,
      className,
      error,
      pending,
      portalToSelector,
      portalTo,
      onTextInputChange,
      textInputValue,
      filterOptions,
      onChange,
      dropdownClassName,
      value,
      allowFreeText,
      allowKeyboardNavigationSelection,
      showAllOptionsOnFocus,
      unsetOnClear,
      disabled,
      noItemsText,
      cypressTag,
      closeOnBackgroundClick,
      closeOnScroll,
      closeOnWindowBlur,
      closeOnWindowClick,
      closeOnSelection,
      alignment,
      position,
      ...textInputProps
    }: IAutoCompleteInputProps<Id>,
    ref
  ) => {
    const [boundValue, setBoundValue, { getFormattedValueFromData, validationErrorMessages: myValidationErrorMessages }] = Form.useBindingState(
      bind,
      {
        value,
        onChange,
        validationErrorMessages,
      }
    );

    const [isFocused, isFocusedProps] = useIsFocused({ onBlur: textInputProps.onBlur, onFocus: textInputProps.onFocus });

    const [optionsOpen, setOptionsOpen] = React.useState(false);
    // keep a piece of state to manage whether the options dropdown has been reopened since the last time filtering has occurred
    const [justOpened, setJustOpened] = React.useState(optionsOpen);

    const onOptionsOpenChange = React.useCallback((open: boolean) => {
      if (open && !optionsOpen) {
        setJustOpened(true);
      }
      setOptionsOpen(open);
    }, []);

    // use the name, but optionally fall back to the id after running it through the bind formatter if it's not provided
    const getOptionName = React.useCallback(
      (option: IAutoCompleteInputOption<Id>) => option.name ?? getFormattedValueFromData(option.id)!.toString(),
      [getFormattedValueFromData]
    );

    // internal state for the text input, overridden by props
    const [textInputInternalValue, setTextInputInternalValue] = useOverridableState(
      options?.find((option) => option.id === boundValue)?.name || '',
      textInputValue,
      onTextInputChange
    );

    // Once filtering has occurred, set the just opened state to false
    React.useEffect(() => {
      setJustOpened(false);
    }, [textInputInternalValue]);

    useDidUpdateEffect(() => {
      if (unsetOnClear && textInputInternalValue.length === 0) {
        setBoundValue?.(undefined!);
      }
    }, [textInputInternalValue]);

    // The provided options, optionally filtered by the text input value
    const filteredOptions = React.useMemo(() => {
      const showAllOptions = showAllOptionsOnFocus && justOpened;
      if (filterOptions && !showAllOptions && options) {
        if (filterOptions === true) {
          return options.filter((option) => getOptionName(option).toLowerCase().startsWith(textInputInternalValue.toLowerCase()));
        }
        return options.filter((option) => filterOptions(option, textInputInternalValue));
      }
      return options || [];
    }, [filterOptions, Objects.contentDependency(options), textInputInternalValue, justOpened, showAllOptionsOnFocus]);

    /** when the user clicks on an option, change the value in the textInput */
    const onSelectOption = React.useCallback(
      (id: Id) => {
        if (options) {
          const selectedOption = options.find((option) => option.id === id);
          if (selectedOption) {
            setTextInputInternalValue(selectedOption.name ?? '');
            setBoundValue?.(selectedOption.id);
          }
        }
      },
      [bind, allowFreeText, Objects.contentDependency(options)]
    );

    /** Fired when the user changes the value in the text input */
    const onTextInputChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTextInputValue = event.currentTarget.value || '';
        setTextInputInternalValue(newTextInputValue);

        // if allow free text, bind exact value on every change
        // if inputted text is an option, bind that
        const inputtedOptionIndex = options?.findIndex((option) => getOptionName(option) === newTextInputValue) ?? -1;
        if (inputtedOptionIndex > -1) {
          const inputtedOption = options![inputtedOptionIndex];

          setBoundValue?.(inputtedOption!.id);
        } else if (allowFreeText) {
          setBoundValue?.(newTextInputValue as Id);
        }
      },
      [setTextInputInternalValue, getOptionName, options]
    );

    // reset the input's value to reflect the bound value
    const resetInputValue = React.useCallback(() => {
      const currentOption = options?.find((option) => option.id === boundValue);

      if (currentOption) {
        setTextInputInternalValue(getOptionName(currentOption));
      } else {
        setTextInputInternalValue('');
      }
    }, [allowFreeText, Objects.contentDependency(options), boundValue, getOptionName]);

    useDidUpdateEffect(() => {
      resetInputValue();
    }, [boundValue, Objects.contentDependency(options)]);

    // when the user closes the dropdown, reset the input value
    useDidUpdateEffect(() => {
      if (!optionsOpen && !isFocused && !allowFreeText) {
        resetInputValue();
      }
    }, [optionsOpen]);

    // if allow free text is true, show the currently typed value at the top of the list of options
    const shouldShowFreeTextItemInDropdown = React.useMemo(
      () => allowFreeText && textInputInternalValue && !options?.find((option) => (option.name ?? option.id) === textInputInternalValue),
      [allowFreeText, textInputInternalValue, Objects.contentDependency(options)]
    );

    return (
      <>
        <div
          className={ClassNames.concat('arm-input', 'arm-autocomplete-input', className)}
          data-error={error}
          data-pending={pending}
          data-disabled={disabled}
          data-is-option={allowFreeText || textInputValue === boundValue}
          data-cy={cypressTag}
        >
          <DropdownItems
            contentClassName={ClassNames.concat('arm-auto-complete-options', dropdownClassName)}
            items={[
              ...(shouldShowFreeTextItemInDropdown ? [{ content: textInputInternalValue!, id: textInputInternalValue! }] : []),
              ...filteredOptions.map((option) => ({
                content: option.content || getOptionName(option),
                id: option.id,
                leftIcon: option.leftIcon,
                rightIcon: option.rightIcon,
                group: option.group,
                htmlProps: option.dropDownItemHtmlProps,
              })),
            ]}
            isOpen={optionsOpen && !disabled && !!options?.length}
            onOpenChange={onOptionsOpenChange}
            portalToSelector={portalToSelector}
            portalTo={portalTo}
            onItemSelected={(id) => onSelectOption(id as Id)}
            allowKeyboardNavigation={allowKeyboardNavigationSelection}
            currentValue={boundValue ? [boundValue] : []}
            openWhenClickInside
            openWhenFocusInside
            childRootElementSelector=".arm-input-inner"
            searchTerm={textInputInternalValue}
            noItemsText={noItemsText}
            closeWhenClickInside={false}
            closeOnBackgroundClick={closeOnBackgroundClick}
            closeOnScroll={closeOnScroll}
            closeOnWindowBlur={closeOnWindowBlur}
            closeOnWindowClick={closeOnWindowClick}
            closeOnSelection={closeOnSelection}
            stretch
            alignment={alignment}
            position={position}
          >
            <TextInput
              {...textInputProps}
              pending={pending}
              ref={ref}
              error={error}
              value={textInputInternalValue}
              onChange={onTextInputChangeEvent}
              validationMode={validationMode}
              validationErrorMessages={myValidationErrorMessages}
              errorIcon={validationErrorIcon}
              disabled={disabled}
              disableOnPending={false}
              {...isFocusedProps}
            />
          </DropdownItems>
        </div>
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(props: ArmstrongVFCProps<IAutoCompleteInputProps<Id>, HTMLSelectElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IAutoCompleteInputProps<any>>;

AutoCompleteInput.defaultProps = {
  validationMode: 'both',
  allowKeyboardNavigationSelection: true,
  filterOptions: true,
  unsetOnClear: true,
  showAllOptionsOnFocus: true,
  placeholder: 'Begin typing to filter options...',
};
