(()=>{var e={};e.id=10,e.ids=[10],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},5663:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>o,originalPathname:()=>x,pages:()=>m,routeModule:()=>u,tree:()=>d});var a=t(67096),i=t(16132),r=t(37284),l=t.n(r),n=t(32564),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);t.d(s,c);let d=["",{children:["ierc",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,78631)),"C:\\Users\\keech\\Documents\\GitHub\\ed-mint\\src\\app\\ierc\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,53834)),"C:\\Users\\keech\\Documents\\GitHub\\ed-mint\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["C:\\Users\\keech\\Documents\\GitHub\\ed-mint\\src\\app\\ierc\\page.tsx"],x="/ierc/page",o={require:t,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/ierc/page",pathname:"/ierc",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},18891:(e,s,t)=>{Promise.resolve().then(t.bind(t,41955))},41955:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>y});var a=t(53854),i=t(18804),r=t(35139),l=t.n(r),n=t(52992),c=t.n(n),d=t(49267),m=t.n(d),x=t(77291),o=t.n(x),u=t(27553),p=t.n(u),h=t(34218),j=t(70496);let v=function(){let[e,s]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{s(!0)},[]),e};var f=t(11247),g=t(39284),N=t.n(g),b=t(22580);function y(){let e=(0,h.useRef)([]),[s,r]=(0,h.useState)("prod"),[n,d]=(0,h.useState)(),[x,u]=(0,h.useState)(),[g,y]=(0,h.useState)(""),[C,P]=(0,h.useState)(0),[k,S]=(0,h.useState)(""),[D,_]=(0,h.useState)(110),[q,w]=(0,h.useState)(1),[F,$]=(0,h.useState)(!1),[G,T]=(0,h.useState)([]),[E,z]=(0,h.useState)([]),[M,R]=(0,h.useState)(0),[A,U]=(0,h.useState)(0),H=v(),O=(0,h.useMemo)(()=>H?navigator.hardwareConcurrency:1,[H]),Z=(0,h.useMemo)(()=>E.reduce((e,s)=>e+s,0),[E]),B=(0,h.useCallback)((e,s)=>{T(t=>[(0,f.My)(e,s),...t])},[]),L=(0,h.useCallback)(()=>{let a=[],i=A>0?A:q;for(let e=0;e<i;e++){let i=new Worker(new URL(t.p+t.u(970),t.b));a.push(i),i.postMessage({index:e,privateKey:n,rpc:x,tick:g,amount:C,difficulty:k,gasPremium:D,env:s}),i.onerror=s=>{B(`Worker ${e} error: ${s.message}`,"error")},i.onmessage=s=>{let t=s.data;if(t.log&&(B(t.log),R(e=>e+1)),t.mineRate){let s=t.mineRate;z(t=>{let a=[...t];return a[e]=s,a})}}}e.current=a},[C,q,A,k,D,n,B,s,x,g]),{texts:Q,updateLanguage:K}=(0,b.Z)(),V=(0,h.useCallback)(()=>{if(!n){B("No private key","error"),$(!1);return}if(!g){B("No tick","error"),$(!1);return}if(!C){B("No quantity","error"),$(!1);return}if(!k){B("No difficulty","error"),$(!1);return}B("\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80 Start Mining..."),L()},[C,k,L,n,B,g]),W=(0,h.useCallback)(()=>{e.current?.forEach(e=>{e.terminate()}),e.current=[]},[]);return(0,a.jsxs)("div",{className:" flex flex-col gap-4",children:[(0,a.jsxs)(i.default,{row:!0,defaultValue:"prod",onChange:e=>{let s=e.target.value;r(s)},children:[a.jsx(l(),{value:"prod",control:a.jsx(c(),{}),label:Q.FormalEnvironment,disabled:F}),a.jsx(l(),{value:"test",control:a.jsx(c(),{}),label:Q.TestEnvironment,disabled:F})]}),(0,a.jsxs)("div",{className:" flex flex-col",children:[N()()?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[a.jsx("p",{}),Q.PrivateKey,":"]}),a.jsx("div",{className:"main-item-txt",children:a.jsx("span",{children:Q.req})})]}):(0,a.jsxs)("div",{className:"main-item-txt",children:[a.jsx("p",{}),Q.PrivateKey," \xa0",a.jsx("span",{children:Q.req}),"\xa0:"]}),a.jsx(m(),{className:"TextField-item",size:"small",placeholder:Q.Privatekeywithor,disabled:F,onChange:e=>{let s=e.target.value,t=s.trim();/^[a-fA-F0-9]{64}$/.test(t)&&d(`0x${t}`),/^0x[a-fA-F0-9]{64}$/.test(t)&&d(t)}})]}),(0,a.jsxs)("div",{className:" flex flex-col",children:[N()()?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[a.jsx("p",{}),Q.Tick]}),a.jsx("div",{className:"main-item-txt",children:a.jsx("span",{children:Q.iercm5})})]}):(0,a.jsxs)("div",{className:"main-item-txt",children:[a.jsx("p",{}),Q.Tick," \xa0",a.jsx("span",{children:Q.iercm5}),"\xa0:"]}),a.jsx(m(),{className:"TextField-item",size:"small",placeholder:Q.itickExample,disabled:F,onChange:e=>{let s=e.target.value;y(s.trim())}})]}),(0,a.jsxs)("div",{className:" flex flex-col",children:[N()()?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[a.jsx("p",{}),Q.Quantity,":"]}),a.jsx("div",{className:"main-item-txt",children:a.jsx("span",{children:Q.quantityPerSheet})})]}):(0,a.jsxs)("div",{className:"main-item-txt",children:[a.jsx("p",{}),Q.Quantity," \xa0",a.jsx("span",{children:Q.quantityPerSheet}),"\xa0:"]}),a.jsx(m(),{className:"TextField-item",type:"number",size:"small",placeholder:Q.QuantityExample,disabled:F,onChange:e=>{let s=Number(e.target.value);!Number.isNaN(s)&&s>=0&&P(s)}})]}),(0,a.jsxs)("div",{className:" flex flex-col",children:[N()()?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[a.jsx("p",{}),Q.Difficulty,":"]}),a.jsx("div",{className:"main-item-txt",children:a.jsx("span",{children:Q.hexadecimal})})]}):(0,a.jsxs)("div",{className:"main-item-txt",children:[a.jsx("p",{}),Q.Difficulty,"\xa0",a.jsx("span",{children:Q.hexadecimal}),"\xa0:"]}),a.jsx(m(),{className:"TextField-item",size:"small",placeholder:Q.hexadecimal2,disabled:F,onChange:e=>{let s=e.target.value;S(s.trim())}})]}),(0,a.jsxs)("div",{className:" flex flex-col",children:[(0,a.jsxs)("div",{className:" flex items-center",children:[(0,a.jsxs)("span",{children:[Q.NumberOfCPUCores,":"]}),a.jsx(o(),{className:"customize",size:"small",color:"secondary",disabled:F,onClick:()=>{U(e=>e<=0?1:-1),z([])},children:Q.customize})]}),A<=0?a.jsx(m(),{className:"TextField-item",select:!0,defaultValue:1,size:"small",disabled:F,onChange:e=>{let s=e.target.value;w(Number(s)),z([])},children:Array(O).fill(null).map((e,s)=>a.jsx(p(),{value:s+1,children:s+1},s))}):a.jsx(m(),{className:"TextField-item",type:"number",size:"small",placeholder:Q.NumberOfCpu,disabled:F,value:A,onChange:e=>{let s=Number(e.target.value);Number.isNaN(s)||U(Math.floor(s))}})]}),(0,a.jsxs)("div",{className:" flex flex-col",children:[N()()?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[a.jsx("p",{}),Q.RPC,":"]}),a.jsx("div",{className:"main-item-txt",children:a.jsx("span",{children:Q.defaultPublic})})]}):(0,a.jsxs)("div",{className:"main-item-txt",children:[a.jsx("p",{}),Q.RPC," \xa0",a.jsx("span",{children:Q.defaultPublic}),"\xa0:"]}),a.jsx(m(),{className:"TextField-item",size:"small",placeholder:"RPC",disabled:F,onChange:e=>{let s=e.target.value;u(s)}})]}),(0,a.jsxs)("div",{className:" flex flex-col",children:[N()()?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[a.jsx("p",{}),Q.GasPremium,":"]}),a.jsx("div",{className:"main-item-txt",children:a.jsx("span",{children:Q.theGasPrice})})]}):(0,a.jsxs)("div",{className:"main-item-txt",children:[a.jsx("p",{}),Q.GasPremium," \xa0",a.jsx("span",{children:Q.theGasPrice}),"\xa0:"]}),a.jsx(m(),{className:"TextField-item",type:"number",size:"small",placeholder:Q.TheDefault,disabled:F,onChange:e=>{let s=Number(e.target.value);!Number.isNaN(s)&&s>=100&&_(s)}})]}),a.jsx(o(),{className:"runBtn",variant:"contained",color:F?"error":"success",onClick:()=>{F?($(!1),W()):($(!0),V())},children:F?Q.running:Q.run}),a.jsx(j.Z,{title:"Log",text:`(${Q.efficiency} => ${Z} ${Q.NumberOfSuccesses} => ${M})`,logs:G,onClear:()=>{T([])}})]})}},70496:(e,s,t)=>{"use strict";t.d(s,{Z:()=>x});var a=t(53854),i=t(77291),r=t.n(i),l=t(33671),n=t.n(l),c=t(39284),d=t.n(c),m=t(22580);function x({title:e,text:s,logs:t,onClear:i}){let{texts:l,updateLanguage:c}=(0,m.Z)();return(0,a.jsxs)("div",{className:" mt-5 flex flex-col gap-2",children:[(0,a.jsxs)("div",{className:" flex items-center gap-4",children:[d()()?(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,a.jsxs)("div",{className:"main-item-txt main-item-txt-1",style:{maxHeight:40},children:[a.jsx("p",{}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[a.jsx("div",{children:e}),":",a.jsx(r(),{className:"clearBtn",variant:"contained",color:"secondary",onClick:i,children:l.Clear})]})]}),a.jsx("div",{className:"main-item-txt",children:a.jsx("span",{children:s})})]}):(0,a.jsxs)("div",{className:"main-item-txt",children:[a.jsx("p",{}),a.jsx("div",{children:e}),"\xa0",a.jsx("span",{children:s}),"\xa0:"]}),!d()()&&a.jsx(r(),{className:"clearBtn",variant:"contained",color:"secondary",onClick:i,children:l.Clear})]}),a.jsx(n(),{className:"log-main flex h-[600px] flex-col gap-1 overflow-auto rounded-lg px-4 py-2",sx:e=>({backgroundColor:"dark"===e.palette.mode?e.palette.grey[800]:e.palette.grey[200],boxShadow:e.shadows[1]}),children:t.map((e,s)=>a.jsx("div",{className:" flex items-center",children:e},e+s))})]})}},11247:(e,s,t)=>{"use strict";t.d(s,{D2:()=>i,My:()=>a,_v:()=>r});let a=(e,s="success")=>`${new Date().toLocaleString()} ${"success"===s?"✅":"error"===s?"❌":""} => ${e}`,i=e=>{let s=e.slice(0,6),t=e.slice(-4);return`${s}...${t}`};function r(e){return new Promise(s=>setTimeout(s,e))}},78631:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>l,__esModule:()=>r,default:()=>c});var a=t(95153);let i=(0,a.createProxy)(String.raw`C:\Users\keech\Documents\GitHub\ed-mint\src\app\ierc\page.tsx`),{__esModule:r,$$typeof:l}=i,n=i.default,c=n},73881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var a=t(31323);let i=e=>{let s=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"128x128",url:s+""}]}}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[271,494,323,492],()=>t(5663));module.exports=a})();