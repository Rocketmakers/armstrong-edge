/**
 * A hook which takes a piece of boolean state and, when that is set to false, returns another piece of state which is true for a given time to act as a "closing" state
 *
 * Returns an array with two booleans, the first is the given value with it being set to false delayed for a render while settingToFalse is set to true, the second is the value for isSettingFalse which, when value is set to false, is true for the given length of time
 */
export declare function useDelayedDependentSwitch(value: boolean, time: number): (boolean | undefined)[];
