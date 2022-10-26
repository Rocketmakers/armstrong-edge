import * as React from 'react';

/** A useEffect which only runs on the cleanup of the last effect */
export function useWillUnMountEffect(callback: ReturnType<React.EffectCallback>) {
  return React.useEffect(() => callback, []);
}

/** A useLayoutEffect which only runs on the cleanup of the last effect */
export function useWillUnMountLayoutEffect(callback: ReturnType<React.EffectCallback>) {
  return React.useLayoutEffect(() => callback, []);
}
