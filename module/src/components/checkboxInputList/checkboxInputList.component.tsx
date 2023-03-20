import * as React from "react";

import { Form, IconUtils, IInputWrapperProps, ValidationErrors } from "../..";
import { IBindingProps } from "../../hooks/form";
import {
  ArmstrongFCExtensions,
  ArmstrongFCReturn,
  ArmstrongVFCProps,
} from "../../types";
import { ArmstrongId } from "../../types/core";
import {
  IArmstrongExtendedOption,
  IArmstrongExtendedOptionWithInput,
} from "../../types/options";
import { concat } from "../../utils/classNames";
import {
  CheckboxInput,
  ICheckboxInputProps,
} from "../checkboxInput/checkboxInput.component";
import { arrayToArraysByKey } from "../../utils/arrays";

export interface ICheckboxInputListOption<Id extends ArmstrongId>
  extends Omit<
    IArmstrongExtendedOptionWithInput<
      Id,
      Omit<
        React.DetailedHTMLProps<
          React.InputHTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
        "onChange" | "type" | "ref"
      >,
      ICheckboxInputProps<any>["inputProps"]
    >,
    // omitted for replaced JSDoc below
    "content"
  > {
  /** JSX to render as the label - replaces name, can take a function which receives the active state of the option and returns the JSX to render */
  content: IArmstrongExtendedOption<Id>["content"];
}

export interface ICheckboxInputListProps<Id extends ArmstrongId>
  extends Pick<ICheckboxInputProps<any>, "checkedIcon" | "uncheckedIcon">,
    Pick<
      IInputWrapperProps,
      | "scrollValidationErrorsIntoView"
      | "validationMode"
      | "errorIcon"
      | "validationErrorMessages"
    > {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id[]>;

  /** The options to be shown in the input */
  options: ICheckboxInputListOption<Id>[];

  /** CSS className property */
  className?: string;

  /** the current value of the CheckboxInput */
  value?: Id[];

  /** fired when the value of the checkbox input changes */
  onChange?: (newValue: Id[] | undefined) => void;

  /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** the direction for the options in the list to flow */
  direction?: "horizontal" | "vertical";

  /** apply a test ID to the component for Storybook, Playwright etc */
  testId?: string;
}

/** A list of checkboxes which binds to an array of IDs */
export const CheckboxInputList = React.forwardRef(
  <Id extends ArmstrongId>(
    {
      bind,
      options,
      className,
      validationMode,
      value,
      checkedIcon,
      onChange,
      uncheckedIcon,
      errorIcon,
      scrollValidationErrorsIntoView,
      error,
      validationErrorMessages,
      direction,
      testId,
    }: ICheckboxInputListProps<Id>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
      validationErrorIcon: errorIcon,
      validationErrorMessages,
      validationMode,
      value,
      onChange,
    });

    const groupedOptions = React.useMemo(
      () => arrayToArraysByKey(options, (option) => option.group || ""),
      [options]
    );

    const includesOption = React.useCallback(
      (option: ICheckboxInputListOption<Id>) => boundValue?.includes(option.id),
      [boundValue]
    );

    const onCheckboxInputChange = React.useCallback(
      (option: ICheckboxInputListOption<Id>) => {
        if (includesOption(option)) {
          setBoundValue?.(boundValue?.filter((val) => val !== option.id) || []);
        } else {
          setBoundValue?.([...(boundValue || []), option.id]);
        }
      },
      [boundValue, includesOption]
    );

    return (
      <>
        <div
          className={concat("arm-checkbox-input-list", className)}
          data-error={error || !!validationErrorMessages?.length}
          ref={ref}
          data-direction={direction}
          data-testid={testId}
        >
          {groupedOptions.map((group) => (
            <React.Fragment key={group.key}>
              {group.key && (
                <div className="arm-checkbox-input-list-group-title">
                  <p>{group.key}</p>
                </div>
              )}
              {group.items.map((option) => (
                <CheckboxInput
                  key={option.id}
                  leftIcon={option.leftIcon}
                  rightIcon={option.rightIcon}
                  checked={includesOption(option)}
                  onChange={() =>
                    !option.disabled && onCheckboxInputChange(option)
                  }
                  name={option.name ?? option.id?.toString()}
                  checkedIcon={checkedIcon}
                  uncheckedIcon={uncheckedIcon}
                  content={option.content}
                  inputProps={option.htmlInputProps}
                  disabled={option.disabled}
                  direction={
                    direction === "horizontal" ? "vertical" : "horizontal"
                  }
                  {...option.htmlProps}
                />
              ))}
            </React.Fragment>
          ))}
        </div>

        {bindConfig.shouldShowValidationErrorMessage &&
          bindConfig.validationErrorMessages && (
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
) as (<Id extends ArmstrongId>(
  props: ArmstrongVFCProps<ICheckboxInputListProps<Id>, HTMLDivElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICheckboxInputListProps<any>>;

CheckboxInputList.defaultProps = {
  direction: "vertical",
  checkedIcon: IconUtils.getIconDefinition("Icomoon", "minus3"),
  uncheckedIcon: IconUtils.getIconDefinition("Icomoon", "minus3"),
};
