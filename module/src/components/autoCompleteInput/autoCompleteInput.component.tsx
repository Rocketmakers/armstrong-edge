import React from 'react';

import { Form, IconSet } from '../..';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { useOverridableState } from '../../hooks/useOverridableState';
import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { DropdownItems, IDropdownItem } from '../dropdownItems';
import { IIconWrapperProps } from '../iconWrapper';
import { IInputProps } from '../input';
import { TextInput } from '../textInput';

// internally, the autocompleteinput binds two values - the actual content of the text input, and the selected value
// if allowFreeText is set to true, these two values will be the same, otherwise the value is only bound
// will use bindConfig.fromData to parse the data in options allowing for a pattern where the displayed stuff is different to the bound data

export interface IAutoCompleteInputOption<Id extends ArmstrongId> extends IIconWrapperProps<IconSet, IconSet>, Pick<IDropdownItem, 'group'> {
  /** (ArmstrongId) the value to be bound */
  id: Id;

  /** (string) the name to be rendered for the option */
  name?: string;
}

export interface IAutoCompleteInputProps<Id extends ArmstrongId>
  extends Omit<IInputProps<Id>, 'type' | 'onChange' | 'value' | 'disableOnPending' | 'onValueChange'> {
  /** (IAutoCompleteInputOption[]) The options to render when the input is focused */
  options?: IAutoCompleteInputOption<Id>[];

  /** ((string) => void) called when the user inputs into the text input - if provided, the hook will not bind internally and therefore this must be used in conjunction with textInputValue  */
  onTextInputChange?: (value: string) => void;

  /** (string) the value used in the text input - must be used in conjunction with onTextInputChange to allow the binding of that input to be handled externally */
  textInputValue?: string;

  /** ((string) => void) called when an option is selected  */
  onChange?: (value: Id) => void;

  /** (string) the currently selected option */
  value?: Id;

  /** (string) selector for the element to portal the options into */
  optionsRootElementSelector?: string;

  /** (boolean) bind the value of the input, rather than just when an item is selected - only supported if the bound value is a string and not a number */
  allowFreeText?: boolean;

  /** (boolean | (option: string, textInputValue: string) => boolean) whether to filter the available options based on the string in the text input, optionally takes the callback used to do the filtering and by default will just do a option.name.startsWith() */
  filterOptions?: boolean | ((option: IAutoCompleteInputOption<Id>, textInputValue: string) => boolean);

  /** (boolean) Whether the user should be able to use their keyboard to navigate through the dropdown while focused on something within children like an input */
  allowKeyboardNavigationSelection?: boolean;
}

/** An input which displays some given options below the and allows the user to select from those options */
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
      optionsRootElementSelector,
      onTextInputChange,
      textInputValue,
      filterOptions,
      onChange,
      value,
      allowFreeText,
      allowKeyboardNavigationSelection,
      ...textInputProps
    }: IAutoCompleteInputProps<Id>,
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
      (option: IAutoCompleteInputOption<Id>) => option.name ?? getFormattedValueFromData(option.id)!.toString(),
      [getFormattedValueFromData]
    );

    // internal state for the text input, overriden by props
    const [textInputInternalValue, setTextInputInternalValue] = useOverridableState(
      options?.find((option) => option.id === boundValue)?.name || '',
      textInputValue,
      onTextInputChange
    );

    // The provided options, optionally filtered by the text input value
    const filteredOptions = React.useMemo(() => {
      if (filterOptions && options) {
        if (filterOptions === true) {
          return options.filter((option) => getOptionName(option).startsWith(textInputInternalValue));
        }
        return options.filter((option) => filterOptions(option, textInputInternalValue));
      }
      return options || [];
    }, [filterOptions, JSON.stringify(options), textInputInternalValue]);

    /** when the user clicks on an option, change the value in the textInput */
    const onSelectOption = React.useCallback(
      (id: Id) => {
        const selectedOption = options?.find((option) => option.id === id);
        setTextInputInternalValue(selectedOption?.name || '');

        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        setBoundValue(selectedOption?.id!);
      },
      [bind, allowFreeText]
    );

    /** Fired when the user changes the value in the text input */
    const onTextInputChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTextInputValue = event.currentTarget.value || '';
        setTextInputInternalValue(newTextInputValue);

        // if allow free text, bind exact value on every change
        // if inputted text is an option, bind that
        const inputtedOptionIndex = options?.findIndex((option) => getOptionName(option) === newTextInputValue);
        if (inputtedOptionIndex && inputtedOptionIndex > -1) {
          const inputtedOption = options![inputtedOptionIndex];

          setBoundValue(inputtedOption!.id);
        } else if (allowFreeText) {
          setBoundValue(newTextInputValue as Id);
        }
      },
      [setTextInputInternalValue, getOptionName]
    );

    // reset the input's value to reflect the bound value
    const resetInputValue = React.useCallback(() => {
      if (!allowFreeText) {
        const currentOption = options?.find((option) => option.id === boundValue);
        if (currentOption) {
          setTextInputInternalValue(getOptionName(currentOption));
        }
      }
    }, [allowFreeText, options, boundValue, getOptionName]);

    // when the user closes the dropdown, reset the input value
    useDidUpdateEffect(() => {
      if (!optionsOpen) {
        resetInputValue();
      }
    }, [optionsOpen]);

    // if allow free text is true, show the currently typed value at the top of the list of options
    const shouldShowFreeTextItemInDropdown = React.useMemo(
      () => allowFreeText && textInputInternalValue && !options?.find((option) => (option.name ?? option.id) === textInputInternalValue),
      [allowFreeText, textInputInternalValue, options]
    );

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
            items={[
              ...(shouldShowFreeTextItemInDropdown ? [{ content: textInputInternalValue!, id: textInputInternalValue! }] : []),
              ...filteredOptions.map((option) => ({
                content: getOptionName(option),
                id: option.id,
                leftIcon: option.leftIcon,
                rightIcon: option.rightIcon,
                group: option.group,
              })),
            ]}
            isOpen={optionsOpen && !!options?.length}
            onOpenChange={setOptionsOpen}
            contentRootElementSelector={optionsRootElementSelector}
            onItemSelected={(id) => onSelectOption(id as Id)}
            allowKeyboardNavigation={allowKeyboardNavigationSelection}
            currentValue={boundValue ? [boundValue] : []}
            openWhenClickInside
            openWhenFocusInside
            childRootElementSelector=".arm-input-inner"
          >
            <TextInput
              {...textInputProps}
              pending={pending}
              ref={ref}
              error={error}
              value={textInputInternalValue}
              onChange={onTextInputChangeEvent}
              onKeyDown={() => setOptionsOpen(true)}
              validationMode={validationMode}
              onFocus={() => setOptionsOpen(true)}
              validationErrorMessages={myValidationErrorMessages}
              errorIcon={validationErrorIcon}
              disableOnPending={false}
            />
          </DropdownItems>
        </div>
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(
  props: React.PropsWithChildren<IAutoCompleteInputProps<Id>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<IAutoCompleteInputProps<any>> };

AutoCompleteInput.defaultProps = {
  validationMode: 'both',
  allowKeyboardNavigationSelection: true,
  filterOptions: true,
};
