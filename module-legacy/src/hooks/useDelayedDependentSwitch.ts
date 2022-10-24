import * as React from 'react';

import { useDidUpdateEffect } from './useDidUpdateEffect';
import { useTemporaryState } from './useTemporaryState';

/**
 * A hook which takes a piece of boolean state and, when that is set to false, returns another piece of state which is true for a given time to act as a "closing" state
 *
 * Returns an array with two booleans, the first is the given value with it being set to false delayed for a render while settingToFalse is set to true, the second is the value for isSettingFalse which, when value is set to false, is true for the given length of time
 */
export function useDelayedDependentSwitch(value: boolean, time: number) {
  const refValue = React.useRef(value);

  const [settingToFalse, setSettingToFalse, cancelSettingToFalse] = useTemporaryState(false, time, () => {
    refValue.current = false;
  });

  useDidUpdateEffect(() => {
    refValue.current = value;

    if (value) {
      cancelSettingToFalse();
    } else {
      setSettingToFalse(true);
    }
  }, [value]);

  return [value || refValue.current, settingToFalse];
}
