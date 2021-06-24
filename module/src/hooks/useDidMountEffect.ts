import React from 'react';

/** A useEffect which will only run in the first effect */
export function useDidMountEffect(callback: () => void) {
  React.useEffect(callback, []);
}

/** A useLayoutEffect which will only run in the first effect */
export function useDidMountLayoutEffect(callback: () => void) {
  React.useLayoutEffect(callback, []);
}
