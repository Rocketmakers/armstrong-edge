import React from "react";
import Select, {
  GroupBase,
  OnChangeValue,
  GetOptionValue,
  GetOptionLabel,
} from "react-select";
import { Form } from "../../../hooks";
import {
  IArmstrongReactSelectOption,
  ArmstrongId,
  NullOrUndefined,
  ArmstrongFCProps,
  ArmstrongFCReturn,
  ArmstrongFCExtensions,
} from "../../../types";
import { ClassNames } from "../../../utils";

import { ValidationErrors } from "../../validationErrors";
import { IReactSelectBaseProps } from "../singleSelect";
import SelectRef from "react-select/dist/declarations/src/Select";
import {
  CustomDropdownIndicator,
  IDropdownIndicatorProps,
} from "../utils/selectDropdownIndicator";
import { isGroupedOptions } from "../singleSelect/singleSelect.utils";
import { IconUtils } from "../../icon";

export type ReactSelectMultiRef = React.Ref<
  SelectRef<
    IArmstrongReactSelectOption<any>,
    true,
    GroupBase<IArmstrongReactSelectOption<any>>
  >
>;

// "isClearable" and "isSearchable" props are included as standard when "isMulti" is set to true
export interface IReactMultiSelectProps<
  Id extends ArmstrongId,
  TBind extends NullOrUndefined<Id[]>
> extends Omit<
    IReactSelectBaseProps<Id>,
    "isClearable" | "isSearchable" | "onSelectOption" | "bind" | "currentValue"
  > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: Form.IBindingProps<TBind>;

  /** overrides the handleChange method used when the input option is changed */
  onSelectOption?: (newValue: TBind) => void;

  /** overrides the value of the form binder if both are provided  */
  currentValue?: TBind;
}

export const MultiSelect = React.forwardRef(
  <Id extends ArmstrongId, TBind extends NullOrUndefined<Id[]>>(
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
      getOptionName,
      getOptionValue,
      isDisabled,
      isLoading,
      className,
      dropdownIcon,
      position,
      closeMenuOnSelect,
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
      (newValue: OnChangeValue<IArmstrongReactSelectOption<Id>, true>) => {
        setValue?.(newValue.map((opt) => opt.id) as TBind);
      },
      [setValue]
    );

    const selectedValue = React.useMemo(() => {
      if (isGroupedOptions(options)) {
        return options
          .map((o) => o.options)
          .flat(1)
          .filter((o) => value?.some((v) => v === o.id));
      } else {
        return options?.filter((o) => value?.some((v) => v === o.id));
      }
    }, [options, value]);

    const valueGetter = React.useCallback<
      GetOptionValue<IArmstrongReactSelectOption<Id>>
    >(
      (option) => {
        return (
          getOptionValue?.(option)?.toString() ?? option.id?.toString() ?? ""
        );
      },
      [getOptionValue]
    );

    const labelGetter = React.useCallback<
      GetOptionLabel<IArmstrongReactSelectOption<Id>>
    >(
      (option) => {
        return getOptionName?.(option) ?? option.name?.toString() ?? "";
      },
      [getOptionName]
    );

    const showValidation = !!validationErrorMessages?.length;

    return (
      <div
        className={ClassNames.concat(
          "arm-multi-select-input-wrapper",
          className
        )}
      >
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
          getOptionValue={valueGetter}
          getOptionLabel={labelGetter}
          isOptionDisabled={(o) => !!o.disabled}
          aria-label={ariaLabel || "multi-select-input"}
          isDisabled={isDisabled}
          isLoading={isLoading}
          value={selectedValue}
          menuPlacement={position}
          components={{
            DropdownIndicator: (props) =>
              CustomDropdownIndicator({
                icon:
                  dropdownIcon ||
                  IconUtils.getIconDefinition("Icomoon", "arrow-down3"),
                ...props,
              } as IDropdownIndicatorProps<Id, true>),
          }}
          closeMenuOnSelect={closeMenuOnSelect}
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
) as (<Id extends ArmstrongId, TBind extends NullOrUndefined<Id[]>>(
  props: ArmstrongFCProps<
    IReactMultiSelectProps<Id, TBind>,
    ReactSelectMultiRef
  >
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IReactMultiSelectProps<any, any>>;
