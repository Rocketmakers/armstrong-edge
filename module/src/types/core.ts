/** Used for ID types, allows string or number */
export type ArmstrongId = NullOrUndefined<string | number>;

/** allow a type with any key prepended with data- to allow object types to take data attributes */
export type DataAttributes = Record<`data-${string}`, string | boolean | number>;

/** allow a type to also be null or undefined (needed for strict mode support) */
export type NullOrUndefined<T> = T | null | undefined;
