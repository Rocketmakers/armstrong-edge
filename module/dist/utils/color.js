"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = void 0;
var maths_1 = require("./maths");
var Colors;
(function (Colors) {
    /** Convert a hex string to an RGB object */
    function hexToRGB(hex) {
        // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
        var parts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
        if ((parts === null || parts === void 0 ? void 0 : parts.length) === 5) {
            if (parts[4]) {
                return {
                    red: parseInt(parts[2], 16),
                    green: parseInt(parts[3], 16),
                    blue: parseInt(parts[4], 16),
                    alpha: parseInt(parts[1], 16) / 255,
                };
            }
            return {
                red: parseInt(parts[1], 16),
                green: parseInt(parts[2], 16),
                blue: parseInt(parts[3], 16),
            };
        }
        throw new Error(hex + " was passed to hexToRGB but it doesn't look like a valid hex color");
    }
    Colors.hexToRGB = hexToRGB;
    /** Ensure that a Color (a hex string or an RGB object) is an RGB object, converting it if not */
    function colorToRGB(color) {
        switch (typeof color) {
            case 'string': {
                return hexToRGB(color);
            }
            default:
                return color;
        }
    }
    Colors.colorToRGB = colorToRGB;
    var RGBComponentToHex = function (component) {
        var hex = Math.round(component).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    /** Convert an RGB string to a hex colour */
    function RGBToHex(_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, alpha = _a.alpha;
        // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
        return "#" + RGBComponentToHex(red) + RGBComponentToHex(green) + RGBComponentToHex(blue) + (alpha ? RGBComponentToHex(Math.round(alpha * 255)) : '');
    }
    Colors.RGBToHex = RGBToHex;
    /** Get a colour lerped using a progress between a start and end colour */
    function lerpRGB(startColor, endColor, /** out of 100 */ progress) {
        return {
            red: Math.round(maths_1.Maths.lerp(startColor.red, endColor.red, progress)),
            green: Math.round(maths_1.Maths.lerp(startColor.green, endColor.green, progress)),
            blue: Math.round(maths_1.Maths.lerp(startColor.blue, endColor.blue, progress)),
        };
    }
    Colors.lerpRGB = lerpRGB;
    /** Get a colour lerped between multiple breakpoints */
    function multiLerpRGB(colors, /** out of 100 */ progress) {
        return {
            red: Math.round(maths_1.Maths.multiLerp(colors.map(function (color) { return color.red; }), progress)),
            green: Math.round(maths_1.Maths.multiLerp(colors.map(function (color) { return color.green; }), progress)),
            blue: Math.round(maths_1.Maths.multiLerp(colors.map(function (color) { return color.blue; }), progress)),
        };
    }
    Colors.multiLerpRGB = multiLerpRGB;
    /** Get a colour lerped between a start and end colour as a hex */
    function lerpHex(startColor, endColor, /** out of 100 */ progress) {
        var rgbStartColor = hexToRGB(startColor);
        var rgbEndColor = hexToRGB(endColor);
        var rgbLerped = lerpRGB(rgbStartColor, rgbEndColor, progress);
        return RGBToHex(rgbLerped);
    }
    Colors.lerpHex = lerpHex;
    /** Get a colour lerped between multiple breakpoints as a hex */
    function multiLerpHex(colors, /** out of 100 */ progress) {
        var rgbLerped = multiLerpRGB(colors.map(function (color) { return hexToRGB(color); }), progress);
        return RGBToHex(rgbLerped);
    }
    Colors.multiLerpHex = multiLerpHex;
    /** Turn an rgb object into a css string, i.e. rgb(100, 100, 90) */
    function colorToRGBCSString(color) {
        var rgb = colorToRGB(color);
        if (typeof rgb.alpha === 'number') {
            return "rgba(" + rgb.red + ", " + rgb.green + ", " + rgb.blue + ", " + rgb.alpha + ")";
        }
        return "rgb(" + rgb.red + ", " + rgb.green + ", " + rgb.blue + ")";
    }
    Colors.colorToRGBCSString = colorToRGBCSString;
})(Colors = exports.Colors || (exports.Colors = {}));
