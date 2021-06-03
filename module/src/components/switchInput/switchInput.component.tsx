import * as React from 'react';

import { Form } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IIcon } from '../icon';
import { Status } from '../status';
import { ValidationErrors } from '../validationErrors';

export interface ISwitchInputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<boolean>;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (string) CSS className property */
  className?: string;

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** (IIcon) the icon to use for validation errors */
  validationErrorIcon?: IIcon<IconSet>;

  /** (boolean) show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** (boolean) show a spinner and disable */
  pending?: boolean;

  /** (boolean) disable use */
  disabled?: boolean;

  /** (IIcon) icon to render on the input when checked */
  checkedIcon?: IIcon<IconSet>;

  /** (IIcon) icon to render on the input when not checked */
  uncheckedIcon?: IIcon<IconSet>;

  /** (boolean) the current value of the switch input */
  checked?: boolean;

  /** ((newValue: boolean) => void) called when the user updates the switch value */
  onChange?: (newValue: boolean) => void;

  /** (on-handle|static) where to render the icon, will either follow the handle or stay in place */
  iconStyle?: 'on-handle' | 'static';
}

export const SwitchInput = React.forwardRef<HTMLInputElement, ISwitchInputProps>(
  (
    {
      bind,
      checked,
      onChange,
      validationErrorMessages,
      disabled,
      className,
      validationMode,
      validationErrorIcon,
      error,
      pending,
      checkedIcon,
      uncheckedIcon,
      iconStyle,
      ...nativeProps
    },
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value: checked,
      validationErrorMessages,
      onChange,
      validationErrorIcon,
      validationMode,
    });

    return (
      <>
        <div
          className={ClassNames.concat('arm-switch-input', className)}
          data-error={error}
          data-pending={pending}
          data-checked={boundValue}
          data-icon-style={iconStyle}
        >
          <div className="arm-switch-input-inner">
            <input
              {...nativeProps}
              ref={ref}
              type="checkbox"
              onChange={(event) => setBoundValue(event.currentTarget.checked)}
              checked={boundValue}
              disabled={disabled}
            />
            {checkedIcon && <Icon className="arm-switch-input-checked-icon" {...checkedIcon} />}
            {uncheckedIcon && <Icon className="arm-switch-input-unchecked-icon" {...uncheckedIcon} />}
          </div>

          <Status
            error={bindConfig.shouldShowValidationErrorIcon && (error || !!bindConfig.validationErrorMessages?.length)}
            pending={pending}
            errorIcon={validationErrorIcon}
          />
        </div>

        {bindConfig.validationErrorMessages && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors validationErrors={bindConfig.validationErrorMessages} icon={bindConfig.validationErrorIcon} />
        )}
      </>
    );
  }
);
