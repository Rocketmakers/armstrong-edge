import{M as p,C as c,b as d}from"./chunk-PCJTTTQV-5116b126.js";import{T as a}from"./toast.component-0dc3f896.js";import{a as o,j as s,F as m}from"./jsx-runtime-63e4a166.js";import{u as i}from"./index-f875e932.js";import"./iframe-652f3534.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d3777853.js";import"./index-07d1f67e.js";import"./_baseIsEqual-62e1ad13.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-d37d4223.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./index-c1bef199.js";import"./index-742b7287.js";import"./index-981f8501.js";import"./index-97ba0010.js";import"./index-f6c914d3.js";import"./index-56da5f9a.js";import"./index-3d4ae170.js";import"./classNames-9011e307.js";function n(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},i(),e.components);return s(m,{children:[o(p,{title:"Modals/Toast",component:a}),`
`,o(t.h1,{id:"toast",children:"Toast"}),`
`,o(t.p,{children:"Toasts are small message modals that can be dispatched globally"}),`
`,o(t.h2,{id:"how-to-use-global-toast-in-your-app",children:"How to use global toast in your app"}),`
`,o(t.h3,{id:"step-1---wrap-your-app-in-the-provider",children:"Step 1 - Wrap your app in the provider"}),`
`,o(t.p,{children:"In order for global toast to work, you must first wrap your app in the unified armstrong provider, like so:"}),`
`,o(t.pre,{children:o(t.code,{className:"language-tsx",children:`import { ArmstrongProvider } from '@rocketmakers/armstrong-edge';

export const MyApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ArmstrongProvider>{children}</ArmstrongProvider>;
};
`})}),`
`,s(t.p,{children:["NOTE: The unified provider allows you to pass global Armstrong config as well as supports toast messages. If you specifically only want the toast messages, you can use ",o(t.code,{children:"<ToastProvider>"})," instead but this is not recommended."]}),`
`,o(t.h3,{id:"step-2---use-the-toast-hook-to-dispatch-a-toast-message",children:"Step 2 - Use the toast hook to dispatch a toast message"}),`
`,o(t.p,{children:"Toast messages can be dispatched from any component within the provider using the toast hook, like so:"}),`
`,o(t.pre,{children:o(t.code,{className:"language-tsx",children:`import { useToast, IToast } from '@rocketmakers/armstrong-edge';

export const MyComponent: React.FC = () => {
  const dispatchToast = useToast();

  const toastMessage: IToast = {
    title: 'Here is a toast!',
    description: 'Here is the description for my toast',
  };

  return <button onClick={() => dispatchToast(toastMessage)}>Send a toast</button>;
};
`})}),`
`,o(t.p,{children:"See it in action here:"}),`
`,o(c,{withSource:"closed",children:o(d,{id:"modals-toast--default"})}),`
`,o(t.h3,{id:"step-3-optional---configure-your-toast-using-armstrong-global-config",children:"Step 3 (optional) - Configure your toast using Armstrong global config"}),`
`,o(t.p,{children:"Toast messages come out of the box with a sensible set of default properties, but if you need to change the way toast behaves, you can pass config into the unified Armstrong provider like so:"}),`
`,o(t.pre,{children:o(t.code,{className:"language-tsx",children:`import { ArmstrongProvider } from '@rocketmakers/armstrong-edge';

export const MyApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ArmstrongProvider config={{ toastDuration: 10000, toastPosition: 'top-right' }}>{children}</ArmstrongProvider>
  );
};
`})}),`
`,s(t.p,{children:["NOTE: These settings can also be passed in as props to the ",o(t.code,{children:"<ToastProvider>"})," if you're using that, and ",o(t.code,{children:"duration"})," can also be set on a per-toast basis"]})]})}function l(e={}){const{wrapper:t}=Object.assign({},i(),e.components);return t?o(t,{...e,children:o(n,{...e})}):n(e)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const r={title:"Modals/Toast",component:a,tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:l};const W=["__page"];export{W as __namedExportsOrder,h as __page,r as default};
//# sourceMappingURL=toast.stories-6fc797a7.js.map
