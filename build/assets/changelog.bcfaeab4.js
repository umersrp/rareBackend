import{R as k,r,Z as B,$,a0 as E,aI as A,a2 as I,aJ as H,a7 as R,aK as D,a4 as w,a5 as U,aL as _,a6 as J,aM as G,j as a,aa as Y,ab as P,aN as Z,e as F,F as z,I as Q}from"./index.8fd1273d.js";import{B as W}from"./Badge.cae4aef4.js";var L;let q=(L=k.startTransition)!=null?L:function(e){e()};var X="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\node_modules\\@headlessui\\react\\dist\\components\\disclosure\\disclosure.js",ee=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ee||{}),ae=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(ae||{});let le={[0]:e=>({...e,disclosureState:R(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[3](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},T=r.exports.createContext(null);T.displayName="DisclosureContext";function O(e){let t=r.exports.useContext(T);if(t===null){let d=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,O),d}return t}let V=r.exports.createContext(null);V.displayName="DisclosureAPIContext";function K(e){let t=r.exports.useContext(V);if(t===null){let d=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,K),d}return t}let j=r.exports.createContext(null);j.displayName="DisclosurePanelContext";function te(){return r.exports.useContext(j)}function re(e,t){return R(t.type,le,e,t)}let ne=r.exports.Fragment;function se(e,t){let{defaultOpen:d=!1,...s}=e,f=r.exports.useRef(null),n=E(t,A(m=>{f.current=m},e.as===void 0||e.as===r.exports.Fragment)),i=r.exports.useRef(null),b=r.exports.useRef(null),u=r.exports.useReducer(re,{disclosureState:d?0:1,linkedPanel:!1,buttonRef:b,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:N,buttonId:c},x]=u,p=I(m=>{x({type:1});let h=Y(f);if(!h||!c)return;let o=(()=>m?m instanceof HTMLElement?m:m.current instanceof HTMLElement?m.current:h.getElementById(c):h.getElementById(c))();o==null||o.focus()}),g=r.exports.useMemo(()=>({close:p}),[p]),v=r.exports.useMemo(()=>({open:N===0,close:p}),[N,p]),S={ref:n};return k.createElement(T.Provider,{value:u},k.createElement(V.Provider,{value:g},k.createElement(H,{value:R(N,{[0]:D.Open,[1]:D.Closed})},w({ourProps:S,theirProps:s,slot:v,defaultTag:ne,name:"Disclosure"}))))}let ie="button";function oe(e,t){let d=U(),{id:s=`headlessui-disclosure-button-${d}`,...f}=e,[n,i]=O("Disclosure.Button"),b=te(),u=b===null?!1:b===n.panelId,N=r.exports.useRef(null),c=E(N,t,u?null:n.buttonRef),x=_();r.exports.useEffect(()=>{if(!u)return i({type:2,buttonId:s}),()=>{i({type:2,buttonId:null})}},[s,i,u]);let p=I(o=>{var y;if(u){if(n.disclosureState===1)return;switch(o.key){case P.Space:case P.Enter:o.preventDefault(),o.stopPropagation(),i({type:0}),(y=n.buttonRef.current)==null||y.focus();break}}else switch(o.key){case P.Space:case P.Enter:o.preventDefault(),o.stopPropagation(),i({type:0});break}}),g=I(o=>{switch(o.key){case P.Space:o.preventDefault();break}}),v=I(o=>{var y;Z(o.currentTarget)||e.disabled||(u?(i({type:0}),(y=n.buttonRef.current)==null||y.focus()):i({type:0}))}),S=r.exports.useMemo(()=>({open:n.disclosureState===0}),[n]),m=J(e,N),h=u?{ref:c,type:m,onKeyDown:p,onClick:v}:{ref:c,id:s,type:m,"aria-expanded":n.disclosureState===0,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:p,onKeyUp:g,onClick:v};return w({mergeRefs:x,ourProps:h,theirProps:f,slot:S,defaultTag:ie,name:"Disclosure.Button"})}let de="div",ue=B.RenderStrategy|B.Static;function me(e,t){let d=U(),{id:s=`headlessui-disclosure-panel-${d}`,...f}=e,[n,i]=O("Disclosure.Panel"),{close:b}=K("Disclosure.Panel"),u=_(),N=E(t,n.panelRef,v=>{q(()=>i({type:v?4:5}))});r.exports.useEffect(()=>(i({type:3,panelId:s}),()=>{i({type:3,panelId:null})}),[s,i]);let c=G(),x=(()=>c!==null?(c&D.Open)===D.Open:n.disclosureState===0)(),p=r.exports.useMemo(()=>({open:n.disclosureState===0,close:b}),[n,b]),g={ref:N,id:s};return a(j.Provider,{value:n.panelId,children:w({mergeRefs:u,ourProps:g,theirProps:f,slot:p,defaultTag:de,features:ue,visible:x,name:"Disclosure.Panel"})},void 0,!1,{fileName:X,lineNumber:1,columnNumber:4386},this)}let ce=$(se),pe=$(oe),fe=$(me),C=Object.assign(ce,{Button:pe,Panel:fe});var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\changelog.jsx";const M=[{version:"Version 2.0.1",date:"1 February 2023",changes:[{name:"Monochrome mode",tag:"added"},{name:"Axios configuration",tag:"fixed"},{name:"Other minor issues",tag:"fixed"}]},{version:"Version 2.0.0",date:"24 January 2023",changes:[{name:"Change log page added.",tag:"added"},{name:"Badge added in sidebar.",tag:"added"},{name:"Vuex replaced with pinia",tag:"update"},{name:"Webpack replaced with Vite.",tag:"update"},{name:"Other minor issues",tag:"fixed"}]},{version:"Version 1.0.1 ",date:"3 January 2023",changes:[{name:"RTL version added.",tag:"added"},{name:"Sidebar updated.",tag:"update"},{name:"Other minor issues",tag:"fixed"}]},{version:"Version 1.0.0 ",date:"29 December 2022",changes:[{name:"Initial Release"}]}],ve=()=>a("div",{className:"grid grid-cols-12 gap-5",children:[a("div",{className:"lg:col-span-8 col-span-12",children:a(F,{title:"Version's",children:[a("div",{children:a(W,{label:"new ",className:"bg-primary-500  text-white"},void 0,!1,{fileName:l,lineNumber:85,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:84,columnNumber:11},void 0),a("div",{className:"mt-6 space-y-5",children:M.map((e,t)=>a("div",{className:"mb-3",children:a(C,{children:({open:d})=>a(z,{children:[a(C.Button,{className:"bg-slate-50 dark:bg-slate-700 dark:bg-opacity-60 rounded-t-md flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4",children:[a("span",{children:[e.version,a("span",{className:"font-semibold text-xs text-slate-400",children:["- Published on ",e.date]},void 0,!0,{fileName:l,lineNumber:96,columnNumber:27},void 0)]},void 0,!0,{fileName:l,lineNumber:94,columnNumber:25},void 0),a("span",{className:` ${d&&"rotate-180 transform"}  transition-all duration-150 text-xl`,children:a(Q,{icon:"heroicons:chevron-down-solid"},void 0,!1,{fileName:l,lineNumber:105,columnNumber:27},void 0)},void 0,!1,{fileName:l,lineNumber:100,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:93,columnNumber:23},void 0),a(C.Panel,{children:a("div",{className:"text-sm text-slate-600 font-normal bg-white dark:bg-slate-900 dark:text-slate-300 rounded-b-md dark:border dark:border-slate-700 dark:border-t-0 border border-slate-100 border-t-0",children:a("div",{className:"px-8 py-4",children:e.changes.map((s,f)=>a("div",{children:a("div",{className:"flex space-x-3 items-center mt-2 text-slate-600 dark:text-slate-300 text-sm",children:[a("span",{className:"h-2 w-2 bg-primary-500 rounded-full"},void 0,!1,{fileName:l,lineNumber:114,columnNumber:35},void 0),a("span",{children:s.name},void 0,!1,{fileName:l,lineNumber:115,columnNumber:35},void 0),a("span",{className:` px-2 rounded-full text-xs capitalize
                                    ${s.tag==="added"?"bg-indigo-100 text-indigo-500":s.tag==="update"?"bg-yellow-100 text-yellow-500":s.tag==="fixed"?"bg-red-100 text-red-500":""}
                                    `,children:s.tag},void 0,!1,{fileName:l,lineNumber:117,columnNumber:35},void 0)]},void 0,!0,{fileName:l,lineNumber:113,columnNumber:33},void 0)},f,!1,{fileName:l,lineNumber:112,columnNumber:31},void 0))},void 0,!1,{fileName:l,lineNumber:110,columnNumber:27},void 0)},void 0,!1,{fileName:l,lineNumber:109,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:108,columnNumber:23},void 0)]},void 0,!0)},void 0,!1,{fileName:l,lineNumber:90,columnNumber:17},void 0)},t,!1,{fileName:l,lineNumber:89,columnNumber:15},void 0))},void 0,!1,{fileName:l,lineNumber:87,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:83,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:82,columnNumber:7},void 0),a("div",{className:"lg:col-span-4 col-span-12",children:a(F,{title:"CHANGELOG",children:[a("h5",{className:"text-xs font-medium",children:"VERSION HISTORY"},void 0,!1,{fileName:l,lineNumber:148,columnNumber:11},void 0),a("ul",{className:"space-y-3 mt-6 divide-y dark:divide-slate-700 divide-slate-100",children:M.map((e,t)=>a("li",{className:"flex justify-between items-center text-xs text-slate-600 dark:text-slate-300 pt-3",children:[a("span",{children:[e.version," "]},void 0,!0,{fileName:l,lineNumber:155,columnNumber:17},void 0),a("span",{children:e.date},void 0,!1,{fileName:l,lineNumber:156,columnNumber:17},void 0)]},t,!0,{fileName:l,lineNumber:151,columnNumber:15},void 0))},void 0,!1,{fileName:l,lineNumber:149,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:147,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:146,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:81,columnNumber:5},void 0);export{ve as default};
