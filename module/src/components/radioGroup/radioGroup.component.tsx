import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import * as React from 'react';

import { IBindingProps, useBindingState } from '../../form';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import {
  ArmstrongFCExtensions,
  ArmstrongFCReturn,
  ArmstrongId,
  ArmstrongVFCProps,
  DisplaySize,
  getContentFromOption,
  IArmstrongOption,
} from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';
import { IInputWrapperProps } from '../inputWrapper';
import { Label } from '../label';
import { ValidationErrors } from '../validationErrors';

import './radioGroup.theme.css';

export type RadioGroupOption<Id extends ArmstrongId> = IArmstrongOption<
  Id,
  Omit<RadixRadioGroup.RadioGroupItemProps, 'value'>
>;

export interface IRadioGroupProps<Id extends ArmstrongId>
  extends Pick<
      IInputWrapperProps,
      | 'scrollValidationErrorsIntoView'
      | 'validationMode'
      | 'errorIcon'
      | 'validationErrorMessages'
      | 'validationErrorsClassName'
    >,
    React.RefAttributes<HTMLDivElement> {
  /** Whether to show a vertical list of radio buttons or a horizontal set of adjacent buttons */
  displayMode?: 'radio' | 'button';

  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** The options to be shown in the input */
  options: RadioGroupOption<Id>[];

  /** CSS className property */
  className?: string;

  /** the current value of the radioInput */
  value?: Id;

  /** Fired when the value changes */
  onChange?: (newValue: Id) => void;

  /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** (Optional) A custom JSX.Element for the checked indicator. */
  customIndicator?: React.JSX.Element;

  /** which size variant to use */
  displaySize?: DisplaySize;

  /** Label for the whole radio group itself */
  label?: React.ReactNode;

  /** (Optional) Class name for the label component */
  labelClassName?: string;

  /** (Optional) Id to use for the checkbox. Falls back to React ID if not provided */
  labelId?: string;

  /** Indicates if field must be used to submit form */
  required?: boolean;

  /** wether input's value can be changed by user */
  disabled?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;

  /** should the input validate automatically against the provided schema? Default: `true` */
  autoValidate?: boolean;
}

/** Render a list of radio inputs which binds to a single string */
export const RadioGroup = React.forwardRef<HTMLDivElement, IRadioGroupProps<ArmstrongId>>(
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
      customIndicator,
      error,
      displaySize,
      label,
      labelClassName,
      required,
      disabled,
      scrollValidationErrorsIntoView,
      requiredIndicator,
      displayMode = 'radio',
      validationErrorsClassName,
      labelId,
      autoValidate,
      ...nativeProps
    },
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      onChange,
      autoValidate,
    });

    const globals = useArmstrongConfig({
      validationMode: bindConfig.validationMode,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      validationErrorIcon: bindConfig.validationErrorIcon,
      inputDisplaySize: displaySize,
      autoValidate: bindConfig.autoValidate,
    });

    useDidUpdateEffect(() => {
      if (globals.autoValidate) {
        bindConfig.validate();
      }
      bindConfig.setTouched(true);
    }, [boundValue]);

    return (
      <>
        {label && (
          <Label
            id={labelId}
            className={concat('arm-radio-group-label', labelClassName)}
            required={required}
            requiredIndicator={globals.requiredIndicator}
            displaySize={globals.inputDisplaySize}
          >
            {label}
          </Label>
        )}
        <RadixRadioGroup.Root
          className={concat('arm-radio-group', className)}
          data-error={error || !!validationErrorMessages?.length}
          data-disabled={disabled}
          data-size={displaySize}
          data-mode={displayMode}
          value={boundValue?.toString() ?? 'undefined'}
          onValueChange={newValue =>
            setBoundValue(
              typeof boundValue === 'number' && newValue !== null && newValue !== undefined ? +newValue : newValue
            )
          }
          disabled={disabled}
          ref={ref}
          {...nativeProps}
        >
          {options.map((option, i) => {
            const isChecked = boundValue === option.id;
            const labelContent = getContentFromOption(option, isChecked);
            return (
              <div className="arm-radio-group-item-container" key={option.id}>
                <RadixRadioGroup.Item
                  {...(option.htmlProps ?? {})}
                  className="arm-radio-group-item"
                  value={option.id?.toString() ?? ''}
                  id={option.id?.toString()}
                  disabled={option.disabled}
                  data-checked={isChecked}
                  data-index={i}
                >
                  {displayMode === 'radio' ? (
                    <RadixRadioGroup.Indicator
                      className="arm-radio-group-item-indicator"
                      data-custom-icon={!!customIndicator}
                    >
                      {isChecked && customIndicator}
                    </RadixRadioGroup.Indicator>
                  ) : (
                    labelContent
                  )}
                </RadixRadioGroup.Item>
                {displayMode === 'radio' && (
                  <label className="arm-radio-label" htmlFor={option.id?.toString()}>
                    {labelContent}
                  </label>
                )}
              </div>
            );
          })}
        </RadixRadioGroup.Root>
        {bindConfig.shouldShowValidationErrorMessage && !!bindConfig.validationErrorMessages.length && (
          <ValidationErrors
            validationErrors={bindConfig.validationErrorMessages}
            className={concat('arm-radio-errors', validationErrorsClassName)}
          />
        )}
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(props: ArmstrongVFCProps<IRadioGroupProps<Id>, HTMLDivElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IRadioGroupProps<ArmstrongId>>;

RadioGroup.displayName = 'RadioGroup';
