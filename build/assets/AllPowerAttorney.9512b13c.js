import{R as de,j as a,F as g,bL as Ne,r as p,b as X,c,f as De,L as ae,ap as ue,I as r,bM as Be,M as Me,T as oe,bN as Ge}from"./index.8a3fa8e4.js";import{G as Ye}from"./GlobalFilter.131e16a9.js";import{D as ee}from"./index.esm.05cd9023.js";const fe=de.forwardRef(({indeterminate:A,...h},M)=>{const _=de.useRef(),U=M||_;return de.useEffect(()=>{U.current.indeterminate=A},[U,A]),a(g,{children:a("input",{type:"checkbox",ref:U,...h,className:"table-checkbox"})})}),pe={option:(A,h)=>({...A,fontSize:"14px"})},Xe=({title:A,linktitle:h,pagelink:M,allData:_,onDataUpdate:U,forFilterData:C,handleFilterSearch:N,handleClearFilter:te,selectDateOption:y,setSelectDateOption:q,dateRangOption:W,valueDATEOFISSUE:S,valueEXPIRY:v,valueDATEOFREVALIDATION:E,valueREVALIDATIONEXPIRY:J,handleValueDATEOFISSUEChange:P,handleValueEXPIRYChange:O,handleValueDATEOFREVALIDATIONChange:H,handleValueREVALIDATIONEXPIRYChange:I,removeAllDateFilter:le,dateFilterActive:B})=>{const se=localStorage.getItem("isAuth"),G=JSON.parse(se),{data:b}=Ne(G==null?void 0:G.roleid),[ne,z]=p.exports.useState(!1),[ce,me]=p.exports.useState(!1),[ie,d]=p.exports.useState(""),[x,o]=p.exports.useState(""),m=async e=>{z(!0),o(e)},T=()=>{z(!1)},F=async e=>{try{await Me.patch("http://portals.rarehomesgroup.com/powerattorney/api/softdelete",{_id:e,softdelete:!0}),U()}catch(t){console.log(t,"error")}},j=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:t})=>a("span",{children:t.indexOf(e)+1})},{Header:"customer name",accessor:"customer_name",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"customer email",accessor:"customer_email",Cell:e=>{var t,l;return a("span",{className:"normal-case",children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"customer mobile no.",accessor:"customer_mobilenumber",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"other customer name",accessor:e=>{var t;return`${(t=e.other_customer)==null?void 0:t.customer_name}`},Cell:e=>{var t,l,s,n,D,k,$,L,R,V;return a(g,{children:((s=(l=(t=e==null?void 0:e.cell)==null?void 0:t.row)==null?void 0:l.original)==null?void 0:s.other_customer)&&((k=(D=(n=e==null?void 0:e.cell)==null?void 0:n.row)==null?void 0:D.original)==null?void 0:k.total_no_customer)>0?a(g,{children:(V=(R=(L=($=e==null?void 0:e.cell)==null?void 0:$.row)==null?void 0:L.original)==null?void 0:R.other_customer)==null?void 0:V.map((u,Y)=>c(g,{children:[a("span",{children:u!=null&&u.customer_name?u==null?void 0:u.customer_name:"Not Available"},Y+1)," ",a("br",{})]}))}):a("span",{children:"Not Available"})})}},{Header:"other customer email",accessor:e=>{var t;return`${(t=e.other_customer)==null?void 0:t.customer_email}`},Cell:e=>{var t,l,s,n,D,k,$,L,R,V;return a(g,{children:((s=(l=(t=e==null?void 0:e.cell)==null?void 0:t.row)==null?void 0:l.original)==null?void 0:s.other_customer)&&((k=(D=(n=e==null?void 0:e.cell)==null?void 0:n.row)==null?void 0:D.original)==null?void 0:k.total_no_customer)>0?a(g,{children:(V=(R=(L=($=e==null?void 0:e.cell)==null?void 0:$.row)==null?void 0:L.original)==null?void 0:R.other_customer)==null?void 0:V.map((u,Y)=>c(g,{children:[a("span",{className:"normal-case",children:u!=null&&u.customer_email?u==null?void 0:u.customer_email:"Not Available"},Y+1)," ",a("br",{})]}))}):a("span",{children:"Not Available"})})}},{Header:"other customer mobile no.",accessor:e=>{var t;return`${(t=e.other_customer)==null?void 0:t.customer_mobilenumber}`},Cell:e=>{var t,l,s,n,D,k,$,L,R,V;return a(g,{children:((s=(l=(t=e==null?void 0:e.cell)==null?void 0:t.row)==null?void 0:l.original)==null?void 0:s.other_customer)&&((k=(D=(n=e==null?void 0:e.cell)==null?void 0:n.row)==null?void 0:D.original)==null?void 0:k.total_no_customer)>0?a(g,{children:(V=(R=(L=($=e==null?void 0:e.cell)==null?void 0:$.row)==null?void 0:L.original)==null?void 0:R.other_customer)==null?void 0:V.map((u,Y)=>c(g,{children:[a("span",{children:u!=null&&u.customer_mobilenumber?u==null?void 0:u.customer_mobilenumber:"Not Available"},Y+1)," ",a("br",{})]}))}):a("span",{children:"Not Available"})})}},{Header:"poa taker name",accessor:"poa_taker_name",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"poa language",accessor:"poa_language",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"date of issue",accessor:"date_of_issue",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})}},{Header:"EXPIRY",accessor:"expiry_date",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})}},{Header:"DATE OF RE-VALIDATION",accessor:"date_of_revalidation",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})}},{Header:"RE - VALIDATION EXPIRY",accessor:"revalidation_expiry_date",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})}},{Header:"TYPE OF POA",accessor:"type_of_poa",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"nominated",accessor:"nominated",Cell:e=>{var t,l,s,n;return a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?a(r,{icon:"heroicons:check",className:"w-[25px] h-[25px]"}):a(r,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"})})})}},{Header:"buying",accessor:"buying",Cell:e=>{var t,l,s,n;return a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?a(r,{icon:"heroicons:check",className:"w-[25px] h-[25px]"}):a(r,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"})})})}},{Header:"selling",accessor:"selling",Cell:e=>{var t,l,s,n;return a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?a(r,{icon:"heroicons:check",className:"w-[25px] h-[25px]"}):a(r,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"})})})}},{Header:"gifting",accessor:"gifting",Cell:e=>{var t,l,s,n;return a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?a(r,{icon:"heroicons:check",className:"w-[25px] h-[25px]"}):a(r,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"})})})}},{Header:"renting",accessor:"renting",Cell:e=>{var t,l,s,n;return a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?a(r,{icon:"heroicons:check",className:"w-[25px] h-[25px]"}):a(r,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"})})})}},{Header:"management",accessor:"management",Cell:e=>{var t,l,s,n;return a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?a(r,{icon:"heroicons:check",className:"w-[25px] h-[25px]"}):a(r,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"})})})}},{Header:"visa",accessor:"visa",Cell:e=>{var t,l,s,n;return a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?a(r,{icon:"heroicons:check",className:"w-[25px] h-[25px]"}):a(r,{icon:"heroicons:x-mark",className:"w-[25px] h-[25px]"})})})}},{Header:"SPECIFIC REASON",accessor:"specific_reason",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"CODE POWER NO.",accessor:"code_power_no",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"CODE POWER BRANCH",accessor:"code_power_branch",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"NO. OF POA (ORIGINAL) WITH US",accessor:"no_poa_with_us",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"POA DONE THRU LAWYER/TYPIST/SELF",accessor:"poa_done",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"AMOUNT PAID (AED) | COURT FEES",accessor:"court_fees",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?parseFloat((l=e==null?void 0:e.cell)==null?void 0:l.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"})}},{Header:"AMOUNT PAID (AED) | SERVICE FEES",accessor:"service_fees",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?parseFloat((l=e==null?void 0:e.cell)==null?void 0:l.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"})}},{Header:"attachment PDF/PNG/JPG",accessor:"attachment_doc",Cell:e=>{var t,l,s,n,D;return a("span",{className:"block w-full",children:a("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=e==null?void 0:e.cell)==null?void 0:t.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((s=e==null?void 0:e.cell)==null?void 0:s.value)&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!==""?c("a",{className:"flex gap-x-[5px] items-center",href:"http://portals.rarehomesgroup.com"+((D=e==null?void 0:e.cell)==null?void 0:D.value),target:"_blank",children:[a(r,{icon:"heroicons-outline:eye"}),"View Document"]}):"Not Available"})})}},{Header:"Created-By",accessor:"employee_email_createdBy",Cell:e=>{var t,l;return a("span",{className:"normal-case",children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})}},{Header:"Updated-By",accessor:"employee_email_updatedBy",Cell:e=>{var t,l;return a("span",{className:"normal-case",children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"updated-on",accessor:"updatedAt",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const t=localStorage.getItem("isAuth"),l=JSON.parse(t),{data:s}=Ne(l==null?void 0:l.roleid);if(!s)return null;const n=(s==null?void 0:s.readpoa)===!0,D=(s==null?void 0:s.updatepoa)===!0,k=(s==null?void 0:s.deletepoa)===!0;return c("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[n&&a(oe,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:a(ae,{className:"action-btn",to:"#",type:"button",children:a(r,{icon:"heroicons:eye"})})}),D&&a(oe,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:a(ae,{to:`/poa-form/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:a(r,{icon:"heroicons:pencil-square"})})}),k&&a(oe,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:a("button",{className:"action-btn",type:"button",onClick:()=>m(e==null?void 0:e.cell.value),children:a(r,{icon:"heroicons:trash"})})})]})}}],f=p.exports.useMemo(()=>j,[]),_e=p.exports.useMemo(()=>_),ye=X.exports.useTable({columns:f,data:_e,initialState:{pageIndex:0,pageSize:50}},X.exports.useGlobalFilter,X.exports.useSortBy,X.exports.usePagination,X.exports.useRowSelect,e=>{e.visibleColumns.push(t=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:l})=>a("div",{children:a(fe,{...l()})}),Cell:({row:l})=>a("div",{children:a(fe,{...l.getToggleRowSelectedProps()})})},...t])}),{getTableProps:ke,getTableBodyProps:Ae,headerGroups:Ce,footerGroups:qe,page:Se,nextPage:Ee,previousPage:Pe,canNextPage:Q,canPreviousPage:K,pageOptions:he,state:Oe,gotoPage:re,pageCount:He,setPageSize:Ie,setGlobalFilter:Te,prepareRow:Fe}=ye,{globalFilter:je,pageIndex:xe,pageSize:$e}=Oe,[Z,Le]=p.exports.useState(!1),[i,w]=p.exports.useState(""),ve=e=>{const{name:t,value:l}=e.target;w({...i,[t]:l})},Re=C==null?void 0:C.filter(e=>e.customer_email!==void 0),be=[...new Set(Re.map(e=>e.customer_email))].sort((e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"})).map(e=>({label:e,value:e})),Ve=C==null?void 0:C.filter(e=>e.poa_taker_name!==void 0),ge=[...new Set(Ve.map(e=>e.poa_taker_name))].sort((e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"})).map(e=>{const t=C.find(l=>l.poa_taker_name===e);return t?{label:t.poa_taker_name,value:t.poa_taker_name}:null}).filter(Boolean),Ue=()=>{te(),w("")};return a(g,{children:c(De,{children:[c("div",{className:"flex justify-between items-center mb-6",children:[a("h4",{className:"card-title",children:A}),(b==null?void 0:b.createpoa)&&a(ae,{to:M,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:h})]}),c("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px] gap-y-[15px]",children:[a("div",{className:"flex justify-end items-center",children:a("div",{className:"flex justify-end items-center ",children:c("div",{className:"flex -gap-x-[5px] items-center",children:[a("div",{className:"w-[300px]",children:a(ue,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:W,value:W.filter(function(e){return e.value===y}),onChange:e=>{q(e==null?void 0:e.value)},styles:pe,id:"hh",placeholder:"Select Date filter option..."})}),y&&y==="DATE OF ISSUE"?a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(ee,{value:S,inputClassName:"input-class",containerClassName:"container-class",onChange:P,placeholder:"DATE OF ISSUE"})})}):null,y&&y==="EXPIRY"?a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(ee,{value:v,inputClassName:"input-class",containerClassName:"container-class",onChange:O,placeholder:"DATE OF ISSUE"})})}):null,y&&y==="DATE OF RE-VALIDATION"?a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(ee,{value:E,inputClassName:"input-class",containerClassName:"container-class",onChange:H,placeholder:"DATE OF ISSUE"})})}):null,y&&y==="RE - VALIDATION EXPIRY"?a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(ee,{value:J,inputClassName:"input-class",containerClassName:"container-class",onChange:I,placeholder:"DATE OF ISSUE"})})}):null]})})}),B===!0?a("button",{className:"btn-dark py-[8px] px-[24px] rounded-[5px]",type:"button",onClick:le,children:"Remove Date Filter"}):null,c("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer md:mb-0 mb-4",onClick:()=>Le(!Z),children:[Z===!0?a(r,{icon:"heroicons:minus-small",className:"w-[20px] h-[20px]"}):a(r,{icon:"heroicons:plus-small",className:"w-[20px] h-[20px]"}),a("p",{className:"text-[16px] leading regular color-black",children:"Advance filter"})]}),a(Ye,{filter:je,setFilter:Te})]}),c("div",{className:`xl:grid-cols-3 grid gap-5 grid-cols-1 ${Z===!0?"filter-show mt-6 pointer-events-auto":"filter-remove -mt-4 pointer-events-none"}`,children:[c("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"Customer Email"}),a(ue,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:be,value:be.filter(function(e){if((i==null?void 0:i.customer_email)!=="")return e.value===(i==null?void 0:i.customer_email)}),onChange:e=>{ve({target:{name:"customer_email",value:e.value}})},styles:pe,id:"hh",placeholder:"Select..."}),i!=null&&i.customer_email?a("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>w({...i,customer_email:""}),children:"Clear filter"}):null]}),c("div",{children:[a("label",{htmlFor:" hh",className:"form-label ",children:"POA Taker Name"}),a(ue,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:ge,value:ge.filter(function(e){if((i==null?void 0:i.poa_taker_name)!=="")return e.value===(i==null?void 0:i.poa_taker_name)}),onChange:e=>{ve({target:{name:"poa_taker_name",value:e.value}})},styles:pe,id:"hh",placeholder:"Select..."}),i!=null&&i.poa_taker_name?a("div",{className:" mt-2 block text-sm cursor-pointer",onClick:()=>w({...i,poa_taker_name:""}),children:"Clear filter"}):null]})]}),c("div",{className:`flex ${Z===!0?"filter-show mt-6 pointer-events-auto":"filter-remove mt-0 pointer-events-none"} justify-end gap-x-[10px]`,children:[a("button",{className:"btn btn-secondary  text-center",type:"button",onClick:()=>Ue(),children:"Clear filter"}),a("button",{className:"btn btn-dark  text-center",type:"button",onClick:()=>N(i),children:"Search"})]}),a(Be,{showModal:ne,handleClose:T,loaderModal:ce,linkedData:ie,handleDeleteData:F,dataId:x,moduleName:"Power Of Attorney"}),a("div",{className:"overflow-x-auto -mx-6 mt-6",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:"",children:c("table",{className:"min-w-[170%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ke,children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Ce.map(e=>a("tr",{...e.getHeaderGroupProps(),children:e.headers.map(t=>t.Header==="action"&&!((b==null?void 0:b.readpoa)===!0||(b==null?void 0:b.updatepoa)===!0||(b==null?void 0:b.deletepoa)===!0)?a("th",{}):c("th",{...t.getHeaderProps(t.getSortByToggleProps()),scope:"col",className:"table-th",children:[t.render("Header"),a("span",{children:t.isSorted?t.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),a("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Ae,children:Se.map(e=>(Fe(e),a("tr",{...e.getRowProps(),children:e.cells.map(t=>a("td",{...t.getCellProps(),className:"table-td",children:t.render("Cell")}))})))})]})})})}),c("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[c("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[a("select",{className:"form-control py-2 w-max",value:$e,onChange:e=>Ie(Number(e.target.value)),children:[50,100,200].map(e=>c("option",{value:e,children:["Show ",e]},e))}),c("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",c("span",{children:[xe+1," of ",he.length]})]})]}),c("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[a("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${K?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>re(0),disabled:!K,children:a(r,{icon:"heroicons:chevron-double-left-solid"})})}),a("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${K?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Pe(),disabled:!K,children:"Prev"})}),he.map((e,t)=>a("li",{children:a("button",{href:"#","aria-current":"page",className:` ${t===xe?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>re(t),children:e+1})},t)),a("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${Q?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Ee(),disabled:!Q,children:"Next"})}),a("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{onClick:()=>re(He-1),disabled:!Q,className:` ${Q?"":"opacity-50 cursor-not-allowed"}`,children:a(r,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},Ze=()=>{const[A,h]=p.exports.useState([]),[M,_]=p.exports.useState(!1),[U,C]=p.exports.useState(""),[N,te]=p.exports.useState("");p.exports.useEffect(()=>{_(!0),(async()=>{const o=await(await fetch("http://portals.rarehomesgroup.com/powerattorney")).json();h(o),C(o),te(o),_(!1)})()},[]);const[y,q]=p.exports.useState(""),W=[{value:"DATE OF ISSUE",label:"DATE OF ISSUE"},{value:"EXPIRY",label:"EXPIRY"},{value:"DATE OF RE-VALIDATION",label:"DATE OF RE-VALIDATION"},{value:"RE - VALIDATION EXPIRY",label:"RE - VALIDATION EXPIRY"}],[S,v]=p.exports.useState({startDate:"",endDate:""}),[E,J]=p.exports.useState({startDate:"",endDate:""}),[P,O]=p.exports.useState({startDate:"",endDate:""}),[H,I]=p.exports.useState({startDate:"",endDate:""}),[le,B]=p.exports.useState(!1),se=async d=>{const{startDate:x,endDate:o}=d,m=new Date(x),T=new Date(o),F=N.filter(j=>{const f=new Date(j.date_of_issue);return f>=m&&f<=T});h(F),B(!0),J({startDate:"",endDate:""}),O({startDate:"",endDate:""}),I({startDate:"",endDate:""})},G=async d=>{const{startDate:x,endDate:o}=d,m=new Date(x),T=new Date(o),F=N.filter(j=>{const f=new Date(j.expiry_date);return f>=m&&f<=T});h(F),B(!0),v({startDate:"",endDate:""}),O({startDate:"",endDate:""}),I({startDate:"",endDate:""})},b=async d=>{const{startDate:x,endDate:o}=d,m=new Date(x),T=new Date(o),F=N.filter(j=>{const f=new Date(j.date_of_revalidation);return f>=m&&f<=T});h(F),B(!0),v({startDate:"",endDate:""}),v({startDate:"",endDate:""}),I({startDate:"",endDate:""})},ne=async d=>{const{startDate:x,endDate:o}=d,m=new Date(x),T=new Date(o),F=N.filter(j=>{const f=new Date(j.revalidation_expiry_date);return f>=m&&f<=T});h(F),B(!0),v({startDate:"",endDate:""}),v({startDate:"",endDate:""}),O({startDate:"",endDate:""})},z=async()=>{_(!0);const x=await(await fetch("http://portals.rarehomesgroup.com/powerattorney")).json();h(x),_(!1)};function ce(d){if(d)if((S==null?void 0:S.startDate)!==""&&(S==null?void 0:S.endDate)!==""||(E==null?void 0:E.startDate)&&(E==null?void 0:E.endDate)||(P==null?void 0:P.startDate)!==""&&(P==null?void 0:P.endDate)!==""||(H==null?void 0:H.startDate)&&(H==null?void 0:H.endDate)){const x=A.filter(o=>{let m=!0;return d.customer_email&&o.customer_email!==d.customer_email&&(m=!1),d.poa_taker_name&&o.poa_taker_name!==d.poa_taker_name&&(m=!1),m});h(x),_(!1)}else{const x=N.filter(o=>{let m=!0;return d.customer_email&&o.customer_email!==d.customer_email&&(m=!1),d.poa_taker_name&&o.poa_taker_name!==d.poa_taker_name&&(m=!1),m});h(x),_(!1)}else h(N),v({startDate:"",endDate:""}),v({startDate:"",endDate:""}),I({startDate:"",endDate:""}),O({startDate:"",endDate:""})}const me=async()=>{h(N),v({startDate:"",endDate:""}),v({startDate:"",endDate:""}),I({startDate:"",endDate:""}),O({startDate:"",endDate:""}),_(!1)},ie=()=>{q(""),h(N),v({startDate:"",endDate:""}),v({startDate:"",endDate:""}),I({startDate:"",endDate:""}),O({startDate:"",endDate:""}),B(!1)};return a(g,{children:M===!1?a(g,{children:N!=null&&N.length?a("div",{className:" space-y-5",children:a(Xe,{pagelink:"/poa-form",linktitle:"Add new Power Of Attorney",title:"All Power Of Attorney",allData:A,onDataUpdate:z,forFilterData:U,handleFilterSearch:ce,handleClearFilter:me,setSelectDateOption:q,dateRangOption:W,valueDATEOFISSUE:S,setValueDATEOFISSUE:v,valueEXPIRY:E,setValueEXPIRY:J,valueDATEOFREVALIDATION:P,setValueDATEOFREVALIDATION:O,valueREVALIDATIONEXPIRY:H,handleValueDATEOFISSUEChange:se,handleValueEXPIRYChange:G,handleValueDATEOFREVALIDATIONChange:b,handleValueREVALIDATIONEXPIRYChange:ne,setValueREVALIDATIONEXPIRY:I,removeAllDateFilter:ie,dateFilterActive:le,selectDateOption:y})}):a(De,{children:c(g,{children:[c("div",{className:"flex justify-between items-center mb-6",children:[a("h4",{className:"card-title",children:"All Power Of Attorney"}),a(ae,{to:"/poa-form",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add new Power Of Attorney"})]}),a("p",{children:"No Power Of Attorney Found"})]})})}):a(Ge,{})})};export{Ze as default};
