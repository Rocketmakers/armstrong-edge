"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMatchMedia = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/** Returns whether the document matches the given media query string */
function useMatchMedia(
/** the media query to match on */
query, _a) {
    var _b = _a === void 0 ? {} : _a, onMatchesChange = _b.onMatchesChange, eventListenerOptions = _b.eventListenerOptions;
    var _c = React.useState(window.matchMedia(query).matches), isMatching = _c[0], setIsMatching = _c[1];
    var onMatchesChangeEvent = React.useCallback(function (event) {
        setIsMatching(event.matches);
        onMatchesChange === null || onMatchesChange === void 0 ? void 0 : onMatchesChange(event);
    }, [onMatchesChange]);
    React.useEffect(function () {
        var media = window.matchMedia(query);
        if (media.matches !== isMatching) {
            setIsMatching(media.matches);
        }
        media.addEventListener('change', onMatchesChangeEvent, eventListenerOptions);
        return function () {
            return media.removeEventListener('change', onMatchesChangeEvent, typeof eventListenerOptions === 'boolean' ? eventListenerOptions : eventListenerOptions && { capture: eventListenerOptions.capture });
        };
    }, [query, onMatchesChangeEvent]);
    return isMatching;
}
exports.useMatchMedia = useMatchMedia;
