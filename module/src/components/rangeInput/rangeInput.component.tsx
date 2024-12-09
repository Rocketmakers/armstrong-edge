import * as RadixSlider from "@radix-ui/react-slider";
import * as React from "react";

import { IBindingProps, useBindingState, ValidationMessage } from "../../form";
import { useDidUpdateEffect } from "../../hooks/useDidUpdateEffect";
import {
  ArmstrongFCExtensions,
  ArmstrongFCProps,
  ArmstrongFCReturn,
  DisplaySize,
  NullOrUndefined,
} from "../../types";
import { concat } from "../../utils/classNames";
import { onBlurWorkaround } from "../../workarounds/radixDialog";
import { useArmstrongConfig } from "../config";
import { Label } from "../label/label.component";
import { StatusWrapper } from "../statusWrapper/statusWrapper.component";
import {
  IValidationErrorsProps,
  ValidationErrors,
} from "../validationErrors/validationErrors.component";

import "./rangeInput.theme.css";

export interface IRangeInputProps<TData extends NullOrUndefined<number>>
  extends Omit<
      React.HTMLAttributes<HTMLSpanElement>,
      "type" | "checked" | "onChange" | "ref" | "dir" | "defaultValue"
    >,
    Omit<IValidationErrorsProps, "validationErrors" | "scrollIntoView"> {
  /** (Optional) An IBindingProps<TData> object to bind the checkbox input to a form. */
  bind?: IBindingProps<TData>;

  /** (Optional) A TData value representing the value of the input. */
  value?: TData;

  /** (Optional) A custom JSX.Element for the thumb of the slider. */
  customThumb?: JSX.Element;

  /** (Optional) A boolean flag to disable the checkbox input. */
  disabled?: boolean;

  /** Indicates if field must be used to submit form */
  required?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;

  /** (Optional) A React.ReactNode to display a label for the checkbox input. */
  label?: React.ReactNode;

  /** (Optional) Class name for the label component */
  labelClassName?: string;

  /** (Optional) Id to use for the checkbox. Falls back to React ID if not provided */
  labelId?: string;

  /** (Optional) A callback function (newValue: TData) => void to handle state when value is changed. */
  onChange?: (newValue: TData) => void;

  /** (Optional) Class name to use for the status wrapper */
  statusClassName?: string;

  /** (Optional) Class name for the validation errors */
  validationErrorsClassName?: string;

  /** (Optional) Can be a string or {key, element} key is necessary for animating in new messages   */
  validationErrorMessages?: ValidationMessage[];

  /** (Optional) A boolean flag to automatically scroll validation error messages into view. */
  scrollValidationErrorsIntoView?: boolean;

  /** which size variant to use */
  displaySize?: DisplaySize;

  /** The minimum value, defaults to `0` */
  min?: number;

  /** The maximum value, defaults to `100` */
  max?: number;

  /** How big should the increments be on the slider. defaults to `1` */
  step?: number;

  /** should the input validate automatically against the provided schema? Default: `true` */
  autoValidate?: boolean;
}

export const RangeInput = React.forwardRef<
  HTMLSpanElement,
  IRangeInputProps<NullOrUndefined<number>>
>(
  (
    {
      bind,
      className,
      disabled,
      onChange,
      label,
      labelClassName,
      labelId,
      scrollValidationErrorsIntoView,
      statusClassName,
      validationErrorsClassName,
      validationErrorMessages,
      displaySize,
      min,
      max,
      value,
      validationMode,
      step,
      required,
      customThumb,
      requiredIndicator,
      autoValidate,
      ...nativeProps
    },
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value,
      onChange,
      validationErrorMessages,
      validationMode,
      autoValidate,
    });

    const globals = useArmstrongConfig({
      scrollValidationErrorsIntoView,
      validationMode: bindConfig.validationMode,
      inputDisplaySize: displaySize,
      requiredIndicator,
      autoValidate: bindConfig.autoValidate,
      validationErrorIcon: bindConfig.validationErrorIcon,
    });

    const generatedLabelId = React.useId();
    const finalLabelId = labelId ?? generatedLabelId;

    useDidUpdateEffect(() => {
      if (globals.autoValidate && bindConfig.isTouched) {
        bindConfig.validate();
      }
    }, [boundValue]);

    const onBlurEvent = React.useCallback(
      (event: React.FocusEvent<HTMLSpanElement>) => {
        if (globals.autoValidate && !bindConfig.isTouched) {
          bindConfig.validate();
        }
        onBlurWorkaround(event);
        bindConfig.setTouched(true);
      },
      [bindConfig, globals.autoValidate]
    );

    return (
      <StatusWrapper
        className={concat(statusClassName, "arm-range-input-base")}
        validationMode={bindConfig.validationMode}
        errorIcon={bindConfig.validationErrorIcon}
      >
        {label && (
          <Label
            id={finalLabelId}
            className={concat("arm-range-input-label", labelClassName)}
            data-disabled={disabled}
            required={required}
            displaySize={globals.inputDisplaySize}
            requiredIndicator={globals.requiredIndicator}
          >
            {label}
          </Label>
        )}
        <RadixSlider.Root
          className={concat(className, "arm-range-input-root")}
          {...nativeProps}
          max={max}
          min={min}
          step={step}
          ref={ref}
          disabled={disabled}
          data-size={globals.inputDisplaySize}
          aria-labelledby={finalLabelId}
          value={boundValue ? [boundValue] : undefined}
          onValueChange={(v) => setBoundValue(v?.[0])}
        >
          <RadixSlider.Track className="arm-range-input-track">
            <RadixSlider.Range className="arm-range-input-range" />
          </RadixSlider.Track>
          <RadixSlider.Thumb
            className="arm-range-input-thumb"
            aria-label={typeof label === "string" ? label : undefined}
            onBlur={onBlurEvent}
          >
            {customThumb}
          </RadixSlider.Thumb>
        </RadixSlider.Root>
        {!!bindConfig.validationErrorMessages?.length &&
          bindConfig.shouldShowValidationErrorMessage && (
            <ValidationErrors
              className={validationErrorsClassName}
              validationMode={globals.validationMode}
              validationErrors={bindConfig.validationErrorMessages}
              scrollIntoView={globals.scrollValidationErrorsIntoView}
            />
          )}
      </StatusWrapper>
    );
  }
) as (<TBind extends NullOrUndefined<number>>(
  props: ArmstrongFCProps<IRangeInputProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IRangeInputProps<NullOrUndefined<number>>>;

RangeInput.displayName = "RangeInput";
