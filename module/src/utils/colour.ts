import { Maths } from './maths';

export namespace Colours {
  /** A 3 channel interface of numbers describing an RGB colour, with an optional alpha channel */
  export interface IRGBColour {
    red: number;
    green: number;
    blue: number;
    alpha?: number;
  }

  /** Either a hex string or a IRGBColour interface */
  export type Colour = string | IRGBColour;

  /** Convert a hex string to an RGB object */
  export function hexToRGB(hex: string): IRGBColour {
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

    throw new Error(`${hex} was passed to hexToRGB but it doesn't look like a valid hex colour`);
  }

  export function colourToRGB(colour: Colour): IRGBColour {
    switch (typeof colour) {
      case 'string': {
        return hexToRGB(colour);
      }
      default:
        return colour;
    }
  }

  const RGBComponentToHex = (component: number) => {
    const hex = Math.round(component).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  export function RGBToHex({ red, green, blue, alpha }: IRGBColour): string {
    // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    return `#${RGBComponentToHex(red)}${RGBComponentToHex(green)}${RGBComponentToHex(blue)}${
      alpha ? RGBComponentToHex(Math.round(alpha * 255)) : ''
    }`;
  }

  export function lerpRGB(startColour: IRGBColour, endColour: IRGBColour, /** out of 100 */ progress: number): IRGBColour {
    return {
      red: Math.round(Maths.lerp(startColour.red, endColour.red, progress)),
      green: Math.round(Maths.lerp(startColour.green, endColour.green, progress)),
      blue: Math.round(Maths.lerp(startColour.blue, endColour.blue, progress)),
    };
  }

  export function multiLerpRGB(colours: IRGBColour[], /** out of 100 */ progress: number): IRGBColour {
    return {
      red: Math.round(
        Maths.multiLerp(
          colours.map((colour) => colour.red),
          progress
        )
      ),
      green: Math.round(
        Maths.multiLerp(
          colours.map((colour) => colour.green),
          progress
        )
      ),
      blue: Math.round(
        Maths.multiLerp(
          colours.map((colour) => colour.blue),
          progress
        )
      ),
    };
  }

  export function lerpHex(startColour: string, endColour: string, /** out of 100 */ progress: number): string {
    const rgbStartColour = hexToRGB(startColour);
    const rgbEndColour = hexToRGB(endColour);

    const rgbLerped = lerpRGB(rgbStartColour, rgbEndColour, progress);

    return RGBToHex(rgbLerped);
  }

  export function multiLerpHex(colours: string[], /** out of 100 */ progress: number): string {
    const rgbLerped = multiLerpRGB(
      colours.map((colour) => hexToRGB(colour)),
      progress
    );

    return RGBToHex(rgbLerped);
  }

  export function RGBToCSSString(colour: IRGBColour) {
    if (colour.alpha || colour.alpha === 0) {
      return `rgba(${colour.red}, ${colour.green}, ${colour.blue}, ${colour.alpha})`;
    }
    return `rgb(${colour.red}, ${colour.green}, ${colour.blue})`;
  }
}
