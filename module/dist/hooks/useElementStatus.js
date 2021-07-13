"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useElementStatus = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
/**
 * Listen to the onLoad and onError events on an element
 * can only be used on certain HTML tags
 * @returns some booleans representing the element's state, and some props that need to be spread on
 */
var useElementStatus = function (
/**
 * A reference to the element you're listening to if it's an image element.
 * Is needed to check if an image is cached if it's an image element, using the complete property on the element as if it is, onLoad won't fire
 * Must be used in conjunction with the returned props
 */
ref) {
    var _a = react_1.default.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = react_1.default.useState(false), loaded = _b[0], setLoaded = _b[1];
    var _c = react_1.default.useState(false), error = _c[0], setError = _c[1];
    var onLoad = react_1.default.useCallback(function () {
        setLoaded(true);
        setLoading(false);
    }, []);
    var onError = react_1.default.useCallback(function () {
        setError(true);
        setLoading(false);
    }, []);
    react_1.default.useEffect(function () {
        var _a;
        if ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.complete) {
            setLoaded(true);
        }
        else {
            setLoading(true);
        }
    }, []);
    return {
        loading: loading,
        error: error,
        loaded: loaded,
        props: { onLoad: onLoad, onError: onError },
    };
};
exports.useElementStatus = useElementStatus;
