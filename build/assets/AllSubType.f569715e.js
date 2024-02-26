import{R as $,j as e,F as f,bL as M,r as i,b as N,c as n,f as pe,L as C,I as y,bP as he,bN as P,K as me,T as j}from"./index.177fc75c.js";import{G as be}from"./GlobalFilter.3387d8c1.js";const G=$.forwardRef(({indeterminate:d,...u},m)=>{const c=$.useRef(),p=m||c;return $.useEffect(()=>{p.current.indeterminate=d},[p,d]),e(f,{children:e("input",{type:"checkbox",ref:p,...u,className:"table-checkbox"})})}),xe=({showModal:d,handleClose:u,loaderModal:m,linkedData:c,handleDeleteData:p,dataId:g,moduleName:o,PropertyData:l,subTypeName:k,dataRole:b})=>e("div",{className:"thumbnail-container",children:d&&e("div",{className:"modal-overlay-property",children:n("div",{className:"modal-new w-[850px]",children:[n("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${o}?`}),e("img",{src:he,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:u})]}),m===!0?e(P,{}):n(f,{children:[c!=null&&c.length?e("div",{className:"data-list-modal",children:n(f,{children:[n("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:o})," ",k," is linked with the following modules:"]}),l!=null&&l.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:n("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Property: "}),(b==null?void 0:b.deletepropert)===!0?e(f,{children:l==null?void 0:l.map((h,x)=>n(C,{className:" mr-[5px] hover:underline",to:`/view-property/${h==null?void 0:h._id}?delete=true`,children:[h==null?void 0:h.unitnumber,x!==l.length-1?",":null]},x+1))}):e(DeleteParagraph,{moduleName:o,linkedName:"Property"})]})})}):null]})}):null,n("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(c==null?void 0:c.length)||(l==null?void 0:l.length)?e("p",{className:" mt-[10px]",children:`This ${o} is already linked. Please first delete these entries which are linked it with`}):null,!(c!=null&&c.length)&&!(l!=null&&l.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>p(g),children:"Delete"}):null]})]})]})})}),fe=({title:d,linktitle:u,pagelink:m,allCustomers:c,onDataUpdate:p})=>{const g=localStorage.getItem("isAuth"),o=JSON.parse(g),{data:l}=M(o==null?void 0:o.roleid),[k,b]=i.exports.useState(!1),[h,x]=i.exports.useState(!1),[E,O]=i.exports.useState(""),[U,_]=i.exports.useState(""),[B,T]=i.exports.useState(""),[z,J]=i.exports.useState(""),V=async t=>{if(b(!0),x(!0),t)try{const s=`http://portals.rarehomesgroup.com/property/api/advancesearch?subtypeid=${t==null?void 0:t._id}&softdelete=false`,a=await fetch(s);if(!a.ok&&a.status!==400)throw new Error(`API 2 failed with status: ${a.status}`);const r=a.status===400?[]:await a.json(),w=[...r];O(w),T(r),_(t==null?void 0:t._id),J(t==null?void 0:t.subtypename),x(!1)}catch(s){console.error("Error fetching data:",s),x(!1)}},q=()=>{b(!1),T("")},K=async t=>{try{await me.patch("http://portals.rarehomesgroup.com/subtype/api/subtypedelete",{_id:t,softdelete:!0}),p(),T("")}catch(s){console.log(s,"error")}},Q=[{Header:"Sr no",accessor:"id",Cell:({row:t,flatRows:s})=>e("span",{children:s.indexOf(t)+1})},{Header:"Sub Type Name",accessor:"subtypename",Cell:t=>{var s,a;return e("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?(a=t==null?void 0:t.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Sub Type Code",accessor:"subtypecode",Cell:t=>{var s,a;return e("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?(a=t==null?void 0:t.cell)==null?void 0:a.value:"Not Available"})}},{Header:"created-on",accessor:"createdAt",Cell:t=>{var s,a;return e("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?new Date((a=t==null?void 0:t.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"action",accessor:t=>`${t._id}`,Cell:t=>{const s=localStorage.getItem("isAuth"),a=JSON.parse(s),{data:r}=M(a==null?void 0:a.roleid);if(!r)return null;const w=(r==null?void 0:r.readsubtype)===!0,de=(r==null?void 0:r.updatesubtype)===!0,ue=(r==null?void 0:r.deletesubtype)===!0;return n("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[w&&e(j,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e(C,{className:"action-btn",to:`/view-subtype/${t==null?void 0:t.cell.value}`,type:"button",children:e(y,{icon:"heroicons:eye"})})}),de&&e(j,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e(C,{to:`/update-subtype/${t==null?void 0:t.cell.value}`,className:"action-btn",type:"button",children:e(y,{icon:"heroicons:pencil-square"})})}),ue&&e(j,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",onClick:()=>{var F,L;return V((L=(F=t==null?void 0:t.cell)==null?void 0:F.row)==null?void 0:L.original)},children:e(y,{icon:"heroicons:trash"})})})]})}}],W=i.exports.useMemo(()=>Q,[]),Y=i.exports.useMemo(()=>c),X=N.exports.useTable({columns:W,data:Y,initialState:{pageIndex:0,pageSize:50}},N.exports.useGlobalFilter,N.exports.useSortBy,N.exports.usePagination,N.exports.useRowSelect,t=>{t.visibleColumns.push(s=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>e("div",{children:e(G,{...a()})}),Cell:({row:a})=>e("div",{children:e(G,{...a.getToggleRowSelectedProps()})})},...s])}),{getTableProps:Z,getTableBodyProps:R,headerGroups:D,footerGroups:ge,page:ee,nextPage:te,previousPage:se,canNextPage:v,canPreviousPage:S,pageOptions:I,state:le,gotoPage:A,pageCount:ae,setPageSize:ne,setGlobalFilter:ce,prepareRow:re}=X,{globalFilter:ie,pageIndex:H,pageSize:oe}=le;return e(f,{children:n(pe,{children:[n("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:d}),(l==null?void 0:l.createsubtype)&&e(C,{to:m,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:u})]}),e("div",{className:"md:flex justify-end items-center mb-6",children:e(be,{filter:ie,setFilter:ce})}),e(xe,{showModal:k,handleClose:q,loaderModal:h,linkedData:E,handleDeleteData:K,dataId:U,moduleName:"Sub Type",PropertyData:B,subTypeName:z,dataRole:l}),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:n("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Z,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:D.map(t=>e("tr",{...t.getHeaderGroupProps(),children:t.headers.map(s=>s.Header==="action"&&!((l==null?void 0:l.readsubtype)===!0||(l==null?void 0:l.updatesubtype)===!0||(l==null?void 0:l.deletesubtype)===!0)?e("th",{}):n("th",{...s.getHeaderProps(s.getSortByToggleProps()),scope:"col",className:"table-th",children:[s.render("Header"),e("span",{children:s.isSorted?s.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...R,children:ee.map(t=>(re(t),e("tr",{...t.getRowProps(),children:t.cells.map(s=>e("td",{...s.getCellProps(),className:"table-td",children:s.render("Cell")}))})))})]})})})}),n("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[n("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:oe,onChange:t=>ne(Number(t.target.value)),children:[50,100,100].map(t=>n("option",{value:t,children:["Show ",t]},t))}),n("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",n("span",{children:[H+1," of ",I.length]})]})]}),n("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>A(0),disabled:!S,children:e(y,{icon:"heroicons:chevron-double-left-solid"})})}),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>se(),disabled:!S,children:"Prev"})}),I.map((t,s)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${s===H?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>A(s),children:t+1})},s)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${v?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>te(),disabled:!v,children:"Next"})}),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>A(ae-1),disabled:!v,className:` ${v?"":"opacity-50 cursor-not-allowed"}`,children:e(y,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},ve=()=>{const[d,u]=i.exports.useState([]),[m,c]=i.exports.useState(!1);return i.exports.useEffect(()=>{c(!0),(async()=>{const l=await(await fetch("http://portals.rarehomesgroup.com/subtype")).json();u(l),c(!1)})()},[]),e(f,{children:m===!1?e("div",{className:" space-y-5",children:e(fe,{pagelink:"/add-subtype",linktitle:"Add new Sub Type",title:"All Sub Type",allCustomers:d,onDataUpdate:()=>{c(!0),(async()=>{const l=await(await fetch("http://portals.rarehomesgroup.com/subtype")).json();u(l),c(!1)})()}})}):e(P,{})})};export{ve as default};
