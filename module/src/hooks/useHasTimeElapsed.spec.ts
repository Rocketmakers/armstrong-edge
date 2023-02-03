import { act, renderHook, waitFor } from '@testing-library/react';

import { useHasTimeElapsed, useHasTimeElapsedSinceMount } from './useHasTimeElapsed';

describe('useHasTimeElapsed', () => {
  beforeEach(() => {
    jest.useRealTimers();
  });

  it('should indicate that the required time has passed', async () => {
    // Assign
    const dummyFunc = jest.fn(() => null);
    const time = 25;
    jest.useFakeTimers();

    const { result } = renderHook(() => useHasTimeElapsed(time, dummyFunc));
    expect(result.current[0]).toBeFalsy();

    // Act
    act(() => {
      result.current[1]();
      jest.advanceTimersByTime(time - 1);
    });
    
    // Assert
    expect(dummyFunc).not.toHaveBeenCalled();
    expect(result.current[0]).toBeFalsy();

    // Act
    act(() => {
      jest.advanceTimersByTime(1);
    });

    // Assert
    await waitFor(() => {
      expect(result.current[0]).toBeTruthy();
    });

    expect(dummyFunc).toBeCalledTimes(1);
  });

  it('should allow the user to reset the timer', async () => {
    // Assign
    const time = 25;

    const { result } = renderHook(() => useHasTimeElapsed(time));
    expect(result.current[0]).toBeFalsy();

    // Act
    act(() => {
      result.current[1]();
    });
    
    // Assert
    await waitFor(() => {
      expect(result.current[0]).toBeTruthy();
    });

    // Act
    act(() => {
      result.current[2]();
    });

    // Assert
    await waitFor(() => {
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

    const { result } = renderHook(() => useHasTimeElapsedSinceMount(time));
    expect(result.current).toBeFalsy();

    // Act
    act(() => {
      jest.advanceTimersByTime(time - 1);
    });
    
    // Assert
    expect(result.current).toBeFalsy();

    // Act
    act(() => {
      jest.advanceTimersByTime(1);
    });

    // Assert
    await waitFor(() => {
      expect(result.current).toBeTruthy();
    });
  });
});
