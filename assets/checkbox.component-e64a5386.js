import{a as P,j as E}from"./jsx-runtime-eae7a151.js";import{_ as S}from"./uniq-d447bef6.js";import{r as e}from"./index-c4905b50.js";import{$ as F,a as D}from"./index-38f95ea5.js";import{$ as K}from"./index-97ba0010.js";import{$ as H,b as R}from"./index-10b0f2c6.js";import{$ as J}from"./index-b8d80492.js";import{$ as U}from"./index-20dac804.js";import{$ as W}from"./index-bbcfa8f0.js";import{a as G}from"./useDidUpdateEffect-3fc0eff1.js";import{c as w}from"./classNames-9011e307.js";import{a as Q,L as Y}from"./label.component-ee9b7c0c.js";import{S as Z}from"./statusWrapper.component-8ffbac8d.js";import{V as ee}from"./validationErrors.component-d4c1ec01.js";import{u as ae}from"./config.context-108849f1.js";const A="Checkbox",[te,Ve]=K(A),[oe,ne]=te(A),re=e.forwardRef((a,m)=>{const{__scopeCheckbox:t,name:d,checked:p,defaultChecked:o,required:f,disabled:s,value:c="on",onCheckedChange:C,...x}=a,[r,k]=e.useState(null),V=F(m,n=>k(n)),$=e.useRef(!1),y=r?!!r.closest("form"):!0,[u=!1,v]=H({prop:p,defaultProp:o,onChange:C}),q=e.useRef(u);return e.useEffect(()=>{const n=r==null?void 0:r.form;if(n){const b=()=>v(q.current);return n.addEventListener("reset",b),()=>n.removeEventListener("reset",b)}},[r,v]),e.createElement(oe,{scope:t,state:u,disabled:s},e.createElement(D.button,S({type:"button",role:"checkbox","aria-checked":h(u)?"mixed":u,"aria-required":f,"data-state":z(u),"data-disabled":s?"":void 0,disabled:s,value:c},x,{ref:V,onKeyDown:R(a.onKeyDown,n=>{n.key==="Enter"&&n.preventDefault()}),onClick:R(a.onClick,n=>{v(b=>h(b)?!0:!b),y&&($.current=n.isPropagationStopped(),$.current||n.stopPropagation())})})),y&&e.createElement(le,{control:r,bubbles:!$.current,name:d,value:c,checked:u,required:f,disabled:s,style:{transform:"translateX(-100%)"}}))}),ie="CheckboxIndicator",se=e.forwardRef((a,m)=>{const{__scopeCheckbox:t,forceMount:d,...p}=a,o=ne(ie,t);return e.createElement(W,{present:d||h(o.state)||o.state===!0},e.createElement(D.span,S({"data-state":z(o.state),"data-disabled":o.disabled?"":void 0},p,{ref:m,style:{pointerEvents:"none",...a.style}})))}),le=a=>{const{control:m,checked:t,bubbles:d=!0,...p}=a,o=e.useRef(null),f=J(t),s=U(m);return e.useEffect(()=>{const c=o.current,C=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(C,"checked").set;if(f!==t&&r){const k=new Event("click",{bubbles:d});c.indeterminate=h(t),r.call(c,h(t)?!1:t),c.dispatchEvent(k)}},[f,t,d]),e.createElement("input",S({type:"checkbox","aria-hidden":!0,defaultChecked:h(t)?!1:t},p,{tabIndex:-1,ref:o,style:{...a.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function h(a){return a==="indeterminate"}function z(a){return h(a)?"indeterminate":a?"checked":"unchecked"}const de=re,ce=se;const N=e.forwardRef(({bind:a,checked:m,customIndicator:t,className:d,customIndeterminateIndicator:p,disabled:o,onCheckedChange:f,label:s,labelClassName:c,labelId:C,scrollValidationErrorsIntoView:x,statusClassName:r,testId:k,validationErrorsClassName:V,validationErrorMessages:$,validationMode:y,displaySize:u,required:v,requiredIndicator:q,statusPosition:n,autoValidate:b,..._},T)=>{var O;const B=e.useId(),M=_.id??B,[g,I,l]=Q(a,{value:m,onChange:f,validationErrorMessages:$,validationMode:y,autoValidate:b}),i=ae({scrollValidationErrorsIntoView:x,checkboxCustomIndicator:t,checkboxCustomIndeterminateIndicator:p,requiredIndicator:q,inputStatusPosition:n,validationMode:l.validationMode,autoValidate:l.autoValidate,inputDisplaySize:u}),j=e.useCallback(X=>{I==null||I(X)},[I]);G(()=>{i.autoValidate&&l.validate(),l.setTouched(!0)},[g]);const L=e.useMemo(()=>{switch(g){case"indeterminate":return i.checkboxCustomIndeterminateIndicator;default:return i.checkboxCustomIndicator}},[g,i.checkboxCustomIndicator,i.checkboxCustomIndeterminateIndicator]);return P(Z,{className:w(r,"arm-input-base"),validationMode:l.validationMode,errorIcon:l.validationErrorIcon,statusPosition:i.inputStatusPosition,children:[P("div",{className:w("arm-checkbox-container",d),"data-disabled":!!o,"data-testid":k,"data-size":i.inputDisplaySize,..._,children:[E(de,{className:"arm-checkbox",disabled:o,id:M,checked:g??void 0,onCheckedChange:j,ref:T,children:E(ce,{className:"arm-checkbox-indicator",children:L})}),s&&E(Y,{className:w("arm-checkbox-label",c),"data-disabled":!!o,htmlFor:M,required:v,requiredIndicator:i.requiredIndicator,displaySize:i.inputDisplaySize,children:s})]}),!!((O=l.validationErrorMessages)!=null&&O.length)&&l.shouldShowValidationErrorMessage&&E(ee,{className:V,validationMode:i.validationMode,validationErrors:l.validationErrorMessages,scrollIntoView:i.scrollValidationErrorsIntoView})]})});N.displayName="Checkbox";try{N.displayName="Checkbox",N.__docgenInfo={description:"",displayName:"Checkbox",props:{validationMode:{defaultValue:null,description:"overrides the error messaging and icon display used in the error validation display",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"(Optional) A boolean flag to automatically scroll validation error messages into view.",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},autoValidate:{defaultValue:null,description:"should the input validate automatically against the provided schema? Default: `true`",name:"autoValidate",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"(Optional) A React.ReactNode to display a label for the checkbox input.",name:"label",required:!1,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"(Optional) A string to set a custom data-testid attribute for the checkbox container.",name:"testId",required:!1,type:{name:"string"}},bind:{defaultValue:null,description:"(Optional) An IBindingProps<TData> object to bind the checkbox input to a form.",name:"bind",required:!1,type:{name:"IBindingProps<TBind>"}},disabled:{defaultValue:null,description:"(Optional) A boolean flag to disable the checkbox input.",name:"disabled",required:!1,type:{name:"boolean"}},validationErrorMessages:{defaultValue:null,description:"(Optional) Can be a string or {key, element} key is necessary for animating in new messages",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},statusClassName:{defaultValue:null,description:"(Optional) Classname to use for the status wrapper",name:"statusClassName",required:!1,type:{name:"string"}},validationErrorsClassName:{defaultValue:null,description:"(Optional) Class name for the validation errors",name:"validationErrorsClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"(Optional) Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided",name:"labelId",required:!1,type:{name:"string"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},statusPosition:{defaultValue:null,description:"which side of the button to show the spinner on - defaults to 'right'",name:"statusPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},checked:{defaultValue:null,description:"(Optional) A TData value representing the initial checked state of the checkbox. This can be true, false, or 'indeterminate'.",name:"checked",required:!1,type:{name:"NullOrUndefined<boolean>"}},customIndeterminateIndicator:{defaultValue:null,description:"(Optional) A custom JSX.Element for the indeterminate state indicator.",name:"customIndeterminateIndicator",required:!1,type:{name:"Element"}},customIndicator:{defaultValue:null,description:"(Optional) A custom JSX.Element for the checked indicator.",name:"customIndicator",required:!1,type:{name:"Element"}},onCheckedChange:{defaultValue:null,description:"(Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed.",name:"onCheckedChange",required:!1,type:{name:"((newValue: TBind) => void)"}}}}}catch{}export{N as C};
