import * as React from 'react';

import { Form, IInputWrapperProps } from '../..';
import { IBindingProps } from '../../hooks/form';
import { IDragReleaseCallbackArgs, useDrag } from '../../hooks/useDrag';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IIcon } from '../icon';
import { Status } from '../status';
import { ValidationErrors } from '../validationErrors';

export interface ISwitchInputProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'>,
    Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<boolean>;

  /** CSS className property */
  className?: string;

  /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** show a spinner and disable */
  pending?: boolean;

  /** disable use */
  disabled?: boolean;

  /** icon to render on the input when checked */
  checkedIcon?: IIcon<IconSet>;

  /** icon to render on the input when not checked */
  uncheckedIcon?: IIcon<IconSet>;

  /** the current value of the switch input */
  checked?: boolean;

  /** called when the user updates the switch value */
  onChange?: (newValue: boolean) => void;

  /** where to render the icon, will either follow the handle or stay in place */
  iconStyle?: 'on-handle' | 'static';

  /** allow clicking and dragging horizontally to change the value of the switch - defaults to true */
  changeOnDrag?: boolean;
}

export const SwitchInput = React.forwardRef<HTMLInputElement, ISwitchInputProps>(
  (
    {
      bind,
      checked,
      onChange,
      validationErrorMessages,
      scrollValidationErrorsIntoView,
      disabled,
      className,
      validationMode,
      errorIcon,
      error,
      pending,
      checkedIcon,
      uncheckedIcon,
      iconStyle,
      changeOnDrag,
      ...nativeProps
    },
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value: checked,
      validationErrorMessages,
      onChange,
      validationErrorIcon: errorIcon,
      validationMode,
    });

    const onDragEnd = React.useCallback(
      ({ changePosition }: IDragReleaseCallbackArgs) => {
        if (!changePosition || changePosition.left === 0) {
          setBoundValue?.(!boundValue);
        }
      },
      [setBoundValue, boundValue]
    );

    const { props: dragProps, changePosition } = useDrag(onDragEnd);

    React.useEffect(() => {
      if (changePosition && changeOnDrag) {
        if (changePosition.left > 0) {
          setBoundValue?.(true);
        } else if (changePosition.left < 0) {
          setBoundValue?.(false);
        }
      }
    }, [changePosition?.left]);

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
              className="arm-switch-input-checkbox"
              {...nativeProps}
              ref={ref}
              type="checkbox"
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onChange={() => {}}
              checked={boundValue}
              disabled={disabled}
              {...dragProps}
            />
            {checkedIcon && <Icon className="arm-switch-input-checked-icon" {...checkedIcon} />}
            {uncheckedIcon && <Icon className="arm-switch-input-unchecked-icon" {...uncheckedIcon} />}
          </div>

          <Status
            error={bindConfig.shouldShowValidationErrorIcon && (error || !!bindConfig.validationErrorMessages?.length)}
            pending={pending}
            errorIcon={bindConfig.validationErrorIcon}
          />
        </div>

        {bindConfig.validationErrorMessages && bindConfig.shouldShowValidationErrorMessage && (
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

SwitchInput.defaultProps = {
  changeOnDrag: true,
};
