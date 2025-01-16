import{j as f}from"./jsx-runtime-Cl2eCCBe.js";import{c as Q,w as M,u as N,a as P,e as w}from"./classNames-TtGgGdEV.js";import{u as Ve,g as ze}from"./config.context-DSGy4VcJ.js";import{_ as R}from"./extends-CF3RwP-h.js";import{r as o,R as k,b as Ue}from"./index-Cqyox1Tj.js";import{$ as A}from"./index-CcyUcsxs.js";import{r as Ke}from"./index-QqxU7g3h.js";import{a as We}from"./useDidUpdateEffect-CQd39TVK.js";import{a as Ye,L as Xe,u as G}from"./label.component-BjYIJ-30.js";import{g as Je}from"./options-Q_-Fwsn7.js";import{V as Ze}from"./validationErrors.component-CrXQH9ID.js";import"./index-DGXSSr1l.js";function Qe(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ae(...e){return t=>e.forEach(n=>Qe(n,t))}function _(...e){return o.useCallback(ae(...e),e)}function X(e,t=[]){let n=[];function r(c,i){const l=o.createContext(i),d=n.length;n=[...n,i];function s(m){const{scope:b,children:p,...u}=m,$=(b==null?void 0:b[e][d])||l,E=o.useMemo(()=>u,Object.values(u));return o.createElement($.Provider,{value:E},p)}function v(m,b){const p=(b==null?void 0:b[e][d])||l,u=o.useContext(p);if(u)return u;if(i!==void 0)return i;throw new Error(`\`${m}\` must be used within \`${c}\``)}return s.displayName=c+"Provider",[s,v]}const a=()=>{const c=n.map(i=>o.createContext(i));return function(l){const d=(l==null?void 0:l[e])||c;return o.useMemo(()=>({[`__scope${e}`]:{...l,[e]:d}}),[l,d])}};return a.scopeName=e,[r,en(a,...t)]}function en(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(c){const i=r.reduce((l,{useScope:d,scopeName:s})=>{const m=d(c)[`__scope${s}`];return{...l,...m}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}const Ae=o.forwardRef((e,t)=>{const{children:n,...r}=e,a=o.Children.toArray(n),c=a.find(tn);if(c){const i=c.props.children,l=a.map(d=>d===c?o.Children.count(i)>1?o.Children.only(null):o.isValidElement(i)?i.props.children:null:d);return o.createElement(ne,R({},r,{ref:t}),o.isValidElement(i)?o.cloneElement(i,void 0,l):null)}return o.createElement(ne,R({},r,{ref:t}),n)});Ae.displayName="Slot";const ne=o.forwardRef((e,t)=>{const{children:n,...r}=e;return o.isValidElement(n)?o.cloneElement(n,{...on(r,n.props),ref:t?ae(t,n.ref):n.ref}):o.Children.count(n)>1?o.Children.only(null):null});ne.displayName="SlotClone";const nn=({children:e})=>o.createElement(o.Fragment,null,e);function tn(e){return o.isValidElement(e)&&e.type===nn}function on(e,t){const n={...t};for(const r in t){const a=e[r],c=t[r];/^on[A-Z]/.test(r)?a&&c?n[r]=(...l)=>{c(...l),a(...l)}:a&&(n[r]=a):r==="style"?n[r]={...a,...c}:r==="className"&&(n[r]=[a,c].filter(Boolean).join(" "))}return{...e,...n}}const rn=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],j=rn.reduce((e,t)=>{const n=o.forwardRef((r,a)=>{const{asChild:c,...i}=r,l=c?Ae:t;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(l,R({},i,{ref:a}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),te=o.forwardRef((e,t)=>{const{children:n,...r}=e,a=o.Children.toArray(n),c=a.find(cn);if(c){const i=c.props.children,l=a.map(d=>d===c?o.Children.count(i)>1?o.Children.only(null):o.isValidElement(i)?i.props.children:null:d);return o.createElement(oe,R({},r,{ref:t}),o.isValidElement(i)?o.cloneElement(i,void 0,l):null)}return o.createElement(oe,R({},r,{ref:t}),n)});te.displayName="Slot";const oe=o.forwardRef((e,t)=>{const{children:n,...r}=e;return o.isValidElement(n)?o.cloneElement(n,{...sn(r,n.props),ref:t?ae(t,n.ref):n.ref}):o.Children.count(n)>1?o.Children.only(null):null});oe.displayName="SlotClone";const an=({children:e})=>o.createElement(o.Fragment,null,e);function cn(e){return o.isValidElement(e)&&e.type===an}function sn(e,t){const n={...t};for(const r in t){const a=e[r],c=t[r];/^on[A-Z]/.test(r)?a&&c?n[r]=(...l)=>{c(...l),a(...l)}:a&&(n[r]=a):r==="style"?n[r]={...a,...c}:r==="className"&&(n[r]=[a,c].filter(Boolean).join(" "))}return{...e,...n}}function dn(e){const t=e+"CollectionProvider",[n,r]=X(t),[a,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=p=>{const{scope:u,children:$}=p,E=k.useRef(null),h=k.useRef(new Map).current;return k.createElement(a,{scope:u,itemMap:h,collectionRef:E},$)},l=e+"CollectionSlot",d=k.forwardRef((p,u)=>{const{scope:$,children:E}=p,h=c(l,$),g=_(u,h.collectionRef);return k.createElement(te,{ref:g},E)}),s=e+"CollectionItemSlot",v="data-radix-collection-item",m=k.forwardRef((p,u)=>{const{scope:$,children:E,...h}=p,g=k.useRef(null),B=_(u,g),I=c(s,$);return k.useEffect(()=>(I.itemMap.set(g,{ref:g,...h}),()=>void I.itemMap.delete(g))),k.createElement(te,{[v]:"",ref:B},E)});function b(p){const u=c(e+"CollectionConsumer",p);return k.useCallback(()=>{const E=u.collectionRef.current;if(!E)return[];const h=Array.from(E.querySelectorAll(`[${v}]`));return Array.from(u.itemMap.values()).sort((I,O)=>h.indexOf(I.ref.current)-h.indexOf(O.ref.current))},[u.collectionRef,u.itemMap])}return[{Provider:i,Slot:d,ItemSlot:m},b,r]}const ln=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{},un=Ue.useId||(()=>{});let fn=0;function pn(e){const[t,n]=o.useState(un());return ln(()=>{n(r=>r??String(fn++))},[e]),t?`radix-${t}`:""}function mn(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Ne(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Pe({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=bn({defaultProp:t,onChange:n}),c=e!==void 0,i=c?e:r,l=Ne(n),d=o.useCallback(s=>{if(c){const m=typeof s=="function"?s(e):s;m!==e&&l(m)}else a(s)},[c,e,a,l]);return[i,d]}function bn({defaultProp:e,onChange:t}){const n=o.useState(e),[r]=n,a=o.useRef(r),c=Ne(t);return o.useEffect(()=>{a.current!==r&&(c(r),a.current=r)},[r,a,c]),n}const vn=o.createContext(void 0);function Fe(e){const t=o.useContext(vn);return e||t||"ltr"}const ee="rovingFocusGroup.onEntryFocus",$n={bubbles:!1,cancelable:!0},ce="RovingFocusGroup",[re,Be,hn]=dn(ce),[gn,_e]=X(ce,[hn]),[xn,En]=gn(ce),Rn=o.forwardRef((e,t)=>o.createElement(re.Provider,{scope:e.__scopeRovingFocusGroup},o.createElement(re.Slot,{scope:e.__scopeRovingFocusGroup},o.createElement(yn,R({},e,{ref:t}))))),yn=o.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:c,currentTabStopId:i,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:d,onEntryFocus:s,...v}=e,m=o.useRef(null),b=_(t,m),p=Fe(c),[u=null,$]=Pe({prop:i,defaultProp:l,onChange:d}),[E,h]=o.useState(!1),g=mn(s),B=Be(n),I=o.useRef(!1),[O,q]=o.useState(0);return o.useEffect(()=>{const x=m.current;if(x)return x.addEventListener(ee,g),()=>x.removeEventListener(ee,g)},[g]),o.createElement(xn,{scope:n,orientation:r,dir:p,loop:a,currentTabStopId:u,onItemFocus:o.useCallback(x=>$(x),[$]),onItemShiftTab:o.useCallback(()=>h(!0),[]),onFocusableItemAdd:o.useCallback(()=>q(x=>x+1),[]),onFocusableItemRemove:o.useCallback(()=>q(x=>x-1),[])},o.createElement(j.div,R({tabIndex:E||O===0?-1:0,"data-orientation":r},v,{ref:b,style:{outline:"none",...e.style},onMouseDown:A(e.onMouseDown,()=>{I.current=!0}),onFocus:A(e.onFocus,x=>{const J=!I.current;if(x.target===x.currentTarget&&J&&!E){const S=new CustomEvent(ee,$n);if(x.currentTarget.dispatchEvent(S),!S.defaultPrevented){const F=B().filter(T=>T.focusable),y=F.find(T=>T.active),Z=F.find(T=>T.id===u),H=[y,Z,...F].filter(Boolean).map(T=>T.ref.current);Me(H)}}I.current=!1}),onBlur:A(e.onBlur,()=>h(!1))})))}),wn="RovingFocusGroupItem",Cn=o.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:c,...i}=e,l=pn(),d=c||l,s=En(wn,n),v=s.currentTabStopId===d,m=Be(n),{onFocusableItemAdd:b,onFocusableItemRemove:p}=s;return o.useEffect(()=>{if(r)return b(),()=>p()},[r,b,p]),o.createElement(re.ItemSlot,{scope:n,id:d,focusable:r,active:a},o.createElement(j.span,R({tabIndex:v?0:-1,"data-orientation":s.orientation},i,{ref:t,onMouseDown:A(e.onMouseDown,u=>{r?s.onItemFocus(d):u.preventDefault()}),onFocus:A(e.onFocus,()=>s.onItemFocus(d)),onKeyDown:A(e.onKeyDown,u=>{if(u.key==="Tab"&&u.shiftKey){s.onItemShiftTab();return}if(u.target!==u.currentTarget)return;const $=Tn(u,s.orientation,s.dir);if($!==void 0){u.preventDefault();let h=m().filter(g=>g.focusable).map(g=>g.ref.current);if($==="last")h.reverse();else if($==="prev"||$==="next"){$==="prev"&&h.reverse();const g=h.indexOf(u.currentTarget);h=s.loop?kn(h,g+1):h.slice(g+1)}setTimeout(()=>Me(h))}})})))}),Sn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function In(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Tn(e,t,n){const r=In(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Sn[r]}function Me(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function kn(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const An=Rn,Nn=Cn,Pn=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{};function Fn(e){const[t,n]=o.useState(void 0);return Pn(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const c=a[0];let i,l;if("borderBoxSize"in c){const d=c.borderBoxSize,s=Array.isArray(d)?d[0]:d;i=s.inlineSize,l=s.blockSize}else i=e.offsetWidth,l=e.offsetHeight;n({width:i,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function Bn(e){const t=o.useRef({value:e,previous:e});return o.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const de=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{};function _n(e,t){return o.useReducer((n,r)=>{const a=t[n][r];return a??n},e)}const Oe=e=>{const{present:t,children:n}=e,r=Mn(t),a=typeof n=="function"?n({present:r.isPresent}):o.Children.only(n),c=_(r.ref,a.ref);return typeof n=="function"||r.isPresent?o.cloneElement(a,{ref:c}):null};Oe.displayName="Presence";function Mn(e){const[t,n]=o.useState(),r=o.useRef({}),a=o.useRef(e),c=o.useRef("none"),i=e?"mounted":"unmounted",[l,d]=_n(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const s=V(r.current);c.current=l==="mounted"?s:"none"},[l]),de(()=>{const s=r.current,v=a.current;if(v!==e){const b=c.current,p=V(s);e?d("MOUNT"):p==="none"||(s==null?void 0:s.display)==="none"?d("UNMOUNT"):d(v&&b!==p?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,d]),de(()=>{if(t){const s=m=>{const p=V(r.current).includes(m.animationName);m.target===t&&p&&Ke.flushSync(()=>d("ANIMATION_END"))},v=m=>{m.target===t&&(c.current=V(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",s),t.addEventListener("animationend",s),()=>{t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",s),t.removeEventListener("animationend",s)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:o.useCallback(s=>{s&&(r.current=getComputedStyle(s)),n(s)},[])}}function V(e){return(e==null?void 0:e.animationName)||"none"}const De="Radio",[On,Ge]=X(De),[Dn,Gn]=On(De),jn=o.forwardRef((e,t)=>{const{__scopeRadio:n,name:r,checked:a=!1,required:c,disabled:i,value:l="on",onCheck:d,...s}=e,[v,m]=o.useState(null),b=_(t,$=>m($)),p=o.useRef(!1),u=v?!!v.closest("form"):!0;return o.createElement(Dn,{scope:n,checked:a,disabled:i},o.createElement(j.button,R({type:"button",role:"radio","aria-checked":a,"data-state":je(a),"data-disabled":i?"":void 0,disabled:i,value:l},s,{ref:b,onClick:A(e.onClick,$=>{a||d==null||d(),u&&(p.current=$.isPropagationStopped(),p.current||$.stopPropagation())})})),u&&o.createElement(Hn,{control:v,bubbles:!p.current,name:r,value:l,checked:a,required:c,disabled:i,style:{transform:"translateX(-100%)"}}))}),qn="RadioIndicator",Ln=o.forwardRef((e,t)=>{const{__scopeRadio:n,forceMount:r,...a}=e,c=Gn(qn,n);return o.createElement(Oe,{present:r||c.checked},o.createElement(j.span,R({"data-state":je(c.checked),"data-disabled":c.disabled?"":void 0},a,{ref:t})))}),Hn=e=>{const{control:t,checked:n,bubbles:r=!0,...a}=e,c=o.useRef(null),i=Bn(n),l=Fn(t);return o.useEffect(()=>{const d=c.current,s=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(s,"checked").set;if(i!==n&&m){const b=new Event("click",{bubbles:r});m.call(d,n),d.dispatchEvent(b)}},[i,n,r]),o.createElement("input",R({type:"radio","aria-hidden":!0,defaultChecked:n},a,{tabIndex:-1,ref:c,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function je(e){return e?"checked":"unchecked"}const Vn=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],qe="RadioGroup",[zn,pt]=X(qe,[_e,Ge]),Le=_e(),He=Ge(),[Un,Kn]=zn(qe),Wn=o.forwardRef((e,t)=>{const{__scopeRadioGroup:n,name:r,defaultValue:a,value:c,required:i=!1,disabled:l=!1,orientation:d,dir:s,loop:v=!0,onValueChange:m,...b}=e,p=Le(n),u=Fe(s),[$,E]=Pe({prop:c,defaultProp:a,onChange:m});return o.createElement(Un,{scope:n,name:r,required:i,disabled:l,value:$,onValueChange:E},o.createElement(An,R({asChild:!0},p,{orientation:d,dir:u,loop:v}),o.createElement(j.div,R({role:"radiogroup","aria-required":i,"aria-orientation":d,"data-disabled":l?"":void 0,dir:u},b,{ref:t}))))}),Yn="RadioGroupItem",Xn=o.forwardRef((e,t)=>{const{__scopeRadioGroup:n,disabled:r,...a}=e,c=Kn(Yn,n),i=c.disabled||r,l=Le(n),d=He(n),s=o.useRef(null),v=_(t,s),m=c.value===a.value,b=o.useRef(!1);return o.useEffect(()=>{const p=$=>{Vn.includes($.key)&&(b.current=!0)},u=()=>b.current=!1;return document.addEventListener("keydown",p),document.addEventListener("keyup",u),()=>{document.removeEventListener("keydown",p),document.removeEventListener("keyup",u)}},[]),o.createElement(Nn,R({asChild:!0},l,{focusable:!i,active:m}),o.createElement(jn,R({disabled:i,required:c.required,checked:m},d,a,{name:c.name,ref:v,onCheck:()=>c.onValueChange(a.value),onKeyDown:A(p=>{p.key==="Enter"&&p.preventDefault()}),onFocus:A(a.onFocus,()=>{var p;b.current&&((p=s.current)===null||p===void 0||p.click())})})))}),Jn=o.forwardRef((e,t)=>{const{__scopeRadioGroup:n,...r}=e,a=He(n);return o.createElement(Ln,R({},a,r,{ref:t}))}),Zn=Wn,Qn=Xn,et=Jn,C=o.forwardRef(({bind:e,options:t,className:n,value:r,errorIcon:a,validationMode:c,validationErrorMessages:i,onChange:l,customIndicator:d,error:s,displaySize:v,label:m,labelClassName:b,required:p,disabled:u,scrollValidationErrorsIntoView:$,requiredIndicator:E,displayMode:h,validationErrorsClassName:g,labelId:B,autoValidate:I,...O},q)=>{const[x,J,S]=Ye(e,{value:r,validationErrorMessages:i,validationErrorIcon:a,validationMode:c,onChange:l,autoValidate:I}),F=Ve({validationMode:S.validationMode,requiredIndicator:E,scrollValidationErrorsIntoView:$,validationErrorIcon:S.validationErrorIcon,inputDisplaySize:v,autoValidate:S.autoValidate});return We(()=>{F.autoValidate&&S.validate(),S.setTouched(!0)},[x]),f.jsxs(f.Fragment,{children:[m&&f.jsx(Xe,{id:B,className:Q("arm-radio-group-label",b),required:p,requiredIndicator:F.requiredIndicator,displaySize:F.inputDisplaySize,children:m}),f.jsx(Zn,{className:Q("arm-radio-group",n),"data-error":s||!!(i!=null&&i.length),"data-disabled":u,"data-size":v,"data-mode":h,value:(x==null?void 0:x.toString())??"undefined",onValueChange:y=>J(typeof x=="number"&&y!==null&&y!==void 0?+y:y),disabled:u,ref:q,...O,children:t.map((y,Z)=>{var T,ie,se;const L=x===y.id,H=Je(y,L);return f.jsxs("div",{className:"arm-radio-group-item-container",children:[f.jsx(Qn,{...y.htmlProps??{},className:"arm-radio-group-item",value:((T=y.id)==null?void 0:T.toString())??"",id:(ie=y.id)==null?void 0:ie.toString(),disabled:y.disabled,"data-checked":L,"data-index":Z,children:h==="radio"?f.jsx(et,{className:"arm-radio-group-item-indicator","data-custom-icon":!!d,children:L&&d}):H}),h==="radio"&&f.jsx("label",{className:"arm-radio-label",htmlFor:(se=y.id)==null?void 0:se.toString(),children:H})]},y.id)})}),S.shouldShowValidationErrorMessage&&!!S.validationErrorMessages.length&&f.jsx(Ze,{validationErrors:S.validationErrorMessages,className:Q("arm-radio-errors",g)})]})});C.defaultProps={displayMode:"radio"};C.displayName="RadioGroup";C.__docgenInfo={description:"Render a list of radio inputs which binds to a single string",methods:[],displayName:"RadioGroup",props:{displayMode:{required:!1,tsType:{name:"union",raw:"'radio' | 'button'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'button'"}]},description:"Whether to show a vertical list of radio buttons or a horizontal set of adjacent buttons",defaultValue:{value:"'radio'",computed:!1}},bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"Id"}],raw:"IBindingProps<Id>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},options:{required:!0,tsType:{name:"Array",elements:[{name:"IArmstrongOption",elements:[{name:"Id"},{name:"Omit",elements:[{name:"RadixRadioGroup.RadioGroupItemProps"},{name:"literal",value:"'value'"}],raw:"Omit<RadixRadioGroup.RadioGroupItemProps, 'value'>"}],raw:`IArmstrongOption<
  Id,
  Omit<RadixRadioGroup.RadioGroupItemProps, 'value'>
>`}],raw:"RadioGroupOption<Id>[]"},description:"The options to be shown in the input"},className:{required:!1,tsType:{name:"string"},description:"CSS className property"},value:{required:!1,tsType:{name:"Id"},description:"the current value of the radioInput"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: Id) => void",signature:{arguments:[{type:{name:"Id"},name:"newValue"}],return:{name:"void"}}},description:"Fired when the value changes"},error:{required:!1,tsType:{name:"boolean"},description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)"},customIndicator:{required:!1,tsType:{name:"JSX.Element"},description:"(Optional) A custom JSX.Element for the checked indicator."},displaySize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | CustomString",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"`custom-${string}`"}]},description:"which size variant to use"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label for the whole radio group itself"},labelClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the label component"},labelId:{required:!1,tsType:{name:"string"},description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided"},required:{required:!1,tsType:{name:"boolean"},description:"Indicates if field must be used to submit form"},disabled:{required:!1,tsType:{name:"boolean"},description:"wether input's value can be changed by user"},requiredIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Symbol to use as the required indicator on the label, defaults to "*"'},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"}},composes:["Pick"]};const mt={title:"Components/RadioGroup",component:C,parameters:{docs:{description:{component:"metadata"}}}},D={render:()=>{const e={value:void 0},{formProp:t,formState:n}=G(e);return f.jsxs(f.Fragment,{children:[f.jsx(C,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}]}),f.jsx("br",{}),f.jsxs("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=M(e),n=t.getByText("Bound value:"),[r,a,c,i]=await t.findAllByRole("radio");N.click(r),await P(()=>w(n).toHaveTextContent("Bound value: 1")),N.click(a),await P(()=>w(n).toHaveTextContent("Bound value: 2")),N.click(c),await P(()=>w(n).toHaveTextContent("Bound value: 3")),N.click(i),await P(()=>w(n).toHaveTextContent("Bound value: 4"))}},z={render:()=>{const e={value:void 0},{formProp:t,formState:n}=G(e);return f.jsxs(f.Fragment,{children:[f.jsx(C,{displayMode:"button",bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}]}),f.jsxs("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=M(e),n=t.getByText("Bound value:"),[r,a,c,i]=await t.findAllByRole("radio");N.click(r),await P(()=>w(n).toHaveTextContent("Bound value: 1")),N.click(a),await P(()=>w(n).toHaveTextContent("Bound value: 2")),N.click(c),await P(()=>w(n).toHaveTextContent("Bound value: 3")),N.click(i),await P(()=>w(n).toHaveTextContent("Bound value: 4"))}},U={render:()=>{const e={value:void 0},{formProp:t,formState:n}=G(e);return f.jsxs(f.Fragment,{children:[f.jsx(C,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],label:"Radio group",disabled:!0}),f.jsx("br",{}),f.jsxs("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{(await M(e).findAllByRole("radio")).forEach(r=>w(r).toHaveAttribute("data-disabled"))}},K={render:()=>{const e={value:void 0},{formProp:t,formState:n}=G(e);return f.jsxs(f.Fragment,{children:[f.jsx(C,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],validationErrorMessages:["Invalid selection"],label:"Radio group"}),f.jsx("br",{}),f.jsxs("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=M(e);w(t.getByText("Invalid selection")).toBeVisible()}},W={render:()=>{const e={value:"1"},{formProp:t,formState:n}=G(e);return f.jsxs(f.Fragment,{children:[f.jsx(C,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],customIndicator:f.jsx(ze,{})}),f.jsx("br",{}),f.jsxs("p",{children:["Bound value: ",n==null?void 0:n.value]})]})},play:async({canvasElement:e})=>{const t=M(e),n=await t.findByRole("radio",{checked:!0});w(n.getElementsByTagName("svg").length).toBeGreaterThan(0),(await t.findAllByRole("radio",{checked:!1})).forEach(a=>w(a.getElementsByTagName("svg")).toHaveLength(0))}},Y={render:()=>f.jsxs(f.Fragment,{children:[f.jsx("h2",{children:"Large"}),f.jsx(C,{options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],displaySize:"large",label:"Large radio group",required:!0}),f.jsx("h2",{children:"Medium"}),f.jsx(C,{options:[{id:"1b",content:"red"},{id:"2b",content:"blue"},{id:"3b",content:"pink"},{id:"4b",content:"brown"}],displaySize:"medium",label:"Medium radio group",required:!0}),f.jsx("h2",{children:"Small"}),f.jsx(C,{options:[{id:"1c",content:"red"},{id:"2c",content:"blue"},{id:"3c",content:"pink"},{id:"4c",content:"brown"}],displaySize:"small",label:"Small radio group",required:!0})]}),play:async({canvasElement:e})=>{const t=M(e),[n,r,a]=await t.findAllByRole("radiogroup");w(n).toHaveAttribute("data-size","large"),w(r).toHaveAttribute("data-size","medium"),w(a).toHaveAttribute("data-size","small")}};var le,ue,fe,pe,me;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(fe=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:fe.source},description:{story:"stories",...(me=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var be,ve,$e;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...($e=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:$e.source}}};var he,ge,xe;U.parameters={...U.parameters,docs:{...(he=U.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(ge=U.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Ee,Re,ye;K.parameters={...K.parameters,docs:{...(Ee=K.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ye=(Re=K.parameters)==null?void 0:Re.docs)==null?void 0:ye.source}}};var we,Ce,Se;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Se=(Ce=W.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Ie,Te,ke;Y.parameters={...Y.parameters,docs:{...(Ie=Y.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ke=(Te=Y.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};const bt=["Default","ButtonMode","Disabled","ValidationError","CustomIcon","Sizes"];export{z as ButtonMode,W as CustomIcon,D as Default,U as Disabled,Y as Sizes,K as ValidationError,bt as __namedExportsOrder,mt as default};
