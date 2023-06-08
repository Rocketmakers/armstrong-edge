import * as React from 'react';

import { IBindingProps, useBindingState } from '../../form';
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
import { Checkbox, ICheckboxProps } from '../checkbox/checkbox.component';
import { useArmstrongConfig } from '../config';
import { IInputWrapperProps } from '../inputWrapper';
import { Label } from '../label';
import { ValidationErrors } from '../validationErrors';

import './checkboxList.theme.css';

export interface ICheckboxListProps<Id extends ArmstrongId>
  extends Pick<
      IInputWrapperProps,
      'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'
    >,
    React.RefAttributes<HTMLDivElement> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id[]>;

  /** The options to be shown in the input */
  options: IArmstrongOption<
    Id,
    Omit<
      ICheckboxProps<boolean>,
      | 'bind'
      | 'checked'
      | 'disabled'
      | 'label'
      | 'validationErrorsClassName'
      | 'validationErrorMessages'
      | 'scrollValidationErrorsIntoView'
      | 'ref'
    >
  >[];

  /** CSS className property */
  className?: string;

  /** the current value of the radioInput */
  value?: Id[];

  /** Fired when the value changes */
  onChange?: (newValue: Id[]) => void;

  /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** (Optional) A custom JSX.Element for the checked indicator. */
  customIndicator?: JSX.Element;

  /** which size variant to use */
  displaySize?: DisplaySize;

  /** Label for the whole radio group itself */
  label?: string;

  /** (Optional) Class name for the label component */
  labelClassName?: string;

  /** Indicates if field must be used to submit form */
  required?: boolean;

  /** wether input's value can be changed by user */
  disabled?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;
}

/** Render a list of radio inputs which binds to a single string */
export const CheckboxList = React.forwardRef<HTMLDivElement, ICheckboxListProps<ArmstrongId>>(
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

    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      onChange,
    });

    const onCheckedChange = React.useCallback(
      (option: typeof options[0], newValue: boolean) => {
        // Always mapping the bound value from the original array of options.
        // It's a bit more cumbersome, but it means that the bound value ids will always be in the same order as the options, which is what you'd expect as a consuming app.
        const newBoundValue = options.reduce((arr, op) => {
          const isSelectedOption = op.id === option.id;
          const isCurrentlyBound = boundValue?.includes(op.id);
          const shouldAdd = isCurrentlyBound ? !isSelectedOption || newValue : isSelectedOption && newValue;
          return [...arr, ...(shouldAdd ? [op.id] : [])];
        }, [] as ArmstrongId[]);
        setBoundValue?.(newBoundValue);
      },
      [setBoundValue, boundValue, options]
    );

    return (
      <>
        {label && (
          <Label
            className={concat('arm-checkbox-list-label', labelClassName)}
            required={required}
            requiredIndicator={globals.requiredIndicator}
          >
            {label}
          </Label>
        )}
        <div
          className={concat('arm-checkbox-list', className)}
          ref={ref}
          data-error={error || !!validationErrorMessages?.length}
          data-disabled={disabled}
          data-size={displaySize}
          {...nativeProps}
        >
          {options.map(option => {
            const isChecked = boundValue?.includes(option.id);
            return (
              <Checkbox
                customIndicator={customIndicator}
                {...(option.htmlProps ?? {})}
                key={option.id}
                className="arm-checkbox-list-item"
                checked={isChecked}
                displaySize={displaySize}
                onCheckedChange={v => onCheckedChange(option, v)}
                disabled={disabled || option.disabled}
                label={getContentFromOption(option, isChecked)}
              />
            );
          })}
          {bindConfig.shouldShowValidationErrorMessage && bindConfig.validationErrorMessages && (
            <ValidationErrors
              validationErrors={bindConfig.validationErrorMessages}
              className="arm-checkbox-list-errors"
            />
          )}
        </div>
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(props: ArmstrongVFCProps<ICheckboxListProps<Id>, HTMLDivElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICheckboxListProps<ArmstrongId>>;

CheckboxList.displayName = 'CheckboxList';
