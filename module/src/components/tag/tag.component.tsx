import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';

export interface ITagProps
  extends IIconWrapperProps<IconSet, IconSet>,
    React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** (string) the text to render inside the tag */
  content?: string;

  /** (() => void) fired when the user clicks on a cross - if undefined, shows no cross */
  onRemove?: () => void;
}

export const Tag: React.FC<ITagProps> = ({ content, className, leftIcon, rightIcon, children, onRemove, ...nativeProps }) => (
  <div className={ClassNames.concat('arm-tag', className)} {...nativeProps}>
    <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
      {typeof children === 'string' || !children ? <p>{content}</p> : children}
      {onRemove && <Icon className="arm-tag-close" onClick={onRemove} iconSet="Icomoon" icon="cross2" />}
    </IconWrapper>
  </div>
);
