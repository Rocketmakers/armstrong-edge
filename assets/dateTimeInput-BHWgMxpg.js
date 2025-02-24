import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as t}from"./index-BLKynSmM.js";import{ae as o,af as i,ag as l}from"./index-DBy7xP5v.js";import"./blocks-DF7CajjH.js";import{D as a,a as s,R as c,M as h,N as x,S as m,V as j,b as p,L as u}from"./dateTimeInput.stories-QOHq9DGx.js";import"./index-Cqyox1Tj.js";import"./iframe-CA4J50BD.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./select.component-DRHP91b2.js";import"./config.context-CQ8yCtG8.js";import"./extends-CF3RwP-h.js";import"./floating-ui.dom-D0xtKlXs.js";import"./useDidUpdateEffect-BZzz_2dE.js";import"./radixDialog-CBrwtQa5.js";import"./label.component-V5A9lJAL.js";import"./options-Q_-Fwsn7.js";import"./statusWrapper.component-CaGPkh9Y.js";import"./spinner.component-RFiNSZIp.js";import"./validationErrors.component-eWW5zj5P.js";import"./button.component-BqSJDp5_.js";import"./input.component-uSgF6HZm.js";import"./inputWrapper.component-wkH-iOQH.js";function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/DateTime Input",component:a}),`
`,e.jsx(n.h1,{id:"datetime-input",children:"DateTime input"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"DateTimeInput"})," is a datepicker based on ",e.jsx("a",{href:"https://reactdatepicker.com",target:"_blank",children:"React Date Picker"})]}),`
`,e.jsx(i,{of:s,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formProp, DateTimeInput } from '@rocketmakers/armstrong';

const { formProp } = useForm({ date: '30/05/2023' });

<DateTimeInput bind={formProp('date').bind()} />;
`})}),`
`,e.jsx(n.h2,{id:"datetime-input-props",children:"DateTime input Props"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#basic",children:"Basic example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#range",children:"Date range example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#min-max",children:"Min/max dates example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#native",children:"Native datepicker"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disabled",children:e.jsx(n.code,{children:"disabled"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mode",children:e.jsx(n.code,{children:"Mode"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#monthSelectVariant",children:e.jsx(n.code,{children:"monthSelectVariant"})})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"basic-example",children:e.jsx("a",{name:"basic",children:"Basic example"})}),`
`,e.jsx(i,{of:s,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp } = useForm({ date: '30/05/2023' });

<DateTimeInput bind={formProp('date').bind()} />;
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"bind"})," prop is used for binding to an Armstrong form binder (see forms documentation)."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"date-range-example",children:e.jsx("a",{name:"range",children:"Date range example"})}),`
`,e.jsx(i,{of:c,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DateTimeInput selectsRange startBind={formProp('startDate').bind()} endBind={formProp('endDate').bind()} />
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"selectRange"})," prop is a boolean that determines whether to select a single date or a date range. It is false by default."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"minmax-dates-example",children:e.jsx("a",{name:"min-max",children:"Min/max dates example"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"minDate"})," and ",e.jsx(n.code,{children:"maxDate"})," properties within the ",e.jsx(n.code,{children:"config"})," prop restrict the range of selectable dates to between the specified minimum and maximum values."]}),`
`,e.jsx(i,{of:h,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DateTimeInput bind={formProp('date').bind()} config={{ minDate: new Date(), maxDate: addDays(new Date(), 5) }} />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"native-datepicker",children:e.jsx("a",{name:"native",children:"Native datepicker"})}),`
`,e.jsx(n.p,{children:"Whether to render a native date input (useful for mobile)."}),`
`,e.jsx(i,{of:x,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DateTimeInput native={true} />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"disabled",children:e.jsx("a",{name:"disabled",children:e.jsx(n.code,{children:"disabled"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DateTimeInput bind={formProp('date').bind()} disabled />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"displaysize",children:e.jsx("a",{name:"displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(i,{of:m,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DateTimeInput bind={formProp('date').bind()} displaySize="small" />
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
`,e.jsx(i,{of:j,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DateTimeInput bind={formProp('date').bind()} validationErrorMessages={['invalid date']} validationMode="both" />
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"validationErrorMessages"})," are the validation errors from the binder concatenated with manually passed in errors."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"validationMode"})," determines how to render the validation errors. The ",e.jsx(n.code,{children:"validationMode"})," options are ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"message"})," or ",e.jsx(n.code,{children:"both"}),"."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"mode",children:e.jsx("a",{name:"mode",children:e.jsx(n.code,{children:"Mode"})})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"mode"})," determines whether to pick date, time or both."]}),`
`,e.jsx(n.p,{children:"Mode options :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"time"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"date-time"})}),`
`]}),`
`,e.jsx(i,{of:p,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DateTimeInput bind={formProp('time').bind()} mode="date-time" />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"monthselectvariant",children:e.jsx("a",{name:"monthSelectVariant",children:e.jsx(n.code,{children:"monthSelectVariant"})})}),`
`,e.jsx(n.p,{children:"The display variant to use for the month/year selectors."}),`
`,e.jsx(i,{of:u,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DateTimeInput bind={formProp('date').bind()} locale={enGB} monthSelectVariant="left-align" />
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"monthSelectVariant"})," options:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"left-align"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"centered"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dropdown"})}),`
`]})]})}function q(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{q as default};
