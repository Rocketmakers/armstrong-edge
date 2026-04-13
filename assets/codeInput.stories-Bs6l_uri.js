import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as $,w as h,e as n,u as v,a as H,f as O}from"./index-BmZcwVSF.js";import{R as g}from"./index-DwQS_Y10.js";import{a as Ke}from"./useDidUpdateEffect-C33itT9v.js";import{u as $e}from"./config.context-D0elZNgh.js";import{a as Ue,f as Ge,u as U,L as Je}from"./label.component-tMLxsqsi.js";import{S as Qe}from"./statusWrapper.component-BGDKNbzi.js";import{V as Xe}from"./validationErrors.component-DUOh2-sl.js";import{I as Z}from"./input.component-C3468qP-.js";function C(o){return typeof o=="number"?o:typeof o=="string"?0:o.length}const be=({ref:o,bind:l,part:e,...d})=>{const t=C(e);if(typeof e=="string")return s.jsx("p",{className:"arm-code-input-part-text",children:e});if(typeof e=="number")return s.jsx(Z,{ref:o,bind:l,...d,className:"arm-code-input-part-input",style:{"--arm-code-input-length":t},"data-length":t,onClick:y=>y.currentTarget.select(),maxLength:e});const{className:b,...x}=e;return s.jsx(Z,{ref:o,bind:l,className:$("arm-code-input-part-input",b),style:{...x.style||{},"--arm-code-input-length":t},"data-length":t,onClick:y=>y.currentTarget.select(),...d,...x,maxLength:e.length,displaySize:e.displaySize})};be.displayName="CodeInputPart";const f=({ref:o,className:l,parts:e,bind:d,onChange:t,validationMode:b,validationErrorMessages:x,errorIcon:y,error:M,value:we,pending:q,statusPosition:Ve,leftOverlay:G,rightOverlay:J,scrollValidationErrorsIntoView:Te,displaySize:Ce,label:Q,required:Ee,requiredIndicator:He,hideIconOnStatus:Be,statusClassName:Ie,validationErrorsClassName:je,labelClassName:Se,labelId:Pe,disableOnPending:Re,disabled:ke,autoValidate:Oe,...De})=>{var Y;const z=g.useRef([]),[F,w,u]=Ue(d,{onChange:t,validationErrorMessages:x,validationMode:b,value:we,autoValidate:Oe}),m=$e({validationMode:u.validationMode,inputStatusPosition:Ve,inputDisplaySize:Ce,requiredIndicator:He,hideInputErrorIconOnStatus:Be,disableControlOnPending:Re,scrollValidationErrorsIntoView:Te,validationErrorIcon:y,autoValidate:u.autoValidate}),N=g.useCallback(r=>{var i;const a=e.slice(r+1).findIndex(p=>typeof p!="string");a!==-1&&((i=z.current[a+r+1])==null||i.focus())},[e]),W=g.useCallback(r=>{var i;const a=Ge(e.slice(0,r),p=>typeof p!="string");a!==-1&&((i=z.current[a])==null||i.focus())},[e]),X=g.useCallback((r,a)=>{const i=e.slice(0,r).reduce((V,L)=>V+C(L),0),p=i+C(e[r]);return(a==null?void 0:a.slice(i,p))||""},[e]),B=g.useRef(null),Me=g.useMemo(()=>B.current&&B.current.join("")===(F??"")?B.current:e.map((r,a)=>X(a,F)),[X,e,F]),{formProp:qe,formState:c}=U({parts:Me}),ze=g.useCallback((r,a)=>{const i=C(e[a]),p=r.currentTarget.value||"";p.length>=i&&N(a);const V=e.map((L,I)=>I===a?p:(c==null?void 0:c.parts[I])??"");B.current=V,w==null||w(V.join(""))},[e,N,c==null?void 0:c.parts,w]),Fe=g.useCallback(r=>{r.preventDefault();const a=r.clipboardData.getData("text/plain"),i=r.target,p=z.current.indexOf(i);if(p===-1)return;const V=Math.min(i.selectionStart??0,i.selectionEnd??0),L=Math.max(i.selectionStart??0,i.selectionEnd??0),I=(c==null?void 0:c.parts[p])??"",We=I.slice(0,V)+a+I.slice(L),K=e.map((T,_)=>(c==null?void 0:c.parts[_])??"");let A=We;for(let T=p;T<e.length;T+=1)if(typeof e[T]!="string"){const _=C(e[T]);if(K[T]=A.slice(0,_),A=A.slice(_),!A)break}B.current=K,w(K.join(""))},[w,c==null?void 0:c.parts,e]),Ne=g.useCallback((r,a,i)=>{var p;switch(r.key){case"Backspace":{((p=r.currentTarget.value)==null?void 0:p.length)<=0&&a>0&&W(a);break}case"ArrowLeft":{r.currentTarget.selectionStart===0&&a>0&&W(a);break}case"ArrowRight":{r.currentTarget.selectionEnd===C(i)&&a<e.length&&N(a);break}}},[W,N,e]);Ke(()=>{m.autoValidate&&u.isTouched&&u.validate()},[F]);const Le=g.useCallback(()=>{c!=null&&c.parts.every(r=>r)&&m.autoValidate&&!u.isTouched&&(u.validate(),u.setTouched(!0))},[u,c==null?void 0:c.parts,m.autoValidate]),Ae=G&&(m.inputStatusPosition!=="left"||!m.hideInputErrorIconOnStatus||!q&&(!u.shouldShowValidationErrorIcon||!u.validationErrorMessages.length)),_e=J&&(m.inputStatusPosition!=="right"||!m.hideInputErrorIconOnStatus||!q&&(!u.shouldShowValidationErrorIcon||!u.validationErrorMessages.length));return s.jsxs(s.Fragment,{children:[s.jsxs("div",{ref:o,title:"Code input",...De,children:[Q&&s.jsx(Je,{className:$("arm-code-input-label",Se),id:Pe,required:Ee,requiredIndicator:m.requiredIndicator,displaySize:m.inputDisplaySize,children:Q}),s.jsx("div",{className:$("arm-code-input",l),children:s.jsx(Qe,{error:M||!!u.validationErrorMessages.length,errorIcon:u.validationErrorIcon,statusPosition:m.inputStatusPosition,pending:q,validationMode:u.validationMode,className:Ie,children:s.jsxs(s.Fragment,{children:[Ae&&G,e==null?void 0:e.map((r,a)=>s.jsx(be,{type:"text",bind:qe("parts",a).bind(),part:r,onChange:i=>ze(i,a),onKeyDown:i=>Ne(i,a,r),onPaste:Fe,onBlur:Le,disabled:ke||q&&m.disableControlOnPending,ref:i=>{z.current[a]=i},displaySize:m.inputDisplaySize},a)),_e&&J]})})})]}),!!((Y=u.validationErrorMessages)!=null&&Y.length)&&u.shouldShowValidationErrorMessage&&s.jsx(Xe,{className:je,validationErrors:u.validationErrorMessages,scrollIntoView:m.scrollValidationErrorsIntoView})]})};f.displayName="Code Input";f.__docgenInfo={description:"",methods:[],displayName:"Code Input",props:{bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"TBind"}],raw:"IBindingProps<TBind>"},description:"Prop for binding to an Armstrong form binder (see forms documentation)"},value:{required:!1,tsType:{name:"TBind"},description:"The current value of the input"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: TBind) => void",signature:{arguments:[{type:{name:"TBind"},name:"newValue"}],return:{name:"void"}}},description:"Fired when the code input changes"},parts:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ICodeInputInput<TBind> | string | number",elements:[{name:"ICodeInputInput",elements:[{name:"TBind"}],raw:"ICodeInputInput<TBind>"},{name:"string"},{name:"number"}]}],raw:"CodeInputPartDefinition<TBind>[]"},description:`The parts of the code input
Can be a number representing the length of an input, e.g. [1,1,1]
Can be a string representing a piece of text in-between inputs, e.g. [1,1,'-',1,1]
Can be an object representing an input with some properties`},className:{required:!1,tsType:{name:"string"},description:"Optional className for the code input"},displaySize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | CustomString",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"`custom-${string}`"}]},description:"which size variant to use"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Some optional label content"},required:{required:!1,tsType:{name:"boolean"},description:"Should the label show a required indicator?"},requiredIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Symbol to use as the required indicator on the label, defaults to "*"'},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}},composes:["Pick","Omit"]};const Ye={title:"Components/Code Input",component:f,parameters:{docs:{description:{component:"metadata"}}}},D={render:o=>{const{formProp:l,formState:e}=U({code:""});return s.jsxs(s.Fragment,{children:[s.jsx(f,{...o,bind:l("code").bind()}),s.jsx("br",{}),s.jsxs("p",{children:["Value: ",e==null?void 0:e.code]})]})}},E={...D,args:{parts:[1,1,1],onChange:O()},play:async({canvasElement:o})=>{const l=h(o),e=l.getByTitle("Code input"),d=l.getByText("Value:"),t=h(e).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),await v.type(t[0],"123"),n(t[0]).toHaveValue("1"),n(t[1]).toHaveValue("2"),n(t[2]).toHaveValue("3"),await H(()=>n(d).toHaveTextContent("Value: 123")),v.clear(t[0]),n(t[1]).toHaveValue("2"),n(t[2]).toHaveValue("3"),await H(()=>n(d).toHaveTextContent("Value: 23")),v.clear(t[0]),v.clear(t[1]),v.clear(t[2]),await v.type(t[0],"4567"),n(t[0]).toHaveValue("4"),n(t[1]).toHaveValue("5"),n(t[2]).toHaveValue("6"),await H(()=>n(d).toHaveTextContent("Value: 456"))}},j={render:o=>{const{formProp:l,formState:e}=U({code:""});return s.jsxs(s.Fragment,{children:[s.jsx("h2",{children:"Small"}),s.jsx(f,{...o,bind:l("code").bind(),displaySize:"small"}),s.jsx("h2",{children:"Medium"}),s.jsx(f,{...o,bind:l("code").bind(),displaySize:"medium"}),s.jsx("h2",{children:"Large"}),s.jsx(f,{...o,bind:l("code").bind(),displaySize:"large"}),s.jsx("br",{}),s.jsxs("p",{children:["Value: ",e==null?void 0:e.code]})]})},args:{parts:[1,1,1,1]}},S={...D,args:{parts:[2,"-",2,"-",2],validationErrorMessages:["Input is invalid"],label:"Code input",required:!0,onChange:O()},play:async({canvasElement:o})=>{const e=h(o).getByText("Input is invalid");n(e).toBeVisible()}},P={...D,args:{parts:[4,3,8],onChange:O()},play:async({canvasElement:o})=>{const l=h(o),e=l.getByTitle("Code input"),d=l.getByText("Value:"),t=h(e).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),await v.type(t[0],"abcdefghijklmnop"),n(t[0]).toHaveValue("abcd"),n(t[1]).toHaveValue("efg"),n(t[2]).toHaveValue("hijklmno"),await H(()=>n(d).toHaveTextContent("Value: abcdefghijklmno"))}},R={...D,args:{parts:[4,"-",4,"-",4],onChange:O()},play:async({canvasElement:o})=>{var b,x,y,M;const l=h(o),e=l.getByTitle("Code input"),d=l.getByText("Value:"),t=h(e).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),await v.type(t[0],"abcdefghijklmnop"),n(t[0]).toHaveValue("abcd"),n(t[1]).toHaveValue("efgh"),n(t[2]).toHaveValue("ijkl"),await H(()=>n(d).toHaveTextContent("Value: abcdefghijkl")),n((x=(b=t[0].parentElement)==null?void 0:b.parentElement)==null?void 0:x.nextSibling).toHaveTextContent("-"),n((M=(y=t[1].parentElement)==null?void 0:y.parentElement)==null?void 0:M.nextSibling).toHaveTextContent("-")}},k={...D,args:{onChange:O(),parts:[1,{length:1,rightOverlay:"+",leftOverlay:"+"},1],rightOverlay:"+",leftOverlay:"+"},play:async({canvasElement:o})=>{const l=h(o),e=l.getByTitle("Code input"),d=l.getByText("Value:"),t=h(e).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),await v.type(t[0],"abc"),n(t[0]).toHaveValue("a"),n(t[1]).toHaveValue("b"),n(t[2]).toHaveValue("c"),await H(()=>n(d).toHaveTextContent("Value: abc")),n(t[1].nextSibling).toHaveTextContent("+")}};var ee,te,ne,ae,se;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [1, 1, 1],
    onChange: fn()
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
    await userEvent.type(inputs[0], '123');
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
    await userEvent.type(inputs[0], '4567');
    expect(inputs[0]).toHaveValue('4');
    expect(inputs[1]).toHaveValue('5');
    expect(inputs[2]).toHaveValue('6');
    await waitFor(() => expect(value).toHaveTextContent('Value: 456'));
  }
}`,...(ne=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"stories",...(se=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};var oe,re,ie;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,ce,ue;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [2, '-', 2, '-', 2],
    validationErrorMessages: ['Input is invalid'],
    label: 'Code input',
    required: true,
    onChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Input is invalid');
    expect(label).toBeVisible();
  }
}`,...(ue=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,de,me;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [4, 3, 8],
    onChange: fn()
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
    await userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efg');
    expect(inputs[2]).toHaveValue('hijklmno');
    await waitFor(() => expect(value).toHaveTextContent('Value: abcdefghijklmno'));
  }
}`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ge,ve,he;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [4, '-', 4, '-', 4],
    onChange: fn()
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
    await userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efgh');
    expect(inputs[2]).toHaveValue('ijkl');
    await waitFor(() => expect(value).toHaveTextContent('Value: abcdefghijkl'));
    expect(inputs[0].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
    expect(inputs[1].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
  }
}`,...(he=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var ye,xe,fe;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...Template,
  args: {
    onChange: fn(),
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
    await userEvent.type(inputs[0], 'abc');
    expect(inputs[0]).toHaveValue('a');
    expect(inputs[1]).toHaveValue('b');
    expect(inputs[2]).toHaveValue('c');
    await waitFor(() => expect(value).toHaveTextContent('Value: abc'));
    expect(inputs[1].nextSibling).toHaveTextContent('+');
  }
}`,...(fe=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};const Ze=["Default","Sizes","ValidationError","DifferentLengths","WithTextBetween","WithOverlays"],ct=Object.freeze(Object.defineProperty({__proto__:null,Default:E,DifferentLengths:P,Sizes:j,ValidationError:S,WithOverlays:k,WithTextBetween:R,__namedExportsOrder:Ze,default:Ye},Symbol.toStringTag,{value:"Module"}));export{f as C,E as D,j as S,S as V,R as W,k as a,ct as c};
