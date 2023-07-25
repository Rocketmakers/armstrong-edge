import{j as y,F as Y,a as i}from"./jsx-runtime-63e4a166.js";import{w as S,u as z,a as Z,e as l}from"./index-3ffc2e85.js";import{_ as T}from"./uniq-d447bef6.js";import{r as n}from"./index-c4905b50.js";import{c as ce,b as se}from"./index-c1bef199.js";import{$ as ie,b as ee}from"./index-742b7287.js";import{$ as le}from"./index-97ba0010.js";import{$ as de}from"./index-b8d80492.js";import{$ as ue}from"./index-1381309a.js";import{c as N}from"./classNames-9011e307.js";import{u as pe}from"./config.context-54240269.js";import{a as me,L as be,u as he}from"./label.component-4408833d.js";import{V as fe}from"./validationErrors.component-04b289b4.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./index-356e4a49.js";import"./index-07d1f67e.js";import"./useContentMemo-b4c57d54.js";const ae="Switch",[we,Xe]=le(ae),[ge,ve]=we(ae),ye=n.forwardRef((e,t)=>{const{__scopeSwitch:a,name:o,checked:r,defaultChecked:b,required:u,disabled:c,value:p="on",onCheckedChange:w,...k}=e,[s,g]=n.useState(null),A=ie(t,h=>g(h)),v=n.useRef(!1),$=s?!!s.closest("form"):!0,[m=!1,_]=ce({prop:r,defaultProp:b,onChange:w});return n.createElement(ge,{scope:a,checked:m,disabled:c},n.createElement(ee.button,T({type:"button",role:"switch","aria-checked":m,"aria-required":u,"data-state":te(m),"data-disabled":c?"":void 0,disabled:c,value:p},k,{ref:A,onClick:se(e.onClick,h=>{_(x=>!x),$&&(v.current=h.isPropagationStopped(),v.current||h.stopPropagation())})})),$&&n.createElement($e,{control:s,bubbles:!v.current,name:o,value:p,checked:m,required:u,disabled:c,style:{transform:"translateX(-100%)"}}))}),Se="SwitchThumb",ke=n.forwardRef((e,t)=>{const{__scopeSwitch:a,...o}=e,r=ve(Se,a);return n.createElement(ee.span,T({"data-state":te(r.checked),"data-disabled":r.disabled?"":void 0},o,{ref:t}))}),$e=e=>{const{control:t,checked:a,bubbles:o=!0,...r}=e,b=n.useRef(null),u=de(a),c=ue(t);return n.useEffect(()=>{const p=b.current,w=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor(w,"checked").set;if(u!==a&&s){const g=new Event("click",{bubbles:o});s.call(p,a),p.dispatchEvent(g)}},[u,a,o]),n.createElement("input",T({type:"checkbox","aria-hidden":!0,defaultChecked:a},r,{tabIndex:-1,ref:b,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function te(e){return e?"checked":"unchecked"}const xe=ye,Ee=ke;const d=n.forwardRef(({bind:e,checked:t,onCheckedChange:a,defaultChecked:o,disabled:r,className:b,labelClassName:u,label:c,validationErrorMessages:p,validationErrorsClassName:w,scrollValidationErrorsIntoView:k,validationMode:s,displaySize:g,labelId:A,required:v,requiredIndicator:$,...m},_)=>{const h=n.useId(),x=m.id??h,f=pe({validationMode:s,scrollValidationErrorsIntoView:k,inputDisplaySize:g,requiredIndicator:$}),[ne,E,M]=me(e,{value:t,onChange:a,validationErrorMessages:p,validationMode:f.validationMode}),re=n.useCallback(oe=>{E==null||E(oe)},[E]);return y(Y,{children:[y("div",{className:N("arm-switch-container",b),"data-disabled":r,children:[i(xe,{...m,className:"arm-switch",id:x,ref:_,disabled:r,defaultChecked:o,onCheckedChange:re,checked:ne??void 0,"data-size":f.inputDisplaySize,children:i(Ee,{className:"arm-switch-nub"})}),i(be,{id:A,required:v,requiredIndicator:f.requiredIndicator,className:N(u,"arm-switch-label"),"data-disabled":r,htmlFor:x,displaySize:f.inputDisplaySize,children:c})]}),M.validationErrorMessages&&M.shouldShowValidationErrorMessage&&i(fe,{className:w,validationMode:f.validationMode,validationErrors:M.validationErrorMessages,scrollIntoView:f.scrollValidationErrorsIntoView})]})});d.displayName="Switch";try{d.displayName="Switch",d.__docgenInfo={description:"",displayName:"Switch",props:{validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"(Optional) A boolean flag to automatically scroll validation error messages into view.",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<TBind>"}},label:{defaultValue:null,description:"(Optional) A React.ReactNode to display a label for the switch input.",name:"label",required:!1,type:{name:"ReactNode"}},defaultChecked:{defaultValue:null,description:"(Optional) The state of the switch when it is initially rendered. Use when you do not need to control its state.",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"(Optional) A boolean flag to disable the checkbox input.",name:"disabled",required:!1,type:{name:"boolean"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},validationErrorsClassName:{defaultValue:null,description:"(Optional) Class name for the validation errors",name:"validationErrorsClassName",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},labelClassName:{defaultValue:null,description:"(Optional) Class name for the switch label.",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"Optional ID for the label element",name:"labelId",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Should the label show a required indicator?",name:"required",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"(Optional) Whether the switch is checked or not",name:"checked",required:!1,type:{name:"NullOrUndefined<boolean>"}},onCheckedChange:{defaultValue:null,description:"(Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed.",name:"onCheckedChange",required:!1,type:{name:"((newValue: TBind) => void)"}}}}}catch{}const Ge={title:"Components/Switch",component:d,parameters:{docs:{description:{component:"A toggle-able switch component with validation"}}}},C={args:{label:"Airplane mode"},play:async({canvasElement:e})=>{const a=S(e).getByRole("switch");z.click(a),await Z(()=>l(a.getAttribute("aria-checked")).toBe("true"))}},q={args:{label:"Switch is disabled",disabled:!0},play:({canvasElement:e})=>{const a=S(e).getByRole("switch");l(a.getAttribute("data-disabled")),z.click(a),l(a.getAttribute("aria-checked")).toBe("false")}},B={args:{label:"Check",validationErrorMessages:["An error has occurred"]},play:({canvasElement:e})=>{const a=S(e).getByText("An error has occurred");l(a).toBeVisible()}},V={render:()=>y("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[i(d,{label:"Small Switch",displaySize:"small",required:!0}),i(d,{label:"Medium Switch",required:!0}),i(d,{label:"Large Switch",displaySize:"large",required:!0})]}),play:async({canvasElement:e})=>{const t=S(e),a=t.getByLabelText("Small Switch *"),o=t.getByLabelText("Medium Switch *"),r=t.getByLabelText("Large Switch *");l(a.getAttribute("data-size")).toEqual("small"),l(o.getAttribute("data-size")).toEqual("medium"),l(r.getAttribute("data-size")).toEqual("large")}},I={args:{label:"Bound label"},render:()=>{const{formProp:e,formState:t}=he({checked:!1});return y(Y,{children:[i(d,{bind:e("checked").bind()}),y("p",{"data-testid":"bound-result",children:["Bound value is ",t!=null&&t.checked?"checked":"not checked"]})]})},play:async({canvasElement:e})=>{const t=S(e),a=t.getByRole("switch");z.click(a),await Z(()=>l(t.getByTestId("bound-result")).toHaveTextContent("Bound value is checked"))}};var R,P,L;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(P=C.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var O,D,F;q.parameters={...q.parameters,docs:{...(O=q.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(D=q.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,j,U;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(j=B.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var W,X,G;V.parameters={...V.parameters,docs:{...(W=V.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(X=V.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,K,Q;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Je=["Default","Disabled","ValidationError","Sizes","Bound"];export{I as Bound,C as Default,q as Disabled,V as Sizes,B as ValidationError,Je as __namedExportsOrder,Ge as default};
//# sourceMappingURL=switch.stories-1e7abeaa.js.map
