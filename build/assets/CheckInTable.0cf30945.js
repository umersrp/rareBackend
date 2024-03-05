import{R as A,j as t,F as k,r as u,b as h,c as v,I as H}from"./index.a2dcacb2.js";import{G as B}from"./GlobalFilter.c265c2b1.js";const y=A.forwardRef(({indeterminate:g,...b},f)=>{const N=A.useRef(),p=f||N;return A.useEffect(()=>{p.current.indeterminate=g},[p,g]),t(k,{children:t("input",{type:"checkbox",ref:p,...b,className:"table-checkbox"})})}),z=({allBooking:g})=>{const b=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:l})=>t("span",{children:l.indexOf(e)+1})},{Header:"Booking Number",accessor:"bookingnumber",Cell:e=>{var l,a,i,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"Unit No",accessor:e=>`${e.propertyid}`,Cell:e=>{var i;const[l,a]=u.exports.useState("");return u.exports.useEffect(()=>{(async()=>{var n,d;if((n=e==null?void 0:e.cell)!=null&&n.value){const s=await(await fetch(`http://portals.rarehomesgroup.com/property/${(d=e==null?void 0:e.cell)==null?void 0:d.value}`)).json();s&&a(s==null?void 0:s.unitnumber)}})()},[]),t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(i=e==null?void 0:e.cell)!=null&&i.value?(l==null?void 0:l.slice(0,15))+((l==null?void 0:l.length)>15?"...":""):"Not Available"})})})}},{Header:"Building Name",accessor:e=>`${e.propertyid}`,Cell:e=>{var i;const[l,a]=u.exports.useState("");return u.exports.useEffect(()=>{(async()=>{var n,d;if((n=e==null?void 0:e.cell)!=null&&n.value){const s=await(await fetch(`http://portals.rarehomesgroup.com/property/${(d=e==null?void 0:e.cell)==null?void 0:d.value}`)).json();s&&a(s==null?void 0:s.buildingname)}})()},[]),t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(i=e==null?void 0:e.cell)!=null&&i.value?(l==null?void 0:l.slice(0,15))+((l==null?void 0:l.length)>15?"...":""):"Not Available"})})})}},{Header:"Floor Level",accessor:e=>`${e.propertyid}`,Cell:e=>{const[l,a]=u.exports.useState("");return u.exports.useEffect(()=>{(async()=>{var c,n;if((c=e==null?void 0:e.cell)!=null&&c.value){const m=await(await fetch(`http://portals.rarehomesgroup.com/property/${(n=e==null?void 0:e.cell)==null?void 0:n.value}`)).json();m&&a(m==null?void 0:m.floor)}})()},[]),t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:l?(l==null?void 0:l.slice(0,15))+((l==null?void 0:l.length)>15?"...":""):"Not Available"})})})}},{Header:"Community Name",accessor:e=>`${e.propertyid}`,Cell:e=>{var i;const[l,a]=u.exports.useState("");return u.exports.useEffect(()=>{(async()=>{var n,d;if((n=e==null?void 0:e.cell)!=null&&n.value){const s=await(await fetch(`http://portals.rarehomesgroup.com/property/${(d=e==null?void 0:e.cell)==null?void 0:d.value}`)).json();s&&a(s==null?void 0:s.communityname)}})()},[]),t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(i=e==null?void 0:e.cell)!=null&&i.value?(l==null?void 0:l.slice(0,15))+((l==null?void 0:l.length)>15?"...":""):"Not Available"})})})}},{Header:"Project Name",accessor:e=>`${e.propertyid}`,Cell:e=>{var i;const[l,a]=u.exports.useState("");return u.exports.useEffect(()=>{(async()=>{var n,d;if((n=e==null?void 0:e.cell)!=null&&n.value){const s=await(await fetch(`http://portals.rarehomesgroup.com/property/${(d=e==null?void 0:e.cell)==null?void 0:d.value}`)).json();s&&a(s==null?void 0:s.projectname)}})()},[]),t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(i=e==null?void 0:e.cell)!=null&&i.value?(l==null?void 0:l.slice(0,15))+((l==null?void 0:l.length)>15?"...":""):"Not Available"})})})}},{Header:"Owner Name",accessor:"ownerid",Cell:e=>{var i;const[l,a]=u.exports.useState("");return u.exports.useEffect(()=>{(async()=>{var n,d;if((n=e==null?void 0:e.cell)!=null&&n.value){const s=await(await fetch(`http://portals.rarehomesgroup.com/users/${(d=e==null?void 0:e.cell)==null?void 0:d.value}`)).json();s&&a((s==null?void 0:s.firstname)+" "+(s==null?void 0:s.lastname))}else a("Not Available")})()},[]),t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(i=e==null?void 0:e.cell)!=null&&i.value?(l==null?void 0:l.slice(0,15))+((l==null?void 0:l.length)>15?"...":""):"Not Available"})})})}},{Header:"Guest Name",accessor:"guestname",Cell:e=>{var l,a,i,c,n;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(l=e==null?void 0:e.cell)!=null&&l.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((n=(c=e==null?void 0:e.cell)==null?void 0:c.value)==null?void 0:n.length)>15?"...":""):"Not Available"})})})}},{Header:"Check in Type",accessor:"checkintype",Cell:e=>{var l,a,i,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"Nationality",accessor:"nationality",Cell:e=>{var l,a,i,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"passport no",accessor:"passportnumber",Cell:e=>{var l,a,i,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"Mobile Number",accessor:"mobilenumber",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Email",accessor:"email",Cell:e=>{var l,a,i,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"No. of Adults",accessor:"noadults",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"No. of Children",accessor:"nochildern",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"0"})}},{Header:"No. Of Occupants",accessor:"totaloccupants",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Confirmation Code",accessor:"confirmationcode",Cell:e=>{var l,a,i,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"Booking Date",accessor:"reservationdate",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Booking Agent",accessor:"bookingagent",Cell:e=>{var l,a,i,c,n;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((n=(c=e==null?void 0:e.cell)==null?void 0:c.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"Mode of Payment",accessor:"modepayment",Cell:e=>{var l,a,i,c,n;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((n=(c=e==null?void 0:e.cell)==null?void 0:c.value)==null?void 0:n.length)>15?"...":""):"Not Available"})}},{Header:"Check in Date",accessor:"checkindate",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Check out Date",accessor:"checkoutdate",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"No. of Nights",accessor:"nonight",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Tourism Fee /Unit",accessor:"tourismfee",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Security Deposit Amount",accessor:"securitydeposit",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"TOTAL PAYOUT",accessor:"totalpayout",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"Host Service Fee (portal)",accessor:"hostservicefee",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0"})}},{Header:"Total Collection All incl",accessor:"totalcollectall",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"Cleaning Fee",accessor:"cleaningfee",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"0"})}},{Header:"TOTAL ADDITIONAL FEE",accessor:"totaladditionalfee",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"Room Rent Amount",accessor:"roomrentamount",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"Guest Service Fee",accessor:"guestservicefee",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"Guest Management Fee",accessor:"guestmanagementfee",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"VAT 5% on Booking Room Rent",accessor:"vatperbookingrent",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"VAT 5% on Service fee",accessor:"vatperservicefee",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"VAT 5% on Cleaning fee",accessor:"vatpercleaningfee",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"VAT 5% on Guest Management",accessor:"vatperguestmanagementfee",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"Total Payout Vat",accessor:"totalvatper",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"Total Room rent + GM+VAT",accessor:e=>`${e.totalroomrent}`,Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"Audit Difference",accessor:e=>`${e.auditdiff}`,Cell:e=>t("span",{children:"0"})},{Header:"Total Collection All incl",accessor:e=>`${e.totalcollectall}`,Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"Created at",accessor:"createdAt",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}}],f=u.exports.useMemo(()=>b,[]),N=u.exports.useMemo(()=>g),p=h.exports.useTable({columns:f,data:N,initialState:{pageIndex:0,pageSize:50}},h.exports.useGlobalFilter,h.exports.useSortBy,h.exports.usePagination,h.exports.useRowSelect,e=>{e.visibleColumns.push(l=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>t("div",{children:t(y,{...a()})}),Cell:({row:a})=>t("div",{children:t(y,{...a.getToggleRowSelectedProps()})})},...l])}),{getTableProps:S,getTableBodyProps:T,headerGroups:P,footerGroups:M,page:L,nextPage:o,previousPage:$,canNextPage:r,canPreviousPage:x,pageOptions:D,state:R,gotoPage:C,pageCount:j,setPageSize:q,setGlobalFilter:G,prepareRow:E}=p,{globalFilter:O,pageIndex:F,pageSize:U}=R;return v(k,{children:[t("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px]",children:t(B,{filter:O,setFilter:G})}),t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"",children:v("table",{className:"min-w-[206%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...S,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:P.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(l=>v("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:" table-th ",children:[l.render("Header"),t("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...T,children:L.map(e=>(E(e),t("tr",{...e.getRowProps(),children:e.cells.map(l=>t("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")}))})))})]})})})}),v("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[v("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[t("select",{className:"form-control py-2 w-max",value:U,onChange:e=>q(Number(e.target.value)),children:[50,100,200].map(e=>v("option",{value:e,children:["Show ",e]},e))}),v("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",v("span",{children:[F+1," of ",D.length]})]})]}),v("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${x?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>C(0),disabled:!x,children:t(H,{icon:"heroicons:chevron-double-left-solid"})})}),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${x?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>$(),disabled:!x,children:"Prev"})}),D.map((e,l)=>t("li",{children:t("button",{href:"#","aria-current":"page",className:` ${l===F?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>C(l),children:e+1})},l)),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${r?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>o(),disabled:!r,children:"Next"})}),t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{onClick:()=>C(j-1),disabled:!r,className:` ${r?"":"opacity-50 cursor-not-allowed"}`,children:t(H,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})};export{z as C};
