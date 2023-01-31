/** Get a number, clamped to a maximum and minimum */
export function clamp(input: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(input, minimum), maximum);
}

/**
 * Perform a modulo operation that ensures that the output is always positive - javascript modulos behave unusually with negative numbers
 * see: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
 */
export function positiveModulo(numerator: number, denominator: number): number {
  return ((numerator % denominator) + denominator) % denominator;
}

/**
 * Get a value as a percent of another value
 */
export function getPercent(value: number, total: number) {
  return (value / total) * 100;
}

/** lerp between two numbers based on a progress */
export function lerp(start: number, end: number, /** out of 100 */ progress: number): number {
  const clampedProgress = clamp(progress, 0, 100);

  return start + ((end - start) / 100) * clampedProgress;
}

/** lerp between multiple numbers, with equally spaced breakpoints */
export function multiLerp(breakpoints: number[], progress: number): number {
  const clampedProgress = clamp(progress, 0, 100);
  const breakpointSpacing = 100 / (breakpoints.length - 1);

  const previousBreakpointIndex = Math.floor(clampedProgress / breakpointSpacing);
  const nextBreakpointIndex = previousBreakpointIndex + 1;

  if (previousBreakpointIndex === breakpoints.length - 1) {
    return breakpoints[breakpoints.length - 1];
  }

  const previousBreakpoint = breakpoints[previousBreakpointIndex];
  const nextBreakpoint = breakpoints[nextBreakpointIndex];

  const previousBreakpointPercent = breakpointSpacing * previousBreakpointIndex;
  const pointProgress = (clampedProgress - previousBreakpointPercent) * (100 / breakpointSpacing);

  return lerp(previousBreakpoint, nextBreakpoint, pointProgress);
}
