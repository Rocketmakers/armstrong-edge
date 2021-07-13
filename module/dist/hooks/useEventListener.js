"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventListener = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var globals_1 = require("../utils/globals");
/**
 * Hook to add an event listener, and remove it when the component unmounts
 *
 * @param eventHandler the callback to run when the event fires
 * @param type the name of the event to listen to
 * @param element the element to add the listener to, defaults to window
 */
function useEventListener(type, eventHandler, element, options) {
    if (element === void 0) { element = globals_1.Globals.Window; }
    if (options === void 0) { options = { passive: true }; }
    React.useEffect(function () {
        if (element) {
            element.addEventListener(type, eventHandler, options);
            return function () {
                if (typeof options === 'object') {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    var once = options.once, passive = options.passive, removeOptions = tslib_1.__rest(options, ["once", "passive"]);
                    element.removeEventListener(type, eventHandler, removeOptions);
                }
                else {
                    element.removeEventListener(type, eventHandler, options);
                }
            };
        }
    }, [eventHandler]);
}
exports.useEventListener = useEventListener;
