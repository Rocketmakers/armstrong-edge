import * as React from 'react';

type EqualityComparer<T> = (a: T, b: T) => boolean;

interface IArrayStatePushPullReducerAction<T> {
  type: 'push' | 'pull';
  payload: T;
}

interface IArrayStateClearReducerAction {
  type: 'clear';
}

type ArrayStateReducerAction<T> = IArrayStatePushPullReducerAction<T> | IArrayStateClearReducerAction;

const arrayStateReducer =
  <T>(equalityComparer: EqualityComparer<T>, initialValue: T[]) =>
  (state: T[], action: ArrayStateReducerAction<T>) => {
    switch (action.type) {
      case 'push':
        return [...state.filter((item) => !equalityComparer(item, action.payload)), action.payload];
      case 'pull':
        return state.filter((item) => !equalityComparer(item, action.payload));
      case 'clear':
        return initialValue;
      default:
        return state;
    }
  };

type ArrayStateReturn<T> = [
  T[],
  {
    push: (val: T) => void;
    pull: (val: T) => void;
    toggle: (val: T) => void;
    contains: (val: T) => boolean;
    clear: () => void;
  }
];

/** Store an array value in state, and access push, pull, clear methods to interact with that state - all contained within a reducer, meaning that multiple state updates can happen in a single thread without any unusual behaviors */
export const useArrayState = <T>(
  /** The initial value of the state */
  initialValue: T[],
  /** Check if a provided element is the same as one that already exists, to ensure no duplicates are added, and to ensure the correc thing is deleted */
  equalityComparer: EqualityComparer<T> = (a, b) => a === b
): ArrayStateReturn<T> => {
  const [currentValue, dispatchAction] = React.useReducer(arrayStateReducer(equalityComparer, initialValue), initialValue);

  const contains = React.useCallback((value: T) => !!currentValue.find((item) => equalityComparer(value, item)), [currentValue, equalityComparer]);

  const push = React.useCallback(
    (value: T) => {
      dispatchAction({ type: 'push', payload: value });
    },
    [currentValue, equalityComparer]
  );

  const pull = React.useCallback(
    (value: T) => {
      dispatchAction({ type: 'pull', payload: value });
    },
    [currentValue, equalityComparer]
  );

  const clear = React.useCallback(() => {
    dispatchAction({ type: 'clear' });
  }, [currentValue, equalityComparer]);

  const toggle = React.useCallback((value: T) => (contains(value) ? pull(value) : push(value)), [currentValue, equalityComparer]);

  return [currentValue, { push, pull, toggle, contains, clear }];
};

/** Store an array value of objects in a state, with a key used to compare values when removing and adding */

export const useArrayObjectState = <T, TKey extends keyof T>(initialValue: T[], key: TKey) => {
  const equalityComparer = React.useCallback((a, b) => a[key] === b[key], [key]);
  return useArrayState<T>(initialValue, equalityComparer);
};
