import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as N,w as q,u as V,a as ee,e as l,f as z}from"./index-BmZcwVSF.js";import{r as o}from"./index-DwQS_Y10.js";import{d as de,P as te,b as ue,c as he}from"./index-CWQsrU90.js";import{u as ae}from"./index-DKCiyFsV.js";import{u as pe}from"./index-51PM6oTJ.js";import{u as me}from"./index-D3JXVD-Y.js";import{a as be}from"./useDidUpdateEffect-Dtjk5cbT.js";import{u as ge}from"./config.context-Db4Op3G9.js";import{a as we,L as fe,u as ve}from"./label.component-DRWWDUYP.js";import{V as ye}from"./validationErrors.component-Cn_dkfWO.js";var P="Switch",[Se]=he(P),[ke,xe]=Se(P),ne=o.forwardRef((t,a)=>{const{__scopeSwitch:e,name:r,checked:s,defaultChecked:d,required:u,disabled:i,value:h="on",onCheckedChange:y,form:c,...S}=t,[b,g]=o.useState(null),k=ae(a,f=>g(f)),x=o.useRef(!1),R=b?c||!!b.closest("form"):!0,[w,I]=de({prop:s,defaultProp:d??!1,onChange:y,caller:P});return n.jsxs(ke,{scope:e,checked:w,disabled:i,children:[n.jsx(te.button,{type:"button",role:"switch","aria-checked":w,"aria-required":u,"data-state":ie(w),"data-disabled":i?"":void 0,disabled:i,value:h,...S,ref:k,onClick:ue(t.onClick,f=>{I(j=>!j),R&&(x.current=f.isPropagationStopped(),x.current||f.stopPropagation())})}),R&&n.jsx(oe,{control:b,bubbles:!x.current,name:r,value:h,checked:w,required:u,disabled:i,form:c,style:{transform:"translateX(-100%)"}})]})});ne.displayName=P;var se="SwitchThumb",re=o.forwardRef((t,a)=>{const{__scopeSwitch:e,...r}=t,s=xe(se,e);return n.jsx(te.span,{"data-state":ie(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:a})});re.displayName=se;var Ce="SwitchBubbleInput",oe=o.forwardRef(({__scopeSwitch:t,control:a,checked:e,bubbles:r=!0,...s},d)=>{const u=o.useRef(null),i=ae(u,d),h=pe(e),y=me(a);return o.useEffect(()=>{const c=u.current;if(!c)return;const S=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(S,"checked").set;if(h!==e&&g){const k=new Event("click",{bubbles:r});g.call(c,e),c.dispatchEvent(k)}},[h,e,r]),n.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:e,...s,tabIndex:-1,ref:i,style:{...s.style,...y,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});oe.displayName=Ce;function ie(t){return t?"checked":"unchecked"}var Ee=ne,Be=re;const m=({ref:t,bind:a,checked:e,onCheckedChange:r,defaultChecked:s,disabled:d,className:u,labelClassName:i,label:h,validationErrorMessages:y,validationErrorsClassName:c,scrollValidationErrorsIntoView:S,validationMode:b,displaySize:g,labelId:k,required:x,requiredIndicator:R,autoValidate:w,...I})=>{const f=o.useId(),j=I.id??f,[_,M,p]=we(a,{value:e,onChange:r,validationErrorMessages:y,validationMode:b,autoValidate:w}),v=ge({validationMode:p.validationMode,scrollValidationErrorsIntoView:S,inputDisplaySize:g,requiredIndicator:R,autoValidate:p.autoValidate}),ce=o.useCallback(le=>{M==null||M(le)},[M]);return be(()=>{v.autoValidate&&p.validate(),p.setTouched(!0)},[_]),n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:N("arm-switch-container",u),"data-disabled":d,children:[n.jsx(Ee,{...I,className:"arm-switch",id:j,ref:t,disabled:d,defaultChecked:s,onCheckedChange:ce,checked:_??void 0,"data-size":v.inputDisplaySize,children:n.jsx(Be,{className:"arm-switch-nub"})}),n.jsx(fe,{id:k,required:x,requiredIndicator:v.requiredIndicator,className:N(i,"arm-switch-label"),"data-disabled":d,htmlFor:j,displaySize:v.inputDisplaySize,children:h})]}),p.validationErrorMessages&&p.shouldShowValidationErrorMessage&&n.jsx(ye,{className:c,validationMode:v.validationMode,validationErrors:p.validationErrorMessages,scrollIntoView:v.scrollValidationErrorsIntoView})]})};m.displayName="Switch";m.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"TBind"}],raw:"IBindingProps<TBind>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},checked:{required:!1,tsType:{name:"TBind"},description:"(Optional) Whether the switch is checked or not"},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: TBind) => void",signature:{arguments:[{type:{name:"TBind"},name:"newValue"}],return:{name:"void"}}},description:"(Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"(Optional) The state of the switch when it is initially rendered. Use when you do not need to control its state."},disabled:{required:!1,tsType:{name:"boolean"},description:"(Optional) A boolean flag to disable the checkbox input."},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"(Optional) A React.ReactNode to display a label for the switch input."},labelClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the switch label."},scrollValidationErrorsIntoView:{required:!1,tsType:{name:"boolean"},description:"(Optional) A boolean flag to automatically scroll validation error messages into view."},validationErrorsClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the validation errors"},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}},composes:["Omit","Pick"]};const Te={title:"Components/Switch",component:m,parameters:{docs:{description:{component:"A toggle-able switch component with validation"}}}},C={args:{label:"Airplane mode",onCheckedChange:z()},play:async({canvasElement:t})=>{const e=q(t).getByRole("switch");V.click(e),await ee(()=>l(e.getAttribute("aria-checked")).toBe("true"))}},E={args:{label:"Switch is disabled",disabled:!0,onCheckedChange:z()},play:({canvasElement:t})=>{const e=q(t).getByRole("switch");l(e.getAttribute("data-disabled")),V.click(e),l(e.getAttribute("aria-checked")).toBe("false")}},B={args:{label:"Check",validationErrorMessages:["An error has occurred"],onCheckedChange:z()},play:({canvasElement:t})=>{const e=q(t).getByText("An error has occurred");l(e).toBeVisible()}},T={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsx(m,{label:"Small Switch",displaySize:"small",required:!0}),n.jsx(m,{label:"Medium Switch",required:!0}),n.jsx(m,{label:"Large Switch",displaySize:"large",required:!0})]}),play:async({canvasElement:t})=>{const a=q(t),e=a.getByLabelText("Small Switch *"),r=a.getByLabelText("Medium Switch *"),s=a.getByLabelText("Large Switch *");l(e.getAttribute("data-size")).toEqual("small"),l(r.getAttribute("data-size")).toEqual("medium"),l(s.getAttribute("data-size")).toEqual("large")}},A={args:{label:"Bound label",onCheckedChange:z()},render:()=>{const{formProp:t,formState:a}=ve({checked:!1});return n.jsxs(n.Fragment,{children:[n.jsx(m,{bind:t("checked").bind()}),n.jsxs("p",{"data-testid":"bound-result",children:["Bound value is ",a!=null&&a.checked?"checked":"not checked"]})]})},play:async({canvasElement:t})=>{const a=q(t),e=a.getByRole("switch");V.click(e),await ee(()=>l(a.getByTestId("bound-result")).toHaveTextContent("Bound value is checked"))}};var L,D,O;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Airplane mode',
    onCheckedChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const switchInput = canvas.getByRole('switch');
    userEvent.click(switchInput);
    await waitFor(() => expect(switchInput.getAttribute('aria-checked')).toBe('true'));
  }
}`,...(O=(D=C.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var F,H,U;E.parameters={...E.parameters,docs:{...(F=E.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Switch is disabled',
    disabled: true,
    onCheckedChange: fn()
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
}`,...(U=(H=E.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var W,$,X;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Check',
    validationErrorMessages: ['An error has occurred'],
    onCheckedChange: fn()
  },
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const errorContainer = canvas.getByText('An error has occurred');
    expect(errorContainer).toBeVisible();
  }
}`,...(X=($=B.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var G,J,K;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=T.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Bound label',
    onCheckedChange: fn()
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
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ae=["Default","Disabled","ValidationError","Sizes","Bound"],De=Object.freeze(Object.defineProperty({__proto__:null,Bound:A,Default:C,Disabled:E,Sizes:T,ValidationError:B,__namedExportsOrder:Ae,default:Te},Symbol.toStringTag,{value:"Module"}));export{A as B,C as D,m as S,B as V,T as a,E as b,De as s};
