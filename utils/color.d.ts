/** A 3 channel interface of numbers describing an RGB color, with an optional alpha channel */
export interface IRGBColor {
    red: number;
    green: number;
    blue: number;
    alpha?: number;
}
/** Either a hex string or a IRGBColor interface */
export type Color = string | IRGBColor;
/** Convert a hex string to an RGB object */
export declare function hexToRGB(hex: string): IRGBColor;
/** Ensure that a Color (a hex string or an RGB object) is an RGB object, converting it if not */
export declare function colorToRGB(color: Color): IRGBColor;
/** Convert an RGB string to a hex colour */
export declare function RGBToHex({ red, green, blue, alpha }: IRGBColor): string;
/** Get a colour lerped using a progress between a start and end colour */
export declare function lerpRGB(startColor: IRGBColor, endColor: IRGBColor, /** out of 100 */ progress: number): IRGBColor;
/** Get a colour lerped between multiple breakpoints */
export declare function multiLerpRGB(colors: IRGBColor[], /** out of 100 */ progress: number): IRGBColor;
/** Get a colour lerped between a start and end colour as a hex */
export declare function lerpHex(startColor: string, endColor: string, /** out of 100 */ progress: number): string;
/** Get a colour lerped between multiple breakpoints as a hex */
export declare function multiLerpHex(colors: string[], /** out of 100 */ progress: number): string;
/** Turn an rgb object into a css string, i.e. rgb(100, 100, 90) */
export declare function colorToRGBCSString(color: Color): string;
