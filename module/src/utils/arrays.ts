export namespace Arrays {
  /** Convert an array of arrays into a single array */
  export function flatten<T>(...arrays: (T[] | undefined)[]) {
    return arrays.reduce<T[]>((output, current) => (current ? [...output, ...current] : output), []);
  }
}
