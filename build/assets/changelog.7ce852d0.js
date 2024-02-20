import{R as I,r as s,$ as V,a0 as $,a1 as w,aJ as U,a3 as S,aK as J,a8 as R,aL as C,a5 as E,a6 as K,aM as A,a7 as G,aN as Y,j as a,ab as z,ac as k,aO as Q,c as u,C as L,F as W,I as Z}from"./index.3f28faea.js";import{B as _}from"./Badge.5118363e.js";var j;let q=(j=I.startTransition)!=null?j:function(e){e()};var X=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(X||{}),ee=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(ee||{});let te={[0]:e=>({...e,disclosureState:R(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[3](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},T=s.exports.createContext(null);T.displayName="DisclosureContext";function O(e){let t=s.exports.useContext(T);if(t===null){let i=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,O),i}return t}let B=s.exports.createContext(null);B.displayName="DisclosureAPIContext";function H(e){let t=s.exports.useContext(B);if(t===null){let i=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,H),i}return t}let M=s.exports.createContext(null);M.displayName="DisclosurePanelContext";function ae(){return s.exports.useContext(M)}function se(e,t){return R(t.type,te,e,t)}let ne=s.exports.Fragment;function re(e,t){let{defaultOpen:i=!1,...r}=e,x=s.exports.useRef(null),n=w(t,U(c=>{x.current=c},e.as===void 0||e.as===s.exports.Fragment)),l=s.exports.useRef(null),g=s.exports.useRef(null),d=s.exports.useReducer(se,{disclosureState:i?0:1,linkedPanel:!1,buttonRef:g,panelRef:l,buttonId:null,panelId:null}),[{disclosureState:f,buttonId:p},b]=d,m=S(c=>{b({type:1});let v=z(x);if(!v||!p)return;let o=(()=>c?c instanceof HTMLElement?c:c.current instanceof HTMLElement?c.current:v.getElementById(p):v.getElementById(p))();o==null||o.focus()}),y=s.exports.useMemo(()=>({close:m}),[m]),h=s.exports.useMemo(()=>({open:f===0,close:m}),[f,m]),D={ref:n};return I.createElement(T.Provider,{value:d},I.createElement(B.Provider,{value:y},I.createElement(J,{value:R(f,{[0]:C.Open,[1]:C.Closed})},E({ourProps:D,theirProps:r,slot:h,defaultTag:ne,name:"Disclosure"}))))}let le="button";function oe(e,t){let i=K(),{id:r=`headlessui-disclosure-button-${i}`,...x}=e,[n,l]=O("Disclosure.Button"),g=ae(),d=g===null?!1:g===n.panelId,f=s.exports.useRef(null),p=w(f,t,d?null:n.buttonRef),b=A();s.exports.useEffect(()=>{if(!d)return l({type:2,buttonId:r}),()=>{l({type:2,buttonId:null})}},[r,l,d]);let m=S(o=>{var P;if(d){if(n.disclosureState===1)return;switch(o.key){case k.Space:case k.Enter:o.preventDefault(),o.stopPropagation(),l({type:0}),(P=n.buttonRef.current)==null||P.focus();break}}else switch(o.key){case k.Space:case k.Enter:o.preventDefault(),o.stopPropagation(),l({type:0});break}}),y=S(o=>{switch(o.key){case k.Space:o.preventDefault();break}}),h=S(o=>{var P;Q(o.currentTarget)||e.disabled||(d?(l({type:0}),(P=n.buttonRef.current)==null||P.focus()):l({type:0}))}),D=s.exports.useMemo(()=>({open:n.disclosureState===0}),[n]),c=G(e,f),v=d?{ref:p,type:c,onKeyDown:m,onClick:h}:{ref:p,id:r,type:c,"aria-expanded":n.disclosureState===0,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:m,onKeyUp:y,onClick:h};return E({mergeRefs:b,ourProps:v,theirProps:x,slot:D,defaultTag:le,name:"Disclosure.Button"})}let ie="div",de=V.RenderStrategy|V.Static;function ce(e,t){let i=K(),{id:r=`headlessui-disclosure-panel-${i}`,...x}=e,[n,l]=O("Disclosure.Panel"),{close:g}=H("Disclosure.Panel"),d=A(),f=w(t,n.panelRef,h=>{q(()=>l({type:h?4:5}))});s.exports.useEffect(()=>(l({type:3,panelId:r}),()=>{l({type:3,panelId:null})}),[r,l]);let p=Y(),b=(()=>p!==null?(p&C.Open)===C.Open:n.disclosureState===0)(),m=s.exports.useMemo(()=>({open:n.disclosureState===0,close:g}),[n,g]),y={ref:f,id:r};return a(M.Provider,{value:n.panelId,children:E({mergeRefs:d,ourProps:y,theirProps:x,slot:m,defaultTag:ie,features:de,visible:b,name:"Disclosure.Panel"})})}let ue=$(re),pe=$(oe),me=$(ce),N=Object.assign(ue,{Button:pe,Panel:me});const F=[{version:"Version 2.0.1",date:"1 February 2023",changes:[{name:"Monochrome mode",tag:"added"},{name:"Axios configuration",tag:"fixed"},{name:"Other minor issues",tag:"fixed"}]},{version:"Version 2.0.0",date:"24 January 2023",changes:[{name:"Change log page added.",tag:"added"},{name:"Badge added in sidebar.",tag:"added"},{name:"Vuex replaced with pinia",tag:"update"},{name:"Webpack replaced with Vite.",tag:"update"},{name:"Other minor issues",tag:"fixed"}]},{version:"Version 1.0.1 ",date:"3 January 2023",changes:[{name:"RTL version added.",tag:"added"},{name:"Sidebar updated.",tag:"update"},{name:"Other minor issues",tag:"fixed"}]},{version:"Version 1.0.0 ",date:"29 December 2022",changes:[{name:"Initial Release"}]}],ge=()=>u("div",{className:"grid grid-cols-12 gap-5",children:[a("div",{className:"lg:col-span-8 col-span-12",children:u(L,{title:"Version's",children:[a("div",{children:a(_,{label:"new ",className:"bg-primary-500  text-white"})}),a("div",{className:"mt-6 space-y-5",children:F.map((e,t)=>a("div",{className:"mb-3",children:a(N,{children:({open:i})=>u(W,{children:[u(N.Button,{className:"bg-slate-50 dark:bg-slate-700 dark:bg-opacity-60 rounded-t-md flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4",children:[u("span",{children:[e.version,u("span",{className:"font-semibold text-xs text-slate-400",children:["- Published on ",e.date]})]}),a("span",{className:` ${i&&"rotate-180 transform"}  transition-all duration-150 text-xl`,children:a(Z,{icon:"heroicons:chevron-down-solid"})})]}),a(N.Panel,{children:a("div",{className:"text-sm text-slate-600 font-normal bg-white dark:bg-slate-900 dark:text-slate-300 rounded-b-md dark:border dark:border-slate-700 dark:border-t-0 border border-slate-100 border-t-0",children:a("div",{className:"px-8 py-4",children:e.changes.map((r,x)=>a("div",{children:u("div",{className:"flex space-x-3 items-center mt-2 text-slate-600 dark:text-slate-300 text-sm",children:[a("span",{className:"h-2 w-2 bg-primary-500 rounded-full"}),a("span",{children:r.name}),a("span",{className:` px-2 rounded-full text-xs capitalize
                                    ${r.tag==="added"?"bg-indigo-100 text-indigo-500":r.tag==="update"?"bg-yellow-100 text-yellow-500":r.tag==="fixed"?"bg-red-100 text-red-500":""}
                                    `,children:r.tag})]})},x))})})})]})})},t))})]})}),a("div",{className:"lg:col-span-4 col-span-12",children:u(L,{title:"CHANGELOG",children:[a("h5",{className:"text-xs font-medium",children:"VERSION HISTORY"}),a("ul",{className:"space-y-3 mt-6 divide-y dark:divide-slate-700 divide-slate-100",children:F.map((e,t)=>u("li",{className:"flex justify-between items-center text-xs text-slate-600 dark:text-slate-300 pt-3",children:[u("span",{children:[e.version," "]}),a("span",{children:e.date})]},t))})]})})]});export{ge as default};
