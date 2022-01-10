import { renderHook, act } from '@testing-library/react-hooks';
import { useHasTimeElapsed, useHasTimeElapsedSinceMount } from '../../../src/hooks/useHasTimeElapsed';

describe('useHasTimeElapsed', () => {
  beforeEach(() => {
    jest.useRealTimers();
  });

  it('should indicate that the required time has passed', async () => {
    // Assign
    const dummyFunc = jest.fn(() => {});
    const time = 25;
    jest.useFakeTimers();

    const { result, waitForNextUpdate } = renderHook(() => useHasTimeElapsed(time, dummyFunc));
    expect(result.current[0]).toBeFalsy();

    // Act
    await act(async () => {
      result.current[1]();
      jest.advanceTimersByTime(time - 1);

      // Assert
      expect(dummyFunc).not.toHaveBeenCalled();
      expect(result.current[0]).toBeFalsy();

      jest.advanceTimersByTime(1);

      expect(dummyFunc).toBeCalledTimes(1);
      await waitForNextUpdate();
      expect(result.current[0]).toBeTruthy();
    });
  });

  it('should allow the user to reset the timer', async () => {
    // Assign
    const time = 25;

    const { result, waitForNextUpdate } = renderHook(() => useHasTimeElapsed(time));
    expect(result.current[0]).toBeFalsy();

    // Act
    await act(async () => {
      result.current[1]();
      await waitForNextUpdate();
      expect(result.current[0]).toBeTruthy();
      result.current[2]();

      // Assert
      expect(result.current[0]).toBeFalsy();
    });
  });
});

describe('useHasTimeElapsedSinceMount', () => {
  beforeEach(() => {
    jest.useRealTimers();
  });

  it('should indicate that the required time has passed since mount', async () => {
    // Assign
    const time = 25;
    jest.useFakeTimers();

    const { result, waitForNextUpdate } = renderHook(() => useHasTimeElapsedSinceMount(time));
    expect(result.current).toBeFalsy();

    // Act
    await act(async () => {
      jest.advanceTimersByTime(time - 1);

      // Assert
      expect(result.current).toBeFalsy();

      jest.advanceTimersByTime(1);
      await waitForNextUpdate();
      expect(result.current).toBeTruthy();
    });
  });
});
