import React from 'react';
import { ImCheckmark } from 'react-icons/im';
import Select, { components, GetOptionLabel, GetOptionValue, GroupBase, OnChangeValue } from 'react-select';
import SelectRef from 'react-select/dist/declarations/src/Select';

import { IBindingProps, useBindingState, ValidationMessage } from '../../../form';
import {
  ArmstrongFCExtensions,
  ArmstrongFCReturn,
  ArmstrongId,
  ArmstrongVFCProps,
  IArmstrongReactSelectCreatingOption,
  IArmstrongReactSelectOption,
} from '../../../types';
import { concat } from '../../../utils';
import { useArmstrongConfig } from '../../config';
import { Label } from '../../label';
import { Spinner } from '../../spinner';
import { IStatusWrapperProps, StatusWrapper } from '../../statusWrapper';
import { ValidationErrors } from '../../validationErrors';
import { emptyStyles, GroupedOption, isGroupedOptions } from '../utils/select.utils';

import '../select.theme.css';

const { DropdownIndicator, Option, ValueContainer } = components;

export type ReactSelectRef<Id extends ArmstrongId> = React.Ref<
  SelectRef<IArmstrongReactSelectOption<Id>, false, GroupBase<IArmstrongReactSelectOption<Id>>>
>;

type NativeProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface IReactSelectBaseProps<Id extends ArmstrongId>
  extends Omit<IStatusWrapperProps, 'className' | 'error'>,
    NativeProps {
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

  /** overrides the error message(s) used in the validation display */
  errorMessages?: ValidationMessage[];

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
  clearable?: boolean;

  /** is the select disabled */
  disabled?: boolean;

  /** enable user to search the option by typing in the input */
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
  displaySize?: 'small' | 'medium' | 'large';

  /** contents of a label to name / describe the input */
  label?: React.ReactNode;

  /** indicates wether the input must be used to submit form */
  required?: boolean;

  /** will scroll the validation errors into view when the length of validationErrors changes */
  scrollValidationErrorsIntoView?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;
}

export const SingleSelect = React.forwardRef(
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
      clearable,
      disabled,
      searchable,
      dropdownIcon,
      loadingIcon,
      selectedIcon,
      position,
      formatOptionLabel,
      closeMenuOnSelect,
      displaySize,
      label,
      required,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      statusPosition,
      pending,
      ...nativeProps
    }: IReactSelectBaseProps<ArmstrongId>,
    ref: ReactSelectRef<ArmstrongId>
  ) => {
    const globals = useArmstrongConfig({
      validationMode,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      validationErrorIcon: errorIcon,
    });

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
      },
      [setValue]
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
    const showErrorIcon = showValidation && validationMode !== 'message';
    const errorIconPosition = showErrorIcon ? statusPosition : undefined;

    return (
      <div
        className={concat('arm-select-wrapper', className)}
        data-size={displaySize}
        data-error={showValidation}
        {...nativeProps}
      >
        {label && (
          <Label
            className={concat('arm-select-label')}
            required={required}
            requiredIndicator={globals.requiredIndicator}
          >
            {label}
          </Label>
        )}
        <Select
          ref={ref}
          formatOptionLabel={formatOptionLabel}
          className="arm-select-input"
          classNamePrefix="arm-select"
          onChange={handleChange}
          options={options}
          placeholder={placeholder || 'Please select...'}
          value={selectedValue}
          getOptionLabel={labelGetter}
          getOptionValue={valueGetter}
          aria-invalid={showValidation}
          aria-label={ariaLabel || 'single-select-input'}
          isClearable={clearable}
          isDisabled={disabled}
          isOptionDisabled={o => !!o.disabled}
          isLoading={pending}
          isSearchable={searchable}
          menuPlacement={position}
          components={{
            Option: props => (
              <Option {...props}>
                <>
                  {/* eslint-disable-next-line react/prop-types -- ESLint bug */}
                  {props.data.content}
                  {/* eslint-disable-next-line react/prop-types -- ESLint bug */}
                  {props.isSelected && selectedIcon}
                </>
              </Option>
            ),
            DropdownIndicator: props => <DropdownIndicator {...props}>{dropdownIcon}</DropdownIndicator>,
            LoadingIndicator: () => <Spinner className="arm-select-spinner" fillContainer={false} icon={loadingIcon} />,
            ValueContainer: props => (
              <>
                <div className="arm-select-inner" data-error-icon={errorIconPosition}>
                  <StatusWrapper
                    error={showValidation}
                    errorIcon={errorIcon}
                    className="arm-select-status"
                    statusPosition={statusPosition}
                    validationMode={globals.validationMode}
                  >
                    <ValueContainer {...props} />
                  </StatusWrapper>
                </div>
              </>
            ),
          }}
          closeMenuOnSelect={closeMenuOnSelect}
          styles={emptyStyles()}
        />

        {showValidation && (
          <ValidationErrors
            aria-label="Error messages"
            className="arm-select-validation-error-display"
            validationMode={globals.validationMode}
            scrollIntoView={globals.scrollValidationErrorsIntoView}
            validationErrors={validationErrorMessages || []}
          />
        )}
      </div>
    );
  }
) as (<Id extends ArmstrongId>(
  props: ArmstrongVFCProps<IReactSelectBaseProps<Id>, ReactSelectRef<Id>>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IReactSelectBaseProps<ArmstrongId>>;

SingleSelect.displayName = 'SingleSelect';

SingleSelect.defaultProps = {
  clearable: true,
  selectedIcon: <ImCheckmark />,
};
