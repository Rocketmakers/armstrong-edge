export interface IUseTimeoutReturn {
    /** Set the timeout, optionally give a callback which will override the one set at hook level */
    set: (callback?: () => void) => void;
    /** Clear the timeout before its time has finished */
    clear: () => void;
}
/**
 * set up a timeout which is cleared automatically when the component unmounts
 * @param time the time to pass before the callback is fired
 * @param callback the callback to run after the given time
 */
export declare function useTimeout(time?: number, callback?: () => void): IUseTimeoutReturn;
