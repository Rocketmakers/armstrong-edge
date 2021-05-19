import * as React from 'react';

export function useDidUpdateEffect(callback: React.EffectCallback, deps?: React.DependencyList) {
  const didMountRef = React.useRef(false);

  React.useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    return callback();
  }, deps);
}

export function useDidUpdateLayoutEffect(callback: React.EffectCallback, deps?: React.DependencyList) {
  const didMountRef = React.useRef(false);

  React.useLayoutEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    return callback();
  }, deps);
}
