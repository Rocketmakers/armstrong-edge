import * as React from 'react';

import { ClassNames, Globals } from '../..';

interface ILinkPropsCore {
  to: string;
  className?: string;
}

export type ILinkProps<T extends Record<string, any>> = T & ILinkPropsCore;

const DefaultLink: React.FC<ILinkPropsCore> = ({ to, className, children, ...additionalProps }) => (
  <a {...additionalProps} className={className} href={to}>
    {children}
  </a>
);

interface ILinkContext {
  Component: React.FC<ILinkProps<any>>;
  location?: Location | undefined;
  navigate?: (to: string, action: 'push' | 'replace') => void;
}

const LinkContext = React.createContext<ILinkContext>({
  Component: DefaultLink,
  location: undefined,
  navigate: (to, action) =>
    action === 'replace' ? Globals.Window?.history?.replaceState({}, '', to) : Globals.Window?.history?.pushState({}, '', to),
});

export const LinkProvider: React.FC<ILinkContext> = ({ Component, navigate, children }) => {
  return <LinkContext.Provider value={{ Component, navigate, location: undefined }}>{children}</LinkContext.Provider>;
};

export const Link = <T extends Record<string, any>>({ to, className, children, ...additionalProps }: React.PropsWithChildren<ILinkProps<T>>) => {
  const { Component } = React.useContext(LinkContext);

  return (
    <Component {...additionalProps} to={to} className={ClassNames.concat('arm-link', className)}>
      {children}
    </Component>
  );
};
