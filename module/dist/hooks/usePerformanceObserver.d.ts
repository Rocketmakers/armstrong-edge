/**
 * Use an performance observer to fire the passed callback - also cleans up on unmount.
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options options for the performance observer
 */
export declare function usePerformanceObserver(callback: PerformanceObserverCallback, options?: PerformanceObserverInit): void;
