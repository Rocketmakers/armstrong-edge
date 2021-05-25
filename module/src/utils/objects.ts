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

  export function isObject<TItem>(item?: TItem): boolean {
    return !!item && typeof item === 'object' && !Array.isArray(item);
  }

  export function mergeDeep<TObject extends object, TValue>(target: TObject, keyChain: Array<string | number>, value: TValue): TObject {
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
}
