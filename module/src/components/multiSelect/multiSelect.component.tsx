import React from "react";
import { IReactSelectBaseProps, IReactSelectOptionType } from "../singleSelect";

import Select, { GroupBase, MultiValue, OnChangeValue } from "react-select";
import { Form } from "../../hooks";
import SelectRef from "react-select/dist/declarations/src/Select";
import { ValidationErrors } from "../validationErrors";
import {
  ArmstrongFCExtensions,
  ArmstrongFCProps,
  ArmstrongFCReturn,
  ArmstrongId,
  NullOrUndefined,
} from "../../types";

export type ReactSelectMultiRef = React.Ref<
  SelectRef<
    IReactSelectOptionType<any>,
    true,
    GroupBase<IReactSelectOptionType<any>>
  >
>;

// "isClearable" and "isSearchable" props are included as standard when "isMulti" is set to true
export interface IReactMultiSelectProps<
  Id extends ArmstrongId,
  TBind extends NullOrUndefined<IReactSelectOptionType<Id>[]>
> extends Omit<
    IReactSelectBaseProps<any>,
    "isClearable" | "isSearchable" | "onSelectOption" | "bind"
  > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: Form.IBindingProps<MultiValue<TBind>>;

  /** overrides the handleChange method used when the input option is changed */
  onSelectOption?: (newValue: OnChangeValue<TBind, true>) => void;
}

export const MultiSelect = React.forwardRef(
  <
    Id extends ArmstrongId,
    TBind extends NullOrUndefined<IReactSelectOptionType<Id>[]>
  >(
    {
      bind,
      errorMessages,
      errorIcon,
      validationMode,
      currentValue,
      options,
      placeholder,
      ariaLabel,
      onSelectOption,
    }: IReactMultiSelectProps<Id, TBind>,
    ref: ReactSelectMultiRef
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
      (newValue: OnChangeValue<unknown, true>) => {
        const castValue = newValue as IReactSelectOptionType<TBind>[];
        setValue?.([...castValue.map((value) => value.value)]);
      },
      [setValue]
    );

    const selectedValue = React.useMemo(() => {
      return options?.filter((option) =>
        value?.some((value: any) => value === option.value)
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
            aria-label="multi-select-validation-display"
            className="arm-multi-select-validation-error-display"
            validationMode={validationMode}
            validationErrors={validationErrorMessages || []}
            icon={validationErrorIcon || undefined}
          />
        )}
      </div>
    );
  }
) as (<
  Id extends ArmstrongId,
  TBind extends NullOrUndefined<IReactSelectOptionType<Id>[]>
>(
  props: ArmstrongFCProps<
    IReactMultiSelectProps<Id, TBind>,
    ReactSelectMultiRef
  >
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IReactMultiSelectProps<any, any>>;
