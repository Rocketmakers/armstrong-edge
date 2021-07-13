"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Globals = void 0;
/** Globals wrapped up in type checks to ensure Armstrong won't break any server side rendering where using them would otherwise throw an error */
var Globals;
(function (Globals) {
    var _a, _b, _c, _d;
    /** The global window object, protected if in an environment that doesn't support window */
    Globals.Window = typeof window === 'undefined' ? undefined : window;
    /** The global document object, protected if in an environment that doesn't support document */
    Globals.Document = typeof document === 'undefined' ? undefined : document;
    /** Does the current environment support resize observer */
    Globals.supportsResizeObserver = !!((_a = Globals.Window) === null || _a === void 0 ? void 0 : _a.ResizeObserver);
    /** Does the current environment support intersection observer */
    Globals.supportsIntersectionObserver = !!((_b = Globals.Window) === null || _b === void 0 ? void 0 : _b.IntersectionObserver);
    /** Does the current environment support mutation observer */
    Globals.supportsMutationObserver = !!((_c = Globals.Window) === null || _c === void 0 ? void 0 : _c.MutationObserver);
    /** Does the current environment support performance observer */
    Globals.supportsPerformanceObserver = !!((_d = Globals.Window) === null || _d === void 0 ? void 0 : _d.PerformanceObserver);
    /** Based on the existence of the global window object, does it seem like this is currently in a browser environment rather than SSR */
    Globals.isBrowser = !!Globals.Window;
})(Globals = exports.Globals || (exports.Globals = {}));
