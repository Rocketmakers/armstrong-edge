import * as React from 'react';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';

import { IBindingProps, useBindingState } from '../../form';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, NullOrUndefined } from '../../types';
import { repeat } from '../../utils/arrays';
import { concat } from '../../utils/classNames';
import { clamp } from '../../utils/maths';
import { Button, IButtonProps } from '../button';
import { useArmstrongConfig } from '../config';
import { IInputWrapperProps } from '../inputWrapper';
import { Label } from '../label';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper';
import { ValidationErrors } from '../validationErrors';
import { iconJsxFromDefinition } from './rating.utils';

import './rating.theme.css';

export interface IRatingPartProps
  extends Pick<IRatingProps<NullOrUndefined<number>>, 'filledIcon' | 'emptyIcon' | 'step' | 'mode' | 'disabled'> {
  /** the index of this rating part */
  index: number;

  /** the value of the Rating */
  value?: number;

  /** triggered when a user selects this part - only used in mode="radio" and mode="buttons"  */
  onSelectPart: (portion: number) => void;

  /** has an onChange or bind been passed to the parent Rating - if not, will just render icons */
  readOnly?: boolean;
}

const RatingPart = React.forwardRef<HTMLDivElement, IRatingPartProps>(
  ({ index, value, onSelectPart, filledIcon, emptyIcon, step, mode, readOnly, disabled }, ref) => {
    const steps = Math.floor(1 / (step || 1));

    const isFilled = value && value >= index + 1;
    const isPart = value && value < index + 1 && value > index;

    return (
      <div
        ref={ref}
        className="arm-rating-part"
        style={
          value
            ? ({
                '--rating-amount': `${clamp((value - index) * 100, 0, 100)}%`,
              } as React.CSSProperties)
            : undefined
        }
        data-filled={isFilled}
        data-part={isPart}
      >
        <div className="arm-rating-part-icon-wrapper">
          {filledIcon && (
            <div className="arm-rating-part-icon arm-rating-part-filled">
              <div className="arm-rating-part-icon-inner">{iconJsxFromDefinition(filledIcon, index)}</div>
            </div>
          )}

          {emptyIcon && (
            <div className="arm-rating-part-icon arm-rating-part-empty">
              <div className="arm-rating-part-icon-inner">{iconJsxFromDefinition(emptyIcon, index)}</div>
            </div>
          )}
        </div>

        {!readOnly && mode === 'buttons' && (
          <div className="arm-rating-part-buttons">
            {repeat(steps, buttonIndex => {
              const inputValue = index + (steps === 2 ? 0.5 : 1) + (buttonIndex ? 0.5 : 0);
              return (
                <Button
                  role="radio"
                  aria-checked={inputValue === value}
                  type="button"
                  className="arm-rating-button"
                  key={buttonIndex}
                  onClick={() => onSelectPart((step || 1) * (buttonIndex + 1))}
                  aria-label={inputValue.toString()}
                  disabled={disabled}
                />
              );
            })}
          </div>
        )}

        {!readOnly && mode === 'radio' && (
          <div className="arm-rating-part-radios">
            {repeat(steps, buttonIndex => {
              const inputValue = index + (steps === 2 ? 0.5 : 1) + (buttonIndex ? 0.5 : 0);
              return (
                <div className="arm-rating-part-radio-wrapper" key={buttonIndex}>
                  <input
                    className="arm-rating-part-radio"
                    type="radio"
                    onChange={() => onSelectPart((step || 1) * (buttonIndex + 1))}
                    aria-label={inputValue.toString()}
                    value={inputValue}
                    checked={inputValue === value}
                    disabled={disabled}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

RatingPart.displayName = 'RatingPart';

export type RatingIconDefinition = JSX.Element | ((index: number) => JSX.Element);

export interface IRatingProps<TBind extends NullOrUndefined<number>>
  extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'>,
    Pick<
      IInputWrapperProps,
      | 'scrollValidationErrorsIntoView'
      | 'validationMode'
      | 'errorIcon'
      | 'validationErrorMessages'
      | 'statusClassName'
      | 'validationErrorsClassName'
      | 'labelClassName'
      | 'labelId'
      | 'label'
      | 'required'
      | 'requiredIndicator'
      | 'displaySize'
    >,
    Pick<IButtonProps, 'leftOverlay' | 'rightOverlay'>,
    IStatusWrapperProps {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** current value, as a number, of the rating */
  value?: TBind;

  /** called when the value of the input changes */
  onValueChange?: (newValue: TBind) => void;

  /** the icon to use for a filled star */
  filledIcon?: RatingIconDefinition;

  /** the icon to use for an empty star */
  emptyIcon?: RatingIconDefinition;

  /** the maximum possible value of the rating */
  maximum?: number;

  /** the size of each possible step - defaults to 1, set to 0.5 to allow half stars */
  step?: 1 | 0.5;

  /**
   * the kind of elements used to handle the interaction
   *
   * range will use an input with type='range' to handle the interaction, buttons will render a series of buttons, radio will render radio inputs
   * @default 'buttons'
   */
  mode?: 'range' | 'buttons' | 'radio';

  /** Whether to disable the input */
  disabled?: boolean;

  /** should the input validate automatically against the provided schema? Default: `true` */
  autoValidate?: boolean;
}

export const Rating = React.forwardRef<HTMLDivElement, IRatingProps<NullOrUndefined<number>>>(
  (
    {
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
      leftOverlay,
      rightOverlay,
      mode,
      disabled,
      statusClassName,
      validationErrorsClassName,
      labelClassName,
      labelId,
      label,
      required,
      requiredIndicator,
      displaySize,
      autoValidate,
      ...htmlProps
    },
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value,
      onChange: onValueChange,
      validationErrorMessages,
      validationMode,
      autoValidate,
      validationErrorIcon: errorIcon,
    });

    const globals = useArmstrongConfig({
      validationMode: bindConfig.validationMode,
      inputDisplaySize: displaySize,
      scrollValidationErrorsIntoView,
      requiredIndicator,
      validationErrorIcon: bindConfig.validationErrorIcon,
      autoValidate: bindConfig.autoValidate,
    });

    const generatedLabelId = React.useId();
    const finalLabelId = labelId ?? generatedLabelId;

    useDidUpdateEffect(() => {
      if (globals.autoValidate) {
        bindConfig.validate();
      }
      bindConfig.setTouched(true);
    }, [boundValue]);

    return (
      <>
        <div
          ref={ref}
          role="radiogroup"
          aria-label={boundValue !== undefined ? `Rating: ${boundValue}/${maximum}` : undefined}
          {...htmlProps}
          className={concat('arm-rating', className)}
          data-read-only={!setBoundValue}
          data-size={globals.inputDisplaySize}
        >
          {label && (
            <Label
              id={finalLabelId}
              className={concat('arm-rating-input-label', labelClassName)}
              data-disabled={disabled}
              required={required}
              displaySize={globals.inputDisplaySize}
              requiredIndicator={globals.requiredIndicator}
            >
              {label}
            </Label>
          )}
          <div className="arm-rating-input-inner" aria-labelledby={finalLabelId}>
            <StatusWrapper
              error={error}
              statusPosition={statusPosition}
              errorIcon={bindConfig.validationErrorIcon}
              validationMode={bindConfig.validationMode}
              pending={pending}
            >
              <>
                {leftOverlay}
                <div className="arm-rating-parts">
                  {repeat(maximum as number, index => (
                    <RatingPart
                      key={index}
                      index={index}
                      filledIcon={filledIcon}
                      emptyIcon={emptyIcon}
                      value={boundValue || undefined}
                      onSelectPart={proportion => setBoundValue?.(index + proportion)}
                      step={step}
                      mode={mode}
                      disabled={disabled}
                      readOnly={!setBoundValue}
                    />
                  ))}

                  {mode === 'range' && (
                    <input
                      className="arm-rating-range"
                      type="range"
                      step={step}
                      min={0}
                      max={maximum}
                      disabled={disabled}
                      value={boundValue || undefined}
                      onChange={event => setBoundValue?.(event.currentTarget.valueAsNumber)}
                    />
                  )}
                </div>
                {rightOverlay}
              </>
            </StatusWrapper>
          </div>
        </div>

        {!!validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            validationErrors={validationErrorMessages}
            validationMode={bindConfig.validationMode}
            scrollIntoView={scrollValidationErrorsIntoView}
          />
        )}
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TBind extends NullOrUndefined<number>>(
  props: ArmstrongVFCProps<IRatingProps<TBind>, HTMLDivElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IRatingProps<NullOrUndefined<number>>>;

Rating.defaultProps = {
  maximum: 5,
  filledIcon: <ImStarFull />,
  emptyIcon: <ImStarEmpty />,
  step: 1,
  mode: 'buttons',
};

Rating.displayName = 'Rating';
