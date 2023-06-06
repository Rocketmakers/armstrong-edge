import * as React from 'react';

// TODO: DELETE THIS FILE. REMOVE FROM WHEREVER THIS HOOK IS BEING IMPORTED.
// This hook is currently used in components that are due to be removed/replaced (autoComplete inputs, tagInput)
// As such, leaving this in until they're gone

/**
 * A hook wrapping up a piece of state that is optionally overriden.
 * Used to allow components to use some internal state that can be overriden by some props, I.E. an internal binder that can be made external
 */
export function useOverridableState<T>(
  initialState?: T,
  overrideValue?: T,
  overrideSetValue?: (newValue: T) => void
): [T, (newValue: T) => void] {
  const [value, setValue] = React.useState(initialState);

  const overridenValue = overrideSetValue ? overrideValue : value;
  const setOverridenValue = overrideSetValue ?? setValue;

  return [overridenValue!, setOverridenValue];
}
