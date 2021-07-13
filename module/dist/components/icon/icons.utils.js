"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconUtils = void 0;
var IconUtils;
(function (IconUtils) {
    /**
     * Takes and icon definition or some JSX and returns whether it is safe to render it as an icon.
     * Used for components with icon props to allow them to optionally render custom JSX
     * @param icon the input to check
     */
    function isIconDefinition(icon) {
        return !!icon.icon && !!icon.iconSet;
    }
    IconUtils.isIconDefinition = isIconDefinition;
    /**
     * Get an icon defintion
     * @param iconSet The set to be used (Icomoon | LinearIcon)
     * @param icon The name of the icon in the set given in iconSet
     * @returns an icon defintion, can be spread into an <Icon /> or used for icon props
     */
    function getIconDefinition(iconSet, icon) {
        return { iconSet: iconSet, icon: icon };
    }
    IconUtils.getIconDefinition = getIconDefinition;
})(IconUtils = exports.IconUtils || (exports.IconUtils = {}));
