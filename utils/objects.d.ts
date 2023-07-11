/** A dictionary of T */
export type Dictionary<T, Keys extends string> = Record<Keys, T>;
/**
 * Creates a unique string based on contents of an object.
 * Can be used as a dependency for hooks which take non-memoized objects as a parameter.
 * @param item The item to create a content dependency for
 */
export declare function contentDependency<T>(item?: T): T | string | undefined;
/**
 * Deep merge two objects.
 * @param target The target object to merge into
 * @param source The new source objects
 */
export declare function mergeDeep<TObject>(target: TObject, ...sources: Partial<TObject>[]): TObject;
/**
 * Removes key/value pairs from dictionary objects where the value is null or undefined
 * @param object The object to check
 * @returns A new object with the relevant key/value pairs removed
 */
export declare function stripNullOrUndefined<TObject extends object | undefined>(object: TObject): TObject;
