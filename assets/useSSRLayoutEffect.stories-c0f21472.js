import{M as c}from"./chunk-HLWAVYOI-6fc732ee.js";import{j as t,a as r,F as i}from"./jsx-runtime-eae7a151.js";import{u as a}from"./index-f875e932.js";import"./iframe-f7393f58.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./uniq-d447bef6.js";import"./_baseIsEqual-62e1ad13.js";import"./index-ec0b3b5e.js";import"./index-356e4a49.js";function s(o){const e=Object.assign({h3:"h3",p:"p",code:"code",pre:"pre"},a(),o.components);return r(i,{children:[t(c,{title:"Hooks/useSSRLayoutEffect"}),`
`,t(e.h3,{id:"usessrlayouteffect",children:"useSSRLayoutEffect"}),`
`,r(e.p,{children:["A version of React's ",t(e.code,{children:"useLayoutEffect"})," that falls back to a ",t(e.code,{children:"useEffect"})," on the server. The code in the effect won't run on the server so watch out for that, but it will at least supress the warning."]}),`
`,t(e.pre,{children:t(e.code,{className:"language-tsx",children:`useSSRLayoutEffect(() => {
  // do something that needs a layout effect on the client but doesn't need to run on the server.
}, []);
`})}),`
`,t(e.h3,{id:"usedidupdatessrlayouteffect",children:"useDidUpdateSSRLayoutEffect"}),`
`,r(e.p,{children:[`A "did update" version of React's `,t(e.code,{children:"useLayoutEffect"})," that falls back to a ",t(e.code,{children:"useEffect"})," on the server. The code in the effect won't run on the server so watch out for that, but it will at least supress the warning. This won't run on first render on the client."]}),`
`,t(e.pre,{children:t(e.code,{className:"language-tsx",children:`useDidUpdateSSRLayoutEffect(() => {
  // do something that needs a layout effect on the client, doesn't need to run on the server, and shouldn't run first render.
}, []);
`})})]})}function d(o={}){const{wrapper:e}=Object.assign({},a(),o.components);return e?t(e,{...o,children:t(s,{...o})}):s(o)}const u=()=>{throw new Error("Docs-only story")};u.parameters={docsOnly:!0};const n={title:"Hooks/useSSRLayoutEffect",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:d};const M=["__page"];export{M as __namedExportsOrder,u as __page,n as default};
