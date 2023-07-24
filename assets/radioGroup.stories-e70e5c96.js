import{j as R,F as _,a as u}from"./jsx-runtime-63e4a166.js";import{w as A,u as F,a as S,e as g}from"./index-3ffc2e85.js";import{u as Ge,e as Ve}from"./config.context-54240269.js";import{_ as k}from"./uniq-d447bef6.js";import{r as o}from"./index-c4905b50.js";import{c as Ie,a as qe,b as C}from"./index-c1bef199.js";import{$ as ee,b as D}from"./index-742b7287.js";import{$ as ne}from"./index-97ba0010.js";import{$ as De}from"./index-981f8501.js";import{$ as Ne}from"./index-92c228ee.js";import{$ as ke}from"./index-5277ee67.js";import{$ as Me}from"./index-1381309a.js";import{$ as He}from"./index-b8d80492.js";import{$ as Oe}from"./index-3d4ae170.js";import{c as J}from"./classNames-9011e307.js";import{a as ze,L as Le,u as N}from"./label.component-4408833d.js";import{g as Ue}from"./options-d4d63b36.js";import{V as Ke}from"./validationErrors.component-04b289b4.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./index-356e4a49.js";import"./index-07d1f67e.js";import"./useContentMemo-b4c57d54.js";const Q="rovingFocusGroup.onEntryFocus",je={bubbles:!1,cancelable:!0},te="RovingFocusGroup",[Z,xe,Ye]=De(te),[We,Ce]=ne(te,[Ye]),[Xe,Je]=We(te),Qe=o.forwardRef((e,t)=>o.createElement(Z.Provider,{scope:e.__scopeRovingFocusGroup},o.createElement(Z.Slot,{scope:e.__scopeRovingFocusGroup},o.createElement(Ze,k({},e,{ref:t}))))),Ze=o.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:a,loop:r=!1,dir:i,currentTabStopId:d,defaultCurrentTabStopId:$,onCurrentTabStopIdChange:p,onEntryFocus:s,...h}=e,b=o.useRef(null),v=ee(t,b),l=ke(i),[c=null,f]=Ie({prop:d,defaultProp:$,onChange:p}),[B,w]=o.useState(!1),I=qe(s),K=xe(n),P=o.useRef(!1),[j,G]=o.useState(0);return o.useEffect(()=>{const m=b.current;if(m)return m.addEventListener(Q,I),()=>m.removeEventListener(Q,I)},[I]),o.createElement(Xe,{scope:n,orientation:a,dir:l,loop:r,currentTabStopId:c,onItemFocus:o.useCallback(m=>f(m),[f]),onItemShiftTab:o.useCallback(()=>w(!0),[]),onFocusableItemAdd:o.useCallback(()=>G(m=>m+1),[]),onFocusableItemRemove:o.useCallback(()=>G(m=>m-1),[])},o.createElement(D.div,k({tabIndex:B||j===0?-1:0,"data-orientation":a},h,{ref:v,style:{outline:"none",...e.style},onMouseDown:C(e.onMouseDown,()=>{P.current=!0}),onFocus:C(e.onFocus,m=>{const Y=!P.current;if(m.target===m.currentTarget&&Y&&!B){const T=new CustomEvent(Q,je);if(m.currentTarget.dispatchEvent(T),!T.defaultPrevented){const y=K().filter(x=>x.focusable),W=y.find(x=>x.active),V=y.find(x=>x.id===c),M=[W,V,...y].filter(Boolean).map(x=>x.ref.current);Fe(M)}}P.current=!1}),onBlur:C(e.onBlur,()=>w(!1))})))}),en="RovingFocusGroupItem",nn=o.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:a=!0,active:r=!1,tabStopId:i,...d}=e,$=Ne(),p=i||$,s=Je(en,n),h=s.currentTabStopId===p,b=xe(n),{onFocusableItemAdd:v,onFocusableItemRemove:l}=s;return o.useEffect(()=>{if(a)return v(),()=>l()},[a,v,l]),o.createElement(Z.ItemSlot,{scope:n,id:p,focusable:a,active:r},o.createElement(D.span,k({tabIndex:h?0:-1,"data-orientation":s.orientation},d,{ref:t,onMouseDown:C(e.onMouseDown,c=>{a?s.onItemFocus(p):c.preventDefault()}),onFocus:C(e.onFocus,()=>s.onItemFocus(p)),onKeyDown:C(e.onKeyDown,c=>{if(c.key==="Tab"&&c.shiftKey){s.onItemShiftTab();return}if(c.target!==c.currentTarget)return;const f=an(c,s.orientation,s.dir);if(f!==void 0){c.preventDefault();let w=b().filter(I=>I.focusable).map(I=>I.ref.current);if(f==="last")w.reverse();else if(f==="prev"||f==="next"){f==="prev"&&w.reverse();const I=w.indexOf(c.currentTarget);w=s.loop?rn(w,I+1):w.slice(I+1)}setTimeout(()=>Fe(w))}})})))}),tn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function on(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function an(e,t,n){const a=on(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return tn[a]}function Fe(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function rn(e,t){return e.map((n,a)=>e[(t+a)%e.length])}const dn=Qe,cn=nn,Se="Radio",[sn,Be]=ne(Se),[ln,un]=sn(Se),pn=o.forwardRef((e,t)=>{const{__scopeRadio:n,name:a,checked:r=!1,required:i,disabled:d,value:$="on",onCheck:p,...s}=e,[h,b]=o.useState(null),v=ee(t,f=>b(f)),l=o.useRef(!1),c=h?!!h.closest("form"):!0;return o.createElement(ln,{scope:n,checked:r,disabled:d},o.createElement(D.button,k({type:"button",role:"radio","aria-checked":r,"data-state":_e(r),"data-disabled":d?"":void 0,disabled:d,value:$},s,{ref:v,onClick:C(e.onClick,f=>{r||p==null||p(),c&&(l.current=f.isPropagationStopped(),l.current||f.stopPropagation())})})),c&&o.createElement(bn,{control:h,bubbles:!l.current,name:a,value:$,checked:r,required:i,disabled:d,style:{transform:"translateX(-100%)"}}))}),fn="RadioIndicator",mn=o.forwardRef((e,t)=>{const{__scopeRadio:n,forceMount:a,...r}=e,i=un(fn,n);return o.createElement(Oe,{present:a||i.checked},o.createElement(D.span,k({"data-state":_e(i.checked),"data-disabled":i.disabled?"":void 0},r,{ref:t})))}),bn=e=>{const{control:t,checked:n,bubbles:a=!0,...r}=e,i=o.useRef(null),d=He(n),$=Me(t);return o.useEffect(()=>{const p=i.current,s=window.HTMLInputElement.prototype,b=Object.getOwnPropertyDescriptor(s,"checked").set;if(d!==n&&b){const v=new Event("click",{bubbles:a});b.call(p,n),p.dispatchEvent(v)}},[d,n,a]),o.createElement("input",k({type:"radio","aria-hidden":!0,defaultChecked:n},r,{tabIndex:-1,ref:i,style:{...e.style,...$,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function _e(e){return e?"checked":"unchecked"}const vn=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Te="RadioGroup",[$n,Zn]=ne(Te,[Ce,Be]),Ae=Ce(),Pe=Be(),[hn,gn]=$n(Te),wn=o.forwardRef((e,t)=>{const{__scopeRadioGroup:n,name:a,defaultValue:r,value:i,required:d=!1,disabled:$=!1,orientation:p,dir:s,loop:h=!0,onValueChange:b,...v}=e,l=Ae(n),c=ke(s),[f,B]=Ie({prop:i,defaultProp:r,onChange:b});return o.createElement(hn,{scope:n,name:a,required:d,disabled:$,value:f,onValueChange:B},o.createElement(dn,k({asChild:!0},l,{orientation:p,dir:c,loop:h}),o.createElement(D.div,k({role:"radiogroup","aria-required":d,"aria-orientation":p,"data-disabled":$?"":void 0,dir:c},v,{ref:t}))))}),yn="RadioGroupItem",En=o.forwardRef((e,t)=>{const{__scopeRadioGroup:n,disabled:a,...r}=e,i=gn(yn,n),d=i.disabled||a,$=Ae(n),p=Pe(n),s=o.useRef(null),h=ee(t,s),b=i.value===r.value,v=o.useRef(!1);return o.useEffect(()=>{const l=f=>{vn.includes(f.key)&&(v.current=!0)},c=()=>v.current=!1;return document.addEventListener("keydown",l),document.addEventListener("keyup",c),()=>{document.removeEventListener("keydown",l),document.removeEventListener("keyup",c)}},[]),o.createElement(cn,k({asChild:!0},$,{focusable:!d,active:b}),o.createElement(pn,k({disabled:d,required:i.required,checked:b},p,r,{name:i.name,ref:h,onCheck:()=>i.onValueChange(r.value),onKeyDown:C(l=>{l.key==="Enter"&&l.preventDefault()}),onFocus:C(r.onFocus,()=>{var l;v.current&&((l=s.current)===null||l===void 0||l.click())})})))}),Rn=o.forwardRef((e,t)=>{const{__scopeRadioGroup:n,...a}=e,r=Pe(n);return o.createElement(mn,k({},r,a,{ref:t}))}),In=wn,kn=En,xn=Rn;const E=o.forwardRef(({bind:e,options:t,className:n,value:a,errorIcon:r,validationMode:i,validationErrorMessages:d,onChange:$,customIndicator:p,error:s,displaySize:h,label:b,labelClassName:v,required:l,disabled:c,scrollValidationErrorsIntoView:f,requiredIndicator:B,displayMode:w,validationErrorsClassName:I,labelId:K,...P},j)=>{const G=Ge({validationMode:i,requiredIndicator:B,scrollValidationErrorsIntoView:f,validationErrorIcon:r,inputDisplaySize:h}),[m,Y,T]=ze(e,{value:a,validationErrorMessages:d,validationErrorIcon:r,validationMode:i,onChange:$});return R(_,{children:[b&&u(Le,{id:K,className:J("arm-radio-group-label",v),required:l,requiredIndicator:G.requiredIndicator,displaySize:G.inputDisplaySize,children:b}),u(In,{className:J("arm-radio-group",n),"data-error":s||!!(d!=null&&d.length),"data-disabled":c,"data-size":h,"data-mode":w,value:(m==null?void 0:m.toString())??"undefined",onValueChange:y=>Y(y),disabled:c,ref:j,...P,children:t.map((y,W)=>{var M,x,oe;const V=m===y.id,X=Ue(y,V);return R("div",{className:"arm-radio-group-item-container",children:[u(kn,{...y.htmlProps??{},className:"arm-radio-group-item",value:((M=y.id)==null?void 0:M.toString())??"",id:(x=y.id)==null?void 0:x.toString(),disabled:y.disabled,"data-checked":V,"data-index":W,children:w==="radio"?u(xn,{className:"arm-radio-group-item-indicator","data-custom-icon":!!p,children:V&&p}):X}),w==="radio"&&u("label",{className:"arm-radio-label",htmlFor:(oe=y.id)==null?void 0:oe.toString(),children:X})]},y.id)})}),T.shouldShowValidationErrorMessage&&T.validationErrorMessages&&u(Ke,{validationErrors:T.validationErrorMessages,className:J("arm-radio-errors",I)})]})});E.defaultProps={displayMode:"radio"};E.displayName="RadioGroup";try{E.displayName="RadioGroup",E.__docgenInfo={description:"Render a list of radio inputs which binds to a single string",displayName:"RadioGroup",props:{validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS className property",name:"className",required:!1,type:{name:"string"}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<Id>"}},value:{defaultValue:null,description:"the current value of the radioInput",name:"value",required:!1,type:{name:"ArmstrongId"}},label:{defaultValue:null,description:"Label for the whole radio group itself",name:"label",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Fired when the value changes",name:"onChange",required:!1,type:{name:"((newValue: Id) => void)"}},disabled:{defaultValue:null,description:"wether input's value can be changed by user",name:"disabled",required:!1,type:{name:"boolean"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Indicates if field must be used to submit form",name:"required",required:!1,type:{name:"boolean"}},customIndicator:{defaultValue:null,description:"(Optional) A custom JSX.Element for the checked indicator.",name:"customIndicator",required:!1,type:{name:"Element"}},labelClassName:{defaultValue:null,description:"(Optional) Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided",name:"labelId",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}},options:{defaultValue:null,description:"The options to be shown in the input",name:"options",required:!0,type:{name:'IArmstrongOption<Id, Omit<RadioGroupItemProps, "value">>[]'}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}},displayMode:{defaultValue:{value:"radio"},description:"Whether to show a vertical list of radio buttons or a horizontal set of adjacent buttons",name:"displayMode",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"radio"'}]}}}}}catch{}const et={title:"Components/RadioGroup",component:E,parameters:{docs:{description:{component:"metadata"}}}},q={render:()=>{const e={value:void 0},{formProp:t,formState:n}=N(e);return R(_,{children:[u(E,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}]}),u("br",{}),R("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=A(e),n=t.getByText("Bound value:"),[a,r,i,d]=await t.findAllByRole("radio");F.click(a),await S(()=>g(n).toHaveTextContent("Bound value: 1")),F.click(r),await S(()=>g(n).toHaveTextContent("Bound value: 2")),F.click(i),await S(()=>g(n).toHaveTextContent("Bound value: 3")),F.click(d),await S(()=>g(n).toHaveTextContent("Bound value: 4"))}},H={render:()=>{const e={value:void 0},{formProp:t,formState:n}=N(e);return R(_,{children:[u(E,{displayMode:"button",bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}]}),R("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=A(e),n=t.getByText("Bound value:"),[a,r,i,d]=await t.findAllByRole("radio");F.click(a),await S(()=>g(n).toHaveTextContent("Bound value: 1")),F.click(r),await S(()=>g(n).toHaveTextContent("Bound value: 2")),F.click(i),await S(()=>g(n).toHaveTextContent("Bound value: 3")),F.click(d),await S(()=>g(n).toHaveTextContent("Bound value: 4"))}},O={render:()=>{const e={value:void 0},{formProp:t,formState:n}=N(e);return R(_,{children:[u(E,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],label:"Radio group",disabled:!0}),u("br",{}),R("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{(await A(e).findAllByRole("radio")).forEach(a=>g(a).toHaveAttribute("data-disabled"))}},z={render:()=>{const e={value:void 0},{formProp:t,formState:n}=N(e);return R(_,{children:[u(E,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],validationErrorMessages:["Invalid selection"],label:"Radio group"}),u("br",{}),R("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=A(e);g(t.getByText("Invalid selection")).toBeVisible()}},L={render:()=>{const e={value:"1"},{formProp:t,formState:n}=N(e);return R(_,{children:[u(E,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],customIndicator:u(Ve,{})}),u("br",{}),R("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=A(e),n=await t.findByRole("radio",{checked:!0});g(n.getElementsByTagName("svg").length).toBeGreaterThan(0),(await t.findAllByRole("radio",{checked:!1})).forEach(r=>g(r.getElementsByTagName("svg")).toHaveLength(0))}},U={render:()=>R(_,{children:[u("h2",{children:"Large"}),u(E,{options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],displaySize:"large",label:"Large radio group",required:!0}),u("h2",{children:"Medium"}),u(E,{options:[{id:"1b",content:"red"},{id:"2b",content:"blue"},{id:"3b",content:"pink"},{id:"4b",content:"brown"}],displaySize:"medium",label:"Medium radio group",required:!0}),u("h2",{children:"Small"}),u(E,{options:[{id:"1c",content:"red"},{id:"2c",content:"blue"},{id:"3c",content:"pink"},{id:"4c",content:"brown"}],displaySize:"small",label:"Small radio group",required:!0})]}),play:async({canvasElement:e})=>{const t=A(e),[n,a,r]=await t.findAllByRole("radiogroup");g(n).toHaveAttribute("data-size","large"),g(a).toHaveAttribute("data-size","medium"),g(r).toHaveAttribute("data-size","small")}};var ae,re,ie,de,ce;q.parameters={...q.parameters,docs:{...(ae=q.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(re=q.parameters)==null?void 0:re.docs)==null?void 0:ie.source},description:{story:"stories",...(ce=(de=q.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};var se,le,ue;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ue=(le=H.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var pe,fe,me;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var be,ve,$e;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...($e=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:$e.source}}};var he,ge,we;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(we=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var ye,Ee,Re;U.parameters={...U.parameters,docs:{...(ye=U.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=U.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};const nt=["Default","ButtonMode","Disabled","ValidationError","CustomIcon","Sizes"];export{H as ButtonMode,L as CustomIcon,q as Default,O as Disabled,U as Sizes,z as ValidationError,nt as __namedExportsOrder,et as default};
//# sourceMappingURL=radioGroup.stories-e70e5c96.js.map
