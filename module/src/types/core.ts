/** Used for ID types, allows string or number */
export type ArmstrongId = NullOrUndefined<string | number>;

/** Allow a type with any key prepended with data- to allow object types to take data attributes */
export type DataAttributes = Record<`data-${string}`, string | boolean | number>;

/** Allow a type to also be null or undefined (needed for strict mode support) */
export type NullOrUndefined<T> = T | null | undefined;

/**
 * Ensures that a given `keyof` is being used on an object type.
 */
export type AllKeys<TData> = TData extends object ? keyof TData : never;

/**
 * Returns the value type for the key of a given object.
 * - NOTE: Both types are required due to TS being very strict on the key type for an object.
 * The "Inner" type shouldn't be used on its own, it's only really a casting type.
 */
type PickTypeInner<TData, K extends AllKeys<TData>> = TData extends {
  [k in K]?: unknown;
}
  ? TData[K]
  : undefined;
export type PickType<T, K extends string | number | symbol> = K extends AllKeys<T> ? PickTypeInner<T, K> : never;

/**
 * Merges object keys from a union type.
 * WARNING: This will deliberately ignore optional properties, everything will come out mandatory.
 */
export type Merge<T extends object> = {
  [k in AllKeys<T>]: PickType<T, k>;
};

/**
 * Checks a generic value and returns `never` if generic is undefined. else returns second generic value.
 */
export type NeverUndefined<TCheck, TReturn> = TCheck extends undefined ? never : TReturn;

/**
 * Used whenever a custom string is needed as part of a union
 */
export type CustomString = `custom-${string}`;

/**
 * Display type options for inputs
 */
export type DisplaySize = 'small' | 'medium' | 'large' | CustomString;

/**
 * Display mode for toast provider
 */
export type ToastDisplayMode = 'add' | 'replace';
