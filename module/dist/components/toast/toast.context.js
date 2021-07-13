"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToasts = exports.useDispatchToast = exports.ToastProvider = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var portal_1 = require("../portal");
var toast_component_1 = require("./toast.component");
// eslint-disable-next-line @typescript-eslint/no-empty-function
var ToastContext = React.createContext({ dismiss: undefined, dismissAll: undefined, dispatch: undefined, toasts: [], config: {} });
var useToastContext = function () { return React.useContext(ToastContext); };
var toastReducer = function (state, action) {
    switch (action.type) {
        case 'add':
            return tslib_1.__spreadArray(tslib_1.__spreadArray([], state), action.toasts);
        case 'dismiss':
            return tslib_1.__spreadArray([], state.filter(function (toast) { return toast !== action.toast; }));
        case 'dismiss-all':
            return [];
        default:
            return state;
    }
};
/** Provides the context for Armstrong toast notifications, and by default renders a ToastContainer which will display all dispatched toasts */
var ToastProvider = function (_a) {
    var children = _a.children, portalTo = _a.portalTo, portalToSelector = _a.portalToSelector, renderToastContainer = _a.renderToastContainer, config = tslib_1.__rest(_a, ["children", "portalTo", "portalToSelector", "renderToastContainer"]);
    var _b = React.useReducer(toastReducer, []), toasts = _b[0], dispatchAction = _b[1];
    /** Dispatch a new toast notification */
    var dispatch = React.useCallback(function () {
        var newToasts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newToasts[_i] = arguments[_i];
        }
        dispatchAction({ type: 'add', toasts: newToasts });
    }, [dispatchAction]);
    /** Dismiss a toast notification by index */
    var dismiss = React.useCallback(function (toast) {
        dispatchAction({ type: 'dismiss', toast: toast });
    }, [dispatchAction]);
    /** Dismiss all toast notifications */
    var dismissAll = React.useCallback(function () { return dispatchAction({ type: 'dismiss-all' }); }, [dispatchAction]);
    return (React.createElement(ToastContext.Provider, { value: { dispatch: dispatch, dismissAll: dismissAll, dismiss: dismiss, toasts: toasts, config: config } },
        children,
        renderToastContainer && (React.createElement(React.Fragment, null, portalTo || portalToSelector ? (React.createElement(portal_1.Portal, { portalTo: portalTo, portalToSelector: portalToSelector },
            React.createElement(toast_component_1.ToastNotificationContainer, null))) : (React.createElement(toast_component_1.ToastNotificationContainer, null))))));
};
exports.ToastProvider = ToastProvider;
exports.ToastProvider.defaultProps = {
    autoDismissTime: 5000,
    position: 'bottom-right',
    renderToastContainer: true,
};
/** Dispatch a toast notification into the toasts state */
function useDispatchToast() {
    var _a = useToastContext(), dismiss = _a.dismiss, dispatch = _a.dispatch, config = _a.config;
    var dispatchToasts = React.useCallback(function () {
        var toasts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            toasts[_i] = arguments[_i];
        }
        dispatch.apply(void 0, toasts.map(function (toast) {
            var _a, _b;
            var newToast = typeof toast === 'string'
                ? {
                    title: toast,
                    timestamp: new Date(),
                    autoDismissTime: config.autoDismissTime,
                    position: config.position,
                    onDismiss: function () { return dismiss(newToast); },
                }
                : tslib_1.__assign(tslib_1.__assign({ timestamp: new Date(), autoDismissTime: (_a = toast.autoDismissTime) !== null && _a !== void 0 ? _a : config.autoDismissTime, position: (_b = toast.position) !== null && _b !== void 0 ? _b : config.position }, toast), { onDismiss: function () {
                        var _a;
                        dismiss(newToast);
                        (_a = toast.onDismiss) === null || _a === void 0 ? void 0 : _a.call(toast);
                    } });
            return newToast;
        }));
    }, [config.position, config.autoDismissTime]);
    return dispatchToasts;
}
exports.useDispatchToast = useDispatchToast;
/** Get the array of currently active toast notifications */
function useToasts() {
    var _a = useToastContext(), toasts = _a.toasts, config = _a.config, dismiss = _a.dismiss, dismissAll = _a.dismissAll;
    return { toasts: toasts, config: config, dismiss: dismiss, dismissAll: dismissAll };
}
exports.useToasts = useToasts;
