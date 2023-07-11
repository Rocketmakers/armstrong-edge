import * as React from 'react';
/**
 * Like a state hook, but also exports a "throttled" value (set after x amount of inactivity through the setter method)
 * @param throttleTime (optional) How long a period of inactivity before setting the throttled value
 * @param hardValue (optional) An initial value and a live value (will set both actual and throttled values if it changes).
 * @param onChange (optional) A callback function which will receive the throttled value when it changes.
 * @returns An array for deconstruction. [the actual value, the setter for the actual value, the throttled value, a reset method to return to the hard value]
 */
export declare function useDebounce<T>(throttleTime?: number, hardValue?: T, onChange?: (newValue: T | undefined) => void): [T | undefined, (newValue: T) => void, T | undefined, () => void];
/**
 * An effect that runs when the dependency changes have been inactive for x milliseconds
 * @param fn A callback function to run when the dependencies changes
 * @param ms How long a period of inactivity before running the effect
 * @param deps List of dependencies to trigger rerunning the effect
 */
export declare function useDebounceEffect<TFunc extends (...params: unknown[]) => unknown>(fn: TFunc, ms: number, deps: React.DependencyList): void;
