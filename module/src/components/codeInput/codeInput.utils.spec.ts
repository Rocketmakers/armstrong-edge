import { CodeInputPartDefinition } from "./codeInput.types";
import { getLengthFromPart } from "./codeInput.utils";

/* getLengthFromPart */
describe("getLengthFromPart", () => {
  it("should return the number value as the required character length", () => {
    const part: CodeInputPartDefinition<string> = 10;
    const length = getLengthFromPart(part);

    expect(length).toBe(10);
  });

  it("should return 0 as the required character length for a string value", () => {
    const part: CodeInputPartDefinition<string> = "example";
    const length = getLengthFromPart(part);

    expect(length).toBe(0);
  });

  it("should return the length property as the required character length for an object", () => {
    const part: CodeInputPartDefinition<string> = { length: 3 };
    const length = getLengthFromPart(part);

    expect(length).toBe(3);
  });
});
