"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var icon_1 = require("../icon");
/** Renders a spinner centred in the div that's being wrapped */
var Spinner = function (_a) {
    var children = _a.children, className = _a.className, icon = _a.icon, fillContainer = _a.fillContainer, label = _a.label, HTMLProps = tslib_1.__rest(_a, ["children", "className", "icon", "fillContainer", "label"]);
    return (React.createElement("div", tslib_1.__assign({ className: classNames_1.ClassNames.concat('arm-spinner', className) }, HTMLProps, { "data-fill-container": fillContainer }),
        React.createElement("div", { className: "arm-spinner-inner" }, children || (icon && React.createElement(icon_1.Icon, { iconSet: icon.iconSet, icon: icon.icon }))),
        label && React.createElement("p", { className: "arm-spinner-label" }, label)));
};
exports.Spinner = Spinner;
exports.Spinner.defaultProps = {
    icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'spinner2'),
    fillContainer: true,
};
