/** A dictionary of T */
export type Dictionary<T, Keys extends string> = Record<Keys, T>;

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

/**
 * Deep merge two objects.
 * @param target The target object to merge into
 * @param source The new source objects
 */
export function mergeDeep<TObject>(target: TObject, ...sources: Partial<TObject>[]) {
  if (!target || typeof target !== 'object') {
    return target;
  }
  const newTarget = { ...target };
  for (const source of sources) {
    if (typeof source === 'object') {
      Object.keys(source).forEach(key => {
        const targetValue = newTarget[key];
        const sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
          newTarget[key] = [...targetValue, ...sourceValue];
        } else if (typeof targetValue === 'object' && typeof sourceValue === 'object') {
          newTarget[key] = mergeDeep(targetValue, sourceValue);
        } else {
          newTarget[key] = sourceValue;
        }
      });
    }
  }

  return newTarget;
}

/**
 * Removes key/value pairs from dictionary objects where the value is null or undefined
 * @param object The object to check
 * @returns A new object with the relevant key/value pairs removed
 */
export function stripNullOrUndefined<TObject extends object | undefined>(object: TObject): TObject {
  if (!object) {
    return object;
  }
  return Object.entries(object).reduce(
    (finalObject, [key, val]) => ({ ...finalObject, ...(val !== null && val !== undefined ? { [key]: val } : {}) }),
    {} as TObject
  );
}
