/** Returns whether the document matches the given media query string */
export declare function useMatchMedia(
/** the media query to match on */
query: string, { onMatchesChange, eventListenerOptions, }?: {
    /** Fired when the matches change */
    onMatchesChange?: (event: MediaQueryListEvent) => void;
    /** The config for the event listener added to the MediaQueryList */
    eventListenerOptions?: boolean | AddEventListenerOptions;
}): boolean;
