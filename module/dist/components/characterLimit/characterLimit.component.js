"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterLimit = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var form_1 = require("../../hooks/form");
var classNames_1 = require("../../utils/classNames");
var icon_1 = require("../icon");
/** Render a character limit from a bound value, showing as an error if the user  */
var CharacterLimit = function (_a) {
    var bind = _a.bind, limit = _a.limit, shouldEnforce = _a.shouldEnforce, value = _a.value, className = _a.className, exceedsIcon = _a.exceedsIcon;
    var _b = form_1.useBindingTools(bind, { value: value }), boundValue = _b[0], setBoundValue = _b[1];
    var exceeded = boundValue && boundValue.length > limit;
    React.useLayoutEffect(function () {
        if (shouldEnforce && exceeded) {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(boundValue.slice(0, limit));
        }
    }, [boundValue]);
    return (React.createElement("div", { className: classNames_1.ClassNames.concat('arm-character-limit', className), "data-exceeded": exceeded },
        React.createElement("p", null, boundValue === null || boundValue === void 0 ? void 0 :
            boundValue.length,
            "/",
            limit),
        exceedsIcon && exceeded && React.createElement(icon_1.Icon, { iconSet: exceedsIcon.iconSet, icon: exceedsIcon.icon })));
};
exports.CharacterLimit = CharacterLimit;
exports.CharacterLimit.defaultProps = {
    exceedsIcon: icon_1.IconUtils.getIconDefinition('Icomoon', 'warning'),
};
