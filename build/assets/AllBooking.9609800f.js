import{R as _,j as l,F as X,r as u,b as E,e as W,G as ce,I as H,ap as U,ca as ue,cb as de,B as Ne,bN as be}from"./index.9f4d419b.js";import{G as fe}from"./GlobalFilter.81e1842d.js";import"./index.esm.f1539909.js";import{L as ve}from"./Rare logo New Gif Loading.02c4dc82.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\booking\\BookingTable.jsx";const Z=_.forwardRef(({indeterminate:b,...h},L)=>{const o=_.useRef(),f=L||o;return _.useEffect(()=>{f.current.indeterminate=b},[f,b]),l(X,{children:l("input",{type:"checkbox",ref:f,...h,className:"table-checkbox"},void 0,!1,{fileName:i,lineNumber:34,columnNumber:17},void 0)},void 0,!1)}),G={option:(b,h)=>({...b,fontSize:"14px"})},pe=({title:b,linktitle:h,pagelink:L,allData:o,forFilterData:f,handleFilterSearch:$,handleClearFilter:g})=>{const[n,v]=u.exports.useState(""),[r,R]=u.exports.useState(!1),B=e=>{const{name:a,value:t}=e.target;v({...n,[a]:t})},T=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>l("span",{children:a.indexOf(e)+1},void 0,!1,{fileName:i,lineNumber:66,columnNumber:24},void 0)},{Header:"Booking Status",accessor:"cancelled",Cell:e=>{var a,t,s;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=e==null?void 0:e.cell)==null?void 0:a.value)===!1?"text-success-500 bg-success-500":""} 
            ${((t=e==null?void 0:e.cell)==null?void 0:t.value)===!0?"text-danger-500 bg-danger-500":""}
            
             `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)===!0?"Cancelled":"Approved"},void 0,!1,{fileName:i,lineNumber:75,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:74,columnNumber:21},void 0)}},{Header:"booking number",accessor:"bookingnumber",Cell:e=>{var a,t,s;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((t=e==null?void 0:e.cell)==null?void 0:t.value.slice(0,15))+(((s=e==null?void 0:e.cell)==null?void 0:s.value.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:i,lineNumber:98,columnNumber:24},void 0)}},{Header:"confirmation code",accessor:"confirmationcode",Cell:e=>{var a,t,s,m;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(a=e==null?void 0:e.cell)!=null&&a.value?((t=e==null?void 0:e.cell)==null?void 0:t.value.slice(0,15))+(((m=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:m.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:i,lineNumber:108,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:107,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:106,columnNumber:21},void 0)}},{Header:"guest name",accessor:"guestname",Cell:e=>{var a,t,s,m,p;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((s=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:s.slice(0,15))+(((p=(m=e==null?void 0:e.cell)==null?void 0:m.value)==null?void 0:p.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:i,lineNumber:120,columnNumber:24},void 0)}},{Header:"unit number",accessor:"unitnumber",Cell:e=>{var a,t,s,m,p;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((s=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:s.slice(0,15))+(((p=(m=e==null?void 0:e.cell)==null?void 0:m.value)==null?void 0:p.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:i,lineNumber:127,columnNumber:24},void 0)}},{Header:"booking agent",accessor:"bookingagent",Cell:e=>{var a,t,s,m,p;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((s=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:s.slice(0,15))+(((p=(m=e==null?void 0:e.cell)==null?void 0:m.value)==null?void 0:p.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:i,lineNumber:134,columnNumber:24},void 0)}},{Header:"Check in Date",accessor:"checkindate",Cell:e=>{var a,t;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value.split("T")[0]:"Not Available"},void 0,!1,{fileName:i,lineNumber:141,columnNumber:24},void 0)},sortType:(e,a,t,s)=>ue(e,a,t,s)},{Header:"Check out Date",accessor:"checkoutdate",Cell:e=>{var a,t;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value.split("T")[0]:"Not Available"},void 0,!1,{fileName:i,lineNumber:149,columnNumber:24},void 0)},sortType:(e,a,t,s)=>de(e,a,t,s)},{Header:"Room Rent Amount: (host Payable)",accessor:"roomrenthostpayable",Cell:e=>{var a,t;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?parseFloat((t=e==null?void 0:e.cell)==null?void 0:t.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"},void 0,!1,{fileName:i,lineNumber:157,columnNumber:24},void 0)}},{Header:"Host Management Fee",accessor:"hostmanagementfee",Cell:e=>{var a,t;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((t=e==null?void 0:e.cell)==null?void 0:t.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" AED":"0.00"},void 0,!1,{fileName:i,lineNumber:164,columnNumber:24},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var a,t;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:171,columnNumber:24},void 0)}}],N=u.exports.useMemo(()=>T,[]),x=u.exports.useMemo(()=>o),k=E.exports.useTable({columns:N,data:x,initialState:{pageIndex:0,pageSize:50}},E.exports.useGlobalFilter,E.exports.useSortBy,E.exports.usePagination,E.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>l("div",{children:l(Z,{...t()},void 0,!1,{fileName:i,lineNumber:212,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:211,columnNumber:25},void 0),Cell:({row:t})=>l("div",{children:l(Z,{...t.getToggleRowSelectedProps()},void 0,!1,{fileName:i,lineNumber:217,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:216,columnNumber:25},void 0)},...a])}),{getTableProps:d,getTableBodyProps:I,headerGroups:C,footerGroups:M,page:q,nextPage:z,previousPage:O,canNextPage:P,canPreviousPage:y,pageOptions:S,state:A,gotoPage:c,pageCount:F,setPageSize:D,setGlobalFilter:w,prepareRow:ee}=k,{globalFilter:le,pageIndex:Y,pageSize:ie}=A,[V,ae]=u.exports.useState(0);u.exports.useEffect(()=>{var e,a;if(o!=null&&o.length){let t=0;for(let s=0;s<(o==null?void 0:o.length);s++){let m=parseFloat((e=o[s])==null?void 0:e.roomrentamount);!isNaN(m)&&((a=o[s])==null?void 0:a.cancelled)===!1&&(t+=m)}ae(t||0)}},[o==null?void 0:o.length]);const[te,ne]=u.exports.useState(0);u.exports.useEffect(()=>{if(o!=null&&o.length){let e=o==null?void 0:o.filter(a=>a.cancelled===!1).length;ne(e)}},[o]);const oe=[{name:{series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},title:"Total No of Check-In",count:te,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:{series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},title:"Total Collection",count:V?V.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":0,bg:"bg-[#FFEDE5] dark:bg-slate-900	"}],se=f.filter(e=>e.unitnumber!==void 0),J=[...new Set(se.map(e=>e.unitnumber))].sort((e,a)=>e.localeCompare(a,void 0,{sensitivity:"base"})).map(e=>({label:e,value:e})),re=f.filter(e=>e.email!==void 0),K=[...[...new Set(re.map(e=>e.email))].map(e=>{const a=f.find(t=>t.email===e);return a?{label:a.guestname+" | "+a.email,value:a.email}:null}).filter(Boolean)].sort((e,a)=>e.label.localeCompare(a.label)),Q=[...[{value:"Airbnb",label:"Airbnb"},{value:"Booking.com",label:"Booking.com"},{value:"vrbo",label:"vrbo"},{value:"Direct Booking",label:"Direct Booking"},{value:"Not in the List",label:"Not in the List"}]].sort((e,a)=>e.label.localeCompare(a.label)),me=()=>{g(),v("")};return l(X,{children:l(W,{children:[l("div",{className:"grid grid-cols-12 gap-5 mb-5",children:l("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:l(W,{bodyClass:"p-4",children:l("div",{className:"grid md:grid-cols-2 col-span-1 gap-4",children:l(ce,{statistics:oe},void 0,!1,{fileName:i,lineNumber:497,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:496,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:495,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:494,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:493,columnNumber:17},void 0),l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:b},void 0,!1,{fileName:i,lineNumber:503,columnNumber:21},void 0),l("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px]",children:[l("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer md:mb-0 mb-4",onClick:()=>R(!r),children:[r===!0?l(H,{icon:"heroicons:minus-small",className:"w-[20px] h-[20px]"},void 0,!1,{fileName:i,lineNumber:510,columnNumber:37},void 0):l(H,{icon:"heroicons:plus-small",className:"w-[20px] h-[20px]"},void 0,!1,{fileName:i,lineNumber:511,columnNumber:37},void 0),l("p",{className:"text-[16px] leading regular color-black",children:"Advance filter"},void 0,!1,{fileName:i,lineNumber:513,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:506,columnNumber:25},void 0),l(fe,{filter:le,setFilter:w},void 0,!1,{fileName:i,lineNumber:515,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:505,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:502,columnNumber:17},void 0),l("div",{className:`xl:grid-cols-3 grid gap-5 grid-cols-1 ${r===!0?"filter-show mt-6 pointer-events-auto":"filter-remove -mt-4 pointer-events-none"}`,children:[l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Unit No."},void 0,!1,{fileName:i,lineNumber:520,columnNumber:25},void 0),l(U,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:J,value:J.filter(function(e){if((n==null?void 0:n.unitnumber)!=="")return e.value===(n==null?void 0:n.unitnumber)}),onChange:e=>{B({target:{name:"unitnumber",value:e.value}})},styles:G,id:"hh",placeholder:"Select..."},void 0,!1,{fileName:i,lineNumber:523,columnNumber:25},void 0),n!=null&&n.unitnumber?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>v({...n,unitnumber:""}),children:"Clear filter"},void 0,!1,{fileName:i,lineNumber:542,columnNumber:33},void 0):null]},void 0,!0,{fileName:i,lineNumber:519,columnNumber:21},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Guest Name / Email"},void 0,!1,{fileName:i,lineNumber:548,columnNumber:25},void 0),l(U,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:K,value:K.filter(function(e){if((n==null?void 0:n.email)!=="")return e.value===(n==null?void 0:n.email)}),onChange:e=>{B({target:{name:"email",value:e.value}})},styles:G,id:"hh",placeholder:"Select..."},void 0,!1,{fileName:i,lineNumber:551,columnNumber:25},void 0),n!=null&&n.email?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>v({...n,email:""}),children:"Clear filter"},void 0,!1,{fileName:i,lineNumber:570,columnNumber:33},void 0):null]},void 0,!0,{fileName:i,lineNumber:547,columnNumber:21},void 0),l("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Booking Agent"},void 0,!1,{fileName:i,lineNumber:576,columnNumber:25},void 0),l(U,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Q,value:Q.filter(function(e){if((n==null?void 0:n.bookingagent)!=="")return e.value===(n==null?void 0:n.bookingagent)}),onChange:e=>{B({target:{name:"bookingagent",value:e.value}})},styles:G,id:"hh",placeholder:"Select..."},void 0,!1,{fileName:i,lineNumber:579,columnNumber:25},void 0),n!=null&&n.bookingagent?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>v({...n,bookingagent:""}),children:"Clear filter"},void 0,!1,{fileName:i,lineNumber:598,columnNumber:33},void 0):null]},void 0,!0,{fileName:i,lineNumber:575,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:518,columnNumber:17},void 0),l("div",{className:`flex ${r===!0?"filter-show mt-6 pointer-events-auto":"filter-remove mt-0 pointer-events-none"} justify-end gap-x-[10px]`,children:[l("button",{className:"btn btn-secondary  text-center",type:"button",onClick:()=>me(),children:"Clear filter"},void 0,!1,{fileName:i,lineNumber:605,columnNumber:21},void 0),l("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>$(n),children:"Search"},void 0,!1,{fileName:i,lineNumber:606,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:604,columnNumber:17},void 0),l("div",{className:"overflow-x-auto -mx-6 mt-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"overflow-hidden ",children:l("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...d,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:C.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>l("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),l("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:i,lineNumber:629,columnNumber:53},void 0)]},void 0,!0,{fileName:i,lineNumber:621,columnNumber:49},void 0))},void 0,!1,{fileName:i,lineNumber:619,columnNumber:41},void 0))},void 0,!1,{fileName:i,lineNumber:617,columnNumber:33},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...I,children:q.map(e=>(ee(e),l("tr",{...e.getRowProps(),children:e.cells.map(a=>l("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:i,lineNumber:651,columnNumber:57},void 0))},void 0,!1,{fileName:i,lineNumber:648,columnNumber:45},void 0)))},void 0,!1,{fileName:i,lineNumber:641,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:613,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:612,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:611,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:610,columnNumber:17},void 0),l("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[l("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:ie,onChange:e=>D(Number(e.target.value)),children:[50,100,200].map(e=>l("option",{value:e,children:["Show ",e]},e,!0,{fileName:i,lineNumber:686,columnNumber:33},void 0))},void 0,!1,{fileName:i,lineNumber:680,columnNumber:25},void 0),l("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",l("span",{children:[Y+1," of ",S.length]},void 0,!0,{fileName:i,lineNumber:693,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:691,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:679,columnNumber:21},void 0),l("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>c(0),disabled:!y,children:l(H,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:i,lineNumber:706,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:700,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:699,columnNumber:25},void 0),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>O(),disabled:!y,children:"Prev"},void 0,!1,{fileName:i,lineNumber:710,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:709,columnNumber:25},void 0),S.map((e,a)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${a===Y?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>c(a),children:e+1},void 0,!1,{fileName:i,lineNumber:721,columnNumber:33},void 0)},a,!1,{fileName:i,lineNumber:720,columnNumber:29},void 0)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${P?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>z(),disabled:!P,children:"Next"},void 0,!1,{fileName:i,lineNumber:735,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:734,columnNumber:25},void 0),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>c(F-1),disabled:!P,className:` ${P?"":"opacity-50 cursor-not-allowed"}`,children:l(H,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:i,lineNumber:751,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:745,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:744,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:698,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:678,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:492,columnNumber:13},void 0)},void 0,!1)};var j="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\booking\\AllBooking.jsx";const Fe=()=>{const[b,h]=u.exports.useState(!1),[L,o]=u.exports.useState([]),[f,$]=u.exports.useState(""),[g,n]=u.exports.useState(""),v=localStorage.getItem("isAuth"),r=JSON.parse(v);console.log("===========>",v);const R=Ne();u.exports.useEffect(()=>{h(!0),r!=null&&r.type?(async()=>{try{const x=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${r==null?void 0:r._id}&sort=descending&type=customer&page=0&perPage=all`,k=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${r==null?void 0:r._id}&sort=descending&type=customer&page=0&perPage=all`,d=await fetch(x);if(!d.ok&&d.status!==400)throw new Error(`API 1 failed with status: ${d.status}`);const I=d.status===400?[]:await d.json(),C=await fetch(k);if(!C.ok&&C.status!==400)throw new Error(`API 2 failed with status: ${C.status}`);const M=C.status===400?[]:await C.json(),O=[...I,...M].map(c=>c._id).map(c=>fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${c}&ownerid=${r==null?void 0:r._id}&page=0&perPage=10`).then(F=>F.json())),y=(await Promise.all(O)).reduce((c,F)=>c.concat(F),[]),S=new Map;y.forEach(c=>{S.has(c._id)||S.set(c._id,c)});const A=Array.from(S.values());o(A),$(A),n(A)}catch(x){console.error("Error fetching data:",x),h(!1)}})():setTimeout(()=>{R("/access-denied")},1e3),h(!1)},[r==null?void 0:r.type,b]);function B(N){if(N){const x=g.filter(k=>{let d=!0;return N.unitnumber&&k.unitnumber!==N.unitnumber&&(d=!1),N.email&&k.email!==N.email&&(d=!1),N.bookingagent&&k.bookingagent!==N.bookingagent&&(d=!1),d});o(x)}else o(g)}const T=async()=>{o(g)};return l(X,{children:l("div",{className:" space-y-5",children:[b&&!g.length?l(be,{},void 0,!1,{fileName:j,lineNumber:180,columnNumber:59},void 0):null,g.length>0?l(pe,{pagelink:"/add-property",linktitle:"Add new Property",title:"All Booking",allData:L,forFilterData:f,handleFilterSearch:B,handleClearFilter:T},void 0,!1,{fileName:j,lineNumber:182,columnNumber:21},void 0):l("div",{className:"flex items-center justify-center h-screen",children:l("img",{src:ve,width:250,height:250},void 0,!1,{fileName:j,lineNumber:186,columnNumber:37},void 0)},void 0,!1,{fileName:j,lineNumber:185,columnNumber:21},void 0)]},void 0,!0,{fileName:j,lineNumber:179,columnNumber:13},void 0)},void 0,!1)};export{Fe as default};
