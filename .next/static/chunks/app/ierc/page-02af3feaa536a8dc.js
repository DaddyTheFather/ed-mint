(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{67757:function(e,s,a){Promise.resolve().then(a.bind(a,29158))},29158:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return f}});var t=a(57437),l=a(91909),i=a(63314),n=a(76498),r=a(57955),c=a(49050),m=a(27739),d=a(2265),x=a(12167),u=function(){let[e,s]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{s(!0)},[]),e},o=a(18284),h=a(48679),j=a.n(h),N=a(99076);function f(){let e=(0,d.useRef)([]),[s,h]=(0,d.useState)("prod"),[f,v]=(0,d.useState)(),[p,b]=(0,d.useState)(),[g,C]=(0,d.useState)(""),[y,k]=(0,d.useState)(0),[S,Z]=(0,d.useState)(""),[F,P]=(0,d.useState)(110),[D,E]=(0,d.useState)(1),[T,z]=(0,d.useState)(!1),[w,R]=(0,d.useState)([]),[M,_]=(0,d.useState)([]),[q,O]=(0,d.useState)(0),[G,A]=(0,d.useState)(0),Q=u(),K=(0,d.useMemo)(()=>Q?navigator.hardwareConcurrency:1,[Q]),L=(0,d.useMemo)(()=>M.reduce((e,s)=>e+s,0),[M]),U=(0,d.useCallback)((e,s)=>{R(a=>[(0,o.My)(e,s),...a])},[]),V=(0,d.useCallback)(()=>{let t=[],l=G>0?G:D;for(let e=0;e<l;e++){let l=new Worker(a.tu(new URL(a.p+a.u(895),a.b)));t.push(l),l.postMessage({index:e,privateKey:f,rpc:p,tick:g,amount:y,difficulty:S,gasPremium:F,env:s}),l.onerror=s=>{U("Worker ".concat(e," error: ").concat(s.message),"error")},l.onmessage=s=>{let a=s.data;if(a.log&&(U(a.log),O(e=>e+1)),a.mineRate){let s=a.mineRate;_(a=>{let t=[...a];return t[e]=s,t})}}}e.current=t},[y,D,G,S,F,f,U,s,p,g]),{texts:W,updateLanguage:$}=(0,N.Z)(),B=(0,d.useCallback)(()=>{if(!f){U("No private key","error"),z(!1);return}if(!g){U("No tick","error"),z(!1);return}if(!y){U("No quantity","error"),z(!1);return}if(!S){U("No difficulty","error"),z(!1);return}U("\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80 Start Mining..."),V()},[y,S,V,f,U,g]),H=(0,d.useCallback)(()=>{var s;null===(s=e.current)||void 0===s||s.forEach(e=>{e.terminate()}),e.current=[]},[]);return(0,t.jsxs)("div",{className:" flex flex-col gap-4",children:[(0,t.jsxs)(l.Z,{row:!0,defaultValue:"prod",onChange:e=>{let s=e.target.value;h(s)},children:[(0,t.jsx)(i.Z,{value:"prod",control:(0,t.jsx)(n.Z,{}),label:W.FormalEnvironment,disabled:T}),(0,t.jsx)(i.Z,{value:"test",control:(0,t.jsx)(n.Z,{}),label:W.TestEnvironment,disabled:T})]}),(0,t.jsxs)("div",{className:" flex flex-col",children:[j()()?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,t.jsx)("p",{}),W.PrivateKey,":"]}),(0,t.jsx)("div",{className:"main-item-txt",children:(0,t.jsx)("span",{children:W.req})})]}):(0,t.jsxs)("div",{className:"main-item-txt",children:[(0,t.jsx)("p",{}),W.PrivateKey," \xa0",(0,t.jsx)("span",{children:W.req}),"\xa0:"]}),(0,t.jsx)(r.Z,{className:"TextField-item",size:"small",placeholder:W.Privatekeywithor,disabled:T,onChange:e=>{let s=e.target.value,a=s.trim();/^[a-fA-F0-9]{64}$/.test(a)&&v("0x".concat(a)),/^0x[a-fA-F0-9]{64}$/.test(a)&&v(a)}})]}),(0,t.jsxs)("div",{className:" flex flex-col",children:[j()()?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,t.jsx)("p",{}),W.Tick]}),(0,t.jsx)("div",{className:"main-item-txt",children:(0,t.jsx)("span",{children:W.iercm5})})]}):(0,t.jsxs)("div",{className:"main-item-txt",children:[(0,t.jsx)("p",{}),W.Tick," \xa0",(0,t.jsx)("span",{children:W.iercm5}),"\xa0:"]}),(0,t.jsx)(r.Z,{className:"TextField-item",size:"small",placeholder:W.itickExample,disabled:T,onChange:e=>{let s=e.target.value;C(s.trim())}})]}),(0,t.jsxs)("div",{className:" flex flex-col",children:[j()()?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,t.jsx)("p",{}),W.Quantity,":"]}),(0,t.jsx)("div",{className:"main-item-txt",children:(0,t.jsx)("span",{children:W.quantityPerSheet})})]}):(0,t.jsxs)("div",{className:"main-item-txt",children:[(0,t.jsx)("p",{}),W.Quantity," \xa0",(0,t.jsx)("span",{children:W.quantityPerSheet}),"\xa0:"]}),(0,t.jsx)(r.Z,{className:"TextField-item",type:"number",size:"small",placeholder:W.QuantityExample,disabled:T,onChange:e=>{let s=Number(e.target.value);!Number.isNaN(s)&&s>=0&&k(s)}})]}),(0,t.jsxs)("div",{className:" flex flex-col",children:[j()()?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,t.jsx)("p",{}),W.Difficulty,":"]}),(0,t.jsx)("div",{className:"main-item-txt",children:(0,t.jsx)("span",{children:W.hexadecimal})})]}):(0,t.jsxs)("div",{className:"main-item-txt",children:[(0,t.jsx)("p",{}),W.Difficulty,"\xa0",(0,t.jsx)("span",{children:W.hexadecimal}),"\xa0:"]}),(0,t.jsx)(r.Z,{className:"TextField-item",size:"small",placeholder:W.hexadecimal2,disabled:T,onChange:e=>{let s=e.target.value;Z(s.trim())}})]}),(0,t.jsxs)("div",{className:" flex flex-col",children:[(0,t.jsxs)("div",{className:" flex items-center",children:[(0,t.jsxs)("span",{children:[W.NumberOfCPUCores,":"]}),(0,t.jsx)(c.Z,{className:"customize",size:"small",color:"secondary",disabled:T,onClick:()=>{A(e=>e<=0?1:-1),_([])},children:W.customize})]}),G<=0?(0,t.jsx)(r.Z,{className:"TextField-item",select:!0,defaultValue:1,size:"small",disabled:T,onChange:e=>{let s=e.target.value;E(Number(s)),_([])},children:Array(K).fill(null).map((e,s)=>(0,t.jsx)(m.Z,{value:s+1,children:s+1},s))}):(0,t.jsx)(r.Z,{className:"TextField-item",type:"number",size:"small",placeholder:W.NumberOfCpu,disabled:T,value:G,onChange:e=>{let s=Number(e.target.value);Number.isNaN(s)||A(Math.floor(s))}})]}),(0,t.jsxs)("div",{className:" flex flex-col",children:[j()()?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,t.jsx)("p",{}),W.RPC,":"]}),(0,t.jsx)("div",{className:"main-item-txt",children:(0,t.jsx)("span",{children:W.defaultPublic})})]}):(0,t.jsxs)("div",{className:"main-item-txt",children:[(0,t.jsx)("p",{}),W.RPC," \xa0",(0,t.jsx)("span",{children:W.defaultPublic}),"\xa0:"]}),(0,t.jsx)(r.Z,{className:"TextField-item",size:"small",placeholder:"RPC",disabled:T,onChange:e=>{let s=e.target.value;b(s)}})]}),(0,t.jsxs)("div",{className:" flex flex-col",children:[j()()?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,t.jsx)("p",{}),W.GasPremium,":"]}),(0,t.jsx)("div",{className:"main-item-txt",children:(0,t.jsx)("span",{children:W.theGasPrice})})]}):(0,t.jsxs)("div",{className:"main-item-txt",children:[(0,t.jsx)("p",{}),W.GasPremium," \xa0",(0,t.jsx)("span",{children:W.theGasPrice}),"\xa0:"]}),(0,t.jsx)(r.Z,{className:"TextField-item",type:"number",size:"small",placeholder:W.TheDefault,disabled:T,onChange:e=>{let s=Number(e.target.value);!Number.isNaN(s)&&s>=100&&P(s)}})]}),(0,t.jsx)(c.Z,{className:"runBtn",variant:"contained",color:T?"error":"success",onClick:()=>{T?(z(!1),H()):(z(!0),B())},children:T?W.running:W.run}),(0,t.jsx)(x.Z,{title:"Log",text:"(".concat(W.efficiency," => ").concat(L," ").concat(W.NumberOfSuccesses," => ").concat(q,")"),logs:w,onClear:()=>{R([])}})]})}}},function(e){e.O(0,[590,37,692,971,472,744],function(){return e(e.s=67757)}),_N_E=e.O()}]);