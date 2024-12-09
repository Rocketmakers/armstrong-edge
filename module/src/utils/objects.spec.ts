import { contentDependency, mergeDeep } from "./objects";

describe("Objects utils", () => {
  describe("contentDependency", () => {
    it("generates a unique object description string for dependency tracking", () => {
      const thing = { a: "hello", b: "hiya" };

      const result = contentDependency(thing);

      expect(result).toBe('{"a":"hello","b":"hiya"}');
    });

    it("generates a unique array description string for dependency tracking", () => {
      const thing = ["b", "c", "a"];

      const result = contentDependency(thing);

      expect(result).toBe('["a","b","c"]');
    });
  });

  it("deep merges two or more objects together using mergeDeep", () => {
    const thing1 = { a: "hello", b: "hiya" };
    const thing2 = { a: "goodbye", c: { d: "hola" } };
    const thing3 = { a: "adios", c: { d: "ciao" } };

    const result = mergeDeep(thing1, thing2, thing3);

    expect(result).toEqual({
      a: "adios",
      b: "hiya",
      c: {
        d: "ciao",
      },
    });
  });
});
