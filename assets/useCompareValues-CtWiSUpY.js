import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DVgGKjXv.js";import"./index-eB6Hi8Lj.js";import{ae as a}from"./index-C0Bv-37P.js";import"./index-DwQS_Y10.js";import"./iframe-BFU3q-Hh.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BY2j7gpI.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function t(o){const n={code:"code",h3:"h3",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Hooks/useCompareValues"}),`
`,e.jsx(n.h3,{id:"usecomparevalues",children:"useCompareValues"}),`
`,e.jsx(n.p,{children:"Compares an incoming prop or potential dependency to it's value on the previous render, useful for forming an effect trigger which runs when a value or reference changes"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const hasValueChanged = useCompareValues(props.value);

React.useEffect(() => {
  // trigger something based on the fact that a value has changed
}, [hasValueChanged]);
`})})]})}function j(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{j as default};
