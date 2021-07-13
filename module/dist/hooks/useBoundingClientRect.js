"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoundingClientRect = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var globals_1 = require("../utils/globals");
var useEventListener_1 = require("./useEventListener");
var useResizeObserver_1 = require("./useResizeObserver");
/**
 * Get the size of the element with the given ref - uses a resize observer, listens to scroll events, and listens to resize events
 * WARNING: positions will not update automatically unless happening at the same time as a resize, if you need to do anything fancier, you'll have to
 * use the callback which is the second item in the returned array to force a resize
 * @param ref the html element to watch
 */
function useBoundingClientRect(ref) {
    var _a;
    var _b = React.useState(((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        toJSON: function () { },
    }), rect = _b[0], setRect = _b[1];
    var setRectSize = React.useCallback(function () {
        if (ref.current) {
            var boundingClientRect = ref.current.getBoundingClientRect();
            // todo - optimise so this is only run when one of its values changes - currently unnecessary re-renders will be called
            setRect(boundingClientRect);
        }
    }, [ref.current]);
    /** Run the callback to get the element's size whenever it resizes */
    useResizeObserver_1.useResizeObserver(setRectSize, {}, ref);
    useEventListener_1.useEventListener('resize', setRectSize);
    useEventListener_1.useEventListener('scroll', setRectSize, globals_1.Globals.Window, { capture: true });
    return [rect, setRectSize];
}
exports.useBoundingClientRect = useBoundingClientRect;
