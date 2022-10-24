import * as React from "react";

/** A useEffect which won't run after the first render, will only run once the deps start changing */
export function useDidUpdateEffect(
  callback: React.EffectCallback,
  deps?: React.DependencyList
) {
  const didMountRef = React.useRef(false);

  return React.useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    return callback();
  }, deps);
}

/** A useLayoutEffect which won't run after the first render, will only run once the deps start changing */
export function useDidUpdateLayoutEffect(
  callback: React.EffectCallback,
  deps?: React.DependencyList
) {
  const didMountRef = React.useRef(false);

  return React.useLayoutEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    return callback();
  }, deps);
}
