import * as React from 'react';
import { BindingToolsArray, BindingToolsStandard, HookReturn, IBindingProps, IFormConfig } from './form.types';
export declare const ConfigExample: React.FC<IFormConfig>;
export declare const HookReturnExample: React.FC<HookReturn<any>>;
export declare const FormPropExample: React.FC<BindingToolsStandard<any>>;
export declare const FormPropArrayExample: React.FC<Omit<BindingToolsArray<any>, keyof BindingToolsStandard<any>>>;
export declare const BindPropsExample: React.FC<IBindingProps<any>>;
