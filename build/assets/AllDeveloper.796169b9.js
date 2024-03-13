import{R as F,j as e,F as p,bL as O,r as s,b as x,e as Ne,L as S,I as g,bP as ve,bN as E,M as be,T as I}from"./index.a2f6c442.js";import{G as fe}from"./GlobalFilter.bff8a921.js";import{D as pe}from"./DeleteParagraph.a73e0a0e.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\developer\\DeveloperTable.jsx";const _=F.forwardRef(({indeterminate:d,...u},v)=>{const n=F.useRef(),c=v||n;return F.useEffect(()=>{c.current.indeterminate=d},[c,d]),e(p,{children:e("input",{type:"checkbox",ref:c,...u,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:31,columnNumber:17},void 0)},void 0,!1)}),he=({showModal:d,handleClose:u,loaderModal:v,linkedData:n,handleDeleteData:c,dataId:h,moduleName:m,PropertyData:r,developerName:k,dataRole:b})=>e("div",{className:"thumbnail-container",children:d&&e("div",{className:"modal-overlay-property",children:e("div",{className:"modal-new w-[850px]",children:[e("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${m}?`},void 0,!1,{fileName:l,lineNumber:49,columnNumber:29},void 0),e("img",{src:ve,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:u},void 0,!1,{fileName:l,lineNumber:50,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:48,columnNumber:25},void 0),v===!0?e(E,{},void 0,!1,{fileName:l,lineNumber:54,columnNumber:33},void 0):e(p,{children:[n!=null&&n.length?e("div",{className:"data-list-modal",children:e(p,{children:[e("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:m},void 0,!1,{fileName:l,lineNumber:61,columnNumber:57},void 0)," ",k," is linked with the following modules:"]},void 0,!0,{fileName:l,lineNumber:60,columnNumber:53},void 0),r!=null&&r.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:e("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Property: "},void 0,!1,{fileName:l,lineNumber:68,columnNumber:73},void 0),(b==null?void 0:b.deletepropert)===!0?e(p,{children:r==null?void 0:r.map((N,f)=>e(S,{className:" mr-[5px] hover:underline",to:`/view-property/${N==null?void 0:N._id}?delete=true`,children:[N==null?void 0:N.unitnumber,f!==r.length-1?",":null]},f+1,!0,{fileName:l,lineNumber:74,columnNumber:93},void 0))},void 0,!1):e(pe,{moduleName:m,linkedName:"Property"},void 0,!1,{fileName:l,lineNumber:78,columnNumber:81},void 0)]},void 0,!0,{fileName:l,lineNumber:67,columnNumber:69},void 0)},void 0,!1,{fileName:l,lineNumber:66,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:65,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:l,lineNumber:58,columnNumber:45},void 0):null,e("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(n==null?void 0:n.length)||(r==null?void 0:r.length)?e("p",{className:" mt-[10px]",children:`This ${m} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:l,lineNumber:90,columnNumber:49},void 0):null,!(n!=null&&n.length)&&!(r!=null&&r.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>c(h),children:"Delete"},void 0,!1,{fileName:l,lineNumber:94,columnNumber:49},void 0):null]},void 0,!0,{fileName:l,lineNumber:87,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:l,lineNumber:47,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:46,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:44,columnNumber:9},void 0),xe=({title:d,linktitle:u,pagelink:v,allCustomers:n,onDataUpdate:c})=>{const h=localStorage.getItem("isAuth"),m=JSON.parse(h),{data:r}=O(m==null?void 0:m.roleid),[k,b]=s.exports.useState(!1),[N,f]=s.exports.useState(!1),[P,U]=s.exports.useState(""),[G,D]=s.exports.useState(""),[V,j]=s.exports.useState(""),[B,z]=s.exports.useState(""),J=async i=>{if(b(!0),f(!0),i)try{const a=`http://dev-rare.srp.ai/property/api/advancesearch?developerid=${i==null?void 0:i._id}&softdelete=false`,o=await fetch(a);if(!o.ok&&o.status!==400)throw new Error(`API 2 failed with status: ${o.status}`);const t=o.status===400?[]:await o.json(),$=[...t];U($),j(t),D(i==null?void 0:i._id),z(i==null?void 0:i.developername),f(!1)}catch(a){console.error("Error fetching data:",a),f(!1)}},q=()=>{b(!1),j("")},Q=async i=>{try{await be.patch("http://dev-rare.srp.ai/developer/api/developerdelete",{_id:i,softdelete:!0}),c(),j("")}catch(a){console.log(a,"error")}},W=[{Header:"Sr no",accessor:"id",Cell:({row:i,flatRows:a})=>e("span",{children:a.indexOf(i)+1},void 0,!1,{fileName:l,lineNumber:212,columnNumber:24},void 0)},{Header:"Developer Name",accessor:"developername",Cell:i=>{var a,o,t;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?((o=i==null?void 0:i.cell)==null?void 0:o.value.slice(0,30))+(((t=i==null?void 0:i.cell)==null?void 0:t.value.length)>30?"...":""):"Not Available"},void 0,!1,{fileName:l,lineNumber:219,columnNumber:24},void 0)}},{Header:"Developer Code",accessor:"developercode",Cell:i=>{var a,o;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?(o=i==null?void 0:i.cell)==null?void 0:o.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:226,columnNumber:24},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:i=>{var a,o;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?new Date((o=i==null?void 0:i.cell)==null?void 0:o.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:233,columnNumber:24},void 0)}},{Header:"action",accessor:i=>`${i._id}`,Cell:i=>{const a=localStorage.getItem("isAuth"),o=JSON.parse(a),{data:t}=O(o==null?void 0:o.roleid);if(!t)return null;const $=(t==null?void 0:t.readdeveloper)===!0,ue=(t==null?void 0:t.updatedeveloper)===!0,ce=(t==null?void 0:t.deletedeveloper)===!0;return e("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[$&&e(I,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e(S,{className:"action-btn",to:`/view-developer/${i==null?void 0:i.cell.value}`,type:"button",children:e(g,{icon:"heroicons:eye"},void 0,!1,{fileName:l,lineNumber:259,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:258,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:257,columnNumber:33},void 0),ue&&e(I,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e(S,{to:`/update-developer/${i==null?void 0:i.cell.value}`,className:"action-btn",type:"button",children:e(g,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:l,lineNumber:268,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:267,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:266,columnNumber:33},void 0),ce&&e(I,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",onClick:()=>{var w,M;return J((M=(w=i==null?void 0:i.cell)==null?void 0:w.row)==null?void 0:M.original)},children:e(g,{icon:"heroicons:trash"},void 0,!1,{fileName:l,lineNumber:283,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:282,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:275,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:254,columnNumber:21},void 0)}}],Y=s.exports.useMemo(()=>W,[]),K=s.exports.useMemo(()=>n),X=x.exports.useTable({columns:Y,data:K,initialState:{pageIndex:0,pageSize:50}},x.exports.useGlobalFilter,x.exports.useSortBy,x.exports.usePagination,x.exports.useRowSelect,i=>{i.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:o})=>e("div",{children:e(_,{...o()},void 0,!1,{fileName:l,lineNumber:314,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:313,columnNumber:25},void 0),Cell:({row:o})=>e("div",{children:e(_,{...o.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:319,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:318,columnNumber:25},void 0)},...a])}),{getTableProps:Z,getTableBodyProps:R,headerGroups:ee,footerGroups:ge,page:le,nextPage:ie,previousPage:ae,canNextPage:y,canPreviousPage:C,pageOptions:T,state:re,gotoPage:A,pageCount:oe,setPageSize:ne,setGlobalFilter:te,prepareRow:se}=X,{globalFilter:me,pageIndex:H,pageSize:de}=re;return e(p,{children:e(Ne,{children:[e("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:d},void 0,!1,{fileName:l,lineNumber:351,columnNumber:21},void 0),(r==null?void 0:r.createdeveloper)&&e(S,{to:v,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:u},void 0,!1,{fileName:l,lineNumber:354,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:350,columnNumber:17},void 0),e("div",{className:"md:flex justify-end items-center mb-6",children:e(fe,{filter:me,setFilter:te},void 0,!1,{fileName:l,lineNumber:359,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:358,columnNumber:17},void 0),e(he,{showModal:k,handleClose:q,loaderModal:N,linkedData:P,handleDeleteData:Q,dataId:G,moduleName:"Developer Name",PropertyData:V,developerName:B,dataRole:r},void 0,!1,{fileName:l,lineNumber:361,columnNumber:17},void 0),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Z,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:ee.map(i=>e("tr",{...i.getHeaderGroupProps(),children:i.headers.map(a=>a.Header==="action"&&!((r==null?void 0:r.readdeveloper)===!0||(r==null?void 0:r.updatedeveloper)===!0||(r==null?void 0:r.deletedeveloper)===!0)?e("th",{},void 0,!1,{fileName:l,lineNumber:378,columnNumber:60},void 0):e("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),e("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:388,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:382,columnNumber:53},void 0))},void 0,!1,{fileName:l,lineNumber:371,columnNumber:41},void 0))},void 0,!1,{fileName:l,lineNumber:369,columnNumber:33},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...R,children:le.map(i=>(se(i),e("tr",{...i.getRowProps(),children:i.cells.map(a=>e("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:l,lineNumber:407,columnNumber:57},void 0))},void 0,!1,{fileName:l,lineNumber:404,columnNumber:45},void 0)))},void 0,!1,{fileName:l,lineNumber:397,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:365,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:364,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:363,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:362,columnNumber:17},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[e("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:de,onChange:i=>ne(Number(i.target.value)),children:[50,100,100].map(i=>e("option",{value:i,children:["Show ",i]},i,!0,{fileName:l,lineNumber:428,columnNumber:33},void 0))},void 0,!1,{fileName:l,lineNumber:422,columnNumber:25},void 0),e("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",e("span",{children:[H+1," of ",T.length]},void 0,!0,{fileName:l,lineNumber:435,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:433,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:421,columnNumber:21},void 0),e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>A(0),disabled:!C,children:e(g,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:l,lineNumber:448,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:442,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:441,columnNumber:25},void 0),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ae(),disabled:!C,children:"Prev"},void 0,!1,{fileName:l,lineNumber:452,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:451,columnNumber:25},void 0),T.map((i,a)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${a===H?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>A(a),children:i+1},void 0,!1,{fileName:l,lineNumber:463,columnNumber:33},void 0)},a,!1,{fileName:l,lineNumber:462,columnNumber:29},void 0)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ie(),disabled:!y,children:"Next"},void 0,!1,{fileName:l,lineNumber:477,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:476,columnNumber:25},void 0),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>A(oe-1),disabled:!y,className:` ${y?"":"opacity-50 cursor-not-allowed"}`,children:e(g,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:l,lineNumber:493,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:487,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:486,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:440,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:420,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:349,columnNumber:13},void 0)},void 0,!1)};var L="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\developer\\AllDeveloper.jsx";const ke=()=>{const[d,u]=s.exports.useState([]),[v,n]=s.exports.useState(!1);return s.exports.useEffect(()=>{n(!0),(async()=>{const r=await(await fetch("http://dev-rare.srp.ai/developer")).json();u(r),n(!1)})()},[]),e(p,{children:v===!1?e("div",{className:" space-y-5",children:e(xe,{pagelink:"/add-developer",linktitle:"Add new Developer",title:"All Developer",allCustomers:d,onDataUpdate:()=>{n(!0),(async()=>{const r=await(await fetch("http://dev-rare.srp.ai/developer")).json();u(r),n(!1)})()}},void 0,!1,{fileName:L,lineNumber:36,columnNumber:25},void 0)},void 0,!1,{fileName:L,lineNumber:35,columnNumber:21},void 0):e(E,{},void 0,!1,{fileName:L,lineNumber:37,columnNumber:30},void 0)},void 0,!1)};export{ke as default};
