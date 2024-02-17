import{R as D,j as t,F as H,bL as I,r as i,b as g,c,C as ce,L as S,bM as ie,I as u,K as de,T as y,bN as re}from"./index.75075c2e.js";import{G as ue}from"./GlobalFilter.472d6507.js";const T=D.forwardRef(({indeterminate:o,...p},x)=>{const d=D.useRef(),h=x||d;return D.useEffect(()=>{h.current.indeterminate=o},[h,o]),t(H,{children:t("input",{type:"checkbox",ref:h,...p,className:"table-checkbox"})})}),oe=({title:o,linktitle:p,pagelink:x,allCustomers:d,onDataUpdate:h})=>{const k=localStorage.getItem("isAuth"),v=JSON.parse(k),{data:s}=I(v==null?void 0:v.roleid),[_,P]=i.exports.useState(!1),[j,pe]=i.exports.useState(!1),[G,he]=i.exports.useState(""),[O,B]=i.exports.useState(""),E=async e=>{P(!0),B(e)},U=()=>{P(!1)},V=async e=>{try{await de.patch("http://dev-rare.srp.ai/users/api/specific/userupdate",{_id:e,softdelete:!0}),h()}catch(a){console.log(a,"error")}},Y=[{Header:"Id",accessor:"id",Cell:({row:e,flatRows:a})=>t("span",{children:a.indexOf(e)+1})},{Header:"Name",accessor:e=>`${e.firstname} ${e.lastname}`,Cell:e=>{var a;return t("span",{children:(a=e==null?void 0:e.cell)==null?void 0:a.value})}},{Header:"Email",accessor:"email",Cell:e=>{var a;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(a=e==null?void 0:e.cell)==null?void 0:a.value})})})}},{Header:"date of birth",accessor:"datebirth",Cell:e=>{var a,l;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})}},{Header:"Age",accessor:"datebirth",id:"Age",Cell:e=>{var $,F;const a=new Date,l=a.getFullYear(),n=new Date(($=e==null?void 0:e.cell)==null?void 0:$.value),m=n.getFullYear(),r=n.getMonth(),A=n.getDate();let f=l-m;return(r>a.getMonth()||r===a.getMonth()&&A>a.getDate())&&f--,t("span",{children:(F=e==null?void 0:e.cell)!=null&&F.value?f:"Not Available"})}},{Header:"Assigned Agent",accessor:"employee_email",Cell:e=>{var a,l;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})})})}},{Header:"contact no",accessor:"contactno",Cell:e=>{var a,l;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})})})}},{Header:"Nationality",accessor:"passportno",Cell:e=>{var a,l;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})})})}},{Header:"Check-In Date",accessor:"checkindate",Cell:e=>{var a,l;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})})})}},{Header:"Check-Out Date",accessor:"checkoutdate",Cell:e=>{var a,l;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})})})}},{Header:"location",accessor:"location",Cell:e=>{var a,l,n,m,r;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=e==null?void 0:e.cell)==null?void 0:a.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)!==""?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((n=e==null?void 0:e.cell)==null?void 0:n.value)&&((m=e==null?void 0:e.cell)==null?void 0:m.value)!==""?c("a",{className:"flex gap-x-[5px] items-center",href:(r=e==null?void 0:e.cell)==null?void 0:r.value,target:"_blank",children:[t(u,{icon:"heroicons-outline:eye"}),"View Location"]}):"Not Available"})})}},{Header:"No.Of Guests",accessor:"no_guests",Cell:e=>{var a,l;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})})})}},{Header:"Lead Status",accessor:"lead_status",Cell:e=>{var a,l;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(a=e==null?void 0:e.cell)!=null&&a.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})})})}},{Header:"status",accessor:"active",Cell:e=>{var a,l,n;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=e==null?void 0:e.cell)==null?void 0:a.value)===!0?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} 
              ${((l=e==null?void 0:e.cell)==null?void 0:l.value)===!1?"text-danger-500 bg-danger-500":""}
              
               `,children:((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?"Active":"In Active"})})}},{Header:"created-by",accessor:"employee_email_createdBy",Cell:e=>{var a,l;return t("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var a,l;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"updated-by",accessor:"employee_email_updatedBy",Cell:e=>{var a,l;return t("span",{className:"normal-case",children:(a=e==null?void 0:e.cell)!=null&&a.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"})}},{Header:"updated-on",accessor:"updatedAt",Cell:e=>{var a,l;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const a=localStorage.getItem("isAuth"),l=JSON.parse(a),{data:n}=I(l==null?void 0:l.roleid);if(!n)return null;const m=(n==null?void 0:n.convertocustomer)===!0,r=(n==null?void 0:n.readlead)===!0,A=(n==null?void 0:n.updatelead)===!0,f=(n==null?void 0:n.deletelead)===!0;return c("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[m&&t(y,{content:"Convert to customer",placement:"top",arrow:!0,animation:"shift-away",children:t("button",{className:"action-btn",type:"button",children:t(u,{icon:"heroicons:users"})})}),r&&t(y,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:t(S,{to:`/view-leads/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:t(u,{icon:"heroicons:eye"})})}),A&&t(y,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:t(S,{to:`/update-leads/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:t(u,{icon:"heroicons:pencil-square"})})}),f&&t(y,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:t("button",{className:"action-btn",type:"button",onClick:()=>E(e==null?void 0:e.cell.value),children:t(u,{icon:"heroicons:trash"})})})]})}}],J=i.exports.useMemo(()=>Y,[]),q=i.exports.useMemo(()=>d),z=g.exports.useTable({columns:J,data:q,initialState:{pageIndex:0,pageSize:50}},g.exports.useGlobalFilter,g.exports.useSortBy,g.exports.usePagination,g.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:l})=>t("div",{children:t(T,{...l()})}),Cell:({row:l})=>t("div",{children:t(T,{...l.getToggleRowSelectedProps()})})},...a])}),{getTableProps:K,getTableBodyProps:Q,headerGroups:W,footerGroups:me,page:X,nextPage:Z,previousPage:R,canNextPage:b,canPreviousPage:N,pageOptions:L,state:w,gotoPage:C,pageCount:ee,setPageSize:te,setGlobalFilter:ae,prepareRow:le}=z,{globalFilter:se,pageIndex:M,pageSize:ne}=w;return t(H,{children:c(ce,{children:[c("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:o}),(s==null?void 0:s.createlead)===!0?t(S,{to:x,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:p}):null]}),t("div",{className:"md:flex justify-end items-center mb-6",children:t(ue,{filter:se,setFilter:ae})}),t(ie,{showModal:_,handleClose:U,loaderModal:j,linkedData:G,handleDeleteData:V,dataId:O,moduleName:"Lead"}),t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:" ",children:c("table",{className:"min-w-[140%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...K,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:W.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>a.Header==="action"&&!((s==null?void 0:s.convertocustomer)===!0||(s==null?void 0:s.readlead)===!0||(s==null?void 0:s.updatelead)===!0||(s==null?void 0:s.deletelead)===!0)?t("th",{}):c("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),t("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Q,children:X.map(e=>(le(e),t("tr",{...e.getRowProps(),children:e.cells.map(a=>t("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))})))})]})})})}),c("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[c("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[t("select",{className:"form-control py-2 w-max",value:ne,onChange:e=>te(Number(e.target.value)),children:[10,25,50].map(e=>c("option",{value:e,children:["Show ",e]},e))}),c("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",c("span",{children:[M+1," of ",L.length]})]})]}),c("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${N?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>C(0),disabled:!N,children:t(u,{icon:"heroicons:chevron-double-left-solid"})})}),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${N?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>R(),disabled:!N,children:"Prev"})}),L.map((e,a)=>t("li",{children:t("button",{href:"#","aria-current":"page",className:` ${a===M?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>C(a),children:e+1})},a)),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${b?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Z(),disabled:!b,children:"Next"})}),t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{onClick:()=>C(ee-1),disabled:!b,className:` ${b?"":"opacity-50 cursor-not-allowed"}`,children:t(u,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},ge=()=>{const[o,p]=i.exports.useState([]),[x,d]=i.exports.useState(!1);return i.exports.useEffect(()=>{d(!0),(async()=>{const s=await(await fetch("http://dev-rare.srp.ai/users/api/customer/withoutdate?sort=descending&type=lead&page=0&perPage=all")).json();p(s==null?void 0:s.users),d(!1)})()},[]),t(H,{children:x===!1?t("div",{className:" space-y-5",children:t(oe,{pagelink:"/add-leads",linktitle:"Add new Lead",title:"All Leads",allCustomers:o,onDataUpdate:()=>{d(!0),(async()=>{const s=await(await fetch("http://dev-rare.srp.ai/users/api/customer/withoutdate?sort=descending&type=lead&page=0&perPage=all")).json();p(s==null?void 0:s.users),d(!1)})()}})}):t(re,{})})};export{ge as default};
