import{a as o,j as g,F as oe}from"./jsx-runtime-63e4a166.js";import{w as c,e as r,u as H}from"./index-3ffc2e85.js";import{r as d}from"./index-c4905b50.js";import{u as Ve,I as Se}from"./inputWrapper.component-ef23b14e.js";import{c as x}from"./classNames-9011e307.js";import{u as De}from"./config.context-54240269.js";import{a as Pe,u as Ce}from"./label.component-4408833d.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./statusWrapper.component-9facb966.js";import"./spinner.component-5b0c70a5.js";import"./validationErrors.component-04b289b4.js";import"./useContentMemo-b4c57d54.js";import"./index-742b7287.js";import"./index-07d1f67e.js";const ie=d.forwardRef(({milliseconds:e,value:t,onValueChange:a,onChange:n,...i},b)=>{const[h,m]=Ve(e,t,a),V=d.useCallback(s=>{m(s.currentTarget.value),n==null||n(s)},[m,n]);return o("textarea",{ref:b,value:h,onChange:V,...i})});ie.displayName="DebounceInput";const u=d.forwardRef(({bind:e,onChange:t,value:a,className:n,validationErrorMessages:i,validationMode:b,pending:h,disabled:m,disableOnPending:V,onValueChange:s,scrollValidationErrorsIntoView:de,delay:S,validationErrorsClassName:ue,statusClassName:ce,textAreaClassName:me,label:pe,required:be,requiredIndicator:xe,displaySize:ge,labelClassName:he,labelId:ye,testId:ve,errorIcon:fe,leftOverlay:Te,rightOverlay:Ae,hideIconOnStatus:Ie,statusPosition:Ee,...D},N)=>{const we=d.useId(),L=D.id??we,p=De({validationMode:b,disableControlOnPending:V,inputStatusPosition:Ee,inputDisplaySize:ge,requiredIndicator:xe,scrollValidationErrorsIntoView:de,validationErrorIcon:fe,hideInputErrorIconOnStatus:Ie}),[P,R,C]=Pe(e,{value:a==null?void 0:a.toString(),validationErrorMessages:i,validationMode:"message"}),y=d.useCallback(l=>{var M,f,O;const v=((O=(f=(M=e==null?void 0:e.bindConfig)==null?void 0:M.format)==null?void 0:f.toData)==null?void 0:O.call(f,l))||l;R(v)},[R,e]),Be=d.useCallback(l=>{t==null||t(l);const v=l.currentTarget.value;y(v),s==null||s(v)},[y,t,s]),qe=d.useCallback(l=>{y(l),s==null||s(l)},[s,y]),z={id:L,className:x("arm-text-area",me),value:(P==null?void 0:P.toString())??(e&&""),disabled:m};return g(Se,{"data-size":p.inputDisplaySize,className:x(n,"arm-text-area-wrapper"),statusClassName:x(ce,"arm-text-area-status"),validationErrorsClassName:x(ue,"arm-text-area-validation"),validationErrorMessages:C.validationErrorMessages,errorIcon:C.validationErrorIcon,validationMode:C.validationMode,pending:h,disabled:m,statusPosition:p.inputStatusPosition,scrollValidationErrorsIntoView:p.scrollValidationErrorsIntoView,disableOnPending:p.disableControlOnPending,hideIconOnStatus:p.hideInputErrorIconOnStatus,label:pe,labelId:ye??L,labelClassName:x(he,"arm-text-area-label"),required:be,requiredIndicator:p.requiredIndicator,"data-testid":ve,leftOverlay:Te,rightOverlay:Ae,children:[!!S&&o(ie,{...z,...D,milliseconds:S,onChange:t,onValueChange:qe,ref:N}),!S&&o("textarea",{className:"arm-text-area",...z,...D,onChange:Be,ref:N,disabled:m||h})]})});u.displayName="Text Area";try{DebounceInput.displayName="DebounceInput",DebounceInput.__docgenInfo={description:"A component which wraps up a native text area element with some binding logic, labels and validation errors.",displayName:"DebounceInput",props:{textAreaClassName:{defaultValue:null,description:"A class name to apply to the input element",name:"textAreaClassName",required:!1,type:{name:"string"}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<TStringValue>"}},onValueChange:{defaultValue:null,description:"Called when the value changes, takes into account any delay values and other effects.",name:"onValueChange",required:!1,type:{name:"((value?: TStringValue) => void)"}},delay:{defaultValue:null,description:"The delay config, used to set throttle and debounce values.",name:"delay",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"The current value of the input",name:"value",required:!1,type:{name:"NullOrUndefined<string>"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onChange:{defaultValue:null,description:"A callback function to handle onChange event",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},testId:{defaultValue:null,description:"An ID for the label to use when testing",name:"testId",required:!1,type:{name:"string"}},validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Some optional label content",name:"label",required:!1,type:{name:"ReactNode"}},pending:{defaultValue:null,description:"show a spinner and disable",name:"pending",required:!1,type:{name:"boolean"}},disableOnPending:{defaultValue:null,description:"when pending is true should also disable the input",name:"disableOnPending",required:!1,type:{name:"boolean"}},leftOverlay:{defaultValue:null,description:"Content to show on the left of the input",name:"leftOverlay",required:!1,type:{name:"ReactNode"}},rightOverlay:{defaultValue:null,description:"Content to show on the right of the input",name:"rightOverlay",required:!1,type:{name:"ReactNode"}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},statusPosition:{defaultValue:null,description:"which side of the button to show the spinner on - defaults to 'right'",name:"statusPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},labelClassName:{defaultValue:null,description:"Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"Optional ID for the label element",name:"labelId",required:!1,type:{name:"string"}},statusClassName:{defaultValue:null,description:"Class name for the status component",name:"statusClassName",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}},hideIconOnStatus:{defaultValue:null,description:"hide the icon on the given side if there is an active status - defaults to true",name:"hideIconOnStatus",required:!1,type:{name:"boolean"}}}}}catch{}const $e={title:"Components/TextArea",component:u,args:{type:"text"}},T={play:async({canvasElement:e})=>{const a=c(e).getByRole("textbox");r(a).toBeInTheDocument()}},A={args:{placeholder:"Placeholder content 🚀",label:"Please write below",required:!0},play:async({canvasElement:e})=>{const t=c(e),a=t.getByRole("textbox"),n=t.getByLabelText("Please write below *");r(a).toBeInTheDocument(),r(a).toHaveAttribute("placeholder","Placeholder content 🚀"),r(n).toBeInTheDocument()}},I={args:{placeholder:"Enter text here..."},render:e=>g(oe,{children:[o(u,{testId:"small",label:"Small",displaySize:"small",...e}),o(u,{testId:"medium",label:"Medium (default)",...e}),o(u,{testId:"large",label:"Large",displaySize:"large",...e})]}),play:async({canvasElement:e})=>{const t=c(e),a=t.getByTestId("small"),n=t.getByTestId("medium"),i=t.getByTestId("large");r(a.getAttribute("data-size")).toEqual("small"),r(n.getAttribute("data-size")).toEqual("medium"),r(i.getAttribute("data-size")).toEqual("large")}},E={args:{placeholder:"Enter text here...",label:"Text Area Label",pending:!0},play:async({canvasElement:e})=>{const a=c(e).getByRole("status",{name:"Loading..."});r(a).toBeInTheDocument()}},w={args:{placeholder:"Enter text here...",label:"Text Area Label",required:!0,validationErrorMessages:["This field is required"],testId:"text-area-wrapper"},play:async({canvasElement:e})=>{const a=c(e).getByTestId("text-area-wrapper");r(a.getAttribute("data-error")).toBe("true")}},B={args:{disabled:!0,placeholder:"This text area has been disabled",label:"Text Area Label"},play:async({canvasElement:e})=>{const a=c(e).getByRole("textbox");r(a).toBeDisabled()}},q={args:{placeholder:"Enter text here..."},render:()=>{const{formProp:e,formState:t}=Ce({text:"",debounce:""});return g(oe,{children:[o(u,{testId:"bound-text-area",label:"Bound text area",bind:e("text").bind()}),g("p",{"data-testid":"bound-result",children:["Value: ",t==null?void 0:t.text]}),o(u,{label:"Bound debounce text area (400ms)",bind:e("debounce").bind(),delay:400}),g("p",{"data-testid":"debounce-result",children:["Value: ",t==null?void 0:t.debounce]})]})},play:async({canvasElement:e})=>{const t=c(e),a=t.getByLabelText("Bound text area"),n=t.getByLabelText("Bound debounce text area (400ms)"),i=t.getByTestId("bound-result"),b=t.getByTestId("debounce-result");H.type(a,"Hello, bound world"),H.type(n,"Hello, bound world (but slower)"),r(i.textContent).toBe("Value: Hello, bound world"),setTimeout(()=>{r(b.textContent).toBe("Value: Hello, bound world (but slower)")},500)}};var _,k,F;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeInTheDocument();
  }
}`,...(F=(k=T.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var W,j,G;A.parameters={...A.parameters,docs:{...(W=A.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder content 🚀',
    label: 'Please write below',
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = (canvas.getByRole('textbox') as HTMLTextAreaElement);
    const label = canvas.getByLabelText('Please write below *');
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveAttribute('placeholder', 'Placeholder content 🚀');
    expect(label).toBeInTheDocument();
  }
}`,...(G=(j=A.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var U,J,K;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here...'
  },
  render: args => {
    return <>
        <TextArea testId={'small'} label={'Small'} displaySize="small" {...args} />
        <TextArea testId={'medium'} label={'Medium (default)'} {...args} />
        <TextArea testId={'large'} label={'Large'} displaySize="large" {...args} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallTextArea = canvas.getByTestId('small');
    const mediumTextArea = canvas.getByTestId('medium');
    const largeTextArea = canvas.getByTestId('large');
    expect(smallTextArea.getAttribute('data-size')).toEqual('small');
    expect(mediumTextArea.getAttribute('data-size')).toEqual('medium');
    expect(largeTextArea.getAttribute('data-size')).toEqual('large');
  }
}`,...(K=(J=I.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
    pending: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status', {
      name: 'Loading...'
    });
    expect(spinner).toBeInTheDocument();
  }
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
    required: true,
    validationErrorMessages: ['This field is required'],
    testId: 'text-area-wrapper'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textAreaWrapper = canvas.getByTestId('text-area-wrapper');
    expect(textAreaWrapper.getAttribute('data-error')).toBe('true');
  }
}`,...(ee=($=w.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,ne;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'This text area has been disabled',
    label: 'Text Area Label'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeDisabled();
  }
}`,...(ne=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,se,le;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here...'
  },
  render: () => {
    const {
      formProp,
      formState
    } = useForm({
      text: '',
      debounce: ''
    });
    return <>
        <TextArea testId={'bound-text-area'} label="Bound text area" bind={formProp('text').bind()} />
        <p data-testid={'bound-result'}>Value: {formState?.text}</p>
        <TextArea label="Bound debounce text area (400ms)" bind={formProp('debounce').bind()} delay={400} />
        <p data-testid={'debounce-result'}>Value: {formState?.debounce}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Get the text areas
    const boundTextArea = canvas.getByLabelText('Bound text area');
    const debounceTextArea = canvas.getByLabelText('Bound debounce text area (400ms)');
    const boundResult = canvas.getByTestId('bound-result');
    const debounceResult = canvas.getByTestId('debounce-result');
    // Test Bound Text Area
    userEvent.type(boundTextArea, 'Hello, bound world');
    userEvent.type(debounceTextArea, 'Hello, bound world (but slower)');

    // Check that the form state values match the typed input
    expect(boundResult.textContent).toBe('Value: Hello, bound world');
    setTimeout(() => {
      expect(debounceResult.textContent).toBe('Value: Hello, bound world (but slower)');
    }, 500);
  }
}`,...(le=(se=q.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const et=["Default","Labelled","Sizes","Pending","ValidationError","Disabled","Bound"];export{q as Bound,T as Default,B as Disabled,A as Labelled,E as Pending,I as Sizes,w as ValidationError,et as __namedExportsOrder,$e as default};
//# sourceMappingURL=textArea.stories-1dc9ee1e.js.map
