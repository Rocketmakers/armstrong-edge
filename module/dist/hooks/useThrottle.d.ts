/**
 * Like a state hook, but also exports a "throttled" value which changes at regular intervals
 * @param throttleTime How often the throttled value will update
 * @param hardValue An initial value and a live value (will set both actual and throttled values if it changes).
 * @param onChange (optional) A callback function which will receive the throttled value when it changes.
 * @returns An array for deconstruction. [the actual value, the setter for the actual value, the throttled value, a reset method to return to the hard value]
 */
export declare function useThrottle<T>(throttleTime?: number, hardValue?: T | undefined, onChange?: (newValue: T | undefined) => void): [T | undefined, (newValue: T) => void, T | undefined, () => void];
