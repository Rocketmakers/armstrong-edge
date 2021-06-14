import * as React from 'react';

import { useEventListener } from './useEventListener';

export type UseIsFocusedReturn = [boolean, Pick<React.HTMLAttributes<HTMLElement>, 'onFocus' | 'onBlur'>];

/**
 * Get, in React state, whether an element is being focused.
 * Can be used by spreading the props returned from the second element in the returned array onto the element you want to listen to,
 * or by passing in a ref
 */
export const useIsFocused = (ref?: React.MutableRefObject<Element | undefined | null>): UseIsFocusedReturn => {
  const [isFocused, setIsFocused] = React.useState(false);

  const onFocus = React.useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  useEventListener('focus', onFocus, ref?.current || undefined);
  useEventListener('blur', onBlur, ref?.current || undefined);

  return [isFocused, { onFocus, onBlur }];
};
