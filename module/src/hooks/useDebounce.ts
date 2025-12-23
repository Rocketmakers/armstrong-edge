import * as React from 'react';

import { useDidUpdateEffect } from './useDidUpdateEffect';

/**
 * Like a state hook, but also exports a "throttled" value (set after x amount of inactivity through the setter method)
 * @param throttleTime (optional) How long a period of inactivity before setting the throttled value
 * @param hardValue (optional) An initial value and a live value (will set both actual and throttled values if it changes).
 * @param onChange (optional) A callback function which will receive the throttled value when it changes.
 * @returns An array for deconstruction. [the actual value, the setter for the actual value, the throttled value, a reset method to return to the hard value]
 */
export function useDebounce<T>(
  throttleTime = 500,
  hardValue?: T,
  onChange?: (newValue: T | undefined) => void
): [T | undefined, (newValue: T) => void, T | undefined, () => void] {
  const [actualValue, setActualValue] = React.useState(hardValue);
  const [throttledValue, setThrottledValue] = React.useState(hardValue);

  const setValue = React.useCallback(() => {
    setThrottledValue(actualValue);
    onChange?.(actualValue);
  }, [actualValue, setThrottledValue, onChange]);

  const resetToHardValue = React.useCallback(() => {
    setActualValue(hardValue);
    setThrottledValue(hardValue);
  }, [hardValue, setActualValue, setThrottledValue]);

  React.useEffect(() => {
    resetToHardValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- nope, legit effect trigger
  }, [hardValue]);

  React.useEffect(() => {
    const throttleTimer = setTimeout(setValue, throttleTime);
    return () => clearTimeout(throttleTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- nope, legit effect trigger
  }, [actualValue]);

  return [actualValue, setActualValue, throttledValue, resetToHardValue];
}

/**
 * An effect that runs when the dependency changes have been inactive for x milliseconds
 * @param fn A callback function to run when the dependencies changes
 * @param ms How long a period of inactivity before running the effect
 * @param deps List of dependencies to trigger rerunning the effect
 */
export function useDebounceEffect<TFunc extends (...params: unknown[]) => unknown>(
  fn: TFunc,
  ms: number,
  deps: React.DependencyList
) {
  const throttleRef = React.useRef<NodeJS.Timeout | undefined>(undefined);

  useDidUpdateEffect(() => {
    if (throttleRef.current) {
      clearTimeout(throttleRef.current);
    }
    throttleRef.current = setTimeout(() => {
      fn();
    }, ms);
  }, deps);
}
