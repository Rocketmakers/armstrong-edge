import * as React from 'react';

/** Used for exporting `forwardRef` components that use generics */
export type ArmstrongFCProps<TProps, TRef> = React.PropsWithChildren<TProps> & React.RefAttributes<TRef | undefined>;
export type ArmstrongVFCProps<TProps, TRef> = TProps & React.RefAttributes<TRef | undefined>;
export type ArmstrongFCReturn = ReturnType<React.FC>;
export type ArmstrongFCExtensions<TDefaultProps> = Pick<
  React.FC<TDefaultProps>,
  'contextTypes' | 'defaultProps' | 'displayName' | 'propTypes'
>;
