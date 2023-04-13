/**
 * Makes sure an assigned variable is of type "never".
 * - Usually used at the bottom of switches to create a compilation error if not all cases are handled.
 * - Should never actually execute will throw an error if it is.
 * @param shouldBeNever The variable to check
 */
export function assertNever(shouldBeNever?: never) {
  throw new Error(`Fallen into assert never with: ${shouldBeNever ?? 'undefined'}`);
}
