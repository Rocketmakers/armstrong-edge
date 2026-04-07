import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DVgGKjXv.js";import"./index-eB6Hi8Lj.js";import{ae as r}from"./index-C0Bv-37P.js";import"./index-DwQS_Y10.js";import"./iframe-BFU3q-Hh.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BY2j7gpI.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Hooks/useEventListener"}),`
`,e.jsx(n.h3,{id:"useeventlistener",children:"useEventListener"}),`
`,e.jsx(n.p,{children:"Hook to add an event listener, and remove it when the component unmounts"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// the callback passed into the hook must be memoised in a useCallback
const onClick = React.useCallback(() => {}, []);

useEventListener('click', onClick, document);
`})})]})}function C(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{C as default};
