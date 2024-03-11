import{R as G,j as l,F as X,r as u,b as E,c,f as V,G as re,I,aq as O,cb as de,cc as ue,E as me,bO as he}from"./index.40803122.js";import{G as pe}from"./GlobalFilter.2b588451.js";import"./index.esm.fc6ea848.js";const W=G.forwardRef(({indeterminate:p,...v},H)=>{const n=G.useRef(),g=H||n;return G.useEffect(()=>{g.current.indeterminate=p},[g,p]),l(X,{children:l("input",{type:"checkbox",ref:g,...v,className:"table-checkbox"})})}),U={option:(p,v)=>({...p,fontSize:"14px"})},ge=({title:p,linktitle:v,pagelink:H,allData:n,forFilterData:g,handleFilterSearch:$,handleClearFilter:x})=>{const[s,f]=u.exports.useState(""),[o,L]=u.exports.useState(!1),A=e=>{const{name:t,value:a}=e.target;f({...s,[t]:a})},R=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:t})=>l("span",{children:t.indexOf(e)+1})},{Header:"Booking Status",accessor:"cancelled",Cell:e=>{var t,a,i;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=e==null?void 0:e.cell)==null?void 0:t.value)===!1?"text-success-500 bg-success-500":""} 
            ${((a=e==null?void 0:e.cell)==null?void 0:a.value)===!0?"text-danger-500 bg-danger-500":""}
            
             `,children:((i=e==null?void 0:e.cell)==null?void 0:i.value)===!0?"Cancelled":"Approved"})})}},{Header:"booking number",accessor:"bookingnumber",Cell:e=>{var t,a,i;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((i=e==null?void 0:e.cell)==null?void 0:i.value.length)>15?"...":""):"Not Available"})}},{Header:"confirmation code",accessor:"confirmationcode",Cell:e=>{var t,a,i,r;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(t=e==null?void 0:e.cell)!=null&&t.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((r=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:r.length)>15?"...":""):"Not Available"})})})}},{Header:"guest name",accessor:"guestname",Cell:e=>{var t,a,i,r,b;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((b=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:b.length)>15?"...":""):"Not Available"})}},{Header:"unit number",accessor:"unitnumber",Cell:e=>{var t,a,i,r,b;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((b=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:b.length)>15?"...":""):"Not Available"})}},{Header:"booking agent",accessor:"bookingagent",Cell:e=>{var t,a,i,r,b;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((b=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:b.length)>15?"...":""):"Not Available"})}},{Header:"Check in Date",accessor:"checkindate",Cell:e=>{var t,a;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})},sortType:(e,t,a,i)=>de(e,t,a,i)},{Header:"Check out Date",accessor:"checkoutdate",Cell:e=>{var t,a;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})},sortType:(e,t,a,i)=>ue(e,t,a,i)},{Header:"Room Rent Amount: (host Payable)",accessor:"roomrenthostpayable",Cell:e=>{var t,a;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?parseFloat((a=e==null?void 0:e.cell)==null?void 0:a.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}},{Header:"Host Management Fee",accessor:"hostmanagementfee",Cell:e=>{var t,a;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" AED":"0.00"})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var t,a;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}}],h=u.exports.useMemo(()=>R,[]),k=u.exports.useMemo(()=>n),N=E.exports.useTable({columns:h,data:k,initialState:{pageIndex:0,pageSize:50}},E.exports.useGlobalFilter,E.exports.useSortBy,E.exports.usePagination,E.exports.useRowSelect,e=>{e.visibleColumns.push(t=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>l("div",{children:l(W,{...a()})}),Cell:({row:a})=>l("div",{children:l(W,{...a.getToggleRowSelectedProps()})})},...t])}),{getTableProps:m,getTableBodyProps:T,headerGroups:y,footerGroups:_,page:q,nextPage:M,previousPage:j,canNextPage:B,canPreviousPage:C,pageOptions:S,state:P,gotoPage:d,pageCount:F,setPageSize:Z,setGlobalFilter:D,prepareRow:w}=N,{globalFilter:ee,pageIndex:z,pageSize:te}=P,[Y,le]=u.exports.useState(0);u.exports.useEffect(()=>{var e,t;if(n!=null&&n.length){let a=0;for(let i=0;i<(n==null?void 0:n.length);i++){let r=parseFloat((e=n[i])==null?void 0:e.roomrentamount);!isNaN(r)&&((t=n[i])==null?void 0:t.cancelled)===!1&&(a+=r)}le(a||0)}},[n==null?void 0:n.length]);const[ae,se]=u.exports.useState(0);u.exports.useEffect(()=>{if(n!=null&&n.length){let e=n==null?void 0:n.filter(t=>t.cancelled===!1).length;se(e)}},[n]);const ne=[{name:{series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},title:"Total No of Check-In",count:ae,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:{series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},title:"Total Collection",count:Y?Y.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":0,bg:"bg-[#FFEDE5] dark:bg-slate-900	"}],ie=g.filter(e=>e.unitnumber!==void 0),J=[...new Set(ie.map(e=>e.unitnumber))].sort((e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"})).map(e=>({label:e,value:e})),ce=g.filter(e=>e.email!==void 0),K=[...[...new Set(ce.map(e=>e.email))].map(e=>{const t=g.find(a=>a.email===e);return t?{label:t.guestname+" | "+t.email,value:t.email}:null}).filter(Boolean)].sort((e,t)=>e.label.localeCompare(t.label)),Q=[...[{value:"Airbnb",label:"Airbnb"},{value:"Booking.com",label:"Booking.com"},{value:"vrbo",label:"vrbo"},{value:"Direct Booking",label:"Direct Booking"},{value:"Not in the List",label:"Not in the List"}]].sort((e,t)=>e.label.localeCompare(t.label)),oe=()=>{x(),f("")};return l(X,{children:c(V,{children:[l("div",{className:"grid grid-cols-12 gap-5 mb-5",children:l("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:l(V,{bodyClass:"p-4",children:l("div",{className:"grid md:grid-cols-2 col-span-1 gap-4",children:l(re,{statistics:ne})})})})}),c("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:p}),c("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px]",children:[c("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer md:mb-0 mb-4",onClick:()=>L(!o),children:[o===!0?l(I,{icon:"heroicons:minus-small",className:"w-[20px] h-[20px]"}):l(I,{icon:"heroicons:plus-small",className:"w-[20px] h-[20px]"}),l("p",{className:"text-[16px] leading regular color-black",children:"Advance filter"})]}),l(pe,{filter:ee,setFilter:D})]})]}),c("div",{className:`xl:grid-cols-3 grid gap-5 grid-cols-1 ${o===!0?"filter-show mt-6 pointer-events-auto":"filter-remove -mt-4 pointer-events-none"}`,children:[c("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Unit No."}),l(O,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:J,value:J.filter(function(e){if((s==null?void 0:s.unitnumber)!=="")return e.value===(s==null?void 0:s.unitnumber)}),onChange:e=>{A({target:{name:"unitnumber",value:e.value}})},styles:U,id:"hh",placeholder:"Select..."}),s!=null&&s.unitnumber?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>f({...s,unitnumber:""}),children:"Clear filter"}):null]}),c("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Guest Name / Email"}),l(O,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:K,value:K.filter(function(e){if((s==null?void 0:s.email)!=="")return e.value===(s==null?void 0:s.email)}),onChange:e=>{A({target:{name:"email",value:e.value}})},styles:U,id:"hh",placeholder:"Select..."}),s!=null&&s.email?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>f({...s,email:""}),children:"Clear filter"}):null]}),c("div",{children:[l("label",{htmlFor:" hh",className:"form-label ",children:"Booking Agent"}),l(O,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:Q,value:Q.filter(function(e){if((s==null?void 0:s.bookingagent)!=="")return e.value===(s==null?void 0:s.bookingagent)}),onChange:e=>{A({target:{name:"bookingagent",value:e.value}})},styles:U,id:"hh",placeholder:"Select..."}),s!=null&&s.bookingagent?l("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>f({...s,bookingagent:""}),children:"Clear filter"}):null]})]}),c("div",{className:`flex ${o===!0?"filter-show mt-6 pointer-events-auto":"filter-remove mt-0 pointer-events-none"} justify-end gap-x-[10px]`,children:[l("button",{className:"btn btn-secondary  text-center",type:"button",onClick:()=>oe(),children:"Clear filter"}),l("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>$(s),children:"Search"})]}),l("div",{className:"overflow-x-auto -mx-6 mt-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"overflow-hidden ",children:c("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...m,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:y.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(t=>c("th",{...t.getHeaderProps(t.getSortByToggleProps()),scope:"col",className:" table-th ",children:[t.render("Header"),l("span",{children:t.isSorted?t.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...T,children:q.map(e=>(w(e),l("tr",{...e.getRowProps(),children:e.cells.map(t=>l("td",{...t.getCellProps(),className:"table-td",children:t.render("Cell")}))})))})]})})})}),c("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[c("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:te,onChange:e=>Z(Number(e.target.value)),children:[50,100,200].map(e=>c("option",{value:e,children:["Show ",e]},e))}),c("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",c("span",{children:[z+1," of ",S.length]})]})]}),c("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>d(0),disabled:!C,children:l(I,{icon:"heroicons:chevron-double-left-solid"})})}),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>j(),disabled:!C,children:"Prev"})}),S.map((e,t)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${t===z?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>d(t),children:e+1})},t)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${B?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>M(),disabled:!B,children:"Next"})}),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>d(F-1),disabled:!B,className:` ${B?"":"opacity-50 cursor-not-allowed"}`,children:l(I,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},Ae=()=>{const[p,v]=u.exports.useState(!1),[H,n]=u.exports.useState([]),[g,$]=u.exports.useState(""),[x,s]=u.exports.useState(""),f=localStorage.getItem("isAuth"),o=JSON.parse(f);console.log("===========>",f);const L=me();u.exports.useEffect(()=>{v(!0),o!=null&&o.type?(async()=>{try{const k=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${o==null?void 0:o._id}&sort=descending&type=customer&page=0&perPage=all`,N=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${o==null?void 0:o._id}&sort=descending&type=customer&page=0&perPage=all`,m=await fetch(k);if(!m.ok&&m.status!==400)throw new Error(`API 1 failed with status: ${m.status}`);const T=m.status===400?[]:await m.json(),y=await fetch(N);if(!y.ok&&y.status!==400)throw new Error(`API 2 failed with status: ${y.status}`);const _=y.status===400?[]:await y.json(),j=[...T,..._].map(d=>d._id).map(d=>fetch(`http://portals.rarehomesgroup.com/booking/ownerrepresentative/pages?propertyid=${d}&page=0&perPage=all`).then(F=>F.json())),C=(await Promise.all(j)).reduce((d,F)=>d.concat(F),[]),S=new Map;C.forEach(d=>{S.has(d._id)||S.set(d._id,d)});const P=Array.from(S.values());n(P),$(P),s(P)}catch(k){console.error("Error fetching data:",k),v(!1)}})():setTimeout(()=>{L("/access-denied")},1e3),v(!1)},[o==null?void 0:o.type,p]);function A(h){if(h){const k=x.filter(N=>{let m=!0;return h.unitnumber&&N.unitnumber!==h.unitnumber&&(m=!1),h.email&&N.email!==h.email&&(m=!1),h.bookingagent&&N.bookingagent!==h.bookingagent&&(m=!1),m});n(k)}else n(x)}const R=async()=>{n(x)};return l(X,{children:c("div",{className:" space-y-5",children:[p&&!x.length?l(he,{}):null,x.length>0?l(ge,{pagelink:"/add-property",linktitle:"Add new Property",title:"All Booking",allData:H,forFilterData:g,handleFilterSearch:A,handleClearFilter:R}):"no booking found"]})})};export{Ae as default};
