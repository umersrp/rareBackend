import{R as x,j as e,F as k,bL as P,r as f,b as d,e as R,L as g,I as u,T as y}from"./index.f75f4411.js";import{G as W}from"./GlobalFilter.0c54b380.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\amenities\\AmenitiesTable.jsx";const S=x.forwardRef(({indeterminate:s,...o},c)=>{const N=x.useRef(),m=c||N;return x.useEffect(()=>{m.current.indeterminate=s},[m,s]),e(k,{children:e("input",{type:"checkbox",ref:m,...o,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:29,columnNumber:17},void 0)},void 0,!1)}),X=({title:s,linktitle:o,pagelink:c,allCustomers:N})=>{const m=localStorage.getItem("isAuth"),h=JSON.parse(m),{data:n}=P(h==null?void 0:h.roleid),F=[{Header:"Sr no",accessor:"id",Cell:({row:i,flatRows:a})=>e("span",{children:a.indexOf(i)+1},void 0,!1,{fileName:l,lineNumber:50,columnNumber:24},void 0)},{Header:"Amenities Name",accessor:"amenitiesname",Cell:i=>{var a,t;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?(t=i==null?void 0:i.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:57,columnNumber:24},void 0)}},{Header:"Amenities Code",accessor:"amenitiescode",Cell:i=>{var a,t;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?(t=i==null?void 0:i.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:64,columnNumber:24},void 0)}},{Header:"created-on",accessor:"createdAt",Cell:i=>{var a,t;return e("span",{children:(a=i==null?void 0:i.cell)!=null&&a.value?new Date((t=i==null?void 0:i.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:71,columnNumber:24},void 0)}},{Header:"action",accessor:i=>`${i._id}`,Cell:i=>{const a=localStorage.getItem("isAuth"),t=JSON.parse(a),{data:r}=P(t==null?void 0:t.roleid);if(!r)return null;const Q=(r==null?void 0:r.readamenities)===!0,z=(r==null?void 0:r.updateamenities)===!0,K=(r==null?void 0:r.deleteamenities)===!0;return e("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[Q&&e(y,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e(g,{className:"action-btn",to:`/view-amenities/${i==null?void 0:i.cell.value}`,type:"button",children:e(u,{icon:"heroicons:eye"},void 0,!1,{fileName:l,lineNumber:97,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:96,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:95,columnNumber:33},void 0),z&&e(y,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e(g,{to:`/update-amenities/${i==null?void 0:i.cell.value}`,className:"action-btn",type:"button",children:e(u,{icon:"heroicons:pencil-square"},void 0,!1,{fileName:l,lineNumber:106,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:105,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:104,columnNumber:33},void 0),K&&e(y,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",children:e(u,{icon:"heroicons:trash"},void 0,!1,{fileName:l,lineNumber:121,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:120,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:113,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:92,columnNumber:21},void 0)}}],H=f.exports.useMemo(()=>F,[]),T=f.exports.useMemo(()=>N),D=d.exports.useTable({columns:H,data:T},d.exports.useGlobalFilter,d.exports.useSortBy,d.exports.usePagination,d.exports.useRowSelect,i=>{i.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>e("div",{children:e(S,{...t()},void 0,!1,{fileName:l,lineNumber:151,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:150,columnNumber:25},void 0),Cell:({row:t})=>e("div",{children:e(S,{...t.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:156,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:155,columnNumber:25},void 0)},...a])}),{getTableProps:O,getTableBodyProps:$,headerGroups:E,footerGroups:Y,page:G,nextPage:L,previousPage:I,canNextPage:b,canPreviousPage:v,pageOptions:C,state:_,gotoPage:p,pageCount:U,setPageSize:V,setGlobalFilter:B,prepareRow:M}=D,{globalFilter:J,pageIndex:A,pageSize:q}=_;return e(k,{children:e(R,{children:[e("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:s},void 0,!1,{fileName:l,lineNumber:188,columnNumber:21},void 0),(n==null?void 0:n.createamenities)===!0&&e(g,{to:c,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:o},void 0,!1,{fileName:l,lineNumber:191,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:187,columnNumber:17},void 0),e("div",{className:"md:flex justify-end items-center mb-6",children:e(W,{filter:J,setFilter:B},void 0,!1,{fileName:l,lineNumber:196,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:195,columnNumber:17},void 0),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...O,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:E.map(i=>e("tr",{...i.getHeaderGroupProps(),children:i.headers.map(a=>a.Header==="action"&&!((n==null?void 0:n.readamenities)===!0||(n==null?void 0:n.updateamenities)===!0||(n==null?void 0:n.deleteamenities)===!0)?e("th",{},void 0,!1,{fileName:l,lineNumber:214,columnNumber:60},void 0):e("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),e("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:224,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:218,columnNumber:53},void 0))},void 0,!1,{fileName:l,lineNumber:207,columnNumber:41},void 0))},void 0,!1,{fileName:l,lineNumber:205,columnNumber:33},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...$,children:G.map(i=>(M(i),e("tr",{...i.getRowProps(),children:i.cells.map(a=>e("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:l,lineNumber:243,columnNumber:57},void 0))},void 0,!1,{fileName:l,lineNumber:240,columnNumber:45},void 0)))},void 0,!1,{fileName:l,lineNumber:233,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:201,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:200,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:199,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:198,columnNumber:17},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[e("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:q,onChange:i=>V(Number(i.target.value)),children:[10,25,50].map(i=>e("option",{value:i,children:["Show ",i]},i,!0,{fileName:l,lineNumber:264,columnNumber:33},void 0))},void 0,!1,{fileName:l,lineNumber:258,columnNumber:25},void 0),e("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",e("span",{children:[A+1," of ",C.length]},void 0,!0,{fileName:l,lineNumber:271,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:269,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:257,columnNumber:21},void 0),e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${v?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>p(0),disabled:!v,children:e(u,{icon:"heroicons:chevron-double-left-solid"},void 0,!1,{fileName:l,lineNumber:284,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:278,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:277,columnNumber:25},void 0),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${v?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>I(),disabled:!v,children:"Prev"},void 0,!1,{fileName:l,lineNumber:288,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:287,columnNumber:25},void 0),C.map((i,a)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${a===A?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>p(a),children:i+1},void 0,!1,{fileName:l,lineNumber:299,columnNumber:33},void 0)},a,!1,{fileName:l,lineNumber:298,columnNumber:29},void 0)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${b?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>L(),disabled:!b,children:"Next"},void 0,!1,{fileName:l,lineNumber:313,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:312,columnNumber:25},void 0),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>p(U-1),disabled:!b,className:` ${b?"":"opacity-50 cursor-not-allowed"}`,children:e(u,{icon:"heroicons:chevron-double-right-solid"},void 0,!1,{fileName:l,lineNumber:329,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:323,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:322,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:276,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:256,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:186,columnNumber:13},void 0)},void 0,!1)};var j="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\property-management\\amenities\\AllAmenities.jsx";const ee=()=>{const[s,o]=f.exports.useState([]);return f.exports.useEffect(()=>{(async()=>{const m=await(await fetch("http://dev-rare.srp.ai/amenities")).json();return o(m)})()},[]),e(k,{children:e("div",{className:" space-y-5",children:e(X,{pagelink:"/add-amenities",linktitle:"Add new Amenities",title:"All Amenities",allCustomers:s},void 0,!1,{fileName:j,lineNumber:18,columnNumber:17},void 0)},void 0,!1,{fileName:j,lineNumber:17,columnNumber:13},void 0)},void 0,!1)};export{ee as default};
