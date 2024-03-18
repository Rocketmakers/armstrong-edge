import{j as T}from"./jsx-runtime-eae7a151.js";import{w as y,e as s}from"./index-16752634.js";import{V as E}from"./validationErrors.component-73671d2f.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-4dce63e4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./classNames-9011e307.js";import"./config.context-ae8741c8.js";const S={title:"Components/ValidationErrors",component:E,args:{validationErrors:["This field is required","This field requires 12 characters"]},parameters:{docs:{description:{component:"metadata"}}}},t={render:a=>T(E,{...a})},r={...t,play:async({args:a,canvasElement:g})=>{const e=y(g),u=e.getByText(a.validationErrors[0]??""),x=e.getByText(a.validationErrors[1]??"");s(u).toBeVisible(),s(x).toBeVisible()}},o={...t,args:{...t.args,validationMode:"icon"}};var i,n,c,p,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const validationError1 = canvas.getByText((args.validationErrors[0] as string) ?? '');
    const validationError2 = canvas.getByText((args.validationErrors[1] as string) ?? '');
    expect(validationError1).toBeVisible();
    expect(validationError2).toBeVisible();
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source},description:{story:"stories",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};var l,m,v;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    validationMode: 'icon'
  }
}`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const C=["Default","Icons"];export{r as Default,o as Icons,C as __namedExportsOrder,S as default};