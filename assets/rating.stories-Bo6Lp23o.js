import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as U,w as s,e as r,u as F,a as O,f as V}from"./index-BmZcwVSF.js";import{a as Ue}from"./index.esm-CDhBa5Tx.js";import{u as $e,h as Ge,i as Ke,G as Ae}from"./config.context-BKnTehkl.js";import{R as Qe}from"./index-DwQS_Y10.js";import{a as Ye}from"./useDidUpdateEffect-DxNflIL8.js";import{a as Ze,L as ea,r as k,u as _}from"./label.component-CwmwBemr.js";import{c as aa}from"./maths-co6UzHBn.js";import{S as ta}from"./statusWrapper.component-BN4VJEUZ.js";import{V as na}from"./validationErrors.component-44eD-gIZ.js";import{B as ra}from"./button.component-XCqawbKw.js";const $=(e,t)=>typeof e=="function"?e(t):e,sa=({ref:e,index:t,value:n,onSelectPart:d,filledIcon:D,emptyIcon:N,step:g,mode:A,readOnly:u,disabled:L})=>{const y=Math.floor(1/(g||1)),H=n&&n>=t+1,M=n&&n<t+1&&n>t;return a.jsxs("div",{ref:e,className:"arm-rating-part",style:n?{"--rating-amount":`${aa((n-t)*100,0,100)}%`}:void 0,"data-filled":H,"data-part":M,children:[a.jsxs("div",{className:"arm-rating-part-icon-wrapper",children:[D&&a.jsx("div",{className:"arm-rating-part-icon arm-rating-part-filled",children:a.jsx("div",{className:"arm-rating-part-icon-inner",children:$(D,t)})}),N&&a.jsx("div",{className:"arm-rating-part-icon arm-rating-part-empty",children:a.jsx("div",{className:"arm-rating-part-icon-inner",children:$(N,t)})})]}),!u&&A==="buttons"&&a.jsx("div",{className:"arm-rating-part-buttons",children:k(y,o=>{const m=t+(y===2?.5:1)+(o?.5:0);return a.jsx(ra,{role:"radio","aria-checked":m===n,type:"button",className:"arm-rating-button",onClick:()=>d((g||1)*(o+1)),"aria-label":m.toString(),disabled:L},o)})}),!u&&A==="radio"&&a.jsx("div",{className:"arm-rating-part-radios",children:k(y,o=>{const m=t+(y===2?.5:1)+(o?.5:0);return a.jsx("div",{className:"arm-rating-part-radio-wrapper",children:a.jsx("input",{className:"arm-rating-part-radio",type:"radio",onChange:()=>d((g||1)*(o+1)),"aria-label":m.toString(),value:m,checked:m===n,disabled:L})},o)})})]})},c=({ref:e,bind:t,value:n,onValueChange:d,filledIcon:D=a.jsx(Ge,{}),emptyIcon:N=a.jsx(Ke,{}),maximum:g=5,className:A,validationErrorMessages:u,validationMode:L,errorIcon:y,scrollValidationErrorsIntoView:H,step:M=1,error:o,statusPosition:m,pending:Le,leftOverlay:He,rightOverlay:Me,mode:X="buttons",disabled:z,statusClassName:da,validationErrorsClassName:ua,labelClassName:Pe,labelId:Fe,label:J,required:Oe,requiredIndicator:ze,displaySize:ke,autoValidate:_e,...Xe})=>{const[f,p,l]=Ze(t,{value:n,onChange:d,validationErrorMessages:u,validationMode:L,autoValidate:_e,validationErrorIcon:y}),P=$e({validationMode:l.validationMode,inputDisplaySize:ke,scrollValidationErrorsIntoView:H,requiredIndicator:ze,validationErrorIcon:l.validationErrorIcon,autoValidate:l.autoValidate}),Je=Qe.useId(),W=Fe??Je;return Ye(()=>{P.autoValidate&&l.validate(),l.setTouched(!0)},[f]),a.jsxs(a.Fragment,{children:[a.jsxs("div",{ref:e,role:"radiogroup","aria-label":f!==void 0?`Rating: ${f}/${g}`:void 0,...Xe,className:U("arm-rating",A),"data-read-only":!p,"data-size":P.inputDisplaySize,children:[J&&a.jsx(ea,{id:W,className:U("arm-rating-input-label",Pe),"data-disabled":z,required:Oe,displaySize:P.inputDisplaySize,requiredIndicator:P.requiredIndicator,children:J}),a.jsx("div",{className:"arm-rating-input-inner","aria-labelledby":W,children:a.jsx(ta,{error:o,statusPosition:m,errorIcon:l.validationErrorIcon,validationMode:l.validationMode,pending:Le,children:a.jsxs(a.Fragment,{children:[He,a.jsxs("div",{className:"arm-rating-parts",children:[k(g,v=>a.jsx(sa,{index:v,filledIcon:D,emptyIcon:N,value:f||void 0,onSelectPart:We=>p==null?void 0:p(v+We),step:M,mode:X,disabled:z,readOnly:!p},v)),X==="range"&&a.jsx("input",{className:"arm-rating-range",type:"range",step:M,min:0,max:g,disabled:z,value:f||void 0,onChange:v=>p==null?void 0:p(v.currentTarget.valueAsNumber)})]}),Me]})})})]}),!!(u!=null&&u.length)&&l.shouldShowValidationErrorMessage&&a.jsx(na,{validationErrors:u,validationMode:l.validationMode,scrollIntoView:H})]})};c.displayName="Rating";c.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{statusPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"which side of the button to show the spinner on - defaults to 'right'"},error:{required:!1,tsType:{name:"boolean"},description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)"},pending:{required:!1,tsType:{name:"boolean"},description:"show a spinner and disable"},validationMode:{required:!1,tsType:{name:"union",raw:"'icon' | 'message' | 'both'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'message'"},{name:"literal",value:"'both'"}]},description:"how to render the validation errors"},errorIcon:{required:!1,tsType:{name:"React.JSX.Element"},description:"the icon to use for validation errors"},className:{required:!1,tsType:{name:"string"},description:"an optional CSS className for the rendered status"},bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"TBind"}],raw:"IBindingProps<TBind>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},value:{required:!1,tsType:{name:"TBind"},description:"current value, as a number, of the rating"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: TBind) => void",signature:{arguments:[{type:{name:"TBind"},name:"newValue"}],return:{name:"void"}}},description:"called when the value of the input changes"},filledIcon:{required:!1,tsType:{name:"union",raw:"React.JSX.Element | ((index: number) => React.JSX.Element)",elements:[{name:"React.JSX.Element"},{name:"unknown"}]},description:"the icon to use for a filled star",defaultValue:{value:"<ImStarFull />",computed:!1}},emptyIcon:{required:!1,tsType:{name:"union",raw:"React.JSX.Element | ((index: number) => React.JSX.Element)",elements:[{name:"React.JSX.Element"},{name:"unknown"}]},description:"the icon to use for an empty star",defaultValue:{value:"<ImStarEmpty />",computed:!1}},maximum:{required:!1,tsType:{name:"number"},description:"the maximum possible value of the rating",defaultValue:{value:"5",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"1 | 0.5",elements:[{name:"literal",value:"1"},{name:"literal",value:"0.5"}]},description:"the size of each possible step - defaults to 1, set to 0.5 to allow half stars",defaultValue:{value:"1",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'range' | 'buttons' | 'radio'",elements:[{name:"literal",value:"'range'"},{name:"literal",value:"'buttons'"},{name:"literal",value:"'radio'"}]},description:`the kind of elements used to handle the interaction

range will use an input with type='range' to handle the interaction, buttons will render a series of buttons, radio will render radio inputs
@default 'buttons'`,defaultValue:{value:"'buttons'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether to disable the input"},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}},composes:["Omit","Pick"]};function ia(e){return Ae({attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.556 11.169l-1.849-1.232.984-1.993c.148-.3.137-.654-.03-.943-.168-.29-.468-.477-.802-.498l-2.218-.143-.144-2.218c-.02-.334-.208-.635-.497-.802-.29-.167-.645-.18-.943-.03l-1.991.985-1.233-1.849c-.371-.557-1.293-.557-1.664 0l-1.234 1.848-1.992-.984c-.299-.15-.654-.137-.943.03-.29.167-.477.468-.498.802l-.143 2.217-2.218.143c-.334.022-.635.209-.802.498s-.179.644-.03.943l.984 1.993-1.849 1.233c-.278.186-.445.498-.445.832s.167.646.445.832l1.85 1.233-.985 1.992c-.148.3-.137.654.03.943s.468.477.802.498l2.218.143.143 2.218c.021.333.208.634.498.801s.642.179.943.031l1.992-.985 1.233 1.849c.186.278.498.445.832.445s.646-.167.832-.445l1.233-1.849 1.991.985c.299.148.653.136.943-.03.29-.167.477-.468.498-.802l.143-2.217 2.219-.144c.334-.021.635-.208.802-.498s.179-.644.03-.943l-.984-1.992 1.849-1.233c.278-.186.445-.498.445-.832 0-.334-.167-.647-.445-.832zm-4.032 2.997l.71 1.435-1.6.104c-.502.033-.901.432-.934.934l-.103 1.598-1.435-.709c-.45-.224-.996-.077-1.275.342l-.887 1.33-.889-1.333c-.191-.287-.508-.445-.833-.445-.149 0-.3.033-.442.104l-1.436.709-.103-1.598c-.032-.501-.432-.901-.934-.934l-1.596-.103.71-1.435c.223-.451.076-.997-.342-1.275l-1.333-.889 1.332-.888c.418-.279.564-.825.342-1.275l-.71-1.436 1.6-.103c.502-.033.901-.432.934-.934l.103-1.598 1.435.709c.448.221.996.076 1.275-.342l.887-1.331.889 1.333c.279.418.826.563 1.275.342l1.436-.71.104 1.599c.033.501.433.9.934.933l1.598.103-.709 1.437c-.223.451-.076.996.342 1.275l1.332.888-1.333.889c-.42.277-.566.823-.344 1.274z"}}]})(e)}function oa(e){return Ae({attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.064 10.109l1.179-2.387c.074-.149.068-.327-.015-.471-.083-.145-.234-.238-.401-.249l-2.656-.172-.172-2.656c-.011-.167-.104-.317-.249-.401-.145-.084-.322-.09-.472-.015l-2.385 1.18-1.477-2.215c-.186-.278-.646-.278-.832 0l-1.477 2.215-2.385-1.18c-.151-.075-.327-.069-.472.015-.145.083-.238.234-.249.401l-.171 2.656-2.657.171c-.167.011-.318.104-.401.249-.084.145-.089.322-.015.472l1.179 2.386-2.214 1.477c-.139.093-.223.249-.223.416s.083.323.223.416l2.215 1.477-1.18 2.386c-.074.15-.068.327.015.472.083.144.234.238.401.248l2.656.171.171 2.657c.011.167.104.317.249.401.144.083.32.088.472.015l2.386-1.179 1.477 2.214c.093.139.249.223.416.223s.323-.083.416-.223l1.477-2.214 2.386 1.179c.15.073.327.068.472-.015s.238-.234.249-.401l.171-2.656 2.656-.172c.167-.011.317-.104.401-.249.083-.145.089-.322.015-.472l-1.179-2.385 2.214-1.478c.139-.093.223-.249.223-.416s-.083-.323-.223-.416l-2.214-1.475z"}}]})(e)}const la={title:"Components/Rating",component:c,parameters:{docs:{description:{component:"meta"}}}},i={render:e=>{const{formProp:t,formState:n}=_({rating:0});return a.jsxs("div",{children:[a.jsx(c,{...e,bind:t("rating").bind()}),a.jsxs("div",{"data-testid":"result",style:{marginTop:"20px"},children:["Bound value: ",n==null?void 0:n.rating]})]})}},h={...i,args:{onValueChange:V()},play:async({canvasElement:e})=>{const t=s(e).getAllByRole("radio");F.click(t[2]);const n=s(e).getByTestId("result");await O(()=>r(n).toHaveTextContent("Bound value: 3"))}},b={...i,args:{step:.5,onValueChange:V()},play:async({canvasElement:e})=>{const t=s(e).getAllByRole("radio");F.click(t[4]);const n=s(e).getByTestId("result");await O(()=>{r(n).toHaveTextContent("Bound value: 2.5")})}},x={...i,args:{disabled:!0,onValueChange:V()},play:async({canvasElement:e})=>{s(e).getAllByRole("radio").forEach(n=>r(n).toBeDisabled())}},T={render:()=>{const{formProp:e}=_({default:0,required:0});return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[a.jsx(c,{label:"Default",bind:e("default").bind()}),a.jsx(c,{label:"Required",bind:e("required").bind(),required:!0})]})},play:async({canvasElement:e})=>{const t=s(e),n=t.getByLabelText("Default"),d=t.getByLabelText("Required *");r(n).toBeInTheDocument(),r(d).toBeInTheDocument()}},B={render:()=>{const{formProp:e}=_({small:0,medium:0,large:0});return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsx(c,{label:"Small Rating",displaySize:"small",required:!0,bind:e("small").bind()}),a.jsx(c,{label:"Medium Rating",required:!0,bind:e("medium").bind()}),a.jsx(c,{label:"Large Rating",displaySize:"large",required:!0,bind:e("large").bind()})]})}},I={...i,args:{maximum:10,onValueChange:V()},play:async({canvasElement:e})=>{const t=s(e).getAllByRole("radio");F.click(t[8]);const n=s(e).getByTestId("result");await O(()=>r(n).toHaveTextContent("Bound value: 9"))}},w={...i,args:{emptyIcon:a.jsx(ia,{"data-testid":"empty-custom"}),filledIcon:a.jsx(oa,{})},play:async({canvasElement:e})=>{const t=s(e).getAllByTestId("empty-custom");r(t).toHaveLength(5),t.forEach(n=>r(n).toBeVisible())}},E={...i,args:{emptyIcon:a.jsx("div",{"data-testid":"empty-custom",children:"X"}),filledIcon:a.jsx("div",{children:"X"})},play:async({canvasElement:e})=>{const t=s(e).getAllByTestId("empty-custom");r(t).toHaveLength(5),t.forEach(n=>r(n).toBeVisible())}},R={...i,args:{emptyIcon:e=>a.jsx("div",{"data-testid":"empty-custom",children:e+1}),filledIcon:e=>a.jsx("div",{children:e+1})},play:async({canvasElement:e})=>{const t=s(e).getAllByTestId("empty-custom");r(t).toHaveLength(5),t.forEach((n,d)=>{r(n).toBeVisible(),r(n).toHaveTextContent((d+1).toString())})}},S={...i,args:{leftOverlay:a.jsx(Ue,{"data-testid":"left-icon"}),pending:!0},play:async({canvasElement:e})=>{const t=s(e).getByTestId("left-icon");r(t).toBeVisible();const n=s(e).getByRole("status",{name:"Loading..."});r(n).toBeVisible()}},j={...i,args:{validationErrorMessages:["Invalid rating"]},play:async({canvasElement:e})=>{const t=s(e).getByText("Invalid rating");r(t).toBeVisible()}},C={...i,args:{mode:"radio",onValueChange:V()},play:async({canvasElement:e})=>{const t=s(e).getAllByRole("radio");F.click(t[2]);const n=s(e).getByTestId("result");await O(()=>r(n).toHaveTextContent("Bound value: 3"))}},q={...i,args:{mode:"range"},play:async({canvasElement:e})=>{const t=s(e).getByRole("slider");r(t).toBeInTheDocument()}};var G,K,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,se,ie;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,le,ce;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,ye;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var fe,ve,he;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var be,xe,Te;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Te=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Be,Ie,we;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(we=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Ee,Re,Se;j.parameters={...j.parameters,docs:{...(Ee=j.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Se=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:Se.source}}};var je,Ce,qe;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(qe=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:qe.source}}};var Ve,De,Ne;q.parameters={...q.parameters,docs:{...(Ve=q.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ne=(De=q.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};const ca=["Default","Half","Disabled","Labelled","Sizes","CustomMax","CustomIcons","CustomDOM","CustomDOMFromIndex","WithIconAndStatus","WithError","Radio","Range"],Ia=Object.freeze(Object.defineProperty({__proto__:null,CustomDOM:E,CustomDOMFromIndex:R,CustomIcons:w,CustomMax:I,Default:h,Disabled:x,Half:b,Labelled:T,Radio:C,Range:q,Sizes:B,WithError:j,WithIconAndStatus:S,__namedExportsOrder:ca,default:la},Symbol.toStringTag,{value:"Module"}));export{w as C,h as D,b as H,T as L,c as R,B as S,S as W,I as a,x as b,j as c,Ia as r};
