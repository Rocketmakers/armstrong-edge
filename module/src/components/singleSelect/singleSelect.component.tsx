import React from "react"
import Select, { GetOptionLabel, GetOptionValue, GroupBase, OnChangeValue } from "react-select"
import SelectRef from "react-select/dist/declarations/src/Select"
import { Form } from "../../hooks"
import { ClassNames } from "../../utils"
import { IIcon, IconSet } from "../icon"
import { ValidationErrors } from "../validationErrors"
import { ArmstrongId, ArmstrongVFCProps, ArmstrongFCReturn, ArmstrongFCExtensions, IArmstrongReactSelectOption, NullOrUndefined } from "../../types"

import "./singleSelect.basic.scss";

export type ReactSelectRef = React.Ref<
  SelectRef<
    IArmstrongReactSelectOption<any>,
    false,
    GroupBase<IArmstrongReactSelectOption<any>>
  >
>;
export interface IReactSelectBaseProps<Id extends NullOrUndefined<ArmstrongId>> {
  /** CSS className property */
  className?: string;

  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: Form.IBindingProps<Id>;

  /** the options to be displayed in the input */
  options?: IArmstrongReactSelectOption<Id>[];

  /** overrides the aria-label of the input. This is set as default to 'single-select-input' */
  ariaLabel?: string;

  /** overrides the placeholder string in the input when nothing is selected. This is set as default to 'Please select... */
  placeholder?: string;

  /** overrides the error messaging and icon display used in the error validation display */
  validationMode?: "icon" | "message" | "both";

  /** overrides the error message(s) used in the validation display */
  errorMessages?: Form.ValidationMessage[];

  /** overrides the icon option used beside the validation display */
  errorIcon?: IIcon<IconSet>;

  /** overrides the value of the form binder if both are provided  */
  currentValue?: Id;

  /** overrides the handleChange method used when the input option is changed */
  onSelectOption?: (newValue: Id) => void;

  /** retrieves the label string from the selected option */
  getOptionName?: (option: IArmstrongReactSelectOption<Id>) => string;

  /** retrieves the value string from the selected option */
  getOptionValue?: (option: IArmstrongReactSelectOption<Id>) => Id;

  /** is the select value clearable */
  isClearable?: boolean;

  /** is the select disabled */
  isDisabled?: boolean;

  /** is the select in a state of loading (async) */
  isLoading?: boolean;

  /** enable user to search the option by typing in the input */
  isSearchable?: boolean;
}

export const SingleSelect = React.forwardRef(
  <Id extends ArmstrongId>(
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
    }: IReactSelectBaseProps<Id>,
    ref: ReactSelectRef
  ) => {
    const id = React.useId();

    const [value, setValue, config] = Form.useBindingState(bind, {
      validationErrorMessages: errorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      value: currentValue,
      onChange: onSelectOption,
    });

    const { validationErrorMessages, validationErrorIcon } = config;

    const handleChange = React.useCallback(
      (newValue: OnChangeValue<IArmstrongReactSelectOption<Id>, false>) => {
        setValue?.(newValue?.id);
        onSelectOption?.(newValue?.id as Id);
      },
      [setValue, onSelectOption]
    );

    const selectedValue = React.useMemo(() => {
      return options?.find((option) => option.id === value);
    }, [options]);

    const valueGetter = React.useCallback<GetOptionValue<IArmstrongReactSelectOption<Id>>>(option => {
      return getOptionValue?.(option)?.toString() ?? option.id?.toString() ?? "";
    }, [getOptionValue]);

    const labelGetter = React.useCallback<GetOptionLabel<IArmstrongReactSelectOption<Id>>>(option => {
      return getOptionName?.(option) ?? option.name?.toString() ?? "";
    }, [getOptionName]);

    const showValidation = !!validationErrorMessages?.length;

    return (
      <div className={ClassNames.concat("arm-single-select-wrapper", className)}>
        <Select
          ref={ref}
          id={id}
          className="arm-single-select-input"
          classNamePrefix="arm-single-select"
          onChange={handleChange}
          options={options}
          placeholder={placeholder || "Please select..."}
          value={selectedValue}
          getOptionLabel={labelGetter}
          getOptionValue={valueGetter}
          aria-invalid={showValidation}
          aria-label={ariaLabel || "single-select-input"}
          isClearable={isClearable}
          isDisabled={isDisabled}
          isOptionDisabled={(o) => !!o.disabled}
          isLoading={isLoading}
          isSearchable={isSearchable}
        />

        {showValidation && (
          <ValidationErrors
            aria-label="single-select-validation-display"
            className="arm-single-select-validation-error-display"
            validationMode={validationMode}
            validationErrors={validationErrorMessages || []}
            icon={validationErrorIcon || undefined}
          />
        )}
      </div>
    );
  }
) as (<Id extends ArmstrongId>(props: ArmstrongVFCProps<IReactSelectBaseProps<Id>, ReactSelectRef>) => ArmstrongFCReturn) & ArmstrongFCExtensions<IReactSelectBaseProps<any>>;
