/*
 * Data utility functions
 * --------------------------------------
 * Useful functions relating to the form state data object
 */
import type { FormAction, InitialDataFunction } from "../types";
import { mergeDeepFromKeyChain } from "./keyChain";

/**
 * Detects whether the incoming initial form data is a callback or an object and casts appropriately.
 * @param initialData Either some initial form data, or a function that returns initial form data.
 * @returns true if param is a function, also casts appropriately.
 */
export function initialDataIsCallback<TData extends object>(
  initialData?: TData | InitialDataFunction<TData>
): initialData is InitialDataFunction<TData> {
  return typeof initialData === "function";
}

/**
 * The reducer for the form state object
 * @param state The current form state.
 * @param action The action to respond to.
 * @returns The updated state.
 */
export function dataReducer<TData extends object>(
  state: TData,
  action: FormAction<TData, unknown>
): TData {
  switch (action.type) {
    case "set-one":
      return (
        Array.isArray(state) || Number.isInteger(action.propertyKey)
          ? ((state as unknown[]) || []).map((_, i) =>
              i === action.propertyKey ? action.value : (state as unknown[])[i]
            )
          : { ...(state || {}), [action.propertyKey]: action.value }
      ) as TData;
    case "set-path":
      return mergeDeepFromKeyChain(state, action.keyChain, action.value);
    case "set-all":
      return (
        Array.isArray(action.data) ? [...action.data] : { ...action.data }
      ) as TData;
    default:
      return state;
  }
}

/**
 * Function to check if an object has a truthy property.
 *
 * @param {T | undefined} obj The object to check.
 * @returns {boolean} Returns true if the object has at least one truthy property; otherwise, false.
 * @template T
 */
export const hasTruthyProperty = <T>(obj?: T): boolean => {
  if (!obj) {
    return false;
  }
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (hasTruthyProperty(obj[key])) return true;
    } else if (obj[key]) {
      return true;
    }
  }
  return false;
};
