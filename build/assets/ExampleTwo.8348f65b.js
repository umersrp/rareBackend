import{R as p,j as e,F as C,r as y,b as d,e as A,L as I,I as s,T as b}from"./index.24cc54c4.js";import{G as L}from"./GlobalFilter.d512af61.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\table\\react-tables\\ExampleTwo.jsx";const Y=[{Header:"Id",accessor:"id",Cell:({row:i,flatRows:a})=>e("span",{children:a.indexOf(i)+1},void 0,!1,{fileName:l,lineNumber:21,columnNumber:14},void 0)},{Header:"Name",accessor:i=>`${i.firstname} ${i.lastname}`,Cell:i=>{var a;return e("span",{children:(a=i==null?void 0:i.cell)==null?void 0:a.value},void 0,!1,{fileName:l,lineNumber:28,columnNumber:14},void 0)}},{Header:"Email",accessor:"email",Cell:i=>{var a;return e("div",{children:e("span",{className:"inline-flex items-center",children:e("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(a=i==null?void 0:i.cell)==null?void 0:a.value},void 0,!1,{fileName:l,lineNumber:38,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:37,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:36,columnNumber:9},void 0)}},{Header:"date of birth",accessor:"datebirth",Cell:i=>{var a;return e("span",{children:new Date((a=i==null?void 0:i.cell)==null?void 0:a.value).toDateString()},void 0,!1,{fileName:l,lineNumber:50,columnNumber:14},void 0)}},{Header:"Age",accessor:"datebirth",id:"Age",Cell:i=>{var u;const a=new Date;let o=a==null?void 0:a.getFullYear();const n=new Date((u=i==null?void 0:i.cell)==null?void 0:u.value),m=n==null?void 0:n.getFullYear(),v=o-m;return e("span",{children:v},void 0,!1,{fileName:l,lineNumber:63,columnNumber:14},void 0)}},{Header:"status",accessor:"active",Cell:i=>{var a,o,n;return e("span",{className:"block w-full",children:e("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=i==null?void 0:i.cell)==null?void 0:a.value)===!0?"text-success-500 bg-success-500":""} 
            ${((o=i==null?void 0:i.cell)==null?void 0:o.value)===!1?"text-danger-500 bg-danger-500":""}
            
             `,children:((n=i==null?void 0:i.cell)==null?void 0:n.value)===!0?"Active":"unactive"},void 0,!1,{fileName:l,lineNumber:72,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:71,columnNumber:9},void 0)}},{Header:"Created at",accessor:"createdAt",Cell:i=>{var a;return e("span",{children:new Date((a=i==null?void 0:i.cell)==null?void 0:a.value).toDateString()},void 0,!1,{fileName:l,lineNumber:110,columnNumber:14},void 0)}},{Header:"action",accessor:"action",Cell:i=>e("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[e(b,{content:"Convert to customer",placement:"top",arrow:!0,animation:"shift-away",children:e("button",{className:"action-btn",type:"button",children:e(s,{icon:"heroicons:users"},void 0,!1,{fileName:l,lineNumber:121,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:120,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:119,columnNumber:11},void 0),e(b,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e("button",{className:"action-btn",type:"button",children:e(s,{icon:"heroicons:eye"},void 0,!1,{fileName:l,lineNumber:126,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:125,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:124,columnNumber:11},void 0),e(b,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e("button",{className:"action-btn",type:"button",children:e(s,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:l,lineNumber:131,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:130,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:129,columnNumber:11},void 0),e(b,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",children:e(s,{icon:"heroicons:trash"},void 0,!1,{fileName:l,lineNumber:142,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:141,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:134,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:118,columnNumber:9},void 0)}],k=p.forwardRef(({indeterminate:i,...a},o)=>{const n=p.useRef(),m=o||n;return p.useEffect(()=>{m.current.indeterminate=i},[m,i]),e(C,{children:e("input",{type:"checkbox",ref:m,...a,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:162,columnNumber:9},void 0)},void 0,!1)}),V=({title:i,linktitle:a,pagelink:o,allCustomers:n})=>{const m=y.exports.useMemo(()=>Y,[]),v=y.exports.useMemo(()=>n),u=d.exports.useTable({columns:m,data:v},d.exports.useGlobalFilter,d.exports.useSortBy,d.exports.usePagination,d.exports.useRowSelect,r=>{r.visibleColumns.push(t=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:h})=>e("div",{children:e(k,{...h()},void 0,!1,{fileName:l,lineNumber:199,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:198,columnNumber:13},void 0),Cell:({row:h})=>e("div",{children:e(k,{...h.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:204,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:203,columnNumber:13},void 0)},...t])}),{getTableProps:P,getTableBodyProps:F,headerGroups:H,footerGroups:B,page:R,nextPage:D,previousPage:S,canNextPage:c,canPreviousPage:N,pageOptions:x,state:T,gotoPage:f,pageCount:j,setPageSize:$,setGlobalFilter:E,prepareRow:w}=u,{globalFilter:G,pageIndex:g,pageSize:O}=T;return e(C,{children:e(A,{children:[e("div",{className:"md:flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:i},void 0,!1,{fileName:l,lineNumber:241,columnNumber:11},void 0),e(I,{to:o,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:a},void 0,!1,{fileName:l,lineNumber:242,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:240,columnNumber:9},void 0),e("div",{className:"md:flex justify-end items-center mb-6",children:e(L,{filter:G,setFilter:E},void 0,!1,{fileName:l,lineNumber:245,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:244,columnNumber:9},void 0),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...P,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:H.map(r=>e("tr",{...r.getHeaderGroupProps(),children:r.headers.map(t=>e("th",{...t.getHeaderProps(t.getSortByToggleProps()),scope:"col",className:" table-th ",children:[t.render("Header"),e("span",{children:t.isSorted?t.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:266,columnNumber:27},void 0)]},void 0,!0,{fileName:l,lineNumber:258,columnNumber:25},void 0))},void 0,!1,{fileName:l,lineNumber:256,columnNumber:21},void 0))},void 0,!1,{fileName:l,lineNumber:254,columnNumber:17},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...F,children:R.map(r=>(w(r),e("tr",{...r.getRowProps(),children:r.cells.map(t=>e("td",{...t.getCellProps(),className:"table-td",children:t.render("Cell")},void 0,!1,{fileName:l,lineNumber:288,columnNumber:29},void 0))},void 0,!1,{fileName:l,lineNumber:285,columnNumber:23},void 0)))},void 0,!1,{fileName:l,lineNumber:278,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:250,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:249,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:248,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:247,columnNumber:9},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[e("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:O,onChange:r=>$(Number(r.target.value)),children:[10,25,50].map(r=>e("option",{value:r,children:["Show ",r]},r,!0,{fileName:l,lineNumber:323,columnNumber:17},void 0))},void 0,!1,{fileName:l,lineNumber:317,columnNumber:13},void 0),e("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",e("span",{children:[g+1," of ",x.length]},void 0,!0,{fileName:l,lineNumber:330,columnNumber:15},void 0)]},void 0,!0,{fileName:l,lineNumber:328,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:316,columnNumber:11},void 0),e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${N?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>f(0),disabled:!N,children:e(s,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:l,lineNumber:343,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:337,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:336,columnNumber:13},void 0),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${N?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>S(),disabled:!N,children:"Prev"},void 0,!1,{fileName:l,lineNumber:347,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:346,columnNumber:13},void 0),x.map((r,t)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${t===g?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>f(t),children:r+1},void 0,!1,{fileName:l,lineNumber:358,columnNumber:17},void 0)},t,!1,{fileName:l,lineNumber:357,columnNumber:15},void 0)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${c?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>D(),disabled:!c,children:"Next"},void 0,!1,{fileName:l,lineNumber:372,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:371,columnNumber:13},void 0),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>f(j-1),disabled:!c,className:` ${c?"":"opacity-50 cursor-not-allowed"}`,children:e(s,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:l,lineNumber:388,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:382,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:381,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:335,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:315,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:239,columnNumber:7},void 0)},void 0,!1)};export{V as E};
