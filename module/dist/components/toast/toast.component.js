"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastNotificationContainer = exports.ToastNotification = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../hooks");
var classNames_1 = require("../../utils/classNames");
var dates_1 = require("../../utils/dates");
var objects_1 = require("../../utils/objects");
var icon_1 = require("../icon");
var iconButton_1 = require("../iconButton");
var toast_context_1 = require("./toast.context");
/** Render a single toast notification with a title and some given information */
var ToastNotification = function (_a) {
    var onDismiss = _a.onDismiss, toast = tslib_1.__rest(_a, ["onDismiss"]);
    var autoDismissTime = toast.autoDismissTime, children = toast.children, content = toast.content, htmlProps = toast.htmlProps, timestamp = toast.timestamp, title = toast.title, type = toast.type, allowManualDismiss = toast.allowManualDismiss;
    var _b = hooks_1.useTemporaryState(false, 500, onDismiss), dismissing = _b[0], setDismissing = _b[1];
    var beginDismiss = React.useCallback(function () { return setDismissing(true); }, []);
    var _c = hooks_1.useTimeout(autoDismissTime, beginDismiss), setAutoDismissTimeout = _c.set, clearAutoDismissTimeout = _c.clear;
    React.useEffect(function () {
        setAutoDismissTimeout();
    }, []);
    var id = hooks_1.useGeneratedId('arm-tst_', htmlProps === null || htmlProps === void 0 ? void 0 : htmlProps.id);
    var contentNode = React.useMemo(function () { return (typeof content === 'function' ? content({ dismiss: beginDismiss, toast: toast }) : content); }, [content, beginDismiss, toast]);
    var timestampFormatString = toast_context_1.useToasts().config.timestampFormatString;
    var timestampString = React.useMemo(function () { return timestampFormatString && dates_1.Dates.dateToString(timestamp, timestampFormatString); }, [timestamp]);
    return (React.createElement("div", tslib_1.__assign({}, htmlProps, { className: classNames_1.ClassNames.concat('arm-toast-notification', htmlProps === null || htmlProps === void 0 ? void 0 : htmlProps.className), "data-type": type, "data-dismissing": dismissing, onMouseEnter: clearAutoDismissTimeout, onMouseLeave: function () { return setAutoDismissTimeout(); } }),
        React.createElement("div", { className: "arm-toast-notification-inner", role: "status", "aria-labelledby": id + "_title" },
            React.createElement("div", { className: "arm-toast-notification-top" },
                React.createElement("p", { className: "arm-toast-notification-title", id: id + "_title" }, title),
                allowManualDismiss && (React.createElement(iconButton_1.IconButton, { className: "arm-toast-notification-close-button", minimalStyle: true, icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'cross2'), onClick: beginDismiss }))),
            timestampString && React.createElement("p", null, timestampString),
            typeof contentNode === 'string' || typeof contentNode === 'number' ? React.createElement("p", null, contentNode) : contentNode,
            children)));
};
exports.ToastNotification = ToastNotification;
exports.ToastNotification.defaultProps = {
    allowManualDismiss: true,
};
/** A container which will render toasts passed in through props or toasts available from the ToastContext dispatched from useToastDispatch */
var ToastNotificationContainer = function (_a) {
    var _b, _c, _d, _e;
    var toasts = _a.toasts;
    var contextToasts = toast_context_1.useToasts().toasts;
    var combinedToasts = React.useMemo(function () { return tslib_1.__spreadArray(tslib_1.__spreadArray([], (contextToasts || [])), (toasts || [])); }, [contextToasts, toasts]);
    var splitToasts = React.useMemo(function () { return __1.Arrays.arrayToArrayDictionary(combinedToasts, function (toast) { return toast.position; }); }, [combinedToasts]);
    if (!combinedToasts.length) {
        return null;
    }
    return (React.createElement("div", { className: "arm-toast-notification-container" },
        React.createElement("div", { className: "arm-toast-notification-container-left" },
            React.createElement("div", { className: "arm-toast-notification-toasts arm-toast-notification-toasts-top" }, !!((_b = splitToasts['top-left']) === null || _b === void 0 ? void 0 : _b.length) &&
                splitToasts['top-left'].map(function (toast) { return React.createElement(exports.ToastNotification, tslib_1.__assign({}, toast, { key: objects_1.Objects.contentDependency(toast) })); })),
            React.createElement("div", { className: "arm-toast-notification-toasts arm-toast-notification-toasts-bottom" }, !!((_c = splitToasts['bottom-left']) === null || _c === void 0 ? void 0 : _c.length) &&
                splitToasts['bottom-left'].map(function (toast) { return React.createElement(exports.ToastNotification, tslib_1.__assign({}, toast, { key: objects_1.Objects.contentDependency(toast) })); }))),
        React.createElement("div", { className: "arm-toast-notification-container-right" },
            React.createElement("div", { className: "arm-toast-notification-toasts arm-toast-notification-toasts-top" }, !!((_d = splitToasts['top-right']) === null || _d === void 0 ? void 0 : _d.length) &&
                splitToasts['top-right'].map(function (toast) { return React.createElement(exports.ToastNotification, tslib_1.__assign({}, toast, { key: objects_1.Objects.contentDependency(toast) })); })),
            React.createElement("div", { className: "arm-toast-notification-toasts arm-toast-notification-toasts-bottom" }, !!((_e = splitToasts['bottom-right']) === null || _e === void 0 ? void 0 : _e.length) &&
                splitToasts['bottom-right'].map(function (toast) { return React.createElement(exports.ToastNotification, tslib_1.__assign({}, toast, { key: objects_1.Objects.contentDependency(toast) })); })))));
};
exports.ToastNotificationContainer = ToastNotificationContainer;
