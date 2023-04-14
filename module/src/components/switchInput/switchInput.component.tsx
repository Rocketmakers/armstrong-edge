import * as React from 'react';

import { Form, IInputWrapperProps } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { Icon } from '../icon';
import { Status } from '../status';
import { ValidationErrors } from '../validationErrors';
import { IDragReleaseCallbackArgs, useDrag } from './switchInput.hooks';
import { ICheckboxInputProps } from '../checkboxInput/checkboxInput.component';

export interface ISwitchInputProps<TBind extends NullOrUndefined<boolean>>
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
    >,
    Pick<ICheckboxInputProps<TBind>, 'checkedIcon' | 'uncheckedIcon' | 'checked'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** called when the user updates the switch value */
  onChange?: (newValue: TBind) => void;

  /** where to render the icon, will either follow the handle or stay in place */
  iconStyle?: 'on-handle' | 'static';

  /** allow clicking and dragging horizontally to change the value of the switch - defaults to true */
  changeOnDrag?: boolean;
}

export const SwitchInput = React.forwardRef(
  <TBind extends NullOrUndefined<boolean>>(
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
    }: ISwitchInputProps<TBind>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
      value: checked,
      validationErrorMessages,
      onChange,
      validationErrorIcon: errorIcon,
      validationMode,
    });

    const onDragEnd = React.useCallback(
      ({ changePosition }: IDragReleaseCallbackArgs) => {
        if (!changePosition || changePosition.left === 0) {
          setBoundValue?.(!boundValue as TBind);
        }
      },
      [setBoundValue, boundValue]
    );

    const { props: dragProps, changePosition } = useDrag(onDragEnd);

    React.useEffect(() => {
      if (changePosition && changeOnDrag) {
        if (changePosition.left > 0) {
          setBoundValue?.(true as TBind);
        } else if (changePosition.left < 0) {
          setBoundValue?.(false as TBind);
        }
      }
    }, [changePosition?.left]);

    return (
      <>
        <div
          className={concat('arm-switch-input', className)}
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
              onChange={() => {}}
              checked={boundValue || (bind && false)}
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
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TBind extends NullOrUndefined<boolean>>(
  props: ArmstrongFCProps<ISwitchInputProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ISwitchInputProps<any>>;

SwitchInput.defaultProps = {
  changeOnDrag: true,
};
