"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDidMountLayoutEffect = exports.useDidMountEffect = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/** A useEffect which will only run in the first effect */
function useDidMountEffect(callback) {
    return React.useEffect(callback, []);
}
exports.useDidMountEffect = useDidMountEffect;
/** A useLayoutEffect which will only run in the first effect */
function useDidMountLayoutEffect(callback) {
    return React.useLayoutEffect(callback, []);
}
exports.useDidMountLayoutEffect = useDidMountLayoutEffect;
