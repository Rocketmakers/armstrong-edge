import { act, renderHook, waitFor } from '@testing-library/react';

import { useInterval } from './useInterval';

describe('useInterval', () => {
  beforeEach(() => {
    jest.useRealTimers();
  });

  it('allows a user to start an interval at the time of their choosing', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const callback = jest.fn();

    const { result } = renderHook(() => useInterval(callback, ms));

    act(() => {
      jest.advanceTimersByTime(ms);
    });

    await waitFor(() => {
      expect(callback).not.toHaveBeenCalled();
    });

    act(() => {
      result.current.set();
      jest.advanceTimersByTime(ms);
    });

    await waitFor(() => {
      expect(callback).toHaveBeenCalledTimes(1);
    });

    act(() => {
      jest.advanceTimersByTime(ms);
    });

    await waitFor(() => {
      expect(callback).toHaveBeenCalledTimes(2);
    });
  });

  it('allows a user to start an interval on mount', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const callback = jest.fn();

    renderHook(() => useInterval(callback, ms, { setOnMount: true }));

    act(() => {
      jest.advanceTimersByTime(ms);
    });

    await waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });
  });

  it('allows a user to start an interval using an arbitrary time and callback', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const callback = jest.fn();
    const overrideTime = 700;
    const overrideCallback = jest.fn();

    const { result } = renderHook(() => useInterval(callback, ms));

    act(() => {
      result.current.set(overrideCallback, overrideTime);
      jest.advanceTimersByTime(ms);
    });

    await waitFor(() => {
      expect(callback).not.toHaveBeenCalled();
      expect(overrideCallback).not.toHaveBeenCalled();
    });

    act(() => {
      jest.advanceTimersByTime(overrideTime - ms);
    });

    await waitFor(() => {
      expect(callback).not.toHaveBeenCalled();
      expect(overrideCallback).toHaveBeenCalled();
    });
  });

  it('allows a user to clear an interval once started', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const callback = jest.fn();

    const { result } = renderHook(() => useInterval(callback, ms));

    act(() => {
      result.current.set();
      jest.advanceTimersByTime(ms);
    });

    await waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });

    callback.mockClear();

    act(() => {
      result.current.clear();
      jest.advanceTimersByTime(ms);
    });

    await waitFor(() => {
      expect(callback).not.toHaveBeenCalled();
    });
  });

  it('clears an interval on unmount', async () => {
    jest.useFakeTimers();
    const ms = 600;
    const callback = jest.fn();

    const { unmount } = renderHook(() => useInterval(callback, ms, { setOnMount: true }));

    act(() => {
      jest.advanceTimersByTime(ms);
    });

    await waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });

    callback.mockClear();

    unmount();

    act(() => {
      jest.advanceTimersByTime(ms);
    });

    await waitFor(() => {
      expect(callback).not.toHaveBeenCalled();
    });
  });
});
