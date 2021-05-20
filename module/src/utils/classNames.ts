export namespace ClassUtils {
  interface ClassDictionary {
    [id: string]: boolean | undefined | null;
  }
  interface ClassArray extends Array<ClassValue> {}
  type ClassValue = string | ClassDictionary | ClassArray | undefined | null | false;

  /**
   * Concatenate classnames
   */
  export function concat(...args: ClassValue[]) {
    let classes: string[] = [];

    for (const argument of args) {
      if (!argument) {
        continue;
      }

      if (typeof argument === 'string') {
        // if string add to output
        classes.push(argument);
      } else if (Array.isArray(argument)) {
        // if array, spread into output
        classes = [...classes, concat(argument)];
      } else if (typeof argument === 'object') {
        for (const key in argument) {
          // if object,
          if (argument[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }
}
