import React from 'react';
import Select, { GroupBase, OnChangeValue } from 'react-select';
import SelectRef from 'react-select/dist/declarations/src/Select';

import { Form } from '../../hooks';
import { concat } from '../../utils';
import { IconSet, IIcon } from '../icon';
import { ValidationErrors } from '../validationErrors';

import './singleSelect.basic.scss';

export type ReactSingleSelectRef = SelectRef<ISelectOptionType<string>, false, GroupBase<ISelectOptionType<string>>>;

export type ISelectOptionType<TSelectData = any> = {
  value: TSelectData;
  label: string;
};

export interface ISingleSelectProps<TSelectData = string> {
  /** CSS className property */
  className?: string;

  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: Form.IBindingProps<string>;

  /** the options to be displayed in the input */
  options?: ISelectOptionType<TSelectData>[];

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
  currentValue?: string;

  /** overrides the handleChange method used when the input option is changed */
  onSelectOption?: (newValue: OnChangeValue<unknown, false>) => void;

  /** retrieves the label string from the selected option */
  getOptionLabel?: (option: ISelectOptionType<string>) => ISelectOptionType['label'] | '';

  /** retrieves the value string from the selected option */
  getOptionValue?: (option: ISelectOptionType<string>) => ISelectOptionType['value'] | '';
}

export const SingleSelect = React.forwardRef<ReactSingleSelectRef, ISingleSelectProps>(
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
      getOptionLabel,
      getOptionValue,
    },
    ref
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
      (newValue: OnChangeValue<unknown, false>) => {
        const castValue = newValue as ISelectOptionType<string>;
        setValue?.(castValue?.value ?? undefined);
      },
      [setValue]
    );

    const selectedValue = React.useMemo(() => {
      return options?.find(option => option.value === (value ?? '')) as ISelectOptionType<string>;
    }, [options, value]);

    const showValidation = !!validationErrorMessages?.length;

    return (
      <div className={concat('arm-single-select-wrapper', className)}>
        <Select
          ref={ref}
          id={id}
          className="arm-single-select-input"
          onChange={onSelectOption || handleChange}
          options={options}
          placeholder={placeholder || 'Please select...'}
          value={selectedValue}
          isMulti={false}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          aria-invalid={showValidation}
          aria-label={ariaLabel || 'single-select-input'}
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
