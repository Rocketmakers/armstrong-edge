export declare namespace Maths {
    /** Get a number, clamped to a maximum and minimum */
    function clamp(input: number, minimum: number, maximum: number): number;
    /**
     * Perform a modulo operation that ensures that the output is always positive - javascript modulos behave unusually with negative numbers
     * see: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
     */
    function positiveModulo(numerator: number, denominator: number): number;
    /**
     * Get a value as a percent of another value
     */
    function getPercent(value: number, total: number): number;
    /** lerp between two numbers based on a progress */
    function lerp(start: number, end: number, /** out of 100 */ progress: number): number;
    /** lerp between multiple numbers, with equally spaced breakpoints */
    function multiLerp(breakpoints: number[], progress: number): number;
}
