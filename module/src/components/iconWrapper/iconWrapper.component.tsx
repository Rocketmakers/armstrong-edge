import * as React from 'react';

import { Icon, IconSet, IIconDefinition } from '../icon/icon.component';
import { IconUtils } from '../icon/icons.utils';

export interface IIconWrapperProps<TLeftIcon extends IconSet, TRightIcon extends IconSet> {
  /** (IIcon | JSX) icon definition for left icon, optionally uses custom JSX */
  leftIcon?: IIconDefinition<TLeftIcon> | JSX.Element;

  /** (IIcon | JSX) icon definition for right icon, optionally uses custom JSX */
  rightIcon?: IIconDefinition<TRightIcon> | JSX.Element;
}

/** Wraps its children with optional icons on either side */

export const IconWrapper = <TLeftIcon extends IconSet, TRightIcon extends IconSet>({
  leftIcon,
  rightIcon,
  children,
}: React.PropsWithChildren<IIconWrapperProps<TLeftIcon, TRightIcon>>) => {
  return (
    <div className="arm-icon-wrapper">
      {leftIcon && (IconUtils.isIconDefinition(leftIcon) ? <Icon iconSet={leftIcon.iconSet} icon={leftIcon.icon} className="left-icon" /> : leftIcon)}
      {children}
      {rightIcon &&
        (IconUtils.isIconDefinition(rightIcon) ? <Icon iconSet={rightIcon.iconSet} icon={rightIcon.icon} className="right-icon" /> : rightIcon)}
    </div>
  );
};
