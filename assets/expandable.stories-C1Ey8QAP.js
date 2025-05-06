import{j as p}from"./jsx-runtime-Cl2eCCBe.js";import{c as I,w as L,e as m,u as x,a as T}from"./index-Dv9et24K.js";import{r}from"./index-Cqyox1Tj.js";import{b as M,u as N,a as F}from"./useDidUpdateEffect-igSykUWQ.js";import{d as g}from"./config.context-B61qZkrf.js";import{B as P}from"./button.component-BSUqeTdM.js";const a=typeof window>"u"?void 0:window,v=typeof document>"u"?void 0:document,q=!!(a!=null&&a.ResizeObserver);a!=null&&a.IntersectionObserver;a!=null&&a.MutationObserver;a!=null&&a.PerformanceObserver;const A=!!a;function h(n,s,e=a,t={passive:!0},u=!0){r.useEffect(()=>{if(e&&u)return e.addEventListener(n,s,t),()=>{if(typeof t=="object"){const{once:d,passive:o,...i}=t;e.removeEventListener(n,s,i)}else e.removeEventListener(n,s,t)}},[s,e,n,u,t])}function $(n,s,e){const t=r.useRef(),u=M(s),d=r.useCallback(c=>{t.current=new ResizeObserver(n),t.current.observe(c,u)},[n,u]),o=r.useCallback(c=>{t.current&&t.current.unobserve(c)},[]),i=r.useCallback(()=>{var c;(c=t.current)==null||c.disconnect()},[]);return N(()=>{if(e!=null&&e.current&&A&&q)return d(e.current),()=>{e.current&&o(e.current)}},[d,o,e]),r.useEffect(()=>i,[i]),{observer:t,unobserve:o,disconnect:i}}function H(n,s,e=!0){var c;const[t,u]=r.useState(((c=n.current)==null?void 0:c.getBoundingClientRect())||new DOMRect(0,0,0,0)),d=r.useCallback(f=>{const{top:C,right:k,bottom:w,left:j,width:S,height:z,x:_,y:D}=f;return{top:C,right:k,bottom:w,left:j,width:S,height:z,x:_,y:D}},[]),o=r.useCallback(()=>{if(n.current){const f=n.current.getBoundingClientRect();g(d(f))!==g(d(t))&&u(f)}},[n,d,t,s]);$(o,{},n),F(()=>{e&&o()},[e]);const i=r.useCallback(()=>{e&&o()},[e,o]);return h("resize",o,v),h("scroll",i,v,{capture:!0}),r.useEffect(()=>{o()},[]),[t,o]}const b=r.forwardRef(({className:n,children:s,style:e,animate:t,isOpen:u,...d},o)=>{const i=r.useRef(null),[{height:c}]=H(i);return p.jsx("div",{...d,className:I("arm-expandable",n),style:{...t?{"--arm-expandable-height":`${c}px`}:{},...e||{}},"data-animate":!!t,"data-is-open":!!u,ref:o,children:p.jsx("div",{ref:i,className:"arm-expandable-content",children:s})})});b.displayName="Expandable";b.defaultProps={animate:!0};b.__docgenInfo={description:"A div which will automatically resize depending on the size of its children",methods:[],displayName:"Expandable",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"is the expandable region open, if false will take up no space"},animate:{required:!1,tsType:{name:"boolean"},description:"Should animate the height expansion",defaultValue:{value:"true",computed:!1}}}};const U={title:"Components/Expandable",component:b,parameters:{docs:{description:{component:"An region that can expand/contract with animation"}}}},l={render:()=>{const[n,s]=r.useState(!1);return p.jsxs(p.Fragment,{children:[p.jsx(P,{onClick:()=>s(!n),children:"Toggle content"}),p.jsx(b,{isOpen:n,"data-testid":"expandable",children:p.jsx("div",{style:{height:"200px",backgroundColor:"#dbdbdb",padding:"20px",boxSizing:"border-box"},children:"Some inner content"})})]})},play:async({canvasElement:n})=>{const s=L(n),e=s.getByTestId("expandable");m(e.offsetHeight).toBe(0);const t=s.getByRole("button");x.click(t),await T(()=>m(e.offsetHeight).toBe(200)),x.click(t)}};var E,y,O,R,B;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <>
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle content</Button>
        <Expandable isOpen={isOpen} data-testid="expandable">
          <div style={{
          height: '200px',
          backgroundColor: '#dbdbdb',
          padding: '20px',
          boxSizing: 'border-box'
        }}>
            Some inner content
          </div>
        </Expandable>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const inner = canvas.getByTestId('expandable');
    expect(inner.offsetHeight).toBe(0);
    const button = canvas.getByRole('button');
    userEvent.click(button);
    await waitFor(() => expect(inner.offsetHeight).toBe(200));
    userEvent.click(button);
  }
}`,...(O=(y=l.parameters)==null?void 0:y.docs)==null?void 0:O.source},description:{story:"stories",...(B=(R=l.parameters)==null?void 0:R.docs)==null?void 0:B.description}}};const V=["Default"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{l as D,b as E,Z as e};
