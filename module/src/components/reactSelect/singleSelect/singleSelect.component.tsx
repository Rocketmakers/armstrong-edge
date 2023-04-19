import React from 'react';
import Select, {
  GetOptionLabel,
  GetOptionValue,
  GroupBase,
  OnChangeValue,
} from 'react-select';
import SelectRef from 'react-select/dist/declarations/src/Select';
import {
  CustomDropdownIndicator,
  IDropdownIndicatorProps,
} from '../utils/selectDropdownIndicator';
import { Form } from '../../../hooks';
import {
  IArmstrongReactSelectOption,
  NullOrUndefined,
  ArmstrongId,
  ArmstrongVFCProps,
  ArmstrongFCReturn,
  ArmstrongFCExtensions,
  IArmstrongReactSelectCreatingOption,
} from '../../../types';
import { concat } from '../../../utils';
import { IIcon, IconSet, IconUtils } from '../../icon';
import { ValidationErrors } from '../../validationErrors';
import { isCreatingOption, isGroupedOptions } from './singleSelect.utils';
import CreatableSelect from 'react-select/creatable';
import {
  CustomLoadingIndicator,
  ILoadingIndicatorProps,
} from '../utils/selectLoadingIndicator';

export type ReactSelectRef = React.Ref<
  SelectRef<
    IArmstrongReactSelectOption<any>,
    false,
    GroupBase<IArmstrongReactSelectOption<any>>
  >
>;

export interface GroupedOption<Id extends NullOrUndefined<ArmstrongId>> {
  label: string;
  options: IArmstrongReactSelectOption<Id>[];
}

export interface IReactSelectBaseProps<
  Id extends NullOrUndefined<ArmstrongId>
> {
  /** CSS className property */
  className?: string;

  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: Form.IBindingProps<Id>;

  /** the options to be displayed in the input */
  options?: IArmstrongReactSelectOption<Id>[] | GroupedOption<Id>[];

  /** overrides the aria-label of the input. This is set as default to 'single-select-input' */
  ariaLabel?: string;

  /** overrides the placeholder string in the input when nothing is selected. This is set as default to 'Please select... */
  placeholder?: string;

  /** overrides the error messaging and icon display used in the error validation display */
  validationMode?: 'icon' | 'message' | 'both';

  /** overrides the error message(s) used in the validation display */
  errorMessages?: Form.ValidationMessage[];

  /** overrides the icon option used beside the validation display */
  errorIcon?: IIcon<IconSet>;

  /** overrides the value of the form binder if both are provided  */
  currentValue?: Id;

  /** overrides the handleChange method used when the input option is changed */
  onSelectOption?: (newValue: Id) => void;

  /** retrieves the label string from the selected option */
  getOptionName?: (
    option:
      | IArmstrongReactSelectOption<Id>
      | IArmstrongReactSelectCreatingOption<Id>
  ) => string;

  /** retrieves the value string from the selected option */
  getOptionValue?: (
    option:
      | IArmstrongReactSelectOption<Id>
      | IArmstrongReactSelectCreatingOption<Id>
  ) => Id;

  /** exposes the input option to be overridden as a React node  */
  formatOptionLabel?: (
    option:
      | IArmstrongReactSelectOption<Id>
      | IArmstrongReactSelectCreatingOption<Id>
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
  dropdownIcon?: IIcon<IconSet>;

  /** close the select menu when the user selects an option. Set to true as default */
  closeMenuOnSelect?: boolean;

  /** enable the user to create select options by typing into the input */
  allowCreate?: boolean;
}

const SingleSelectOnly = React.forwardRef(
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
      dropdownIcon,
      position,
      formatOptionLabel,
      closeMenuOnSelect,
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
      if (isGroupedOptions(options)) {
        return options
          .map((o) => o.options)
          .flat(1)
          .find((o) => o.id === value);
      } else {
        return options?.find((option) => option.id === value);
      }
    }, [options, value, isGroupedOptions]);

    const valueGetter = React.useCallback<
      GetOptionValue<IArmstrongReactSelectOption<Id>>
    >(
      (option) => {
        return (
          getOptionValue?.(option)?.toString() ?? option.id?.toString() ?? ''
        );
      },
      [getOptionValue]
    );

    const labelGetter = React.useCallback<
      GetOptionLabel<IArmstrongReactSelectOption<Id>>
    >(
      (option) => {
        return getOptionName?.(option) ?? option.name?.toString() ?? '';
      },
      [getOptionName]
    );

    const showValidation = !!validationErrorMessages?.length;

    const emptyStyles = () => {
      return {
        control: () => ({}),
        valueContainer: () => ({}),
        indicatorsContainer: () => ({}),
        // indicatorSeparator: () => ({}),
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
      <div className={concat('arm-single-select-wrapper', className)}>
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
          isOptionDisabled={(o) => !!o.disabled}
          isLoading={isLoading}
          isSearchable={isSearchable}
          menuPlacement={position}
          components={{
            DropdownIndicator: (props) =>
              CustomDropdownIndicator({
                icon:
                  dropdownIcon ||
                  IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
                ...props,
              } as IDropdownIndicatorProps<Id, false>),

            LoadingIndicator: (props) =>
              CustomLoadingIndicator({
                ...props,
              } as ILoadingIndicatorProps<Id, false>),
          }}
          closeMenuOnSelect={closeMenuOnSelect}
          styles={emptyStyles()}
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
) as (<Id extends ArmstrongId>(
  props: ArmstrongVFCProps<IReactSelectBaseProps<Id>, ReactSelectRef>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IReactSelectBaseProps<any>>;

const SingleSelectCreatable = React.forwardRef(
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
      dropdownIcon,
      position,
      formatOptionLabel,
      closeMenuOnSelect,
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
      let foundOption: IArmstrongReactSelectOption<Id> | undefined;
      if (isGroupedOptions(options)) {
        foundOption = options
          .map((o) => o.options)
          .flat(1)
          .find((o) => o.id === value);
      } else {
        foundOption = options?.find((option) => option.id === value);
      }

      if (foundOption) {
        return foundOption;
      }

      if (value) {
        return {
          id: value,
          name: value,
        } as IArmstrongReactSelectOption<Id>;
      }
      return undefined;
    }, [options, value, isGroupedOptions]);

    const valueGetter = React.useCallback<
      GetOptionValue<
        | IArmstrongReactSelectOption<Id>
        | IArmstrongReactSelectCreatingOption<Id>
      >
    >(
      (option) => {
        if (isCreatingOption(option)) {
          return getOptionName?.(option) ?? option.label?.toString() ?? '';
        } else {
          return (
            getOptionValue?.(option)?.toString() ?? option.id?.toString() ?? ''
          );
        }
      },
      [getOptionValue]
    );

    const labelGetter = React.useCallback<
      GetOptionLabel<
        | IArmstrongReactSelectOption<Id>
        | IArmstrongReactSelectCreatingOption<Id>
      >
    >(
      (option) => {
        if (isCreatingOption(option)) {
          return getOptionName?.(option) ?? option.label?.toString() ?? '';
        } else {
          return getOptionName?.(option) ?? option.name?.toString() ?? '';
        }
      },
      [getOptionName]
    );

    const handleCreate = React.useCallback(
      (newValue: string) => {
        setValue?.(newValue as Id);
      },
      [setValue, value]
    );

    const showValidation = !!validationErrorMessages?.length;

    return (
      <div className={concat('arm-single-select-creatable-wrapper', className)}>
        <CreatableSelect
          ref={ref}
          id={id}
          onCreateOption={handleCreate}
          value={selectedValue}
          getOptionLabel={labelGetter}
          getOptionValue={valueGetter}
          options={options}
          onChange={handleChange}
          isClearable={isClearable}
          formatOptionLabel={formatOptionLabel}
          className="arm-single-select-creatable-input"
          classNamePrefix="arm-single-select-creatable"
          placeholder={placeholder || 'Please select...'}
          aria-invalid={showValidation}
          aria-label={ariaLabel || 'single-select-creatable-input'}
          isDisabled={isDisabled}
          isOptionDisabled={(o) => !!o.disabled}
          isLoading={isLoading}
          isSearchable={isSearchable}
          menuPlacement={position}
          components={{
            DropdownIndicator: (props) =>
              CustomDropdownIndicator({
                icon:
                  dropdownIcon ||
                  IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
                ...props,
              } as IDropdownIndicatorProps<Id, false>),
          }}
          closeMenuOnSelect={closeMenuOnSelect}
        />

        {showValidation && (
          <ValidationErrors
            aria-label="single-select-creatable-validation-display"
            className="arm-single-select-creatable-validation-error-display"
            validationMode={validationMode}
            validationErrors={validationErrorMessages || []}
            icon={validationErrorIcon || undefined}
          />
        )}
      </div>
    );
  }
) as (<Id extends ArmstrongId>(
  props: ArmstrongVFCProps<IReactSelectBaseProps<Id>, ReactSelectRef>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IReactSelectBaseProps<any>>;

export const SingleSelect = React.forwardRef<
  ReactSelectRef,
  IReactSelectBaseProps<any>
>(({ ...props }, ref) => {
  switch (props.allowCreate) {
    case true:
      return <SingleSelectCreatable ref={ref} {...props} />;
    default:
      return <SingleSelectOnly ref={ref} {...props} />;
  }
});
