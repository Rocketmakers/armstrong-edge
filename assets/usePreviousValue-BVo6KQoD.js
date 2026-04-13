import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DVgGKjXv.js";import"./index-Cq3Rc422.js";import{ae as s}from"./index-BbZ_Hiba.js";import"./index-DwQS_Y10.js";import"./iframe-BpkiNJRp.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BY2j7gpI.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function r(n){const o={code:"code",h3:"h3",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Hooks/usePreviousValue"}),`
`,e.jsx(o.h3,{id:"usepreviousvalue",children:"usePreviousValue"}),`
`,e.jsx(o.p,{children:"Will return the previous value for an incoming prop or potential dependency for comparison"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const previousValue = usePreviousValue(props.value);

React.useEffect(() => {
  if (previousValue != props.value) {
    // do something
  }
}, [previousValue, props.value]);
`})})]})}function j(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{j as default};
