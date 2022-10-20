import * as React from 'react';

import { Icon, IconSet, IIcon } from '../icon/icon.component';
import { IconUtils } from '../icon/icons.utils';

export interface IIconWrapperProps<TLeftIcon extends IconSet, TRightIcon extends IconSet> {
  /** icon definition for left icon, optionally uses custom JSX */
  leftIcon?: IIcon<TLeftIcon> | JSX.Element;

  /** icon definition for right icon, optionally uses custom JSX */
  rightIcon?: IIcon<TRightIcon> | JSX.Element;
}

/** Wraps its children with optional icons on either side */
export const IconWrapper = <TLeftIcon extends IconSet, TRightIcon extends IconSet>({
  leftIcon,
  rightIcon,
  children,
}: React.PropsWithChildren<IIconWrapperProps<TLeftIcon, TRightIcon>>) => {
  return (
    <>
      {leftIcon && (IconUtils.isIconDefinition(leftIcon) ? <Icon iconSet={leftIcon.iconSet} icon={leftIcon.icon} className="left-icon" /> : leftIcon)}
      {children}
      {rightIcon &&
        (IconUtils.isIconDefinition(rightIcon) ? <Icon iconSet={rightIcon.iconSet} icon={rightIcon.icon} className="right-icon" /> : rightIcon)}
    </>
  );
};
