import{R as H,j as t,F as u,r as n,b as v,c,C as xe,aq as Ne,c5 as be,c6 as ye}from"./index.f47d5396.js";import{L as X}from"./Rare logo New Gif Loading.02c4dc82.js";import{D as Se}from"./index.esm.8aa46c5b.js";import"./jspdf.es.min.0507b9ea.js";import"./html2canvas.esm.0eae2bf4.js";const Z=H.forwardRef(({indeterminate:g,...C},x)=>{const A=H.useRef(),r=x||A;return H.useEffect(()=>{r.current.indeterminate=g},[r,g]),t(u,{children:t("input",{type:"checkbox",ref:r,...C,className:"table-checkbox"})})}),De={option:(g,C)=>({...g,fontSize:"14px"})},Pe=({title:g,allData:C})=>{var z,M,G,U,q,J,K,V,W,Y;const[x,A]=n.exports.useState([]),[r,N]=n.exports.useState([]),w=localStorage.getItem("isAuth"),p=JSON.parse(w),[b,ee]=n.exports.useState();n.exports.useState(0),n.exports.useState(0),n.exports.useState();const[y,te]=n.exports.useState(),[S,ae]=n.exports.useState([]),[R,L]=n.exports.useState(!1),[se,$]=n.exports.useState(!1),[i,B]=n.exports.useState({propertyid:"",filteredDates:[]}),[le,ne]=n.exports.useState({startDate:"",endDate:""}),[_,I]=n.exports.useState("");console.log("selectedProperty",i);const re=async e=>{$(!0),I(e);const l=(await(await fetch(`http://dev-rare.srp.ai/booking/api/reservationdate?ownerid=${p==null?void 0:p._id}&${i!=null&&i.propertyid?"propertyid="+(i==null?void 0:i.propertyid)+"&":""}checkindate=${e.startDate}&checkoutdate=${e.endDate}`)).json()).filter(o=>o.propertyid===i.propertyid&&o.cancelled===!1);$(!1),B({...i,filteredDates:l}),N(l)},[d,ie]=n.exports.useState([]);n.exports.useEffect(()=>{(async()=>{const s=await(await fetch(`http://dev-rare.srp.ai/booking/pagination/pages?ownerid=${p==null?void 0:p._id}&page=0&perPage=all`)).json();s!=null&&s.booking?N([]):N([])})()},[]);const ce=e=>{const a=new Set;return e.filter(s=>a.has(s._id)?!1:(a.add(s._id),!0))};n.exports.useEffect(()=>{(async()=>{try{const a=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${p==null?void 0:p._id}&sort=descending&type=customer&page=0&perPage=all`,s=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${p==null?void 0:p._id}&sort=descending&type=customer&page=0&perPage=all`,l=await fetch(a);if(!l.ok&&l.status!==400)throw new Error(`API 1 failed with status: ${l.status}`);const o=l.status===400?[]:await l.json(),h=await fetch(s);if(!h.ok&&h.status!==400)throw new Error(`API 2 failed with status: ${h.status}`);const f=h.status===400?[]:await h.json(),D=[...o,...f].map(m=>m._id),P=(await Promise.all(D.map(async m=>await(await fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${m}&page=0&perPage=all`)).json()))).flat([2]),k=ce(P);A(k)}catch(a){console.error("Error fetching data:",a),setLoadingData(!1)}})()},[]),n.exports.useEffect(()=>{(async()=>{const a=x.map(async l=>{const{propertyid:o}=l;return await(await fetch(`http://dev-rare.srp.ai/property/${o}`)).json()}),s=await Promise.all(a);ie(s)})()},[x]),n.exports.useEffect(()=>{if(L(!0),d.length){const e=[...new Map(d.map(s=>[s._id,s])).values()],a=e==null?void 0:e.map(s=>({label:s.unitnumber+" | "+s.communityname+" | "+s.projectname+" | "+s.buildingname,value:s._id}));L(!1),ae(a)}},[d]),n.exports.useState(!1);const O=()=>{I(""),N([]),ne({startDate:null,endDate:null})};n.exports.useEffect(()=>{var a;let e=0;for(let s=0;s<(r==null?void 0:r.length);s++){let l=parseInt((a=r[s])==null?void 0:a.nonight);e+=l}ee(e)},[r==null?void 0:r.length]),n.exports.useEffect(()=>{let e=r.map(a=>Number(a.roomrenthostpayable)).reduce((a,s)=>a+s,0);te(e)},[r==null?void 0:r.length]),n.exports.useRef(null);const oe=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>t("span",{children:a.indexOf(e)+1})},{Header:"guest name",accessor:"guestname",Cell:e=>{var a,s,l,o,h;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((l=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:l.slice(0,15))+(((h=(o=e==null?void 0:e.cell)==null?void 0:o.value)==null?void 0:h.length)>15?"...":""):"Not Available"})}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var a,s;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((s=e==null?void 0:e.cell)==null?void 0:s.value).toDateString():"Not Available"})}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var a,s,l,o;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(a=e==null?void 0:e.cell)!=null&&a.value?((s=e==null?void 0:e.cell)==null?void 0:s.value.slice(0,15))+(((o=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:o.length)>15?"...":""):"Not Available"})})})}},{Header:"Check in Date",accessor:"checkindate",Cell:e=>{var a,s;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(s=e==null?void 0:e.cell)==null?void 0:s.value:"Not Available"})},sortType:(e,a,s,l)=>be(e,a,s,l)},{Header:"Check out Date",accessor:"checkoutdate",Cell:e=>{var a,s;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(s=e==null?void 0:e.cell)==null?void 0:s.value:"Not Available"})},sortType:(e,a,s,l)=>ye(e,a,s,l)},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var a,s;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(s=e==null?void 0:e.cell)==null?void 0:s.value:"Not Available"})}},{Header:"RATE PER DAY",accessor:"tourismfee",Cell:e=>{var o,h,f,j,D,E,P,k,m,T,F,Q;let a=(f=(h=(o=e==null?void 0:e.cell)==null?void 0:o.row)==null?void 0:h.original)!=null&&f.nonight?parseFloat((E=(D=(j=e==null?void 0:e.cell)==null?void 0:j.row)==null?void 0:D.original)==null?void 0:E.nonight):0,l=((m=(k=(P=e==null?void 0:e.cell)==null?void 0:P.row)==null?void 0:k.original)!=null&&m.roomrenthostpayable?parseFloat((Q=(F=(T=e==null?void 0:e.cell)==null?void 0:T.row)==null?void 0:F.original)==null?void 0:Q.roomrenthostpayable):0)/a;return t("span",{children:l?parseFloat(l).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var a,s;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?parseFloat((s=e==null?void 0:e.cell)==null?void 0:s.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}}],de=n.exports.useMemo(()=>oe,[]),pe=n.exports.useMemo(()=>r),he=v.exports.useTable({columns:de,data:pe,initialState:{pageIndex:0,pageSize:50}},v.exports.useGlobalFilter,v.exports.useSortBy,v.exports.usePagination,v.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:s})=>t("div",{children:t(Z,{...s()})}),Cell:({row:s})=>t("div",{children:t(Z,{...s.getToggleRowSelectedProps()})})},...a])}),{getTableProps:ue,getTableBodyProps:me,headerGroups:ge,footerGroups:ke,page:fe,nextPage:Ce,previousPage:Ae,canNextPage:Re,canPreviousPage:_e,pageOptions:je,state:Ee,gotoPage:Te,pageCount:Fe,setPageSize:He,setGlobalFilter:Le,prepareRow:ve}=he;return t(u,{children:t("div",{className:"xl:col-span-2 col-span-1",children:c(xe,{title:"Booking Report",children:[t("div",{className:"flex flex-row-reverse"}),c("div",{children:[c("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[R===!0?null:t(u,{children:t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),t("div",{className:"w-[100%] col-span-3",children:R===!0?t(u,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:X,width:200,height:200})})}):t(u,{children:t(Ne,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:S,value:S&&_?S.filter(function(e){return e.value===(i==null?void 0:i.propertyid)}):S.filter(function(e){return e.value===(i==null?void 0:i.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{_?O():B({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:De,id:"hh"})})})]}),"  ",(i==null?void 0:i.propertyid)&&t(u,{children:c("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(Se,{value:le,inputClassName:"input-class",containerClassName:"container-class",onChange:re})})}),_&&t(u,{children:t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",onClick:O,children:"Reset"})})})})})]})})]}),se===!0?t(u,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:X,width:150,height:150})})}):t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"overflow-hidden ",children:r&&r.length>0&&r?c(u,{children:[" ",c("div",{className:"mt-[25px] p-8",children:[c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Landlord Name: "}),t("p",{className:"capitalize",children:(z=d[0])!=null&&z.owner_name?(M=d[0])==null?void 0:M.owner_name:"Not Available"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Community Name: "}),t("p",{className:"capitalize",children:(G=d[0])!=null&&G.communityname?(U=d[0])==null?void 0:U.communityname:"Not Available"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Project Name: "}),t("p",{className:"capitalize",children:(q=d[0])!=null&&q.project_name?(J=d[0])==null?void 0:J.project_name:"Not Available"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Apartment No: "}),t("p",{className:"capitalize",children:(K=d[0])!=null&&K.unitnumber?(V=d[0])==null?void 0:V.unitnumber:"Not Available"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Building No: "}),t("p",{className:"capitalize",children:(W=d[0])!=null&&W.building_name?(Y=d[0])==null?void 0:Y.building_name:"Not Available"})]})]})," ",c("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ue,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:ge.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>c("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),t("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),c("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...me,children:[fe.map(e=>(ve(e),t("tr",{...e.getRowProps(),children:e.cells.map(a=>t("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))}))),c("tr",{children:[t("td",{className:"table-td",children:"TOTAL"}),t("td",{}),t("td",{}),t("td",{}),t("td",{}),t("td",{}),t("td",{}),c("td",{className:"table-td",children:[b?b.toLocaleString():0," Nights"]}),c("td",{className:"table-td",children:[y&&b?Math.abs(y/b).toLocaleString():0," AED"]}),c("td",{className:"table-td",children:[y?y.toLocaleString():0," AED"]})]})]})]})]}):t(u,{children:R===!0?null:t(u,{children:t("div",{className:"pl-6",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})})})})]})})})},Me=()=>t(u,{children:t("div",{className:" space-y-5",children:t(Pe,{title:"Booking Report"})})});export{Me as default};
