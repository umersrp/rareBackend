import{R as pe,r as o,A as fe,b as _,j as a,F as N,c as p,C as Ne,aq as xe}from"./index.4de300c8.js";import{D as be}from"./index.esm.8ac58af1.js";import"./jspdf.es.min.b4126525.js";import"./html2canvas.esm.0eae2bf4.js";import{E as ve}from"./exceljs.min.d14fea6c.js";import{E as ge}from"./excel.9601f4f9.js";const re=pe.forwardRef(({allBooking:e,propertyData:h,fetchDetails:c=!1},L)=>{const x=[{Header:"Sr no",accessor:"id",Cell:({row:t,flatRows:n})=>a("span",{children:n.indexOf(t)+1})},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:t=>{var n,d,s,i;return c?a("button",{onClick:()=>{var r,m;return D(h._id,(r=t==null?void 0:t.cell)!=null&&r.value?(m=t==null?void 0:t.cell)==null?void 0:m.value:"")},children:(n=t==null?void 0:t.cell)!=null&&n.value?(d=t==null?void 0:t.cell)==null?void 0:d.value:"Not Available"}):a("span",{children:(s=t==null?void 0:t.cell)!=null&&s.value?(i=t==null?void 0:t.cell)==null?void 0:i.value:"Not Available"})}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:t=>{var n,d;return a("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?(d=t==null?void 0:t.cell)==null?void 0:d.value:"Not Available"})}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:t=>{var n,d;return a("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?(d=t==null?void 0:t.cell)==null?void 0:d.value:"Not Available"})}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:t=>{var n,d;return a("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?Number((d=t==null?void 0:t.cell)==null?void 0:d.value).toFixed(2):"Not Available"})}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:t=>{var n,d;return a("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?Math.round(Number((d=t==null?void 0:t.cell)==null?void 0:d.value).toFixed(2))+" %":"Not Available"})}},{Header:"REFUND /CANCELLATIONT",accessor:"refund",Cell:t=>{var n,d;return a("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?(d=t==null?void 0:t.cell)==null?void 0:d.value:"Not Available"})}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:t=>{var n,d;return a("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?Number((d=t==null?void 0:t.cell)==null?void 0:d.value).toFixed(2):"Not Available"})}}],U=o.exports.useMemo(()=>x,[]),A=o.exports.useMemo(()=>e),M=fe(),b=_.exports.useTable({columns:U,data:A,initialState:{pageIndex:0,pageSize:50}},_.exports.useGlobalFilter,_.exports.useSortBy,_.exports.usePagination,_.exports.useRowSelect),{getTableProps:$,getTableBodyProps:T,headerGroups:E,footerGroups:le,page:y,nextPage:V,previousPage:de,canNextPage:Y,canPreviousPage:H,pageOptions:I,state:ie,gotoPage:oe,pageCount:J,setPageSize:he,setGlobalFilter:K,prepareRow:W}=b,[R,q]=o.exports.useState(0),[F,Q]=o.exports.useState(0),[P,X]=o.exports.useState(0),[O,Z]=o.exports.useState(0),[w,z]=o.exports.useState(0),[C,j]=o.exports.useState(0),[k,G]=o.exports.useState(0);o.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(n=>{const{TotalDaysinMonth:d}=n;return d});q(t.reduce((n,d)=>n+d,0))}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(n=>{const{No_of_Booked_Nights:d}=n;return d});Q(t.reduce((n,d)=>n+d,0))}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(d=>{const{OccpancyRate:s}=d;return s});let n=Math.round(t.reduce((d,s)=>d+Number(s),0)/t.length);Z(n)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let d=0;d<(e==null?void 0:e.length);d++){let s=parseFloat((t=e[d])==null?void 0:t.totalNonight);n+=s}z(n||0)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let d=0;d<(e==null?void 0:e.length);d++){let s=Number((t=e[d])==null?void 0:t.AveragePerNight);n+=s}j(n||0)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let d=0;d<(e==null?void 0:e.length);d++){let s=Number((t=e[d])==null?void 0:t.TotalHostPayable);n+=s}X(n||0)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{h._id&&G(h._id)},[h._id]);function D(t,n){let d=new Date(n);if(t){let s=new Date(d.getFullYear(),d.getMonth(),1).toJSON().split("T")[0],i=new Date(d.getFullYear(),d.getMonth()+1,0).toJSON().split("T")[0],r=`/booking-reports?startDate=${s}&endDate=${i}&propertyId=${t}`;M(r)}}return a(N,{children:e&&e.length>0?a(N,{children:p("div",{ref:L,children:[p("div",{className:"mt-[25px]",children:[p("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Landlord Name: "}),a("p",{className:"capitalize",children:h!=null&&h.owner_name?h==null?void 0:h.owner_name:"Not Available"})]}),p("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Community Name: "}),a("p",{className:"capitalize",children:h!=null&&h.communityname?h==null?void 0:h.communityname:"Not Available"})]}),p("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Project Name: "}),a("p",{className:"capitalize",children:h!=null&&h.project_name?h==null?void 0:h.project_name:"Not Available"})]}),p("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Apartment No: "}),a("p",{className:"capitalize",children:h!=null&&h.unitnumber?h==null?void 0:h.unitnumber:"Not Available"})]}),p("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Building No: "}),a("p",{className:"capitalize",children:h!=null&&h.building_name?h==null?void 0:h.building_name:"Not Available"})]})]}),a("div",{className:"overflow-x-auto -mx-6 mt-6",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:"",children:p("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...$,children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:E.map(t=>a("tr",{...t.getHeaderGroupProps(),children:t.headers.map(n=>p("th",{...n.getHeaderProps(n.getSortByToggleProps()),scope:"col",className:"table-th",children:[n.render("Header"),a("span",{children:n.isSorted?n.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),p("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...T,children:[y&&y.length>0&&y.map(t=>(W(t),a(N,{children:a("tr",{...t.getRowProps(),children:t.cells.map(n=>a("td",{...n.getCellProps(),className:"table-td",children:n.render("Cell")}))})}))),p("tr",{children:[a("td",{className:"font-semibold",children:"TOTAL"}),a("td",{}),p("td",{className:"table-td font-semibold",children:[R==null?void 0:R.toLocaleString()," Available Nights"]}),p("td",{className:"table-td font-semibold",children:[F==null?void 0:F.toLocaleString()," Booked Nights"]}),p("td",{className:"table-td font-semibold",children:[C==null?void 0:C.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," AED"]}),p("td",{className:"table-td font-semibold",children:[O==null?void 0:O.toLocaleString()," %"]}),a("td",{}),p("td",{className:"table-td font-semibold",children:[P==null?void 0:P.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," AED"]}),a("td",{})]})]})]})})})})]})}):a(N,{children:a("h6",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})}),Se={option:(e,h)=>({...e,fontSize:"14px"})},Pe=()=>{var n,d;const[e,h]=o.exports.useState({propertyid:"",filteredDates:[]}),[c,L]=o.exports.useState([]),[x,U]=o.exports.useState(""),[A,M]=o.exports.useState(""),[b,$]=o.exports.useState([]),[T,E]=o.exports.useState(""),[le,y]=o.exports.useState(""),[V,de]=o.exports.useState({}),[Y,H]=o.exports.useState([]),[I,ie]=o.exports.useState([]),[oe,J]=o.exports.useState(""),[he,K]=o.exports.useState(0),[W,R]=o.exports.useState(0),[q,F]=o.exports.useState(0),[Q,P]=o.exports.useState(0),[X,O]=o.exports.useState(0),[Z,w]=o.exports.useState(0);o.exports.useEffect(()=>{if(c!=null&&c.length){const s=c.map(i=>{const{TotalDaysinMonth:r}=i;return r});console.log("days"),K(s.reduce((i,r)=>i+r,0))}},[c==null?void 0:c.length]),o.exports.useEffect(()=>{if(c!=null&&c.length){const s=c.map(i=>{const{No_of_Booked_Nights:r}=i;return r});R(s.reduce((i,r)=>i+r,0))}},[c==null?void 0:c.length]),o.exports.useEffect(()=>{if(c!=null&&c.length){const s=c.map(r=>{const{OccpancyRate:m}=r;return m});let i=Math.round(s.reduce((r,m)=>r+Number(m),0)/s.length);P(i)}},[c==null?void 0:c.length]),o.exports.useEffect(()=>{var s;if(c!=null&&c.length){let i=0;for(let r=0;r<(c==null?void 0:c.length);r++){let m=parseFloat((s=c[r])==null?void 0:s.totalNonight);i+=m}O(i||0)}},[c==null?void 0:c.length]),o.exports.useEffect(()=>{var s;if(c!=null&&c.length){let i=0;for(let r=0;r<(c==null?void 0:c.length);r++){let m=Number((s=c[r])==null?void 0:s.AveragePerNight);i+=m}w(i||0)}},[c==null?void 0:c.length]),o.exports.useEffect(()=>{var s;if(c!=null&&c.length){let i=0;for(let r=0;r<(c==null?void 0:c.length);r++){console.log("@@@@@3333",c);let m=Number((s=c[r])==null?void 0:s.TotalHostPayable);i+=m}console.log("totalbookednights",i),F(i||0)}},[c==null?void 0:c.length]),o.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(s=>s.json()).then(s=>{const i=s==null?void 0:s.map(r=>({label:r.unitnumber+" | "+r.communityname+" | "+r.projectname+" | "+r.buildingname,value:r._id}));$(i)})},[]),o.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){J(e.propertyid);const r=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();H(I==null?void 0:I.data),r&&E(r)}})()},[e==null?void 0:e.propertyid]),o.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){let i=`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}`;newValue&&(newValue==null?void 0:newValue.startDate)&&(newValue==null?void 0:newValue.endDate)&&(i+=`?fromdate=${newValue.startDate}&todate=${newValue.endDate}`);const m=await(await fetch(i)).json();H(m==null?void 0:m.data),U(m==null?void 0:m.data)}})()},[]);const[z,C]=o.exports.useState({startDate:"",endDate:""}),j=o.exports.useRef(null),k=async()=>{if(e!=null&&e.propertyid){let s=new Date,i=new Date(s.getFullYear(),s.getMonth()+1,0).toJSON().split("T")[0];s.setMonth(s.getMonth()-6);let r=new Date(s.getFullYear(),s.getMonth(),1).toJSON().split("T")[0],m=`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}`;r&&i&&(m+=`?fromdate=${r}&todate=${i}`);const u=await(await fetch(m)).json();L(u.data?u.data:[])}};o.exports.useEffect(()=>{if(x!=null&&x.length&&(e==null?void 0:e.propertyid)&&(e==null?void 0:e.startDate)&&(e==null?void 0:e.endDate)){const s=x.filter(i=>{let r=!0;return e.propertyid&&i.propertyid!==e.propertyid&&(r=!1),(i==null?void 0:i.checkindate)<(e==null?void 0:e.startDate)&&(i==null?void 0:i.checkindate)>(e==null?void 0:e.endDate)&&(r=!1),r});L(s)}k()},[e==null?void 0:e.propertyid,e==null?void 0:e.startDate,e==null?void 0:e.endDate,x]);const G=()=>{M(""),h({...e,filteredDates:[]}),C({startDate:null,endDate:null})},D=async s=>{if(E(!0),M(s),!s){h({...e,filteredDates:[]});return}const r=await(await fetch(`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}?fromdate=${s.startDate}&todate=${s.endDate}`)).json();E(!1);let m=T;h({...e,filteredDates:r==null?void 0:r.data});const v={owner_name:m.owner_name,building_name:m.building_name,community_name:m.communityname,project_name:m.project_name,unitnumber:m.unitnumber};y(v),H({filteredData:r==null?void 0:r.data,PropertyData:v})};function t(s){var ee,te,se,ae,ce,ne;const{filteredData:i,PropertyData:r}=s;let m=[];m.push(r),console.log("122222",m);const v=new ve.Workbook,u=v.addWorksheet("CombinedSheet");if(u.mergeCells("A1:W1"),u.addRow(["PROPERTY SUMMARY"]),u.columns=[{header:"Landlord Name",key:"owner_name",width:30},{header:"Community Name",key:"community_name",width:40},{header:"Project Name",key:"project_name",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"building_name",width:25},{header:"",key:"",width:20},{header:"",key:"",width:55},{header:"",key:"",width:55}],m){console.log("PropertyData",r),[["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...m.map(l=>[l.owner_name,l.community_name,l.project_name,l.unitnumber,l.building_name])].forEach(l=>{u.addRow(l)}),u.addRow([]),u.addRow([]);const S=u.addRow(["MONTHWISE BOOKING SUMMARY"]);u.addRow([]),S.eachCell(l=>{l.font={size:11}})}const B=u.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATIONT","TOTAL BOOKING AMOUNT"]);if(i){i.forEach(l=>{u.addRow([l==null?void 0:l.TimePerid,l==null?void 0:l.TotalDaysinMonth,l==null?void 0:l.No_of_Booked_Nights,Number(l==null?void 0:l.AveragePerNight).toFixed(2),l==null?void 0:l.OccpancyRate,"NOT AVAILABLE",l==null?void 0:l.TotalHostPayable])}),u.addRow([]);const g=i.map(l=>Number(l.AveragePerNight)).reduce((l,f)=>l+f,0),S=u.addRow(["TOTAL",((ee=i.map(l=>Number(l.TotalDaysinMonth)).reduce((l,f)=>l+f,0))==null?void 0:ee.toLocaleString())+" Available Nights",((te=i.map(l=>Number(l.No_of_Booked_Nights)).reduce((l,f)=>l+f,0))==null?void 0:te.toLocaleString())+"  Booked Nights","AED"+(g==null?void 0:g.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),((ae=(se=i.map(l=>Number(l.OccpancyRate)).reduce((l,f)=>l+f,0))==null?void 0:se.toLocaleString())==null?void 0:ae.toLocaleString())+"%","","AED "+((ne=(ce=i.map(l=>Number(l.TotalHostPayable)).reduce((l,f)=>l+f,0))==null?void 0:ce.toLocaleString())==null?void 0:ne.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))]);{const l={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};S.fill=l,B.fill=l;const f={argb:"FFFFFF"};[S,B].forEach(me=>{me.eachCell({includeEmpty:!0},ue=>{ue.font={color:f}})})}}u.getRow(2).font={bold:!0},u.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},u.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},u.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},u.getRow(2).font={color:{argb:"FFFFFF"}},u.getRow(3).font={color:{argb:"FFFFFF"}},u.getRow(7).font={color:{argb:"FFFFFF"}},u.getRow(7).alignment={horizontal:"center"},v.xlsx.writeBuffer().then(g=>{const S=new Blob([g],{type:"application/octet-stream"}),l=URL.createObjectURL(S),f=document.createElement("a");f.href=l,f.download="booking-"+new Date+".xlsx",document.body.appendChild(f),f.click(),document.body.removeChild(f)})}return a(N,{children:a("div",{className:"xl:col-span-2 col-span-1",children:p(Ne,{title:"Booking Summary",children:[(e==null?void 0:e.filteredDates)&&((n=e==null?void 0:e.filteredDates)==null?void 0:n.length)?a(N,{children:a("div",{className:"flex flex-row-reverse",children:p("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>t(Y),children:[a("img",{src:ge,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),a("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):null,p("div",{children:[p("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[a("div",{className:"w-[100%] col-span-3",children:a("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})}),a("div",{className:"w-[100%] col-span-3",children:a(xe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:b,value:b&&A?b.filter(function(s){return s.value===(e==null?void 0:e.propertyid)}):b.filter(function(s){return s.value===(e==null?void 0:e.propertyid)}),onChange:s=>{A?G():h({...e,propertyid:s==null?void 0:s.value})},styles:Se,id:"hh",placeholder:"Select and Search property"})})]}),e.propertyid&&a(N,{children:p("div",{className:"flex justify-end mt-[25px]",children:[a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(be,{value:z,inputClassName:"input-class",containerClassName:"container-class",onChange:D,placeholder:"SELECT DATE"})})}),A&&a("div",{className:"flex justify-end",children:a("div",{className:"w-[90px]",children:a("div",{className:"date-range-custom relative",children:a("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:G,children:"Reset"})})})})]})})]}),(d=e.filteredDates)!=null&&d.length?a(N,{children:a(re,{allBooking:e.filteredDates,propertyData:V,ref:j,fetchDetails:!0})}):a(N,{children:T?a(re,{allBooking:c,propertyData:T,ref:j,fetchDetails:!0}):""})]})})})};export{Pe as default};
