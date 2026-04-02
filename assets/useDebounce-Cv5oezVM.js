import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DVgGKjXv.js";import"./index-Ct5fPup2.js";import{ae as s}from"./index-i1D0edQM.js";import"./index-DwQS_Y10.js";import"./iframe-Bve64uyV.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BY2j7gpI.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function n(o){const t={code:"code",h3:"h3",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Hooks/useDebounce"}),`
`,e.jsx(t.h3,{id:"usedebounce",children:"useDebounce"}),`
`,e.jsx(t.p,{children:'Like a state hook, but also exports a "throttled" value (set after x amount of inactivity through the setter method)'}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const [actualValue, setActualValue, debouncedValue, setDebouncedValue] = useDebounce(
  milliseconds,
  value,
  onValueChange
);
`})})]})}function b(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{b as default};
