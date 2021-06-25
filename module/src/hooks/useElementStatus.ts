import React from 'react';

export interface IUseElementStatusReturn {
  loading: boolean;
  error: boolean;
  loaded: boolean;

  /** props that must be spread onto the element you want to listen to (must be the same element as the ref that's being passed in) */
  props: Pick<React.HTMLAttributes<Element>, 'onLoad' | 'onError'>;
}

/**
 * Listen to the onLoad and onError events on an element
 * can only be used on certain HTML tags
 * @returns some booleans representing the element's state, and some props that need to be spread on
 */
export const useElementStatus = (
  /**
   * A reference to the element you're listening to if it's an image element.
   * Is needed to check if an image is cached if it's an image element, using the complete property on the element as if it is, onLoad won't fire
   * Must be used in conjunction with the returned props
   */
  ref?: React.MutableRefObject<HTMLImageElement | undefined | null>
): IUseElementStatusReturn => {
  const [loading, setLoading] = React.useState(true);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const onLoad = React.useCallback(() => {
    setLoaded(true);
    setLoading(false);
  }, []);

  const onError = React.useCallback(() => {
    setError(true);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    if (ref?.current?.complete) {
      setLoaded(true);
    } else {
      setLoading(true);
    }
  }, []);

  return {
    loading,
    error,
    loaded,
    props: { onLoad, onError },
  };
};
