"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowSize = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var globals_1 = require("../utils/globals");
var useEventListener_1 = require("./useEventListener");
/** Returns the size of the window as a piece of live state, ensuring that any calculations happening during the React lifecycle that need the window size will have it up to date */
function useWindowSize() {
    var _a = React.useState({ innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }), size = _a[0], setSize = _a[1];
    var onResize = React.useCallback(function () {
        if (globals_1.Globals.Window) {
            var _a = globals_1.Globals.Window, innerHeight_1 = _a.innerHeight, innerWidth_1 = _a.innerWidth, outerHeight_1 = _a.outerHeight, outerWidth_1 = _a.outerWidth;
            setSize({ innerHeight: innerHeight_1, innerWidth: innerWidth_1, outerHeight: outerHeight_1, outerWidth: outerWidth_1 });
        }
    }, []);
    React.useEffect(function () {
        onResize();
    }, []);
    useEventListener_1.useEventListener('resize', onResize);
    return size;
}
exports.useWindowSize = useWindowSize;
