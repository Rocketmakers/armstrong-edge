import{j as t}from"./jsx-runtime-Cl2eCCBe.js";import{f as d,w as l,e as n,u as Q,a as W}from"./classNames-TtGgGdEV.js";import{I as x}from"./config.context-DSGy4VcJ.js";import{B as e}from"./button.component-CW9grZOW.js";import"./index-Cqyox1Tj.js";import"./spinner.component-GjtI7h28.js";const U={title:"Components/Button",component:e,args:{children:"Click me please"},parameters:{docs:{description:{component:"metadata"}}}},o={render:s=>t.jsx(e,{...s})},c={...o,args:{onClick:d()},play:async({args:s,canvasElement:i})=>{const a=l(i).getByRole("button");n(a).toHaveTextContent(s.children),await Q.click(a),await W(()=>n(s.onClick).toHaveBeenCalled())}},y={...o,render:()=>t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displaySize:"small",children:"Small"}),t.jsx(e,{children:"Medium"}),t.jsx(e,{displaySize:"large",children:"Large"})]})},u={...o,render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Status - Normal"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",children:"Outline"})]}),t.jsx("h3",{children:"Status - Positive"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",displayStatus:"positive",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",displayStatus:"positive",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",displayStatus:"positive",children:"Outline"})]}),t.jsx("h3",{children:"Status - Negative"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",displayStatus:"negative",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",displayStatus:"negative",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",displayStatus:"negative",children:"Outline"})]}),t.jsx("h3",{children:"Status - Warning"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",displayStatus:"warning",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",displayStatus:"warning",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",displayStatus:"warning",children:"Outline"})]}),t.jsx("h3",{children:"Status - Info"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",displayStatus:"info",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",displayStatus:"info",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",displayStatus:"info",children:"Outline"})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1"}}},m={...o,args:{onClick:d(),leftOverlay:t.jsx(x,{title:"left-icon-test"})},play:async({args:s,canvasElement:i})=>{const a=l(i).getByRole("button"),p=l(a).getByTitle("left-icon-test");n(a).toHaveTextContent(s.children),n(p).toBeVisible(),await Q.click(a),await W(()=>n(s.onClick).toHaveBeenCalled())}},g={...o,args:{onClick:d(),leftOverlay:t.jsx(x,{title:"left-icon-test"}),disabled:!0},play:async({args:s,canvasElement:i})=>{const a=l(i).getByRole("button");n(a).toHaveTextContent(s.children),n(a).toBeDisabled(),n(a).toHaveAttribute("data-disabled","true")}},S={...o,args:{onClick:d(),leftOverlay:t.jsx(x,{title:"left-icon-test"}),pending:!0},play:async({args:s,canvasElement:i})=>{const a=l(i).getByRole("button"),p=l(a).getByRole("status");n(a.lastChild).toContainElement(p),n(a).toHaveTextContent(s.children),n(a).toBeDisabled(),n(a).toHaveAttribute("data-disabled","true"),n(p).toBeVisible()}},v={...o,args:{onClick:d(),leftOverlay:t.jsx(x,{title:"left-icon-test"}),pending:!0,pendingPosition:"left"},play:async({canvasElement:s})=>{const r=l(s).getByRole("button"),a=l(r).getByRole("status");n(r.firstChild).toContainElement(a)}};var h,B,f,b,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent(args.children as string);
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
}`,...(f=(B=c.parameters)==null?void 0:B.docs)==null?void 0:f.source},description:{story:"stories",...(C=(b=c.parameters)==null?void 0:b.docs)==null?void 0:C.description}}};var j,w,P;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(w=y.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var I,T,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(T=u.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var E,O,H;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: fn(),
    leftOverlay: <ImPencil title="left-icon-test" />
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const icon = within(button).getByTitle('left-icon-test');
    expect(button).toHaveTextContent(args.children as string);
    expect(icon).toBeVisible();
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
}`,...(H=(O=m.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var R,A,L;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: fn(),
    leftOverlay: <ImPencil title="left-icon-test" />,
    disabled: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent(args.children as string);
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled', 'true');
  }
}`,...(L=(A=g.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var z,D,F;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: fn(),
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
    expect(button.lastChild).toContainElement(spinner as HTMLElement);
    expect(button).toHaveTextContent(args.children as string);
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled', 'true');
    expect(spinner).toBeVisible();
  }
}`,...(F=(D=S.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var V,M,N;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: fn(),
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
    expect(button.firstChild).toContainElement(spinner as HTMLElement);
  }
}`,...(N=(M=v.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const X=["Primary","Sizes","Styles","WithIcons","Disabled","Pending","PendingOnLeft"];export{g as Disabled,S as Pending,v as PendingOnLeft,c as Primary,y as Sizes,u as Styles,m as WithIcons,X as __namedExportsOrder,U as default};
