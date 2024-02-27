import{R,j as t,F as H,r as S,b as $,c as u,I,T as De,L as He,f as Ae,bN as _e}from"./index.177fc75c.js";import{G as Fe}from"./GlobalFilter.3387d8c1.js";const $e=R.forwardRef(({indeterminate:v,...m},p)=>{const b=R.useRef(),g=p||b;return R.useEffect(()=>{g.current.indeterminate=v},[g,v]),t(H,{children:t("input",{type:"checkbox",ref:g,...m,className:"table-checkbox"})})}),je=({allData:v})=>{const m=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>t("span",{children:a.indexOf(e)+1})},{Header:"Status",accessor:"minimum_managementfee",Cell:e=>{var a,l,n,c,i,d,r,G,L,O,B,U,q,z,J,V,K,Q,W,X,Y,Z,w,ee,te,ae,le,ne,ce,se,ie,de,re,me,ue,pe,ge,oe,he,ve,fe,xe,be,Ce,Ne,ye,ke,Pe;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((c=(n=(l=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:l.original)==null?void 0:n.managementContract)==null?void 0:c.propertyid)&&((G=(r=(d=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:d.original)==null?void 0:r.managementContract)==null?void 0:G.contractperiod)&&((U=(B=(O=(L=e==null?void 0:e.cell)==null?void 0:L.row)==null?void 0:O.original)==null?void 0:B.managementContract)==null?void 0:U.contractstartdate)&&((V=(J=(z=(q=e==null?void 0:e.cell)==null?void 0:q.row)==null?void 0:z.original)==null?void 0:J.managementContract)==null?void 0:V.contractenddate)&&((X=(W=(Q=(K=e==null?void 0:e.cell)==null?void 0:K.row)==null?void 0:Q.original)==null?void 0:W.managementContract)==null?void 0:X.managementfee)&&((ee=(w=(Z=(Y=e==null?void 0:e.cell)==null?void 0:Y.row)==null?void 0:Z.original)==null?void 0:w.managementContract)==null?void 0:ee.minimum_managementfee)?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:((ne=(le=(ae=(te=e==null?void 0:e.cell)==null?void 0:te.row)==null?void 0:ae.original)==null?void 0:le.managementContract)==null?void 0:ne.propertyid)&&((de=(ie=(se=(ce=e==null?void 0:e.cell)==null?void 0:ce.row)==null?void 0:se.original)==null?void 0:ie.managementContract)==null?void 0:de.contractperiod)&&((pe=(ue=(me=(re=e==null?void 0:e.cell)==null?void 0:re.row)==null?void 0:me.original)==null?void 0:ue.managementContract)==null?void 0:pe.contractstartdate)&&((ve=(he=(oe=(ge=e==null?void 0:e.cell)==null?void 0:ge.row)==null?void 0:oe.original)==null?void 0:he.managementContract)==null?void 0:ve.contractenddate)&&((Ce=(be=(xe=(fe=e==null?void 0:e.cell)==null?void 0:fe.row)==null?void 0:xe.original)==null?void 0:be.managementContract)==null?void 0:Ce.managementfee)&&((Pe=(ke=(ye=(Ne=e==null?void 0:e.cell)==null?void 0:Ne.row)==null?void 0:ye.original)==null?void 0:ke.managementContract)==null?void 0:Pe.minimum_managementfee)?"Completed":"Not Completed"})})}},{Header:"unit number",accessor:e=>`${e.property.unitnumber}`,Cell:e=>{var a,l,n,c,i,d,r;return t("span",{children:((a=e==null?void 0:e.cell)==null?void 0:a.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?((i=(c=e==null?void 0:e.cell)==null?void 0:c.value)==null?void 0:i.slice(0,15))+(((r=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:r.length)>15?"...":""):"Not Available"})}},{Header:"building name",accessor:e=>`${e.property.building_name}`,Cell:e=>{var a,l,n,c,i,d,r;return t("span",{children:((a=e==null?void 0:e.cell)==null?void 0:a.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?((i=(c=e==null?void 0:e.cell)==null?void 0:c.value)==null?void 0:i.slice(0,15))+(((r=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:r.length)>15?"...":""):"Not Available"})}},{Header:"project name",accessor:e=>`${e.property.project_name}`,Cell:e=>{var a,l,n,c,i,d,r;return t("span",{children:((a=e==null?void 0:e.cell)==null?void 0:a.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?((i=(c=e==null?void 0:e.cell)==null?void 0:c.value)==null?void 0:i.slice(0,15))+(((r=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:r.length)>15?"...":""):"Not Available"})}},{Header:"community name",accessor:e=>`${e.property.community_name}`,Cell:e=>{var a,l,n,c,i,d,r;return t("span",{children:((a=e==null?void 0:e.cell)==null?void 0:a.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?((i=(c=e==null?void 0:e.cell)==null?void 0:c.value)==null?void 0:i.slice(0,15))+(((r=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:r.length)>15?"...":""):"Not Available"})}},{Header:"contract start date",accessor:e=>`${e.managementContract.contractstartdate}`,Cell:e=>{var a,l,n,c;return t("span",{children:((a=e==null?void 0:e.cell)==null?void 0:a.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?new Date((c=e==null?void 0:e.cell)==null?void 0:c.value).toDateString():"Not Available"})}},{Header:"contract end date",accessor:e=>`${e.managementContract.contractenddate}`,Cell:e=>{var a,l,n,c;return t("span",{children:((a=e==null?void 0:e.cell)==null?void 0:a.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?new Date((c=e==null?void 0:e.cell)==null?void 0:c.value).toDateString():"Not Available"})}},{Header:"management fee",accessor:e=>`${e.managementContract.managementfee}`,Cell:e=>{var a,l,n,c;return t("span",{children:((a=e==null?void 0:e.cell)==null?void 0:a.value)&&((l=e==null?void 0:e.cell)==null?void 0:l.value)!==void 0&&((n=e==null?void 0:e.cell)==null?void 0:n.value)!=="undefined"?parseFloat((c=e==null?void 0:e.cell)==null?void 0:c.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"Not Available"})}},{Header:"created-on",accessor:e=>`${e.managementContract.createdAt}`,Cell:e=>{var a,l;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"})}},{Header:"action",accessor:e=>`${e.managementContract._id}`,Cell:e=>t("div",{className:"flex space-x-3 rtl:space-x-reverse",children:t(De,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:t(He,{className:"action-btn",to:`/owner-managemnt-term/${e==null?void 0:e.cell.value}`,type:"button",children:t(I,{icon:"heroicons:eye"})})})})}],p=S.exports.useMemo(()=>m,[]),b=S.exports.useMemo(()=>v,[]),g=$.exports.useTable({columns:p,data:b,initialState:{pageIndex:0,pageSize:50}},$.exports.useGlobalFilter,$.exports.useSortBy,$.exports.usePagination,$.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:l})=>t("div",{children:t($e,{...l()})}),Cell:({row:l})=>t("div",{children:t($e,{...l.getToggleRowSelectedProps()})})},...a])}),{getTableProps:C,getTableBodyProps:M,headerGroups:N,footerGroups:E,page:o,nextPage:A,previousPage:h,canNextPage:f,canPreviousPage:y,pageOptions:_,state:F,gotoPage:D,pageCount:j,setPageSize:k,setGlobalFilter:T,prepareRow:s}=g,{globalFilter:x,pageIndex:P,pageSize:Se}=F;return u(H,{children:[t("div",{className:"md:flex justify-end items-center mb-6",children:t(Fe,{filter:x,setFilter:T})}),t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"overflow-hidden ",children:u("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...C,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:N.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>u("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),t("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...M,children:o.map(e=>(s(e),t("tr",{...e.getRowProps(),children:e.cells.map(a=>t("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))})))})]})})})}),u("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[u("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[t("select",{className:"form-control py-2 w-max",value:Se,onChange:e=>k(Number(e.target.value)),children:[10,25,50].map(e=>u("option",{value:e,children:["Show ",e]},e))}),u("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",u("span",{children:[P+1," of ",_.length]})]})]}),u("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>D(0),disabled:!y,children:t(I,{icon:"heroicons:chevron-double-left-solid"})})}),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>h(),disabled:!y,children:"Prev"})}),_.map((e,a)=>t("li",{children:t("button",{href:"#","aria-current":"page",className:` ${a===P?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>D(a),children:e+1})},a)),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${f?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>A(),disabled:!f,children:"Next"})}),t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{onClick:()=>D(j-1),disabled:!f,className:` ${f?"":"opacity-50 cursor-not-allowed"}`,children:t(I,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})},Ie=()=>{const v=localStorage.getItem("isAuth"),m=JSON.parse(v),[p,b]=S.exports.useState(),[g,C]=S.exports.useState(!1);return S.exports.useEffect(()=>{(async()=>{C(!0);try{const N=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${m==null?void 0:m._id}&sort=descending&type=customer&page=0&perPage=all`,E=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${m==null?void 0:m._id}&sort=descending&type=customer&page=0&perPage=all`,o=await fetch(N);if(!o.ok&&o.status!==400)throw new Error(`API 1 failed with status: ${o.status}`);const A=o.status===400?[]:await o.json(),h=await fetch(E);if(!h.ok&&h.status!==400)throw new Error(`API 2 failed with status: ${h.status}`);const f=h.status===400?[]:await h.json(),F=[...A,...f].map(s=>s._id).map(s=>fetch(`http://portals.rarehomesgroup.com/managementcontract/api/ownercontract/?propertyid=${s}`).then(x=>x.json())),j=(await Promise.all(F)).filter(s=>s.message!=="No contract found"),k=new Map;j.forEach(s=>{var x,P;k.has((x=s==null?void 0:s.managementContract)==null?void 0:x._id)||k.set((P=s==null?void 0:s.managementContract)==null?void 0:P._id,s)});const T=Array.from(k.values());b(T),C(!1)}catch(N){console.error("Error fetching data:",N),C(!1)}})()},[]),t(H,{children:t("div",{className:" space-y-5",children:t(Ae,{children:g===!1?t(H,{children:p!=null&&p.length?t(je,{allData:p}):t("p",{children:"No Management Term found"})}):t(_e,{})})})})};export{Ie as default};
