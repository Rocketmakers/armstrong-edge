import React from 'react';

import { Form, IAutoCompleteInputOption } from '../..';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { useOverridableState } from '../../hooks/useOverridableState';
import { ArmstrongId } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { DropdownItems } from '../dropdownItems';
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
  getSelectedOptionTags?: (option: Id) => ITag;
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
      getSelectedOptionTags,
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

    const removeItem = React.useCallback(
      (id: ArmstrongId) => {
        setBoundValue(boundValue?.filter((item) => item !== id) || []);
      },
      [boundValue, setBoundValue]
    );

    /** when the user clicks on an option, change the value in the textInput */
    const onSelectOption = React.useCallback(
      (id: Id) => {
        const selectedOption = options?.find((option) => option.id === id);

        if (selectedOption) {
          if (boundValue?.find((item) => item === selectedOption.id)) {
            removeItem(selectedOption.id);
          } else {
            setBoundValue([...(boundValue || []), selectedOption.id!]);
          }
        }
      },
      [bind, boundValue, options, removeItem]
    );

    const resetInputValue = React.useCallback(() => {
      setTextInputInternalValue('');
    }, [allowFreeText, options, boundValue, getOptionName]);

    useDidUpdateEffect(() => {
      if (!optionsOpen) {
        resetInputValue();
      }
    }, [optionsOpen]);

    const selectedOptionTags = React.useMemo(
      () =>
        (boundValue || []).map<ITag>((item) => {
          if (getSelectedOptionTags) {
            return getSelectedOptionTags(item);
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
        }),
      [getSelectedOptionTags, options, boundValue]
    );

    const onAddTag = React.useCallback(
      (addedValue: string) => {
        if (allowFreeText) {
          setBoundValue([...(boundValue || []), addedValue as Id]);
        }
      },
      [allowFreeText, boundValue, setBoundValue]
    );

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
              onRemoveTag={(id) => removeItem(id as Id)}
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
  tagPosition: 'above',
};
