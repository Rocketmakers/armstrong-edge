import * as React from 'react';

/**
 * Like a state hook, but also exports a "throttled" value which changes at regular intervals
 * @param throttleTime How often the throttled value will update
 * @param hardValue An initial value and a live value (will set both actual and throttled values if it changes).
 * @param onChange (optional) A callback function which will receive the throttled value when it changes.
 * @returns An array for deconstruction. [the actual value, the setter for the actual value, the throttled value, a reset method to return to the hard value]
 */
export function useThrottle<T>(
  throttleTime = 500,
  hardValue?: T | undefined,
  onChange?: (newValue: T | undefined) => void
): [T | undefined, (newValue: T) => void, T | undefined, () => void] {
  const [actualValue, setActualValue] = React.useState(hardValue);
  const [throttledValue, setThrottledValue] = React.useState(hardValue);

  const actualValueRef = React.useRef<T | undefined>(actualValue);
  actualValueRef.current = actualValue;
  const timeout = React.useRef<any | undefined>();

  const resetTimeout = React.useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = undefined;
    }
  }, []);

  const resetToHardValue = React.useCallback(() => {
    setActualValue(hardValue);
    setThrottledValue(hardValue);
  }, [hardValue, setActualValue, setThrottledValue]);

  React.useEffect(() => {
    resetToHardValue();
  }, [hardValue]);

  React.useEffect(() => {
    if (!timeout.current) {
      timeout.current = setTimeout(() => {
        setThrottledValue(actualValueRef.current);
        onChange?.(actualValueRef.current);
        resetTimeout();
      }, throttleTime);
    }
  }, [actualValue, throttleTime, setThrottledValue, resetTimeout]);

  React.useEffect(
    () => () => {
      resetTimeout();
    },
    []
  );

  return [actualValue, setActualValue, throttledValue, resetToHardValue];
}
