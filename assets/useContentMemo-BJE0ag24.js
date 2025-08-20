import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as r}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-DVxBdXcK.js";import{ae as s}from"./index-dWiZqFWo.js";import"./index-Cqyox1Tj.js";import"./iframe-m6cka322.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function o(n){const t={code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Hooks/useContentMemo"}),`
`,e.jsx(t.h3,{id:"usecontentmemo",children:"useContentMemo"}),`
`,e.jsxs(t.p,{children:["Returns a reference to the passed in item which only updates when the ",e.jsx(t.em,{children:"content"})," of the item updates rather than just the pointer reference"]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"WARNING:"})," This hook was designed for config/state objects and assumes that array/object items are serializable"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const valueContent = useContentMemo(props.myArray);

React.useEffect(() => {
  // trigger something based on the fact that the content of the array has changed, not just the reference
}, [valueContent]);
`})})]})}function x(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default};
