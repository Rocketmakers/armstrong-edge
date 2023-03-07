import * as React from "react";

import { arrayToArraysByKey, Form, IInputWrapperProps } from "../..";
import { IBindingProps } from "../../hooks/form";
import {
  ArmstrongFCExtensions,
  ArmstrongFCReturn,
  ArmstrongVFCProps,
} from "../../types";
import { ArmstrongId } from "../../types/core";
import { IArmstrongExtendedOptionWithInput } from "../../types/options";
import { concat } from "../../utils/classNames";
import {
  IRadioInputProps,
  RadioInput,
} from "../radioInput/radioInput.component";
import { ValidationErrors } from "../validationErrors";

export interface IRadioInputListOption<Id extends ArmstrongId>
  extends IArmstrongExtendedOptionWithInput<
    Id,
    Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >,
      "onChange" | "type" | "ref"
    >,
    IRadioInputProps["inputProps"]
  > {}

export interface IRadioInputListProps<Id extends ArmstrongId>
  extends Pick<IRadioInputProps, "checkedIcon" | "uncheckedIcon" | "hideRadio">,
    Pick<
      IInputWrapperProps,
      | "scrollValidationErrorsIntoView"
      | "validationMode"
      | "errorIcon"
      | "validationErrorMessages"
    > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** The options to be shown in the input */
  options: IRadioInputListOption<Id>[];

  /** CSS className property */
  className?: string;

  /** the current value of the radioInput */
  value?: Id;

  /** Fired when the value changes */
  onChange?: (newValue: Id) => void;

  /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** the direction for the options in the list to flow */
  direction?: "horizontal" | "vertical";
}

/** Render a list of radio inputs which binds to a single string */
export const RadioInputList = React.forwardRef(
  <Id extends string>(
    {
      bind,
      options,
      className,
      value,
      errorIcon,
      validationMode,
      validationErrorMessages,
      onChange,
      checkedIcon,
      uncheckedIcon,
      error,
      direction,
      hideRadio,
    }: IRadioInputListProps<Id>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
      value,
      validationErrorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      onChange,
    });

    const groupedOptions = React.useMemo(
      () => arrayToArraysByKey(options, (option) => option.group || ""),
      [options]
    );

    return (
      <>
        <div
          className={concat("arm-radio-input-list", className)}
          ref={ref}
          data-error={error || !!validationErrorMessages?.length}
          data-direction={direction}
        >
          {groupedOptions.map((group) => (
            <React.Fragment key={group.key}>
              {group.key && (
                <div className="arm-radio-input-list-group-title">
                  <p>{group.key}</p>
                </div>
              )}

              {group.items.map((option) => (
                <RadioInput
                  key={option.id}
                  leftIcon={option.leftIcon}
                  rightIcon={option.rightIcon}
                  id={option.id}
                  checked={boundValue === option.id}
                  onChange={() => setBoundValue?.(option.id)}
                  content={option.content}
                  name={option.name || option.id?.toString()}
                  checkedIcon={checkedIcon}
                  uncheckedIcon={uncheckedIcon}
                  inputProps={option.htmlInputProps}
                  disabled={option.disabled}
                  direction={direction}
                  hideRadio={hideRadio}
                  {...option.htmlProps}
                />
              ))}
            </React.Fragment>
          ))}

          {bindConfig.shouldShowValidationErrorMessage &&
            bindConfig.validationErrorMessages && (
              <ValidationErrors
                validationErrors={bindConfig.validationErrorMessages}
                icon={bindConfig.validationErrorIcon}
              />
            )}
        </div>
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(
  props: ArmstrongVFCProps<IRadioInputListProps<Id>, HTMLDivElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IRadioInputListProps<any>>;

RadioInputList.defaultProps = {
  direction: "vertical",
};
