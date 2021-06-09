
import { KeyChain, valueByKeyChain } from '../form';
import { ValidatorFunction } from './ValidationTypes';

export namespace Validator {
  export function min(minValue: number, allowEqual?: boolean): ValidatorFunction {
    return (value: number) => validateMin(value, minValue, allowEqual);
  }

  export function max(maxValue: number, allowEqual?: boolean): ValidatorFunction {
    return (value: number) => validateMax(value, maxValue, allowEqual);
  }

  export function required(): ValidatorFunction {
    return (value: any) => validateRequired(value);
  }

  export function pattern(regex: RegExp): ValidatorFunction {
    return (value: string) => validatePattern(value, regex);
  }

  export function requiredWhenOtherFieldHasValues<T>(key: KeyChain, values: any[]): ValidatorFunction {
    return (value: any, state: T) =>
      validateRequiredWhenOtherFieldHasValues<T>(value, key, values, state);
  }
}

const validateRequired = (value: any): boolean => value === 0 || (value && value !== '');
const validateMin = (value: number, minValue: number, allowEqual?: boolean): boolean => {
  if (value || value === 0) {
    return allowEqual ? value >= minValue : value > minValue;
  }
  return true;
};
const validateMax = (value: number, maxValue: number, allowEqual?: boolean): boolean => {
  if (value || value === 0) {
    return allowEqual ? value <= maxValue : value < maxValue;
  }
  return true;
};
const validatePattern = (value: string, regex: RegExp): boolean => (value ? regex.test(value) : true);
const validateRequiredWhenOtherFieldHasValues = <T,>(
  value: any,
  keyOfOtherField: KeyChain,
  valuesOfOtherField: any[],
  state: T
): boolean => {
  return valuesOfOtherField.includes(valueByKeyChain(state, keyOfOtherField)) ? validateRequired(value) : true;
};