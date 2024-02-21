import{R as U,j as l,F as k,r as n,b as h,C as fe,ap as D,I as G}from"./index.cdbc3f69.js";import{G as ve}from"./GlobalFilter.f3395a3a.js";import{D as be}from"./index.esm.dc2445d3.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\AdminReport.jsx";U.forwardRef(({indeterminate:r,...u},b)=>{const F=U.useRef(),d=b||F;return U.useEffect(()=>{d.current.indeterminate=r},[d,r]),l(k,{children:l("input",{type:"checkbox",ref:d,...u,className:"table-checkbox"},void 0,!1,{fileName:a,lineNumber:28,columnNumber:17},void 0)},void 0,!1)});const C={option:(r,u)=>({...r,fontSize:"14px"})},Se=()=>{const[r,u]=n.exports.useState([]),[b,F]=n.exports.useState(),[d,O]=n.exports.useState(),[v,M]=n.exports.useState({startDate:"",endDate:""}),I=e=>{M(e)},[P,W]=n.exports.useState([]);n.exports.useEffect(()=>{const e=async()=>{let i=[];for(let t of r)if(t!=null&&t.ownerid)try{const c=await(await fetch(`http://dev-rare.srp.ai/users/${t.ownerid}`)).json();i.push(c)}catch(s){console.error(s)}W(i)};r!=null&&r.length&&e()},[r]);const[x,B]=n.exports.useState([]),[J,T]=n.exports.useState(!1);n.exports.useEffect(()=>{if(T(!0),P.length){const e=[...new Map(P.map(t=>[t._id,t])).values()],i=e==null?void 0:e.map(t=>({label:t.firstname+" "+t.lastname+" | "+t.email,value:t._id}));T(!1),B(i)}},[P.length]);const[o,j]=n.exports.useState(),[A,K]=n.exports.useState([]);n.exports.useEffect(()=>{const e=async()=>{let i=[];for(let t of r)if(t!=null&&t.propertyid)try{const c=await(await fetch(`http://dev-rare.srp.ai/property/${t.propertyid}`)).json();i.push(c)}catch(s){console.error(s)}K(i)};r!=null&&r.length&&e()},[r]);const[g,Q]=n.exports.useState([]),[X,z]=n.exports.useState(!1);n.exports.useEffect(()=>{if(z(!0),A.length){const e=[...new Map(A.map(t=>[t._id,t])).values()],i=[];e.forEach(t=>{t._id!==void 0&&i.push({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname,value:t._id})}),z(!1),Q(i)}},[A.length]);const[m,$]=n.exports.useState();n.exports.useEffect(()=>{(async()=>{const t=await(await fetch("http://dev-rare.srp.ai/booking")).json();return u(t)})()},[]);const[_,R]=n.exports.useState(!1),Y=async()=>{if(v.startDate&&v.endDate){const i=await(await fetch(`http://dev-rare.srp.ai/booking/api/reservationdate?${o!=null&&o.ownerid?"ownerid="+(o==null?void 0:o.ownerid)+"&":""}${m!=null&&m.propertyid?"propertyid="+(m==null?void 0:m.propertyid)+"&":""}fromDate=${v.startDate}&toDate=${v.endDate}`)).json();R(!0),i!=null&&i.booking?u(i==null?void 0:i.booking):u([])}else{const i=await(await fetch(`http://dev-rare.srp.ai/booking/pagination/pages?${o!=null&&o.ownerid?"ownerid="+(o==null?void 0:o.ownerid)+"&":""}${m!=null&&m.propertyid?"propertyid="+(m==null?void 0:m.propertyid)+"&":""}page=0&perPage=all`)).json();R(!0),i!=null&&i.booking?u(i==null?void 0:i.booking):u([])}},Z=async e=>{if(_===!0){const t=await(await fetch("http://dev-rare.srp.ai/booking")).json();return R(!1),M([]),j(),$(),u(t)}};n.exports.useEffect(()=>{var i;let e=0;for(let t=0;t<(r==null?void 0:r.length);t++){let s=parseFloat((i=r[t])==null?void 0:i.nonight);e+=s}F(e)},[r==null?void 0:r.length]),n.exports.useEffect(()=>{var i;let e=0;for(let t=0;t<(r==null?void 0:r.length);t++){let s=parseFloat((i=r[t])==null?void 0:i.roomrentamount);e+=s}O(e)},[r==null?void 0:r.length]);const w=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:i})=>l("span",{children:i.indexOf(e)+1},void 0,!1,{fileName:a,lineNumber:228,columnNumber:24},void 0)},{Header:"guest name",accessor:"guestname",Cell:e=>{var i,t,s,c,N;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?((s=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:s.slice(0,15))+(((N=(c=e==null?void 0:e.cell)==null?void 0:c.value)==null?void 0:N.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:235,columnNumber:24},void 0)}},{Header:"Owner Name",accessor:"ownerid",Cell:e=>{var s;const[i,t]=n.exports.useState("");return n.exports.useEffect(()=>{(async()=>{var N,p;if((N=e==null?void 0:e.cell)!=null&&N.value){const f=await(await fetch(`http://dev-rare.srp.ai/users/${(p=e==null?void 0:e.cell)==null?void 0:p.value}`)).json();f&&(console.log(f,"res"),t((f==null?void 0:f.firstname)+" "+(f==null?void 0:f.lastname)))}else t("Not Available")})()},[]),l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(s=e==null?void 0:e.cell)!=null&&s.value?(i==null?void 0:i.slice(0,15))+((i==null?void 0:i.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:263,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:262,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:261,columnNumber:21},void 0)}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:275,columnNumber:24},void 0)}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var i,t,s,c;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(i=e==null?void 0:e.cell)!=null&&i.value?((t=e==null?void 0:e.cell)==null?void 0:t.value.slice(0,15))+(((c=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:285,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:284,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:283,columnNumber:21},void 0)}},{Header:"checkin date",accessor:"checkindate",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:297,columnNumber:24},void 0)}},{Header:"checkout date",accessor:"checkoutdate",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:305,columnNumber:24},void 0)}},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?parseFloat((t=e==null?void 0:e.cell)==null?void 0:t.value).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"},void 0,!1,{fileName:a,lineNumber:313,columnNumber:24},void 0)}},{Header:"Rate per Day",accessor:"tourismfee",Cell:e=>{var i,t,s,c,N,p;return l("span",{children:Math.abs(((s=(t=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:t.original)==null?void 0:s.roomrentamount)/((p=(N=(c=e==null?void 0:e.cell)==null?void 0:c.row)==null?void 0:N.original)==null?void 0:p.nonight)).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})},void 0,!1,{fileName:a,lineNumber:324,columnNumber:24},void 0)}},{Header:"Booking Amount",accessor:"roomrentamount",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?parseFloat((t=e==null?void 0:e.cell)==null?void 0:t.value).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"},void 0,!1,{fileName:a,lineNumber:336,columnNumber:24},void 0)}}],ee=n.exports.useMemo(()=>w,[]),le=n.exports.useMemo(()=>r),ae=h.exports.useTable({columns:ee,data:le,initialState:{pageIndex:0,pageSize:50}},h.exports.useGlobalFilter,h.exports.useSortBy,h.exports.usePagination,h.exports.useRowSelect),{getTableProps:ie,getTableBodyProps:te,headerGroups:H,footerGroups:pe,page:E,nextPage:re,previousPage:ne,canNextPage:y,canPreviousPage:S,pageOptions:q,state:se,gotoPage:L,pageCount:oe,setPageSize:me,setGlobalFilter:ce,prepareRow:ue}=ae,{globalFilter:de,pageIndex:V,pageSize:Ne}=se;return l(k,{children:l(fe,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"Reports of Booking"},void 0,!1,{fileName:a,lineNumber:387,columnNumber:21},void 0),l("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse",children:l(ve,{filter:de,setFilter:ce},void 0,!1,{fileName:a,lineNumber:389,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:388,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:386,columnNumber:17},void 0),l("div",{className:"mb-6",children:l("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse",children:[l("div",{className:"w-[400px] relative",children:X===!0?l(k,{children:[l("div",{className:"absolute w-[100%] z-10 h-[100%] opacity-[0.8]",style:{background:"#e2e8f0"},children:l("div",{className:"flex items-center justify-center h-[100%]",children:l("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[l("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"},void 0,!1,{fileName:a,lineNumber:406,columnNumber:53},void 0),l("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},void 0,!1,{fileName:a,lineNumber:414,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:400,columnNumber:49},void 0)},void 0,!1,{fileName:a,lineNumber:399,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:398,columnNumber:41},void 0),l(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:g,value:g.filter(function(e){return e.value===(m==null?void 0:m.propertyid)}),placeholder:"Select Property",onChange:e=>{$({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:C,id:"hh"},void 0,!1,{fileName:a,lineNumber:422,columnNumber:41},void 0)]},void 0,!0):l(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:g,value:g.filter(function(e){return e.value===(m==null?void 0:m.propertyid)}),placeholder:"Select Property",onChange:e=>{$({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:C,id:"hh"},void 0,!1,{fileName:a,lineNumber:438,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:394,columnNumber:25},void 0),l("div",{className:"w-[300px] relative",children:J===!0?l(k,{children:[l("div",{className:"absolute w-[100%] z-10 h-[100%] opacity-[0.8]",style:{background:"#e2e8f0"},children:l("div",{className:"flex items-center justify-center h-[100%]",children:l("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[l("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"},void 0,!1,{fileName:a,lineNumber:467,columnNumber:53},void 0),l("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},void 0,!1,{fileName:a,lineNumber:475,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:461,columnNumber:49},void 0)},void 0,!1,{fileName:a,lineNumber:460,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:459,columnNumber:41},void 0),l(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:x,value:x.filter(function(e){return e.value===(o==null?void 0:o.ownerid)}),placeholder:"Select owner",onChange:e=>{j({ownerid:e==null?void 0:e.value,ownername:e==null?void 0:e.label},"select box")},styles:C,id:"hh"},void 0,!1,{fileName:a,lineNumber:483,columnNumber:41},void 0)]},void 0,!0):l(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:x,value:x.filter(function(e){return e.value===(o==null?void 0:o.ownerid)}),placeholder:"Select owner",onChange:e=>{j({ownerid:e==null?void 0:e.value,ownername:e==null?void 0:e.label},"select box")},styles:C,id:"hh"},void 0,!1,{fileName:a,lineNumber:499,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:455,columnNumber:25},void 0),l("div",{className:"w-[150px]",children:l("div",{className:"date-range-custom relative",children:l(be,{value:v,inputClassName:"input-class",containerClassName:"container-class",onChange:I},void 0,!1,{fileName:a,lineNumber:518,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:517,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:516,columnNumber:25},void 0),v.startDate&&v.endDate||o||m?l("button",{className:"btn-dark py-[10px] px-[20px] rounded-[5px]",onClick:Y,children:"Filter"},void 0,!1,{fileName:a,lineNumber:528,columnNumber:33},void 0):null,_===!0?l("button",{className:"btn-secondary py-[10px] px-[20px] rounded-[5px]",onClick:Z,children:"Reset"},void 0,!1,{fileName:a,lineNumber:532,columnNumber:33},void 0):null]},void 0,!0,{fileName:a,lineNumber:393,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:392,columnNumber:17},void 0),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"overflow-hidden ",children:l("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ie,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:H==null?void 0:H.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(i=>l("th",{...i.getHeaderProps(i.getSortByToggleProps()),scope:"col",className:" table-th ",children:[i.render("Header"),l("span",{children:i.isSorted?i.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:a,lineNumber:555,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:547,columnNumber:49},void 0))},void 0,!1,{fileName:a,lineNumber:545,columnNumber:41},void 0))},void 0,!1,{fileName:a,lineNumber:543,columnNumber:33},void 0),r!=null&&r.length?l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...te,children:[E==null?void 0:E.map(e=>(ue(e),l("tr",{...e.getRowProps(),children:e.cells.map(i=>l("td",{...i.getCellProps(),className:"table-td",children:i.render("Cell")},void 0,!1,{fileName:a,lineNumber:579,columnNumber:65},void 0))},void 0,!1,{fileName:a,lineNumber:576,columnNumber:53},void 0))),l("tr",{children:[l("td",{className:"table-td font-bold",children:"TOTAL"},void 0,!1,{fileName:a,lineNumber:588,columnNumber:49},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:589,columnNumber:49},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:590,columnNumber:49},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:591,columnNumber:49},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:592,columnNumber:49},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:593,columnNumber:49},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:594,columnNumber:49},void 0),l("td",{className:"table-td font-bold",children:[b?b.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):0," Nights"]},void 0,!0,{fileName:a,lineNumber:595,columnNumber:49},void 0),l("td",{className:"table-td font-bold",children:d&&b?Math.abs(d/b).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):0},void 0,!1,{fileName:a,lineNumber:599,columnNumber:49},void 0),l("td",{className:"table-td font-bold",children:d?d.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):0},void 0,!1,{fileName:a,lineNumber:603,columnNumber:49},void 0)]},void 0,!0,{fileName:a,lineNumber:587,columnNumber:45},void 0)]},void 0,!0,{fileName:a,lineNumber:569,columnNumber:41},void 0):"Not Available"]},void 0,!0,{fileName:a,lineNumber:539,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:538,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:537,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:536,columnNumber:17},void 0),l("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[l("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:Ne,onChange:e=>me(Number(e.target.value)),children:[50,100,200].map(e=>l("option",{value:e||50,children:["Show ",e]},e,!0,{fileName:a,lineNumber:622,columnNumber:33},void 0))},void 0,!1,{fileName:a,lineNumber:616,columnNumber:25},void 0),l("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",l("span",{children:[V+1," of ",q.length]},void 0,!0,{fileName:a,lineNumber:629,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:627,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:615,columnNumber:21},void 0),l("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>L(0),disabled:!S,children:l(G,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:a,lineNumber:642,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:636,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:635,columnNumber:25},void 0),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ne(),disabled:!S,children:"Prev"},void 0,!1,{fileName:a,lineNumber:646,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:645,columnNumber:25},void 0),q.map((e,i)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${i===V?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>L(i),children:e+1},void 0,!1,{fileName:a,lineNumber:657,columnNumber:33},void 0)},i,!1,{fileName:a,lineNumber:656,columnNumber:29},void 0)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>re(),disabled:!y,children:"Next"},void 0,!1,{fileName:a,lineNumber:671,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:670,columnNumber:25},void 0),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>L(oe-1),disabled:!y,className:` ${y?"":"opacity-50 cursor-not-allowed"}`,children:l(G,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:a,lineNumber:687,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:681,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:680,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:634,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:614,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:385,columnNumber:13},void 0)},void 0,!1)};export{Se as default};
