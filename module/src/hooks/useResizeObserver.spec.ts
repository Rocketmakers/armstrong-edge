import { renderHook, waitFor } from '@testing-library/react';

import * as globalsModule from '../utils/globals';
import { useResizeObserver } from './useResizeObserver';

const mockedGlobals = globalsModule as {
  -readonly [P in keyof typeof globalsModule]: typeof globalsModule[P];
};

mockedGlobals.isBrowser = true;
mockedGlobals.supportsResizeObserver = true;

describe('useResizeObserver', () => {
  const observeMock = jest.fn();
  const unobserveMock = jest.fn();
  const disconnectMock = jest.fn();
  const resizeObserverMock = jest.fn(() => ({
    observe: observeMock,
    unobserve: unobserveMock,
    disconnect: disconnectMock,
  }));

  global.ResizeObserver = resizeObserverMock;

  it('should observe the specified element', async () => {
    const callback = jest.fn();
    const options = { box: 'content-box' as const };
    const refMock = { current: document.createElement('div') };

    const { result } = renderHook(() => useResizeObserver(callback, options, refMock));
    const { observer } = result.current;
    await waitFor(() => expect(observer.current).toBeDefined());
    expect(observer.current?.observe).toHaveBeenCalledWith(refMock.current, options);
  });

  it('should unobserve the specified element', async () => {
    const callback = jest.fn();
    const refMock = { current: document.createElement('div') };

    const { unmount, result } = renderHook(() => useResizeObserver(callback, undefined, refMock));
    const { observer } = result.current;
    await waitFor(() => expect(observer.current).toBeDefined());
    unmount();

    expect(observer.current?.unobserve).toHaveBeenCalledWith(refMock.current);
  });

  it('should disconnect the ResizeObserver', async () => {
    const callback = jest.fn();
    const refMock = { current: document.createElement('div') };

    const { unmount, result } = renderHook(() => useResizeObserver(callback, undefined, refMock));
    const { observer } = result.current;
    await waitFor(() => expect(observer.current).toBeDefined());
    unmount();

    expect(observer.current?.disconnect).toHaveBeenCalled();
  });

  it('should handle callback passing correctly', async () => {
    const callback: ResizeObserverCallback = jest.fn();

    const refMock = { current: document.createElement('div') };

    const { result } = renderHook(() => useResizeObserver(callback, undefined, refMock));
    const { observer } = result.current;
    await waitFor(() => expect(observer.current).toBeDefined());

    expect(resizeObserverMock).toHaveBeenCalledWith(callback);
  });

  it('should not create an observer if ref is not defined', async () => {
    const callback = jest.fn();

    const { result } = renderHook(() => useResizeObserver(callback));

    await waitFor(() => expect(result.current?.observer).toEqual({ current: undefined }));
  });

  it('should not create an observer if not in browser', async () => {
    mockedGlobals.isBrowser = false;
    const callback: ResizeObserverCallback = jest.fn();

    const refMock = { current: document.createElement('div') };

    const { result } = renderHook(() => useResizeObserver(callback, undefined, refMock));

    await waitFor(() => expect(result.current?.observer).toEqual({ current: undefined }));
    mockedGlobals.isBrowser = true;
  });

  it('should not create an observer if supportsResizeObserver not supported', async () => {
    mockedGlobals.supportsResizeObserver = false;
    const callback: ResizeObserverCallback = jest.fn();

    const refMock = { current: document.createElement('div') };

    const { result } = renderHook(() => useResizeObserver(callback, undefined, refMock));

    await waitFor(() => expect(result.current?.observer).toEqual({ current: undefined }));
    mockedGlobals.supportsResizeObserver = true;
  });
});
