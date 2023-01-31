/**
 * @jest-environment jsdom
 */

import { Window, Document, isBrowser } from "./globals";

describe("Global utils in browser", () => {
  it("checks whether the code is running in a Window", () => {
    const result = Window;
    expect(result).toBeTruthy();
  });

  it("checks whether the code is running in a Document", () => {
    const result = Document;
    expect(result).toBeTruthy();
  });

  it("checks whether the code is running in a browser environment with isBrowser", () => {
    const result = isBrowser;
    expect(result).toBeTruthy();
  });
});
