"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGeneratedId = void 0;
var react_1 = require("react");
/** Generates a unique ID on first render using the current unix time and a randomly generated number up to 1000 - should be used for DOM elements when necessary for, for example, defining relationships between elements using aria */
function useGeneratedId(prefix, override) {
    return react_1.useMemo(function () {
        if (override) {
            return override;
        }
        var dateUnix = Date.now();
        var randomNumber = Math.floor(Math.random() * 1000);
        return "" + (prefix ? prefix + "_" : '') + dateUnix.toString().slice(7) + "_" + randomNumber;
    }, []);
}
exports.useGeneratedId = useGeneratedId;
