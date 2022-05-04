import * as React from 'react';

import { ClassNames } from '../..';
import { DataAttributes } from '../../types';
import { useArmstrongConfig } from '../config/config.context';

interface ILinkPropsCore {
  /** the url to push to history on click - is passed to routingContext.LinkComponent in  */
  to: string;
  className?: string;
}

export type ILinkProps<TLinkProps> = TLinkProps & ILinkPropsCore & DataAttributes;

export const DefaultLink: React.FC<ILinkPropsCore> = ({ to, className, children, ...additionalProps }) => (
  <a {...additionalProps} className={className} href={to}>
    {children}
  </a>
);

/**
 * A component that renders an anchor tag or renders the LinkComponent given to routing on the ArmstrongConfigContext
 *
 * For internal Armstrong use for components that needs to be able to access routing i.e. LinkButton rather than for consumers to use directly
 */

export const Link = React.forwardRef(
  <TLinkProps, TRef>(
    { to, className, children, ...additionalProps }: React.PropsWithChildren<ILinkProps<TLinkProps> & DataAttributes>,
    ref: TRef
  ) => {
    const { routing } = useArmstrongConfig();

    return (
      <routing.LinkComponent {...additionalProps} to={to} className={ClassNames.concat('arm-link', className)} ref={ref}>
        {children}
      </routing.LinkComponent>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TLinkProps, TRef>(props: ILinkProps<TLinkProps> & React.RefAttributes<TRef> & DataAttributes) => ReturnType<React.FC>) & {
  defaultProps?: Partial<ILinkProps<any>>;
};
