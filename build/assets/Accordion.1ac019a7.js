import{r as o,W as ne,R as F,X as Z,Y as ae,Z as K,$ as L,a0 as M,a1 as z,a2 as S,a3 as B,j as $,a4 as j,a5 as J,a6 as se,a7 as D,a8 as C,a9 as W,aa as le,ab as N,ac as A,ad as I,ae as oe,I as ue}from"./index.72434430.js";function ie({onFocus:e}){let[t,r]=o.exports.useState(!0),n=ne();return t?F.createElement(Z,{as:"button",type:"button",features:ae.Focusable,onFocus:s=>{s.preventDefault();let a,u=50;function i(){if(u--<=0){a&&cancelAnimationFrame(a);return}if(e()){if(cancelAnimationFrame(a),!n.current)return;r(!1);return}a=requestAnimationFrame(i)}a=requestAnimationFrame(i)}}):null}const Q=o.exports.createContext(null);function de(){return{groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let s=(r=n.get(t))!=null?r:0;n.set(t,s+1);let a=Array.from(n.keys()).indexOf(t);function u(){let i=n.get(t);i>1?n.set(t,i-1):n.delete(t)}return[a,u]}}}function ce({children:e}){let t=o.exports.useRef(de());return o.exports.createElement(Q.Provider,{value:t},e)}function ee(e){let t=o.exports.useContext(Q);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let r=pe(),[n,s]=t.current.get(e,r);return o.exports.useEffect(()=>s,[]),n}function pe(){var e,t,r;let n=(r=(t=(e=o.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:t.current)!=null?r:null;if(!n)return Symbol();let s=[],a=n;for(;a;)s.push(a.index),a=a.return;return"$."+s.join(".")}var be="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\node_modules\\@headlessui\\react\\dist\\components\\tabs\\tabs.js",fe=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(fe||{}),me=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(me||{}),xe=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(xe||{});let ve={[0](e,t){var r;let n=C(e.tabs,c=>c.current),s=C(e.panels,c=>c.current),a=n.filter(c=>{var g;return!((g=c.current)!=null&&g.hasAttribute("disabled"))}),u={...e,tabs:n,panels:s};if(t.index<0||t.index>n.length-1){let c=D(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>D(Math.sign(t.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});if(a.length===0)return u;let g=D(c,{[0]:()=>n.indexOf(a[0]),[1]:()=>n.indexOf(a[a.length-1])});return{...u,selectedIndex:g===-1?e.selectedIndex:g}}let i=n.slice(0,t.index),b=[...n.slice(t.index),...i].find(c=>a.includes(c));if(!b)return u;let x=(r=n.indexOf(b))!=null?r:e.selectedIndex;return x===-1&&(x=e.selectedIndex),{...u,selectedIndex:x}},[1](e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],s=C([...e.tabs,t.tab],u=>u.current),a=(r=s.indexOf(n))!=null?r:e.selectedIndex;return a===-1&&(a=e.selectedIndex),{...e,tabs:s,selectedIndex:a}},[2](e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:C([...e.panels,t.panel],r=>r.current)}},[4](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}}},V=o.exports.createContext(null);V.displayName="TabsDataContext";function R(e){let t=o.exports.useContext(V);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,R),r}return t}let Y=o.exports.createContext(null);Y.displayName="TabsActionsContext";function H(e){let t=o.exports.useContext(Y);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,H),r}return t}function ge(e,t){return D(t.type,ve,e,t)}let he=o.exports.Fragment;function Ne(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:s=!1,onChange:a,selectedIndex:u=null,...i}=e;const b=n?"vertical":"horizontal",x=s?"manual":"auto";let c=u!==null,g=M(t),[d,h]=o.exports.useReducer(ge,{selectedIndex:u!=null?u:r,tabs:[],panels:[]}),f=o.exports.useMemo(()=>({selectedIndex:d.selectedIndex}),[d.selectedIndex]),O=z(a||(()=>{})),_=z(d.tabs),m=o.exports.useMemo(()=>({orientation:b,activation:x,...d}),[b,x,d]),v=S(p=>(h({type:1,tab:p}),()=>h({type:2,tab:p}))),y=S(p=>(h({type:3,panel:p}),()=>h({type:4,panel:p}))),w=S(p=>{k.current!==p&&O.current(p),c||h({type:0,index:p})}),k=z(c?e.selectedIndex:d.selectedIndex),q=o.exports.useMemo(()=>({registerTab:v,registerPanel:y,change:w}),[]);B(()=>{h({type:0,index:u!=null?u:r})},[u]),B(()=>{if(k.current===void 0||d.tabs.length<=0)return;let p=C(d.tabs,P=>P.current);p.some((P,l)=>d.tabs[l]!==P)&&w(p.indexOf(d.tabs[k.current]))});let G={ref:g};return F.createElement(ce,null,F.createElement(Y.Provider,{value:q},$(V.Provider,{value:m,children:[m.tabs.length<=0&&F.createElement(ie,{onFocus:()=>{var p,P;for(let l of _.current)if(((p=l.current)==null?void 0:p.tabIndex)===0)return(P=l.current)==null||P.focus(),!0;return!1}}),j({ourProps:G,theirProps:i,slot:f,defaultTag:he,name:"Tabs"})]},void 0,!0,{fileName:be,lineNumber:1,columnNumber:4037},this)))}let Ie="div";function Te(e,t){let{orientation:r,selectedIndex:n}=R("Tab.List"),s=M(t);return j({ourProps:{ref:s,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:Ie,name:"Tabs.List"})}let $e="button";function Pe(e,t){var r,n;let s=J(),{id:a=`headlessui-tabs-tab-${s}`,...u}=e,{orientation:i,activation:b,selectedIndex:x,tabs:c,panels:g}=R("Tab"),d=H("Tab"),h=R("Tab"),f=o.exports.useRef(null),O=M(f,t);B(()=>d.registerTab(f),[d,f]);let _=ee("tabs"),m=c.indexOf(f);m===-1&&(m=_);let v=m===x,y=S(l=>{var T;let U=l();if(U===W.Success&&b==="auto"){let te=(T=le(f))==null?void 0:T.activeElement,X=h.tabs.findIndex(re=>re.current===te);X!==-1&&d.change(X)}return U}),w=S(l=>{let T=c.map(U=>U.current).filter(Boolean);if(l.key===N.Space||l.key===N.Enter){l.preventDefault(),l.stopPropagation(),d.change(m);return}switch(l.key){case N.Home:case N.PageUp:return l.preventDefault(),l.stopPropagation(),y(()=>A(T,I.First));case N.End:case N.PageDown:return l.preventDefault(),l.stopPropagation(),y(()=>A(T,I.Last))}if(y(()=>D(i,{vertical(){return l.key===N.ArrowUp?A(T,I.Previous|I.WrapAround):l.key===N.ArrowDown?A(T,I.Next|I.WrapAround):W.Error},horizontal(){return l.key===N.ArrowLeft?A(T,I.Previous|I.WrapAround):l.key===N.ArrowRight?A(T,I.Next|I.WrapAround):W.Error}}))===W.Success)return l.preventDefault()}),k=o.exports.useRef(!1),q=S(()=>{var l;k.current||(k.current=!0,(l=f.current)==null||l.focus({preventScroll:!0}),d.change(m),oe(()=>{k.current=!1}))}),G=S(l=>{l.preventDefault()}),p=o.exports.useMemo(()=>({selected:v}),[v]),P={ref:O,onKeyDown:w,onMouseDown:G,onClick:q,id:a,role:"tab",type:se(e,f),"aria-controls":(n=(r=g[m])==null?void 0:r.current)==null?void 0:n.id,"aria-selected":v,tabIndex:v?0:-1};return j({ourProps:P,theirProps:u,slot:p,defaultTag:$e,name:"Tabs.Tab"})}let Ee="div";function ye(e,t){let{selectedIndex:r}=R("Tab.Panels"),n=M(t),s=o.exports.useMemo(()=>({selectedIndex:r}),[r]);return j({ourProps:{ref:n},theirProps:e,slot:s,defaultTag:Ee,name:"Tabs.Panels"})}let we="div",ke=K.RenderStrategy|K.Static;function Se(e,t){var r,n,s,a;let u=J(),{id:i=`headlessui-tabs-panel-${u}`,tabIndex:b=0,...x}=e,{selectedIndex:c,tabs:g,panels:d}=R("Tab.Panel"),h=H("Tab.Panel"),f=o.exports.useRef(null),O=M(f,t);B(()=>h.registerPanel(f),[h,f]);let _=ee("panels"),m=d.indexOf(f);m===-1&&(m=_);let v=m===c,y=o.exports.useMemo(()=>({selected:v}),[v]),w={ref:O,id:i,role:"tabpanel","aria-labelledby":(n=(r=g[m])==null?void 0:r.current)==null?void 0:n.id,tabIndex:v?b:-1};return!v&&((s=x.unmount)==null||s)&&!((a=x.static)!=null&&a)?F.createElement(Z,{as:"span","aria-hidden":"true",...w}):j({ourProps:w,theirProps:x,slot:y,defaultTag:we,features:ke,visible:v,name:"Tabs.Panel"})}let Ae=L(Pe),Re=L(Ne),Oe=L(Te),_e=L(ye),Ce=L(Se),De=Object.assign(Ae,{Group:Re,List:Oe,Panels:_e,Panel:Ce});var E="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\ui\\Accordion.jsx";const Le=({items:e,className:t="space-y-5"})=>{const[r,n]=o.exports.useState(null),[s,a]=o.exports.useState(!1),u=i=>{n(i),a(!s)};return $("div",{className:t,children:e.map((i,b)=>$("div",{className:"accordion shadow-base dark:shadow-none rounded-md",children:[$("div",{className:`flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 ${r===b?"bg-slate-50 dark:bg-slate-700 dark:bg-opacity-60 rounded-t-md ":"bg-white dark:bg-slate-700  rounded-md"}`,onClick:()=>u(b),children:[$("span",{children:[i.title," "]},void 0,!0,{fileName:E,lineNumber:28,columnNumber:13},void 0),$("span",{className:`text-slate-900 dark:text-white text-[22px] transition-all duration-300 h-5 ${r===b?"rotate-180 transform":""}`,children:$(ue,{icon:"heroicons-outline:chevron-down"},void 0,!1,{fileName:E,lineNumber:34,columnNumber:15},void 0)},void 0,!1,{fileName:E,lineNumber:29,columnNumber:13},void 0)]},void 0,!0,{fileName:E,lineNumber:20,columnNumber:11},void 0),r===b&&$("div",{className:`${b===r?"dark:border dark:border-slate-700 dark:border-t-0":"l"} text-sm text-slate-600 font-normal bg-white dark:bg-slate-900 dark:text-slate-300 rounded-b-md`,children:$("div",{className:"px-8 py-4",dangerouslySetInnerHTML:{__html:i.content}},void 0,!1,{fileName:E,lineNumber:46,columnNumber:15},void 0)},void 0,!1,{fileName:E,lineNumber:39,columnNumber:13},void 0)]},b,!0,{fileName:E,lineNumber:16,columnNumber:9},void 0))},void 0,!1,{fileName:E,lineNumber:14,columnNumber:5},void 0)};export{De as $,Le as A};
