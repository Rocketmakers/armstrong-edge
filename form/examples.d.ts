import * as React from 'react';
import type { BindingToolsArray, BindingToolsStandard, HookReturn, IBindingProps, IFormConfig } from './types';
export declare const ConfigExample: React.FC<IFormConfig<unknown>>;
export declare const HookReturnExample: React.FC<HookReturn<{}>>;
export declare const FormPropExample: React.FC<BindingToolsStandard<unknown>>;
export declare const FormPropArrayExample: React.FC<Omit<BindingToolsArray<unknown>, keyof BindingToolsStandard<unknown>>>;
export declare const BindPropsExample: React.FC<IBindingProps<unknown>>;
