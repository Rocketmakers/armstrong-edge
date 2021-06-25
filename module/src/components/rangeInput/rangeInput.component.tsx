import * as React from 'react';

import { Form, IInputWrapperProps, ValidationErrors } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Maths } from '../../utils/maths';
import { Icon, IconSet, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper/statusWrapper.component';

export interface IRangeInputProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'min' | 'max'>,
    IIconWrapperProps<IconSet, IconSet>,
    IStatusWrapperProps,
    Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<number>;

  /** called when the value is updated after an on change event */
  onValueChange?: (newValue: number) => void;

  /** the current value of the range input */
  value?: number;

  /** the minimum boundable value */
  minimum: number;

  /** the minimum boundable value */
  maximum: number;

  /** the icon the render on the handle */
  handleIcon?: IIcon<IconSet>;
}

/** Render a range input where the visuals are recerated using DOM */
export const RangeInput = React.forwardRef<HTMLInputElement, IRangeInputProps>(
  (
    {
      onValueChange,
      value,
      validationErrorMessages,
      validationMode,
      errorIcon,
      scrollValidationErrorsIntoView,
      className,
      minimum,
      onChange,
      maximum,
      step,
      bind,
      leftIcon,
      rightIcon,
      handleIcon,
      pending,
      statusPosition,
      error,
      disabled,
      ...nativeProps
    },
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value,
      onChange: onValueChange,
      validationErrorMessages,
      validationMode,
      validationErrorIcon: errorIcon,
    });

    const currentPercent = React.useMemo(() => Maths.getPercent((boundValue || 0) - minimum, maximum - minimum), [boundValue, minimum, maximum]);

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
        const newValue = event.currentTarget.valueAsNumber;
        setBoundValue(newValue);
      },
      [onChange]
    );

    return (
      <>
        <div
          className={ClassNames.concat('arm-range-input', className)}
          style={
            {
              '--arm-range-input-percent': `${currentPercent}%`,
              '--arm-range-input-value': value,
              '--arm-range-input-minimum': minimum,
              '--arm-range-input-maximum': maximum,
            } as React.CSSProperties
          }
          data-disabled={disabled}
          data-pending={pending}
        >
          <StatusWrapper
            error={error}
            statusPosition={statusPosition}
            errorIcon={bindConfig.validationErrorIcon}
            validationErrorMessages={bindConfig.validationErrorMessages}
            validationMode={bindConfig.validationMode}
            pending={pending}
          >
            <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
              <div className="arm-range-input-track">
                <input
                  className="arm-range-input-input"
                  {...nativeProps}
                  ref={ref}
                  type="range"
                  min={minimum}
                  max={maximum}
                  step={step}
                  value={value}
                  onChange={onChangeEvent}
                  disabled={disabled || pending}
                />

                <div className="arm-range-input-track-inner" />
                <div className="arm-range-input-handle">{handleIcon && <Icon iconSet={handleIcon.iconSet} icon={handleIcon.icon} />}</div>
              </div>
            </IconWrapper>
          </StatusWrapper>
        </div>

        {!!validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            validationErrors={validationErrorMessages}
            icon={bindConfig.validationErrorIcon}
            scrollIntoView={scrollValidationErrorsIntoView}
          />
        )}
      </>
    );
  }
);
