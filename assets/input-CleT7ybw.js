import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as a}from"./index-BLKynSmM.js";import{ae as d,af as r,ag as t}from"./index-B2HsqE-J.js";import"./blocks-CJgQ5GMp.js";import{I as i}from"./input.component-CKcQoMXG.js";import{Default as o,Labelled as c,Overlay as x,Sizes as h,ValidationError as p,Disabled as j,Pending as m}from"./input.stories-BG56LSWp.js";import"./index-Cqyox1Tj.js";import"./iframe-ZU79e4CW.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./inputWrapper.component-Sld9-8zj.js";import"./index-Dv9et24K.js";import"./statusWrapper.component-DucYgjxK.js";import"./spinner.component-Bc6RftQo.js";import"./config.context-B61qZkrf.js";import"./label.component-CknXuhjY.js";import"./useDidUpdateEffect-igSykUWQ.js";import"./extends-CF3RwP-h.js";import"./validationErrors.component-CHN68oNP.js";import"./radixDialog-CBrwtQa5.js";import"./index.esm-57MWzJkG.js";import"./index.esm-DMdaClBq.js";function l(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/Input",component:i}),`
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
`})})]})}function F(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{F as default};
