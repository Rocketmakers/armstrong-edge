import * as React from 'react';

import { Globals } from '../utils/globals';

/** Returns whether the document matches the given media query string */
export function useMatchMedia(
  /** the media query to match on */
  query: string,
  {
    onMatchesChange,
    eventListenerOptions,
  }: {
    /** Fired when the matches change */
    onMatchesChange?: (event: MediaQueryListEvent) => void;
    /** The config for the event listener added to the MediaQueryList */
    eventListenerOptions?: boolean | AddEventListenerOptions;
  } = {}
): boolean {
  const [isMatching, setIsMatching] = React.useState(Globals.Window?.matchMedia(query).matches || false);

  const onMatchesChangeEvent = React.useCallback(
    (event: MediaQueryListEvent) => {
      setIsMatching(event.matches);
      onMatchesChange?.(event);
    },
    [onMatchesChange]
  );

  React.useEffect(() => {
    const media = Globals.Window?.matchMedia(query);

    if (!media) {
      return;
    }

    if (media.matches !== isMatching) {
      setIsMatching(media.matches);
    }

    try {
      media.addEventListener('change', onMatchesChangeEvent, eventListenerOptions);
    } catch (err) {
      try {
        // Fallback for < IOS 15 which doesnt support addEventListener
        media.addListener(onMatchesChangeEvent);
      } catch (err1) {
        // eslint-disable-next-line no-console -- Ouput error incase both methods fail
        console.error(err1);
      }
    }

    return () =>
      media.removeEventListener(
        'change',
        onMatchesChangeEvent,
        typeof eventListenerOptions === 'boolean' ? eventListenerOptions : eventListenerOptions && { capture: eventListenerOptions.capture }
      );
  }, [query, onMatchesChangeEvent]);

  return isMatching;
}
