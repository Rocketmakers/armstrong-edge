import * as React from 'react';

import { Globals } from '../../utils';
import { DefaultLink, ILinkProps } from '../link/link.component';

interface IArmstrongConfigContext {
  /** configuration for internal Links */
  routingConfig: {
    /**
     * a component to be used to agnostically allow Armstrong's Link, LinkButton, and other routing based components to hook into external routing libraries
     *
     * ```tsx
     * import { Link } from 'react-router-dom';

     * export const App: React.FC = () => 
     *   <ArmstrongConfigProvider
     *     routingConfig={{
     *       LinkComponent: ({ to, children, ...props }) => (
     *         <Link to={to} {...props}>
     *             {children}
     *         </Link>
     *       )}}
     *   >
     *     <App />
     *   </ArmstrongConfigProvider>
     * ```
     */
    LinkComponent: React.FC<ILinkProps<any>>;

    /** used to allow Armstrong to hook into the current location - should be used with a location that will update state and trigger rerenders in subscribed components, i.e. useLocation from react router */
    location?: Location | undefined;

    /** used to allow Armstrong to programatically push or replace to the history using live state i.e. push or replace from useHistory from react router */
    navigate?: (to: string, action: 'push' | 'replace') => void;
  };
}

const ArmstrongConfigContext = React.createContext<IArmstrongConfigContext>({
  routingConfig: {
    LinkComponent: DefaultLink,
    location: undefined,
    navigate: (to, action) =>
      action === 'replace' ? Globals.Window?.history?.replaceState({}, '', to) : Globals.Window?.history?.pushState({}, '', to),
  },
});

/**
 * Configuration for Armstrong
 *
 * Currently only used for routing integration - see Link docs for more information
 */

export const ArmstrongConfigProvider: React.FC<IArmstrongConfigContext> = ({ routingConfig, children }) => {
  return <ArmstrongConfigContext.Provider value={{ routingConfig }}>{children}</ArmstrongConfigContext.Provider>;
};

/** Access Armstrong's configuration - for internal Armstrong use */
export const useArmstrongConfig = () => React.useContext(ArmstrongConfigContext);
