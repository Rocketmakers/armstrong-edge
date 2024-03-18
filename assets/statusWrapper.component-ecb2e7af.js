import{a as p,j as u,F as f}from"./jsx-runtime-eae7a151.js";import{r as h}from"./index-c4905b50.js";import{c as v}from"./classNames-9011e307.js";import{S as y}from"./spinner.component-a9fcb2ea.js";import{u as m}from"./config.context-ae8741c8.js";const t=h.forwardRef(({pending:e,error:a,errorIcon:o,spinnerIcon:s,className:i,...l},n)=>{const r=m({validationErrorIcon:o,spinnerIcon:s});return!a&&!e?null:p("div",{ref:n,className:v("arm-status",i),"data-active":e||a?!0:void 0,"data-error":a&&!e?!0:void 0,"data-pending":e?!0:void 0,role:"status",...l,children:[a&&!e&&r.validationErrorIcon,e&&u(y,{className:"arm-status-spinner",fillContainer:!1,icon:r.spinnerIcon})]})});t.displayName="Status";try{t.displayName="Status",t.__docgenInfo={description:"Render a status icon which can either be pending or errored",displayName:"Status",props:{pending:{defaultValue:null,description:"show a spinner",name:"pending",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"show an error state",name:"error",required:!1,type:{name:"boolean"}},errorIcon:{defaultValue:null,description:"the icon to use for the error",name:"errorIcon",required:!1,type:{name:"Element"}},spinnerIcon:{defaultValue:null,description:"the icon to use for the spinner",name:"spinnerIcon",required:!1,type:{name:"Element"}},className:{defaultValue:null,description:"an optional CSS className for the rendered status",name:"className",required:!1,type:{name:"string"}}}}}catch{}const c=({statusPosition:e,error:a,pending:o,errorIcon:s,validationMode:i,children:l,className:n})=>{const r=m({validationErrorIcon:s,validationMode:i,inputStatusPosition:e}),d=(r.validationMode==="both"||r.validationMode==="icon")&&!!a;return p(f,{children:[r.inputStatusPosition==="left"&&u(t,{className:n,error:d,pending:o,errorIcon:r.validationErrorIcon,"data-position":"left"}),l,r.inputStatusPosition==="right"&&u(t,{className:n,error:d,pending:o,errorIcon:r.validationErrorIcon,"data-position":"right"})]})};try{c.displayName="StatusWrapper",c.__docgenInfo={description:"",displayName:"StatusWrapper",props:{statusPosition:{defaultValue:null,description:"which side of the button to show the spinner on - defaults to 'right'",name:"statusPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}},pending:{defaultValue:null,description:"show a spinner and disable",name:"pending",required:!1,type:{name:"boolean"}},validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}},className:{defaultValue:null,description:"an optional CSS className for the rendered status",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{c as S};