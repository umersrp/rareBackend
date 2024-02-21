import{R as M,j as l,F as S,bL as Z,r as m,b as $,c as i,C as Te,L as I,I as H,bP as D,bN as w,K as Fe,T as P}from"./index.5d56e3e7.js";import{G as Le}from"./GlobalFilter.887a3ba4.js";import{D as Me}from"./DeleteParagraph.09095a14.js";const R=M.forwardRef(({indeterminate:b,...v},g)=>{const c=M.useRef(),f=g||c;return M.useEffect(()=>{f.current.indeterminate=b},[f,b]),l(S,{children:l("input",{type:"checkbox",ref:f,...v,className:"table-checkbox"})})}),Pe=({showModal:b,handleClose:v,loaderModal:g,linkedData:c,handleDeleteData:f,dataId:A,moduleName:N,PropertyData:s,buildingName:T,dataRole:C})=>l("div",{className:"thumbnail-container",children:b&&l("div",{className:"modal-overlay-property",children:i("div",{className:"modal-new w-[850px]",children:[i("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:`Are You Sure you Want to Delete this ${N}?`}),l("img",{src:D,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:v})]}),g===!0?l(w,{}):i(S,{children:[c!=null&&c.length?l("div",{className:"data-list-modal",children:i(S,{children:[i("h4",{className:"text-[16px] mb-[10px]",children:[l("span",{className:"font-bold",children:N})," ",T," is linked with the following modules:"]}),s!=null&&s.length?l("ul",{className:" mb-[10px] text-start",children:l("li",{className:"list-disc ml-[30px]",children:i("div",{className:"flex items-center",children:[l("span",{className:"font-semibold mr-[5px]",children:"Property: "}),(C==null?void 0:C.deletepropert)===!0?l(S,{children:s==null?void 0:s.map((y,k)=>i(I,{className:" mr-[5px] hover:underline",to:`/view-property/${y==null?void 0:y._id}?delete=true`,children:[y==null?void 0:y.unitnumber,k!==s.length-1?",":null]},k+1))}):l(Me,{moduleName:N,linkedName:"Property"})]})})}):null]})}):null,i("div",{className:"mb-[15px] max-h-[700px] pr-[15px]",children:[(c==null?void 0:c.length)||(s==null?void 0:s.length)?l("p",{className:" mt-[10px]",children:`This ${N} is already linked. Please first delete these entries which are linked it with`}):null,!(c!=null&&c.length)&&!(s!=null&&s.length)?l("button",{className:"btn btn inline-flex justify-center btn-danger ",onClick:()=>f(A),children:"Delete"}):null]})]})]})})}),_e=({showAmenitiesModal:b,handleCloseAmenities:v,AmenitiesModalData:g})=>l("div",{className:"thumbnail-container",children:b&&l("div",{className:"modal-overlay-property",children:i("div",{className:"modal-new w-[850px] pb-[25px]",children:[i("div",{className:"flex items-center justify-between mb-[20px] pb-[7px] modal-border-bottom",children:[l("h5",{className:" text-[18px] capitalize",children:"Building Amenities"}),l("img",{src:D,alt:"cancelIcon",className:"w-[20px] cursor-pointer h-[20px]",onClick:v})]}),l("div",{className:"flex flex-wrap items-center gap-[15px]",children:g==null?void 0:g.map((c,f)=>l("p",{className:"  form-control py-2  w-[49%] ",children:c==null?void 0:c.amenitiesname},f+1))})]})})}),Ge=({title:b,linktitle:v,pagelink:g,allCustomers:c,onDataUpdate:f})=>{const A=localStorage.getItem("isAuth"),N=JSON.parse(A),{data:s}=Z(N==null?void 0:N.roleid),[T,C]=m.exports.useState(!1),[y,k]=m.exports.useState(!1),[ee,le]=m.exports.useState(""),[te,ae]=m.exports.useState(""),[se,F]=m.exports.useState(""),[ne,ce]=m.exports.useState(""),ie=async e=>{if(C(!0),k(!0),e)try{const t=`http://portals.rarehomesgroup.com//property/api/advancesearch?buildingid=${e==null?void 0:e._id}&softdelete=false`,a=await fetch(t);if(!a.ok&&a.status!==400)throw new Error(`API 2 failed with status: ${a.status}`);const n=a.status===400?[]:await a.json(),d=[...n];le(d),ae(e),F(n),ce(e==null?void 0:e.buildingname),k(!1)}catch(t){console.error("Error fetching data:",t),k(!1)}},de=()=>{C(!1),F("")},ue=async e=>{try{await Fe.patch("http://portals.rarehomesgroup.com//buildingname/api/buildingdelete",{_id:e,softdelete:!0}),f(),F("")}catch(t){console.log(t,"error")}},[re,_]=m.exports.useState(!1),[he,G]=m.exports.useState(""),pe=e=>{_(!0),G(e)},me=()=>{_(!1),G("")},ge=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:t})=>l("span",{children:t.indexOf(e)+1})},{Header:"Building Name",accessor:"buildingname",Cell:e=>{var t,a;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Building Code",accessor:"buildingcode",Cell:e=>{var t,a;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Project Name",accessor:"project_name",Cell:e=>{var t,a;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Community Name",accessor:"community_name",Cell:e=>{var t,a;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Amenities",accessor:"amenities_data",Cell:e=>{var t,a,n,d,h,p,u,r,o,x,O,U,z,J,q,K,Q,W,Y;return l("span",{className:"block w-full",children:!((a=(t=e==null?void 0:e.cell)==null?void 0:t.value)!=null&&a.length)||!((n=e==null?void 0:e.cell)!=null&&n.value)?l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${!((h=(d=e==null?void 0:e.cell)==null?void 0:d.value)!=null&&h.length)||!((p=e==null?void 0:e.cell)!=null&&p.value)?"text-danger-500 bg-danger-500":"text-success-500 bg-success-500 cursor-pointer"} `,children:!((r=(u=e==null?void 0:e.cell)==null?void 0:u.value)!=null&&r.length)||!((o=e==null?void 0:e.cell)!=null&&o.value)?"0":"View "+((O=(x=e==null?void 0:e.cell)==null?void 0:x.value)==null?void 0:O.length)}):l("span",{onClick:()=>{var X;return pe((X=e==null?void 0:e.cell)==null?void 0:X.value)},className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${!((z=(U=e==null?void 0:e.cell)==null?void 0:U.value)!=null&&z.length)||!((J=e==null?void 0:e.cell)!=null&&J.value)?"text-danger-500 bg-danger-500":"text-success-500 bg-success-500 cursor-pointer"} `,children:!((K=(q=e==null?void 0:e.cell)==null?void 0:q.value)!=null&&K.length)||!((Q=e==null?void 0:e.cell)!=null&&Q.value)?"0":"View "+((Y=(W=e==null?void 0:e.cell)==null?void 0:W.value)==null?void 0:Y.length)})})}},{Header:"typical floor plan images",accessor:"typicalfloorplan",Cell:e=>{var t,a,n,d,h,p,u,r,o,x;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:a.length)===0||((n=e==null?void 0:e.cell)==null?void 0:n.value[0])===""?"text-danger-500 bg-danger-500":((h=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:h.length)>0&&((u=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:u.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((r=e==null?void 0:e.cell)==null?void 0:r.value[0])===""?"0":(x=(o=e==null?void 0:e.cell)==null?void 0:o.value)==null?void 0:x.length})})}},{Header:"building elevation images",accessor:"buildingelevation",Cell:e=>{var t,a,n,d,h,p,u,r,o,x;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:a.length)===0||((n=e==null?void 0:e.cell)==null?void 0:n.value[0])===""?"text-danger-500 bg-danger-500":((h=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:h.length)>0&&((u=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:u.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((r=e==null?void 0:e.cell)==null?void 0:r.value[0])===""?"0":(x=(o=e==null?void 0:e.cell)==null?void 0:o.value)==null?void 0:x.length})})}},{Header:"amenities images",accessor:"amenitiesimages",Cell:e=>{var t,a,n,d,h,p,u,r,o,x;return l("span",{className:"block w-full",children:l("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:a.length)===0||((n=e==null?void 0:e.cell)==null?void 0:n.value[0])===""?"text-danger-500 bg-danger-500":((h=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:h.length)>0&&((u=(p=e==null?void 0:e.cell)==null?void 0:p.value)==null?void 0:u.length)<10?"badge bg-info-500 text-info-500 bg-opacity-[0.12] pill":"text-success-500 bg-success-500"} `,children:((r=e==null?void 0:e.cell)==null?void 0:r.value[0])===""?"0":(x=(o=e==null?void 0:e.cell)==null?void 0:o.value)==null?void 0:x.length})})}},{Header:"created-on",accessor:"createdAt",Cell:e=>{var t,a;return l("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"action",accessor:e=>`${e._id}`,Cell:e=>{const t=localStorage.getItem("isAuth"),a=JSON.parse(t),{data:n}=Z(a==null?void 0:a.roleid);if(!n)return null;const d=(n==null?void 0:n.readbuilding)===!0,h=(n==null?void 0:n.updatebuilding)===!0,p=(n==null?void 0:n.deletebuilding)===!0;return i("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[d&&l(P,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:l(I,{className:"action-btn",to:`/view-building/${e==null?void 0:e.cell.value}`,type:"button",children:l(H,{icon:"heroicons:eye"})})}),h&&l(P,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:l(I,{to:`/update-building/${e==null?void 0:e.cell.value}`,className:"action-btn",type:"button",children:l(H,{icon:"heroicons:pencil-square"})})}),p&&l(P,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:l("button",{className:"action-btn",type:"button",onClick:()=>{var u,r;return ie((r=(u=e==null?void 0:e.cell)==null?void 0:u.row)==null?void 0:r.original)},children:l(H,{icon:"heroicons:trash"})})})]})}}],oe=m.exports.useMemo(()=>ge,[]),xe=m.exports.useMemo(()=>c),be=$.exports.useTable({columns:oe,data:xe,initialState:{pageIndex:0,pageSize:50}},$.exports.useGlobalFilter,$.exports.useSortBy,$.exports.usePagination,$.exports.useRowSelect,e=>{e.visibleColumns.push(t=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>l("div",{children:l(R,{...a()})}),Cell:({row:a})=>l("div",{children:l(R,{...a.getToggleRowSelectedProps()})})},...t])}),{getTableProps:ve,getTableBodyProps:fe,headerGroups:Ne,footerGroups:Ve,page:ye,nextPage:Ce,previousPage:ke,canNextPage:j,canPreviousPage:B,pageOptions:V,state:Se,gotoPage:L,pageCount:Ae,setPageSize:$e,setGlobalFilter:He,prepareRow:je}=be,{globalFilter:Be,pageIndex:E,pageSize:Ie}=Se;return l(S,{children:i(Te,{children:[i("div",{className:"flex justify-between items-center mb-6",children:[l("h4",{className:"card-title",children:b}),(s==null?void 0:s.createbuilding)&&l(I,{to:g,className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:v})]}),l("div",{className:"md:flex justify-end items-center mb-6",children:l(Le,{filter:Be,setFilter:He})}),l(Pe,{showModal:T,handleClose:de,dataRole:s,loaderModal:y,linkedData:ee,handleDeleteData:ue,dataId:te,moduleName:"Building Name",PropertyData:se,buildingName:ne}),l(_e,{showAmenitiesModal:re,handleCloseAmenities:me,AmenitiesModalData:he}),l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"overflow-hidden ",children:i("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ve,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Ne.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(t=>t.Header==="action"&&!((s==null?void 0:s.readbuilding)===!0||(s==null?void 0:s.updatebuilding)===!0||(s==null?void 0:s.deletebuilding)===!0)?l("th",{}):i("th",{...t.getHeaderProps(t.getSortByToggleProps()),scope:"col",className:"table-th",children:[t.render("Header"),l("span",{children:t.isSorted?t.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...fe,children:ye.map(e=>(je(e),l("tr",{...e.getRowProps(),children:e.cells.map(t=>l("td",{...t.getCellProps(),className:"table-td",children:t.render("Cell")}))})))})]})})})}),i("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[i("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[l("select",{className:"form-control py-2 w-max",value:Ie,onChange:e=>$e(Number(e.target.value)),children:[50,100,100].map(e=>i("option",{value:e,children:["Show ",e]},e))}),i("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",i("span",{children:[E+1," of ",V.length]})]})]}),i("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${B?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>L(0),disabled:!B,children:l(H,{icon:"heroicons:chevron-double-left-solid"})})}),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${B?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ke(),disabled:!B,children:"Prev"})}),V.map((e,t)=>l("li",{children:l("button",{href:"#","aria-current":"page",className:` ${t===E?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>L(t),children:e+1})},t)),l("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{className:` ${j?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>Ce(),disabled:!j,children:"Next"})}),l("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:l("button",{onClick:()=>L(Ae-1),disabled:!j,className:` ${j?"":"opacity-50 cursor-not-allowed"}`,children:l(H,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})},ze=()=>{const[b,v]=m.exports.useState([]),[g,c]=m.exports.useState(!1);return m.exports.useEffect(()=>{c(!0),(async()=>{const s=await(await fetch("http://portals.rarehomesgroup.com//buildingname")).json();v(s),c(!1)})()},[]),l(S,{children:g===!1?l("div",{className:" space-y-5",children:l(Ge,{pagelink:"/add-building",linktitle:"Add new Building",title:"All Building",allCustomers:b,onDataUpdate:()=>{c(!0),(async()=>{const s=await(await fetch("http://portals.rarehomesgroup.com//buildingname")).json();v(s),c(!1)})()}})}):l(w,{})})};export{ze as default};
