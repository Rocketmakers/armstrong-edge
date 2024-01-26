import{a as k,j as I,F as Le}from"./jsx-runtime-eae7a151.js";import{w as q,e as D}from"./index-aeb91708.js";import{G as Oe,u as Fe}from"./config.context-ae8741c8.js";import{_ as R}from"./uniq-d447bef6.js";import{r}from"./index-c4905b50.js";import{c as Ue,b as P}from"./index-c1bef199.js";import{$ as K,b as Q}from"./index-742b7287.js";import{$ as je}from"./index-97ba0010.js";import{$ as Ye}from"./index-5277ee67.js";import{$ as Ge}from"./index-b8d80492.js";import{$ as Xe}from"./index-1381309a.js";import{$ as We}from"./index-981f8501.js";import{u as Je}from"./useDidUpdateEffect-7dd0d6b2.js";import{c as ne}from"./classNames-9011e307.js";import{a as Qe,L as Ze,u as ea}from"./label.component-105d7184.js";import{S as aa}from"./statusWrapper.component-ecb2e7af.js";import{V as ta}from"./validationErrors.component-73671d2f.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./index-07d1f67e.js";import"./spinner.component-a9fcb2ea.js";function na(e){return Oe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM4.969 9.75A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z"}}]})(e)}function Te(e,[t,a]){return Math.min(a,Math.max(t,e))}const Be=["PageUp","PageDown"],Pe=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],qe={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},L="Slider",[oe,oa,ra]=We(L),[Ke,Qa]=je(L,[ra]),[ia,Z]=Ke(L),sa=r.forwardRef((e,t)=>{const{name:a,min:n=0,max:i=100,step:o=1,orientation:d="horizontal",disabled:l=!1,minStepsBetweenThumbs:f=0,defaultValue:p=[n],value:g,onValueChange:s=()=>{},onValueCommit:c=()=>{},inverted:x=!1,...y}=e,[v,b]=r.useState(null),E=K(t,m=>b(m)),M=r.useRef(new Set),u=r.useRef(0),w=d==="horizontal",_=v?!!v.closest("form"):!0,O=w?la:da,[h=[],ee]=Ue({prop:g,defaultProp:p,onChange:m=>{var S;(S=[...M.current][u.current])===null||S===void 0||S.focus(),s(m)}}),$=r.useRef(h);function V(m){const S=$a(h,m);A(m,S)}function ae(m){A(m,u.current)}function F(){const m=$.current[u.current];h[u.current]!==m&&c(h)}function A(m,S,{commit:U}={commit:!1}){const ie=xa(o),te=Ea(Math.round((m-n)/o)*o+n,ie),N=Te(te,[n,i]);ee((B=[])=>{const T=ga(B,N,S);if(ya(T,f*o)){u.current=T.indexOf(N);const se=String(T)!==String(B);return se&&U&&c(T),se?T:B}else return B})}return r.createElement(ia,{scope:e.__scopeSlider,disabled:l,min:n,max:i,valueIndexToChangeRef:u,thumbs:M.current,values:h,orientation:d},r.createElement(oe.Provider,{scope:e.__scopeSlider},r.createElement(oe.Slot,{scope:e.__scopeSlider},r.createElement(O,R({"aria-disabled":l,"data-disabled":l?"":void 0},y,{ref:E,onPointerDown:P(y.onPointerDown,()=>{l||($.current=h)}),min:n,max:i,inverted:x,onSlideStart:l?void 0:V,onSlideMove:l?void 0:ae,onSlideEnd:l?void 0:F,onHomeKeyDown:()=>!l&&A(n,0,{commit:!0}),onEndKeyDown:()=>!l&&A(i,h.length-1,{commit:!0}),onStepKeyDown:({event:m,direction:S})=>{if(!l){const te=Be.includes(m.key)||m.shiftKey&&Pe.includes(m.key)?10:1,N=u.current,B=h[N],T=o*te*S;A(B+T,N,{commit:!0})}}})))),_&&h.map((m,S)=>r.createElement(va,{key:S,name:a?a+(h.length>1?"[]":""):void 0,value:m})))}),[ze,Ne]=Ke(L,{startEdge:"left",endEdge:"right",size:"width",direction:1}),la=r.forwardRef((e,t)=>{const{min:a,max:n,dir:i,inverted:o,onSlideStart:d,onSlideMove:l,onSlideEnd:f,onStepKeyDown:p,...g}=e,[s,c]=r.useState(null),x=K(t,u=>c(u)),y=r.useRef(),v=Ye(i),b=v==="ltr",E=b&&!o||!b&&o;function M(u){const w=y.current||s.getBoundingClientRect(),_=[0,w.width],h=re(_,E?[a,n]:[n,a]);return y.current=w,h(u-w.left)}return r.createElement(ze,{scope:e.__scopeSlider,startEdge:E?"left":"right",endEdge:E?"right":"left",direction:E?1:-1,size:"width"},r.createElement(He,R({dir:v,"data-orientation":"horizontal"},g,{ref:x,style:{...g.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:u=>{const w=M(u.clientX);d==null||d(w)},onSlideMove:u=>{const w=M(u.clientX);l==null||l(w)},onSlideEnd:()=>{y.current=void 0,f==null||f()},onStepKeyDown:u=>{const _=qe[E?"from-left":"from-right"].includes(u.key);p==null||p({event:u,direction:_?-1:1})}})))}),da=r.forwardRef((e,t)=>{const{min:a,max:n,inverted:i,onSlideStart:o,onSlideMove:d,onSlideEnd:l,onStepKeyDown:f,...p}=e,g=r.useRef(null),s=K(t,g),c=r.useRef(),x=!i;function y(v){const b=c.current||g.current.getBoundingClientRect(),E=[0,b.height],u=re(E,x?[n,a]:[a,n]);return c.current=b,u(v-b.top)}return r.createElement(ze,{scope:e.__scopeSlider,startEdge:x?"bottom":"top",endEdge:x?"top":"bottom",size:"height",direction:x?1:-1},r.createElement(He,R({"data-orientation":"vertical"},p,{ref:s,style:{...p.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:v=>{const b=y(v.clientY);o==null||o(b)},onSlideMove:v=>{const b=y(v.clientY);d==null||d(b)},onSlideEnd:()=>{c.current=void 0,l==null||l()},onStepKeyDown:v=>{const E=qe[x?"from-bottom":"from-top"].includes(v.key);f==null||f({event:v,direction:E?-1:1})}})))}),He=r.forwardRef((e,t)=>{const{__scopeSlider:a,onSlideStart:n,onSlideMove:i,onSlideEnd:o,onHomeKeyDown:d,onEndKeyDown:l,onStepKeyDown:f,...p}=e,g=Z(L,a);return r.createElement(Q.span,R({},p,{ref:t,onKeyDown:P(e.onKeyDown,s=>{s.key==="Home"?(d(s),s.preventDefault()):s.key==="End"?(l(s),s.preventDefault()):Be.concat(Pe).includes(s.key)&&(f(s),s.preventDefault())}),onPointerDown:P(e.onPointerDown,s=>{const c=s.target;c.setPointerCapture(s.pointerId),s.preventDefault(),g.thumbs.has(c)?c.focus():n(s)}),onPointerMove:P(e.onPointerMove,s=>{s.target.hasPointerCapture(s.pointerId)&&i(s)}),onPointerUp:P(e.onPointerUp,s=>{const c=s.target;c.hasPointerCapture(s.pointerId)&&(c.releasePointerCapture(s.pointerId),o(s))})}))}),ca="SliderTrack",ua=r.forwardRef((e,t)=>{const{__scopeSlider:a,...n}=e,i=Z(ca,a);return r.createElement(Q.span,R({"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation},n,{ref:t}))}),le="SliderRange",ma=r.forwardRef((e,t)=>{const{__scopeSlider:a,...n}=e,i=Z(le,a),o=Ne(le,a),d=r.useRef(null),l=K(t,d),f=i.values.length,p=i.values.map(c=>ke(c,i.min,i.max)),g=f>1?Math.min(...p):0,s=100-Math.max(...p);return r.createElement(Q.span,R({"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0},n,{ref:l,style:{...e.style,[o.startEdge]:g+"%",[o.endEdge]:s+"%"}}))}),de="SliderThumb",fa=r.forwardRef((e,t)=>{const a=oa(e.__scopeSlider),[n,i]=r.useState(null),o=K(t,l=>i(l)),d=r.useMemo(()=>n?a().findIndex(l=>l.ref.current===n):-1,[a,n]);return r.createElement(pa,R({},e,{ref:o,index:d}))}),pa=r.forwardRef((e,t)=>{const{__scopeSlider:a,index:n,...i}=e,o=Z(de,a),d=Ne(de,a),[l,f]=r.useState(null),p=K(t,b=>f(b)),g=Xe(l),s=o.values[n],c=s===void 0?0:ke(s,o.min,o.max),x=ba(n,o.values.length),y=g==null?void 0:g[d.size],v=y?ha(y,c,d.direction):0;return r.useEffect(()=>{if(l)return o.thumbs.add(l),()=>{o.thumbs.delete(l)}},[l,o.thumbs]),r.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[d.startEdge]:`calc(${c}% + ${v}px)`}},r.createElement(oe.ItemSlot,{scope:e.__scopeSlider},r.createElement(Q.span,R({role:"slider","aria-label":e["aria-label"]||x,"aria-valuemin":o.min,"aria-valuenow":s,"aria-valuemax":o.max,"aria-orientation":o.orientation,"data-orientation":o.orientation,"data-disabled":o.disabled?"":void 0,tabIndex:o.disabled?void 0:0},i,{ref:p,style:s===void 0?{display:"none"}:e.style,onFocus:P(e.onFocus,()=>{o.valueIndexToChangeRef.current=n})}))))}),va=e=>{const{value:t,...a}=e,n=r.useRef(null),i=Ge(t);return r.useEffect(()=>{const o=n.current,d=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(d,"value").set;if(i!==t&&f){const p=new Event("input",{bubbles:!0});f.call(o,t),o.dispatchEvent(p)}},[i,t]),r.createElement("input",R({style:{display:"none"}},a,{ref:n,defaultValue:t}))};function ga(e=[],t,a){const n=[...e];return n[a]=t,n.sort((i,o)=>i-o)}function ke(e,t,a){const o=100/(a-t)*(e-t);return Te(o,[0,100])}function ba(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function $a(e,t){if(e.length===1)return 0;const a=e.map(i=>Math.abs(i-t)),n=Math.min(...a);return a.indexOf(n)}function ha(e,t,a){const n=e/2,o=re([0,50],[0,n]);return(n-o(t)*a)*a}function Sa(e){return e.slice(0,-1).map((t,a)=>e[a+1]-t)}function ya(e,t){if(t>0){const a=Sa(e);return Math.min(...a)>=t}return!0}function re(e,t){return a=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(a-e[0])}}function xa(e){return(String(e).split(".")[1]||"").length}function Ea(e,t){const a=Math.pow(10,t);return Math.round(e*a)/a}const wa=sa,Va=ua,Ia=ma,Ra=fa;const C=r.forwardRef(({bind:e,className:t,disabled:a,onChange:n,label:i,labelClassName:o,labelId:d,scrollValidationErrorsIntoView:l,statusClassName:f,validationErrorsClassName:p,validationErrorMessages:g,displaySize:s,min:c,max:x,value:y,validationMode:v,step:b,required:E,customThumb:M,requiredIndicator:u,autoValidate:w,..._},O)=>{var m;const[h,ee,$]=Qe(e,{value:y,onChange:n,validationErrorMessages:g,validationMode:v,autoValidate:w}),V=Fe({scrollValidationErrorsIntoView:l,validationMode:$.validationMode,inputDisplaySize:s,requiredIndicator:u,autoValidate:$.autoValidate,validationErrorIcon:$.validationErrorIcon}),ae=r.useId(),F=d??ae;Je(()=>{V.autoValidate&&$.isTouched&&$.validate()},[h]);const A=r.useCallback(()=>{V.autoValidate&&!$.isTouched&&$.validate(),$.setTouched(!0)},[$,V.autoValidate]);return k(aa,{className:ne(f,"arm-range-input-base"),validationMode:$.validationMode,errorIcon:$.validationErrorIcon,children:[i&&I(Ze,{id:F,className:ne("arm-range-input-label",o),"data-disabled":a,required:E,displaySize:V.inputDisplaySize,requiredIndicator:V.requiredIndicator,children:i}),k(wa,{className:ne(t,"arm-range-input-root"),..._,max:x,min:c,step:b,ref:O,disabled:a,"data-size":V.inputDisplaySize,"aria-labelledby":F,value:h?[h]:void 0,onValueChange:S=>ee(S==null?void 0:S[0]),children:[I(Va,{className:"arm-range-input-track",children:I(Ia,{className:"arm-range-input-range"})}),I(Ra,{className:"arm-range-input-thumb","aria-label":typeof i=="string"?i:void 0,onBlur:A,children:M})]}),!!((m=$.validationErrorMessages)!=null&&m.length)&&$.shouldShowValidationErrorMessage&&I(ta,{className:p,validationMode:V.validationMode,validationErrors:$.validationErrorMessages,scrollIntoView:V.scrollValidationErrorsIntoView})]})});C.displayName="RangeInput";try{C.displayName="RangeInput",C.__docgenInfo={description:"",displayName:"RangeInput",props:{bind:{defaultValue:null,description:"(Optional) An IBindingProps<TData> object to bind the checkbox input to a form.",name:"bind",required:!1,type:{name:"IBindingProps<TBind>"}},value:{defaultValue:null,description:"(Optional) A TData value representing the value of the input.",name:"value",required:!1,type:{name:"NullOrUndefined<number>"}},customThumb:{defaultValue:null,description:"(Optional) A custom JSX.Element for the thumb of the slider.",name:"customThumb",required:!1,type:{name:"Element"}},disabled:{defaultValue:null,description:"(Optional) A boolean flag to disable the checkbox input.",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Indicates if field must be used to submit form",name:"required",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"(Optional) A React.ReactNode to display a label for the checkbox input.",name:"label",required:!1,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"(Optional) Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided",name:"labelId",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"(Optional) A callback function (newValue: TData) => void to handle state when value is changed.",name:"onChange",required:!1,type:{name:"((newValue: TBind) => void)"}},statusClassName:{defaultValue:null,description:"(Optional) Class name to use for the status wrapper",name:"statusClassName",required:!1,type:{name:"string"}},validationErrorsClassName:{defaultValue:null,description:"(Optional) Class name for the validation errors",name:"validationErrorsClassName",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"(Optional) Can be a string or {key, element} key is necessary for animating in new messages",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},scrollValidationErrorsIntoView:{defaultValue:null,description:"(Optional) A boolean flag to automatically scroll validation error messages into view.",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},min:{defaultValue:null,description:"The minimum value, defaults to `0`",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"The maximum value, defaults to `100`",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"How big should the increments be on the slider. defaults to `1`",name:"step",required:!1,type:{name:"number"}},autoValidate:{defaultValue:null,description:"should the input validate automatically against the provided schema? Default: `true`",name:"autoValidate",required:!1,type:{name:"boolean"}},validationMode:{defaultValue:null,description:"overrides the error messaging and icon display used in the error validation display",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}}}}}catch{}const Za={title:"Components/RangeInput",component:C,parameters:{docs:{description:{component:"metadata"}}}},z={render:e=>{const{formProp:t,formState:a}=ea({value:50});return k(Le,{children:[I(C,{bind:t("value").bind(),...e}),k("div",{style:{marginTop:"10px"},"data-testid":"result",children:["Value: ",a==null?void 0:a.value]})]})}},H={...z,play:async({canvasElement:e})=>{const a=q(e).getByRole("slider");D(a).toHaveAttribute("aria-valuenow","50")}},j={...z,args:{min:40,max:60},play:async({canvasElement:e})=>{const a=q(e).getByRole("slider");D(a).toHaveAttribute("aria-valuemin","40"),D(a).toHaveAttribute("aria-valuemax","60"),D(a).toHaveAttribute("aria-valuenow","50")}},Y={...z,args:{step:10},play:async({canvasElement:e})=>{const a=q(e).getByRole("slider");D(a).toHaveAttribute("aria-valuenow","50")}},G={...z,args:{label:"Label",required:!0},play:async({canvasElement:e})=>{const a=q(e).getByText("Label");D(a).toBeVisible()}},X={render:()=>k("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[I(C,{label:"Small Input",displaySize:"small",required:!0}),I(C,{label:"Medium Input",required:!0}),I(C,{label:"Large Input",displaySize:"large",required:!0})]})},W={...z,args:{validationMode:"both",validationErrorMessages:["Invalid selection"]},play:async({canvasElement:e})=>{const a=q(e).getByText("Invalid selection");D(a).toBeVisible()}},J={...z,args:{customThumb:I(na,{})},play:async({canvasElement:e})=>{const n=q(e).getByRole("slider").getElementsByTagName("svg");D(n).toHaveLength(1)}};var ce,ue,me,fe,pe;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  }
}`,...(me=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"stories",...(pe=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:pe.description}}};var ve,ge,be;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  ...Template,
  args: {
    min: 40,
    max: 60
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuemin', '40');
    expect(slider).toHaveAttribute('aria-valuemax', '60');
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  }
}`,...(be=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var $e,he,Se;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  ...Template,
  args: {
    step: 10
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  }
}`,...(Se=(he=Y.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var ye,xe,Ee;G.parameters={...G.parameters,docs:{...(ye=G.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Label',
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Label');
    expect(label).toBeVisible();
  }
}`,...(Ee=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var we,Ve,Ie;X.parameters={...X.parameters,docs:{...(we=X.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <RangeInput label={'Small Input'} displaySize="small" required={true} />
        <RangeInput label={'Medium Input'} required={true} />
        <RangeInput label={'Large Input'} displaySize="large" required={true} />
      </div>;
  }
}`,...(Ie=(Ve=X.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.source}}};var Re,Me,De;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  ...Template,
  args: {
    validationMode: 'both',
    validationErrorMessages: ['Invalid selection']
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const error = canvas.getByText('Invalid selection');
    expect(error).toBeVisible();
  }
}`,...(De=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var Ce,_e,Ae;J.parameters={...J.parameters,docs:{...(Ce=J.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...Template,
  args: {
    customThumb: <BsFillEmojiSunglassesFill />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole('slider');
    const elements = slider.getElementsByTagName('svg');
    expect(elements).toHaveLength(1);
  }
}`,...(Ae=(_e=J.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};const et=["Default","CustomMinAndMax","CustomStep","Labelled","Sizes","ValidationError","CustomThumb"];export{j as CustomMinAndMax,Y as CustomStep,J as CustomThumb,H as Default,G as Labelled,X as Sizes,W as ValidationError,et as __namedExportsOrder,Za as default};
