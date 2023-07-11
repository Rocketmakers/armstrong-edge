import * as React from 'react';
import { IArmstrongConfig } from '../config';
/** Props type for the unified armstrong provider */
export interface IArmstrongProviderProps extends React.PropsWithChildren {
    /** A dictionary of optional global config, overrides the system defaults */
    config?: IArmstrongConfig;
}
export declare const ArmstrongProvider: React.FC<IArmstrongProviderProps>;
