import{M as i}from"./chunk-HLWAVYOI-af1601b8.js";import{j as t,a as c,F as a}from"./jsx-runtime-eae7a151.js";import{u as s}from"./index-f875e932.js";import"./iframe-51884d3c.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./extends-98964cd2.js";import"./index-ec0b3b5e.js";import"./_baseIsEqual-62e1ad13.js";import"./uniq-4dce63e4.js";import"./index-356e4a49.js";function r(n){const e=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},s(),n.components);return c(a,{children:[t(i,{title:"Hooks/useBoundingClientRect"}),`
`,t(e.h3,{id:"useboundingclientrect",children:"useBoundingClientRect"}),`
`,t(e.p,{children:"Get the size of the element with the given ref - uses a resize observer, listens to scroll events, and listens to resize events"}),`
`,t(e.pre,{children:t(e.code,{className:"language-tsx",children:`const contentRef = React.useRef<HTMLDivElement>(null);

const [{ height, width, bottom, left, right, top, x, y }] = useBoundingClientRect(contentRef);

return <div ref={contentRef} />;
`})})]})}function m(n={}){const{wrapper:e}=Object.assign({},s(),n.components);return e?t(e,{...n,children:t(r,{...n})}):r(n)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const o={title:"Hooks/useBoundingClientRect",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:m};const B=["__page"];export{B as __namedExportsOrder,p as __page,o as default};