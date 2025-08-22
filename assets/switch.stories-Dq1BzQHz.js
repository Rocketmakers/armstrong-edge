import{j as p}from"./jsx-runtime-Cl2eCCBe.js";import{c as j,f as _,w as P,u as I,a as te,e as g}from"./index-Dv9et24K.js";import{_ as C}from"./extends-CF3RwP-h.js";import{r as a}from"./index-Cqyox1Tj.js";import{$ as de}from"./index-CcyUcsxs.js";import"./index-QqxU7g3h.js";import{a as ue}from"./useDidUpdateEffect-igSykUWQ.js";import{u as pe}from"./config.context-B61qZkrf.js";import{a as fe,L as he,u as be}from"./label.component-CknXuhjY.js";import{V as me}from"./validationErrors.component-CHN68oNP.js";function ge(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function ne(...e){return n=>e.forEach(t=>ge(t,n))}function ve(...e){return a.useCallback(ne(...e),e)}function we(e,n=[]){let t=[];function r(c,s){const i=a.createContext(s),l=t.length;t=[...t,s];function d(u){const{scope:f,children:v,...h}=u,S=(f==null?void 0:f[e][l])||i,m=a.useMemo(()=>h,Object.values(h));return a.createElement(S.Provider,{value:m},v)}function b(u,f){const v=(f==null?void 0:f[e][l])||i,h=a.useContext(v);if(h)return h;if(s!==void 0)return s;throw new Error(`\`${u}\` must be used within \`${c}\``)}return d.displayName=c+"Provider",[d,b]}const o=()=>{const c=t.map(s=>a.createContext(s));return function(i){const l=(i==null?void 0:i[e])||c;return a.useMemo(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return o.scopeName=e,[r,$e(o,...n)]}function $e(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(c){const s=r.reduce((i,{useScope:l,scopeName:d})=>{const u=l(c)[`__scope${d}`];return{...i,...u}},{});return a.useMemo(()=>({[`__scope${n.scopeName}`]:s}),[s])}};return t.scopeName=n.scopeName,t}function ae(e){const n=a.useRef(e);return a.useEffect(()=>{n.current=e}),a.useMemo(()=>(...t)=>{var r;return(r=n.current)===null||r===void 0?void 0:r.call(n,...t)},[])}function Se({prop:e,defaultProp:n,onChange:t=()=>{}}){const[r,o]=ye({defaultProp:n,onChange:t}),c=e!==void 0,s=c?e:r,i=ae(t),l=a.useCallback(d=>{if(c){const u=typeof d=="function"?d(e):d;u!==e&&i(u)}else o(d)},[c,e,o,i]);return[s,l]}function ye({defaultProp:e,onChange:n}){const t=a.useState(e),[r]=t,o=a.useRef(r),c=ae(n);return a.useEffect(()=>{o.current!==r&&(c(r),o.current=r)},[r,o,c]),t}function xe(e){const n=a.useRef({value:e,previous:e});return a.useMemo(()=>(n.current.value!==e&&(n.current.previous=n.current.value,n.current.value=e),n.current.previous),[e])}const Ce=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{};function ke(e){const[n,t]=a.useState(void 0);return Ce(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const c=o[0];let s,i;if("borderBoxSize"in c){const l=c.borderBoxSize,d=Array.isArray(l)?l[0]:l;s=d.inlineSize,i=d.blockSize}else s=e.offsetWidth,i=e.offsetHeight;t({width:s,height:i})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else t(void 0)},[e]),n}const re=a.forwardRef((e,n)=>{const{children:t,...r}=e,o=a.Children.toArray(t),c=o.find(Be);if(c){const s=c.props.children,i=o.map(l=>l===c?a.Children.count(s)>1?a.Children.only(null):a.isValidElement(s)?s.props.children:null:l);return a.createElement(V,C({},r,{ref:n}),a.isValidElement(s)?a.cloneElement(s,void 0,i):null)}return a.createElement(V,C({},r,{ref:n}),t)});re.displayName="Slot";const V=a.forwardRef((e,n)=>{const{children:t,...r}=e;return a.isValidElement(t)?a.cloneElement(t,{...Te(r,t.props),ref:n?ne(n,t.ref):t.ref}):a.Children.count(t)>1?a.Children.only(null):null});V.displayName="SlotClone";const Ee=({children:e})=>a.createElement(a.Fragment,null,e);function Be(e){return a.isValidElement(e)&&e.type===Ee}function Te(e,n){const t={...n};for(const r in n){const o=e[r],c=n[r];/^on[A-Z]/.test(r)?o&&c?t[r]=(...i)=>{c(...i),o(...i)}:o&&(t[r]=o):r==="style"?t[r]={...o,...c}:r==="className"&&(t[r]=[o,c].filter(Boolean).join(" "))}return{...e,...t}}const Ae=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],oe=Ae.reduce((e,n)=>{const t=a.forwardRef((r,o)=>{const{asChild:c,...s}=r,i=c?re:n;return a.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),a.createElement(i,C({},s,{ref:o}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{}),ce="Switch",[Pe,Ke]=we(ce),[ze,Re]=Pe(ce),_e=a.forwardRef((e,n)=>{const{__scopeSwitch:t,name:r,checked:o,defaultChecked:c,required:s,disabled:i,value:l="on",onCheckedChange:d,...b}=e,[u,f]=a.useState(null),v=ve(n,y=>f(y)),h=a.useRef(!1),S=u?!!u.closest("form"):!0,[m=!1,z]=Se({prop:o,defaultProp:c,onChange:d});return a.createElement(ze,{scope:t,checked:m,disabled:i},a.createElement(oe.button,C({type:"button",role:"switch","aria-checked":m,"aria-required":s,"data-state":se(m),"data-disabled":i?"":void 0,disabled:i,value:l},b,{ref:v,onClick:de(e.onClick,y=>{z(q=>!q),S&&(h.current=y.isPropagationStopped(),h.current||y.stopPropagation())})})),S&&a.createElement(Ie,{control:u,bubbles:!h.current,name:r,value:l,checked:m,required:s,disabled:i,style:{transform:"translateX(-100%)"}}))}),qe="SwitchThumb",Ve=a.forwardRef((e,n)=>{const{__scopeSwitch:t,...r}=e,o=Re(qe,t);return a.createElement(oe.span,C({"data-state":se(o.checked),"data-disabled":o.disabled?"":void 0},r,{ref:n}))}),Ie=e=>{const{control:n,checked:t,bubbles:r=!0,...o}=e,c=a.useRef(null),s=xe(t),i=ke(n);return a.useEffect(()=>{const l=c.current,d=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(d,"checked").set;if(s!==t&&u){const f=new Event("click",{bubbles:r});u.call(l,t),l.dispatchEvent(f)}},[s,t,r]),a.createElement("input",C({type:"checkbox","aria-hidden":!0,defaultChecked:t},o,{tabIndex:-1,ref:c,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function se(e){return e?"checked":"unchecked"}const Me=_e,Ne=Ve,$=a.forwardRef(({bind:e,checked:n,onCheckedChange:t,defaultChecked:r,disabled:o,className:c,labelClassName:s,label:i,validationErrorMessages:l,validationErrorsClassName:d,scrollValidationErrorsIntoView:b,validationMode:u,displaySize:f,labelId:v,required:h,requiredIndicator:S,autoValidate:m,...z},y)=>{const q=a.useId(),M=z.id??q,[N,R,w]=fe(e,{value:n,onChange:t,validationErrorMessages:l,validationMode:u,autoValidate:m}),x=pe({validationMode:w.validationMode,scrollValidationErrorsIntoView:b,inputDisplaySize:f,requiredIndicator:S,autoValidate:w.autoValidate}),ie=a.useCallback(le=>{R==null||R(le)},[R]);return ue(()=>{x.autoValidate&&w.validate(),w.setTouched(!0)},[N]),p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:j("arm-switch-container",c),"data-disabled":o,children:[p.jsx(Me,{...z,className:"arm-switch",id:M,ref:y,disabled:o,defaultChecked:r,onCheckedChange:ie,checked:N??void 0,"data-size":x.inputDisplaySize,children:p.jsx(Ne,{className:"arm-switch-nub"})}),p.jsx(he,{id:v,required:h,requiredIndicator:x.requiredIndicator,className:j(s,"arm-switch-label"),"data-disabled":o,htmlFor:M,displaySize:x.inputDisplaySize,children:i})]}),w.validationErrorMessages&&w.shouldShowValidationErrorMessage&&p.jsx(me,{className:d,validationMode:x.validationMode,validationErrors:w.validationErrorMessages,scrollIntoView:x.scrollValidationErrorsIntoView})]})});$.displayName="Switch";$.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"TBind"}],raw:"IBindingProps<TBind>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},checked:{required:!1,tsType:{name:"TBind"},description:"(Optional) Whether the switch is checked or not"},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: TBind) => void",signature:{arguments:[{type:{name:"TBind"},name:"newValue"}],return:{name:"void"}}},description:"(Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"(Optional) The state of the switch when it is initially rendered. Use when you do not need to control its state."},disabled:{required:!1,tsType:{name:"boolean"},description:"(Optional) A boolean flag to disable the checkbox input."},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"(Optional) A React.ReactNode to display a label for the switch input."},labelClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the switch label."},scrollValidationErrorsIntoView:{required:!1,tsType:{name:"boolean"},description:"(Optional) A boolean flag to automatically scroll validation error messages into view."},validationErrorsClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the validation errors"},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"}},composes:["Omit","Pick"]};const je={title:"Components/Switch",component:$,parameters:{docs:{description:{component:"A toggle-able switch component with validation"}}}},k={args:{label:"Airplane mode",onCheckedChange:_()},play:async({canvasElement:e})=>{const t=P(e).getByRole("switch");I.click(t),await te(()=>g(t.getAttribute("aria-checked")).toBe("true"))}},E={args:{label:"Switch is disabled",disabled:!0,onCheckedChange:_()},play:({canvasElement:e})=>{const t=P(e).getByRole("switch");g(t.getAttribute("data-disabled")),I.click(t),g(t.getAttribute("aria-checked")).toBe("false")}},B={args:{label:"Check",validationErrorMessages:["An error has occurred"],onCheckedChange:_()},play:({canvasElement:e})=>{const t=P(e).getByText("An error has occurred");g(t).toBeVisible()}},T={render:()=>p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[p.jsx($,{label:"Small Switch",displaySize:"small",required:!0}),p.jsx($,{label:"Medium Switch",required:!0}),p.jsx($,{label:"Large Switch",displaySize:"large",required:!0})]}),play:async({canvasElement:e})=>{const n=P(e),t=n.getByLabelText("Small Switch *"),r=n.getByLabelText("Medium Switch *"),o=n.getByLabelText("Large Switch *");g(t.getAttribute("data-size")).toEqual("small"),g(r.getAttribute("data-size")).toEqual("medium"),g(o.getAttribute("data-size")).toEqual("large")}},A={args:{label:"Bound label",onCheckedChange:_()},render:()=>{const{formProp:e,formState:n}=be({checked:!1});return p.jsxs(p.Fragment,{children:[p.jsx($,{bind:e("checked").bind()}),p.jsxs("p",{"data-testid":"bound-result",children:["Bound value is ",n!=null&&n.checked?"checked":"not checked"]})]})},play:async({canvasElement:e})=>{const n=P(e),t=n.getByRole("switch");I.click(t),await te(()=>g(n.getByTestId("bound-result")).toHaveTextContent("Bound value is checked"))}};var O,D,L;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(D=k.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var F,H,U;E.parameters={...E.parameters,docs:{...(F=E.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(H=E.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var W,X,Z;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var G,J,K;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=T.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,ee;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const Oe=["Default","Disabled","ValidationError","Sizes","Bound"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Bound:A,Default:k,Disabled:E,Sizes:T,ValidationError:B,__namedExportsOrder:Oe,default:je},Symbol.toStringTag,{value:"Module"}));export{A as B,k as D,$ as S,B as V,T as a,E as b,Qe as s};
