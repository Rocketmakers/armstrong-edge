import React from "react";
import { IReactSelectBaseProps, IReactSelectOptionType } from "../singleSelect";

import Select, { GroupBase, OnChangeValue } from "react-select";
import { Form } from "../../hooks";
import SelectRef from "react-select/dist/declarations/src/Select";
import { ValidationErrors } from "../validationErrors";

export type ReactSelectMultiRef = SelectRef<
  IReactSelectOptionType<string>,
  true,
  GroupBase<IReactSelectOptionType<string>>
>;

export interface IReactMultiSelectProps<TSelectData = string[]>
  extends Omit<
    IReactSelectBaseProps<TSelectData>,
    "defaultValue" | "isClearable" | "isSearchable"
  > {}

export const MultiSelect = React.forwardRef<
  ReactSelectMultiRef,
  IReactMultiSelectProps
>(
  (
    {
      bind,
      options,
      placeholder,
      errorMessages,
      ariaLabel,
      errorIcon,
      validationMode,
      currentValue,
    },
    ref
  ) => {
    const id = React.useId();

    const [value, setValue, config] = Form.useBindingState(bind, {
      validationErrorMessages: errorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      value: currentValue,
    });

    const { validationErrorMessages, validationErrorIcon } = config;

    const handleChange = React.useCallback(
      (newValue: OnChangeValue<unknown, true>) => {
        const castValue = newValue as IReactSelectOptionType<string>[];
        setValue?.([...castValue.map((value) => value.value)]);
      },
      [setValue]
    );

    const selectedValue = React.useMemo(() => {
      return options?.filter((option) =>
        value?.some((value) => value === option.value)
      );
    }, [options, value]);

    const showValidation = !!validationErrorMessages?.length;

    return (
      <div>
        <Select
          ref={ref}
          id={id}
          isMulti
          className="arm-multi-select-input"
          classNamePrefix="arm-multi-select"
          onChange={handleChange}
          options={options}
          placeholder={placeholder || "Please select..."}
          aria-invalid={showValidation}
          aria-label={ariaLabel || "multi-select-input"}
          value={selectedValue}
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
);
