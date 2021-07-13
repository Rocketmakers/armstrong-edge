"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var globals_1 = require("../../utils/globals");
/** Will portal its children into a given root element */
var Portal = function (_a) {
    var portalToSelector = _a.portalToSelector, children = _a.children, portalTo = _a.portalTo;
    var _b = React.useState(), selectedRootElement = _b[0], setSelectedRootElement = _b[1];
    // the root element is not always available as a result of that query selection on the initial render, so must be assigned to a piece of state
    React.useEffect(function () {
        var _a, _b;
        if (portalToSelector) {
            var element = (_a = globals_1.Globals.Document) === null || _a === void 0 ? void 0 : _a.querySelector(portalToSelector);
            setSelectedRootElement(element || undefined);
        }
        else if (portalTo) {
            setSelectedRootElement(portalTo);
        }
        else {
            setSelectedRootElement((_b = globals_1.Globals.Document) === null || _b === void 0 ? void 0 : _b.body);
        }
    }, [portalTo, portalToSelector]);
    if (!selectedRootElement) {
        return null;
    }
    return ReactDOM.createPortal(children, selectedRootElement);
};
exports.Portal = Portal;
