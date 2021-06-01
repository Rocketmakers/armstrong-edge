
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