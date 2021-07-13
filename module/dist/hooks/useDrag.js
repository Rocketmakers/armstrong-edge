"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDrag = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useEventListener_1 = require("./useEventListener");
function mouseEventToPosition(event) {
    return { left: event.clientX, top: event.clientY };
}
/** Track the position of the cursor after a mouse down event, and fire a callback when the mouse is released */
function useDrag(onRelease) {
    var _a = React.useState(undefined), startPosition = _a[0], setStartPosition = _a[1];
    var _b = React.useState(undefined), currentPosition = _b[0], setCurrentPosition = _b[1];
    var _c = React.useState(false), isDragging = _c[0], setIsDragging = _c[1];
    var changePosition = React.useMemo(function () {
        if (!startPosition || !currentPosition) {
            return undefined;
        }
        return {
            left: currentPosition.left - startPosition.left,
            top: currentPosition.top - startPosition.top,
        };
    }, [startPosition, currentPosition]);
    var onMouseDown = React.useCallback(function (event) {
        var position = mouseEventToPosition(event);
        setStartPosition(position);
        setCurrentPosition(position);
        setIsDragging(true);
        event.preventDefault();
    }, []);
    var onMouseUp = React.useCallback(function (event) {
        event.preventDefault();
    }, []);
    var onMouseMoveWindow = React.useCallback(function (event) {
        if (isDragging) {
            var position = mouseEventToPosition(event);
            setCurrentPosition(position);
        }
    }, [isDragging]);
    var onMouseUpWindow = React.useCallback(function () {
        if (isDragging) {
            onRelease === null || onRelease === void 0 ? void 0 : onRelease({ startPosition: startPosition, currentPosition: currentPosition, changePosition: changePosition });
            setStartPosition(undefined);
            setCurrentPosition(undefined);
            setIsDragging(false);
        }
    }, [isDragging, currentPosition, startPosition, changePosition, onRelease]);
    useEventListener_1.useEventListener('mousemove', onMouseMoveWindow);
    useEventListener_1.useEventListener('mouseup', onMouseUpWindow);
    return {
        currentPosition: currentPosition,
        startPosition: startPosition,
        changePosition: changePosition,
        isDragging: isDragging,
        props: {
            onMouseDown: onMouseDown,
            onMouseUp: onMouseUp,
        },
    };
}
exports.useDrag = useDrag;
