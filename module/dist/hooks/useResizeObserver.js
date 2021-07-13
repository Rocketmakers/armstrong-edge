"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResizeObserver = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("../utils");
var globals_1 = require("../utils/globals");
var useWillUnmountEffect_1 = require("./useWillUnmountEffect");
/**
 * Use an resize observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options options for the mutation observer
 *
 */
function useResizeObserver(callback, options, ref) {
    var observer = React.useRef();
    var observe = React.useCallback(function (element) {
        observer.current = new ResizeObserver(callback);
        observer.current.observe(element, options);
    }, [callback, utils_1.Objects.contentDependency(options)]);
    var unobserve = React.useCallback(function (element) {
        if (observer.current) {
            observer.current.unobserve(element);
        }
    }, []);
    var disconnect = React.useCallback(function () {
        var _a;
        (_a = observer.current) === null || _a === void 0 ? void 0 : _a.disconnect();
    }, []);
    React.useLayoutEffect(function () {
        if (!!(ref === null || ref === void 0 ? void 0 : ref.current) && globals_1.Globals.isBrowser && globals_1.Globals.supportsResizeObserver) {
            observe(ref.current);
            return function () {
                if (ref.current) {
                    unobserve(ref.current);
                }
            };
        }
    }, [observe, unobserve]);
    useWillUnmountEffect_1.useWillUnMountEffect(disconnect);
    return {
        observer: observer,
        unobserve: unobserve,
        disconnect: disconnect,
    };
}
exports.useResizeObserver = useResizeObserver;
