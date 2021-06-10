import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { Button, IButtonProps } from '../button';
import { Icon, IconSet, IIcon } from '../icon/icon.component';
import { Status } from '../status';

export interface IIconButtonProps extends Omit<IButtonProps, 'leftIcon' | 'rightIcon' | 'hideIconOnStatus' | 'statusPosition'> {
  /** (IIcon) the icon to render on the button */
  icon: IIcon<IconSet>;

  /** (boolean) should not render as a button */
  iconOnly?: boolean;
}

/** A button that only renders an icon without text */
export const IconButton: React.FunctionComponent<IIconButtonProps> = ({ icon, pending, error, errorIcon, className, iconOnly, ...buttonProps }) => {
  return (
    <Button {...buttonProps} className={ClassNames.concat('arm-icon-button', className)} statusPosition={undefined} data-icon-only={iconOnly}>
      {!pending && !error && <Icon iconSet={icon.iconSet} icon={icon.icon} />}
      <Status errorIcon={errorIcon} pending={pending} error={error} />
    </Button>
  );
};
