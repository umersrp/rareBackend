import{R as J,r as o,j as s,F as g,b as u,C as W,an as Q,cq as X,Q as Z}from"./index.50bb4499.js";import{D as w}from"./index.esm.422148a5.js";import"./jspdf.es.min.e78e7abc.js";import"./html2canvas.esm.0eae2bf4.js";import{r as F}from"./index.c0e2c666.js";import{u as G,w as k}from"./xlsx.2859d0e9.js";import{E as B}from"./exceljs.min.5c169413.js";import{E as ee}from"./excel.9601f4f9.js";const q=J.forwardRef(({allBooking:e,propertyData:i},P)=>{console.log("@@@@@@@@@@@@@@@@@@@@2",i);const L=[{Header:"Sr no",accessor:"id",Cell:({row:a,flatRows:n})=>s("span",{children:n.indexOf(a)+1})},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:a=>{var n,c;return s("span",{children:(n=a==null?void 0:a.cell)!=null&&n.value?(c=a==null?void 0:a.cell)==null?void 0:c.value:"Not Available"})}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:a=>{var n,c;return s("span",{children:(n=a==null?void 0:a.cell)!=null&&n.value?(c=a==null?void 0:a.cell)==null?void 0:c.value:"Not Available"})}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:a=>{var n,c;return s("span",{children:(n=a==null?void 0:a.cell)!=null&&n.value?(c=a==null?void 0:a.cell)==null?void 0:c.value:"Not Available"})}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:a=>{var n,c;return s("span",{children:(n=a==null?void 0:a.cell)!=null&&n.value?Number((c=a==null?void 0:a.cell)==null?void 0:c.value).toFixed(2):"Not Available"})}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:a=>{var n,c;return s("span",{children:(n=a==null?void 0:a.cell)!=null&&n.value?((c=a==null?void 0:a.cell)==null?void 0:c.value)+" %":"Not Available"})}},{Header:"REFUND /CANCELLATIONT",accessor:"refund",Cell:a=>{var n,c;return s("span",{children:(n=a==null?void 0:a.cell)!=null&&n.value?(c=a==null?void 0:a.cell)==null?void 0:c.value:"Not Available"})}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:a=>{var n,c;return s("span",{children:(n=a==null?void 0:a.cell)!=null&&n.value?Number((c=a==null?void 0:a.cell)==null?void 0:c.value).toFixed(2):"Not Available"})}}],x=o.exports.useMemo(()=>L,[]),y=o.exports.useMemo(()=>e),A=F.exports.useTable({columns:x,data:y,initialState:{pageIndex:0,pageSize:50}},F.exports.useGlobalFilter,F.exports.useSortBy,F.exports.usePagination,F.exports.useRowSelect),{getTableProps:C,getTableBodyProps:T,headerGroups:_,footerGroups:I,page:v,nextPage:j,previousPage:U,canNextPage:V,canPreviousPage:D,pageOptions:K,state:$,gotoPage:M,pageCount:z,setPageSize:H,setGlobalFilter:Y,prepareRow:O}=A,[E,R]=o.exports.useState(0),[l,m]=o.exports.useState(0),[r,h]=o.exports.useState(0),[p,t]=o.exports.useState(0),[d,N]=o.exports.useState(0),[S,b]=o.exports.useState(0);return o.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(n=>{const{TotalDaysinMonth:c}=n;return c});R(a.reduce((n,c)=>n+c,0))}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(n=>{const{No_of_Booked_Nights:c}=n;return c});m(a.reduce((n,c)=>n+c,0))}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(c=>{const{OccpancyRate:f}=c;return f});let n=Math.round(a.reduce((c,f)=>c+Number(f),0)/a.length);t(n)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var a;if(e!=null&&e.length){let n=0;for(let c=0;c<(e==null?void 0:e.length);c++){let f=parseFloat((a=e[c])==null?void 0:a.totalNonight);n+=f}N(n||0)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var a;if(e!=null&&e.length){let n=0;for(let c=0;c<(e==null?void 0:e.length);c++){let f=Number((a=e[c])==null?void 0:a.AveragePerNight);n+=f}b(n||0)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var a;if(e!=null&&e.length){let n=0;for(let c=0;c<(e==null?void 0:e.length);c++){console.log("@@@@@3333",e);let f=Number((a=e[c])==null?void 0:a.TotalHostPayable);n+=f}console.log("totalbookednights",n),h(n||0)}},[e==null?void 0:e.length]),s(g,{children:e&&e.length>0?s(g,{children:u("div",{ref:P,children:[u("div",{className:"mt-[25px]",children:[u("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Landlord Name: "}),s("p",{className:"capitalize",children:i!=null&&i.owner_name?i==null?void 0:i.owner_name:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Community Name: "}),s("p",{className:"capitalize",children:i!=null&&i.communityname?i==null?void 0:i.communityname:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Project Name: "}),s("p",{className:"capitalize",children:i!=null&&i.project_name?i==null?void 0:i.project_name:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Apartment No: "}),s("p",{className:"capitalize",children:i!=null&&i.unitnumber?i==null?void 0:i.unitnumber:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Building No: "}),s("p",{className:"capitalize",children:i!=null&&i.building_name?i==null?void 0:i.building_name:"Not Available"})]})]}),s("div",{className:"overflow-x-auto -mx-6 mt-6",children:s("div",{className:"inline-block min-w-full align-middle",children:s("div",{className:"",children:u("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...C,children:[s("thead",{className:"bg-slate-200 dark:bg-slate-700",children:_.map(a=>s("tr",{...a.getHeaderGroupProps(),children:a.headers.map(n=>u("th",{...n.getHeaderProps(n.getSortByToggleProps()),scope:"col",className:"table-th",children:[n.render("Header"),s("span",{children:n.isSorted?n.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),u("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...T,children:[v&&v.length>0&&v.map(a=>(O(a),s(g,{children:s("tr",{...a.getRowProps(),children:a.cells.map(n=>s("td",{...n.getCellProps(),className:"table-td",children:n.render("Cell")}))})}))),u("tr",{children:[s("td",{className:"font-semibold",children:"TOTAL"}),s("td",{}),u("td",{className:"table-td font-semibold",children:[E==null?void 0:E.toLocaleString()," Available Nights"]}),u("td",{className:"table-td font-semibold",children:[l==null?void 0:l.toLocaleString()," Booked Nights"]}),u("td",{className:"table-td font-semibold",children:[S==null?void 0:S.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," AED"]}),u("td",{className:"table-td font-semibold",children:[p==null?void 0:p.toLocaleString()," %"]}),s("td",{}),u("td",{className:"table-td font-semibold",children:[r==null?void 0:r.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," AED"]}),s("td",{})]})]})]})})})})]})}):s(g,{children:s("h6",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})}),te={option:(e,i)=>({...e,fontSize:"14px"})},de=()=>{var E,R;const[e,i]=o.exports.useState({propertyid:"",filteredDates:[]}),[P,L]=o.exports.useState([]),[x,y]=o.exports.useState(""),[A,C]=o.exports.useState(""),[T,_]=o.exports.useState([]),[I,v]=o.exports.useState(""),[j,U]=o.exports.useState({}),[V,D]=o.exports.useState({filteredData:[],PropertyData:{}});o.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(l=>l.json()).then(l=>{const m=l==null?void 0:l.map(r=>({label:r.unitnumber+" | "+r.communityname+" | "+r.projectname+" | "+r.buildingname,value:r._id}));_(m)})},[]),o.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const r=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();r&&v(r)}})()},[e==null?void 0:e.propertyid]),o.exports.useEffect(()=>{(async()=>{const r=await(await fetch(`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}?fromdate=${newValue.startDate}&todate=${newValue.endDate}`)).json();D(r==null?void 0:r.data),y(r==null?void 0:r.data)})()},[]);const[K,$]=o.exports.useState({startDate:"",endDate:""}),M=o.exports.useRef(null),z=async()=>{const m=await(await fetch(`http://dev-rare.srp.ai/booking/summary/${e==null?void 0:e.propertyid}`)).json();L(m.data),console.log("=============>",m)};o.exports.useEffect(()=>{if(x!=null&&x.length&&(e==null?void 0:e.propertyid)&&(e==null?void 0:e.startDate)&&(e==null?void 0:e.endDate)){const l=x.filter(m=>{let r=!0;return e.propertyid&&m.propertyid!==e.propertyid&&(r=!1),(m==null?void 0:m.checkindate)<(e==null?void 0:e.startDate)&&(m==null?void 0:m.checkindate)>(e==null?void 0:e.endDate)&&(r=!1),r});L(l)}z()},[e==null?void 0:e.propertyid,e==null?void 0:e.startDate,e==null?void 0:e.endDate,x]);const H=()=>{C(""),i({...e,filteredDates:[]}),$({startDate:null,endDate:null})},Y=async l=>{if(v(!0),console.log("newValue",l),C(l),!l){i({...e,filteredDates:[]});return}const r=await(await fetch(`http://dev-rare.srp.ai/booking/summarybyDates/${e==null?void 0:e.propertyid}?fromdate=${l.startDate}&todate=${l.endDate}`)).json();r.data.length==0&&Z.error("No Data Found against this Property",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),v(!1);let h=I;i({...e,filteredDates:r==null?void 0:r.data});const p={owner_name:h.owner_name,building_name:h.building_name,community_name:h.communityname,project_name:h.project_name,unitnumber:h.unitnumber};U(p),D({filteredData:r==null?void 0:r.data,PropertyData:p})};function O(l){const{filteredData:m,PropertyData:r}=l;let h=[];h.push(r),console.log("122222",h);const p=new B.Workbook,t=p.addWorksheet("CombinedSheet");if(t.mergeCells("A1:E1"),t.addRow(["PROPERTY DETAIL"]),t.columns=[{header:"Landlord Name",key:"owner_name",width:40,fgColor:{argb:"008000"}},{header:"Community Name",key:"community_name",width:40,fgColor:{argb:"008000"}},{header:"Project Name",key:"project_name",width:40},{header:"Apartment No",key:"unitnumber",width:35},{header:"Building No",key:"building_name",width:55}],h){console.log("PropertyData",r);const d=[["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...h==null?void 0:h.map(N=>[N.owner_name,N.community_name,N.project_name,N.unitnumber,N.building_name])];d==null||d.forEach(N=>{t.addRow(N)}),t.addRow([])}t.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATIONT","TOTAL BOOKING AMOUNT"]),m&&(m==null||m.forEach(d=>{t.addRow([d==null?void 0:d.TimePerid,d==null?void 0:d.TotalDaysinMonth,d==null?void 0:d.No_of_Booked_Nights,d==null?void 0:d.AveragePerNight,d==null?void 0:d.OccpancyRate,d.Occp,d==null?void 0:d.TotalHostPayable])})),t.getRow(2).font={bold:!0},t.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"008000"}},t.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"008000"}},p.xlsx.writeBuffer().then(d=>{const N=new Blob([d],{type:"application/octet-stream"}),S=URL.createObjectURL(N),b=document.createElement("a");b.href=S,b.download="booking-"+new Date+".xlsx",document.body.appendChild(b),b.click(),document.body.removeChild(b)})}return s(g,{children:s("div",{className:"xl:col-span-2 col-span-1",children:u(W,{title:"Booking Summary",children:[(e==null?void 0:e.filteredDates)&&((E=e==null?void 0:e.filteredDates)==null?void 0:E.length)?s(g,{children:s("div",{className:"flex flex-row-reverse",children:u("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>O(V),children:[s("img",{src:ee,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):null,u("div",{children:[u("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[s("div",{className:"w-[100%] col-span-3",children:s("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})}),s("div",{className:"w-[100%] col-span-3",children:s(Q,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:T,value:T&&A?T.filter(function(l){return l.value===(e==null?void 0:e.propertyid)}):T.filter(function(l){return l.value===(e==null?void 0:e.propertyid)}),onChange:l=>{A?H():i({...e,propertyid:l==null?void 0:l.value})},styles:te,id:"hh",placeholder:"Select and Search property"})})]}),console.log("userData222=========HJKL=====>",e),e.propertyid&&s(g,{children:u("div",{className:"flex justify-end mt-[25px]",children:[s("div",{className:"w-[150px]",children:s("div",{className:"date-range-custom relative",children:s(w,{value:K,inputClassName:"input-class",containerClassName:"container-class",onChange:Y,placeholder:"SELECT DATE"})})}),A&&s("div",{className:"flex justify-end",children:s("div",{className:"w-[90px]",children:s("div",{className:"date-range-custom relative",children:s("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:H,children:"Reset"})})})})]})})]}),(R=e.filteredDates)!=null&&R.length?s(g,{children:s(q,{allBooking:e.filteredDates,propertyData:j,ref:M})}):s(g,{children:s(q,{allBooking:P,propertyData:I,ref:M})})]})})})};export{de as default};