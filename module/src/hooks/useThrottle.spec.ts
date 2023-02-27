import { act, renderHook, waitFor } from '@testing-library/react';

import { useThrottle } from './useThrottle';

describe('useThrottle', () => {
  beforeEach(() => {
    jest.useRealTimers();
  });

  it('throttles a value being passed in after a given time', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const value = 'test';
    const middleValue = 'fish';
    const newValue = 'value';
    const onChange = jest.fn(() => null);
    const { result } = renderHook(() => useThrottle(ms, value, onChange));

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
      jest.advanceTimersByTime(1);
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(newValue);
      expect(result.current[2]).toBe(newValue);
    });

    act(() => {
      jest.advanceTimersByTime(1);
    });

    expect(onChange).toHaveBeenCalledWith(newValue);
  });

  it('resets a value back to its original value if a reset is called', async () => {
    const ms = 600;
    const value = 'test';
    const newValue = 'value';
    const onChange = jest.fn(() => null);
    const { result } = renderHook(() => useThrottle(ms, value, onChange));

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

    const { result, unmount } = renderHook(() => useThrottle(ms, value, onChange));

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
