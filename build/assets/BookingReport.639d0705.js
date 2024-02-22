import{R as L,j as l,F as N,r as o,b,C as ge,ap as xe,c4 as ye,c5 as Se}from"./index.1ebaab06.js";import{L as X}from"./Rare logo New Gif Loading.02c4dc82.js";import{D as De}from"./index.esm.36930257.js";import"./jspdf.es.min.3f94e104.js";import"./html2canvas.esm.0eae2bf4.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\booking\\ReportTable.jsx";const Z=L.forwardRef(({indeterminate:f,...C},h)=>{const A=L.useRef(),s=h||A;return L.useEffect(()=>{s.current.indeterminate=f},[s,f]),l(N,{children:l("input",{type:"checkbox",ref:s,...C,className:"table-checkbox"},void 0,!1,{fileName:a,lineNumber:32,columnNumber:17},void 0)},void 0,!1)}),ke={option:(f,C)=>({...f,fontSize:"14px"})},Pe=({title:f,allData:C})=>{var z,M,U,G,V,q,J,K,W,Y;const[h,A]=o.exports.useState([]),[s,g]=o.exports.useState([]),ee=localStorage.getItem("isAuth"),c=JSON.parse(ee),[x,le]=o.exports.useState();o.exports.useState(0),o.exports.useState(0),o.exports.useState();const[y,ae]=o.exports.useState(),[S,ie]=o.exports.useState([]),[R,$]=o.exports.useState(!1),[te,H]=o.exports.useState(!1),[n,O]=o.exports.useState({propertyid:"",filteredDates:[]}),[re,oe]=o.exports.useState({startDate:"",endDate:""}),[j,B]=o.exports.useState("");console.log("selectedProperty",n);const se=async e=>{H(!0),B(e);const r=(await(await fetch(`http://dev-rare.srp.ai/booking/api/reservationdate?ownerid=${c==null?void 0:c._id}&${n!=null&&n.propertyid?"propertyid="+(n==null?void 0:n.propertyid)+"&":""}checkindate=${e.startDate}&checkoutdate=${e.endDate}`)).json()).filter(m=>m.propertyid===n.propertyid&&m.cancelled===!1);H(!1),O({...n,filteredDates:r}),g(r)},[d,ne]=o.exports.useState([]);o.exports.useEffect(()=>{(async()=>{const t=await(await fetch(`http://dev-rare.srp.ai/booking/pagination/pages?ownerid=${c==null?void 0:c._id}&page=0&perPage=all`)).json();t!=null&&t.booking?g([]):g([])})()},[]);const me=e=>{const i=new Set;return e.filter(t=>i.has(t._id)?!1:(i.add(t._id),!0))};o.exports.useEffect(()=>{(async()=>{try{const i=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${c==null?void 0:c._id}&sort=descending&type=customer&page=0&perPage=all`,t=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${c==null?void 0:c._id}&sort=descending&type=customer&page=0&perPage=all`,r=await fetch(i);if(!r.ok&&r.status!==400)throw new Error(`API 1 failed with status: ${r.status}`);const m=r.status===400?[]:await r.json(),u=await fetch(t);if(!u.ok&&u.status!==400)throw new Error(`API 2 failed with status: ${u.status}`);const p=u.status===400?[]:await u.json(),D=[...m,...p].map(v=>v._id),k=(await Promise.all(D.map(async v=>await(await fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${v}&page=0&perPage=all`)).json()))).flat([2]),P=me(k);A(P)}catch(i){console.error("Error fetching data:",i),setLoadingData(!1)}})()},[]),o.exports.useEffect(()=>{(async()=>{const i=h.map(async r=>{const{propertyid:m}=r;return await(await fetch(`http://dev-rare.srp.ai/property/${m}`)).json()}),t=await Promise.all(i);ne(t)})()},[h]),o.exports.useEffect(()=>{if($(!0),d.length){const e=[...new Map(d.map(t=>[t._id,t])).values()],i=e==null?void 0:e.map(t=>({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname+" | "+t.buildingname,value:t._id}));$(!1),ie(i)}},[d]),o.exports.useState(!1);const I=()=>{B(""),g([]),oe({startDate:null,endDate:null})};o.exports.useEffect(()=>{var i;let e=0;for(let t=0;t<(s==null?void 0:s.length);t++){let r=parseInt((i=s[t])==null?void 0:i.nonight);e+=r}le(e)},[s==null?void 0:s.length]),o.exports.useEffect(()=>{let e=s.map(i=>Number(i.roomrenthostpayable)).reduce((i,t)=>i+t,0);ae(e)},[s==null?void 0:s.length]),o.exports.useRef(null);const de=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:i})=>l("span",{children:i.indexOf(e)+1},void 0,!1,{fileName:a,lineNumber:393,columnNumber:24},void 0)},{Header:"guest name",accessor:"guestname",Cell:e=>{var i,t,r,m,u;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?((r=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:r.slice(0,15))+(((u=(m=e==null?void 0:e.cell)==null?void 0:m.value)==null?void 0:u.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:400,columnNumber:24},void 0)}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:407,columnNumber:24},void 0)}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var i,t,r,m;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(i=e==null?void 0:e.cell)!=null&&i.value?((t=e==null?void 0:e.cell)==null?void 0:t.value.slice(0,15))+(((m=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:m.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:417,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:416,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:415,columnNumber:21},void 0)}},{Header:"Check in Date",accessor:"checkindate",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:429,columnNumber:24},void 0)},sortType:(e,i,t,r)=>ye(e,i,t,r)},{Header:"Check out Date",accessor:"checkoutdate",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:437,columnNumber:24},void 0)},sortType:(e,i,t,r)=>Se(e,i,t,r)},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:446,columnNumber:24},void 0)}},{Header:"RATE PER DAY",accessor:"tourismfee",Cell:e=>{var m,u,p,_,D,E,k,P,v,F,T,Q;let i=(p=(u=(m=e==null?void 0:e.cell)==null?void 0:m.row)==null?void 0:u.original)!=null&&p.nonight?parseFloat((E=(D=(_=e==null?void 0:e.cell)==null?void 0:_.row)==null?void 0:D.original)==null?void 0:E.nonight):0,r=((v=(P=(k=e==null?void 0:e.cell)==null?void 0:k.row)==null?void 0:P.original)!=null&&v.roomrenthostpayable?parseFloat((Q=(T=(F=e==null?void 0:e.cell)==null?void 0:F.row)==null?void 0:T.original)==null?void 0:Q.roomrenthostpayable):0)/i;return l("span",{children:r?parseFloat(r).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"},void 0,!1,{fileName:a,lineNumber:458,columnNumber:21},void 0)}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var i,t;return l("span",{children:(i=e==null?void 0:e.cell)!=null&&i.value?parseFloat((t=e==null?void 0:e.cell)==null?void 0:t.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"},void 0,!1,{fileName:a,lineNumber:467,columnNumber:21},void 0)}}],ce=o.exports.useMemo(()=>de,[]),ue=o.exports.useMemo(()=>s),Ne=b.exports.useTable({columns:ce,data:ue,initialState:{pageIndex:0,pageSize:50}},b.exports.useGlobalFilter,b.exports.useSortBy,b.exports.usePagination,b.exports.useRowSelect,e=>{e.visibleColumns.push(i=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>l("div",{children:l(Z,{...t()},void 0,!1,{fileName:a,lineNumber:509,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:508,columnNumber:25},void 0),Cell:({row:t})=>l("div",{children:l(Z,{...t.getToggleRowSelectedProps()},void 0,!1,{fileName:a,lineNumber:514,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:513,columnNumber:25},void 0)},...i])}),{getTableProps:ve,getTableBodyProps:fe,headerGroups:pe,footerGroups:Ce,page:be,nextPage:Ae,previousPage:Re,canNextPage:je,canPreviousPage:_e,pageOptions:Ee,state:Fe,gotoPage:Te,pageCount:Le,setPageSize:$e,setGlobalFilter:He,prepareRow:he}=Ne;return l(N,{children:l("div",{className:"xl:col-span-2 col-span-1",children:l(ge,{title:"Booking Report",children:[l("div",{className:"flex flex-row-reverse"},void 0,!1,{fileName:a,lineNumber:547,columnNumber:21},void 0),l("div",{children:[l("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[R===!0?null:l(N,{children:l("div",{className:"w-[100%] col-span-3",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:a,lineNumber:560,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:559,columnNumber:37},void 0)},void 0,!1),l("div",{className:"w-[100%] col-span-3",children:R===!0?l(N,{children:l("div",{className:"flex items-center justify-center h-[100%]",children:l("img",{src:X,width:200,height:200},void 0,!1,{fileName:a,lineNumber:574,columnNumber:49},void 0)},void 0,!1,{fileName:a,lineNumber:573,columnNumber:41},void 0)},void 0,!1):l(N,{children:l(xe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:S,value:S&&j?S.filter(function(e){return e.value===(n==null?void 0:n.propertyid)}):S.filter(function(e){return e.value===(n==null?void 0:n.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{j?I():O({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:ke,id:"hh"},void 0,!1,{fileName:a,lineNumber:579,columnNumber:41},void 0)},void 0,!1)},void 0,!1,{fileName:a,lineNumber:566,columnNumber:33},void 0)]},void 0,!0,{fileName:a,lineNumber:551,columnNumber:21},void 0),"  ",(n==null?void 0:n.propertyid)&&l(N,{children:l("div",{className:"flex justify-end mt-[25px]",children:[l("div",{className:"w-[150px]",children:l("div",{className:"date-range-custom relative",children:l(De,{value:re,inputClassName:"input-class",containerClassName:"container-class",onChange:se},void 0,!1,{fileName:a,lineNumber:614,columnNumber:53},void 0)},void 0,!1,{fileName:a,lineNumber:613,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:612,columnNumber:37},void 0),j&&l(N,{children:l("div",{className:"flex justify-end",children:l("div",{className:"w-[90px]",children:l("div",{className:"date-range-custom relative",children:l("button",{className:"btn btn-dark text-white  text-center",onClick:I,children:"Reset"},void 0,!1,{fileName:a,lineNumber:628,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:627,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:626,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:625,columnNumber:33},void 0)},void 0,!1)]},void 0,!0,{fileName:a,lineNumber:611,columnNumber:33},void 0)},void 0,!1)]},void 0,!0,{fileName:a,lineNumber:550,columnNumber:21},void 0),te===!0?l(N,{children:l("div",{className:"flex items-center justify-center h-[100%]",children:l("img",{src:X,width:150,height:150},void 0,!1,{fileName:a,lineNumber:671,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:670,columnNumber:41},void 0)},void 0,!1):l("div",{className:"overflow-x-auto -mx-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"overflow-hidden ",children:s&&s.length>0&&s?l(N,{children:[" ",l("div",{className:"mt-[25px] p-8",children:[l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Landlord Name: "},void 0,!1,{fileName:a,lineNumber:688,columnNumber:65},void 0),l("p",{className:"capitalize",children:(z=d[0])!=null&&z.owner_name?(M=d[0])==null?void 0:M.owner_name:"Not Available"},void 0,!1,{fileName:a,lineNumber:689,columnNumber:65},void 0)]},void 0,!0,{fileName:a,lineNumber:687,columnNumber:61},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Community Name: "},void 0,!1,{fileName:a,lineNumber:692,columnNumber:65},void 0),l("p",{className:"capitalize",children:(U=d[0])!=null&&U.communityname?(G=d[0])==null?void 0:G.communityname:"Not Available"},void 0,!1,{fileName:a,lineNumber:693,columnNumber:65},void 0)]},void 0,!0,{fileName:a,lineNumber:691,columnNumber:61},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Project Name: "},void 0,!1,{fileName:a,lineNumber:696,columnNumber:65},void 0),l("p",{className:"capitalize",children:(V=d[0])!=null&&V.project_name?(q=d[0])==null?void 0:q.project_name:"Not Available"},void 0,!1,{fileName:a,lineNumber:697,columnNumber:65},void 0)]},void 0,!0,{fileName:a,lineNumber:695,columnNumber:61},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Apartment No: "},void 0,!1,{fileName:a,lineNumber:700,columnNumber:65},void 0),l("p",{className:"capitalize",children:(J=d[0])!=null&&J.unitnumber?(K=d[0])==null?void 0:K.unitnumber:"Not Available"},void 0,!1,{fileName:a,lineNumber:701,columnNumber:65},void 0)]},void 0,!0,{fileName:a,lineNumber:699,columnNumber:61},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Building No: "},void 0,!1,{fileName:a,lineNumber:704,columnNumber:65},void 0),l("p",{className:"capitalize",children:(W=d[0])!=null&&W.building_name?(Y=d[0])==null?void 0:Y.building_name:"Not Available"},void 0,!1,{fileName:a,lineNumber:705,columnNumber:65},void 0)]},void 0,!0,{fileName:a,lineNumber:703,columnNumber:61},void 0)]},void 0,!0,{fileName:a,lineNumber:686,columnNumber:41},void 0)," ",l("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ve,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:pe.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(i=>l("th",{...i.getHeaderProps(i.getSortByToggleProps()),scope:"col",className:" table-th ",children:[i.render("Header"),l("span",{children:i.isSorted?i.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:a,lineNumber:725,columnNumber:69},void 0)]},void 0,!0,{fileName:a,lineNumber:717,columnNumber:65},void 0))},void 0,!1,{fileName:a,lineNumber:715,columnNumber:57},void 0))},void 0,!1,{fileName:a,lineNumber:713,columnNumber:49},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...fe,children:[be.map(e=>(he(e),l("tr",{...e.getRowProps(),children:e.cells.map(i=>l("td",{...i.getCellProps(),className:"table-td",children:i.render("Cell")},void 0,!1,{fileName:a,lineNumber:750,columnNumber:73},void 0))},void 0,!1,{fileName:a,lineNumber:747,columnNumber:61},void 0))),l("tr",{children:[l("td",{className:"table-td",children:"TOTAL"},void 0,!1,{fileName:a,lineNumber:759,columnNumber:57},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:760,columnNumber:57},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:761,columnNumber:57},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:762,columnNumber:57},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:763,columnNumber:57},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:764,columnNumber:57},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:765,columnNumber:57},void 0),l("td",{className:"table-td",children:[x?x.toLocaleString():0," Nights"]},void 0,!0,{fileName:a,lineNumber:766,columnNumber:57},void 0),l("td",{className:"table-td",children:[y&&x?Math.abs(y/x).toLocaleString():0," AED"]},void 0,!0,{fileName:a,lineNumber:767,columnNumber:57},void 0),l("td",{className:"table-td",children:[y?y.toLocaleString():0," AED"]},void 0,!0,{fileName:a,lineNumber:768,columnNumber:57},void 0)]},void 0,!0,{fileName:a,lineNumber:758,columnNumber:53},void 0)]},void 0,!0,{fileName:a,lineNumber:737,columnNumber:49},void 0)]},void 0,!0,{fileName:a,lineNumber:709,columnNumber:45},void 0)]},void 0,!0):l(N,{children:R===!0?null:l(N,{children:l("div",{className:"pl-6",children:l("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:a,lineNumber:780,columnNumber:53},void 0)},void 0,!1,{fileName:a,lineNumber:779,columnNumber:49},void 0)},void 0,!1)},void 0,!1)},void 0,!1,{fileName:a,lineNumber:679,columnNumber:41},void 0)},void 0,!1,{fileName:a,lineNumber:678,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:677,columnNumber:37},void 0)]},void 0,!0,{fileName:a,lineNumber:546,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:545,columnNumber:9},void 0)},void 0,!1)};var w="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\booking\\BookingReport.jsx";const Ue=()=>l(N,{children:l("div",{className:" space-y-5",children:l(Pe,{title:"Booking Report"},void 0,!1,{fileName:w,lineNumber:9,columnNumber:17},void 0)},void 0,!1,{fileName:w,lineNumber:8,columnNumber:13},void 0)},void 0,!1);export{Ue as default};
