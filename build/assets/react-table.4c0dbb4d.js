import{R as N,j as e,F as y,r as x,b as o,e as O,I as d,D as S,q as E}from"./index.cef99591.js";import{a as $}from"./table-data.399ef5bd.js";import{G as D}from"./GlobalFilter.52bc46cc.js";import{E as G}from"./ExampleTwo.9a7fc71d.js";import"./user-6.e3c6bad3.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\table\\react-tables\\ExampleOne.jsx";const I=[{Header:"Id",accessor:"id",Cell:i=>{var a;return e("span",{children:(a=i==null?void 0:i.cell)==null?void 0:a.value},void 0,!1,{fileName:l,lineNumber:21,columnNumber:14},void 0)}},{Header:"Order",accessor:"order",Cell:i=>{var a;return e("span",{children:["#",(a=i==null?void 0:i.cell)==null?void 0:a.value]},void 0,!0,{fileName:l,lineNumber:28,columnNumber:14},void 0)}},{Header:"customer",accessor:"customer",Cell:i=>{var a,n;return e("div",{children:e("span",{className:"inline-flex items-center",children:[e("span",{className:"w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none bg-slate-600",children:e("img",{src:(a=i==null?void 0:i.cell)==null?void 0:a.value.image,alt:"",className:"object-cover w-full h-full rounded-full"},void 0,!1,{fileName:l,lineNumber:39,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:38,columnNumber:13},void 0),e("span",{className:"text-sm text-slate-600 dark:text-slate-300 capitalize",children:(n=i==null?void 0:i.cell)==null?void 0:n.value.name},void 0,!1,{fileName:l,lineNumber:45,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:37,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:36,columnNumber:9},void 0)}},{Header:"date",accessor:"date",Cell:i=>{var a;return e("span",{children:(a=i==null?void 0:i.cell)==null?void 0:a.value},void 0,!1,{fileName:l,lineNumber:57,columnNumber:14},void 0)}},{Header:"quantity",accessor:"quantity",Cell:i=>{var a;return e("span",{children:(a=i==null?void 0:i.cell)==null?void 0:a.value},void 0,!1,{fileName:l,lineNumber:64,columnNumber:14},void 0)}},{Header:"amount",accessor:"amount",Cell:i=>{var a;return e("span",{children:(a=i==null?void 0:i.cell)==null?void 0:a.value},void 0,!1,{fileName:l,lineNumber:71,columnNumber:14},void 0)}},{Header:"status",accessor:"status",Cell:i=>{var a,n,t,s;return e("span",{className:"block w-full",children:e("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=i==null?void 0:i.cell)==null?void 0:a.value)==="paid"?"text-success-500 bg-success-500":""} 
            ${((n=i==null?void 0:i.cell)==null?void 0:n.value)==="due"?"text-warning-500 bg-warning-500":""}
            ${((t=i==null?void 0:i.cell)==null?void 0:t.value)==="cancled"?"text-danger-500 bg-danger-500":""}
            
             `,children:(s=i==null?void 0:i.cell)==null?void 0:s.value},void 0,!1,{fileName:l,lineNumber:80,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:79,columnNumber:9},void 0)}},{Header:"action",accessor:"action",Cell:i=>e("div",{children:e(S,{classMenuItems:"right-0 w-[140px] top-[110%] ",label:e("span",{className:"text-xl text-center block w-full",children:e(d,{icon:"heroicons-outline:dots-vertical"},void 0,!1,{fileName:l,lineNumber:115,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:114,columnNumber:15},void 0),children:e("div",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:q.map((a,n)=>e(E.Item,{children:e("div",{className:`
                
                  ${a.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30   hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer 
                   first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `,children:[e("span",{className:"text-base",children:e(d,{icon:a.icon},void 0,!1,{fileName:l,lineNumber:134,columnNumber:23},void 0)},void 0,!1,{fileName:l,lineNumber:133,columnNumber:21},void 0),e("span",{children:a.name},void 0,!1,{fileName:l,lineNumber:136,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:122,columnNumber:19},void 0)},n,!1,{fileName:l,lineNumber:121,columnNumber:17},void 0))},void 0,!1,{fileName:l,lineNumber:119,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:111,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:110,columnNumber:9},void 0)}],q=[{name:"view",icon:"heroicons-outline:eye"},{name:"edit",icon:"heroicons:pencil-square"},{name:"delete",icon:"heroicons-outline:trash"}],g=N.forwardRef(({indeterminate:i,...a},n)=>{const t=N.useRef(),s=n||t;return N.useEffect(()=>{s.current.indeterminate=i},[s,i]),e(y,{children:e("input",{type:"checkbox",ref:s,...a,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:174,columnNumber:9},void 0)},void 0,!1)}),M=()=>{const i=x.exports.useMemo(()=>I,[]),a=x.exports.useMemo(()=>$,[]),n=o.exports.useTable({columns:i,data:a},o.exports.useGlobalFilter,o.exports.useSortBy,o.exports.usePagination,o.exports.useRowSelect,m=>{m.visibleColumns.push(r=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:c})=>e("div",{children:e(g,{...c()},void 0,!1,{fileName:l,lineNumber:206,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:205,columnNumber:13},void 0),Cell:({row:c})=>e("div",{children:e(g,{...c.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:211,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:210,columnNumber:13},void 0)},...r])}),{getTableProps:t,getTableBodyProps:s,headerGroups:k,footerGroups:V,page:C,nextPage:P,previousPage:F,canNextPage:v,canPreviousPage:f,pageOptions:p,state:j,gotoPage:h,pageCount:_,setPageSize:z,setGlobalFilter:H,prepareRow:R}=n,{globalFilter:T,pageIndex:u,pageSize:B}=j;return e(y,{children:e(O,{noborder:!0,children:[e("div",{className:"md:flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:"Advanced Table"},void 0,!1,{fileName:l,lineNumber:243,columnNumber:11},void 0),e("div",{children:e(D,{filter:T,setFilter:H},void 0,!1,{fileName:l,lineNumber:245,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:244,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:242,columnNumber:9},void 0),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...t,children:[e("thead",{className:" border-t border-slate-100 dark:border-slate-800",children:k.map(m=>e("tr",{...m.getHeaderGroupProps(),children:m.headers.map(r=>e("th",{...r.getHeaderProps(r.getSortByToggleProps()),scope:"col",className:" table-th ",children:[r.render("Header"),e("span",{children:r.isSorted?r.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:267,columnNumber:27},void 0)]},void 0,!0,{fileName:l,lineNumber:259,columnNumber:25},void 0))},void 0,!1,{fileName:l,lineNumber:257,columnNumber:21},void 0))},void 0,!1,{fileName:l,lineNumber:255,columnNumber:17},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...s,children:C.map(m=>(R(m),e("tr",{...m.getRowProps(),children:m.cells.map(r=>e("td",{...r.getCellProps(),className:"table-td",children:r.render("Cell")},void 0,!1,{fileName:l,lineNumber:289,columnNumber:29},void 0))},void 0,!1,{fileName:l,lineNumber:286,columnNumber:23},void 0)))},void 0,!1,{fileName:l,lineNumber:279,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:251,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:250,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:249,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:248,columnNumber:9},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[e("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("span",{className:" flex space-x-2  rtl:space-x-reverse items-center",children:[e("span",{className:" text-sm font-medium text-slate-600 dark:text-slate-300",children:"Go"},void 0,!1,{fileName:l,lineNumber:305,columnNumber:15},void 0),e("span",{children:e("input",{type:"number",className:" form-control py-2",defaultValue:u+1,onChange:m=>{const r=m.target.value?Number(m.target.value)-1:0;h(r)},style:{width:"50px"}},void 0,!1,{fileName:l,lineNumber:309,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:308,columnNumber:15},void 0)]},void 0,!0,{fileName:l,lineNumber:304,columnNumber:13},void 0),e("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",e("span",{children:[u+1," of ",p.length]},void 0,!0,{fileName:l,lineNumber:325,columnNumber:15},void 0)]},void 0,!0,{fileName:l,lineNumber:323,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:303,columnNumber:11},void 0),e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${f?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>F(),disabled:!f,children:e(d,{icon:"heroicons-outline:chevron-left"},void 0,!1,{fileName:l,lineNumber:339,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:332,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:331,columnNumber:13},void 0),p.map((m,r)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${r===u?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>h(r),children:m+1},void 0,!1,{fileName:l,lineNumber:344,columnNumber:17},void 0)},r,!1,{fileName:l,lineNumber:343,columnNumber:15},void 0)),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${v?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>P(),disabled:!v,children:e(d,{icon:"heroicons-outline:chevron-right"},void 0,!1,{fileName:l,lineNumber:366,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:359,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:358,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:330,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:302,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:241,columnNumber:7},void 0)},void 0,!1)};var b="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\table\\react-table.jsx";const Q=()=>e("div",{className:" space-y-5",children:[e(M,{},void 0,!1,{fileName:b,lineNumber:9,columnNumber:7},void 0),e(G,{},void 0,!1,{fileName:b,lineNumber:10,columnNumber:7},void 0)]},void 0,!0,{fileName:b,lineNumber:8,columnNumber:5},void 0);export{Q as default};
