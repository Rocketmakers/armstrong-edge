"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTimeout = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/**
 * set up a timeout which is cleared automatically when the component unmounts
 * @param time the time to pass before the callback is fired
 * @param callback the callback to run after the given time
 */
function useTimeout(time, callback) {
    var timeout = React.useRef();
    var set = React.useCallback(function (overrideCallback) {
        if (overrideCallback || callback) {
            timeout.current = setTimeout(overrideCallback !== null && overrideCallback !== void 0 ? overrideCallback : callback, time);
        }
    }, [time, callback]);
    var clear = React.useCallback(function () {
        clearTimeout(timeout.current);
    }, []);
    React.useEffect(function () {
        return function () {
            clear();
        };
    }, []);
    return { set: set, clear: clear };
}
exports.useTimeout = useTimeout;
