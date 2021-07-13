/** Globals wrapped up in type checks to ensure Armstrong won't break any server side rendering where using them would otherwise throw an error */
export declare namespace Globals {
    /** The global window object, protected if in an environment that doesn't support window */
    const Window: (Window & typeof globalThis) | undefined;
    /** The global document object, protected if in an environment that doesn't support document */
    const Document: Document | undefined;
    /** Does the current environment support resize observer */
    const supportsResizeObserver: boolean;
    /** Does the current environment support intersection observer */
    const supportsIntersectionObserver: boolean;
    /** Does the current environment support mutation observer */
    const supportsMutationObserver: boolean;
    /** Does the current environment support performance observer */
    const supportsPerformanceObserver: boolean;
    /** Based on the existence of the global window object, does it seem like this is currently in a browser environment rather than SSR */
    const isBrowser: boolean;
}
