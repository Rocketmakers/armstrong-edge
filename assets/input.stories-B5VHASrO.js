import{j as t}from"./jsx-runtime-Cl2eCCBe.js";import{w as u,e as n,u as d}from"./classNames-TtGgGdEV.js";import{A as Z}from"./index.esm-S7WwGEFG.js";import{B as $}from"./index.esm-D7CEaj-T.js";import{I as s}from"./input.component-gtL_kyBd.js";import{u as ee}from"./label.component-D06KPTBy.js";import"./index-Cqyox1Tj.js";import"./config.context-C5a6Dfld.js";import"./inputWrapper.component-CzAv4_Mf.js";import"./statusWrapper.component-BjytHTN6.js";import"./spinner.component-CCnqzpIN.js";import"./validationErrors.component-CgOcudhd.js";import"./useDidUpdateEffect-CptJwHFD.js";import"./radixDialog-CBrwtQa5.js";import"./extends-CF3RwP-h.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";const Ie={title:"Components/Input",component:s,args:{type:"text",placeholder:"Type here..."},parameters:{docs:{description:{component:"Inputs with options to track errors, pending data and so on."}}}},c={args:{type:"text"},play:async({canvasElement:o})=>{const a=u(o).getByRole("textbox");n(a).toBeInTheDocument()}},b={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[t.jsx(s,{label:"Default"}),t.jsx(s,{label:"Required",required:!0})]}),play:async({canvasElement:o})=>{const e=u(o),a=e.getByLabelText("Default"),l=e.getByLabelText("Required *");n(a).toBeInTheDocument(),n(l).toBeInTheDocument()}},m={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(s,{label:"Small Input",displaySize:"small",required:!0}),t.jsx(s,{label:"Medium Input",required:!0}),t.jsx(s,{label:"Large Input",displaySize:"large",required:!0})]}),play:async({canvasElement:o})=>{const e=u(o),a=e.getByLabelText("Small Input *"),l=e.getByLabelText("Medium Input *"),i=e.getByLabelText("Large Input *");n(a.getAttribute("data-size")).toEqual("small"),n(l.getAttribute("data-size")).toEqual(null),n(i.getAttribute("data-size")).toEqual("large")}},y={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[t.jsx(s,{label:"Left Overlay",leftOverlay:t.jsx($,{size:22,"data-testid":"search-icon"})}),t.jsx(s,{label:"Right Overlay",rightOverlay:"ml"}),t.jsx(s,{label:"Both overlays",leftOverlay:t.jsx(Z,{size:22,"data-testid":"thunderbolt-icon"}),rightOverlay:"kw/h"})]}),play:async({canvasElement:o})=>{const e=u(o),a=e.getByTestId("search-icon"),l=e.getByText("kw/h"),i=e.getByTestId("thunderbolt-icon"),r=e.getByText("ml");n(a).toBeVisible(),n(l).toBeVisible(),n(i).toBeVisible(),n(r).toBeVisible()}},x={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(s,{label:"Default",pending:!0}),t.jsx(s,{label:"Icon on left",pending:!0,statusPosition:"left"})]}),play:async({canvasElement:o})=>{const a=u(o).getAllByRole("status");n(a[0]).toBeVisible(),n(a[1]).toBeVisible()}},v={render:()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:t.jsx(s,{label:"Disabled",disabled:!0})}),play:async({canvasElement:o})=>{const a=u(o).getByRole("textbox");n(a).toHaveAttribute("disabled")}},I={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(s,{label:"Validation mode - both",validationMode:"both",wrapperTestId:"both-validation",validationErrorMessages:["This field is required"]}),t.jsx(s,{label:"Validation mode - icon only",validationMode:"icon",validationErrorMessages:["This field is required"],wrapperTestId:"icon-validation"}),t.jsx(s,{label:"Validation mode - message only",validationMode:"message",validationErrorMessages:["This field is required"],wrapperTestId:"message-validation"}),t.jsx(s,{label:"Icon on left",validationMode:"icon",statusPosition:"left",validationErrorMessages:["This field is required"],wrapperTestId:"left-icon-validation"})]}),play:async({canvasElement:o})=>{const e=u(o),a=e.getAllByRole("status"),l=e.getAllByText("This field is required"),i=e.getByTestId("both-validation");n(i.getAttribute("data-error")).toBe("true"),n(a[0]).toBeVisible(),n(l[0]).toBeVisible();const r=e.getByTestId("icon-validation");n(r.getAttribute("data-error")).toBe("true"),n(a[1]).toBeVisible();const T=e.getByTestId("message-validation");n(T.getAttribute("data-error")).toBe("true"),n(l[1]).toBeVisible();const p=e.getByTestId("left-icon-validation");n(p.getAttribute("data-error")).toBe("true"),n(p.getAttribute("data-left-overlay")).toBe("true"),n(a[2]).toBeVisible()}},g={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(s,{label:"Number",type:"number","data-testid":"number-input"}),t.jsx(s,{label:"Password",type:"password","data-testid":"password-input"}),t.jsx(s,{label:"Email",type:"email","data-testid":"email-input"}),t.jsx(s,{label:"Telephone number",type:"tel","data-testid":"telephone-input"})]}),play:async({canvasElement:o})=>{const e=u(o),a=e.getByTestId("number-input");n(a).toBeInTheDocument(),n(a.getAttribute("type")).toBe("number"),await d.type(a,"no txt only numb"),n(a.value).not.toEqual("no txt only numb"),await d.type(a,"42"),n(a.value).toEqual("42");const l=e.getByTestId("password-input");n(l).toBeInTheDocument(),n(l.getAttribute("type")).toBe("password"),await d.type(l,"password123"),n(l.value).toEqual("password123");const i=e.getByTestId("email-input");n(i).toBeInTheDocument(),n(i.getAttribute("type")).toBe("email"),await d.type(i,"helloworld@rocketmakers.com"),n(i.value).toEqual("helloworld@rocketmakers.com");const r=e.getByTestId("telephone-input");n(r).toBeInTheDocument(),n(r.getAttribute("type")).toBe("tel"),await d.type(r,"01189998819991197253"),n(r.value).toEqual("01189998819991197253")}},B={render:()=>{const{formProp:o,formState:e}=ee({text:"",number:0,debounce:""});return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsxs("div",{children:[t.jsx(s,{label:"Bound - text",type:"text",bind:o("text").bind()}),t.jsxs("ul",{children:[t.jsxs("li",{"data-testid":"bound-result",children:["Value: ",e==null?void 0:e.text]}),t.jsxs("li",{"data-testid":"bound-type",children:["Type: ",typeof(e==null?void 0:e.text)]})]})]}),t.jsxs("div",{children:[t.jsx(s,{label:"Bound - number",type:"number",bind:o("number").bind()}),t.jsxs("ul",{children:[t.jsxs("li",{"data-testid":"number-result",children:["Value: ",e==null?void 0:e.number]}),t.jsxs("li",{"data-testid":"number-type",children:["Type: ",typeof(e==null?void 0:e.number)]})]})]}),t.jsxs("div",{children:[t.jsx(s,{label:"Bound - debounced text (200ms)",type:"text",bind:o("debounce").bind(),delay:200}),t.jsxs("ul",{children:[t.jsxs("li",{"data-testid":"debounce-result",children:["Value: ",e==null?void 0:e.debounce]}),t.jsxs("li",{"data-testid":"debounce-type",children:["Type: ",typeof(e==null?void 0:e.debounce)]})]})]})]})},play:async({canvasElement:o})=>{const e=u(o),a=e.getByLabelText("Bound - text"),l=e.getByLabelText("Bound - number"),i=e.getByLabelText("Bound - debounced text (200ms)"),r=e.getByTestId("bound-result"),T=e.getByTestId("number-result"),p=e.getByTestId("debounce-result"),W=e.getByTestId("bound-type"),X=e.getByTestId("number-type"),Y=e.getByTestId("debounce-type");await d.type(a,"Hello, bound world"),await d.type(l,"42"),await d.type(i,"Hello, bound world (but slower)"),n(r.textContent).toBe("Value: Hello, bound world"),n(T.textContent).toBe("Value: 42"),setTimeout(()=>{n(p.textContent).toBe("Value: Hello, bound world (but slower)")},500),n(W.textContent).toBe("Type: string"),n(X.textContent).toBe("Type: number"),setTimeout(()=>{n(Y.textContent).toBe("Type: string")},500)}};var h,f,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'text'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    expect(input).toBeInTheDocument();
  }
}`,...(w=(f=c.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var E,V,j;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }}>
        <Input label="Default" />
        <Input label="Required" required={true} />
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
}`,...(j=(V=b.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var D,q,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Input label={'Small Input'} displaySize="small" required={true} />
        <Input label={'Medium Input'} required={true} />
        <Input label={'Large Input'} displaySize="large" required={true} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallInput = canvas.getByLabelText('Small Input *');
    const mediumInput = canvas.getByLabelText('Medium Input *');
    const largeInput = canvas.getByLabelText('Large Input *');
    expect(smallInput.getAttribute('data-size')).toEqual('small');
    expect(mediumInput.getAttribute('data-size')).toEqual(null);
    expect(largeInput.getAttribute('data-size')).toEqual('large');
  }
}`,...(A=(q=m.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var L,M,R;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }}>
        <Input label={'Left Overlay'} leftOverlay={<BiSearch size={22} data-testid={'search-icon'} />} />
        <Input label={'Right Overlay'} rightOverlay="ml" />
        <Input label={'Both overlays'} leftOverlay={<AiFillThunderbolt size={22} data-testid={'thunderbolt-icon'} />} rightOverlay="kw/h" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const searchIcon = canvas.getByTestId('search-icon');
    const rightOverlayText = canvas.getByText('kw/h');
    const thunderboltIcon = canvas.getByTestId('thunderbolt-icon');
    const thunderboltOverlayText = canvas.getByText('ml');
    expect(searchIcon).toBeVisible();
    expect(rightOverlayText).toBeVisible();
    expect(thunderboltIcon).toBeVisible();
    expect(thunderboltOverlayText).toBeVisible();
  }
}`,...(R=(M=y.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var O,H,S;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Input label={'Default'} pending={true} />
        <Input label={'Icon on left'} pending={true} statusPosition="left" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const spinners = canvas.getAllByRole('status');
    // const defaultInput = canvas.getByLabelText('Default');

    expect(spinners[0]).toBeVisible();
    expect(spinners[1]).toBeVisible();
  }
}`,...(S=(H=x.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var z,k,C;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Input label="Disabled" disabled={true} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    expect(input).toHaveAttribute('disabled');
  }
}`,...(C=(k=v.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var P,F,N;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Input label={'Validation mode - both'} validationMode="both" wrapperTestId={'both-validation'} validationErrorMessages={['This field is required']} />
        <Input label={'Validation mode - icon only'} validationMode="icon" validationErrorMessages={['This field is required']} wrapperTestId={'icon-validation'} />
        <Input label={'Validation mode - message only'} validationMode="message" validationErrorMessages={['This field is required']} wrapperTestId={'message-validation'} />
        <Input label={'Icon on left'} validationMode="icon" statusPosition="left" validationErrorMessages={['This field is required']} wrapperTestId={'left-icon-validation'} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const statusIcons = canvas.getAllByRole('status');
    const validationMessages = canvas.getAllByText('This field is required');

    // Validation mode - both
    const bothValidation = canvas.getByTestId('both-validation');
    expect(bothValidation.getAttribute('data-error')).toBe('true');
    expect(statusIcons[0]).toBeVisible();
    expect(validationMessages[0]).toBeVisible();

    // Validation mode - icon only
    const iconValidation = canvas.getByTestId('icon-validation');
    expect(iconValidation.getAttribute('data-error')).toBe('true');
    expect(statusIcons[1]).toBeVisible();

    // Validation mode - message only
    const messageValidation = canvas.getByTestId('message-validation');
    expect(messageValidation.getAttribute('data-error')).toBe('true');
    expect(validationMessages[1]).toBeVisible();

    // Icon on left
    const leftIconValidation = canvas.getByTestId('left-icon-validation');
    expect(leftIconValidation.getAttribute('data-error')).toBe('true');
    expect(leftIconValidation.getAttribute('data-left-overlay')).toBe('true');
    expect(statusIcons[2]).toBeVisible();
  }
}`,...(N=(F=I.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var _,G,J;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Input label={'Number'} type="number" data-testid="number-input" />
        <Input label={'Password'} type="password" data-testid="password-input" />
        <Input label={'Email'} type="email" data-testid="email-input" />
        <Input label={'Telephone number'} type="tel" data-testid="telephone-input" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Number Input
    const numberInput = canvas.getByTestId('number-input') as HTMLInputElement;
    expect(numberInput).toBeInTheDocument();
    expect(numberInput.getAttribute('type')).toBe('number');
    await userEvent.type(numberInput, 'no txt only numb');
    expect(numberInput.value).not.toEqual('no txt only numb');
    await userEvent.type(numberInput, '42');
    expect(numberInput.value).toEqual('42');

    // Password Input
    const passwordInput = canvas.getByTestId('password-input') as HTMLInputElement;
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.getAttribute('type')).toBe('password');
    await userEvent.type(passwordInput, 'password123');
    expect(passwordInput.value).toEqual('password123');

    // Email Input
    const emailInput = canvas.getByTestId('email-input') as HTMLInputElement;
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.getAttribute('type')).toBe('email');
    await userEvent.type(emailInput, 'helloworld@rocketmakers.com');
    expect(emailInput.value).toEqual('helloworld@rocketmakers.com');

    // Telephone Input
    const telephoneInput = canvas.getByTestId('telephone-input') as HTMLInputElement;
    expect(telephoneInput).toBeInTheDocument();
    expect(telephoneInput.getAttribute('type')).toBe('tel');
    await userEvent.type(telephoneInput, '01189998819991197253');
    expect(telephoneInput.value).toEqual('01189998819991197253');
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const {
      formProp,
      formState
    } = useForm({
      text: '',
      number: 0,
      debounce: ''
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <Input label={'Bound - text'} type="text" bind={formProp('text').bind()} />
          <ul>
            <li data-testid={'bound-result'}>Value: {formState?.text}</li>
            <li data-testid={'bound-type'}>Type: {typeof formState?.text}</li>
          </ul>
        </div>
        <div>
          <Input label={'Bound - number'} type="number" bind={formProp('number').bind()} />
          <ul>
            <li data-testid={'number-result'}>Value: {formState?.number}</li>
            <li data-testid={'number-type'}>Type: {typeof formState?.number}</li>
          </ul>
        </div>
        <div>
          <Input label={'Bound - debounced text (200ms)'} type="text" bind={formProp('debounce').bind()} delay={200} />
          <ul>
            <li data-testid={'debounce-result'}>Value: {formState?.debounce}</li>
            <li data-testid={'debounce-type'}>Type: {typeof formState?.debounce}</li>
          </ul>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Get the Inputs
    const boundInput = canvas.getByLabelText('Bound - text') as HTMLInputElement;
    const numberInput = canvas.getByLabelText('Bound - number') as HTMLInputElement;
    const debounceInput = canvas.getByLabelText('Bound - debounced text (200ms)') as HTMLInputElement;

    // Input results
    const boundResult = canvas.getByTestId('bound-result');
    const numberResult = canvas.getByTestId('number-result');
    const debounceResult = canvas.getByTestId('debounce-result');

    // Input Types
    const boundType = canvas.getByTestId('bound-type');
    const numberType = canvas.getByTestId('number-type');
    const debounceType = canvas.getByTestId('debounce-type');

    // Test Bound Text Area
    await userEvent.type(boundInput, 'Hello, bound world');
    await userEvent.type(numberInput, '42');
    await userEvent.type(debounceInput, 'Hello, bound world (but slower)');

    // Check that the form state values match the typed input
    expect(boundResult.textContent).toBe('Value: Hello, bound world');
    expect(numberResult.textContent).toBe('Value: 42');
    setTimeout(() => {
      expect(debounceResult.textContent).toBe('Value: Hello, bound world (but slower)');
    }, 500);

    // Check that the input types are correct
    expect(boundType.textContent).toBe('Type: string');
    expect(numberType.textContent).toBe('Type: number');
    setTimeout(() => {
      expect(debounceType.textContent).toBe('Type: string');
    }, 500);
  }
}`,...(U=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ge=["Default","Labelled","Sizes","Overlay","Pending","Disabled","ValidationError","InputTypes","Bound"];export{B as Bound,c as Default,v as Disabled,g as InputTypes,b as Labelled,y as Overlay,x as Pending,m as Sizes,I as ValidationError,ge as __namedExportsOrder,Ie as default};
