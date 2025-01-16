import * as React from 'react';

function useIsMounted() {
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}

/** A useEffect which won't run after the first render, will only run once the deps start changing */
export function useDidUpdateEffect(callback: React.EffectCallback, deps?: React.DependencyList) {
  const isMounted = useIsMounted();
  const isInitialMount = React.useRef(true);

  React.useEffect(() => {
    let effectCleanupFunc: ReturnType<React.EffectCallback> | undefined;
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effectCleanupFunc = callback();
    }
    return () => {
      effectCleanupFunc?.();
      // eslint-disable-next-line react-hooks/exhaustive-deps -- this is intentional to support React strict mode, it needs to check whether component has unmounted on cleanup
      if (!isMounted.current) {
        isInitialMount.current = true;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- this is just silly, it's a hook extension
  }, deps);
}
