import{R as T,j as l,F as j,r as D,b as $,I as O,T as _e,L as je,C as Fe,bM as He}from"./index.1ebaab06.js";import{G as Ae}from"./GlobalFilter.1cb30eab.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\management-term\\ManagementTable.jsx";const Se=T.forwardRef(({indeterminate:b,...r},o)=>{const h=T.useRef(),N=o||h;return T.useEffect(()=>{N.current.indeterminate=b},[N,b]),l(j,{children:l("input",{type:"checkbox",ref:N,...r,className:"table-checkbox"},void 0,!1,{fileName:a,lineNumber:26,columnNumber:17},void 0)},void 0,!1)}),Me=({allData:b})=>{const r=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:t})=>l("span",{children:t.indexOf(e)+1},void 0,!1,{fileName:a,lineNumber:44,columnNumber:24},void 0)},{Header:"Status",accessor:"minimum_managementfee",Cell:e=>{var t,i,n,m,s,d,u,L,G,U,V,B,q,z,J,K,Q,W,X,Y,Z,w,ee,le,ae,te,ie,ne,me,ce,se,de,ue,re,oe,Ne,ve,fe,be,pe,ge,he,xe,Ce,ye,ke,Pe,$e;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((m=(n=(i=(t=e==null?void 0:e.cell)==null?void 0:t.row)==null?void 0:i.original)==null?void 0:n.managementContract)==null?void 0:m.propertyid)&&((L=(u=(d=(s=e==null?void 0:e.cell)==null?void 0:s.row)==null?void 0:d.original)==null?void 0:u.managementContract)==null?void 0:L.contractperiod)&&((B=(V=(U=(G=e==null?void 0:e.cell)==null?void 0:G.row)==null?void 0:U.original)==null?void 0:V.managementContract)==null?void 0:B.contractstartdate)&&((K=(J=(z=(q=e==null?void 0:e.cell)==null?void 0:q.row)==null?void 0:z.original)==null?void 0:J.managementContract)==null?void 0:K.contractenddate)&&((Y=(X=(W=(Q=e==null?void 0:e.cell)==null?void 0:Q.row)==null?void 0:W.original)==null?void 0:X.managementContract)==null?void 0:Y.managementfee)&&((le=(ee=(w=(Z=e==null?void 0:e.cell)==null?void 0:Z.row)==null?void 0:w.original)==null?void 0:ee.managementContract)==null?void 0:le.minimum_managementfee)?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((ne=(ie=(te=(ae=e==null?void 0:e.cell)==null?void 0:ae.row)==null?void 0:te.original)==null?void 0:ie.managementContract)==null?void 0:ne.propertyid)&&((de=(se=(ce=(me=e==null?void 0:e.cell)==null?void 0:me.row)==null?void 0:ce.original)==null?void 0:se.managementContract)==null?void 0:de.contractperiod)&&((Ne=(oe=(re=(ue=e==null?void 0:e.cell)==null?void 0:ue.row)==null?void 0:re.original)==null?void 0:oe.managementContract)==null?void 0:Ne.contractstartdate)&&((pe=(be=(fe=(ve=e==null?void 0:e.cell)==null?void 0:ve.row)==null?void 0:fe.original)==null?void 0:be.managementContract)==null?void 0:pe.contractenddate)&&((Ce=(xe=(he=(ge=e==null?void 0:e.cell)==null?void 0:ge.row)==null?void 0:he.original)==null?void 0:xe.managementContract)==null?void 0:Ce.managementfee)&&(($e=(Pe=(ke=(ye=e==null?void 0:e.cell)==null?void 0:ye.row)==null?void 0:ke.original)==null?void 0:Pe.managementContract)==null?void 0:$e.minimum_managementfee)?"Completed":"Not Completed"},void 0,!1,{fileName:a,lineNumber:53,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:52,columnNumber:21},void 0)}},{Header:"unit number",accessor:e=>`${e.property.unitnumber}`,Cell:e=>{var t,i,n,m,s,d,u;return l("span",{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((i=e==null?void 0:e.cell)==null?void 0:i.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?((s=(m=e==null?void 0:e.cell)==null?void 0:m.value)==null?void 0:s.slice(0,15))+(((u=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:u.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:70,columnNumber:24},void 0)}},{Header:"building name",accessor:e=>`${e.property.building_name}`,Cell:e=>{var t,i,n,m,s,d,u;return l("span",{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((i=e==null?void 0:e.cell)==null?void 0:i.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?((s=(m=e==null?void 0:e.cell)==null?void 0:m.value)==null?void 0:s.slice(0,15))+(((u=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:u.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:78,columnNumber:24},void 0)}},{Header:"project name",accessor:e=>`${e.property.project_name}`,Cell:e=>{var t,i,n,m,s,d,u;return l("span",{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((i=e==null?void 0:e.cell)==null?void 0:i.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?((s=(m=e==null?void 0:e.cell)==null?void 0:m.value)==null?void 0:s.slice(0,15))+(((u=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:u.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:86,columnNumber:24},void 0)}},{Header:"community name",accessor:e=>`${e.property.community_name}`,Cell:e=>{var t,i,n,m,s,d,u;return l("span",{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((i=e==null?void 0:e.cell)==null?void 0:i.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?((s=(m=e==null?void 0:e.cell)==null?void 0:m.value)==null?void 0:s.slice(0,15))+(((u=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:u.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:94,columnNumber:24},void 0)}},{Header:"contract start date",accessor:e=>`${e.managementContract.contractstartdate}`,Cell:e=>{var t,i,n,m;return l("span",{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((i=e==null?void 0:e.cell)==null?void 0:i.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?new Date((m=e==null?void 0:e.cell)==null?void 0:m.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:103,columnNumber:24},void 0)}},{Header:"contract end date",accessor:e=>`${e.managementContract.contractenddate}`,Cell:e=>{var t,i,n,m;return l("span",{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((i=e==null?void 0:e.cell)==null?void 0:i.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?new Date((m=e==null?void 0:e.cell)==null?void 0:m.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:111,columnNumber:24},void 0)}},{Header:"management fee",accessor:e=>`${e.managementContract.managementfee}`,Cell:e=>{var t,i,n,m;return l("span",{children:((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((i=e==null?void 0:e.cell)==null?void 0:i.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?parseFloat((m=e==null?void 0:e.cell)==null?void 0:m.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"},void 0,!1,{fileName:a,lineNumber:119,columnNumber:24},void 0)}},{Header:"created-on",accessor:e=>`${e.managementContract.createdAt}`,Cell:e=>{var t,i;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:127,columnNumber:24},void 0)}},{Header:"action",accessor:e=>`${e.managementContract._id}`,Cell:e=>l("div",{className:"flex space-x-3 rtl:space-x-reverse",children:l(_e,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(je,{className:"action-btn",to:`/owner-managemnt-term/${e==null?void 0:e.cell.value}`,type:"button",children:l(O,{icon:"heroicons:eye"},void 0,!1,{fileName:a,lineNumber:138,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:137,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:136,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:135,columnNumber:21},void 0)}],o=D.exports.useMemo(()=>r,[]),h=D.exports.useMemo(()=>b,[]),N=$.exports.useTable({columns:o,data:h,initialState:{pageIndex:0,pageSize:50}},$.exports.useGlobalFilter,$.exports.useSortBy,$.exports.usePagination,$.exports.useRowSelect,e=>{e.visibleColumns.push(t=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:i})=>l("div",{children:l(Se,{...i()},void 0,!1,{fileName:a,lineNumber:167,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:166,columnNumber:25},void 0),Cell:({row:i})=>l("div",{children:l(Se,{...i.getToggleRowSelectedProps()},void 0,!1,{fileName:a,lineNumber:172,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:171,columnNumber:25},void 0)},...t])}),{getTableProps:x,getTableBodyProps:E,headerGroups:C,footerGroups:I,page:v,nextPage:F,previousPage:f,canNextPage:p,canPreviousPage:y,pageOptions:H,state:A,gotoPage:_,pageCount:M,setPageSize:k,setGlobalFilter:R,prepareRow:c}=N,{globalFilter:g,pageIndex:P,pageSize:De}=A;return l(j,{children:[l("div",{className:"md:flex justify-end items-center mb-6",children:l(Ae,{filter:g,setFilter:R},void 0,!1,{fileName:a,lineNumber:208,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:207,columnNumber:13},void 0),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"overflow-hidden ",children:l("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...x,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:C.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(t=>l("th",{...t.getHeaderProps(t.getSortByToggleProps()),scope:"col",className:" table-th ",children:[t.render("Header"),l("span",{children:t.isSorted?t.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:a,lineNumber:229,columnNumber:49},void 0)]},void 0,!0,{fileName:a,lineNumber:221,columnNumber:45},void 0))},void 0,!1,{fileName:a,lineNumber:219,columnNumber:37},void 0))},void 0,!1,{fileName:a,lineNumber:217,columnNumber:29},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...E,children:v.map(e=>(c(e),l("tr",{...e.getRowProps(),children:e.cells.map(t=>l("td",{...t.getCellProps(),className:"table-td",children:t.render("Cell")},void 0,!1,{fileName:a,lineNumber:251,columnNumber:53},void 0))},void 0,!1,{fileName:a,lineNumber:248,columnNumber:41},void 0)))},void 0,!1,{fileName:a,lineNumber:241,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:213,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:212,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:211,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:210,columnNumber:13},void 0),l("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[l("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:De,onChange:e=>k(Number(e.target.value)),children:[10,25,50].map(e=>l("option",{value:e,children:["Show ",e]},e,!0,{fileName:a,lineNumber:272,columnNumber:29},void 0))},void 0,!1,{fileName:a,lineNumber:266,columnNumber:21},void 0),l("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",l("span",{children:[P+1," of ",H.length]},void 0,!0,{fileName:a,lineNumber:279,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:277,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:265,columnNumber:17},void 0),l("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>_(0),disabled:!y,children:l(O,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:a,lineNumber:292,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:286,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:285,columnNumber:21},void 0),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>f(),disabled:!y,children:"Prev"},void 0,!1,{fileName:a,lineNumber:296,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:295,columnNumber:21},void 0),H.map((e,t)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${t===P?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>_(t),children:e+1},void 0,!1,{fileName:a,lineNumber:307,columnNumber:29},void 0)},t,!1,{fileName:a,lineNumber:306,columnNumber:25},void 0)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${p?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>F(),disabled:!p,children:"Next"},void 0,!1,{fileName:a,lineNumber:321,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:320,columnNumber:21},void 0),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>_(M-1),disabled:!p,className:` ${p?"":"opacity-50 cursor-not-allowed"}`,children:l(O,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:a,lineNumber:337,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:331,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:330,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:284,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:264,columnNumber:13},void 0)]},void 0,!0)};var S="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\management-term\\OwnerManagement.jsx";const Oe=()=>{const b=localStorage.getItem("isAuth"),r=JSON.parse(b),[o,h]=D.exports.useState(),[N,x]=D.exports.useState(!1);return D.exports.useEffect(()=>{(async()=>{x(!0);try{const C=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${r==null?void 0:r._id}&sort=descending&type=customer&page=0&perPage=all`,I=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${r==null?void 0:r._id}&sort=descending&type=customer&page=0&perPage=all`,v=await fetch(C);if(!v.ok&&v.status!==400)throw new Error(`API 1 failed with status: ${v.status}`);const F=v.status===400?[]:await v.json(),f=await fetch(I);if(!f.ok&&f.status!==400)throw new Error(`API 2 failed with status: ${f.status}`);const p=f.status===400?[]:await f.json(),A=[...F,...p].map(c=>c._id).map(c=>fetch(`http://dev-rare.srp.ai/managementcontract/api/ownercontract/?propertyid=${c}`).then(g=>g.json())),M=(await Promise.all(A)).filter(c=>c.message!=="No contract found"),k=new Map;M.forEach(c=>{var g,P;k.has((g=c==null?void 0:c.managementContract)==null?void 0:g._id)||k.set((P=c==null?void 0:c.managementContract)==null?void 0:P._id,c)});const R=Array.from(k.values());h(R),x(!1)}catch(C){console.error("Error fetching data:",C),x(!1)}})()},[]),l(j,{children:l("div",{className:" space-y-5",children:l(Fe,{children:N===!1?l(j,{children:o!=null&&o.length?l(Me,{allData:o},void 0,!1,{fileName:S,lineNumber:107,columnNumber:41},void 0):l("p",{children:"No Management Term found"},void 0,!1,{fileName:S,lineNumber:107,columnNumber:84},void 0)},void 0,!1):l(He,{},void 0,!1,{fileName:S,lineNumber:110,columnNumber:31},void 0)},void 0,!1,{fileName:S,lineNumber:101,columnNumber:17},void 0)},void 0,!1,{fileName:S,lineNumber:100,columnNumber:13},void 0)},void 0,!1)};export{Oe as default};
