import * as FormUtils from './form.utils';
import { validateAll, validateKeyChainProperty } from './form.validators';

describe('Form validators', () => {
  it('applies validators to every property in the given state using validateAll', () => {
    const mockOnValidate = jest.fn();
    const state = {
      test: 'value',
      key: {
        string: 'string',
        array: ['a', 'b'],
        obj: {
          foo: 'bar',
        },
      },
    };
    const validationConf = {
      test: {
        validator: jest.fn().mockReturnValue(false),
        message: 'foo',
      },
      key: {
        string: {
          validator: jest.fn().mockReturnValue(false),
          message: jest.fn().mockReturnValue('bar'),
        },
        array: {
          validator: jest.fn().mockReturnValue(false),
          message: 'foo',
        },
        obj: {
          foo: {
            validator: jest.fn().mockReturnValue(false),
            message: 'foo',
          },
        },
      },
    };
    const baseChain = [];
    validateAll(validationConf, state, mockOnValidate, baseChain);
    // As we can't check for the `validateKeyChainProperty` call we can at least check the onValidate is run for each property.
    expect(mockOnValidate).toHaveBeenCalledTimes(4);
    expect(mockOnValidate).toHaveBeenNthCalledWith(1, ['test'], 'foo');
    expect(mockOnValidate).toHaveBeenNthCalledWith(2, ['key', 'string'], 'bar');
    expect(mockOnValidate).toHaveBeenNthCalledWith(3, ['key', 'array'], 'foo');
    expect(mockOnValidate).toHaveBeenNthCalledWith(4, ['key', 'obj', 'foo'], 'foo');
  });

  describe('validateKeyChainProperty', () => {
    it('does nothing if no validator config supplied', () => {
      const mockValByKeyChain = jest.spyOn(FormUtils, 'valueByKeyChain');
      const state = {
        test: 'value',
        key: {
          string: 'string',
          array: ['a', 'b'],
          obj: {
            foo: 'bar',
          },
        },
      };
      const validationConf = undefined;
      const mockOnValidate = jest.fn();
      validateKeyChainProperty(validationConf, ['test'], state, mockOnValidate);
      expect(mockValByKeyChain).not.toHaveBeenCalled();
    });

    it('runs the validator directly if the current config node is a validator', () => {
      const mockValByKeyChain = jest.spyOn(FormUtils, 'valueByKeyChain');
      const state = ['value'];
      const validationConf = {
        validator: jest.fn().mockReturnValue(false),
        message: 'foo',
      };
      const mockOnValidate = jest.fn();
      validateKeyChainProperty(validationConf, [], state, mockOnValidate);
      expect(mockValByKeyChain).toHaveBeenCalledTimes(1);
      expect(mockOnValidate).toHaveBeenCalledTimes(1);
      expect(mockOnValidate).toHaveBeenCalledWith([], 'foo');
    });

    it('runs the validator directly if the current config node contains only one validator', () => {
      const mockValByKeyChain = jest.spyOn(FormUtils, 'valueByKeyChain');
      const state = {
        test: 'value',
      };
      const validationConf = {
        test: {
          validator: jest.fn().mockReturnValue(false),
          message: 'foo',
        },
      };
      const mockOnValidate = jest.fn();
      validateKeyChainProperty(validationConf, [], state, mockOnValidate);
      expect(mockValByKeyChain).toHaveBeenCalledTimes(5);
      expect(mockOnValidate).toHaveBeenCalledTimes(1);
      expect(mockOnValidate).toHaveBeenCalledWith(['test'], 'foo');
    });

    it('runs the validators against every property in the given node', () => {
      const mockValByKeyChain = jest.spyOn(FormUtils, 'valueByKeyChain');
      const state = {
        key: {
          string: 'string',
          array: ['a', 'b'],
          obj: {
            foo: 'bar',
          },
        },
      };
      const validationConf = {
        key: {
          string: {
            validator: jest.fn().mockReturnValue(false),
            message: jest.fn().mockImplementation(val => `${val}`),
          },
          array: {
            validator: jest.fn().mockReturnValue(false),
            message: 'foo',
          },
          obj: {
            foo: {
              validator: jest.fn().mockReturnValue(false),
              message: 'foo',
            },
          },
        },
      };
      const mockOnValidate = jest.fn();
      validateKeyChainProperty(validationConf, [], state, mockOnValidate);
      expect(mockValByKeyChain).toHaveBeenCalled();
      expect(mockOnValidate).toHaveBeenCalledTimes(3);
      expect(mockOnValidate).toHaveBeenNthCalledWith(1, ['key', 'string'], 'string');
      expect(mockOnValidate).toHaveBeenNthCalledWith(2, ['key', 'array'], 'foo');
      expect(mockOnValidate).toHaveBeenNthCalledWith(3, ['key', 'obj', 'foo'], 'foo');
    });
  });
});
