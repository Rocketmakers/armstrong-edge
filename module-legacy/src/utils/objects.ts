export namespace Objects {
  /**
   * Creates a unique string based on contents of an object.
   * Can be used as a dependency for hooks which take non-memoized objects as a parameter.
   * @param object The object to create a content dependency for
   */
  export function contentDependency<TObject extends object>(object?: TObject): string {
    if (!object) {
      return '';
    }
    if (Array.isArray(object)) {
      return JSON.stringify([...object].sort());
    }
    return JSON.stringify(
      Object.keys(object)
        .sort()
        .reduce((memo, key) => ({ ...memo, [key]: object[key] }), {})
    );
  }

  /** Check if an object is an object and is not an array */
  export function isObject<TItem>(item?: TItem): boolean {
    return !!item && typeof item === 'object' && !Array.isArray(item);
  }

  export function mergeDeepFromKeyChain<TObject extends object, TValue>(target: TObject, keyChain: Array<string | number>, value: TValue): TObject {
    const output = (Array.isArray(target) || Number.isInteger(keyChain?.[0]) ? [...((target || []) as any[])] : { ...(target || {}) }) as TObject;
    let bookmarkRef: any = output;
    for (let i = 0; i < keyChain.length; i += 1) {
      const key = keyChain[i];
      if (i === keyChain.length - 1) {
        if (Array.isArray(value)) {
          bookmarkRef[key] = [...value];
        } else if (typeof value === 'object') {
          bookmarkRef[key] = { ...value };
        } else {
          bookmarkRef[key] = value;
        }
      } else if (Array.isArray(bookmarkRef[key])) {
        bookmarkRef[key] = [...bookmarkRef[key]];
        bookmarkRef = bookmarkRef[key];
      } else if (typeof bookmarkRef[key] === 'object') {
        bookmarkRef[key] = { ...bookmarkRef[key] };
        bookmarkRef = bookmarkRef[key];
      } else if (Number.isInteger(key)) {
        bookmarkRef[key] = [...bookmarkRef[key]];
        bookmarkRef = bookmarkRef[key];
      } else {
        bookmarkRef[key] = { ...bookmarkRef[key] };
        bookmarkRef = bookmarkRef[key];
      }
    }
    return output;
  }

  /** A dictionary of T */
  export type Dictionary<T, Keys extends string> = Record<Keys, T>;

  /** Perform an operation on the keys of an object and return an array of the results */
  export const mapKeys = <T, TKey extends keyof T, TValue extends T[TKey], TReturn>(
    object: T,
    callback: (key: TKey, value: TValue, index: number) => TReturn
  ): TReturn[] => Object.keys(object).map((key, index) => callback(key as TKey, object[key], index));

  /** Perform an operation on the keys of an object */
  export const forEachKeys = <T, TKey extends keyof T, TValue extends T[TKey]>(
    object: T,
    callback: (key: TKey, value: TValue, index: number) => void
  ) => Object.keys(object).forEach((key, index) => callback(key as TKey, object[key], index));

  /**
   * Deep merge two objects.
   * @param target The target object to merge into
   * @param source The new source objects
   */
  export function mergeDeep<TObject>(target: TObject, ...sources: Partial<TObject>[]) {
    if (!isObject(target)) {
      return target;
    }
    const newTarget = { ...target };
    for (const source of sources) {
      if (isObject(source)) {
        Object.keys(source).forEach((key) => {
          const targetValue = newTarget[key];
          const sourceValue = source[key];
          if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            newTarget[key] = [...targetValue, ...sourceValue];
          } else if (isObject(targetValue) && isObject(sourceValue)) {
            newTarget[key] = mergeDeep(targetValue, sourceValue);
          } else {
            newTarget[key] = sourceValue;
          }
        });
      }
    }

    return newTarget;
  }
}
