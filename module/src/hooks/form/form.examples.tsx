import * as React from 'react';

import { BindingToolsArray, BindingToolsStandard, HookReturn, IFormConfig } from './form.types';

export const ConfigExample: React.FC<IFormConfig> = () => null;
export const HookReturnExample: React.FC<HookReturn<any>> = () => null;
export const FormPropExample: React.FC<BindingToolsStandard<any>> = () => null;
export const FormPropArrayExample: React.FC<Omit<BindingToolsArray<any>, keyof BindingToolsStandard<any>>> = () => null;
