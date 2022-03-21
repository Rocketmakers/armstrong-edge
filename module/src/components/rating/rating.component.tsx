import * as React from 'react';

import { Form, IconWrapper, IIconWrapperProps, IStatusWrapperProps, StatusWrapper, ValidationErrors } from '../..';
import { useGeneratedId } from '../../hooks';
import { IBindingProps } from '../../hooks/form';
import { Arrays, Maths } from '../../utils';
import { ClassNames } from '../../utils/classNames';
import { Button } from '../button';
import { Icon, IconSet, IIcon } from '../icon';
import { IInputWrapperProps } from '../inputWrapper';

export interface IRatingPartProps extends Pick<IRatingProps, 'filledIcon' | 'emptyIcon' | 'step' | 'mode'> {
  index: number;
  value?: number;
  onSelectPart: (portion: number) => void;
  readOnly?: boolean;
  name?: string;
}

export const RatingPart: React.FC<IRatingPartProps> = ({ index, value, onSelectPart, filledIcon, emptyIcon, step, mode, readOnly, name }) => {
  const steps = Math.floor(1 / (step || 1));

  return (
    <div
      className="arm-rating-part"
      style={value ? ({ '--rating-amount': `${Maths.clamp((value - index) * 100, 0, 100)}%` } as React.CSSProperties) : undefined}
      data-filled={value && value >= index + 1}
      data-part={value && value < index + 1 && value > index}
    >
      <div className="arm-rating-part-icon-wrapper">
        {emptyIcon && <Icon className="arm-rating-part-icon arm-rating-part-empty" {...emptyIcon} />}
        {filledIcon && <Icon className="arm-rating-part-icon arm-rating-part-filled" {...filledIcon} />}
      </div>

      {!readOnly && mode === 'buttons' && (
        <div className="arm-rating-part-buttons">
          {Arrays.repeat(steps, (buttonIndex) => {
            const inputValue = index + steps * (buttonIndex + 1);

            return (
              <Button key={buttonIndex} minimalStyle onClick={() => onSelectPart((step || 1) * (buttonIndex + 1))} aria-label={`${inputValue}`} />
            );
          })}
        </div>
      )}

      {!readOnly && mode === 'radio' && (
        <div className="arm-rating-part-radios">
          {Arrays.repeat(steps, (buttonIndex) => {
            const inputValue = index + steps * (buttonIndex + 1);

            return (
              <div className="arm-rating-part-radio-wrapper" key={buttonIndex}>
                <input
                  className="arm-rating-part-radio"
                  type="radio"
                  onChange={() => onSelectPart((step || 1) * (buttonIndex + 1))}
                  aria-label={`${inputValue}`}
                  value={inputValue}
                  checked={inputValue === value}
                  name={name}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export interface IRatingProps
  extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'>,
    Pick<IInputWrapperProps, 'scrollValidationErrorsIntoView' | 'validationMode' | 'errorIcon' | 'validationErrorMessages'>,
    IIconWrapperProps<IconSet, IconSet>,
    IStatusWrapperProps {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<number>;

  value?: number;
  onValueChange?: (newValue: number) => void;
  filledIcon?: IIcon<IconSet>;
  emptyIcon?: IIcon<IconSet>;
  maximum?: number;
  step?: number;

  /**
   * the kind of elements used to handle the interaction
   *
   * range will use an input with type='range' to handle the interaction, buttons will render a series of buttons, radio will render radio inputs
   */
  mode?: 'range' | 'buttons' | 'radio';

  /** used for accessibility labelling and (with mode="radio") grouping inputs - for the latter use this must be unique */
  name?: string;
}

export const Rating: React.FC<IRatingProps> = ({
  bind,
  value,
  onValueChange,
  filledIcon,
  emptyIcon,
  maximum,
  className,
  validationErrorMessages,
  validationMode,
  errorIcon,
  scrollValidationErrorsIntoView,
  step,
  error,
  statusPosition,
  pending,
  leftIcon,
  rightIcon,
  mode,
  name,
  ...htmlProps
}) => {
  const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
    value,
    onChange: onValueChange,
    validationErrorMessages,
    validationMode,
    validationErrorIcon: errorIcon,
  });

  const generatedName = useGeneratedId('radio', name);

  return (
    <>
      <div className={ClassNames.concat('arm-rating', className)} {...htmlProps} data-read-only={!setBoundValue}>
        <StatusWrapper
          error={error}
          statusPosition={statusPosition}
          errorIcon={bindConfig.validationErrorIcon}
          validationErrorMessages={bindConfig.validationErrorMessages}
          validationMode={bindConfig.validationMode}
          pending={pending}
        >
          <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
            <div className="arm-rating-parts">
              {Arrays.repeat(maximum!, (index) => (
                <RatingPart
                  key={index}
                  index={index}
                  filledIcon={filledIcon}
                  emptyIcon={emptyIcon}
                  value={boundValue}
                  onSelectPart={(proportion) => setBoundValue?.(index + proportion)}
                  step={step}
                  mode={mode}
                  readOnly={!setBoundValue}
                  name={generatedName}
                />
              ))}

              {setBoundValue && mode === 'range' && (
                <input
                  className="arm-rating-range"
                  type="range"
                  step={step}
                  min={0}
                  max={maximum}
                  value={boundValue}
                  onChange={(event) => setBoundValue?.(event.currentTarget.valueAsNumber)}
                />
              )}
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
};

Rating.defaultProps = {
  maximum: 5,
  filledIcon: { iconSet: 'Icomoon', icon: 'star-full' },
  emptyIcon: { iconSet: 'Icomoon', icon: 'star-empty' },
  step: 1,
  mode: 'range',
};
