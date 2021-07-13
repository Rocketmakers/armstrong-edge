"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePerformanceObserver = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var globals_1 = require("../utils/globals");
/**
 * Use an performance observer to fire the passed callback - also cleans up on unmount.
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options options for the performance observer
 */
function usePerformanceObserver(callback, options) {
    var observer = React.useRef();
    var observe = React.useCallback(function () {
        observer.current = new PerformanceObserver(callback);
        observer.current.observe(options);
    }, [callback, options]);
    var disconnect = React.useCallback(function () {
        var _a;
        (_a = observer.current) === null || _a === void 0 ? void 0 : _a.disconnect();
    }, []);
    React.useLayoutEffect(function () {
        if (globals_1.Globals.isBrowser && globals_1.Globals.supportsPerformanceObserver) {
            observe();
            return function () {
                disconnect();
            };
        }
    }, [observer, callback]);
    React.useEffect(function () { return function () {
        disconnect();
    }; }, []);
}
exports.usePerformanceObserver = usePerformanceObserver;
