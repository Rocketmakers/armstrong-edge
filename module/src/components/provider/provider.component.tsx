'use client';

import * as React from 'react';

import { ArmstrongConfigProvider, IArmstrongConfig } from '../config';
import { ToastProvider } from '../toast';

/** Props type for the unified armstrong provider */
export interface IArmstrongProviderProps extends React.PropsWithChildren {
  /** A dictionary of optional global config, overrides the system defaults */
  config?: IArmstrongConfig;
}

export const ArmstrongProvider: React.FC<IArmstrongProviderProps> = ({ children, config = {} }) => {
  return (
    <ArmstrongConfigProvider {...config}>
      <ToastProvider>{children}</ToastProvider>
    </ArmstrongConfigProvider>
  );
};
