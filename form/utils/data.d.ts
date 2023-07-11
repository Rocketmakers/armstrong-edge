import type { FormAction, InitialDataFunction } from '../types';
/**
 * Detects whether the incoming initial form data is a callback or an object and casts appropriately.
 * @param initialData Either some initial form data, or a function that returns initial form data.
 * @returns true if param is a function, also casts appropriately.
 */
export declare function initialDataIsCallback<TData extends object>(initialData?: TData | InitialDataFunction<TData>): initialData is InitialDataFunction<TData>;
/**
 * The reducer for the form state object
 * @param state The current form state.
 * @param action The action to respond to.
 * @returns The updated state.
 */
export declare function dataReducer<TData extends object>(state: TData, action: FormAction<TData, unknown>): TData;
/**
 * Function to check if an object has a truthy property.
 *
 * @param {T | undefined} obj The object to check.
 * @returns {boolean} Returns true if the object has at least one truthy property; otherwise, false.
 * @template T
 */
export declare const hasTruthyProperty: <T>(obj?: T | undefined) => boolean;
