"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var icon_1 = require("../icon");
/** Render a simple error with a message and an icon - mainly used for validation errors in form inputs */
exports.ErrorMessage = React.forwardRef(function (_a, ref) {
    var className = _a.className, message = _a.message, icon = _a.icon;
    return (React.createElement("div", { ref: ref, className: classNames_1.ClassNames.concat('arm-error-message', className) },
        icon && React.createElement(icon_1.Icon, { iconSet: icon.iconSet, icon: icon.icon }),
        " ",
        React.createElement("p", null, message)));
});
exports.ErrorMessage.defaultProps = {
    icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'warning'),
};
