import * as React from 'react';

import { Arrays } from '../utils';

export type PageToken = string | number;

export interface IInfinitePagingResult<T> {
  data: T[];
  nextPageToken?: PageToken;
}

export type InfinitePagingKey<T> = keyof T | ((item: T) => string);

export interface IUseInfinitePagingSettings<T> {
  firstPageToken?: PageToken;
  onFetched?: (response: IInfinitePagingResult<T>) => void | Promise<void>;
  initialItems?: T[];
  pageSize?: number;
}

interface IItems<T> {
  [key: string]: T;
}

interface IUseInfinitePagingState<T> {
  items: IItems<T>;
  nextPageToken?: PageToken;
  hasFinished: boolean;
  error: any;
}

const initialState = <T>(initialItems: IItems<T>): IUseInfinitePagingState<T> => ({
  items: initialItems,
  nextPageToken: undefined,
  hasFinished: false,
  error: undefined,
});

interface IFetchAction<T> {
  type: 'fetch';
  newItems: T[];
  hasFinished: boolean;
  nextPageToken?: PageToken;
  getKey: InfinitePagingKey<T>;
}
interface IErrorAction {
  type: 'error';
  error: any;
}

interface IResetAction<T> {
  type: 'reset';
  initialItems: T[];
  getKey: InfinitePagingKey<T>;
}

interface IInsertAction<T> {
  type: 'insert';
  newItems: T[];
  getKey: InfinitePagingKey<T>;
}

interface IRemoveAction {
  type: 'remove';
  key: string | number;
}

type InfinitePagingAction<T> = IFetchAction<T> | IErrorAction | IResetAction<T> | IInsertAction<T> | IRemoveAction;

function useInfinitePagingReducer<T>(state: IUseInfinitePagingState<T>, action: InfinitePagingAction<T>): IUseInfinitePagingState<T> {
  switch (action.type) {
    case 'fetch': {
      const items = {
        ...state.items,
        ...Arrays.arrayToDictionary(action.newItems, action.getKey),
      };

      return {
        items,
        nextPageToken: action.nextPageToken,
        error: undefined,
        hasFinished: action.hasFinished,
      };
    }
    case 'reset': {
      return initialState(Arrays.arrayToDictionary(action.initialItems, action.getKey));
    }
    case 'error': {
      return {
        ...state,
        error: action.error,
      };
    }
    case 'insert': {
      const items = {
        ...state.items,
        ...Arrays.arrayToDictionary(action.newItems, action.getKey),
      };
      return {
        ...state,
        items,
      };
    }
    case 'remove': {
      const items = {
        ...state.items,
      };

      delete items[action.key];

      return {
        ...state,
        items,
      };
    }
    default: {
      return state;
    }
  }
}

/** A hook used to create an infinite paging state - it takes a fetch callback that returns some data that is added to a piece of state that's returned as on big array */
export function useInfinitePaging<T>(
  fetch: (pageToken?: PageToken) => Promise<IInfinitePagingResult<T>>,
  getKey: InfinitePagingKey<T>,
  settings: IUseInfinitePagingSettings<T> = {}
) {
  const [state, dispatch] = React.useReducer<React.Reducer<IUseInfinitePagingState<T>, InfinitePagingAction<T>>>(
    useInfinitePagingReducer,
    initialState(Arrays.arrayToDictionary<T>(settings.initialItems || [], getKey))
  );

  const [isFetching, setIsFetching] = React.useState(false);

  const fetcher = React.useCallback(
    async (fetchPageToken?: PageToken) => {
      setIsFetching(true);

      try {
        const response = await fetch(fetchPageToken);

        if (!response) {
          throw new Error('No response returned from fetch in useInfinitePaging');
        }

        const noReturnedItems = !response.data || response.data.length === 0;
        const responseSmallerThanPageSize = settings.pageSize && response.data.length < settings.pageSize;

        dispatch({
          type: 'fetch',
          getKey,
          hasFinished: noReturnedItems || responseSmallerThanPageSize || !response.nextPageToken,
          newItems: response.data,
          nextPageToken: response.nextPageToken,
        });

        settings.onFetched?.(response);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        dispatch({ type: 'error', error });
      }

      setIsFetching(false);
    },
    [settings.firstPageToken, fetch, settings.pageSize, settings.onFetched, dispatch, getKey]
  );

  const loadMore = React.useCallback(async () => {
    if (!isFetching && !state.hasFinished) {
      await fetcher(state.nextPageToken!);
    }
  }, [fetcher, isFetching, state.hasFinished, state.nextPageToken]);

  /** reload the state  */
  const reload = React.useCallback(async () => {
    dispatch({ type: 'reset', getKey, initialItems: settings.initialItems || [] });
    await fetcher(settings.firstPageToken);
  }, [fetcher, dispatch, getKey, settings.initialItems]);

  /** adds the given new items to the array state, or replaces them if items with that key are already in */

  const insert = React.useCallback(
    (...newItems: T[]) => {
      dispatch({ type: 'insert', getKey, newItems });
    },
    [dispatch, getKey]
  );

  const remove = React.useCallback(
    (key: string | number) => {
      dispatch({ type: 'remove', key });
    },
    [dispatch]
  );

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetcher(settings.firstPageToken);
  }, []);

  const returnItems = React.useMemo(() => Object.keys(state.items).map((key) => state.items[key]), [state]);

  return {
    items: returnItems,
    isFetching,
    error: state.error,
    hasFinished: state.hasFinished,
    loadMore,
    reload,
    insert,
    remove,
  };
}
