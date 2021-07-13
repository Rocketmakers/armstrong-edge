export declare namespace Colors {
    /** A 3 channel interface of numbers describing an RGB color, with an optional alpha channel */
    interface IRGBColor {
        red: number;
        green: number;
        blue: number;
        alpha?: number;
    }
    /** Either a hex string or a IRGBColor interface */
    type Color = string | IRGBColor;
    /** Convert a hex string to an RGB object */
    function hexToRGB(hex: string): IRGBColor;
    /** Ensure that a Color (a hex string or an RGB object) is an RGB object, converting it if not */
    function colorToRGB(color: Color): IRGBColor;
    /** Convert an RGB string to a hex colour */
    function RGBToHex({ red, green, blue, alpha }: IRGBColor): string;
    /** Get a colour lerped using a progress between a start and end colour */
    function lerpRGB(startColor: IRGBColor, endColor: IRGBColor, /** out of 100 */ progress: number): IRGBColor;
    /** Get a colour lerped between multiple breakpoints */
    function multiLerpRGB(colors: IRGBColor[], /** out of 100 */ progress: number): IRGBColor;
    /** Get a colour lerped between a start and end colour as a hex */
    function lerpHex(startColor: string, endColor: string, /** out of 100 */ progress: number): string;
    /** Get a colour lerped between multiple breakpoints as a hex */
    function multiLerpHex(colors: string[], /** out of 100 */ progress: number): string;
    /** Turn an rgb object into a css string, i.e. rgb(100, 100, 90) */
    function colorToRGBCSString(color: Color): string;
}
