import{a as f,F as B,j as c}from"./jsx-runtime-eae7a151.js";import{w as I,u as E,a as R,e as l}from"./index-0aa9db1d.js";import{u as Se,e as Ve}from"./config.context-108849f1.js";import{_ as x}from"./uniq-d447bef6.js";import{r as o}from"./index-c4905b50.js";import{$ as qe,b as M}from"./index-10b0f2c6.js";import{a as z,$ as me}from"./index-38f95ea5.js";import{$ as fe}from"./index-97ba0010.js";import{$ as be,a as _e,b as Fe}from"./index-8417d5e9.js";import{$ as Ae}from"./index-5277ee67.js";import{$ as Pe}from"./index-20dac804.js";import{$ as Ge}from"./index-b8d80492.js";import{$ as Te}from"./index-bbcfa8f0.js";import{a as De}from"./useDidUpdateEffect-3fc0eff1.js";import{c as H}from"./classNames-9011e307.js";import{a as Ne,L as He,u as V}from"./label.component-ee9b7c0c.js";import{g as Me}from"./options-d4d63b36.js";import{V as ze}from"./validationErrors.component-d4c1ec01.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./index-07d1f67e.js";import"./index-f92d1054.js";import"./index-1927a3af.js";const ve="Radio",[Le,he]=fe(ve),[Oe,Ue]=Le(ve),je=o.forwardRef((n,a)=>{const{__scopeRadio:e,name:r,checked:t=!1,required:i,disabled:d,value:v="on",onCheck:u,...y}=n,[h,b]=o.useState(null),$=me(a,w=>b(w)),s=o.useRef(!1),g=h?!!h.closest("form"):!0;return o.createElement(Oe,{scope:e,checked:t,disabled:d},o.createElement(z.button,x({type:"button",role:"radio","aria-checked":t,"data-state":$e(t),"data-disabled":d?"":void 0,disabled:d,value:v},y,{ref:$,onClick:M(n.onClick,w=>{t||u==null||u(),g&&(s.current=w.isPropagationStopped(),s.current||w.stopPropagation())})})),g&&o.createElement(Xe,{control:h,bubbles:!s.current,name:r,value:v,checked:t,required:i,disabled:d,style:{transform:"translateX(-100%)"}}))}),Ke="RadioIndicator",We=o.forwardRef((n,a)=>{const{__scopeRadio:e,forceMount:r,...t}=n,i=Ue(Ke,e);return o.createElement(Te,{present:r||i.checked},o.createElement(z.span,x({"data-state":$e(i.checked),"data-disabled":i.disabled?"":void 0},t,{ref:a})))}),Xe=n=>{const{control:a,checked:e,bubbles:r=!0,...t}=n,i=o.useRef(null),d=Ge(e),v=Pe(a);return o.useEffect(()=>{const u=i.current,y=window.HTMLInputElement.prototype,b=Object.getOwnPropertyDescriptor(y,"checked").set;if(d!==e&&b){const $=new Event("click",{bubbles:r});b.call(u,e),u.dispatchEvent($)}},[d,e,r]),o.createElement("input",x({type:"radio","aria-hidden":!0,defaultChecked:e},t,{tabIndex:-1,ref:i,style:{...n.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $e(n){return n?"checked":"unchecked"}const Je=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ge="RadioGroup",[Ye,An]=fe(ge,[be,he]),ye=be(),we=he(),[Qe,Ze]=Ye(ge),en=o.forwardRef((n,a)=>{const{__scopeRadioGroup:e,name:r,defaultValue:t,value:i,required:d=!1,disabled:v=!1,orientation:u,dir:y,loop:h=!0,onValueChange:b,...$}=n,s=ye(e),g=Ae(y),[w,G]=qe({prop:i,defaultProp:t,onChange:b});return o.createElement(Qe,{scope:e,name:r,required:d,disabled:v,value:w,onValueChange:G},o.createElement(_e,x({asChild:!0},s,{orientation:u,dir:g,loop:h}),o.createElement(z.div,x({role:"radiogroup","aria-required":d,"aria-orientation":u,"data-disabled":v?"":void 0,dir:g},$,{ref:a}))))}),nn="RadioGroupItem",an=o.forwardRef((n,a)=>{const{__scopeRadioGroup:e,disabled:r,...t}=n,i=Ze(nn,e),d=i.disabled||r,v=ye(e),u=we(e),y=o.useRef(null),h=me(a,y),b=i.value===t.value,$=o.useRef(!1);return o.useEffect(()=>{const s=w=>{Je.includes(w.key)&&($.current=!0)},g=()=>$.current=!1;return document.addEventListener("keydown",s),document.addEventListener("keyup",g),()=>{document.removeEventListener("keydown",s),document.removeEventListener("keyup",g)}},[]),o.createElement(Fe,x({asChild:!0},v,{focusable:!d,active:b}),o.createElement(je,x({disabled:d,required:i.required,checked:b},u,t,{name:i.name,ref:h,onCheck:()=>i.onValueChange(t.value),onKeyDown:M(s=>{s.key==="Enter"&&s.preventDefault()}),onFocus:M(t.onFocus,()=>{var s;$.current&&((s=y.current)===null||s===void 0||s.click())})})))}),tn=o.forwardRef((n,a)=>{const{__scopeRadioGroup:e,...r}=n,t=we(e);return o.createElement(We,x({},t,r,{ref:a}))}),on=en,rn=an,dn=tn;const m=o.forwardRef(({bind:n,options:a,className:e,value:r,errorIcon:t,validationMode:i,validationErrorMessages:d,onChange:v,customIndicator:u,error:y,displaySize:h,label:b,labelClassName:$,required:s,disabled:g,scrollValidationErrorsIntoView:w,requiredIndicator:G,displayMode:T,validationErrorsClassName:ke,labelId:Ee,autoValidate:Re,...xe},Be)=>{const[C,Ce,k]=Ne(n,{value:r,validationErrorMessages:d,validationErrorIcon:t,validationMode:i,onChange:v,autoValidate:Re}),D=Se({validationMode:k.validationMode,requiredIndicator:G,scrollValidationErrorsIntoView:w,validationErrorIcon:k.validationErrorIcon,inputDisplaySize:h,autoValidate:k.autoValidate});return De(()=>{D.autoValidate&&k.validate(),k.setTouched(!0)},[C]),f(B,{children:[b&&c(He,{id:Ee,className:H("arm-radio-group-label",$),required:s,requiredIndicator:D.requiredIndicator,displaySize:D.inputDisplaySize,children:b}),c(on,{className:H("arm-radio-group",e),"data-error":y||!!(d!=null&&d.length),"data-disabled":g,"data-size":h,"data-mode":T,value:(C==null?void 0:C.toString())??"undefined",onValueChange:p=>Ce(typeof C=="number"&&p!==null&&p!==void 0?+p:p),disabled:g,ref:Be,...xe,children:a.map((p,Ie)=>{var O,U,j;const N=C===p.id,L=Me(p,N);return f("div",{className:"arm-radio-group-item-container",children:[c(rn,{...p.htmlProps??{},className:"arm-radio-group-item",value:((O=p.id)==null?void 0:O.toString())??"",id:(U=p.id)==null?void 0:U.toString(),disabled:p.disabled,"data-checked":N,"data-index":Ie,children:T==="radio"?c(dn,{className:"arm-radio-group-item-indicator","data-custom-icon":!!u,children:N&&u}):L}),T==="radio"&&c("label",{className:"arm-radio-label",htmlFor:(j=p.id)==null?void 0:j.toString(),children:L})]},p.id)})}),k.shouldShowValidationErrorMessage&&k.validationErrorMessages&&c(ze,{validationErrors:k.validationErrorMessages,className:H("arm-radio-errors",ke)})]})});m.defaultProps={displayMode:"radio"};m.displayName="RadioGroup";try{m.displayName="RadioGroup",m.__docgenInfo={description:"Render a list of radio inputs which binds to a single string",displayName:"RadioGroup",props:{validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},autoValidate:{defaultValue:null,description:"should the input validate automatically against the provided schema? Default: `true`",name:"autoValidate",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for the whole radio group itself",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS className property",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Fired when the value changes",name:"onChange",required:!1,type:{name:"((newValue: Id) => void)"}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<Id>"}},value:{defaultValue:null,description:"the current value of the radioInput",name:"value",required:!1,type:{name:"ArmstrongId"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},disabled:{defaultValue:null,description:"wether input's value can be changed by user",name:"disabled",required:!1,type:{name:"boolean"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},labelId:{defaultValue:null,description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided",name:"labelId",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Indicates if field must be used to submit form",name:"required",required:!1,type:{name:"boolean"}},labelClassName:{defaultValue:null,description:"(Optional) Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}},customIndicator:{defaultValue:null,description:"(Optional) A custom JSX.Element for the checked indicator.",name:"customIndicator",required:!1,type:{name:"Element"}},options:{defaultValue:null,description:"The options to be shown in the input",name:"options",required:!0,type:{name:"RadioGroupOption<Id>[]"}},displayMode:{defaultValue:{value:"radio"},description:"Whether to show a vertical list of radio buttons or a horizontal set of adjacent buttons",name:"displayMode",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"radio"'}]}}}}}catch{}const Pn={title:"Components/RadioGroup",component:m,parameters:{docs:{description:{component:"metadata"}}}},S={render:()=>{const n={value:void 0},{formProp:a,formState:e}=V(n);return f(B,{children:[c(m,{bind:a("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}]}),c("br",{}),f("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{const a=I(n),e=a.getByText("Bound value:"),[r,t,i,d]=await a.findAllByRole("radio");E.click(r),await R(()=>l(e).toHaveTextContent("Bound value: 1")),E.click(t),await R(()=>l(e).toHaveTextContent("Bound value: 2")),E.click(i),await R(()=>l(e).toHaveTextContent("Bound value: 3")),E.click(d),await R(()=>l(e).toHaveTextContent("Bound value: 4"))}},q={render:()=>{const n={value:void 0},{formProp:a,formState:e}=V(n);return f(B,{children:[c(m,{displayMode:"button",bind:a("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}]}),f("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{const a=I(n),e=a.getByText("Bound value:"),[r,t,i,d]=await a.findAllByRole("radio");E.click(r),await R(()=>l(e).toHaveTextContent("Bound value: 1")),E.click(t),await R(()=>l(e).toHaveTextContent("Bound value: 2")),E.click(i),await R(()=>l(e).toHaveTextContent("Bound value: 3")),E.click(d),await R(()=>l(e).toHaveTextContent("Bound value: 4"))}},_={render:()=>{const n={value:void 0},{formProp:a,formState:e}=V(n);return f(B,{children:[c(m,{bind:a("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],label:"Radio group",disabled:!0}),c("br",{}),f("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{(await I(n).findAllByRole("radio")).forEach(r=>l(r).toHaveAttribute("data-disabled"))}},F={render:()=>{const n={value:void 0},{formProp:a,formState:e}=V(n);return f(B,{children:[c(m,{bind:a("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],validationErrorMessages:["Invalid selection"],label:"Radio group"}),c("br",{}),f("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{const a=I(n);l(a.getByText("Invalid selection")).toBeVisible()}},A={render:()=>{const n={value:"1"},{formProp:a,formState:e}=V(n);return f(B,{children:[c(m,{bind:a("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],customIndicator:c(Ve,{})}),c("br",{}),f("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{const a=I(n),e=await a.findByRole("radio",{checked:!0});l(e.getElementsByTagName("svg").length).toBeGreaterThan(0),(await a.findAllByRole("radio",{checked:!1})).forEach(t=>l(t.getElementsByTagName("svg")).toHaveLength(0))}},P={render:()=>f(B,{children:[c("h2",{children:"Large"}),c(m,{options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],displaySize:"large",label:"Large radio group",required:!0}),c("h2",{children:"Medium"}),c(m,{options:[{id:"1b",content:"red"},{id:"2b",content:"blue"},{id:"3b",content:"pink"},{id:"4b",content:"brown"}],displaySize:"medium",label:"Medium radio group",required:!0}),c("h2",{children:"Small"}),c(m,{options:[{id:"1c",content:"red"},{id:"2c",content:"blue"},{id:"3c",content:"pink"},{id:"4c",content:"brown"}],displaySize:"small",label:"Small radio group",required:!0})]}),play:async({canvasElement:n})=>{const a=I(n),[e,r,t]=await a.findAllByRole("radiogroup");l(e).toHaveAttribute("data-size","large"),l(r).toHaveAttribute("data-size","medium"),l(t).toHaveAttribute("data-size","small")}};var K,W,X,J,Y;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: undefined
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText('Bound value:');
    const [red, blue, pink, brown] = await canvas.findAllByRole('radio');
    userEvent.click(red);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1'));
    userEvent.click(blue);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 2'));
    userEvent.click(pink);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
    userEvent.click(brown);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 4'));
  }
}`,...(X=(W=S.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:"stories",...(Y=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Y.description}}};var Q,Z,ee;q.parameters={...q.parameters,docs:{...(Q=q.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: undefined
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup displayMode="button" bind={formProp('value').bind()} options={[{
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
      }]} />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText('Bound value:');
    const [red, blue, pink, brown] = await canvas.findAllByRole('radio');
    userEvent.click(red);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1'));
    userEvent.click(blue);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 2'));
    userEvent.click(pink);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
    userEvent.click(brown);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 4'));
  }
}`,...(ee=(Z=q.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,te;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: undefined
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} label={'Radio group'} disabled />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = await canvas.findAllByRole('radio');
    radios.forEach(r => expect(r).toHaveAttribute('data-disabled'));
  }
}`,...(te=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,re,ie;F.parameters={...F.parameters,docs:{...(oe=F.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: undefined
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} validationErrorMessages={['Invalid selection']} label={'Radio group'} />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Invalid selection')).toBeVisible();
  }
}`,...(ie=(re=F.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var de,ce,se;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: '1'
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} customIndicator={<ImCheckmark />} />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioChecked = await canvas.findByRole('radio', {
      checked: true
    });
    expect(radioChecked.getElementsByTagName('svg').length).toBeGreaterThan(0);
    const radiosUnchecked = await canvas.findAllByRole('radio', {
      checked: false
    });
    radiosUnchecked.forEach(r => expect(r.getElementsByTagName('svg')).toHaveLength(0));
  }
}`,...(se=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var le,ue,pe;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Large</h2>
        <RadioGroup options={[{
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
      }]} displaySize="large" label="Large radio group" required />
        <h2>Medium</h2>
        <RadioGroup options={[{
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
      }]} displaySize="medium" label="Medium radio group" required />
        <h2>Small</h2>
        <RadioGroup options={[{
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
      }]} displaySize="small" label="Small radio group" required />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [large, medium, small] = await canvas.findAllByRole('radiogroup');
    expect(large).toHaveAttribute('data-size', 'large');
    expect(medium).toHaveAttribute('data-size', 'medium');
    expect(small).toHaveAttribute('data-size', 'small');
  }
}`,...(pe=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const Gn=["Default","ButtonMode","Disabled","ValidationError","CustomIcon","Sizes"];export{q as ButtonMode,A as CustomIcon,S as Default,_ as Disabled,P as Sizes,F as ValidationError,Gn as __namedExportsOrder,Pn as default};
