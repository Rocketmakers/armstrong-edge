"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var icon_1 = require("../icon");
var iconWrapper_1 = require("../iconWrapper");
var statusWrapper_component_1 = require("../statusWrapper/statusWrapper.component");
var validationErrors_1 = require("../validationErrors");
/** Renders an HTML button element with some useful additions */
exports.Button = React.forwardRef(function (_a, ref) {
    var className = _a.className, validationErrorMessages = _a.validationErrorMessages, errorIcon = _a.errorIcon, pending = _a.pending, disabled = _a.disabled, error = _a.error, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, children = _a.children, minimalStyle = _a.minimalStyle, statusPosition = _a.statusPosition, hideIconOnStatus = _a.hideIconOnStatus, nativeProps = tslib_1.__rest(_a, ["className", "validationErrorMessages", "errorIcon", "pending", "disabled", "error", "leftIcon", "rightIcon", "children", "minimalStyle", "statusPosition", "hideIconOnStatus"]);
    var shouldShowErrorIcon = !!(validationErrorMessages === null || validationErrorMessages === void 0 ? void 0 : validationErrorMessages.length) || error;
    var showLeftIcon = statusPosition !== 'left' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);
    var showRightIcon = statusPosition !== 'right' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", tslib_1.__assign({}, nativeProps, { className: classNames_1.ClassNames.concat('arm-button', className, { 'arm-button-minimal': minimalStyle }), "data-pending": pending, "data-disabled": disabled || pending, "data-error": shouldShowErrorIcon, disabled: disabled || pending, ref: ref, tabIndex: disabled ? -1 : undefined }),
            React.createElement(iconWrapper_1.IconWrapper, { leftIcon: showLeftIcon ? leftIcon : undefined, rightIcon: showRightIcon ? rightIcon : undefined },
                React.createElement(statusWrapper_component_1.StatusWrapper, { pending: pending, errorIcon: errorIcon, statusPosition: statusPosition, error: error, validationErrorMessages: validationErrorMessages }, typeof children === 'string' || typeof children === 'number' ? React.createElement("p", null, children) : children))),
        !!(validationErrorMessages === null || validationErrorMessages === void 0 ? void 0 : validationErrorMessages.length) && React.createElement(validationErrors_1.ValidationErrors, { validationErrors: validationErrorMessages, icon: errorIcon })));
});
exports.Button.defaultProps = {
    errorIcon: icon_1.IconUtils.getIconDefinition('Icomoon', 'warning'),
    statusPosition: 'right',
    hideIconOnStatus: true,
};
