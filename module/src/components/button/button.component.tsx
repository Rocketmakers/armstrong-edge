import * as React from "react";
import { ClassNames } from "../../utils";

import "./button.basic.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pending?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<IButtonProps>
>(({ children, className, pending, ...rest }, ref) => {
  return (
    <button
      className={ClassNames.concat("arm-button", className)}
      ref={ref}
      data-pending={pending}
      {...rest}
    >
      {children}
    </button>
  );
});
