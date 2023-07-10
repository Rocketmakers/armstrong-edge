import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import ReactSelect, {
  components,
  GetOptionValue,
  GroupBase,
  MultiValue,
  OnChangeValue,
  SingleValue,
} from 'react-select';
import Creatable from 'react-select/creatable';
import { FilterOptionOption } from 'react-select/dist/declarations/src/filters';
import SelectRef, { Props as ReactSelectProps } from 'react-select/dist/declarations/src/Select';

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
import { IInputWrapperProps } from '../inputWrapper';
import { Label } from '../label';
import { Spinner } from '../spinner';
import { StatusWrapper } from '../statusWrapper';
import { ValidationErrors } from '../validationErrors';
import { emptyStyles, GroupedOption, isCreatingOption, isGroupedOptions } from './select.utils';

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

/**
 * Internal type for created options as returned by React Select.
 * NOTE: This type is never exposed by Armstrong and should not be imported in apps that consume Armstrong.
 */
export interface IReactSelectCreateOption {
  label: string;
  value: string;
  __isNew__: boolean;
}

export interface ISingleSelectProps<Id extends ArmstrongId>
  extends Pick<
      IInputWrapperProps,
      | 'statusPosition'
      | 'pending'
      | 'validationMode'
      | 'errorIcon'
      | 'labelId'
      | 'labelClassName'
      | 'validationErrorsClassName'
      | 'statusClassName'
      | 'disableOnPending'
      | 'hideIconOnStatus'
      | 'leftOverlay'
    >,
    NativeProps {
  /** Whether to render a native date input (useful for mobile) */
  native?: false;

  /** Whether to to allow selection of multiple items */
  multi?: false;

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
  formatOptionLabel?: (option: IArmstrongOption<ArmstrongId>) => React.ReactNode;

  /** is the select value clearable, defaults to true */
  clearable?: boolean;

  /** is the select disabled */
  disabled?: boolean;

  /** enable user to search the options by typing in the input, defaults to true */
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

  /**
   * String to use as the prefix when creating new options - defaults to `Create:`
   * NOTE: only used in `allowCreate` mode
   */
  createText?: string;

  /**
   * Called when a new option is created. Gives the option to do something with the new value like add it to the option array.
   * @param createdValue The new value that has been typed into the input
   * @returns The id to be set/added to the value, if this return value is falsy, the `createdValue` will be set as the Id.
   */
  onOptionCreated?: (createdValue: string) => Id | undefined;
}

export interface INativeSelectProps<Id extends ArmstrongId>
  extends NativeSelectProps,
    Pick<
      ISingleSelectProps<Id>,
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
      | 'labelId'
      | 'labelClassName'
      | 'validationErrorsClassName'
      | 'statusClassName'
      | 'hideIconOnStatus'
      | 'leftOverlay'
    > {
  /** Whether to render a native date input (useful for mobile) */
  native: true;

  /** Whether to to allow selection of multiple items */
  multi?: false;

  /** the options to be displayed in the input */
  options?: IArmstrongOption<Id>[];

  /** Text to show as a placeholder when nothing is selected */
  placeholderOption?: string;

  /** Should the placeholder option be re-selectable? effectively allows the select to be cleared by the user. */
  placeholderOptionEnabled?: boolean;
}

export interface IMultiSelectProps<Id extends ArmstrongId>
  extends Omit<ISingleSelectProps<Id>, 'bind' | 'currentValue' | 'onSelectOption' | 'multi'> {
  /** Whether to to allow selection of multiple items */
  multi: true;

  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id[]>;

  /** overrides the value of the form binder if both are provided  */
  currentValue?: Id[];

  /** overrides the handleChange method used when the input option is changed */
  onSelectOption?: (newValue: Id[]) => void;
}

export type ISelectProps<Id extends ArmstrongId> =
  | ISingleSelectProps<Id>
  | INativeSelectProps<Id>
  | IMultiSelectProps<Id>;

const ReactSelectComponent = React.forwardRef<
  ReactSelectRef<ArmstrongId>,
  ISingleSelectProps<ArmstrongId> | IMultiSelectProps<ArmstrongId>
>(
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
      multi,
      native,
      allowCreate,
      createText,
      onOptionCreated,
      labelId,
      labelClassName,
      validationErrorsClassName,
      statusClassName,
      disableOnPending,
      hideIconOnStatus,
      leftOverlay,
      ...nativeProps
    },
    ref
  ) => {
    const globals = useArmstrongConfig({
      validationMode,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      validationErrorIcon: errorIcon,
      inputStatusPosition: statusPosition,
      inputDisplaySize: displaySize,
      hideInputErrorIconOnStatus: hideIconOnStatus,
      disableControlOnPending: disableOnPending,
    });

    const internalRef = React.useRef<ReactSelectRef<ArmstrongId>>(null);
    React.useImperativeHandle(ref, () => internalRef.current as ReactSelectRef<ArmstrongId>, [internalRef]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- not an ideal use of any, but it's the only way of binding for single and multi from the same component
    const [value, setValue, { validationErrorMessages, isValid, shouldShowValidationErrorIcon }] = useBindingState<any>(
      bind,
      {
        validationErrorMessages: errorMessages,
        validationErrorIcon: globals.validationErrorIcon,
        validationMode: globals.validationMode,
        value: currentValue,
        onChange: onSelectOption,
      }
    );

    const handleChange = React.useCallback(
      (newValue: OnChangeValue<IArmstrongOption<ArmstrongId> | IReactSelectCreateOption, boolean>) => {
        if (!multi) {
          const singleValue = newValue as SingleValue<IArmstrongOption<ArmstrongId>> | undefined;
          if (isCreatingOption(singleValue)) {
            setValue?.(onOptionCreated?.(singleValue.value) ?? singleValue.value);
            return;
          }
          setValue?.(singleValue?.id);
        } else {
          const multiValue = newValue as MultiValue<IArmstrongOption<ArmstrongId>> | undefined;
          setValue?.(
            multiValue?.map(v => {
              if (isCreatingOption(v)) {
                return onOptionCreated?.(v.value) ?? v.value;
              }
              return v.id;
            })
          );
          // updating the value on a controlled react multiselect seems to cause the input to lose focus.
          // this is a bit of a hack but it seems to fix the issue.
          // @todo is there a better way of solving this?
          setTimeout(() => internalRef.current?.focus(), 1);
        }
      },
      [multi, setValue, onOptionCreated]
    );

    const selectedValue = React.useMemo(() => {
      const valueFinder = (incomingOptions?: IArmstrongOption<ArmstrongId>[]) => {
        if (!multi) {
          return incomingOptions?.find(o => o.id === value) ?? { id: value, content: value, wasCreated: true };
        }
        return value?.map(
          (v: ArmstrongId) => incomingOptions?.find(o => o.id === v) ?? { id: v, content: v, wasCreated: true }
        );
      };
      if (isGroupedOptions(options)) {
        return valueFinder(options.map(o => o.options).flat(1));
      }
      return valueFinder(options);
    }, [multi, options, value]);

    const valueGetter = React.useCallback<GetOptionValue<IArmstrongOption<ArmstrongId>>>(
      option => {
        if (isCreatingOption(option)) {
          return option.value;
        }
        return getOptionValue?.(option)?.toString() ?? option.id?.toString() ?? '';
      },
      [getOptionValue]
    );

    const labelGetter = React.useCallback<
      (option: IArmstrongOption<ArmstrongId> | IReactSelectCreateOption) => React.ReactNode
    >(
      option => {
        if (isCreatingOption(option)) {
          return `${createText} ${option.value}`;
        }
        return formatOptionLabel?.(option) ?? getContentFromOption(option);
      },
      [createText, formatOptionLabel]
    );

    const filterOption = React.useCallback<
      (option: FilterOptionOption<IArmstrongOption<ArmstrongId, unknown>>, inputValue: string) => boolean
    >(
      (option, inputValue) => {
        return !!labelGetter(option.data)?.toString().includes(inputValue);
      },
      [labelGetter]
    );

    const showLeftOverlay =
      leftOverlay &&
      (globals.inputStatusPosition !== 'left' ||
        !globals.hideInputErrorIconOnStatus ||
        (!pending && !shouldShowValidationErrorIcon));

    const reactSelectProps: Partial<
      ReactSelectProps<IArmstrongOption<ArmstrongId>, boolean, GroupBase<IArmstrongOption<ArmstrongId>>>
    > = {
      isMulti: multi,
      className: 'arm-select-input',
      classNamePrefix: 'arm-select',
      onChange: handleChange,
      filterOption,
      options,
      placeholder,
      value: selectedValue,
      getOptionValue: valueGetter,
      formatOptionLabel: labelGetter,
      'aria-invalid': !isValid,
      'aria-label': ariaLabel,
      isClearable: clearable,
      isDisabled: disabled || (pending && globals.disableControlOnPending) ? true : undefined,
      isOptionDisabled: o => !!o.disabled,
      isLoading: pending,
      isSearchable: searchable,
      menuPlacement: position,
      components: {
        Option: props => {
          return (
            <Option {...props}>
              <>
                {/* eslint-disable-next-line react/prop-types -- ESLint bug */}
                {labelGetter(props.data)}
                {/* eslint-disable-next-line react/prop-types -- ESLint bug */}
                {props.isSelected && selectedIcon}
              </>
            </Option>
          );
        },
        DropdownIndicator: props => <DropdownIndicator {...props}>{dropdownIcon}</DropdownIndicator>,
        LoadingIndicator: () => <Spinner className="arm-select-spinner" fillContainer={false} icon={loadingIcon} />,
        ValueContainer: props => {
          return (
            <div className="arm-select-inner" data-error-icon={globals.inputStatusPosition}>
              <StatusWrapper
                error={!isValid}
                errorIcon={globals.validationErrorIcon}
                className={concat('arm-select-status', statusClassName)}
                statusPosition={globals.inputStatusPosition}
                validationMode={globals.validationMode}
              >
                {showLeftOverlay && <div className="arm-select-overlay arm-select-overlay-left">{leftOverlay}</div>}
                <ValueContainer {...props} />
              </StatusWrapper>
            </div>
          );
        },
      },
      closeMenuOnSelect,
      styles: emptyStyles(),
    };

    return (
      <div
        className={concat('arm-select-wrapper', className)}
        data-size={globals.inputDisplaySize}
        data-multi={!!multi}
        data-error={!isValid}
        {...nativeProps}
      >
        {label && (
          <Label
            id={labelId}
            className={concat('arm-select-label', labelClassName)}
            required={required}
            requiredIndicator={globals.requiredIndicator}
            displaySize={globals.inputDisplaySize}
          >
            {label}
          </Label>
        )}
        {allowCreate ? (
          <Creatable ref={internalRef} {...reactSelectProps} />
        ) : (
          <ReactSelect ref={internalRef} {...reactSelectProps} />
        )}
        {!isValid && (
          <ValidationErrors
            aria-label="Error messages"
            className={concat('arm-select-validation-error-display', validationErrorsClassName)}
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
  searchable: true,
  selectedIcon: <ImCheckmark />,
  dropdownIcon: <FaChevronDown size={16} />,
  createText: 'Create:',
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
      labelId,
      labelClassName,
      validationErrorsClassName,
      statusClassName,
      hideIconOnStatus,
      leftOverlay,
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
      inputStatusPosition: statusPosition,
      inputDisplaySize: displaySize,
      hideInputErrorIconOnStatus: hideIconOnStatus,
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

    const showLeftOverlay =
      leftOverlay &&
      (globals.inputStatusPosition !== 'left' ||
        !globals.hideInputErrorIconOnStatus ||
        !bindConfig.shouldShowValidationErrorIcon);

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
            displaySize={globals.inputDisplaySize}
          >
            {label}
          </Label>
        )}
        <div className="arm-select-inner" data-error-icon={statusPosition} data-disabled={disabled}>
          <StatusWrapper
            error={!bindConfig.isValid}
            errorIcon={globals.validationErrorIcon}
            className={concat('arm-select-status', statusClassName)}
            statusPosition={globals.inputStatusPosition}
            validationMode={globals.validationMode}
          >
            {showLeftOverlay && <div className="arm-select-overlay arm-select-overlay-left">{leftOverlay}</div>}
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
                  {getContentFromOption(option)}
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
  if (!props.multi) {
    return (
      <ReactSelectComponent {...props} multi={false} ref={ref as React.ForwardedRef<ReactSelectRef<ArmstrongId>>} />
    );
  }
  return <ReactSelectComponent {...props} multi={true} ref={ref as React.ForwardedRef<ReactSelectRef<ArmstrongId>>} />;
}) as (<Id extends ArmstrongId, TProps extends ISelectProps<Id>>(
  props: TProps extends { native: true }
    ? ArmstrongVFCProps<TProps & INativeSelectProps<Id>, HTMLSelectElement>
    : TProps extends { multi: true }
    ? ArmstrongVFCProps<TProps & IMultiSelectProps<Id>, ReactSelectRef<Id>>
    : ArmstrongVFCProps<TProps & ISingleSelectProps<Id>, ReactSelectRef<Id>>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ISelectProps<ArmstrongId>>;

Select.displayName = 'Select';

Select.defaultProps = {
  native: false,
};
