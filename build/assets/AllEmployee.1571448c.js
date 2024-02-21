import{R as E,j as l,F as x,bL as M,r,b as v,c,C as me,L as P,I as y,bP as pe,bN as O,K as he,T as H}from"./index.4de300c8.js";import{G as ue}from"./GlobalFilter.db59d26f.js";import{D as xe}from"./DeleteParagraph.2a68957b.js";const G=E.forwardRef(({indeterminate:o,...m},u)=>{const i=E.useRef(),p=u||i;return E.useEffect(()=>{p.current.indeterminate=o},[p,o]),l(x,{children:l("input",{type:"checkbox",ref:p,...m,className:"table-checkbox"})})}),be=({showModal:o,handleClose:m,loaderModal:u,linkedData:i,handleDeleteData:p,dataId:g,moduleName:d,rentpurchaseData:a,employeeEmail:A,dataRole:b})=>l("div",{className:"thumbnail-container",children:o&&l("div",{className:"modal-overlay-property",children:c("div",{className:"modal-new w-[850px]",children:[c("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${d}?`}),l("img",{src:pe,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:m})]}),u===!0?l(O,{}):c(x,{children:[i!=null&&i.length?l("div",{className:"data-list-modal",children:c(x,{children:[c("h4",{className:"text-[16px] mb-[10px]",children:[l("span",{className:"font-bold",children:d})," ",A," is linked with the following modules:"]}),a!=null&&a.length?l("ul",{className:" mb-[10px] text-start",children:l("li",{className:"list-disc ml-[30px]",children:c("div",{className:"flex items-center",children:[l("span",{className:"font-semibold mr-[5px]",children:"Availability Sheet: "}),(b==null?void 0:b.deleteavailability)===!0?l(x,{children:a==null?void 0:a.map((h,f)=>c(P,{className:" mr-[5px] hover:underline",to:`/view-availability-sheet/${h==null?void 0:h._id}?delete=true`,children:[h==null?void 0:h.unitnumber,f!==a.length-1?",":null]},f+1))}):l(xe,{moduleName:d,linkedName:"Availability Sheet"})]})})}):null]})}):null,c("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(i==null?void 0:i.length)||(a==null?void 0:a.length)?l("p",{className:" mt-[10px]",children:`This ${d} is already linked. Please first delete these entries which are linked it with`}):null,!(i!=null&&i.length)&&!(a!=null&&a.length)?l("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>p(g),children:"Delete"}):null]})]})]})})}),fe=({title:o,linktitle:m,pagelink:u,allCustomers:i,onDataUpdate:p})=>{const g=localStorage.getItem("isAuth"),d=JSON.parse(g),{data:a}=M(d==null?void 0:d.roleid),[A,b]=r.exports.useState(!1),[h,f]=r.exports.useState(!1),[_,ge]=r.exports.useState(""),[U,B]=r.exports.useState(""),[z,j]=r.exports.useState([]),[J,V]=r.exports.useState(""),q=async e=>{if(b(!0),f(!0),e)try{B(e==null?void 0:e._id),V(e==null?void 0:e.email),f(!1)}catch(t){console.error("Error fetching data:",t),f(!1)}},K=()=>{b(!1),j("")},Q=async e=>{try{await he.patch("http://dev-rare.srp.ai/employees/api/employeedelete",{_id:e,softdelete:!0}),p(),j("")}catch(t){console.log(t,"error")}},W=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:t})=>l("span",{children:t.indexOf(e)+1})},{Header:"Name",accessor:e=>`${e.firstname?`${e.firstname} ${e.lastname!=="None"&&e.lastname!==""?e.lastname:""}`:"Not Available"}`,Cell:e=>{var t,s,n;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((s=e==null?void 0:e.cell)==null?void 0:s.value.slice(0,30))+(((n=e==null?void 0:e.cell)==null?void 0:n.value.length)>30?"...":""):"Not Available"})}},{Header:"Email",accessor:"email",Cell:e=>{var t,s,n;return l("span",{className:"normal-case",children:(t=e==null?void 0:e.cell)!=null&&t.value?((s=e==null?void 0:e.cell)==null?void 0:s.value.slice(0,30))+(((n=e==null?void 0:e.cell)==null?void 0:n.value.length)>30?"...":""):"Not Available"})}},{Header:"Designation",accessor:"designation",Cell:e=>{var t,s,n;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((s=e==null?void 0:e.cell)==null?void 0:s.value.slice(0,20))+(((n=e==null?void 0:e.cell)==null?void 0:n.value.length)>20?"...":""):"Not Available"})}},{Header:"Role Name",accessor:"role_name",Cell:e=>{var t,s,n,S,k;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((n=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:n.slice(0,20))+(((k=(S=e==null?void 0:e.cell)==null?void 0:S.value)==null?void 0:k.length)>20?"...":""):"Not Available"})}},{Header:"verified",accessor:"verified",Cell:e=>{var t,s,n;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((t=e==null?void 0:e.cell)==null?void 0:t.value)===!0?"text-success-500 bg-success-500":""} 
                ${((s=e==null?void 0:e.cell)==null?void 0:s.value)===!1?"text-danger-500 bg-danger-500":""}
                
                 `,children:((n=e==null?void 0:e.cell)==null?void 0:n.value)===!0?"verified":"Not verified"})})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var t,s;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((s=e==null?void 0:e.cell)==null?void 0:s.value).toDateString():"Not Available"})}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const t=localStorage.getItem("isAuth"),s=JSON.parse(t),{data:n}=M(s==null?void 0:s.roleid);if(!n)return null;const S=(n==null?void 0:n.reademployee)===!0,k=(n==null?void 0:n.updateemployee)===!0,oe=(n==null?void 0:n.deleteemployee)===!0;return c("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[S&&l(H,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(P,{className:"action-btn",to:`/view-employee/${e==null?void 0:e.cell.value}`,type:"button",children:l(y,{icon:"heroicons:eye"})})}),k&&l(H,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:l(P,{to:`/update-employee/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l(y,{icon:"heroicons:pencil-square"})})}),oe&&l(H,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",onClick:()=>{var F,L;return q((L=(F=e==null?void 0:e.cell)==null?void 0:F.row)==null?void 0:L.original)},children:l(y,{icon:"heroicons:trash"})})})]})}}],Y=r.exports.useMemo(()=>W,[]),X=r.exports.useMemo(()=>i),Z=v.exports.useTable({columns:Y,data:X,initialState:{pageIndex:0,pageSize:50}},v.exports.useGlobalFilter,v.exports.useSortBy,v.exports.usePagination,v.exports.useRowSelect,e=>{e.visibleColumns.push(t=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:s})=>l("div",{children:l(G,{...s()})}),Cell:({row:s})=>l("div",{children:l(G,{...s.getToggleRowSelectedProps()})})},...t])}),{getTableProps:R,getTableBodyProps:D,headerGroups:w,footerGroups:ve,page:ee,nextPage:le,previousPage:te,canNextPage:N,canPreviousPage:C,pageOptions:I,state:ae,gotoPage:$,pageCount:se,setPageSize:ne,setGlobalFilter:ce,prepareRow:ie}=Z,{globalFilter:re,pageIndex:T,pageSize:de}=ae;return l(x,{children:c(me,{children:[c("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:o}),(a==null?void 0:a.createemployee)===!0&&l(P,{to:u,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:m})]}),l("div",{className:"md:flex justify-end items-center mb-6",children:l(ue,{filter:re,setFilter:ce})}),l(be,{showModal:A,handleClose:K,loaderModal:h,linkedData:_,handleDeleteData:Q,dataId:U,moduleName:"Employee",rentpurchaseData:z,employeeEmail:J,dataRole:a}),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"overflow-hidden ",children:c("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...R,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:w.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(t=>t.Header==="action"&&!((a==null?void 0:a.reademployee)===!0||(a==null?void 0:a.updateemployee)===!0||(a==null?void 0:a.deleteemployee)===!0)?l("th",{}):c("th",{...t.getHeaderProps(t.getSortByToggleProps()),scope:"col",className:"table-th",children:[t.render("Header"),l("span",{children:t.isSorted?t.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),c("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...D,children:[ee.map(e=>(ie(e),l("tr",{...e.getRowProps(),children:e.cells.map(t=>l("td",{...t.getCellProps(),className:"table-td",children:t.render("Cell")}))}))),l(x,{})]})]})})})}),c("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[c("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:de,onChange:e=>ne(Number(e.target.value)),children:[10,25,50].map(e=>c("option",{value:e,children:["Show ",e]},e))}),c("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",c("span",{children:[T+1," of ",I.length]})]})]}),c("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>$(0),disabled:!C,children:l(y,{icon:"heroicons:chevron-double-left-solid"})})}),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>te(),disabled:!C,children:"Prev"})}),I.map((e,t)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${t===T?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>$(t),children:e+1})},t)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${N?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>le(),disabled:!N,children:"Next"})}),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>$(se-1),disabled:!N,className:` ${N?"":"opacity-50 cursor-not-allowed"}`,children:l(y,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},Se=()=>{const[o,m]=r.exports.useState([]),[u,i]=r.exports.useState(!1);return r.exports.useEffect(()=>{i(!0),(async()=>{const a=await(await fetch("http://dev-rare.srp.ai/employees")).json();m(a),i(!1)})()},[]),l(x,{children:u===!1?l("div",{className:" space-y-5",children:l(fe,{pagelink:"/add-employees",linktitle:"Add new Employees",title:"All Employees",allCustomers:o,onDataUpdate:()=>{i(!0),(async()=>{const a=await(await fetch("http://dev-rare.srp.ai/employees")).json();m(a),i(!1)})()}})}):l(O,{})})};export{Se as default};
