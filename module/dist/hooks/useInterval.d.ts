export interface IUseIntervalReturn {
    /** Set the interval, optionally give a callback which will override the one set at hook level */
    set: (callback?: () => void) => void;
    /** Clear the interval before its time has finished */
    clear: () => void;
}
/**
 * set up a interval which is cleared automatically when the component unmounts
 * @param time the time in ms between each time the callback is fired
 * @param callback the callback to run after the given time
 */
export declare function useInterval(callback: () => void, time?: number): IUseIntervalReturn;
