"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnScrollToEnd = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/**
 * Fires a given callback when an element reaches a distance from the end defined by distanceFromEdge.
 *
 * Can be used by using the returned onScroll callback and adding that to the element you want to listen to.
 *
 * Alternatively, there's a ScrollToEndListener component which will work more reliably as it doesn't rely on a scroll event being added to an element, and instead uses an intersection observer
 *
 * @param onScrollToEnd the callback to fire when the user has scrolled to the end of the element
 * @param distanceFromEdge the distance from the edge in px to fire the callback on
 */
function useOnScrollToEnd(onScrollToEnd, distanceFromEdge) {
    if (distanceFromEdge === void 0) { distanceFromEdge = 100; }
    var _a = React.useState(false), scrolledToEnd = _a[0], setScrolledToEnd = _a[1];
    var onEndIntersecting = React.useCallback(function () {
        setScrolledToEnd(true);
        onScrollToEnd === null || onScrollToEnd === void 0 ? void 0 : onScrollToEnd();
    }, [onScrollToEnd]);
    var reset = React.useCallback(function () { return setScrolledToEnd(false); }, []);
    var onScroll = React.useCallback(function (event) {
        if (event.currentTarget.scrollTop - event.currentTarget.clientHeight > event.currentTarget.scrollHeight - distanceFromEdge) {
            if (!scrolledToEnd) {
                onEndIntersecting();
            }
        }
        else {
            reset();
        }
    }, []);
    return { scrolledToEnd: scrolledToEnd, onScroll: onScroll };
}
exports.useOnScrollToEnd = useOnScrollToEnd;
