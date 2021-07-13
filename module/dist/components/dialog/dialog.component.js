"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var hooks_1 = require("../../hooks");
var classNames_1 = require("../../utils/classNames");
var icon_1 = require("../icon");
var iconButton_1 = require("../iconButton");
var modal_1 = require("../modal");
/** Extends the Modal component (see docs for modal) with some extra features and styling for simple dialog popups */
exports.Dialog = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, wrapperClassName = _a.wrapperClassName, htmlId = _a.id, title = _a.title, onOpenChange = _a.onOpenChange, closeButtonIcon = _a.closeButtonIcon, titleIcon = _a.titleIcon, modalProps = tslib_1.__rest(_a, ["children", "className", "wrapperClassName", "id", "title", "onOpenChange", "closeButtonIcon", "titleIcon"]);
    var id = hooks_1.useGeneratedId(htmlId);
    var titleId = title && id + "_label";
    var onClickClose = React.useCallback(function () {
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
    }, [onOpenChange]);
    return (React.createElement(modal_1.Modal, tslib_1.__assign({ className: classNames_1.ClassNames.concat('arm-dialog', className), wrapperClassName: classNames_1.ClassNames.concat('arm-dialog-wrapper', wrapperClassName), darkenBackground: true, id: id, "aria-labelledby": titleId, onOpenChange: onOpenChange, ref: ref }, modalProps),
        !!title || !!titleIcon ? (React.createElement("div", { className: "arm-dialog-top" },
            titleIcon && React.createElement(icon_1.Icon, { iconSet: titleIcon.iconSet, icon: titleIcon.icon }),
            title && (React.createElement("p", { className: "arm-dialog-title", id: titleId }, title)),
            React.createElement(iconButton_1.IconButton, { className: "arm-dialog-close-button", icon: closeButtonIcon, minimalStyle: true, onClick: onClickClose }))) : (React.createElement(iconButton_1.IconButton, { className: "arm-dialog-close-button", icon: closeButtonIcon, minimalStyle: true, onClick: onClickClose })),
        React.createElement("div", { className: "arm-dialog-inner" }, children)));
});
exports.Dialog.defaultProps = {
    closeButtonIcon: icon_1.IconUtils.getIconDefinition('Icomoon', 'cross2'),
};
