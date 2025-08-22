import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as c}from"./index-BLKynSmM.js";import{ae as d,af as r,ag as l}from"./index-B2HsqE-J.js";import"./blocks-CJgQ5GMp.js";import{S as i,D as a,B as t,a as h,b as x,V as m}from"./switch.stories-Dq1BzQHz.js";import"./index-Cqyox1Tj.js";import"./iframe-ZU79e4CW.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./extends-CF3RwP-h.js";import"./index-CcyUcsxs.js";import"./useDidUpdateEffect-igSykUWQ.js";import"./config.context-B61qZkrf.js";import"./label.component-CknXuhjY.js";import"./validationErrors.component-CHN68oNP.js";function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/switch",component:i}),`
`,e.jsx(n.h1,{id:"switch",children:"Switch"}),`
`,e.jsx(n.p,{children:"A switch component that lets users toggle settings on or off."}),`
`,e.jsx(r,{of:a,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Switch } from '@rocketmakers/armstrong';

<Switch label={'Airplane mode'} />;
`})}),`
`,e.jsx(n.h2,{id:"switch-props",children:"Switch props"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#basic",children:"Basic switch example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#bound",children:"Bound switch example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disabled",children:e.jsx(n.code,{children:"disabled"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`]}),`
`,e.jsx(n.h3,{id:"basic-switch-example",children:e.jsx("a",{name:"basic",children:"Basic switch example"})}),`
`,e.jsx(r,{of:a,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Switch label={'Airplane mode'} />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"bound-switch-example",children:e.jsx("a",{name:"bound",children:"Bound switch example"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"bind"})," prop is used for binding to an Armstrong form binder (see forms documentation)."]}),`
`,e.jsx(r,{of:t,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ checked: false })

<Switch bind={formProp('checked').bind()} />
<p>Bound value is {formState?.checked ? 'checked' : 'not checked'}</p>
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"displaysize",children:e.jsx("a",{name:"displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(r,{of:h,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Switch label="Small Switch" displaySize="small" required={true} />
`})}),`
`,e.jsx(n.p,{children:"Size options:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"small"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"large"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"custom-<string>"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"disabled",children:e.jsx("a",{name:"disabled",children:e.jsx(n.code,{children:"disabled"})})}),`
`,e.jsx(r,{of:x,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Switch disabled />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"validationerrormessages",children:e.jsx("a",{name:"validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"validationErrorMessages"})," takes an array of error messages to display on validation error."]}),`
`,e.jsx(r,{of:m,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Switch bind={formProp('checked').bind()} label="Check" validationErrorMessages={['An error has occurred']} />
`})})]})}function P(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{P as default};
