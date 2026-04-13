import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { z } from 'zod';

import { ArmstrongConfigProvider } from '../../components/config';
import { useForm } from './useForm';

describe('useForm', () => {
  const nestedFormState = {
    nestedField1: 'value',
    nestedField2: 'value2',
    array: ['one', 'two', 'three'],
  };

  const rootFormState = {
    field1: 'test',
    field2: 4,
    field3: true,
    field4: nestedFormState,
  };

  const useTestHook = () => {
    return useForm<typeof rootFormState>(rootFormState, {
      validationErrors: [{ key: 'field1', message: 'error' }],
      validationSchema: {
        field1: z.string(),
        field2: z.number().max(3, 'schema error 1'), // this will fail, value is 4
        field3: z.boolean(),
        field4: {
          schema: {
            nestedField1: z.string(),
            nestedField2: z.string(),
            array: {
              itemSchema: z.string(),
              opts: arr => arr.min(4, 'schema error 2'), // this will fail, length is 3
            },
          },
        },
      },
    });
  };

  it('should return the correct form state', () => {
    const { result } = renderHook(() => useTestHook());
    expect(result.current.formState).toEqual(rootFormState);
  });

  it('should modify the root form state correctly on set', () => {
    const { result } = renderHook(() => useTestHook());

    act(() => {
      result.current.formProp('field1').set('f1-new');
    });

    expect(result.current.formState?.field1).toBe('f1-new');
  });

  it('should add passed in validation errors to the correct keys', () => {
    const { result } = renderHook(() => useTestHook());
    expect(result.current.formProp('field1').bind().myValidationErrors).toEqual([{ key: 'field1', message: 'error' }]);
    expect(result.current.formProp('field2').bind().myValidationErrors).toEqual([]);
    expect(result.current.formProp('field3').bind().myValidationErrors).toEqual([]);
    expect(result.current.formProp('field4', 'nestedField1').bind().myValidationErrors).toEqual([]);
  });

  it('should dispatch validation errors to the correct keys', () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.formProp('field1').bind().addValidationError('error-2'));
    expect(result.current.formProp('field1').bind().myValidationErrors).toEqual([
      { key: 'field1', message: 'error-2' },
      { key: 'field1', message: 'error' },
    ]);
    expect(result.current.formProp('field2').bind().myValidationErrors).toEqual([]);
    expect(result.current.formProp('field3').bind().myValidationErrors).toEqual([]);
    expect(result.current.formProp('field4').bind().myValidationErrors).toEqual([]);
  });

  it('should dispatch touch state `true` for the correct keys', () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.formProp('field1').bind().setTouched(true));
    expect(result.current.formProp('field1').bind().isTouched).toBe(true);
    expect(result.current.formProp('field2').bind().isTouched).toBe(false);
    expect(result.current.formProp('field3').bind().isTouched).toBe(false);
    expect(result.current.formProp('field4').bind().isTouched).toBe(false);
    expect(result.current.formProp('field4', 'nestedField1').bind().isTouched).toBe(false);
  });

  it('should dispatch touch state `false` for the correct keys', () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.formProp('field1').bind().setTouched(false));
    expect(result.current.formProp('field1').bind().isTouched).toBe(false);
    expect(result.current.formProp('field2').bind().isTouched).toBe(false);
    expect(result.current.formProp('field3').bind().isTouched).toBe(false);
    expect(result.current.formProp('field4').bind().isTouched).toBe(false);
    expect(result.current.formProp('field4', 'nestedField1').bind().isTouched).toBe(false);
  });

  it('returns a formProp function which takes property accessor args and returns a working single field validator', async () => {
    const { result } = renderHook(() => useTestHook());
    const response = await act(() => result.current.formProp('field2').validate());
    expect(response).toBe(false);

    const successResponse = await act(() => result.current.formProp('field1').validate());
    expect(successResponse).toBe(true);
  });

  describe('function-based validation schema', () => {
    it('should receive the current form state when schema is a function', async () => {
      const schemaFn = jest.fn().mockReturnValue({
        name: z.string().min(1),
      });

      const { result } = renderHook(() => useForm({ name: 'test' }, { validationSchema: schemaFn }));

      await act(() => result.current.formProp('name').validate());

      expect(schemaFn).toHaveBeenCalledWith({ name: 'test' });
    });

    it('should validate correctly using a function-based schema', async () => {
      const { result } = renderHook(() =>
        useForm(
          { name: '', age: 25 },
          {
            validationSchema: data => ({
              name: z.string().min(1, 'Name is required'),
              age: data?.name === '' ? z.number().max(0, 'Fix name first') : z.number(),
            }),
          }
        )
      );

      const nameResult = await act(() => result.current.formProp('name').validate());
      expect(nameResult).toBe(false);

      const ageResult = await act(() => result.current.formProp('age').validate());
      expect(ageResult).toBe(false);

      act(() => result.current.formProp('name').set('Alice'));

      const ageResultAfterFix = await act(() => result.current.formProp('age').validate());
      expect(ageResultAfterFix).toBe(true);
    });
  });

  describe('formatValidationMessage', () => {
    it('should use defaultValidationMessageFormatter from Armstrong config when no form formatter is provided', () => {
      const wrapper: React.FC<React.PropsWithChildren> = ({ children }) =>
        React.createElement(
          ArmstrongConfigProvider,
          {
            defaultValidationMessageFormatter: ({ key }) => `Global message for ${key}`,
          },
          children
        );

      const { result } = renderHook(
        () =>
          useForm(
            { name: '' },
            {
              validationSchema: {
                name: z.string().min(1, 'Name is required'),
              },
            }
          ),
        { wrapper }
      );

      act(() => result.current.formProp('name').validate());

      expect(result.current.formProp('name').bind().myValidationErrors).toEqual([
        { key: 'name', message: 'Global message for name' },
      ]);
    });

    it('should prioritize form-level formatter over global defaultValidationMessageFormatter', () => {
      const globalFormatter = jest.fn(() => 'Global message');
      const formFormatter = jest.fn(() => 'Form message');
      const wrapper: React.FC<React.PropsWithChildren> = ({ children }) =>
        React.createElement(ArmstrongConfigProvider, { defaultValidationMessageFormatter: globalFormatter }, children);

      const { result } = renderHook(
        () =>
          useForm(
            { name: '' },
            {
              validationSchema: {
                name: z.string().min(1, 'Name is required'),
              },
              formatValidationMessage: formFormatter,
            }
          ),
        { wrapper }
      );

      act(() => result.current.formProp('name').validate());

      expect(result.current.formProp('name').bind().myValidationErrors).toEqual([{ key: 'name', message: 'Form message' }]);
      expect(formFormatter).toHaveBeenCalled();
      expect(globalFormatter).not.toHaveBeenCalled();
    });
  });
});
