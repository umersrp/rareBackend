import{aP as v,R as $,E as N,j as e,F as A,c as s,I as g,T as W,aQ as V,aR as G,aS as X,aT as Y,w as L,x as R,aU as k,y as O,z as _,aV as S,l as J,aW as y,aq as w,aC as E,aX as P,aY as j,aZ as B,a_ as I,az as H,a$ as K,b0 as ee,r as T,b1 as F,Q as ae,a as Z,b2 as C,D as le,q as te,t as se,C as M,S as q,b3 as re,b4 as ie}from"./index.b108767f.js";import{B as ne}from"./Button.a838765d.js";import{C as oe}from"./Checkbox.8262aa41.js";import{M as Q}from"./Modal.dc1aa4b0.js";import{T as U}from"./Textarea.25e7205f.js";import{L as ce}from"./ListLoading.28285c89.js";import{B as de}from"./Badge.99446f77.js";const me=({todo:l})=>{const{id:a,title:r,image:h,isDone:o,category:m,isfav:i}=l;v(n=>n.todo);const[u,f]=$.useState(o),[x,p]=$.useState(i),d=n=>b=>{f(b.target.checked),c(X(n))},t=n=>b=>{p(b.target.checked),c(Y(n))},c=N();return e(A,{children:s("li",{className:"flex items-center px-6 space-x-4 py-6 hover:-translate-y-1 hover:shadow-todo transition-all duration-200 rtl:space-x-reverse",children:[e("div",{children:e(oe,{value:u,onChange:d(a)})}),s("label",{children:[e("input",{type:"checkbox",className:"hidden",checked:x,onChange:t(a)}),i?e(g,{icon:"heroicons:star-20-solid",className:"text-xl leading-[1] cursor-pointer text-[#FFCE30]"}):e(g,{icon:"heroicons:star",className:"text-xl leading-[1] cursor-pointer opacity-40 dark:text-white"})]}),e("span",{className:` ${o?"line-through dark:text-slate-300":""} flex-1 text-sm text-slate-600 dark:text-slate-300 truncate`,children:r}),e("div",{className:"flex",children:s("span",{className:"flex-none space-x-2 text-base text-secondary-500 flex rtl:space-x-reverse",children:[e("div",{className:"flex justify-start -space-x-1.5 min-w-[60px] rtl:space-x-reverse",children:h==null?void 0:h.map((n,b)=>e("div",{className:` ${o?" opacity-40":" opacity-100"} h-6 w-6 rounded-full ring-1 ring-secondary-500`,children:e(W,{placement:"top",arrow:!0,content:n.label,children:e("img",{src:n.image,alt:n.label,className:"w-full h-full rounded-full"})})},b))}),m==null?void 0:m.map((n,b)=>e("div",{children:e("span",{className:` bg-opacity-20 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block
            
             ${n.value==="team"?"bg-danger-500 text-danger-500":""}
                  ${n.value==="low"?"bg-success-500 text-success-500":""}
                  ${n.value==="medium"?"bg-warning-500 text-warning-500":""}
                  ${n.value==="high"?"bg-primary-500 text-primary-500":""}
                  ${n.value==="update"?"bg-info-500 text-info-500":""}
            `,children:n.label})},b)),e("button",{type:"button",className:"text-slate-400",onClick:()=>c(V(l)),children:e(g,{icon:"heroicons-outline:pencil-alt"})}),e("button",{type:"button",onClick:()=>c(G(a)),className:"transition duration-150 hover:text-danger-500 text-slate-400",children:e(g,{icon:"heroicons-outline:trash"})})]})})]})})},ue=L({title:R().required("Title is required"),assign:k().required("Assignee is required"),tags:k().required("Tag is required")}).required(),D={multiValue:(l,a)=>a.data.isFixed?{...l,opacity:"0.5"}:l,multiValueLabel:(l,a)=>a.data.isFixed?{...l,color:"#626262",paddingRight:6}:l,multiValueRemove:(l,a)=>a.data.isFixed?{...l,display:"none"}:l,option:(l,a)=>({...l,fontSize:"14px"})},he=[{value:"mahedi",label:"Mahedi Amin",image:P},{value:"sovo",label:"Sovo Haldar",image:j},{value:"rakibul",label:"Rakibul Islam",image:B},{value:"pritom",label:"Pritom Miha",image:I}],pe=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"},{value:"update",label:"update"}],xe=({data:l,...a})=>e(H.Option,{...a,children:s("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:l.image,alt:"",className:"w-full h-full rounded-full"})})}),e("span",{className:"flex-1",children:l.label})]})}),ge=()=>{var u,f,x,p;const{addModal:l}=v(d=>d.todo),a=N(),{register:r,control:h,formState:{errors:o},handleSubmit:m}=O({resolver:_(ue),mode:"all"});return e("div",{children:e(Q,{title:"Add Task",labelclassName:"btn-outline-dark",activeModal:l,onClose:()=>a(S(!1)),children:s("form",{onSubmit:m(d=>{a(K({id:ee(),isDone:!1,isfave:!1,image:d.assign,title:d.title,category:d.tags})),a(S(!1)),d.title="",d.tags="",d.assign=""}),className:"space-y-4 ",children:[e(J,{name:"title",label:"title",type:"text",placeholder:"Enter title",register:r,error:o.title}),s("div",{className:o.assign?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Assignee"}),e(y,{name:"assign",control:h,render:({field:d})=>e(w,{...d,options:he,styles:D,className:"react-select",classNamePrefix:"select",isMulti:!0,components:{Option:xe},id:"icon_s"})}),o.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((u=o.assign)==null?void 0:u.message)||((f=o.assign)==null?void 0:f.label.message)})]}),s("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Due Date"}),e(E,{className:"form-control py-2",id:"default-picker"})]}),s("div",{className:o.tags?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Tag"}),e(y,{name:"tags",control:h,render:({field:d})=>e(w,{...d,options:pe,styles:D,className:"react-select",classNamePrefix:"select",isMulti:!0,id:"icon_s"})}),o.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((x=o.tags)==null?void 0:x.message)||((p=o.tags)==null?void 0:p.label.message)})]}),e(U,{label:"Description",placeholder:"Description"}),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"})})]})})})},fe=L({title:R().required("Title is required"),assign:k().required("Assignee is required"),tags:k().required("Tag is required")}).required(),z={multiValue:(l,a)=>a.data.isFixed?{...l,opacity:"0.5"}:l,multiValueLabel:(l,a)=>a.data.isFixed?{...l,color:"#626262",paddingRight:6}:l,multiValueRemove:(l,a)=>a.data.isFixed?{...l,display:"none"}:l,option:(l,a)=>({...l,fontSize:"14px"})},be=[{value:"mahedi",label:"Mahedi Amin",image:P},{value:"sovo",label:"Sovo Haldar",image:j},{value:"rakibul",label:"Rakibul Islam",image:B},{value:"pritom",label:"Pritom Miha",image:I}],ve=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"},{value:"update",label:"update"}],Ne=({data:l,...a})=>e(H.Option,{...a,children:s("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:l.image,alt:"",className:"w-full h-full rounded-full"})})}),e("span",{className:"flex-1",children:l.label})]})}),ke=()=>{var x,p,d,t,c;const{editModal:l,editItem:a}=v(n=>n.todo),r=N(),{register:h,control:o,reset:m,formState:{errors:i},handleSubmit:u}=O({resolver:_(fe),mode:"all"});return T.exports.useEffect(()=>{m(a)},[a]),e(Q,{title:"Edit Task",activeModal:l,onClose:()=>r(F(!1)),children:s("form",{onSubmit:u(n=>{r(V({id:a.id,title:n.title,image:n.assign,category:n.tags})),r(F(!1)),ae.info("Edit Successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}),className:"space-y-4 ",children:[s("div",{className:`fromGroup  ${i.title?"has-error":""}`,children:[s("div",{className:" relative",children:[e("input",{type:"text",defaultValue:a.title,...h("title"),className:"form-control py-2"}),i.title&&e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse",children:e("span",{className:"text-danger-500",children:e(g,{icon:"heroicons-outline:information-circle"})})})]}),i.title&&e("div",{className:"mt-2 text-danger-500 block text-sm",children:(x=i.title)==null?void 0:x.message})]}),s("div",{className:i.assign?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Assignee"}),e(y,{name:"assign",control:o,render:({field:n})=>e(w,{...n,options:be,styles:z,className:"react-select",classNamePrefix:"select",isSearchable:!1,defaultValue:a.image,isMulti:!0,components:{Option:Ne},id:"icon_s"})}),i.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((p=i.assign)==null?void 0:p.message)||((d=i.assign)==null?void 0:d.label.message)})]}),s("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Due Date"}),e(E,{className:"form-control py-2",id:"default-picker"})]}),s("div",{className:i.tags?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Tag"}),e(y,{name:"tags",control:o,render:({field:n})=>e(w,{...n,options:ve,styles:z,className:"react-select",defaultValue:a.category,classNamePrefix:"select",isMulti:!0,id:"icon_s"})}),i.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((t=i.tags)==null?void 0:t.message)||((c=i.tags)==null?void 0:c.label.message)})]}),e(U,{label:"Description",placeholder:"Description"}),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Update"})})]})})},ye=({filter:l,item:a,onClick:r})=>e("li",{children:s("label",{onClick:r,className:` flex items-center cursor-pointer px-2 py-3 rounded
                   ${l===a.value?"bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200":"  text-slate-600 dark:text-slate-300 "}
                      `,children:[s("div",{className:"flex-1 flex space-x-2 rtl:space-x-reverse",children:[e("span",{className:` text-xl
                        ${l===a.value?" text-slate-900 dark:text-slate-100":" text-slate-400 dark:text-slate-400"}
                `,children:e(g,{icon:a.icon})}),e("span",{className:` capitalize text-sm
                        ${l===a.value?" font-medium":"font-normal"}
                      `,children:a.name})]}),e("span",{className:"flex-none font-normal capitalize text-sm",children:a.count})]})}),we=({onClick:l,item:a,filter:r})=>s("li",{onClick:l,className:` flex space-x-2 
                      text-sm capitalize py-2 cursor-pointer
                       items-center rtl:space-x-reverse
                        ${r===a.value?"font-medium text-slate-800 dark:text-slate-300":"font-normal text-slate-600 dark:text-slate-300"}
                        `,children:[e("span",{className:`
                                ${a.value==="team"?"bg-danger-500 ring-danger-500":""}
                                ${a.value==="low"?"bg-success-500 ring-success-500":""}
                                ${a.value==="medium"?"bg-warning-500 ring-warning-500":""}
                                ${a.value==="high"?"bg-primary-500 ring-primary-500":""}
                                ${a.value==="update"?"bg-info-500 ring-info-500":""}
                                ${r===a.value?"ring-4":"ring-0"}
                                
                  inline-block h-2 w-2 rounded-full ring-opacity-30 transition-all duration-150 `}),e("span",{className:"transition duration-150",children:a.name})]}),Se=({onChange:l})=>{const{width:a,breakpoints:r}=Z(),{mobileTodoSidebar:h}=v(i=>i.todo),o=[{name:"Reset Sort",icon:"heroicons-outline:sort-ascending"},{name:"Sort A-Z ",icon:"heroicons-outline:sort-ascending"},{name:" Sort Z-A ",icon:"heroicons-outline:sort-descending"}],m=N();return s("div",{className:"md:flex justify-between items-center sticky bg-white dark:bg-slate-800 top-0 pt-6 pb-4 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 rounded-t-md",children:[s("div",{className:"flex items-center space-x-3 rtl:space-x-reverse",children:[a<r.lg&&e("div",{className:"md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:bg-slate-900\r dark:text-slate-400 flex flex-col justify-center items-center md:text-base\r text-sm rounded-full cursor-pointer",onClick:()=>m(C(!h)),children:e(g,{icon:"heroicons-outline:menu-alt-2"})}),s("div",{className:"max-w-[180px] flex items-center space-x-1 rtl:space-x-reverse",children:[e("div",{className:"flex-none dark:text-slate-300",children:e(g,{icon:"heroicons-outline:search"})}),e("div",{className:"flex-1",children:e("input",{onChange:l,type:"text",placeholder:"Search Task",className:"bg-transparent text-sm font-regular text-slate-600 dark:text-slate-300 transition duration-150 rounded px-2 py-1 focus:outline-none"})})]})]}),e("div",{className:"md:block hidden",children:e(le,{classMenuItems:"w-[130px]",label:e("span",{className:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400 bg-slate-100",children:e(g,{icon:"heroicons-outline:dots-vertical"})}),children:o.map((i,u)=>e(te.Item,{children:s("div",{className:`
                
                  hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70  dark:text-slate-300 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  text-slate-600 capitalize rtl:space-x-reverse `,children:[e("span",{className:"text-base",children:e(g,{icon:i.icon})}),e("span",{children:i.name})]})},u))})})]})},Te=[{value:"all",name:"My Task",icon:"uil:image-v"},{value:"fav",name:"Starred",icon:"heroicons:star"},{value:"done",name:"Completed",icon:"heroicons:document-check"},{value:"trash",name:"Trash",icon:"heroicons:trash"}],Ce=[{name:"Team",value:"team"},{name:"low",value:"low"},{name:"medium",value:"medium"},{name:"high",value:"high"},{name:"update",value:"update"}],Ve=()=>{const{todos:l,editModal:a,filter:r,todoSearch:h,mobileTodoSidebar:o}=v(t=>t.todo),{width:m,breakpoints:i}=Z(),u=N(),[f,x]=T.exports.useState(!1),p=l.filter(t=>h?t.title.toLowerCase().includes(h.toLowerCase()):!0).filter(t=>{if(r==="all")return t;if(r==="fav")return t.isfav;if(r==="done")return t.isDone;if(r==="team")return t.category.some(c=>c.value==="team");if(r==="low")return t.category.some(c=>c.value==="low");if(r==="medium")return t.category.some(c=>c.value==="medium");if(r==="high")return t.category.some(c=>c.value==="high");if(r==="update")return t.category.some(c=>c.value==="update")});T.exports.useEffect(()=>{x(!0),setTimeout(()=>{x(!1)},500),m<i.lg&&o&&u(C(!1))},[r]);const d=t=>{u(ie(t))};return s(A,{children:[e(se,{}),s("div",{className:"flex md:space-x-5 app_height overflow-hidden relative rtl:space-x-reverse",children:[e("div",{className:`transition-all duration-150 flex-none min-w-[260px] 
        ${m<i.lg?"absolute h-full top-0 md:w-[260px] w-[200px] z-[999]":"flex-none min-w-[260px]"}
        ${m<i.lg&&o?"left-0 ":"-left-full "}
        `,children:s(M,{bodyClass:" py-6 h-full flex flex-col",className:"h-full",children:[e("div",{className:"flex-1 h-full px-6",children:e(ne,{icon:"heroicons-outline:plus",text:"Add Task",className:"btn-dark w-full block  ",onClick:()=>u(S(!0))})}),s(q,{className:"h-full px-6 ",children:[e("ul",{className:"list mt-6",children:Te.map((t,c)=>e(ye,{filter:r,item:t,onClick:()=>d(t.value)},c))}),e("div",{className:"block py-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase",children:"Tags"}),e("ul",{children:Ce.map((t,c)=>e(we,{filter:r,item:t,onClick:()=>d(t.value)},c))})]})]})}),m<i.lg&&o&&e("div",{className:"overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter\r backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md",onClick:()=>u(C(!o))}),e("div",{className:"flex-1 md:w-[calc(100%-320px)]",children:e(M,{bodyClass:"p-0  h-full",className:"h-full",children:s(q,{className:"h-full all-todos overflow-x-hidden",children:[e(Se,{onChange:t=>u(re(t.target.value))}),f&&e(ce,{count:p.length}),!f&&s("ul",{className:"divide-y divide-slate-100 dark:divide-slate-700 -mb-6 h-full",children:[p.map((t,c)=>e(me,{todo:t},c)),p.length===0&&e("li",{className:"mx-6 mt-6",children:e(de,{label:"No Result Found",className:"bg-danger-500 text-white w-full block text-start"})})]})]})})})]}),e(ge,{}),e(ke,{})]})};export{Ve as default};
