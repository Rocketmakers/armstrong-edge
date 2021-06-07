import * as React from 'react';

import { FormValidationMode } from '../../hooks/form';
import { IconSet, IIcon } from '../icon';
import { Status } from '../status/status.component';

export interface IStatusWrapperProps {
  /** (left|right) which side of the button to show the spinner on - defaults to 'right' */
  statusPosition?: 'left' | 'right';

  /** (boolean) show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** (boolean) show a spinner and disable */
  pending?: boolean;

  /** (string[]) array of validation errors used to calculate if there is an error in wrapping component */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** (IIcon) the icon to use for validation errors */
  errorIcon?: IIcon<IconSet>;
}

export const StatusWrapper: React.FC<IStatusWrapperProps> = ({
  statusPosition,
  error,
  pending,
  errorIcon,
  validationErrorMessages,
  validationMode,
  children,
}) => {
  const shouldShowErrorIcon = (!!validationErrorMessages?.length && (validationMode === 'both' || validationMode === 'icon')) || error;

  return (
    <>
      {statusPosition === 'left' && <Status error={shouldShowErrorIcon} pending={pending} errorIcon={errorIcon} />}
      {children}
      {statusPosition === 'right' && <Status error={shouldShowErrorIcon} pending={pending} errorIcon={errorIcon} />}
    </>
  );
};

StatusWrapper.defaultProps = {
  statusPosition: 'right',
};
