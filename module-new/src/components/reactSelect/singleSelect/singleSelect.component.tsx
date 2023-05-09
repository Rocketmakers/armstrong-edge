import React from 'react';
import Select, { GetOptionLabel, GetOptionValue, GroupBase, OnChangeValue } from 'react-select';
import SelectRef from 'react-select/dist/declarations/src/Select';

import { IBindingProps, useBindingState, ValidationMessage } from '../../../hooks/form';
import {
  ArmstrongFCExtensions,
  ArmstrongFCReturn,
  ArmstrongId,
  ArmstrongVFCProps,
  IArmstrongReactSelectCreatingOption,
  IArmstrongReactSelectOption,
  NullOrUndefined,
} from '../../../types';
import { concat } from '../../../utils';
import { useArmstrongConfig } from '../../config';
import { Label } from '../../label';
import { ValidationErrors } from '../../validationErrors';
import { CustomDropdownIndicator, IDropdownIndicatorProps } from '../utils/selectDropdownIndicator';
import { CustomLoadingIndicator, ILoadingIndicatorProps } from '../utils/selectLoadingIndicator';
import { SelectOption } from '../utils/selectOption';
import { GroupedOption, isGroupedOptions } from './singleSelect.utils';

import './singleSelect.theme.css';

export type ReactSelectRef = React.Ref<
  SelectRef<IArmstrongReactSelectOption<any>, false, GroupBase<IArmstrongReactSelectOption<any>>>
>;

export interface IReactSelectBaseProps<Id extends NullOrUndefined<ArmstrongId>> {
  /** CSS className property */
  className?: string;

  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** the options to be displayed in the input */
  options: IArmstrongReactSelectOption<Id>[] | GroupedOption<Id>[];

  /** overrides the aria-label of the input. This is set as default to 'single-select-input' */
  ariaLabel?: string;

  /** overrides the placeholder string in the input when nothing is selected. This is set as default to 'Please select... */
  placeholder?: string;

  /** overrides the error messaging and icon display used in the error validation display */
  validationMode?: 'icon' | 'message' | 'both';

  /** overrides the error message(s) used in the validation display */
  errorMessages?: ValidationMessage[];

  /** overrides the icon option used beside the validation display */
  errorIcon?: JSX.Element;

  /** overrides the value of the form binder if both are provided  */
  currentValue?: Id;

  /** overrides the handleChange method used when the input option is changed */
  onSelectOption?: (newValue: Id) => void;

  /** retrieves the label string from the selected option */
  getOptionName?: (option: IArmstrongReactSelectOption<Id> | IArmstrongReactSelectCreatingOption<Id>) => string;

  /** retrieves the value string from the selected option */
  getOptionValue?: (option: IArmstrongReactSelectOption<Id> | IArmstrongReactSelectCreatingOption<Id>) => Id;

  /** exposes the input option to be overridden as a React node  */
  formatOptionLabel?: (
    option: IArmstrongReactSelectOption<Id> | IArmstrongReactSelectCreatingOption<Id>
  ) => React.ReactNode;

  /** is the select value clearable */
  isClearable?: boolean;

  /** is the select disabled */
  isDisabled?: boolean;

  /** is the select in a state of loading (async) */
  isLoading?: boolean;

  /** enable user to search the option by typing in the input */
  isSearchable?: boolean;

  /** how should the dropdown be positioned vertically */
  position?: 'auto' | 'bottom' | 'top';

  /** overrides the dropdown icon in the input */
  dropdownIcon?: JSX.Element;

  /** close the select menu when the user selects an option. Set to true as default */
  closeMenuOnSelect?: boolean;

  /** enable the user to create select options by typing into the input */
  allowCreate?: boolean;

  displaySize?: 'small' | 'medium' | 'large';

  /** contents of a label to name / describe the input */
  label?: JSX.Element;

  /** indicates wether the input must be used to submit form */
  required?: boolean;

  /** will scroll the validation errors into view when the length of validationErrors changes */
  scrollValidationErrorsIntoView?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;
}

/** @todo - add creatable option to this component to simplify code */
const SingleSelectOnly = React.forwardRef(
  (
    {
      className,
      bind,
      options,
      placeholder,
      validationMode,
      errorMessages,
      errorIcon,
      ariaLabel,
      currentValue,
      onSelectOption,
      getOptionName,
      getOptionValue,
      isClearable,
      isDisabled,
      isLoading,
      isSearchable,
      dropdownIcon,
      position,
      formatOptionLabel,
      closeMenuOnSelect,
      displaySize,
      label,
      required,
      requiredIndicator,
      scrollValidationErrorsIntoView,
    }: IReactSelectBaseProps<ArmstrongId>,
    ref: ReactSelectRef
  ) => {
    const globals = useArmstrongConfig({
      validationMode,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      validationErrorIcon: errorIcon,
    });

    const id = React.useId();

    const [value, setValue, config] = useBindingState(bind, {
      validationErrorMessages: errorMessages,
      validationErrorIcon: globals.validationErrorIcon,
      validationMode: globals.validationMode,
      value: currentValue,
      onChange: onSelectOption,
    });

    const { validationErrorMessages } = config;

    const handleChange = React.useCallback(
      (newValue: OnChangeValue<IArmstrongReactSelectOption<ArmstrongId>, false>) => {
        setValue?.(newValue?.id);
        onSelectOption?.(newValue?.id as ArmstrongId);
      },
      [setValue, onSelectOption]
    );

    const selectedValue = React.useMemo(() => {
      if (isGroupedOptions(options)) {
        return options
          .map(o => o.options)
          .flat(1)
          .find(o => o.id === value);
      }
      return options?.find(option => option.id === value);
    }, [options, value]);

    const valueGetter = React.useCallback<GetOptionValue<IArmstrongReactSelectOption<ArmstrongId>>>(
      option => {
        return getOptionValue?.(option)?.toString() ?? option.id?.toString() ?? '';
      },
      [getOptionValue]
    );

    const labelGetter = React.useCallback<GetOptionLabel<IArmstrongReactSelectOption<ArmstrongId>>>(
      option => {
        return getOptionName?.(option) ?? option.content ?? '';
      },
      [getOptionName]
    );

    const showValidation = !!validationErrorMessages?.length;

    const emptyStyles = () => {
      return {
        control: () => ({}),
        valueContainer: () => ({}),
        indicatorsContainer: () => ({}),
        indicatorSeparator: () => ({}),
        dropdownIndicator: () => ({}),
        loadingIndicator: () => ({}),
        input: () => ({}),
        singleValue: () => ({}),
        multiValue: () => ({}),
        multiValueLabel: () => ({}),
        multiValueRemove: () => ({}),
        clearIndicator: () => ({}),
        menu: () => ({}),
        menuList: () => ({}),
        menuPortal: () => ({}),
        noOptionsMessage: () => ({}),
        loadingMessage: () => ({}),
        placeholder: () => ({}),
        option: () => ({}),
        group: () => ({}),
        groupHeading: () => ({}),
      };
    };

    return (
      <div
        className={concat('arm-single-select-wrapper', className)}
        data-size={displaySize}
        data-error={showValidation}
      >
        {label && (
          <Label
            className={concat('arm-single-select-label')}
            required={required}
            requiredIndicator={globals.requiredIndicator}
          >
            {label}
          </Label>
        )}
        <Select
          ref={ref}
          id={id}
          formatOptionLabel={formatOptionLabel}
          className="arm-single-select-input"
          classNamePrefix="arm-single-select"
          onChange={handleChange}
          options={options}
          placeholder={placeholder || 'Please select...'}
          value={selectedValue}
          getOptionLabel={labelGetter}
          getOptionValue={valueGetter}
          aria-invalid={showValidation}
          aria-label={ariaLabel || 'single-select-input'}
          isClearable={isClearable}
          isDisabled={isDisabled}
          isOptionDisabled={o => !!o.disabled}
          isLoading={isLoading}
          isSearchable={isSearchable}
          menuPlacement={position}
          components={{
            Option: SelectOption,
            DropdownIndicator: props =>
              CustomDropdownIndicator({
                icon: dropdownIcon,
                ...props,
              } as IDropdownIndicatorProps<ArmstrongId, false>),

            LoadingIndicator: props =>
              CustomLoadingIndicator({
                ...props,
              } as ILoadingIndicatorProps<ArmstrongId, false>),
          }}
          closeMenuOnSelect={closeMenuOnSelect}
          styles={emptyStyles()}
        />

        {showValidation && (
          <ValidationErrors
            aria-label="single-select-validation-display"
            className="arm-single-select-validation-error-display"
            validationMode={globals.validationMode}
            scrollIntoView={globals.scrollValidationErrorsIntoView}
            validationErrors={validationErrorMessages || []}
          />
        )}
      </div>
    );
  }
) as (<Id extends ArmstrongId>(
  props: ArmstrongVFCProps<IReactSelectBaseProps<Id>, ReactSelectRef>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IReactSelectBaseProps<ArmstrongId>>;

SingleSelectOnly.displayName = 'Single Select Only';

export const SingleSelect = React.forwardRef<ReactSelectRef, IReactSelectBaseProps<ArmstrongId>>(
  ({ ...props }, ref) => {
    if (props.allowCreate) {
      throw new Error('Not implemented');
    }
    return <SingleSelectOnly ref={ref} {...props} />;
  }
);

SingleSelect.displayName = 'Single Select';

SingleSelect.defaultProps = {
  isClearable: true,
};
