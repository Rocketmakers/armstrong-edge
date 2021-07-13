"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var button_1 = require("../button");
var icon_component_1 = require("../icon/icon.component");
var status_1 = require("../status");
/** A button that only renders an icon without text */
var IconButton = function (_a) {
    var icon = _a.icon, pending = _a.pending, error = _a.error, errorIcon = _a.errorIcon, className = _a.className, buttonProps = tslib_1.__rest(_a, ["icon", "pending", "error", "errorIcon", "className"]);
    return (React.createElement(button_1.Button, tslib_1.__assign({}, buttonProps, { className: classNames_1.ClassNames.concat('arm-icon-button', className), statusPosition: undefined }),
        !pending && !error && React.createElement(icon_component_1.Icon, { iconSet: icon.iconSet, icon: icon.icon }),
        React.createElement(status_1.Status, { errorIcon: errorIcon, pending: pending, error: error })));
};
exports.IconButton = IconButton;
