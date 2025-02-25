import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as o}from"./index-BLKynSmM.js";import{ae as l,af as i,ag as t}from"./index-CjR57eXb.js";import"./blocks-C9_VSJSd.js";import{R as s,D as a,L as c,C as h,S as x,W as m,H as j,a as p,b as u,c as g}from"./rating.stories-CwQ2Sv18.js";import"./index-Cqyox1Tj.js";import"./iframe-Dresth3c.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./index.esm-DQwWeNYP.js";import"./config.context-CQ8yCtG8.js";import"./useDidUpdateEffect-BZzz_2dE.js";import"./label.component-CP0bZKSj.js";import"./extends-CF3RwP-h.js";import"./maths-co6UzHBn.js";import"./statusWrapper.component-CaGPkh9Y.js";import"./spinner.component-RFiNSZIp.js";import"./validationErrors.component-eWW5zj5P.js";import"./button.component-BqSJDp5_.js";function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/rating",component:s}),`
`,e.jsx(n.h1,{id:"rating",children:"Rating"}),`
`,e.jsx(n.p,{children:"A rating component to gather and display user feedback through customizable stars or symbols, supporting various sizes, icons, and interactive options."}),`
`,e.jsx(i,{of:a,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formProp, formState, Rating } from '@rocketmakers/armstrong';

const { formProp, formState } = useForm({ rating: 0 });

<Rating bind={formProp('rating').bind()} onValueChange={onValueChange} />
<p>Bound value: {formState?.rating}</p>
`})}),`
`,e.jsx(n.h2,{id:"rating-props",children:"Rating Props"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#basic",children:"Basic rating example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#with-label",children:"Rating with a label example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#custom-icons",children:"Custom icons example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#step",children:e.jsx(n.code,{children:"step"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#maximum",children:e.jsx(n.code,{children:"maximum"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overlay",children:e.jsx(n.code,{children:"overlay"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mode",children:e.jsx(n.code,{children:"mode"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disabled",children:e.jsx(n.code,{children:"disabled"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"basic-rating-example",children:e.jsx("a",{name:"basic",children:"Basic rating example"})}),`
`,e.jsx(i,{of:a,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ rating: 0 });

<Rating bind={formProp('rating').bind()} onValueChange={onValueChange} />
<p>Bound value: {formState?.rating}</p>
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"bind"})," prop is used for binding to an Armstrong form binder (see forms documentation)."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"value"})," is the current value, as a number, of the rating."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onValueChange"})," is called when the value of the input changes."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"rating-with-a-label-example",children:e.jsx("a",{name:"with-label",children:"Rating with a label example"})}),`
`,e.jsx(i,{of:c,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Rating bind={formProp('rating').bind()} label="Default" />;
<Rating bind={formProp('required').bind()} label="Required" required={true} />;
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"custom-icons-example",children:e.jsx("a",{name:"custom-icons",children:"Custom icons example"})}),`
`,e.jsx(i,{of:h,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// With an icon
<Rating bind={formProp('rating').bind()} emptyIcon={<Icon />} filledIcon={<Icon />} />

// With custom DOM
<Rating bind={formProp('rating').bind()} emptyIcon={<div>X</div>} filledIcon={<div>X</div>} />

// With custom DOM from index
<Rating
  bind={formProp('rating').bind()}
  emptyIcon={index => <div>{index + 1}</div>}
  filledIcon={index => <div>{index + 1}</div>}
/>
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"displaysize",children:e.jsx("a",{name:"displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(i,{of:x,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Rating bind={formProp('rating').bind()} displaySize="small" />
`})}),`
`,e.jsx(n.p,{children:"Size options:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"small"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"large"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"custom-<string>"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"overlay",children:e.jsx("a",{name:"overlay",children:e.jsx(n.code,{children:"overlay"})})}),`
`,e.jsx(i,{of:m,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Rating bind={formProp('rating').bind()} leftOverlay={<Icon />} pending={true} />
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"leftOverlay"})," and ",e.jsx(n.code,{children:"rightOverlay"})," props add overlays on the sides of the component."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"pending"})," displays a spinner on the right of the rating."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"step",children:e.jsx("a",{name:"step",children:e.jsx(n.code,{children:"step"})})}),`
`,e.jsx(i,{of:j,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Rating bind={formProp('rating').bind()} step="0.5" />
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"step"})," prop determines the size of each possible step. Its default value is ",e.jsx(n.code,{children:"1"}),", set to ",e.jsx(n.code,{children:"0.5"})," to allow half stars."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"maximum",children:e.jsx("a",{name:"maximum",children:e.jsx(n.code,{children:"maximum"})})}),`
`,e.jsx(i,{of:p,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Rating bind={formProp('rating').bind()} maximum="10" />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"mode",children:e.jsx("a",{name:"mode",children:e.jsx(n.code,{children:"mode"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Rating bind={formProp('rating').bind()} mode="radio" />
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"mode"})," prop determines the kind of elements used to handle the interaction. This doesn't affect the component visually."]}),`
`,e.jsx(n.p,{children:"Mode options:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"button"})," renders a series of buttons (default)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"radio"})," renders radio inputs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"range"})," renders an input with type='range'"]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"disabled",children:e.jsx("a",{name:"disabled",children:e.jsx(n.code,{children:"disabled"})})}),`
`,e.jsx(i,{of:u,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Rating bind={formProp('rating').bind()} disabled={true} />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"validationerrormessages",children:e.jsx("a",{name:"validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`,e.jsx(i,{of:g,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Rating bind={formProp('rating').bind()} validationErrorMessages={['Invalid rating']} />
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"validationErrorMessages"})," takes an array of error messages to display on validation error."]})]})}function q(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{q as default};
