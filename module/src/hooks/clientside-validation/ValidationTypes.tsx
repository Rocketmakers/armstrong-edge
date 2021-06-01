
import { KeyChain } from '../form';

export type ValidatorFunction<T = any> = (value: any, formState?: T) => boolean;
export type ValidatorDefinition = (...inputs: any) => ValidatorFunction;

export interface ValidatorAndMessage {
  validate: ValidatorFunction;
  message: string;
}

export interface InputValidator {
  key: KeyChain;
  validators: ValidatorAndMessage[];
}

export interface InputState {
  key: KeyChain;
  touched: boolean;
}

export interface KeyAndValues {
  key: KeyChain;
  values: any[];
}
