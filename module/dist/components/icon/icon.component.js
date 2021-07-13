"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearIcon = exports.IcomoonIcon = exports.Icon = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
/** Render an icon using one of the supported icon sets */
var Icon = function (_a) {
    var className = _a.className, iconSet = _a.iconSet, icon = _a.icon, onClick = _a.onClick, nativeProps = tslib_1.__rest(_a, ["className", "iconSet", "icon", "onClick"]);
    return (React.createElement("div", tslib_1.__assign({ "aria-hidden": true }, nativeProps, { "data-icon-set": iconSet, "data-i": icon, className: classNames_1.ClassNames.concat('arm-icon', className), "data-clickable": !!onClick, onClick: onClick })));
};
exports.Icon = Icon;
/** Renders an Icomoon icon - requires the consuming application to have manually added the Icomoon font file */
var IcomoonIcon = function (_a) {
    var icon = _a.icon, props = tslib_1.__rest(_a, ["icon"]);
    return (React.createElement(exports.Icon, tslib_1.__assign({}, props, { iconSet: "Icomoon", icon: icon })));
};
exports.IcomoonIcon = IcomoonIcon;
/** Renders an LinearIcon icon - requires the consuming application to have manually added the LinearIcon font file */
var LinearIcon = function (_a) {
    var icon = _a.icon, props = tslib_1.__rest(_a, ["icon"]);
    return (React.createElement(exports.Icon, tslib_1.__assign({}, props, { iconSet: "LinearIcons", icon: icon })));
};
exports.LinearIcon = LinearIcon;
