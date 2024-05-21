import{M as i}from"./chunk-HLWAVYOI-e997ba5f.js";import{j as t,a as r,F as m}from"./jsx-runtime-eae7a151.js";import{u as a}from"./index-f875e932.js";import"./iframe-49978930.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./uniq-d447bef6.js";import"./_baseIsEqual-62e1ad13.js";import"./index-ec0b3b5e.js";import"./index-356e4a49.js";function s(n){const e=Object.assign({h3:"h3",p:"p",em:"em",strong:"strong",pre:"pre",code:"code"},a(),n.components);return r(m,{children:[t(i,{title:"Hooks/useContentMemo"}),`
`,t(e.h3,{id:"usecontentmemo",children:"useContentMemo"}),`
`,r(e.p,{children:["Returns a reference to the passed in item which only updates when the ",t(e.em,{children:"content"})," of the item updates rather than just the pointer reference"]}),`
`,r(e.p,{children:[t(e.strong,{children:"WARNING:"})," This hook was designed for config/state objects and assumes that array/object items are serializable"]}),`
`,t(e.pre,{children:t(e.code,{className:"language-tsx",children:`const valueContent = useContentMemo(props.myArray);

React.useEffect(() => {
  // trigger something based on the fact that the content of the array has changed, not just the reference
}, [valueContent]);
`})})]})}function c(n={}){const{wrapper:e}=Object.assign({},a(),n.components);return e?t(e,{...n,children:t(s,{...n})}):s(n)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const o={title:"Hooks/useContentMemo",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:c};const k=["__page"];export{k as __namedExportsOrder,p as __page,o as default};
