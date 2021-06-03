export namespace Arrays {
  /** Convert an array of arrays into a single array */
  export function flatten<T>(...arrays: (T[] | undefined)[]) {
    return arrays.reduce<T[]>((output, current) => (current ? [...output, ...current] : output), []);
  }

  /** A dictionary of arrays */
  type ArrayDictionary<T, Keys extends string> = Record<Keys, T[]>;

  /** Sort an array into a dictionary of arrays keyed by a value to sort on */
  export const arrayToArrayDictionary = <T, Keys extends string = string>(array: T[], getKey: (item: T) => Keys): ArrayDictionary<T, Keys> =>
    array.reduce<ArrayDictionary<T, Keys>>((dictionary, currentValue) => {
      const key = getKey(currentValue);

      return { ...dictionary, [key]: [...(dictionary[key as any] || []), currentValue] };
    }, {} as ArrayDictionary<T, Keys>);

  interface IArrayWithKey<T, Keys extends string> {
    items: T[];
    key: Keys;
  }

  /** Sort an array into an array of objects with a key and an array of items on it */

  export const arrayToArraysByKey = <T, Keys extends string = string>(array: T[], getKey: (item: T) => Keys) => {
    const dictionary = arrayToArrayDictionary(array, getKey);
    return Object.keys(dictionary).map<IArrayWithKey<T, Keys>>((key) => ({ key: key as Keys, items: dictionary[key] }));
  };

  export function reIndex<T>(array: T[], startFrom: number): T[] {
    if (startFrom === 0) {
      return array;
    }
    return [...[...array].splice(startFrom, array.length - startFrom), ...[...array].splice(0, startFrom)];
  }

  export function range(count: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < count; i += 1) {
      array.push(i);
    }
    return array;
  }

  export namespace ArrayArrays {
    export const getArrayIndex = <T>(innerIndex: number, outerIndex: number, arrays: { items: T[] }[]) => {
      return arrays.slice(0, outerIndex).reduce((output, array) => array.items.length + output, 0) + innerIndex;
    };

    export const getAtIndex = <T>(index: number, arrays: { items: T[] }[]) => {
      let totalIndex = 0;

      for (const array of arrays) {
        const newIndex = totalIndex + array.items.length;

        if (index < newIndex) {
          return array.items[index - totalIndex];
        }

        totalIndex = newIndex;
      }
    };
  }
}
