"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var icon_1 = require("../icon");
var iconWrapper_1 = require("../iconWrapper");
/** Render a single radio input */
exports.RadioInput = React.forwardRef(function (_a, ref) {
    var onChange = _a.onChange, name = _a.name, className = _a.className, checked = _a.checked, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, checkedIcon = _a.checkedIcon, uncheckedIcon = _a.uncheckedIcon, nativeProps = tslib_1.__rest(_a, ["onChange", "name", "className", "checked", "leftIcon", "rightIcon", "checkedIcon", "uncheckedIcon"]);
    return (React.createElement("div", { className: classNames_1.ClassNames.concat('arm-radio-input', className), "data-checked": checked, "data-has-checked-icon": !!checkedIcon },
        React.createElement("label", null,
            React.createElement("div", { className: "arm-radio-input-radio" },
                React.createElement("input", tslib_1.__assign({ className: "arm-radio-input-radio-input", ref: ref, type: "radio", checked: checked, onChange: function () { return onChange === null || onChange === void 0 ? void 0 : onChange(!checked); } }, nativeProps)),
                checkedIcon && React.createElement(icon_1.Icon, { className: "arm-radio-input-checked-icon", iconSet: checkedIcon.iconSet, icon: checkedIcon.icon }),
                uncheckedIcon && React.createElement(icon_1.Icon, { className: "arm-radio-input-unchecked-icon", iconSet: uncheckedIcon.iconSet, icon: uncheckedIcon.icon })),
            React.createElement(iconWrapper_1.IconWrapper, { leftIcon: leftIcon, rightIcon: rightIcon },
                React.createElement("p", null, name)))));
});
