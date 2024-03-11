import{R as p,j as e,F as N,r as v,b as d,c as s,f as S,I as o,D as j,q as G}from"./index.40803122.js";import{a as $}from"./table-data.5926aae5.js";import{G as I}from"./GlobalFilter.2b588451.js";import{E as q}from"./ExampleTwo.c6b4d327.js";import"./user-6.e3c6bad3.js";const D=[{Header:"Id",accessor:"id",Cell:a=>{var t;return e("span",{children:(t=a==null?void 0:a.cell)==null?void 0:t.value})}},{Header:"Order",accessor:"order",Cell:a=>{var t;return s("span",{children:["#",(t=a==null?void 0:a.cell)==null?void 0:t.value]})}},{Header:"customer",accessor:"customer",Cell:a=>{var t,n;return e("div",{children:s("span",{className:"inline-flex items-center",children:[e("span",{className:"w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none bg-slate-600",children:e("img",{src:(t=a==null?void 0:a.cell)==null?void 0:t.value.image,alt:"",className:"object-cover w-full h-full rounded-full"})}),e("span",{className:"text-sm text-slate-600 dark:text-slate-300 capitalize",children:(n=a==null?void 0:a.cell)==null?void 0:n.value.name})]})})}},{Header:"date",accessor:"date",Cell:a=>{var t;return e("span",{children:(t=a==null?void 0:a.cell)==null?void 0:t.value})}},{Header:"quantity",accessor:"quantity",Cell:a=>{var t;return e("span",{children:(t=a==null?void 0:a.cell)==null?void 0:t.value})}},{Header:"amount",accessor:"amount",Cell:a=>{var t;return e("span",{children:(t=a==null?void 0:a.cell)==null?void 0:t.value})}},{Header:"status",accessor:"status",Cell:a=>{var t,n,i,c;return e("span",{className:"block w-full",children:e("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=a==null?void 0:a.cell)==null?void 0:t.value)==="paid"?"text-success-500 bg-success-500":""} 
            ${((n=a==null?void 0:a.cell)==null?void 0:n.value)==="due"?"text-warning-500 bg-warning-500":""}
            ${((i=a==null?void 0:a.cell)==null?void 0:i.value)==="cancled"?"text-danger-500 bg-danger-500":""}
            
             `,children:(c=a==null?void 0:a.cell)==null?void 0:c.value})})}},{Header:"action",accessor:"action",Cell:a=>e("div",{children:e(j,{classMenuItems:"right-0 w-[140px] top-[110%] ",label:e("span",{className:"text-xl text-center block w-full",children:e(o,{icon:"heroicons-outline:dots-vertical"})}),children:e("div",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:E.map((t,n)=>e(G.Item,{children:s("div",{className:`
                
                  ${t.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30   hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer 
                   first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `,children:[e("span",{className:"text-base",children:e(o,{icon:t.icon})}),e("span",{children:t.name})]})},n))})})})}],E=[{name:"view",icon:"heroicons-outline:eye"},{name:"edit",icon:"heroicons:pencil-square"},{name:"delete",icon:"heroicons-outline:trash"}],f=p.forwardRef(({indeterminate:a,...t},n)=>{const i=p.useRef(),c=n||i;return p.useEffect(()=>{c.current.indeterminate=a},[c,a]),e(N,{children:e("input",{type:"checkbox",ref:c,...t,className:"table-checkbox"})})}),M=()=>{const a=v.exports.useMemo(()=>D,[]),t=v.exports.useMemo(()=>$,[]),n=d.exports.useTable({columns:a,data:t},d.exports.useGlobalFilter,d.exports.useSortBy,d.exports.usePagination,d.exports.useRowSelect,r=>{r.visibleColumns.push(l=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:u})=>e("div",{children:e(f,{...u()})}),Cell:({row:u})=>e("div",{children:e(f,{...u.getToggleRowSelectedProps()})})},...l])}),{getTableProps:i,getTableBodyProps:c,headerGroups:y,footerGroups:O,page:k,nextPage:C,previousPage:P,canNextPage:h,canPreviousPage:x,pageOptions:b,state:H,gotoPage:g,pageCount:z,setPageSize:B,setGlobalFilter:R,prepareRow:T}=n,{globalFilter:F,pageIndex:m,pageSize:A}=H;return e(N,{children:s(S,{noborder:!0,children:[s("div",{className:"md:flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:"Advanced Table"}),e("div",{children:e(I,{filter:F,setFilter:R})})]}),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:s("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...i,children:[e("thead",{className:" border-t border-slate-100 dark:border-slate-800",children:y.map(r=>e("tr",{...r.getHeaderGroupProps(),children:r.headers.map(l=>s("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:" table-th ",children:[l.render("Header"),e("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...c,children:k.map(r=>(T(r),e("tr",{...r.getRowProps(),children:r.cells.map(l=>e("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")}))})))})]})})})}),s("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[s("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[s("span",{className:" flex space-x-2  rtl:space-x-reverse items-center",children:[e("span",{className:" text-sm font-medium text-slate-600 dark:text-slate-300",children:"Go"}),e("span",{children:e("input",{type:"number",className:" form-control py-2",defaultValue:m+1,onChange:r=>{const l=r.target.value?Number(r.target.value)-1:0;g(l)},style:{width:"50px"}})})]}),s("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",s("span",{children:[m+1," of ",b.length]})]})]}),s("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${x?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>P(),disabled:!x,children:e(o,{icon:"heroicons-outline:chevron-left"})})}),b.map((r,l)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${l===m?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>g(l),children:r+1})},l)),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${h?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>C(),disabled:!h,children:e(o,{icon:"heroicons-outline:chevron-right"})})})]})]})]})})},Q=()=>s("div",{className:" space-y-5",children:[e(M,{}),e(q,{})]});export{Q as default};
