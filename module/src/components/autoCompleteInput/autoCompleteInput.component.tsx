import React from 'react';

import { ClassNames } from '../../utils/classNames';
import { DropdownItems } from '../dropdownItems';
import { IInputProps } from '../input';
import { TextInput } from '../textInput';
import { useMyValidationErrorMessages, ValidationErrors } from '../validationErrors';

// internally, the autocompleteinput binds two values - the actual content of the text input, and the selected value
// if allowFreeText is set to true, these two values will be the same, otherwise the value is only bound
// will use bindConfig.fromData to parse the data in options allowing for a pattern where the displayed stuff is different to the bound data

export interface IAutoCompleteInputProps extends Omit<IInputProps<string>, 'type' | 'onChange' | 'value'> {
  /** (string[]) The options to render when the input is focused - use bindConfig.fromData to parse theseß */
  options?: string[];

  /** ((string) => void) called when the user inputs into the  */
  onTextInputChange?: (value: string) => void;

  /** (string) the value to use for the text input */
  textInputValue?: string;

  /** ((string) => void) called when an option is selected  */
  onChange?: (value: string) => void;

  /** (string) the currently selected option */
  value?: string;

  /** (string) selector for the element to portal the options into */
  optionsRootElementSelector?: string;

  /** (boolean) bind the value of the input, rather than just when an item is selected */
  allowFreeText?: boolean;

  /** (boolean | (option: string, textInputValue: string) => boolean) whether to filter the available options based on the string in the text input, optionally takes the callback used to do the filtering */
  filterOptions?: boolean | ((option: string, textInputValue: string) => boolean);

  /** (boolean) Whether the user should be able to use their keyboard to navigate through the dropdown while focused on something within children like an input */
  allowKeyboardSelection?: boolean;
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
      allowKeyboardSelection,
      ...textInputProps
    },
    ref
  ) => {
    const currentValue = bind?.value || value;

    // parse the given value if there is a parsing function given to the bind
    const valueFromData = React.useCallback((val?: string) => bind?.bindConfig?.format?.fromData?.(val) || val || '', [bind]);

    const [textInputCurrentValue, setTextInputCurrentValue] = React.useState((bind && valueFromData(bind.value)) || textInputValue || value || '');

    const [optionsOpen, setOptionsOpen] = React.useState(false);

    React.useLayoutEffect(() => {
      onTextInputChange?.(textInputCurrentValue);
    }, [textInputCurrentValue]);

    const filteredOptions = React.useMemo(() => {
      if (filterOptions && options) {
        if (filterOptions === true) {
          return options.filter((option) => valueFromData(option).indexOf(textInputCurrentValue) > -1);
        }
        return options.filter((option) => filterOptions(option, textInputCurrentValue));
      }
      return options || [];
    }, [filterOptions, JSON.stringify(options), textInputCurrentValue]);

    const computedValidationMode = validationMode || bind?.formConfig?.validationMode;
    const shouldShowValidationErrorsList = computedValidationMode === 'both' || computedValidationMode === 'message';
    const shouldShowErrorIcon =
      (!!validationErrorMessages?.length && (computedValidationMode === 'both' || computedValidationMode === 'icon')) || error;

    const allValidationErrorMessages = useMyValidationErrorMessages(bind, validationErrorMessages);

    const onTextinputFocus = React.useCallback(() => setOptionsOpen(true), []);

    /** set the value that is bound and trigger onChange */
    const setBoundValue = React.useCallback(
      (newValue: string) => {
        onChange?.(newValue);
        bind?.setValue(newValue);
      },
      [onChange, bind]
    );

    const setInputValue = React.useCallback((newValue: string) => {
      setTextInputCurrentValue?.(newValue);
      onTextInputChange?.(newValue);
    }, []);

    /** when the user clicks on an option, change the value in the textInput */
    const onSelectOption = React.useCallback(
      (option: string) => {
        setInputValue(valueFromData(option));

        setOptionsOpen(false);

        // if free text is allowed, the onChange triggered by the textinput's change event
        // otherwise, it is triggered it here
        if (!allowFreeText) {
          setBoundValue(option);
        }
      },
      [bind, valueFromData, allowFreeText]
    );

    const onTextInputChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;

        setInputValue(newValue);

        // if allow free text, bind exact value on every change
        // if inputted text is an option, bind that
        if (allowFreeText) {
          setBoundValue(bind?.bindConfig?.format?.toData?.(newValue) || newValue);
        } else {
          const inputtedOption = options?.find((option) => valueFromData(option) === newValue);
          if (inputtedOption) {
            setBoundValue(inputtedOption);
          }
        }
      },
      [setTextInputCurrentValue, valueFromData]
    );

    const onTextInputBlur = React.useCallback(() => {
      if (!allowFreeText) {
        setTextInputCurrentValue(valueFromData(bind?.value) || value || '');
      }
    }, [allowFreeText, valueFromData, bind?.value]);

    return (
      <>
        <div
          className={ClassNames.concat('arm-input', 'arm-autocomplete-input', className)}
          data-error={error}
          data-pending={pending}
          data-is-option={allowFreeText || valueFromData(textInputValue) === currentValue}
        >
          <DropdownItems
            contentClassName="arm-auto-complete-options"
            items={filteredOptions.map((option) => ({ content: valueFromData(option), id: option }))}
            isOpen={optionsOpen && !!options?.length}
            onOpenChange={setOptionsOpen}
            rootElementSelector={optionsRootElementSelector}
            onItemSelected={onSelectOption}
            allowKeyboard={allowKeyboardSelection}
            currentValue={[valueFromData(currentValue)]}
          >
            <TextInput
              {...textInputProps}
              pending={pending}
              ref={ref}
              error={shouldShowErrorIcon}
              validationMode={validationMode}
              onFocus={onTextinputFocus}
              value={textInputCurrentValue}
              onChange={onTextInputChangeEvent}
              onBlur={onTextInputBlur}
              onKeyDown={() => setOptionsOpen(true)}
            />
          </DropdownItems>
        </div>

        {!!allValidationErrorMessages?.length && shouldShowValidationErrorsList && (
          <ValidationErrors validationErrors={allValidationErrorMessages} icon={validationErrorIcon} />
        )}
      </>
    );
  }
);

AutoCompleteInput.defaultProps = {
  validationMode: 'both',
  allowKeyboardSelection: true,
  filterOptions: true,
};
