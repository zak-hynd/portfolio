const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C-2a_lAW.js","./BSy-UEjJ.js","./8u1lw4hk.js","./CW55KKAc.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{h as f,u as m}from"./CW55KKAc.js";import{q as v,w as c,e as l,s as d,j as g,a as y,u as h}from"./8u1lw4hk.js";import{j as _,C as w,D as C,E as P,G as $,k as x,H as N,I as E,l as j,p}from"./BSy-UEjJ.js";import{_ as T}from"./Dw3yUaQU.js";const D=async t=>{const{content:e}=_().public;typeof(t==null?void 0:t.params)!="function"&&(t=v(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${l(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(d())return(await w(()=>import("./C-2a_lAW.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:g(n),previewToken:m().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=C(),i=P(r.payload.state,a);if(i.value===void 0&&o){const s=o();if($(s))return r.payload.state[a]=s,s;i.value=s}return i}const R=x({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=N(t),n=E(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=y();return{navigation:a}}const{data:o}=await h(`content-navigation-${f(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=j(),{navigation:n}=t,o=i=>p(T,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),Q=R;export{Q as default};