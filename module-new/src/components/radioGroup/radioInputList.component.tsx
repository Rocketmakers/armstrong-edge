import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import * as React from 'react';

import { IBindingProps, useBindingState } from '../../hooks/form';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, IArmstrongOptionWithInput } from '../../types';
import { ArmstrongId } from '../../types/core';
import { concat } from '../../utils/classNames';
import { IInputWrapperProps } from '../inputWrapper';
import { ValidationErrors } from '../validationErrors';

export type IRadioInputListOption<Id extends ArmstrongId> = IArmstrongOptionWithInput<
  Id,
  Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'type' | 'ref'>,
  IRadioInputProps['inputProps']
>;

export interface IRadioGroupProps<Id extends ArmstrongId>
  extends Pick<IRadioInputProps, 'checkedIcon' | 'uncheckedIcon'>,
    Pick<
      IInputWrapperProps,
      'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'
    > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** The options to be shown in the input */
  options: IRadioInputListOption<Id>[];

  /** CSS className property */
  className?: string;

  /** the current value of the radioInput */
  value?: Id;

  /** Fired when the value changes */
  onChange?: (newValue: Id) => void;

  /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;
}

/** Render a list of radio inputs which binds to a single string */
export const RadioGroup = React.forwardRef(
  <Id extends string>(
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
    }: IRadioGroupProps<Id>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      onChange,
    });

    return (
      <>
        <RadixRadioGroup.Root
          className={concat('arm-radio-input-list', className)}
          ref={ref}
          data-error={error || !!validationErrorMessages?.length}
          value={boundValue}
          onValueChange={newValue => setBoundValue(newValue)}
        >
          {options.map(option => (
            <div className="arm-radio-group-item-container" key={option.id}>
              <RadixRadioGroup.Item
                className="arm-radio-group-item"
                value={option.id}
                id={option.id}
                disabled={option.disabled}
              >
                <RadixRadioGroup.Indicator className="arm-radio-group-item-indicator">
                  {checkedIcon}
                </RadixRadioGroup.Indicator>
              </RadixRadioGroup.Item>
              <label htmlFor={option.id}>
                {typeof option.content === 'function' ? option.content(boundValue === option.id) : option.content}
              </label>
            </div>
          ))}

          {bindConfig.shouldShowValidationErrorMessage && bindConfig.validationErrorMessages && (
            <ValidationErrors validationErrors={bindConfig.validationErrorMessages} />
          )}
        </RadixRadioGroup.Root>
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(props: ArmstrongVFCProps<IRadioGroupProps<Id>, HTMLDivElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IRadioGroupProps<any>>;

RadioGroup.displayName = 'Radio Input List';
RadioGroup.defaultProps = {};
