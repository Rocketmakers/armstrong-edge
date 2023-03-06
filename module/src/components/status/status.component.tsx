import * as React from "react";

import { Icon, IconSet, IconUtils, IIcon } from "../icon";
import { Spinner } from "../spinner";

export interface IStatusProps {
  /** show a spinner */
  pending?: boolean;

  /** show an error state  */
  error?: boolean;

  /** the icon to use for the error */
  errorIcon?: IIcon<IconSet>;

  /** the icon to use for the spinner */
  spinnerIcon?: IIcon<IconSet>;
}

/** Render a status icon which can either be pending or errored */
export const Status = React.forwardRef<HTMLDivElement, IStatusProps>(
  ({ pending, error, errorIcon, spinnerIcon, ...rest }, ref) => {
    if (!error && !pending) {
      return null;
    }
    return (
      <div
        ref={ref}
        className="arm-status"
        data-active={!!pending || !!error}
        data-error={!!error && !pending}
        data-pending={pending}
        role="status"
        {...rest}
      >
        {error && !pending && (
          <Icon
            className="arm-status-error"
            iconSet={errorIcon!.iconSet}
            icon={errorIcon!.icon}
            title="Error icon"
          />
        )}
        {pending && (
          <Spinner
            className="arm-status-spinner"
            fillContainer={false}
            icon={spinnerIcon}
          />
        )}
      </div>
    );
  }
);

Status.defaultProps = {
  errorIcon: IconUtils.getIconDefinition("Icomoon", "warning"),
};
