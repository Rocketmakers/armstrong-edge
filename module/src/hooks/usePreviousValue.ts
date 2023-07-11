import * as React from 'react';

/**
 * Will return the previous value for an incoming prop or potential dependency for comparison
 * @param value The incoming prop or potential dependency.
 * @returns The previous value before the effect cycle.
 */
export const usePreviousValue = <TValue>(value: TValue): TValue | undefined => {
  const ref = React.useRef<TValue>();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
