import{j as o,a as t,F as q}from"./jsx-runtime-63e4a166.js";import{a as p}from"./chunk-OPEUWD42-a3b45fd8.js";import{w as l,e as n,u as j,a as _}from"./index-3ffc2e85.js";import{I as B}from"./config.context-240cf8e4.js";import{B as e}from"./button.component-ca199a26.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./classNames-9011e307.js";import"./spinner.component-6fee5c63.js";const ot={title:"Components/Button",component:e,args:{children:"Click me please"},parameters:{docs:{description:{component:"metadata"}}}},r={render:i=>t(e,{...i})},d={...r,args:{onClick:p("onClick")},play:async({args:i,canvasElement:s})=>{const a=l(s).getByRole("button");n(a).toHaveTextContent(i.children),await j.click(a),await _(()=>n(i.onClick).toHaveBeenCalled())}},u={...r,render:()=>o("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t(e,{displaySize:"small",children:"Small"}),t(e,{children:"Medium"}),t(e,{displaySize:"large",children:"Large"})]})},m={...r,render:()=>o(q,{children:[t("h3",{children:"Status - Normal"}),o("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t(e,{displayStyle:"primary",children:"Primary"}),t(e,{displayStyle:"secondary",children:"Secondary"}),t(e,{displayStyle:"outline",children:"Outline"})]}),t("h3",{children:"Status - Positive"}),o("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t(e,{displayStyle:"primary",displayStatus:"positive",children:"Primary"}),t(e,{displayStyle:"secondary",displayStatus:"positive",children:"Secondary"}),t(e,{displayStyle:"outline",displayStatus:"positive",children:"Outline"})]}),t("h3",{children:"Status - Negative"}),o("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t(e,{displayStyle:"primary",displayStatus:"negative",children:"Primary"}),t(e,{displayStyle:"secondary",displayStatus:"negative",children:"Secondary"}),t(e,{displayStyle:"outline",displayStatus:"negative",children:"Outline"})]}),t("h3",{children:"Status - Warning"}),o("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t(e,{displayStyle:"primary",displayStatus:"warning",children:"Primary"}),t(e,{displayStyle:"secondary",displayStatus:"warning",children:"Secondary"}),t(e,{displayStyle:"outline",displayStatus:"warning",children:"Outline"})]}),t("h3",{children:"Status - Info"}),o("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t(e,{displayStyle:"primary",displayStatus:"info",children:"Primary"}),t(e,{displayStyle:"secondary",displayStatus:"info",children:"Secondary"}),t(e,{displayStyle:"outline",displayStatus:"info",children:"Outline"})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1"}}},g={...r,args:{onClick:p("onClick"),leftOverlay:t(B,{title:"left-icon-test"})},play:async({args:i,canvasElement:s})=>{const a=l(s).getByRole("button"),y=l(a).getByTitle("left-icon-test");n(a).toHaveTextContent(i.children),n(y).toBeVisible(),await j.click(a),await _(()=>n(i.onClick).toHaveBeenCalled())}},S={...r,args:{onClick:p("onClick"),leftOverlay:t(B,{title:"left-icon-test"}),disabled:!0},play:async({args:i,canvasElement:s})=>{const a=l(s).getByRole("button");n(a).toHaveTextContent(i.children),n(a).toBeDisabled(),n(a).toHaveAttribute("data-disabled","true")}},v={...r,args:{onClick:p("onClick"),leftOverlay:t(B,{title:"left-icon-test"}),pending:!0},play:async({args:i,canvasElement:s})=>{const a=l(s).getByRole("button"),y=l(a).getByRole("status");n(a.lastChild).toContainElement(y),n(a).toHaveTextContent(i.children),n(a).toBeDisabled(),n(a).toHaveAttribute("data-disabled","true"),n(y).toBeVisible()}},h={...r,args:{onClick:p("onClick"),leftOverlay:t(B,{title:"left-icon-test"}),pending:!0,pendingPosition:"left"},play:async({canvasElement:i})=>{const c=l(i).getByRole("button"),a=l(c).getByRole("status");n(c.firstChild).toContainElement(a)}};var f,b,x,C,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: action('onClick')
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent((args.children as string));
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:"stories",...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.description}}};var k,P,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    return <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button displaySize="small">Small</Button>
        <Button>Medium</Button>
        <Button displaySize="large">Large</Button>
      </div>;
  }
}`,...(I=(P=u.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var T,O,E;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    return <>
        <h3>Status - Normal</h3>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary">Primary</Button>
          <Button displayStyle="secondary">Secondary</Button>
          <Button displayStyle="outline">Outline</Button>
        </div>
        <h3>Status - Positive</h3>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary" displayStatus="positive">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="positive">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="positive">
            Outline
          </Button>
        </div>
        <h3>Status - Negative</h3>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary" displayStatus="negative">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="negative">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="negative">
            Outline
          </Button>
        </div>
        <h3>Status - Warning</h3>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary" displayStatus="warning">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="warning">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="warning">
            Outline
          </Button>
        </div>
        <h3>Status - Info</h3>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary" displayStatus="info">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="info">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="info">
            Outline
          </Button>
        </div>
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1'
    }
  }
}`,...(E=(O=m.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var H,R,A;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: action('onClick'),
    leftOverlay: <ImPencil title="left-icon-test" />
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const icon = within(button).getByTitle('left-icon-test');
    expect(button).toHaveTextContent((args.children as string));
    expect(icon).toBeVisible();
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
}`,...(A=(R=g.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,L,z;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: action('onClick'),
    leftOverlay: <ImPencil title="left-icon-test" />,
    disabled: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent((args.children as string));
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled', 'true');
  }
}`,...(z=(L=S.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var F,V,M;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: action('onClick'),
    leftOverlay: <ImPencil title="left-icon-test" />,
    pending: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const spinner = within(button).getByRole('status');
    expect(button.lastChild).toContainElement((spinner as HTMLElement));
    expect(button).toHaveTextContent((args.children as string));
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled', 'true');
    expect(spinner).toBeVisible();
  }
}`,...(M=(V=v.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var N,Q,W;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: action('onClick'),
    leftOverlay: <ImPencil title="left-icon-test" />,
    pending: true,
    pendingPosition: 'left'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const spinner = within(button).getByRole('status');
    expect(button.firstChild).toContainElement((spinner as HTMLElement));
  }
}`,...(W=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const rt=["Default","Sizes","Styles","WithIcons","Disabled","Pending","PendingOnLeft"];export{d as Default,S as Disabled,v as Pending,h as PendingOnLeft,u as Sizes,m as Styles,g as WithIcons,rt as __namedExportsOrder,ot as default};
//# sourceMappingURL=button.stories-7a12a4aa.js.map
