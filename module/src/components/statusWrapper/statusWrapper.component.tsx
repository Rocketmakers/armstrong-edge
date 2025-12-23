import * as React from 'react';

import { FormValidationMode } from '../../form';
import { useArmstrongConfig } from '../config';
import { Status } from '../status/status.component';

export interface IStatusWrapperProps {
  /** which side of the button to show the spinner on - defaults to 'right' */
  statusPosition?: 'left' | 'right';

  /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** show a spinner and disable */
  pending?: boolean;

  /** how to render the validation errors */
  validationMode?: FormValidationMode;

  /** the icon to use for validation errors */
  errorIcon?: React.ReactElement;

  /** an optional CSS className for the rendered status */
  className?: string;
}

export const StatusWrapper: React.FC<React.PropsWithChildren<IStatusWrapperProps>> = ({
  statusPosition,
  error,
  pending,
  errorIcon,
  validationMode,
  children,
  className,
}) => {
  const globals = useArmstrongConfig({
    validationErrorIcon: errorIcon,
    validationMode,
    inputStatusPosition: statusPosition,
  });

  const shouldShowErrorIcon = (globals.validationMode === 'both' || globals.validationMode === 'icon') && !!error;

  return (
    <>
      {globals.inputStatusPosition === 'left' && (
        <Status
          className={className}
          error={shouldShowErrorIcon}
          pending={pending}
          errorIcon={globals.validationErrorIcon}
          data-position="left"
        />
      )}
      {children}
      {globals.inputStatusPosition === 'right' && (
        <Status
          className={className}
          error={shouldShowErrorIcon}
          pending={pending}
          errorIcon={globals.validationErrorIcon}
          data-position="right"
        />
      )}
    </>
  );
};
