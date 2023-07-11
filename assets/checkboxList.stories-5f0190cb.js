import{j as h,F as T,a as o}from"./jsx-runtime-63e4a166.js";import{w as v,u,a as m,e as r}from"./index-3ffc2e85.js";import{u as de,d as ue}from"./config.context-54240269.js";import{r as q}from"./index-c4905b50.js";import{C as me}from"./checkbox.component-72b316fb.js";import{g as pe}from"./options-d4d63b36.js";import{a as be,L as he,u as ve}from"./label.component-4408833d.js";import{c as S}from"./classNames-9011e307.js";import{V as fe}from"./validationErrors.component-04b289b4.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./index-742b7287.js";import"./index-07d1f67e.js";import"./index-97ba0010.js";import"./index-c1bef199.js";import"./index-b8d80492.js";import"./index-1381309a.js";import"./index-3d4ae170.js";import"./statusWrapper.component-9facb966.js";import"./spinner.component-5b0c70a5.js";import"./useContentMemo-b4c57d54.js";const l=q.forwardRef(({bind:t,options:a,className:e,value:n,errorIcon:i,validationMode:f,validationErrorMessages:d,onChange:U,customIndicator:W,error:Y,displaySize:Z,label:z,labelClassName:$,labelId:ee,required:ae,disabled:N,scrollValidationErrorsIntoView:te,validationErrorsClassName:ne,requiredIndicator:re,...oe},ie)=>{const p=de({validationMode:f,requiredIndicator:re,scrollValidationErrorsIntoView:te,validationErrorIcon:i,inputDisplaySize:Z}),[c,y,I]=be(t,{value:n,validationErrorMessages:d,validationErrorIcon:i,validationMode:f,onChange:U}),se=q.useCallback((s,b)=>{const B=a.reduce((le,V)=>{const A=V.id===s.id,ce=(c==null?void 0:c.includes(V.id))?!A||b:A&&b;return[...le,...ce?[V.id]:[]]},[]);y==null||y(B)},[y,c,a]);return h(T,{children:[z&&o(he,{id:ee,className:S("arm-checkbox-list-label",$),required:ae,requiredIndicator:p.requiredIndicator,displaySize:p.inputDisplaySize,children:z}),h("div",{className:S("arm-checkbox-list",e),ref:ie,"data-error":Y||!!(d!=null&&d.length),"data-disabled":N,"data-size":p.inputDisplaySize,...oe,children:[a.map(s=>{const b=c==null?void 0:c.includes(s.id);return q.createElement(me,{customIndicator:W,...s.htmlProps??{},key:s.id,className:"arm-checkbox-list-item",checked:b,displaySize:p.inputDisplaySize,onCheckedChange:B=>se(s,B),disabled:N||s.disabled,label:pe(s,b)})}),I.shouldShowValidationErrorMessage&&I.validationErrorMessages&&o(fe,{validationErrors:I.validationErrorMessages,scrollIntoView:p.scrollValidationErrorsIntoView,className:S("arm-checkbox-list-errors",ne)})]})]})});l.displayName="CheckboxList";try{l.displayName="CheckboxList",l.__docgenInfo={description:"Render a list of radio inputs which binds to a single string",displayName:"CheckboxList",props:{validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS className property",name:"className",required:!1,type:{name:"string"}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<Id[]>"}},value:{defaultValue:null,description:"the current value of the radioInput",name:"value",required:!1,type:{name:"Id[]"}},onChange:{defaultValue:null,description:"Fired when the value changes",name:"onChange",required:!1,type:{name:"((newValue: Id[]) => void)"}},label:{defaultValue:null,description:"Label for the whole radio group itself",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"wether input's value can be changed by user",name:"disabled",required:!1,type:{name:"boolean"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Indicates if field must be used to submit form",name:"required",required:!1,type:{name:"boolean"}},customIndicator:{defaultValue:null,description:"(Optional) A custom JSX.Element for the checked indicator.",name:"customIndicator",required:!1,type:{name:"Element"}},labelClassName:{defaultValue:null,description:"(Optional) Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided",name:"labelId",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}},options:{defaultValue:null,description:"The options to be shown in the input",name:"options",required:!0,type:{name:'IArmstrongOption<Id, Omit<ICheckboxProps<boolean>, "scrollValidationErrorsIntoView" | "ref" | "bind" | "label" | "disabled" | "validationErrorsClassName" | "checked" | "validationErrorMessages">>[]'}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}}}}}catch{}const Ke={title:"Components/CheckboxList",component:l},E={render:t=>{var n;const{formProp:a,formState:e}=ve();return h(T,{children:[o(l,{label:"Checkbox list",bind:a("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],...t}),o("br",{}),h("p",{children:["Bound value: ",(n=e==null?void 0:e.value)==null?void 0:n.join(", ")]})]})}},g={...E,play:async({canvasElement:t})=>{const a=v(t),e=a.getByText("Bound value:"),[n,i,f,d]=await a.findAllByRole("checkbox");u.click(n),await m(()=>r(e).toHaveTextContent("Bound value: 1")),u.click(i),await m(()=>r(e).toHaveTextContent("Bound value: 1, 2")),u.click(f),await m(()=>r(e).toHaveTextContent("Bound value: 1, 2, 3")),u.click(d),await m(()=>r(e).toHaveTextContent("Bound value: 1, 2, 3, 4")),u.click(i),await m(()=>r(e).toHaveTextContent("Bound value: 1, 3, 4"))}},x={...E,args:{disabled:!0},play:async({canvasElement:t})=>{(await v(t).findAllByRole("checkbox")).forEach(n=>r(n).toHaveAttribute("disabled"))}},k={...E,args:{validationErrorMessages:["Invalid selection"]},play:async({canvasElement:t})=>{const a=v(t);r(a.getByText("Invalid selection")).toBeVisible()}},w={...E,args:{customIndicator:o(ue,{})},play:async({canvasElement:t})=>{const a=v(t),[e,...n]=await a.findAllByRole("checkbox");u.click(e),await m(()=>r(e.getElementsByTagName("svg").length).toBeGreaterThan(0)),n.forEach(i=>r(i.getElementsByTagName("svg")).toHaveLength(0))}},C={render:()=>h(T,{children:[o("h2",{children:"Large"}),o(l,{options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],displaySize:"large",label:"Large checkbox list","data-testid":"checkbox-container",required:!0}),o("h2",{children:"Medium"}),o(l,{options:[{id:"1b",content:"red"},{id:"2b",content:"blue"},{id:"3b",content:"pink"},{id:"4b",content:"brown"}],displaySize:"medium",label:"Medium checkbox list","data-testid":"checkbox-container",required:!0}),o("h2",{children:"Small"}),o(l,{options:[{id:"1c",content:"red"},{id:"2c",content:"blue"},{id:"3c",content:"pink"},{id:"4c",content:"brown"}],displaySize:"small",label:"Small checkbox list","data-testid":"checkbox-container",required:!0})]}),play:async({canvasElement:t})=>{const a=v(t),[e,n,i]=await a.findAllByTestId("checkbox-container");r(e).toHaveAttribute("data-size","large"),r(n).toHaveAttribute("data-size","medium"),r(i).toHaveAttribute("data-size","small")}};var H,L,F;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText('Bound value:');
    const [red, blue, pink, brown] = await canvas.findAllByRole('checkbox');
    userEvent.click(red);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1'));
    userEvent.click(blue);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1, 2'));
    userEvent.click(pink);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1, 2, 3'));
    userEvent.click(brown);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1, 2, 3, 4'));
    userEvent.click(blue);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1, 3, 4'));
  }
}`,...(F=(L=g.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var _,M,R;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = await canvas.findAllByRole('checkbox');
    radios.forEach(r => expect(r).toHaveAttribute('disabled'));
  }
}`,...(R=(M=x.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var D,O,P;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    validationErrorMessages: ['Invalid selection']
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Invalid selection')).toBeVisible();
  }
}`,...(P=(O=k.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var j,G,J;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    customIndicator: <ImPlus />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [red, ...rest] = await canvas.findAllByRole('checkbox');
    userEvent.click(red);
    await waitFor(() => expect(red.getElementsByTagName('svg').length).toBeGreaterThan(0));
    rest.forEach(r => expect(r.getElementsByTagName('svg')).toHaveLength(0));
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,K,Q;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Large</h2>
        <CheckboxList options={[{
        id: '1',
        content: 'red'
      }, {
        id: '2',
        content: 'blue'
      }, {
        id: '3',
        content: 'pink'
      }, {
        id: '4',
        content: 'brown'
      }]} displaySize="large" label="Large checkbox list" data-testid="checkbox-container" required />
        <h2>Medium</h2>
        <CheckboxList options={[{
        id: '1b',
        content: 'red'
      }, {
        id: '2b',
        content: 'blue'
      }, {
        id: '3b',
        content: 'pink'
      }, {
        id: '4b',
        content: 'brown'
      }]} displaySize="medium" label="Medium checkbox list" data-testid="checkbox-container" required />
        <h2>Small</h2>
        <CheckboxList options={[{
        id: '1c',
        content: 'red'
      }, {
        id: '2c',
        content: 'blue'
      }, {
        id: '3c',
        content: 'pink'
      }, {
        id: '4c',
        content: 'brown'
      }]} displaySize="small" label="Small checkbox list" data-testid="checkbox-container" required />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [large, medium, small] = await canvas.findAllByTestId('checkbox-container');
    expect(large).toHaveAttribute('data-size', 'large');
    expect(medium).toHaveAttribute('data-size', 'medium');
    expect(small).toHaveAttribute('data-size', 'small');
  }
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Qe=["Default","Disabled","ValidationError","CustomIcon","Sizes"];export{w as CustomIcon,g as Default,x as Disabled,C as Sizes,k as ValidationError,Qe as __namedExportsOrder,Ke as default};
//# sourceMappingURL=checkboxList.stories-5f0190cb.js.map
