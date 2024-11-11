import{a as c,j as n,F as it}from"./jsx-runtime-eae7a151.js";import{I as st,v as ot}from"./preview-errors-dde4324f.js";import{w as l,e as o,u as $,a as J}from"./index-61f1305c.js";import{a as B}from"./config.context-108849f1.js";import{B as s}from"./button.component-938d192f.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-4dce63e4.js";import"./index-a6c8ef6f.js";import"./classNames-9011e307.js";import"./spinner.component-b77c4686.js";const{addons:lt}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__;var rt="storybook/actions",ct=`${rt}/action-event`,dt={depth:10,clearOnStoryChange:!0,limit:50},X=(t,a)=>{let i=Object.getPrototypeOf(t);return!i||a(i)?i:X(i,a)},pt=t=>!!(typeof t=="object"&&t&&X(t,a=>/^Synthetic(?:Base)?Event$/.test(a.constructor.name))&&typeof t.persist=="function"),yt=t=>{if(pt(t)){let a=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));a.persist();let i=Object.getOwnPropertyDescriptor(a,"view"),e=i==null?void 0:i.value;return typeof e=="object"&&(e==null?void 0:e.constructor.name)==="Window"&&Object.defineProperty(a,"view",{...i,value:Object.create(e.constructor.prototype)}),a}return t},ut=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?ot():Date.now().toString(36)+Math.random().toString(36).substring(2);function u(t,a={}){let i={...dt,...a},e=function(...r){var x,C;if(a.implicit){let w=(x="__STORYBOOK_PREVIEW__"in E?E.__STORYBOOK_PREVIEW__:void 0)==null?void 0:x.storyRenders.find(p=>p.phase==="playing"||p.phase==="rendering");if(w){let p=!((C=window==null?void 0:window.FEATURES)!=null&&C.disallowImplicitActionsInRenderV8),O=new st({phase:w.phase,name:t,deprecated:p});if(p)console.warn(O);else throw O}}let Z=lt.getChannel(),tt=ut(),nt=5,b=r.map(yt),et=r.length>1?b:b[0],at={id:tt,count:0,data:{name:t,args:et},options:{...i,maxDepth:nt+(i.depth||3),allowFunction:i.allowFunction||!1}};Z.emit(ct,at)};return e.isAction=!0,e}const It={title:"Components/Button",component:s,args:{children:"Click me please"},parameters:{docs:{description:{component:"metadata"}}}},d={render:t=>n(s,{...t})},y={...d,args:{onClick:u("onClick")},play:async({args:t,canvasElement:a})=>{const e=l(a).getByRole("button");o(e).toHaveTextContent(t.children),await $.click(e),await J(()=>o(t.onClick).toHaveBeenCalled())}},m={...d,render:()=>c("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[n(s,{displaySize:"small",children:"Small"}),n(s,{children:"Medium"}),n(s,{displaySize:"large",children:"Large"})]})},g={...d,render:()=>c(it,{children:[n("h3",{children:"Status - Normal"}),c("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[n(s,{displayStyle:"primary",children:"Primary"}),n(s,{displayStyle:"secondary",children:"Secondary"}),n(s,{displayStyle:"outline",children:"Outline"})]}),n("h3",{children:"Status - Positive"}),c("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[n(s,{displayStyle:"primary",displayStatus:"positive",children:"Primary"}),n(s,{displayStyle:"secondary",displayStatus:"positive",children:"Secondary"}),n(s,{displayStyle:"outline",displayStatus:"positive",children:"Outline"})]}),n("h3",{children:"Status - Negative"}),c("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[n(s,{displayStyle:"primary",displayStatus:"negative",children:"Primary"}),n(s,{displayStyle:"secondary",displayStatus:"negative",children:"Secondary"}),n(s,{displayStyle:"outline",displayStatus:"negative",children:"Outline"})]}),n("h3",{children:"Status - Warning"}),c("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[n(s,{displayStyle:"primary",displayStatus:"warning",children:"Primary"}),n(s,{displayStyle:"secondary",displayStatus:"warning",children:"Secondary"}),n(s,{displayStyle:"outline",displayStatus:"warning",children:"Outline"})]}),n("h3",{children:"Status - Info"}),c("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[n(s,{displayStyle:"primary",displayStatus:"info",children:"Primary"}),n(s,{displayStyle:"secondary",displayStatus:"info",children:"Secondary"}),n(s,{displayStyle:"outline",displayStatus:"info",children:"Outline"})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1"}}},S={...d,args:{onClick:u("onClick"),leftOverlay:n(B,{title:"left-icon-test"})},play:async({args:t,canvasElement:a})=>{const e=l(a).getByRole("button"),r=l(e).getByTitle("left-icon-test");o(e).toHaveTextContent(t.children),o(r).toBeVisible(),await $.click(e),await J(()=>o(t.onClick).toHaveBeenCalled())}},v={...d,args:{onClick:u("onClick"),leftOverlay:n(B,{title:"left-icon-test"}),disabled:!0},play:async({args:t,canvasElement:a})=>{const e=l(a).getByRole("button");o(e).toHaveTextContent(t.children),o(e).toBeDisabled(),o(e).toHaveAttribute("data-disabled","true")}},h={...d,args:{onClick:u("onClick"),leftOverlay:n(B,{title:"left-icon-test"}),pending:!0},play:async({args:t,canvasElement:a})=>{const e=l(a).getByRole("button"),r=l(e).getByRole("status");o(e.lastChild).toContainElement(r),o(e).toHaveTextContent(t.children),o(e).toBeDisabled(),o(e).toHaveAttribute("data-disabled","true"),o(r).toBeVisible()}},f={...d,args:{onClick:u("onClick"),leftOverlay:n(B,{title:"left-icon-test"}),pending:!0,pendingPosition:"left"},play:async({canvasElement:t})=>{const i=l(t).getByRole("button"),e=l(i).getByRole("status");o(i.firstChild).toContainElement(e)}};var P,I,k,T,R;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(I=y.parameters)==null?void 0:I.docs)==null?void 0:k.source},description:{story:"stories",...(R=(T=y.parameters)==null?void 0:T.docs)==null?void 0:R.description}}};var _,A,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,L,j;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(L=g.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var V,z,F;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(F=(z=S.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var W,M,N;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(M=v.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Y,K,Q;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var G,U,q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(q=(U=f.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};const kt=["Default","Sizes","Styles","WithIcons","Disabled","Pending","PendingOnLeft"];export{y as Default,v as Disabled,h as Pending,f as PendingOnLeft,m as Sizes,g as Styles,S as WithIcons,kt as __namedExportsOrder,It as default};
