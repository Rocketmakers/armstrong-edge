import React from 'react';

/** A useEffect which will only run in the first effect */
export function useDidMountEffect(callback: () => void) {
  React.useEffect(callback, []);
}
