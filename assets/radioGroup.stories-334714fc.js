import{a as R,F as A,j as u}from"./jsx-runtime-eae7a151.js";import{w as P,u as S,a as B,e as w}from"./index-aeb91708.js";import{u as Ge,e as qe}from"./config.context-ae8741c8.js";import{_ as x}from"./uniq-d447bef6.js";import{r as o}from"./index-c4905b50.js";import{c as ke,a as De,b as F}from"./index-c1bef199.js";import{$ as ee,b as q}from"./index-742b7287.js";import{$ as ne}from"./index-97ba0010.js";import{$ as Ne}from"./index-981f8501.js";import{$ as Me}from"./index-92c228ee.js";import{$ as xe}from"./index-5277ee67.js";import{$ as He}from"./index-1381309a.js";import{$ as Oe}from"./index-b8d80492.js";import{$ as ze}from"./index-3d4ae170.js";import{u as Le}from"./useDidUpdateEffect-7dd0d6b2.js";import{c as J}from"./classNames-9011e307.js";import{a as Ue,L as Ke,u as D}from"./label.component-092634ce.js";import{g as je}from"./options-d4d63b36.js";import{V as Ye}from"./validationErrors.component-73671d2f.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./index-07d1f67e.js";const Q="rovingFocusGroup.onEntryFocus",We={bubbles:!1,cancelable:!0},te="RovingFocusGroup",[Z,Ce,Xe]=Ne(te),[Je,Fe]=ne(te,[Xe]),[Qe,Ze]=Je(te),en=o.forwardRef((e,t)=>o.createElement(Z.Provider,{scope:e.__scopeRovingFocusGroup},o.createElement(Z.Slot,{scope:e.__scopeRovingFocusGroup},o.createElement(nn,x({},e,{ref:t}))))),nn=o.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:a,loop:r=!1,dir:i,currentTabStopId:d,defaultCurrentTabStopId:$,onCurrentTabStopIdChange:p,onEntryFocus:s,...h}=e,b=o.useRef(null),v=ee(t,b),l=xe(i),[c=null,m]=ke({prop:d,defaultProp:$,onChange:p}),[_,y]=o.useState(!1),I=De(s),j=Ce(n),V=o.useRef(!1),[Y,N]=o.useState(0);return o.useEffect(()=>{const f=b.current;if(f)return f.addEventListener(Q,I),()=>f.removeEventListener(Q,I)},[I]),o.createElement(Qe,{scope:n,orientation:a,dir:l,loop:r,currentTabStopId:c,onItemFocus:o.useCallback(f=>m(f),[m]),onItemShiftTab:o.useCallback(()=>y(!0),[]),onFocusableItemAdd:o.useCallback(()=>N(f=>f+1),[]),onFocusableItemRemove:o.useCallback(()=>N(f=>f-1),[])},o.createElement(q.div,x({tabIndex:_||Y===0?-1:0,"data-orientation":a},h,{ref:v,style:{outline:"none",...e.style},onMouseDown:F(e.onMouseDown,()=>{V.current=!0}),onFocus:F(e.onFocus,f=>{const W=!V.current;if(f.target===f.currentTarget&&W&&!_){const k=new CustomEvent(Q,We);if(f.currentTarget.dispatchEvent(k),!k.defaultPrevented){const T=j().filter(C=>C.focusable),g=T.find(C=>C.active),X=T.find(C=>C.id===c),H=[g,X,...T].filter(Boolean).map(C=>C.ref.current);Se(H)}}V.current=!1}),onBlur:F(e.onBlur,()=>y(!1))})))}),tn="RovingFocusGroupItem",on=o.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:a=!0,active:r=!1,tabStopId:i,...d}=e,$=Me(),p=i||$,s=Ze(tn,n),h=s.currentTabStopId===p,b=Ce(n),{onFocusableItemAdd:v,onFocusableItemRemove:l}=s;return o.useEffect(()=>{if(a)return v(),()=>l()},[a,v,l]),o.createElement(Z.ItemSlot,{scope:n,id:p,focusable:a,active:r},o.createElement(q.span,x({tabIndex:h?0:-1,"data-orientation":s.orientation},d,{ref:t,onMouseDown:F(e.onMouseDown,c=>{a?s.onItemFocus(p):c.preventDefault()}),onFocus:F(e.onFocus,()=>s.onItemFocus(p)),onKeyDown:F(e.onKeyDown,c=>{if(c.key==="Tab"&&c.shiftKey){s.onItemShiftTab();return}if(c.target!==c.currentTarget)return;const m=dn(c,s.orientation,s.dir);if(m!==void 0){c.preventDefault();let y=b().filter(I=>I.focusable).map(I=>I.ref.current);if(m==="last")y.reverse();else if(m==="prev"||m==="next"){m==="prev"&&y.reverse();const I=y.indexOf(c.currentTarget);y=s.loop?cn(y,I+1):y.slice(I+1)}setTimeout(()=>Se(y))}})})))}),an={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function rn(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function dn(e,t,n){const a=rn(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return an[a]}function Se(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function cn(e,t){return e.map((n,a)=>e[(t+a)%e.length])}const sn=en,ln=on,Be="Radio",[un,_e]=ne(Be),[pn,fn]=un(Be),mn=o.forwardRef((e,t)=>{const{__scopeRadio:n,name:a,checked:r=!1,required:i,disabled:d,value:$="on",onCheck:p,...s}=e,[h,b]=o.useState(null),v=ee(t,m=>b(m)),l=o.useRef(!1),c=h?!!h.closest("form"):!0;return o.createElement(pn,{scope:n,checked:r,disabled:d},o.createElement(q.button,x({type:"button",role:"radio","aria-checked":r,"data-state":Te(r),"data-disabled":d?"":void 0,disabled:d,value:$},s,{ref:v,onClick:F(e.onClick,m=>{r||p==null||p(),c&&(l.current=m.isPropagationStopped(),l.current||m.stopPropagation())})})),c&&o.createElement($n,{control:h,bubbles:!l.current,name:a,value:$,checked:r,required:i,disabled:d,style:{transform:"translateX(-100%)"}}))}),bn="RadioIndicator",vn=o.forwardRef((e,t)=>{const{__scopeRadio:n,forceMount:a,...r}=e,i=fn(bn,n);return o.createElement(ze,{present:a||i.checked},o.createElement(q.span,x({"data-state":Te(i.checked),"data-disabled":i.disabled?"":void 0},r,{ref:t})))}),$n=e=>{const{control:t,checked:n,bubbles:a=!0,...r}=e,i=o.useRef(null),d=Oe(n),$=He(t);return o.useEffect(()=>{const p=i.current,s=window.HTMLInputElement.prototype,b=Object.getOwnPropertyDescriptor(s,"checked").set;if(d!==n&&b){const v=new Event("click",{bubbles:a});b.call(p,n),p.dispatchEvent(v)}},[d,n,a]),o.createElement("input",x({type:"radio","aria-hidden":!0,defaultChecked:n},r,{tabIndex:-1,ref:i,style:{...e.style,...$,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function Te(e){return e?"checked":"unchecked"}const hn=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Ae="RadioGroup",[gn,et]=ne(Ae,[Fe,_e]),Pe=Fe(),Ve=_e(),[wn,yn]=gn(Ae),En=o.forwardRef((e,t)=>{const{__scopeRadioGroup:n,name:a,defaultValue:r,value:i,required:d=!1,disabled:$=!1,orientation:p,dir:s,loop:h=!0,onValueChange:b,...v}=e,l=Pe(n),c=xe(s),[m,_]=ke({prop:i,defaultProp:r,onChange:b});return o.createElement(wn,{scope:n,name:a,required:d,disabled:$,value:m,onValueChange:_},o.createElement(sn,x({asChild:!0},l,{orientation:p,dir:c,loop:h}),o.createElement(q.div,x({role:"radiogroup","aria-required":d,"aria-orientation":p,"data-disabled":$?"":void 0,dir:c},v,{ref:t}))))}),Rn="RadioGroupItem",In=o.forwardRef((e,t)=>{const{__scopeRadioGroup:n,disabled:a,...r}=e,i=yn(Rn,n),d=i.disabled||a,$=Pe(n),p=Ve(n),s=o.useRef(null),h=ee(t,s),b=i.value===r.value,v=o.useRef(!1);return o.useEffect(()=>{const l=m=>{hn.includes(m.key)&&(v.current=!0)},c=()=>v.current=!1;return document.addEventListener("keydown",l),document.addEventListener("keyup",c),()=>{document.removeEventListener("keydown",l),document.removeEventListener("keyup",c)}},[]),o.createElement(ln,x({asChild:!0},$,{focusable:!d,active:b}),o.createElement(mn,x({disabled:d,required:i.required,checked:b},p,r,{name:i.name,ref:h,onCheck:()=>i.onValueChange(r.value),onKeyDown:F(l=>{l.key==="Enter"&&l.preventDefault()}),onFocus:F(r.onFocus,()=>{var l;v.current&&((l=s.current)===null||l===void 0||l.click())})})))}),kn=o.forwardRef((e,t)=>{const{__scopeRadioGroup:n,...a}=e,r=Ve(n);return o.createElement(vn,x({},r,a,{ref:t}))}),xn=En,Cn=In,Fn=kn;const E=o.forwardRef(({bind:e,options:t,className:n,value:a,errorIcon:r,validationMode:i,validationErrorMessages:d,onChange:$,customIndicator:p,error:s,displaySize:h,label:b,labelClassName:v,required:l,disabled:c,scrollValidationErrorsIntoView:m,requiredIndicator:_,displayMode:y,validationErrorsClassName:I,labelId:j,autoValidate:V,...Y},N)=>{const[f,W,k]=Ue(e,{value:a,validationErrorMessages:d,validationErrorIcon:r,validationMode:i,onChange:$,autoValidate:V}),T=Ge({validationMode:k.validationMode,requiredIndicator:_,scrollValidationErrorsIntoView:m,validationErrorIcon:k.validationErrorIcon,inputDisplaySize:h,autoValidate:k.autoValidate});return Le(()=>{T.autoValidate&&k.validate(),k.setTouched(!0)},[f]),R(A,{children:[b&&u(Ke,{id:j,className:J("arm-radio-group-label",v),required:l,requiredIndicator:T.requiredIndicator,displaySize:T.inputDisplaySize,children:b}),u(xn,{className:J("arm-radio-group",n),"data-error":s||!!(d!=null&&d.length),"data-disabled":c,"data-size":h,"data-mode":y,value:(f==null?void 0:f.toString())??"undefined",onValueChange:g=>W(typeof f=="number"&&g!==null&&g!==void 0?+g:g),disabled:c,ref:N,...Y,children:t.map((g,X)=>{var C,oe,ae;const M=f===g.id,H=je(g,M);return R("div",{className:"arm-radio-group-item-container",children:[u(Cn,{...g.htmlProps??{},className:"arm-radio-group-item",value:((C=g.id)==null?void 0:C.toString())??"",id:(oe=g.id)==null?void 0:oe.toString(),disabled:g.disabled,"data-checked":M,"data-index":X,children:y==="radio"?u(Fn,{className:"arm-radio-group-item-indicator","data-custom-icon":!!p,children:M&&p}):H}),y==="radio"&&u("label",{className:"arm-radio-label",htmlFor:(ae=g.id)==null?void 0:ae.toString(),children:H})]},g.id)})}),k.shouldShowValidationErrorMessage&&k.validationErrorMessages&&u(Ye,{validationErrors:k.validationErrorMessages,className:J("arm-radio-errors",I)})]})});E.defaultProps={displayMode:"radio"};E.displayName="RadioGroup";try{E.displayName="RadioGroup",E.__docgenInfo={description:"Render a list of radio inputs which binds to a single string",displayName:"RadioGroup",props:{validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},autoValidate:{defaultValue:null,description:"should the input validate automatically against the provided schema? Default: `true`",name:"autoValidate",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for the whole radio group itself",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS className property",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Fired when the value changes",name:"onChange",required:!1,type:{name:"((newValue: Id) => void)"}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<Id>"}},value:{defaultValue:null,description:"the current value of the radioInput",name:"value",required:!1,type:{name:"ArmstrongId"}},disabled:{defaultValue:null,description:"wether input's value can be changed by user",name:"disabled",required:!1,type:{name:"boolean"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Indicates if field must be used to submit form",name:"required",required:!1,type:{name:"boolean"}},customIndicator:{defaultValue:null,description:"(Optional) A custom JSX.Element for the checked indicator.",name:"customIndicator",required:!1,type:{name:"Element"}},labelClassName:{defaultValue:null,description:"(Optional) Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided",name:"labelId",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}},options:{defaultValue:null,description:"The options to be shown in the input",name:"options",required:!0,type:{name:"RadioGroupOption<Id>[]"}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}},displayMode:{defaultValue:{value:"radio"},description:"Whether to show a vertical list of radio buttons or a horizontal set of adjacent buttons",name:"displayMode",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"radio"'}]}}}}}catch{}const nt={title:"Components/RadioGroup",component:E,parameters:{docs:{description:{component:"metadata"}}}},G={render:()=>{const e={value:void 0},{formProp:t,formState:n}=D(e);return R(A,{children:[u(E,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}]}),u("br",{}),R("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=P(e),n=t.getByText("Bound value:"),[a,r,i,d]=await t.findAllByRole("radio");S.click(a),await B(()=>w(n).toHaveTextContent("Bound value: 1")),S.click(r),await B(()=>w(n).toHaveTextContent("Bound value: 2")),S.click(i),await B(()=>w(n).toHaveTextContent("Bound value: 3")),S.click(d),await B(()=>w(n).toHaveTextContent("Bound value: 4"))}},O={render:()=>{const e={value:void 0},{formProp:t,formState:n}=D(e);return R(A,{children:[u(E,{displayMode:"button",bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}]}),R("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=P(e),n=t.getByText("Bound value:"),[a,r,i,d]=await t.findAllByRole("radio");S.click(a),await B(()=>w(n).toHaveTextContent("Bound value: 1")),S.click(r),await B(()=>w(n).toHaveTextContent("Bound value: 2")),S.click(i),await B(()=>w(n).toHaveTextContent("Bound value: 3")),S.click(d),await B(()=>w(n).toHaveTextContent("Bound value: 4"))}},z={render:()=>{const e={value:void 0},{formProp:t,formState:n}=D(e);return R(A,{children:[u(E,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],label:"Radio group",disabled:!0}),u("br",{}),R("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{(await P(e).findAllByRole("radio")).forEach(a=>w(a).toHaveAttribute("data-disabled"))}},L={render:()=>{const e={value:void 0},{formProp:t,formState:n}=D(e);return R(A,{children:[u(E,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],validationErrorMessages:["Invalid selection"],label:"Radio group"}),u("br",{}),R("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=P(e);w(t.getByText("Invalid selection")).toBeVisible()}},U={render:()=>{const e={value:"1"},{formProp:t,formState:n}=D(e);return R(A,{children:[u(E,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],customIndicator:u(qe,{})}),u("br",{}),R("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=P(e),n=await t.findByRole("radio",{checked:!0});w(n.getElementsByTagName("svg").length).toBeGreaterThan(0),(await t.findAllByRole("radio",{checked:!1})).forEach(r=>w(r.getElementsByTagName("svg")).toHaveLength(0))}},K={render:()=>R(A,{children:[u("h2",{children:"Large"}),u(E,{options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],displaySize:"large",label:"Large radio group",required:!0}),u("h2",{children:"Medium"}),u(E,{options:[{id:"1b",content:"red"},{id:"2b",content:"blue"},{id:"3b",content:"pink"},{id:"4b",content:"brown"}],displaySize:"medium",label:"Medium radio group",required:!0}),u("h2",{children:"Small"}),u(E,{options:[{id:"1c",content:"red"},{id:"2c",content:"blue"},{id:"3c",content:"pink"},{id:"4c",content:"brown"}],displaySize:"small",label:"Small radio group",required:!0})]}),play:async({canvasElement:e})=>{const t=P(e),[n,a,r]=await t.findAllByRole("radiogroup");w(n).toHaveAttribute("data-size","large"),w(a).toHaveAttribute("data-size","medium"),w(r).toHaveAttribute("data-size","small")}};var re,ie,de,ce,se;G.parameters={...G.parameters,docs:{...(re=G.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(de=(ie=G.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:"stories",...(se=(ce=G.parameters)==null?void 0:ce.docs)==null?void 0:se.description}}};var le,ue,pe;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var fe,me,be;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(me=z.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ve,$e,he;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(he=($e=L.parameters)==null?void 0:$e.docs)==null?void 0:he.source}}};var ge,we,ye;U.parameters={...U.parameters,docs:{...(ge=U.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(we=U.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Ee,Re,Ie;K.parameters={...K.parameters,docs:{...(Ee=K.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=K.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};const tt=["Default","ButtonMode","Disabled","ValidationError","CustomIcon","Sizes"];export{O as ButtonMode,U as CustomIcon,G as Default,z as Disabled,K as Sizes,L as ValidationError,tt as __namedExportsOrder,nt as default};
