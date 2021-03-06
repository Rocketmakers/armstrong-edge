export namespace ClassNames {
  interface ClassNameDictionary {
    [id: string]: boolean | undefined | null;
  }
  interface ClassNameArray extends Array<ClassName> {}
  type ClassName = string | ClassNameDictionary | ClassNameArray | undefined | null | false;

  /**
   * Concatenate classnames into a single string
   */
  export function concat(...args: ClassName[]) {
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
