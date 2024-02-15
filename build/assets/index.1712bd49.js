import{E as q,r as u,A as W,c as s,C as Q,j as e,D as X,I as k,q as T,bo as z,bp as Z,b as M,F as me,aP as G,w as J,x as K,aU as H,bq as I,y as ee,z as te,br as V,l as ue,aW as D,aC as A,aq as O,aX as ae,aY as se,aZ as le,a_ as re,az as ie,b0 as he,bs as pe,bt as _,Q as ge,a as xe,t as be}from"./index.f2f04dad.js";import{B as E}from"./Button.f0edee95.js";import{P as ne}from"./index.fed4fe2a.js";import{G as fe,S as ve}from"./Table.8251a216.js";import{M as de}from"./Modal.1e96da5e.js";import{T as ce}from"./Textarea.fbb30a16.js";import{F as w}from"./FormGroup.5e8501b6.js";const Ne=({project:a})=>{const{name:l,progress:h,status:S,members:p,assignee:x,des:c,startDate:b,endDate:o}=a,g=q(),[d,m]=u.exports.useState(new Date(b)),[C,F]=u.exports.useState(new Date(o)),[y,f]=u.exports.useState(0);u.exports.useEffect(()=>{const i=Math.abs(C-d),N=Math.ceil(i/(1e3*60*60*24));f(N)},[d,C]);const v=W(),n=i=>{v(`/projects/${i.id}`)};return s(Q,{children:[s("header",{className:"flex justify-between items-end",children:[s("div",{className:"flex space-x-4 items-center rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-10 w-10 rounded-md text-lg bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize",children:l.charAt(0)+l.charAt(1)})}),e("div",{className:"font-medium text-base leading-6",children:e("div",{className:"dark:text-slate-200 text-slate-900 max-w-[160px] truncate",children:l})})]}),e("div",{children:e(X,{classMenuItems:" w-[130px]",label:e("span",{className:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400",children:e(k,{icon:"heroicons-outline:dots-vertical"})}),children:s("div",{children:[e(T.Item,{onClick:()=>n(a),children:s("div",{className:"hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white\r w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center\r capitalize rtl:space-x-reverse",children:[e("span",{className:"text-base",children:e(k,{icon:"heroicons:eye"})}),e("span",{children:"View"})]})}),e(T.Item,{onClick:()=>g(z(a)),children:s("div",{className:"hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white\r w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center\r capitalize rtl:space-x-reverse",children:[e("span",{className:"text-base",children:e(k,{icon:"heroicons-outline:pencil-alt"})}),e("span",{children:"Edit"})]})}),e(T.Item,{onClick:()=>g(Z(a.id)),children:s("div",{className:"hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white\r w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center\r capitalize rtl:space-x-reverse",children:[e("span",{className:"text-base",children:e(k,{icon:"heroicons-outline:trash"})}),e("span",{children:"Delete"})]})})]})})})]}),e("div",{className:"text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8",children:c}),s("div",{className:"flex space-x-4 rtl:space-x-reverse",children:[s("div",{children:[e("span",{className:"block date-label",children:"Start date"}),e("span",{className:"block date-text",children:b})]}),s("div",{children:[e("span",{className:"block date-label",children:"Start date"}),e("span",{className:"block date-text",children:o})]})]}),s("div",{className:"ltr:text-right rtl:text-left text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium",children:[h,"%"]}),e(ne,{value:h,className:"bg-primary-500"}),s("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[s("div",{children:[e("div",{className:"text-slate-400 dark:text-slate-400 text-sm font-normal mb-3",children:"Assigned to"}),s("div",{className:"flex justify-start -space-x-1.5 rtl:space-x-reverse",children:[x==null?void 0:x.map((i,N)=>e("div",{className:"h-6 w-6 rounded-full ring-1 ring-slate-100",children:e("img",{src:i.image,alt:i.label,className:"w-full h-full rounded-full"})},N)),e("div",{className:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center",children:"+2"})]})]}),e("div",{className:"ltr:text-right rtl:text-left",children:s("span",{className:"inline-flex items-center space-x-1 bg-danger-500 bg-opacity-[0.16] text-danger-500 text-xs font-normal px-2 py-1 rounded-full rtl:space-x-reverse",children:[s("span",{children:[" ",e(k,{icon:"heroicons-outline:clock"})]}),e("span",{children:y}),e("span",{children:"days left"})]})})]})]})},ye=({projects:a})=>{const l=q(),h=W(),S=[{Header:"Name",accessor:"name",Cell:t=>{var r,P,j,L,R,Y;return s("div",{className:"flex space-x-3 items-center text-left rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-10 w-10 rounded-full text-sm bg-[#E0EAFF] dark:bg-slate-700 flex flex-col items-center justify-center font-medium -tracking-[1px]",children:((r=t==null?void 0:t.cell)==null?void 0:r.value.charAt(0))+((j=t==null?void 0:t.cell)==null?void 0:j.value.charAt(((P=t==null?void 0:t.cell)==null?void 0:P.value.length)-1))})}),e("div",{className:"flex-1 font-medium text-sm leading-4 whitespace-nowrap",children:((L=t==null?void 0:t.cell)==null?void 0:L.value.length)>20?((R=t==null?void 0:t.cell)==null?void 0:R.value.substring(0,20))+"...":(Y=t==null?void 0:t.cell)==null?void 0:Y.value})]})}},{Header:"Start Date",accessor:"startDate",Cell:t=>{var r;return e("span",{children:(r=t==null?void 0:t.cell)==null?void 0:r.value})}},{Header:"End Date",accessor:"endDate",Cell:t=>{var r;return e("div",{children:(r=t==null?void 0:t.cell)==null?void 0:r.value})}},{Header:"assignee",accessor:"assignee",Cell:t=>{var r;return e("div",{children:s("div",{className:"flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1 rtl:space-x-reverse",children:[(r=t==null?void 0:t.cell)==null?void 0:r.value.map((P,j)=>e("div",{className:"h-6 w-6 rounded-full ring-1 ring-slate-100",children:e("img",{src:P.image,alt:P.label,className:"w-full h-full rounded-full"})},j)),e("div",{className:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center",children:"+2"})]})})}},{Header:"Status",accessor:"progress",Cell:t=>{var r;return s("span",{className:"min-w-[220px] block",children:[e(ne,{value:(r=t==null?void 0:t.cell)==null?void 0:r.value,className:"bg-primary-500"}),e("span",{className:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium mt-3",children:"12/15 Task Completed"})]})}},{Header:"action",accessor:"action",Cell:t=>e("div",{children:e(X,{classMenuItems:"right-0 w-[140px] top-[110%] ",label:e("span",{className:"text-xl text-center block w-full",children:e(k,{icon:"heroicons-outline:dots-vertical"})}),children:e("div",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:p.map((r,P)=>e(T.Item,{onClick:()=>{var j;return r.doit((j=t==null?void 0:t.row)==null?void 0:j.original)},children:s("div",{className:`
                
                  ${r.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30   hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer 
                   first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `,children:[e("span",{className:"text-base",children:e(k,{icon:r.icon})}),e("span",{children:r.name})]})},P))})})})}],p=[{name:"view",icon:"heroicons-outline:eye",doit:t=>h(`/projects/${t.id}`)},{name:"edit",icon:"heroicons:pencil-square",doit:t=>l(z(t))},{name:"delete",icon:"heroicons-outline:trash",doit:t=>l(Z(t.id))}],x=u.exports.useMemo(()=>S,[]),c=u.exports.useMemo(()=>a,[a]),b=M.exports.useTable({columns:x,data:c},M.exports.useGlobalFilter,M.exports.useSortBy,M.exports.usePagination,M.exports.useRowSelect),{getTableProps:o,getTableBodyProps:g,headerGroups:d,footerGroups:m,page:C,nextPage:F,previousPage:y,canNextPage:f,canPreviousPage:v,pageOptions:n,state:i,gotoPage:N,pageCount:we,setPageSize:qe,setGlobalFilter:Ee,prepareRow:oe}=b,{globalFilter:Te,pageIndex:$,pageSize:Ie}=i;return e(me,{children:s(Q,{noborder:!0,children:[e("div",{className:"md:flex justify-between items-center mb-6",children:e("h4",{className:"card-title",children:"Project List"})}),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:s("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...o,children:[e("thead",{className:" bg-slate-100 dark:bg-slate-700",children:d.map(t=>e("tr",{...t.getHeaderGroupProps(),children:t.headers.map(r=>s("th",{...r.getHeaderProps(r.getSortByToggleProps()),scope:"col",className:" table-th ",children:[r.render("Header"),e("span",{children:r.isSorted?r.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...g,children:C.map(t=>(oe(t),e("tr",{...t.getRowProps(),className:" even:bg-slate-100 dark:even:bg-slate-700",children:t.cells.map(r=>e("td",{...r.getCellProps(),className:"table-td",children:r.render("Cell")}))})))})]})})})}),s("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[s("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[s("span",{className:" flex space-x-2  rtl:space-x-reverse items-center",children:[e("span",{className:" text-sm font-medium text-slate-600 dark:text-slate-300",children:"Go"}),e("span",{children:e("input",{type:"number",className:" form-control py-2",defaultValue:$+1,onChange:t=>{const r=t.target.value?Number(t.target.value)-1:0;N(r)},style:{width:"50px"}})})]}),s("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",s("span",{children:[$+1," of ",n.length]})]})]}),s("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${v?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>y(),disabled:!v,children:e(k,{icon:"heroicons-outline:chevron-left"})})}),n.map((t,r)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${r===$?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100  dark:text-slate-400 text-slate-900  font-normal "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>N(r),children:t+1})},r)),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${f?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>F(),disabled:!f,children:e(k,{icon:"heroicons-outline:chevron-right"})})})]})]})]})})},B={multiValue:(a,l)=>l.data.isFixed?{...a,opacity:"0.5"}:a,multiValueLabel:(a,l)=>l.data.isFixed?{...a,color:"#626262",paddingRight:6}:a,multiValueRemove:(a,l)=>l.data.isFixed?{...a,display:"none"}:a,option:(a,l)=>({...a,fontSize:"14px"})},ke=[{value:"mahedi",label:"Mahedi Amin",image:ae},{value:"sovo",label:"Sovo Haldar",image:se},{value:"rakibul",label:"Rakibul Islam",image:le},{value:"pritom",label:"Pritom Miha",image:re}],Se=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"},{value:"update",label:"update"}],De=({data:a,...l})=>e(ie.Option,{...l,children:s("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:a.image,alt:"",className:"w-full h-full rounded-full"})})}),e("span",{className:"flex-1",children:a.label})]})}),Ce=()=>{var F,y,f,v;const{openProjectModal:a}=G(n=>n.project),l=q(),[h,S]=u.exports.useState(new Date),[p,x]=u.exports.useState(new Date),c=J({title:K().required("Title is required"),assign:H().required("Assignee is required"),tags:H().required("Tag is required"),startDate:I().required("Start date is required").min(new Date,"Start date must be greater than today"),endDate:I().required("End date is required").min(new Date,"End date must be greater than today")}).required(),{register:b,control:o,reset:g,formState:{errors:d},handleSubmit:m}=ee({resolver:te(c),mode:"all"});return e("div",{children:e(de,{title:"Create Project",labelclassName:"btn-outline-dark",activeModal:a,onClose:()=>l(V(!1)),children:s("form",{onSubmit:m(n=>{const i={id:he(),name:n.title,assignee:n.assign,category:null,startDate:h.toISOString().split("T")[0],endDate:p.toISOString().split("T")[0],des:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",progress:Math.floor(Math.random()*91+10)};l(pe(i)),l(V(!1)),g()}),className:"space-y-4 ",children:[e(ue,{name:"title",label:"Project Name",placeholder:"Project Name",register:b,error:d.title}),s("div",{className:"grid lg:grid-cols-2 gap-4 grid-cols-1",children:[e(w,{label:"Start Date",id:"default-picker",error:d.startDate,children:e(D,{name:"startDate",control:o,render:({field:n})=>e(A,{className:"form-control py-2",id:"default-picker",placeholder:"yyyy, dd M",value:h,onChange:i=>{n.onChange(i)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}})})}),e(w,{label:"End Date",id:"default-picker2",error:d.endDate,children:e(D,{name:"endDate",control:o,render:({field:n})=>e(A,{className:"form-control py-2",id:"default-picker2",placeholder:"yyyy, dd M",value:p,onChange:i=>{n.onChange(i)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}})})})]}),s("div",{className:d.assign?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Assignee"}),e(D,{name:"assign",control:o,render:({field:n})=>e(O,{...n,options:ke,styles:B,className:"react-select",classNamePrefix:"select",isMulti:!0,components:{Option:De},id:"icon_s"})}),d.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((F=d.assign)==null?void 0:F.message)||((y=d.assign)==null?void 0:y.label.message)})]}),s("div",{className:d.tags?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Tag"}),e(D,{name:"tags",control:o,render:({field:n})=>e(O,{...n,options:Se,styles:B,className:"react-select",classNamePrefix:"select",isMulti:!0,id:"icon_s"})}),d.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((f=d.tags)==null?void 0:f.message)||((v=d.tags)==null?void 0:v.label.message)})]}),e(ce,{label:"Description",placeholder:"Description"}),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Add"})})]})})})},U={multiValue:(a,l)=>l.data.isFixed?{...a,opacity:"0.5"}:a,multiValueLabel:(a,l)=>l.data.isFixed?{...a,color:"#626262",paddingRight:6}:a,multiValueRemove:(a,l)=>l.data.isFixed?{...a,display:"none"}:a,option:(a,l)=>({...a,fontSize:"14px"})},Pe=[{value:"mahedi",label:"Mahedi Amin",image:ae},{value:"sovo",label:"Sovo Haldar",image:se},{value:"rakibul",label:"Rakibul Islam",image:le},{value:"pritom",label:"Pritom Miha",image:re}],je=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"},{value:"update",label:"update"}],Fe=({data:a,...l})=>e(ie.Option,{...l,children:s("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:a.image,alt:"",className:"w-full h-full rounded-full"})})}),e("span",{className:"flex-1",children:a.label})]})}),Me=()=>{var y,f,v,n;const{editModal:a,editItem:l}=G(i=>i.project),h=q(),[S,p]=u.exports.useState(new Date),[x,c]=u.exports.useState(new Date),b=J({name:K().required("Name is required"),assign:H().required("Assignee is required"),startDate:I().required("Start date is required").min(new Date,"Start date must be greater than today"),endDate:I().required("End date is required").min(new Date,"End date must be greater than today")}).required(),{register:o,control:g,reset:d,formState:{errors:m},handleSubmit:C}=ee({resolver:te(b),mode:"all"});return u.exports.useEffect(()=>{d(l)},[l]),e(de,{title:"Edit Project",activeModal:a,onClose:()=>h(_(!1)),children:s("form",{onSubmit:C(i=>{h(z({id:l.id,name:i.name,des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",assignee:i.assign,category:null,startDate:S.toISOString().split("T")[0],endDate:x.toISOString().split("T")[0],progress:Math.floor(Math.random()*(100-10+1)+10)})),h(_(!1)),ge.info("Edit Successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}),className:"space-y-4 ",children:[e(w,{error:m.name,children:e("input",{type:"text",defaultValue:l.name,className:"form-control py-2",...o("name")})}),s("div",{className:"grid lg:grid-cols-2 gap-4 grid-cols-1",children:[e(w,{label:"Start Date",id:"default-picker",error:m.startDate,children:e(D,{name:"startDate",control:g,render:({field:i})=>e(A,{className:"form-control py-2",id:"default-picker",placeholder:"yyyy, dd M",value:S,onChange:N=>{i.onChange(N)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}})})}),e(w,{label:"End Date",id:"default-picker2",error:m.endDate,children:e(D,{name:"endDate",control:g,render:({field:i})=>e(A,{className:"form-control py-2",id:"default-picker2",placeholder:"yyyy, dd M",value:x,onChange:N=>{i.onChange(N)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}})})})]}),s("div",{className:m.assign?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Assignee"}),e(D,{name:"assign",control:g,render:({field:i})=>e(O,{...i,options:Pe,styles:U,className:"react-select",classNamePrefix:"select",isSearchable:!1,defaultValue:l.assignee,isMulti:!0,components:{Option:Fe},id:"icon_s"})}),m.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((y=m.assign)==null?void 0:y.message)||((f=m.assign)==null?void 0:f.label.message)})]}),s("div",{className:m.tags?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Tag"}),e(D,{name:"tags",control:g,render:({field:i})=>e(O,{...i,options:je,styles:U,className:"react-select",classNamePrefix:"select",isMulti:!0,id:"icon_s"})}),m.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((v=m.tags)==null?void 0:v.message)||((n=m.tags)==null?void 0:n.label.message)})]}),e(ce,{label:"Description",placeholder:"Description"}),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Update"})})]})})},Le=()=>{const[a,l]=u.exports.useState("grid"),{width:h,breakpoints:S}=xe(),[p,x]=u.exports.useState(!1),{projects:c}=G(o=>o.project),b=q();return u.exports.useEffect(()=>{x(!0),setTimeout(()=>{x(!1)},1500)},[a]),s("div",{children:[e(be,{}),s("div",{className:"flex flex-wrap justify-between items-center mb-4",children:[e("h4",{className:"font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4",children:"Project"}),s("div",{className:`${h<S.md?"space-x-rb":""} md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse`,children:[e(E,{icon:"heroicons:list-bullet",text:"List view",disabled:p,className:`${a==="list"?"bg-slate-900 dark:bg-slate-700  text-white":" bg-white dark:bg-slate-800 dark:text-slate-300"}   h-min text-sm font-normal`,iconClass:" text-lg",onClick:()=>l("list")}),e(E,{icon:"heroicons-outline:view-grid",text:"Grid view",disabled:p,className:`${a==="grid"?"bg-slate-900 dark:bg-slate-700 text-white":" bg-white dark:bg-slate-800 dark:text-slate-300"}   h-min text-sm font-normal`,iconClass:" text-lg",onClick:()=>l("grid")}),e(E,{icon:"heroicons-outline:filter",text:"On going",className:"bg-white dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-900 hover:text-white btn-md  h-min text-sm font-normal",iconClass:" text-lg"}),e(E,{icon:"heroicons-outline:plus",text:"Add Project",className:"btn-dark dark:bg-slate-800  h-min text-sm font-normal",iconClass:" text-lg",onClick:()=>b(V(!0))})]})]}),p&&a==="grid"&&e(fe,{count:c==null?void 0:c.length}),p&&a==="list"&&e(ve,{count:c==null?void 0:c.length}),a==="grid"&&!p&&e("div",{className:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5",children:c.map((o,g)=>e(Ne,{project:o},g))}),a==="list"&&!p&&e("div",{children:e(ye,{projects:c})}),e(Ce,{}),e(Me,{})]})};export{Le as default};
