import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{c as w,w as _,e as x,u as g,a as z}from"./index-BmZcwVSF.js";import{R as o}from"./index-DwQS_Y10.js";import{b as S,u as D,a as I}from"./useDidUpdateEffect-C33itT9v.js";import{d as h}from"./config.context-D0elZNgh.js";import{B as L}from"./button.component-Cl1KWafa.js";const a=typeof window>"u"?void 0:window,R=typeof document>"u"?void 0:document,M=!!(a!=null&&a.ResizeObserver);a!=null&&a.IntersectionObserver;a!=null&&a.MutationObserver;a!=null&&a.PerformanceObserver;const T=!!a;function E(n,s,e=a,t={passive:!0},i=!0){o.useEffect(()=>{if(e&&i)return e.addEventListener(n,s,t),()=>{if(typeof t=="object"){const{once:d,passive:c,...r}=t;e.removeEventListener(n,s,r)}else e.removeEventListener(n,s,t)}},[s,e,n,i,t])}function N(n,s,e){const t=o.useRef(void 0),i=S(s),d=o.useCallback(u=>{t.current=new ResizeObserver(n),t.current.observe(u,i)},[n,i]),c=o.useCallback(u=>{t.current&&t.current.unobserve(u)},[]),r=o.useCallback(()=>{var u;(u=t.current)==null||u.disconnect()},[]);return D(()=>{if(e!=null&&e.current&&T&&M)return d(e.current),()=>{e.current&&c(e.current)}},[d,c,e]),o.useEffect(()=>r,[r]),{observer:t,unobserve:c,disconnect:r}}function y(n){const{top:s,right:e,bottom:t,left:i,width:d,height:c,x:r,y:u}=n;return{top:s,right:e,bottom:t,left:i,width:d,height:c,x:r,y:u}}function F(n,s,e=!0){var m;const[t,i]=o.useState(((m=n.current)==null?void 0:m.getBoundingClientRect())||new DOMRect(0,0,0,0)),d=o.useRef(t);d.current=t;const c=o.useRef(s);c.current=s;const r=o.useCallback(()=>{var v;if(n.current){const f=n.current.getBoundingClientRect();h(y(f))!==h(y(d.current))&&((v=c.current)==null||v.call(c,f),i(f))}},[n]);N(r,{},n),I(()=>{e&&r()},[e]);const u=o.useCallback(()=>{e&&r()},[e,r]);return E("resize",r,R),E("scroll",u,R,{capture:!0}),o.useEffect(()=>{r()},[]),[t,r]}const b=({ref:n,className:s,children:e,style:t,animate:i=!0,isOpen:d,...c})=>{const r=o.useRef(null),[{height:u}]=F(r);return p.jsx("div",{...c,className:w("arm-expandable",s),style:{...i?{"--arm-expandable-height":`${u}px`}:{},...t||{}},"data-animate":!!i,"data-is-open":!!d,ref:n,children:p.jsx("div",{ref:r,className:"arm-expandable-content",children:e})})};b.displayName="Expandable";b.__docgenInfo={description:"A div which will automatically resize depending on the size of its children",methods:[],displayName:"Expandable",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},animate:{defaultValue:{value:"true",computed:!1},required:!1}}};const H={title:"Components/Expandable",component:b,parameters:{docs:{description:{component:"An region that can expand/contract with animation"}}}},l={render:()=>{const[n,s]=o.useState(!1);return p.jsxs(p.Fragment,{children:[p.jsx(L,{onClick:()=>s(!n),children:"Toggle content"}),p.jsx(b,{isOpen:n,"data-testid":"expandable",children:p.jsx("div",{style:{height:"200px",backgroundColor:"#dbdbdb",padding:"20px",boxSizing:"border-box"},children:"Some inner content"})})]})},play:async({canvasElement:n})=>{const s=_(n),e=s.getByTestId("expandable");x(e.offsetHeight).toBe(0);const t=s.getByRole("button");g.click(t),await z(()=>x(e.offsetHeight).toBe(200)),g.click(t)}};var O,B,C,j,k;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source},description:{story:"stories",...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.description}}};const q=["Default"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:q,default:H},Symbol.toStringTag,{value:"Module"}));export{l as D,b as E,J as e};
