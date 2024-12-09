import { renderHook } from "@testing-library/react";

import { useCompareValues } from "./useCompareValues";
import * as usePreviousValueModule from "./usePreviousValue";

const mockUsePreviousValue = jest.fn(() => {
  return "prev";
});

jest.mock("./usePreviousValue.ts");
(usePreviousValueModule.usePreviousValue as jest.Mock).mockImplementation(
  mockUsePreviousValue
);

describe("useCompareValues", () => {
  it("should call use previous value & return true if values do not match", () => {
    const { result } = renderHook(() => useCompareValues("next"));
    expect(result.current).toBe(true);
  });

  it("should call use previous value & return false if values do match", () => {
    const { result } = renderHook(() => useCompareValues("prev"));
    expect(result.current).toBe(false);
  });
});
