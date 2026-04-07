import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as v,w as x,u as C,e as s}from"./index-BmZcwVSF.js";import{R as b}from"./index-DwQS_Y10.js";import{I as Se,u as Le}from"./inputWrapper.component-BOdGAkjG.js";import{a as qe}from"./useDidUpdateEffect-DxNflIL8.js";import{o as Re}from"./radixDialog-CBrwtQa5.js";import{u as De}from"./config.context-BKnTehkl.js";import{a as Ve,u as ze}from"./label.component-DXuTf-S2.js";const Pe=({ref:t,milliseconds:e,value:a,onValueChange:o,onChange:c,...g})=>{const[D,T]=Le(e,a,o),y=b.useCallback(S=>{T(S.currentTarget.value),c==null||c(S)},[T,c]);return r.jsx("textarea",{ref:t,value:D,onChange:y,...g})},u=({ref:t,bind:e,onChange:a,value:o,className:c,validationErrorMessages:g,validationMode:D,pending:T,disabled:y,disableOnPending:S,onValueChange:i,scrollValidationErrorsIntoView:oe,delay:V,validationErrorsClassName:le,statusClassName:ce,textAreaClassName:de,label:ie,required:ue,requiredIndicator:me,displaySize:pe,labelClassName:xe,labelId:be,testId:ge,errorIcon:Te,leftOverlay:ye,rightOverlay:ve,hideIconOnStatus:he,statusPosition:Ae,autoValidate:Be,...m})=>{const Ee=b.useId(),P=m.id??Ee,[L,j,n]=Ve(e,{value:o==null?void 0:o.toString(),validationErrorMessages:g,validationErrorIcon:Te,validationMode:D,autoValidate:Be}),d=De({validationMode:n.validationMode,disableControlOnPending:S,inputStatusPosition:Ae,inputDisplaySize:pe,requiredIndicator:me,scrollValidationErrorsIntoView:oe,validationErrorIcon:n.validationErrorIcon,hideInputErrorIconOnStatus:he,autoValidate:n.autoValidate}),q=b.useCallback(l=>{var M,R,H;const p=((H=(R=(M=e==null?void 0:e.bindConfig)==null?void 0:M.format)==null?void 0:R.toData)==null?void 0:H.call(R,l))||l;j(p)},[j,e]),fe=b.useCallback(l=>{a==null||a(l);const p=l.currentTarget.value;q(p),i==null||i(p)},[q,a,i]),Ie=b.useCallback(l=>{q(l),i==null||i(l)},[i,q]);qe(()=>{d.autoValidate&&n.isTouched&&n.validate()},[L]);const we=b.useCallback(l=>{var p;return d.autoValidate&&!n.isTouched&&n.validate(),n.setTouched(!0),Re(l),(p=m.onBlur)==null?void 0:p.call(m,l)},[n,d.autoValidate,m]),z={id:P,className:v("arm-text-area",de),value:(L==null?void 0:L.toString())??(e&&""),disabled:y,onBlur:we};return r.jsxs(Se,{"data-size":d.inputDisplaySize,"data-has-value":!!z.value,className:v(c,"arm-text-area-wrapper"),statusClassName:v(ce,"arm-text-area-status"),validationErrorsClassName:v(le,"arm-text-area-validation"),validationErrorMessages:n.validationErrorMessages,errorIcon:n.validationErrorIcon,validationMode:n.validationMode,pending:T,disabled:y,statusPosition:d.inputStatusPosition,scrollValidationErrorsIntoView:d.scrollValidationErrorsIntoView,disableOnPending:d.disableControlOnPending,hideIconOnStatus:d.hideInputErrorIconOnStatus,label:ie,labelId:be??P,labelClassName:v(xe,"arm-text-area-label"),required:ue,requiredIndicator:d.requiredIndicator,"data-testid":ge,leftOverlay:ye,rightOverlay:ve,children:[!!V&&r.jsx(Pe,{...m,...z,milliseconds:V,onChange:a,onValueChange:Ie,ref:t}),!V&&r.jsx("textarea",{className:"arm-text-area",...m,...z,onChange:fe,ref:t,disabled:y||T})]})};u.displayName="Text Area";u.__docgenInfo={description:"A component which wraps up a native text area element with some binding logic, labels and validation errors.",methods:[],displayName:"Text Area",props:{textAreaClassName:{required:!1,tsType:{name:"string"},description:"A class name to apply to the input element"},bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"TValue"}],raw:"IBindingProps<TValue>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: TValue) => void",signature:{arguments:[{type:{name:"TValue"},name:"value"}],return:{name:"void"}}},description:"Called when the value changes, takes into account any delay values and other effects."},delay:{required:!1,tsType:{name:"number"},description:"The delay config, used to set throttle and debounce values."},value:{required:!1,tsType:{name:"TValue"},description:"The current value of the input"},displaySize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | CustomString",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"`custom-${string}`"}]},description:"which size variant to use"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"A callback function to handle onChange event"},testId:{required:!1,tsType:{name:"string"},description:"An ID for the label to use when testing"},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},description:""}},composes:["NativeTextAreaProps","Omit"]};const je={title:"Components/TextArea",component:u,args:{type:"text"}},h={play:async({canvasElement:t})=>{const a=x(t).getByRole("textbox");s(a).toBeInTheDocument()}},A={args:{placeholder:"Placeholder content 🚀",label:"Please write below",required:!0},play:async({canvasElement:t})=>{const e=x(t),a=e.getByRole("textbox"),o=e.getByLabelText("Please write below *");s(a).toBeInTheDocument(),s(a).toHaveAttribute("placeholder","Placeholder content 🚀"),s(o).toBeInTheDocument()}},B={args:{placeholder:"Enter text here..."},render:t=>r.jsxs(r.Fragment,{children:[r.jsx(u,{testId:"small",label:"Small",displaySize:"small",...t}),r.jsx(u,{testId:"medium",label:"Medium (default)",...t}),r.jsx(u,{testId:"large",label:"Large",displaySize:"large",...t})]}),play:async({canvasElement:t})=>{const e=x(t),a=e.getByTestId("small"),o=e.getByTestId("medium"),c=e.getByTestId("large");s(a.getAttribute("data-size")).toEqual("small"),s(o.getAttribute("data-size")).toEqual("medium"),s(c.getAttribute("data-size")).toEqual("large")}},E={args:{placeholder:"Enter text here...",label:"Text Area Label",pending:!0},play:async({canvasElement:t})=>{const a=x(t).getByRole("status",{name:"Loading..."});s(a).toBeInTheDocument()}},f={args:{placeholder:"Enter text here...",label:"Text Area Label",required:!0,validationErrorMessages:["This field is required"],testId:"text-area-wrapper"},play:async({canvasElement:t})=>{const a=x(t).getByTestId("text-area-wrapper");s(a.getAttribute("data-error")).toBe("true")}},I={args:{disabled:!0,placeholder:"This text area has been disabled",label:"Text Area Label"},play:async({canvasElement:t})=>{const a=x(t).getByRole("textbox");s(a).toBeDisabled()}},w={args:{placeholder:"Enter text here..."},render:()=>{const{formProp:t,formState:e}=ze({text:"",debounce:""});return r.jsxs(r.Fragment,{children:[r.jsx(u,{testId:"bound-text-area",label:"Bound text area",bind:t("text").bind()}),r.jsxs("p",{"data-testid":"bound-result",children:["Value: ",e==null?void 0:e.text]}),r.jsx(u,{label:"Bound debounce text area (400ms)",bind:t("debounce").bind(),delay:400}),r.jsxs("p",{"data-testid":"debounce-result",children:["Value: ",e==null?void 0:e.debounce]})]})},play:async({canvasElement:t})=>{const e=x(t),a=e.getByLabelText("Bound text area"),o=e.getByLabelText("Bound debounce text area (400ms)"),c=e.getByTestId("bound-result"),g=e.getByTestId("debounce-result");await C.type(a,"Hello, bound world"),await C.type(o,"Hello, bound world (but slower)"),s(c.textContent).toBe("Value: Hello, bound world"),setTimeout(()=>{s(g.textContent).toBe("Value: Hello, bound world (but slower)")},500)}};var N,O,_;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeInTheDocument();
  }
}`,...(_=(O=h.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var k,W,F;A.parameters={...A.parameters,docs:{...(k=A.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder content 🚀',
    label: 'Please write below',
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox') as HTMLTextAreaElement;
    const label = canvas.getByLabelText('Please write below *');
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveAttribute('placeholder', 'Placeholder content 🚀');
    expect(label).toBeInTheDocument();
  }
}`,...(F=(W=A.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var $,G,U;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(G=B.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var J,K,Q;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=E.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ne,se;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
    await userEvent.type(boundTextArea, 'Hello, bound world');
    await userEvent.type(debounceTextArea, 'Hello, bound world (but slower)');

    // Check that the form state values match the typed input
    expect(boundResult.textContent).toBe('Value: Hello, bound world');
    setTimeout(() => {
      expect(debounceResult.textContent).toBe('Value: Hello, bound world (but slower)');
    }, 500);
  }
}`,...(se=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Me=["Default","Labelled","Sizes","Pending","ValidationError","Disabled","Bound"],$e=Object.freeze(Object.defineProperty({__proto__:null,Bound:w,Default:h,Disabled:I,Labelled:A,Pending:E,Sizes:B,ValidationError:f,__namedExportsOrder:Me,default:je},Symbol.toStringTag,{value:"Module"}));export{w as B,h as D,A as L,E as P,B as S,u as T,f as V,$e as t};
