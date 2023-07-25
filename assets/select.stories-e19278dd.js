import{a as o,j as r}from"./jsx-runtime-63e4a166.js";import{w as s,u as d,a as v,e as i}from"./index-3ffc2e85.js";import{R as Z}from"./index-c4905b50.js";import{S as c,N as ne,M as ee}from"./select.component-c2c72b16.js";import{u as S}from"./label.component-da3470d8.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./config.context-240cf8e4.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-07d1f67e.js";import"./floating-ui.dom.browser.min-04af7d1d.js";import"./options-d4d63b36.js";import"./classNames-9011e307.js";import"./validationErrors.component-7077216a.js";import"./statusWrapper.component-af0746af.js";import"./spinner.component-6fee5c63.js";import"./useContentMemo-75732a9d.js";import"./index-742b7287.js";const m=[{label:"Colours",options:[{id:1,content:"ocean"},{id:2,content:"blue"},{id:3,content:"purple"},{id:4,content:"red"},{id:5,content:"orange"},{id:6,content:"yellow"},{id:7,content:"green"},{id:8,content:"forest"},{id:9,content:"slate"},{id:10,content:"silver"}]},{label:"Flavours",options:[{id:11,content:"vanilla"},{id:12,content:"chocolate"},{id:13,content:"strawberry"}]}],g=m[0].options,Se={title:"Components/Select",component:c,parameters:{docs:{description:{component:"meta"}}}},b={args:{options:m},render:t=>{const{formProp:e,formState:n}=S();return r("div",{style:{height:"20rem"},children:[o(c,{bind:e("value").bind(),...t}),r("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",n==null?void 0:n.value]})]})}},y={...b,play:async({canvasElement:t})=>{const e=s(t),n=e.getByRole("combobox");d.click(n);const a=await v(()=>e.getByText("blue"));d.click(a);const l=e.getByTestId("result");await v(()=>i(l).toHaveTextContent("Current value: 2"))}},w={render:()=>o("div",{style:{width:"100%",height:"20rem"},children:o(c,{options:m,disabled:!0})}),play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeDisabled()}},B={render:()=>o("div",{style:{width:"100%",height:"20rem"},children:o(ne,{options:g})}),play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible()}},x={render:()=>{var n;const{formProp:t,formState:e}=S({value:[1,3,5]});return r("div",{style:{width:"100%",height:"20rem"},children:[o(ee,{options:g,bind:t("value").bind()}),r("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",(n=e==null?void 0:e.value)==null?void 0:n.join(", ")]})]})},play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible();const n=s(t).getByTestId("result");i(n).toHaveTextContent("Current value: 1, 3, 5");const a=s(t).getByRole("button",{name:"Remove ocean"});d.click(a),await v(()=>i(n).toHaveTextContent("Current value: 3, 5"))}},T={...b,render:()=>{const{formProp:t,formState:e}=S(),[n,a]=Z.useState(g),l=u=>{const p=n.length+1,h=[...n,{id:p,content:u,wasCreated:!0}];return a(h),p};return r("div",{style:{height:"20rem"},children:[o(c,{allowCreate:!0,bind:t("value").bind(),options:n,onOptionCreated:l}),r("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible(),d.type(e,"New item"),d.keyboard("{Enter}");const n=s(t).getByTestId("result");await v(()=>i(n).toHaveTextContent(`Current value: ${g.length+1}`))}},E={...b,render:()=>{var u;const{formProp:t,formState:e}=S(),[n,a]=Z.useState(g),l=p=>{const h=n.length+1,te=[...n,{id:h,content:p,wasCreated:!0}];return a(te),h};return r("div",{style:{height:"20rem"},children:[o(ee,{allowCreate:!0,bind:t("value").bind(),options:n,onOptionCreated:l}),r("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",(u=e==null?void 0:e.value)==null?void 0:u.join(", ")]})]})},play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible();const n=s(t).getByTestId("result");d.type(e,"New item 1"),d.keyboard("{Enter}");const a=g.length+1;await v(()=>i(n).toHaveTextContent(`Current value: ${a}`)),d.type(s(t).getByRole("combobox"),"New item 2"),d.keyboard("{Enter}");const l=a+1;await v(()=>i(n).toHaveTextContent(`Current value: ${a}, ${l}`)),d.type(s(t).getByRole("combobox"),"New item 3"),d.keyboard("{Enter}");const u=l+1;await v(()=>i(n).toHaveTextContent(`Current value: ${a}, ${l}, ${u}`))}},C={...b,render:t=>r("div",{children:[o("h2",{children:"Small"}),o(c,{options:t.options,required:!0,label:"Single select",displaySize:"small","data-testid":"wrapper"}),o("h2",{children:"Medium"}),o(c,{options:t.options,required:!0,label:"Single select",displaySize:"medium","data-testid":"wrapper"}),o("h2",{children:"Large"}),o(c,{options:t.options,required:!0,label:"Single select",displaySize:"large","data-testid":"wrapper"})]}),play:async({canvasElement:t})=>{const e=s(t),[n,a,l]=e.getAllByTestId("wrapper");i(n).toHaveAttribute("data-size","small"),i(a).toHaveAttribute("data-size","medium"),i(l).toHaveAttribute("data-size","large")}},f={...b,render:()=>r("div",{children:[r("div",{"data-testid":"both",children:[o("h2",{children:"Validation mode - both"}),o(c,{validationMode:"both",validationErrorMessages:["This field is required"],options:m,required:!0})]}),r("div",{"data-testid":"icon",children:[o("h2",{children:"Validation mode - icon only"}),o(c,{validationMode:"icon",validationErrorMessages:["This field is required"],options:m,required:!0})]}),r("div",{"data-testid":"message",children:[o("h2",{children:"Validation mode - message only"}),o(c,{validationMode:"message",validationErrorMessages:["This field is required"],options:m,required:!0})]}),r("div",{"data-testid":"left-icon",children:[o("h2",{children:"Icon on left"}),o(c,{validationMode:"icon",validationErrorMessages:["This field is required"],options:m,required:!0,statusPosition:"left"})]})]}),play:async({canvasElement:t})=>{const e=s(t),n=e.getByTestId("both");i(s(n).getByRole("status")).toBeVisible(),i(s(n).getByLabelText("Error messages")).toBeVisible();const a=e.getByTestId("icon");i(s(a).getByRole("status")).toBeVisible();const l=e.getByTestId("message");i(s(l).getByLabelText("Error messages")).toBeVisible();const u=e.getByTestId("left-icon"),p=s(u).getByRole("status");i(p).toBeVisible(),i(p).toHaveAttribute("data-position","left")}};var M,O,H,R,V;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(O=y.parameters)==null?void 0:O.docs)==null?void 0:H.source},description:{story:"stories",...(V=(R=y.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var I,q,L;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        <NativeSelect options={flatOptions} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLSelectElement>('combobox');
    expect(input).toBeVisible();
  }
}`,...($=(z=B.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var F,N,P;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        <MultiSelect options={flatOptions} bind={formProp('value').bind()} />
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
}`,...(P=(N=x.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var A,j,D;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
        <MultiSelect allowCreate={true} bind={formProp('value').bind()} options={options} onOptionCreated={onOptionCreated} />
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
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Me=["Default","Disabled","Native","Multi","Create","CreateMulti","Sizes","ValidationError"];export{T as Create,E as CreateMulti,y as Default,w as Disabled,x as Multi,B as Native,C as Sizes,f as ValidationError,Me as __namedExportsOrder,Se as default};
//# sourceMappingURL=select.stories-e19278dd.js.map
