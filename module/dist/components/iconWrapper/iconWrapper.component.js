"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconWrapper = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var icon_component_1 = require("../icon/icon.component");
var icons_utils_1 = require("../icon/icons.utils");
/** Wraps its children with optional icons on either side */
var IconWrapper = function (_a) {
    var leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, children = _a.children;
    return (React.createElement(React.Fragment, null,
        leftIcon && (icons_utils_1.IconUtils.isIconDefinition(leftIcon) ? React.createElement(icon_component_1.Icon, { iconSet: leftIcon.iconSet, icon: leftIcon.icon, className: "left-icon" }) : leftIcon),
        children,
        rightIcon &&
            (icons_utils_1.IconUtils.isIconDefinition(rightIcon) ? React.createElement(icon_component_1.Icon, { iconSet: rightIcon.iconSet, icon: rightIcon.icon, className: "right-icon" }) : rightIcon)));
};
exports.IconWrapper = IconWrapper;
