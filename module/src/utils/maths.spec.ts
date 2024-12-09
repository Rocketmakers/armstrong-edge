import { clamp, getPercent, lerp, multiLerp, positiveModulo } from "./maths";

describe("Maths utils", () => {
  describe("clamp", () => {
    it("returns a number that is at least the minimum", () => {
      const test = -20;

      const result = clamp(test, 0, 50);

      expect(result).toBe(0);
    });

    it("returns a number that is at most the maximum", () => {
      const test = 200;

      const result = clamp(test, 0, 50);

      expect(result).toBe(50);
    });

    it("returns the number if it is in range", () => {
      const test = 30;

      const result = clamp(test, 0, 50);

      expect(result).toBe(test);
    });
  });

  describe("positiveModulo", () => {
    it("returns the positive modulo when the numerator is positive", () => {
      const result = positiveModulo(16, 10);

      expect(result).toBe(6);
    });

    it("returns the positive modulo when the numerator is negative", () => {
      const result = positiveModulo(-2, 10);

      expect(result).toBe(8);
    });
  });

  describe("getPercent", () => {
    it("returns the calculated percentage value", () => {
      const result = getPercent(40, 200);

      expect(result).toBe(20);
    });
  });

  describe("lerp", () => {
    it("returns lerp between two numbers", () => {
      const result1 = lerp(0, 500, 50);
      const result2 = lerp(0, 600, 75);

      expect(result1).toBe(250);
      expect(result2).toBe(450);
    });
  });

  describe("multiLerp", () => {
    it("returns lerp between multiple numbers assuming a smooth transition", () => {
      const result1 = multiLerp([0, 20, 10], 25);
      const result2 = multiLerp([0, 20, 10], 50);
      const result3 = multiLerp([0, 20, 10], 75);

      expect(result1).toBe(10);
      expect(result2).toBe(20);
      expect(result3).toBe(15);
    });
  });
});
