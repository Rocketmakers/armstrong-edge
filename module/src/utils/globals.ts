/** Globals wrapped up in type checks to ensure Armstrong won't break any server side rendering where using them would otherwise throw an error */
export namespace Globals {
  export const Window = typeof window === 'undefined' ? undefined : window;
  export const Document = typeof document === 'undefined' ? undefined : document;
  export const supportsResizeObserver = !!Globals.Window?.ResizeObserver;
  export const supportsIntersectionObserver = !!Globals.Window?.IntersectionObserver;
  export const supportsMutationObserver = !!Globals.Window?.MutationObserver;
  export const supportsPerformanceObserver = !!Globals.Window?.PerformanceObserver;
  export const isBrowser = !!Window;
}
