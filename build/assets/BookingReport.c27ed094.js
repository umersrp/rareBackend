import{R as j,j as t,F as f,r as o,b as S,c,f as ye,aq as De,cb as ke,cc as Se}from"./index.40803122.js";import{L as Z}from"./Rare logo New Gif Loading.02c4dc82.js";import{D as Fe}from"./index.esm.fc6ea848.js";import"./jspdf.es.min.444cae57.js";import"./html2canvas.esm.0eae2bf4.js";import{E as Ce}from"./exceljs.min.bd11292a.js";import{E as Ae}from"./excel.9601f4f9.js";const V=j.forwardRef(({indeterminate:k,...R},F)=>{const E=j.useRef(),m=F||E;return j.useEffect(()=>{m.current.indeterminate=k},[m,k]),t(f,{children:t("input",{type:"checkbox",ref:m,...R,className:"table-checkbox"})})}),Re={option:(k,R)=>({...k,fontSize:"14px"})},Ee=({title:k,allData:R})=>{var z,G,M,U,J,K,q,W,Y,Q;const[F,E]=o.exports.useState([]),[m,C]=o.exports.useState([]),w=localStorage.getItem("isAuth"),x=JSON.parse(w),[v,ee]=o.exports.useState();o.exports.useState(0),o.exports.useState(0),o.exports.useState();const[y,te]=o.exports.useState(),[A,ae]=o.exports.useState([]),[P,B]=o.exports.useState(!1),[se,L]=o.exports.useState(!1),[le,re]=o.exports.useState({filteredData:[],PropertyData:{}}),[p,I]=o.exports.useState({propertyid:"",filteredDates:[]}),[oe,ne]=o.exports.useState({startDate:"",endDate:""}),[_,H]=o.exports.useState("");console.log("selectedProperty",p);const[u,ie]=o.exports.useState([]);o.exports.useEffect(()=>{(async()=>{const s=await(await fetch(`http://portals.rarehomesgroup.com/booking/pagination/pages?ownerid=${x==null?void 0:x._id}&page=0&perPage=all`)).json();s!=null&&s.booking?C([]):C([])})()},[]);const ce=e=>{const a=new Set;return e.filter(s=>a.has(s._id)?!1:(a.add(s._id),!0))};o.exports.useEffect(()=>{(async()=>{try{const a=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${x==null?void 0:x._id}&sort=descending&type=customer&page=0&perPage=all`,s=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${x==null?void 0:x._id}&sort=descending&type=customer&page=0&perPage=all`,r=await fetch(a);if(!r.ok&&r.status!==400)throw new Error(`API 1 failed with status: ${r.status}`);const i=r.status===400?[]:await r.json(),l=await fetch(s);if(!l.ok&&l.status!==400)throw new Error(`API 2 failed with status: ${l.status}`);const h=l.status===400?[]:await l.json(),d=[...i,...h].map(N=>N._id),g=(await Promise.all(d.map(async N=>await(await fetch(`http://portals.rarehomesgroup.com/booking/ownerrepresentative/pages?propertyid=${N}&page=0&perPage=all`)).json()))).flat([2]),b=ce(g);E(b)}catch(a){console.error("Error fetching data:",a),setLoadingData(!1)}})()},[]),o.exports.useEffect(()=>{(async()=>{const a=F.map(async r=>{const{propertyid:i}=r;return await(await fetch(`http://portals.rarehomesgroup.com/property/${i}`)).json()}),s=await Promise.all(a);ie(s)})()},[F]),o.exports.useEffect(()=>{if(B(!0),u.length){const e=[...new Map(u.map(s=>[s._id,s])).values()],a=e==null?void 0:e.map(s=>({label:s.unitnumber+" | "+s.communityname+" | "+s.projectname+" | "+s.buildingname,value:s._id}));B(!1),ae(a)}},[u]),o.exports.useState(!1);const de=async e=>{L(!0),H(e);const r=(await(await fetch(`http://portals.rarehomesgroup.com/booking/api/reservationdate?ownerid=${x==null?void 0:x._id}&${p!=null&&p.propertyid?"propertyid="+(p==null?void 0:p.propertyid)+"&":""}checkindate=${e.startDate}&checkoutdate=${e.endDate}`)).json()).filter(h=>h.propertyid===p.propertyid&&h.cancelled===!1),i=u.filter(h=>h._id===p.propertyid).pop(),l={owner_name:i.owner_name,building_name:i.building_name,community_name:i.communityname,project_name:i.project_name,unitnumber:i.unitnumber,from_range:e.startDate,to_range:e.endDate};L(!1),I({...p,filteredDates:r}),re({filteredData:r,PropertyData:l}),C(r)},$=()=>{H(""),C([]),ne({startDate:null,endDate:null})};o.exports.useEffect(()=>{let e=m.map(a=>Number(a.nonight)).reduce((a,s)=>a+s,0);ee(e)},[m==null?void 0:m.length]),o.exports.useEffect(()=>{let e=m.map(a=>JSON.parse(Number(a.roomrenthostpayable))).reduce((a,s)=>a+s,0);te(e)},[m==null?void 0:m.length]),o.exports.useRef(null);const pe=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>t("span",{children:a.indexOf(e)+1})},{Header:"guest name",accessor:"guestname",Cell:e=>{var a,s,r,i,l;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((r=(s=e==null?void 0:e.cell)==null?void 0:s.value)==null?void 0:r.slice(0,15))+(((l=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:l.length)>15?"...":""):"Not Available"})}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var a,s;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((s=e==null?void 0:e.cell)==null?void 0:s.value).toDateString():"Not Available"})}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var a,s,r,i;return t("div",{children:t("span",{className:"inline-flex items-center capitalize",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 capitalize",children:(a=e==null?void 0:e.cell)!=null&&a.value?((s=e==null?void 0:e.cell)==null?void 0:s.value.slice(0,15))+(((i=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:i.length)>15?"...":""):"Not Available"})})})}},{Header:"Check in Date",accessor:"checkindate",Cell:e=>{var a,s;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(s=e==null?void 0:e.cell)==null?void 0:s.value:"Not Available"})},sortType:(e,a,s,r)=>ke(e,a,s,r)},{Header:"Check out Date",accessor:"checkoutdate",Cell:e=>{var a,s;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(s=e==null?void 0:e.cell)==null?void 0:s.value:"Not Available"})},sortType:(e,a,s,r)=>Se(e,a,s,r)},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var a,s;return t("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(s=e==null?void 0:e.cell)==null?void 0:s.value:"Not Available"})}},{Header:"RATE PER DAY",accessor:"tourismfee",Cell:e=>{var i,l,h,D,d,n,g,b,N,T,O,X;let a=(h=(l=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:l.original)!=null&&h.nonight?parseFloat((n=(d=(D=e==null?void 0:e.cell)==null?void 0:D.row)==null?void 0:d.original)==null?void 0:n.nonight):0,r=((N=(b=(g=e==null?void 0:e.cell)==null?void 0:g.row)==null?void 0:b.original)!=null&&N.roomrenthostpayable?parseFloat((X=(O=(T=e==null?void 0:e.cell)==null?void 0:T.row)==null?void 0:O.original)==null?void 0:X.roomrenthostpayable):0)/a;return c("span",{className:"text-[12px]",children:[t("strong",{children:"AED "}),r?parseFloat(r).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+"":"0.00"]})}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var a,s;return c("span",{className:"text-[12px]",children:[t("strong",{children:"AED"})," ",(a=e==null?void 0:e.cell)!=null&&a.value?parseFloat((s=e==null?void 0:e.cell)==null?void 0:s.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" ":"0.00"]})}}],me=o.exports.useMemo(()=>pe,[]),he=o.exports.useMemo(()=>m),ue=S.exports.useTable({columns:me,data:he,initialState:{pageIndex:0,pageSize:50}},S.exports.useGlobalFilter,S.exports.useSortBy,S.exports.usePagination,S.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:s})=>t("div",{children:t(V,{...s()})}),Cell:({row:s})=>t("div",{children:t(V,{...s.getToggleRowSelectedProps()})})},...a])}),{getTableProps:ge,getTableBodyProps:fe,headerGroups:xe,footerGroups:Pe,page:Ne,nextPage:_e,previousPage:Te,canNextPage:Oe,canPreviousPage:je,pageOptions:Be,state:Le,gotoPage:Ie,pageCount:He,setPageSize:$e,setGlobalFilter:ze,prepareRow:be}=ue;async function ve(e){const{filteredData:a,PropertyData:s}=e;let r=[];r.push(s);const i=new Ce.Workbook,l=i.addWorksheet("Sheet1");if(l.mergeCells("A1:T1"),l.addRow(["Complete Booking Details"]),l.columns=[{header:"Landlord Name",key:"",width:30},{header:"Community Name",key:"",width:40},{header:"Project Name",key:"",width:25},{header:"Apartment No",key:"",width:25},{header:"Building No",key:"",width:25},{header:"Date Range",key:"",width:25},{header:"",key:"",width:25}],r&&(console.log("vvvv",r),[["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...r.map(d=>[d.owner_name,d.community_name,d.project_name,d.unitnumber,d.building_name])].forEach(d=>{l.addRow(d)}),l.addRow([]),[["Date Range"],...r.map(d=>["from: "+d.from_range,"to: "+d.to_range])].forEach(d=>{l.addRow(d)}),l.addRow([]),l.addRow([]),l.addRow([]),l.addRow([])),l.addRow(["GUEST NAME","BOOKING DATE","CONFIRMATION CODE","CHECK IN DATE","CHECK OUT DATE","NO OF NIGHTS STAYED","RATE PER NIGHTS","BOOKING AMOUNT"]),a){a.forEach(n=>{l.addRow([n.guestname,n.Created_At,n.confirmationcode,n.checkin_date,n.checkout_date,n.nonight,"AED "+Number(n.roomrenthostpayable/n.nonight).toFixed(2),"AED "+Number(n.roomrenthostpayable).toFixed(2)])}),l.addRow([]);const h=a.map(n=>{const{roomrenthostpayable:g,nonight:b}=n;return JSON.parse(Number(g/b).toFixed(2))}).reduce((n,g)=>n+g,0),D=a.map(n=>{const{roomrenthostpayable:g,nonight:b}=n;return JSON.parse(Number(g).toFixed(2))}).reduce((n,g)=>n+g,0),d=l.addRow(["","","","TOTAL","",v.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" Nights","AED "+h.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"AED "+D.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]);{const n={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};d.fill=n;const g={argb:"FFFFFF"};[d].forEach(b=>{b.eachCell({includeEmpty:!0},N=>{N.font={color:g}})})}}l.getRow(2).font={color:{argb:"FFFFFF"}},l.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},l.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},l.getRow(12).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},l.getRow(3).font={color:{argb:"FFFFFF"}},l.getRow(12).font={color:{argb:"FFFFFF"}},l.getRow(6).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},l.getRow(6).font={color:{argb:"FFFFFF"}},i.xlsx.writeBuffer().then(h=>{saveAs(new Blob([h],{type:"application/octet-stream"}),"bookings.xlsx")})}return t(f,{children:t("div",{className:"xl:col-span-2 col-span-1",children:c(ye,{title:"Complete Booking Details",children:[m.length?t(f,{children:t("div",{className:"flex flex-row-reverse",children:c("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>ve(le),children:[t("img",{src:Ae,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):null,t("div",{className:"flex flex-row-reverse"}),c("div",{children:[c("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[P===!0?null:t(f,{children:t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),t("div",{className:"w-[100%] col-span-3",children:P===!0?t(f,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:Z,width:200,height:200})})}):t(f,{children:t(De,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:A,value:A&&_?A.filter(function(e){return e.value===(p==null?void 0:p.propertyid)}):A.filter(function(e){return e.value===(p==null?void 0:p.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{_?$():I({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:Re,id:"hh"})})})]}),"  ",(p==null?void 0:p.propertyid)&&t(f,{children:c("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(Fe,{value:oe,inputClassName:"input-class",containerClassName:"container-class",onChange:de})})}),_&&t(f,{children:t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",onClick:$,children:"Reset"})})})})})]})})]}),se===!0?t(f,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:Z,width:150,height:150})})}):t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"overflow-hidden ",children:m&&m.length>0&&m?c(f,{children:[" ",c("div",{className:"mt-[25px] p-8",children:[c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Landlord Name: "}),t("p",{className:"capitalize",children:(z=u[0])!=null&&z.owner_name?(G=u[0])==null?void 0:G.owner_name:"Not Available"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Community Name: "}),t("p",{className:"capitalize",children:(M=u[0])!=null&&M.communityname?(U=u[0])==null?void 0:U.communityname:"Not Available"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Project Name: "}),t("p",{className:"capitalize",children:(J=u[0])!=null&&J.project_name?(K=u[0])==null?void 0:K.project_name:"Not Available"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Apartment No: "}),t("p",{className:"capitalize",children:(q=u[0])!=null&&q.unitnumber?(W=u[0])==null?void 0:W.unitnumber:"Not Available"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Building No: "}),t("p",{className:"capitalize",children:(Y=u[0])!=null&&Y.building_name?(Q=u[0])==null?void 0:Q.building_name:"Not Available"})]})]})," ",c("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ge,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:xe.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>c("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),t("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),c("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...fe,children:[Ne.map(e=>(be(e),t("tr",{...e.getRowProps(),children:e.cells.map(a=>t("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))}))),console.log(y,v,y/v),c("tr",{children:[t("td",{}),t("td",{}),t("td",{}),t("td",{}),t("td",{}),t("td",{className:"table-td font-bold",children:"TOTAL"}),t("td",{}),c("td",{className:"table-td font-bold text-[12px]",children:[v?v.toLocaleString():0," Nights"]}),c("td",{className:"table-td font-bold text-[12px]",children:["AED",y&&v?Math.abs(y/v).toLocaleString():0," "]}),c("td",{className:"table-td font-bold text-[12px]",children:["AED",y?y.toLocaleString():0," "]})]})]})]})]}):t(f,{children:P===!0?null:t(f,{children:t("div",{className:"pl-6",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})})})})]})})})},Ye=()=>t(f,{children:t("div",{className:" space-y-5",children:t(Ee,{title:"Booking Report"})})});export{Ye as default};