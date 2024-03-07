import{R as f,j as e,F as C,r as y,b as o,c as n,f as I,L as Y,I as d,T as p}from"./index.aff5cc02.js";import{G as B}from"./GlobalFilter.8aa4efff.js";const L=[{Header:"Id",accessor:"id",Cell:({row:t,flatRows:a})=>e("span",{children:a.indexOf(t)+1})},{Header:"Name",accessor:t=>`${t.firstname} ${t.lastname}`,Cell:t=>{var a;return e("span",{children:(a=t==null?void 0:t.cell)==null?void 0:a.value})}},{Header:"Email",accessor:"email",Cell:t=>{var a;return e("div",{children:e("span",{className:"inline-flex items-center",children:e("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(a=t==null?void 0:t.cell)==null?void 0:a.value})})})}},{Header:"date of birth",accessor:"datebirth",Cell:t=>{var a;return e("span",{children:new Date((a=t==null?void 0:t.cell)==null?void 0:a.value).toDateString()})}},{Header:"Age",accessor:"datebirth",id:"Age",Cell:t=>{var m;const a=new Date;let c=a==null?void 0:a.getFullYear();const r=new Date((m=t==null?void 0:t.cell)==null?void 0:m.value),i=r==null?void 0:r.getFullYear(),x=c-i;return e("span",{children:x})}},{Header:"status",accessor:"active",Cell:t=>{var a,c,r;return e("span",{className:"block w-full",children:e("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=t==null?void 0:t.cell)==null?void 0:a.value)===!0?"text-success-500 bg-success-500":""} 
            ${((c=t==null?void 0:t.cell)==null?void 0:c.value)===!1?"text-danger-500 bg-danger-500":""}
            
             `,children:((r=t==null?void 0:t.cell)==null?void 0:r.value)===!0?"Active":"unactive"})})}},{Header:"Created at",accessor:"createdAt",Cell:t=>{var a;return e("span",{children:new Date((a=t==null?void 0:t.cell)==null?void 0:a.value).toDateString()})}},{Header:"action",accessor:"action",Cell:t=>n("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[e(p,{content:"Convert to customer",placement:"top",arrow:!0,animation:"shift-away",children:e("button",{className:"action-btn",type:"button",children:e(d,{icon:"heroicons:users"})})}),e(p,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e("button",{className:"action-btn",type:"button",children:e(d,{icon:"heroicons:eye"})})}),e(p,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e("button",{className:"action-btn",type:"button",children:e(d,{icon:"heroicons:pencil-square"})})}),e(p,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",children:e(d,{icon:"heroicons:trash"})})})]})}],k=f.forwardRef(({indeterminate:t,...a},c)=>{const r=f.useRef(),i=c||r;return f.useEffect(()=>{i.current.indeterminate=t},[i,t]),e(C,{children:e("input",{type:"checkbox",ref:i,...a,className:"table-checkbox"})})}),U=({title:t,linktitle:a,pagelink:c,allCustomers:r})=>{const i=y.exports.useMemo(()=>L,[]),x=y.exports.useMemo(()=>r),m=o.exports.useTable({columns:i,data:x},o.exports.useGlobalFilter,o.exports.useSortBy,o.exports.usePagination,o.exports.useRowSelect,l=>{l.visibleColumns.push(s=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:g})=>e("div",{children:e(k,{...g()})}),Cell:({row:g})=>e("div",{children:e(k,{...g.getToggleRowSelectedProps()})})},...s])}),{getTableProps:P,getTableBodyProps:H,headerGroups:F,footerGroups:M,page:R,nextPage:S,previousPage:T,canNextPage:h,canPreviousPage:u,pageOptions:v,state:$,gotoPage:b,pageCount:D,setPageSize:j,setGlobalFilter:w,prepareRow:G}=m,{globalFilter:E,pageIndex:N,pageSize:A}=$;return e(C,{children:n(I,{children:[n("div",{className:"md:flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:t}),e(Y,{to:c,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:a})]}),e("div",{className:"md:flex justify-end items-center mb-6",children:e(B,{filter:E,setFilter:w})}),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:n("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...P,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:F.map(l=>e("tr",{...l.getHeaderGroupProps(),children:l.headers.map(s=>n("th",{...s.getHeaderProps(s.getSortByToggleProps()),scope:"col",className:" table-th ",children:[s.render("Header"),e("span",{children:s.isSorted?s.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...H,children:R.map(l=>(G(l),e("tr",{...l.getRowProps(),children:l.cells.map(s=>e("td",{...s.getCellProps(),className:"table-td",children:s.render("Cell")}))})))})]})})})}),n("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[n("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:A,onChange:l=>j(Number(l.target.value)),children:[10,25,50].map(l=>n("option",{value:l,children:["Show ",l]},l))}),n("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",n("span",{children:[N+1," of ",v.length]})]})]}),n("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${u?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>b(0),disabled:!u,children:e(d,{icon:"heroicons:chevron-double-left-solid"})})}),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${u?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>T(),disabled:!u,children:"Prev"})}),v.map((l,s)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${s===N?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>b(s),children:l+1})},s)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${h?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>S(),disabled:!h,children:"Next"})}),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>b(D-1),disabled:!h,className:` ${h?"":"opacity-50 cursor-not-allowed"}`,children:e(d,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})};export{U as E};
