import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{c as T,w as g,e as o,u as c,a as v}from"./index-BmZcwVSF.js";import{u as M,b as A}from"./config.context-D0elZNgh.js";import{R as z}from"./index-DwQS_Y10.js";import{a as J,u as f}from"./label.component-tMLxsqsi.js";import{I as b}from"./input.component-C3468qP-.js";const m=({ref:e,bind:r,limit:n,shouldEnforce:a,value:t,className:y,validationErrorIcon:q,validationErrorsClassName:S,validationErrorsTitle:_,validationMode:N,...O})=>{const E=M({validationErrorIcon:q,validationMode:N}),[s,h]=J(r,{value:t}),x=s&&s.length>n;return z.useLayoutEffect(()=>{a&&x&&(h==null||h(s==null?void 0:s.slice(0,n)))},[s,x,n,h,a]),i.jsxs("div",{ref:e,className:T("arm-character-limit",y),"data-exceeded":x,...O,children:[i.jsxs("div",{className:"arm-character-limit-text",children:[s==null?void 0:s.length,"/",n]}),x&&i.jsx("div",{className:T("arm-character-limit-icon",S),title:_??"Character limit exceeded",children:(E.validationMode==="both"||E.validationMode==="icon")&&E.validationErrorIcon})]})};m.displayName="CharacterLimit";m.__docgenInfo={description:"Render a character limit from a bound value, showing as an error if the user",methods:[],displayName:"CharacterLimit",props:{bind:{required:!0,tsType:{name:"IBindingProps",elements:[{name:"TBind"}],raw:"IBindingProps<TBind>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},value:{required:!1,tsType:{name:"TBind"},description:"the current value of the string to count"},limit:{required:!0,tsType:{name:"number"},description:"the character limit for the bound input"},shouldEnforce:{required:!1,tsType:{name:"boolean"},description:"the limit should be enforced by the bind in this component - by default you will have to handle this yourself"},className:{required:!1,tsType:{name:"string"},description:"CSS className property"},validationErrorIcon:{required:!1,tsType:{name:"React.JSX.Element"},description:"the icon to use for the validation errors"},validationErrorsClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the validation errors"},validationErrorsTitle:{required:!1,tsType:{name:"string"},description:"(Optional) Title for the validation errors"},validationMode:{required:!1,tsType:{name:"union",raw:"'icon' | 'message' | 'both'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'message'"},{name:"literal",value:"'both'"}]},description:"how to render the validation errors"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}},composes:["Omit"]};const X={title:"Components/Character Limit",component:m,args:{limit:10},parameters:{docs:{description:{component:"metadata"}}}},l={render:e=>{const{bind:r,...n}=e,a={thing:""},{formProp:t}=f(a);return i.jsxs(i.Fragment,{children:[i.jsx(b,{bind:t("thing").bind()}),i.jsx(m,{bind:t("thing").bind(),...n})]})},play:async({canvasElement:e,args:r})=>{const n=g(e),a=n.getByRole("textbox",{hidden:!0}),t=n.getByText(`0/${r.limit}`).parentElement;o(t),await c.type(a,"a"),await v(()=>o(t).toHaveTextContent(`1/${r.limit}`)),await c.type(a,"a".repeat(r.limit-1)),await v(()=>o(t).toHaveTextContent(`${r.limit}/${r.limit}`)),await c.type(a,"a"),await v(()=>o(t).toHaveTextContent(`${r.limit+1}/${r.limit}`)),await v(()=>o(t).toHaveAttribute("data-exceeded","true"))}},p={render:e=>{const{bind:r,...n}=e,a={thing:""},{formProp:t}=f(a);return i.jsxs(i.Fragment,{children:[i.jsx(b,{bind:t("thing").bind()}),i.jsx(m,{bind:t("thing").bind(),...n})]})},args:{shouldEnforce:!0},play:async({args:e,canvasElement:r})=>{const n=g(r),a=n.getByRole("textbox",{hidden:!0}),t=n.getByText(`0/${e.limit}`).parentElement;o(t),await c.type(a,"a"),o(t).toHaveTextContent(`1/${e.limit}`),await c.type(a,"a".repeat(e.limit-1)),o(t).toHaveTextContent(`${e.limit}/${e.limit}`),await c.type(a,"a"),o(a).toHaveValue("a".repeat(e.limit)),o(t).toHaveTextContent(`${e.limit}/${e.limit}`),o(t).toHaveAttribute("data-exceeded","false")}},d={render:e=>{const{bind:r,...n}=e,a={thing:""},{formProp:t}=f(a);return i.jsx(i.Fragment,{children:i.jsx(b,{bind:t("thing").bind(),rightOverlay:i.jsx(m,{bind:t("thing").bind(),...n})})})},play:async({args:e,canvasElement:r})=>{const n=g(r),a=n.getByRole("textbox",{hidden:!0}),t=n.getByText(`0/${e.limit}`).parentElement;o(t),o(a.parentElement).toContainElement(t)}},u={render:e=>{const{bind:r,...n}=e,a={thing:""},{formProp:t}=f(a);return i.jsxs(i.Fragment,{children:[i.jsx(b,{bind:t("thing").bind()}),i.jsx(m,{bind:t("thing").bind(),...n})]})},args:{validationErrorIcon:i.jsx(A,{})},play:async({args:e,canvasElement:r})=>{const n=g(r),a=n.getByRole("textbox",{hidden:!0}),t=n.getByText(`0/${e.limit}`).parentElement;o(t),await c.type(a,"a".repeat(e.limit+1));const y=g(t).getByTitle("Character limit exceeded");o(y).toBeVisible()}};var w,C,$;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const {
      bind,
      ...props
    } = args;
    const formData: IFormData = {
      thing: ''
    };
    const {
      formProp
    } = useForm(formData);
    return <>
        <Input bind={formProp('thing').bind()} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} />
      </>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      hidden: true
    });
    const limit = canvas.getByText(\`0/\${args.limit}\`).parentElement;
    expect(limit);
    await userEvent.type(input, 'a');
    await waitFor(() => expect(limit).toHaveTextContent(\`1/\${args.limit}\`));
    await userEvent.type(input, 'a'.repeat(args.limit - 1));
    await waitFor(() => expect(limit).toHaveTextContent(\`\${args.limit}/\${args.limit}\`));
    await userEvent.type(input, 'a');
    await waitFor(() => expect(limit).toHaveTextContent(\`\${args.limit + 1}/\${args.limit}\`));
    await waitFor(() => expect(limit).toHaveAttribute('data-exceeded', 'true'));
  }
}`,...($=(C=l.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var I,B,D;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const {
      bind,
      ...props
    } = args;
    const formData: IFormData = {
      thing: ''
    };
    const {
      formProp
    } = useForm(formData);
    return <>
        <Input bind={formProp('thing').bind()} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} />
      </>;
  },
  args: {
    shouldEnforce: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      hidden: true
    });
    const limit = canvas.getByText(\`0/\${args.limit}\`).parentElement;
    expect(limit);
    await userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(\`1/\${args.limit}\`);
    await userEvent.type(input, 'a'.repeat(args.limit - 1));
    expect(limit).toHaveTextContent(\`\${args.limit}/\${args.limit}\`);
    await userEvent.type(input, 'a');
    expect(input).toHaveValue('a'.repeat(args.limit));
    expect(limit).toHaveTextContent(\`\${args.limit}/\${args.limit}\`);
    expect(limit).toHaveAttribute('data-exceeded', 'false');
  }
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,j,P;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const {
      bind,
      ...props
    } = args;
    const formData: IFormData = {
      thing: ''
    };
    const {
      formProp
    } = useForm(formData);
    return <>
        <Input bind={formProp('thing').bind()} rightOverlay={<CharacterLimit bind={formProp('thing').bind()} {...props} />} />
      </>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      hidden: true
    });
    const limit = canvas.getByText(\`0/\${args.limit}\`).parentElement;
    expect(limit);
    expect(input.parentElement).toContainElement(limit);
  }
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var F,R,L;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const {
      bind,
      ...props
    } = args;
    const formData: IFormData = {
      thing: ''
    };
    const {
      formProp
    } = useForm(formData);
    return <>
        <Input bind={formProp('thing').bind()} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} />
      </>;
  },
  args: {
    validationErrorIcon: <ImTree />
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      hidden: true
    });
    const limit = canvas.getByText(\`0/\${args.limit}\`).parentElement as HTMLParagraphElement;
    expect(limit);
    await userEvent.type(input, 'a'.repeat(args.limit + 1));
    const icon = within(limit).getByTitle('Character limit exceeded');
    expect(icon).toBeVisible();
  }
}`,...(L=(R=u.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const k=["Default","Enforce","InsideInput","CustomIcon"],Y=Object.freeze(Object.defineProperty({__proto__:null,CustomIcon:u,Default:l,Enforce:p,InsideInput:d,__namedExportsOrder:k,default:X},Symbol.toStringTag,{value:"Module"}));export{m as C,l as D,d as I,u as a,Y as c};
