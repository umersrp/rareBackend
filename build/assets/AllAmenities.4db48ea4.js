import{R as v,j as e,F as k,bL as P,r as b,b as o,c as i,C as K,L as N,I as m,T as y}from"./index.3e2a71f6.js";import{G as W}from"./GlobalFilter.5cc13eae.js";const S=v.forwardRef(({indeterminate:c,...d},h)=>{const u=v.useRef(),r=h||u;return v.useEffect(()=>{r.current.indeterminate=c},[r,c]),e(k,{children:e("input",{type:"checkbox",ref:r,...d,className:"table-checkbox"})})}),X=({title:c,linktitle:d,pagelink:h,allCustomers:u})=>{const r=localStorage.getItem("isAuth"),g=JSON.parse(r),{data:l}=P(g==null?void 0:g.roleid),H=[{Header:"Sr no",accessor:"id",Cell:({row:t,flatRows:a})=>e("span",{children:a.indexOf(t)+1})},{Header:"Amenities Name",accessor:"amenitiesname",Cell:t=>{var a,s;return e("span",{children:(a=t==null?void 0:t.cell)!=null&&a.value?(s=t==null?void 0:t.cell)==null?void 0:s.value:"Not Available"})}},{Header:"Amenities Code",accessor:"amenitiescode",Cell:t=>{var a,s;return e("span",{children:(a=t==null?void 0:t.cell)!=null&&a.value?(s=t==null?void 0:t.cell)==null?void 0:s.value:"Not Available"})}},{Header:"created-on",accessor:"createdAt",Cell:t=>{var a,s;return e("span",{children:(a=t==null?void 0:t.cell)!=null&&a.value?new Date((s=t==null?void 0:t.cell)==null?void 0:s.value).toDateString():"Not Available"})}},{Header:"action",accessor:t=>`${t._id}`,Cell:t=>{const a=localStorage.getItem("isAuth"),s=JSON.parse(a),{data:n}=P(s==null?void 0:s.roleid);if(!n)return null;const V=(n==null?void 0:n.readamenities)===!0,_=(n==null?void 0:n.updateamenities)===!0,z=(n==null?void 0:n.deleteamenities)===!0;return i("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[V&&e(y,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e(N,{className:"action-btn",to:`/view-amenities/${t==null?void 0:t.cell.value}`,type:"button",children:e(m,{icon:"heroicons:eye"})})}),_&&e(y,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e(N,{to:`/update-amenities/${t==null?void 0:t.cell.value}`,className:"action-btn",type:"button",children:e(m,{icon:"heroicons:pencil-square"})})}),z&&e(y,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",children:e(m,{icon:"heroicons:trash"})})})]})}}],F=b.exports.useMemo(()=>H,[]),T=b.exports.useMemo(()=>u),j=o.exports.useTable({columns:F,data:T},o.exports.useGlobalFilter,o.exports.useSortBy,o.exports.usePagination,o.exports.useRowSelect,t=>{t.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:s})=>e("div",{children:e(S,{...s()})}),Cell:({row:s})=>e("div",{children:e(S,{...s.getToggleRowSelectedProps()})})},...a])}),{getTableProps:$,getTableBodyProps:D,headerGroups:G,footerGroups:Y,page:I,nextPage:O,previousPage:L,canNextPage:p,canPreviousPage:x,pageOptions:C,state:B,gotoPage:f,pageCount:E,setPageSize:M,setGlobalFilter:J,prepareRow:U}=j,{globalFilter:q,pageIndex:A,pageSize:Q}=B;return e(k,{children:i(K,{children:[i("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:c}),(l==null?void 0:l.createamenities)===!0&&e(N,{to:h,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:d})]}),e("div",{className:"md:flex justify-end items-center mb-6",children:e(W,{filter:q,setFilter:J})}),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:i("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...$,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:G.map(t=>e("tr",{...t.getHeaderGroupProps(),children:t.headers.map(a=>a.Header==="action"&&!((l==null?void 0:l.readamenities)===!0||(l==null?void 0:l.updateamenities)===!0||(l==null?void 0:l.deleteamenities)===!0)?e("th",{}):i("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),e("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...D,children:I.map(t=>(U(t),e("tr",{...t.getRowProps(),children:t.cells.map(a=>e("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))})))})]})})})}),i("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[i("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:Q,onChange:t=>M(Number(t.target.value)),children:[10,25,50].map(t=>i("option",{value:t,children:["Show ",t]},t))}),i("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",i("span",{children:[A+1," of ",C.length]})]})]}),i("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${x?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>f(0),disabled:!x,children:e(m,{icon:"heroicons:chevron-double-left-solid"})})}),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${x?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>L(),disabled:!x,children:"Prev"})}),C.map((t,a)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${a===A?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>f(a),children:t+1})},a)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${p?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>O(),disabled:!p,children:"Next"})}),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>f(E-1),disabled:!p,className:` ${p?"":"opacity-50 cursor-not-allowed"}`,children:e(m,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},R=()=>{const[c,d]=b.exports.useState([]);return b.exports.useEffect(()=>{(async()=>{const r=await(await fetch("http://portals.rarehomesgroup.com/amenities")).json();return d(r)})()},[]),e(k,{children:e("div",{className:" space-y-5",children:e(X,{pagelink:"/add-amenities",linktitle:"Add new Amenities",title:"All Amenities",allCustomers:c})})})};export{R as default};
