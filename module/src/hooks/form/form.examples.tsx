import * as React from 'react';

import { BindingToolsArray, BindingToolsStandard, HookReturn, IBindingProps, IFormConfig } from './form.types';

export const ConfigExample: React.FC<IFormConfig<any>> = () => null;
export const HookReturnExample: React.FC<HookReturn<any>> = () => null;
export const FormPropExample: React.FC<BindingToolsStandard<any>> = () => null;
export const FormPropArrayExample: React.FC<Omit<BindingToolsArray<any>, keyof BindingToolsStandard<any>>> = () => null;
export const BindPropsExample: React.FC<IBindingProps<any>> = () => null;
