import * as React from "react";

import { concat } from "../../utils/classNames";
import { useArmstrongConfig } from "../config";
import { Spinner } from "../spinner";

import "./status.theme.css";

export interface IStatusProps {
  /** show a spinner */
  pending?: boolean;

  /** show an error state  */
  error?: boolean;

  /** the icon to use for the error */
  errorIcon?: JSX.Element;

  /** the icon to use for the spinner */
  spinnerIcon?: JSX.Element;

  /** an optional CSS className for the rendered status */
  className?: string;
}

/** Render a status icon which can either be pending or errored */
export const Status = React.forwardRef<HTMLDivElement, IStatusProps>(
  ({ pending, error, errorIcon, spinnerIcon, className, ...rest }, ref) => {
    const globals = useArmstrongConfig({
      validationErrorIcon: errorIcon,
      spinnerIcon,
    });

    if (!error && !pending) {
      return null;
    }
    return (
      <div
        ref={ref}
        className={concat("arm-status", className)}
        data-active={!!pending || !!error ? true : undefined}
        data-error={!!error && !pending ? true : undefined}
        data-pending={pending ? true : undefined}
        role="status"
        {...rest}
      >
        {error && !pending && globals.validationErrorIcon}
        {pending && (
          <Spinner
            className="arm-status-spinner"
            fillContainer={false}
            icon={globals.spinnerIcon}
          />
        )}
      </div>
    );
  }
);

Status.displayName = "Status";
