import{R as F,j as t,F as f,bL as B,r as d,b as j,c as a,C as xe,L as y,I as C,bP as fe,bN as O,K as Ne,T as L}from"./index.3e2a71f6.js";import{G as ge}from"./GlobalFilter.5cc13eae.js";import{D as E}from"./DeleteParagraph.71b58b01.js";const G=F.forwardRef(({indeterminate:p,...m},N)=>{const r=F.useRef(),u=N||r;return F.useEffect(()=>{u.current.indeterminate=p},[u,p]),t(f,{children:t("input",{type:"checkbox",ref:u,...m,className:"table-checkbox"})})}),be=({showModal:p,handleClose:m,loaderModal:N,linkedData:r,handleDeleteData:u,dataId:v,moduleName:h,PropertyData:l,buildingData:i,projectName:S,dataRole:x})=>a("div",{className:"thumbnail-container",children:[p&&t("div",{className:"modal-overlay-property",children:a("div",{className:"modal-new w-[850px]",children:[a("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[t("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${h}?`}),t("img",{src:fe,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:m})]}),N===!0?t(O,{}):a(f,{children:[r!=null&&r.length?t("div",{className:"data-list-modal",children:a(f,{children:[a("h4",{className:"text-[16px] mb-[10px]",children:[t("span",{className:"font-bold",children:"Project Name"})," ",S," is linked with the following modules:"]}),l!=null&&l.length?t("ul",{className:" mb-[10px] text-start",children:t("li",{className:"list-disc ml-[30px]",children:a("div",{className:"flex items-center",children:[t("span",{className:"font-semibold mr-[5px]",children:"Property: "}),(x==null?void 0:x.deletepropert)===!0?t(f,{children:l==null?void 0:l.map((n,g)=>a(y,{className:" mr-[5px] hover:underline",to:`/view-property/${n==null?void 0:n._id}?delete=true`,children:[n==null?void 0:n.unitnumber,g!==l.length-1?",":null]},g+1))}):t(E,{moduleName:h,linkedName:"Property"})]})})}):null,i!=null&&i.length?t("ul",{className:" mb-[10px] text-start",children:t("li",{className:"list-disc ml-[30px]",children:a("div",{className:"flex items-center",children:[t("span",{className:"font-semibold mr-[5px]",children:"Building Name: "}),(x==null?void 0:x.deletebuilding)===!0?t(f,{children:i==null?void 0:i.map((n,g)=>a(y,{className:" mr-[5px] hover:underline",to:`/view-building/${n==null?void 0:n._id}?delete=true`,children:[n==null?void 0:n.buildingname,g!==i.length-1?",":null]},g+1))}):t(E,{moduleName:h,linkedName:"Building Name"})]})})}):null]})}):null,a("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(r==null?void 0:r.length)||(l==null?void 0:l.length)||(i==null?void 0:i.length)?t("p",{className:" mt-[10px]",children:`This ${h} is already linked. Please first delete these entries which are linked it with`}):null,!(r!=null&&r.length)&&!(l!=null&&l.length)&&!(i!=null&&i.length)?t("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>u(v),children:"Delete"}):null]})]})]})}),t(f,{})]}),ve=({title:p,linktitle:m,pagelink:N,allCustomers:r,onDataUpdate:u})=>{const v=localStorage.getItem("isAuth"),h=JSON.parse(v),{data:l}=B(h==null?void 0:h.roleid),[i,S]=d.exports.useState(!1),[x,n]=d.exports.useState(!1),[g,z]=d.exports.useState(""),[J,V]=d.exports.useState(""),[q,w]=d.exports.useState(""),[K,H]=d.exports.useState(""),[Q,W]=d.exports.useState(""),Y=async e=>{if(S(!0),n(!0),e)try{const s=`http://portals.rarehomesgroup.com/buildingname/api/projectnamedelete?projectnameid=${e==null?void 0:e._id}`,c=`http://portals.rarehomesgroup.com/property/api/advancesearch?projectnameid=${e==null?void 0:e._id}&softdelete=false`;console.log(s,"apiUrl1");const o=await fetch(s);if(!o.ok&&o.status!==400)throw new Error(`API 1 failed with status: ${o.status}`);const $=o.status===400?[]:await o.json(),b=await fetch(c);if(!b.ok&&b.status!==400)throw new Error(`API 2 failed with status: ${b.status}`);const P=b.status===400?[]:await b.json(),I=[...$,...P];H($),w(P),z(I),V(e==null?void 0:e._id),W(e==null?void 0:e.projectName),n(!1)}catch(s){console.error("Error fetching data:",s),n(!1)}},X=()=>{S(!1),w(""),H("")},Z=async e=>{try{await Ne.patch("http://portals.rarehomesgroup.com/projectname/api/projectdelete",{_id:e,softdelete:!0}),u(),w(""),H("")}catch(s){console.log(s,"error")}},R=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:s})=>t("span",{children:s.indexOf(e)+1})},{Header:"Project Name",accessor:"projectName",Cell:e=>{var s,c;return t("span",{children:(s=e==null?void 0:e.cell)!=null&&s.value?(c=e==null?void 0:e.cell)==null?void 0:c.value:"Not Available"})}},{Header:"Project Code",accessor:"projectCode",Cell:e=>{var s,c;return t("span",{children:(s=e==null?void 0:e.cell)!=null&&s.value?(c=e==null?void 0:e.cell)==null?void 0:c.value:"Not Available"})}},{Header:"Community Name",accessor:"community_name",Cell:e=>{var s,c;return t("span",{children:(s=e==null?void 0:e.cell)!=null&&s.value?(c=e==null?void 0:e.cell)==null?void 0:c.value:"Not Available"})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var s,c;return t("span",{children:(s=e==null?void 0:e.cell)!=null&&s.value?new Date((c=e==null?void 0:e.cell)==null?void 0:c.value).toDateString():"Not Available"})}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const s=localStorage.getItem("isAuth"),c=JSON.parse(s),{data:o}=B(c==null?void 0:c.roleid);if(!o)return null;const $=(o==null?void 0:o.readproject)===!0,b=(o==null?void 0:o.updateproject)===!0,P=(o==null?void 0:o.deleteproject)===!0;return a("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[$&&t(L,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:t(y,{className:"action-btn",to:`/view-project/${e==null?void 0:e.cell.value}`,type:"button",children:t(C,{icon:"heroicons:eye"})})}),b&&t(L,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:t(y,{to:`/update-project/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:t(C,{icon:"heroicons:pencil-square"})})}),P&&t(L,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:t("button",{className:"action-btn",type:"button",onClick:()=>{var I,U;return Y((U=(I=e==null?void 0:e.cell)==null?void 0:I.row)==null?void 0:U.original)},children:t(C,{icon:"heroicons:trash"})})})]})}}],D=d.exports.useMemo(()=>R,[]),ee=d.exports.useMemo(()=>r),te=j.exports.useTable({columns:D,data:ee,initialState:{pageIndex:0,pageSize:50}},j.exports.useGlobalFilter,j.exports.useSortBy,j.exports.usePagination,j.exports.useRowSelect,e=>{e.visibleColumns.push(s=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:c})=>t("div",{children:t(G,{...c()})}),Cell:({row:c})=>t("div",{children:t(G,{...c.getToggleRowSelectedProps()})})},...s])}),{getTableProps:se,getTableBodyProps:le,headerGroups:ae,footerGroups:je,page:ce,nextPage:re,previousPage:ne,canNextPage:k,canPreviousPage:A,pageOptions:M,state:oe,gotoPage:T,pageCount:ie,setPageSize:de,setGlobalFilter:he,prepareRow:pe}=te,{globalFilter:me,pageIndex:_,pageSize:ue}=oe;return t(f,{children:a(xe,{children:[a("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:p}),(l==null?void 0:l.createproject)===!0&&t(y,{to:N,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:m})]}),t("div",{className:"md:flex justify-end items-center mb-6",children:t(ge,{filter:me,setFilter:he})}),t(be,{showModal:i,handleClose:X,dataRole:l,loaderModal:x,linkedData:g,handleDeleteData:Z,dataId:J,moduleName:"Project Name",PropertyData:q,buildingData:K,projectName:Q}),t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"overflow-hidden ",children:a("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...se,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:ae.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(s=>s.Header==="action"&&!((l==null?void 0:l.readproject)===!0||(l==null?void 0:l.updateproject)===!0||(l==null?void 0:l.deleteproject)===!0)?t("th",{}):a("th",{...s.getHeaderProps(s.getSortByToggleProps()),scope:"col",className:"table-th",children:[s.render("Header"),t("span",{children:s.isSorted?s.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...le,children:ce.map(e=>(pe(e),t("tr",{...e.getRowProps(),children:e.cells.map(s=>t("td",{...s.getCellProps(),className:"table-td",children:s.render("Cell")}))})))})]})})})}),a("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[a("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[t("select",{className:"form-control py-2 w-max",value:ue,onChange:e=>de(Number(e.target.value)),children:[50,100,200].map(e=>a("option",{value:e,children:["Show ",e]},e))}),a("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",a("span",{children:[_+1," of ",M.length]})]})]}),a("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${A?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>T(0),disabled:!A,children:t(C,{icon:"heroicons:chevron-double-left-solid"})})}),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${A?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ne(),disabled:!A,children:"Prev"})}),M.map((e,s)=>t("li",{children:t("button",{href:"#","aria-current":"page",className:` ${s===_?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>T(s),children:e+1})},s)),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${k?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>re(),disabled:!k,children:"Next"})}),t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{onClick:()=>T(ie-1),disabled:!k,className:` ${k?"":"opacity-50 cursor-not-allowed"}`,children:t(C,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},ke=()=>{const[p,m]=d.exports.useState([]),[N,r]=d.exports.useState(!1);return d.exports.useEffect(()=>{r(!0),(async()=>{const l=await(await fetch("http://portals.rarehomesgroup.com/projectname")).json();m(l),r(!1)})()},[]),t(f,{children:N===!1?t("div",{className:" space-y-5",children:t(ve,{pagelink:"/add-project",linktitle:"Add new Project",title:"All Project",allCustomers:p,onDataUpdate:()=>{r(!0),(async()=>{const l=await(await fetch("http://portals.rarehomesgroup.com/projectname")).json();m(l),r(!1)})()}})}):t(O,{})})};export{ke as default};
