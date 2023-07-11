/**
 * Returns a reference to the passed in item which only updates when the *content* of the item updates rather than just the pointer reference
 * WARNING: This hook was designed for config/state objects and assumes that array/object items are serializable
 * @param item The item to pass a reference for
 * @returns A memoized version of the item passed in
 */
export declare const useContentMemo: <T>(item: T) => T;
