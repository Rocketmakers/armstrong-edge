/**
 * Hook to add an event listener, and remove it when the component unmounts
 *
 * @param eventHandler the callback to run when the event fires
 * @param type the name of the event to listen to
 * @param element the element to add the listener to, defaults to window
 */
export declare function useEventListener(type: string, eventHandler: (e: unknown) => unknown, element?: Pick<HTMLElement, 'addEventListener' | 'removeEventListener'> | undefined, options?: boolean | AddEventListenerOptions | undefined, enabled?: boolean): void;
