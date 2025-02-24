import{r as s}from"./index-Cqyox1Tj.js";import{j as a}from"./jsx-runtime-Cl2eCCBe.js";import{c as b}from"./index-Dv9et24K.js";import{S as z}from"./statusWrapper.component-CaGPkh9Y.js";import{L as W}from"./label.component-V5A9lJAL.js";import{V as D}from"./validationErrors.component-eWW5zj5P.js";import{u as L}from"./config.context-CQ8yCtG8.js";function H(m=500,r,o){const[n,d]=s.useState(r),[t,l]=s.useState(r),p=s.useCallback(()=>{l(n),o==null||o(n)},[n,l,o]),i=s.useCallback(()=>{d(r),l(r)},[r,d,l]);return s.useEffect(()=>{i()},[r]),s.useEffect(()=>{const u=setTimeout(p,m);return()=>clearTimeout(u)},[n]),[n,d,t,i]}const w=s.forwardRef(({className:m,children:r,leftOverlay:o,rightOverlay:n,validationMode:d,validationErrorMessages:t,errorIcon:l,disabled:p,pending:i,error:u,statusPosition:v,hideIconOnStatus:S,disableOnPending:q,scrollValidationErrorsIntoView:T,statusClassName:I,validationErrorsClassName:N,label:h,required:R,requiredIndicator:g,labelClassName:x,labelId:j,displaySize:P,...C},O)=>{const e=L({validationMode:d,hideInputErrorIconOnStatus:S,disableControlOnPending:q,requiredIndicator:g,scrollValidationErrorsIntoView:T,inputStatusPosition:v,validationErrorIcon:l,inputDisplaySize:P}),V=e.validationMode==="both"||e.validationMode==="message",c=!!(t!=null&&t.length)&&(e.validationMode==="both"||e.validationMode==="icon")||u,f=o&&(e.inputStatusPosition!=="left"||!e.hideInputErrorIconOnStatus||!i&&!c),y=n&&(e.inputStatusPosition!=="right"||!e.hideInputErrorIconOnStatus||!i&&!c);return a.jsx(a.Fragment,{children:a.jsxs("div",{ref:O,className:b("arm-input","arm-input-wrapper",m),"data-disabled":p||i&&e.disableControlOnPending?!0:void 0,"data-error":u||t!=null&&t.length?!0:void 0,"data-left-overlay":f||e.inputStatusPosition==="left"&&(c||i)?!0:void 0,"data-right-overlay":y||e.inputStatusPosition==="right"&&(c||i)?!0:void 0,...C,children:[h&&a.jsx(W,{className:b("arm-input-base-label",x),required:R,requiredIndicator:e.requiredIndicator,htmlFor:j,displaySize:e.inputDisplaySize,children:h}),a.jsx("div",{className:"arm-input-inner",children:a.jsx(z,{error:u||!!(t!=null&&t.length),pending:i,statusPosition:e.inputStatusPosition,errorIcon:e.validationErrorIcon,validationMode:e.validationMode,className:I,children:a.jsxs(a.Fragment,{children:[f&&a.jsx("div",{className:"arm-input-overlay arm-input-overlay-left",children:o}),r,y&&a.jsx("div",{className:"arm-input-overlay arm-input-overlay-right",children:n})]})})}),!!(t!=null&&t.length)&&V&&a.jsx(D,{className:N,validationMode:e.validationMode,validationErrors:t,scrollIntoView:e.scrollValidationErrorsIntoView})]})})});w.displayName="InputWrapper";w.__docgenInfo={description:"Wrapper for individual input elements, allowing them to be styled consistently]",methods:[],displayName:"InputWrapper",props:{statusPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"which side of the button to show the spinner on - defaults to 'right'"},error:{required:!1,tsType:{name:"boolean"},description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)"},pending:{required:!1,tsType:{name:"boolean"},description:"show a spinner and disable"},validationMode:{required:!1,tsType:{name:"union",raw:"'icon' | 'message' | 'both'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'message'"},{name:"literal",value:"'both'"}]},description:"how to render the validation errors"},errorIcon:{required:!1,tsType:{name:"JSX.Element"},description:"the icon to use for validation errors"},className:{required:!1,tsType:{name:"string"},description:"an optional CSS className for the rendered status"},validationErrorMessages:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]}],raw:"ValidationMessage[]"},description:"array of validation errors to render"},disabled:{required:!1,tsType:{name:"boolean"},description:"disable use"},hideIconOnStatus:{required:!1,tsType:{name:"boolean"},description:"hide the icon on the given side if there is an active status - defaults to true"},disableOnPending:{required:!1,tsType:{name:"boolean"},description:"when pending is true should also disable the input"},scrollValidationErrorsIntoView:{required:!1,tsType:{name:"boolean"},description:"will scroll the validation errors into view when the length of validationErrors changes"},leftOverlay:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to show on the left of the input"},rightOverlay:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to show on the right of the input"},statusClassName:{required:!1,tsType:{name:"string"},description:"Class name for the status component"},validationErrorsClassName:{required:!1,tsType:{name:"string"},description:"Class name for the validation errors component"},labelClassName:{required:!1,tsType:{name:"string"},description:"Class name for the label component"},labelId:{required:!1,tsType:{name:"string"},description:"Optional ID for the label element"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Some optional label content"},required:{required:!1,tsType:{name:"boolean"},description:"Should the label show a required indicator?"},requiredIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Symbol to use as the required indicator on the label, defaults to "*"'},displaySize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | CustomString",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"`custom-${string}`"}]},description:"which size variant to use"}}};export{w as I,H as u};
