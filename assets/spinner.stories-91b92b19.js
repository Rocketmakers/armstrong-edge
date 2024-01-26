import{j as h}from"./jsx-runtime-eae7a151.js";import{w as c,e as o}from"./index-aeb91708.js";import{a as I}from"./index.esm-afca24e6.js";import{S as x}from"./spinner.component-a9fcb2ea.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./config.context-ae8741c8.js";import"./classNames-9011e307.js";const z={title:"Components/Spinner",component:x,parameters:{docs:{description:{component:"metadata"}}}},i={render:n=>h(x,{...n})},a={...i,play:async({canvasElement:n})=>{const e=c(n).getByRole("status",{name:"Loading..."});o(e).toBeInTheDocument()}},s={...i,args:{icon:h(I,{})},play:async({canvasElement:n})=>{const e=c(n).getByRole("status",{name:"Loading..."});o(e).toBeInTheDocument()}},t={...i,args:{label:"Loading..."},play:async({args:n,canvasElement:r})=>{const e=c(r),L=e.getByRole("status",{name:"Loading..."});o(L).toBeInTheDocument();const D=e.getByText(n.label);o(D).toBeVisible()}};var p,m,l,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status', {
      name: 'Loading...'
    });
    expect(spinner).toBeInTheDocument();
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source},description:{story:"stories",...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.description}}};var g,y,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    icon: <BiMinusCircle />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status', {
      name: 'Loading...'
    });
    expect(spinner).toBeInTheDocument();
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var B,T,b;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Loading...'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status', {
      name: 'Loading...'
    });
    expect(spinner).toBeInTheDocument();
    const label = canvas.getByText((args.label as string));
    expect(label).toBeVisible();
  }
}`,...(b=(T=t.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const A=["Default","CustomIcon","Labelled"];export{s as CustomIcon,a as Default,t as Labelled,A as __namedExportsOrder,z as default};
