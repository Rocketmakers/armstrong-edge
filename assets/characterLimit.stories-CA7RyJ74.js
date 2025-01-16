import{j as r}from"./jsx-runtime-Cl2eCCBe.js";import{c as w,w as p,e as o,u as m,a as u}from"./classNames-TtGgGdEV.js";import{u as M,b as J}from"./config.context-DSGy4VcJ.js";import{r as T}from"./index-Cqyox1Tj.js";import{a as X,u as f}from"./label.component-BjYIJ-30.js";import{I as b}from"./input.component-DsxJNSxD.js";import"./useDidUpdateEffect-CQd39TVK.js";import"./extends-CF3RwP-h.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./inputWrapper.component-BPs1nEnr.js";import"./statusWrapper.component-DCIbvlN0.js";import"./spinner.component-GjtI7h28.js";import"./validationErrors.component-CrXQH9ID.js";import"./radixDialog-CBrwtQa5.js";const c=T.forwardRef(({bind:e,limit:n,shouldEnforce:i,value:a,className:t,validationErrorIcon:y,validationErrorsClassName:N,validationErrorsTitle:S,validationMode:A,...O},_)=>{const E=M({validationErrorIcon:y,validationMode:A}),[s,l]=X(e,{value:a}),d=s&&s.length>n;return T.useLayoutEffect(()=>{i&&d&&(l==null||l(s==null?void 0:s.slice(0,n)))},[s,d,n,l,i]),r.jsxs("div",{ref:_,className:w("arm-character-limit",t),"data-exceeded":d,...O,children:[r.jsxs("div",{className:"arm-character-limit-text",children:[s==null?void 0:s.length,"/",n]}),d&&r.jsx("div",{className:w("arm-character-limit-icon",N),title:S??"Character limit exceeded",children:(E.validationMode==="both"||E.validationMode==="icon")&&E.validationErrorIcon})]})});c.displayName="CharacterLimit";c.__docgenInfo={description:"Render a character limit from a bound value, showing as an error if the user",methods:[],displayName:"CharacterLimit",props:{bind:{required:!0,tsType:{name:"IBindingProps",elements:[{name:"TBind"}],raw:"IBindingProps<TBind>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},value:{required:!1,tsType:{name:"TBind"},description:"the current value of the string to count"},limit:{required:!0,tsType:{name:"number"},description:"the character limit for the bound input"},shouldEnforce:{required:!1,tsType:{name:"boolean"},description:"the limit should be enforced by the bind in this component - by default you will have to handle this yourself"},className:{required:!1,tsType:{name:"string"},description:"CSS className property"},validationErrorIcon:{required:!1,tsType:{name:"JSX.Element"},description:"the icon to use for the validation errors"},validationErrorsClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the validation errors"},validationErrorsTitle:{required:!1,tsType:{name:"string"},description:"(Optional) Title for the validation errors"},validationMode:{required:!1,tsType:{name:"union",raw:"'icon' | 'message' | 'both'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'message'"},{name:"literal",value:"'both'"}]},description:"how to render the validation errors"}},composes:["Omit"]};const rt={title:"Components/Character Limit",component:c,args:{limit:10},parameters:{docs:{description:{component:"metadata"}}}},g={render:e=>{const{bind:n,...i}=e,a={thing:""},{formProp:t}=f(a);return r.jsxs(r.Fragment,{children:[r.jsx(b,{bind:t("thing").bind()}),r.jsx(c,{bind:t("thing").bind(),...i})]})},play:async({canvasElement:e,args:n})=>{const i=p(e),a=i.getByRole("textbox",{hidden:!0}),t=i.getByText(`0/${n.limit}`).parentElement;o(t),await m.type(a,"a"),await u(()=>o(t).toHaveTextContent(`1/${n.limit}`)),await m.type(a,"a".repeat(n.limit-1)),await u(()=>o(t).toHaveTextContent(`${n.limit}/${n.limit}`)),await m.type(a,"a"),await u(()=>o(t).toHaveTextContent(`${n.limit+1}/${n.limit}`)),await u(()=>o(t).toHaveAttribute("data-exceeded","true"))}},h={render:e=>{const{bind:n,...i}=e,a={thing:""},{formProp:t}=f(a);return r.jsxs(r.Fragment,{children:[r.jsx(b,{bind:t("thing").bind()}),r.jsx(c,{bind:t("thing").bind(),...i})]})},args:{shouldEnforce:!0},play:async({args:e,canvasElement:n})=>{const i=p(n),a=i.getByRole("textbox",{hidden:!0}),t=i.getByText(`0/${e.limit}`).parentElement;o(t),await m.type(a,"a"),o(t).toHaveTextContent(`1/${e.limit}`),await m.type(a,"a".repeat(e.limit-1)),o(t).toHaveTextContent(`${e.limit}/${e.limit}`),await m.type(a,"a"),o(a).toHaveValue("a".repeat(e.limit)),o(t).toHaveTextContent(`${e.limit}/${e.limit}`),o(t).toHaveAttribute("data-exceeded","false")}},x={render:e=>{const{bind:n,...i}=e,a={thing:""},{formProp:t}=f(a);return r.jsx(r.Fragment,{children:r.jsx(b,{bind:t("thing").bind(),rightOverlay:r.jsx(c,{bind:t("thing").bind(),...i})})})},play:async({args:e,canvasElement:n})=>{const i=p(n),a=i.getByRole("textbox",{hidden:!0}),t=i.getByText(`0/${e.limit}`).parentElement;o(t),o(a.parentElement).toContainElement(t)}},v={render:e=>{const{bind:n,...i}=e,a={thing:""},{formProp:t}=f(a);return r.jsxs(r.Fragment,{children:[r.jsx(b,{bind:t("thing").bind()}),r.jsx(c,{bind:t("thing").bind(),...i})]})},args:{validationErrorIcon:r.jsx(J,{})},play:async({args:e,canvasElement:n})=>{const i=p(n),a=i.getByRole("textbox",{hidden:!0}),t=i.getByText(`0/${e.limit}`).parentElement;o(t),await m.type(a,"a".repeat(e.limit+1));const y=p(t).getByTitle("Character limit exceeded");o(y).toBeVisible()}};var C,$,B;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=($=g.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var I,H,P;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(H=h.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var j,D,F;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(D=x.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var L,R,q;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=(R=v.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const ot=["Default","Enforce","InsideInput","CustomIcon"];export{v as CustomIcon,g as Default,h as Enforce,x as InsideInput,ot as __namedExportsOrder,rt as default};
