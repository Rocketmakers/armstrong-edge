import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface -- we don't know what's going in config yet.
export interface IArmstrongConfigContext {}

const ArmstrongConfigContext = React.createContext<IArmstrongConfigContext>({});

/**
 * Configuration for Armstrong
 *
 * Currently not used - add properties etc. as appropriate
 */
export const ArmstrongConfigProvider: React.FC<React.PropsWithChildren<IArmstrongConfigContext>> = ({ children }) => {
  return <ArmstrongConfigContext.Provider value={{}}>{children}</ArmstrongConfigContext.Provider>;
};

/** Access Armstrong's configuration - for internal Armstrong use */
export const useArmstrongConfig = () => React.useContext(ArmstrongConfigContext);
