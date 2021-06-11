import * as React from 'react';

export type UseIsFocusedReturn = [boolean, Pick<React.HTMLAttributes<HTMLElement>, 'onFocus' | 'onBlur'>];

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
