/**
 * @jest-environment node
 */

import { Window, Document, isBrowser } from "./globals";

describe("Global utils in SSR", () => {
  it("checks whether the code is not running in a Window with SSR", () => {
    const result = Window;
    expect(result).toBeUndefined();
  });

  it("checks whether the code is not running in a Document with SSR", () => {
    const result = Document;
    expect(result).toBeUndefined();
  });

  it("checks whether the code is not running in a browser environment with isBrowser", () => {
    const result = isBrowser;
    expect(result).toBeFalsy();
  });
});
