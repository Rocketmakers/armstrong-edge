import{R as t}from"./index-c4905b50.js";import{$ as T}from"./index-97ba0010.js";import{$ as p,a as u}from"./index-742b7287.js";function v(s){const a=s+"CollectionProvider",[C,R]=T(a),[$,f]=C(a,{collectionRef:{current:null},itemMap:new Map}),M=r=>{const{scope:e,children:l}=r,o=t.useRef(null),c=t.useRef(new Map).current;return t.createElement($,{scope:e,itemMap:c,collectionRef:o},l)},x=s+"CollectionSlot",I=t.forwardRef((r,e)=>{const{scope:l,children:o}=r,c=f(x,l),n=p(e,c.collectionRef);return t.createElement(u,{ref:n},o)}),E=s+"CollectionItemSlot",d="data-radix-collection-item",S=t.forwardRef((r,e)=>{const{scope:l,children:o,...c}=r,n=t.useRef(null),m=p(e,n),i=f(E,l);return t.useEffect(()=>(i.itemMap.set(n,{ref:n,...c}),()=>void i.itemMap.delete(n))),t.createElement(u,{[d]:"",ref:m},o)});function A(r){const e=f(s+"CollectionConsumer",r);return t.useCallback(()=>{const o=e.collectionRef.current;if(!o)return[];const c=Array.from(o.querySelectorAll(`[${d}]`));return Array.from(e.itemMap.values()).sort((i,b)=>c.indexOf(i.ref.current)-c.indexOf(b.ref.current))},[e.collectionRef,e.itemMap])}return[{Provider:M,Slot:I,ItemSlot:S},A,R]}export{v as $};
