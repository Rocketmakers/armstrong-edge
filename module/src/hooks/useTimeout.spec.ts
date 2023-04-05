import { act, renderHook, waitFor } from '@testing-library/react';

import { useTimeout } from './useTimeout';

describe('useTimeout', () => {
  beforeEach(() => {
    jest.useRealTimers();
  });

  it('notifies the user while the timer is running and when it completes', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const callback = jest.fn();

    const { result } = renderHook(() => useTimeout(callback, ms));

    expect(result.current.waiting).toBeFalsy();

    act(() => {
      result.current.set();
      jest.advanceTimersByTime(ms - 1);
    });

    await waitFor(() => {
      expect(result.current.waiting).toBeTruthy();
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(1);
    });

    await waitFor(() => {
      expect(result.current.waiting).toBeFalsy();
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('allows the user to set their own callback and waiting time when starting the timer', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const callback = jest.fn();
    const overrideTime = 700;
    const overrideCallback = jest.fn();

    const { result } = renderHook(() => useTimeout(callback, ms));

    expect(result.current.waiting).toBeFalsy();

    act(() => {
      result.current.set(overrideCallback, overrideTime);
      jest.advanceTimersByTime(ms);
    });

    await waitFor(() => {
      expect(result.current.waiting).toBeTruthy();
    });

    expect(callback).not.toHaveBeenCalled();
    expect(overrideCallback).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(overrideTime - ms);
    });

    await waitFor(() => {
      expect(result.current.waiting).toBeFalsy();
    });

    expect(callback).not.toHaveBeenCalled();
    expect(overrideCallback).toHaveBeenCalledTimes(1);
  });

  it('allows the user to clear the timeout early', async () => {
    jest.useFakeTimers();
    const clearSpy = jest.spyOn(global, 'clearTimeout');
    const ms = 600;
    const callback = jest.fn();

    const { result } = renderHook(() => useTimeout(callback, ms));

    expect(result.current.waiting).toBeFalsy();

    act(() => {
      result.current.set();
      jest.advanceTimersByTime(1);
    });

    await waitFor(() => {
      expect(result.current.waiting).toBeTruthy();
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      result.current.clear();
    });

    await waitFor(() => {
      expect(result.current.waiting).toBeFalsy();
    });

    expect(clearSpy).toHaveBeenCalled();
    expect(callback).not.toHaveBeenCalled();
  });

  it('clears the timeout when the hook unmounts', async () => {
    jest.useFakeTimers();
    const clearSpy = jest.spyOn(global, 'clearTimeout');
    const ms = 600;
    const callback = jest.fn();

    const { result, unmount } = renderHook(() => useTimeout(callback, ms));

    expect(result.current.waiting).toBeFalsy();

    act(() => {
      result.current.set();
      jest.advanceTimersByTime(1);
    });

    await waitFor(() => {
      expect(result.current.waiting).toBeTruthy();
    });

    unmount();

    expect(clearSpy).toHaveBeenCalled();
    expect(callback).not.toHaveBeenCalled();
  });
});
