import { renderHook } from "@testing-library/react";
import * as React from "react";
import { act } from "react-dom/test-utils";

import { useContentMemo } from "./useContentMemo";

describe("useContentMemo", () => {
  it("should return the same item reference for a primitive value", () => {
    const value = 42;
    const { result } = renderHook(() => useContentMemo(value));
    expect(result.current).toBe(value);
  });

  it("should return the same reference for an array if the content hasn't changed, regardless of order", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 1, 3];
    const { result } = renderHook(() => {
      const [val, setVal] = React.useState(arr1);
      const returnVal = useContentMemo(val);
      return { returnVal, setVal };
    });
    act(() => result.current.setVal(arr2));
    expect(result.current.returnVal).toBe(arr1);
  });

  it("should return the same reference for an object if the content hasn't changed, regardless of key order", () => {
    const ob1 = { arr: [1, 2, 3], str: "hello", bool: false };
    const ob2 = { str: "hello", arr: [1, 2, 3], bool: false };
    const { result } = renderHook(() => {
      const [val, setVal] = React.useState(ob1);
      const returnVal = useContentMemo(val);
      return { returnVal, setVal };
    });
    act(() => result.current.setVal(ob2));
    expect(result.current.returnVal).toBe(ob1);
  });

  it("should return a new reference for an array if the content has changed", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 1, 5];
    const { result } = renderHook(() => {
      const [val, setVal] = React.useState(arr1);
      const returnVal = useContentMemo(val);
      return { returnVal, setVal };
    });
    act(() => result.current.setVal(arr2));
    expect(result.current.returnVal).toBe(arr2);
  });

  it("should return a new reference for an object if the content has changed", () => {
    const ob1 = { arr: [1, 2, 3], str: "hello", bool: false };
    const ob2 = { str: "changed", arr: [1, 2, 3], bool: false };
    const { result } = renderHook(() => {
      const [val, setVal] = React.useState(ob1);
      const returnVal = useContentMemo(val);
      return { returnVal, setVal };
    });
    act(() => result.current.setVal(ob2));
    expect(result.current.returnVal).toBe(ob2);
  });

  it("should return the same function reference", () => {
    const func = () => "hello";
    const { result } = renderHook(() => useContentMemo(func));
    expect(result.current).toBe(func);
  });

  it("should return null if the input is null", () => {
    const { result } = renderHook(() => useContentMemo(null));
    expect(result.current).toBeNull();
  });

  it("should return undefined if the input is undefined", () => {
    const { result } = renderHook(() => useContentMemo(undefined));
    expect(result.current).toBeUndefined();
  });
});
