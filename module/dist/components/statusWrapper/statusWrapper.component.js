"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusWrapper = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var status_component_1 = require("../status/status.component");
var StatusWrapper = function (_a) {
    var statusPosition = _a.statusPosition, error = _a.error, pending = _a.pending, errorIcon = _a.errorIcon, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, children = _a.children;
    var shouldShowErrorIcon = (!!(validationErrorMessages === null || validationErrorMessages === void 0 ? void 0 : validationErrorMessages.length) && (validationMode === 'both' || validationMode === 'icon')) || error;
    return (React.createElement(React.Fragment, null,
        statusPosition === 'left' && React.createElement(status_component_1.Status, { error: shouldShowErrorIcon, pending: pending, errorIcon: errorIcon }),
        children,
        statusPosition === 'right' && React.createElement(status_component_1.Status, { error: shouldShowErrorIcon, pending: pending, errorIcon: errorIcon })));
};
exports.StatusWrapper = StatusWrapper;
exports.StatusWrapper.defaultProps = {
    statusPosition: 'right',
};
