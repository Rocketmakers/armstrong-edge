import{j as n}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as s}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-DGdAXOum.js";import{ae as r,af as i}from"./index-DEOfttk_.js";import"./index-Cqyox1Tj.js";import"./iframe-Do_ZG48p.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const a=()=>null;function o(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Form/Form Custom Inputs"}),`
`,n.jsx(t.h2,{id:"custom-inputs",children:n.jsx("a",{name:"custom-inputs",children:"Custom Inputs"})}),`
`,n.jsx(t.p,{children:"Creating an input that can be bound to a form property is as simple as creating a component with a bind prop that supplies the expected type as a generic."}),`
`,n.jsx(t.p,{children:"The Armstrong form library also supplies a hook that helps convert the complex binding tools into a simple value/setter."}),`
`,n.jsxs(t.p,{children:["At it's simplest, this is a text input component expecting a ",n.jsx(t.code,{children:"string"})," as it's bound property:"]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`interface ICustomTextInputProps {
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
`,n.jsxs(t.p,{children:["There are plenty of advanced tools within the bind prop, and the use of the ",n.jsx(t.code,{children:"useBindingState"})," prop is entirely optional, as long as you're careful to implement the features of the form binder within your custom input then you're good to go!"]}),`
`,n.jsxs(t.p,{children:["Here's the full list of tools contained within a ",n.jsx(t.code,{children:"bind"})," that your custom inputs can interface with:"]}),`
`,n.jsx(i,{of:a})]})}function y(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{y as default};
