import { usePreviousValue } from "./usePreviousValue";

/**
 * Compares an incoming prop or potential dependency to it's value on the previous render
 * - Useful for forming an effect trigger in the world of exhaustive dependencies
 * @param value The incoming prop or potential dependency
 * @returns `true` if the value has changed since the previous render, else `false`.
 */
export const useCompareValues = <TValue>(value: TValue): boolean => {
  const prevVal = usePreviousValue(value);
  return prevVal !== value;
};
