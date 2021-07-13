"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var icon_1 = require("../icon");
var iconButton_1 = require("../iconButton");
var iconWrapper_1 = require("../iconWrapper");
var Tag = function (_a) {
    var content = _a.content, className = _a.className, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, children = _a.children, onRemove = _a.onRemove, nativeProps = tslib_1.__rest(_a, ["content", "className", "leftIcon", "rightIcon", "children", "onRemove"]);
    return (React.createElement("div", tslib_1.__assign({ className: classNames_1.ClassNames.concat('arm-tag', className) }, nativeProps),
        React.createElement(iconWrapper_1.IconWrapper, { leftIcon: leftIcon, rightIcon: rightIcon }, typeof children === 'string' || !children ? React.createElement("p", null, content) : children),
        onRemove && (React.createElement(iconButton_1.IconButton, { minimalStyle: true, className: "arm-tag-close", onMouseDown: function (event) { return event.stopPropagation(); }, onClick: function (event) {
                onRemove();
                event.stopPropagation();
            }, icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'cross2') }))));
};
exports.Tag = Tag;
