import * as React from 'react';

/** A useEffect which will only run in the first effect */
export function useDidMountEffect(callback: React.EffectCallback) {
  return React.useEffect(callback, []);
}

/** A useLayoutEffect which will only run in the first effect */
export function useDidMountLayoutEffect(callback: React.EffectCallback) {
  return React.useLayoutEffect(callback, []);
}
