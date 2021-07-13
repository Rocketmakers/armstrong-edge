export declare type PageToken = string | number;
export interface IInfinitePagingResult<T> {
    data: T[];
    nextPageToken?: PageToken;
}
export declare type InfinitePagingKey<T> = keyof T | ((item: T) => string);
export interface IUseInfinitePagingSettings<T> {
    firstPageToken?: PageToken;
    onFetched?: (response: IInfinitePagingResult<T>) => void | Promise<void>;
    initialItems?: T[];
    pageSize?: number;
}
/** A hook used to create an infinite paging state - it takes a fetch callback that returns some data that is added to a piece of state that's returned as on big array */
export declare function useInfinitePaging<T>(fetch: (pageToken?: PageToken) => Promise<IInfinitePagingResult<T>>, getKey: InfinitePagingKey<T>, settings?: IUseInfinitePagingSettings<T>): {
    items: T[];
    isFetching: boolean;
    error: any;
    hasFinished: boolean;
    loadMore: () => Promise<void>;
    reload: () => Promise<void>;
    insert: (...newItems: T[]) => void;
    remove: (key: string | number) => void;
};
