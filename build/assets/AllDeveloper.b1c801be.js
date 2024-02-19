import{R as I,j as t,F as f,bL as M,r as i,b as g,c as n,C as he,L as S,I as N,bP as ue,bN as P,K as me,T as H}from"./index.39225be0.js";import{G as xe}from"./GlobalFilter.201eb8f9.js";import{D as ve}from"./DeleteParagraph.b591285b.js";const G=I.forwardRef(({indeterminate:d,...p},m)=>{const r=I.useRef(),h=m||r;return I.useEffect(()=>{h.current.indeterminate=d},[h,d]),t(f,{children:t("input",{type:"checkbox",ref:h,...p,className:"table-checkbox"})})}),fe=({showModal:d,handleClose:p,loaderModal:m,linkedData:r,handleDeleteData:h,dataId:b,moduleName:o,PropertyData:s,developerName:k,dataRole:x})=>t("div",{className:"thumbnail-container",children:d&&t("div",{className:"modal-overlay-property",children:n("div",{className:"modal-new w-[850px]",children:[n("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[t("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${o}?`}),t("img",{src:ue,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:p})]}),m===!0?t(P,{}):n(f,{children:[r!=null&&r.length?t("div",{className:"data-list-modal",children:n(f,{children:[n("h4",{className:"text-[16px] mb-[10px]",children:[t("span",{className:"font-bold",children:o})," ",k," is linked with the following modules:"]}),s!=null&&s.length?t("ul",{className:" mb-[10px] text-start",children:t("li",{className:"list-disc ml-[30px]",children:n("div",{className:"flex items-center",children:[t("span",{className:"font-semibold mr-[5px]",children:"Property: "}),(x==null?void 0:x.deletepropert)===!0?t(f,{children:s==null?void 0:s.map((u,v)=>n(S,{className:" mr-[5px] hover:underline",to:`/view-property/${u==null?void 0:u._id}?delete=true`,children:[u==null?void 0:u.unitnumber,v!==s.length-1?",":null]},v+1))}):t(ve,{moduleName:o,linkedName:"Property"})]})})}):null]})}):null,n("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(r==null?void 0:r.length)||(s==null?void 0:s.length)?t("p",{className:" mt-[10px]",children:`This ${o} is already linked. Please first delete these entries which are linked it with`}):null,!(r!=null&&r.length)&&!(s!=null&&s.length)?t("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>h(b),children:"Delete"}):null]})]})]})})}),be=({title:d,linktitle:p,pagelink:m,allCustomers:r,onDataUpdate:h})=>{const b=localStorage.getItem("isAuth"),o=JSON.parse(b),{data:s}=M(o==null?void 0:o.roleid),[k,x]=i.exports.useState(!1),[u,v]=i.exports.useState(!1),[E,O]=i.exports.useState(""),[U,_]=i.exports.useState(""),[B,A]=i.exports.useState(""),[z,J]=i.exports.useState(""),V=async e=>{if(x(!0),v(!0),e)try{const l=`http://dev-rare.srp.ai/property/api/advancesearch?developerid=${e==null?void 0:e._id}&softdelete=false`,a=await fetch(l);if(!a.ok&&a.status!==400)throw new Error(`API 2 failed with status: ${a.status}`);const c=a.status===400?[]:await a.json(),j=[...c];O(j),A(c),_(e==null?void 0:e._id),J(e==null?void 0:e.developername),v(!1)}catch(l){console.error("Error fetching data:",l),v(!1)}},q=()=>{x(!1),A("")},K=async e=>{try{await me.patch("http://dev-rare.srp.ai/developer/api/developerdelete",{_id:e,softdelete:!0}),h(),A("")}catch(l){console.log(l,"error")}},Q=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:l})=>t("span",{children:l.indexOf(e)+1})},{Header:"Developer Name",accessor:"developername",Cell:e=>{var l,a,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,30))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>30?"...":""):"Not Available"})}},{Header:"Developer Code",accessor:"developercode",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const l=localStorage.getItem("isAuth"),a=JSON.parse(l),{data:c}=M(a==null?void 0:a.roleid);if(!c)return null;const j=(c==null?void 0:c.readdeveloper)===!0,de=(c==null?void 0:c.updatedeveloper)===!0,pe=(c==null?void 0:c.deletedeveloper)===!0;return n("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[j&&t(H,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:t(S,{className:"action-btn",to:`/view-developer/${e==null?void 0:e.cell.value}`,type:"button",children:t(N,{icon:"heroicons:eye"})})}),de&&t(H,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:t(S,{to:`/update-developer/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:t(N,{icon:"heroicons:pencil-square"})})}),pe&&t(H,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:t("button",{className:"action-btn",type:"button",onClick:()=>{var F,L;return V((L=(F=e==null?void 0:e.cell)==null?void 0:F.row)==null?void 0:L.original)},children:t(N,{icon:"heroicons:trash"})})})]})}}],W=i.exports.useMemo(()=>Q,[]),Y=i.exports.useMemo(()=>r),D=g.exports.useTable({columns:W,data:Y,initialState:{pageIndex:0,pageSize:50}},g.exports.useGlobalFilter,g.exports.useSortBy,g.exports.usePagination,g.exports.useRowSelect,e=>{e.visibleColumns.push(l=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>t("div",{children:t(G,{...a()})}),Cell:({row:a})=>t("div",{children:t(G,{...a.getToggleRowSelectedProps()})})},...l])}),{getTableProps:X,getTableBodyProps:Z,headerGroups:R,footerGroups:ge,page:ee,nextPage:te,previousPage:le,canNextPage:y,canPreviousPage:C,pageOptions:T,state:se,gotoPage:$,pageCount:ae,setPageSize:ne,setGlobalFilter:re,prepareRow:ce}=D,{globalFilter:ie,pageIndex:w,pageSize:oe}=se;return t(f,{children:n(he,{children:[n("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:d}),(s==null?void 0:s.createdeveloper)&&t(S,{to:m,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:p})]}),t("div",{className:"md:flex justify-end items-center mb-6",children:t(xe,{filter:ie,setFilter:re})}),t(fe,{showModal:k,handleClose:q,loaderModal:u,linkedData:E,handleDeleteData:K,dataId:U,moduleName:"Developer Name",PropertyData:B,developerName:z,dataRole:s}),t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"overflow-hidden ",children:n("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...X,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:R.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(l=>l.Header==="action"&&!((s==null?void 0:s.readdeveloper)===!0||(s==null?void 0:s.updatedeveloper)===!0||(s==null?void 0:s.deletedeveloper)===!0)?t("th",{}):n("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:"table-th",children:[l.render("Header"),t("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Z,children:ee.map(e=>(ce(e),t("tr",{...e.getRowProps(),children:e.cells.map(l=>t("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")}))})))})]})})})}),n("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[n("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[t("select",{className:"form-control py-2 w-max",value:oe,onChange:e=>ne(Number(e.target.value)),children:[50,100,100].map(e=>n("option",{value:e,children:["Show ",e]},e))}),n("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",n("span",{children:[w+1," of ",T.length]})]})]}),n("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>$(0),disabled:!C,children:t(N,{icon:"heroicons:chevron-double-left-solid"})})}),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${C?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>le(),disabled:!C,children:"Prev"})}),T.map((e,l)=>t("li",{children:t("button",{href:"#","aria-current":"page",className:` ${l===w?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>$(l),children:e+1})},l)),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>te(),disabled:!y,children:"Next"})}),t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{onClick:()=>$(ae-1),disabled:!y,className:` ${y?"":"opacity-50 cursor-not-allowed"}`,children:t(N,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},Se=()=>{const[d,p]=i.exports.useState([]),[m,r]=i.exports.useState(!1);return i.exports.useEffect(()=>{r(!0),(async()=>{const s=await(await fetch("http://dev-rare.srp.ai/developer")).json();p(s),r(!1)})()},[]),t(f,{children:m===!1?t("div",{className:" space-y-5",children:t(be,{pagelink:"/add-developer",linktitle:"Add new Developer",title:"All Developer",allCustomers:d,onDataUpdate:()=>{r(!0),(async()=>{const s=await(await fetch("http://dev-rare.srp.ai/developer")).json();p(s),r(!1)})()}})}):t(P,{})})};export{Se as default};
