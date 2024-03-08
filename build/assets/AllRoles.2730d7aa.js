import{R as A,j as e,F as h,bL as E,r as n,b as x,e as Ne,L as C,I as g,bP as be,bN as M,M as fe,T as F}from"./index.72434430.js";import{G as ve}from"./GlobalFilter.13c5cdc0.js";import{D as he}from"./DeleteParagraph.65e346e1.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\user-management\\roles\\RolesTable.jsx";const H=A.forwardRef(({indeterminate:c,...u},b)=>{const t=A.useRef(),d=b||t;return A.useEffect(()=>{d.current.indeterminate=c},[d,c]),e(h,{children:e("input",{type:"checkbox",ref:d,...u,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:31,columnNumber:17},void 0)},void 0,!1)}),pe=({showModal:c,handleClose:u,loaderModal:b,linkedData:t,handleDeleteData:d,dataId:p,moduleName:m,employeeData:r,roleName:S,dataRole:f})=>e("div",{className:"thumbnail-container",children:c&&e("div",{className:"modal-overlay-property",children:e("div",{className:"modal-new w-[850px]",children:[e("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${m}?`},void 0,!1,{fileName:l,lineNumber:49,columnNumber:29},void 0),e("img",{src:be,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:u},void 0,!1,{fileName:l,lineNumber:50,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:48,columnNumber:25},void 0),b===!0?e(M,{},void 0,!1,{fileName:l,lineNumber:54,columnNumber:33},void 0):e(h,{children:[t!=null&&t.length?e("div",{className:"data-list-modal",children:e(h,{children:[e("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:m},void 0,!1,{fileName:l,lineNumber:61,columnNumber:57},void 0)," ",S," is linked with the following modules:"]},void 0,!0,{fileName:l,lineNumber:60,columnNumber:53},void 0),r!=null&&r.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:e("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Employee: "},void 0,!1,{fileName:l,lineNumber:68,columnNumber:73},void 0),(f==null?void 0:f.deleteemployee)===!0?e(h,{children:r==null?void 0:r.map((N,v)=>e(C,{className:" mr-[5px] hover:underline",to:`/view-employee/${N==null?void 0:N._id}?delete=true`,children:[N==null?void 0:N.email,v!==r.length-1?",":null]},v+1,!0,{fileName:l,lineNumber:74,columnNumber:93},void 0))},void 0,!1):e(he,{moduleName:m,linkedName:"Employee"},void 0,!1,{fileName:l,lineNumber:78,columnNumber:81},void 0)]},void 0,!0,{fileName:l,lineNumber:67,columnNumber:69},void 0)},void 0,!1,{fileName:l,lineNumber:66,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:65,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:l,lineNumber:58,columnNumber:45},void 0):null,e("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(t==null?void 0:t.length)||(r==null?void 0:r.length)?e("p",{className:" mt-[10px]",children:`This ${m} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:l,lineNumber:90,columnNumber:49},void 0):null,!(t!=null&&t.length)&&!(r!=null&&r.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>d(p),children:"Delete"},void 0,!1,{fileName:l,lineNumber:94,columnNumber:49},void 0):null]},void 0,!0,{fileName:l,lineNumber:87,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:l,lineNumber:47,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:46,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:44,columnNumber:9},void 0),xe=({title:c,linktitle:u,pagelink:b,allCustomers:t,onDataUpdate:d})=>{const p=localStorage.getItem("isAuth"),m=JSON.parse(p),{data:r}=E(m==null?void 0:m.roleid),[S,f]=n.exports.useState(!1),[N,v]=n.exports.useState(!1),[O,_]=n.exports.useState(""),[U,G]=n.exports.useState(""),[V,k]=n.exports.useState(""),[B,z]=n.exports.useState(""),J=async i=>{if(f(!0),v(!0),i)try{const a=`http://dev-rare.srp.ai/employees/api/rolesdatacheck?roleid=${i==null?void 0:i._id}`,o=await fetch(a);if(!o.ok&&o.status!==400)throw new Error(`API 2 failed with status: ${o.status}`);const s=o.status===400?[]:await o.json(),j=[...s];k(s),_(j),G(i==null?void 0:i._id),z(i==null?void 0:i.rolename),v(!1)}catch(a){console.error("Error fetching data:",a),v(!1)}},q=()=>{f(!1),k("")},Q=async i=>{try{await fe.patch("http://dev-rare.srp.ai/roles/api/rolesdelete",{_id:i,softdelete:!0}),d(),k("")}catch(a){console.log(a,"error")}},W=[{Header:"Sr no",accessor:"id",Cell:({row:i,flatRows:a})=>e("span",{children:a.indexOf(i)+1},void 0,!1,{fileName:l,lineNumber:211,columnNumber:24},void 0)},{Header:"Role Name",accessor:"rolename",Cell:i=>{var a,o;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?(o=i==null?void 0:i.cell)==null?void 0:o.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:218,columnNumber:24},void 0)}},{Header:"Status",accessor:"Status",Cell:i=>e("span",{className:"inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500 bg-success-500",children:"Active"},void 0,!1,{fileName:l,lineNumber:225,columnNumber:24},void 0)},{Header:"created-on",accessor:"createdAt",Cell:i=>{var a,o;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?new Date((o=i==null?void 0:i.cell)==null?void 0:o.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:232,columnNumber:24},void 0)}},{Header:"action",accessor:i=>`${i._id}`,Cell:i=>{const a=localStorage.getItem("isAuth"),o=JSON.parse(a),{data:s}=E(o==null?void 0:o.roleid);if(!s)return null;const j=(s==null?void 0:s.readrole)===!0,ue=(s==null?void 0:s.updaterole)===!0,de=(s==null?void 0:s.deleterole)===!0;return e("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[j&&e(F,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e(C,{className:"action-btn",to:"#",type:"button",children:e(g,{icon:"heroicons:eye"},void 0,!1,{fileName:l,lineNumber:260,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:259,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:257,columnNumber:33},void 0),ue&&e(F,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e(C,{to:`/update-roles/${i==null?void 0:i.cell.value}`,className:"action-btn",type:"button",children:e(g,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:l,lineNumber:269,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:268,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:267,columnNumber:33},void 0),de&&e(F,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",onClick:()=>{var R,T;return J((T=(R=i==null?void 0:i.cell)==null?void 0:R.row)==null?void 0:T.original)},children:e(g,{icon:"heroicons:trash"},void 0,!1,{fileName:l,lineNumber:284,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:283,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:276,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:254,columnNumber:21},void 0)}}],Y=n.exports.useMemo(()=>W,[]),K=n.exports.useMemo(()=>t),X=x.exports.useTable({columns:Y,data:K,initialState:{pageIndex:0,pageSize:50}},x.exports.useGlobalFilter,x.exports.useSortBy,x.exports.usePagination,x.exports.useRowSelect,i=>{i.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:o})=>e("div",{children:e(H,{...o()},void 0,!1,{fileName:l,lineNumber:321,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:320,columnNumber:25},void 0),Cell:({row:o})=>e("div",{children:e(H,{...o.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:326,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:325,columnNumber:25},void 0)},...a])}),{getTableProps:Z,getTableBodyProps:D,headerGroups:ee,footerGroups:ge,page:le,nextPage:ie,previousPage:ae,canNextPage:y,canPreviousPage:w,pageOptions:I,state:re,gotoPage:P,pageCount:oe,setPageSize:te,setGlobalFilter:se,prepareRow:ne}=X,{globalFilter:me,pageIndex:L,pageSize:ce}=re;return e(h,{children:e(Ne,{children:[e("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:c},void 0,!1,{fileName:l,lineNumber:363,columnNumber:21},void 0),(r==null?void 0:r.createrole)===!0&&e(C,{to:b,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:u},void 0,!1,{fileName:l,lineNumber:366,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:362,columnNumber:17},void 0),e("div",{className:"md:flex justify-end items-center mb-6",children:e(ve,{filter:me,setFilter:se},void 0,!1,{fileName:l,lineNumber:371,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:370,columnNumber:17},void 0),e(pe,{showModal:S,handleClose:q,loaderModal:N,linkedData:O,handleDeleteData:Q,dataId:U,moduleName:"Role",employeeData:V,roleName:B,dataRole:r},void 0,!1,{fileName:l,lineNumber:373,columnNumber:17},void 0),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Z,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:ee.map(i=>e("tr",{...i.getHeaderGroupProps(),children:i.headers.map(a=>e("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),e("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:393,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:385,columnNumber:49},void 0))},void 0,!1,{fileName:l,lineNumber:383,columnNumber:41},void 0))},void 0,!1,{fileName:l,lineNumber:381,columnNumber:33},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...D,children:le.map(i=>(ne(i),e("tr",{...i.getRowProps(),children:i.cells.map(a=>e("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:l,lineNumber:415,columnNumber:57},void 0))},void 0,!1,{fileName:l,lineNumber:412,columnNumber:45},void 0)))},void 0,!1,{fileName:l,lineNumber:405,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:377,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:376,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:375,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:374,columnNumber:17},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[e("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:ce,onChange:i=>te(Number(i.target.value)),children:[10,25,50].map(i=>e("option",{value:i,children:["Show ",i]},i,!0,{fileName:l,lineNumber:450,columnNumber:33},void 0))},void 0,!1,{fileName:l,lineNumber:444,columnNumber:25},void 0),e("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",e("span",{children:[L+1," of ",I.length]},void 0,!0,{fileName:l,lineNumber:457,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:455,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:443,columnNumber:21},void 0),e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${w?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>P(0),disabled:!w,children:e(g,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:l,lineNumber:470,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:464,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:463,columnNumber:25},void 0),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${w?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ae(),disabled:!w,children:"Prev"},void 0,!1,{fileName:l,lineNumber:474,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:473,columnNumber:25},void 0),I.map((i,a)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${a===L?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>P(a),children:i+1},void 0,!1,{fileName:l,lineNumber:485,columnNumber:33},void 0)},a,!1,{fileName:l,lineNumber:484,columnNumber:29},void 0)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ie(),disabled:!y,children:"Next"},void 0,!1,{fileName:l,lineNumber:499,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:498,columnNumber:25},void 0),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>P(oe-1),disabled:!y,className:` ${y?"":"opacity-50 cursor-not-allowed"}`,children:e(g,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:l,lineNumber:515,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:509,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:508,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:462,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:442,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:361,columnNumber:13},void 0)},void 0,!1)};var $="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\user-management\\roles\\AllRoles.jsx";const Se=()=>{const[c,u]=n.exports.useState([]),[b,t]=n.exports.useState(!1);return n.exports.useEffect(()=>{t(!0),(async()=>{const r=await(await fetch("http://dev-rare.srp.ai/roles")).json();u(r),t(!1)})()},[]),e(h,{children:b===!1?e("div",{className:" space-y-5",children:e(xe,{pagelink:"/add-roles",linktitle:"Add new Roles",title:"All Roles",allCustomers:c,onDataUpdate:()=>{t(!0),(async()=>{const r=await(await fetch("http://dev-rare.srp.ai/roles")).json();u(r),t(!1)})()}},void 0,!1,{fileName:$,lineNumber:36,columnNumber:25},void 0)},void 0,!1,{fileName:$,lineNumber:35,columnNumber:21},void 0):e(M,{},void 0,!1,{fileName:$,lineNumber:37,columnNumber:30},void 0)},void 0,!1)};export{Se as default};
