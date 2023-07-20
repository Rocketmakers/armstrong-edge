import{j as L,a as E,F as Oe}from"./jsx-runtime-63e4a166.js";import{w as q,e as C}from"./index-3ffc2e85.js";import{G as ke,u as Fe}from"./config.context-54240269.js";import{_ as R}from"./uniq-d447bef6.js";import{r as o}from"./index-c4905b50.js";import{c as je,b as T}from"./index-c1bef199.js";import{$ as K,b as Q}from"./index-742b7287.js";import{$ as Ue}from"./index-97ba0010.js";import{$ as Ye}from"./index-5277ee67.js";import{$ as Ge}from"./index-b8d80492.js";import{$ as Xe}from"./index-1381309a.js";import{$ as We}from"./index-981f8501.js";import{c as ne}from"./classNames-9011e307.js";import{a as Je,L as Qe,u as Ze}from"./label.component-4408833d.js";import{S as ea}from"./statusWrapper.component-9facb966.js";import{V as aa}from"./validationErrors.component-04b289b4.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./index-356e4a49.js";import"./index-07d1f67e.js";import"./useContentMemo-b4c57d54.js";import"./spinner.component-5b0c70a5.js";function ta(e){return ke({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM4.969 9.75A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z"}}]})(e)}function Be(e,[t,a]){return Math.min(a,Math.max(t,e))}const Pe=["PageUp","PageDown"],Te=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],qe={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},O="Slider",[re,na,ra]=We(O),[Ke,Qa]=Ue(O,[ra]),[oa,Z]=Ke(O),sa=o.forwardRef((e,t)=>{const{name:a,min:n=0,max:s=100,step:r=1,orientation:c="horizontal",disabled:l=!1,minStepsBetweenThumbs:m=0,defaultValue:f=[n],value:g,onValueChange:i=()=>{},onValueCommit:d=()=>{},inverted:S=!1,...h}=e,[p,b]=o.useState(null),y=K(t,v=>b(v)),M=o.useRef(new Set),u=o.useRef(0),x=c==="horizontal",A=p?!!p.closest("form"):!0,V=x?ia:la,[$=[],ee]=je({prop:g,defaultProp:f,onChange:v=>{var w;(w=[...M.current][u.current])===null||w===void 0||w.focus(),i(v)}}),D=o.useRef($);function ae(v){const w=ba($,v);I(v,w)}function k(v){I(v,u.current)}function F(){const v=D.current[u.current];$[u.current]!==v&&d($)}function I(v,w,{commit:j}={commit:!1}){const se=ya(r),te=xa(Math.round((v-n)/r)*r+n,se),N=Be(te,[n,s]);ee((P=[])=>{const B=va(P,N,w);if(Sa(B,m*r)){u.current=B.indexOf(N);const ie=String(B)!==String(P);return ie&&j&&d(B),ie?B:P}else return P})}return o.createElement(oa,{scope:e.__scopeSlider,disabled:l,min:n,max:s,valueIndexToChangeRef:u,thumbs:M.current,values:$,orientation:c},o.createElement(re.Provider,{scope:e.__scopeSlider},o.createElement(re.Slot,{scope:e.__scopeSlider},o.createElement(V,R({"aria-disabled":l,"data-disabled":l?"":void 0},h,{ref:y,onPointerDown:T(h.onPointerDown,()=>{l||(D.current=$)}),min:n,max:s,inverted:S,onSlideStart:l?void 0:ae,onSlideMove:l?void 0:k,onSlideEnd:l?void 0:F,onHomeKeyDown:()=>!l&&I(n,0,{commit:!0}),onEndKeyDown:()=>!l&&I(s,$.length-1,{commit:!0}),onStepKeyDown:({event:v,direction:w})=>{if(!l){const te=Pe.includes(v.key)||v.shiftKey&&Te.includes(v.key)?10:1,N=u.current,P=$[N],B=r*te*w;I(P+B,N,{commit:!0})}}})))),A&&$.map((v,w)=>o.createElement(pa,{key:w,name:a?a+($.length>1?"[]":""):void 0,value:v})))}),[ze,Ne]=Ke(O,{startEdge:"left",endEdge:"right",size:"width",direction:1}),ia=o.forwardRef((e,t)=>{const{min:a,max:n,dir:s,inverted:r,onSlideStart:c,onSlideMove:l,onSlideEnd:m,onStepKeyDown:f,...g}=e,[i,d]=o.useState(null),S=K(t,u=>d(u)),h=o.useRef(),p=Ye(s),b=p==="ltr",y=b&&!r||!b&&r;function M(u){const x=h.current||i.getBoundingClientRect(),A=[0,x.width],$=oe(A,y?[a,n]:[n,a]);return h.current=x,$(u-x.left)}return o.createElement(ze,{scope:e.__scopeSlider,startEdge:y?"left":"right",endEdge:y?"right":"left",direction:y?1:-1,size:"width"},o.createElement(He,R({dir:p,"data-orientation":"horizontal"},g,{ref:S,style:{...g.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:u=>{const x=M(u.clientX);c==null||c(x)},onSlideMove:u=>{const x=M(u.clientX);l==null||l(x)},onSlideEnd:()=>{h.current=void 0,m==null||m()},onStepKeyDown:u=>{const A=qe[y?"from-left":"from-right"].includes(u.key);f==null||f({event:u,direction:A?-1:1})}})))}),la=o.forwardRef((e,t)=>{const{min:a,max:n,inverted:s,onSlideStart:r,onSlideMove:c,onSlideEnd:l,onStepKeyDown:m,...f}=e,g=o.useRef(null),i=K(t,g),d=o.useRef(),S=!s;function h(p){const b=d.current||g.current.getBoundingClientRect(),y=[0,b.height],u=oe(y,S?[n,a]:[a,n]);return d.current=b,u(p-b.top)}return o.createElement(ze,{scope:e.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1},o.createElement(He,R({"data-orientation":"vertical"},f,{ref:i,style:{...f.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:p=>{const b=h(p.clientY);r==null||r(b)},onSlideMove:p=>{const b=h(p.clientY);c==null||c(b)},onSlideEnd:()=>{d.current=void 0,l==null||l()},onStepKeyDown:p=>{const y=qe[S?"from-bottom":"from-top"].includes(p.key);m==null||m({event:p,direction:y?-1:1})}})))}),He=o.forwardRef((e,t)=>{const{__scopeSlider:a,onSlideStart:n,onSlideMove:s,onSlideEnd:r,onHomeKeyDown:c,onEndKeyDown:l,onStepKeyDown:m,...f}=e,g=Z(O,a);return o.createElement(Q.span,R({},f,{ref:t,onKeyDown:T(e.onKeyDown,i=>{i.key==="Home"?(c(i),i.preventDefault()):i.key==="End"?(l(i),i.preventDefault()):Pe.concat(Te).includes(i.key)&&(m(i),i.preventDefault())}),onPointerDown:T(e.onPointerDown,i=>{const d=i.target;d.setPointerCapture(i.pointerId),i.preventDefault(),g.thumbs.has(d)?d.focus():n(i)}),onPointerMove:T(e.onPointerMove,i=>{i.target.hasPointerCapture(i.pointerId)&&s(i)}),onPointerUp:T(e.onPointerUp,i=>{const d=i.target;d.hasPointerCapture(i.pointerId)&&(d.releasePointerCapture(i.pointerId),r(i))})}))}),ca="SliderTrack",da=o.forwardRef((e,t)=>{const{__scopeSlider:a,...n}=e,s=Z(ca,a);return o.createElement(Q.span,R({"data-disabled":s.disabled?"":void 0,"data-orientation":s.orientation},n,{ref:t}))}),le="SliderRange",ua=o.forwardRef((e,t)=>{const{__scopeSlider:a,...n}=e,s=Z(le,a),r=Ne(le,a),c=o.useRef(null),l=K(t,c),m=s.values.length,f=s.values.map(d=>Le(d,s.min,s.max)),g=m>1?Math.min(...f):0,i=100-Math.max(...f);return o.createElement(Q.span,R({"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0},n,{ref:l,style:{...e.style,[r.startEdge]:g+"%",[r.endEdge]:i+"%"}}))}),ce="SliderThumb",ma=o.forwardRef((e,t)=>{const a=na(e.__scopeSlider),[n,s]=o.useState(null),r=K(t,l=>s(l)),c=o.useMemo(()=>n?a().findIndex(l=>l.ref.current===n):-1,[a,n]);return o.createElement(fa,R({},e,{ref:r,index:c}))}),fa=o.forwardRef((e,t)=>{const{__scopeSlider:a,index:n,...s}=e,r=Z(ce,a),c=Ne(ce,a),[l,m]=o.useState(null),f=K(t,b=>m(b)),g=Xe(l),i=r.values[n],d=i===void 0?0:Le(i,r.min,r.max),S=ga(n,r.values.length),h=g==null?void 0:g[c.size],p=h?$a(h,d,c.direction):0;return o.useEffect(()=>{if(l)return r.thumbs.add(l),()=>{r.thumbs.delete(l)}},[l,r.thumbs]),o.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[c.startEdge]:`calc(${d}% + ${p}px)`}},o.createElement(re.ItemSlot,{scope:e.__scopeSlider},o.createElement(Q.span,R({role:"slider","aria-label":e["aria-label"]||S,"aria-valuemin":r.min,"aria-valuenow":i,"aria-valuemax":r.max,"aria-orientation":r.orientation,"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0,tabIndex:r.disabled?void 0:0},s,{ref:f,style:i===void 0?{display:"none"}:e.style,onFocus:T(e.onFocus,()=>{r.valueIndexToChangeRef.current=n})}))))}),pa=e=>{const{value:t,...a}=e,n=o.useRef(null),s=Ge(t);return o.useEffect(()=>{const r=n.current,c=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(c,"value").set;if(s!==t&&m){const f=new Event("input",{bubbles:!0});m.call(r,t),r.dispatchEvent(f)}},[s,t]),o.createElement("input",R({style:{display:"none"}},a,{ref:n,defaultValue:t}))};function va(e=[],t,a){const n=[...e];return n[a]=t,n.sort((s,r)=>s-r)}function Le(e,t,a){const r=100/(a-t)*(e-t);return Be(r,[0,100])}function ga(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function ba(e,t){if(e.length===1)return 0;const a=e.map(s=>Math.abs(s-t)),n=Math.min(...a);return a.indexOf(n)}function $a(e,t,a){const n=e/2,r=oe([0,50],[0,n]);return(n-r(t)*a)*a}function ha(e){return e.slice(0,-1).map((t,a)=>e[a+1]-t)}function Sa(e,t){if(t>0){const a=ha(e);return Math.min(...a)>=t}return!0}function oe(e,t){return a=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(a-e[0])}}function ya(e){return(String(e).split(".")[1]||"").length}function xa(e,t){const a=Math.pow(10,t);return Math.round(e*a)/a}const wa=sa,Ea=da,Va=ua,Ia=ma;const _=o.forwardRef(({bind:e,className:t,disabled:a,onChange:n,label:s,labelClassName:r,labelId:c,scrollValidationErrorsIntoView:l,statusClassName:m,validationErrorsClassName:f,validationErrorMessages:g,displaySize:i,min:d,max:S,value:h,validationMode:p,step:b,required:y,customThumb:M,requiredIndicator:u,...x},A)=>{var F;const V=Fe({scrollValidationErrorsIntoView:l,validationMode:p,inputDisplaySize:i,requiredIndicator:u}),[$,ee,D]=Je(e,{value:h,onChange:n,validationErrorMessages:g,validationMode:V.validationMode}),ae=o.useId(),k=c??ae;return L(ea,{className:ne(m,"arm-range-input-base"),validationMode:D.validationMode,errorIcon:D.validationErrorIcon,children:[s&&E(Qe,{id:k,className:ne("arm-range-input-label",r),"data-disabled":a,required:y,displaySize:V.inputDisplaySize,requiredIndicator:V.requiredIndicator,children:s}),L(wa,{className:ne(t,"arm-range-input-root"),...x,max:S,min:d,step:b,ref:A,disabled:a,"data-size":V.inputDisplaySize,"aria-labelledby":k,value:$?[$]:void 0,onValueChange:I=>ee(I==null?void 0:I[0]),children:[E(Ea,{className:"arm-range-input-track",children:E(Va,{className:"arm-range-input-range"})}),E(Ia,{className:"arm-range-input-thumb","aria-label":typeof s=="string"?s:void 0,children:M})]}),!!((F=D.validationErrorMessages)!=null&&F.length)&&D.shouldShowValidationErrorMessage&&E(aa,{className:f,validationMode:V.validationMode,validationErrors:D.validationErrorMessages,scrollIntoView:V.scrollValidationErrorsIntoView})]})});_.displayName="RangeInput";try{_.displayName="RangeInput",_.__docgenInfo={description:"",displayName:"RangeInput",props:{bind:{defaultValue:null,description:"(Optional) An IBindingProps<TData> object to bind the checkbox input to a form.",name:"bind",required:!1,type:{name:"IBindingProps<TBind>"}},value:{defaultValue:null,description:"(Optional) A TData value representing the value of the input.",name:"value",required:!1,type:{name:"NullOrUndefined<number>"}},customThumb:{defaultValue:null,description:"(Optional) A custom JSX.Element for the thumb of the slider.",name:"customThumb",required:!1,type:{name:"Element"}},disabled:{defaultValue:null,description:"(Optional) A boolean flag to disable the checkbox input.",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Indicates if field must be used to submit form",name:"required",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"(Optional) A React.ReactNode to display a label for the checkbox input.",name:"label",required:!1,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"(Optional) Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided",name:"labelId",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"(Optional) A callback function (newValue: TData) => void to handle state when value is changed.",name:"onChange",required:!1,type:{name:"((newValue: TBind) => void)"}},statusClassName:{defaultValue:null,description:"(Optional) Class name to use for the status wrapper",name:"statusClassName",required:!1,type:{name:"string"}},validationErrorsClassName:{defaultValue:null,description:"(Optional) Class name for the validation errors",name:"validationErrorsClassName",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"(Optional) Can be a string or {key, element} key is necessary for animating in new messages",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},scrollValidationErrorsIntoView:{defaultValue:null,description:"(Optional) A boolean flag to automatically scroll validation error messages into view.",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},min:{defaultValue:null,description:"The minimum value, defaults to `0`",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"The maximum value, defaults to `100`",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"How big should the increments be on the slider. defaults to `1`",name:"step",required:!1,type:{name:"number"}},validationMode:{defaultValue:null,description:"overrides the error messaging and icon display used in the error validation display",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}}}}}catch{}const Za={title:"Components/RangeInput",component:_,parameters:{docs:{description:{component:"metadata"}}}},z={render:e=>{const{formProp:t,formState:a}=Ze({value:50});return L(Oe,{children:[E(_,{bind:t("value").bind(),...e}),L("div",{style:{marginTop:"10px"},"data-testid":"result",children:["Value: ",a==null?void 0:a.value]})]})}},H={...z,play:async({canvasElement:e})=>{const a=q(e).getByRole("slider");C(a).toHaveAttribute("aria-valuenow","50")}},U={...z,args:{min:40,max:60},play:async({canvasElement:e})=>{const a=q(e).getByRole("slider");C(a).toHaveAttribute("aria-valuemin","40"),C(a).toHaveAttribute("aria-valuemax","60"),C(a).toHaveAttribute("aria-valuenow","50")}},Y={...z,args:{step:10},play:async({canvasElement:e})=>{const a=q(e).getByRole("slider");C(a).toHaveAttribute("aria-valuenow","50")}},G={...z,args:{label:"Label",required:!0},play:async({canvasElement:e})=>{const a=q(e).getByText("Label");C(a).toBeVisible()}},X={render:()=>L("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[E(_,{label:"Small Input",displaySize:"small",required:!0}),E(_,{label:"Medium Input",required:!0}),E(_,{label:"Large Input",displaySize:"large",required:!0})]})},W={...z,args:{validationMode:"both",validationErrorMessages:["Invalid selection"]},play:async({canvasElement:e})=>{const a=q(e).getByText("Invalid selection");C(a).toBeVisible()}},J={...z,args:{customThumb:E(ta,{})},play:async({canvasElement:e})=>{const n=q(e).getByRole("slider").getElementsByTagName("svg");C(n).toHaveLength(1)}};var de,ue,me,fe,pe;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  }
}`,...(me=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"stories",...(pe=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:pe.description}}};var ve,ge,be;U.parameters={...U.parameters,docs:{...(ve=U.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(ge=U.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var $e,he,Se;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Se=(he=Y.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var ye,xe,we;G.parameters={...G.parameters,docs:{...(ye=G.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Ee,Ve,Ie;X.parameters={...X.parameters,docs:{...(Ee=X.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ae=(_e=J.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};const et=["Default","CustomMinAndMax","CustomStep","Labelled","Sizes","ValidationError","CustomThumb"];export{U as CustomMinAndMax,Y as CustomStep,J as CustomThumb,H as Default,G as Labelled,X as Sizes,W as ValidationError,et as __namedExportsOrder,Za as default};
//# sourceMappingURL=rangeInput.stories-bb475d4a.js.map