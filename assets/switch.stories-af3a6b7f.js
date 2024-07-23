import{a as S,F as ee,j as s}from"./jsx-runtime-eae7a151.js";import{w as k,u as z,a as ae,e as l}from"./index-0aa9db1d.js";import{_ as T}from"./uniq-d447bef6.js";import{r as n}from"./index-c4905b50.js";import{$ as ce,b as se}from"./index-10b0f2c6.js";import{$ as le,a as te}from"./index-38f95ea5.js";import{$ as de}from"./index-97ba0010.js";import{$ as ue}from"./index-b8d80492.js";import{$ as pe}from"./index-20dac804.js";import{a as me}from"./useDidUpdateEffect-3fc0eff1.js";import{c as D}from"./classNames-9011e307.js";import{u as he}from"./config.context-108849f1.js";import{a as be,L as fe,u as we}from"./label.component-ee9b7c0c.js";import{V as ge}from"./validationErrors.component-d4c1ec01.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./index-07d1f67e.js";const ne="Switch",[ve,Ge]=de(ne),[ye,Se]=ve(ne),ke=n.forwardRef((e,t)=>{const{__scopeSwitch:a,name:o,checked:r,defaultChecked:h,required:u,disabled:i,value:p="on",onCheckedChange:g,...$}=e,[c,v]=n.useState(null),_=le(t,f=>v(f)),y=n.useRef(!1),x=c?!!c.closest("form"):!0,[b=!1,E]=ce({prop:r,defaultProp:h,onChange:g});return n.createElement(ye,{scope:a,checked:b,disabled:i},n.createElement(te.button,T({type:"button",role:"switch","aria-checked":b,"aria-required":u,"data-state":re(b),"data-disabled":i?"":void 0,disabled:i,value:p},$,{ref:_,onClick:se(e.onClick,f=>{E(M=>!M),x&&(y.current=f.isPropagationStopped(),y.current||f.stopPropagation())})})),x&&n.createElement(Ee,{control:c,bubbles:!y.current,name:o,value:p,checked:b,required:u,disabled:i,style:{transform:"translateX(-100%)"}}))}),$e="SwitchThumb",xe=n.forwardRef((e,t)=>{const{__scopeSwitch:a,...o}=e,r=Se($e,a);return n.createElement(te.span,T({"data-state":re(r.checked),"data-disabled":r.disabled?"":void 0},o,{ref:t}))}),Ee=e=>{const{control:t,checked:a,bubbles:o=!0,...r}=e,h=n.useRef(null),u=ue(a),i=pe(t);return n.useEffect(()=>{const p=h.current,g=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(g,"checked").set;if(u!==a&&c){const v=new Event("click",{bubbles:o});c.call(p,a),p.dispatchEvent(v)}},[u,a,o]),n.createElement("input",T({type:"checkbox","aria-hidden":!0,defaultChecked:a},r,{tabIndex:-1,ref:h,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function re(e){return e?"checked":"unchecked"}const Ce=ke,qe=xe;const d=n.forwardRef(({bind:e,checked:t,onCheckedChange:a,defaultChecked:o,disabled:r,className:h,labelClassName:u,label:i,validationErrorMessages:p,validationErrorsClassName:g,scrollValidationErrorsIntoView:$,validationMode:c,displaySize:v,labelId:_,required:y,requiredIndicator:x,autoValidate:b,...E},f)=>{const M=n.useId(),N=E.id??M,[R,C,m]=be(e,{value:t,onChange:a,validationErrorMessages:p,validationMode:c,autoValidate:b}),w=he({validationMode:m.validationMode,scrollValidationErrorsIntoView:$,inputDisplaySize:v,requiredIndicator:x,autoValidate:m.autoValidate}),oe=n.useCallback(ie=>{C==null||C(ie)},[C]);return me(()=>{w.autoValidate&&m.validate(),m.setTouched(!0)},[R]),S(ee,{children:[S("div",{className:D("arm-switch-container",h),"data-disabled":r,children:[s(Ce,{...E,className:"arm-switch",id:N,ref:f,disabled:r,defaultChecked:o,onCheckedChange:oe,checked:R??void 0,"data-size":w.inputDisplaySize,children:s(qe,{className:"arm-switch-nub"})}),s(fe,{id:_,required:y,requiredIndicator:w.requiredIndicator,className:D(u,"arm-switch-label"),"data-disabled":r,htmlFor:N,displaySize:w.inputDisplaySize,children:i})]}),m.validationErrorMessages&&m.shouldShowValidationErrorMessage&&s(ge,{className:g,validationMode:w.validationMode,validationErrors:m.validationErrorMessages,scrollIntoView:w.scrollValidationErrorsIntoView})]})});d.displayName="Switch";try{d.displayName="Switch",d.__docgenInfo={description:"",displayName:"Switch",props:{validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"(Optional) A boolean flag to automatically scroll validation error messages into view.",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},autoValidate:{defaultValue:null,description:"should the input validate automatically against the provided schema? Default: `true`",name:"autoValidate",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"(Optional) A React.ReactNode to display a label for the switch input.",name:"label",required:!1,type:{name:"ReactNode"}},defaultChecked:{defaultValue:null,description:"(Optional) The state of the switch when it is initially rendered. Use when you do not need to control its state.",name:"defaultChecked",required:!1,type:{name:"boolean"}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<TBind>"}},disabled:{defaultValue:null,description:"(Optional) A boolean flag to disable the checkbox input.",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Should the label show a required indicator?",name:"required",required:!1,type:{name:"boolean"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},validationErrorsClassName:{defaultValue:null,description:"(Optional) Class name for the validation errors",name:"validationErrorsClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"(Optional) Class name for the switch label.",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"Optional ID for the label element",name:"labelId",required:!1,type:{name:"string"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},checked:{defaultValue:null,description:"(Optional) Whether the switch is checked or not",name:"checked",required:!1,type:{name:"NullOrUndefined<boolean>"}},onCheckedChange:{defaultValue:null,description:"(Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed.",name:"onCheckedChange",required:!1,type:{name:"((newValue: TBind) => void)"}}}}}catch{}const Je={title:"Components/Switch",component:d,parameters:{docs:{description:{component:"A toggle-able switch component with validation"}}}},q={args:{label:"Airplane mode"},play:async({canvasElement:e})=>{const a=k(e).getByRole("switch");z.click(a),await ae(()=>l(a.getAttribute("aria-checked")).toBe("true"))}},V={args:{label:"Switch is disabled",disabled:!0},play:({canvasElement:e})=>{const a=k(e).getByRole("switch");l(a.getAttribute("data-disabled")),z.click(a),l(a.getAttribute("aria-checked")).toBe("false")}},B={args:{label:"Check",validationErrorMessages:["An error has occurred"]},play:({canvasElement:e})=>{const a=k(e).getByText("An error has occurred");l(a).toBeVisible()}},I={render:()=>S("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[s(d,{label:"Small Switch",displaySize:"small",required:!0}),s(d,{label:"Medium Switch",required:!0}),s(d,{label:"Large Switch",displaySize:"large",required:!0})]}),play:async({canvasElement:e})=>{const t=k(e),a=t.getByLabelText("Small Switch *"),o=t.getByLabelText("Medium Switch *"),r=t.getByLabelText("Large Switch *");l(a.getAttribute("data-size")).toEqual("small"),l(o.getAttribute("data-size")).toEqual("medium"),l(r.getAttribute("data-size")).toEqual("large")}},A={args:{label:"Bound label"},render:()=>{const{formProp:e,formState:t}=we({checked:!1});return S(ee,{children:[s(d,{bind:e("checked").bind()}),S("p",{"data-testid":"bound-result",children:["Bound value is ",t!=null&&t.checked?"checked":"not checked"]})]})},play:async({canvasElement:e})=>{const t=k(e),a=t.getByRole("switch");z.click(a),await ae(()=>l(t.getByTestId("bound-result")).toHaveTextContent("Bound value is checked"))}};var P,L,O;q.parameters={...q.parameters,docs:{...(P=q.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Airplane mode'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const switchInput = canvas.getByRole('switch');
    userEvent.click(switchInput);
    await waitFor(() => expect(switchInput.getAttribute('aria-checked')).toBe('true'));
  }
}`,...(O=(L=q.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var F,H,j;V.parameters={...V.parameters,docs:{...(F=V.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Switch is disabled',
    disabled: true
  },
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('switch');
    expect(checkbox.getAttribute('data-disabled'));
    userEvent.click(checkbox);
    expect(checkbox.getAttribute('aria-checked')).toBe('false');
  }
}`,...(j=(H=V.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var U,W,X;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Check',
    validationErrorMessages: ['An error has occurred']
  },
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const errorContainer = canvas.getByText('An error has occurred');
    expect(errorContainer).toBeVisible();
  }
}`,...(X=(W=B.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var G,J,K;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Switch label={'Small Switch'} displaySize="small" required={true} />
        <Switch label={'Medium Switch'} required={true} />
        <Switch label={'Large Switch'} displaySize="large" required={true} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallSwitch = canvas.getByLabelText('Small Switch *');
    const mediumSwitch = canvas.getByLabelText('Medium Switch *');
    const largeSwitch = canvas.getByLabelText('Large Switch *');
    expect(smallSwitch.getAttribute('data-size')).toEqual('small');
    expect(mediumSwitch.getAttribute('data-size')).toEqual('medium');
    expect(largeSwitch.getAttribute('data-size')).toEqual('large');
  }
}`,...(K=(J=I.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Bound label'
  },
  render: () => {
    const {
      formProp,
      formState
    } = useForm({
      checked: false
    });
    return <>
        <Switch bind={formProp('checked').bind()} />
        <p data-testid={'bound-result'}>Bound value is {formState?.checked ? 'checked' : 'not checked'}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const switchInput = canvas.getByRole('switch');
    userEvent.click(switchInput);
    await waitFor(() => expect(canvas.getByTestId('bound-result')).toHaveTextContent('Bound value is checked'));
  }
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ke=["Default","Disabled","ValidationError","Sizes","Bound"];export{A as Bound,q as Default,V as Disabled,I as Sizes,B as ValidationError,Ke as __namedExportsOrder,Je as default};
