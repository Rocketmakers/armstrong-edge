import { act, renderHook, waitFor } from '@testing-library/react';

import { useDebounce, useDebounceEffect } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useRealTimers();
  });

  it('debounces a value being passed in after a given time', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const value = 'test';
    const middleValue = 'fish';
    const newValue = 'value';
    const onChange = jest.fn(() => null);
    const { result } = renderHook(() => useDebounce(ms, value, onChange));

    expect(result.current[0]).toBe(value);
    expect(result.current[2]).toBe(value);

    act(() => {
      result.current[1](middleValue);
      jest.advanceTimersByTime(ms - 1);
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(middleValue);
      expect(result.current[2]).toBe(value);
    });

    act(() => {
      result.current[1](newValue);
      jest.advanceTimersByTime(ms - 1);
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(newValue);
      expect(result.current[2]).toBe(value);
    });

    act(() => {
      jest.advanceTimersByTime(1);
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(newValue);
      expect(result.current[2]).toBe(newValue);
    });

    expect(onChange).toHaveBeenCalledWith(newValue);
  });

  it('resets a value back to its original value if a reset is called', async () => {
    const ms = 600;
    const value = 'test';
    const newValue = 'value';
    const onChange = jest.fn(() => null);
    const { result } = renderHook(prop => useDebounce(ms, value, onChange));

    expect(result.current[0]).toBe(value);
    expect(result.current[2]).toBe(value);

    act(() => {
      result.current[1](newValue);
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(newValue);
      expect(result.current[2]).toBe(newValue);
    });

    act(() => {
      result.current[3]();
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(value);
      expect(result.current[2]).toBe(value);
    });
  });

  it('clears the timer on unmount', async () => {
    jest.useFakeTimers();
    const clearSpy = jest.spyOn(global, 'clearTimeout');
    const ms = 600;
    const value = 'test';
    const newValue = 'value';
    const onChange = jest.fn(() => null);

    const { result, unmount } = renderHook(() => useDebounce(ms, value, onChange));
    expect(result.current[0]).toBe(value);
    expect(result.current[2]).toBe(value);

    act(() => {
      result.current[1](newValue);
      jest.advanceTimersByTime(ms - 1);
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(newValue);
      expect(result.current[2]).toBe(value);
    });

    unmount();

    expect(clearSpy).toHaveBeenCalled();
  });
});

describe('useDebounceEffect', () => {
  it('debounces an effect being triggered by a dependency change to a given time', async () => {
    jest.useFakeTimers();
    const ms = 600;
    let value = 'test';
    const newValue = 'value';
    const onChange = jest.fn(() => null);
    const { rerender } = renderHook(() => useDebounceEffect(onChange, ms, [value]));

    act(() => {
      value = newValue;
      jest.advanceTimersByTime(ms - 1);
    });

    rerender();
    expect(onChange).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(1);
    });

    rerender();
    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });
});
