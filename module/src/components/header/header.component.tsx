import * as React from 'react';

import { ClassNames } from '../../utils';
import { IPortalProps, Portal } from '../portal';

export interface IHeaderProps extends IPortalProps, React.HTMLProps<HTMLDivElement> {
  /** should the header portal - true by default, set to false to ignore portalTo and portalToSelector props, portals into the body by default */
  shouldPortal?: boolean;
}

/** Render some content in a menu fixed to the top of the screen */
export const Header = React.forwardRef<HTMLElement, IHeaderProps>(
  ({ className, children, portalTo, shouldPortal, portalToSelector, ref, ...htmlProps }, forwardedRef) => {
    const content = (
      <header ref={forwardedRef} className={ClassNames.concat('arm-header', className)} {...htmlProps}>
        {children}
      </header>
    );

    if (!shouldPortal) {
      return content;
    }

    return (
      <Portal portalTo={portalTo} portalToSelector={portalToSelector}>
        {content}
      </Portal>
    );
  }
);

Header.defaultProps = {
  shouldPortal: true,
};
