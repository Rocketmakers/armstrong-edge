import{j as m}from"./jsx-runtime-eae7a151.js";import{w,e as S}from"./index-61f1305c.js";import{r as l,R as f}from"./index-c4905b50.js";import{_ as y}from"./extends-98964cd2.js";import{$ as T}from"./index-97ba0010.js";import{a as N}from"./index-47240d79.js";import{c as C}from"./maths-23377890.js";import{c as v}from"./classNames-9011e307.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-4dce63e4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./index-07d1f67e.js";const E="Progress",u=100,[D,ne]=T(E),[M,A]=D(E),h=l.forwardRef((e,r)=>{const{__scopeProgress:t,value:a,max:o,getValueLabel:s=j,...I}=e,i=$(o)?o:u,n=B(a,i)?a:null,R=d(n)?s(n,i):void 0;return l.createElement(M,{scope:t,value:n,max:i},l.createElement(N.div,y({"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":d(n)?n:void 0,"aria-valuetext":R,role:"progressbar","data-state":V(n,i),"data-value":n??void 0,"data-max":i},I,{ref:r})))});h.propTypes={max(e,r,t){const a=e[r],o=String(a);return a&&!$(a)?new Error(q(o,t)):null},value(e,r,t){const a=e[r],o=String(a),s=$(e.max)?e.max:u;return a!=null&&!B(a,s)?new Error(G(o,t)):null}};const L="ProgressIndicator",O=l.forwardRef((e,r)=>{var t;const{__scopeProgress:a,...o}=e,s=A(L,a);return l.createElement(N.div,y({"data-state":V(s.value,s.max),"data-value":(t=s.value)!==null&&t!==void 0?t:void 0,"data-max":s.max},o,{ref:r}))});function j(e,r){return`${Math.round(e/r*100)}%`}function V(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function d(e){return typeof e=="number"}function $(e){return d(e)&&!isNaN(e)&&e>0}function B(e,r){return d(e)&&!isNaN(e)&&e<=r&&e>=0}function q(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${u}\`.`}function G(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${u} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`}const F=h,U=O;const p=l.forwardRef(({progress:e,className:r,indicatorClassName:t,...a},o)=>{const s={"--arm-progress-bar-value":`${C(e??0,0,100)}%`};return m(F,{className:v(r,"arm-progress-bar"),value:e,ref:o,...a,children:m(U,{className:v(t,"arm-progress-bar-indicator"),style:s})})});p.displayName="ProgressBar";try{p.displayName="ProgressBar",p.__docgenInfo={description:"",displayName:"ProgressBar",props:{progress:{defaultValue:null,description:"The content to display in the tooltip",name:"progress",required:!1,type:{name:"number"}},indicatorClassName:{defaultValue:null,description:"Optional class name for the progress indicator element",name:"indicatorClassName",required:!1,type:{name:"string"}}}}}catch{}const ie={title:"Components/ProgressBar",component:p,parameters:{docs:{description:{component:"metadata"}}}},X={render:e=>{const[r,t]=f.useState(0);return f.useEffect(()=>{const a=setInterval(()=>{t(o=>o>=100?(clearInterval(a),100):o+1)},50);return()=>clearInterval(a)},[]),m(p,{progress:r,...e})}},c={...X,play:async({canvasElement:e})=>{const r=w(e).getByRole("progressbar");S(r).toBeVisible()}};var g,x,b,_,P;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const progress = within(canvasElement).getByRole('progressbar');
    expect(progress).toBeVisible();
  }
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source},description:{story:"stories",...(P=(_=c.parameters)==null?void 0:_.docs)==null?void 0:P.description}}};const le=["Default"];export{c as Default,le as __namedExportsOrder,ie as default};
