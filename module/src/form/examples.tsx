import * as React from "react";

import type {
  BindingToolsArray,
  BindingToolsStandard,
  HookReturn,
  IBindingProps,
  IFormConfig,
} from "./types";

export const ConfigExample: React.FC<IFormConfig<unknown>> = () => null;
export const HookReturnExample: React.FC<HookReturn<{}>> = () => null;
export const FormPropExample: React.FC<BindingToolsStandard<unknown>> = () =>
  null;
export const FormPropArrayExample: React.FC<
  Omit<BindingToolsArray<unknown>, keyof BindingToolsStandard<unknown>>
> = () => null;
export const BindPropsExample: React.FC<IBindingProps<unknown>> = () => null;
