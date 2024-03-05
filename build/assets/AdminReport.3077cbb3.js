import{R as M,j as a,F as k,r as n,b as v,c as o,f as me,aq as D,I as V}from"./index.4113582e.js";import{G as fe}from"./GlobalFilter.9b0cb74a.js";import{D as xe}from"./index.esm.af21ba6f.js";M.forwardRef(({indeterminate:l,...p},x)=>{const F=M.useRef(),u=x||F;return M.useEffect(()=>{u.current.indeterminate=l},[u,l]),a(k,{children:a("input",{type:"checkbox",ref:u,...p,className:"table-checkbox"})})});const C={option:(l,p)=>({...l,fontSize:"14px"})},Se=()=>{const[l,p]=n.exports.useState([]),[x,F]=n.exports.useState(),[u,I]=n.exports.useState(),[f,U]=n.exports.useState({startDate:"",endDate:""}),O=e=>{U(e)},[P,W]=n.exports.useState([]);n.exports.useEffect(()=>{const e=async()=>{let t=[];for(let s of l)if(s!=null&&s.ownerid)try{const d=await(await fetch(`http://portals.rarehomesgroup.com/users/${s.ownerid}`)).json();t.push(d)}catch(r){console.error(r)}W(t)};l!=null&&l.length&&e()},[l]);const[b,B]=n.exports.useState([]),[J,T]=n.exports.useState(!1);n.exports.useEffect(()=>{if(T(!0),P.length){const e=[...new Map(P.map(s=>[s._id,s])).values()],t=e==null?void 0:e.map(s=>({label:s.firstname+" "+s.lastname+" | "+s.email,value:s._id}));T(!1),B(t)}},[P.length]);const[c,j]=n.exports.useState(),[A,K]=n.exports.useState([]);n.exports.useEffect(()=>{const e=async()=>{let t=[];for(let s of l)if(s!=null&&s.propertyid)try{const d=await(await fetch(`http://portals.rarehomesgroup.com/property/${s.propertyid}`)).json();t.push(d)}catch(r){console.error(r)}K(t)};l!=null&&l.length&&e()},[l]);const[N,Q]=n.exports.useState([]),[X,q]=n.exports.useState(!1);n.exports.useEffect(()=>{if(q(!0),A.length){const e=[...new Map(A.map(s=>[s._id,s])).values()],t=[];e.forEach(s=>{s._id!==void 0&&t.push({label:s.unitnumber+" | "+s.communityname+" | "+s.projectname,value:s._id})}),q(!1),Q(t)}},[A.length]);const[i,$]=n.exports.useState();n.exports.useEffect(()=>{(async()=>{const s=await(await fetch("http://portals.rarehomesgroup.com/booking")).json();return p(s)})()},[]);const[z,H]=n.exports.useState(!1),Y=async()=>{if(f.startDate&&f.endDate){const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/api/reservationdate?${c!=null&&c.ownerid?"ownerid="+(c==null?void 0:c.ownerid)+"&":""}${i!=null&&i.propertyid?"propertyid="+(i==null?void 0:i.propertyid)+"&":""}fromDate=${f.startDate}&toDate=${f.endDate}`)).json();H(!0),t!=null&&t.booking?p(t==null?void 0:t.booking):p([])}else{const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/pagination/pages?${c!=null&&c.ownerid?"ownerid="+(c==null?void 0:c.ownerid)+"&":""}${i!=null&&i.propertyid?"propertyid="+(i==null?void 0:i.propertyid)+"&":""}page=0&perPage=all`)).json();H(!0),t!=null&&t.booking?p(t==null?void 0:t.booking):p([])}},Z=async e=>{if(z===!0){const s=await(await fetch("http://portals.rarehomesgroup.com/booking")).json();return H(!1),U([]),j(),$(),p(s)}};n.exports.useEffect(()=>{var t;let e=0;for(let s=0;s<(l==null?void 0:l.length);s++){let r=parseFloat((t=l[s])==null?void 0:t.nonight);e+=r}F(e)},[l==null?void 0:l.length]),n.exports.useEffect(()=>{var t;let e=0;for(let s=0;s<(l==null?void 0:l.length);s++){let r=parseFloat((t=l[s])==null?void 0:t.roomrentamount);e+=r}I(e)},[l==null?void 0:l.length]);const w=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:t})=>a("span",{children:t.indexOf(e)+1})},{Header:"guest name",accessor:"guestname",Cell:e=>{var t,s,r,d,h;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((r=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:r.slice(0,15))+(((h=(d=e==null?void 0:e.cell)==null?void 0:d.value)==null?void 0:h.length)>15?"...":""):"Not Available"})}},{Header:"Owner Name",accessor:"ownerid",Cell:e=>{var r;const[t,s]=n.exports.useState("");return n.exports.useEffect(()=>{(async()=>{var h,g;if((h=e==null?void 0:e.cell)!=null&&h.value){const m=await(await fetch(`http://portals.rarehomesgroup.com/users/${(g=e==null?void 0:e.cell)==null?void 0:g.value}`)).json();m&&(console.log(m,"res"),s((m==null?void 0:m.firstname)+" "+(m==null?void 0:m.lastname)))}else s("Not Available")})()},[]),a("div",{children:a("span",{className:"inline-flex items-center",children:a("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(r=e==null?void 0:e.cell)!=null&&r.value?(t==null?void 0:t.slice(0,15))+((t==null?void 0:t.length)>15?"...":""):"Not Available"})})})}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var t,s;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((s=e==null?void 0:e.cell)==null?void 0:s.value).toDateString():"Not Available"})}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var t,s,r,d;return a("div",{children:a("span",{className:"inline-flex items-center",children:a("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(t=e==null?void 0:e.cell)!=null&&t.value?((s=e==null?void 0:e.cell)==null?void 0:s.value.slice(0,15))+(((d=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:d.length)>15?"...":""):"Not Available"})})})}},{Header:"checkin date",accessor:"checkindate",Cell:e=>{var t,s;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((s=e==null?void 0:e.cell)==null?void 0:s.value).toDateString():"Not Available"})}},{Header:"checkout date",accessor:"checkoutdate",Cell:e=>{var t,s;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((s=e==null?void 0:e.cell)==null?void 0:s.value).toDateString():"Not Available"})}},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var t,s;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?parseFloat((s=e==null?void 0:e.cell)==null?void 0:s.value).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}},{Header:"Rate per Day",accessor:"tourismfee",Cell:e=>{var t,s,r,d,h,g;return a("span",{children:Math.abs(((r=(s=(t=e==null?void 0:e.cell)==null?void 0:t.row)==null?void 0:s.original)==null?void 0:r.roomrentamount)/((g=(h=(d=e==null?void 0:e.cell)==null?void 0:d.row)==null?void 0:h.original)==null?void 0:g.nonight)).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})})}},{Header:"Booking Amount",accessor:"roomrentamount",Cell:e=>{var t,s;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?parseFloat((s=e==null?void 0:e.cell)==null?void 0:s.value).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"Not Available"})}}],ee=n.exports.useMemo(()=>w,[]),te=n.exports.useMemo(()=>l),ae=v.exports.useTable({columns:ee,data:te,initialState:{pageIndex:0,pageSize:50}},v.exports.useGlobalFilter,v.exports.useSortBy,v.exports.usePagination,v.exports.useRowSelect),{getTableProps:se,getTableBodyProps:le,headerGroups:R,footerGroups:ge,page:E,nextPage:ne,previousPage:re,canNextPage:y,canPreviousPage:S,pageOptions:_,state:ce,gotoPage:L,pageCount:ie,setPageSize:oe,setGlobalFilter:de,prepareRow:pe}=ae,{globalFilter:ue,pageIndex:G,pageSize:he}=ce;return a(k,{children:o(me,{children:[o("div",{className:"flex justify-between items-center mb-6",children:[a("h4",{className:"card-title",children:"Reports of Booking"}),a("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse",children:a(fe,{filter:ue,setFilter:de})})]}),a("div",{className:"mb-6",children:o("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse",children:[a("div",{className:"w-[400px] relative",children:X===!0?o(k,{children:[a("div",{className:"absolute w-[100%] z-10 h-[100%] opacity-[0.8]",style:{background:"#e2e8f0"},children:a("div",{className:"flex items-center justify-center h-[100%]",children:o("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})}),a(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:N,value:N.filter(function(e){return e.value===(i==null?void 0:i.propertyid)}),placeholder:"Select Property",onChange:e=>{$({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:C,id:"hh"})]}):a(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:N,value:N.filter(function(e){return e.value===(i==null?void 0:i.propertyid)}),placeholder:"Select Property",onChange:e=>{$({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:C,id:"hh"})}),a("div",{className:"w-[300px] relative",children:J===!0?o(k,{children:[a("div",{className:"absolute w-[100%] z-10 h-[100%] opacity-[0.8]",style:{background:"#e2e8f0"},children:a("div",{className:"flex items-center justify-center h-[100%]",children:o("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})}),a(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:b,value:b.filter(function(e){return e.value===(c==null?void 0:c.ownerid)}),placeholder:"Select owner",onChange:e=>{j({ownerid:e==null?void 0:e.value,ownername:e==null?void 0:e.label},"select box")},styles:C,id:"hh"})]}):a(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:b,value:b.filter(function(e){return e.value===(c==null?void 0:c.ownerid)}),placeholder:"Select owner",onChange:e=>{j({ownerid:e==null?void 0:e.value,ownername:e==null?void 0:e.label},"select box")},styles:C,id:"hh"})}),a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(xe,{value:f,inputClassName:"input-class",containerClassName:"container-class",onChange:O})})}),f.startDate&&f.endDate||c||i?a("button",{className:"btn-dark py-[10px] px-[20px] rounded-[5px]",onClick:Y,children:"Filter"}):null,z===!0?a("button",{className:"btn-secondary py-[10px] px-[20px] rounded-[5px]",onClick:Z,children:"Reset"}):null]})}),a("div",{className:"overflow-x-auto -mx-6",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:"overflow-hidden ",children:o("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...se,children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:R==null?void 0:R.map(e=>a("tr",{...e.getHeaderGroupProps(),children:e.headers.map(t=>o("th",{...t.getHeaderProps(t.getSortByToggleProps()),scope:"col",className:" table-th ",children:[t.render("Header"),a("span",{children:t.isSorted?t.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),l!=null&&l.length?o("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...le,children:[E==null?void 0:E.map(e=>(pe(e),a("tr",{...e.getRowProps(),children:e.cells.map(t=>a("td",{...t.getCellProps(),className:"table-td",children:t.render("Cell")}))}))),o("tr",{children:[a("td",{className:"table-td font-bold",children:"TOTAL"}),a("td",{}),a("td",{}),a("td",{}),a("td",{}),a("td",{}),a("td",{}),o("td",{className:"table-td font-bold",children:[x?x.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):0," Nights"]}),a("td",{className:"table-td font-bold",children:u&&x?Math.abs(u/x).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):0}),a("td",{className:"table-td font-bold",children:u?u.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):0})]})]}):"Not Available"]})})})}),o("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[o("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[a("select",{className:"form-control py-2 w-max",value:he,onChange:e=>oe(Number(e.target.value)),children:[50,100,200].map(e=>o("option",{value:e||50,children:["Show ",e]},e))}),o("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",o("span",{children:[G+1," of ",_.length]})]})]}),o("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[a("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>L(0),disabled:!S,children:a(V,{icon:"heroicons:chevron-double-left-solid"})})}),a("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${S?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>re(),disabled:!S,children:"Prev"})}),_.map((e,t)=>a("li",{children:a("button",{href:"#","aria-current":"page",className:` ${t===G?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>L(t),children:e+1})},t)),a("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>ne(),disabled:!y,children:"Next"})}),a("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:a("button",{onClick:()=>L(ie-1),disabled:!y,className:` ${y?"":"opacity-50 cursor-not-allowed"}`,children:a(V,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})};export{Se as default};
