import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as p}from"./index-DVgGKjXv.js";import{ae as s,af as r,ag as i}from"./index-DoXlP5Lm.js";import"./blocks-Dl3A-eXH.js";import{E as o,D as m}from"./expandable.stories-DSvaahm8.js";import"./index-DwQS_Y10.js";import"./iframe-CJfsGlR5.js";import"../sb-preview/runtime.js";import"./index-BY2j7gpI.js";import"./index-Bls5tne7.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-BmZcwVSF.js";import"./useDidUpdateEffect-Dtjk5cbT.js";import"./config.context-Db4Op3G9.js";import"./button.component-DGjVvDTT.js";import"./spinner.component-C8cBclXj.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/Expandable",component:o}),`
`,n.jsx(e.h1,{id:"expandable",children:"Expandable"}),`
`,n.jsx(e.p,{children:"An expendable component that lets you collapse or display content."}),`
`,n.jsx(r,{of:m,layout:"centered",sourceState:"none"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const [isOpen, setIsOpen] = React.useState(false);

<Button onClick={() => setIsOpen(!isOpen)}>Toggle content</Button>
<Expandable isOpen={isOpen} data-testid="expandable">
  <div>
    Some inner content
  </div>
</Expandable>
`})}),`
`,n.jsx(e.h2,{id:"expandable-props",children:"Expandable Props"}),`
`,n.jsx(i,{of:o})]})}function S(t={}){const{wrapper:e}={...p(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{S as default};
