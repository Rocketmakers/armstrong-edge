import{a as E,j as Y}from"./jsx-runtime-63e4a166.js";import{r as l}from"./index-c4905b50.js";import{u as Z,I as $}from"./inputWrapper.component-ef23b14e.js";import{c as p}from"./classNames-9011e307.js";import{a as ee}from"./label.component-4408833d.js";import{u as ae}from"./config.context-54240269.js";const _=l.forwardRef(({milliseconds:a,value:r,onValueChange:u,onChange:i,...h},b)=>{const[y,c]=Z(a,r,u),I=l.useCallback(m=>{c(m.currentTarget.value),i==null||i(m)},[c,i]);return E("input",{ref:b,value:y,onChange:I,...h})});_.displayName="DebounceInput";const te=l.forwardRef(({bind:a,onChange:r,value:u,className:i,leftOverlay:h,rightOverlay:b,validationErrorMessages:y,validationMode:c,errorIcon:I,pending:m,disabled:N,disableOnPending:z,statusPosition:P,hideIconOnStatus:k,onValueChange:n,scrollValidationErrorsIntoView:B,delay:g,validationErrorsClassName:R,statusClassName:x,inputClassName:A,label:j,required:F,requiredIndicator:W,displaySize:V,labelClassName:G,labelId:H,wrapperTestId:J,error:K,...o},S)=>{const L=l.useId(),O=o.id??L,t=ae({validationMode:c,disableControlOnPending:z,hideInputErrorIconOnStatus:k,inputDisplaySize:V,inputStatusPosition:P,requiredIndicator:W,validationErrorIcon:I,scrollValidationErrorsIntoView:B}),[q,C,w]=ee(a,{value:u==null?void 0:u.toString(),validationErrorMessages:y,validationMode:t.validationMode,validationErrorIcon:t.validationErrorIcon}),s=l.useCallback(e=>{if(o.type!=="number")return e;if(e!=null&&e!=="")return parseFloat(e)},[o.type]),f=l.useCallback(e=>{var M,v,T;const d=s(e),X=((T=(v=(M=a==null?void 0:a.bindConfig)==null?void 0:M.format)==null?void 0:v.toData)==null?void 0:T.call(v,d))||d;C(X)},[C,a,s]),Q=l.useCallback(e=>{r==null||r(e);const d=e.currentTarget.value;f(d),n==null||n(s(d))},[f,r,n,s]),U=l.useCallback(e=>{f(e),n==null||n(s(e))},[n,f,s]),D={id:O,className:p("arm-input-base-input",A),value:(q==null?void 0:q.toString())??(a&&""),disabled:N,...o};return Y($,{"data-size":t.inputDisplaySize,className:p(i,"arm-input-base"),statusClassName:p(x,"arm-input-base-status"),validationErrorsClassName:p(R,"arm-input-base-validation"),leftOverlay:h,rightOverlay:b,validationErrorMessages:w.validationErrorMessages,errorIcon:w.validationErrorIcon,validationMode:w.validationMode,pending:m,disabled:N,statusPosition:t.inputStatusPosition,scrollValidationErrorsIntoView:t.scrollValidationErrorsIntoView,disableOnPending:t.disableControlOnPending,hideIconOnStatus:t.hideInputErrorIconOnStatus,label:j,labelId:H??O,labelClassName:p(G,"arm-input-base-label"),required:F,error:K,requiredIndicator:t.requiredIndicator,"data-testid":J,displaySize:t.inputDisplaySize,children:[!!g&&E(_,{...o,...D,milliseconds:g,onChange:r,onValueChange:U,ref:S,"data-size":V}),!g&&E("input",{...o,...D,onChange:Q,ref:S,"data-size":V})]})});te.displayName="Input";try{DebounceInput.displayName="DebounceInput",DebounceInput.__docgenInfo={description:"A component which wraps up a native input element with some binding logic and some repeated elements (icons and stuff) for components which only contain a single input element.",displayName:"DebounceInput",props:{type:{defaultValue:null,description:"The type of input, used to discriminate the bind/value type",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"time"'},{value:'"text"'},{value:'"color"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"date"'},{value:'"datetime-local"'},{value:'"month"'},{value:'"password"'},{value:'"week"'}]}},inputClassName:{defaultValue:null,description:"A class name to apply to the input element",name:"inputClassName",required:!1,type:{name:"string"}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<TStringValue> | IBindingProps<TNumberValue>"}},onValueChange:{defaultValue:null,description:"Called when the value changes, takes into account any delay values and other effects.",name:"onValueChange",required:!1,type:{name:"((value?: TStringValue) => void) | ((value?: TNumberValue) => void) | undefined"}},delay:{defaultValue:null,description:"The delay config, used to set throttle and debounce values.",name:"delay",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"The current value of the input",name:"value",required:!1,type:{name:"string | number | null"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},wrapperTestId:{defaultValue:null,description:"optional test ID to use for the input wrapper",name:"wrapperTestId",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},hideIconOnStatus:{defaultValue:null,description:"hide the icon on the given side if there is an active status - defaults to true",name:"hideIconOnStatus",required:!1,type:{name:"boolean"}},disableOnPending:{defaultValue:null,description:"when pending is true should also disable the input",name:"disableOnPending",required:!1,type:{name:"boolean"}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},leftOverlay:{defaultValue:null,description:"Content to show on the left of the input",name:"leftOverlay",required:!1,type:{name:"ReactNode"}},rightOverlay:{defaultValue:null,description:"Content to show on the right of the input",name:"rightOverlay",required:!1,type:{name:"ReactNode"}},statusClassName:{defaultValue:null,description:"Class name for the status component",name:"statusClassName",required:!1,type:{name:"string"}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"Optional ID for the label element",name:"labelId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Some optional label content",name:"label",required:!1,type:{name:"ReactNode"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},statusPosition:{defaultValue:null,description:"which side of the button to show the spinner on - defaults to 'right'",name:"statusPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}},pending:{defaultValue:null,description:"show a spinner and disable",name:"pending",required:!1,type:{name:"boolean"}},validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}}}}}catch{}export{te as I};
//# sourceMappingURL=input.component-3dcba3ad.js.map