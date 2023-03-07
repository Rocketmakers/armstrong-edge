import { act, renderHook } from "@testing-library/react";
import { useArrayObjectState, useArrayState } from "./useArrayState";

describe("useArrayState", () => {

  it("allows a user to push to an array", async () => {
    const initArray = ['a', 'b']
    const { result } = renderHook(() => useArrayState(initArray));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].push('fish');
    });
    
    expect(result.current[0]).toEqual(['a', 'b', 'fish']);
  });

  it("does not allow a user to push a duplicate value to an array", async () => {
    const initArray = ['a', 'b']
    const { result } = renderHook(() => useArrayState(initArray));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].push('b');
    });
    
    expect(result.current[0]).toEqual(['a', 'b']);
  });

  it("allows a user to pull a value from an array", async () => {
    const initArray = ['a', 'b', 'fish', 'c']
    const { result } = renderHook(() => useArrayState(initArray));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].pull('fish');
    });
    
    expect(result.current[0]).toEqual(['a', 'b', 'c']);
  });

  it("allows a user to attempt to pull a non-existent value from an array safely", async () => {
    const initArray = ['a', 'b', 'c']
    const { result } = renderHook(() => useArrayState(initArray));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].pull('fish');
    });
    
    expect(result.current[0]).toEqual(['a', 'b', 'c']);
  });

  it("allows a user to check to if a value exists in an array", async () => {
    const initArray = ['a', 'b', 'fish', 'c']
    const { result } = renderHook(() => useArrayState(initArray));

    expect(result.current[0]).toBe(initArray);

    let contains = false;

    act(() => {
      contains = result.current[1].contains('fish');
    });
    
    expect(contains).toBeTruthy();
  });

  it("allows a user to reset an array to its original value", async () => {
    const initArray = ['a', 'b', 'c']
    const { result } = renderHook(() => useArrayState(initArray));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].push('fish');
      result.current[1].push('potato');
      result.current[1].pull('c');
    });

    expect(result.current[0]).toEqual(['a', 'b', 'fish', 'potato']);

    act(() => {
      result.current[1].clear();
    });
    
    expect(result.current[0]).toBe(initArray);
  });

  it("allows a user to switch a value in and out of an array", async () => {
    const initArray = ['a', 'b', 'c']
    const { result } = renderHook(() => useArrayState(initArray));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].toggle('fish');
    });

    expect(result.current[0]).toEqual(['a', 'b', 'c', 'fish']);

    act(() => {
      result.current[1].toggle('fish');
    });
    
    expect(result.current[0]).toEqual(initArray);
  });
  
});

describe("useArrayObjectState", () => {

  it("allows a user to push an object to an array", async () => {
    const initArray = [{string: 'a'}, {string: 'b'}]
    const { result } = renderHook(() => useArrayObjectState(initArray, 'string'));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].push({string: 'fish'});
    });
    
    expect(result.current[0]).toEqual([{string: 'a'}, {string: 'b'}, {string: 'fish'}]);
  });

  it("does not allow a user to push a duplicate value to an array", async () => {
    const initArray = [{string: 'a'}, {string: 'b'}]
    const { result } = renderHook(() => useArrayObjectState(initArray, 'string'));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].push({string: 'b'});
    });
    
    expect(result.current[0]).toEqual([{string: 'a'}, {string: 'b'}]);
  });

  it("allows a user to pull a value from an array", async () => {
    const initArray = [{string: 'a'}, {string: 'b'}, {string: 'fish'}, {string: 'c'}]
    const { result } = renderHook(() => useArrayObjectState(initArray, 'string'));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].pull({string: 'fish'});
    });
    
    expect(result.current[0]).toEqual([{string: 'a'}, {string: 'b'}, {string: 'c'}]);
  });

  it("allows a user to attempt to pull a non-existent value from an array safely", async () => {
    const initArray = [{string: 'a'}, {string: 'b'}, {string: 'c'}]
    const { result } = renderHook(() => useArrayObjectState(initArray, 'string'));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].pull({string: 'fish'});
    });
    
    expect(result.current[0]).toEqual([{string: 'a'}, {string: 'b'}, {string: 'c'}]);
  });

  it("allows a user to check to if a value exists in an array", async () => {
    const initArray = [{string: 'a'}, {string: 'b'}, {string: 'fish'}, {string: 'c'}]
    const { result } = renderHook(() => useArrayObjectState(initArray, 'string'));

    expect(result.current[0]).toBe(initArray);

    let contains = false;

    act(() => {
      contains = result.current[1].contains({string: 'fish'});
    });
    
    expect(contains).toBeTruthy();
  });

  it("allows a user to reset an array to its original value", async () => {
    const initArray = [{string: 'a'}, {string: 'b'}, {string: 'c'}]
    const { result } = renderHook(() => useArrayObjectState(initArray, 'string'));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].push({string: 'fish'});
      result.current[1].push({string: 'potato'});
      result.current[1].pull({string: 'c'});
    });

    expect(result.current[0]).toEqual([{string: 'a'}, {string: 'b'}, {string: 'fish'}, {string: 'potato'}]);

    act(() => {
      result.current[1].clear();
    });
    
    expect(result.current[0]).toBe(initArray);
  });

  it("allows a user to switch a value in and out of an array", async () => {
    const initArray = [{string: 'a'}, {string: 'b'}, {string: 'c'}]
    const { result } = renderHook(() => useArrayObjectState(initArray, 'string'));

    expect(result.current[0]).toBe(initArray);

    act(() => {
      result.current[1].toggle({string: 'fish'});
    });

    expect(result.current[0]).toEqual([{string: 'a'}, {string: 'b'}, {string: 'c'}, {string: 'fish'}]);

    act(() => {
      result.current[1].toggle({string: 'fish'});
    });
    
    expect(result.current[0]).toEqual(initArray);
  });
  
});