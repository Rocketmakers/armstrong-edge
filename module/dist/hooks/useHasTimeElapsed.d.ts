/** Returns true once a given amount of time has elapsed since the returned callback has been run */
export declare function useHasTimeElapsed(time: number, onTimeElapse?: () => void): [boolean, () => void, () => void];
/** Returns true once a given amount of time has elapsed since the component mounted */
export declare function useHasTimeElapsedSinceMount(time: number, onTimeElapse?: () => void): boolean;
