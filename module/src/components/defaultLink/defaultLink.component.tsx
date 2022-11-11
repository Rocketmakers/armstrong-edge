import * as React from "react";

export interface ILinkPropsCore {
  /** the url to push to history on click - is passed to routingContext.LinkComponent  */
  to: string;
  className?: string;
}

export type ILinkProps<TLinkProps extends Record<string, any>> = TLinkProps &
  ILinkPropsCore;

export const DefaultLink = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<ILinkPropsCore>
>(({ to, className, children, ...additionalProps }, forwardedRef) => (
  <a ref={forwardedRef} {...additionalProps} className={className} href={to}>
    {children}
  </a>
));
