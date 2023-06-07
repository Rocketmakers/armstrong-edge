import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import * as React from 'react';

import { IBindingProps, useBindingState } from '../../form';
import {
  ArmstrongFCExtensions,
  ArmstrongFCReturn,
  ArmstrongId,
  ArmstrongVFCProps,
  IArmstrongOptionWithInput,
} from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';
import { IInputWrapperProps } from '../inputWrapper';
import { Label } from '../label';
import { ValidationErrors } from '../validationErrors';

import './radioGroup.theme.css';

type DisplaySize = 'small' | 'medium' | 'large';

export interface IRadioGroupProps<Id extends ArmstrongId>
  extends Pick<
    IInputWrapperProps,
    'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'
  > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** The options to be shown in the input */
  options: IArmstrongOptionWithInput<
    Id,
    Omit<
      React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'onChange' | 'type' | 'ref'
    >,
    {}
  >[];

  /** CSS className property */
  className?: string;

  /** the current value of the radioInput */
  value?: Id;

  /** Fired when the value changes */
  onChange?: (newValue: Id) => void;

  /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** Checked icon */
  checkedIcon?: JSX.Element;

  /** Unchecked icon */
  uncheckedIcon?: JSX.Element;

  /** which size variant to use */
  displaySize?: DisplaySize;

  /** Label for the whole radio group itself */
  label?: string;

  /** Indicates if field must be used to submit form */
  required?: boolean;

  /** wether input's value can be changed by user */
  disabled?: boolean;

  /** will scroll the validation errors into view when the length of validationErrors changes */
  scrollValidationErrorsIntoView?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;
}

/** Render a list of radio inputs which binds to a single string */
export const RadioGroup = React.forwardRef(
  (
    {
      bind,
      options,
      className,
      value,
      errorIcon,
      validationMode,
      validationErrorMessages,
      onChange,
      checkedIcon,
      uncheckedIcon,
      error,
      displaySize,
      label,
      required,
      disabled,
      scrollValidationErrorsIntoView,
      requiredIndicator,
    }: IRadioGroupProps<ArmstrongId>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const globals = useArmstrongConfig({
      validationMode,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      validationErrorIcon: errorIcon,
    });

    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      onChange,
    });

    return (
      <>
        {label && (
          <Label
            className={concat('arm-radio-group-label')}
            required={required}
            requiredIndicator={globals.requiredIndicator}
          >
            {label}
          </Label>
        )}
        <RadixRadioGroup.Root
          className={concat('arm-radio-group', className)}
          ref={ref}
          data-error={error || !!validationErrorMessages?.length}
          data-disabled={disabled}
          data-size={displaySize}
          value={boundValue?.toString() ?? 'undefined'}
          onValueChange={newValue => setBoundValue(newValue)}
          disabled={disabled}
        >
          {options.map(option => {
            const isChecked = boundValue === option.id;
            return (
              <div className="arm-radio-group-item-container" key={option.id}>
                <RadixRadioGroup.Item
                  className="arm-radio-group-item"
                  value={option.id?.toString() ?? ''}
                  id={option.id?.toString()}
                  disabled={option.disabled}
                >
                  <RadixRadioGroup.Indicator
                    className="arm-radio-group-item-indicator"
                    data-custom-icon={!!checkedIcon || !!uncheckedIcon}
                    forceMount={!!uncheckedIcon || undefined}
                  >
                    {isChecked ? checkedIcon : uncheckedIcon}
                  </RadixRadioGroup.Indicator>
                </RadixRadioGroup.Item>
                <label className="arm-radio-label" htmlFor={option.id?.toString()}>
                  {typeof option.content === 'function' ? option.content(isChecked) : option.content}
                </label>
              </div>
            );
          })}
          {bindConfig.shouldShowValidationErrorMessage && bindConfig.validationErrorMessages && (
            <ValidationErrors validationErrors={bindConfig.validationErrorMessages} className="arm-radio-errors" />
          )}
        </RadixRadioGroup.Root>
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(props: ArmstrongVFCProps<IRadioGroupProps<Id>, HTMLDivElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IRadioGroupProps<ArmstrongId>>;

RadioGroup.displayName = 'RadioGroup';
