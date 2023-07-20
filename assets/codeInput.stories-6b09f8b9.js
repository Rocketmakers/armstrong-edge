import{a as s,j as b,F as j}from"./jsx-runtime-63e4a166.js";import{w as h,e as n,u as v,a as w}from"./index-3ffc2e85.js";import{r as d}from"./index-c4905b50.js";import{f as Ke}from"./arrays-f0b52596.js";import{S as Ue}from"./statusWrapper.component-9facb966.js";import{I as X}from"./input.component-3dcba3ad.js";import{c as _}from"./classNames-9011e307.js";import{u as Ge}from"./config.context-54240269.js";import{a as Je,u as L,L as Qe}from"./label.component-4408833d.js";import{V as Xe}from"./validationErrors.component-04b289b4.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./spinner.component-5b0c70a5.js";import"./inputWrapper.component-ef23b14e.js";import"./useContentMemo-b4c57d54.js";import"./index-742b7287.js";import"./index-07d1f67e.js";function x(r){return typeof r=="number"?r:typeof r=="string"?0:r.length}const D=d.forwardRef(({bind:r,part:e,...l},u)=>{const t=d.useMemo(()=>x(e),[e]);if(typeof e=="string")return s("p",{className:"arm-code-input-part-text",children:e});if(typeof e=="number")return s(X,{ref:u,bind:r,...l,className:"arm-code-input-part-input",style:{"--arm-code-input-length":t},"data-length":t,onClick:g=>g.currentTarget.select(),maxLength:e});const{className:V,...y}=e;return s(X,{ref:u,bind:r,className:_("arm-code-input-part-input",V),style:{...y.style||{},"--arm-code-input-length":t},"data-length":t,onClick:g=>g.currentTarget.select(),...l,...y,maxLength:e.length,displaySize:e.displaySize})});D.displayName="CodeInputPart";const C=d.forwardRef(({className:r,parts:e,bind:l,onChange:u,validationMode:t,validationErrorMessages:V,errorIcon:y,error:g,value:H,pending:I,statusPosition:fe,leftOverlay:W,rightOverlay:K,scrollValidationErrorsIntoView:ye,displaySize:be,label:U,required:Ve,requiredIndicator:xe,hideIconOnStatus:we,statusClassName:Ce,validationErrorsClassName:Ee,labelClassName:Se,labelId:Te,disableOnPending:He,disabled:Ie,...Be},qe)=>{var J;const c=Ge({validationMode:t,inputStatusPosition:fe,inputDisplaySize:be,requiredIndicator:xe,hideInputErrorIconOnStatus:we,disableControlOnPending:He,scrollValidationErrorsIntoView:ye,validationErrorIcon:y}),B=d.useRef([]),[m,E,f]=Je(l,{onChange:u,validationErrorMessages:V,validationMode:c.validationMode,validationErrorIcon:c.validationErrorIcon,value:H}),q=d.useCallback(o=>{var i;const a=e.slice(o+1).findIndex(p=>typeof p!="string")+o+1;a!==-1&&((i=B.current[a])==null||i.focus())},[e]),F=d.useCallback(o=>{var i;const a=Ke(e.slice(0,o),p=>typeof p!="string");a!==-1&&((i=B.current[a])==null||i.focus())},[e]),G=d.useCallback((o,a)=>{const i=e.slice(0,o).reduce((O,A)=>O+x(A),0),p=i+x(e[o]);return(a==null?void 0:a.slice(i,p))||""},[e]),Pe=d.useCallback((o,a)=>{const i=x(e[a]);(o.currentTarget.value||"").length>=i&&q(a)},[e,q]),Oe=d.useCallback(o=>{o.preventDefault();const a=o.clipboardData.getData("text/plain"),i=o.target,p=B.current.indexOf(i),O=Math.min(i.selectionStart??0,i.selectionEnd??0),A=Math.max(i.selectionStart??0,i.selectionEnd??0),Q=new Array(p).fill(null).reduce((_e,Ye,Le)=>{const We=e[Le];return _e+x(We)},0)+O,je=Q+(A-O),De=(m==null?void 0:m.slice(0,Q))??"",Fe=(m==null?void 0:m.slice(je))??"",Ae=De+a+Fe;E(Ae)},[E,m,e]),Ne=d.useMemo(()=>e.map((o,a)=>G(a,m)),[G,e,m]),ke=d.useCallback((o,a,i)=>{var p;switch(o.key){case"Backspace":{((p=o.currentTarget.value)==null?void 0:p.length)<=0&&a>0&&F(a);break}case"ArrowLeft":{o.currentTarget.selectionStart===0&&a>0&&F(a);break}case"ArrowRight":{o.currentTarget.selectionEnd===x(i)&&a<e.length&&q(a);break}}},[F,q,e]),{formProp:Me,formState:P}=L({parts:Ne});d.useEffect(()=>{var o;E==null||E((o=P==null?void 0:P.parts)==null?void 0:o.join(""))},[P]);const ze=W&&(c.inputStatusPosition!=="left"||!c.hideInputErrorIconOnStatus||!I&&!f.shouldShowValidationErrorIcon),Re=K&&(c.inputStatusPosition!=="right"||!c.hideInputErrorIconOnStatus||!I&&!f.shouldShowValidationErrorIcon);return b(j,{children:[b("div",{ref:qe,title:"Code input",...Be,children:[U&&s(Qe,{className:_("arm-code-input-label",Se),id:Te,required:Ve,requiredIndicator:c.requiredIndicator,displaySize:c.inputDisplaySize,children:U}),s("div",{className:_("arm-code-input",r),children:s(Ue,{error:g||!!f.validationErrorMessages.length,errorIcon:f.validationErrorIcon,statusPosition:c.inputStatusPosition,pending:I,validationMode:f.validationMode,className:Ce,children:b(j,{children:[ze&&W,e==null?void 0:e.map((o,a)=>s(D,{type:"text",bind:Me("parts",a).bind(),part:o,onChange:i=>Pe(i,a),onKeyDown:i=>ke(i,a,+o),onPaste:Oe,disabled:Ie||I&&c.disableControlOnPending,ref:i=>{B.current[a]=i},displaySize:c.inputDisplaySize},a)),Re&&K]})})})]}),!!((J=f.validationErrorMessages)!=null&&J.length)&&f.shouldShowValidationErrorMessage&&s(Xe,{className:Ee,validationErrors:f.validationErrorMessages,scrollIntoView:c.scrollValidationErrorsIntoView})]})});C.displayName="Code Input";try{D.displayName="CodeInputPart",D.__docgenInfo={description:"",displayName:"CodeInputPart",props:{bind:{defaultValue:null,description:"Prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<TBind>"}},value:{defaultValue:null,description:"The current value of the input",name:"value",required:!1,type:{name:"NullOrUndefined<string>"}},onChange:{defaultValue:null,description:"Fired when the code input changes",name:"onChange",required:!1,type:{name:"((newValue: TBind) => void)"}},parts:{defaultValue:null,description:`The parts of the code input
Can be a number representing the length of an input, e.g. [1,1,1]
Can be a string representing a piece of text in-between inputs, e.g. [1,1,'-',1,1]
Can be an object representing an input with some properties`,name:"parts",required:!0,type:{name:"CodeInputPartDefinition<TBind>[]"}},className:{defaultValue:null,description:"Optional className for the code input",name:"className",required:!1,type:{name:"string"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Some optional label content",name:"label",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Should the label show a required indicator?",name:"required",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"disable use",name:"disabled",required:!1,type:{name:"boolean"}},pending:{defaultValue:null,description:"show a spinner and disable",name:"pending",required:!1,type:{name:"boolean"}},disableOnPending:{defaultValue:null,description:"when pending is true should also disable the input",name:"disableOnPending",required:!1,type:{name:"boolean"}},leftOverlay:{defaultValue:null,description:"Content to show on the left of the input",name:"leftOverlay",required:!1,type:{name:"ReactNode"}},rightOverlay:{defaultValue:null,description:"Content to show on the right of the input",name:"rightOverlay",required:!1,type:{name:"ReactNode"}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}},labelClassName:{defaultValue:null,description:"Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"Optional ID for the label element",name:"labelId",required:!1,type:{name:"string"}},statusPosition:{defaultValue:null,description:"which side of the button to show the spinner on - defaults to 'right'",name:"statusPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},statusClassName:{defaultValue:null,description:"Class name for the status component",name:"statusClassName",required:!1,type:{name:"string"}},hideIconOnStatus:{defaultValue:null,description:"hide the icon on the given side if there is an active status - defaults to true",name:"hideIconOnStatus",required:!1,type:{name:"boolean"}}}}}catch{}const Vt={title:"Components/Code Input",component:C,parameters:{docs:{description:{component:"metadata"}}}},T={render:r=>{const{formProp:e,formState:l}=L({code:""});return b(j,{children:[s(C,{...r,bind:e("code").bind()}),s("br",{}),b("p",{children:["Value: ",l==null?void 0:l.code]})]})}},S={...T,args:{parts:[1,1,1]},play:async({canvasElement:r})=>{const e=h(r),l=e.getByTitle("Code input"),u=e.getByText("Value:"),t=h(l).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),v.type(t[0],"123"),n(t[0]).toHaveValue("1"),n(t[1]).toHaveValue("2"),n(t[2]).toHaveValue("3"),await w(()=>n(u).toHaveTextContent("Value: 123")),v.clear(t[0]),n(t[1]).toHaveValue("2"),n(t[2]).toHaveValue("3"),await w(()=>n(u).toHaveTextContent("Value: 23")),v.clear(t[0]),v.clear(t[1]),v.clear(t[2]),v.type(t[0],"4567"),n(t[0]).toHaveValue("4"),n(t[1]).toHaveValue("5"),n(t[2]).toHaveValue("6"),await w(()=>n(u).toHaveTextContent("Value: 456"))}},N={render:r=>{const{formProp:e,formState:l}=L({code:""});return b(j,{children:[s("h2",{children:"Small"}),s(C,{...r,bind:e("code").bind(),displaySize:"small"}),s("h2",{children:"Medium"}),s(C,{...r,bind:e("code").bind(),displaySize:"medium"}),s("h2",{children:"Large"}),s(C,{...r,bind:e("code").bind(),displaySize:"large"}),s("br",{}),b("p",{children:["Value: ",l==null?void 0:l.code]})]})},args:{parts:[1,1,1,1]}},k={...T,args:{parts:[2,"-",2,"-",2],validationErrorMessages:["Input is invalid"],label:"Code input",required:!0},play:async({canvasElement:r})=>{const l=h(r).getByText("Input is invalid");n(l).toBeVisible()}},M={...T,args:{parts:[4,3,8]},play:async({canvasElement:r})=>{const e=h(r),l=e.getByTitle("Code input"),u=e.getByText("Value:"),t=h(l).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),v.type(t[0],"abcdefghijklmnop"),n(t[0]).toHaveValue("abcd"),n(t[1]).toHaveValue("efg"),n(t[2]).toHaveValue("hijklmno"),await w(()=>n(u).toHaveTextContent("Value: abcdefghijklmno"))}},z={...T,args:{parts:[4,"-",4,"-",4]},play:async({canvasElement:r})=>{var V,y,g,H;const e=h(r),l=e.getByTitle("Code input"),u=e.getByText("Value:"),t=h(l).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),v.type(t[0],"abcdefghijklmnop"),n(t[0]).toHaveValue("abcd"),n(t[1]).toHaveValue("efgh"),n(t[2]).toHaveValue("ijkl"),await w(()=>n(u).toHaveTextContent("Value: abcdefghijkl")),n((y=(V=t[0].parentElement)==null?void 0:V.parentElement)==null?void 0:y.nextSibling).toHaveTextContent("-"),n((H=(g=t[1].parentElement)==null?void 0:g.parentElement)==null?void 0:H.nextSibling).toHaveTextContent("-")}},R={...T,args:{parts:[1,{length:1,rightOverlay:"+",leftOverlay:"+"},1],rightOverlay:"+",leftOverlay:"+"},play:async({canvasElement:r})=>{const e=h(r),l=e.getByTitle("Code input"),u=e.getByText("Value:"),t=h(l).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),v.type(t[0],"abc"),n(t[0]).toHaveValue("a"),n(t[1]).toHaveValue("b"),n(t[2]).toHaveValue("c"),await w(()=>n(u).toHaveTextContent("Value: abc")),n(t[1].nextSibling).toHaveTextContent("+")}};var Y,Z,$,ee,te;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [1, 1, 1]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', {
      hidden: true
    });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], '123');
    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveValue('2');
    expect(inputs[2]).toHaveValue('3');
    await waitFor(() => expect(value).toHaveTextContent('Value: 123'));
    userEvent.clear(inputs[0]);
    expect(inputs[1]).toHaveValue('2');
    expect(inputs[2]).toHaveValue('3');
    await waitFor(() => expect(value).toHaveTextContent('Value: 23'));
    userEvent.clear(inputs[0]);
    userEvent.clear(inputs[1]);
    userEvent.clear(inputs[2]);
    userEvent.type(inputs[0], '4567');
    expect(inputs[0]).toHaveValue('4');
    expect(inputs[1]).toHaveValue('5');
    expect(inputs[2]).toHaveValue('6');
    await waitFor(() => expect(value).toHaveTextContent('Value: 456'));
  }
}`,...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"stories",...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ne,ae,re;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    interface IFormData {
      code: string | null | undefined;
    }
    const {
      formProp,
      formState
    } = useForm<IFormData>({
      code: ''
    });
    return <>
        <h2>Small</h2>
        <CodeInput {...args} bind={formProp('code').bind()} displaySize="small" />
        <h2>Medium</h2>
        <CodeInput {...args} bind={formProp('code').bind()} displaySize="medium" />
        <h2>Large</h2>
        <CodeInput {...args} bind={formProp('code').bind()} displaySize="large" />
        <br />
        <p>Value: {formState?.code}</p>
      </>;
  },
  args: {
    parts: [1, 1, 1, 1]
  }
}`,...(re=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ie,le;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [2, '-', 2, '-', 2],
    validationErrorMessages: ['Input is invalid'],
    label: 'Code input',
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Input is invalid');
    expect(label).toBeVisible();
  }
}`,...(le=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,ue,ce;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [4, 3, 8]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', {
      hidden: true
    });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efg');
    expect(inputs[2]).toHaveValue('hijklmno');
    await waitFor(() => expect(value).toHaveTextContent('Value: abcdefghijklmno'));
  }
}`,...(ce=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,pe,me;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [4, '-', 4, '-', 4]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', {
      hidden: true
    });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efgh');
    expect(inputs[2]).toHaveValue('ijkl');
    await waitFor(() => expect(value).toHaveTextContent('Value: abcdefghijkl'));
    expect(inputs[0].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
    expect(inputs[1].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
  }
}`,...(me=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ve,he,ge;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [1, {
      length: 1,
      rightOverlay: '+',
      leftOverlay: '+'
    }, 1],
    rightOverlay: '+',
    leftOverlay: '+'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', {
      hidden: true
    });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], 'abc');
    expect(inputs[0]).toHaveValue('a');
    expect(inputs[1]).toHaveValue('b');
    expect(inputs[2]).toHaveValue('c');
    await waitFor(() => expect(value).toHaveTextContent('Value: abc'));
    expect(inputs[1].nextSibling).toHaveTextContent('+');
  }
}`,...(ge=(he=R.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const xt=["Default","Sizes","ValidationError","DifferentLengths","WithTextBetween","WithOverlays"];export{S as Default,M as DifferentLengths,N as Sizes,k as ValidationError,R as WithOverlays,z as WithTextBetween,xt as __namedExportsOrder,Vt as default};
//# sourceMappingURL=codeInput.stories-6b09f8b9.js.map
