import { act, renderHook } from "@testing-library/react";
import { z } from "zod";

import { useForm } from "./useForm";

describe("useForm", () => {
  const nestedFormState = {
    nestedField1: "value",
    nestedField2: "value2",
    array: ["one", "two", "three"],
  };

  const rootFormState = {
    field1: "test",
    field2: 4,
    field3: true,
    field4: nestedFormState,
  };

  const useTestHook = () => {
    return useForm<typeof rootFormState>(rootFormState, {
      validationErrors: [{ key: "field1", message: "error" }],
      validationSchema: {
        field1: z.string(),
        field2: z.number().max(3, "schema error 1"), // this will fail, value is 4
        field3: z.boolean(),
        field4: {
          schema: {
            nestedField1: z.string(),
            nestedField2: z.string(),
            array: {
              itemSchema: z.string(),
              opts: (arr) => arr.min(4, "schema error 2"), // this will fail, length is 3
            },
          },
        },
      },
    });
  };

  it("should return the correct form state", () => {
    const { result } = renderHook(() => useTestHook());
    expect(result.current.formState).toEqual(rootFormState);
  });

  it("should modify the root form state correctly on set", () => {
    const { result } = renderHook(() => useTestHook());

    act(() => {
      result.current.formProp("field1").set("f1-new");
    });

    expect(result.current.formState?.field1).toBe("f1-new");
  });

  it("should add passed in validation errors to the correct keys", () => {
    const { result } = renderHook(() => useTestHook());
    expect(result.current.formProp("field1").bind().myValidationErrors).toEqual(
      [{ key: "field1", message: "error" }]
    );
    expect(result.current.formProp("field2").bind().myValidationErrors).toEqual(
      []
    );
    expect(result.current.formProp("field3").bind().myValidationErrors).toEqual(
      []
    );
    expect(
      result.current.formProp("field4", "nestedField1").bind()
        .myValidationErrors
    ).toEqual([]);
  });

  it("should dispatch validation errors to the correct keys", () => {
    const { result } = renderHook(() => useTestHook());
    act(() =>
      result.current.formProp("field1").bind().addValidationError("error-2")
    );
    expect(result.current.formProp("field1").bind().myValidationErrors).toEqual(
      [
        { key: "field1", message: "error-2" },
        { key: "field1", message: "error" },
      ]
    );
    expect(result.current.formProp("field2").bind().myValidationErrors).toEqual(
      []
    );
    expect(result.current.formProp("field3").bind().myValidationErrors).toEqual(
      []
    );
    expect(result.current.formProp("field4").bind().myValidationErrors).toEqual(
      []
    );
  });

  it("should dispatch touch state `true` for the correct keys", () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.formProp("field1").bind().setTouched(true));
    expect(result.current.formProp("field1").bind().isTouched).toBe(true);
    expect(result.current.formProp("field2").bind().isTouched).toBe(false);
    expect(result.current.formProp("field3").bind().isTouched).toBe(false);
    expect(result.current.formProp("field4").bind().isTouched).toBe(false);
    expect(
      result.current.formProp("field4", "nestedField1").bind().isTouched
    ).toBe(false);
  });

  it("should dispatch touch state `false` for the correct keys", () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.formProp("field1").bind().setTouched(false));
    expect(result.current.formProp("field1").bind().isTouched).toBe(false);
    expect(result.current.formProp("field2").bind().isTouched).toBe(false);
    expect(result.current.formProp("field3").bind().isTouched).toBe(false);
    expect(result.current.formProp("field4").bind().isTouched).toBe(false);
    expect(
      result.current.formProp("field4", "nestedField1").bind().isTouched
    ).toBe(false);
  });

  it("returns a formProp function which takes property accessor args and returns a working single field validator", async () => {
    const { result } = renderHook(() => useTestHook());
    const response = await act(() =>
      result.current.formProp("field2").validate()
    );
    expect(response).toBe(false);

    const successResponse = await act(() =>
      result.current.formProp("field1").validate()
    );
    expect(successResponse).toBe(true);
  });
});
