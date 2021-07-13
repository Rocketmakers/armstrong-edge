"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabControl = exports.TabControlTab = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var button_1 = require("../button");
var iconWrapper_1 = require("../iconWrapper");
/** A single tab used in the TabControl component */
exports.TabControlTab = React.forwardRef(function (_a, ref) {
    var onClick = _a.onClick, isCurrent = _a.isCurrent, id = _a.id, content = _a.content, className = _a.className, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, nativeProps = tslib_1.__rest(_a, ["onClick", "isCurrent", "id", "content", "className", "leftIcon", "rightIcon"]);
    var computedContent = content !== null && content !== void 0 ? content : (!leftIcon && !rightIcon && id);
    return (React.createElement(button_1.Button, tslib_1.__assign({}, nativeProps, { className: classNames_1.ClassNames.concat('arm-tab-control-tab', className), onClick: onClick, "data-is-current": isCurrent, ref: ref, minimalStyle: true }),
        React.createElement(iconWrapper_1.IconWrapper, { leftIcon: leftIcon, rightIcon: rightIcon }, computedContent && React.createElement("p", null, content !== null && content !== void 0 ? content : (!leftIcon && !rightIcon && id)))));
}
// type assertion to ensure generic works with RefForwarded component
// DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
);
/** Render an array of tabs, which can be bound using the currentTab and onTabChange props */
exports.TabControl = React.forwardRef(function (_a, ref) {
    var tabs = _a.tabs, className = _a.className, currentTab = _a.currentTab, onTabChange = _a.onTabChange, nativeProps = tslib_1.__rest(_a, ["tabs", "className", "currentTab", "onTabChange"]);
    return (React.createElement("div", tslib_1.__assign({}, nativeProps, { className: classNames_1.ClassNames.concat('arm-tab-control', className), ref: ref }), tabs.map(function (tab) { return (React.createElement(exports.TabControlTab, tslib_1.__assign({}, tab, { key: tab.id, isCurrent: currentTab === tab.id, onClick: function () { return onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(tab.id); } }))); })));
}
// type assertion to ensure generic works with RefForwarded component
// DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
);
