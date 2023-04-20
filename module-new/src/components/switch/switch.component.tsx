import * as RadixSwitch from '@radix-ui/react-switch';
import * as React from 'react';

import { IBindingProps } from '../../hooks/form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { IInputWrapperProps } from '../inputWrapper/inputWrapper.component';
import { Label } from '../label/label.component';
import { Status } from '../status';
import { ValidationErrors } from '../validationErrors';

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
      | 'errorIcon'
      | 'validationErrorMessages'
      | 'error'
      | 'pending'
      | 'disabled'
      | 'className'
    > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** called when the user updates the switch value */
  onChange?: (newValue: TBind) => void;

  /** Changes direction of the label text. Defaults to horizontal (Optional) */
  direction?: 'horizontal' | 'vertical';

  /** A boolean flag to disable the checkbox input. (Optional) */
  disabled?: boolean;

  /** A React.ReactNode to display a label for the switch input. (Optional) */
  label?: React.ReactNode;

  /** Classname for the switch label (Optional) */
  labelClassName?: string;
}

export const Switch = React.forwardRef(
  <TBind extends NullOrUndefined<boolean>>(
    { direction, disabled = true, labelClassName, label }: ISwitchProps<TBind>,
    ref
  ) => {
    const id = React.useId();
    return (
      <>
        <div className={'arm-switch-container'} data-disabled={disabled}>
          <Label className={concat('arm-switch-label', labelClassName)} data-direction={direction} htmlFor={id}>
            {label}
          </Label>
          <RadixSwitch.Root className={'arm-switch'} id={id}>
            <RadixSwitch.Thumb className="arm-switch-nub" />
          </RadixSwitch.Root>
        </div>
        {/* <Status
            error={bindConfig.shouldShowValidationErrorIcon && (error || !!bindConfig.validationErrorMessages?.length)}
            pending={pending}
            errorIcon={bindConfig.validationErrorIcon}
          /> */}

        {/* {bindConfig.validationErrorMessages && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            validationErrors={bindConfig.validationErrorMessages}
            icon={bindConfig.validationErrorIcon}
            scrollIntoView={scrollValidationErrorsIntoView}
          />
        )} */}
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TBind extends NullOrUndefined<boolean>>(
  props: ArmstrongFCProps<ISwitchProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ISwitchProps<any>>;

Switch.displayName = 'Input';

Switch.defaultProps = {
  direction: 'horizontal',
};
