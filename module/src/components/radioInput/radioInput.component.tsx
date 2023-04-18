import * as React from "react";

import { ArmstrongId, IArmstrongOption } from "../..";
import { concat } from "../../utils/classNames";
import { Icon, IconSet, IIcon } from "../icon";
import { OptionContent } from "../optionContent";

export interface IRadioInputProps
  extends Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >,
      "onChange"
    >,
    IArmstrongOption<ArmstrongId> {
  /** fired when the user changes the current value */
  onChange?: (newValue: boolean) => void;

  /** icon to render on the input when checked */
  checkedIcon?: JSX.Element;

  /** icon to render on the input when not checked */
  uncheckedIcon?: JSX.Element;

  /** props to spread onto the input element */
  inputProps?: Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onChange" | "type" | "ref" | "checked"
  >;
}

/** Render a single radio input */
export const RadioInput = React.forwardRef<HTMLInputElement, IRadioInputProps>(
  (
    {
      onChange,
      content,
      className,
      checked,
      leftIcon,
      rightIcon,
      checkedIcon,
      uncheckedIcon,
      inputProps,
      name,
      ...nativeProps
    },
    ref
  ) => {
    const generatedId = React.useId();

    return (
      <div
        className={concat("arm-radio-input", className)}
        {...nativeProps}
        data-checked={checked}
        data-has-checked-icon={!!checkedIcon}
        data-direction={direction}
      >
        <input
          {...inputProps}
          className={concat(
            "arm-radio-input-radio-input",
            inputProps?.className
          )}
          ref={ref}
          type="radio"
          checked={checked}
          onChange={() => onChange?.(!checked)}
          id={generatedId}
        />

        <label className="arm-radio-input-label" htmlFor={generatedId}>
          {!hideRadio && (
            <div className="arm-radio-input-radio">
              {checkedIcon}
              {uncheckedIcon}
            </div>
          )}

          <OptionContent
            content={content}
            name={name}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            isActive={checked}
          />
        </label>
      </div>
    );
  }
);

RadioInput.defaultProps = {
  direction: "vertical",
};
