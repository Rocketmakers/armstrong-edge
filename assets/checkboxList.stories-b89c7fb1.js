import{a as v,F as T,j as o}from"./jsx-runtime-eae7a151.js";import{w as f,u as p,a as b,e as r}from"./index-aeb91708.js";import{u as ue,c as me}from"./config.context-ae8741c8.js";import{r as q}from"./index-c4905b50.js";import{a as pe}from"./useDidUpdateEffect-8696afbd.js";import{C as be}from"./checkbox.component-e9466663.js";import{g as he}from"./options-d4d63b36.js";import{a as ve,L as fe,u as ye}from"./label.component-f65136f5.js";import{c as S}from"./classNames-9011e307.js";import{V as ge}from"./validationErrors.component-73671d2f.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./index-742b7287.js";import"./index-07d1f67e.js";import"./index-97ba0010.js";import"./index-c1bef199.js";import"./index-b8d80492.js";import"./index-1381309a.js";import"./index-3d4ae170.js";import"./statusWrapper.component-ecb2e7af.js";import"./spinner.component-a9fcb2ea.js";const d=q.forwardRef(({bind:t,options:a,className:e,value:n,errorIcon:i,validationMode:I,validationErrorMessages:u,onChange:Q,customIndicator:W,error:Y,displaySize:Z,label:z,labelClassName:$,labelId:ee,required:ae,disabled:N,scrollValidationErrorsIntoView:te,validationErrorsClassName:ne,requiredIndicator:re,autoValidate:oe,...ie},le)=>{const[l,y,s]=ve(t,{value:n,validationErrorMessages:u,validationErrorIcon:i,validationMode:I,onChange:Q,autoValidate:oe}),m=ue({validationMode:s.validationMode,requiredIndicator:re,scrollValidationErrorsIntoView:te,validationErrorIcon:s.validationErrorIcon,inputDisplaySize:Z,autoValidate:s.autoValidate}),se=q.useCallback((c,h)=>{const B=a.reduce((ce,V)=>{const A=V.id===c.id,de=(l==null?void 0:l.includes(V.id))?!A||h:A&&h;return[...ce,...de?[V.id]:[]]},[]);y==null||y(B)},[y,l,a]);return pe(()=>{m.autoValidate&&s.validate(),s.setTouched(!0)},[l]),v(T,{children:[z&&o(fe,{id:ee,className:S("arm-checkbox-list-label",$),required:ae,requiredIndicator:m.requiredIndicator,displaySize:m.inputDisplaySize,children:z}),v("div",{className:S("arm-checkbox-list",e),ref:le,"data-error":Y||!!(u!=null&&u.length),"data-disabled":N,"data-size":m.inputDisplaySize,...ie,children:[a.map(c=>{const h=l==null?void 0:l.includes(c.id);return q.createElement(be,{customIndicator:W,...c.htmlProps??{},key:c.id,className:"arm-checkbox-list-item",checked:h,displaySize:m.inputDisplaySize,onCheckedChange:B=>se(c,B),disabled:N||c.disabled,label:he(c,h)})}),s.shouldShowValidationErrorMessage&&s.validationErrorMessages&&o(ge,{validationErrors:s.validationErrorMessages,scrollIntoView:m.scrollValidationErrorsIntoView,className:S("arm-checkbox-list-errors",ne)})]})]})});d.displayName="CheckboxList";try{d.displayName="CheckboxList",d.__docgenInfo={description:"Render a list of radio inputs which binds to a single string",displayName:"CheckboxList",props:{validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},autoValidate:{defaultValue:null,description:"should the input validate automatically against the provided schema? Default: `true`",name:"autoValidate",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for the whole radio group itself",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS className property",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Fired when the value changes",name:"onChange",required:!1,type:{name:"((newValue: Id[]) => void)"}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<Id[]>"}},value:{defaultValue:null,description:"the current value of the radioInput",name:"value",required:!1,type:{name:"Id[]"}},disabled:{defaultValue:null,description:"wether input's value can be changed by user",name:"disabled",required:!1,type:{name:"boolean"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Indicates if field must be used to submit form",name:"required",required:!1,type:{name:"boolean"}},customIndicator:{defaultValue:null,description:"(Optional) A custom JSX.Element for the checked indicator.",name:"customIndicator",required:!1,type:{name:"Element"}},labelClassName:{defaultValue:null,description:"(Optional) Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided",name:"labelId",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}},options:{defaultValue:null,description:"The options to be shown in the input",name:"options",required:!0,type:{name:'IArmstrongOption<Id, Omit<ICheckboxProps<boolean>, "scrollValidationErrorsIntoView" | "ref" | "label" | "bind" | "disabled" | "validationErrorsClassName" | "checked" | "validationErrorMessages">>[]'}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}}}}}catch{}const Ke={title:"Components/CheckboxList",component:d},C={render:t=>{var n;const{formProp:a,formState:e}=ye();return v(T,{children:[o(d,{label:"Checkbox list",bind:a("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],...t}),o("br",{}),v("p",{children:["Bound value: ",(n=e==null?void 0:e.value)==null?void 0:n.join(", ")]})]})}},g={...C,play:async({canvasElement:t})=>{const a=f(t),e=a.getByText("Bound value:"),[n,i,I,u]=await a.findAllByRole("checkbox");p.click(n),await b(()=>r(e).toHaveTextContent("Bound value: 1")),p.click(i),await b(()=>r(e).toHaveTextContent("Bound value: 1, 2")),p.click(I),await b(()=>r(e).toHaveTextContent("Bound value: 1, 2, 3")),p.click(u),await b(()=>r(e).toHaveTextContent("Bound value: 1, 2, 3, 4")),p.click(i),await b(()=>r(e).toHaveTextContent("Bound value: 1, 3, 4"))}},x={...C,args:{disabled:!0},play:async({canvasElement:t})=>{(await f(t).findAllByRole("checkbox")).forEach(n=>r(n).toHaveAttribute("disabled"))}},k={...C,args:{validationErrorMessages:["Invalid selection"]},play:async({canvasElement:t})=>{const a=f(t);r(a.getByText("Invalid selection")).toBeVisible()}},w={...C,args:{customIndicator:o(me,{})},play:async({canvasElement:t})=>{const a=f(t),[e,...n]=await a.findAllByRole("checkbox");p.click(e),await b(()=>r(e.getElementsByTagName("svg").length).toBeGreaterThan(0)),n.forEach(i=>r(i.getElementsByTagName("svg")).toHaveLength(0))}},E={render:()=>v(T,{children:[o("h2",{children:"Large"}),o(d,{options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],displaySize:"large",label:"Large checkbox list","data-testid":"checkbox-container",required:!0}),o("h2",{children:"Medium"}),o(d,{options:[{id:"1b",content:"red"},{id:"2b",content:"blue"},{id:"3b",content:"pink"},{id:"4b",content:"brown"}],displaySize:"medium",label:"Medium checkbox list","data-testid":"checkbox-container",required:!0}),o("h2",{children:"Small"}),o(d,{options:[{id:"1c",content:"red"},{id:"2c",content:"blue"},{id:"3c",content:"pink"},{id:"4c",content:"brown"}],displaySize:"small",label:"Small checkbox list","data-testid":"checkbox-container",required:!0})]}),play:async({canvasElement:t})=>{const a=f(t),[e,n,i]=await a.findAllByTestId("checkbox-container");r(e).toHaveAttribute("data-size","large"),r(n).toHaveAttribute("data-size","medium"),r(i).toHaveAttribute("data-size","small")}};var H,L,F;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(L=g.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var M,_,D;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(_=x.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var R,O,P;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var U,X,K;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(X=E.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};const Qe=["Default","Disabled","ValidationError","CustomIcon","Sizes"];export{w as CustomIcon,g as Default,x as Disabled,E as Sizes,k as ValidationError,Qe as __namedExportsOrder,Ke as default};
