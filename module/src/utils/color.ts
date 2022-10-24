import { Maths } from './maths';

export namespace Colors {
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
  export function hexToRGB(hex: string): IRGBColor {
    // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    const parts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);

    if (parts?.length === 5) {
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

    throw new Error(`${hex} was passed to hexToRGB but it doesn't look like a valid hex color`);
  }

  /** Ensure that a Color (a hex string or an RGB object) is an RGB object, converting it if not */
  export function colorToRGB(color: Color): IRGBColor {
    switch (typeof color) {
      case 'string': {
        return hexToRGB(color);
      }
      default:
        return color;
    }
  }

  const RGBComponentToHex = (component: number) => {
    const hex = Math.round(component).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  /** Convert an RGB string to a hex colour */
  export function RGBToHex({ red, green, blue, alpha }: IRGBColor): string {
    // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    return `#${RGBComponentToHex(red)}${RGBComponentToHex(green)}${RGBComponentToHex(blue)}${
      alpha ? RGBComponentToHex(Math.round(alpha * 255)) : ''
    }`;
  }

  /** Get a colour lerped using a progress between a start and end colour */
  export function lerpRGB(startColor: IRGBColor, endColor: IRGBColor, /** out of 100 */ progress: number): IRGBColor {
    return {
      red: Math.round(Maths.lerp(startColor.red, endColor.red, progress)),
      green: Math.round(Maths.lerp(startColor.green, endColor.green, progress)),
      blue: Math.round(Maths.lerp(startColor.blue, endColor.blue, progress)),
    };
  }

  /** Get a colour lerped between multiple breakpoints */
  export function multiLerpRGB(colors: IRGBColor[], /** out of 100 */ progress: number): IRGBColor {
    return {
      red: Math.round(
        Maths.multiLerp(
          colors.map((color) => color.red),
          progress
        )
      ),
      green: Math.round(
        Maths.multiLerp(
          colors.map((color) => color.green),
          progress
        )
      ),
      blue: Math.round(
        Maths.multiLerp(
          colors.map((color) => color.blue),
          progress
        )
      ),
    };
  }

  /** Get a colour lerped between a start and end colour as a hex */
  export function lerpHex(startColor: string, endColor: string, /** out of 100 */ progress: number): string {
    const rgbStartColor = hexToRGB(startColor);
    const rgbEndColor = hexToRGB(endColor);

    const rgbLerped = lerpRGB(rgbStartColor, rgbEndColor, progress);

    return RGBToHex(rgbLerped);
  }

  /** Get a colour lerped between multiple breakpoints as a hex */
  export function multiLerpHex(colors: string[], /** out of 100 */ progress: number): string {
    const rgbLerped = multiLerpRGB(
      colors.map((color) => hexToRGB(color)),
      progress
    );

    return RGBToHex(rgbLerped);
  }

  /** Turn an rgb object into a css string, i.e. rgb(100, 100, 90) */
  export function colorToRGBCSString(color: Color) {
    const rgb = colorToRGB(color);

    if (typeof rgb.alpha === 'number') {
      return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${rgb.alpha})`;
    }

    return `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
  }
}
