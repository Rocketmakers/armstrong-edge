import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';

export interface IErrorMessageProps {
  /** The error to render */
  message: string;

  /** CSS className property */
  className?: string;

  /** the icon to render beside the validation message */
  icon?: IIcon<IconSet>;
}

/** Render a simple error with a message and an icon - mainly used for validation errors in form inputs */
export const ErrorMessage = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IErrorMessageProps>>(({ className, message, icon }, ref) => {
  return (
    <div ref={ref} className={ClassNames.concat('arm-error-message', className)}>
      {icon && <Icon iconSet={icon.iconSet} icon={icon.icon} />} <p>{message}</p>
    </div>
  );
});

ErrorMessage.defaultProps = {
  icon: IconUtils.getIconDefinition('Icomoon', 'warning'),
};
