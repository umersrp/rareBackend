import{R as N,j as e,F as C,z as B,r as k,b as o,e as O,I as m,D as z}from"./index.44d7a5c5.js";import{a as M}from"./table-data.6a6d386e.js";import{B as b}from"./Button.3c8dc06b.js";import{G as q}from"./GlobalFilter.cd26253e.js";import"./user-6.e3c6bad3.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\utility\\invoice.jsx";const y=N.forwardRef(({indeterminate:n,...s},d)=>{const c=N.useRef(),t=d||c;return N.useEffect(()=>{t.current.indeterminate=n},[t,n]),e(C,{children:e("input",{type:"checkbox",ref:t,...s,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:29,columnNumber:9},void 0)},void 0,!1)}),W=()=>{const n=B(),s=[{name:"send",icon:"ph:paper-plane-right",doit:()=>{n("/invoice-add")}},{name:"view",icon:"heroicons-outline:eye",doit:()=>{n("/invoice-preview")}},{name:"edit",icon:"heroicons:pencil-square",doit:i=>{n("/invoice-edit")}},{name:"delete",icon:"heroicons-outline:trash",doit:i=>null}],d=[{Header:"Id",accessor:"id",Cell:i=>{var a;return e("span",{children:(a=i==null?void 0:i.cell)==null?void 0:a.value},void 0,!1,{fileName:l,lineNumber:77,columnNumber:16},void 0)}},{Header:"Order",accessor:"order",Cell:i=>{var a;return e("span",{children:["#",(a=i==null?void 0:i.cell)==null?void 0:a.value]},void 0,!0,{fileName:l,lineNumber:84,columnNumber:16},void 0)}},{Header:"customer",accessor:"customer",Cell:i=>{var a,r;return e("div",{children:e("span",{className:"inline-flex items-center",children:[e("span",{className:"w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none bg-slate-600",children:e("img",{src:(a=i==null?void 0:i.cell)==null?void 0:a.value.image,alt:"",className:"object-cover w-full h-full rounded-full"},void 0,!1,{fileName:l,lineNumber:95,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:94,columnNumber:15},void 0),e("span",{className:"text-sm text-slate-600 dark:text-slate-300 capitalize",children:(r=i==null?void 0:i.cell)==null?void 0:r.value.name},void 0,!1,{fileName:l,lineNumber:101,columnNumber:15},void 0)]},void 0,!0,{fileName:l,lineNumber:93,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:92,columnNumber:11},void 0)}},{Header:"date",accessor:"date",Cell:i=>{var a;return e("span",{children:(a=i==null?void 0:i.cell)==null?void 0:a.value},void 0,!1,{fileName:l,lineNumber:113,columnNumber:16},void 0)}},{Header:"quantity",accessor:"quantity",Cell:i=>{var a;return e("span",{children:(a=i==null?void 0:i.cell)==null?void 0:a.value},void 0,!1,{fileName:l,lineNumber:120,columnNumber:16},void 0)}},{Header:"amount",accessor:"amount",Cell:i=>{var a;return e("span",{children:(a=i==null?void 0:i.cell)==null?void 0:a.value},void 0,!1,{fileName:l,lineNumber:127,columnNumber:16},void 0)}},{Header:"status",accessor:"status",Cell:i=>{var a,r,x,g;return e("span",{className:"block w-full",children:e("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=i==null?void 0:i.cell)==null?void 0:a.value)==="paid"?"text-success-500 bg-success-500":""} 
            ${((r=i==null?void 0:i.cell)==null?void 0:r.value)==="due"?"text-warning-500 bg-warning-500":""}
            ${((x=i==null?void 0:i.cell)==null?void 0:x.value)==="cancled"?"text-danger-500 bg-danger-500":""}
            
             `,children:(g=i==null?void 0:i.cell)==null?void 0:g.value},void 0,!1,{fileName:l,lineNumber:136,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:135,columnNumber:11},void 0)}},{Header:"action",accessor:"action",Cell:i=>e("div",{children:e(z,{classMenuItems:"right-0 w-[140px] top-[110%] ",label:e("span",{className:"text-xl text-center block w-full",children:e(m,{icon:"heroicons-outline:dots-vertical"},void 0,!1,{fileName:l,lineNumber:171,columnNumber:19},void 0)},void 0,!1,{fileName:l,lineNumber:170,columnNumber:17},void 0),children:e("div",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:s.map((a,r)=>e("div",{onClick:()=>a.doit(),className:`
                
                  ${a.name==="delete"?"bg-danger-500 text-danger-500 bg-opacity-30   hover:bg-opacity-100 hover:text-white":"hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50"}
                   w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer 
                   first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `,children:[e("span",{className:"text-base",children:e(m,{icon:a.icon},void 0,!1,{fileName:l,lineNumber:191,columnNumber:23},void 0)},void 0,!1,{fileName:l,lineNumber:190,columnNumber:21},void 0),e("span",{children:a.name},void 0,!1,{fileName:l,lineNumber:193,columnNumber:21},void 0)]},r,!0,{fileName:l,lineNumber:177,columnNumber:19},void 0))},void 0,!1,{fileName:l,lineNumber:175,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:167,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:166,columnNumber:11},void 0)}],c=k.exports.useMemo(()=>d,[]),t=k.exports.useMemo(()=>M,[]),P=o.exports.useTable({columns:c,data:t},o.exports.useGlobalFilter,o.exports.useSortBy,o.exports.usePagination,o.exports.useRowSelect,i=>{i.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:r})=>e("div",{children:e(y,{...r()},void 0,!1,{fileName:l,lineNumber:224,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:223,columnNumber:13},void 0),Cell:({row:r})=>e("div",{children:e(y,{...r.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:229,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:228,columnNumber:13},void 0)},...a])}),{getTableProps:F,getTableBodyProps:H,headerGroups:R,footerGroups:E,page:S,nextPage:j,previousPage:G,canNextPage:v,canPreviousPage:f,pageOptions:p,state:I,gotoPage:h,pageCount:V,setPageSize:L,setGlobalFilter:T,prepareRow:$}=P,{globalFilter:D,pageIndex:u,pageSize:U}=I;return e(C,{children:e(O,{noborder:!0,children:[e("div",{className:"md:flex pb-6 items-center",children:[e("h6",{className:"flex-1 md:mb-0 mb-3",children:"Invoice"},void 0,!1,{fileName:l,lineNumber:262,columnNumber:11},void 0),e("div",{className:"md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse",children:[e(q,{filter:D,setFilter:T},void 0,!1,{fileName:l,lineNumber:264,columnNumber:13},void 0),e(b,{icon:"heroicons-outline:calendar",text:"Select date",className:" btn-outline-secondary dark:border-slate-700  text-slate-600 btn-sm font-normal dark:text-slate-300 ",iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:265,columnNumber:13},void 0),e(b,{icon:"heroicons-outline:filter",text:"Filter",className:" btn-outline-secondary text-slate-600 dark:border-slate-700 dark:text-slate-300 font-normal btn-sm ",iconClass:"text-lg"},void 0,!1,{fileName:l,lineNumber:271,columnNumber:13},void 0),e(b,{icon:"heroicons-outline:plus-sm",text:"Add Record",className:" btn-dark font-normal btn-sm ",iconClass:"text-lg",onClick:()=>{n("/invoice-add")}},void 0,!1,{fileName:l,lineNumber:277,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:263,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:261,columnNumber:9},void 0),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...F,children:[e("thead",{className:" border-t border-slate-100 dark:border-slate-800",children:R.map(i=>e("tr",{...i.getHeaderGroupProps(),children:i.headers.map(a=>e("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),e("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:307,columnNumber:27},void 0)]},void 0,!0,{fileName:l,lineNumber:299,columnNumber:25},void 0))},void 0,!1,{fileName:l,lineNumber:297,columnNumber:21},void 0))},void 0,!1,{fileName:l,lineNumber:295,columnNumber:17},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...H,children:S.map(i=>($(i),e("tr",{...i.getRowProps(),children:i.cells.map(a=>e("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:l,lineNumber:329,columnNumber:29},void 0))},void 0,!1,{fileName:l,lineNumber:326,columnNumber:23},void 0)))},void 0,!1,{fileName:l,lineNumber:319,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:291,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:290,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:289,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:288,columnNumber:9},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[e("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("span",{className:" flex space-x-2  rtl:space-x-reverse items-center",children:[e("span",{className:" text-sm font-medium text-slate-600 dark:text-slate-300",children:"Go"},void 0,!1,{fileName:l,lineNumber:345,columnNumber:15},void 0),e("span",{children:e("input",{type:"number",className:" form-control py-2",defaultValue:u+1,onChange:i=>{const a=i.target.value?Number(i.target.value)-1:0;h(a)},style:{width:"50px"}},void 0,!1,{fileName:l,lineNumber:349,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:348,columnNumber:15},void 0)]},void 0,!0,{fileName:l,lineNumber:344,columnNumber:13},void 0),e("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",e("span",{children:[u+1," of ",p.length]},void 0,!0,{fileName:l,lineNumber:365,columnNumber:15},void 0)]},void 0,!0,{fileName:l,lineNumber:363,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:343,columnNumber:11},void 0),e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${f?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>G(),disabled:!f,children:e(m,{icon:"heroicons-outline:chevron-left"},void 0,!1,{fileName:l,lineNumber:379,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:372,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:371,columnNumber:13},void 0),p.map((i,a)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${a===u?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>h(a),children:i+1},void 0,!1,{fileName:l,lineNumber:384,columnNumber:17},void 0)},a,!1,{fileName:l,lineNumber:383,columnNumber:15},void 0)),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${v?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>j(),disabled:!v,children:e(m,{icon:"heroicons-outline:chevron-right"},void 0,!1,{fileName:l,lineNumber:406,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:399,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:398,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:370,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:342,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:260,columnNumber:7},void 0)},void 0,!1)};export{W as default};
