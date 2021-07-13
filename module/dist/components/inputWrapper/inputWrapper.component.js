"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputWrapper = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var autoResizer_1 = require("../autoResizer");
var icon_1 = require("../icon");
var iconWrapper_1 = require("../iconWrapper");
var statusWrapper_component_1 = require("../statusWrapper/statusWrapper.component");
var validationErrors_1 = require("../validationErrors");
/** Wrapper for individual input elements, allowing them to be styled consistently] */
exports.InputWrapper = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, leftOverlay = _a.leftOverlay, rightOverlay = _a.rightOverlay, validationMode = _a.validationMode, validationErrorMessages = _a.validationErrorMessages, errorIcon = _a.errorIcon, disabled = _a.disabled, pending = _a.pending, error = _a.error, statusPosition = _a.statusPosition, hideIconOnStatus = _a.hideIconOnStatus, above = _a.above, below = _a.below, onClick = _a.onClick, disableOnPending = _a.disableOnPending, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, nativeProps = tslib_1.__rest(_a, ["className", "children", "leftIcon", "rightIcon", "leftOverlay", "rightOverlay", "validationMode", "validationErrorMessages", "errorIcon", "disabled", "pending", "error", "statusPosition", "hideIconOnStatus", "above", "below", "onClick", "disableOnPending", "scrollValidationErrorsIntoView"]);
    var shouldShowValidationErrorsList = validationMode === 'both' || validationMode === 'message';
    var shouldShowErrorIcon = (!!(validationErrorMessages === null || validationErrorMessages === void 0 ? void 0 : validationErrorMessages.length) && (validationMode === 'both' || validationMode === 'icon')) || error;
    var showLeftIcon = statusPosition !== 'left' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);
    var showRightIcon = statusPosition !== 'right' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", tslib_1.__assign({ ref: ref, className: classNames_1.ClassNames.concat('arm-input', 'arm-input-wrapper', className), "data-disabled": disabled || (pending && disableOnPending), "data-error": error || !!(validationErrorMessages === null || validationErrorMessages === void 0 ? void 0 : validationErrorMessages.length), onClick: onClick }, nativeProps),
            above && React.createElement(autoResizer_1.AutoResizer, { className: "arm-input-wrapper-above" }, above),
            React.createElement("div", { className: "arm-input-inner" },
                React.createElement(statusWrapper_component_1.StatusWrapper, { error: error, pending: pending, statusPosition: statusPosition, errorIcon: errorIcon, validationErrorMessages: validationErrorMessages, validationMode: validationMode },
                    React.createElement(iconWrapper_1.IconWrapper, { leftIcon: showLeftIcon ? leftIcon : undefined, rightIcon: showRightIcon ? rightIcon : undefined },
                        leftOverlay && (React.createElement("div", { className: "arm-input-overlay arm-input-overlay-left" }, typeof leftOverlay === 'string' ? React.createElement("p", { className: "arm-input-overlay-text" }, leftOverlay) : leftOverlay)),
                        children,
                        rightOverlay && (React.createElement("div", { className: "arm-input-overlay arm-input-overlay-right" }, typeof rightOverlay === 'string' ? React.createElement("p", { className: "arm-input-overlay-text" }, rightOverlay) : rightOverlay))))),
            below && React.createElement(autoResizer_1.AutoResizer, { className: "arm-input-wrapper-below" }, below)),
        !!(validationErrorMessages === null || validationErrorMessages === void 0 ? void 0 : validationErrorMessages.length) && shouldShowValidationErrorsList && (React.createElement(validationErrors_1.ValidationErrors, { validationErrors: validationErrorMessages, icon: errorIcon, scrollIntoView: scrollValidationErrorsIntoView }))));
});
exports.InputWrapper.defaultProps = {
    validationMode: 'both',
    errorIcon: icon_1.IconUtils.getIconDefinition('Icomoon', 'warning'),
    statusPosition: 'right',
    hideIconOnStatus: true,
    disableOnPending: true,
};
