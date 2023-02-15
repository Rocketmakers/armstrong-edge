import * as React from "react";

import { Form, IInputWrapperProps, ValidationErrors } from "../..";
import { IBindingProps } from "../../hooks/form";
import {
  ArmstrongFCExtensions,
  ArmstrongFCReturn,
  ArmstrongVFCProps,
  NullOrUndefined,
} from "../../types";
import { concat } from "../../utils/classNames";
import { getPercent } from "../../utils/maths";
import { Icon, IconSet, IIcon } from "../icon";
import { IconWrapper, IIconWrapperProps } from "../iconWrapper";
import {
  IStatusWrapperProps,
  StatusWrapper,
} from "../statusWrapper/statusWrapper.component";

import "./rangeInput.basic.scss";

export interface IRangeInputProps<TBind extends NullOrUndefined<number>>
  extends Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      "min" | "max" | "value"
    >,
    IIconWrapperProps<IconSet, IconSet>,
    IStatusWrapperProps,
    Pick<
      IInputWrapperProps,
      | "scrollValidationErrorsIntoView"
      | "validationMode"
      | "errorIcon"
      | "validationErrorMessages"
    > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** called when the value is updated after an on change event */
  onValueChange?: (newValue: TBind) => void;

  /** the current value of the range input */
  value?: TBind;

  /** the minimum bindable value */
  minimum: number;

  /** the minimum bindable value */
  maximum: number;

  /** the icon the render on the handle */
  handleIcon?: IIcon<IconSet>;
}

/** Render a range input where the visuals are recreated using DOM */
export const RangeInput = React.forwardRef(
  <TBind extends NullOrUndefined<number>>(
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
    }: IRangeInputProps<TBind>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
      value,
      onChange: onValueChange,
      validationErrorMessages,
      validationMode,
      validationErrorIcon: errorIcon,
    });

    const currentPercent = React.useMemo(
      () => getPercent((boundValue ?? 0) - minimum, maximum - minimum),
      [boundValue, minimum, maximum]
    );

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
        const newValue = event.currentTarget.valueAsNumber;
        setBoundValue?.(newValue as TBind);
      },
      [onChange]
    );

    return (
      <>
        <div
          className={concat("arm-range-input", className)}
          style={
            {
              "--arm-range-input-percent": `${currentPercent}%`,
              "--arm-range-input-value": boundValue,
              "--arm-range-input-minimum": minimum,
              "--arm-range-input-maximum": maximum,
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
                  value={boundValue || (bind && minimum)}
                  onChange={onChangeEvent}
                  disabled={disabled || pending}
                />

                <div className="arm-range-input-track-inner" />
                <div className="arm-range-input-handle">
                  {handleIcon && (
                    <Icon iconSet={handleIcon.iconSet} icon={handleIcon.icon} />
                  )}
                </div>
              </div>
            </IconWrapper>
          </StatusWrapper>
        </div>

        {!!validationErrorMessages?.length &&
          bindConfig.shouldShowValidationErrorMessage && (
            <ValidationErrors
              validationErrors={validationErrorMessages}
              icon={bindConfig.validationErrorIcon}
              scrollIntoView={scrollValidationErrorsIntoView}
            />
          )}
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TBind extends NullOrUndefined<number>>(
  props: ArmstrongVFCProps<IRangeInputProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IRangeInputProps<any>>;
