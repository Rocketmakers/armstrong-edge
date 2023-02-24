import * as React from "react";

import { concat } from "../../utils/classNames";
import { IconSet } from "../icon";
import { IconWrapper, IIconWrapperProps } from "../iconWrapper";
import {
  IStatusWrapperProps,
  StatusWrapper,
} from "../statusWrapper/statusWrapper.component";

type ButtonHTMLProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "ref"
>;

type ButtonDisplayStyle = "primary" | "secondary" | "outline";
type ButtonDisplaySize = "small" | "medium" | "large" | "extra-large";

export type IButtonCoreProps = IIconWrapperProps<IconSet, IconSet> &
  IStatusWrapperProps & {
    /** CSS className property */
    className?: string;

    /** show a spinner and disable */
    pending?: boolean;

    /** hide the icon on the same side as the status if there is an active status - defaults to true */
    hideIconOnStatus?: boolean;

    /** disable use */
    disabled?: boolean;

    /** which style variant to use */
    displayStyle?: ButtonDisplayStyle;

    /** which size variant to use */
    displaySize?: ButtonDisplaySize;
  };

export type IButtonProps = IButtonCoreProps & ButtonHTMLProps;

/** Renders the inside of a button, for use in altering the tag used for the wrapper */
export const ButtonInner: React.FC<React.PropsWithChildren<IButtonCoreProps>> =
  ({
    validationErrorMessages,
    errorIcon,
    pending,
    error,
    leftIcon,
    rightIcon,
    children,
    statusPosition,
    hideIconOnStatus,
  }) => {
    const shouldShowErrorIcon = !!validationErrorMessages?.length || error;

    const showLeftIcon =
      statusPosition !== "left" ||
      !hideIconOnStatus ||
      (!pending && !shouldShowErrorIcon);
    const showRightIcon =
      statusPosition !== "right" ||
      !hideIconOnStatus ||
      (!pending && !shouldShowErrorIcon);

    return (
      <IconWrapper
        leftIcon={showLeftIcon ? leftIcon : undefined}
        rightIcon={showRightIcon ? rightIcon : undefined}
      >
        <StatusWrapper
          pending={pending}
          errorIcon={errorIcon}
          statusPosition={statusPosition}
          error={error}
          validationErrorMessages={validationErrorMessages}
        >
          {typeof children === "string" || typeof children === "number" ? (
            <span>{children}</span>
          ) : (
            children
          )}
        </StatusWrapper>
      </IconWrapper>
    );
  };

/** Renders an HTML button element with some useful additions */
export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<IButtonProps>
>((props, ref) => {
  const {
    className,
    disabled,
    displayStyle,
    displaySize,
    pending,
    leftIcon,
    rightIcon,
    children,
    statusPosition,
    hideIconOnStatus,
    testId,
    ...nativeProps
  } = props;

  return (
      <button
        className={concat(
          "arm-button",
          className
        )}
        data-pending={pending}
        data-disabled={disabled || pending}
        data-size={displaySize}
        data-style={displayStyle}
        disabled={disabled || pending}
        tabIndex={disabled ? -1 : nativeProps.tabIndex}
        data-testid={testId}
        ref={ref}
        {...nativeProps}
      >
        <ButtonInner {...props} />
      </button>
  );
});

Button.defaultProps = {
  statusPosition: "right",
  hideIconOnStatus: true,
};
