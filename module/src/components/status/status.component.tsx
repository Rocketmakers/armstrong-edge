import * as React from 'react';

import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { Spinner } from '../spinner';

export interface IStatusProps {
  pending?: boolean;
  error?: boolean;

  errorIcon?: IIcon<IconSet>;
  spinnerIcon?: IIcon<IconSet>;
}

/** Render a status icon which can either be pending or errored */
export const Status: React.FunctionComponent<IStatusProps> = ({ pending, error, errorIcon, spinnerIcon }) => {
  if (!error && !pending) {
    return null;
  }
  return (
    <div className="arm-status" data-active={!!pending || !!error} data-error={!!error && !pending} data-pending={pending}>
      {error && !pending && <Icon className="arm-status-error" iconSet={errorIcon!.iconSet} icon={errorIcon!.icon} />}
      {pending && <Spinner className="arm-status-spinner" fillContainer={false} icon={spinnerIcon} />}
    </div>
  );
};

Status.defaultProps = {
  errorIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
};
