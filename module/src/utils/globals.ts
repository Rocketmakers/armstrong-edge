/** Globals wrapped up in type checks to ensure Armstrong won't break any server side rendering where using them would otherwise throw an error */
export namespace Globals {
  export const Window = typeof window === 'undefined' ? undefined : window;
  export const Document = typeof document === 'undefined' ? undefined : document;
  export const isBrowser = !!Window;
}
