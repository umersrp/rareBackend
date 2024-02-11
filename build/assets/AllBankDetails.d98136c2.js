import{R as D,j as l,F as r,cb as $,r as h,b as d,C as j,L as _,I as v,H as ne,cc as se}from"./index.50bb4499.js";import{T as A}from"./Tooltip.abd3e534.js";import{r as m}from"./index.c0e2c666.js";import{G as ce}from"./GlobalFilter.e6c59df2.js";import{D as re}from"./DeleteModal.7b883534.js";/* empty css                     */const B=D.forwardRef(({indeterminate:u,...x},g)=>{const p=D.useRef(),b=g||p;return D.useEffect(()=>{b.current.indeterminate=u},[b,u]),l(r,{children:l("input",{type:"checkbox",ref:b,...x,className:"table-checkbox"})})}),de=({title:u,linktitle:x,pagelink:g,allData:p,onDataUpdate:b})=>{const y=localStorage.getItem("isAuth"),f=JSON.parse(y),{data:o}=$(f==null?void 0:f.roleid),[F,S]=h.exports.useState(!1),[T,ie]=h.exports.useState(!1),[I,oe]=h.exports.useState(""),[L,M]=h.exports.useState(""),G=async e=>{S(!0),M(e)},O=()=>{S(!1)},E=async e=>{try{await ne.patch("http://dev-rare.srp.ai/bankdetails/api/softdelete",{_id:e,softdelete:!0}),b()}catch(a){console.log(a,"error")}},U=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>l("span",{children:a.indexOf(e)+1})},{Header:"customer name",accessor:"customer_name",Cell:e=>{var a,n;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"})}},{Header:"customer email",accessor:"customer_email",Cell:e=>{var a,n;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"})}},{Header:"customer mobile no.",accessor:"customer_mobilenumber",Cell:e=>{var a,n;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(n=e==null?void 0:e.cell)==null?void 0:n.value:"Not Available"})}},{Header:"account title",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.account_title}`},Cell:e=>{var a,n,s,c;return l(r,{children:(c=(s=(n=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:n.original)==null?void 0:s.all_accounts)==null?void 0:c.map((t,i)=>d(r,{children:[l("span",{children:t!=null&&t.account_title?t==null?void 0:t.account_title:"Not Available"},i+1)," ",l("br",{})]}))})}},{Header:"bank name",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.bank_name}`},Cell:e=>{var a,n,s,c;return l(r,{children:(c=(s=(n=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:n.original)==null?void 0:s.all_accounts)==null?void 0:c.map((t,i)=>d(r,{children:[l("span",{children:t!=null&&t.bank_name?t==null?void 0:t.bank_name:"Not Available"},i+1)," ",l("br",{})]}))})}},{Header:"branch name",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.branch_name}`},Cell:e=>{var a,n,s,c;return l(r,{children:(c=(s=(n=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:n.original)==null?void 0:s.all_accounts)==null?void 0:c.map((t,i)=>d(r,{children:[l("span",{children:t!=null&&t.branch_name?t==null?void 0:t.branch_name:"Not Available"},i+1)," ",l("br",{})]}))})}},{Header:"country",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.country}`},Cell:e=>{var a,n,s,c;return l(r,{children:(c=(s=(n=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:n.original)==null?void 0:s.all_accounts)==null?void 0:c.map((t,i)=>d(r,{children:[l("span",{children:t!=null&&t.country?t==null?void 0:t.country:"Not Available"},i+1)," ",l("br",{})]}))})}},{Header:"branch code",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.branch_code}`},Cell:e=>{var a,n,s,c;return l(r,{children:(c=(s=(n=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:n.original)==null?void 0:s.all_accounts)==null?void 0:c.map((t,i)=>d(r,{children:[l("span",{children:t!=null&&t.branch_code?t==null?void 0:t.branch_code:"Not Available"},i+1)," ",l("br",{})]}))})}},{Header:"swift code",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.swift_code}`},Cell:e=>{var a,n,s,c;return l(r,{children:(c=(s=(n=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:n.original)==null?void 0:s.all_accounts)==null?void 0:c.map((t,i)=>d(r,{children:[l("span",{children:t!=null&&t.swift_code?t==null?void 0:t.swift_code:"Not Available"},i+1)," ",l("br",{})]}))})}},{Header:"account number",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.account_number}`},Cell:e=>{var a,n,s,c;return l(r,{children:(c=(s=(n=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:n.original)==null?void 0:s.all_accounts)==null?void 0:c.map((t,i)=>d(r,{children:[l("span",{children:t!=null&&t.account_number?t==null?void 0:t.account_number:"Not Available"},i+1)," ",l("br",{})]}))})}},{Header:"currency name",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.currency_name}`},Cell:e=>{var a,n,s,c;return l(r,{children:(c=(s=(n=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:n.original)==null?void 0:s.all_accounts)==null?void 0:c.map((t,i)=>d(r,{children:[l("span",{children:t!=null&&t.currency_name?t==null?void 0:t.currency_name:"Not Available"},i+1)," ",l("br",{})]}))})}},{Header:"iban number",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.iban_number}`},Cell:e=>{var a,n,s,c;return l(r,{children:(c=(s=(n=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:n.original)==null?void 0:s.all_accounts)==null?void 0:c.map((t,i)=>d(r,{children:[l("span",{children:t!=null&&t.iban_number?t==null?void 0:t.iban_number:"Not Available"},i+1)," ",l("br",{})]}))})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var a,n;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((n=e==null?void 0:e.cell)==null?void 0:n.value).toDateString():"Not Available"})}},{Header:"updated-on",accessor:"updatedAt",Cell:e=>{var a,n;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((n=e==null?void 0:e.cell)==null?void 0:n.value).toDateString():"Not Available"})}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const a=localStorage.getItem("isAuth"),n=JSON.parse(a),{data:s}=$(n==null?void 0:n.roleid);if(!s)return null;const c=(s==null?void 0:s.readbankdetails)===!0,t=(s==null?void 0:s.updatebankdetails)===!0,i=(s==null?void 0:s.deletebankdetails)===!0;return d("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[c&&l(A,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(_,{className:"action-btn",to:"#",type:"button",children:l(v,{icon:"heroicons:eye"})})}),t&&l(A,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:l(_,{to:`/bankdetails-form/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l(v,{icon:"heroicons:pencil-square"})})}),i&&l(A,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",onClick:()=>G(e==null?void 0:e.cell.value),children:l(v,{icon:"heroicons:trash"})})})]})}}],J=h.exports.useMemo(()=>U,[]),V=h.exports.useMemo(()=>p),q=m.exports.useTable({columns:J,data:V,initialState:{pageIndex:0,pageSize:50}},m.exports.useGlobalFilter,m.exports.useSortBy,m.exports.usePagination,m.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:n})=>l("div",{children:l(B,{...n()})}),Cell:({row:n})=>l("div",{children:l(B,{...n.getToggleRowSelectedProps()})})},...a])}),{getTableProps:z,getTableBodyProps:Q,headerGroups:K,footerGroups:ue,page:W,nextPage:X,previousPage:Y,canNextPage:k,canPreviousPage:N,pageOptions:H,state:Z,gotoPage:C,pageCount:R,setPageSize:w,setGlobalFilter:ee,prepareRow:ae}=q,{globalFilter:le,pageIndex:P,pageSize:te}=Z;return l(r,{children:d(j,{children:[d("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:u}),(o==null?void 0:o.createbankdetails)&&l(_,{to:g,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:x})]}),l("div",{className:"md:flex justify-end items-center mb-6",children:l(ce,{filter:le,setFilter:ee})}),l(re,{showModal:F,handleClose:O,loaderModal:T,linkedData:I,handleDeleteData:E,dataId:L,moduleName:"Bank Details"}),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"",children:d("table",{className:"min-w-[150%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...z,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:K.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>a.Header==="action"&&!((o==null?void 0:o.readbankdetails)===!0||(o==null?void 0:o.updatebankdetails)===!0||(o==null?void 0:o.deletebankdetails)===!0)?l("th",{}):d("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),l("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Q,children:W.map(e=>(ae(e),l("tr",{...e.getRowProps(),children:e.cells.map(a=>l("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))})))})]})})})}),d("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[d("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:te,onChange:e=>w(Number(e.target.value)),children:[50,100,200].map(e=>d("option",{value:e,children:["Show ",e]},e))}),d("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",d("span",{children:[P+1," of ",H.length]})]})]}),d("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${N?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>C(0),disabled:!N,children:l(v,{icon:"heroicons:chevron-double-left-solid"})})}),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${N?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Y(),disabled:!N,children:"Prev"})}),H.map((e,a)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${a===P?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>C(a),children:e+1})},a)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${k?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>X(),disabled:!k,children:"Next"})}),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>C(R-1),disabled:!k,className:` ${k?"":"opacity-50 cursor-not-allowed"}`,children:l(v,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},ve=()=>{const[u,x]=h.exports.useState([]),[g,p]=h.exports.useState(!1);h.exports.useEffect(()=>{p(!0),(async()=>{const o=await(await fetch("http://dev-rare.srp.ai/bankdetails")).json();x(o),p(!1)})()},[]);const b=async()=>{p(!0);const f=await(await fetch("http://dev-rare.srp.ai/bankdetails")).json();x(f),p(!1)};return l(r,{children:g===!1?l(r,{children:u!=null&&u.length?l("div",{className:" space-y-5",children:l(de,{pagelink:"/bankdetails-form",linktitle:"Add new Bank Details",title:"All Bank Details",allData:u,onDataUpdate:b})}):l(j,{children:d(r,{children:[d("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"All Bank Details"}),l(_,{to:"/bankdetails-form",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add new Bank Details"})]}),l("p",{children:"No Bank Details Found"})]})})}):l(se,{})})};export{ve as default};