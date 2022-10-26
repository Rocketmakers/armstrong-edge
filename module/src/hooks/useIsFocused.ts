import * as React from 'react';

export type FocusBlurListeners<T extends HTMLElement> = Pick<React.HTMLAttributes<T>, 'onFocus' | 'onBlur'>;
export type UseIsFocusedReturn<T extends HTMLElement> = [boolean, FocusBlurListeners<T>];

/**
 * Get, in React state, whether an element is being focused.
 * Can be used by spreading the props returned from the second element in the returned array onto the element you want to listen to
 * @param listeners Option to pass native focus and blur listeners to be called when events fire.
 */
export const useIsFocused = <T extends HTMLElement>(listeners: FocusBlurListeners<T> = {}): UseIsFocusedReturn<T> => {
  const [isFocused, setIsFocused] = React.useState(false);

  const onFocus = React.useCallback(
    (event: React.FocusEvent<T>) => {
      setIsFocused(true);
      return listeners?.onFocus?.(event);
    },
    [listeners?.onFocus]
  );

  const onBlur = React.useCallback(
    (event: React.FocusEvent<T>) => {
      setIsFocused(false);
      return listeners?.onBlur?.(event);
    },
    [listeners?.onBlur]
  );

  return [isFocused, { onFocus, onBlur }];
};
