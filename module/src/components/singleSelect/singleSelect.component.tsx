import React from "react";
import Select, { GroupBase, OnChangeValue } from "react-select";
import SelectRef from "react-select/dist/declarations/src/Select";
import { Form } from "../../hooks";
import { IIcon, IconSet } from "../icon";
import { ValidationErrors } from "../validationErrors";

export type ReactSingleSelectRef = SelectRef<
  ISelectOptionType<string>,
  false,
  GroupBase<ISelectOptionType<string>>
>;

export type ISelectOptionType<TSelectData = any> = {
  value: TSelectData;
  label: string;
};

export interface ISingleSelectProps<TSelectData = string> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind: Form.IBindingProps<string>;

  /** the options to be displayed in the input */
  options: ISelectOptionType<TSelectData>[];

  /** adds a label above the input */
  label?: string;

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

  /** overrides the handleChange method used when the input option is changed */
  onSelectOption?: (newValue: OnChangeValue<unknown, false>) => void;
}

import "./singleSelect.basic.scss";

export const SingleSelect = React.forwardRef<
  ReactSingleSelectRef,
  ISingleSelectProps
>(
  (
    {
      bind,
      options,
      label,
      placeholder,
      validationMode,
      errorMessages,
      errorIcon,
      ariaLabel,
      onSelectOption,
    },
    ref
  ) => {
    const id = React.useId();

    const [value, setValue, config] = Form.useBindingState(bind, {
      validationErrorMessages: errorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      onChange: onSelectOption,
    });

    const {
      validationErrorMessages,
      shouldShowValidationErrorMessage,
      shouldShowValidationErrorIcon,
      validationErrorIcon,
    } = config;

    const handleChange = React.useCallback(
      (newValue: OnChangeValue<unknown, false>) => {
        const castValue = newValue as ISelectOptionType<string>;
        setValue?.(castValue?.value ?? undefined);
      },
      [setValue]
    );

    const selectedValue = React.useMemo(() => {
      return options?.find(
        (option) => option.value === (value ?? "")
      ) as ISelectOptionType<string>;
    }, [options, value]);

    const getOptionLabel = (option?: ISelectOptionType<string>): string => {
      return option?.label ?? "";
    };

    const getOptionValue = (option?: ISelectOptionType<string>): string => {
      return option?.value ?? "";
    };

    const showValidation = !!validationErrorMessages?.length;

    return (
      <div className="arm-single-select-wrapper">
        {label && (
          <label className="arm-single-select-header-label" htmlFor={id}>
            {label}
          </label>
        )}
        <Select
          ref={ref}
          id={id}
          className="arm-single-select-input"
          onChange={onSelectOption || handleChange}
          options={options}
          placeholder={placeholder || "Please select..."}
          value={selectedValue}
          isMulti={false}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          aria-invalid={showValidation}
          aria-label={ariaLabel || "single-select-input"}
        />

        {showValidation && (
          <ValidationErrors
            aria-label="single-select-validation-display"
            className="arm-single-select-validation-error-display"
            validationErrors={
              (shouldShowValidationErrorMessage && validationErrorMessages) ||
              []
            }
            icon={
              (shouldShowValidationErrorIcon && validationErrorIcon) ||
              undefined
            }
          />
        )}
      </div>
    );
  }
);
