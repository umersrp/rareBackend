import{aO as F,R as M,H as T,j as e,F as P,I as g,T as ee,aP as A,aQ as le,aR as ae,aS as ie,x as z,y as B,aT as S,z as U,A as I,V as H,aU as O,l as re,aV as C,ap as $,aB as Z,aW as Q,aX as W,aY as G,aZ as X,ay as Y,a_ as oe,a$ as se,r as _,b0 as V,Q as me,a as J,b1 as D,D as ne,q as te,t as ue,e as L,S as R,b2 as de,b3 as ce}from"./index.934a5c91.js";import{B as Ne}from"./Button.5f9e8419.js";import{C as be}from"./Checkbox.57e8b2e8.js";import{T as K}from"./Textarea.c2c12bce.js";import{L as ve}from"./ListLoading.d32e7fc3.js";import{B as fe}from"./Badge.ed591dab.js";var N="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\todo\\Todos.jsx";const pe=({todo:a})=>{const{id:l,title:o,image:p,isDone:u,category:v,isfav:s}=a;F(m=>m.todo);const[f,k]=M.useState(u),[x,h]=M.useState(s),c=m=>y=>{k(y.target.checked),d(ae(m))},r=m=>y=>{h(y.target.checked),d(ie(m))},d=T();return e(P,{children:e("li",{className:"flex items-center px-6 space-x-4 py-6 hover:-translate-y-1 hover:shadow-todo transition-all duration-200 rtl:space-x-reverse",children:[e("div",{children:e(be,{value:f,onChange:c(l)},void 0,!1,{fileName:N,lineNumber:32,columnNumber:11},void 0)},void 0,!1,{fileName:N,lineNumber:31,columnNumber:9},void 0),e("label",{children:[e("input",{type:"checkbox",className:"hidden",checked:x,onChange:r(l)},void 0,!1,{fileName:N,lineNumber:36,columnNumber:11},void 0),s?e(g,{icon:"heroicons:star-20-solid",className:"text-xl leading-[1] cursor-pointer text-[#FFCE30]"},void 0,!1,{fileName:N,lineNumber:43,columnNumber:13},void 0):e(g,{icon:"heroicons:star",className:"text-xl leading-[1] cursor-pointer opacity-40 dark:text-white"},void 0,!1,{fileName:N,lineNumber:48,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:35,columnNumber:9},void 0),e("span",{className:` ${u?"line-through dark:text-slate-300":""} flex-1 text-sm text-slate-600 dark:text-slate-300 truncate`,children:o},void 0,!1,{fileName:N,lineNumber:55,columnNumber:9},void 0),e("div",{className:"flex",children:e("span",{className:"flex-none space-x-2 text-base text-secondary-500 flex rtl:space-x-reverse",children:[e("div",{className:"flex justify-start -space-x-1.5 min-w-[60px] rtl:space-x-reverse",children:p==null?void 0:p.map((m,y)=>e("div",{className:` ${u?" opacity-40":" opacity-100"} h-6 w-6 rounded-full ring-1 ring-secondary-500`,children:e(ee,{placement:"top",arrow:!0,content:m.label,children:e("img",{src:m.image,alt:m.label,className:"w-full h-full rounded-full"},void 0,!1,{fileName:N,lineNumber:74,columnNumber:21},void 0)},void 0,!1,{fileName:N,lineNumber:73,columnNumber:19},void 0)},y,!1,{fileName:N,lineNumber:67,columnNumber:17},void 0))},void 0,!1,{fileName:N,lineNumber:65,columnNumber:13},void 0),v==null?void 0:v.map((m,y)=>e("div",{children:e("span",{className:` bg-opacity-20 capitalize font-normal text-xs leading-4 px-[10px] py-[2px] rounded-full inline-block
            
             ${m.value==="team"?"bg-danger-500 text-danger-500":""}
                  ${m.value==="low"?"bg-success-500 text-success-500":""}
                  ${m.value==="medium"?"bg-warning-500 text-warning-500":""}
                  ${m.value==="high"?"bg-primary-500 text-primary-500":""}
                  ${m.value==="update"?"bg-info-500 text-info-500":""}
            `,children:m.label},void 0,!1,{fileName:N,lineNumber:85,columnNumber:17},void 0)},y,!1,{fileName:N,lineNumber:84,columnNumber:15},void 0)),e("button",{type:"button",className:"text-slate-400",onClick:()=>d(A(a)),children:e(g,{icon:"heroicons-outline:pencil-alt"},void 0,!1,{fileName:N,lineNumber:115,columnNumber:15},void 0)},void 0,!1,{fileName:N,lineNumber:110,columnNumber:13},void 0),e("button",{type:"button",onClick:()=>d(le(l)),className:"transition duration-150 hover:text-danger-500 text-slate-400",children:e(g,{icon:"heroicons-outline:trash"},void 0,!1,{fileName:N,lineNumber:122,columnNumber:15},void 0)},void 0,!1,{fileName:N,lineNumber:117,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:64,columnNumber:11},void 0)},void 0,!1,{fileName:N,lineNumber:63,columnNumber:9},void 0)]},void 0,!0,{fileName:N,lineNumber:30,columnNumber:7},void 0)},void 0,!1)};var n="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\todo\\AddTodo.jsx";const he=z({title:B().required("Title is required"),assign:S().required("Assignee is required"),tags:S().required("Tag is required")}).required(),E={multiValue:(a,l)=>l.data.isFixed?{...a,opacity:"0.5"}:a,multiValueLabel:(a,l)=>l.data.isFixed?{...a,color:"#626262",paddingRight:6}:a,multiValueRemove:(a,l)=>l.data.isFixed?{...a,display:"none"}:a,option:(a,l)=>({...a,fontSize:"14px"})},xe=[{value:"mahedi",label:"Mahedi Amin",image:Q},{value:"sovo",label:"Sovo Haldar",image:W},{value:"rakibul",label:"Rakibul Islam",image:G},{value:"pritom",label:"Pritom Miha",image:X}],ge=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"},{value:"update",label:"update"}],ke=({data:a,...l})=>e(Y.Option,{...l,children:e("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:a.image,alt:"",className:"w-full h-full rounded-full"},void 0,!1,{fileName:n,lineNumber:82,columnNumber:13},void 0)},void 0,!1,{fileName:n,lineNumber:81,columnNumber:11},void 0)},void 0,!1,{fileName:n,lineNumber:80,columnNumber:9},void 0),e("span",{className:"flex-1",children:a.label},void 0,!1,{fileName:n,lineNumber:89,columnNumber:9},void 0)]},void 0,!0,{fileName:n,lineNumber:79,columnNumber:7},void 0)},void 0,!1,{fileName:n,lineNumber:78,columnNumber:5},void 0),ye=()=>{var f,k,x,h;const{addModal:a}=F(c=>c.todo),l=T(),{register:o,control:p,formState:{errors:u},handleSubmit:v}=U({resolver:I(he),mode:"all"});return e("div",{children:e(H,{title:"Add Task",labelclassName:"btn-outline-dark",activeModal:a,onClose:()=>l(O(!1)),children:e("form",{onSubmit:v(c=>{l(oe({id:se(),isDone:!1,isfave:!1,image:c.assign,title:c.title,category:c.tags})),l(O(!1)),c.title="",c.tags="",c.assign=""}),className:"space-y-4 ",children:[e(re,{name:"title",label:"title",type:"text",placeholder:"Enter title",register:o,error:u.title},void 0,!1,{fileName:n,lineNumber:135,columnNumber:11},void 0),e("div",{className:u.assign?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Assignee"},void 0,!1,{fileName:n,lineNumber:144,columnNumber:13},void 0),e(C,{name:"assign",control:p,render:({field:c})=>e($,{...c,options:xe,styles:E,className:"react-select",classNamePrefix:"select",isMulti:!0,components:{Option:ke},id:"icon_s"},void 0,!1,{fileName:n,lineNumber:151,columnNumber:17},void 0)},void 0,!1,{fileName:n,lineNumber:147,columnNumber:13},void 0),u.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((f=u.assign)==null?void 0:f.message)||((k=u.assign)==null?void 0:k.label.message)},void 0,!1,{fileName:n,lineNumber:166,columnNumber:15},void 0)]},void 0,!0,{fileName:n,lineNumber:143,columnNumber:11},void 0),e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Due Date"},void 0,!1,{fileName:n,lineNumber:172,columnNumber:13},void 0),e(Z,{className:"form-control py-2",id:"default-picker"},void 0,!1,{fileName:n,lineNumber:175,columnNumber:13},void 0)]},void 0,!0,{fileName:n,lineNumber:171,columnNumber:11},void 0),e("div",{className:u.tags?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Tag"},void 0,!1,{fileName:n,lineNumber:178,columnNumber:13},void 0),e(C,{name:"tags",control:p,render:({field:c})=>e($,{...c,options:ge,styles:E,className:"react-select",classNamePrefix:"select",isMulti:!0,id:"icon_s"},void 0,!1,{fileName:n,lineNumber:185,columnNumber:17},void 0)},void 0,!1,{fileName:n,lineNumber:181,columnNumber:13},void 0),u.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((x=u.tags)==null?void 0:x.message)||((h=u.tags)==null?void 0:h.label.message)},void 0,!1,{fileName:n,lineNumber:197,columnNumber:15},void 0)]},void 0,!0,{fileName:n,lineNumber:177,columnNumber:11},void 0),e(K,{label:"Description",placeholder:"Description"},void 0,!1,{fileName:n,lineNumber:202,columnNumber:11},void 0),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Submit"},void 0,!1,{fileName:n,lineNumber:205,columnNumber:13},void 0)},void 0,!1,{fileName:n,lineNumber:204,columnNumber:11},void 0)]},void 0,!0,{fileName:n,lineNumber:134,columnNumber:9},void 0)},void 0,!1,{fileName:n,lineNumber:128,columnNumber:7},void 0)},void 0,!1,{fileName:n,lineNumber:127,columnNumber:5},void 0)};var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\todo\\EditTodo.jsx";const we=z({title:B().required("Title is required"),assign:S().required("Assignee is required"),tags:S().required("Tag is required")}).required(),q={multiValue:(a,l)=>l.data.isFixed?{...a,opacity:"0.5"}:a,multiValueLabel:(a,l)=>l.data.isFixed?{...a,color:"#626262",paddingRight:6}:a,multiValueRemove:(a,l)=>l.data.isFixed?{...a,display:"none"}:a,option:(a,l)=>({...a,fontSize:"14px"})},Fe=[{value:"mahedi",label:"Mahedi Amin",image:Q},{value:"sovo",label:"Sovo Haldar",image:W},{value:"rakibul",label:"Rakibul Islam",image:G},{value:"pritom",label:"Pritom Miha",image:X}],Te=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"},{value:"update",label:"update"}],Se=({data:a,...l})=>e(Y.Option,{...l,children:e("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:a.image,alt:"",className:"w-full h-full rounded-full"},void 0,!1,{fileName:i,lineNumber:82,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:81,columnNumber:11},void 0)},void 0,!1,{fileName:i,lineNumber:80,columnNumber:9},void 0),e("span",{className:"flex-1",children:a.label},void 0,!1,{fileName:i,lineNumber:89,columnNumber:9},void 0)]},void 0,!0,{fileName:i,lineNumber:79,columnNumber:7},void 0)},void 0,!1,{fileName:i,lineNumber:78,columnNumber:5},void 0),Ce=()=>{var x,h,c,r,d;const{editModal:a,editItem:l}=F(m=>m.todo),o=T(),{register:p,control:u,reset:v,formState:{errors:s},handleSubmit:f}=U({resolver:I(we),mode:"all"});return _.exports.useEffect(()=>{v(l)},[l]),e(H,{title:"Edit Task",activeModal:a,onClose:()=>o(V(!1)),children:e("form",{onSubmit:f(m=>{o(A({id:l.id,title:m.title,image:m.assign,category:m.tags})),o(V(!1)),me.info("Edit Successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}),className:"space-y-4 ",children:[e("div",{className:`fromGroup  ${s.title?"has-error":""}`,children:[e("div",{className:" relative",children:[e("input",{type:"text",defaultValue:l.title,...p("title"),className:"form-control py-2"},void 0,!1,{fileName:i,lineNumber:146,columnNumber:13},void 0),s.title&&e("div",{className:"flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse",children:e("span",{className:"text-danger-500",children:e(g,{icon:"heroicons-outline:information-circle"},void 0,!1,{fileName:i,lineNumber:155,columnNumber:19},void 0)},void 0,!1,{fileName:i,lineNumber:154,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:153,columnNumber:15},void 0)]},void 0,!0,{fileName:i,lineNumber:145,columnNumber:11},void 0),s.title&&e("div",{className:"mt-2 text-danger-500 block text-sm",children:(x=s.title)==null?void 0:x.message},void 0,!1,{fileName:i,lineNumber:161,columnNumber:13},void 0)]},void 0,!0,{fileName:i,lineNumber:144,columnNumber:9},void 0),e("div",{className:s.assign?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Assignee"},void 0,!1,{fileName:i,lineNumber:168,columnNumber:11},void 0),e(C,{name:"assign",control:u,render:({field:m})=>e($,{...m,options:Fe,styles:q,className:"react-select",classNamePrefix:"select",isSearchable:!1,defaultValue:l.image,isMulti:!0,components:{Option:Se},id:"icon_s"},void 0,!1,{fileName:i,lineNumber:175,columnNumber:15},void 0)},void 0,!1,{fileName:i,lineNumber:171,columnNumber:11},void 0),s.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((h=s.assign)==null?void 0:h.message)||((c=s.assign)==null?void 0:c.label.message)},void 0,!1,{fileName:i,lineNumber:192,columnNumber:13},void 0)]},void 0,!0,{fileName:i,lineNumber:167,columnNumber:9},void 0),e("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Due Date"},void 0,!1,{fileName:i,lineNumber:198,columnNumber:11},void 0),e(Z,{className:"form-control py-2",id:"default-picker"},void 0,!1,{fileName:i,lineNumber:201,columnNumber:11},void 0)]},void 0,!0,{fileName:i,lineNumber:197,columnNumber:9},void 0),e("div",{className:s.tags?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Tag"},void 0,!1,{fileName:i,lineNumber:204,columnNumber:11},void 0),e(C,{name:"tags",control:u,render:({field:m})=>e($,{...m,options:Te,styles:q,className:"react-select",defaultValue:l.category,classNamePrefix:"select",isMulti:!0,id:"icon_s"},void 0,!1,{fileName:i,lineNumber:211,columnNumber:15},void 0)},void 0,!1,{fileName:i,lineNumber:207,columnNumber:11},void 0),s.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((r=s.tags)==null?void 0:r.message)||((d=s.tags)==null?void 0:d.label.message)},void 0,!1,{fileName:i,lineNumber:224,columnNumber:13},void 0)]},void 0,!0,{fileName:i,lineNumber:203,columnNumber:9},void 0),e(K,{label:"Description",placeholder:"Description"},void 0,!1,{fileName:i,lineNumber:229,columnNumber:9},void 0),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Update"},void 0,!1,{fileName:i,lineNumber:232,columnNumber:11},void 0)},void 0,!1,{fileName:i,lineNumber:231,columnNumber:9},void 0)]},void 0,!0,{fileName:i,lineNumber:143,columnNumber:7},void 0)},void 0,!1,{fileName:i,lineNumber:138,columnNumber:5},void 0)};var w="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\todo\\Topfilter.jsx";const $e=({filter:a,item:l,onClick:o})=>e("li",{children:e("label",{onClick:o,className:` flex items-center cursor-pointer px-2 py-3 rounded
                   ${a===l.value?"bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200":"  text-slate-600 dark:text-slate-300 "}
                      `,children:[e("div",{className:"flex-1 flex space-x-2 rtl:space-x-reverse",children:[e("span",{className:` text-xl
                        ${a===l.value?" text-slate-900 dark:text-slate-100":" text-slate-400 dark:text-slate-400"}
                `,children:e(g,{icon:l.icon},void 0,!1,{fileName:w,lineNumber:26,columnNumber:13},void 0)},void 0,!1,{fileName:w,lineNumber:17,columnNumber:11},void 0),e("span",{className:` capitalize text-sm
                        ${a===l.value?" font-medium":"font-normal"}
                      `,children:l.name},void 0,!1,{fileName:w,lineNumber:28,columnNumber:11},void 0)]},void 0,!0,{fileName:w,lineNumber:16,columnNumber:9},void 0),e("span",{className:"flex-none font-normal capitalize text-sm",children:l.count},void 0,!1,{fileName:w,lineNumber:38,columnNumber:9},void 0)]},void 0,!0,{fileName:w,lineNumber:6,columnNumber:7},void 0)},void 0,!1,{fileName:w,lineNumber:5,columnNumber:5},void 0);var j="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\todo\\BottomFilter.jsx";const je=({onClick:a,item:l,filter:o})=>e("li",{onClick:a,className:` flex space-x-2 
                      text-sm capitalize py-2 cursor-pointer
                       items-center rtl:space-x-reverse
                        ${o===l.value?"font-medium text-slate-800 dark:text-slate-300":"font-normal text-slate-600 dark:text-slate-300"}
                        `,children:[e("span",{className:`
                                ${l.value==="team"?"bg-danger-500 ring-danger-500":""}
                                ${l.value==="low"?"bg-success-500 ring-success-500":""}
                                ${l.value==="medium"?"bg-warning-500 ring-warning-500":""}
                                ${l.value==="high"?"bg-primary-500 ring-primary-500":""}
                                ${l.value==="update"?"bg-info-500 ring-info-500":""}
                                ${o===l.value?"ring-4":"ring-0"}
                                
                  inline-block h-2 w-2 rounded-full ring-opacity-30 transition-all duration-150 `},void 0,!1,{fileName:j,lineNumber:17,columnNumber:7},void 0),e("span",{className:"transition duration-150",children:l.name},void 0,!1,{fileName:j,lineNumber:48,columnNumber:7},void 0)]},void 0,!0,{fileName:j,lineNumber:5,columnNumber:5},void 0);var b="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\todo\\TodoHeader.jsx";const Oe=({onChange:a})=>{const{width:l,breakpoints:o}=J(),{mobileTodoSidebar:p}=F(s=>s.todo),u=[{name:"Reset Sort",icon:"heroicons-outline:sort-ascending"},{name:"Sort A-Z ",icon:"heroicons-outline:sort-ascending"},{name:" Sort Z-A ",icon:"heroicons-outline:sort-descending"}],v=T();return e("div",{className:"md:flex justify-between items-center sticky bg-white dark:bg-slate-800 top-0 pt-6 pb-4 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 rounded-t-md",children:[e("div",{className:"flex items-center space-x-3 rtl:space-x-reverse",children:[l<o.lg&&e("div",{className:"md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:bg-slate-900\r dark:text-slate-400 flex flex-col justify-center items-center md:text-base\r text-sm rounded-full cursor-pointer",onClick:()=>v(D(!p)),children:e(g,{icon:"heroicons-outline:menu-alt-2"},void 0,!1,{fileName:b,lineNumber:38,columnNumber:13},void 0)},void 0,!1,{fileName:b,lineNumber:30,columnNumber:11},void 0),e("div",{className:"max-w-[180px] flex items-center space-x-1 rtl:space-x-reverse",children:[e("div",{className:"flex-none dark:text-slate-300",children:e(g,{icon:"heroicons-outline:search"},void 0,!1,{fileName:b,lineNumber:43,columnNumber:13},void 0)},void 0,!1,{fileName:b,lineNumber:42,columnNumber:11},void 0),e("div",{className:"flex-1",children:e("input",{onChange:a,type:"text",placeholder:"Search Task",className:"bg-transparent text-sm font-regular text-slate-600 dark:text-slate-300 transition duration-150 rounded px-2 py-1 focus:outline-none"},void 0,!1,{fileName:b,lineNumber:46,columnNumber:13},void 0)},void 0,!1,{fileName:b,lineNumber:45,columnNumber:11},void 0)]},void 0,!0,{fileName:b,lineNumber:41,columnNumber:9},void 0)]},void 0,!0,{fileName:b,lineNumber:28,columnNumber:7},void 0),e("div",{className:"md:block hidden",children:e(ne,{classMenuItems:"w-[130px]",label:e("span",{className:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400 bg-slate-100",children:e(g,{icon:"heroicons-outline:dots-vertical"},void 0,!1,{fileName:b,lineNumber:60,columnNumber:15},void 0)},void 0,!1,{fileName:b,lineNumber:59,columnNumber:13},void 0),children:u.map((s,f)=>e(te.Item,{children:e("div",{className:`
                
                  hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70  dark:text-slate-300 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  text-slate-600 capitalize rtl:space-x-reverse `,children:[e("span",{className:"text-base",children:e(g,{icon:s.icon},void 0,!1,{fileName:b,lineNumber:73,columnNumber:19},void 0)},void 0,!1,{fileName:b,lineNumber:72,columnNumber:17},void 0),e("span",{children:s.name},void 0,!1,{fileName:b,lineNumber:75,columnNumber:17},void 0)]},void 0,!0,{fileName:b,lineNumber:66,columnNumber:15},void 0)},f,!1,{fileName:b,lineNumber:65,columnNumber:13},void 0))},void 0,!1,{fileName:b,lineNumber:56,columnNumber:9},void 0)},void 0,!1,{fileName:b,lineNumber:55,columnNumber:7},void 0)]},void 0,!0,{fileName:b,lineNumber:27,columnNumber:5},void 0)};var t="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\todo\\index.jsx";const _e=[{value:"all",name:"My Task",icon:"uil:image-v"},{value:"fav",name:"Starred",icon:"heroicons:star"},{value:"done",name:"Completed",icon:"heroicons:document-check"},{value:"trash",name:"Trash",icon:"heroicons:trash"}],De=[{name:"Team",value:"team"},{name:"low",value:"low"},{name:"medium",value:"medium"},{name:"high",value:"high"},{name:"update",value:"update"}],Pe=()=>{const{todos:a,editModal:l,filter:o,todoSearch:p,mobileTodoSidebar:u}=F(r=>r.todo),{width:v,breakpoints:s}=J(),f=T(),[k,x]=_.exports.useState(!1),h=a.filter(r=>p?r.title.toLowerCase().includes(p.toLowerCase()):!0).filter(r=>{if(o==="all")return r;if(o==="fav")return r.isfav;if(o==="done")return r.isDone;if(o==="team")return r.category.some(d=>d.value==="team");if(o==="low")return r.category.some(d=>d.value==="low");if(o==="medium")return r.category.some(d=>d.value==="medium");if(o==="high")return r.category.some(d=>d.value==="high");if(o==="update")return r.category.some(d=>d.value==="update")});_.exports.useEffect(()=>{x(!0),setTimeout(()=>{x(!1)},500),v<s.lg&&u&&f(D(!1))},[o]);const c=r=>{f(ce(r))};return e(P,{children:[e(ue,{},void 0,!1,{fileName:t,lineNumber:127,columnNumber:7},void 0),e("div",{className:"flex md:space-x-5 app_height overflow-hidden relative rtl:space-x-reverse",children:[e("div",{className:`transition-all duration-150 flex-none min-w-[260px] 
        ${v<s.lg?"absolute h-full top-0 md:w-[260px] w-[200px] z-[999]":"flex-none min-w-[260px]"}
        ${v<s.lg&&u?"left-0 ":"-left-full "}
        `,children:e(L,{bodyClass:" py-6 h-full flex flex-col",className:"h-full",children:[e("div",{className:"flex-1 h-full px-6",children:e(Ne,{icon:"heroicons-outline:plus",text:"Add Task",className:"btn-dark w-full block  ",onClick:()=>f(O(!0))},void 0,!1,{fileName:t,lineNumber:146,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:145,columnNumber:13},void 0),e(R,{className:"h-full px-6 ",children:[e("ul",{className:"list mt-6",children:_e.map((r,d)=>e($e,{filter:o,item:r,onClick:()=>c(r.value)},d,!1,{fileName:t,lineNumber:157,columnNumber:19},void 0))},void 0,!1,{fileName:t,lineNumber:155,columnNumber:15},void 0),e("div",{className:"block py-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase",children:"Tags"},void 0,!1,{fileName:t,lineNumber:165,columnNumber:15},void 0),e("ul",{children:De.map((r,d)=>e(je,{filter:o,item:r,onClick:()=>c(r.value)},d,!1,{fileName:t,lineNumber:170,columnNumber:19},void 0))},void 0,!1,{fileName:t,lineNumber:168,columnNumber:15},void 0)]},void 0,!0,{fileName:t,lineNumber:154,columnNumber:13},void 0)]},void 0,!0,{fileName:t,lineNumber:144,columnNumber:11},void 0)},void 0,!1,{fileName:t,lineNumber:130,columnNumber:9},void 0),v<s.lg&&u&&e("div",{className:"overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter\r backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md",onClick:()=>f(D(!u))},void 0,!1,{fileName:t,lineNumber:183,columnNumber:11},void 0),e("div",{className:"flex-1 md:w-[calc(100%-320px)]",children:e(L,{bodyClass:"p-0  h-full",className:"h-full",children:e(R,{className:"h-full all-todos overflow-x-hidden",children:[e(Oe,{onChange:r=>f(de(r.target.value))},void 0,!1,{fileName:t,lineNumber:194,columnNumber:15},void 0),k&&e(ve,{count:h.length},void 0,!1,{fileName:t,lineNumber:198,columnNumber:29},void 0),!k&&e("ul",{className:"divide-y divide-slate-100 dark:divide-slate-700 -mb-6 h-full",children:[h.map((r,d)=>e(pe,{todo:r},d,!1,{fileName:t,lineNumber:202,columnNumber:21},void 0)),h.length===0&&e("li",{className:"mx-6 mt-6",children:e(fe,{label:"No Result Found",className:"bg-danger-500 text-white w-full block text-start"},void 0,!1,{fileName:t,lineNumber:206,columnNumber:23},void 0)},void 0,!1,{fileName:t,lineNumber:205,columnNumber:21},void 0)]},void 0,!0,{fileName:t,lineNumber:200,columnNumber:17},void 0)]},void 0,!0,{fileName:t,lineNumber:193,columnNumber:13},void 0)},void 0,!1,{fileName:t,lineNumber:192,columnNumber:11},void 0)},void 0,!1,{fileName:t,lineNumber:191,columnNumber:9},void 0)]},void 0,!0,{fileName:t,lineNumber:129,columnNumber:7},void 0),e(ye,{},void 0,!1,{fileName:t,lineNumber:218,columnNumber:7},void 0),e(Ce,{},void 0,!1,{fileName:t,lineNumber:219,columnNumber:7},void 0)]},void 0,!0)};export{Pe as default};
