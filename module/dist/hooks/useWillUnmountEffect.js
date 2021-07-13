"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWillUnMountLayoutEffect = exports.useWillUnMountEffect = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/** A useEffect which only runs on the cleanup of the last effect */
function useWillUnMountEffect(callback) {
    return React.useEffect(function () { return callback; }, []);
}
exports.useWillUnMountEffect = useWillUnMountEffect;
/** A useLayoutEffect which only runs on the cleanup of the last effect */
function useWillUnMountLayoutEffect(callback) {
    return React.useLayoutEffect(function () { return callback; }, []);
}
exports.useWillUnMountLayoutEffect = useWillUnMountLayoutEffect;
