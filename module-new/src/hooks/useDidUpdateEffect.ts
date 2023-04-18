import * as React from 'react';

/** A useEffect which won't run after the first render, will only run once the deps start changing */
export function useDidUpdateEffect(callback: React.EffectCallback, deps?: React.DependencyList) {
  const didMountRef = React.useRef(false);

  return React.useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return undefined;
    }
    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is just silly, it's a hook extension
  }, deps);
}

/** A useLayoutEffect which won't run after the first render, will only run once the deps start changing */
export function useDidUpdateLayoutEffect(callback: React.EffectCallback, deps?: React.DependencyList) {
  const didMountRef = React.useRef(false);

  return React.useLayoutEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return undefined;
    }
    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is just silly, it's a hook extension
  }, deps);
}
