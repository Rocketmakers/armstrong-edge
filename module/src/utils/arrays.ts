import { Dictionary } from './objects';

/** Convert an array of arrays into a single array */
export function flatten<T>(...arrays: (T[] | undefined)[]) {
  return arrays.reduce<T[]>((output, current) => (current ? [...output, ...current] : output), []);
}

/** Turn an array into a dictionary of items in that array by a given key */
export function arrayToDictionary<T, Keys extends string = string>(array: T[], getKey: keyof T | ((item: T) => Keys)) {
  return array.reduce<Dictionary<T, Keys>>((dictionary, currentValue) => {
    const key = typeof getKey === 'function' ? getKey(currentValue) : (currentValue[getKey] as unknown as Keys);

    return { ...dictionary, [key]: currentValue };
  }, {} as Dictionary<T, Keys>);
}

/** A dictionary of arrays */
type ArrayDictionary<T, Keys extends string> = Record<Keys, T[]>;

/** Sort an array into a dictionary of arrays keyed by a value to sort on */
export function arrayToArrayDictionary<T, Keys extends string = string>(
  array: T[],
  getKey: (item: T) => Keys
): ArrayDictionary<T, Keys> {
  return array.reduce<ArrayDictionary<T, Keys>>((dictionary, currentValue) => {
    const key = getKey(currentValue);

    return {
      ...dictionary,
      [key]: [...(dictionary[key as keyof typeof dictionary] || []), currentValue],
    };
  }, {} as ArrayDictionary<T, Keys>);
}

interface IArrayWithKey<T, Keys extends string> {
  items: T[];
  key: Keys;
}

/** Sort an array into an array of objects with a key and an array of items on it */
export function arrayToArraysByKey<T, Keys extends string = string>(array: T[], getKey: (item: T) => Keys) {
  const dictionary = arrayToArrayDictionary(array, getKey);
  return Object.keys(dictionary).map<IArrayWithKey<T, Keys>>(key => ({
    key: key as Keys,
    items: dictionary[key],
  }));
}

/** A variant of findIndex that returns the index of the last item in the array where the callback returns true */
export function findLastIndex<T>(array: T[], callback: (item: T) => boolean) {
  return array.reduce((output, item, index) => (callback(item) ? index : output), -1);
}
/**
 * Re-indexes an array from a specific index point.
 * - Does not mutate the passed array, returns a new one.
 * @example If `["a", "b", "c", "d", "e"]` was passed with a `startFrom` index of `2`, the result would be `["c", "d", "e", "a", "b"]`
 * @param array The array to clone and re-index.
 * @param startFrom The current index of the new first item.
 * @returns A new array, re-indexed with the item at the `startFrom` index now first.
 */
export function reIndex<T>(array: T[], startFrom: number): T[] {
  if (startFrom === 0) {
    return [...array];
  }
  return [...array.slice(startFrom), ...array.slice(0, startFrom)];
}

/**
 * A version of `map` which loops a specified number of times and returns the index as the map arg.
 * - Useful when you want to run a `map` x number of times but you don't have a specific array to loop.
 * @param count The number of times to run the mapper.
 * @param mapper A function to call x number of times (x = `count`).
 * @returns The array of newly mapped items.
 */
export function repeat<TMapped>(count: number, mapper: (index: number) => TMapped): TMapped[] {
  const array: number[] = [];
  for (let i = 0; i < count; i += 1) {
    array.push(i);
  }
  return array.map(mapper);
}

/**
 * Get the overall index of an item inside an array of arrays
 *
 * I.E. [[0,1,2], [3,4], [5,6,7]]
 */
export function getOverallIndex<T>(innerIndex: number, outerIndex: number, arrays: { items: T[] }[]) {
  return arrays.slice(0, outerIndex).reduce((output, array) => array.items.length + output, 0) + innerIndex;
}

/** Get the item inside an array of arrays at an overall index */
export function getAtOverallIndex<T>(index: number, arrays: { items: T[] }[]) {
  let totalIndex = 0;

  for (const array of arrays) {
    const newIndex = totalIndex + array.items.length;

    if (index < newIndex) {
      return array.items[index - totalIndex];
    }

    totalIndex = newIndex;
  }
  return undefined;
}

/** Creates a duplicate-free version of an array, using strict equality for comparisons */
export function uniq<T>(array: T[]): T[] {
  const result: T[] = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
