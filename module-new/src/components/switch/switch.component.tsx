import { Root, SwitchProps, Thumb } from '@radix-ui/react-switch';
import * as React from 'react';

import { IBindingProps, useBindingState, ValidationMessage } from '../../hooks/form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config/config.context';
import { IInputWrapperProps } from '../inputWrapper/inputWrapper.component';
import { Label } from '../label/label.component';
import { ValidationErrors } from '../validationErrors/validationErrors.component';

import './switch.theme.css';

export interface ISwitchProps<TBind extends NullOrUndefined<boolean>>
  extends Omit<
      React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
      'onChange' | 'checked'
    >,
    Pick<
      IInputWrapperProps,
      | 'scrollValidationErrorsIntoView'
      | 'validationMode'
      | 'validationErrorMessages'
      | 'error'
      | 'pending'
      | 'disabled'
      | 'className'
    > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** (Optional) Whether the switch is checked or not */
  checked?: TBind;

  /** (Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed. */
  onCheckedChange?: (newValue: TBind) => void;

  /** (Optional) called when the user updates the switch value */
  onChange?: (newValue: TBind) => void;

  /** (Optional) The state of the switch when it is initially rendered. Use when you do not need to control its state. */
  defaultChecked?: boolean;

  /** (Optional) A boolean flag to disable the checkbox input. */
  disabled?: boolean;

  /** when pending is true should also disable the input */
  disableOnPending?: boolean;

  /** (Optional) A React.ReactNode to display a label for the switch input. */
  label?: React.ReactNode;

  /** (Optional) Classname for the switch label. */
  labelClassName?: string;

  /** (Optional) Indicates if switch is required */
  required?: boolean;

  /** the icon to use for validation errors */
  errorIcon?: JSX.Element;

  /** hide the icon on the given side if there is an active status - defaults to true */
  hideIconOnStatus?: boolean;

  /** (Optional) Can be a string or {key, element} key is necessary for animating in new messages   */
  validationErrorMessages?: ValidationMessage[];

  /** (Optional) A boolean flag to automatically scroll validation error messages into view. */
  scrollValidationErrorsIntoView?: boolean;

  /** (Optional) Classname for the validation errors */
  validationErrorsClassName?: string;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLButtonElement, ISwitchProps<NullOrUndefined<boolean>>>(
  (
    {
      bind,
      checked,
      onCheckedChange,
      defaultChecked,
      disabled,
      disableOnPending,
      // LABEL
      labelClassName,
      label,
      required,
      requiredIndicator,
      hideIconOnStatus,
      // VALIDATION
      validationErrorMessages,
      validationErrorsClassName,
      scrollValidationErrorsIntoView,
      validationMode,
      errorIcon,
    },
    ref
  ) => {
    const id = React.useId();

    const globals = useArmstrongConfig({
      validationMode,
      hideInputErrorIconOnStatus: hideIconOnStatus,
      disableInputOnPending: disableOnPending,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      validationErrorIcon: errorIcon,
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
        <div className={'arm-switch-container'} data-disabled={disabled}>
          <Root
            className={'arm-switch'}
            id={id}
            ref={ref}
            disabled={disabled}
            defaultChecked={defaultChecked}
            required={required}
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

Switch.displayName = 'Input';
