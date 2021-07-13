export declare namespace Objects {
    /**
     * Creates a unique string based on contents of an object.
     * Can be used as a dependency for hooks which take non-memoized objects as a parameter.
     * @param object The object to create a content dependency for
     */
    function contentDependency<TObject extends object>(object?: TObject): string;
    /** Check if an object is an object and is not an array */
    function isObject<TItem>(item?: TItem): boolean;
    function mergeDeep<TObject extends object, TValue>(target: TObject, keyChain: Array<string | number>, value: TValue): TObject;
    /** A dictionary of T */
    type Dictionary<T, Keys extends string> = Record<Keys, T>;
    /** Perform an operation on the keys of an object and return an array of the results */
    const mapKeys: <T, TKey extends keyof T, TValue extends T[TKey], TReturn>(object: T, callback: (key: TKey, value: TValue, index: number) => TReturn) => TReturn[];
    /** Perform an operation on the keys of an object */
    const forEachKeys: <T, TKey extends keyof T, TValue extends T[TKey]>(object: T, callback: (key: TKey, value: TValue, index: number) => void) => void;
}
