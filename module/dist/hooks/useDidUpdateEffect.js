"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDidUpdateLayoutEffect = exports.useDidUpdateEffect = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/** A useEffect which won't run after the first render, will only run once the deps start changing */
function useDidUpdateEffect(callback, deps) {
    var didMountRef = React.useRef(false);
    return React.useEffect(function () {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        return callback();
    }, deps);
}
exports.useDidUpdateEffect = useDidUpdateEffect;
/** A useLayoutEffect which won't run after the first render, will only run once the deps start changing */
function useDidUpdateLayoutEffect(callback, deps) {
    var didMountRef = React.useRef(false);
    return React.useLayoutEffect(function () {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        return callback();
    }, deps);
}
exports.useDidUpdateLayoutEffect = useDidUpdateLayoutEffect;
