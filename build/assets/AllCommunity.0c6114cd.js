import{R as M,j as e,F as f,bL as O,r as d,b as N,c as n,C as xe,L as S,I as C,bP as fe,bN as J,K as be,T as _}from"./index.4c47fd31.js";import{G as ge}from"./GlobalFilter.d220e5e1.js";import{D as B}from"./DeleteParagraph.cb5f0c7e.js";const z=M.forwardRef(({indeterminate:u,...h},b)=>{const a=M.useRef(),p=b||a;return M.useEffect(()=>{p.current.indeterminate=u},[p,u]),e(f,{children:e("input",{type:"checkbox",ref:p,...h,className:"table-checkbox"})})}),ve=({showModal:u,handleClose:h,loaderModal:b,linkedData:a,handleDeleteData:p,dataId:y,moduleName:m,PropertyData:l,ProjectNameData:o,communityName:k,dataRole:x})=>n("div",{className:"thumbnail-container",children:[u&&e("div",{className:"modal-overlay-property",children:n("div",{className:"modal-new w-[850px]",children:[n("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[e("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${m}?`}),e("img",{src:fe,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:h})]}),b===!0?e(J,{}):n(f,{children:[a!=null&&a.length?e("div",{className:"data-list-modal",children:n(f,{children:[n("h4",{className:"text-[16px] mb-[10px]",children:[e("span",{className:"font-bold",children:"Community Name"})," ",k," is linked with the following modules:"]}),l!=null&&l.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:n("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Property: "}),(x==null?void 0:x.deletepropert)===!0?e(f,{children:l==null?void 0:l.map((i,g)=>n(S,{className:" mr-[5px] hover:underline",to:`/view-property/${i==null?void 0:i._id}?delete=true`,children:[i==null?void 0:i.unitnumber,g!==l.length-1?",":null]},g+1))}):e(B,{moduleName:m,linkedName:"Property"})]})})}):null,o!=null&&o.length?e("ul",{className:" mb-[10px] text-start",children:e("li",{className:"list-disc ml-[30px]",children:n("div",{className:"flex items-center",children:[e("span",{className:"font-semibold mr-[5px]",children:"Project Name: "}),(x==null?void 0:x.deleteproject)===!0?e(f,{children:o==null?void 0:o.map((i,g)=>n(S,{className:" mr-[5px] hover:underline",to:`/view-project/${i==null?void 0:i._id}?delete=true`,children:[i==null?void 0:i.projectName,g!==o.length-1?",":null]},g+1))}):e(B,{moduleName:m,linkedName:"Project Name"})]})})}):null]})}):null,n("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(a==null?void 0:a.length)||(l==null?void 0:l.length)||(o==null?void 0:o.length)?e("p",{className:" mt-[10px]",children:`This ${m} is already linked. Please first delete these entries which are linked it with`}):null,!(a!=null&&a.length)&&!(l!=null&&l.length)&&!(o!=null&&o.length)?e("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>p(y),children:"Delete"}):null]})]})]})}),e(f,{})]}),ye=({title:u,linktitle:h,pagelink:b,allCustomers:a,onDataUpdate:p})=>{const y=localStorage.getItem("isAuth"),m=JSON.parse(y),{data:l}=O(m==null?void 0:m.roleid),[o,k]=d.exports.useState(!1),[x,i]=d.exports.useState(!1),[g,V]=d.exports.useState(""),[j,q]=d.exports.useState(""),[K,T]=d.exports.useState(""),[Q,F]=d.exports.useState(""),[W,Y]=d.exports.useState(""),X=async t=>{if(k(!0),i(!0),t)try{const s=`http://dev-rare.srp.ai/projectname/pagination/pages?communityid=${t==null?void 0:t._id}`,c=`http://dev-rare.srp.ai/property/api/advancesearch?communityid=${t==null?void 0:t._id}&softdelete=false`,r=await fetch(s);if(!r.ok&&r.status!==400)throw new Error(`API 1 failed with status: ${r.status}`);const $=r.status===400?[]:await r.json(),v=await fetch(c);if(!v.ok&&v.status!==400)throw new Error(`API 2 failed with status: ${v.status}`);const I=v.status===400?[]:await v.json(),H=[...$,...I];F($),T(I),V(H),q(t==null?void 0:t._id),Y(t==null?void 0:t.communityname),i(!1)}catch(s){console.error("Error fetching data:",s),i(!1)}},Z=()=>{k(!1),T(""),F("")},P=async t=>{try{await be.patch("http://dev-rare.srp.ai/community/api/communitydelete",{_id:t,softdelete:!0}),p(),T(""),F("")}catch(s){console.log(s,"error")}},R=[{Header:"Sr no",accessor:"id",Cell:({row:t,flatRows:s})=>e("span",{children:s.indexOf(t)+1})},{Header:"Community Name",accessor:"communityname",Cell:t=>{var s,c;return e("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?(c=t==null?void 0:t.cell)==null?void 0:c.value:"Not Available"})}},{Header:"Community Code",accessor:"communitycode",Cell:t=>{var s,c;return e("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?(c=t==null?void 0:t.cell)==null?void 0:c.value:"Not Available"})}},{Header:"created-on",accessor:"createdAt",Cell:t=>{var s,c;return e("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?new Date((c=t==null?void 0:t.cell)==null?void 0:c.value).toDateString():"Not Available"})}},{Header:"action",accessor:t=>`${t._id}`,Cell:t=>{const s=localStorage.getItem("isAuth"),c=JSON.parse(s),{data:r}=O(c==null?void 0:c.roleid);if(!r)return null;const $=(r==null?void 0:r.readcommunity)===!0,v=(r==null?void 0:r.updatecommunity)===!0,I=(r==null?void 0:r.deletecommunity)===!0;return n("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[$&&e(_,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e(S,{className:"action-btn",to:`/view-community/${t==null?void 0:t.cell.value}`,type:"button",children:e(C,{icon:"heroicons:eye"})})}),v&&e(_,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e(S,{to:`/update-community/${t==null?void 0:t.cell.value}`,className:"action-btn",type:"button",children:e(C,{icon:"heroicons:pencil-square"})})}),I&&e(_,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",onClick:()=>{var H,U;return X((U=(H=t==null?void 0:t.cell)==null?void 0:H.row)==null?void 0:U.original)},children:e(C,{icon:"heroicons:trash"})})})]})}}],D=d.exports.useMemo(()=>R,[]),ee=d.exports.useMemo(()=>a),te=N.exports.useTable({columns:D,data:ee,initialState:{pageIndex:0,pageSize:50}},N.exports.useGlobalFilter,N.exports.useSortBy,N.exports.usePagination,N.exports.useRowSelect,t=>{t.visibleColumns.push(s=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:c})=>e("div",{children:e(z,{...c()})}),Cell:({row:c})=>e("div",{children:e(z,{...c.getToggleRowSelectedProps()})})},...s])}),{getTableProps:se,getTableBodyProps:le,headerGroups:ne,footerGroups:Ne,page:ae,nextPage:ce,previousPage:ie,canNextPage:w,canPreviousPage:A,pageOptions:E,state:re,gotoPage:L,pageCount:oe,setPageSize:de,setGlobalFilter:me,prepareRow:ue}=te,{globalFilter:he,pageIndex:G,pageSize:pe}=re;return e(f,{children:n(xe,{children:[n("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:u}),(l==null?void 0:l.createcommunity)===!0?e(S,{to:b,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:h}):null]}),e("div",{className:"md:flex justify-end items-center mb-6",children:e(ge,{filter:he,setFilter:me})}),e(ve,{showModal:o,handleClose:Z,loaderModal:x,dataRole:l,linkedData:g,handleDeleteData:P,dataId:j,moduleName:"Community",PropertyData:K,ProjectNameData:Q,communityName:W}),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:n("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...se,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:ne.map(t=>e("tr",{...t.getHeaderGroupProps(),children:t.headers.map(s=>s.Header==="action"&&!((l==null?void 0:l.readcommunity)===!0||(l==null?void 0:l.updatecommunity)===!0||(l==null?void 0:l.deletecommunity)===!0)?e("th",{}):n("th",{...s.getHeaderProps(s.getSortByToggleProps()),scope:"col",className:"table-th",children:[s.render("Header"),e("span",{children:s.isSorted?s.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...le,children:ae.map(t=>(ue(t),e("tr",{...t.getRowProps(),children:t.cells.map(s=>e("td",{...s.getCellProps(),className:"table-td",children:s.render("Cell")}))})))})]})})})}),n("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[n("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:pe,onChange:t=>de(Number(t.target.value)),children:[50,100,200].map(t=>n("option",{value:t,children:["Show ",t]},t))}),n("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",n("span",{children:[G+1," of ",E.length]})]})]}),n("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${A?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>L(0),disabled:!A,children:e(C,{icon:"heroicons:chevron-double-left-solid"})})}),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${A?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ie(),disabled:!A,children:"Prev"})}),E.map((t,s)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${s===G?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>L(s),children:t+1})},s)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${w?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ce(),disabled:!w,children:"Next"})}),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>L(oe-1),disabled:!w,className:` ${w?"":"opacity-50 cursor-not-allowed"}`,children:e(C,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},we=()=>{const[u,h]=d.exports.useState([]),[b,a]=d.exports.useState(!1);return d.exports.useEffect(()=>{a(!0),(async()=>{const l=await(await fetch("http://dev-rare.srp.ai/community")).json();h(l),a(!1)})()},[]),e(f,{children:b===!1?e("div",{className:" space-y-5",children:e(ye,{pagelink:"/add-community",linktitle:"Add new Community",title:"All Community",allCustomers:u,onDataUpdate:()=>{a(!0),(async()=>{const l=await(await fetch("http://dev-rare.srp.ai/community")).json();h(l),a(!1)})()}})}):e(J,{})})};export{we as default};
