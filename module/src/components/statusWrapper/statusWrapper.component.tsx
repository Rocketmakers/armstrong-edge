import * as React from 'react';

import { FormValidationMode, ValidationMessage } from '../../hooks/form';
import { IconSet, IIcon } from '../icon';
import { Status } from '../status/status.component';

export interface IStatusWrapperProps {
  /** which side of the button to show the spinner on - defaults to 'right' */
  statusPosition?: 'left' | 'right';

  /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** show a spinner and disable */
  pending?: boolean;

  /** array of validation errors used to calculate if there is an error in wrapping component */
  validationErrorMessages?: ValidationMessage[];

  /** how to render the validation errors */
  validationMode?: FormValidationMode;

  /** the icon to use for validation errors */
  errorIcon?: IIcon<IconSet>;

  /** an optional CSS className for the rendered status */
  className?: string;
}

export const StatusWrapper: React.FC<React.PropsWithChildren<IStatusWrapperProps>> = ({
  statusPosition,
  error,
  pending,
  errorIcon,
  validationErrorMessages,
  validationMode,
  children,
  className,
}) => {
  const shouldShowErrorIcon =
    (!!validationErrorMessages?.length && (validationMode === 'both' || validationMode === 'icon')) || error;

  return (
    <>
      {statusPosition === 'left' && (
        <Status
          className={className}
          error={shouldShowErrorIcon}
          pending={pending}
          errorIcon={errorIcon}
          data-position="left"
        />
      )}
      {children}
      {statusPosition === 'right' && (
        <Status
          className={className}
          error={shouldShowErrorIcon}
          pending={pending}
          errorIcon={errorIcon}
          data-position="right"
        />
      )}
    </>
  );
};

StatusWrapper.defaultProps = {
  statusPosition: 'right',
};
