import * as React from 'react';

import { concat } from '../../utils/classNames';
import { Button, IButtonCoreProps } from '../button';
import { Icon, IconSet, isIconDefinition } from '../icon';

export interface ITagProps
  extends Pick<IButtonCoreProps<IconSet, IconSet>, 'leftIcon' | 'rightIcon'>,
    React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** the text to render inside the tag */
  content?: string;

  /** fired when the user clicks on a cross - if undefined, shows no cross */
  onRemove?: () => void;
}

export const Tag = React.forwardRef<HTMLDivElement, React.PropsWithChildren<ITagProps>>(
  ({ content, className, leftIcon, rightIcon, children, onRemove, ...nativeProps }, ref) => (
    <div ref={ref} className={concat('arm-tag', className)} {...nativeProps}>
      <>
        {leftIcon && (
          <>
            {isIconDefinition(leftIcon) ? (
              <Icon {...leftIcon} className="left-icon" title={`${leftIcon.icon} icon on left`} />
            ) : (
              leftIcon
            )}
          </>
        )}
        {typeof children === 'string' || !children ? <span>{content}</span> : children}
        {rightIcon && (
          <>
            {isIconDefinition(rightIcon) ? (
              <Icon {...rightIcon} className="right-icon" title={`${rightIcon.icon} icon on right`} />
            ) : (
              rightIcon
            )}
          </>
        )}
      </>

      {onRemove && (
        <Button
          className="arm-tag-close"
          onMouseDown={event => event.stopPropagation()}
          onClick={event => {
            onRemove();
            event.stopPropagation();
          }}
        >
          <Icon iconSet="Icomoon" icon="cross2" />
        </Button>
      )}
    </div>
  )
);
