import * as React from 'react';

import { concat } from '../../utils/classNames';
import { IconSet, IconUtils } from '../icon';
import { IconButton } from '../iconButton';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';

export interface ITagProps
  extends IIconWrapperProps<IconSet, IconSet>,
    React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** the text to render inside the tag */
  content?: string;

  /** fired when the user clicks on a cross - if undefined, shows no cross */
  onRemove?: () => void;
}

export const Tag = React.forwardRef<HTMLDivElement, React.PropsWithChildren<ITagProps>>(
  ({ content, className, leftIcon, rightIcon, children, onRemove, ...nativeProps }, ref) => (
    <div ref={ref} className={concat('arm-tag', className)} {...nativeProps}>
      <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
        {typeof children === 'string' || !children ? <span>{content}</span> : children}
      </IconWrapper>

      {onRemove && (
        <IconButton
          type="button"
          minimalStyle
          className="arm-tag-close"
          onMouseDown={event => event.stopPropagation()}
          onClick={event => {
            onRemove();
            event.stopPropagation();
          }}
          icon={IconUtils.getIconDefinition('Icomoon', 'cross2')}
        />
      )}
    </div>
  )
);
