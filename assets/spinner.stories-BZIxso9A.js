import{j as b}from"./jsx-runtime-Cl2eCCBe.js";import{w as r,e as o}from"./index-Dv9et24K.js";import{a as E}from"./index.esm-DWUU67jo.js";import{S as h}from"./spinner.component-RFiNSZIp.js";import"./index-Cqyox1Tj.js";import"./config.context-CQ8yCtG8.js";const j={title:"Components/Spinner",component:h,parameters:{docs:{description:{component:"metadata"}}}},i={render:n=>b.jsx(h,{...n})},a={...i,play:async({canvasElement:n})=>{const e=r(n).getByRole("status",{name:"Loading..."});o(e).toBeInTheDocument()}},s={...i,args:{icon:b.jsx(E,{})},play:async({canvasElement:n})=>{const e=r(n).getByRole("status",{name:"Loading..."});o(e).toBeInTheDocument()}},t={...i,args:{label:"Loading..."},play:async({args:n,canvasElement:c})=>{const e=r(c),L=e.getByRole("status",{name:"Loading..."});o(L).toBeInTheDocument();const D=e.getByText(n.label);o(D).toBeVisible()}};var p,m,l,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var B,x,T;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    const label = canvas.getByText(args.label as string);
    expect(label).toBeVisible();
  }
}`,...(T=(x=t.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const _=["Default","CustomIcon","Labelled"];export{s as CustomIcon,a as Default,t as Labelled,_ as __namedExportsOrder,j as default};
