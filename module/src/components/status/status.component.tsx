import * as React from 'react';

import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { Spinner } from '../spinner';

export interface IStatusProps {
  pending?: boolean;
  error?: boolean;

  errorIcon?: IIcon<IconSet>;
  spinnerIcon?: IIcon<IconSet>;
}

export const Status: React.FunctionComponent<IStatusProps> = ({ pending, error, errorIcon, spinnerIcon }) => {
  return (
    <div className="arm-status" data-active={!!pending || !!error} data-error={!!error && !pending} data-pending={pending}>
      <Icon className="arm-status-error" iconSet={errorIcon!.iconSet} icon={errorIcon!.icon} />
      <Spinner className="arm-status-spinner" fillContainer={false} icon={spinnerIcon} />
    </div>
  );
};

Status.defaultProps = {
  errorIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
};
