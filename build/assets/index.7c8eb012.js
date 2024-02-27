import{at as L,j as e,R as W,as as H,s as f,aP as g,r as b,E as v,c as l,i as C,bi as z,I as h,S as E,ak as S,bj as D,a as y,bk as j,bl as G,D as B,bm as U,f as N,bn as K}from"./index.93a34628.js";import{T as R}from"./Textarea.41ebf6ca.js";import{B as T}from"./Button.3115fc78.js";import{_ as O}from"./inheritsLoose.82f71f5a.js";import{f as Y,a as X,c as F}from"./Transition.45c1a454.js";function P(a,t){return a.classList?!!t&&a.classList.contains(t):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+t+" ")!==-1}function V(a,t){a.classList?a.classList.add(t):P(a,t)||(typeof a.className=="string"?a.className=a.className+" "+t:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+t))}function Q(a,t){return a.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function J(a,t){a.classList?a.classList.remove(t):typeof a.className=="string"?a.className=Q(a.className,t):a.setAttribute("class",Q(a.className&&a.className.baseVal||"",t))}var q=function(t,o){return t&&o&&o.split(" ").forEach(function(s){return V(t,s)})},A=function(t,o){return t&&o&&o.split(" ").forEach(function(s){return J(t,s)})},I=function(a){O(t,a);function t(){for(var s,m=arguments.length,c=new Array(m),u=0;u<m;u++)c[u]=arguments[u];return s=a.call.apply(a,[this].concat(c))||this,s.appliedClasses={appear:{},enter:{},exit:{}},s.onEnter=function(n,i){var r=s.resolveArguments(n,i),d=r[0],x=r[1];s.removeClasses(d,"exit"),s.addClass(d,x?"appear":"enter","base"),s.props.onEnter&&s.props.onEnter(n,i)},s.onEntering=function(n,i){var r=s.resolveArguments(n,i),d=r[0],x=r[1],p=x?"appear":"enter";s.addClass(d,p,"active"),s.props.onEntering&&s.props.onEntering(n,i)},s.onEntered=function(n,i){var r=s.resolveArguments(n,i),d=r[0],x=r[1],p=x?"appear":"enter";s.removeClasses(d,p),s.addClass(d,p,"done"),s.props.onEntered&&s.props.onEntered(n,i)},s.onExit=function(n){var i=s.resolveArguments(n),r=i[0];s.removeClasses(r,"appear"),s.removeClasses(r,"enter"),s.addClass(r,"exit","base"),s.props.onExit&&s.props.onExit(n)},s.onExiting=function(n){var i=s.resolveArguments(n),r=i[0];s.addClass(r,"exit","active"),s.props.onExiting&&s.props.onExiting(n)},s.onExited=function(n){var i=s.resolveArguments(n),r=i[0];s.removeClasses(r,"exit"),s.addClass(r,"exit","done"),s.props.onExited&&s.props.onExited(n)},s.resolveArguments=function(n,i){return s.props.nodeRef?[s.props.nodeRef.current,n]:[n,i]},s.getClassNames=function(n){var i=s.props.classNames,r=typeof i=="string",d=r&&i?i+"-":"",x=r?""+d+n:i[n],p=r?x+"-active":i[n+"Active"],Z=r?x+"-done":i[n+"Done"];return{baseClassName:x,activeClassName:p,doneClassName:Z}},s}var o=t.prototype;return o.addClass=function(m,c,u){var n=this.getClassNames(c)[u+"ClassName"],i=this.getClassNames("enter"),r=i.doneClassName;c==="appear"&&u==="done"&&r&&(n+=" "+r),u==="active"&&m&&Y(m),n&&(this.appliedClasses[c][u]=n,q(m,n))},o.removeClasses=function(m,c){var u=this.appliedClasses[c],n=u.base,i=u.active,r=u.done;this.appliedClasses[c]={},n&&A(m,n),i&&A(m,i),r&&A(m,r)},o.render=function(){var m=this.props;m.classNames;var c=L(m,["classNames"]);return e(X,{...c,onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited})},t}(W.Component);I.defaultProps={classNames:""};I.propTypes=H({},X.propTypes,{classNames:F,onEnter:f.exports.func,onEntering:f.exports.func,onEntered:f.exports.func,onExit:f.exports.func,onExiting:f.exports.func,onExited:f.exports.func});const $=I,k=[{value:"online",label:"Active",activeClass:"ring-success-500 border-success-500"},{value:"busy",label:"Do Not Disturb",activeClass:"ring-danger-500 border-danger-500"},{value:"away",label:"Away",activeClass:"ring-warning-500 border-warning-500"},{value:"offline",label:"Offline",activeClass:"ring-warning-500 border-warning-500"}],_=()=>{const{openProfile:a}=g(c=>c.chat),[t,o]=b.exports.useState("online"),s=b.exports.useRef(null),m=v();return e("div",{children:l("header",{children:[l("div",{className:"flex px-6 pt-6",children:[e("div",{className:"flex-1",children:l("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-10 w-10 rounded-full",children:e("img",{src:C,alt:"",className:"w-full h-full object-cover rounded-full"})})}),l("div",{className:"flex-1 text-start",children:[l("span",{className:"block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px]",children:["Jane Cooper",e("span",{className:"status bg-success-500 inline-block h-[10px] w-[10px] rounded-full ml-3"})]}),e("span",{className:"block text-slate-500 dark:text-slate-300 text-xs font-normal",children:"Available"})]})]})}),e("div",{className:"flex-none",children:e("div",{className:"h-8 w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full cursor-pointer",onClick:()=>m(z(!0)),children:e(h,{icon:"heroicons-outline:dots-horizontal"})})})]}),e($,{in:a,timeout:300,nodeRef:s,classNames:"profileAnimation",unmountOnExit:!0,children:e("div",{ref:s,className:"absolute bg-white dark:bg-slate-800 rounded-md h-full left-0 top-0 bottom-0  w-full z-[9]",children:l(E,{className:"h-full p-6",children:[e("div",{className:"text-right",children:e("div",{className:"h-8 w-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 inline-flex ml-auto flex-col justify-center items-center text-xl rounded-full cursor-pointer",onClick:()=>m(z(!1)),children:e(h,{icon:"heroicons-outline:x"})})}),l("header",{className:"mx-auto max-w-[200px] mt-6 text-center",children:[l("div",{className:"h-16 w-16 rounded-full border border-slate-400 p-[2px] shadow-md mx-auto mb-3 relative",children:[e("img",{src:C,alt:"",className:"block w-full h-full rounded-full object-contain"}),e("span",{className:`status inline-block h-3 w-3 rounded-full absolute -right-1 top-3 border border-white
                ${t==="online"?"bg-success-500":""}
                ${t==="away"?"bg-warning-500":""}
                ${t==="busy"?"bg-danger-500":""}
                ${t==="offline"?"bg-secondary-500":""}


                `})]}),e("span",{className:"block text-slate-600 dark:text-slate-300 text-sm",children:"Jane Cooper"}),e("span",{className:"block text-slate-500 dark:text-slate-300 text-xs",children:"Admin"})]}),e("div",{className:"my-8",children:e(R,{label:"About",placeholder:"About ypur self"})}),l("div",{className:"mb-8",children:[e("span",{className:"form-label",children:"Status"}),k==null?void 0:k.map(c=>e(S,{label:c.label,name:"status",value:c.value,checked:t===c.value,onChange:u=>o(u.target.value),activeClass:c.activeClass},c.value))]}),e(T,{text:"Logout",className:"btn-dark "})]})})})]})})},ee=({contact:a})=>{const{fullName:t,avatar:o,status:s,lastmessage:m,unredmessage:c}=a,u=v();return e("div",{className:"block w-full py-5 focus:ring-0 outline-none cursor-pointer group transition-all duration-150 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:bg-opacity-70",onClick:()=>{u(D({contact:a,activechat:!0}))},children:l("div",{className:"flex space-x-3 px-6 rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:l("div",{className:"h-10 w-10 rounded-full relative",children:[e("span",{className:`  status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0
                ${s==="active"?"bg-success-500":"bg-secondary-500"}
              `}),e("img",{src:o,alt:"",className:"block w-full h-full object-cover rounded-full"})]})}),l("div",{className:"flex-1 text-start flex",children:[l("div",{className:"flex-1",children:[e("span",{className:"block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px]",children:t}),e("span",{className:"block text-slate-600 dark:text-slate-300 text-xs font-normal",children:m.slice(0,14)+"..."})]}),l("div",{className:"flex-none ltr:text-right rtl:text-end",children:[e("span",{className:"block text-xs text-slate-400 dark:text-slate-400 font-normal",children:"12:20 pm"}),c>0&&e("span",{className:"inline-flex flex-col items-center justify-center text-[10px] font-medium w-4 h-4 bg-[#FFC155] text-white rounded-full",children:c})]})]})]})})},M=[{label:"Remove",link:"#"},{label:"Forward",link:"#"}],se=()=>{const a=new Date,t=a.getHours(),o=a.getMinutes(),s=t>=12?"pm":"am",m=t%12||12,c=o<10?"0"+o:o;return m+":"+c+" "+s},ae=()=>{const{activechat:a,openinfo:t,mobileChatSidebar:o,messFeed:s,user:m}=g(d=>d.chat),{width:c,breakpoints:u}=y(),n=v(),i=d=>{d.target.value&&n(U({content:d.target.value,sender:"me",img:C})),d.target.value=""},r=b.exports.useRef(null);return b.exports.useEffect(()=>{r.current.scrollTop=r.current.scrollHeight},[s]),l("div",{className:"h-full",children:[e("header",{className:"border-b border-slate-100 dark:border-slate-700",children:l("div",{className:"flex py-6 md:px-6 px-3 items-center",children:[e("div",{className:"flex-1",children:l("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[c<=u.lg&&e("span",{onClick:()=>n(j(!0)),className:"text-slate-900 dark:text-white cursor-pointer text-xl self-center ltr:mr-3 rtl:ml-3",children:e(h,{icon:"heroicons-outline:menu-alt-1"})}),e("div",{className:"flex-none",children:l("div",{className:"h-10 w-10 rounded-full relative",children:[e("span",{className:` status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0
                  ${m.status==="active"?"bg-success-500":"bg-secondary-500"}
                  `}),e("img",{src:m.avatar,alt:"",className:"w-full h-full object-cover rounded-full"})]})}),l("div",{className:"flex-1 text-start",children:[e("span",{className:"block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px] truncate",children:m.fullName}),e("span",{className:"block text-slate-500 dark:text-slate-300 text-xs font-normal",children:"Active now"})]})]})}),l("div",{className:"flex-none flex md:space-x-3 space-x-1 items-center rtl:space-x-reverse",children:[e("div",{className:"msg-action-btn",children:e(h,{icon:"heroicons-outline:phone"})}),e("div",{className:"msg-action-btn",children:e(h,{icon:"heroicons-outline:video-camera"})}),e("div",{onClick:()=>n(G(!t)),className:"msg-action-btn",children:e(h,{icon:"heroicons-outline:dots-horizontal"})})]})]})}),e("div",{className:"chat-content parent-height",children:e("div",{className:"msgs overflow-y-auto msg-height pt-6 space-y-6",ref:r,children:s.map((d,x)=>l("div",{className:"block md:px-6 px-4",children:[d.sender==="them"&&l("div",{className:"flex space-x-2 items-start group rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-8 w-8 rounded-full",children:e("img",{src:d.img,alt:"",className:"block w-full h-full object-cover rounded-full"})})}),l("div",{className:"flex-1 flex space-x-4 rtl:space-x-reverse",children:[l("div",{children:[e("div",{className:"text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all",children:d.content}),e("span",{className:"font-normal text-xs text-slate-400 dark:text-slate-400",children:"12:20 pm"})]}),e("div",{className:"opacity-0 invisible group-hover:opacity-100 group-hover:visible",children:e(B,{classMenuItems:" w-[100px] top-0",items:M,label:e("div",{className:"h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full",children:e(h,{icon:"heroicons-outline:dots-horizontal"})})})})]})]}),d.sender==="me"&&l("div",{className:"flex space-x-2 items-start justify-end group w-full rtl:space-x-reverse",children:[l("div",{className:"no flex space-x-4 rtl:space-x-reverse",children:[e("div",{className:"opacity-0 invisible group-hover:opacity-100 group-hover:visible",children:e(B,{classMenuItems:" w-[100px] left-0 top-0  ",items:M,label:e("div",{className:"h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900",children:e(h,{icon:"heroicons-outline:dots-horizontal"})})})}),l("div",{className:"whitespace-pre-wrap break-all",children:[e("div",{className:"text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1",children:d.content}),e("span",{className:"font-normal text-xs text-slate-400",children:se()})]})]}),e("div",{className:"flex-none",children:e("div",{className:"h-8 w-8 rounded-full",children:e("img",{src:m.avatar,alt:"",className:"block w-full h-full object-cover rounded-full"})})})]})]},x))})}),l("footer",{className:"md:px-6 px-4 sm:flex md:space-x-4 sm:space-x-2 rtl:space-x-reverse border-t md:pt-6 pt-4 border-slate-100 dark:border-slate-700",children:[l("div",{className:"flex-none sm:flex hidden md:space-x-3 space-x-1 rtl:space-x-reverse",children:[e("div",{className:"h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full",children:e(h,{icon:"heroicons-outline:link"})}),e("div",{className:"h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full",children:e(h,{icon:"heroicons-outline:emoji-happy"})})]}),l("div",{className:"flex-1 relative flex space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-1",children:e("textarea",{type:"text",placeholder:"Type your message...",className:"focus:ring-0 focus:outline-0 block w-full bg-transparent dark:text-white resize-none",onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),i(d))}})}),e("div",{className:"flex-none md:pr-0 pr-3",children:e("button",{type:"button",className:"h-8 w-8 bg-slate-900 text-white flex flex-col justify-center items-center text-lg rounded-full",children:e(h,{icon:"heroicons-outline:paper-airplane",className:"transform rotate-[60deg]"})})})]})]})]})},te="/assets/blank.5b559fe6.svg",le=()=>{const{width:a,breakpoints:t}=y(),o=v();return l("div",{className:"h-full flex flex-col items-center justify-center xl:space-y-2 space-y-6",children:[e("img",{src:te,alt:""}),e("h4",{className:"text-2xl text-slate-600 dark:text-slate-300 font-medium",children:"No message yet..."}),e("p",{className:"text-sm text-slate-500 lg:pt-0 pt-4",children:a>t.lg?e("span",{children:`don't worry, just take a deep breath & say "Hello"`}):e("span",{className:"btn btn-dark cursor-pointer",onClick:()=>o(j(!0)),children:"Start Conversation"})})]})},re="data:image/png;base64,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",ne="/assets/sd2.abc62df7.png",ie="/assets/sd3.a309167b.png",ce="/assets/sd4.6ac05f47.png",oe="data:image/png;base64,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",de="/assets/sd6.28112592.png",w=[{name:"facebook",icon:"bi:facebook",link:"#"},{name:"twitter",link:"#",icon:"bi:twitter"},{name:"instagram",link:"#",icon:"bi:instagram"}],me=()=>{const{activechat:a,user:t}=g(o=>o.chat);return l(E,{className:"h-full p-6",children:[e("h4",{className:"text-xl text-slate-900 font-medium mb-8",children:"About"}),e("div",{className:"h-[100px] w-[100px] rounded-full mx-auto mb-4",children:e("img",{src:t.avatar,alt:"",className:"block w-full h-full object-cover rounded-full"})}),l("div",{className:"text-center",children:[e("h5",{className:"text-base text-slate-600 dark:text-slate-300 font-medium mb-1",children:t.fullName}),e("h6",{className:"text-xs text-slate-600 dark:text-slate-300 font-normal",children:t.role})]}),l("ul",{className:"list-item mt-5 space-y-4 border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6",children:[l("li",{className:"flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]",children:[l("div",{className:"flex space-x-2 items-start rtl:space-x-reverse",children:[e(h,{icon:"heroicons-outline:location-marker",className:"text-base"}),e("span",{children:"Location"})]}),e("div",{className:"font-medium",children:"Bangladesh"})]}),l("li",{className:"flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]",children:[l("div",{className:"flex space-x-2 items-start rtl:space-x-reverse",children:[e(h,{icon:"heroicons-outline:user",className:"text-base"}),e("span",{children:"Members since"})]}),e("div",{className:"font-medium",children:"Oct 2021"})]}),l("li",{className:"flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]",children:[l("div",{className:"flex space-x-2 items-start rtl:space-x-reverse",children:[e(h,{icon:"heroicons-outline:translate",className:"text-base"}),e("span",{children:"Language"})]}),e("div",{className:"font-medium",children:"English"})]})]}),e("ul",{className:"list-item space-y-3 border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6 mt-5",children:w==null?void 0:w.map((o,s)=>e("li",{className:"text-sm text-slate-600 dark:text-slate-300 leading-[1]",children:l("button",{className:"flex space-x-2 rtl:space-x-reverse",children:[e(h,{icon:o.icon,className:"text-base"}),e("span",{className:"capitalize font-normal text-slate-600 dark:text-slate-300",children:o.name})]})},s))}),e("h4",{className:"py-4 text-sm text-secondary-500 dark:text-slate-300 font-normal",children:"Shared documents"}),l("ul",{className:"grid grid-cols-3 gap-2",children:[e("li",{className:"h-[46px]",children:e("img",{src:re,alt:"",className:"w-full h-full object-cover rounded-[3px]"})}),e("li",{className:"h-[46px]",children:e("img",{src:ne,alt:"",className:"w-full h-full object-cover rounded-[3px]"})}),e("li",{className:"h-[46px]",children:e("img",{src:ie,alt:"",className:"w-full h-full object-cover rounded-[3px]"})}),e("li",{className:"h-[46px]",children:e("img",{src:ce,alt:"",className:"w-full h-full object-cover rounded-[3px]"})}),e("li",{className:"h-[46px]",children:e("img",{src:oe,alt:"",className:"w-full h-full object-cover rounded-[3px]"})}),e("li",{className:"h-[46px]",children:e("img",{src:de,alt:"",className:"w-full h-full object-cover rounded-[3px]"})})]})]})},ve=()=>{const{width:a,breakpoints:t}=y(),o=v(),{activechat:s,openinfo:m,mobileChatSidebar:c,contacts:u,searchContact:n}=g(r=>r.chat),i=u==null?void 0:u.filter(r=>r.fullName.toLowerCase().includes(n.toLowerCase()));return l("div",{className:"flex lg:space-x-5 chat-height overflow-hidden relative rtl:space-x-reverse",children:[e("div",{className:`transition-all duration-150 flex-none min-w-[260px] 
        ${a<t.lg?"absolute h-full top-0 md:w-[260px] w-[200px] z-[999]":"flex-none min-w-[260px]"}
        ${a<t.lg&&c?"left-0 ":"-left-full "}
        `,children:l(N,{bodyClass:" relative p-0 h-full overflow-hidden ",className:"h-full",children:[e("div",{className:"border-b border-slate-100 dark:border-slate-700 pb-4",children:e(_,{})}),e("div",{className:"border-b border-slate-100 dark:border-slate-700 py-1",children:l("div",{className:"search px-3 mx-6 rounded flex items-center space-x-3 rtl:space-x-reverse",children:[e("div",{className:"flex-none text-base text-slate-900 dark:text-slate-400",children:e(h,{icon:"bytesize:search"})}),e("input",{onChange:r=>o(K(r.target.value)),placeholder:"Search...",className:"w-full flex-1 block bg-transparent placeholder:font-normal placeholder:text-slate-400 py-2 focus:ring-0 focus:outline-none dark:text-slate-200 dark:placeholder:text-slate-400"})]})}),e(E,{className:"contact-height",children:i==null?void 0:i.map((r,d)=>e(ee,{contact:r},d))})]})}),a<t.lg&&c&&e("div",{className:"overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter\r backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md",onClick:()=>o(j(!c))}),e("div",{className:"flex-1",children:l("div",{className:"parent flex space-x-5 h-full rtl:space-x-reverse",children:[e("div",{className:"flex-1",children:e(N,{bodyClass:"p-0 h-full",className:"h-full",children:s?e("div",{className:"divide-y divide-slate-100 dark:divide-slate-700 h-full",children:e(ae,{})}):e(le,{})})}),a>t.lg&&m&&s&&e("div",{className:"flex-none w-[285px]",children:e(N,{bodyClass:"p-0 h-full",className:"h-full",children:e(me,{})})})]})})]})};export{ve as default};
