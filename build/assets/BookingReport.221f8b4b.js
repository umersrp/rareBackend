import{R as O,j as a,F as v,r as n,b as F,e as De,ap as ke,ca as Fe,cb as Se}from"./index.d79e7749.js";import{L as Q}from"./Rare logo New Gif Loading.02c4dc82.js";import{D as Ce}from"./index.esm.1544d7ba.js";import"./jspdf.es.min.ef350fa9.js";import"./html2canvas.esm.0eae2bf4.js";import{E as Re}from"./exceljs.min.eafacb34.js";import{E as Ae}from"./excel.9601f4f9.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\booking\\ReportTable.jsx";const X=O.forwardRef(({indeterminate:k,...A},S)=>{const E=O.useRef(),u=S||E;return O.useEffect(()=>{u.current.indeterminate=k},[u,k]),a(v,{children:a("input",{type:"checkbox",ref:u,...A,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:35,columnNumber:17},void 0)},void 0,!1)}),Ee={option:(k,A)=>({...k,fontSize:"14px"})},Pe=({title:k,allData:A})=>{var z,G,M,U,J,K,W,q,V,Y;const[S,E]=n.exports.useState([]),[u,C]=n.exports.useState([]),ee=localStorage.getItem("isAuth"),b=JSON.parse(ee),[x,ae]=n.exports.useState();n.exports.useState(0),n.exports.useState(0),n.exports.useState();const[y,le]=n.exports.useState(),[R,te]=n.exports.useState([]),[P,B]=n.exports.useState(!1),[ie,L]=n.exports.useState(!1),[oe,re]=n.exports.useState({filteredData:[],PropertyData:{}}),[c,I]=n.exports.useState({propertyid:"",filteredDates:[]}),[ne,se]=n.exports.useState({startDate:"",endDate:""}),[_,H]=n.exports.useState("");console.log("selectedProperty",c);const[p,me]=n.exports.useState([]);n.exports.useEffect(()=>{(async()=>{const i=await(await fetch(`http://dev-rare.srp.ai/booking/pagination/pages?ownerid=${b==null?void 0:b._id}&page=0&perPage=all`)).json();i!=null&&i.booking?C([]):C([])})()},[]);const de=e=>{const t=new Set;return e.filter(i=>t.has(i._id)?!1:(t.add(i._id),!0))};n.exports.useEffect(()=>{(async()=>{try{const t=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${b==null?void 0:b._id}&sort=descending&type=customer&page=0&perPage=all`,i=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${b==null?void 0:b._id}&sort=descending&type=customer&page=0&perPage=all`,r=await fetch(t);if(!r.ok&&r.status!==400)throw new Error(`API 1 failed with status: ${r.status}`);const m=r.status===400?[]:await r.json(),o=await fetch(i);if(!o.ok&&o.status!==400)throw new Error(`API 2 failed with status: ${o.status}`);const N=o.status===400?[]:await o.json(),d=[...m,...N].map(h=>h._id),f=(await Promise.all(d.map(async h=>await(await fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${h}&page=0&perPage=all`)).json()))).flat([2]),g=de(f);E(g)}catch(t){console.error("Error fetching data:",t),setLoadingData(!1)}})()},[]),n.exports.useEffect(()=>{(async()=>{const t=S.map(async r=>{const{propertyid:m}=r;return await(await fetch(`http://dev-rare.srp.ai/property/${m}`)).json()}),i=await Promise.all(t);me(i)})()},[S]),n.exports.useEffect(()=>{if(B(!0),p.length){const e=[...new Map(p.map(i=>[i._id,i])).values()],t=e==null?void 0:e.map(i=>({label:i.unitnumber+" | "+i.communityname+" | "+i.projectname+" | "+i.buildingname,value:i._id}));B(!1),te(t)}},[p]),n.exports.useState(!1);const ce=async e=>{L(!0),H(e);const r=(await(await fetch(`http://dev-rare.srp.ai/booking/api/reservationdate?ownerid=${b==null?void 0:b._id}&${c!=null&&c.propertyid?"propertyid="+(c==null?void 0:c.propertyid)+"&":""}checkindate=${e.startDate}&checkoutdate=${e.endDate}`)).json()).filter(N=>N.propertyid===c.propertyid&&N.cancelled===!1),m=p.filter(N=>N._id===c.propertyid).pop(),o={owner_name:m.owner_name,building_name:m.building_name,community_name:m.communityname,project_name:m.project_name,unitnumber:m.unitnumber,from_range:e.startDate,to_range:e.endDate};L(!1),I({...c,filteredDates:r}),re({filteredData:r,PropertyData:o}),C(r)},$=()=>{H(""),C([]),se({startDate:null,endDate:null})};n.exports.useEffect(()=>{let e=u.map(t=>Number(t.nonight)).reduce((t,i)=>t+i,0);ae(e)},[u==null?void 0:u.length]),n.exports.useEffect(()=>{let e=u.map(t=>JSON.parse(Number(t.roomrenthostpayable))).reduce((t,i)=>t+i,0);le(e)},[u==null?void 0:u.length]),n.exports.useRef(null);const ue=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:t})=>a("span",{children:t.indexOf(e)+1},void 0,!1,{fileName:l,lineNumber:363,columnNumber:24},void 0)},{Header:"guest name",accessor:"guestname",Cell:e=>{var t,i,r,m,o;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((r=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:r.slice(0,15))+(((o=(m=e==null?void 0:e.cell)==null?void 0:m.value)==null?void 0:o.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:l,lineNumber:370,columnNumber:24},void 0)}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var t,i;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:377,columnNumber:24},void 0)}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var t,i,r,m;return a("div",{children:a("span",{className:"inline-flex items-center capitalize",children:a("span",{className:"text-sm text-slate-600 dark:text-slate-300 capitalize",children:(t=e==null?void 0:e.cell)!=null&&t.value?((i=e==null?void 0:e.cell)==null?void 0:i.value.slice(0,15))+(((m=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:m.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:l,lineNumber:387,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:386,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:385,columnNumber:21},void 0)}},{Header:"Check in Date",accessor:"checkindate",Cell:e=>{var t,i;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:399,columnNumber:24},void 0)},sortType:(e,t,i,r)=>Fe(e,t,i,r)},{Header:"Check out Date",accessor:"checkoutdate",Cell:e=>{var t,i;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:407,columnNumber:24},void 0)},sortType:(e,t,i,r)=>Se(e,t,i,r)},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var t,i;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:416,columnNumber:24},void 0)}},{Header:"RATE PER DAY",accessor:"tourismfee",Cell:e=>{var m,o,N,D,d,s,f,g,h,T,j,w;let t=(N=(o=(m=e==null?void 0:e.cell)==null?void 0:m.row)==null?void 0:o.original)!=null&&N.nonight?parseFloat((s=(d=(D=e==null?void 0:e.cell)==null?void 0:D.row)==null?void 0:d.original)==null?void 0:s.nonight):0,r=((h=(g=(f=e==null?void 0:e.cell)==null?void 0:f.row)==null?void 0:g.original)!=null&&h.roomrenthostpayable?parseFloat((w=(j=(T=e==null?void 0:e.cell)==null?void 0:T.row)==null?void 0:j.original)==null?void 0:w.roomrenthostpayable):0)/t;return a("span",{className:"text-[12px]",children:[a("strong",{children:"AED "},void 0,!1,{fileName:l,lineNumber:428,columnNumber:51},void 0),r?parseFloat(r).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+"":"0.00"]},void 0,!0,{fileName:l,lineNumber:428,columnNumber:21},void 0)}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var t,i;return a("span",{className:"text-[12px]",children:[a("strong",{children:"AED"},void 0,!1,{fileName:l,lineNumber:437,columnNumber:51},void 0)," ",(t=e==null?void 0:e.cell)!=null&&t.value?parseFloat((i=e==null?void 0:e.cell)==null?void 0:i.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" ":"0.00"]},void 0,!0,{fileName:l,lineNumber:437,columnNumber:21},void 0)}}],Ne=n.exports.useMemo(()=>ue,[]),pe=n.exports.useMemo(()=>u),fe=F.exports.useTable({columns:Ne,data:pe,initialState:{pageIndex:0,pageSize:50}},F.exports.useGlobalFilter,F.exports.useSortBy,F.exports.usePagination,F.exports.useRowSelect,e=>{e.visibleColumns.push(t=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:i})=>a("div",{children:a(X,{...i()},void 0,!1,{fileName:l,lineNumber:479,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:478,columnNumber:25},void 0),Cell:({row:i})=>a("div",{children:a(X,{...i.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:484,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:483,columnNumber:25},void 0)},...t])}),{getTableProps:ve,getTableBodyProps:be,headerGroups:he,footerGroups:_e,page:ge,nextPage:Te,previousPage:je,canNextPage:Oe,canPreviousPage:Be,pageOptions:Le,state:Ie,gotoPage:He,pageCount:$e,setPageSize:ze,setGlobalFilter:Ge,prepareRow:xe}=fe;async function ye(e){const{filteredData:t,PropertyData:i}=e;let r=[];r.push(i);const m=new Re.Workbook,o=m.addWorksheet("Sheet1");if(o.mergeCells("A1:T1"),o.addRow(["Complete Booking Details"]),o.columns=[{header:"Landlord Name",key:"",width:30},{header:"Community Name",key:"",width:40},{header:"Project Name",key:"",width:25},{header:"Apartment No",key:"",width:25},{header:"Building No",key:"",width:25},{header:"Date Range",key:"",width:25},{header:"",key:"",width:25}],r&&(console.log("vvvv",r),[["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...r.map(d=>[d.owner_name,d.community_name,d.project_name,d.unitnumber,d.building_name])].forEach(d=>{o.addRow(d)}),o.addRow([]),[["Date Range"],...r.map(d=>["from: "+d.from_range,"to: "+d.to_range])].forEach(d=>{o.addRow(d)}),o.addRow([]),o.addRow([]),o.addRow([]),o.addRow([])),o.addRow(["GUEST NAME","BOOKING DATE","CONFIRMATION CODE","CHECK IN DATE","CHECK OUT DATE","NO OF NIGHTS STAYED","RATE PER NIGHTS","BOOKING AMOUNT"]),t){t.forEach(s=>{o.addRow([s.guestname,s.Created_At,s.confirmationcode,s.checkin_date,s.checkout_date,s.nonight,"AED "+Number(s.roomrenthostpayable/s.nonight).toFixed(2),"AED "+Number(s.roomrenthostpayable).toFixed(2)])}),o.addRow([]);const N=t.map(s=>{const{roomrenthostpayable:f,nonight:g}=s;return JSON.parse(Number(f/g).toFixed(2))}).reduce((s,f)=>s+f,0),D=t.map(s=>{const{roomrenthostpayable:f,nonight:g}=s;return JSON.parse(Number(f).toFixed(2))}).reduce((s,f)=>s+f,0),d=o.addRow(["","","","TOTAL","",x.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" Nights","AED "+N.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"AED "+D.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]);{const s={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};d.fill=s;const f={argb:"FFFFFF"};[d].forEach(g=>{g.eachCell({includeEmpty:!0},h=>{h.font={color:f}})})}}o.getRow(2).font={color:{argb:"FFFFFF"}},o.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},o.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},o.getRow(12).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},o.getRow(3).font={color:{argb:"FFFFFF"}},o.getRow(12).font={color:{argb:"FFFFFF"}},o.getRow(6).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},o.getRow(6).font={color:{argb:"FFFFFF"}},m.xlsx.writeBuffer().then(N=>{saveAs(new Blob([N],{type:"application/octet-stream"}),"bookings.xlsx")})}return a(v,{children:a("div",{className:"xl:col-span-2 col-span-1",children:a(De,{title:"Complete Booking Details",children:[u.length?a(v,{children:a("div",{className:"flex flex-row-reverse",children:a("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>ye(oe),children:[a("img",{src:Ae,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:l,lineNumber:695,columnNumber:41},void 0),a("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:l,lineNumber:696,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:694,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:693,columnNumber:25},void 0)},void 0,!1):null,a("div",{className:"flex flex-row-reverse"},void 0,!1,{fileName:l,lineNumber:703,columnNumber:21},void 0),a("div",{children:[a("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[P===!0?null:a(v,{children:a("div",{className:"w-[100%] col-span-3",children:a("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:l,lineNumber:716,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:715,columnNumber:37},void 0)},void 0,!1),a("div",{className:"w-[100%] col-span-3",children:P===!0?a(v,{children:a("div",{className:"flex items-center justify-center h-[100%]",children:a("img",{src:Q,width:200,height:200},void 0,!1,{fileName:l,lineNumber:730,columnNumber:49},void 0)},void 0,!1,{fileName:l,lineNumber:729,columnNumber:41},void 0)},void 0,!1):a(v,{children:a(ke,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:R,value:R&&_?R.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}):R.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{_?$():I({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:Ee,id:"hh"},void 0,!1,{fileName:l,lineNumber:735,columnNumber:41},void 0)},void 0,!1)},void 0,!1,{fileName:l,lineNumber:722,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:707,columnNumber:21},void 0),"  ",(c==null?void 0:c.propertyid)&&a(v,{children:a("div",{className:"flex justify-end mt-[25px]",children:[a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(Ce,{value:ne,inputClassName:"input-class",containerClassName:"container-class",onChange:ce},void 0,!1,{fileName:l,lineNumber:770,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:769,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:768,columnNumber:37},void 0),_&&a(v,{children:a("div",{className:"flex justify-end",children:a("div",{className:"w-[90px]",children:a("div",{className:"date-range-custom relative",children:a("button",{className:"btn btn-dark text-white  text-center",onClick:$,children:"Reset"},void 0,!1,{fileName:l,lineNumber:784,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:783,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:782,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:781,columnNumber:33},void 0)},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:767,columnNumber:33},void 0)},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:706,columnNumber:21},void 0),ie===!0?a(v,{children:a("div",{className:"flex items-center justify-center h-[100%]",children:a("img",{src:Q,width:150,height:150},void 0,!1,{fileName:l,lineNumber:827,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:826,columnNumber:41},void 0)},void 0,!1):a("div",{className:"overflow-x-auto -mx-6",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:"overflow-hidden ",children:u&&u.length>0&&u?a(v,{children:[" ",a("div",{className:"mt-[25px] p-8",children:[a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Landlord Name: "},void 0,!1,{fileName:l,lineNumber:844,columnNumber:65},void 0),a("p",{className:"capitalize",children:(z=p[0])!=null&&z.owner_name?(G=p[0])==null?void 0:G.owner_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:845,columnNumber:65},void 0)]},void 0,!0,{fileName:l,lineNumber:843,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Community Name: "},void 0,!1,{fileName:l,lineNumber:848,columnNumber:65},void 0),a("p",{className:"capitalize",children:(M=p[0])!=null&&M.communityname?(U=p[0])==null?void 0:U.communityname:"Not Available"},void 0,!1,{fileName:l,lineNumber:849,columnNumber:65},void 0)]},void 0,!0,{fileName:l,lineNumber:847,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Project Name: "},void 0,!1,{fileName:l,lineNumber:852,columnNumber:65},void 0),a("p",{className:"capitalize",children:(J=p[0])!=null&&J.project_name?(K=p[0])==null?void 0:K.project_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:853,columnNumber:65},void 0)]},void 0,!0,{fileName:l,lineNumber:851,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Apartment No: "},void 0,!1,{fileName:l,lineNumber:856,columnNumber:65},void 0),a("p",{className:"capitalize",children:(W=p[0])!=null&&W.unitnumber?(q=p[0])==null?void 0:q.unitnumber:"Not Available"},void 0,!1,{fileName:l,lineNumber:857,columnNumber:65},void 0)]},void 0,!0,{fileName:l,lineNumber:855,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Building No: "},void 0,!1,{fileName:l,lineNumber:860,columnNumber:65},void 0),a("p",{className:"capitalize",children:(V=p[0])!=null&&V.building_name?(Y=p[0])==null?void 0:Y.building_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:861,columnNumber:65},void 0)]},void 0,!0,{fileName:l,lineNumber:859,columnNumber:61},void 0)]},void 0,!0,{fileName:l,lineNumber:842,columnNumber:41},void 0)," ",a("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ve,children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:he.map(e=>a("tr",{...e.getHeaderGroupProps(),children:e.headers.map(t=>a("th",{...t.getHeaderProps(t.getSortByToggleProps()),scope:"col",className:" table-th ",children:[t.render("Header"),a("span",{children:t.isSorted?t.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:881,columnNumber:69},void 0)]},void 0,!0,{fileName:l,lineNumber:873,columnNumber:65},void 0))},void 0,!1,{fileName:l,lineNumber:871,columnNumber:57},void 0))},void 0,!1,{fileName:l,lineNumber:869,columnNumber:49},void 0),a("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...be,children:[ge.map(e=>(xe(e),a("tr",{...e.getRowProps(),children:e.cells.map(t=>a("td",{...t.getCellProps(),className:"table-td",children:t.render("Cell")},void 0,!1,{fileName:l,lineNumber:906,columnNumber:73},void 0))},void 0,!1,{fileName:l,lineNumber:903,columnNumber:61},void 0))),console.log(y,x,y/x),a("tr",{children:[a("td",{},void 0,!1,{fileName:l,lineNumber:916,columnNumber:57},void 0),a("td",{},void 0,!1,{fileName:l,lineNumber:917,columnNumber:57},void 0),a("td",{},void 0,!1,{fileName:l,lineNumber:918,columnNumber:57},void 0),a("td",{},void 0,!1,{fileName:l,lineNumber:919,columnNumber:57},void 0),a("td",{},void 0,!1,{fileName:l,lineNumber:920,columnNumber:57},void 0),a("td",{className:"table-td font-bold",children:"TOTAL"},void 0,!1,{fileName:l,lineNumber:921,columnNumber:57},void 0),a("td",{},void 0,!1,{fileName:l,lineNumber:922,columnNumber:57},void 0),a("td",{className:"table-td font-bold text-[12px]",children:[x?x.toLocaleString():0," Nights"]},void 0,!0,{fileName:l,lineNumber:923,columnNumber:57},void 0),a("td",{className:"table-td font-bold text-[12px]",children:["AED",y&&x?Math.abs(y/x).toLocaleString():0," "]},void 0,!0,{fileName:l,lineNumber:924,columnNumber:57},void 0),a("td",{className:"table-td font-bold text-[12px]",children:["AED",y?y.toLocaleString():0," "]},void 0,!0,{fileName:l,lineNumber:925,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:915,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:893,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:865,columnNumber:45},void 0)]},void 0,!0):a(v,{children:P===!0?null:a(v,{children:a("div",{className:"pl-6",children:a("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:l,lineNumber:937,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:936,columnNumber:49},void 0)},void 0,!1)},void 0,!1)},void 0,!1,{fileName:l,lineNumber:835,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:834,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:833,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:689,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:688,columnNumber:9},void 0)},void 0,!1)};var Z="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\booking\\BookingReport.jsx";const Ye=()=>a(v,{children:a("div",{className:" space-y-5",children:a(Pe,{title:"Booking Report"},void 0,!1,{fileName:Z,lineNumber:9,columnNumber:17},void 0)},void 0,!1,{fileName:Z,lineNumber:8,columnNumber:13},void 0)},void 0,!1);export{Ye as default};
