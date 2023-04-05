import { act, renderHook, waitFor } from '@testing-library/react';

import { useTemporaryState } from './useTemporaryState';

describe('useTemporaryState', () => {
  beforeEach(() => {
    jest.useRealTimers();
  });

  it('resets a value back to its original after a given time', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const value = 'test';
    const newValue = 'value';
    const onReset = jest.fn(() => null);
    const { result } = renderHook(() => useTemporaryState(value, ms, onReset));

    expect(result.current[0]).toBe(value);

    act(() => {
      result.current[1](newValue);
      jest.advanceTimersByTime(ms - 1);
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(newValue);
    });

    expect(onReset).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(1);
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(value);
    });

    expect(onReset).toHaveBeenCalled();
  });

  it('allows a user to reset back to the initial value before the given time', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const value = 'test';
    const newValue = 'value';
    const onReset = jest.fn(() => null);
    const { result } = renderHook(() => useTemporaryState(value, ms, onReset));

    expect(result.current[0]).toBe(value);

    act(() => {
      result.current[1](newValue);
      jest.advanceTimersByTime(1);
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(newValue);
    });

    expect(onReset).not.toHaveBeenCalled();

    act(() => {
      result.current[2]();
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(value);
    });

    expect(onReset).not.toHaveBeenCalled();
  });
});
