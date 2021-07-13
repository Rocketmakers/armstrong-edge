"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typescript = void 0;
var Typescript;
(function (Typescript) {
    /**
     * Makes sure an assigned variable is of type "never".
     * - Usually used at the bottom of switches to create a compilation error if not all cases are handled.
     * - Should never actually execute will throw an error if it is.
     * @param shouldBeNever The variable to check
     */
    function assertNever(shouldBeNever) {
        throw new Error("Fallen into assert never with: " + (shouldBeNever !== null && shouldBeNever !== void 0 ? shouldBeNever : 'undefined'));
    }
    Typescript.assertNever = assertNever;
})(Typescript = exports.Typescript || (exports.Typescript = {}));
