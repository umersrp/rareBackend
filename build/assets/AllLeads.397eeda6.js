import{R as A,j as l,F as L,bK as M,r as m,b as p,e as me,L as S,bL as ce,I as u,K as de,T as y,bM as ue}from"./index.5e95c51c.js";import{G as re}from"./GlobalFilter.7c78a04c.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\lead-management\\LeadTable.jsx";const I=A.forwardRef(({indeterminate:r,...o},b)=>{const c=A.useRef(),N=b||c;return A.useEffect(()=>{N.current.indeterminate=r},[N,r]),l(L,{children:l("input",{type:"checkbox",ref:N,...o,className:"table-checkbox"},void 0,!1,{fileName:a,lineNumber:33,columnNumber:9},void 0)},void 0,!1)}),oe=({title:r,linktitle:o,pagelink:b,allCustomers:c,onDataUpdate:N})=>{const k=localStorage.getItem("isAuth"),f=JSON.parse(k),{data:n}=M(f==null?void 0:f.roleid),[O,P]=m.exports.useState(!1),[T,Ne]=m.exports.useState(!1),[E,ve]=m.exports.useState(""),[G,V]=m.exports.useState(""),U=async e=>{P(!0),V(e)},B=()=>{P(!1)},Y=async e=>{try{await de.patch("http://dev-rare.srp.ai/users/api/specific/userupdate",{_id:e,softdelete:!0}),N()}catch(i){console.log(i,"error")}},J=[{Header:"Id",accessor:"id",Cell:({row:e,flatRows:i})=>l("span",{children:i.indexOf(e)+1},void 0,!1,{fileName:a,lineNumber:79,columnNumber:16},void 0)},{Header:"Name",accessor:e=>`${e.firstname} ${e.lastname}`,Cell:e=>{var i;return l("span",{children:(i=e==null?void 0:e.cell)==null?void 0:i.value},void 0,!1,{fileName:a,lineNumber:86,columnNumber:16},void 0)}},{Header:"Email",accessor:"email",Cell:e=>{var i;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(i=e==null?void 0:e.cell)==null?void 0:i.value},void 0,!1,{fileName:a,lineNumber:96,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:95,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:94,columnNumber:11},void 0)}},{Header:"date of birth",accessor:"datebirth",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:108,columnNumber:16},void 0)}},{Header:"Age",accessor:"datebirth",id:"Age",Cell:e=>{var _,$;const i=new Date,t=i.getFullYear(),s=new Date((_=e==null?void 0:e.cell)==null?void 0:_.value),v=s.getFullYear(),d=s.getMonth(),D=s.getDate();let g=t-v;return(d>i.getMonth()||d===i.getMonth()&&D>i.getDate())&&g--,l("span",{children:($=e==null?void 0:e.cell)!=null&&$.value?g:"Not Available"},void 0,!1,{fileName:a,lineNumber:129,columnNumber:16},void 0)}},{Header:"Assigned Agent",accessor:"employee_email",Cell:e=>{var i,t;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:139,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:138,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:137,columnNumber:11},void 0)}},{Header:"contact no",accessor:"contactno",Cell:e=>{var i,t;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:154,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:153,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:152,columnNumber:11},void 0)}},{Header:"Nationality",accessor:"passportno",Cell:e=>{var i,t;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:169,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:168,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:167,columnNumber:11},void 0)}},{Header:"Check-In Date",accessor:"checkindate",Cell:e=>{var i,t;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:184,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:183,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:182,columnNumber:11},void 0)}},{Header:"Check-Out Date",accessor:"checkoutdate",Cell:e=>{var i,t;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:199,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:198,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:197,columnNumber:11},void 0)}},{Header:"location",accessor:"location",Cell:e=>{var i,t,s,v,d;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((i=e==null?void 0:e.cell)==null?void 0:i.value)&&((t=e==null?void 0:e.cell)==null?void 0:t.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)&&((v=e==null?void 0:e.cell)==null?void 0:v.value)!==""?l("a",{className:"flex gap-x-[5px] items-center",href:(d=e==null?void 0:e.cell)==null?void 0:d.value,target:"_blank",children:[l(u,{icon:"heroicons-outline:eye"},void 0,!1,{fileName:a,lineNumber:221,columnNumber:19},void 0),"View Location"]},void 0,!0,{fileName:a,lineNumber:220,columnNumber:17},void 0):"Not Available"},void 0,!1,{fileName:a,lineNumber:213,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:212,columnNumber:11},void 0)}},{Header:"No.Of Guests",accessor:"no_guests",Cell:e=>{var i,t;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:238,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:237,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:236,columnNumber:11},void 0)}},{Header:"Lead Status",accessor:"lead_status",Cell:e=>{var i,t;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:253,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:252,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:251,columnNumber:11},void 0)}},{Header:"status",accessor:"active",Cell:e=>{var i,t,s;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((i=e==null?void 0:e.cell)==null?void 0:i.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} 
              ${((t=e==null?void 0:e.cell)==null?void 0:t.value)===!1?"text-danger-500 bg-danger-500":""}
              
               `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)===!0?"Active":"In Active"},void 0,!1,{fileName:a,lineNumber:267,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:266,columnNumber:11},void 0)}},{Header:"created-by",accessor:"employee_email_createdBy",Cell:e=>{var i,t;return l("span",{className:"normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:289,columnNumber:16},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:296,columnNumber:16},void 0)}},{Header:"updated-by",accessor:"employee_email_updatedBy",Cell:e=>{var i,t;return l("span",{className:"normal-case",children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:303,columnNumber:16},void 0)}},{Header:"updated-on",accessor:"updatedAt",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:310,columnNumber:16},void 0)}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const i=localStorage.getItem("isAuth"),t=JSON.parse(i),{data:s}=M(t==null?void 0:t.roleid);if(!s)return null;const v=(s==null?void 0:s.convertocustomer)===!0,d=(s==null?void 0:s.readlead)===!0,D=(s==null?void 0:s.updatelead)===!0,g=(s==null?void 0:s.deletelead)===!0;return l("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[v&&l(y,{content:"Convert to customer",placement:"top",arrow:!0,animation:"shift-away",children:l("button",{className:"action-btn",type:"button",children:l(u,{icon:"heroicons:users"},void 0,!1,{fileName:a,lineNumber:336,columnNumber:19},void 0)},void 0,!1,{fileName:a,lineNumber:335,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:334,columnNumber:15},void 0),d&&l(y,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(S,{to:`/view-leads/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l(u,{icon:"heroicons:eye"},void 0,!1,{fileName:a,lineNumber:343,columnNumber:19},void 0)},void 0,!1,{fileName:a,lineNumber:342,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:341,columnNumber:15},void 0),D&&l(y,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:l(S,{to:`/update-leads/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l(u,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:a,lineNumber:350,columnNumber:19},void 0)},void 0,!1,{fileName:a,lineNumber:349,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:348,columnNumber:15},void 0),g&&l(y,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",onClick:()=>U(e==null?void 0:e.cell.value),children:l(u,{icon:"heroicons:trash"},void 0,!1,{fileName:a,lineNumber:357,columnNumber:19},void 0)},void 0,!1,{fileName:a,lineNumber:356,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:355,columnNumber:15},void 0)]},void 0,!0,{fileName:a,lineNumber:332,columnNumber:11},void 0)}}],K=m.exports.useMemo(()=>J,[]),q=m.exports.useMemo(()=>c),z=p.exports.useTable({columns:K,data:q,initialState:{pageIndex:0,pageSize:50}},p.exports.useGlobalFilter,p.exports.useSortBy,p.exports.usePagination,p.exports.useRowSelect,e=>{e.visibleColumns.push(i=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>l("div",{children:l(I,{...t()},void 0,!1,{fileName:a,lineNumber:388,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:387,columnNumber:13},void 0),Cell:({row:t})=>l("div",{children:l(I,{...t.getToggleRowSelectedProps()},void 0,!1,{fileName:a,lineNumber:393,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:392,columnNumber:13},void 0)},...i])}),{getTableProps:Q,getTableBodyProps:W,headerGroups:X,footerGroups:be,page:Z,nextPage:R,previousPage:w,canNextPage:h,canPreviousPage:x,pageOptions:F,state:ee,gotoPage:C,pageCount:le,setPageSize:ae,setGlobalFilter:ie,prepareRow:te}=z,{globalFilter:ne,pageIndex:j,pageSize:se}=ee;return l(L,{children:l(me,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:r},void 0,!1,{fileName:a,lineNumber:425,columnNumber:11},void 0),(n==null?void 0:n.createlead)===!0?l(S,{to:b,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:o},void 0,!1,{fileName:a,lineNumber:428,columnNumber:15},void 0):null]},void 0,!0,{fileName:a,lineNumber:424,columnNumber:9},void 0),l("div",{className:"md:flex justify-end items-center mb-6",children:l(re,{filter:ne,setFilter:ie},void 0,!1,{fileName:a,lineNumber:432,columnNumber:11},void 0)},void 0,!1,{fileName:a,lineNumber:431,columnNumber:9},void 0),l(ce,{showModal:O,handleClose:B,loaderModal:T,linkedData:E,handleDeleteData:Y,dataId:G,moduleName:"Lead"},void 0,!1,{fileName:a,lineNumber:434,columnNumber:9},void 0),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:" ",children:l("table",{className:"min-w-[140%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Q,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:X.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(i=>i.Header==="action"&&!((n==null?void 0:n.convertocustomer)===!0||(n==null?void 0:n.readlead)===!0||(n==null?void 0:n.updatelead)===!0||(n==null?void 0:n.deletelead)===!0)?l("th",{},void 0,!1,{fileName:a,lineNumber:452,columnNumber:34},void 0):l("th",{...i.getHeaderProps(i.getSortByToggleProps()),scope:"col",className:"table-th",children:[i.render("Header"),l("span",{children:i.isSorted?i.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:a,lineNumber:462,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:456,columnNumber:27},void 0))},void 0,!1,{fileName:a,lineNumber:444,columnNumber:21},void 0))},void 0,!1,{fileName:a,lineNumber:442,columnNumber:17},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...W,children:Z.map(e=>(te(e),l("tr",{...e.getRowProps(),children:e.cells.map(i=>l("td",{...i.getCellProps(),className:"table-td",children:i.render("Cell")},void 0,!1,{fileName:a,lineNumber:481,columnNumber:29},void 0))},void 0,!1,{fileName:a,lineNumber:478,columnNumber:23},void 0)))},void 0,!1,{fileName:a,lineNumber:471,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:438,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:437,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:436,columnNumber:11},void 0)},void 0,!1,{fileName:a,lineNumber:435,columnNumber:9},void 0),l("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[l("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:se,onChange:e=>ae(Number(e.target.value)),children:[10,25,50].map(e=>l("option",{value:e,children:["Show ",e]},e,!0,{fileName:a,lineNumber:516,columnNumber:17},void 0))},void 0,!1,{fileName:a,lineNumber:510,columnNumber:13},void 0),l("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",l("span",{children:[j+1," of ",F.length]},void 0,!0,{fileName:a,lineNumber:523,columnNumber:15},void 0)]},void 0,!0,{fileName:a,lineNumber:521,columnNumber:13},void 0)]},void 0,!0,{fileName:a,lineNumber:509,columnNumber:11},void 0),l("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${x?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>C(0),disabled:!x,children:l(u,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:a,lineNumber:536,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:530,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:529,columnNumber:13},void 0),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${x?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>w(),disabled:!x,children:"Prev"},void 0,!1,{fileName:a,lineNumber:540,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:539,columnNumber:13},void 0),F.map((e,i)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${i===j?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>C(i),children:e+1},void 0,!1,{fileName:a,lineNumber:551,columnNumber:17},void 0)},i,!1,{fileName:a,lineNumber:550,columnNumber:15},void 0)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${h?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>R(),disabled:!h,children:"Next"},void 0,!1,{fileName:a,lineNumber:565,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:564,columnNumber:13},void 0),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>C(le-1),disabled:!h,className:` ${h?"":"opacity-50 cursor-not-allowed"}`,children:l(u,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:a,lineNumber:581,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:575,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:574,columnNumber:13},void 0)]},void 0,!0,{fileName:a,lineNumber:528,columnNumber:11},void 0)]},void 0,!0,{fileName:a,lineNumber:508,columnNumber:9},void 0)]},void 0,!0,{fileName:a,lineNumber:423,columnNumber:7},void 0)},void 0,!1)};var H="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\lead-management\\AllLeads.jsx";const he=()=>{const[r,o]=m.exports.useState([]),[b,c]=m.exports.useState(!1);return m.exports.useEffect(()=>{c(!0),(async()=>{const n=await(await fetch("http://dev-rare.srp.ai/users/api/customer/withoutdate?sort=descending&type=lead&page=0&perPage=all")).json();o(n==null?void 0:n.users),c(!1)})()},[]),l(L,{children:b===!1?l("div",{className:" space-y-5",children:l(oe,{pagelink:"/add-leads",linktitle:"Add new Lead",title:"All Leads",allCustomers:r,onDataUpdate:()=>{c(!0),(async()=>{const n=await(await fetch("http://dev-rare.srp.ai/users/api/customer/withoutdate?sort=descending&type=lead&page=0&perPage=all")).json();o(n==null?void 0:n.users),c(!1)})()}},void 0,!1,{fileName:H,lineNumber:36,columnNumber:25},void 0)},void 0,!1,{fileName:H,lineNumber:35,columnNumber:21},void 0):l(ue,{},void 0,!1,{fileName:H,lineNumber:37,columnNumber:30},void 0)},void 0,!1)};export{he as default};
