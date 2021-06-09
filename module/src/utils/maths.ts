export namespace Maths {
  /**
   * Perform a modulo operation that ensures that the output is always positive - javascript modulos behave unusually with negative numbers
   * see: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
   */
  export function positiveModulo(numerator: number, denominator: number) {
    return ((numerator % denominator) + denominator) % denominator;
  }

  /**
   * Get a value as a percent of another value
   */
  export function getPercent(value: number, total: number) {
    return (value / total) * 100;
  }
}
