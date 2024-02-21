import{B as $,r as f,z as J,j as e,C as K,D as ee,I as P,q as V,bn as z,bo as le,b as q,F as ve,aO as B,v as ie,w as ae,aT as H,bp as A,x as re,y as te,bq as G,k as fe,aV as F,aB as _,ap as L,aW as se,aX as me,aY as oe,aZ as ne,ay as de,a$ as he,br as pe,bs as Q,Q as ge,a as xe,s as ke}from"./index.cdbc3f69.js";import{B as I}from"./Button.92714a2b.js";import{P as ue}from"./index.35f2cc58.js";import{G as ye,S as je}from"./Table.e2e88d8d.js";import{M as ce}from"./Modal.db4885d3.js";import{T as Ne}from"./Textarea.2921485a.js";import{F as T}from"./FormGroup.fbeed146.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\projects\\ProjectGrid.jsx";const De=({project:r})=>{const{name:t,progress:h,status:C,members:p,assignee:x,des:N,startDate:k,endDate:b}=r,g=$(),[u,v]=f.exports.useState(new Date(k)),[M,E]=f.exports.useState(new Date(b)),[S,y]=f.exports.useState(0);f.exports.useEffect(()=>{const n=Math.abs(M-u),D=Math.ceil(n/(1e3*60*60*24));y(D)},[u,M]);const j=J(),d=n=>{j(`/projects/${n.id}`)};return e(K,{children:[e("header",{className:"flex justify-between items-end",children:[e("div",{className:"flex space-x-4 items-center rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-10 w-10 rounded-md text-lg bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize",children:t.charAt(0)+t.charAt(1)},void 0,!1,{fileName:a,lineNumber:39,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:38,columnNumber:11},void 0),e("div",{className:"font-medium text-base leading-6",children:e("div",{className:"dark:text-slate-200 text-slate-900 max-w-[160px] truncate",children:t},void 0,!1,{fileName:a,lineNumber:44,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:43,columnNumber:11},void 0)]},void 0,!0,{fileName:a,lineNumber:37,columnNumber:9},void 0),e("div",{children:e(ee,{classMenuItems:" w-[130px]",label:e("span",{className:"text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400",children:e(P,{icon:"heroicons-outline:dots-vertical"},void 0,!1,{fileName:a,lineNumber:54,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:53,columnNumber:15},void 0),children:e("div",{children:[e(V.Item,{onClick:()=>d(r),children:e("div",{className:"hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white\r w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center\r capitalize rtl:space-x-reverse",children:[e("span",{className:"text-base",children:e(P,{icon:"heroicons:eye"},void 0,!1,{fileName:a,lineNumber:66,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:65,columnNumber:19},void 0),e("span",{children:"View"},void 0,!1,{fileName:a,lineNumber:68,columnNumber:19},void 0)]},void 0,!0,{fileName:a,lineNumber:60,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:59,columnNumber:15},void 0),e(V.Item,{onClick:()=>g(z(r)),children:e("div",{className:"hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white\r w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center\r capitalize rtl:space-x-reverse",children:[e("span",{className:"text-base",children:e(P,{icon:"heroicons-outline:pencil-alt"},void 0,!1,{fileName:a,lineNumber:78,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:77,columnNumber:19},void 0),e("span",{children:"Edit"},void 0,!1,{fileName:a,lineNumber:80,columnNumber:19},void 0)]},void 0,!0,{fileName:a,lineNumber:72,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:71,columnNumber:15},void 0),e(V.Item,{onClick:()=>g(le(r.id)),children:e("div",{className:"hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white\r w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center\r capitalize rtl:space-x-reverse",children:[e("span",{className:"text-base",children:e(P,{icon:"heroicons-outline:trash"},void 0,!1,{fileName:a,lineNumber:90,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:89,columnNumber:19},void 0),e("span",{children:"Delete"},void 0,!1,{fileName:a,lineNumber:92,columnNumber:19},void 0)]},void 0,!0,{fileName:a,lineNumber:84,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:83,columnNumber:15},void 0)]},void 0,!0,{fileName:a,lineNumber:58,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:50,columnNumber:11},void 0)},void 0,!1,{fileName:a,lineNumber:49,columnNumber:9},void 0)]},void 0,!0,{fileName:a,lineNumber:36,columnNumber:7},void 0),e("div",{className:"text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8",children:N},void 0,!1,{fileName:a,lineNumber:100,columnNumber:7},void 0),e("div",{className:"flex space-x-4 rtl:space-x-reverse",children:[e("div",{children:[e("span",{className:"block date-label",children:"Start date"},void 0,!1,{fileName:a,lineNumber:107,columnNumber:11},void 0),e("span",{className:"block date-text",children:k},void 0,!1,{fileName:a,lineNumber:108,columnNumber:11},void 0)]},void 0,!0,{fileName:a,lineNumber:106,columnNumber:9},void 0),e("div",{children:[e("span",{className:"block date-label",children:"Start date"},void 0,!1,{fileName:a,lineNumber:112,columnNumber:11},void 0),e("span",{className:"block date-text",children:b},void 0,!1,{fileName:a,lineNumber:113,columnNumber:11},void 0)]},void 0,!0,{fileName:a,lineNumber:111,columnNumber:9},void 0)]},void 0,!0,{fileName:a,lineNumber:104,columnNumber:7},void 0),e("div",{className:"ltr:text-right rtl:text-left text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium",children:[h,"%"]},void 0,!0,{fileName:a,lineNumber:117,columnNumber:7},void 0),e(ue,{value:h,className:"bg-primary-500"},void 0,!1,{fileName:a,lineNumber:120,columnNumber:7},void 0),e("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e("div",{children:[e("div",{className:"text-slate-400 dark:text-slate-400 text-sm font-normal mb-3",children:"Assigned to"},void 0,!1,{fileName:a,lineNumber:125,columnNumber:11},void 0),e("div",{className:"flex justify-start -space-x-1.5 rtl:space-x-reverse",children:[x==null?void 0:x.map((n,D)=>e("div",{className:"h-6 w-6 rounded-full ring-1 ring-slate-100",children:e("img",{src:n.image,alt:n.label,className:"w-full h-full rounded-full"},void 0,!1,{fileName:a,lineNumber:134,columnNumber:17},void 0)},D,!1,{fileName:a,lineNumber:130,columnNumber:15},void 0)),e("div",{className:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center",children:"+2"},void 0,!1,{fileName:a,lineNumber:141,columnNumber:13},void 0)]},void 0,!0,{fileName:a,lineNumber:128,columnNumber:11},void 0)]},void 0,!0,{fileName:a,lineNumber:124,columnNumber:9},void 0),e("div",{className:"ltr:text-right rtl:text-left",children:e("span",{className:"inline-flex items-center space-x-1 bg-danger-500 bg-opacity-[0.16] text-danger-500 text-xs font-normal px-2 py-1 rounded-full rtl:space-x-reverse",children:[e("span",{children:[" ",e(P,{icon:"heroicons-outline:clock"},void 0,!1,{fileName:a,lineNumber:152,columnNumber:15},void 0)]},void 0,!0,{fileName:a,lineNumber:150,columnNumber:13},void 0),e("span",{children:S},void 0,!1,{fileName:a,lineNumber:154,columnNumber:13},void 0),e("span",{children:"days left"},void 0,!1,{fileName:a,lineNumber:155,columnNumber:13},void 0)]},void 0,!0,{fileName:a,lineNumber:149,columnNumber:11},void 0)},void 0,!1,{fileName:a,lineNumber:148,columnNumber:9},void 0)]},void 0,!0,{fileName:a,lineNumber:122,columnNumber:7},void 0)]},void 0,!0,{fileName:a,lineNumber:34,columnNumber:5},void 0)};var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\projects\\ProjectList.jsx";const Se=({projects:r})=>{const t=$(),h=J(),C=[{Header:"Name",accessor:"name",Cell:l=>{var s,w,O,Y,U,W;return e("div",{className:"flex space-x-3 items-center text-left rtl:space-x-reverse",children:[e("div",{className:"flex-none",children:e("div",{className:"h-10 w-10 rounded-full text-sm bg-[#E0EAFF] dark:bg-slate-700 flex flex-col items-center justify-center font-medium -tracking-[1px]",children:((s=l==null?void 0:l.cell)==null?void 0:s.value.charAt(0))+((O=l==null?void 0:l.cell)==null?void 0:O.value.charAt(((w=l==null?void 0:l.cell)==null?void 0:w.value.length)-1))},void 0,!1,{fileName:i,lineNumber:30,columnNumber:15},void 0)},void 0,!1,{fileName:i,lineNumber:29,columnNumber:13},void 0),e("div",{className:"flex-1 font-medium text-sm leading-4 whitespace-nowrap",children:((Y=l==null?void 0:l.cell)==null?void 0:Y.value.length)>20?((U=l==null?void 0:l.cell)==null?void 0:U.value.substring(0,20))+"...":(W=l==null?void 0:l.cell)==null?void 0:W.value},void 0,!1,{fileName:i,lineNumber:35,columnNumber:13},void 0)]},void 0,!0,{fileName:i,lineNumber:28,columnNumber:11},void 0)}},{Header:"Start Date",accessor:"startDate",Cell:l=>{var s;return e("span",{children:(s=l==null?void 0:l.cell)==null?void 0:s.value},void 0,!1,{fileName:i,lineNumber:48,columnNumber:16},void 0)}},{Header:"End Date",accessor:"endDate",Cell:l=>{var s;return e("div",{children:(s=l==null?void 0:l.cell)==null?void 0:s.value},void 0,!1,{fileName:i,lineNumber:55,columnNumber:16},void 0)}},{Header:"assignee",accessor:"assignee",Cell:l=>{var s;return e("div",{children:e("div",{className:"flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1 rtl:space-x-reverse",children:[(s=l==null?void 0:l.cell)==null?void 0:s.value.map((w,O)=>e("div",{className:"h-6 w-6 rounded-full ring-1 ring-slate-100",children:e("img",{src:w.image,alt:w.label,className:"w-full h-full rounded-full"},void 0,!1,{fileName:i,lineNumber:70,columnNumber:19},void 0)},O,!1,{fileName:i,lineNumber:66,columnNumber:17},void 0)),e("div",{className:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center",children:"+2"},void 0,!1,{fileName:i,lineNumber:77,columnNumber:15},void 0)]},void 0,!0,{fileName:i,lineNumber:64,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:63,columnNumber:11},void 0)}},{Header:"Status",accessor:"progress",Cell:l=>{var s;return e("span",{className:"min-w-[220px] block",children:[e(ue,{value:(s=l==null?void 0:l.cell)==null?void 0:s.value,className:"bg-primary-500"},void 0,!1,{fileName:i,lineNumber:91,columnNumber:13},void 0),e("span",{className:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium mt-3",children:"12/15 Task Completed"},void 0,!1,{fileName:i,lineNumber:92,columnNumber:13},void 0)]},void 0,!0,{fileName:i,lineNumber:90,columnNumber:11},void 0)}},{Header:"action",accessor:"action",Cell:l=>e("div",{children:e(ee,{classMenuItems:"right-0 w-[140px] top-[110%] ",label:e("span",{className:"text-xl text-center block w-full",children:e(P,{icon:"heroicons-outline:dots-vertical"},void 0,!1,{fileName:i,lineNumber:110,columnNumber:19},void 0)},void 0,!1,{fileName:i,lineNumber:109,columnNumber:17},void 0),children:e("div",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:p.map((s,w)=>e(V.Item,{onClick:()=>{var O;return s.doit((O=l==null?void 0:l.row)==null?void 0:O.original)},children:e("div",{className:`
                
                  ${s.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30   hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer 
                   first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `,children:[e("span",{className:"text-base",children:e(P,{icon:s.icon},void 0,!1,{fileName:i,lineNumber:132,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:131,columnNumber:23},void 0),e("span",{children:s.name},void 0,!1,{fileName:i,lineNumber:134,columnNumber:23},void 0)]},void 0,!0,{fileName:i,lineNumber:120,columnNumber:21},void 0)},w,!1,{fileName:i,lineNumber:116,columnNumber:19},void 0))},void 0,!1,{fileName:i,lineNumber:114,columnNumber:15},void 0)},void 0,!1,{fileName:i,lineNumber:106,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:105,columnNumber:11},void 0)}],p=[{name:"view",icon:"heroicons-outline:eye",doit:l=>h(`/projects/${l.id}`)},{name:"edit",icon:"heroicons:pencil-square",doit:l=>t(z(l))},{name:"delete",icon:"heroicons-outline:trash",doit:l=>t(le(l.id))}],x=f.exports.useMemo(()=>C,[]),N=f.exports.useMemo(()=>r,[r]),k=q.exports.useTable({columns:x,data:N},q.exports.useGlobalFilter,q.exports.useSortBy,q.exports.usePagination,q.exports.useRowSelect),{getTableProps:b,getTableBodyProps:g,headerGroups:u,footerGroups:v,page:M,nextPage:E,previousPage:S,canNextPage:y,canPreviousPage:j,pageOptions:d,state:n,gotoPage:D,pageCount:Te,setPageSize:$e,setGlobalFilter:Ie,prepareRow:be}=k,{globalFilter:Ve,pageIndex:R,pageSize:Ae}=n;return e(ve,{children:e(K,{noborder:!0,children:[e("div",{className:"md:flex justify-between items-center mb-6",children:e("h4",{className:"card-title",children:"Project List"},void 0,!1,{fileName:i,lineNumber:201,columnNumber:11},void 0)},void 0,!1,{fileName:i,lineNumber:200,columnNumber:9},void 0),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...b,children:[e("thead",{className:" bg-slate-100 dark:bg-slate-700",children:u.map(l=>e("tr",{...l.getHeaderGroupProps(),children:l.headers.map(s=>e("th",{...s.getHeaderProps(s.getSortByToggleProps()),scope:"col",className:" table-th ",children:[s.render("Header"),e("span",{children:s.isSorted?s.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:i,lineNumber:222,columnNumber:27},void 0)]},void 0,!0,{fileName:i,lineNumber:214,columnNumber:25},void 0))},void 0,!1,{fileName:i,lineNumber:212,columnNumber:21},void 0))},void 0,!1,{fileName:i,lineNumber:210,columnNumber:17},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...g,children:M.map(l=>(be(l),e("tr",{...l.getRowProps(),className:" even:bg-slate-100 dark:even:bg-slate-700",children:l.cells.map(s=>e("td",{...s.getCellProps(),className:"table-td",children:s.render("Cell")},void 0,!1,{fileName:i,lineNumber:247,columnNumber:29},void 0))},void 0,!1,{fileName:i,lineNumber:241,columnNumber:23},void 0)))},void 0,!1,{fileName:i,lineNumber:234,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:206,columnNumber:15},void 0)},void 0,!1,{fileName:i,lineNumber:205,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:204,columnNumber:11},void 0)},void 0,!1,{fileName:i,lineNumber:203,columnNumber:9},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[e("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("span",{className:" flex space-x-2  rtl:space-x-reverse items-center",children:[e("span",{className:" text-sm font-medium text-slate-600 dark:text-slate-300",children:"Go"},void 0,!1,{fileName:i,lineNumber:263,columnNumber:15},void 0),e("span",{children:e("input",{type:"number",className:" form-control py-2",defaultValue:R+1,onChange:l=>{const s=l.target.value?Number(l.target.value)-1:0;D(s)},style:{width:"50px"}},void 0,!1,{fileName:i,lineNumber:267,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:266,columnNumber:15},void 0)]},void 0,!0,{fileName:i,lineNumber:262,columnNumber:13},void 0),e("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",e("span",{children:[R+1," of ",d.length]},void 0,!0,{fileName:i,lineNumber:283,columnNumber:15},void 0)]},void 0,!0,{fileName:i,lineNumber:281,columnNumber:13},void 0)]},void 0,!0,{fileName:i,lineNumber:261,columnNumber:11},void 0),e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${j?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>S(),disabled:!j,children:e(P,{icon:"heroicons-outline:chevron-left"},void 0,!1,{fileName:i,lineNumber:297,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:290,columnNumber:15},void 0)},void 0,!1,{fileName:i,lineNumber:289,columnNumber:13},void 0),d.map((l,s)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${s===R?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100  dark:text-slate-400 text-slate-900  font-normal "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>D(s),children:l+1},void 0,!1,{fileName:i,lineNumber:302,columnNumber:17},void 0)},s,!1,{fileName:i,lineNumber:301,columnNumber:15},void 0)),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>E(),disabled:!y,children:e(P,{icon:"heroicons-outline:chevron-right"},void 0,!1,{fileName:i,lineNumber:324,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:317,columnNumber:15},void 0)},void 0,!1,{fileName:i,lineNumber:316,columnNumber:13},void 0)]},void 0,!0,{fileName:i,lineNumber:288,columnNumber:11},void 0)]},void 0,!0,{fileName:i,lineNumber:260,columnNumber:9},void 0)]},void 0,!0,{fileName:i,lineNumber:199,columnNumber:7},void 0)},void 0,!1)};var m="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\projects\\AddProject.jsx";const X={multiValue:(r,t)=>t.data.isFixed?{...r,opacity:"0.5"}:r,multiValueLabel:(r,t)=>t.data.isFixed?{...r,color:"#626262",paddingRight:6}:r,multiValueRemove:(r,t)=>t.data.isFixed?{...r,display:"none"}:r,option:(r,t)=>({...r,fontSize:"14px"})},Pe=[{value:"mahedi",label:"Mahedi Amin",image:se},{value:"sovo",label:"Sovo Haldar",image:me},{value:"rakibul",label:"Rakibul Islam",image:oe},{value:"pritom",label:"Pritom Miha",image:ne}],Ce=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"},{value:"update",label:"update"}],Fe=({data:r,...t})=>e(de.Option,{...t,children:e("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:r.image,alt:"",className:"w-full h-full rounded-full"},void 0,!1,{fileName:m,lineNumber:75,columnNumber:13},void 0)},void 0,!1,{fileName:m,lineNumber:74,columnNumber:11},void 0)},void 0,!1,{fileName:m,lineNumber:73,columnNumber:9},void 0),e("span",{className:"flex-1",children:r.label},void 0,!1,{fileName:m,lineNumber:82,columnNumber:9},void 0)]},void 0,!0,{fileName:m,lineNumber:72,columnNumber:7},void 0)},void 0,!1,{fileName:m,lineNumber:71,columnNumber:5},void 0),Me=()=>{var E,S,y,j;const{openProjectModal:r}=B(d=>d.project),t=$(),[h,C]=f.exports.useState(new Date),[p,x]=f.exports.useState(new Date),N=ie({title:ae().required("Title is required"),assign:H().required("Assignee is required"),tags:H().required("Tag is required"),startDate:A().required("Start date is required").min(new Date,"Start date must be greater than today"),endDate:A().required("End date is required").min(new Date,"End date must be greater than today")}).required(),{register:k,control:b,reset:g,formState:{errors:u},handleSubmit:v}=re({resolver:te(N),mode:"all"});return e("div",{children:e(ce,{title:"Create Project",labelclassName:"btn-outline-dark",activeModal:r,onClose:()=>t(G(!1)),children:e("form",{onSubmit:v(d=>{const n={id:he(),name:d.title,assignee:d.assign,category:null,startDate:h.toISOString().split("T")[0],endDate:p.toISOString().split("T")[0],des:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",progress:Math.floor(Math.random()*91+10)};t(pe(n)),t(G(!1)),g()}),className:"space-y-4 ",children:[e(fe,{name:"title",label:"Project Name",placeholder:"Project Name",register:k,error:u.title},void 0,!1,{fileName:m,lineNumber:148,columnNumber:11},void 0),e("div",{className:"grid lg:grid-cols-2 gap-4 grid-cols-1",children:[e(T,{label:"Start Date",id:"default-picker",error:u.startDate,children:e(F,{name:"startDate",control:b,render:({field:d})=>e(_,{className:"form-control py-2",id:"default-picker",placeholder:"yyyy, dd M",value:h,onChange:n=>{d.onChange(n)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},void 0,!1,{fileName:m,lineNumber:165,columnNumber:19},void 0)},void 0,!1,{fileName:m,lineNumber:161,columnNumber:15},void 0)},void 0,!1,{fileName:m,lineNumber:156,columnNumber:13},void 0),e(T,{label:"End Date",id:"default-picker2",error:u.endDate,children:e(F,{name:"endDate",control:b,render:({field:d})=>e(_,{className:"form-control py-2",id:"default-picker2",placeholder:"yyyy, dd M",value:p,onChange:n=>{d.onChange(n)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},void 0,!1,{fileName:m,lineNumber:191,columnNumber:19},void 0)},void 0,!1,{fileName:m,lineNumber:187,columnNumber:15},void 0)},void 0,!1,{fileName:m,lineNumber:182,columnNumber:13},void 0)]},void 0,!0,{fileName:m,lineNumber:155,columnNumber:11},void 0),e("div",{className:u.assign?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Assignee"},void 0,!1,{fileName:m,lineNumber:210,columnNumber:13},void 0),e(F,{name:"assign",control:b,render:({field:d})=>e(L,{...d,options:Pe,styles:X,className:"react-select",classNamePrefix:"select",isMulti:!0,components:{Option:Fe},id:"icon_s"},void 0,!1,{fileName:m,lineNumber:217,columnNumber:17},void 0)},void 0,!1,{fileName:m,lineNumber:213,columnNumber:13},void 0),u.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((E=u.assign)==null?void 0:E.message)||((S=u.assign)==null?void 0:S.label.message)},void 0,!1,{fileName:m,lineNumber:232,columnNumber:15},void 0)]},void 0,!0,{fileName:m,lineNumber:209,columnNumber:11},void 0),e("div",{className:u.tags?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Tag"},void 0,!1,{fileName:m,lineNumber:239,columnNumber:13},void 0),e(F,{name:"tags",control:b,render:({field:d})=>e(L,{...d,options:Ce,styles:X,className:"react-select",classNamePrefix:"select",isMulti:!0,id:"icon_s"},void 0,!1,{fileName:m,lineNumber:246,columnNumber:17},void 0)},void 0,!1,{fileName:m,lineNumber:242,columnNumber:13},void 0),u.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((y=u.tags)==null?void 0:y.message)||((j=u.tags)==null?void 0:j.label.message)},void 0,!1,{fileName:m,lineNumber:258,columnNumber:15},void 0)]},void 0,!0,{fileName:m,lineNumber:238,columnNumber:11},void 0),e(Ne,{label:"Description",placeholder:"Description"},void 0,!1,{fileName:m,lineNumber:263,columnNumber:11},void 0),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Add"},void 0,!1,{fileName:m,lineNumber:266,columnNumber:13},void 0)},void 0,!1,{fileName:m,lineNumber:265,columnNumber:11},void 0)]},void 0,!0,{fileName:m,lineNumber:147,columnNumber:9},void 0)},void 0,!1,{fileName:m,lineNumber:141,columnNumber:7},void 0)},void 0,!1,{fileName:m,lineNumber:140,columnNumber:5},void 0)};var o="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\projects\\EditProject.jsx";const Z={multiValue:(r,t)=>t.data.isFixed?{...r,opacity:"0.5"}:r,multiValueLabel:(r,t)=>t.data.isFixed?{...r,color:"#626262",paddingRight:6}:r,multiValueRemove:(r,t)=>t.data.isFixed?{...r,display:"none"}:r,option:(r,t)=>({...r,fontSize:"14px"})},we=[{value:"mahedi",label:"Mahedi Amin",image:se},{value:"sovo",label:"Sovo Haldar",image:me},{value:"rakibul",label:"Rakibul Islam",image:oe},{value:"pritom",label:"Pritom Miha",image:ne}],Oe=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"},{value:"update",label:"update"}],Ee=({data:r,...t})=>e(de.Option,{...t,children:e("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:r.image,alt:"",className:"w-full h-full rounded-full"},void 0,!1,{fileName:o,lineNumber:74,columnNumber:13},void 0)},void 0,!1,{fileName:o,lineNumber:73,columnNumber:11},void 0)},void 0,!1,{fileName:o,lineNumber:72,columnNumber:9},void 0),e("span",{className:"flex-1",children:r.label},void 0,!1,{fileName:o,lineNumber:81,columnNumber:9},void 0)]},void 0,!0,{fileName:o,lineNumber:71,columnNumber:7},void 0)},void 0,!1,{fileName:o,lineNumber:70,columnNumber:5},void 0),qe=()=>{var S,y,j,d;const{editModal:r,editItem:t}=B(n=>n.project),h=$(),[C,p]=f.exports.useState(new Date),[x,N]=f.exports.useState(new Date),k=ie({name:ae().required("Name is required"),assign:H().required("Assignee is required"),startDate:A().required("Start date is required").min(new Date,"Start date must be greater than today"),endDate:A().required("End date is required").min(new Date,"End date must be greater than today")}).required(),{register:b,control:g,reset:u,formState:{errors:v},handleSubmit:M}=re({resolver:te(k),mode:"all"});return f.exports.useEffect(()=>{u(t)},[t]),e(ce,{title:"Edit Project",activeModal:r,onClose:()=>h(Q(!1)),children:e("form",{onSubmit:M(n=>{h(z({id:t.id,name:n.name,des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",assignee:n.assign,category:null,startDate:C.toISOString().split("T")[0],endDate:x.toISOString().split("T")[0],progress:Math.floor(Math.random()*(100-10+1)+10)})),h(Q(!1)),ge.info("Edit Successfully",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}),className:"space-y-4 ",children:[e(T,{error:v.name,children:e("input",{type:"text",defaultValue:t.name,className:"form-control py-2",...b("name")},void 0,!1,{fileName:o,lineNumber:158,columnNumber:11},void 0)},void 0,!1,{fileName:o,lineNumber:157,columnNumber:9},void 0),e("div",{className:"grid lg:grid-cols-2 gap-4 grid-cols-1",children:[e(T,{label:"Start Date",id:"default-picker",error:v.startDate,children:e(F,{name:"startDate",control:g,render:({field:n})=>e(_,{className:"form-control py-2",id:"default-picker",placeholder:"yyyy, dd M",value:C,onChange:D=>{n.onChange(D)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},void 0,!1,{fileName:o,lineNumber:175,columnNumber:17},void 0)},void 0,!1,{fileName:o,lineNumber:171,columnNumber:13},void 0)},void 0,!1,{fileName:o,lineNumber:166,columnNumber:11},void 0),e(T,{label:"End Date",id:"default-picker2",error:v.endDate,children:e(F,{name:"endDate",control:g,render:({field:n})=>e(_,{className:"form-control py-2",id:"default-picker2",placeholder:"yyyy, dd M",value:x,onChange:D=>{n.onChange(D)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},void 0,!1,{fileName:o,lineNumber:201,columnNumber:17},void 0)},void 0,!1,{fileName:o,lineNumber:197,columnNumber:13},void 0)},void 0,!1,{fileName:o,lineNumber:192,columnNumber:11},void 0)]},void 0,!0,{fileName:o,lineNumber:165,columnNumber:9},void 0),e("div",{className:v.assign?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Assignee"},void 0,!1,{fileName:o,lineNumber:220,columnNumber:11},void 0),e(F,{name:"assign",control:g,render:({field:n})=>e(L,{...n,options:we,styles:Z,className:"react-select",classNamePrefix:"select",isSearchable:!1,defaultValue:t.assignee,isMulti:!0,components:{Option:Ee},id:"icon_s"},void 0,!1,{fileName:o,lineNumber:227,columnNumber:15},void 0)},void 0,!1,{fileName:o,lineNumber:223,columnNumber:11},void 0),v.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((S=v.assign)==null?void 0:S.message)||((y=v.assign)==null?void 0:y.label.message)},void 0,!1,{fileName:o,lineNumber:244,columnNumber:13},void 0)]},void 0,!0,{fileName:o,lineNumber:219,columnNumber:9},void 0),e("div",{className:v.tags?"has-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Tag"},void 0,!1,{fileName:o,lineNumber:251,columnNumber:11},void 0),e(F,{name:"tags",control:g,render:({field:n})=>e(L,{...n,options:Oe,styles:Z,className:"react-select",classNamePrefix:"select",isMulti:!0,id:"icon_s"},void 0,!1,{fileName:o,lineNumber:258,columnNumber:15},void 0)},void 0,!1,{fileName:o,lineNumber:254,columnNumber:11},void 0),v.assign&&e("div",{className:" mt-2  text-danger-500 block text-sm",children:((j=v.tags)==null?void 0:j.message)||((d=v.tags)==null?void 0:d.label.message)},void 0,!1,{fileName:o,lineNumber:270,columnNumber:13},void 0)]},void 0,!0,{fileName:o,lineNumber:250,columnNumber:9},void 0),e(Ne,{label:"Description",placeholder:"Description"},void 0,!1,{fileName:o,lineNumber:275,columnNumber:9},void 0),e("div",{className:"ltr:text-right rtl:text-left",children:e("button",{className:"btn btn-dark  text-center",children:"Update"},void 0,!1,{fileName:o,lineNumber:278,columnNumber:11},void 0)},void 0,!1,{fileName:o,lineNumber:277,columnNumber:9},void 0)]},void 0,!0,{fileName:o,lineNumber:156,columnNumber:7},void 0)},void 0,!1,{fileName:o,lineNumber:151,columnNumber:5},void 0)};var c="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\app\\projects\\index.jsx";const Ye=()=>{const[r,t]=f.exports.useState("grid"),{width:h,breakpoints:C}=xe(),[p,x]=f.exports.useState(!1),{projects:N}=B(b=>b.project),k=$();return f.exports.useEffect(()=>{x(!0),setTimeout(()=>{x(!1)},1500)},[r]),e("div",{children:[e(ke,{},void 0,!1,{fileName:c,lineNumber:31,columnNumber:7},void 0),e("div",{className:"flex flex-wrap justify-between items-center mb-4",children:[e("h4",{className:"font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4",children:"Project"},void 0,!1,{fileName:c,lineNumber:33,columnNumber:9},void 0),e("div",{className:`${h<C.md?"space-x-rb":""} md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse`,children:[e(I,{icon:"heroicons:list-bullet",text:"List view",disabled:p,className:`${r==="list"?"bg-slate-900 dark:bg-slate-700  text-white":" bg-white dark:bg-slate-800 dark:text-slate-300"}   h-min text-sm font-normal`,iconClass:" text-lg",onClick:()=>t("list")},void 0,!1,{fileName:c,lineNumber:41,columnNumber:11},void 0),e(I,{icon:"heroicons-outline:view-grid",text:"Grid view",disabled:p,className:`${r==="grid"?"bg-slate-900 dark:bg-slate-700 text-white":" bg-white dark:bg-slate-800 dark:text-slate-300"}   h-min text-sm font-normal`,iconClass:" text-lg",onClick:()=>t("grid")},void 0,!1,{fileName:c,lineNumber:53,columnNumber:11},void 0),e(I,{icon:"heroicons-outline:filter",text:"On going",className:"bg-white dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-900 hover:text-white btn-md  h-min text-sm font-normal",iconClass:" text-lg"},void 0,!1,{fileName:c,lineNumber:65,columnNumber:11},void 0),e(I,{icon:"heroicons-outline:plus",text:"Add Project",className:"btn-dark dark:bg-slate-800  h-min text-sm font-normal",iconClass:" text-lg",onClick:()=>k(G(!0))},void 0,!1,{fileName:c,lineNumber:71,columnNumber:11},void 0)]},void 0,!0,{fileName:c,lineNumber:36,columnNumber:9},void 0)]},void 0,!0,{fileName:c,lineNumber:32,columnNumber:7},void 0),p&&r==="grid"&&e(ye,{count:N==null?void 0:N.length},void 0,!1,{fileName:c,lineNumber:81,columnNumber:9},void 0),p&&r==="list"&&e(je,{count:N==null?void 0:N.length},void 0,!1,{fileName:c,lineNumber:84,columnNumber:9},void 0),r==="grid"&&!p&&e("div",{className:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5",children:N.map((b,g)=>e(De,{project:b},g,!1,{fileName:c,lineNumber:90,columnNumber:13},void 0))},void 0,!1,{fileName:c,lineNumber:88,columnNumber:9},void 0),r==="list"&&!p&&e("div",{children:e(Se,{projects:N},void 0,!1,{fileName:c,lineNumber:96,columnNumber:11},void 0)},void 0,!1,{fileName:c,lineNumber:95,columnNumber:9},void 0),e(Me,{},void 0,!1,{fileName:c,lineNumber:99,columnNumber:7},void 0),e(qe,{},void 0,!1,{fileName:c,lineNumber:100,columnNumber:7},void 0)]},void 0,!0,{fileName:c,lineNumber:30,columnNumber:5},void 0)};export{Ye as default};
