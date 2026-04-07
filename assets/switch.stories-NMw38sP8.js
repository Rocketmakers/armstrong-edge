import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as N,w as A,u as V,a as te,e as c,f as z}from"./index-BmZcwVSF.js";import{r as p,R as L}from"./index-DwQS_Y10.js";import{d as ue,P as ae,b as he,c as pe}from"./index-CWQsrU90.js";import{u as ne}from"./index-DKCiyFsV.js";import{u as me}from"./index-51PM6oTJ.js";import{u as be}from"./index-D3JXVD-Y.js";import{a as ge}from"./useDidUpdateEffect-DxNflIL8.js";import{u as we}from"./config.context-BKnTehkl.js";import{a as fe,L as ve,u as ye}from"./label.component-CwmwBemr.js";import{V as Se}from"./validationErrors.component-44eD-gIZ.js";var P="Switch",[ke]=pe(P),[xe,Ce]=ke(P),se=p.forwardRef((t,a)=>{const{__scopeSwitch:e,name:r,checked:s,defaultChecked:l,required:d,disabled:o,value:u="on",onCheckedChange:y,form:i,...S}=t,[b,g]=p.useState(null),k=ne(a,f=>g(f)),x=p.useRef(!1),q=b?i||!!b.closest("form"):!0,[w,I]=ue({prop:s,defaultProp:l??!1,onChange:y,caller:P});return n.jsxs(xe,{scope:e,checked:w,disabled:o,children:[n.jsx(ae.button,{type:"button",role:"switch","aria-checked":w,"aria-required":d,"data-state":ce(w),"data-disabled":o?"":void 0,disabled:o,value:u,...S,ref:k,onClick:he(t.onClick,f=>{I(j=>!j),q&&(x.current=f.isPropagationStopped(),x.current||f.stopPropagation())})}),q&&n.jsx(ie,{control:b,bubbles:!x.current,name:r,value:u,checked:w,required:d,disabled:o,form:i,style:{transform:"translateX(-100%)"}})]})});se.displayName=P;var re="SwitchThumb",oe=p.forwardRef((t,a)=>{const{__scopeSwitch:e,...r}=t,s=Ce(re,e);return n.jsx(ae.span,{"data-state":ce(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:a})});oe.displayName=re;var Ee="SwitchBubbleInput",ie=p.forwardRef(({__scopeSwitch:t,control:a,checked:e,bubbles:r=!0,...s},l)=>{const d=p.useRef(null),o=ne(d,l),u=me(e),y=be(a);return p.useEffect(()=>{const i=d.current;if(!i)return;const S=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(S,"checked").set;if(u!==e&&g){const k=new Event("click",{bubbles:r});g.call(i,e),i.dispatchEvent(k)}},[u,e,r]),n.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:e,...s,tabIndex:-1,ref:o,style:{...s.style,...y,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});ie.displayName=Ee;function ce(t){return t?"checked":"unchecked"}var Be=se,Te=oe;const m=({ref:t,bind:a,checked:e,onCheckedChange:r,defaultChecked:s,disabled:l,className:d,labelClassName:o,label:u,validationErrorMessages:y,validationErrorsClassName:i,scrollValidationErrorsIntoView:S,validationMode:b,displaySize:g,labelId:k,required:x,requiredIndicator:q,autoValidate:w,...I})=>{const f=L.useId(),j=I.id??f,[_,M,h]=fe(a,{value:e,onChange:r,validationErrorMessages:y,validationMode:b,autoValidate:w}),v=we({validationMode:h.validationMode,scrollValidationErrorsIntoView:S,inputDisplaySize:g,requiredIndicator:q,autoValidate:h.autoValidate}),le=L.useCallback(de=>{M==null||M(de)},[M]);return ge(()=>{v.autoValidate&&h.validate(),h.setTouched(!0)},[_]),n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:N("arm-switch-container",d),"data-disabled":l,children:[n.jsx(Be,{...I,className:"arm-switch",id:j,ref:t,disabled:l,defaultChecked:s,onCheckedChange:le,checked:_??void 0,"data-size":v.inputDisplaySize,children:n.jsx(Te,{className:"arm-switch-nub"})}),n.jsx(ve,{id:k,required:x,requiredIndicator:v.requiredIndicator,className:N(o,"arm-switch-label"),"data-disabled":l,htmlFor:j,displaySize:v.inputDisplaySize,children:u})]}),h.validationErrorMessages&&h.shouldShowValidationErrorMessage&&n.jsx(Se,{className:i,validationMode:v.validationMode,validationErrors:h.validationErrorMessages,scrollIntoView:v.scrollValidationErrorsIntoView})]})};m.displayName="Switch";m.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"TBind"}],raw:"IBindingProps<TBind>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},checked:{required:!1,tsType:{name:"TBind"},description:"(Optional) Whether the switch is checked or not"},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: TBind) => void",signature:{arguments:[{type:{name:"TBind"},name:"newValue"}],return:{name:"void"}}},description:"(Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"(Optional) The state of the switch when it is initially rendered. Use when you do not need to control its state."},disabled:{required:!1,tsType:{name:"boolean"},description:"(Optional) A boolean flag to disable the checkbox input."},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"(Optional) A React.ReactNode to display a label for the switch input."},labelClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the switch label."},scrollValidationErrorsIntoView:{required:!1,tsType:{name:"boolean"},description:"(Optional) A boolean flag to automatically scroll validation error messages into view."},validationErrorsClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the validation errors"},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}},composes:["Omit","Pick"]};const Re={title:"Components/Switch",component:m,parameters:{docs:{description:{component:"A toggle-able switch component with validation"}}}},C={args:{label:"Airplane mode",onCheckedChange:z()},play:async({canvasElement:t})=>{const e=A(t).getByRole("switch");V.click(e),await te(()=>c(e.getAttribute("aria-checked")).toBe("true"))}},E={args:{label:"Switch is disabled",disabled:!0,onCheckedChange:z()},play:({canvasElement:t})=>{const e=A(t).getByRole("switch");c(e.getAttribute("data-disabled")),V.click(e),c(e.getAttribute("aria-checked")).toBe("false")}},B={args:{label:"Check",validationErrorMessages:["An error has occurred"],onCheckedChange:z()},play:({canvasElement:t})=>{const e=A(t).getByText("An error has occurred");c(e).toBeVisible()}},T={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsx(m,{label:"Small Switch",displaySize:"small",required:!0}),n.jsx(m,{label:"Medium Switch",required:!0}),n.jsx(m,{label:"Large Switch",displaySize:"large",required:!0})]}),play:async({canvasElement:t})=>{const a=A(t),e=a.getByLabelText("Small Switch *"),r=a.getByLabelText("Medium Switch *"),s=a.getByLabelText("Large Switch *");c(e.getAttribute("data-size")).toEqual("small"),c(r.getAttribute("data-size")).toEqual("medium"),c(s.getAttribute("data-size")).toEqual("large")}},R={args:{label:"Bound label",onCheckedChange:z()},render:()=>{const{formProp:t,formState:a}=ye({checked:!1});return n.jsxs(n.Fragment,{children:[n.jsx(m,{bind:t("checked").bind()}),n.jsxs("p",{"data-testid":"bound-result",children:["Bound value is ",a!=null&&a.checked?"checked":"not checked"]})]})},play:async({canvasElement:t})=>{const a=A(t),e=a.getByRole("switch");V.click(e),await te(()=>c(a.getByTestId("bound-result")).toHaveTextContent("Bound value is checked"))}};var D,O,F;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(O=C.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var H,U,W;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(U=E.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var $,X,G;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(X=B.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,K,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ae=["Default","Disabled","ValidationError","Sizes","Bound"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Bound:R,Default:C,Disabled:E,Sizes:T,ValidationError:B,__namedExportsOrder:Ae,default:Re},Symbol.toStringTag,{value:"Module"}));export{R as B,C as D,m as S,B as V,T as a,E as b,Oe as s};
