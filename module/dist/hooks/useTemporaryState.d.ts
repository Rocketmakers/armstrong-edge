/**
 * useState but the state returns to initialValue after a given amount of time from whenever setState is called
 * @param initialValue the initial value of the state - the value gets changed back to this after the amount of time given
 * @param time the amount of time in ms to wait to return back to initialValue
 */
export declare function useTemporaryState<T>(initialValue?: T, time?: number, onReset?: () => void): [T | undefined, (newValue: T) => void, () => void];
