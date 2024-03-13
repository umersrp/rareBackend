import{R as $,j as l,F as v,bL as O,r as o,b as x,e as de,L as P,I as g,bP as Ne,bN as G,M as be,T as j}from"./index.a2f6c442.js";import{G as ve}from"./GlobalFilter.bff8a921.js";import{D as fe}from"./DeleteParagraph.a73e0a0e.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\user-management\\employees\\EmployeesTable.jsx";const _=$.forwardRef(({indeterminate:u,...c},b)=>{const s=$.useRef(),d=b||s;return $.useEffect(()=>{d.current.indeterminate=u},[d,u]),l(v,{children:l("input",{type:"checkbox",ref:d,...c,className:"table-checkbox"},void 0,!1,{fileName:i,lineNumber:31,columnNumber:17},void 0)},void 0,!1)}),pe=({showModal:u,handleClose:c,loaderModal:b,linkedData:s,handleDeleteData:d,dataId:h,moduleName:r,rentpurchaseData:m,employeeEmail:A,dataRole:f})=>l("div",{className:"thumbnail-container",children:u&&l("div",{className:"modal-overlay-property",children:l("div",{className:"modal-new w-[850px]",children:[l("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${r}?`},void 0,!1,{fileName:i,lineNumber:49,columnNumber:29},void 0),l("img",{src:Ne,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:c},void 0,!1,{fileName:i,lineNumber:50,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:48,columnNumber:25},void 0),b===!0?l(G,{},void 0,!1,{fileName:i,lineNumber:54,columnNumber:33},void 0):l(v,{children:[s!=null&&s.length?l("div",{className:"data-list-modal",children:l(v,{children:[l("h4",{className:"text-[16px] mb-[10px]",children:[l("span",{className:"font-bold",children:r},void 0,!1,{fileName:i,lineNumber:61,columnNumber:57},void 0)," ",A," is linked with the following modules:"]},void 0,!0,{fileName:i,lineNumber:60,columnNumber:53},void 0),m!=null&&m.length?l("ul",{className:" mb-[10px] text-start",children:l("li",{className:"list-disc ml-[30px]",children:l("div",{className:"flex items-center",children:[l("span",{className:"font-semibold mr-[5px]",children:"Availability Sheet: "},void 0,!1,{fileName:i,lineNumber:68,columnNumber:73},void 0),(f==null?void 0:f.deleteavailability)===!0?l(v,{children:m==null?void 0:m.map((N,p)=>l(P,{className:" mr-[5px] hover:underline",to:`/view-availability-sheet/${N==null?void 0:N._id}?delete=true`,children:[N==null?void 0:N.unitnumber,p!==m.length-1?",":null]},p+1,!0,{fileName:i,lineNumber:74,columnNumber:93},void 0))},void 0,!1):l(fe,{moduleName:r,linkedName:"Availability Sheet"},void 0,!1,{fileName:i,lineNumber:78,columnNumber:81},void 0)]},void 0,!0,{fileName:i,lineNumber:67,columnNumber:69},void 0)},void 0,!1,{fileName:i,lineNumber:66,columnNumber:65},void 0)},void 0,!1,{fileName:i,lineNumber:65,columnNumber:61},void 0):null]},void 0,!0)},void 0,!1,{fileName:i,lineNumber:58,columnNumber:45},void 0):null,l("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(s==null?void 0:s.length)||(m==null?void 0:m.length)?l("p",{className:" mt-[10px]",children:`This ${r} is already linked. Please first delete these entries which are linked it with`},void 0,!1,{fileName:i,lineNumber:90,columnNumber:49},void 0):null,!(s!=null&&s.length)&&!(m!=null&&m.length)?l("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>d(h),children:"Delete"},void 0,!1,{fileName:i,lineNumber:94,columnNumber:49},void 0):null]},void 0,!0,{fileName:i,lineNumber:87,columnNumber:37},void 0)]},void 0,!0)]},void 0,!0,{fileName:i,lineNumber:47,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:46,columnNumber:17},void 0)},void 0,!1,{fileName:i,lineNumber:44,columnNumber:9},void 0),he=({title:u,linktitle:c,pagelink:b,allCustomers:s,onDataUpdate:d})=>{const h=localStorage.getItem("isAuth"),r=JSON.parse(h),{data:m}=O(r==null?void 0:r.roleid),[A,f]=o.exports.useState(!1),[N,p]=o.exports.useState(!1),[U,xe]=o.exports.useState(""),[V,B]=o.exports.useState(""),[z,H]=o.exports.useState([]),[J,q]=o.exports.useState(""),Q=async e=>{if(f(!0),p(!0),e)try{B(e==null?void 0:e._id),q(e==null?void 0:e.email),p(!1)}catch(a){console.error("Error fetching data:",a),p(!1)}},W=()=>{f(!1),H("")},Y=async e=>{try{await be.patch("http://dev-rare.srp.ai/employees/api/employeedelete",{_id:e,softdelete:!0}),d(),H("")}catch(a){console.log(a,"error")}},K=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>l("span",{children:a.indexOf(e)+1},void 0,!1,{fileName:i,lineNumber:211,columnNumber:24},void 0)},{Header:"Name",accessor:e=>`${e.firstname?`${e.firstname} ${e.lastname!=="None"&&e.lastname!==""?e.lastname:""}`:"Not Available"}`,Cell:e=>{var a,n,t;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((n=e==null?void 0:e.cell)==null?void 0:n.value.slice(0,30))+(((t=e==null?void 0:e.cell)==null?void 0:t.value.length)>30?"...":""):"Not Available"},void 0,!1,{fileName:i,lineNumber:218,columnNumber:24},void 0)}},{Header:"Email",accessor:"email",Cell:e=>{var a,n,t;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?((n=e==null?void 0:e.cell)==null?void 0:n.value.slice(0,30))+(((t=e==null?void 0:e.cell)==null?void 0:t.value.length)>30?"...":""):"Not Available"},void 0,!1,{fileName:i,lineNumber:225,columnNumber:24},void 0)}},{Header:"Designation",accessor:"designation",Cell:e=>{var a,n,t;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((n=e==null?void 0:e.cell)==null?void 0:n.value.slice(0,20))+(((t=e==null?void 0:e.cell)==null?void 0:t.value.length)>20?"...":""):"Not Available"},void 0,!1,{fileName:i,lineNumber:232,columnNumber:24},void 0)}},{Header:"Role Name",accessor:"role_name",Cell:e=>{var a,n,t,S,k;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((t=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:t.slice(0,20))+(((k=(S=e==null?void 0:e.cell)==null?void 0:S.value)==null?void 0:k.length)>20?"...":""):"Not Available"},void 0,!1,{fileName:i,lineNumber:239,columnNumber:24},void 0)}},{Header:"verified",accessor:"verified",Cell:e=>{var a,n,t;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=e==null?void 0:e.cell)==null?void 0:a.value)===!0?"text-success-500 bg-success-500":""} 
                ${((n=e==null?void 0:e.cell)==null?void 0:n.value)===!1?"text-danger-500 bg-danger-500":""}
                
                 `,children:((t=e==null?void 0:e.cell)==null?void 0:t.value)===!0?"verified":"Not verified"},void 0,!1,{fileName:i,lineNumber:248,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:247,columnNumber:21},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var a,n;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((n=e==null?void 0:e.cell)==null?void 0:n.value).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:270,columnNumber:24},void 0)}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const a=localStorage.getItem("isAuth"),n=JSON.parse(a),{data:t}=O(n==null?void 0:n.roleid);if(!t)return null;const S=(t==null?void 0:t.reademployee)===!0,k=(t==null?void 0:t.updateemployee)===!0,ce=(t==null?void 0:t.deleteemployee)===!0;return l("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[S&&l(j,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(P,{className:"action-btn",to:`/view-employee/${e==null?void 0:e.cell.value}`,type:"button",children:l(g,{icon:"heroicons:eye"},void 0,!1,{fileName:i,lineNumber:297,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:296,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:295,columnNumber:33},void 0),k&&l(j,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:l(P,{to:`/update-employee/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l(g,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:i,lineNumber:306,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:305,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:304,columnNumber:33},void 0),ce&&l(j,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",onClick:()=>{var I,M;return Q((M=(I=e==null?void 0:e.cell)==null?void 0:I.row)==null?void 0:M.original)},children:l(g,{icon:"heroicons:trash"},void 0,!1,{fileName:i,lineNumber:321,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:320,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:313,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:292,columnNumber:21},void 0)}}],X=o.exports.useMemo(()=>K,[]),Z=o.exports.useMemo(()=>s),R=x.exports.useTable({columns:X,data:Z,initialState:{pageIndex:0,pageSize:50}},x.exports.useGlobalFilter,x.exports.useSortBy,x.exports.usePagination,x.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:n})=>l("div",{children:l(_,{...n()},void 0,!1,{fileName:i,lineNumber:353,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:352,columnNumber:25},void 0),Cell:({row:n})=>l("div",{children:l(_,{...n.getToggleRowSelectedProps()},void 0,!1,{fileName:i,lineNumber:358,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:357,columnNumber:25},void 0)},...a])}),{getTableProps:D,getTableBodyProps:w,headerGroups:ee,footerGroups:ge,page:le,nextPage:ie,previousPage:ae,canNextPage:y,canPreviousPage:C,pageOptions:L,state:me,gotoPage:E,pageCount:ne,setPageSize:te,setGlobalFilter:se,prepareRow:oe}=R,{globalFilter:re,pageIndex:T,pageSize:ue}=me;return l(v,{children:l(de,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:u},void 0,!1,{fileName:i,lineNumber:390,columnNumber:21},void 0),(m==null?void 0:m.createemployee)===!0&&l(P,{to:b,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:c},void 0,!1,{fileName:i,lineNumber:393,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:389,columnNumber:17},void 0),l("div",{className:"md:flex justify-end items-center mb-6",children:l(ve,{filter:re,setFilter:se},void 0,!1,{fileName:i,lineNumber:398,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:397,columnNumber:17},void 0),l(pe,{showModal:A,handleClose:W,loaderModal:N,linkedData:U,handleDeleteData:Y,dataId:V,moduleName:"Employee",rentpurchaseData:z,employeeEmail:J,dataRole:m},void 0,!1,{fileName:i,lineNumber:400,columnNumber:17},void 0),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"overflow-hidden ",children:l("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...D,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:ee.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>a.Header==="action"&&!((m==null?void 0:m.reademployee)===!0||(m==null?void 0:m.updateemployee)===!0||(m==null?void 0:m.deleteemployee)===!0)?l("th",{},void 0,!1,{fileName:i,lineNumber:417,columnNumber:60},void 0):l("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),l("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:i,lineNumber:427,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:421,columnNumber:53},void 0))},void 0,!1,{fileName:i,lineNumber:410,columnNumber:41},void 0))},void 0,!1,{fileName:i,lineNumber:408,columnNumber:33},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...w,children:[le.map(e=>(oe(e),l("tr",{...e.getRowProps(),children:e.cells.map(a=>l("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:i,lineNumber:446,columnNumber:57},void 0))},void 0,!1,{fileName:i,lineNumber:443,columnNumber:45},void 0))),l(v,{},void 0,!1)]},void 0,!0,{fileName:i,lineNumber:436,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:404,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:403,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:402,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:401,columnNumber:17},void 0),l("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[l("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:ue,onChange:e=>te(Number(e.target.value)),children:[10,25,50].map(e=>l("option",{value:e,children:["Show ",e]},e,!0,{fileName:i,lineNumber:483,columnNumber:33},void 0))},void 0,!1,{fileName:i,lineNumber:477,columnNumber:25},void 0),l("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",l("span",{children:[T+1," of ",L.length]},void 0,!0,{fileName:i,lineNumber:490,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:488,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:476,columnNumber:21},void 0),l("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>E(0),disabled:!C,children:l(g,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:i,lineNumber:503,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:497,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:496,columnNumber:25},void 0),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ae(),disabled:!C,children:"Prev"},void 0,!1,{fileName:i,lineNumber:507,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:506,columnNumber:25},void 0),L.map((e,a)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${a===T?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>E(a),children:e+1},void 0,!1,{fileName:i,lineNumber:518,columnNumber:33},void 0)},a,!1,{fileName:i,lineNumber:517,columnNumber:29},void 0)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ie(),disabled:!y,children:"Next"},void 0,!1,{fileName:i,lineNumber:532,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:531,columnNumber:25},void 0),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>E(ne-1),disabled:!y,className:` ${y?"":"opacity-50 cursor-not-allowed"}`,children:l(g,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:i,lineNumber:548,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:542,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:541,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:495,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:475,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:388,columnNumber:13},void 0)},void 0,!1)};var F="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\user-management\\employees\\AllEmployee.jsx";const ke=()=>{const[u,c]=o.exports.useState([]),[b,s]=o.exports.useState(!1);return o.exports.useEffect(()=>{s(!0),(async()=>{const m=await(await fetch("http://dev-rare.srp.ai/employees")).json();c(m),s(!1)})()},[]),l(v,{children:b===!1?l("div",{className:" space-y-5",children:l(he,{pagelink:"/add-employees",linktitle:"Add new Employees",title:"All Employees",allCustomers:u,onDataUpdate:()=>{s(!0),(async()=>{const m=await(await fetch("http://dev-rare.srp.ai/employees")).json();c(m),s(!1)})()}},void 0,!1,{fileName:F,lineNumber:36,columnNumber:25},void 0)},void 0,!1,{fileName:F,lineNumber:35,columnNumber:21},void 0):l(G,{},void 0,!1,{fileName:F,lineNumber:37,columnNumber:30},void 0)},void 0,!1)};export{ke as default};
