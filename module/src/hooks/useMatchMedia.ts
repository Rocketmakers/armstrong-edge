import * as React from 'react';

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
  const [isMatching, setIsMatching] = React.useState(window.matchMedia(query).matches);

  const onMatchesChangeEvent = React.useCallback(
    (event: MediaQueryListEvent) => {
      setIsMatching(event.matches);
      onMatchesChange?.(event);
    },
    [onMatchesChange]
  );

  React.useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== isMatching) {
      setIsMatching(media.matches);
    }

    media.addEventListener('change', onMatchesChangeEvent, eventListenerOptions);

    return () =>
      media.removeEventListener(
        'change',
        onMatchesChangeEvent,
        typeof eventListenerOptions === 'boolean' ? eventListenerOptions : eventListenerOptions && { capture: eventListenerOptions.capture }
      );
  }, [query, onMatchesChangeEvent]);

  return isMatching;
}
