import {
  colorToRGB,
  colorToRGBCSString,
  hexToRGB,
  lerpHex,
  lerpRGB,
  multiLerpHex,
  multiLerpRGB,
  RGBToHex,
} from './color';

describe('Color utils', () => {
  it('converts a hex code without alpha to RGB using hexToRGB', () => {
    const hex = '#FFFFFF';

    const result = hexToRGB(hex);

    expect(result).toEqual({
      red: 255,
      green: 255,
      blue: 255,
    });
  });

  it('converts a hex code with alpha to RGB using hexToRGB', () => {
    const hex = '#FFFFFF00';

    const result = hexToRGB(hex);

    expect(result).toEqual({
      red: 255,
      green: 255,
      blue: 255,
      alpha: 0,
    });
  });

  it('converts a hex code to RGB using colorToRGB', () => {
    const hex = '#FFFFFF';

    const result = colorToRGB(hex);

    expect(result).toEqual({
      red: 255,
      green: 255,
      blue: 255,
    });
  });

  it('passes through an RGB object unchanged using colorToRGB', () => {
    const rgb = {
      red: 12,
      green: 17,
      blue: 85,
    };

    const result = colorToRGB(rgb);

    expect(result).toEqual(rgb);
  });

  it('converts an RGB object without alpha to hex using RGBToHex', () => {
    const rgb = {
      red: 255,
      green: 255,
      blue: 255,
    };

    const result = RGBToHex(rgb);

    expect(result).toBe('#FFFFFF');
  });

  it('converts an RGB object with alpha to hex using RGBToHex', () => {
    const rgb = {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 0.01,
    };

    const result = RGBToHex(rgb);

    expect(result).toBe('#FFFFFF03');
  });

  it('gets an RGB colour lerped using a progress between a start and end colour using lerpRGB', () => {
    const startColor = { red: 0, green: 255, blue: 0 };
    const endColor = { red: 255, green: 0, blue: 0 };

    const result = lerpRGB(startColor, endColor, 50);

    expect(result).toEqual({
      red: 127,
      green: 128,
      blue: 0,
    });
  });

  it('gets an RGB colour lerped between multiple breakpoints using multiLerpRGB', () => {
    const startColor = { red: 0, green: 255, blue: 0 };
    const midColor = { red: 255, green: 0, blue: 0 };
    const endColor = { red: 0, green: 0, blue: 255 };

    const result1 = multiLerpRGB([startColor, midColor, endColor], 25);
    const result2 = multiLerpRGB([startColor, midColor, endColor], 50);
    const result3 = multiLerpRGB([startColor, midColor, endColor], 75);

    expect(result1).toEqual({
      red: 127,
      green: 128,
      blue: 0,
    });

    expect(result2).toEqual({
      red: 255,
      green: 0,
      blue: 0,
    });

    expect(result3).toEqual({
      red: 128,
      green: 0,
      blue: 127,
    });
  });

  it('gets a Hex colour lerped using a progress between a start and end colour using lerpHex', () => {
    const startColor = '#00FF00';
    const endColor = '#FF0000';

    const result = lerpHex(startColor, endColor, 50);

    expect(result).toBe('#7F8000');
  });

  it('gets a Hex colour lerped between multiple breakpoints using multiLerpHex', () => {
    const startColor = '#00FF00';
    const midColor = '#FF0000';
    const endColor = '#0000FF';

    const result1 = multiLerpHex([startColor, midColor, endColor], 25);
    const result2 = multiLerpHex([startColor, midColor, endColor], 50);
    const result3 = multiLerpHex([startColor, midColor, endColor], 75);

    expect(result1).toBe('#7F8000');

    expect(result2).toBe('#FF0000');

    expect(result3).toBe('#80007F');
  });

  it('converts an RGB object without alpha into a CSS-friendly string using colorToRGBCSString', () => {
    const rgb = {
      red: 255,
      green: 255,
      blue: 255,
    };

    const result = colorToRGBCSString(rgb);

    expect(result).toBe('rgb(255, 255, 255)');
  });

  it('converts an RGB object with alpha into a CSS-friendly string using colorToRGBCSString', () => {
    const rgb = {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 1,
    };

    const result = colorToRGBCSString(rgb);

    expect(result).toBe('rgba(255, 255, 255, 1)');
  });
});
