import{R as A,j as l,F as c,bL as j,r as m,b as x,e as F,L as y,bM as re,I as g,M as oe,T as S,bN as se}from"./index.be4bdfd6.js";import{G as ce}from"./GlobalFilter.5c77a0d6.js";var i="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\customer-management\\BankDetails\\BankDetailsTable.jsx";const B=A.forwardRef(({indeterminate:u,...f},p)=>{const N=A.useRef(),v=p||N;return A.useEffect(()=>{v.current.indeterminate=u},[v,u]),l(c,{children:l("input",{type:"checkbox",ref:v,...f,className:"table-checkbox"},void 0,!1,{fileName:i,lineNumber:29,columnNumber:17},void 0)},void 0,!1)}),te=({title:u,linktitle:f,pagelink:p,allData:N,onDataUpdate:v})=>{const C=localStorage.getItem("isAuth"),h=JSON.parse(C),{data:d}=j(h==null?void 0:h.roleid),[L,H]=m.exports.useState(!1),[M,de]=m.exports.useState(!1),[T,ue]=m.exports.useState(""),[O,I]=m.exports.useState(""),E=async e=>{H(!0),I(e)},G=()=>{H(!1)},U=async e=>{try{await oe.patch("http://dev-rare.srp.ai/bankdetails/api/softdelete",{_id:e,softdelete:!0}),v()}catch(a){console.log(a,"error")}},V=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>l("span",{children:a.indexOf(e)+1},void 0,!1,{fileName:i,lineNumber:73,columnNumber:24},void 0)},{Header:"customer name",accessor:"customer_name",Cell:e=>{var a,r;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(r=e==null?void 0:e.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:i,lineNumber:80,columnNumber:24},void 0)}},{Header:"customer email",accessor:"customer_email",Cell:e=>{var a,r;return l("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(r=e==null?void 0:e.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:i,lineNumber:87,columnNumber:24},void 0)}},{Header:"customer mobile no.",accessor:"customer_mobilenumber",Cell:e=>{var a,r;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(r=e==null?void 0:e.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:i,lineNumber:94,columnNumber:24},void 0)}},{Header:"account title",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.account_title}`},Cell:e=>{var a,r,o,s;return l(c,{children:(s=(o=(r=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:r.original)==null?void 0:o.all_accounts)==null?void 0:s.map((n,t)=>l(c,{children:[l("span",{children:n!=null&&n.account_title?n==null?void 0:n.account_title:"Not Available"},t+1,!1,{fileName:i,lineNumber:107,columnNumber:37},void 0)," ",l("br",{},void 0,!1,{fileName:i,lineNumber:107,columnNumber:128},void 0)]},void 0,!0))},void 0,!1)}},{Header:"bank name",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.bank_name}`},Cell:e=>{var a,r,o,s;return l(c,{children:(s=(o=(r=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:r.original)==null?void 0:o.all_accounts)==null?void 0:s.map((n,t)=>l(c,{children:[l("span",{children:n!=null&&n.bank_name?n==null?void 0:n.bank_name:"Not Available"},t+1,!1,{fileName:i,lineNumber:124,columnNumber:37},void 0)," ",l("br",{},void 0,!1,{fileName:i,lineNumber:124,columnNumber:120},void 0)]},void 0,!0))},void 0,!1)}},{Header:"branch name",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.branch_name}`},Cell:e=>{var a,r,o,s;return l(c,{children:(s=(o=(r=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:r.original)==null?void 0:o.all_accounts)==null?void 0:s.map((n,t)=>l(c,{children:[l("span",{children:n!=null&&n.branch_name?n==null?void 0:n.branch_name:"Not Available"},t+1,!1,{fileName:i,lineNumber:141,columnNumber:37},void 0)," ",l("br",{},void 0,!1,{fileName:i,lineNumber:141,columnNumber:124},void 0)]},void 0,!0))},void 0,!1)}},{Header:"country",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.country}`},Cell:e=>{var a,r,o,s;return l(c,{children:(s=(o=(r=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:r.original)==null?void 0:o.all_accounts)==null?void 0:s.map((n,t)=>l(c,{children:[l("span",{children:n!=null&&n.country?n==null?void 0:n.country:"Not Available"},t+1,!1,{fileName:i,lineNumber:158,columnNumber:37},void 0)," ",l("br",{},void 0,!1,{fileName:i,lineNumber:158,columnNumber:116},void 0)]},void 0,!0))},void 0,!1)}},{Header:"branch code",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.branch_code}`},Cell:e=>{var a,r,o,s;return l(c,{children:(s=(o=(r=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:r.original)==null?void 0:o.all_accounts)==null?void 0:s.map((n,t)=>l(c,{children:[l("span",{children:n!=null&&n.branch_code?n==null?void 0:n.branch_code:"Not Available"},t+1,!1,{fileName:i,lineNumber:175,columnNumber:37},void 0)," ",l("br",{},void 0,!1,{fileName:i,lineNumber:175,columnNumber:124},void 0)]},void 0,!0))},void 0,!1)}},{Header:"swift code",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.swift_code}`},Cell:e=>{var a,r,o,s;return l(c,{children:(s=(o=(r=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:r.original)==null?void 0:o.all_accounts)==null?void 0:s.map((n,t)=>l(c,{children:[l("span",{children:n!=null&&n.swift_code?n==null?void 0:n.swift_code:"Not Available"},t+1,!1,{fileName:i,lineNumber:192,columnNumber:37},void 0)," ",l("br",{},void 0,!1,{fileName:i,lineNumber:192,columnNumber:122},void 0)]},void 0,!0))},void 0,!1)}},{Header:"account number",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.account_number}`},Cell:e=>{var a,r,o,s;return l(c,{children:(s=(o=(r=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:r.original)==null?void 0:o.all_accounts)==null?void 0:s.map((n,t)=>l(c,{children:[l("span",{children:n!=null&&n.account_number?n==null?void 0:n.account_number:"Not Available"},t+1,!1,{fileName:i,lineNumber:209,columnNumber:37},void 0)," ",l("br",{},void 0,!1,{fileName:i,lineNumber:209,columnNumber:130},void 0)]},void 0,!0))},void 0,!1)}},{Header:"currency name",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.currency_name}`},Cell:e=>{var a,r,o,s;return l(c,{children:(s=(o=(r=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:r.original)==null?void 0:o.all_accounts)==null?void 0:s.map((n,t)=>l(c,{children:[l("span",{children:n!=null&&n.currency_name?n==null?void 0:n.currency_name:"Not Available"},t+1,!1,{fileName:i,lineNumber:226,columnNumber:37},void 0)," ",l("br",{},void 0,!1,{fileName:i,lineNumber:226,columnNumber:128},void 0)]},void 0,!0))},void 0,!1)}},{Header:"iban number",accessor:e=>{var a;return`${(a=e.all_accounts)==null?void 0:a.iban_number}`},Cell:e=>{var a,r,o,s;return l(c,{children:(s=(o=(r=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:r.original)==null?void 0:o.all_accounts)==null?void 0:s.map((n,t)=>l(c,{children:[l("span",{children:n!=null&&n.iban_number?n==null?void 0:n.iban_number:"Not Available"},t+1,!1,{fileName:i,lineNumber:243,columnNumber:37},void 0)," ",l("br",{},void 0,!1,{fileName:i,lineNumber:243,columnNumber:124},void 0)]},void 0,!0))},void 0,!1)}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var a,r;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((r=e==null?void 0:e.cell)==null?void 0:r.value).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:255,columnNumber:24},void 0)}},{Header:"updated-on",accessor:"updatedAt",Cell:e=>{var a,r;return l("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((r=e==null?void 0:e.cell)==null?void 0:r.value).toDateString():"Not Available"},void 0,!1,{fileName:i,lineNumber:262,columnNumber:24},void 0)}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const a=localStorage.getItem("isAuth"),r=JSON.parse(a),{data:o}=j(r==null?void 0:r.roleid);if(!o)return null;const s=(o==null?void 0:o.readbankdetails)===!0,n=(o==null?void 0:o.updatebankdetails)===!0,t=(o==null?void 0:o.deletebankdetails)===!0;return l("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[s&&l(S,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(y,{className:"action-btn",to:"#",type:"button",children:l(g,{icon:"heroicons:eye"},void 0,!1,{fileName:i,lineNumber:288,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:287,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:286,columnNumber:33},void 0),n&&l(S,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:l(y,{to:`/bankdetails-form/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l(g,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:i,lineNumber:297,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:296,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:295,columnNumber:33},void 0),t&&l(S,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",onClick:()=>E(e==null?void 0:e.cell.value),children:l(g,{icon:"heroicons:trash"},void 0,!1,{fileName:i,lineNumber:312,columnNumber:41},void 0)},void 0,!1,{fileName:i,lineNumber:311,columnNumber:37},void 0)},void 0,!1,{fileName:i,lineNumber:304,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:283,columnNumber:21},void 0)}}],J=m.exports.useMemo(()=>V,[]),q=m.exports.useMemo(()=>N),z=x.exports.useTable({columns:J,data:q,initialState:{pageIndex:0,pageSize:50}},x.exports.useGlobalFilter,x.exports.useSortBy,x.exports.usePagination,x.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:r})=>l("div",{children:l(B,{...r()},void 0,!1,{fileName:i,lineNumber:343,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:342,columnNumber:25},void 0),Cell:({row:r})=>l("div",{children:l(B,{...r.getToggleRowSelectedProps()},void 0,!1,{fileName:i,lineNumber:348,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:347,columnNumber:25},void 0)},...a])}),{getTableProps:Q,getTableBodyProps:K,headerGroups:R,footerGroups:me,page:W,nextPage:X,previousPage:Y,canNextPage:k,canPreviousPage:_,pageOptions:P,state:Z,gotoPage:D,pageCount:w,setPageSize:ee,setGlobalFilter:le,prepareRow:ae}=z,{globalFilter:ie,pageIndex:$,pageSize:ne}=Z;return l(c,{children:l(F,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:u},void 0,!1,{fileName:i,lineNumber:380,columnNumber:21},void 0),(d==null?void 0:d.createbankdetails)&&l(y,{to:p,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:f},void 0,!1,{fileName:i,lineNumber:383,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:379,columnNumber:17},void 0),l("div",{className:"md:flex justify-end items-center mb-6",children:l(ce,{filter:ie,setFilter:le},void 0,!1,{fileName:i,lineNumber:388,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:387,columnNumber:17},void 0),l(re,{showModal:L,handleClose:G,loaderModal:M,linkedData:T,handleDeleteData:U,dataId:O,moduleName:"Bank Details"},void 0,!1,{fileName:i,lineNumber:390,columnNumber:17},void 0),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"",children:l("table",{className:"min-w-[150%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Q,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:R.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>a.Header==="action"&&!((d==null?void 0:d.readbankdetails)===!0||(d==null?void 0:d.updatebankdetails)===!0||(d==null?void 0:d.deletebankdetails)===!0)?l("th",{},void 0,!1,{fileName:i,lineNumber:407,columnNumber:60},void 0):l("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),l("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:i,lineNumber:417,columnNumber:57},void 0)]},void 0,!0,{fileName:i,lineNumber:411,columnNumber:53},void 0))},void 0,!1,{fileName:i,lineNumber:400,columnNumber:41},void 0))},void 0,!1,{fileName:i,lineNumber:398,columnNumber:33},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...K,children:W.map(e=>(ae(e),l("tr",{...e.getRowProps(),children:e.cells.map(a=>l("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:i,lineNumber:436,columnNumber:57},void 0))},void 0,!1,{fileName:i,lineNumber:433,columnNumber:45},void 0)))},void 0,!1,{fileName:i,lineNumber:426,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:394,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:393,columnNumber:25},void 0)},void 0,!1,{fileName:i,lineNumber:392,columnNumber:21},void 0)},void 0,!1,{fileName:i,lineNumber:391,columnNumber:17},void 0),l("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[l("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:ne,onChange:e=>ee(Number(e.target.value)),children:[50,100,200].map(e=>l("option",{value:e,children:["Show ",e]},e,!0,{fileName:i,lineNumber:457,columnNumber:33},void 0))},void 0,!1,{fileName:i,lineNumber:451,columnNumber:25},void 0),l("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",l("span",{children:[$+1," of ",P.length]},void 0,!0,{fileName:i,lineNumber:464,columnNumber:29},void 0)]},void 0,!0,{fileName:i,lineNumber:462,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:450,columnNumber:21},void 0),l("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${_?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>D(0),disabled:!_,children:l(g,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:i,lineNumber:477,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:471,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:470,columnNumber:25},void 0),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${_?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Y(),disabled:!_,children:"Prev"},void 0,!1,{fileName:i,lineNumber:481,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:480,columnNumber:25},void 0),P.map((e,a)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${a===$?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>D(a),children:e+1},void 0,!1,{fileName:i,lineNumber:492,columnNumber:33},void 0)},a,!1,{fileName:i,lineNumber:491,columnNumber:29},void 0)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${k?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>X(),disabled:!k,children:"Next"},void 0,!1,{fileName:i,lineNumber:506,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:505,columnNumber:25},void 0),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>D(w-1),disabled:!k,className:` ${k?"":"opacity-50 cursor-not-allowed"}`,children:l(g,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:i,lineNumber:522,columnNumber:33},void 0)},void 0,!1,{fileName:i,lineNumber:516,columnNumber:29},void 0)},void 0,!1,{fileName:i,lineNumber:515,columnNumber:25},void 0)]},void 0,!0,{fileName:i,lineNumber:469,columnNumber:21},void 0)]},void 0,!0,{fileName:i,lineNumber:449,columnNumber:17},void 0)]},void 0,!0,{fileName:i,lineNumber:378,columnNumber:13},void 0)},void 0,!1)};var b="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\customer-management\\BankDetails\\AllBankDetails.jsx";const ve=()=>{const[u,f]=m.exports.useState([]),[p,N]=m.exports.useState(!1);m.exports.useEffect(()=>{N(!0),(async()=>{const d=await(await fetch("http://dev-rare.srp.ai/bankdetails")).json();f(d),N(!1)})()},[]);const v=async()=>{N(!0);const h=await(await fetch("http://dev-rare.srp.ai/bankdetails")).json();f(h),N(!1)};return l(c,{children:p===!1?l(c,{children:u!=null&&u.length?l("div",{className:" space-y-5",children:l(te,{pagelink:"/bankdetails-form",linktitle:"Add new Bank Details",title:"All Bank Details",allData:u,onDataUpdate:v},void 0,!1,{fileName:b,lineNumber:37,columnNumber:37},void 0)},void 0,!1,{fileName:b,lineNumber:36,columnNumber:33},void 0):l(F,{children:l(c,{children:[l("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:"All Bank Details"},void 0,!1,{fileName:b,lineNumber:42,columnNumber:45},void 0),l(y,{to:"/bankdetails-form",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add new Bank Details"},void 0,!1,{fileName:b,lineNumber:43,columnNumber:45},void 0)]},void 0,!0,{fileName:b,lineNumber:41,columnNumber:41},void 0),l("p",{children:"No Bank Details Found"},void 0,!1,{fileName:b,lineNumber:45,columnNumber:41},void 0)]},void 0,!0)},void 0,!1,{fileName:b,lineNumber:39,columnNumber:33},void 0)},void 0,!1):l(se,{},void 0,!1,{fileName:b,lineNumber:50,columnNumber:27},void 0)},void 0,!1)};export{ve as default};
