export namespace JavaScript {
  /**
   * Check whether a variable is null or undefined and returns `true` in that case, other "falsy" values will return `false`.
   * @param variable The variable to check
   * @returns `true` if the value is null or undefined, else `false` regardless of "falsyness"
   */
  export function isNullOrUndefined(variable: any): variable is null | undefined {
    return variable === null || typeof variable === 'undefined';
  }
}
