import{a as o,j as a}from"./jsx-runtime-63e4a166.js";import{w as s,u as c,a as v,e as i}from"./index-3ffc2e85.js";import{R as Z}from"./index-c4905b50.js";import{S as l}from"./select.component-42f334ea.js";import{u as S}from"./label.component-4408833d.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./config.context-54240269.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-07d1f67e.js";import"./floating-ui.dom.browser.min-04af7d1d.js";import"./options-d4d63b36.js";import"./classNames-9011e307.js";import"./validationErrors.component-04b289b4.js";import"./statusWrapper.component-9facb966.js";import"./spinner.component-5b0c70a5.js";import"./useContentMemo-b4c57d54.js";import"./index-742b7287.js";const m=[{label:"Colours",options:[{id:1,content:"ocean"},{id:2,content:"blue"},{id:3,content:"purple"},{id:4,content:"red"},{id:5,content:"orange"},{id:6,content:"yellow"},{id:7,content:"green"},{id:8,content:"forest"},{id:9,content:"slate"},{id:10,content:"silver"}]},{label:"Flavours",options:[{id:11,content:"vanilla"},{id:12,content:"chocolate"},{id:13,content:"strawberry"}]}],g=m[0].options,Ce={title:"Components/Select",component:l,parameters:{docs:{description:{component:"meta"}}}},b={args:{options:m,placeholder:"Please select..."},render:t=>{const{formProp:e,formState:n}=S();return a("div",{style:{height:"20rem"},children:[o(l,{bind:e("value").bind(),...t}),a("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",n==null?void 0:n.value]})]})}},y={...b,play:async({canvasElement:t})=>{const e=s(t),n=e.getByRole("combobox");c.click(n);const r=await v(()=>e.getByText("blue"));c.click(r);const d=e.getByTestId("result");await v(()=>i(d).toHaveTextContent("Current value: 2"))}},w={render:()=>o("div",{style:{width:"100%",height:"20rem"},children:o(l,{options:m,disabled:!0})}),play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeDisabled()}},B={render:()=>o("div",{style:{width:"100%",height:"20rem"},children:o(l,{native:!0,options:g})}),play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible()}},x={render:()=>{var n;const{formProp:t,formState:e}=S({value:[1,3,5]});return a("div",{style:{width:"100%",height:"20rem"},children:[o(l,{multi:!0,options:g,bind:t("value").bind()}),a("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",(n=e==null?void 0:e.value)==null?void 0:n.join(", ")]})]})},play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible();const n=s(t).getByTestId("result");i(n).toHaveTextContent("Current value: 1, 3, 5");const r=s(t).getByRole("button",{name:"Remove ocean"});c.click(r),await v(()=>i(n).toHaveTextContent("Current value: 3, 5"))}},T={...b,render:()=>{const{formProp:t,formState:e}=S(),[n,r]=Z.useState(g),d=u=>{const p=n.length+1,h=[...n,{id:p,content:u,wasCreated:!0}];return r(h),p};return a("div",{style:{height:"20rem"},children:[o(l,{allowCreate:!0,bind:t("value").bind(),options:n,onOptionCreated:d}),a("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible(),c.type(e,"New item"),c.keyboard("{Enter}");const n=s(t).getByTestId("result");await v(()=>i(n).toHaveTextContent(`Current value: ${g.length+1}`))}},E={...b,render:()=>{var u;const{formProp:t,formState:e}=S(),[n,r]=Z.useState(g),d=p=>{const h=n.length+1,ee=[...n,{id:h,content:p,wasCreated:!0}];return r(ee),h};return a("div",{style:{height:"20rem"},children:[o(l,{multi:!0,allowCreate:!0,bind:t("value").bind(),options:n,onOptionCreated:d}),a("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",(u=e==null?void 0:e.value)==null?void 0:u.join(", ")]})]})},play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible();const n=s(t).getByTestId("result");c.type(e,"New item 1"),c.keyboard("{Enter}");const r=g.length+1;await v(()=>i(n).toHaveTextContent(`Current value: ${r}`)),c.type(s(t).getByRole("combobox"),"New item 2"),c.keyboard("{Enter}");const d=r+1;await v(()=>i(n).toHaveTextContent(`Current value: ${r}, ${d}`)),c.type(s(t).getByRole("combobox"),"New item 3"),c.keyboard("{Enter}");const u=d+1;await v(()=>i(n).toHaveTextContent(`Current value: ${r}, ${d}, ${u}`))}},C={...b,render:t=>a("div",{children:[o("h2",{children:"Small"}),o(l,{options:t.options,required:!0,label:"Single select",displaySize:"small","data-testid":"wrapper"}),o("h2",{children:"Medium"}),o(l,{options:t.options,required:!0,label:"Single select",displaySize:"medium","data-testid":"wrapper"}),o("h2",{children:"Large"}),o(l,{options:t.options,required:!0,label:"Single select",displaySize:"large","data-testid":"wrapper"})]}),play:async({canvasElement:t})=>{const e=s(t),[n,r,d]=e.getAllByTestId("wrapper");i(n).toHaveAttribute("data-size","small"),i(r).toHaveAttribute("data-size","medium"),i(d).toHaveAttribute("data-size","large")}},f={...b,render:()=>a("div",{children:[a("div",{"data-testid":"both",children:[o("h2",{children:"Validation mode - both"}),o(l,{validationMode:"both",validationErrorMessages:["This field is required"],options:m,required:!0})]}),a("div",{"data-testid":"icon",children:[o("h2",{children:"Validation mode - icon only"}),o(l,{validationMode:"icon",validationErrorMessages:["This field is required"],options:m,required:!0})]}),a("div",{"data-testid":"message",children:[o("h2",{children:"Validation mode - message only"}),o(l,{validationMode:"message",validationErrorMessages:["This field is required"],options:m,required:!0})]}),a("div",{"data-testid":"left-icon",children:[o("h2",{children:"Icon on left"}),o(l,{validationMode:"icon",validationErrorMessages:["This field is required"],options:m,required:!0,statusPosition:"left"})]})]}),play:async({canvasElement:t})=>{const e=s(t),n=e.getByTestId("both");i(s(n).getByRole("status")).toBeVisible(),i(s(n).getByLabelText("Error messages")).toBeVisible();const r=e.getByTestId("icon");i(s(r).getByRole("status")).toBeVisible();const d=e.getByTestId("message");i(s(d).getByLabelText("Error messages")).toBeVisible();const u=e.getByTestId("left-icon"),p=s(u).getByRole("status");i(p).toBeVisible(),i(p).toHaveAttribute("data-position","left")}};var O,H,M,R,V;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('combobox');
    userEvent.click(input);
    const blue = await waitFor(() => canvas.getByText('blue'));
    userEvent.click(blue);
    const result = canvas.getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: 2\`));
  }
}`,...(M=(H=y.parameters)==null?void 0:H.docs)==null?void 0:M.source},description:{story:"stories",...(V=(R=y.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var I,q,L;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: '100%',
      height: '20rem'
    }}>
        <Select options={groupedOptions} disabled />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>('combobox');
    expect(input).toBeDisabled();
  }
}`,...(L=(q=w.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var k,z,$;B.parameters={...B.parameters,docs:{...(k=B.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: '100%',
      height: '20rem'
    }}>
        <Select native={true} options={flatOptions} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLSelectElement>('combobox');
    expect(input).toBeVisible();
  }
}`,...($=(z=B.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var F,P,A;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const {
      formProp,
      formState
    } = useForm<{
      value: number[];
    }>({
      value: [1, 3, 5]
    });
    return <div style={{
      width: '100%',
      height: '20rem'
    }}>
        <Select multi={true} options={flatOptions} bind={formProp('value').bind()} />
        <div data-testid="result" style={{
        marginTop: '10px'
      }}>
          Current value: {formState?.value?.join(', ')}
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>('combobox');
    expect(input).toBeVisible();
    const result = within(canvasElement).getByTestId('result');
    expect(result).toHaveTextContent('Current value: 1, 3, 5');
    const removeButton = within(canvasElement).getByRole('button', {
      name: 'Remove ocean'
    });
    userEvent.click(removeButton);
    await waitFor(() => expect(result).toHaveTextContent('Current value: 3, 5'));
  }
}`,...(A=(P=x.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var N,j,D;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    const {
      formProp,
      formState
    } = useForm<{
      value?: number;
    }>();
    const [options, setOptions] = React.useState(flatOptions);
    const onOptionCreated = (newValue: string) => {
      const id = options.length + 1;
      const newOptions = [...options, {
        id,
        content: newValue,
        wasCreated: true
      }];
      setOptions(newOptions);
      return id;
    };
    return <div style={{
      height: '20rem'
    }}>
        <Select allowCreate={true} bind={formProp('value').bind()} options={options} onOptionCreated={onOptionCreated} />
        <div data-testid="result" style={{
        marginTop: '10px'
      }}>
          Current value: {formState?.value}
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>('combobox');
    expect(input).toBeVisible();
    userEvent.type(input, 'New item');
    userEvent.keyboard('{Enter}');
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${flatOptions.length + 1}\`));
  }
}`,...(D=(j=T.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var _,G,J;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    const {
      formProp,
      formState
    } = useForm<{
      value?: number[];
    }>();
    const [options, setOptions] = React.useState(flatOptions);
    const onOptionCreated = (newValue: string) => {
      const id = options.length + 1;
      const newOptions = [...options, {
        id,
        content: newValue,
        wasCreated: true
      }];
      setOptions(newOptions);
      return id;
    };
    return <div style={{
      height: '20rem'
    }}>
        <Select multi={true} allowCreate={true} bind={formProp('value').bind()} options={options} onOptionCreated={onOptionCreated} />
        <div data-testid="result" style={{
        marginTop: '10px'
      }}>
          Current value: {formState?.value?.join(', ')}
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>('combobox');
    expect(input).toBeVisible();
    const result = within(canvasElement).getByTestId('result');
    userEvent.type(input, 'New item 1');
    userEvent.keyboard('{Enter}');
    const new1id = flatOptions.length + 1;
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${new1id}\`));
    userEvent.type(within(canvasElement).getByRole<HTMLInputElement>('combobox'), 'New item 2');
    userEvent.keyboard('{Enter}');
    const new2id = new1id + 1;
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${new1id}, \${new2id}\`));
    userEvent.type(within(canvasElement).getByRole<HTMLInputElement>('combobox'), 'New item 3');
    userEvent.keyboard('{Enter}');
    const new3id = new2id + 1;
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${new1id}, \${new2id}, \${new3id}\`));
  }
}`,...(J=(G=E.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Template,
  render: args => {
    return <div>
        <h2>Small</h2>
        <Select options={args.options} required label="Single select" displaySize="small" data-testid="wrapper" />
        <h2>Medium</h2>
        <Select options={args.options} required label="Single select" displaySize="medium" data-testid="wrapper" />
        <h2>Large</h2>
        <Select options={args.options} required label="Single select" displaySize="large" data-testid="wrapper" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [small, medium, large] = canvas.getAllByTestId('wrapper');
    expect(small).toHaveAttribute('data-size', 'small');
    expect(medium).toHaveAttribute('data-size', 'medium');
    expect(large).toHaveAttribute('data-size', 'large');
  }
}`,...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    return <div>
        <div data-testid="both">
          <h2>Validation mode - both</h2>
          <Select validationMode="both" validationErrorMessages={['This field is required']} options={groupedOptions} required />
        </div>
        <div data-testid="icon">
          <h2>Validation mode - icon only</h2>
          <Select validationMode="icon" validationErrorMessages={['This field is required']} options={groupedOptions} required />
        </div>
        <div data-testid="message">
          <h2>Validation mode - message only</h2>
          <Select validationMode="message" validationErrorMessages={['This field is required']} options={groupedOptions} required />
        </div>
        <div data-testid="left-icon">
          <h2>Icon on left</h2>
          <Select validationMode="icon" validationErrorMessages={['This field is required']} options={groupedOptions} required statusPosition="left" />
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const both = canvas.getByTestId('both');
    expect(within(both).getByRole('status')).toBeVisible();
    expect(within(both).getByLabelText('Error messages')).toBeVisible();
    const icon = canvas.getByTestId('icon');
    expect(within(icon).getByRole('status')).toBeVisible();
    const message = canvas.getByTestId('message');
    expect(within(message).getByLabelText('Error messages')).toBeVisible();
    const iconLeft = canvas.getByTestId('left-icon');
    const status = within(iconLeft).getByRole('status');
    expect(status).toBeVisible();
    expect(status).toHaveAttribute('data-position', 'left');
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const fe=["Default","Disabled","Native","Multi","Create","CreateMulti","Sizes","ValidationError"];export{T as Create,E as CreateMulti,y as Default,w as Disabled,x as Multi,B as Native,C as Sizes,f as ValidationError,fe as __namedExportsOrder,Ce as default};
//# sourceMappingURL=select.stories-991591c5.js.map
