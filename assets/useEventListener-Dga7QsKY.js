import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as s}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-CFVVBQc_.js";import{ae as r}from"./index-CBkcRUrD.js";import"./index-Cqyox1Tj.js";import"./iframe-DzOEDjdK.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Hooks/useEventListener"}),`
`,e.jsx(n.h3,{id:"useeventlistener",children:"useEventListener"}),`
`,e.jsx(n.p,{children:"Hook to add an event listener, and remove it when the component unmounts"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// the callback passed into the hook must be memoised in a useCallback
const onClick = React.useCallback(() => {}, []);

useEventListener('click', onClick, document);
`})})]})}function k(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{k as default};
