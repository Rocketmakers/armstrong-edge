import * as React from 'react';

import { useTimeout } from './useTimeout';

/**
 * useState but the state returns to initialValue after a given amount of time from whenever setState is caleld
 * @param intialValue the initial value of the state - the value gets changed back to this after the amount of time given
 * @param time the amount of time in ms to wait to return back to initialValue
 */

export function useTemporaryState<T>(intialValue?: T, time = 500): [T | undefined, (newValue: T) => void] {
  const [value, setValue] = React.useState(intialValue);

  const onTimeout = React.useCallback(() => setValue(intialValue), []);

  const { set: setTimeout } = useTimeout(time, onTimeout);

  const set = React.useCallback(
    (newValue: T) => {
      setValue(newValue);
      setTimeout();
    },
    [setTimeout]
  );

  return [value, set];
}
