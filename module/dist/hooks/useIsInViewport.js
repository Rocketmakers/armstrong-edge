"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInViewport = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useIntersectionObserver_1 = require("./useIntersectionObserver");
/** Take a ref and return a piece of React state reflecting whether the referenced element is currently in the viewport or not  */
function useInViewport(ref, options) {
    if (options === void 0) { options = {}; }
    var _a = React.useState(false), isInViewport = _a[0], setIsInViewport = _a[1];
    var onIntersect = React.useCallback(function (entries, observer) {
        var _a, _b;
        var isIntersecting = !!entries.find(function (entry) { return entry.isIntersecting; });
        if (isIntersecting && !isInViewport) {
            (_a = options.onEnter) === null || _a === void 0 ? void 0 : _a.call(options, entries);
            setIsInViewport(true);
            if (options.once) {
                observer.disconnect();
            }
        }
        else if (!isIntersecting && isInViewport) {
            (_b = options.onExit) === null || _b === void 0 ? void 0 : _b.call(options, entries);
            setIsInViewport(false);
        }
    }, [options.onEnter, options.onExit, options.once]);
    var intersectionObserverOptions = React.useMemo(function () { return ({ rootMargin: options.rootMargin, threshold: options.threshold }); }, [options.rootMargin, options.threshold]);
    useIntersectionObserver_1.useIntersectionObserver(onIntersect, intersectionObserverOptions, ref);
    return isInViewport;
}
exports.useInViewport = useInViewport;
