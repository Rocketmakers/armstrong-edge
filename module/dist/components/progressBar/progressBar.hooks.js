"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProgress = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var hooks_1 = require("../../hooks");
var utils_1 = require("../../utils");
/** Get an incrementable spoofed progress designed for use with a ProgressBar or GlobalProgressBar component to make loads appear less static */
var useProgress = function (_a) {
    var _b = _a === void 0 ? {} : _a, trickle = _b.trickle, trickleAmount = _b.trickleAmount, trickleInterval = _b.trickleInterval, maximum = _b.maximum, minimum = _b.minimum;
    // progress is stored both in state and in a ref so the existing state can easily be accessed inside the timeout callback (otherwise it will only have access to the state at the time the first timeout was set)
    var _c = React.useState(0), progress = _c[0], setProgressState = _c[1];
    var progressRef = React.useRef(0);
    var setProgress = React.useCallback(function (newProgress) {
        setProgressState(newProgress);
        progressRef.current = newProgress;
    }, []);
    var _d = React.useState(false), started = _d[0], setStarted = _d[1];
    var set = React.useCallback(function (newProgress) {
        setStarted(true);
        setProgress(utils_1.Maths.clamp(newProgress, 0, maximum || 95));
    }, []);
    var increment = React.useCallback(function (amount) {
        set(progressRef.current + amount);
    }, [set]);
    var onTimeout = React.useCallback(function () {
        if (trickle) {
            increment(Math.min((100 - progressRef.current) * 0.05, trickleAmount || 2));
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            setInterval();
        }
    }, [increment, trickle]);
    var _e = hooks_1.useTimeout(trickleInterval || 750, onTimeout), setInterval = _e.set, clearInterval = _e.clear;
    var completeStopStarted = React.useCallback(function () { return setStarted(false); }, []);
    var setCompleteInterval = hooks_1.useTimeout(500, completeStopStarted).set;
    var complete = React.useCallback(function () {
        setProgress(100);
        clearInterval();
        setCompleteInterval();
    }, [clearInterval]);
    var start = React.useCallback(function () {
        setStarted(true);
        set(minimum || 5);
        clearInterval();
        setInterval();
    }, [set, setInterval, clearInterval]);
    var reset = React.useCallback(function () {
        setProgress(0);
        clearInterval();
        setCompleteInterval();
    }, []);
    return { start: start, complete: complete, set: set, reset: reset, increment: increment, progress: progress, started: started };
};
exports.useProgress = useProgress;
