import{r as d,b as o,j as a,F as P,I as fe,e as Se,ap as Ae,bN as Pe}from"./index.a2f6c442.js";import{G as ke}from"./GlobalFilter.bff8a921.js";var t="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\availibilty-logs\\AvailabilitySheetTable.jsx";const He=({allCustomers:r})=>{const v=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:l})=>a("span",{children:l.indexOf(e)+1},void 0,!1,{fileName:t,lineNumber:21,columnNumber:24},void 0)},{Header:"Listed for",accessor:"propertystatus",Cell:e=>{var l,i,n,s,f;return a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((l=e==null?void 0:e.cell)==null?void 0:l.value)&&((s=(n=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:n.original)==null?void 0:s.unlisted)===!1?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:"Listed for "+((f=e==null?void 0:e.cell)==null?void 0:f.value)},void 0,!1,{fileName:t,lineNumber:30,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:29,columnNumber:21},void 0)}},{Header:"listed / unlisted",accessor:"unlisted",Cell:e=>{var i,n,s,f,F,j,L,_,R,T,$,U,O,G,M,E,z,B,I,V,q,J,K,Q,W,X,Y,Z,w,ee,le,ae,ie,te,ne,se,ce,ue,me,de,Ne,re,ve,be;let l;return(i=e==null?void 0:e.cell)!=null&&i.value?((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0&&((F=(f=(s=e==null?void 0:e.cell)==null?void 0:s.row)==null?void 0:f.original)==null?void 0:F.propertystatus)==="Rent"||((j=e==null?void 0:e.cell)==null?void 0:j.value)===!0&&((R=(_=(L=e==null?void 0:e.cell)==null?void 0:L.row)==null?void 0:_.original)==null?void 0:R.propertystatus)==="Sale"||((T=e==null?void 0:e.cell)==null?void 0:T.value)===!0&&((O=(U=($=e==null?void 0:e.cell)==null?void 0:$.row)==null?void 0:U.original)==null?void 0:O.propertystatus)==="Short Term"?l="Unlisted":((G=e==null?void 0:e.cell)==null?void 0:G.value)===!1&&(((z=(E=(M=e==null?void 0:e.cell)==null?void 0:M.row)==null?void 0:E.original)==null?void 0:z.propertystatus)==="Short Term"||((V=(I=(B=e==null?void 0:e.cell)==null?void 0:B.row)==null?void 0:I.original)==null?void 0:V.propertystatus)==="Sale"||((K=(J=(q=e==null?void 0:e.cell)==null?void 0:q.row)==null?void 0:J.original)==null?void 0:K.propertystatus)==="Rent")&&(l="listed"):((Q=e==null?void 0:e.cell)==null?void 0:Q.value)===!1&&(((Y=(X=(W=e==null?void 0:e.cell)==null?void 0:W.row)==null?void 0:X.original)==null?void 0:Y.propertystatus)==="Short Term"||((ee=(w=(Z=e==null?void 0:e.cell)==null?void 0:Z.row)==null?void 0:w.original)==null?void 0:ee.propertystatus)==="Sale"||((ie=(ae=(le=e==null?void 0:e.cell)==null?void 0:le.row)==null?void 0:ae.original)==null?void 0:ie.propertystatus)==="Rent")?l="listed":l="No",a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((te=e==null?void 0:e.cell)==null?void 0:te.value)===!1&&(((ce=(se=(ne=e==null?void 0:e.cell)==null?void 0:ne.row)==null?void 0:se.original)==null?void 0:ce.propertystatus)==="Short Term"||((de=(me=(ue=e==null?void 0:e.cell)==null?void 0:ue.row)==null?void 0:me.original)==null?void 0:de.propertystatus)==="Sale"||((ve=(re=(Ne=e==null?void 0:e.cell)==null?void 0:Ne.row)==null?void 0:re.original)==null?void 0:ve.propertystatus)==="Rent")?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} 
                      ${((be=e==null?void 0:e.cell)==null?void 0:be.value)===!0?"text-danger-500 bg-danger-500":""}
                       `,children:l},void 0,!1,{fileName:t,lineNumber:66,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:65,columnNumber:21},void 0)}},{Header:"unlist date",accessor:"unlist_date",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"},void 0,!1,{fileName:t,lineNumber:88,columnNumber:24},void 0)}},{Header:"Renewal availability",accessor:"again_available",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"},void 0,!1,{fileName:t,lineNumber:95,columnNumber:24},void 0)}},{Header:"Property Unit No",accessor:"unitnumber",Cell:e=>{var l,i,n,s;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((n=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:n.slice(0,15))+(((s=e==null?void 0:e.cell)==null?void 0:s.value.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:t,lineNumber:102,columnNumber:24},void 0)}},{Header:"Assigned Agent",accessor:"employee_email",Cell:e=>{var l,i,n,s;return a("span",{className:"lowercase",children:(l=e==null?void 0:e.cell)!=null&&l.value?((n=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:n.slice(0,15))+(((s=e==null?void 0:e.cell)==null?void 0:s.value.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:t,lineNumber:109,columnNumber:24},void 0)}},{Header:"project name",accessor:"project_name",Cell:e=>{var l,i,n,s;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((n=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:n.slice(0,15))+(((s=e==null?void 0:e.cell)==null?void 0:s.value.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:t,lineNumber:116,columnNumber:24},void 0)}},{Header:"building name",accessor:"building_name",Cell:e=>{var l,i,n,s;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((n=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:n.slice(0,15))+(((s=e==null?void 0:e.cell)==null?void 0:s.value.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:t,lineNumber:123,columnNumber:24},void 0)}},{Header:"community name",accessor:"community_name",Cell:e=>{var l,i,n,s;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((n=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:n.slice(0,15))+(((s=e==null?void 0:e.cell)==null?void 0:s.value.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:t,lineNumber:130,columnNumber:24},void 0)}},{Header:"subtype name",accessor:"subtype_name",Cell:e=>{var l,i,n,s;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((n=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:n.slice(0,15))+(((s=e==null?void 0:e.cell)==null?void 0:s.value.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:t,lineNumber:137,columnNumber:24},void 0)}},{Header:"balcony",accessor:"balcony",Cell:e=>{var l,i,n,s;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((n=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:n.slice(0,15))+(((s=e==null?void 0:e.cell)==null?void 0:s.value.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:t,lineNumber:144,columnNumber:24},void 0)}},{Header:"floor",accessor:"floor",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:151,columnNumber:24},void 0)}},{Header:"furnished",accessor:"furnished",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:158,columnNumber:24},void 0)}},{Header:"halfbath room",accessor:"halfbathroom",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:165,columnNumber:24},void 0)}},{Header:"fullbath room",accessor:"nobathroom",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:172,columnNumber:24},void 0)}},{Header:"plot size",accessor:"plotsize",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:179,columnNumber:24},void 0)}},{Header:"kitchen",accessor:"kitchen",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:186,columnNumber:24},void 0)}},{Header:"property type",accessor:"propertytype",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:193,columnNumber:24},void 0)}},{Header:"Rent / Sold amount",accessor:"propertyvaluation",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?parseFloat((i=e==null?void 0:e.cell)==null?void 0:i.value).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"},void 0,!1,{fileName:t,lineNumber:200,columnNumber:24},void 0)}},{Header:"listing source",accessor:"listingsource",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:210,columnNumber:24},void 0)}},{Header:"listing type",accessor:"listingtype",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:217,columnNumber:24},void 0)}},{Header:"maintenance done",accessor:"maintenance",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:224,columnNumber:24},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var l,i;return a("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"},void 0,!1,{fileName:t,lineNumber:231,columnNumber:24},void 0)}}],b=d.exports.useMemo(()=>v,[]),y=d.exports.useMemo(()=>r),N=o.exports.useTable({columns:b,data:y,initialState:{pageIndex:0,pageSize:50}},o.exports.useGlobalFilter,o.exports.useSortBy,o.exports.usePagination,o.exports.useRowSelect,e=>{e.visibleColumns.push(l=>[...l])}),{getTableProps:C,getTableBodyProps:p,headerGroups:S,footerGroups:k,page:h,nextPage:u,previousPage:g,canNextPage:c,canPreviousPage:x,pageOptions:H,state:oe,gotoPage:A,pageCount:pe,setPageSize:he,setGlobalFilter:ge,prepareRow:xe}=N,{globalFilter:ye,pageIndex:D,pageSize:Ce}=oe;return a(P,{children:[a("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px]",children:a(ke,{filter:ye,setFilter:ge},void 0,!1,{fileName:t,lineNumber:312,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:311,columnNumber:13},void 0),a("div",{className:"overflow-x-auto -mx-6",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:" ",children:a("table",{className:"min-w-[150%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...C,children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:S.map(e=>a("tr",{...e.getHeaderGroupProps(),children:e.headers.map(l=>a("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:" table-th ",children:[l.render("Header"),a("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:t,lineNumber:333,columnNumber:49},void 0)]},void 0,!0,{fileName:t,lineNumber:325,columnNumber:45},void 0))},void 0,!1,{fileName:t,lineNumber:323,columnNumber:37},void 0))},void 0,!1,{fileName:t,lineNumber:321,columnNumber:29},void 0),a("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...p,children:h.map(e=>(xe(e),a("tr",{...e.getRowProps(),children:e.cells.map(l=>a("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")},void 0,!1,{fileName:t,lineNumber:355,columnNumber:53},void 0))},void 0,!1,{fileName:t,lineNumber:352,columnNumber:41},void 0)))},void 0,!1,{fileName:t,lineNumber:345,columnNumber:29},void 0)]},void 0,!0,{fileName:t,lineNumber:317,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:316,columnNumber:21},void 0)},void 0,!1,{fileName:t,lineNumber:315,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:314,columnNumber:13},void 0),a("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[a("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[a("select",{className:"form-control py-2 w-max",value:Ce,onChange:e=>he(Number(e.target.value)),children:[10,25,50].map(e=>a("option",{value:e,children:["Show ",e]},e,!0,{fileName:t,lineNumber:376,columnNumber:29},void 0))},void 0,!1,{fileName:t,lineNumber:370,columnNumber:21},void 0),a("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",a("span",{children:[D+1," of ",H.length]},void 0,!0,{fileName:t,lineNumber:383,columnNumber:25},void 0)]},void 0,!0,{fileName:t,lineNumber:381,columnNumber:21},void 0)]},void 0,!0,{fileName:t,lineNumber:369,columnNumber:17},void 0),a("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[a("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${x?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>A(0),disabled:!x,children:a(fe,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:t,lineNumber:396,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:390,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:389,columnNumber:21},void 0),a("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${x?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>g(),disabled:!x,children:"Prev"},void 0,!1,{fileName:t,lineNumber:400,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:399,columnNumber:21},void 0),H.map((e,l)=>a("li",{children:a("button",{href:"#","aria-current":"page",className:` ${l===D?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>A(l),children:e+1},void 0,!1,{fileName:t,lineNumber:411,columnNumber:29},void 0)},l,!1,{fileName:t,lineNumber:410,columnNumber:25},void 0)),a("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${c?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>u(),disabled:!c,children:"Next"},void 0,!1,{fileName:t,lineNumber:425,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:424,columnNumber:21},void 0),a("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{onClick:()=>A(pe-1),disabled:!c,className:` ${c?"":"opacity-50 cursor-not-allowed"}`,children:a(fe,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:t,lineNumber:441,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:435,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:434,columnNumber:21},void 0)]},void 0,!0,{fileName:t,lineNumber:388,columnNumber:17},void 0)]},void 0,!0,{fileName:t,lineNumber:368,columnNumber:13},void 0)]},void 0,!0)};var m="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\availibilty-logs\\MainLogsPage.jsx";const De={option:(r,v)=>({...r,fontSize:"14px"})},Le=()=>{const[r,v]=d.exports.useState(!1),[b,y]=d.exports.useState(""),[N,C]=d.exports.useState(""),[p,S]=d.exports.useState([]),[k,h]=d.exports.useState(!1);return d.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(u=>u.json()).then(u=>{const g=u==null?void 0:u.map(c=>({label:c.unitnumber+" | "+(c==null?void 0:c.communityname)+" | "+(c==null?void 0:c.projectname)+" | "+(c==null?void 0:c.buildingname),value:c._id}));S(g)})},[]),d.exports.useEffect(()=>{N&&(v(!0),(async()=>{const c=await(await fetch(`http://dev-rare.srp.ai/rentpurchase/api/search?porpertyid=${N}`)).json();c!=null&&c.length?h(!0):h(!1),y(c),v(!1)})())},[N]),a(P,{children:a("div",{className:" space-y-5",children:a(Se,{children:[a("div",{className:"flex justify-between items-center mb-6",children:[a("h4",{className:"card-title",children:"Availability Logs"},void 0,!1,{fileName:m,lineNumber:56,columnNumber:25},void 0),a("div",{className:"w-[600px]",children:a(Ae,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:p,value:p.filter(function(u){return u.value===N}),onChange:u=>{C(u==null?void 0:u.value)},styles:De,id:"hh",placeholder:"Select Property"},void 0,!1,{fileName:m,lineNumber:58,columnNumber:29},void 0)},void 0,!1,{fileName:m,lineNumber:57,columnNumber:25},void 0)]},void 0,!0,{fileName:m,lineNumber:55,columnNumber:21},void 0),r===!1?a(P,{children:N!==""?b&&b.length&&k===!0?a(He,{allCustomers:b},void 0,!1,{fileName:m,lineNumber:81,columnNumber:45},void 0):a("p",{children:"No Data Found"},void 0,!1,{fileName:m,lineNumber:82,columnNumber:45},void 0):a("p",{children:"Please First Select Property"},void 0,!1,{fileName:m,lineNumber:84,columnNumber:41},void 0)},void 0,!1):a(Pe,{},void 0,!1,{fileName:m,lineNumber:86,columnNumber:35},void 0)]},void 0,!0,{fileName:m,lineNumber:54,columnNumber:17},void 0)},void 0,!1,{fileName:m,lineNumber:53,columnNumber:13},void 0)},void 0,!1)};export{Le as default};
