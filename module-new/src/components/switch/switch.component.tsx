import { Root, SwitchProps, Thumb } from '@radix-ui/react-switch';
import * as React from 'react';

import { IBindingProps, useBindingState } from '../../hooks/form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config/config.context';
import { IInputWrapperProps } from '../inputWrapper/inputWrapper.component';
import { Label } from '../label/label.component';
import { ValidationErrors } from '../validationErrors/validationErrors.component';

import './switch.theme.css';

export interface ISwitchProps<TBind extends NullOrUndefined<boolean>>
  extends Omit<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
      'onChange' | 'checked'
    >,
    Pick<
      IInputWrapperProps,
      'scrollValidationErrorsIntoView' | 'validationMode' | 'validationErrorMessages' | 'disabled' | 'className'
    > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** (Optional) Whether the switch is checked or not */
  checked?: TBind;

  /** (Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed. */
  onCheckedChange?: (newValue: TBind) => void;

  /** (Optional) The state of the switch when it is initially rendered. Use when you do not need to control its state. */
  defaultChecked?: boolean;

  /** (Optional) A boolean flag to disable the checkbox input. */
  disabled?: boolean;

  /** (Optional) A React.ReactNode to display a label for the switch input. */
  label?: React.ReactNode;

  /** (Optional) Class name for the switch label. */
  labelClassName?: string;

  /** (Optional) A boolean flag to automatically scroll validation error messages into view. */
  scrollValidationErrorsIntoView?: boolean;

  /** (Optional) Class name for the validation errors */
  validationErrorsClassName?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, ISwitchProps<NullOrUndefined<boolean>>>(
  (
    {
      bind,
      checked,
      onCheckedChange,
      defaultChecked,
      disabled,
      className,
      // LABEL
      labelClassName,
      label,
      // VALIDATION
      validationErrorMessages,
      validationErrorsClassName,
      scrollValidationErrorsIntoView,
      validationMode,
      ...nativeProps
    },
    ref
  ) => {
    const generatedId = React.useId();
    const id = nativeProps.id ?? generatedId;

    const globals = useArmstrongConfig({
      validationMode,
      scrollValidationErrorsIntoView,
    });

    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value: checked,
      onChange: onCheckedChange,
      validationErrorMessages,
      validationMode: globals.validationMode,
    });

    const onCheckedChangeInternal = React.useCallback<Required<SwitchProps>['onCheckedChange']>(
      newValue => {
        setBoundValue?.(newValue);
      },
      [setBoundValue]
    );

    return (
      <>
        <div className={concat('arm-switch-container', className)} data-disabled={disabled}>
          <Root
            {...nativeProps}
            className="arm-switch"
            id={id}
            ref={ref}
            disabled={disabled}
            defaultChecked={defaultChecked}
            onCheckedChange={onCheckedChangeInternal}
            checked={boundValue ?? undefined}
          >
            <Thumb className="arm-switch-nub" />
          </Root>

          <Label className={concat(labelClassName, 'arm-switch-label')} data-disabled={disabled} htmlFor={id}>
            {label}
          </Label>
        </div>

        {bindConfig.validationErrorMessages && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            className={validationErrorsClassName}
            validationMode={globals.validationMode}
            validationErrors={bindConfig.validationErrorMessages}
            scrollIntoView={globals.scrollValidationErrorsIntoView}
          />
        )}
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TBind extends NullOrUndefined<boolean>>(
  props: ArmstrongFCProps<ISwitchProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ISwitchProps<NullOrUndefined<boolean>>>;

Switch.displayName = 'Switch';
