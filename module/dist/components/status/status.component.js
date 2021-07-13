"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var icon_1 = require("../icon");
var spinner_1 = require("../spinner");
/** Render a status icon which can either be pending or errored */
var Status = function (_a) {
    var pending = _a.pending, error = _a.error, errorIcon = _a.errorIcon, spinnerIcon = _a.spinnerIcon;
    if (!error && !pending) {
        return null;
    }
    return (React.createElement("div", { className: "arm-status", "data-active": !!pending || !!error, "data-error": !!error && !pending, "data-pending": pending },
        error && !pending && React.createElement(icon_1.Icon, { className: "arm-status-error", iconSet: errorIcon.iconSet, icon: errorIcon.icon }),
        pending && React.createElement(spinner_1.Spinner, { className: "arm-status-spinner", fillContainer: false, icon: spinnerIcon })));
};
exports.Status = Status;
exports.Status.defaultProps = {
    errorIcon: icon_1.IconUtils.getIconDefinition('Icomoon', 'warning'),
};
