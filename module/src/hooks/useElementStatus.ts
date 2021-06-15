import React from 'react';

export interface IUseElementStatusReturn {
  loading: boolean;
  error: boolean;
  loaded: boolean;

  /** ({onLoad, onError}) props that must be spread onto the element you want to listen to (must be the same element as the ref that's being passed in) */
  props: Pick<React.HTMLAttributes<Element>, 'onLoad' | 'onError'> & { ref?: React.RefObject<HTMLElement> };
}

/**
 * Listen to the onLoad and onError events on an element
 * can only be used on certain HTML tags
 * @param checkCached
 * @returns some booleans representing the element's state, and some props that need to be spread on
 */
export const useElementStatus = (
  /** attempt to check if the element has a .complete property, used to see if there's an existing cached version of the request the element is
   * making (as in that case, the onLoad event won't fire) only relevant if listening to IMG elements, will also return a ref in the returned
   * props if this is set to true that must be added to the element
   */
  checkCached = true
): IUseElementStatusReturn => {
  const ref = React.useRef<HTMLElement>(null);

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
    if (checkCached && typeof (ref.current as HTMLImageElement)?.complete === 'boolean' && !(ref.current as HTMLImageElement)?.complete) {
      setLoaded(true);
    } else {
      setLoading(true);
    }
  }, []);

  return {
    loading,
    error,
    loaded,
    props: checkCached ? { ref, onLoad, onError } : { onLoad, onError },
  };
};
