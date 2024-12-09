import { act, renderHook, waitFor } from '@testing-library/react';

import { useBoundingClientRect } from './useBoundingClientRect';

const dummyRect: DOMRect = {
  x: 16,
  y: 16,
  width: 170,
  height: 70,
  top: 16,
  right: 186,
  bottom: 86,
  left: 16,
  toJSON: () => {},
};

describe('useBoundingClientRect', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get new rect and call the onChange event on resize', async () => {
    const refElement = document.createElement('div');
    const onChange = jest.fn();
    renderHook(() => useBoundingClientRect({ current: refElement }, onChange));

    const getBoundingClientRect = jest.fn(() => dummyRect);
    refElement.getBoundingClientRect = getBoundingClientRect;

    const resizeEvent = new Event('resize');
    act(() => {
      document.dispatchEvent(resizeEvent);
    });

    await waitFor(() => expect(getBoundingClientRect).toHaveBeenCalled());
    expect(onChange).toHaveBeenCalledWith(dummyRect);
  });

  it('should get new rect and call the onChange event on scroll', async () => {
    const refElement = document.createElement('div');
    const onChange = jest.fn();
    renderHook(() => useBoundingClientRect({ current: refElement }, onChange));

    const getBoundingClientRect = jest.fn(() => dummyRect);
    refElement.getBoundingClientRect = getBoundingClientRect;

    const scrollEvent = new Event('scroll');
    act(() => {
      document.dispatchEvent(scrollEvent);
    });

    await waitFor(() => expect(getBoundingClientRect).toHaveBeenCalled());
    expect(onChange).toHaveBeenCalledWith(dummyRect);
  });

  it('should NOT get new rect and call the onChange event on scroll if instructed not to with flag', async () => {
    const refElement = document.createElement('div');
    const onChange = jest.fn();
    renderHook(() => useBoundingClientRect({ current: refElement }, onChange, false));

    const getBoundingClientRect = jest.fn(() => dummyRect);
    refElement.getBoundingClientRect = getBoundingClientRect;

    const scrollEvent = new Event('scroll');
    act(() => {
      document.dispatchEvent(scrollEvent);
    });

    await waitFor(() => expect(getBoundingClientRect).not.toHaveBeenCalled());
    expect(onChange).not.toHaveBeenCalled();
  });
});
