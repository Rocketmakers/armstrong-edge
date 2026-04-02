import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DVgGKjXv.js";import{ae as d,af as r,ag as t}from"./index-i1D0edQM.js";import"./blocks-CXtASP_2.js";import{I as i}from"./input.component-BYPt_Hb7.js";import{Default as o,Labelled as c,Overlay as x,Sizes as h,ValidationError as p,Disabled as j,Pending as m}from"./input.stories-bMUIPWAN.js";import"./index-DwQS_Y10.js";import"./iframe-Bve64uyV.js";import"../sb-preview/runtime.js";import"./index-BY2j7gpI.js";import"./index-Bls5tne7.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./inputWrapper.component-DeBVb2xf.js";import"./index-BmZcwVSF.js";import"./statusWrapper.component-C9Y4RJki.js";import"./config.context-Db4Op3G9.js";import"./spinner.component-C8cBclXj.js";import"./label.component-DRWWDUYP.js";import"./useDidUpdateEffect-Dtjk5cbT.js";import"./index-n_XmvDeM.js";import"./index-DKCiyFsV.js";import"./validationErrors.component-Cn_dkfWO.js";import"./radixDialog-CBrwtQa5.js";import"./index.esm-DgEj-QIv.js";import"./index.esm-CFsrA87a.js";function l(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/Input",component:i}),`
`,e.jsx(n.h1,{id:"input",children:"Input"}),`
`,e.jsx(n.p,{children:"An input field with multiple sizes and style variants."}),`
`,e.jsx(r,{of:o,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Input } from '@rocketmakers/armstrong';

<Input />;
`})}),`
`,e.jsx(n.h2,{id:"input-props",children:"Input Props"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h2,{id:"contents",children:"Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#label",children:e.jsx(n.code,{children:"label"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overlay",children:e.jsx(n.code,{children:"overlay"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disabled-and-pending",children:"Disabled and pending examples"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"label",children:e.jsx("a",{name:"label",children:e.jsx(n.code,{children:"label"})})}),`
`,e.jsx(r,{of:c,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input label="Default" />
<Input label="Required" required={true} />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"overlay",children:e.jsx("a",{name:"overlay",children:e.jsx(n.code,{children:"overlay"})})}),`
`,e.jsx(r,{of:x,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input leftOverlay={<Icon />} />
<Input label={'Right Overlay'} rightOverlay="ml" />
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"leftOverlay"})," and ",e.jsx(n.code,{children:"rightOverlay"})," determine content to show on the left of the input."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"displaysize",children:e.jsx("a",{name:"displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(r,{of:h,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input displaySize="small" />
`})}),`
`,e.jsx(n.p,{children:"Size options:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"small"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"large"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"custom-<string>"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"validationerrormessages",children:e.jsx("a",{name:"validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`,e.jsx(r,{of:p,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input validationErrorMessages={['This field is required']} validationMode="both" />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"disabled-and-pending-examples",children:e.jsx("a",{name:"disabled-and-pending",children:"Disabled and Pending examples"})}),`
`,e.jsx(r,{of:j,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input disabled />
`})}),`
`,e.jsx(r,{of:m,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input pending={true} />
<Input pending={true} statusPosition="left" />
`})})]})}function V(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{V as default};
