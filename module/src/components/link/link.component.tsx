import * as React from 'react';

import { ClassNames } from '../..';
import { useArmstrongConfig } from '../config/config.context';

export interface ILinkPropsCore {
  /** the url to push to history on click - is passed to routingContext.LinkComponent in  */
  to: string;
  className?: string;
}

export type ILinkProps<TLinkProps extends Record<string, any>> = TLinkProps & ILinkPropsCore;

export const DefaultLink = React.forwardRef<HTMLAnchorElement, React.PropsWithChildren<ILinkPropsCore>>(
  ({ to, className, children, ...additionalProps }, forwardedRef) => (
    <a ref={forwardedRef} {...additionalProps} className={className} href={to}>
      {children}
    </a>
  )
);

/**
 * A component that renders an anchor tag or renders the LinkComponent given to routing on the ArmstrongConfigContext
 *
 * For internal Armstrong use for components that needs to be able to access routing i.e. LinkButton rather than for consumers to use directly
 */

export const Link = React.forwardRef(
  <T extends Record<string, any>>(
    { to, className, children, ...additionalProps }: React.PropsWithChildren<ILinkProps<T>>,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const { routing } = useArmstrongConfig();

    return (
      <routing.LinkComponent {...additionalProps} ref={ref} to={to} className={ClassNames.concat('arm-link', className)}>
        {children}
      </routing.LinkComponent>
    );
  }
);
