import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DVgGKjXv.js";import"./index-eB6Hi8Lj.js";import{ae as r,ag as i}from"./index-C0Bv-37P.js";import"./index-DwQS_Y10.js";import"./iframe-BFU3q-Hh.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BY2j7gpI.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";const a=()=>null;function o(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Form/Form Custom Inputs"}),`
`,t.jsx(n.h2,{id:"custom-inputs",children:t.jsx("a",{name:"custom-inputs",children:"Custom Inputs"})}),`
`,t.jsx(n.p,{children:"Creating an input that can be bound to a form property is as simple as creating a component with a bind prop that supplies the expected type as a generic."}),`
`,t.jsx(n.p,{children:"The Armstrong form library also supplies a hook that helps convert the complex binding tools into a simple value/setter."}),`
`,t.jsxs(n.p,{children:["At it's simplest, this is a text input component expecting a ",t.jsx(n.code,{children:"string"})," as it's bound property:"]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`interface ICustomTextInputProps {
  bind: IBindingProps<string>; // the "string" here can be any type, and should match the type expected in the form data.
}

const CustomTextInput: React.FC<ICustomTextInputProps> = props => {
  const [boundValue, boundOnChange, { myValidationErrorMessages }] = useBindingState(props.bind);

  return (
    <>
      <input type="text" value={boundValue} onChange={boundOnChange} />

      <ValidationErrors validationErrors={myValidationErrorMessages} />
    </>
  );
};
`})}),`
`,t.jsxs(n.p,{children:["There are plenty of advanced tools within the bind prop, and the use of the ",t.jsx(n.code,{children:"useBindingState"})," prop is entirely optional, as long as you're careful to implement the features of the form binder within your custom input then you're good to go!"]}),`
`,t.jsxs(n.p,{children:["Here's the full list of tools contained within a ",t.jsx(n.code,{children:"bind"})," that your custom inputs can interface with:"]}),`
`,t.jsx(i,{of:a})]})}function b(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o(e)}export{b as default};
