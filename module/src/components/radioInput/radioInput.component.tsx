import * as React from "react";

import { ArmstrongId, IArmstrongExtendedOption } from "../..";
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
    Pick<
      IArmstrongExtendedOption<ArmstrongId>,
      "content" | "name" | "leftIcon" | "rightIcon"
    > {
  /** fired when the user changes the current value */
  onChange?: (newValue: boolean) => void;

  /** the name to render in a label, falls back to ID */
  name?: string;

  /** icon to render on the input when checked */
  checkedIcon?: IIcon<IconSet>;

  /** icon to render on the input when not checked */
  uncheckedIcon?: IIcon<IconSet>;

  /** props to spread onto the input element */
  inputProps?: Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onChange" | "type" | "ref" | "checked"
  >;

  /** the direction for the content to flow */
  direction?: "horizontal" | "vertical";

  /** should hide the circular radio, showing only the label, allowing you to handle visualising the state of the input yourself */
  hideRadio?: boolean;
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
      direction,
      name,
      hideRadio,
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

        <label htmlFor={generatedId}>
          {!hideRadio && (
            <div className="arm-radio-input-radio">
              {checkedIcon && (
                <Icon
                  className="arm-radio-input-checked-icon"
                  iconSet={checkedIcon.iconSet}
                  icon={checkedIcon.icon}
                />
              )}
              {uncheckedIcon && (
                <Icon
                  className="arm-radio-input-unchecked-icon"
                  iconSet={uncheckedIcon.iconSet}
                  icon={uncheckedIcon.icon}
                />
              )}
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
  direction: "horizontal",
};
