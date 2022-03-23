import * as React from 'react';

import { Globals } from '../../utils';
import { DefaultLink, ILinkProps } from '../link/link.component';

export interface IArmstrongLocation {
  /**
   * A URL pathname, beginning with a /.
   *
   * @see https://github.com/ReactTraining/history/tree/master/docs/api-reference.md#location.pathname
   */
  pathname: string;
  /**
   * A URL search string, beginning with a ?.
   *
   * @see https://github.com/ReactTraining/history/tree/master/docs/api-reference.md#location.search
   */
  search: string;
  /**
   * A URL fragment identifier, beginning with a #.
   *
   * @see https://github.com/ReactTraining/history/tree/master/docs/api-reference.md#location.hash
   */
  hash: string;
}

export interface IArmstrongConfigContext {
  /** configuration for internal Links */
  routing: {
    /**
     * a component to be used to agnostically allow Armstrong's Link, LinkButton, and other routing based components to hook into external routing libraries
     *
     * ```tsx
     * import { Link } from 'react-router-dom';

     * export const App: React.FC = () => 
     *   <ArmstrongConfigProvider
     *     routing={{
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
    location?: IArmstrongLocation | undefined;

    /** used to allow Armstrong to programatically push or replace to the history using live state i.e. push or replace from useHistory from react router */
    navigate?: (to: string, action: 'push' | 'replace') => void;
  };
}

const ArmstrongConfigContext = React.createContext<IArmstrongConfigContext>({
  routing: {
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

export const ArmstrongConfigProvider: React.FC<IArmstrongConfigContext> = ({ routing, children }) => {
  return <ArmstrongConfigContext.Provider value={{ routing }}>{children}</ArmstrongConfigContext.Provider>;
};

/** Access Armstrong's configuration - for internal Armstrong use */
export const useArmstrongConfig = () => React.useContext(ArmstrongConfigContext);
