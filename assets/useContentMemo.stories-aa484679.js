import{M as i}from"./chunk-PCJTTTQV-db90d705.js";import{a as t,j as r,F as m}from"./jsx-runtime-63e4a166.js";import{u as a}from"./index-f875e932.js";import"./iframe-9d8739d5.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d3777853.js";import"./index-07d1f67e.js";import"./_baseIsEqual-62e1ad13.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-d37d4223.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";function s(n){const e=Object.assign({h3:"h3",p:"p",em:"em",strong:"strong",pre:"pre",code:"code"},a(),n.components);return r(m,{children:[t(i,{title:"Hooks/useContentMemo"}),`
`,t(e.h3,{id:"usecontentmemo",children:"useContentMemo"}),`
`,r(e.p,{children:["Returns a reference to the passed in item which only updates when the ",t(e.em,{children:"content"})," of the item updates rather than just the pointer reference"]}),`
`,r(e.p,{children:[t(e.strong,{children:"WARNING:"})," This hook was designed for config/state objects and assumes that array/object items are serializable"]}),`
`,t(e.pre,{children:t(e.code,{className:"language-tsx",children:`const valueContent = useContentMemo(props.myArray);

React.useEffect(() => {
  // trigger something based on the fact that the content of the array has changed, not just the reference
}, [valueContent]);
`})})]})}function c(n={}){const{wrapper:e}=Object.assign({},a(),n.components);return e?t(e,{...n,children:t(s,{...n})}):s(n)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const o={title:"Hooks/useContentMemo",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:c};const k=["__page"];export{k as __namedExportsOrder,p as __page,o as default};
//# sourceMappingURL=useContentMemo.stories-aa484679.js.map
