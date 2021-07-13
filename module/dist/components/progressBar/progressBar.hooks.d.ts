export interface IUseProgressConfig {
    /** should the progress increase by a small amount every interval */
    trickle?: boolean;
    /** the amount to increase by each interval if trickle is set to true (limited to 5% of the remaining progress) */
    trickleAmount?: number;
    /** the time in ms between each increment if trickle is set to true */
    trickleInterval?: number;
    /** the maximum value that can be reached by a trickle or increment before start() has been called */
    maximum?: number;
    /** the minimum value to set to once start has been called */
    minimum?: number;
}
export interface IUseProgressReturn {
    /** start trickling if trickle has been set to true in config */
    start: () => void;
    /** set the progress to 100 percent */
    complete: () => void;
    /** set the progress to a specific arbitrary value in percent */
    set: (newValue: number) => void;
    /** reset the value to 0 percent and stop trickling if enabled */
    reset: () => void;
    /** increase the value by an amount in percent */
    increment: (amount: number) => void;
    /** the current progress in percent */
    progress: number;
    /** has start or set been called */
    started: boolean;
}
/** Get an incrementable spoofed progress designed for use with a ProgressBar or GlobalProgressBar component to make loads appear less static */
export declare const useProgress: ({ trickle, trickleAmount, trickleInterval, maximum, minimum }?: IUseProgressConfig) => IUseProgressReturn;
