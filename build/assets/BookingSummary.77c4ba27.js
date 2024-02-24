import{R as fe,r as o,z as be,b as M,j as l,F as x,C as ve,ap as he}from"./index.c664f3bc.js";import{D as pe}from"./index.esm.c0412ed2.js";import"./jspdf.es.min.3dd449f9.js";import"./html2canvas.esm.0eae2bf4.js";import{E as xe}from"./exceljs.min.25be85e7.js";import{E as ae}from"./excel.9601f4f9.js";var m="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\booking-summary\\ReportTable.jsx";const re=fe.forwardRef(({allBooking:e,propertyData:u,fetchDetails:n=!1},H)=>{const A=[{Header:"Sr no",accessor:"id",Cell:({row:t,flatRows:s})=>l("span",{children:s.indexOf(t)+1},void 0,!1,{fileName:m,lineNumber:18,columnNumber:24},void 0)},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:t=>{var s,r,i,d;return n?l("button",{onClick:()=>{var a,N;return K(u._id,(a=t==null?void 0:t.cell)!=null&&a.value?(N=t==null?void 0:t.cell)==null?void 0:N.value:"")},children:(s=t==null?void 0:t.cell)!=null&&s.value?(r=t==null?void 0:t.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:m,lineNumber:25,columnNumber:39},void 0):l("span",{children:(i=t==null?void 0:t.cell)!=null&&i.value?(d=t==null?void 0:t.cell)==null?void 0:d.value:"Not Available"},void 0,!1,{fileName:m,lineNumber:26,columnNumber:18},void 0)}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:t=>{var s,r;return l("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?(r=t==null?void 0:t.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:m,lineNumber:34,columnNumber:24},void 0)}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:t=>{var s,r;return l("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?(r=t==null?void 0:t.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:m,lineNumber:41,columnNumber:24},void 0)}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:t=>{var s,r;return l("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?Number((r=t==null?void 0:t.cell)==null?void 0:r.value).toFixed(2):"Not Available"},void 0,!1,{fileName:m,lineNumber:50,columnNumber:24},void 0)}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:t=>{var s,r;return l("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?Math.round(Number((r=t==null?void 0:t.cell)==null?void 0:r.value).toFixed(2))+" %":"Not Available"},void 0,!1,{fileName:m,lineNumber:57,columnNumber:24},void 0)}},{Header:"REFUND /CANCELLATION",accessor:"refund",Cell:t=>{var s,r;return l("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?(r=t==null?void 0:t.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:m,lineNumber:65,columnNumber:24},void 0)}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:t=>{var s,r;return l("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?Number((r=t==null?void 0:t.cell)==null?void 0:r.value).toFixed(2):"Not Available"},void 0,!1,{fileName:m,lineNumber:73,columnNumber:24},void 0)}}],D=o.exports.useMemo(()=>A,[]),F=o.exports.useMemo(()=>e),I=be(),E=M.exports.useTable({columns:D,data:F,initialState:{pageIndex:0,pageSize:50}},M.exports.useGlobalFilter,M.exports.useSortBy,M.exports.usePagination,M.exports.useRowSelect),{getTableProps:Y,getTableBodyProps:v,headerGroups:y,footerGroups:de,page:R,nextPage:q,previousPage:Q,canNextPage:U,canPreviousPage:P,pageOptions:$,state:me,gotoPage:oe,pageCount:X,setPageSize:ce,setGlobalFilter:Z,prepareRow:w}=E,[_,k]=o.exports.useState(0),[O,B]=o.exports.useState(0),[C,ee]=o.exports.useState(0),[L,te]=o.exports.useState(0),[le,J]=o.exports.useState(0),[j,G]=o.exports.useState(0),[ie,V]=o.exports.useState(0);o.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(s=>{const{TotalDaysinMonth:r}=s;return r});k(t.reduce((s,r)=>s+r,0))}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(s=>{const{No_of_Booked_Nights:r}=s;return r});B(t.reduce((s,r)=>s+r,0))}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(r=>{const{OccpancyRate:i}=r;return i});let s=Math.round(t.reduce((r,i)=>r+Number(i),0)/t.length);te(s)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var t;if(e!=null&&e.length){let s=0;for(let r=0;r<(e==null?void 0:e.length);r++){let i=parseFloat((t=e[r])==null?void 0:t.totalNonight);s+=i}J(s||0)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var t;if(e!=null&&e.length){let s=0;for(let r=0;r<(e==null?void 0:e.length);r++){let i=Number((t=e[r])==null?void 0:t.AveragePerNight);s+=i}G(s||0)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var t;if(e!=null&&e.length){let s=0;for(let r=0;r<(e==null?void 0:e.length);r++){let i=Number((t=e[r])==null?void 0:t.TotalHostPayable);s+=i}ee(s||0)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{u._id&&V(u._id)},[u._id]);function K(t,s){let r=new Date(s);if(t){let i=new Date(r.getFullYear(),r.getMonth(),1).toJSON().split("T")[0],d=new Date(r.getFullYear(),r.getMonth()+1,0).toJSON().split("T")[0],a=`/booking-reports?startDate=${i}&endDate=${d}&propertyId=${t}`;I(a)}}return l(x,{children:e&&e.length>0?l(x,{children:l("div",{ref:H,children:[l("div",{className:"mt-[25px]",children:[l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Landlord Name: "},void 0,!1,{fileName:m,lineNumber:251,columnNumber:37},void 0),l("p",{className:"capitalize",children:u!=null&&u.owner_name?u==null?void 0:u.owner_name:"Not Available"},void 0,!1,{fileName:m,lineNumber:252,columnNumber:37},void 0)]},void 0,!0,{fileName:m,lineNumber:250,columnNumber:33},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Community Name: "},void 0,!1,{fileName:m,lineNumber:255,columnNumber:37},void 0),l("p",{className:"capitalize",children:u.community_name?u.community_name:u!=null&&u.communityname?u==null?void 0:u.communityname:"Not Available"},void 0,!1,{fileName:m,lineNumber:256,columnNumber:37},void 0)]},void 0,!0,{fileName:m,lineNumber:254,columnNumber:33},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Project Name: "},void 0,!1,{fileName:m,lineNumber:259,columnNumber:37},void 0),l("p",{className:"capitalize",children:u!=null&&u.project_name?u==null?void 0:u.project_name:"Not Available"},void 0,!1,{fileName:m,lineNumber:260,columnNumber:37},void 0)]},void 0,!0,{fileName:m,lineNumber:258,columnNumber:33},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Apartment No: "},void 0,!1,{fileName:m,lineNumber:263,columnNumber:37},void 0),l("p",{className:"capitalize",children:u!=null&&u.unitnumber?u==null?void 0:u.unitnumber:"Not Available"},void 0,!1,{fileName:m,lineNumber:264,columnNumber:37},void 0)]},void 0,!0,{fileName:m,lineNumber:262,columnNumber:33},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Building No: "},void 0,!1,{fileName:m,lineNumber:267,columnNumber:37},void 0),l("p",{className:"capitalize",children:u!=null&&u.building_name?u==null?void 0:u.building_name:"Not Available"},void 0,!1,{fileName:m,lineNumber:268,columnNumber:37},void 0)]},void 0,!0,{fileName:m,lineNumber:266,columnNumber:33},void 0)]},void 0,!0,{fileName:m,lineNumber:249,columnNumber:29},void 0),l("div",{className:"overflow-x-auto -mx-6 mt-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"",children:l("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Y,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:y.map(t=>l("tr",{...t.getHeaderGroupProps(),children:t.headers.map(s=>l("th",{...s.getHeaderProps(s.getSortByToggleProps()),scope:"col",className:"table-th",children:[s.render("Header"),l("span",{children:s.isSorted?s.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:m,lineNumber:289,columnNumber:69},void 0)]},void 0,!0,{fileName:m,lineNumber:283,columnNumber:65},void 0))},void 0,!1,{fileName:m,lineNumber:280,columnNumber:53},void 0))},void 0,!1,{fileName:m,lineNumber:278,columnNumber:45},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...v,children:[R&&R.length>0&&R.map(t=>(w(t),l(x,{children:l("tr",{...t.getRowProps(),children:t.cells.map(s=>l("td",{...s.getCellProps(),className:"table-td",children:s.render("Cell")},void 0,!1,{fileName:m,lineNumber:310,columnNumber:73},void 0))},void 0,!1,{fileName:m,lineNumber:307,columnNumber:61},void 0)},void 0,!1))),l("tr",{children:[l("td",{className:"font-semibold",children:"TOTAL"},void 0,!1,{fileName:m,lineNumber:320,columnNumber:53},void 0),l("td",{},void 0,!1,{fileName:m,lineNumber:321,columnNumber:53},void 0),l("td",{className:"table-td font-semibold",children:[_==null?void 0:_.toLocaleString()," Available Nights"]},void 0,!0,{fileName:m,lineNumber:322,columnNumber:53},void 0),l("td",{className:"table-td font-semibold",children:[O==null?void 0:O.toLocaleString()," Booked Nights"]},void 0,!0,{fileName:m,lineNumber:325,columnNumber:53},void 0),l("td",{className:"table-td font-semibold",children:[j==null?void 0:j.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," AED"]},void 0,!0,{fileName:m,lineNumber:328,columnNumber:53},void 0),l("td",{className:"table-td font-semibold",children:[L==null?void 0:L.toLocaleString()," %"]},void 0,!0,{fileName:m,lineNumber:331,columnNumber:53},void 0),l("td",{},void 0,!1,{fileName:m,lineNumber:334,columnNumber:53},void 0),l("td",{className:"table-td font-semibold",children:[C==null?void 0:C.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," AED"]},void 0,!0,{fileName:m,lineNumber:335,columnNumber:53},void 0),l("td",{},void 0,!1,{fileName:m,lineNumber:338,columnNumber:53},void 0)]},void 0,!0,{fileName:m,lineNumber:319,columnNumber:49},void 0)]},void 0,!0,{fileName:m,lineNumber:298,columnNumber:45},void 0)]},void 0,!0,{fileName:m,lineNumber:274,columnNumber:41},void 0)},void 0,!1,{fileName:m,lineNumber:273,columnNumber:37},void 0)},void 0,!1,{fileName:m,lineNumber:272,columnNumber:33},void 0)},void 0,!1,{fileName:m,lineNumber:271,columnNumber:29},void 0)]},void 0,!0,{fileName:m,lineNumber:248,columnNumber:25},void 0)},void 0,!1):l(x,{children:l("h6",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:m,lineNumber:428,columnNumber:30},void 0)},void 0,!1)},void 0,!1)});var f="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\booking-summary\\BookingSummary.jsx";const ge={option:(e,u)=>({...e,fontSize:"14px"})},Re=()=>{var s,r;const[e,u]=o.exports.useState({propertyid:"",filteredDates:[]}),[n,H]=o.exports.useState([]),[A,D]=o.exports.useState(""),[F,I]=o.exports.useState(""),[E,Y]=o.exports.useState([]),[v,y]=o.exports.useState(""),[de,R]=o.exports.useState(""),[q,Q]=o.exports.useState({}),[U,P]=o.exports.useState({PropertyData:{},filteredData:[]}),[$,me]=o.exports.useState([]),[oe,X]=o.exports.useState(""),[ce,Z]=o.exports.useState(0),[w,_]=o.exports.useState(0),[k,O]=o.exports.useState(0),[B,C]=o.exports.useState(0),[ee,L]=o.exports.useState(0),[te,le]=o.exports.useState(0);o.exports.useEffect(()=>{if(n!=null&&n.length){const i=n.map(d=>{const{TotalDaysinMonth:a}=d;return a});console.log("days"),Z(i.reduce((d,a)=>d+a,0))}},[n==null?void 0:n.length]),o.exports.useEffect(()=>{if(n!=null&&n.length){const i=n.map(d=>{const{No_of_Booked_Nights:a}=d;return a});_(i.reduce((d,a)=>d+a,0))}},[n==null?void 0:n.length]),o.exports.useEffect(()=>{if(n!=null&&n.length){const i=n.map(a=>{const{OccpancyRate:N}=a;return N});let d=Math.round(i.reduce((a,N)=>a+Number(N),0)/i.length);C(d)}},[n==null?void 0:n.length]),o.exports.useEffect(()=>{var i;if(n!=null&&n.length){let d=0;for(let a=0;a<(n==null?void 0:n.length);a++){let N=parseFloat((i=n[a])==null?void 0:i.totalNonight);d+=N}L(d||0)}},[n==null?void 0:n.length]),o.exports.useEffect(()=>{var i;if(n!=null&&n.length){let d=0;for(let a=0;a<(n==null?void 0:n.length);a++){let N=Number((i=n[a])==null?void 0:i.AveragePerNight);d+=N}le(d||0)}},[n==null?void 0:n.length]),o.exports.useEffect(()=>{var i;if(n!=null&&n.length){let d=0;for(let a=0;a<(n==null?void 0:n.length);a++){let N=Number((i=n[a])==null?void 0:i.TotalHostPayable);d+=N}console.log("totalbookednights",d),O(d||0)}},[n==null?void 0:n.length]),o.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(i=>i.json()).then(i=>{const d=i==null?void 0:i.map(a=>({label:a.unitnumber+" | "+a.communityname+" | "+a.projectname+" | "+a.buildingname,value:a._id}));Y(d)})},[]),o.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){X(e.propertyid);const a=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();P($==null?void 0:$.data),a&&y(a)}})()},[e==null?void 0:e.propertyid]),o.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){let d=`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}`;newValue&&(newValue==null?void 0:newValue.startDate)&&(newValue==null?void 0:newValue.endDate)&&(d+=`?fromdate=${newValue.startDate}&todate=${newValue.endDate}`);const N=await(await fetch(d)).json();P(N==null?void 0:N.data),D(N==null?void 0:N.data)}})()},[]);const[J,j]=o.exports.useState({startDate:"",endDate:""}),G=o.exports.useRef(null),ie=async()=>{if(e!=null&&e.propertyid){let i=new Date().toISOString(),d=new Date(i).getFullYear(),a=new Date(i).getMonth(),N=new Date(d,a+1,0).toJSON().split("T")[0],g=new Date(d,new Date(i).getMonth()-5,1).toJSON().split("T")[0],b=`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}`;g&&N&&(b+=`?fromdate=${g}&todate=${N}`);const S=await(await fetch(b)).json();H(S.data?S.data:[]);const z={owner_name:v==null?void 0:v.owner_name,building_name:v==null?void 0:v.building_name,community_name:v==null?void 0:v.communityname,project_name:v==null?void 0:v.project_name,unitnumber:v==null?void 0:v.unitnumber};P({filteredData:S==null?void 0:S.data,PropertyData:z})}};o.exports.useEffect(()=>{if(A!=null&&A.length&&(e==null?void 0:e.propertyid)&&(e==null?void 0:e.startDate)&&(e==null?void 0:e.endDate)){const i=A.filter(d=>{let a=!0;return e.propertyid&&d.propertyid!==e.propertyid&&(a=!1),(d==null?void 0:d.checkindate)<(e==null?void 0:e.startDate)&&(d==null?void 0:d.checkindate)>(e==null?void 0:e.endDate)&&(a=!1),a});H(i)}ie()},[e==null?void 0:e.propertyid,e==null?void 0:e.startDate,e==null?void 0:e.endDate,A,U]);const V=()=>{I(""),u({...e,filteredDates:[]}),j({startDate:null,endDate:null})},K=async i=>{if(y(!0),I(i),!i){u({...e,filteredDates:[]});return}const a=await(await fetch(`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}?fromdate=${i.startDate}&todate=${i.endDate}`)).json();y(!1);let N=v;u({...e,filteredDates:a==null?void 0:a.data});const g={owner_name:N.owner_name,building_name:N.building_name,community_name:N.communityname,project_name:N.project_name,unitnumber:N.unitnumber};Q(g),R(g),P({filteredData:a==null?void 0:a.data,PropertyData:g})};function t(i){var S,z,se,ne;const{filteredData:d,PropertyData:a}=i;let N=[];N.push(a),console.log("122222",N,d);const g=new xe.Workbook,b=g.addWorksheet("CombinedSheet");b.mergeCells("A1:W1"),b.addRow(["PROPERTY SUMMARY"]),b.columns=[{header:"Landlord Name",key:"owner_name",width:30},{header:"Community Name",key:"community_name",width:40},{header:"Project Name",key:"project_name",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"building_name",width:25},{header:"",key:"",width:20},{header:"",key:"",width:55},{header:"",key:"",width:55}],N&&(console.log("PropertyData",a),[["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...N.map(p=>[p.owner_name,p.community_name,p.project_name,p.unitnumber,p.building_name])].forEach(p=>{b.addRow(p)}),b.addRow([]),b.addRow([]));const W=b.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATION","TOTAL BOOKING AMOUNT"]);if(d){d.forEach(c=>{b.addRow([c==null?void 0:c.TimePerid,c==null?void 0:c.TotalDaysinMonth,c==null?void 0:c.No_of_Booked_Nights,Number(c==null?void 0:c.AveragePerNight).toFixed(2),Math.round(Number(c==null?void 0:c.OccpancyRate).toFixed(0))+"%","NOT AVAILABLE",c==null?void 0:c.TotalHostPayable])}),b.addRow([]);const T=d.map(c=>Number(c.AveragePerNight)).reduce((c,h)=>c+h,0),p=b.addRow(["TOTAL",((S=d.map(c=>Number(c.TotalDaysinMonth)).reduce((c,h)=>c+h,0))==null?void 0:S.toLocaleString())+" Available Nights",((z=d.map(c=>Number(c.No_of_Booked_Nights)).reduce((c,h)=>c+h,0))==null?void 0:z.toLocaleString())+"  Booked Nights","AED "+(T==null?void 0:T.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),Math.round(Number(d.map(c=>Number(c.OccpancyRate)).reduce((c,h)=>c+h,0)/d.length).toFixed(0))+"%","","AED "+((ne=(se=d.map(c=>Number(c.TotalHostPayable)).reduce((c,h)=>c+h,0))==null?void 0:se.toLocaleString())==null?void 0:ne.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))]);{const c={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};p.fill=c,W.fill=c;const h={argb:"FFFFFF"};[p,W].forEach(ue=>{ue.eachCell({includeEmpty:!0},Ne=>{Ne.font={color:h}})})}}b.getRow(2).font={bold:!0},b.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},b.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},b.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},b.getRow(2).font={color:{argb:"FFFFFF"}},b.getRow(3).font={color:{argb:"FFFFFF"}},b.getRow(7).font={color:{argb:"FFFFFF"}},b.getRow(7).alignment={horizontal:"center"},g.xlsx.writeBuffer().then(T=>{const p=new Blob([T],{type:"application/octet-stream"}),c=URL.createObjectURL(p),h=document.createElement("a");h.href=c,h.download="booking-"+new Date+".xlsx",document.body.appendChild(h),h.click(),document.body.removeChild(h)})}return l(x,{children:l("div",{className:"xl:col-span-2 col-span-1",children:l(ve,{title:"Booking Summary",children:[e.propertyid?(e==null?void 0:e.filteredDates)&&((s=e==null?void 0:e.filteredDates)==null?void 0:s.length)?l(x,{children:l("div",{className:"flex flex-row-reverse",children:l("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>t(U),children:[l("img",{src:ae,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:f,lineNumber:657,columnNumber:23},void 0),l("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:f,lineNumber:662,columnNumber:23},void 0)]},void 0,!0,{fileName:f,lineNumber:653,columnNumber:21},void 0)},void 0,!1,{fileName:f,lineNumber:652,columnNumber:13},void 0)},void 0,!1):l(x,{children:l("div",{className:"flex flex-row-reverse",children:l("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>t(U),children:[l("img",{src:ae,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:f,lineNumber:678,columnNumber:23},void 0),l("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:f,lineNumber:683,columnNumber:23},void 0)]},void 0,!0,{fileName:f,lineNumber:674,columnNumber:21},void 0)},void 0,!1,{fileName:f,lineNumber:673,columnNumber:13},void 0)},void 0,!1):null,l("div",{children:[l("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[l("div",{className:"w-[100%] col-span-3",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:f,lineNumber:718,columnNumber:17},void 0)},void 0,!1,{fileName:f,lineNumber:717,columnNumber:15},void 0),l("div",{className:"w-[100%] col-span-3",children:l(he,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:E,value:E&&F?E.filter(function(i){return i.value===(e==null?void 0:e.propertyid)}):E.filter(function(i){return i.value===(e==null?void 0:e.propertyid)}),onChange:i=>{F?V():u({...e,propertyid:i==null?void 0:i.value})},styles:ge,id:"hh",placeholder:"Select and Search property"},void 0,!1,{fileName:f,lineNumber:726,columnNumber:17},void 0)},void 0,!1,{fileName:f,lineNumber:722,columnNumber:15},void 0)]},void 0,!0,{fileName:f,lineNumber:713,columnNumber:13},void 0),e.propertyid&&l(x,{children:l("div",{className:"flex justify-end mt-[25px]",children:[l("div",{className:"w-[150px]",children:l("div",{className:"date-range-custom relative",children:l(pe,{value:J,inputClassName:"input-class",containerClassName:"container-class",onChange:K,placeholder:"SELECT DATE"},void 0,!1,{fileName:f,lineNumber:770,columnNumber:23},void 0)},void 0,!1,{fileName:f,lineNumber:769,columnNumber:21},void 0)},void 0,!1,{fileName:f,lineNumber:768,columnNumber:19},void 0),F&&l("div",{className:"flex justify-end",children:l("div",{className:"w-[90px]",children:l("div",{className:"date-range-custom relative",children:l("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:V,children:"Reset"},void 0,!1,{fileName:f,lineNumber:783,columnNumber:27},void 0)},void 0,!1,{fileName:f,lineNumber:782,columnNumber:25},void 0)},void 0,!1,{fileName:f,lineNumber:781,columnNumber:23},void 0)},void 0,!1,{fileName:f,lineNumber:780,columnNumber:21},void 0)]},void 0,!0,{fileName:f,lineNumber:767,columnNumber:17},void 0)},void 0,!1)]},void 0,!0,{fileName:f,lineNumber:712,columnNumber:11},void 0),(r=e.filteredDates)!=null&&r.length?l(x,{children:l(re,{allBooking:e.filteredDates,propertyData:q,ref:G,fetchDetails:!0},void 0,!1,{fileName:f,lineNumber:803,columnNumber:17},void 0)},void 0,!1):l(x,{children:v?l(re,{allBooking:n,propertyData:v,ref:G,fetchDetails:!0},void 0,!1,{fileName:f,lineNumber:815,columnNumber:19},void 0):""},void 0,!1)]},void 0,!0,{fileName:f,lineNumber:645,columnNumber:9},void 0)},void 0,!1,{fileName:f,lineNumber:644,columnNumber:7},void 0)},void 0,!1)};export{Re as default};
