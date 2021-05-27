import * as React from 'react';

import { FormValidationMode, IBindingProps } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { Status } from '../status';
import { useMyValidationErrorMessages, ValidationErrors } from '../validationErrors';

export interface ICheckboxInputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
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
      ...nativeProps
    }: ICheckboxInputProps,
    ref
  ) => {
    const shouldShowValidationErrorsList = validationMode === 'both' || validationMode === 'message';
    const shouldShowErrorIcon = (!!validationErrorMessages?.length && (validationMode === 'both' || validationMode === 'icon')) || error;

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);

        const currentValue = event.currentTarget.checked;

        if (bind) {
          const formattedValue = bind.bindConfig?.format?.toData?.(currentValue) || currentValue;
          bind.setValue(formattedValue);
        }
      },
      [bind, onChange]
    );

    const allValidationErrorMessages = useMyValidationErrorMessages(bind, validationErrorMessages);

    const isChecked = bind?.bindConfig?.format?.fromData?.(bind?.value) ?? bind?.value ?? checked;

    return (
      <>
        <div
          className={ClassNames.concat('arm-input', 'arm-checkbox-input', className)}
          data-disabled={disabled || pending}
          data-error={error || !!validationErrorMessages?.length}
          data-checked={isChecked}
        >
          <label>
            <div className="arm-checkbox-input-checkbox">
              <input onChange={onChangeEvent} {...nativeProps} type="checkbox" ref={ref} checked={isChecked} />

              {checkedIcon && <Icon className="arm-checkbox-input-checked-icon" iconSet={checkedIcon.iconSet} icon={checkedIcon.icon} />}
              {uncheckedIcon && <Icon className="arm-checkbox-input-unchecked-icon" iconSet={uncheckedIcon.iconSet} icon={uncheckedIcon.icon} />}
            </div>
            {label}
          </label>

          <Status error={shouldShowErrorIcon} pending={pending} errorIcon={validationErrorIcon} />
        </div>

        {!!validationErrorMessages?.length && shouldShowValidationErrorsList && (
          <ValidationErrors validationErrors={allValidationErrorMessages} icon={validationErrorIcon} />
        )}
      </>
    );
  }
);

CheckboxInput.defaultProps = {
  checkedIcon: IconUtils.getIconDefinition('Icomoon', 'checkmark3'),
};
