import { renderHook } from "@testing-library/react";

import type { IBindingProps } from "../types";
import { useMyValidationErrorMessages } from "./useMyValidationErrorMessages";

describe("useMyValidationErrorMessages", () => {
  const bindingPropsMock: IBindingProps<string> = {
    value: "mock value",
    setValue: jest.fn(),
    dispatch: jest.fn(),
    keyChain: ["mock", "key", "chain"],
    myValidationErrors: [
      { key: "test.key", message: "bind error 1" },
      { key: "test.key.2", message: "bind error 2" },
    ],
    initialValue: "mock initial value",
    addValidationError: jest.fn(),
    clearClientValidationErrors: jest.fn(),
    clientValidationDispatcher: jest.fn(),
    parseValidationSchema: jest.fn(),
    isTouched: false,
    myTouchedState: [],
    setTouched: jest.fn(),
    touchedStateDispatcher: jest.fn(),
    allTouched: false,
    validate: jest.fn(),
    isValid: true,
    fullKeyChain: ["mock", "key", "chain"],
  };

  it("should return an empty array when no bind or validation error messages are provided", () => {
    const { result } = renderHook(() => useMyValidationErrorMessages());
    expect(result.current).toEqual([]);
  });

  it("should return the bind validation errors when they are provided", () => {
    const { result } = renderHook(() =>
      useMyValidationErrorMessages(bindingPropsMock)
    );
    expect(result.current).toEqual(["bind error 1", "bind error 2"]);
  });

  it("should return unique validation error messages from both sources", () => {
    const validationErrorMessages = [
      "bind error 1",
      "a second error",
      "error the third",
    ];
    const { result } = renderHook(() =>
      useMyValidationErrorMessages(bindingPropsMock, validationErrorMessages)
    );
    expect(result.current).toEqual([
      "bind error 1",
      "a second error",
      "error the third",
      "bind error 2",
    ]);
  });
});
