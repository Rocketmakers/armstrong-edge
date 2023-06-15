import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import ReactSelect, { components, GetOptionValue, GroupBase, OnChangeValue } from 'react-select';
import SelectRef, { FormatOptionLabelMeta } from 'react-select/dist/declarations/src/Select';

import { IBindingProps, useBindingState, ValidationMessage } from '../../form';
import {
  ArmstrongFCExtensions,
  ArmstrongFCReturn,
  ArmstrongId,
  ArmstrongVFCProps,
  DisplaySize,
  getContentFromOption,
  IArmstrongOption,
} from '../../types';
import { concat } from '../../utils';
import { useArmstrongConfig } from '../config';
import { Label } from '../label';
import { Spinner } from '../spinner';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper';
import { ValidationErrors } from '../validationErrors';
import { emptyStyles, GroupedOption, isGroupedOptions } from './select.utils';

import './select.theme.css';

const { DropdownIndicator, Option, ValueContainer } = components;

export type ReactSelectRef<Id extends ArmstrongId> = SelectRef<
  IArmstrongOption<Id>,
  false,
  GroupBase<IArmstrongOption<Id>>
>;

type NativeSelectProps = Omit<
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  'value' | 'ref'
>;

type NativeProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface IReactSelectBaseProps<Id extends ArmstrongId>
  extends Omit<IStatusWrapperProps, 'className' | 'error'>,
    NativeProps {
  /** Whether to render a native date input (useful for mobile) */
  native?: false;

  /** CSS className property */
  className?: string;

  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** the options to be displayed in the input */
  options?: IArmstrongOption<Id>[] | GroupedOption<Id>[];

  /** overrides the aria-label of the input. This is set as default to 'single-select-input' */
  ariaLabel?: string;

  /** overrides the placeholder string in the input when nothing is selected. This is set as default to 'Please select... */
  placeholder?: string;

  /** overrides the error message(s) used in the validation display */
  validationErrorMessages?: ValidationMessage[];

  /** overrides the value of the form binder if both are provided  */
  currentValue?: Id;

  /** overrides the handleChange method used when the input option is changed */
  onSelectOption?: (newValue: Id) => void;

  /** retrieves the value string from the selected option */
  getOptionValue?: (option: IArmstrongOption<Id>) => Id;

  /** exposes the input option to be overridden as a React node  */
  formatOptionLabel?: (
    option: IArmstrongOption<ArmstrongId>,
    formatOptionLabelMeta: FormatOptionLabelMeta<IArmstrongOption<ArmstrongId>>
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
  displaySize?: DisplaySize;

  /** contents of a label to name / describe the input */
  label?: React.ReactNode;

  /** indicates wether the input must be used to submit form */
  required?: boolean;

  /** will scroll the validation errors into view when the length of validationErrors changes */
  scrollValidationErrorsIntoView?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;
}

export interface INativeSelectProps<Id extends ArmstrongId>
  extends NativeSelectProps,
    Pick<
      IReactSelectBaseProps<Id>,
      | 'bind'
      | 'currentValue'
      | 'onSelectOption'
      | 'displaySize'
      | 'label'
      | 'required'
      | 'scrollValidationErrorsIntoView'
      | 'requiredIndicator'
      | 'validationMode'
      | 'validationErrorMessages'
      | 'errorIcon'
      | 'statusPosition'
      | 'dropdownIcon'
    > {
  /** Whether to render a native date input (useful for mobile) */
  native: true;

  /** the options to be displayed in the input */
  options?: IArmstrongOption<Id>[];

  /** Text to show as a placeholder when nothing is selected */
  placeholderOption?: string;

  /** Should the placeholder option be re-selectable? effectively allows the select to be cleared by the user. */
  placeholderOptionEnabled?: boolean;
}

export type ISelectProps<Id extends ArmstrongId> = IReactSelectBaseProps<Id> | INativeSelectProps<Id>;

const ReactSelectComponent = React.forwardRef<ReactSelectRef<ArmstrongId>, IReactSelectBaseProps<ArmstrongId>>(
  (
    {
      className,
      bind,
      options,
      placeholder,
      validationMode,
      validationErrorMessages: errorMessages,
      errorIcon,
      ariaLabel,
      currentValue,
      onSelectOption,
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
    },
    ref
  ) => {
    const globals = useArmstrongConfig({
      validationMode,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      validationErrorIcon: errorIcon,
    });

    const [value, setValue, { validationErrorMessages, isValid }] = useBindingState(bind, {
      validationErrorMessages: errorMessages,
      validationErrorIcon: globals.validationErrorIcon,
      validationMode: globals.validationMode,
      value: currentValue,
      onChange: onSelectOption,
    });

    const handleChange = React.useCallback(
      (newValue: OnChangeValue<IArmstrongOption<ArmstrongId>, false>) => {
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

    const valueGetter = React.useCallback<GetOptionValue<IArmstrongOption<ArmstrongId>>>(
      option => {
        return getOptionValue?.(option)?.toString() ?? option.id?.toString() ?? '';
      },
      [getOptionValue]
    );

    const labelGetter = React.useCallback<
      (
        option: IArmstrongOption<ArmstrongId>,
        formatOptionLabelMeta: FormatOptionLabelMeta<IArmstrongOption<ArmstrongId>>
      ) => React.ReactNode
    >(
      (option, meta) => {
        return formatOptionLabel?.(option, meta) ?? getContentFromOption(option, option.id) ?? '';
      },
      [formatOptionLabel]
    );

    return (
      <div
        className={concat('arm-select-wrapper', className)}
        data-size={displaySize}
        data-error={!isValid}
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
        <ReactSelect
          ref={ref}
          formatOptionLabel={labelGetter}
          className="arm-select-input"
          classNamePrefix="arm-select"
          onChange={handleChange}
          options={options}
          placeholder={placeholder}
          value={selectedValue}
          getOptionValue={valueGetter}
          aria-invalid={!isValid}
          aria-label={ariaLabel}
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
                <div className="arm-select-inner" data-error-icon={statusPosition}>
                  <StatusWrapper
                    error={!isValid}
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

        {!isValid && (
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
);

ReactSelectComponent.displayName = 'ReactSelect';

ReactSelectComponent.defaultProps = {
  clearable: true,
  selectedIcon: <ImCheckmark />,
  dropdownIcon: <FaChevronDown size={16} />,
};

const NativeSelectComponent = React.forwardRef<HTMLSelectElement, INativeSelectProps<ArmstrongId>>(
  (
    {
      validationMode,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      errorIcon,
      validationErrorMessages,
      currentValue,
      onSelectOption,
      bind,
      className,
      displaySize,
      label,
      required,
      native,
      options,
      onChange,
      placeholderOption,
      placeholderOptionEnabled,
      disabled,
      statusPosition,
      dropdownIcon,
      ...nativeProps
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLSelectElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current as HTMLSelectElement, [internalRef]);

    const globals = useArmstrongConfig({
      validationMode,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      validationErrorIcon: errorIcon,
    });

    const [value, setValue, bindConfig] = useBindingState(bind, {
      validationErrorMessages,
      validationErrorIcon: globals.validationErrorIcon,
      validationMode: globals.validationMode,
      value: currentValue,
      onChange: onSelectOption,
    });

    const clearSelect = React.useCallback(() => {
      onSelectOption?.(undefined);
      bind?.setValue?.(undefined);
    }, [onSelectOption, bind]);

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
          onChange(event);
        }

        const { value: newValue } = event.currentTarget;
        const selectedOption = options?.find(option => option.id?.toString() === newValue);
        if (selectedOption) {
          setValue?.(selectedOption.id);
          onSelectOption?.(selectedOption.id);
        } else if (!newValue && placeholderOption && placeholderOptionEnabled) {
          clearSelect();
        }
      },
      [onChange, options, placeholderOption, placeholderOptionEnabled, setValue, onSelectOption, clearSelect]
    );
    return (
      <div
        className={concat('arm-select-wrapper', 'arm-select-native-wrapper', className)}
        data-size={displaySize}
        data-error={!bindConfig.isValid}
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
        <div className="arm-select-inner" data-error-icon={statusPosition} data-disabled={disabled}>
          <StatusWrapper
            error={!bindConfig.isValid}
            errorIcon={errorIcon}
            className="arm-select-status"
            statusPosition={statusPosition}
            validationMode={globals.validationMode}
          >
            <select
              className="arm-native-select"
              {...nativeProps}
              ref={internalRef}
              onChange={onChangeEvent}
              value={value ?? undefined}
              disabled={disabled}
              defaultValue={placeholderOption && !nativeProps.defaultValue && !value ? '' : nativeProps.defaultValue}
            >
              {placeholderOption && (
                <option value="" disabled={!placeholderOptionEnabled}>
                  {placeholderOption}
                </option>
              )}
              {options?.map(option => (
                <option key={option.id} value={option.id ?? undefined} disabled={option.disabled} {...option.htmlProps}>
                  {getContentFromOption(option, value)}
                </option>
              ))}
            </select>
          </StatusWrapper>
          <div className="arm-native-indicators">
            <div className="arm-native-select-arrow">{dropdownIcon}</div>
          </div>
        </div>
        {!bindConfig.isValid && (
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
);

NativeSelectComponent.displayName = 'NativeSelect';

NativeSelectComponent.defaultProps = {
  dropdownIcon: <FaChevronDown size={16} />,
};

export const Select = React.forwardRef<HTMLDivElement | HTMLSelectElement, ISelectProps<ArmstrongId>>((props, ref) => {
  if (props.native) {
    return <NativeSelectComponent {...props} ref={ref as React.ForwardedRef<HTMLSelectElement>} />;
  }
  return <ReactSelectComponent {...props} ref={ref as React.ForwardedRef<ReactSelectRef<ArmstrongId>>} />;
}) as (<Id extends ArmstrongId, TProps extends ISelectProps<Id>>(
  props: TProps extends { native: true }
    ? ArmstrongVFCProps<TProps & INativeSelectProps<Id>, HTMLSelectElement>
    : ArmstrongVFCProps<TProps & IReactSelectBaseProps<Id>, ReactSelectRef<Id>>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ISelectProps<ArmstrongId>>;

Select.displayName = 'Select';

Select.defaultProps = {
  native: false,
};

// ) as (<Id extends ArmstrongId>(
//   props: ArmstrongVFCProps<ISelectBaseProps<Id>, ReactSelectRef<Id>>
// ) => ArmstrongFCReturn) &
//   ArmstrongFCExtensions<ISelectBaseProps<ArmstrongId>>;
