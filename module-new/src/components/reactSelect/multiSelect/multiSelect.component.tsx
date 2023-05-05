import React from 'react';
import { ImArrowDown2 } from 'react-icons/im';
import Select, { GetOptionLabel, GetOptionValue, GroupBase, OnChangeValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import SelectRef from 'react-select/dist/declarations/src/Select';

import { IBindingProps, useBindingState } from '../../../hooks/form';
import {
  ArmstrongFCExtensions,
  ArmstrongFCProps,
  ArmstrongFCReturn,
  ArmstrongId,
  IArmstrongReactSelectCreatingOption,
  IArmstrongReactSelectOption,
  NullOrUndefined,
} from '../../../types';
import { concat } from '../../../utils';
import { ValidationErrors } from '../../validationErrors';
import { IReactSelectBaseProps } from '../singleSelect';
import { isCreatingOption, isGroupedOptions } from '../singleSelect/singleSelect.utils';
import { CustomDropdownIndicator, IDropdownIndicatorProps } from '../utils/selectDropdownIndicator';

export type ReactSelectMultiRef = React.Ref<
  SelectRef<IArmstrongReactSelectOption<any>, true, GroupBase<IArmstrongReactSelectOption<any>>>
>;

// "isClearable" and "isSearchable" props are included as standard when "isMulti" is set to true
export interface IReactMultiSelectProps<Id extends ArmstrongId, TBind extends NullOrUndefined<Id[]>>
  extends Omit<IReactSelectBaseProps<Id>, 'isClearable' | 'isSearchable' | 'onSelectOption' | 'bind' | 'currentValue'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** overrides the handleChange method used when the input option is changed */
  onSelectOption?: (newValue: TBind) => void;

  /** overrides the value of the form binder if both are provided  */
  currentValue?: TBind;
}

const MultiSelectOnly = React.forwardRef(
  (
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
    }: IReactMultiSelectProps<ArmstrongId, NullOrUndefined<ArmstrongId[]>>,
    ref: ReactSelectMultiRef
  ) => {
    const id = React.useId();

    const [value, setValue, config] = useBindingState(bind, {
      validationErrorMessages: errorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      value: currentValue,
      onChange: onSelectOption,
    });

    const { validationErrorMessages } = config;

    const handleChange = React.useCallback(
      (newValue: OnChangeValue<IArmstrongReactSelectOption<ArmstrongId>, true>) => {
        setValue?.(newValue.map(opt => opt.id));
      },
      [setValue]
    );

    const selectedValue = React.useMemo(() => {
      if (isGroupedOptions(options)) {
        return options
          .map(o => o.options)
          .flat(1)
          .filter(o => value?.some(v => v === o.id));
      }
      return options?.filter(o => value?.some(v => v === o.id));
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

    return (
      <div className={concat('arm-multi-select-input-wrapper', className)}>
        <Select
          ref={ref}
          id={id}
          isMulti
          className="arm-multi-select-input"
          classNamePrefix="arm-multi-select"
          onChange={handleChange}
          options={options}
          placeholder={placeholder || 'Please select...'}
          aria-invalid={showValidation}
          getOptionValue={valueGetter}
          getOptionLabel={labelGetter}
          isOptionDisabled={o => !!o.disabled}
          aria-label={ariaLabel || 'multi-select-input'}
          isDisabled={isDisabled}
          isLoading={isLoading}
          value={selectedValue}
          menuPlacement={position}
          components={{
            DropdownIndicator: props =>
              CustomDropdownIndicator({
                icon: dropdownIcon || ImArrowDown2,
                ...props,
              } as IDropdownIndicatorProps<ArmstrongId, true>),
          }}
          closeMenuOnSelect={closeMenuOnSelect}
        />

        {showValidation && (
          <ValidationErrors
            aria-label="multi-select-validation-display"
            className="arm-multi-select-validation-error-display"
            validationMode={validationMode}
            validationErrors={validationErrorMessages || []}
          />
        )}
      </div>
    );
  }
) as (<Id extends ArmstrongId, TBind extends NullOrUndefined<Id[]>>(
  props: ArmstrongFCProps<IReactMultiSelectProps<Id, TBind>, ReactSelectMultiRef>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IReactMultiSelectProps<any, any>>;

MultiSelectOnly.displayName = 'Multi Select Only';

const MultiSelectCreatable = React.forwardRef(
  (
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
    }: IReactMultiSelectProps<ArmstrongId, NullOrUndefined<ArmstrongId[]>>,
    ref: ReactSelectMultiRef
  ) => {
    const id = React.useId();

    const [value, setValue, config] = useBindingState(bind, {
      validationErrorMessages: errorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      value: currentValue,
      onChange: onSelectOption,
    });

    const { validationErrorMessages } = config;

    const handleChange = React.useCallback(
      (newValue: OnChangeValue<IArmstrongReactSelectOption<ArmstrongId>, true>) => {
        setValue?.(newValue.map(opt => opt.id));
      },
      [setValue]
    );

    const selectedValue = React.useMemo<IArmstrongReactSelectOption<ArmstrongId>[] | undefined>(() => {
      return value?.map(v => {
        let foundOption: IArmstrongReactSelectOption<ArmstrongId> | undefined;
        if (isGroupedOptions(options)) {
          foundOption = options
            .map(o => o.options)
            .flat(1)
            .find(o => o.id === v);
        } else {
          foundOption = options?.find(o => o.id === v);
        }
        if (foundOption) {
          return foundOption;
        }
        return {
          id: v,
          name: v,
        } as IArmstrongReactSelectOption<ArmstrongId>;
      });
    }, [options, value]);

    const valueGetter = React.useCallback<
      GetOptionValue<IArmstrongReactSelectOption<ArmstrongId> | IArmstrongReactSelectCreatingOption<ArmstrongId>>
    >(
      option => {
        if (isCreatingOption(option)) {
          return getOptionName?.(option) ?? option.label?.toString() ?? '';
        }
        return getOptionValue?.(option)?.toString() ?? option.id?.toString() ?? '';
      },
      [getOptionValue, getOptionName]
    );

    const labelGetter = React.useCallback<
      GetOptionLabel<IArmstrongReactSelectOption<ArmstrongId> | IArmstrongReactSelectCreatingOption<ArmstrongId>>
    >(
      option => {
        if (isCreatingOption(option)) {
          return getOptionName?.(option) ?? option.label?.toString() ?? '';
        }
        return getOptionName?.(option) ?? option.content?.toString() ?? '';
      },
      [getOptionName]
    );

    const showValidation = !!validationErrorMessages?.length;

    const handleCreate = React.useCallback(
      (newValue: string) => {
        setValue?.([...(value ?? []), newValue]);
      },
      [setValue, value]
    );

    return (
      <div className={concat('arm-multi-select-creatable-input-wrapper', className)}>
        <CreatableSelect
          ref={ref}
          id={id}
          value={selectedValue}
          options={options}
          getOptionValue={valueGetter}
          getOptionLabel={labelGetter}
          onChange={handleChange}
          isMulti={true}
          onCreateOption={handleCreate}
          className="arm-multi-select-creatable-input"
          classNamePrefix="arm-multi-select-creatable"
          placeholder={placeholder || 'Please select...'}
          aria-invalid={showValidation}
          isOptionDisabled={o => !!o.disabled}
          aria-label={ariaLabel || 'multi-select-creatable-input'}
          isDisabled={isDisabled}
          isLoading={isLoading}
          menuPlacement={position}
          components={{
            DropdownIndicator: props =>
              CustomDropdownIndicator({
                icon: dropdownIcon || ImArrowDown2,
                ...props,
              } as IDropdownIndicatorProps<ArmstrongId, true>),
          }}
          closeMenuOnSelect={closeMenuOnSelect}
        />

        {showValidation && (
          <ValidationErrors
            aria-label="multi-select-creatable-validation-display"
            className="arm-multi-select-creatable-validation-error-display"
            validationMode={validationMode}
            validationErrors={validationErrorMessages || []}
          />
        )}
      </div>
    );
  }
) as (<Id extends ArmstrongId, TBind extends NullOrUndefined<Id[]>>(
  props: ArmstrongFCProps<IReactMultiSelectProps<Id, TBind>, ReactSelectMultiRef>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IReactMultiSelectProps<any, any>>;

MultiSelectCreatable.displayName = 'Multi Select Creatable';

export const MultiSelect = React.forwardRef<ReactSelectMultiRef, IReactMultiSelectProps<any, any>>(
  ({ ...props }, ref) => {
    switch (props.allowCreate) {
      case true:
        return <MultiSelectCreatable ref={ref} {...props} />;
      default:
        return <MultiSelectOnly ref={ref} {...props} />;
    }
  }
);

MultiSelect.displayName = 'Multi Select';
