"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maths = void 0;
var Maths;
(function (Maths) {
    /** Get a number, clamped to a maximum and minimum */
    function clamp(input, minimum, maximum) {
        return Math.min(Math.max(input, minimum), maximum);
    }
    Maths.clamp = clamp;
    /**
     * Perform a modulo operation that ensures that the output is always positive - javascript modulos behave unusually with negative numbers
     * see: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
     */
    function positiveModulo(numerator, denominator) {
        return ((numerator % denominator) + denominator) % denominator;
    }
    Maths.positiveModulo = positiveModulo;
    /**
     * Get a value as a percent of another value
     */
    function getPercent(value, total) {
        return (value / total) * 100;
    }
    Maths.getPercent = getPercent;
    /** lerp between two numbers based on a progress */
    function lerp(start, end, /** out of 100 */ progress) {
        var clampedProgress = clamp(progress, 0, 100);
        return start + ((end - start) / 100) * clampedProgress;
    }
    Maths.lerp = lerp;
    /** lerp between multiple numbers, with equally spaced breakpoints */
    function multiLerp(breakpoints, progress) {
        var clampedProgress = clamp(progress, 0, 100);
        var breakpointSpacing = 100 / (breakpoints.length - 1);
        var previousBreakpointIndex = Math.floor(clampedProgress / breakpointSpacing);
        var nextBreakpointIndex = previousBreakpointIndex + 1;
        if (previousBreakpointIndex === breakpoints.length - 1) {
            return breakpoints[breakpoints.length - 1];
        }
        var previousBreakpoint = breakpoints[previousBreakpointIndex];
        var nextBreakpoint = breakpoints[nextBreakpointIndex];
        var previousBreakpointPercent = breakpointSpacing * previousBreakpointIndex;
        var pointProgress = (clampedProgress - previousBreakpointPercent) * (100 / breakpointSpacing);
        return lerp(previousBreakpoint, nextBreakpoint, pointProgress);
    }
    Maths.multiLerp = multiLerp;
})(Maths = exports.Maths || (exports.Maths = {}));
