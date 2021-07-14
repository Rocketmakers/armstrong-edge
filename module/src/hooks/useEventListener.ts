import * as React from 'react';

import { Globals } from '../utils/globals';

/**
 * Hook to add an event listener, and remove it when the component unmounts
 *
 * @param eventHandler the callback to run when the event fires
 * @param type the name of the event to listen to
 * @param element the element to add the listener to, defaults to window
 */

export function useEventListener(
  type: string,
  eventHandler: (e: any) => any,
  element: Pick<HTMLElement, 'addEventListener' | 'removeEventListener'> | undefined = Globals.Window,
  options: boolean | AddEventListenerOptions | undefined = { passive: true },
  enabled = true
) {
  React.useEffect(() => {
    if (element && enabled) {
      element.addEventListener(type, eventHandler, options);

      return () => {
        if (typeof options === 'object') {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { once, passive, ...removeOptions } = options;
          element.removeEventListener(type, eventHandler, removeOptions);
        } else {
          element.removeEventListener(type, eventHandler, options);
        }
      };
    }
  }, [eventHandler, element, type, enabled]);
}
