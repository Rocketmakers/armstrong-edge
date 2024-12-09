import { assertNever } from "./typescript";

describe("Typescript utils", () => {
  it("throws an error if assertNever is called with an argument", () => {
    const never = undefined;
    expect(() => assertNever(never)).toThrow();
  });
});
