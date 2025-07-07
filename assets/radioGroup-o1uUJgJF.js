import{j as n}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as a}from"./index-BLKynSmM.js";import{ae as t,af as i,ag as l}from"./index-BRiGjUMD.js";import"./blocks-c3fi8Do-.js";import{R as s,D as r,B as c,C as p,S as h,V as x}from"./radioGroup.stories-CJLsPogg.js";import"./index-Cqyox1Tj.js";import"./iframe-DmThDVqy.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./config.context-B61qZkrf.js";import"./extends-CF3RwP-h.js";import"./index-CcyUcsxs.js";import"./useDidUpdateEffect-igSykUWQ.js";import"./label.component-Daqf1tyH.js";import"./options-Q_-Fwsn7.js";import"./validationErrors.component-CHN68oNP.js";function d(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Components/radioGroup",component:s}),`
`,n.jsx(e.h1,{id:"radio-group",children:"Radio group"}),`
`,n.jsx(e.p,{children:"A set of radio buttons that allows users to select one option from multiple choices."}),`
`,n.jsx(i,{of:r,layout:"centered",sourceState:"none"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { formProp, formState, RadioGroup } from '@rocketmakers/armstrong';

const { formProp, formState } = useForm({ value: undefined });

<RadioGroup
  bind={formProp('value').bind()}
  options={[
    { id: '1', content: 'red' },
    { id: '2', content: 'blue' },
    { id: '3', content: 'pink' },
    { id: '4', content: 'brown' },
  ]}
/>
<p>Bound value: {formState?.value}</p>
`})}),`
`,n.jsx(e.h2,{id:"radio-group-props",children:"Radio group Props"}),`
`,n.jsx(l,{of:s}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h2,{id:"contents",children:"Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#basic",children:"Basic radio group example"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#displayMode",children:n.jsx(e.code,{children:"displayMode"})})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#customIndicator",children:n.jsx(e.code,{children:"customIndicator"})})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#displaySize",children:n.jsx(e.code,{children:"displaySize"})})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#disabled",children:n.jsx(e.code,{children:"disabled"})})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#validationErrorMessages",children:n.jsx(e.code,{children:"validationErrorMessages"})})}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"basic-radio-group-example-",children:n.jsx("a",{name:"basic",children:"Basic radio group example "})}),`
`,n.jsx(i,{of:r,layout:"centered",sourceState:"none"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`interface IFormData {
  value?: string;
}

const data: IFormData = { value: undefined };

const { formProp, formState } = useForm(data);

<RadioGroup
  bind={formProp('value').bind()}
  options={[
    { id: '1', content: 'red' },
    { id: '2', content: 'blue' },
    { id: '3', content: 'pink' },
    { id: '4', content: 'brown' },
  ]}
/>
<p>Bound value: {formState?.value}</p>
`})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"bind"})," prop is used for binding to an Armstrong form binder (see forms documentation)."]}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"options"})," props sets the options to be shown in the input."]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"displaymode",children:n.jsx("a",{name:"displayMode",children:n.jsx(e.code,{children:"displayMode"})})}),`
`,n.jsx(i,{of:c,layout:"centered",sourceState:"none"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<RadioGroup bind={formProp('value').bind()} options={options} displayMode="button" />
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"displayMode"})," determines whether to show a vertical list of radio buttons or a horizontal set of adjacent buttons."]}),`
`,n.jsx(e.p,{children:"Available display modes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"radio"})," (default)"]}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"button"})}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"customindicator",children:n.jsx("a",{name:"customIndicator",children:n.jsx(e.code,{children:"customIndicator"})})}),`
`,n.jsx(i,{of:p,layout:"centered",sourceState:"none"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<RadioGroup bind={formProp('value').bind()} options={options} customIndicator={<Icon />} />
`})}),`
`,n.jsxs(e.p,{children:["The optional ",n.jsx(e.code,{children:"customIndicator"})," props takes a custom JSX.Element to be displayed as the checked indicator."]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"displaysize",children:n.jsx("a",{name:"displaySize",children:n.jsx(e.code,{children:"displaySize"})})}),`
`,n.jsx(i,{of:h,layout:"centered",sourceState:"none"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<RadioGroup bind={formProp('value').bind()} options={options} displaySize={large} />
`})}),`
`,n.jsx(e.p,{children:"Size options :"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"small"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"medium"})," (default)"]}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"large"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"custom-<string>"})}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"disabled",children:n.jsx("a",{name:"disabled",children:n.jsx(e.code,{children:"disabled"})})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<RadioGroup bind={formProp('value').bind()} options={options} disabled />
`})}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"validationerrormessages",children:n.jsx("a",{name:"validationErrorMessages",children:n.jsx(e.code,{children:"validationErrorMessages"})})}),`
`,n.jsx(i,{of:x,layout:"centered",sourceState:"none"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<RadioGroup bind={formProp('value').bind()} options={options} validationErrorMessages={['Invalid selection']} />
`})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"validationErrorMessages"})," takes an array of error messages to display on validation error."]})]})}function N(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(d,{...o})}):d(o)}export{N as default};
