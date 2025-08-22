import{j as t}from"./jsx-runtime-Cl2eCCBe.js";import{c as $,f as V,w as s,u as H,a as F,e as r}from"./index-Dv9et24K.js";import{a as Ge}from"./index.esm-57MWzJkG.js";import{u as Ke,e as Qe,f as Ye,G as Le}from"./config.context-B61qZkrf.js";import{r as k}from"./index-Cqyox1Tj.js";import{a as Ze}from"./useDidUpdateEffect-igSykUWQ.js";import{r as X,a as ea,L as aa,u as _}from"./label.component-CknXuhjY.js";import{c as ta}from"./maths-co6UzHBn.js";import{S as na}from"./statusWrapper.component-DucYgjxK.js";import{V as ra}from"./validationErrors.component-CHN68oNP.js";import{B as sa}from"./button.component-BSUqeTdM.js";const G=(e,a)=>typeof e=="function"?e(a):e,Pe=k.forwardRef(({index:e,value:a,onSelectPart:n,filledIcon:d,emptyIcon:D,step:g,mode:N,readOnly:u,disabled:A},M)=>{const y=Math.floor(1/(g||1)),L=a&&a>=e+1,O=a&&a<e+1&&a>e;return t.jsxs("div",{ref:M,className:"arm-rating-part",style:a?{"--rating-amount":`${ta((a-e)*100,0,100)}%`}:void 0,"data-filled":L,"data-part":O,children:[t.jsxs("div",{className:"arm-rating-part-icon-wrapper",children:[d&&t.jsx("div",{className:"arm-rating-part-icon arm-rating-part-filled",children:t.jsx("div",{className:"arm-rating-part-icon-inner",children:G(d,e)})}),D&&t.jsx("div",{className:"arm-rating-part-icon arm-rating-part-empty",children:t.jsx("div",{className:"arm-rating-part-icon-inner",children:G(D,e)})})]}),!u&&N==="buttons"&&t.jsx("div",{className:"arm-rating-part-buttons",children:X(y,l=>{const m=e+(y===2?.5:1)+(l?.5:0);return t.jsx(sa,{role:"radio","aria-checked":m===a,type:"button",className:"arm-rating-button",onClick:()=>n((g||1)*(l+1)),"aria-label":m.toString(),disabled:A},l)})}),!u&&N==="radio"&&t.jsx("div",{className:"arm-rating-part-radios",children:X(y,l=>{const m=e+(y===2?.5:1)+(l?.5:0);return t.jsx("div",{className:"arm-rating-part-radio-wrapper",children:t.jsx("input",{className:"arm-rating-part-radio",type:"radio",onChange:()=>n((g||1)*(l+1)),"aria-label":m.toString(),value:m,checked:m===a,disabled:A})},l)})})]})});Pe.displayName="RatingPart";const i=k.forwardRef(({bind:e,value:a,onValueChange:n,filledIcon:d,emptyIcon:D,maximum:g,className:N,validationErrorMessages:u,validationMode:A,errorIcon:M,scrollValidationErrorsIntoView:y,step:L,error:O,statusPosition:l,pending:m,leftOverlay:He,rightOverlay:Fe,mode:J,disabled:z,statusClassName:da,validationErrorsClassName:ua,labelClassName:Me,labelId:Oe,label:W,required:ze,requiredIndicator:ke,displaySize:Xe,autoValidate:_e,...Je},We)=>{const[f,p,c]=ea(e,{value:a,onChange:n,validationErrorMessages:u,validationMode:A,autoValidate:_e,validationErrorIcon:M}),P=Ke({validationMode:c.validationMode,inputDisplaySize:Xe,scrollValidationErrorsIntoView:y,requiredIndicator:ke,validationErrorIcon:c.validationErrorIcon,autoValidate:c.autoValidate}),Ue=k.useId(),U=Oe??Ue;return Ze(()=>{P.autoValidate&&c.validate(),c.setTouched(!0)},[f]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{ref:We,role:"radiogroup","aria-label":f!==void 0?`Rating: ${f}/${g}`:void 0,...Je,className:$("arm-rating",N),"data-read-only":!p,"data-size":P.inputDisplaySize,children:[W&&t.jsx(aa,{id:U,className:$("arm-rating-input-label",Me),"data-disabled":z,required:ze,displaySize:P.inputDisplaySize,requiredIndicator:P.requiredIndicator,children:W}),t.jsx("div",{className:"arm-rating-input-inner","aria-labelledby":U,children:t.jsx(na,{error:O,statusPosition:l,errorIcon:c.validationErrorIcon,validationMode:c.validationMode,pending:m,children:t.jsxs(t.Fragment,{children:[He,t.jsxs("div",{className:"arm-rating-parts",children:[X(g,v=>t.jsx(Pe,{index:v,filledIcon:d,emptyIcon:D,value:f||void 0,onSelectPart:$e=>p==null?void 0:p(v+$e),step:L,mode:J,disabled:z,readOnly:!p},v)),J==="range"&&t.jsx("input",{className:"arm-rating-range",type:"range",step:L,min:0,max:g,disabled:z,value:f||void 0,onChange:v=>p==null?void 0:p(v.currentTarget.valueAsNumber)})]}),Fe]})})})]}),!!(u!=null&&u.length)&&c.shouldShowValidationErrorMessage&&t.jsx(ra,{validationErrors:u,validationMode:c.validationMode,scrollIntoView:y})]})});i.defaultProps={maximum:5,filledIcon:t.jsx(Qe,{}),emptyIcon:t.jsx(Ye,{}),step:1,mode:"buttons"};i.displayName="Rating";i.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{statusPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"which side of the button to show the spinner on - defaults to 'right'"},error:{required:!1,tsType:{name:"boolean"},description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)"},pending:{required:!1,tsType:{name:"boolean"},description:"show a spinner and disable"},validationMode:{required:!1,tsType:{name:"union",raw:"'icon' | 'message' | 'both'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'message'"},{name:"literal",value:"'both'"}]},description:"how to render the validation errors"},errorIcon:{required:!1,tsType:{name:"JSX.Element"},description:"the icon to use for validation errors"},className:{required:!1,tsType:{name:"string"},description:"an optional CSS className for the rendered status"},bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"TBind"}],raw:"IBindingProps<TBind>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},value:{required:!1,tsType:{name:"TBind"},description:"current value, as a number, of the rating"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: TBind) => void",signature:{arguments:[{type:{name:"TBind"},name:"newValue"}],return:{name:"void"}}},description:"called when the value of the input changes"},filledIcon:{required:!1,tsType:{name:"union",raw:"JSX.Element | ((index: number) => JSX.Element)",elements:[{name:"JSX.Element"},{name:"unknown"}]},description:"the icon to use for a filled star",defaultValue:{value:"<ImStarFull />",computed:!1}},emptyIcon:{required:!1,tsType:{name:"union",raw:"JSX.Element | ((index: number) => JSX.Element)",elements:[{name:"JSX.Element"},{name:"unknown"}]},description:"the icon to use for an empty star",defaultValue:{value:"<ImStarEmpty />",computed:!1}},maximum:{required:!1,tsType:{name:"number"},description:"the maximum possible value of the rating",defaultValue:{value:"5",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"1 | 0.5",elements:[{name:"literal",value:"1"},{name:"literal",value:"0.5"}]},description:"the size of each possible step - defaults to 1, set to 0.5 to allow half stars",defaultValue:{value:"1",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'range' | 'buttons' | 'radio'",elements:[{name:"literal",value:"'range'"},{name:"literal",value:"'buttons'"},{name:"literal",value:"'radio'"}]},description:`the kind of elements used to handle the interaction

range will use an input with type='range' to handle the interaction, buttons will render a series of buttons, radio will render radio inputs
@default 'buttons'`,defaultValue:{value:"'buttons'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether to disable the input"},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"}},composes:["Omit","Pick"]};function oa(e){return Le({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.556 11.169l-1.849-1.232.984-1.993c.148-.3.137-.654-.03-.943-.168-.29-.468-.477-.802-.498l-2.218-.143-.144-2.218c-.02-.334-.208-.635-.497-.802-.29-.167-.645-.18-.943-.03l-1.991.985-1.233-1.849c-.371-.557-1.293-.557-1.664 0l-1.234 1.848-1.992-.984c-.299-.15-.654-.137-.943.03-.29.167-.477.468-.498.802l-.143 2.217-2.218.143c-.334.022-.635.209-.802.498s-.179.644-.03.943l.984 1.993-1.849 1.233c-.278.186-.445.498-.445.832s.167.646.445.832l1.85 1.233-.985 1.992c-.148.3-.137.654.03.943s.468.477.802.498l2.218.143.143 2.218c.021.333.208.634.498.801s.642.179.943.031l1.992-.985 1.233 1.849c.186.278.498.445.832.445s.646-.167.832-.445l1.233-1.849 1.991.985c.299.148.653.136.943-.03.29-.167.477-.468.498-.802l.143-2.217 2.219-.144c.334-.021.635-.208.802-.498s.179-.644.03-.943l-.984-1.992 1.849-1.233c.278-.186.445-.498.445-.832 0-.334-.167-.647-.445-.832zm-4.032 2.997l.71 1.435-1.6.104c-.502.033-.901.432-.934.934l-.103 1.598-1.435-.709c-.45-.224-.996-.077-1.275.342l-.887 1.33-.889-1.333c-.191-.287-.508-.445-.833-.445-.149 0-.3.033-.442.104l-1.436.709-.103-1.598c-.032-.501-.432-.901-.934-.934l-1.596-.103.71-1.435c.223-.451.076-.997-.342-1.275l-1.333-.889 1.332-.888c.418-.279.564-.825.342-1.275l-.71-1.436 1.6-.103c.502-.033.901-.432.934-.934l.103-1.598 1.435.709c.448.221.996.076 1.275-.342l.887-1.331.889 1.333c.279.418.826.563 1.275.342l1.436-.71.104 1.599c.033.501.433.9.934.933l1.598.103-.709 1.437c-.223.451-.076.996.342 1.275l1.332.888-1.333.889c-.42.277-.566.823-.344 1.274z"}}]})(e)}function ia(e){return Le({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.064 10.109l1.179-2.387c.074-.149.068-.327-.015-.471-.083-.145-.234-.238-.401-.249l-2.656-.172-.172-2.656c-.011-.167-.104-.317-.249-.401-.145-.084-.322-.09-.472-.015l-2.385 1.18-1.477-2.215c-.186-.278-.646-.278-.832 0l-1.477 2.215-2.385-1.18c-.151-.075-.327-.069-.472.015-.145.083-.238.234-.249.401l-.171 2.656-2.657.171c-.167.011-.318.104-.401.249-.084.145-.089.322-.015.472l1.179 2.386-2.214 1.477c-.139.093-.223.249-.223.416s.083.323.223.416l2.215 1.477-1.18 2.386c-.074.15-.068.327.015.472.083.144.234.238.401.248l2.656.171.171 2.657c.011.167.104.317.249.401.144.083.32.088.472.015l2.386-1.179 1.477 2.214c.093.139.249.223.416.223s.323-.083.416-.223l1.477-2.214 2.386 1.179c.15.073.327.068.472-.015s.238-.234.249-.401l.171-2.656 2.656-.172c.167-.011.317-.104.401-.249.083-.145.089-.322.015-.472l-1.179-2.385 2.214-1.478c.139-.093.223-.249.223-.416s-.083-.323-.223-.416l-2.214-1.475z"}}]})(e)}const la={title:"Components/Rating",component:i,parameters:{docs:{description:{component:"meta"}}}},o={render:e=>{const{formProp:a,formState:n}=_({rating:0});return t.jsxs("div",{children:[t.jsx(i,{...e,bind:a("rating").bind()}),t.jsxs("div",{"data-testid":"result",style:{marginTop:"20px"},children:["Bound value: ",n==null?void 0:n.rating]})]})}},h={...o,args:{onValueChange:V()},play:async({canvasElement:e})=>{const a=s(e).getAllByRole("radio");H.click(a[2]);const n=s(e).getByTestId("result");await F(()=>r(n).toHaveTextContent("Bound value: 3"))}},b={...o,args:{step:.5,onValueChange:V()},play:async({canvasElement:e})=>{const a=s(e).getAllByRole("radio");H.click(a[4]);const n=s(e).getByTestId("result");await F(()=>{r(n).toHaveTextContent("Bound value: 2.5")})}},x={...o,args:{disabled:!0,onValueChange:V()},play:async({canvasElement:e})=>{s(e).getAllByRole("radio").forEach(n=>r(n).toBeDisabled())}},T={render:()=>{const{formProp:e}=_({default:0,required:0});return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[t.jsx(i,{label:"Default",bind:e("default").bind()}),t.jsx(i,{label:"Required",bind:e("required").bind(),required:!0})]})},play:async({canvasElement:e})=>{const a=s(e),n=a.getByLabelText("Default"),d=a.getByLabelText("Required *");r(n).toBeInTheDocument(),r(d).toBeInTheDocument()}},B={render:()=>{const{formProp:e}=_({small:0,medium:0,large:0});return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(i,{label:"Small Rating",displaySize:"small",required:!0,bind:e("small").bind()}),t.jsx(i,{label:"Medium Rating",required:!0,bind:e("medium").bind()}),t.jsx(i,{label:"Large Rating",displaySize:"large",required:!0,bind:e("large").bind()})]})}},I={...o,args:{maximum:10,onValueChange:V()},play:async({canvasElement:e})=>{const a=s(e).getAllByRole("radio");H.click(a[8]);const n=s(e).getByTestId("result");await F(()=>r(n).toHaveTextContent("Bound value: 9"))}},w={...o,args:{emptyIcon:t.jsx(oa,{"data-testid":"empty-custom"}),filledIcon:t.jsx(ia,{})},play:async({canvasElement:e})=>{const a=s(e).getAllByTestId("empty-custom");r(a).toHaveLength(5),a.forEach(n=>r(n).toBeVisible())}},E={...o,args:{emptyIcon:t.jsx("div",{"data-testid":"empty-custom",children:"X"}),filledIcon:t.jsx("div",{children:"X"})},play:async({canvasElement:e})=>{const a=s(e).getAllByTestId("empty-custom");r(a).toHaveLength(5),a.forEach(n=>r(n).toBeVisible())}},S={...o,args:{emptyIcon:e=>t.jsx("div",{"data-testid":"empty-custom",children:e+1}),filledIcon:e=>t.jsx("div",{children:e+1})},play:async({canvasElement:e})=>{const a=s(e).getAllByTestId("empty-custom");r(a).toHaveLength(5),a.forEach((n,d)=>{r(n).toBeVisible(),r(n).toHaveTextContent((d+1).toString())})}},j={...o,args:{leftOverlay:t.jsx(Ge,{"data-testid":"left-icon"}),pending:!0},play:async({canvasElement:e})=>{const a=s(e).getByTestId("left-icon");r(a).toBeVisible();const n=s(e).getByRole("status",{name:"Loading..."});r(n).toBeVisible()}},R={...o,args:{validationErrorMessages:["Invalid rating"]},play:async({canvasElement:e})=>{const a=s(e).getByText("Invalid rating");r(a).toBeVisible()}},C={...o,args:{mode:"radio",onValueChange:V()},play:async({canvasElement:e})=>{const a=s(e).getAllByRole("radio");H.click(a[2]);const n=s(e).getByTestId("result");await F(()=>r(n).toHaveTextContent("Bound value: 3"))}},q={...o,args:{mode:"range"},play:async({canvasElement:e})=>{const a=s(e).getByRole("slider");r(a).toBeInTheDocument()}};var K,Q,Y;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Template,
  args: {
    onValueChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[2]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
  }
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ae;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Template,
  args: {
    step: 0.5,
    onValueChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[4]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => {
      expect(result).toHaveTextContent('Bound value: 2.5');
    });
  }
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Template,
  args: {
    disabled: true,
    onValueChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    radios.forEach(r => expect(r).toBeDisabled());
  }
}`,...(re=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,oe,ie;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const {
      formProp
    } = useForm<{
      default: NullOrUndefined<number>;
      required: NullOrUndefined<number>;
    }>({
      default: 0,
      required: 0
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }}>
        <Rating label="Default" bind={formProp('default').bind()} />
        <Rating label="Required" bind={formProp('required').bind()} required={true} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const defaultInput = canvas.getByLabelText('Default');
    const requiredInput = canvas.getByLabelText('Required *');
    expect(defaultInput).toBeInTheDocument();
    expect(requiredInput).toBeInTheDocument();
  }
}`,...(ie=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const {
      formProp
    } = useForm<{
      small: NullOrUndefined<number>;
      medium: NullOrUndefined<number>;
      large: NullOrUndefined<number>;
    }>({
      small: 0,
      medium: 0,
      large: 0
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Rating label={'Small Rating'} displaySize="small" required={true} bind={formProp('small').bind()} />
        <Rating label={'Medium Rating'} required={true} bind={formProp('medium').bind()} />
        <Rating label={'Large Rating'} displaySize="large" required={true} bind={formProp('large').bind()} />
      </div>;
  }
}`,...(de=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  ...Template,
  args: {
    maximum: 10,
    onValueChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[8]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 9'));
  }
}`,...(pe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ye,fe;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...Template,
  args: {
    emptyIcon: <TiStarburstOutline data-testid="empty-custom" />,
    filledIcon: <TiStarburst />
  },
  play: async ({
    canvasElement
  }) => {
    const customs = within(canvasElement).getAllByTestId('empty-custom');
    expect(customs).toHaveLength(5);
    customs.forEach(c => expect(c).toBeVisible());
  }
}`,...(fe=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var ve,he,be;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  ...Template,
  args: {
    emptyIcon: <div data-testid="empty-custom">X</div>,
    filledIcon: <div>X</div>
  },
  play: async ({
    canvasElement
  }) => {
    const customs = within(canvasElement).getAllByTestId('empty-custom');
    expect(customs).toHaveLength(5);
    customs.forEach(c => expect(c).toBeVisible());
  }
}`,...(be=(he=E.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var xe,Te,Be;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...Template,
  args: {
    emptyIcon: index => <div data-testid="empty-custom">{index + 1}</div>,
    filledIcon: index => <div>{index + 1}</div>
  },
  play: async ({
    canvasElement
  }) => {
    const customs = within(canvasElement).getAllByTestId('empty-custom');
    expect(customs).toHaveLength(5);
    customs.forEach((c, i) => {
      expect(c).toBeVisible();
      expect(c).toHaveTextContent((i + 1).toString());
    });
  }
}`,...(Be=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};var Ie,we,Ee;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  ...Template,
  args: {
    leftOverlay: <AiFillEye data-testid="left-icon" />,
    pending: true
  },
  play: async ({
    canvasElement
  }) => {
    const leftIcon = within(canvasElement).getByTestId('left-icon');
    expect(leftIcon).toBeVisible();
    const spinner = within(canvasElement).getByRole('status', {
      name: 'Loading...'
    });
    expect(spinner).toBeVisible();
  }
}`,...(Ee=(we=j.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var Se,je,Re;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  ...Template,
  args: {
    validationErrorMessages: ['Invalid rating']
  },
  play: async ({
    canvasElement
  }) => {
    const leftIcon = within(canvasElement).getByText('Invalid rating');
    expect(leftIcon).toBeVisible();
  }
}`,...(Re=(je=R.parameters)==null?void 0:je.docs)==null?void 0:Re.source}}};var Ce,qe,Ve;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...Template,
  args: {
    mode: 'radio',
    onValueChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[2]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
  }
}`,...(Ve=(qe=C.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var De,Ne,Ae;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
  ...Template,
  args: {
    mode: 'range'
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('slider');
    expect(input).toBeInTheDocument();
  }
}`,...(Ae=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};const ca=["Default","Half","Disabled","Labelled","Sizes","CustomMax","CustomIcons","CustomDOM","CustomDOMFromIndex","WithIconAndStatus","WithError","Radio","Range"],Ia=Object.freeze(Object.defineProperty({__proto__:null,CustomDOM:E,CustomDOMFromIndex:S,CustomIcons:w,CustomMax:I,Default:h,Disabled:x,Half:b,Labelled:T,Radio:C,Range:q,Sizes:B,WithError:R,WithIconAndStatus:j,__namedExportsOrder:ca,default:la},Symbol.toStringTag,{value:"Module"}));export{w as C,h as D,b as H,T as L,i as R,B as S,j as W,I as a,x as b,R as c,Ia as r};
