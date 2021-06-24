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
  onFetched?: (item: T[]) => void | Promise<void>;
  key: InfinitePagingKey<T>;
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
  hasData: boolean;
  error: any;
}

const initialState = <T>(initialItems: IItems<T>): IUseInfinitePagingState<T> => ({
  items: initialItems,
  nextPageToken: undefined,
  hasFinished: false,
  hasData: false,
  error: undefined,
});

export function useInfinitePaging<T>(fetch: (pageToken?: PageToken) => Promise<IInfinitePagingResult<T>>, settings: IUseInfinitePagingSettings<T>) {
  const [state, setState] = React.useState<IUseInfinitePagingState<T>>(
    initialState(Arrays.arrayToDictionary(settings.initialItems || [], settings.key))
  );
  const [isFetching, setIsFetching] = React.useState(false);

  const addItems = React.useCallback(
    (currentItems: IItems<T>, newItems: T[]): IItems<T> => ({
      ...currentItems,
      ...Arrays.arrayToDictionary(newItems, settings.key),
    }),
    [settings.key]
  );

  const fetcher = React.useCallback(
    async (currentItems: IItems<T>, fetchPageToken?: PageToken, isReloading?: boolean) => {
      const isInitial = fetchPageToken === settings.firstPageToken;
      setIsFetching(true);

      try {
        const response = await fetch(fetchPageToken);
        const noReturnedItems = !response || !response.data || response.data.length === 0;
        const responseSmallerThanPageSize = settings.pageSize && response.data.length < settings.pageSize;

        const items: IItems<T> = noReturnedItems
          ? currentItems
          : addItems(
              // eslint-disable-next-line no-nested-ternary
              isInitial ? (isReloading ? {} : Arrays.arrayToDictionary(settings.initialItems || [], settings.key)) : currentItems,
              response.data
            );

        setState({
          items,
          nextPageToken: response.nextPageToken,
          hasFinished: noReturnedItems || responseSmallerThanPageSize || !response.nextPageToken,
          hasData: true,
          error: undefined,
        });

        setIsFetching(false);

        if (settings.onFetched && response) {
          await settings.onFetched(response.data);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        setState({ ...state, error });
        setIsFetching(false);
      }
    },
    [state, settings.firstPageToken, addItems]
  );

  const loadMore = React.useCallback(async () => {
    if (isFetching || state.hasFinished) {
      return;
    }
    await fetcher(state.items, state.nextPageToken!);
  }, [fetcher, isFetching]);

  /** reload the state  */

  const reload = React.useCallback(async () => {
    setState({ ...initialState(Arrays.arrayToDictionary(settings.initialItems || [], settings.key)), items: state.items });

    await fetcher({}, settings.firstPageToken!, true);
  }, [fetcher]);

  /**
   * adds or replaces an array of new items, matched by a specified key
   *
   * @param key the key to check if the item is already in state
   * @param replacements the new items to insert into the array
   */

  const insert: (replacements: T[]) => void = React.useCallback(
    (replacements) => {
      const newState = { ...state };

      newState.items = addItems(newState.items, replacements);

      setState(newState);
    },
    [state]
  );

  const remove: <K extends keyof T>(value: T[K]) => void = React.useCallback(
    (value) => {
      const newState = { ...state };

      delete newState.items[value as any as string];

      setState(newState);
    },
    [state]
  );

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetcher({}, settings.firstPageToken);
  }, []);

  const returnItems = React.useMemo(() => Object.keys(state.items).map((key) => state.items[key]), [state]);

  return {
    items: returnItems,
    isFetching,
    fetchError: state.error,
    hasData: state.hasData,
    hasFinished: state.hasFinished,
    loadMore,
    reload,
    insert,
    remove,
  };
}
