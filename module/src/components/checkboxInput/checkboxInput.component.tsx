import * as React from 'react';

import { Form } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { IInputWrapperProps } from '../inputWrapper';
import { Status } from '../status';
import { ValidationErrors } from '../validationErrors';

export interface ICheckboxInputProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'>,
    IIconWrapperProps<IconSet, IconSet>,
    Pick<
      IInputWrapperProps,
      'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'disabled' | 'pending' | 'error' | 'validationErrorMessages'
    > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<boolean>;

  /** CSS className property */
  className?: string;

  /** icon to render on the input when checked */
  checkedIcon?: IIcon<IconSet>;

  /** icon to render on the input when not checked */
  uncheckedIcon?: IIcon<IconSet>;

  /** the text or jsx element to render inside the checkbox's label */
  label?: React.ReactNode;
}

/** Render a checkbox that uses DOM elements allow for easier styling */
export const CheckboxInput = React.forwardRef<HTMLInputElement, ICheckboxInputProps>(
  (
    {
      bind,
      validationErrorMessages,
      validationMode,
      className,
      errorIcon,
      error,
      pending,
      disabled,
      checked,
      onChange,
      checkedIcon,
      label,
      uncheckedIcon,
      leftIcon,
      rightIcon,
      scrollValidationErrorsIntoView,
      ...nativeProps
    }: ICheckboxInputProps,
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value: checked,
      validationErrorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
    });

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setBoundValue(event.currentTarget.checked);
        onChange?.(event);
      },
      [bind, onChange]
    );

    return (
      <>
        <div
          className={ClassNames.concat('arm-input', 'arm-checkbox-input', className)}
          data-disabled={disabled || pending}
          data-error={error || !!validationErrorMessages?.length}
          data-checked={boundValue}
        >
          <label>
            <div className="arm-checkbox-input-checkbox">
              <input
                className="arm-checkbox-input-checkbox-input"
                onChange={onChangeEvent}
                {...nativeProps}
                type="checkbox"
                ref={ref}
                checked={boundValue}
              />

              {checkedIcon && <Icon className="arm-checkbox-input-checked-icon" iconSet={checkedIcon.iconSet} icon={checkedIcon.icon} />}
              {uncheckedIcon && <Icon className="arm-checkbox-input-unchecked-icon" iconSet={uncheckedIcon.iconSet} icon={uncheckedIcon.icon} />}
            </div>
            <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
              {typeof label === 'string' || typeof label === 'number' ? <p>{label}</p> : label}
            </IconWrapper>
          </label>

          <Status
            error={bindConfig.shouldShowValidationErrorIcon && (!!bindConfig?.validationErrorMessages?.length || error)}
            pending={pending}
            errorIcon={bindConfig.validationErrorIcon}
          />
        </div>

        {!!bindConfig.validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            validationErrors={bindConfig.validationErrorMessages}
            icon={bindConfig.validationErrorIcon}
            scrollIntoView={scrollValidationErrorsIntoView}
          />
        )}
      </>
    );
  }
);

CheckboxInput.defaultProps = {
  checkedIcon: IconUtils.getIconDefinition('Icomoon', 'checkmark3'),
  validationMode: 'both',
};
