import{R as w,j as e,F as p,bK as M,r as o,b as x,e as Ne,L as C,I as g,bO as be,bM as E,J as fe,T as $}from"./index.44d7a5c5.js";import{G as ve}from"./GlobalFilter.cd26253e.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\subtype\\SubTypeTable.jsx";const _=w.forwardRef(({indeterminate:u,...c},b)=>{const n=w.useRef(),d=b||n;return w.useEffect(()=>{d.current.indeterminate=u},[d,u]),e(p,{children:e("input",{type:"checkbox",ref:d,...c,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:30,columnNumber:17},void 0)},void 0,!1)}),pe=({showModal:u,handleClose:c,loaderModal:b,linkedData:n,handleDeleteData:d,dataId:h,moduleName:m,PropertyData:t,subTypeName:k,dataRole:f})=>e("div",{className:"thumbnail-container",children:u&&e("div",{className:"modal-overlay-property",children:e("div",{className:"modal-new w-[850px]",children:[e("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${m}?`},void 0,!1,{fileName:l,lineNumber:48,columnNumber:29},void 0),e("img",{src:be,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:c},void 0,!1,{fileName:l,lineNumber:49,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:47,columnNumber:25},void 0),b===!0?e(E,{},void 0,!1,{fileName:l,lineNumber:53,columnNumber:33},void 0):e(p,{children:[n!=null&&n.length?e("div",{className:"data-list-modal",children:e(p,{children:[e("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:m},void 0,!1,{fileName:l,lineNumber:60,columnNumber:57},void 0)," ",k," is linked with the following modules:"]},void 0,!0,{fileName:l,lineNumber:59,columnNumber:53},void 0),t!=null&&t.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:e("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Property: "},void 0,!1,{fileName:l,lineNumber:67,columnNumber:73},void 0),(f==null?void 0:f.deletepropert)===!0?e(p,{children:t==null?void 0:t.map((N,v)=>e(C,{className:" mr-[5px] hover:underline",to:`/view-property/${N==null?void 0:N._id}?delete=true`,children:[N==null?void 0:N.unitnumber,v!==t.length-1?",":null]},v+1,!0,{fileName:l,lineNumber:73,columnNumber:93},void 0))},void 0,!1):e(DeleteParagraph,{moduleName:m,linkedName:"Property"},void 0,!1,{fileName:l,lineNumber:77,columnNumber:81},void 0)]},void 0,!0,{fileName:l,lineNumber:66,columnNumber:69},void 0)},void 0,!1,{fileName:l,lineNumber:65,columnNumber:65},void 0)},void 0,!1,{fileName:l,lineNumber:64,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:l,lineNumber:57,columnNumber:45},void 0):null,e("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(n==null?void 0:n.length)||(t==null?void 0:t.length)?e("p",{className:" mt-[10px]",children:`This ${m} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:l,lineNumber:89,columnNumber:49},void 0):null,!(n!=null&&n.length)&&!(t!=null&&t.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>d(h),children:"Delete"},void 0,!1,{fileName:l,lineNumber:93,columnNumber:49},void 0):null]},void 0,!0,{fileName:l,lineNumber:86,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:l,lineNumber:46,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:45,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:43,columnNumber:9},void 0),he=({title:u,linktitle:c,pagelink:b,allCustomers:n,onDataUpdate:d})=>{const h=localStorage.getItem("isAuth"),m=JSON.parse(h),{data:t}=M(m==null?void 0:m.roleid),[k,f]=o.exports.useState(!1),[N,v]=o.exports.useState(!1),[P,U]=o.exports.useState(""),[G,V]=o.exports.useState(""),[B,T]=o.exports.useState(""),[J,z]=o.exports.useState(""),q=async i=>{if(f(!0),v(!0),i)try{const a=`http://dev-rare.srp.ai/property/api/advancesearch?subtypeid=${i==null?void 0:i._id}&softdelete=false`,s=await fetch(a);if(!s.ok&&s.status!==400)throw new Error(`API 2 failed with status: ${s.status}`);const r=s.status===400?[]:await s.json(),A=[...r];U(A),T(r),V(i==null?void 0:i._id),z(i==null?void 0:i.subtypename),v(!1)}catch(a){console.error("Error fetching data:",a),v(!1)}},K=()=>{f(!1),T("")},Q=async i=>{try{await fe.patch("http://dev-rare.srp.ai/subtype/api/subtypedelete",{_id:i,softdelete:!0}),d(),T("")}catch(a){console.log(a,"error")}},W=[{Header:"Sr no",accessor:"id",Cell:({row:i,flatRows:a})=>e("span",{children:a.indexOf(i)+1},void 0,!1,{fileName:l,lineNumber:212,columnNumber:24},void 0)},{Header:"Sub Type Name",accessor:"subtypename",Cell:i=>{var a,s;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?(s=i==null?void 0:i.cell)==null?void 0:s.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:219,columnNumber:24},void 0)}},{Header:"Sub Type Code",accessor:"subtypecode",Cell:i=>{var a,s;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?(s=i==null?void 0:i.cell)==null?void 0:s.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:226,columnNumber:24},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:i=>{var a,s;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?new Date((s=i==null?void 0:i.cell)==null?void 0:s.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:233,columnNumber:24},void 0)}},{Header:"action",accessor:i=>`${i._id}`,Cell:i=>{const a=localStorage.getItem("isAuth"),s=JSON.parse(a),{data:r}=M(s==null?void 0:s.roleid);if(!r)return null;const A=(r==null?void 0:r.readsubtype)===!0,ce=(r==null?void 0:r.updatesubtype)===!0,de=(r==null?void 0:r.deletesubtype)===!0;return e("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[A&&e($,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e(C,{className:"action-btn",to:`/view-subtype/${i==null?void 0:i.cell.value}`,type:"button",children:e(g,{icon:"heroicons:eye"},void 0,!1,{fileName:l,lineNumber:259,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:258,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:257,columnNumber:33},void 0),ce&&e($,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e(C,{to:`/update-subtype/${i==null?void 0:i.cell.value}`,className:"action-btn",type:"button",children:e(g,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:l,lineNumber:268,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:267,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:266,columnNumber:33},void 0),de&&e($,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",onClick:()=>{var L,O;return q((O=(L=i==null?void 0:i.cell)==null?void 0:L.row)==null?void 0:O.original)},children:e(g,{icon:"heroicons:trash"},void 0,!1,{fileName:l,lineNumber:283,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:282,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:275,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:254,columnNumber:21},void 0)}}],Y=o.exports.useMemo(()=>W,[]),X=o.exports.useMemo(()=>n),Z=x.exports.useTable({columns:Y,data:X,initialState:{pageIndex:0,pageSize:50}},x.exports.useGlobalFilter,x.exports.useSortBy,x.exports.usePagination,x.exports.useRowSelect,i=>{i.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:s})=>e("div",{children:e(_,{...s()},void 0,!1,{fileName:l,lineNumber:314,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:313,columnNumber:25},void 0),Cell:({row:s})=>e("div",{children:e(_,{...s.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:319,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:318,columnNumber:25},void 0)},...a])}),{getTableProps:R,getTableBodyProps:D,headerGroups:ee,footerGroups:xe,page:le,nextPage:ie,previousPage:ae,canNextPage:y,canPreviousPage:S,pageOptions:I,state:te,gotoPage:j,pageCount:se,setPageSize:ne,setGlobalFilter:re,prepareRow:oe}=Z,{globalFilter:me,pageIndex:H,pageSize:ue}=te;return e(p,{children:e(Ne,{children:[e("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:u},void 0,!1,{fileName:l,lineNumber:351,columnNumber:21},void 0),(t==null?void 0:t.createsubtype)&&e(C,{to:b,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:c},void 0,!1,{fileName:l,lineNumber:354,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:350,columnNumber:17},void 0),e("div",{className:"md:flex justify-end items-center mb-6",children:e(ve,{filter:me,setFilter:re},void 0,!1,{fileName:l,lineNumber:359,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:358,columnNumber:17},void 0),e(pe,{showModal:k,handleClose:K,loaderModal:N,linkedData:P,handleDeleteData:Q,dataId:G,moduleName:"Sub Type",PropertyData:B,subTypeName:J,dataRole:t},void 0,!1,{fileName:l,lineNumber:361,columnNumber:17},void 0),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...R,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:ee.map(i=>e("tr",{...i.getHeaderGroupProps(),children:i.headers.map(a=>a.Header==="action"&&!((t==null?void 0:t.readsubtype)===!0||(t==null?void 0:t.updatesubtype)===!0||(t==null?void 0:t.deletesubtype)===!0)?e("th",{},void 0,!1,{fileName:l,lineNumber:378,columnNumber:60},void 0):e("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),e("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:388,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:382,columnNumber:53},void 0))},void 0,!1,{fileName:l,lineNumber:371,columnNumber:41},void 0))},void 0,!1,{fileName:l,lineNumber:369,columnNumber:33},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...D,children:le.map(i=>(oe(i),e("tr",{...i.getRowProps(),children:i.cells.map(a=>e("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:l,lineNumber:407,columnNumber:57},void 0))},void 0,!1,{fileName:l,lineNumber:404,columnNumber:45},void 0)))},void 0,!1,{fileName:l,lineNumber:397,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:365,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:364,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:363,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:362,columnNumber:17},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[e("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:ue,onChange:i=>ne(Number(i.target.value)),children:[50,100,100].map(i=>e("option",{value:i,children:["Show ",i]},i,!0,{fileName:l,lineNumber:428,columnNumber:33},void 0))},void 0,!1,{fileName:l,lineNumber:422,columnNumber:25},void 0),e("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",e("span",{children:[H+1," of ",I.length]},void 0,!0,{fileName:l,lineNumber:435,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:433,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:421,columnNumber:21},void 0),e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>j(0),disabled:!S,children:e(g,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:l,lineNumber:448,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:442,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:441,columnNumber:25},void 0),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ae(),disabled:!S,children:"Prev"},void 0,!1,{fileName:l,lineNumber:452,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:451,columnNumber:25},void 0),I.map((i,a)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${a===H?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>j(a),children:i+1},void 0,!1,{fileName:l,lineNumber:463,columnNumber:33},void 0)},a,!1,{fileName:l,lineNumber:462,columnNumber:29},void 0)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ie(),disabled:!y,children:"Next"},void 0,!1,{fileName:l,lineNumber:477,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:476,columnNumber:25},void 0),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>j(se-1),disabled:!y,className:` ${y?"":"opacity-50 cursor-not-allowed"}`,children:e(g,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:l,lineNumber:493,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:487,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:486,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:440,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:420,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:349,columnNumber:13},void 0)},void 0,!1)};var F="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\subtype\\AllSubType.jsx";const Se=()=>{const[u,c]=o.exports.useState([]),[b,n]=o.exports.useState(!1);return o.exports.useEffect(()=>{n(!0),(async()=>{const t=await(await fetch("http://dev-rare.srp.ai/subtype")).json();c(t),n(!1)})()},[]),e(p,{children:b===!1?e("div",{className:" space-y-5",children:e(he,{pagelink:"/add-subtype",linktitle:"Add new Sub Type",title:"All Sub Type",allCustomers:u,onDataUpdate:()=>{n(!0),(async()=>{const t=await(await fetch("http://dev-rare.srp.ai/subtype")).json();c(t),n(!1)})()}},void 0,!1,{fileName:F,lineNumber:36,columnNumber:25},void 0)},void 0,!1,{fileName:F,lineNumber:35,columnNumber:21},void 0):e(E,{},void 0,!1,{fileName:F,lineNumber:37,columnNumber:30},void 0)},void 0,!1)};export{Se as default};
