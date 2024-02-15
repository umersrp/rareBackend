import{R as j,j as e,F as f,bL as L,r as o,b as N,c as r,C as pe,L as S,I as v,bP as ue,bN as E,K as me,T as $}from"./index.f2f04dad.js";import{G as xe}from"./GlobalFilter.87a0ecb5.js";import{D as be}from"./DeleteParagraph.09086f42.js";const M=j.forwardRef(({indeterminate:d,...h},m)=>{const n=j.useRef(),p=m||n;return j.useEffect(()=>{p.current.indeterminate=d},[p,d]),e(f,{children:e("input",{type:"checkbox",ref:p,...h,className:"table-checkbox"})})}),fe=({showModal:d,handleClose:h,loaderModal:m,linkedData:n,handleDeleteData:p,dataId:g,moduleName:i,employeeData:l,roleName:C,dataRole:x})=>e("div",{className:"thumbnail-container",children:d&&e("div",{className:"modal-overlay-property",children:r("div",{className:"modal-new w-[850px]",children:[r("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${i}?`}),e("img",{src:ue,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:h})]}),m===!0?e(E,{}):r(f,{children:[n!=null&&n.length?e("div",{className:"data-list-modal",children:r(f,{children:[r("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:i})," ",C," is linked with the following modules:"]}),l!=null&&l.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:r("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Employee: "}),(x==null?void 0:x.deleteemployee)===!0?e(f,{children:l==null?void 0:l.map((u,b)=>r(S,{className:" mr-[5px] hover:underline",to:`/view-employee/${u==null?void 0:u._id}?delete=true`,children:[u==null?void 0:u.email,b!==l.length-1?",":null]},b+1))}):e(be,{moduleName:i,linkedName:"Employee"})]})})}):null]})}):null,r("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(n==null?void 0:n.length)||(l==null?void 0:l.length)?e("p",{className:" mt-[10px]",children:`This ${i} is already linked. Please first delete these entries which are linked it with`}):null,!(n!=null&&n.length)&&!(l!=null&&l.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>p(g),children:"Delete"}):null]})]})]})})}),ge=({title:d,linktitle:h,pagelink:m,allCustomers:n,onDataUpdate:p})=>{const g=localStorage.getItem("isAuth"),i=JSON.parse(g),{data:l}=L(i==null?void 0:i.roleid),[C,x]=o.exports.useState(!1),[u,b]=o.exports.useState(!1),[R,G]=o.exports.useState(""),[O,U]=o.exports.useState(""),[_,k]=o.exports.useState(""),[B,z]=o.exports.useState(""),J=async t=>{if(x(!0),b(!0),t)try{const s=`http://dev-rare.srp.ai/employees/api/rolesdatacheck?roleid=${t==null?void 0:t._id}`,a=await fetch(s);if(!a.ok&&a.status!==400)throw new Error(`API 2 failed with status: ${a.status}`);const c=a.status===400?[]:await a.json(),A=[...c];k(c),G(A),U(t==null?void 0:t._id),z(t==null?void 0:t.rolename),b(!1)}catch(s){console.error("Error fetching data:",s),b(!1)}},V=()=>{x(!1),k("")},q=async t=>{try{await me.patch("http://dev-rare.srp.ai/roles/api/rolesdelete",{_id:t,softdelete:!0}),p(),k("")}catch(s){console.log(s,"error")}},K=[{Header:"Sr no",accessor:"id",Cell:({row:t,flatRows:s})=>e("span",{children:s.indexOf(t)+1})},{Header:"Role Name",accessor:"rolename",Cell:t=>{var s,a;return e("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?(a=t==null?void 0:t.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Status",accessor:"Status",Cell:t=>e("span",{className:"inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500 bg-success-500",children:"Active"})},{Header:"created-on",accessor:"createdAt",Cell:t=>{var s,a;return e("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?new Date((a=t==null?void 0:t.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"action",accessor:t=>`${t._id}`,Cell:t=>{const s=localStorage.getItem("isAuth"),a=JSON.parse(s),{data:c}=L(a==null?void 0:a.roleid);if(!c)return null;const A=(c==null?void 0:c.readrole)===!0,de=(c==null?void 0:c.updaterole)===!0,he=(c==null?void 0:c.deleterole)===!0;return r("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[A&&e($,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e(S,{className:"action-btn",to:"#",type:"button",children:e(v,{icon:"heroicons:eye"})})}),de&&e($,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e(S,{to:`/update-roles/${t==null?void 0:t.cell.value}`,className:"action-btn",type:"button",children:e(v,{icon:"heroicons:pencil-square"})})}),he&&e($,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",onClick:()=>{var F,H;return J((H=(F=t==null?void 0:t.cell)==null?void 0:F.row)==null?void 0:H.original)},children:e(v,{icon:"heroicons:trash"})})})]})}}],Q=o.exports.useMemo(()=>K,[]),W=o.exports.useMemo(()=>n),Y=N.exports.useTable({columns:Q,data:W,initialState:{pageIndex:0,pageSize:50}},N.exports.useGlobalFilter,N.exports.useSortBy,N.exports.usePagination,N.exports.useRowSelect,t=>{t.visibleColumns.push(s=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>e("div",{children:e(M,{...a()})}),Cell:({row:a})=>e("div",{children:e(M,{...a.getToggleRowSelectedProps()})})},...s])}),{getTableProps:X,getTableBodyProps:Z,headerGroups:D,footerGroups:Ne,page:ee,nextPage:te,previousPage:se,canNextPage:y,canPreviousPage:w,pageOptions:I,state:le,gotoPage:P,pageCount:ae,setPageSize:re,setGlobalFilter:ne,prepareRow:ce}=Y,{globalFilter:oe,pageIndex:T,pageSize:ie}=le;return e(f,{children:r(pe,{children:[r("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:d}),(l==null?void 0:l.createrole)===!0&&e(S,{to:m,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:h})]}),e("div",{className:"md:flex justify-end items-center mb-6",children:e(xe,{filter:oe,setFilter:ne})}),e(fe,{showModal:C,handleClose:V,loaderModal:u,linkedData:R,handleDeleteData:q,dataId:O,moduleName:"Role",employeeData:_,roleName:B,dataRole:l}),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:r("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...X,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:D.map(t=>e("tr",{...t.getHeaderGroupProps(),children:t.headers.map(s=>r("th",{...s.getHeaderProps(s.getSortByToggleProps()),scope:"col",className:" table-th ",children:[s.render("Header"),e("span",{children:s.isSorted?s.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Z,children:ee.map(t=>(ce(t),e("tr",{...t.getRowProps(),children:t.cells.map(s=>e("td",{...s.getCellProps(),className:"table-td",children:s.render("Cell")}))})))})]})})})}),r("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[r("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:ie,onChange:t=>re(Number(t.target.value)),children:[10,25,50].map(t=>r("option",{value:t,children:["Show ",t]},t))}),r("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",r("span",{children:[T+1," of ",I.length]})]})]}),r("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${w?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>P(0),disabled:!w,children:e(v,{icon:"heroicons:chevron-double-left-solid"})})}),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${w?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>se(),disabled:!w,children:"Prev"})}),I.map((t,s)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${s===T?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>P(s),children:t+1})},s)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>te(),disabled:!y,children:"Next"})}),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>P(ae-1),disabled:!y,className:` ${y?"":"opacity-50 cursor-not-allowed"}`,children:e(v,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},Se=()=>{const[d,h]=o.exports.useState([]),[m,n]=o.exports.useState(!1);return o.exports.useEffect(()=>{n(!0),(async()=>{const l=await(await fetch("http://dev-rare.srp.ai/roles")).json();h(l),n(!1)})()},[]),e(f,{children:m===!1?e("div",{className:" space-y-5",children:e(ge,{pagelink:"/add-roles",linktitle:"Add new Roles",title:"All Roles",allCustomers:d,onDataUpdate:()=>{n(!0),(async()=>{const l=await(await fetch("http://dev-rare.srp.ai/roles")).json();h(l),n(!1)})()}})}):e(E,{})})};export{Se as default};
