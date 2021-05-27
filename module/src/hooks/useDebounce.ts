import * as React from 'react';

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
  }, [hardValue]);

  React.useEffect(() => {
    const throttleTimer = setTimeout(setValue, throttleTime);
    return () => clearTimeout(throttleTimer);
  }, [actualValue]);

  return [actualValue, setActualValue, throttledValue, resetToHardValue];
}
