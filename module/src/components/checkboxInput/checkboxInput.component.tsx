import * as React from 'react';

import { Form } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { Status } from '../status';
import { ValidationErrors } from '../validationErrors';

export interface ICheckboxInputProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'>,
    IIconWrapperProps<IconSet, IconSet> {
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

  /** (string | JSX) the text or jsx element to render inside the checkbox's label */
  label?: string | JSX.Element;
}

/** Render a checkbox that uses DOM elements allow for easier styling */
export const CheckboxInput = React.forwardRef<HTMLInputElement, ICheckboxInputProps>(
  (
    {
      bind,
      validationErrorMessages,
      validationMode,
      className,
      validationErrorIcon,
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
      ...nativeProps
    }: ICheckboxInputProps,
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value: checked,
      validationErrorMessages,
      validationErrorIcon,
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
              {label}
            </IconWrapper>
          </label>

          <Status
            error={bindConfig.shouldShowValidationErrorIcon && (!!bindConfig?.validationErrorMessages?.length || error)}
            pending={pending}
            errorIcon={bindConfig.validationErrorIcon}
          />
        </div>

        {!!bindConfig.validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors validationErrors={bindConfig.validationErrorMessages} icon={bindConfig.validationErrorIcon} />
        )}
      </>
    );
  }
);

CheckboxInput.defaultProps = {
  checkedIcon: IconUtils.getIconDefinition('Icomoon', 'checkmark3'),
  validationMode: 'both',
};
