import * as React from 'react';

/** Used for exporting components that use generics with ref-as-prop pattern */
export type ArmstrongFCProps<TProps, TRef> = React.PropsWithoutRef<React.PropsWithChildren<TProps>> &
  React.RefAttributes<TRef>;
export type ArmstrongVFCProps<TProps, TRef> = React.PropsWithoutRef<TProps> & React.RefAttributes<TRef>;
export type ArmstrongFCExtensions<TDefaultProps> = Pick<React.FC<TDefaultProps>, 'displayName' | 'propTypes'>;
