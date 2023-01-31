/** Globals wrapped up in type checks to ensure Armstrong won't break any server side rendering where using them would otherwise throw an error */

/** The global window object, protected if in an environment that doesn't support window */
  export const Window = typeof window === 'undefined' ? undefined : window;

  /** The global document object, protected if in an environment that doesn't support document */
  export const Document = typeof document === 'undefined' ? undefined : document;

  /** Does the current environment support resize observer */
  export const supportsResizeObserver = !!Window?.ResizeObserver;

  /** Does the current environment support intersection observer */
  export const supportsIntersectionObserver = !!Window?.IntersectionObserver;

  /** Does the current environment support mutation observer */
  export const supportsMutationObserver = !!Window?.MutationObserver;

  /** Does the current environment support performance observer */
  export const supportsPerformanceObserver = !!Window?.PerformanceObserver;

  /** Based on the existence of the global window object, does it seem like this is currently in a browser environment rather than SSR */
  export const isBrowser = !!Window;
