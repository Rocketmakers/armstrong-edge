import { act, renderHook } from '@testing-library/react';

import type { IBindingProps } from '../types';
import { useBindingState } from './useBindingState';

describe('useBindingState', () => {
  const bindingPropsMock: IBindingProps<string> = {
    value: 'mock value',
    setValue: jest.fn(),
    dispatch: jest.fn(),
    keyChain: ['mock', 'key', 'chain'],
    myValidationErrors: [],
    bindConfig: {
      // Mock bind config properties here
    },
    initialValue: 'mock initial value',
    addValidationError: jest.fn(),
    clearClientValidationErrors: jest.fn(),
    clientValidationDispatcher: jest.fn(),
    parseValidationSchema: jest.fn(),
    isTouched: false,
    myTouchedState: [],
    setTouched: jest.fn(),
    touchedStateDispatcher: jest.fn(),
    allTouched: false,
    validate: jest.fn(),
    isValid: true,
  };

  it('should return an array with the correct number of elements', () => {
    const { result } = renderHook(() => useBindingState(bindingPropsMock));
    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current).toHaveLength(3);
  });

  it('should return the initial form state value', () => {
    const {
      result: {
        current: [value],
      },
    } = renderHook(() => useBindingState(bindingPropsMock));
    expect(value).toBe(bindingPropsMock.value);
  });

  it('should return a setter which calls the setter on bind', async () => {
    const {
      result: {
        current: [, setValue],
      },
    } = renderHook(() => useBindingState(bindingPropsMock));
    act(() => setValue('new'));
    expect(bindingPropsMock.setValue).toHaveBeenCalledWith('new');
  });

  it('should run the setter through the toData formatter', async () => {
    const bindingPropsMockWithFormat: IBindingProps<string> = {
      ...bindingPropsMock,
      bindConfig: {
        format: {
          toData: v => `tst-${v}`,
        },
      },
    };
    const {
      result: {
        current: [, setValue],
      },
    } = renderHook(() => useBindingState(bindingPropsMockWithFormat));
    act(() => setValue('new'));
    expect(bindingPropsMock.setValue).toHaveBeenCalledWith('tst-new');
  });

  it('should run the initial value through the fromData formatter', async () => {
    const bindingPropsMockWithFormat: IBindingProps<string> = {
      ...bindingPropsMock,
      bindConfig: {
        format: {
          fromData: v => `tst-${v}`,
        },
      },
    };
    const {
      result: {
        current: [value],
      },
    } = renderHook(() => useBindingState(bindingPropsMockWithFormat));
    expect(value).toBe('tst-mock value');
  });

  it('should return a setTouched which calls the setTouched on bind', async () => {
    const {
      result: {
        current: [, , { setTouched }],
      },
    } = renderHook(() => useBindingState(bindingPropsMock));
    act(() => setTouched(true));
    expect(bindingPropsMock.setTouched).toHaveBeenCalledWith(true);
    act(() => setTouched(false));
    expect(bindingPropsMock.setTouched).toHaveBeenCalledWith(false);
  });

  it('should return a validate which calls the validate on bind', async () => {
    const {
      result: {
        current: [, , { validate }],
      },
    } = renderHook(() => useBindingState(bindingPropsMock));
    act(() => {
      validate(true, false);
    });
    expect(bindingPropsMock.validate).toHaveBeenCalledWith(true, false);
    act(() => {
      validate(false, false);
    });
    expect(bindingPropsMock.validate).toHaveBeenCalledWith(false, false);
  });
});
