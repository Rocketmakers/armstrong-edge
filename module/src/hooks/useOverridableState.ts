import * as React from 'react';

/**
 * A hook wrapping up a piece of state that is optionally overriden.
 * Used to allow components to use some internal state that can be overriden by some props, I.E. an internal binder that can be made external
 */
export function useOverridableState<T>(initialState?: T, overrideValue?: T, overrideSetValue?: (newValue: T) => void): [T, (newValue: T) => void] {
  const [value, setValue] = React.useState(initialState);

  const overridenValue = overrideSetValue ? overrideValue : value;
  const setOverridenValue = overrideSetValue ?? setValue;

  return [overridenValue!, setOverridenValue];
}
