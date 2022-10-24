import * as React from "react";
import { ClassNames } from "../../utils/classNames";

import { IIcon, IconSet, Icon, IconUtils } from "../icon";
import { ValidationMessage } from "../../hooks/form/form.types";

export interface IErrorMessageProps {
  /** The error to render */
  message: ValidationMessage;

  /** CSS className property */
  className?: string;

  /** the icon to render beside the validation message */
  icon?: IIcon<IconSet>;
}

/** Render a simple error with a message and an icon - mainly used for validation errors in form inputs */
export const ErrorMessage = React.forwardRef<
  HTMLDivElement,
  IErrorMessageProps
>(({ className, message, icon }, ref) => {
  return (
    <div
      ref={ref}
      className={ClassNames.concat("arm-error-message", className)}
    >
      {icon && <Icon iconSet={icon.iconSet} icon={icon.icon} />}{" "}
      <span>{message}</span>
    </div>
  );
});

ErrorMessage.defaultProps = {
  icon: IconUtils.getIconDefinition("Icomoon", "warning"),
};
