"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useDidUpdateEffect_1 = require("./useDidUpdateEffect");
/**
 * set up a interval which is cleared automatically when the component unmounts
 * @param time the time in ms between each time the callback is fired
 * @param callback the callback to run after the given time
 */
function useInterval(callback, time) {
    var interval = React.useRef();
    var clear = React.useCallback(function () {
        clearInterval(interval.current);
    }, []);
    var set = React.useCallback(function () {
        clear();
        interval.current = setInterval(callback, time);
    }, [time, callback]);
    useDidUpdateEffect_1.useDidUpdateEffect(function () {
        if (interval.current) {
            set();
        }
    }, [callback]);
    React.useEffect(function () {
        return function () {
            clear();
        };
    }, []);
    return { set: set, clear: clear };
}
exports.useInterval = useInterval;
