(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{32338:function(e,t,a){Promise.resolve().then(a.bind(a,19834))},19834:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ee}});var s=a(57437),l=a(57955),i=a(27739),n=a(91909),r=a(63314),c=a(76498),m=a(49050),d=a(2265),o=a(50364),x=a(7955),p=a(33720),h=a(21693),u=a(59494),j=a(87364),f=a(69711),v=a(75404),N=a(12167),b=a(71186),g=a(88301),T=a(86455),C=a(3748),y=a(41109),E=a(21520),k=a(14576),Z=a(2087),S=a(35085),w=a(71641),F=a(66820),M=a(90189),P=a(36572),O=a(98135),A=a(5352),D=a(94843),z=a(5572),K=a(44969),R=a(73506),_=a(88219),B=a(45537),I=a(59764),U=a(1199),H=a(2230),W=a(75398);let V=(0,b.a)({id:109,name:"Shibarium",network:"shibarium",nativeCurrency:{decimals:18,name:"BONE",symbol:"BONE"},rpcUrls:{default:{http:["https://rpc.shibrpc.com"]},public:{http:["https://rpc.shibrpc.com"]}},blockExplorers:{default:{name:"Explorer",url:"https://shibariumscan.io"}}}),L=(0,b.a)({id:10001,name:"ETHW-mainnet",network:"ETHW-mainnet",nativeCurrency:{decimals:18,name:"ETHW",symbol:"ETHW"},rpcUrls:{default:{http:["https://mainnet.ethereumpow.org"]},public:{http:["https://mainnet.ethereumpow.org"]}},blockExplorers:{default:{name:"Explorer",url:"https://mainnet.ethwscan.com"}}}),$=(0,b.a)({id:321,name:"KCC Mainnet",network:"KCC Mainnet",nativeCurrency:{decimals:18,name:"KCS",symbol:"KCS"},rpcUrls:{default:{http:["https://kcc-rpc.com"]},public:{http:["https://kcc-rpc.com"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.kcc.io/en"}}}),q=(0,b.a)({id:22776,name:"MAP Mainnet",network:"MAP Mainnet",nativeCurrency:{decimals:18,name:"MAPO",symbol:"MAPO"},rpcUrls:{default:{http:["https://rpc.maplabs.io"]},public:{http:["https://rpc.maplabs.io"]}},blockExplorers:{default:{name:"Explorer",url:"https://mapscan.io"}}}),G={eth:v.R,bsc:g.e,opBNB:T.V,polygon:C.y,fantom:y.Q,avalanche:E.p,arbitrum:k.y,optimism:Z.v,base:S.u,zkSync:w.j,classic:F.B,meter:M.A,iotex:P.p,klaytn:O._,mantle:A.Z,mapo:q,cronos:D.t,kcc:$,coreDao:z.O,ethw:L,eos:K.H,neonMainnet:R.e,linea:_.P,celo:B.D,confluxESpace:I.Z,gnosis:U.K,filecoin:H.y,shibarium:V,sepolia:W.F};var Q=a(18284),J=a(99076),X=a(48679),Y=a.n(X);function ee(){let[e,t]=(0,d.useState)(v.R),[a,b]=(0,d.useState)([]),[g,T]=(0,d.useState)("meToMe"),[C,y]=(0,d.useState)(),[E,k]=(0,d.useState)(),[Z,S]=(0,d.useState)(""),[w,F]=(0,d.useState)(0),[M,P]=(0,d.useState)(!1),[O,A]=(0,d.useState)(0),[D,z]=(0,d.useState)([]),[K,R]=(0,d.useState)(0),[_,B]=(0,d.useState)("tip"),I=(0,d.useCallback)((e,t)=>{z(a=>[(0,Q.My)(e,t),...a.length>=1e3?a.slice(0,1e3):a])},[]),U=(0,o.K)({chain:e,transport:E&&E.startsWith("wss")?(0,x.j)(E):(0,p.d)(E)}),H=a.map(e=>(0,f.L)(e));!function(e,t){let a=(0,d.useRef)(e);(0,d.useEffect)(()=>{a.current=e},[e]),(0,d.useEffect)(()=>{let e=!0;return async function(){for(;e&&null!==t;)await a.current(),await (0,Q._v)(t)}(),()=>{e=!1}},[t])}(async()=>{let e=await Promise.allSettled(H.map(e=>U.sendTransaction({account:e,to:"meToMe"===g?e.address:C,value:0n,...Z?{data:(0,h.$G)(Z)}:{},...w>0?"all"===_?{gasPrice:(0,u.f)(w.toString(),"gwei")}:{maxPriorityFeePerGas:(0,u.f)(w.toString(),"gwei")}:{}})));e.forEach((e,t)=>{let a=(0,Q.D2)(H[t].address);if("fulfilled"===e.status&&(I("".concat(a," ").concat(e.value),"success"),R(e=>e+1)),"rejected"===e.status){let t=e.reason,s="".concat(t.name,": ");"TransactionExecutionError"===t.name&&(s+=t.details),"Error"==t.name&&(s+=t.message),I("".concat(a," ").concat(s),"error")}})},M?O:null);let W=(0,d.useCallback)(()=>{if(0===a.length){I("No private key","error"),P(!1);return}if("manyToOne"===g&&!C){I("No address","error"),P(!1);return}P(!0)},[a.length,I,g,C]),{texts:V,updateLanguage:L}=(0,J.Z)();return(0,s.jsxs)("div",{className:" flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:" flex flex-col",children:[Y()()?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,s.jsx)("p",{}),V.chain,":"]}),(0,s.jsx)("div",{className:"main-item-txt",children:(0,s.jsx)("span",{children:V.selectTheChian})})]}):(0,s.jsxs)("div",{className:"main-item-txt",children:[(0,s.jsx)("p",{}),V.chain,"\xa0",(0,s.jsx)("span",{children:V.selectTheChian}),"\xa0:"]}),(0,s.jsx)(l.Z,{className:"TextField TextField-item",select:!0,defaultValue:"eth",size:"small",disabled:M,onChange:e=>{let a=e.target.value;t(G[a])},children:Object.entries(G).map(e=>{let[t,a]=e;return(0,s.jsx)(i.Z,{value:t,children:a.name},a.id)})})]}),(0,s.jsxs)("div",{className:" flex flex-col",children:[Y()()?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,s.jsx)("p",{}),V.PrivateKey,":"]}),(0,s.jsx)("div",{className:"main-item-txt",children:(0,s.jsx)("span",{children:V.oneperline})})]}):(0,s.jsxs)("div",{className:"main-item-txt",children:[(0,s.jsx)("p",{}),V.PrivateKey,"\xa0",(0,s.jsx)("span",{children:V.oneperline}),"\xa0:"]}),(0,s.jsx)(l.Z,{className:"TextField-item",multiline:!0,minRows:2,size:"small",placeholder:V.Privatekeywithor,disabled:M,onChange:e=>{let t=e.target.value,a=t.split("\n"),s=a.map(e=>{let t=e.trim();return/^[a-fA-F0-9]{64}$/.test(t)?"0x".concat(t):/^0x[a-fA-F0-9]{64}$/.test(t)?t:void 0}).filter(e=>e);b(s)}})]}),(0,s.jsxs)(n.Z,{row:!0,defaultValue:"meToMe",onChange:e=>{let t=e.target.value;T(t)},children:[(0,s.jsx)(r.Z,{value:"meToMe",control:(0,s.jsx)(c.Z,{}),label:V.Rotation,disabled:M}),(0,s.jsx)(r.Z,{value:"manyToOne",control:(0,s.jsx)(c.Z,{}),label:V.TurnOneMore,disabled:M})]}),"manyToOne"===g&&(0,s.jsxs)("div",{className:" flex flex-col",children:[Y()()?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,s.jsx)("p",{}),V.Addressto,":"]}),(0,s.jsx)("div",{className:"main-item-txt",children:(0,s.jsxs)("span",{children:[" ",V.req]})})]}):(0,s.jsxs)("div",{className:"main-item-txt",children:[(0,s.jsx)("p",{}),V.Addressto,"\xa0",(0,s.jsxs)("span",{children:[" ",V.req]}),"\xa0:"]}),(0,s.jsx)(l.Z,{className:"TextField-item",size:"small",placeholder:"Address",disabled:M,onChange:e=>{let t=e.target.value;(0,j.U)(t)&&y(t)}})]}),(0,s.jsxs)("div",{className:" flex flex-col",children:[Y()()?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,s.jsx)("p",{}),V.Inscription,":"]}),(0,s.jsx)("div",{className:"main-item-txt",children:(0,s.jsx)("span",{children:V.originalInscription})})]}):(0,s.jsxs)("div",{className:"main-item-txt",children:[(0,s.jsx)("p",{}),V.Inscription," \xa0",(0,s.jsx)("span",{children:V.originalInscription}),"\xa0:"]}),(0,s.jsx)(l.Z,{className:"TextField-item",size:"small",placeholder:"".concat('Data:,{"p":"asc-20","op":"mint","tick":"aval","amt":"100000000"}'),disabled:M,onChange:e=>{let t=e.target.value;S(t.trim())}})]}),(0,s.jsxs)("div",{className:" flex flex-col",children:[Y()()?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,s.jsx)("p",{}),V.RPC,":"]}),(0,s.jsx)("div",{className:"main-item-txt",children:(0,s.jsxs)("span",{children:[V.theDefault," "]})})]}):(0,s.jsxs)("div",{className:"main-item-txt",children:[(0,s.jsx)("p",{}),V.RPC," \xa0",(0,s.jsxs)("span",{children:[V.theDefault," "]}),"\xa0:"]}),(0,s.jsx)(l.Z,{className:"TextField-item",size:"small",placeholder:"RPC",disabled:M,onChange:e=>{let t=e.target.value;k(t)}})]}),(0,s.jsxs)(n.Z,{row:!0,defaultValue:"tip",onChange:e=>{let t=e.target.value;B(t)},children:[(0,s.jsx)(r.Z,{value:"tip",control:(0,s.jsx)(c.Z,{}),label:V.ExtraMinerTip,disabled:M}),(0,s.jsx)(r.Z,{value:"all",control:(0,s.jsx)(c.Z,{}),label:V.Totalgas,disabled:M})]}),(0,s.jsxs)("div",{className:" flex flex-col",children:[Y()()?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,s.jsx)("p",{}),"tip"===_?V.AdditionalMinerTip:V.Totalgas,":"]}),(0,s.jsx)("div",{className:"main-item-txt",children:(0,s.jsx)("span",{children:V.optional})})]}):(0,s.jsxs)("div",{className:"main-item-txt",children:[(0,s.jsx)("p",{}),"tip"===_?V.AdditionalMinerTip:V.Totalgas,"\xa0",(0,s.jsx)("span",{children:V.optional}),"\xa0:"]}),(0,s.jsx)(l.Z,{className:"TextField-item",type:"number",size:"small",placeholder:"".concat("tip"===_?V.Default0:V.DefaultLatest,", ").concat(V.Unitgwei,", ").concat(V.example),disabled:M,onChange:e=>{let t=Number(e.target.value);!Number.isNaN(t)&&t>=0&&F(t)}})]}),(0,s.jsxs)("div",{className:" flex flex-col",children:[Y()()?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"main-item-txt main-item-txt-1",children:[(0,s.jsx)("p",{}),V.IntervalTime,":"]}),(0,s.jsx)("div",{className:"main-item-txt",children:(0,s.jsx)("span",{children:V.minimum})})]}):(0,s.jsxs)("div",{className:"main-item-txt",children:[(0,s.jsx)("p",{}),V.IntervalTime," \xa0",(0,s.jsx)("span",{children:V.minimum}),"\xa0:"]}),(0,s.jsx)(l.Z,{className:"TextField-item",type:"number",size:"small",placeholder:V.Default0ms,disabled:M,onChange:e=>{let t=Number(e.target.value);!Number.isNaN(t)&&t>=0&&A(t)}})]}),(0,s.jsx)(m.Z,{className:"runBtn",variant:"contained",color:M?"error":"success",onClick:()=>{M?P(!1):W()},children:M?V.running:V.run}),(0,s.jsx)(N.Z,{title:V.Log,text:"(".concat(V.numberOfSuccesses," => ").concat(K,")"),logs:D,onClear:()=>{z([])}})]})}}},function(e){e.O(0,[590,37,153,692,971,472,744],function(){return e(e.s=32338)}),_N_E=e.O()}]);