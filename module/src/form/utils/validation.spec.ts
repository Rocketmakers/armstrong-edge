import { z } from 'zod';

import type { IRootValidationSchema, IValidationError, IValidationSchema } from '../types';
import {
  clientValidationReducer,
  rootValidationSchemaIsFunction,
  validationErrorsByKeyChain,
  zodFromValidationSchema,
} from './validation';

/* validationErrorsByKeyChain */
describe('validationErrorsByKeyChain', () => {
  it('returns no validation errors if no keychain is provided', () => {
    const error: IValidationError = {
      key: 'test.value[3].target',
      message: 'Test is a validation issue.',
      identifier: 'radio',
    };
    const otherError = { key: 'test.value[2]', message: 'exists' };
    const result = validationErrorsByKeyChain([error, otherError]);
    expect(result).toEqual([]);
  });

  it('returns the relevant validation errors if they appear on the current keychain', () => {
    const error: IValidationError = {
      key: 'test.value[3].target',
      message: 'Test is a validation issue.',
      identifier: 'radio',
    };
    const otherError = { key: 'test.value[2]', message: 'exists' };
    const keychain = ['test', 'value', 3];
    const result = validationErrorsByKeyChain([error, otherError], keychain);
    expect(result).toEqual([error]);
  });

  it("returns no validation errors if they don't apply to the current keychain", () => {
    const error: IValidationError = {
      key: 'test.value[4].target',
      message: 'Test is a validation issue.',
      identifier: 'radio',
    };
    const otherError = { key: 'test.value[2]', message: 'exists' };
    const keychain = ['test', 'value', 3];
    const result = validationErrorsByKeyChain([error, otherError], keychain);
    expect(result).toEqual([]);
  });
});

/** clientValidationReducer */
describe('clientValidationReducer', () => {
  it('adds validation errors to state when action type is "add-validation"', () => {
    const state = [{ key: 'field1', identifier: 'identifier1', message: 'error message' }];
    const action = {
      type: 'add-validation' as const,
      errors: [
        {
          key: 'field2',
          identifier: 'identifier2',
          message: 'another error message',
        },
      ],
    };
    const newState = clientValidationReducer(state, action);
    expect(newState).toEqual([...state, ...action.errors]);
  });

  it('clears validation errors from state when action type is "clear-validation"', () => {
    const state = [
      { key: 'field1', identifier: 'identifier1', message: 'error message' },
      {
        key: 'field2',
        identifier: 'identifier2',
        message: 'another error message',
      },
      {
        key: 'field3',
        identifier: 'identifier3',
        message: 'yet another error message',
      },
    ];
    const action = {
      type: 'clear-validation' as const,
      key: 'field2',
      identifiers: ['identifier2'],
    };
    const newState = clientValidationReducer(state, action);
    expect(newState).toEqual([
      { key: 'field1', identifier: 'identifier1', message: 'error message' },
      {
        key: 'field3',
        identifier: 'identifier3',
        message: 'yet another error message',
      },
    ]);
  });

  it('does not clear validation errors when identifiers do not match', () => {
    const state = [
      { key: 'field1', identifier: 'identifier1', message: 'error message' },
      {
        key: 'field2',
        identifier: 'identifier2',
        message: 'another error message',
      },
      {
        key: 'field3',
        identifier: 'identifier3',
        message: 'yet another error message',
      },
    ];
    const action = {
      type: 'clear-validation' as const,
      key: 'field2',
      identifiers: ['identifier1'],
    };
    const newState = clientValidationReducer(state, action);
    expect(newState).toEqual(state);
  });
});

/**
 * zodFromValidationSchema
 * NOTE: zod schemas aren't directly comparable using a jets matching function, so the best we can do is compare the success and error parse results
 */
describe('zodFromValidationSchema', () => {
  it('should convert a simple validation object schema into a zod schema', () => {
    interface ISchema {
      name: string;
      age: number;
    }

    const schema: IValidationSchema<ISchema> = {
      name: z.string(),
      age: z.number(),
    };

    const expectedSchema = z.object({
      name: z.string(),
      age: z.number(),
    });

    const successShape: ISchema = { name: '', age: 3 };
    const success1 = zodFromValidationSchema<ISchema>(schema).safeParse(successShape);
    const success2 = expectedSchema.safeParse(successShape);
    expect(success1).toEqual(success2);

    const failShape = { name: '', age: 'eff' };
    const fail1 = zodFromValidationSchema<ISchema>(schema).safeParse(failShape);
    const fail2 = expectedSchema.safeParse(failShape);
    expect(fail1).toEqual(fail2);
  });

  it('should convert a simple validation array schema into a zod schema', () => {
    type ISchema = Array<{
      name: string;
      age: number;
    }>;

    const schema: IValidationSchema<ISchema> = {
      itemSchema: {
        name: z.string(),
        age: z.number(),
      },
      opts: arr => arr.min(1).max(2),
    };

    const expectedSchema = z
      .array(
        z.object({
          name: z.string(),
          age: z.number(),
        })
      )
      .min(1)
      .max(2);

    const successShape: ISchema = [{ name: '', age: 3 }];
    const success1 = zodFromValidationSchema<ISchema>(schema).safeParse(successShape);
    const success2 = expectedSchema.safeParse(successShape);
    expect(success1).toEqual(success2);

    const failShape = [{ name: '', age: 'eff' }];
    const fail1 = zodFromValidationSchema<ISchema>(schema).safeParse(failShape);
    const fail2 = expectedSchema.safeParse(failShape);
    expect(fail1).toEqual(fail2);
  });

  it('should convert a validation object with a nested object into a zod schema', () => {
    interface IAddress {
      city: string;
      postcode: string;
    }

    interface ISchema {
      name: string;
      age: number;
      address: IAddress;
    }

    const schema: IValidationSchema<ISchema> = {
      name: z.string(),
      age: z.number(),
      address: {
        opts: ob => ob.required(),
        schema: {
          postcode: z.string(),
          city: z.string(),
        },
      },
    };

    const expectedSchema = z.object({
      name: z.string(),
      age: z.number(),
      address: z
        .object({
          postcode: z.string(),
          city: z.string(),
        })
        .required(),
    });

    const successShape: ISchema = {
      name: '',
      age: 3,
      address: { city: '', postcode: '' },
    };

    const success1 = zodFromValidationSchema<ISchema>(schema).safeParse(successShape);
    const success2 = expectedSchema.safeParse(successShape);
    expect(success1).toEqual(success2);

    const failShape = {
      name: '',
      age: 3,
    };

    const fail1 = zodFromValidationSchema<ISchema>(schema).safeParse(failShape);
    const fail2 = expectedSchema.safeParse(failShape);
    expect(fail1).toEqual(fail2);
  });

  it('should convert a validation object with a nested array into a zod schema', () => {
    interface IPet {
      name: string;
      breed: string;
    }

    interface ISchema {
      name: string;
      age: number;
      pets: IPet[];
    }

    const schema: IValidationSchema<ISchema> = {
      name: z.string(),
      age: z.number(),
      pets: {
        opts: arr => arr.min(1).max(3),
        itemSchema: {
          breed: z.string(),
          name: z.string(),
        },
      },
    };

    const expectedSchema = z.object({
      name: z.string(),
      age: z.number(),
      pets: z
        .array(
          z.object({
            breed: z.string(),
            name: z.string(),
          })
        )
        .min(1)
        .max(3),
    });

    const successShape: ISchema = {
      name: '',
      age: 3,
      pets: [{ breed: '', name: '' }],
    };

    const success1 = zodFromValidationSchema<ISchema>(schema).safeParse(successShape);
    const success2 = expectedSchema.safeParse(successShape);
    expect(success1).toEqual(success2);

    const failShape = {
      name: '',
      age: 3,
    };

    const fail1 = zodFromValidationSchema<ISchema>(schema).safeParse(failShape);
    const fail2 = expectedSchema.safeParse(failShape);
    expect(fail1).toEqual(fail2);
  });

  it('should convert a validation object with a nested array of arrays into a zod schema', () => {
    interface IPet {
      name: string;
      breed: string;
    }

    interface ISchema {
      name: string;
      age: number;
      pets: IPet[][];
    }

    const schema: IValidationSchema<ISchema> = {
      name: z.string(),
      age: z.number(),
      pets: {
        opts: arr => arr.min(1).max(3),
        itemSchema: {
          opts: arr => arr.min(1).max(3),
          itemSchema: {
            breed: z.string(),
            name: z.string(),
          },
        },
      },
    };

    const expectedSchema = z.object({
      name: z.string(),
      age: z.number(),
      pets: z
        .array(
          z
            .array(
              z.object({
                breed: z.string(),
                name: z.string(),
              })
            )
            .min(1)
            .max(3)
        )
        .min(1)
        .max(3),
    });

    const successShape: ISchema = {
      name: '',
      age: 3,
      pets: [[{ breed: '', name: '' }]],
    };

    const success1 = zodFromValidationSchema<ISchema>(schema).safeParse(successShape);
    const success2 = expectedSchema.safeParse(successShape);
    expect(success1).toEqual(success2);

    const failShape = {
      name: '',
      age: 3,
    };

    const fail1 = zodFromValidationSchema<ISchema>(schema).safeParse(failShape);
    const fail2 = expectedSchema.safeParse(failShape);
    expect(fail1).toEqual(fail2);
  });

  it('should convert a validation object with nested arrays containing objects containing arrays into a zod schema', () => {
    interface IPetFriend {
      names: string[];
      breed: string;
    }

    interface IPet {
      names: string[];
      breed: string;
      friends: IPetFriend[];
    }

    interface ISchema {
      name: string;
      age: number;
      pets: IPet[];
    }

    const schema: IValidationSchema<ISchema> = {
      name: z.string(),
      age: z.number(),
      pets: {
        opts: arr => arr.min(1).max(3),
        itemSchema: {
          names: {
            opts: arr => arr.min(1).max(3),
            itemSchema: z.string(),
          },
          breed: z.string(),
          friends: {
            opts: arr => arr.min(1).max(3),
            itemSchema: {
              names: {
                opts: arr => arr.min(1).max(3),
                itemSchema: z.string(),
              },
              breed: z.string(),
            },
          },
        },
      },
    };

    const expectedSchema = z.object({
      name: z.string(),
      age: z.number(),
      pets: z
        .array(
          z.object({
            names: z.array(z.string()).min(1).max(3),
            breed: z.string(),
            friends: z
              .array(
                z.object({
                  names: z.array(z.string()).min(1).max(3),
                  breed: z.string(),
                })
              )
              .min(1)
              .max(3),
          })
        )
        .min(1)
        .max(3),
    });

    const successShape: ISchema = {
      name: '',
      age: 3,
      pets: [
        {
          names: [''],
          breed: '',
          friends: [
            {
              names: [''],
              breed: '',
            },
          ],
        },
      ],
    };

    const success1 = zodFromValidationSchema<ISchema>(schema).safeParse(successShape);
    const success2 = expectedSchema.safeParse(successShape);
    expect(success1).toEqual(success2);
  });

  describe('rootValidationSchemaIsFunction', () => {
    it('should return true if the schema is a function', () => {
      // Arrange
      const functionSchema = () => ({ test: z.string() });

      // Act
      const result = rootValidationSchemaIsFunction<{ test: string }>(functionSchema);

      // Assert
      expect(result).toBe(true);
    });

    it('should return false if the schema is not a function', () => {
      // Arrange
      const objectSchema: IRootValidationSchema<{ test: number }> = {
        test: z.number(),
      };

      // Act
      const result = rootValidationSchemaIsFunction<{ test: number }>(objectSchema);

      // Assert
      expect(result).toBe(false);
    });

    it('should return false if no schema is provided', () => {
      // Act
      const result = rootValidationSchemaIsFunction();

      // Assert
      expect(result).toBe(false);
    });
  });
});
