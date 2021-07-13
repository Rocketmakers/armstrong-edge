"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasTimeElapsedSinceMount = exports.useHasTimeElapsed = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useTimeout_1 = require("./useTimeout");
/** Returns true once a given amount of time has elapsed since the returned callback has been run */
function useHasTimeElapsed(time, onTimeElapse) {
    var _a = React.useState(false), hasTimeElapsed = _a[0], setHasTimeElapsed = _a[1];
    var onTimeout = React.useCallback(function () {
        setHasTimeElapsed(true);
        onTimeElapse === null || onTimeElapse === void 0 ? void 0 : onTimeElapse();
    }, []);
    var set = useTimeout_1.useTimeout(time, onTimeout).set;
    var begin = React.useCallback(function () { return set(); }, []);
    var reset = React.useCallback(function () { return setHasTimeElapsed(false); }, []);
    return [hasTimeElapsed, begin, reset];
}
exports.useHasTimeElapsed = useHasTimeElapsed;
/** Returns true once a given amount of time has elapsed since the component mounted */
function useHasTimeElapsedSinceMount(time, onTimeElapse) {
    var _a = useHasTimeElapsed(time, onTimeElapse), hasTimeElapsed = _a[0], begin = _a[1];
    React.useEffect(function () { return begin(); }, []);
    return hasTimeElapsed;
}
exports.useHasTimeElapsedSinceMount = useHasTimeElapsedSinceMount;
