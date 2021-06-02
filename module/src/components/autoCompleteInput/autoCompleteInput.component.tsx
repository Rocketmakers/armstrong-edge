import React from 'react';

import { Form, IconSet } from '../..';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { ClassNames } from '../../utils/classNames';
import { DropdownItems } from '../dropdownItems';
import { IIconWrapperProps } from '../iconWrapper';
import { IInputProps } from '../input';
import { TextInput } from '../textInput';

// internally, the autocompleteinput binds two values - the actual content of the text input, and the selected value
// if allowFreeText is set to true, these two values will be the same, otherwise the value is only bound
// will use bindConfig.fromData to parse the data in options allowing for a pattern where the displayed stuff is different to the bound data

export interface IAutoCompleteInputOption extends IIconWrapperProps<IconSet, IconSet> {
  id: string;
  name?: string;
  group?: string;
}

export interface IAutoCompleteInputProps extends Omit<IInputProps<string>, 'type' | 'onChange' | 'value' | 'disableOnPending'> {
  /** (IAutoCompleteInputOption[]) The options to render when the input is focused */
  options?: IAutoCompleteInputOption[];

  /** ((string) => void) called when the user inputs into the text input - if provided, the hook will not bind internally and therefore this must be used in conjunction with textInputValue  */
  onTextInputChange?: (value: string) => void;

  /** (string) the value used in the text input - must be used in conjunction with onTextInputChange to allow the binding of that input to be handled externally */
  textInputValue?: string;

  /** ((string) => void) called when an option is selected  */
  onChange?: (value: string) => void;

  /** (string) the currently selected option */
  value?: string;

  /** (string) selector for the element to portal the options into */
  optionsRootElementSelector?: string;

  /** (boolean) bind the value of the input, rather than just when an item is selected */
  allowFreeText?: boolean;

  /** (boolean | (option: string, textInputValue: string) => boolean) whether to filter the available options based on the string in the text input, optionally takes the callback used to do the filtering and by default will just do a option.name.startsWith() */
  filterOptions?: boolean | ((option: IAutoCompleteInputOption, textInputValue: string) => boolean);

  /** (boolean) Whether the user should be able to use their keyboard to navigate through the dropdown while focused on something within children like an input */
  allowKeyboardNavigationSelection?: boolean;
}

/** An input which displays some given options below the and allows the user to select from those options */
export const AutoCompleteInput = React.forwardRef<HTMLInputElement, IAutoCompleteInputProps>(
  (
    {
      options,
      validationErrorIcon,
      validationMode,
      validationErrorMessages,
      bind,
      className,
      error,
      pending,
      optionsRootElementSelector,
      onTextInputChange,
      textInputValue,
      filterOptions,
      onChange,
      value,
      allowFreeText,
      allowKeyboardNavigationSelection,
      ...textInputProps
    },
    ref
  ) => {
    const [boundValue, setBoundValue, { getFormattedValueFromData, validationErrorMessages: myValidationErrorMessages }] = Form.useBindingTools(
      bind,
      {
        value,
        onChange,
        validationErrorMessages,
      }
    );

    const [optionsOpen, setOptionsOpen] = React.useState(false);

    // use the name, but optionally fall back to the id after running it through the bind formatter if it's not provided
    const getOptionName = React.useCallback(
      (option: IAutoCompleteInputOption) => option.name ?? getFormattedValueFromData(option.id)!,
      [getFormattedValueFromData]
    );

    // internal state for the text input
    const [textInputInternalValue, setTextInputInternalValue] = React.useState(options?.find((option) => option.id === boundValue)?.name || '');

    // wrap up the internal text input state to ensure it's overriden if an external bind is being used with onTextInputChange and textInputValue props
    const textInputCurrentValue = (onTextInputChange ? textInputValue : textInputInternalValue) || '';
    const setTextInputCurrentValue = onTextInputChange ?? setTextInputInternalValue;

    // The provided options, optionally filtered by the text input value
    const filteredOptions = React.useMemo(() => {
      if (filterOptions && options) {
        if (filterOptions === true) {
          return options.filter((option) => getOptionName(option).startsWith(textInputCurrentValue));
        }
        return options.filter((option) => filterOptions(option, textInputCurrentValue));
      }
      return options || [];
    }, [filterOptions, JSON.stringify(options), textInputCurrentValue]);

    /** when the user clicks on an option, change the value in the textInput */
    const onSelectOption = React.useCallback(
      (id: string) => {
        const selectedOption = options?.find((option) => option.id === id);
        setTextInputCurrentValue(selectedOption?.name || '');
        setOptionsOpen(false);

        // if free text is allowed, the onChange triggered by the textinput's change event
        // otherwise, it is triggered it here
        if (!allowFreeText) {
          setBoundValue(selectedOption?.id || '');
        }
      },
      [bind, allowFreeText]
    );

    /** Fired when the user changes the value in the text input */
    const onTextInputChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTextInputValue = event.currentTarget.value || '';
        setTextInputCurrentValue(newTextInputValue);

        // if allow free text, bind exact value on every change
        // if inputted text is an option, bind that
        if (allowFreeText) {
          setBoundValue(newTextInputValue);
        } else {
          const inputtedOption = options?.find((option) => getOptionName(option) === newTextInputValue);

          if (inputtedOption) {
            setBoundValue(inputtedOption.id);
          }
        }
      },
      [setTextInputCurrentValue, getOptionName]
    );

    const resetInputValue = React.useCallback(() => {
      if (!allowFreeText) {
        const currentOption = options?.find((option) => option.id === boundValue);
        if (currentOption) {
          setTextInputCurrentValue(getOptionName(currentOption));
        }
      }
    }, [allowFreeText, options, boundValue, getOptionName]);

    useDidUpdateEffect(() => {
      if (!optionsOpen) {
        resetInputValue();
      }
    }, [optionsOpen]);

    return (
      <>
        <div
          className={ClassNames.concat('arm-input', 'arm-autocomplete-input', className)}
          data-error={error}
          data-pending={pending}
          data-is-option={allowFreeText || textInputValue === boundValue}
        >
          <DropdownItems
            contentClassName="arm-auto-complete-options"
            items={filteredOptions.map((option) => ({
              content: getOptionName(option),
              id: option.id,
              leftIcon: option.leftIcon,
              rightIcon: option.rightIcon,
              group: option.group,
            }))}
            isOpen={optionsOpen && !!options?.length}
            onOpenChange={setOptionsOpen}
            rootElementSelector={optionsRootElementSelector}
            onItemSelected={(id) => onSelectOption(id)}
            allowKeyboardNavigation={allowKeyboardNavigationSelection}
            currentValue={boundValue ? [boundValue] : []}
            openWhenClickInside
            openWhenFocusInside
          >
            <TextInput
              {...textInputProps}
              pending={pending}
              ref={ref}
              error={error}
              value={textInputCurrentValue}
              onChange={onTextInputChangeEvent}
              onKeyDown={() => setOptionsOpen(true)}
              validationMode={validationMode}
              onFocus={() => setOptionsOpen(true)}
              validationErrorMessages={myValidationErrorMessages}
              validationErrorIcon={validationErrorIcon}
              disableOnPending={false}
            />
          </DropdownItems>
        </div>
      </>
    );
  }
);

AutoCompleteInput.defaultProps = {
  validationMode: 'both',
  allowKeyboardNavigationSelection: true,
  filterOptions: true,
};
