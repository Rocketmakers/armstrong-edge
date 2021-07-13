"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersectionObserver = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var globals_1 = require("../utils/globals");
/**
 * Use an intersection observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options options for the intersection observer
 */
function useIntersectionObserver(callback, options, ref) {
    var observer = React.useRef();
    var observe = React.useCallback(function (element) {
        observer.current = new IntersectionObserver(callback, options);
        observer.current.observe(element);
    }, [callback, options]);
    var unobserve = React.useCallback(function (element) {
        var _a;
        (_a = observer.current) === null || _a === void 0 ? void 0 : _a.unobserve(element);
    }, []);
    var disconnect = React.useCallback(function () {
        var _a;
        (_a = observer.current) === null || _a === void 0 ? void 0 : _a.disconnect();
    }, []);
    React.useLayoutEffect(function () {
        if (!!ref && !!ref.current && globals_1.Globals.isBrowser && globals_1.Globals.supportsIntersectionObserver) {
            observe(ref.current);
            return function () {
                if (ref.current) {
                    unobserve(ref.current);
                }
            };
        }
    }, [ref === null || ref === void 0 ? void 0 : ref.current, observer, callback]);
    React.useEffect(function () { return function () {
        disconnect();
    }; }, []);
    return {
        observer: observer,
        unobserve: unobserve,
        disconnect: disconnect,
    };
}
exports.useIntersectionObserver = useIntersectionObserver;
