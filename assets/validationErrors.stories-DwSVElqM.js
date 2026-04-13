import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{w as V,e as n}from"./index-BmZcwVSF.js";import{V as b}from"./validationErrors.component-DUOh2-sl.js";import"./index-DwQS_Y10.js";import"./config.context-D0elZNgh.js";const _={title:"Components/ValidationErrors",component:b,args:{validationErrors:["This field is required","This field requires 12 characters"]},parameters:{docs:{description:{component:"metadata"}}}},e={render:a=>f.jsx(b,{...a})},s={...e,play:async({args:a,canvasElement:i})=>{const r=V(i),c=r.getByText(a.validationErrors[0]??""),l=r.getByText(a.validationErrors[1]??"");n(c).toBeVisible(),n(l).toBeVisible()}},o={...e,args:{...e.args,validationMode:"message"},play:async({args:a,canvasElement:i})=>{const r=V(i),c=r.getByText(a.validationErrors[0]??""),l=r.getByText(a.validationErrors[1]??"");n(c).toBeVisible(),n(l).toBeVisible()}},t={...e,args:{...e.args,validationMode:"icon"}};var d,p,m,v,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const validationError1 = canvas.getByText(args.validationErrors[0] as string ?? '');
    const validationError2 = canvas.getByText(args.validationErrors[1] as string ?? '');
    expect(validationError1).toBeVisible();
    expect(validationError2).toBeVisible();
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"stories",...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var E,x,y;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    validationMode: 'message'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const validationError1 = canvas.getByText(args.validationErrors[0] as string ?? '');
    const validationError2 = canvas.getByText(args.validationErrors[1] as string ?? '');
    expect(validationError1).toBeVisible();
    expect(validationError2).toBeVisible();
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,T,u;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    validationMode: 'icon'
  }
}`,...(u=(T=t.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};const q=["Default","Messages","Icons"];export{s as Default,t as Icons,o as Messages,q as __namedExportsOrder,_ as default};
