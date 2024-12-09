import * as React from 'react';

/** Used for exporting `forwardRef` components that use generics */
export type ArmstrongFCProps<TProps, TRef> = React.PropsWithoutRef<React.PropsWithChildren<TProps>> & {
  ref?: React.RefObject<TRef>;
};
export type ArmstrongVFCProps<TProps, TRef> = React.PropsWithoutRef<TProps> & {
  ref?: React.RefObject<TRef>;
};

export type ArmstrongFCReturn = ReturnType<React.FC>;
export type ArmstrongFCExtensions<TDefaultProps> = Pick<React.FC<TDefaultProps>, 'displayName' | 'propTypes'>;
