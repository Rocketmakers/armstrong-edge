import{j as T}from"./jsx-runtime-Cl2eCCBe.js";import{w as y,e as t}from"./classNames-TtGgGdEV.js";import{V as E}from"./validationErrors.component-CgOcudhd.js";import"./index-Cqyox1Tj.js";import"./config.context-C5a6Dfld.js";const j={title:"Components/ValidationErrors",component:E,args:{validationErrors:["This field is required","This field requires 12 characters"]},parameters:{docs:{description:{component:"metadata"}}}},e={render:a=>T.jsx(E,{...a})},r={...e,play:async({args:a,canvasElement:g})=>{const s=y(g),u=s.getByText(a.validationErrors[0]??""),x=s.getByText(a.validationErrors[1]??"");t(u).toBeVisible(),t(x).toBeVisible()}},o={...e,args:{...e.args,validationMode:"icon"}};var n,i,c,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"stories",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};var p,m,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    validationMode: 'icon'
  }
}`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const w=["Default","Icons"];export{r as Default,o as Icons,w as __namedExportsOrder,j as default};
