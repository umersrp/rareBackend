import{r as u,b as r,c as d,F as H,j as t,I as me,f as Se,aq as Ae,bO as He}from"./index.aff5cc02.js";import{G as ke}from"./GlobalFilter.8aa4efff.js";const Pe=({allCustomers:h})=>{const v=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:l})=>t("span",{children:l.indexOf(e)+1})},{Header:"Listed for",accessor:"propertystatus",Cell:e=>{var l,a,s,c,m;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((l=e==null?void 0:e.cell)==null?void 0:l.value)&&((c=(s=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:s.original)==null?void 0:c.unlisted)===!1?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:"Listed for "+((m=e==null?void 0:e.cell)==null?void 0:m.value)})})}},{Header:"listed / unlisted",accessor:"unlisted",Cell:e=>{var a,s,c,m,F,j,L,T,$,R,_,U,G,M,z,B,O,I,E,q,J,K,Q,V,W,X,Y,Z,o,w,ee,le,ae,te,se,ce,ne,ie,de,ue,pe,he,ve,ge;let l;return(a=e==null?void 0:e.cell)!=null&&a.value?((s=e==null?void 0:e.cell)==null?void 0:s.value)===!0&&((F=(m=(c=e==null?void 0:e.cell)==null?void 0:c.row)==null?void 0:m.original)==null?void 0:F.propertystatus)==="Rent"||((j=e==null?void 0:e.cell)==null?void 0:j.value)===!0&&(($=(T=(L=e==null?void 0:e.cell)==null?void 0:L.row)==null?void 0:T.original)==null?void 0:$.propertystatus)==="Sale"||((R=e==null?void 0:e.cell)==null?void 0:R.value)===!0&&((G=(U=(_=e==null?void 0:e.cell)==null?void 0:_.row)==null?void 0:U.original)==null?void 0:G.propertystatus)==="Short Term"?l="Unlisted":((M=e==null?void 0:e.cell)==null?void 0:M.value)===!1&&(((O=(B=(z=e==null?void 0:e.cell)==null?void 0:z.row)==null?void 0:B.original)==null?void 0:O.propertystatus)==="Short Term"||((q=(E=(I=e==null?void 0:e.cell)==null?void 0:I.row)==null?void 0:E.original)==null?void 0:q.propertystatus)==="Sale"||((Q=(K=(J=e==null?void 0:e.cell)==null?void 0:J.row)==null?void 0:K.original)==null?void 0:Q.propertystatus)==="Rent")&&(l="listed"):((V=e==null?void 0:e.cell)==null?void 0:V.value)===!1&&(((Y=(X=(W=e==null?void 0:e.cell)==null?void 0:W.row)==null?void 0:X.original)==null?void 0:Y.propertystatus)==="Short Term"||((w=(o=(Z=e==null?void 0:e.cell)==null?void 0:Z.row)==null?void 0:o.original)==null?void 0:w.propertystatus)==="Sale"||((ae=(le=(ee=e==null?void 0:e.cell)==null?void 0:ee.row)==null?void 0:le.original)==null?void 0:ae.propertystatus)==="Rent")?l="listed":l="No",t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((te=e==null?void 0:e.cell)==null?void 0:te.value)===!1&&(((ne=(ce=(se=e==null?void 0:e.cell)==null?void 0:se.row)==null?void 0:ce.original)==null?void 0:ne.propertystatus)==="Short Term"||((ue=(de=(ie=e==null?void 0:e.cell)==null?void 0:ie.row)==null?void 0:de.original)==null?void 0:ue.propertystatus)==="Sale"||((ve=(he=(pe=e==null?void 0:e.cell)==null?void 0:pe.row)==null?void 0:he.original)==null?void 0:ve.propertystatus)==="Rent")?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} 
                      ${((ge=e==null?void 0:e.cell)==null?void 0:ge.value)===!0?"text-danger-500 bg-danger-500":""}
                       `,children:l})})}},{Header:"unlist date",accessor:"unlist_date",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Renewal availability",accessor:"again_available",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Property Unit No",accessor:"unitnumber",Cell:e=>{var l,a,s,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((s=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:s.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"Assigned Agent",accessor:"employee_email",Cell:e=>{var l,a,s,c;return t("span",{className:"lowercase",children:(l=e==null?void 0:e.cell)!=null&&l.value?((s=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:s.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"project name",accessor:"project_name",Cell:e=>{var l,a,s,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((s=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:s.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"building name",accessor:"building_name",Cell:e=>{var l,a,s,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((s=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:s.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"community name",accessor:"community_name",Cell:e=>{var l,a,s,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((s=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:s.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"subtype name",accessor:"subtype_name",Cell:e=>{var l,a,s,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((s=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:s.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"balcony",accessor:"balcony",Cell:e=>{var l,a,s,c;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((s=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:s.slice(0,15))+(((c=e==null?void 0:e.cell)==null?void 0:c.value.length)>15?"...":""):"Not Available"})}},{Header:"floor",accessor:"floor",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"furnished",accessor:"furnished",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"halfbath room",accessor:"halfbathroom",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"fullbath room",accessor:"nobathroom",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"plot size",accessor:"plotsize",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"kitchen",accessor:"kitchen",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"property type",accessor:"propertytype",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Rent / Sold amount",accessor:"propertyvaluation",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?parseFloat((a=e==null?void 0:e.cell)==null?void 0:a.value).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"listing source",accessor:"listingsource",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"listing type",accessor:"listingtype",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"maintenance done",accessor:"maintenance",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}}],g=u.exports.useMemo(()=>v,[]),N=u.exports.useMemo(()=>h),p=r.exports.useTable({columns:g,data:N,initialState:{pageIndex:0,pageSize:50}},r.exports.useGlobalFilter,r.exports.useSortBy,r.exports.usePagination,r.exports.useRowSelect,e=>{e.visibleColumns.push(l=>[...l])}),{getTableProps:C,getTableBodyProps:b,headerGroups:S,footerGroups:k,page:x,nextPage:i,previousPage:f,canNextPage:n,canPreviousPage:y,pageOptions:P,state:re,gotoPage:A,pageCount:be,setPageSize:xe,setGlobalFilter:fe,prepareRow:ye}=p,{globalFilter:Ne,pageIndex:D,pageSize:Ce}=re;return d(H,{children:[t("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px]",children:t(ke,{filter:Ne,setFilter:fe})}),t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:" ",children:d("table",{className:"min-w-[150%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...C,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:S.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(l=>d("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:" table-th ",children:[l.render("Header"),t("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...b,children:x.map(e=>(ye(e),t("tr",{...e.getRowProps(),children:e.cells.map(l=>t("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")}))})))})]})})})}),d("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[d("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[t("select",{className:"form-control py-2 w-max",value:Ce,onChange:e=>xe(Number(e.target.value)),children:[10,25,50].map(e=>d("option",{value:e,children:["Show ",e]},e))}),d("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",d("span",{children:[D+1," of ",P.length]})]})]}),d("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>A(0),disabled:!y,children:t(me,{icon:"heroicons:chevron-double-left-solid"})})}),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>f(),disabled:!y,children:"Prev"})}),P.map((e,l)=>t("li",{children:t("button",{href:"#","aria-current":"page",className:` ${l===D?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>A(l),children:e+1})},l)),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${n?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>i(),disabled:!n,children:"Next"})}),t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{onClick:()=>A(be-1),disabled:!n,className:` ${n?"":"opacity-50 cursor-not-allowed"}`,children:t(me,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})},De={option:(h,v)=>({...h,fontSize:"14px"})},Le=()=>{const[h,v]=u.exports.useState(!1),[g,N]=u.exports.useState(""),[p,C]=u.exports.useState(""),[b,S]=u.exports.useState([]),[k,x]=u.exports.useState(!1);return u.exports.useEffect(()=>{fetch("http://portals.rarehomesgroup.com/property").then(i=>i.json()).then(i=>{const f=i==null?void 0:i.map(n=>({label:n.unitnumber+" | "+(n==null?void 0:n.communityname)+" | "+(n==null?void 0:n.projectname)+" | "+(n==null?void 0:n.buildingname),value:n._id}));S(f)})},[]),u.exports.useEffect(()=>{p&&(v(!0),(async()=>{const n=await(await fetch(`http://portals.rarehomesgroup.com/rentpurchase/api/search?porpertyid=${p}`)).json();n!=null&&n.length?x(!0):x(!1),N(n),v(!1)})())},[p]),t(H,{children:t("div",{className:" space-y-5",children:d(Se,{children:[d("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:"Availability Logs"}),t("div",{className:"w-[600px]",children:t(Ae,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:b,value:b.filter(function(i){return i.value===p}),onChange:i=>{C(i==null?void 0:i.value)},styles:De,id:"hh",placeholder:"Select Property"})})]}),h===!1?t(H,{children:p!==""?g&&g.length&&k===!0?t(Pe,{allCustomers:g}):t("p",{children:"No Data Found"}):t("p",{children:"Please First Select Property"})}):t(He,{})]})})})};export{Le as default};
