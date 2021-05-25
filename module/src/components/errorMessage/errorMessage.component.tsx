import * as React from 'react';

import { ClassUtils } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';

export interface IErrorMessageProps {
  /** (string) The error to render */
  message: string;

  /** (string) CSS className property */
  className?: string;

  /** (IIcon) the icon to render beside the validation message */
  icon?: IIcon<IconSet>;
}

/** Render a simple error with a message and an icon - mainly used for validation errors in form inputs */
export const ErrorMessage = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IErrorMessageProps>>(({ className, message, icon }, ref) => {
  return (
    <div ref={ref} className={ClassUtils.concat('arm-error-message', className)}>
      {icon && <Icon iconSet={icon.iconSet} icon={icon.icon} />} <p>{message}</p>
    </div>
  );
});

ErrorMessage.defaultProps = {
  icon: IconUtils.getIconDefinition('Icomoon', 'warning'),
};
