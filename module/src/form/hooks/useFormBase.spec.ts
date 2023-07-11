import { act, renderHook } from '@testing-library/react';
import * as React from 'react';
import { z } from 'zod';

import { useFormBase } from './useFormBase';

describe('useFormBase', () => {
  const nestedFormState = {
    nestedField1: 'value',
    nestedField2: 'value2',
    array: ['one', 'two', 'three'],
  };

  const formState = {
    field1: 'test',
    field2: 4,
    field3: true,
    field4: nestedFormState,
  };

  const formStateDispatcher = jest.fn();
  const clientValidationDispatcher = jest.fn();

  const touchedStateDispatcher = jest.fn();

  const parseValidationSchema = jest.fn();

  const useTestHook = () => {
    const stateRef = React.useRef(formState);
    const touchedRef = React.useRef([]);
    return useFormBase<typeof formState>(
      formState,
      stateRef,
      formStateDispatcher,
      [],
      clientValidationDispatcher,
      [],
      touchedRef,
      touchedStateDispatcher,
      parseValidationSchema,
      {
        field1: 'initial',
      },
      {
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
      }
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns a formState object containing the current state', () => {
    const { result } = renderHook(() => useTestHook());
    expect(result.current.formState).toHaveProperty('field1', 'test');
    expect(result.current.formState).toHaveProperty('field2', 4);
    expect(result.current.formState).toHaveProperty('field3', true);
    expect(result.current.formState).toHaveProperty('field4', nestedFormState);
  });

  it('returns a formProp function which takes property accessor args and returns a working getter', () => {
    const { result } = renderHook(() => useTestHook());
    const formPropResult = result.current.formProp('field1');
    expect(formPropResult.get()).toBe('test');

    const formPropResultNested = result.current.formProp('field4', 'nestedField1');
    expect(formPropResultNested.get()).toBe('value');
  });

  it('returns a formProp function which takes property accessor args and returns a working setter', () => {
    const { result } = renderHook(() => useTestHook());
    const formPropResult = result.current.formProp('field1');
    formPropResult.set('change1');
    expect(formStateDispatcher).toHaveBeenCalledWith({ type: 'set-one', propertyKey: 'field1', value: 'change1' });

    const formPropResultNested = result.current.formProp('field4', 'nestedField1');
    formPropResultNested.set('change2');
    expect(formStateDispatcher).toHaveBeenCalledWith({
      type: 'set-path',
      keyChain: ['field4', 'nestedField1'],
      value: 'change2',
    });
  });

  it('returns a formProp function which takes property accessor args and returns a working binder', () => {
    const { result } = renderHook(() => useTestHook());
    const formPropBind = result.current.formProp('field1').bind();
    expect(formPropBind.keyChain).toEqual(['field1']);
    expect(formPropBind.value).toBe('test');
    formPropBind.setValue('new value');
    expect(formStateDispatcher).toHaveBeenCalledWith({
      type: 'set-one',
      propertyKey: 'field1',
      value: 'new value',
    });

    const formPropResultNested = result.current.formProp('field4', 'nestedField1').bind();
    expect(formPropResultNested.keyChain).toEqual(['field4', 'nestedField1']);
    expect(formPropResultNested.value).toBe('value');
    formPropResultNested.setValue('new value 2');
    expect(formStateDispatcher).toHaveBeenCalledWith({
      type: 'set-path',
      keyChain: ['field4', 'nestedField1'],
      value: 'new value 2',
    });
  });

  it('returns a formProp function which takes property accessor args and returns a working client validation dispatcher', () => {
    const { result } = renderHook(() => useTestHook());
    result.current.formProp('field1').addValidationError('there has been an error');
    expect(clientValidationDispatcher).toHaveBeenCalledWith({
      type: 'add-validation',
      errors: [{ key: 'field1', message: 'there has been an error' }],
    });
    result.current.formProp('field1').clearClientValidationErrors();
    expect(clientValidationDispatcher).toHaveBeenCalledWith({
      type: 'clear-validation',
      key: 'field1',
      identifiers: [],
    });

    result.current.formProp('field4', 'nestedField1').addValidationError('another error');
    expect(clientValidationDispatcher).toHaveBeenCalledWith({
      type: 'add-validation',
      errors: [{ key: 'field4.nestedField1', message: 'another error' }],
    });
    result.current.formProp('field4', 'nestedField1').clearClientValidationErrors();
    expect(clientValidationDispatcher).toHaveBeenCalledWith({
      type: 'clear-validation',
      key: 'field4.nestedField1',
      identifiers: [],
    });
  });

  it('returns a formProp function which takes property accessor args and returns a working array modification toolkit', () => {
    const { result } = renderHook(() => useTestHook());
    result.current.formProp('field4', 'array').add('four');
    expect(formStateDispatcher).toHaveBeenCalledWith({
      type: 'set-path',
      keyChain: ['field4', 'array'],
      value: ['one', 'two', 'three', 'four'],
    });

    result.current.formProp('field4', 'array').insert('four', 1);
    expect(formStateDispatcher).toHaveBeenCalledWith({
      type: 'set-path',
      keyChain: ['field4', 'array'],
      value: ['one', 'four', 'two', 'three'],
    });

    result.current.formProp('field4', 'array').remove(1);
    expect(formStateDispatcher).toHaveBeenCalledWith({
      type: 'set-path',
      keyChain: ['field4', 'array'],
      value: ['one', 'three'],
    });

    result.current.formProp('field4', 'array').pop();
    expect(formStateDispatcher).toHaveBeenCalledWith({
      type: 'set-path',
      keyChain: ['field4', 'array'],
      value: ['one', 'two'],
    });
  });

  it('returns a formProp function which takes property accessor args and returns a working validation dispatcher', async () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.formProp('field2').addValidationError('dispatched error'));
    expect(clientValidationDispatcher).toHaveBeenCalledWith({
      type: 'add-validation',
      errors: [{ key: 'field2', message: 'dispatched error' }],
    });
  });

  it('returns a formProp function which takes property accessor args and returns a working touch state `true` dispatcher', async () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.formProp('field3').setTouched(true));
    expect(touchedStateDispatcher).toHaveBeenCalledWith({
      type: 'set-touched',
      keyChain: ['field3'],
      touched: true,
    });
    act(() => result.current.formProp('field2').bind().setTouched(true));
    expect(touchedStateDispatcher).toHaveBeenCalledWith({
      type: 'set-touched',
      keyChain: ['field2'],
      touched: true,
    });
  });

  it('returns a formProp function which takes property accessor args and returns a working touch state `false` dispatcher', async () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.formProp('field3').setTouched(false));
    expect(touchedStateDispatcher).toHaveBeenCalledWith({
      type: 'set-touched',
      keyChain: ['field3'],
      touched: false,
    });
    act(() => result.current.formProp('field2').bind().setTouched(false));
    expect(touchedStateDispatcher).toHaveBeenCalledWith({
      type: 'set-touched',
      keyChain: ['field2'],
      touched: false,
    });
  });

  it('returns a getFormData function which returns the current form state', () => {
    const { result } = renderHook(() => useTestHook());
    expect(result.current.getFormData()).toEqual(formState);
  });

  it('returns a setFormData function which updates the current form state', () => {
    const { result } = renderHook(() => useTestHook());
    const newState = { ...formState, field1: 'new field one' };
    result.current.setFormData(newState);
    expect(formStateDispatcher).toHaveBeenCalledWith({ type: 'set-all', data: newState });
  });

  it('returns a clearClientValidationErrors function which clears all client validation errors', () => {
    const { result } = renderHook(() => useTestHook());
    result.current.clearClientValidationErrors();
    expect(clientValidationDispatcher).toHaveBeenCalledWith({ type: 'clear-validation' });
  });

  it('returns a resetFormData function which resets all form data to initial values', () => {
    const { result } = renderHook(() => useTestHook());
    result.current.resetFormData();
    expect(formStateDispatcher).toHaveBeenCalledWith({ type: 'set-all', data: { field1: 'initial' } });
  });

  it('returns a resetTouchedState function which clears touch state on all fields', async () => {
    const { result } = renderHook(() => useTestHook());
    act(() => result.current.resetTouchedState());
    expect(touchedStateDispatcher).toHaveBeenCalledWith({ type: 'reset-touched' });
  });
});
