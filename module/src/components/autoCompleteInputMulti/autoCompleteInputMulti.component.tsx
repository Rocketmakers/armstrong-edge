import React from 'react';

import { Form, IAutoCompleteInputOption } from '../..';
import { useOverridableState } from '../../hooks/useOverridableState';
import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { DropdownItems, IDropdownItem } from '../dropdownItems';
import { IInputProps } from '../input';
import { ITag, ITagInputProps, TagInput } from '../tagInput';

export interface IAutoCompleteInputMultiProps<Id extends ArmstrongId>
  extends Omit<IInputProps<Id[]>, 'type' | 'onChange' | 'value' | 'disableOnPending' | 'onValueChange'>,
    Pick<ITagInputProps, 'tagPosition'> {
  /** (IAutoCompleteInputOption[]) The options to render when the input is focused */
  options?: IAutoCompleteInputOption<Id>[];

  /** ((string) => void) called when the user inputs into the text input - if provided, the hook will not bind internally and therefore this must be used in conjunction with textInputValue  */
  onTextInputChange?: (value: string) => void;

  /** (string) the value used in the text input - must be used in conjunction with onTextInputChange to allow the binding of that input to be handled externally */
  textInputValue?: string;

  /** ((string) => void) called when an option is selected  */
  onChange?: (value: Id[]) => void;

  /** (string) the currently selected option */
  value?: Id[];

  /** (string) selector for the element to portal the options into */
  optionsRootElementSelector?: string;

  /** (boolean) bind the value of the input, rather than just when an item is selected - only supported if the bound value is a string and not a number */
  allowFreeText?: boolean;

  /** (boolean | (option: string, textInputValue: string) => boolean) whether to filter the available options based on the string in the text input, optionally takes the callback used to do the filtering and by default will just do a option.name.startsWith() */
  filterOptions?: boolean | ((option: IAutoCompleteInputOption<Id>, textInputValue: string) => boolean);

  /** (boolean) Whether the user should be able to use their keyboard to navigate through the dropdown while focused on something within children like an input */
  allowKeyboardNavigationSelection?: boolean;

  /** ((option: IAutoCompleteOption) => ITag)  */
  getSelectedOptionTag?: (option: Id) => ITag;
}

/** An input which displays some given options below the and allows the user to select from those options */
export const AutoCompleteInputMulti = React.forwardRef(
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
      tagPosition,
      value,
      allowFreeText,
      allowKeyboardNavigationSelection,
      getSelectedOptionTag,
      ...textInputProps
    }: IAutoCompleteInputMultiProps<Id>,
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
      (option: IAutoCompleteInputOption<Id>) => option.name ?? option.id.toString(),
      [getFormattedValueFromData]
    );

    // internal state for the text input, overriden by props
    const [textInputInternalValue, setTextInputInternalValue] = useOverridableState('', textInputValue, onTextInputChange);

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

    // remove a given tag value from the array using its ID (the value which is bound)
    const onRemoveTag = React.useCallback(
      (id: ArmstrongId) => {
        setBoundValue(boundValue?.filter((item) => item !== id) || []);
      },
      [boundValue, setBoundValue]
    );

    /** when the user clicks on an option, change the value in the textInput */
    const onSelectOption = React.useCallback(
      (id: Id) => {
        if (boundValue?.find((item) => item === id)) {
          onRemoveTag(id);
        } else {
          setBoundValue([...(boundValue || []), id!]);
        }
      },
      [bind, boundValue, options, onRemoveTag]
    );

    // get a value or option into a form that can be used to render a tag
    // use the given getSelectedOptionTag prop, or construct a tag from the array of options, or just make one using the ID if one cannot be found
    const parseOptionTag = React.useCallback(
      (item: Id) => {
        if (getSelectedOptionTag) {
          return getSelectedOptionTag(item);
        }
        const selectedOption = options?.find((option) => item === option.id);
        if (selectedOption) {
          return {
            name: selectedOption.name || selectedOption.id.toString(),
            id: selectedOption.id,
            leftIcon: selectedOption.leftIcon,
            rightIcon: selectedOption.rightIcon,
          };
        }
        return {
          name: item.toString(),
          id: item,
        };
      },
      [getSelectedOptionTag, options]
    );

    // the currently bound value of the input parsed as an array of tags
    const selectedOptionTags = React.useMemo(() => (boundValue || []).map<ITag>((item) => parseOptionTag(item)), [parseOptionTag, boundValue]);

    const onAddTag = React.useCallback(
      (addedValue: string) => {
        if (allowFreeText && !boundValue?.find((item) => item === addedValue)) {
          setBoundValue([...(boundValue || []), addedValue as Id]);
        }
      },
      [allowFreeText, boundValue, setBoundValue]
    );

    // options to render in the dropdown if the prop allowFreeText is true
    // first shows what the user is currently typing as the first value, then shows all the free text values that have been bound up which aren't
    // in the options array
    const dropdownItems = React.useMemo<IDropdownItem[]>(() => {
      const showCurrentlyTypingOption =
        allowFreeText && textInputInternalValue && !options?.find((option) => (option.name ?? option.id) === textInputInternalValue);

      return [
        ...(showCurrentlyTypingOption ? [{ content: textInputInternalValue!, id: textInputInternalValue! }] : []),
        ...(boundValue || [])
          .map((item) => parseOptionTag(item))
          .filter((item) => {
            const isntAnOption = !options?.find((option) => option.id === item.id);
            const filterByTextInputValue = !textInputInternalValue || (item.name || item.id).toString().startsWith(textInputInternalValue);
            return isntAnOption && filterByTextInputValue;
          })
          .map<IDropdownItem>((item) => ({ content: item.name || item.id.toString(), id: item.id })),
        ...filteredOptions.map((option) => ({
          content: getOptionName(option),
          id: option.id,
          leftIcon: option.leftIcon,
          rightIcon: option.rightIcon,
          group: option.group,
        })),
      ];
    }, [allowFreeText, textInputInternalValue, options, getSelectedOptionTag, options, parseOptionTag]);

    return (
      <>
        <div
          className={ClassNames.concat('arm-input', 'arm-autocomplete-input-multi', className)}
          data-error={error}
          data-pending={pending}
          data-is-option={allowFreeText || textInputValue === boundValue}
        >
          <DropdownItems
            contentClassName="arm-auto-complete-options"
            items={dropdownItems}
            isOpen={optionsOpen && !!options?.length}
            onOpenChange={setOptionsOpen}
            contentRootElementSelector={optionsRootElementSelector}
            onItemSelected={(id) => onSelectOption(id as Id)}
            allowKeyboardNavigation={allowKeyboardNavigationSelection}
            currentValue={boundValue || []}
            openWhenClickInside
            openWhenFocusInside
            closeOnSelection={false}
            childRootElementSelector=".arm-input-inner"
          >
            <TagInput
              {...textInputProps}
              pending={pending}
              ref={ref}
              error={error}
              tags={selectedOptionTags}
              tagPosition={tagPosition}
              onKeyDown={() => setOptionsOpen(true)}
              validationMode={validationMode}
              onFocus={() => setOptionsOpen(true)}
              textInputValue={textInputInternalValue}
              onTextInputValueChange={setTextInputInternalValue}
              validationErrorMessages={myValidationErrorMessages}
              errorIcon={validationErrorIcon}
              disableOnPending={false}
              onAddTag={onAddTag}
              onRemoveTag={(id) => onRemoveTag(id as Id)}
            />
          </DropdownItems>
        </div>
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(
  props: React.PropsWithChildren<IAutoCompleteInputMultiProps<Id>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<IAutoCompleteInputMultiProps<any>> };

AutoCompleteInputMulti.defaultProps = {
  validationMode: 'both',
  allowKeyboardNavigationSelection: true,
  filterOptions: true,
};
