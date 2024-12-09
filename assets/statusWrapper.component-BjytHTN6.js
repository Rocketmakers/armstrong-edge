import{j as o}from"./jsx-runtime-Cl2eCCBe.js";import{r as u}from"./index-Cqyox1Tj.js";import{c as m}from"./classNames-TtGgGdEV.js";import{S as h}from"./spinner.component-CCnqzpIN.js";import{u as p}from"./config.context-C5a6Dfld.js";const n=u.forwardRef(({pending:r,error:t,errorIcon:a,spinnerIcon:i,className:l,...d},s)=>{const e=p({validationErrorIcon:a,spinnerIcon:i});return!t&&!r?null:o.jsxs("div",{ref:s,className:m("arm-status",l),"data-active":r||t?!0:void 0,"data-error":t&&!r?!0:void 0,"data-pending":r?!0:void 0,role:"status",...d,children:[t&&!r&&e.validationErrorIcon,r&&o.jsx(h,{className:"arm-status-spinner",fillContainer:!1,icon:e.spinnerIcon})]})});n.displayName="Status";n.__docgenInfo={description:"Render a status icon which can either be pending or errored",methods:[],displayName:"Status",props:{pending:{required:!1,tsType:{name:"boolean"},description:"show a spinner"},error:{required:!1,tsType:{name:"boolean"},description:"show an error state"},errorIcon:{required:!1,tsType:{name:"JSX.Element"},description:"the icon to use for the error"},spinnerIcon:{required:!1,tsType:{name:"JSX.Element"},description:"the icon to use for the spinner"},className:{required:!1,tsType:{name:"string"},description:"an optional CSS className for the rendered status"}}};const f=({statusPosition:r,error:t,pending:a,errorIcon:i,validationMode:l,children:d,className:s})=>{const e=p({validationErrorIcon:i,validationMode:l,inputStatusPosition:r}),c=(e.validationMode==="both"||e.validationMode==="icon")&&!!t;return o.jsxs(o.Fragment,{children:[e.inputStatusPosition==="left"&&o.jsx(n,{className:s,error:c,pending:a,errorIcon:e.validationErrorIcon,"data-position":"left"}),d,e.inputStatusPosition==="right"&&o.jsx(n,{className:s,error:c,pending:a,errorIcon:e.validationErrorIcon,"data-position":"right"})]})};f.__docgenInfo={description:"",methods:[],displayName:"StatusWrapper",props:{statusPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"which side of the button to show the spinner on - defaults to 'right'"},error:{required:!1,tsType:{name:"boolean"},description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)"},pending:{required:!1,tsType:{name:"boolean"},description:"show a spinner and disable"},validationMode:{required:!1,tsType:{name:"union",raw:"'icon' | 'message' | 'both'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'message'"},{name:"literal",value:"'both'"}]},description:"how to render the validation errors"},errorIcon:{required:!1,tsType:{name:"JSX.Element"},description:"the icon to use for validation errors"},className:{required:!1,tsType:{name:"string"},description:"an optional CSS className for the rendered status"}}};export{f as S};
