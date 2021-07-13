"use strict";
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebug = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var useDidUpdateEffect_1 = require("./useDidUpdateEffect");
/** Fire a series of console logs alongside lifecycle events */
function useDebug(prefix) {
    console.log(prefix + "_RENDER");
    react_1.default.useEffect(function () {
        console.log(prefix + "_MOUNT");
        return function () {
            console.log(prefix + "_UNMOUNT");
        };
    }, []);
    react_1.default.useLayoutEffect(function () {
        console.log(prefix + "_LAYOUT_MOUNT");
        return function () {
            console.log(prefix + "_LAYOUT_UNMOUNT");
        };
    }, []);
    useDidUpdateEffect_1.useDidUpdateEffect(function () {
        console.log(prefix + "_UPDATE_EFFECT");
    });
    useDidUpdateEffect_1.useDidUpdateLayoutEffect(function () {
        console.log(prefix + "_UPDATE_LAYOUT_EFFECT");
    });
}
exports.useDebug = useDebug;
