import{R as ce,r as m,B as he,b as I,j as l,F as g,e as pe,ap as xe}from"./index.cef99591.js";import{D as ge}from"./index.esm.ec34f58b.js";import"./jspdf.es.min.8456fb8c.js";import"./html2canvas.esm.0eae2bf4.js";import{E as Se}from"./exceljs.min.ca9d072d.js";import{E as me}from"./excel.9601f4f9.js";var n="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\booking-summary\\ReportTable.jsx";const de=ce.forwardRef(({allBooking:e,propertyData:u,fetchDetails:i=!1},G)=>{const E=[{Header:"Sr no",accessor:"id",Cell:({row:t,flatRows:a})=>l("span",{children:a.indexOf(t)+1},void 0,!1,{fileName:n,lineNumber:18,columnNumber:24},void 0)},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:t=>{var a,r,p,y;return i?l("button",{onClick:()=>{var T,H;return W(u._id,(T=t==null?void 0:t.cell)!=null&&T.value?(H=t==null?void 0:t.cell)==null?void 0:H.value:"")},children:(a=t==null?void 0:t.cell)!=null&&a.value?(r=t==null?void 0:t.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:n,lineNumber:25,columnNumber:39},void 0):l("span",{children:(p=t==null?void 0:t.cell)!=null&&p.value?(y=t==null?void 0:t.cell)==null?void 0:y.value:"Not Available"},void 0,!1,{fileName:n,lineNumber:26,columnNumber:18},void 0)}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:t=>{var a,r;return l("span",{children:(a=t==null?void 0:t.cell)!=null&&a.value?(r=t==null?void 0:t.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:n,lineNumber:34,columnNumber:24},void 0)}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:t=>{var a,r;return l("span",{children:(a=t==null?void 0:t.cell)!=null&&a.value?(r=t==null?void 0:t.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:n,lineNumber:41,columnNumber:24},void 0)}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:t=>{var a,r;return l("span",{className:"text-[12px]",children:[l("strong",{children:"AED"},void 0,!1,{fileName:n,lineNumber:50,columnNumber:54},void 0)," ",(a=t==null?void 0:t.cell)!=null&&a.value?Number((r=t==null?void 0:t.cell)==null?void 0:r.value).toFixed(2):"Not Available"]},void 0,!0,{fileName:n,lineNumber:50,columnNumber:24},void 0)}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:t=>{var a,r;return l("span",{children:(a=t==null?void 0:t.cell)!=null&&a.value?Math.round(Number((r=t==null?void 0:t.cell)==null?void 0:r.value).toFixed(2))+" %":"Not Available"},void 0,!1,{fileName:n,lineNumber:57,columnNumber:24},void 0)}},{Header:"REFUND /CANCELLATION",accessor:"refund",Cell:t=>{var a,r;return l("span",{children:(a=t==null?void 0:t.cell)!=null&&a.value?(r=t==null?void 0:t.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:n,lineNumber:65,columnNumber:24},void 0)}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:t=>{var a,r;return l("span",{className:"text-[12px]",children:[l("strong",{children:"AED"},void 0,!1,{fileName:n,lineNumber:73,columnNumber:54},void 0)," ",(a=t==null?void 0:t.cell)!=null&&a.value?Number((r=t==null?void 0:t.cell)==null?void 0:r.value).toFixed(2):"Not Available"]},void 0,!0,{fileName:n,lineNumber:73,columnNumber:24},void 0)}}],z=m.exports.useMemo(()=>E,[]),O=m.exports.useMemo(()=>e),U=he(),F=I.exports.useTable({columns:z,data:O,initialState:{pageIndex:0,pageSize:50}},I.exports.useGlobalFilter,I.exports.useSortBy,I.exports.usePagination,I.exports.useRowSelect),{getTableProps:Y,getTableBodyProps:v,headerGroups:C,footerGroups:ue,page:L,nextPage:Q,previousPage:X,canNextPage:J,canPreviousPage:$,pageOptions:Z,state:w,gotoPage:V,pageCount:Ne,setPageSize:fe,setGlobalFilter:k,prepareRow:B}=F,[j,ee]=m.exports.useState(0),[R,te]=m.exports.useState(0),[P,le]=m.exports.useState(0),[M,ie]=m.exports.useState(0),[ae,ne]=m.exports.useState(0);m.exports.useState(0);const[se,K]=m.exports.useState(0);m.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(a=>{const{TotalDaysinMonth:r}=a;return r});ee(t.reduce((a,r)=>a+r,0))}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(a=>{const{No_of_Booked_Nights:r}=a;return r});te(t.reduce((a,r)=>a+r,0))}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(r=>{const{OccpancyRate:p}=r;return p});let a=Math.round(t.reduce((r,p)=>r+Number(p),0)/t.length);ie(a)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var t;if(e!=null&&e.length){let a=0;for(let r=0;r<(e==null?void 0:e.length);r++){let p=parseFloat((t=e[r])==null?void 0:t.totalNonight);a+=p}ne(a||0)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var t;if(e!=null&&e.length){let a=0;for(let r=0;r<(e==null?void 0:e.length);r++){let p=Number((t=e[r])==null?void 0:t.TotalHostPayable);a+=p}le(a||0)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{u._id&&K(u._id)},[u._id]);function W(t,a){let r=new Date(a);if(t){let p=new Date(r.getFullYear(),r.getMonth(),1).toJSON().split("T")[0],y=new Date(r.getFullYear(),r.getMonth()+1,0).toJSON().split("T")[0],T=`/booking-reports?startDate=${p}&endDate=${y}&propertyId=${t}`;U(T)}}return l(g,{children:e&&e.length>0?l(g,{children:l("div",{ref:G,children:[l("div",{className:"mt-[25px]",children:[l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Landlord Name: "},void 0,!1,{fileName:n,lineNumber:257,columnNumber:37},void 0),l("p",{className:"capitalize",children:u!=null&&u.owner_name?u==null?void 0:u.owner_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:258,columnNumber:37},void 0)]},void 0,!0,{fileName:n,lineNumber:256,columnNumber:33},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Community Name: "},void 0,!1,{fileName:n,lineNumber:261,columnNumber:37},void 0),l("p",{className:"capitalize",children:u.community_name?u.community_name:u!=null&&u.communityname?u==null?void 0:u.communityname:"Not Available"},void 0,!1,{fileName:n,lineNumber:262,columnNumber:37},void 0)]},void 0,!0,{fileName:n,lineNumber:260,columnNumber:33},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Project Name: "},void 0,!1,{fileName:n,lineNumber:265,columnNumber:37},void 0),l("p",{className:"capitalize",children:u!=null&&u.project_name?u==null?void 0:u.project_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:266,columnNumber:37},void 0)]},void 0,!0,{fileName:n,lineNumber:264,columnNumber:33},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Apartment No: "},void 0,!1,{fileName:n,lineNumber:269,columnNumber:37},void 0),l("p",{className:"capitalize",children:u!=null&&u.unitnumber?u==null?void 0:u.unitnumber:"Not Available"},void 0,!1,{fileName:n,lineNumber:270,columnNumber:37},void 0)]},void 0,!0,{fileName:n,lineNumber:268,columnNumber:33},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Building No: "},void 0,!1,{fileName:n,lineNumber:273,columnNumber:37},void 0),l("p",{className:"capitalize",children:u!=null&&u.building_name?u==null?void 0:u.building_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:274,columnNumber:37},void 0)]},void 0,!0,{fileName:n,lineNumber:272,columnNumber:33},void 0)]},void 0,!0,{fileName:n,lineNumber:255,columnNumber:29},void 0),l("div",{className:"overflow-x-auto -mx-6 mt-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"",children:l("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Y,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:C.map(t=>l("tr",{...t.getHeaderGroupProps(),children:t.headers.map(a=>l("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:"table-th",children:[a.render("Header"),l("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:n,lineNumber:295,columnNumber:69},void 0)]},void 0,!0,{fileName:n,lineNumber:289,columnNumber:65},void 0))},void 0,!1,{fileName:n,lineNumber:286,columnNumber:53},void 0))},void 0,!1,{fileName:n,lineNumber:284,columnNumber:45},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...v,children:[L&&L.length>0&&L.map(t=>(B(t),l(g,{children:l("tr",{...t.getRowProps(),children:t.cells.map(a=>l("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")},void 0,!1,{fileName:n,lineNumber:316,columnNumber:73},void 0))},void 0,!1,{fileName:n,lineNumber:313,columnNumber:61},void 0)},void 0,!1))),l("tr",{children:[l("td",{},void 0,!1,{fileName:n,lineNumber:326,columnNumber:53},void 0),l("td",{className:"font-semibold",children:"TOTAL"},void 0,!1,{fileName:n,lineNumber:327,columnNumber:53},void 0),l("td",{className:"table-td font-semibold",children:[j==null?void 0:j.toLocaleString()," Available Nights"]},void 0,!0,{fileName:n,lineNumber:328,columnNumber:53},void 0),l("td",{className:"table-td font-semibold",children:[R==null?void 0:R.toLocaleString()," Booked Nights"]},void 0,!0,{fileName:n,lineNumber:331,columnNumber:53},void 0),l("td",{className:"table-td font-semibold",children:["AED ",Number(P/R).toFixed(2)]},void 0,!0,{fileName:n,lineNumber:334,columnNumber:53},void 0),l("td",{className:"table-td font-semibold",children:[M==null?void 0:M.toLocaleString()," %"]},void 0,!0,{fileName:n,lineNumber:337,columnNumber:53},void 0),l("td",{},void 0,!1,{fileName:n,lineNumber:340,columnNumber:53},void 0),l("td",{className:"table-td font-semibold",children:["AED ",P==null?void 0:P.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]},void 0,!0,{fileName:n,lineNumber:341,columnNumber:53},void 0),l("td",{},void 0,!1,{fileName:n,lineNumber:344,columnNumber:53},void 0)]},void 0,!0,{fileName:n,lineNumber:325,columnNumber:49},void 0)]},void 0,!0,{fileName:n,lineNumber:304,columnNumber:45},void 0)]},void 0,!0,{fileName:n,lineNumber:280,columnNumber:41},void 0)},void 0,!1,{fileName:n,lineNumber:279,columnNumber:37},void 0)},void 0,!1,{fileName:n,lineNumber:278,columnNumber:33},void 0)},void 0,!1,{fileName:n,lineNumber:277,columnNumber:29},void 0)]},void 0,!0,{fileName:n,lineNumber:254,columnNumber:25},void 0)},void 0,!1):l(g,{children:l("h6",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:n,lineNumber:434,columnNumber:30},void 0)},void 0,!1)},void 0,!1)});var f="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\booking-summary\\BookingSummary.jsx";const Ae={option:(e,u)=>({...e,fontSize:"14px"})},Ee=()=>{var T,H;const[e,u]=m.exports.useState({propertyid:"",filteredDates:[]}),[i,G]=m.exports.useState([]),[E,z]=m.exports.useState(""),[O,U]=m.exports.useState(""),[F,Y]=m.exports.useState([]),[v,C]=m.exports.useState(""),[ue,L]=m.exports.useState(""),[Q,X]=m.exports.useState({}),[J,$]=m.exports.useState({PropertyData:{},filteredData:[]}),[Z,w]=m.exports.useState({PropertyData:{},filteredData:[]}),[V,Ne]=m.exports.useState([]),[fe,k]=m.exports.useState(""),[B,j]=m.exports.useState(0),[ee,R]=m.exports.useState(0),[te,P]=m.exports.useState(0),[le,M]=m.exports.useState(0),[ie,ae]=m.exports.useState(0),[ne,se]=m.exports.useState(0);m.exports.useEffect(()=>{if(i!=null&&i.length){const d=i.map(o=>{const{TotalDaysinMonth:s}=o;return s});console.log("days"),j(d.reduce((o,s)=>o+s,0))}},[i==null?void 0:i.length]),m.exports.useEffect(()=>{if(i!=null&&i.length){const d=i.map(o=>{const{No_of_Booked_Nights:s}=o;return s});R(d.reduce((o,s)=>o+s,0))}},[i==null?void 0:i.length]),m.exports.useEffect(()=>{if(i!=null&&i.length){const d=i.map(s=>{const{OccpancyRate:N}=s;return N});let o=Math.round(d.reduce((s,N)=>s+Number(N),0)/d.length);M(o)}},[i==null?void 0:i.length]),m.exports.useEffect(()=>{var d;if(i!=null&&i.length){let o=0;for(let s=0;s<(i==null?void 0:i.length);s++){let N=parseFloat((d=i[s])==null?void 0:d.totalNonight);o+=N}ae(o||0)}},[i==null?void 0:i.length]),m.exports.useEffect(()=>{var d;if(i!=null&&i.length){let o=0;for(let s=0;s<(i==null?void 0:i.length);s++){let N=Number((d=i[s])==null?void 0:d.AveragePerNight);o+=N}se(o||0)}},[i==null?void 0:i.length]),m.exports.useEffect(()=>{var d;if(i!=null&&i.length){let o=0;for(let s=0;s<(i==null?void 0:i.length);s++){let N=Number((d=i[s])==null?void 0:d.TotalHostPayable);o+=N}console.log("totalbookednights",o),P(o||0)}},[i==null?void 0:i.length]),m.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(d=>d.json()).then(d=>{const o=d==null?void 0:d.map(s=>({label:s.unitnumber+" | "+s.communityname+" | "+s.projectname+" | "+s.buildingname,value:s._id}));Y(o)})},[]),m.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){k(e.propertyid);const s=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();$(V==null?void 0:V.data),s&&C(s)}})()},[e==null?void 0:e.propertyid]),m.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){let o=`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}`;newValue&&(newValue==null?void 0:newValue.startDate)&&(newValue==null?void 0:newValue.endDate)&&(o+=`?fromdate=${newValue.startDate}&todate=${newValue.endDate}`);const N=await(await fetch(o)).json();$(N==null?void 0:N.data),z(N==null?void 0:N.data)}})()},[]);const[K,W]=m.exports.useState({startDate:"",endDate:""}),t=m.exports.useRef(null),a=async()=>{if(e!=null&&e.propertyid){let d=new Date().toISOString(),o=new Date(d).getFullYear(),s=new Date(d).getMonth(),N=new Date(o,s+1,0).toJSON().split("T")[0],S=new Date(o,new Date(d).getMonth()-5,1).toJSON().split("T")[0],b=`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}`;S&&N&&(b+=`?fromdate=${S}&todate=${N}`);const A=await(await fetch(b)).json();G(A.data?A.data:[]);const D={owner_name:v==null?void 0:v.owner_name,building_name:v==null?void 0:v.building_name,community_name:v==null?void 0:v.communityname,project_name:v==null?void 0:v.project_name,unitnumber:v==null?void 0:v.unitnumber};$({filteredData:A==null?void 0:A.data,PropertyData:D})}};m.exports.useEffect(()=>{if(E!=null&&E.length&&(e==null?void 0:e.propertyid)&&(e==null?void 0:e.startDate)&&(e==null?void 0:e.endDate)){const d=E.filter(o=>{let s=!0;return e.propertyid&&o.propertyid!==e.propertyid&&(s=!1),(o==null?void 0:o.checkindate)<(e==null?void 0:e.startDate)&&(o==null?void 0:o.checkindate)>(e==null?void 0:e.endDate)&&(s=!1),s});G(d)}a()},[e==null?void 0:e.propertyid,e==null?void 0:e.startDate,e==null?void 0:e.endDate,E,J]);const r=()=>{U(""),u({...e,filteredDates:[]}),W({startDate:null,endDate:null})},p=async d=>{if(C(!0),U(d),!d){u({...e,filteredDates:[]});return}const s=await(await fetch(`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}?fromdate=${d.startDate}&todate=${d.endDate}`)).json();C(!1);let N=v;u({...e,filteredDates:s==null?void 0:s.data});const S={owner_name:N.owner_name,building_name:N.building_name,community_name:N.communityname,project_name:N.project_name,unitnumber:N.unitnumber};X(S),L(S),w({filteredData:s==null?void 0:s.data,PropertyData:S})};function y(d){var A,D,re,oe;const{filteredData:o,PropertyData:s}=d;let N=[];N.push(s),console.log("122222",N,o);const S=new Se.Workbook,b=S.addWorksheet("CombinedSheet");b.mergeCells("A1:W1"),b.addRow(["BOOKING SUMMARY"]),b.columns=[{header:"Landlord Name",key:"owner_name",width:30},{header:"Community Name",key:"community_name",width:40},{header:"Project Name",key:"project_name",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"building_name",width:25},{header:"",key:"",width:20},{header:"",key:"",width:55},{header:"",key:"",width:55}],N&&(console.log("PropertyData",s),[["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...N.map(x=>[x.owner_name,x.community_name,x.project_name,x.unitnumber,x.building_name])].forEach(x=>{b.addRow(x)}),b.addRow([]),b.addRow([]));const q=b.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATION","TOTAL BOOKING AMOUNT"]);if(o){o.forEach(c=>{b.addRow([c==null?void 0:c.TimePerid,c==null?void 0:c.TotalDaysinMonth,c==null?void 0:c.No_of_Booked_Nights,Number(c==null?void 0:c.AveragePerNight).toFixed(2),Math.round(Number(c==null?void 0:c.OccpancyRate).toFixed(0))+"%","NOT AVAILABLE",c==null?void 0:c.TotalHostPayable])}),b.addRow([]);const _=o.map(c=>Number(c.AveragePerNight)).reduce((c,h)=>c+h,0),x=b.addRow(["TOTAL",((A=o.map(c=>Number(c.TotalDaysinMonth)).reduce((c,h)=>c+h,0))==null?void 0:A.toLocaleString())+" Available Nights",((D=o.map(c=>Number(c.No_of_Booked_Nights)).reduce((c,h)=>c+h,0))==null?void 0:D.toLocaleString())+"  Booked Nights","AED "+(_==null?void 0:_.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),Math.round(Number(o.map(c=>Number(c.OccpancyRate)).reduce((c,h)=>c+h,0)/o.length).toFixed(0))+"%","","AED "+((oe=(re=o.map(c=>Number(c.TotalHostPayable)).reduce((c,h)=>c+h,0))==null?void 0:re.toLocaleString())==null?void 0:oe.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))]);{const c={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};x.fill=c,q.fill=c;const h={argb:"FFFFFF"};[x,q].forEach(be=>{be.eachCell({includeEmpty:!0},ve=>{ve.font={color:h}})})}}b.getRow(2).font={bold:!0},b.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},b.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},b.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},b.getRow(2).font={color:{argb:"FFFFFF"}},b.getRow(3).font={color:{argb:"FFFFFF"}},b.getRow(7).font={color:{argb:"FFFFFF"}},b.getRow(7).alignment={horizontal:"center"},S.xlsx.writeBuffer().then(_=>{const x=new Blob([_],{type:"application/octet-stream"}),c=URL.createObjectURL(x),h=document.createElement("a");h.href=c,h.download="booking-"+new Date+".xlsx",document.body.appendChild(h),h.click(),document.body.removeChild(h)})}return l(g,{children:l("div",{className:"xl:col-span-2 col-span-1",children:l(pe,{title:"Booking Summary",children:[e.propertyid?(e==null?void 0:e.filteredDates)&&((T=e==null?void 0:e.filteredDates)==null?void 0:T.length)?l(g,{children:l("div",{className:"flex flex-row-reverse",children:l("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>y(Z),children:[l("img",{src:me,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:f,lineNumber:664,columnNumber:23},void 0),l("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:f,lineNumber:669,columnNumber:23},void 0)]},void 0,!0,{fileName:f,lineNumber:660,columnNumber:21},void 0)},void 0,!1,{fileName:f,lineNumber:659,columnNumber:13},void 0)},void 0,!1):l(g,{children:l("div",{className:"flex flex-row-reverse",children:l("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>y(J),children:[l("img",{src:me,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:f,lineNumber:685,columnNumber:23},void 0),l("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:f,lineNumber:690,columnNumber:23},void 0)]},void 0,!0,{fileName:f,lineNumber:681,columnNumber:21},void 0)},void 0,!1,{fileName:f,lineNumber:680,columnNumber:13},void 0)},void 0,!1):null,l("div",{children:[l("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[l("div",{className:"w-[100%] col-span-3",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:f,lineNumber:725,columnNumber:17},void 0)},void 0,!1,{fileName:f,lineNumber:724,columnNumber:15},void 0),l("div",{className:"w-[100%] col-span-3",children:l(xe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:F,value:F&&O?F.filter(function(d){return d.value===(e==null?void 0:e.propertyid)}):F.filter(function(d){return d.value===(e==null?void 0:e.propertyid)}),onChange:d=>{O?r():u({...e,propertyid:d==null?void 0:d.value})},styles:Ae,id:"hh",placeholder:"Select and Search property"},void 0,!1,{fileName:f,lineNumber:733,columnNumber:17},void 0)},void 0,!1,{fileName:f,lineNumber:729,columnNumber:15},void 0)]},void 0,!0,{fileName:f,lineNumber:720,columnNumber:13},void 0),e.propertyid&&l(g,{children:l("div",{className:"flex justify-end mt-[25px]",children:[l("div",{className:"w-[150px]",children:l("div",{className:"date-range-custom relative",children:l(ge,{value:K,inputClassName:"input-class",containerClassName:"container-class",onChange:p,placeholder:"SELECT DATE"},void 0,!1,{fileName:f,lineNumber:777,columnNumber:23},void 0)},void 0,!1,{fileName:f,lineNumber:776,columnNumber:21},void 0)},void 0,!1,{fileName:f,lineNumber:775,columnNumber:19},void 0),O&&l("div",{className:"flex justify-end",children:l("div",{className:"w-[90px]",children:l("div",{className:"date-range-custom relative",children:l("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:r,children:"Reset"},void 0,!1,{fileName:f,lineNumber:790,columnNumber:27},void 0)},void 0,!1,{fileName:f,lineNumber:789,columnNumber:25},void 0)},void 0,!1,{fileName:f,lineNumber:788,columnNumber:23},void 0)},void 0,!1,{fileName:f,lineNumber:787,columnNumber:21},void 0)]},void 0,!0,{fileName:f,lineNumber:774,columnNumber:17},void 0)},void 0,!1)]},void 0,!0,{fileName:f,lineNumber:719,columnNumber:11},void 0),(H=e.filteredDates)!=null&&H.length?l(g,{children:l(de,{allBooking:e.filteredDates,propertyData:Q,ref:t,fetchDetails:!0},void 0,!1,{fileName:f,lineNumber:810,columnNumber:17},void 0)},void 0,!1):l(g,{children:v?l(de,{allBooking:i,propertyData:v,ref:t,fetchDetails:!0},void 0,!1,{fileName:f,lineNumber:822,columnNumber:19},void 0):""},void 0,!1)]},void 0,!0,{fileName:f,lineNumber:652,columnNumber:9},void 0)},void 0,!1,{fileName:f,lineNumber:651,columnNumber:7},void 0)},void 0,!1)},Oe=ce.memo(Ee);export{Oe as default};
