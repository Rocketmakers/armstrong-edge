import{j as o}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as i}from"./index-BLKynSmM.js";import{ae as s,af as m,ag as p}from"./index-BNwbscNO.js";import"./blocks-BnjKZUbF.js";import{C as e,D as c}from"./checkboxList.stories-CQadHmJK.js";import"./index-Cqyox1Tj.js";import"./iframe-BPZ8QADq.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./config.context-B61qZkrf.js";import"./useDidUpdateEffect-igSykUWQ.js";import"./checkbox.component-B3J2Yc8K.js";import"./extends-CF3RwP-h.js";import"./index-CcyUcsxs.js";import"./label.component-Daqf1tyH.js";import"./statusWrapper.component-DucYgjxK.js";import"./spinner.component-Bc6RftQo.js";import"./validationErrors.component-CHN68oNP.js";import"./options-Q_-Fwsn7.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Components/CheckboxList",component:e}),`
`,o.jsx(t.h1,{id:"checkbox-list",children:"Checkbox list"}),`
`,o.jsxs(t.p,{children:["A list of ",o.jsx(t.code,{children:"checkboxes"})," that binds with your form."]}),`
`,o.jsx(m,{of:c,layout:"centered",sourceState:"none"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`interface IFormData {
  value?: ArmstrongId[];
}

const { formProp, formState } = useForm<IFormData>();

<CheckboxList
  label="Checkbox list"
  bind={formProp('value').bind()}
  options={[
    { id: '1', content: 'red' },
    { id: '2', content: 'blue' },
    { id: '3', content: 'pink' },
    { id: '4', content: 'brown' },
  ]}
/>

<p>Bound value: {formState?.value?.join(', ')}</p>
`})}),`
`,o.jsx(t.h2,{id:"checkbox-list-props",children:"Checkbox list Props"}),`
`,o.jsx(p,{of:e})]})}function X(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{X as default};
