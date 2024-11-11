import{a as l,j as a}from"./jsx-runtime-eae7a151.js";import{w as d,e as t,u as p}from"./index-61f1305c.js";import{A as $}from"./index.esm-779070c0.js";import{B as ee}from"./index.esm-5b2e84b1.js";import{I as o}from"./input.component-ed5859e7.js";import{u as te}from"./label.component-efbca678.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-4dce63e4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./config.context-108849f1.js";import"./inputWrapper.component-231b3b00.js";import"./classNames-9011e307.js";import"./statusWrapper.component-8ffbac8d.js";import"./spinner.component-b77c4686.js";import"./validationErrors.component-d4c1ec01.js";import"./useDidUpdateEffect-3fc0eff1.js";import"./extends-98964cd2.js";import"./index-47240d79.js";import"./index-07d1f67e.js";const we={title:"Components/Input",component:o,args:{type:"text",placeholder:"Type here..."},parameters:{docs:{description:{component:"Inputs with options to track errors, pending data and so on."}}}},b={args:{type:"text"},play:async({canvasElement:s})=>{const n=d(s).getByRole("textbox");t(n).toBeInTheDocument()}},m={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[a(o,{label:"Default"}),a(o,{label:"Required",required:!0})]}),play:async({canvasElement:s})=>{const e=d(s),n=e.getByLabelText("Default"),r=e.getByLabelText("Required *");t(n).toBeInTheDocument(),t(r).toBeInTheDocument()}},y={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a(o,{label:"Small Input",displaySize:"small",required:!0}),a(o,{label:"Medium Input",required:!0}),a(o,{label:"Large Input",displaySize:"large",required:!0})]}),play:async({canvasElement:s})=>{const e=d(s),n=e.getByLabelText("Small Input *"),r=e.getByLabelText("Medium Input *"),i=e.getByLabelText("Large Input *");t(n.getAttribute("data-size")).toEqual("small"),t(r.getAttribute("data-size")).toEqual(null),t(i.getAttribute("data-size")).toEqual("large")}},v={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[a(o,{label:"Left Overlay",leftOverlay:a(ee,{size:22,"data-testid":"search-icon"})}),a(o,{label:"Right Overlay",rightOverlay:"ml"}),a(o,{label:"Both overlays",leftOverlay:a($,{size:22,"data-testid":"thunderbolt-icon"}),rightOverlay:"kw/h"})]}),play:async({canvasElement:s})=>{const e=d(s),n=e.getByTestId("search-icon"),r=e.getByText("kw/h"),i=e.getByTestId("thunderbolt-icon"),u=e.getByText("ml");t(n).toBeVisible(),t(r).toBeVisible(),t(i).toBeVisible(),t(u).toBeVisible()}},I={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a(o,{label:"Default",pending:!0}),a(o,{label:"Icon on left",pending:!0,statusPosition:"left"})]}),play:async({canvasElement:s})=>{const n=d(s).getAllByRole("status");t(n[0]).toBeVisible(),t(n[1]).toBeVisible()}},x={render:()=>a("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:a(o,{label:"Disabled",disabled:!0})}),play:async({canvasElement:s})=>{const n=d(s).getByRole("textbox");t(n).toHaveAttribute("disabled")}},g={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a(o,{label:"Validation mode - both",validationMode:"both",wrapperTestId:"both-validation",validationErrorMessages:["This field is required"]}),a(o,{label:"Validation mode - icon only",validationMode:"icon",validationErrorMessages:["This field is required"],wrapperTestId:"icon-validation"}),a(o,{label:"Validation mode - message only",validationMode:"message",validationErrorMessages:["This field is required"],wrapperTestId:"message-validation"}),a(o,{label:"Icon on left",validationMode:"icon",statusPosition:"left",validationErrorMessages:["This field is required"],wrapperTestId:"left-icon-validation"})]}),play:async({canvasElement:s})=>{const e=d(s),n=e.getAllByRole("status"),r=e.getAllByText("This field is required"),i=e.getByTestId("both-validation");t(i.getAttribute("data-error")).toBe("true"),t(n[0]).toBeVisible(),t(r[0]).toBeVisible();const u=e.getByTestId("icon-validation");t(u.getAttribute("data-error")).toBe("true"),t(n[1]).toBeVisible();const h=e.getByTestId("message-validation");t(h.getAttribute("data-error")).toBe("true"),t(r[1]).toBeVisible();const c=e.getByTestId("left-icon-validation");t(c.getAttribute("data-error")).toBe("true"),t(c.getAttribute("data-left-overlay")).toBe("true"),t(n[2]).toBeVisible()}},B={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a(o,{label:"Number",type:"number","data-testid":"number-input"}),a(o,{label:"Password",type:"password","data-testid":"password-input"}),a(o,{label:"Email",type:"email","data-testid":"email-input"}),a(o,{label:"Telephone number",type:"tel","data-testid":"telephone-input"})]}),play:async({canvasElement:s})=>{const e=d(s),n=e.getByTestId("number-input");t(n).toBeInTheDocument(),t(n.getAttribute("type")).toBe("number"),p.type(n,"no txt only numb"),t(n.value).not.toEqual("no txt only numb"),p.type(n,"42"),t(n.value).toEqual("42");const r=e.getByTestId("password-input");t(r).toBeInTheDocument(),t(r.getAttribute("type")).toBe("password"),p.type(r,"password123"),t(r.value).toEqual("password123");const i=e.getByTestId("email-input");t(i).toBeInTheDocument(),t(i.getAttribute("type")).toBe("email"),p.type(i,"helloworld@rocketmakers.com"),t(i.value).toEqual("helloworld@rocketmakers.com");const u=e.getByTestId("telephone-input");t(u).toBeInTheDocument(),t(u.getAttribute("type")).toBe("tel"),p.type(u,"01189998819991197253")}},T={render:()=>{const{formProp:s,formState:e}=te({text:"",number:0,debounce:""});return l("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l("div",{children:[a(o,{label:"Bound - text",type:"text",bind:s("text").bind()}),l("ul",{children:[l("li",{"data-testid":"bound-result",children:["Value: ",e==null?void 0:e.text]}),l("li",{"data-testid":"bound-type",children:["Type: ",typeof(e==null?void 0:e.text)]})]})]}),l("div",{children:[a(o,{label:"Bound - number",type:"number",bind:s("number").bind()}),l("ul",{children:[l("li",{"data-testid":"number-result",children:["Value: ",e==null?void 0:e.number]}),l("li",{"data-testid":"number-type",children:["Type: ",typeof(e==null?void 0:e.number)]})]})]}),l("div",{children:[a(o,{label:"Bound - debounced text (200ms)",type:"text",bind:s("debounce").bind(),delay:200}),l("ul",{children:[l("li",{"data-testid":"debounce-result",children:["Value: ",e==null?void 0:e.debounce]}),l("li",{"data-testid":"debounce-type",children:["Type: ",typeof(e==null?void 0:e.debounce)]})]})]})]})},play:async({canvasElement:s})=>{const e=d(s),n=e.getByLabelText("Bound - text"),r=e.getByLabelText("Bound - number"),i=e.getByLabelText("Bound - debounced text (200ms)"),u=e.getByTestId("bound-result"),h=e.getByTestId("number-result"),c=e.getByTestId("debounce-result"),X=e.getByTestId("bound-type"),Y=e.getByTestId("number-type"),Z=e.getByTestId("debounce-type");p.type(n,"Hello, bound world"),p.type(r,"42"),p.type(i,"Hello, bound world (but slower)"),t(u.textContent).toBe("Value: Hello, bound world"),t(h.textContent).toBe("Value: 42"),setTimeout(()=>{t(c.textContent).toBe("Value: Hello, bound world (but slower)")},500),t(X.textContent).toBe("Type: string"),t(Y.textContent).toBe("Type: number"),setTimeout(()=>{t(Z.textContent).toBe("Type: string")},500)}};var f,E,w;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=(E=b.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var V,D,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(D=m.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var A,L,M;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(L=y.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var R,O,H;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(O=v.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var S,z,k;I.parameters={...I.parameters,docs:{...(S=I.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(z=I.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var C,P,F;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(P=x.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var j,N,_;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(N=g.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var G,J,K;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    const numberInput = (canvas.getByTestId('number-input') as HTMLInputElement);
    expect(numberInput).toBeInTheDocument();
    expect(numberInput.getAttribute('type')).toBe('number');
    userEvent.type(numberInput, 'no txt only numb');
    expect(numberInput.value).not.toEqual('no txt only numb');
    userEvent.type(numberInput, '42');
    expect(numberInput.value).toEqual('42');

    // Password Input
    const passwordInput = (canvas.getByTestId('password-input') as HTMLInputElement);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.getAttribute('type')).toBe('password');
    userEvent.type(passwordInput, 'password123');
    expect(passwordInput.value).toEqual('password123');

    // Email Input
    const emailInput = (canvas.getByTestId('email-input') as HTMLInputElement);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.getAttribute('type')).toBe('email');
    userEvent.type(emailInput, 'helloworld@rocketmakers.com');
    expect(emailInput.value).toEqual('helloworld@rocketmakers.com');

    // Telephone Input
    const telephoneInput = (canvas.getByTestId('telephone-input') as HTMLInputElement);
    expect(telephoneInput).toBeInTheDocument();
    expect(telephoneInput.getAttribute('type')).toBe('tel');
    userEvent.type(telephoneInput, '01189998819991197253');
  }
}`,...(K=(J=B.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
    const boundInput = (canvas.getByLabelText('Bound - text') as HTMLInputElement);
    const numberInput = (canvas.getByLabelText('Bound - number') as HTMLInputElement);
    const debounceInput = (canvas.getByLabelText('Bound - debounced text (200ms)') as HTMLInputElement);

    // Input results
    const boundResult = canvas.getByTestId('bound-result');
    const numberResult = canvas.getByTestId('number-result');
    const debounceResult = canvas.getByTestId('debounce-result');

    // Input Types
    const boundType = canvas.getByTestId('bound-type');
    const numberType = canvas.getByTestId('number-type');
    const debounceType = canvas.getByTestId('debounce-type');

    // Test Bound Text Area
    userEvent.type(boundInput, 'Hello, bound world');
    userEvent.type(numberInput, '42');
    userEvent.type(debounceInput, 'Hello, bound world (but slower)');

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
}`,...(W=(U=T.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const Ve=["Default","Labelled","Sizes","Overlay","Pending","Disabled","ValidationError","InputTypes","Bound"];export{T as Bound,b as Default,x as Disabled,B as InputTypes,m as Labelled,v as Overlay,I as Pending,y as Sizes,g as ValidationError,Ve as __namedExportsOrder,we as default};
