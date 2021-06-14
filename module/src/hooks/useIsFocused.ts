import * as React from 'react';

export type UseIsFocusedReturn = [boolean, Pick<React.HTMLAttributes<HTMLElement>, 'onFocus' | 'onBlur'>];

/** Get, in React state, whether an element is being focused, using the props returned from the second element in the returned array */
export const useIsFocused = (): UseIsFocusedReturn => {
  const [isFocused, setIsFocused] = React.useState(false);

  const onFocus = React.useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  return [isFocused, { onFocus, onBlur }];
};
