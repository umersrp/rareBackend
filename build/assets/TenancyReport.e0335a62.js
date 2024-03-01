import{R as X,r as i,b as S,j as s,F as x,c as h,f as Z,ap as V}from"./index.adb849e2.js";import{D as k}from"./index.esm.f36d69e6.js";import"./jspdf.es.min.61035a0f.js";import"./html2canvas.esm.0eae2bf4.js";import{E as J}from"./excel.9601f4f9.js";import{E as B}from"./exceljs.min.682aaf0b.js";const K=X.forwardRef(({allBooking:e,propertyData:r},p)=>{const F=t=>{const{contractstartdate:n,contractenddate:a}=t;let m=new Date(n),M=new Date(a);return(M.getFullYear()-m.getFullYear())*12+(M.getMonth()-m.getMonth())+" Months"},N=[{Header:"Sr no",accessor:"id",Cell:({row:t,flatRows:n})=>s("span",{children:n.indexOf(t)+1})},{Header:"Tenancy contract No",accessor:"tenantcontractno",Cell:t=>{var n,a;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?(a=t==null?void 0:t.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Status",accessor:t=>`${t.contractenddate}`,Cell:t=>{var n,a;return s("span",{className:"block w-full",children:s("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${new Date((n=t==null?void 0:t.cell)==null?void 0:n.value)>new Date?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:new Date((a=t==null?void 0:t.cell)==null?void 0:a.value)>new Date?"Active":"Expired"})})}},{Header:"Tenancy Start Date",accessor:"contractstartdate",Cell:t=>{var n,a;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?new Date((a=t==null?void 0:t.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Tenancy Expiry Date",accessor:"contractenddate",Cell:t=>{var n,a;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?new Date((a=t==null?void 0:t.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Tenancy Period",accessor:"refund",Cell:t=>{const{original:n}=t.row;return console.log("original",n),s("span",{children:n?F(n):"Not Available"})}},{Header:"Rental Amount",accessor:"rentalamount",Cell:t=>{var n,a,m;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?((m=Number((a=t==null?void 0:t.cell)==null?void 0:a.value))==null?void 0:m.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}))+" AED":"Not Available"})}}],L=i.exports.useMemo(()=>N,[]),g=i.exports.useMemo(()=>e),y=S.exports.useTable({columns:L,data:g,initialState:{pageIndex:0,pageSize:50}},S.exports.useGlobalFilter,S.exports.useSortBy,S.exports.usePagination,S.exports.useRowSelect),{getTableProps:O,getTableBodyProps:E,headerGroups:w,footerGroups:C,page:f,nextPage:$,previousPage:Q,canNextPage:I,canPreviousPage:u,pageOptions:G,state:Y,gotoPage:q,pageCount:U,setPageSize:H,setGlobalFilter:W,prepareRow:A}=y,[v,T]=i.exports.useState(0),[z,P]=i.exports.useState(0),[d,l]=i.exports.useState(0),[o,b]=i.exports.useState(0),[c,R]=i.exports.useState(0),[_,j]=i.exports.useState(0);return i.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(n=>{const{rentalamount:a}=n;return Number(a)});T(t.reduce((n,a)=>n+a,0))}},[e==null?void 0:e.length]),i.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(n=>{const{totalNonight:a}=n;return a});P(t.reduce((n,a)=>n+a,0))}},[e==null?void 0:e.length]),i.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(a=>{const{Occupancy:m}=a;return m});let n=Math.round(t.reduce((a,m)=>a+m,0)/t.length);b(n)}},[e==null?void 0:e.length]),i.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let a=0;a<(e==null?void 0:e.length);a++){let m=parseFloat((t=e[a])==null?void 0:t.totalNonight);n+=m}R(n||0)}},[e==null?void 0:e.length]),i.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let a=0;a<(e==null?void 0:e.length);a++){let m=parseFloat((t=e[a])==null?void 0:t.averageCost);n+=m}j(n||0)}},[e==null?void 0:e.length]),i.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let a=0;a<(e==null?void 0:e.length);a++){let m=parseFloat((t=e[a])==null?void 0:t.totalhostpayble);n+=m}l(n||0)}},[e==null?void 0:e.length]),s(x,{children:e&&(e==null?void 0:e.length)>0?s(x,{children:h("div",{ref:p,children:[h("div",{className:"mt-[25px]",children:[h("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Landlord Name: "}),s("p",{className:"capitalize",children:r!=null&&r.owner_name?r==null?void 0:r.owner_name:"Not Available"})]}),h("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Community Name: "}),s("p",{className:"capitalize",children:r!=null&&r.communityname?r==null?void 0:r.communityname:"Not Available"})]}),h("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Project Name: "}),s("p",{className:"capitalize",children:r!=null&&r.project_name?r==null?void 0:r.project_name:"Not Available"})]}),h("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Apartment No: "}),s("p",{className:"capitalize",children:r!=null&&r.unitnumber?r==null?void 0:r.unitnumber:"Not Available"})]}),h("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Building No: "}),s("p",{className:"capitalize",children:r!=null&&r.building_name?r==null?void 0:r.building_name:"Not Available"})]})]}),s("div",{className:"overflow-x-auto -mx-6 mt-6",children:s("div",{className:"inline-block min-w-full align-middle",children:s("div",{className:"",children:h("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...O,children:[s("thead",{className:"bg-slate-200 dark:bg-slate-700",children:w.map(t=>s("tr",{...t.getHeaderGroupProps(),children:t.headers.map(n=>h("th",{...n.getHeaderProps(n.getSortByToggleProps()),scope:"col",className:"table-th",children:[n.render("Header"),s("span",{children:n.isSorted?n.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),h("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...E,children:[f&&f.length>0&&f.map(t=>(A(t),s(x,{children:s("tr",{...t.getRowProps(),children:t.cells.map(n=>s("td",{...n.getCellProps(),className:"table-td",children:n.render("Cell")}))})}))),h("tr",{className:"borderBottom",children:[s("td",{}),s("td",{}),s("td",{}),s("td",{}),s("td",{}),s("td",{className:"font-semibold",children:"GROSS RENT INCOME"}),s("td",{className:"table-td font-semibold",children:(v==null?void 0:v.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}))+" AED"})]})]})]})})})})]})}):s("div",{className:"pl-2",children:s("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})}),ee="/assets/RARE-Logo-animate.7e47c055.gif",te={option:(e,r)=>({...e,fontSize:"14px"})},le=()=>{var z,P;const[e,r]=i.exports.useState({propertyid:"",filteredDates:[]}),[p,F]=i.exports.useState([]),[N,L]=i.exports.useState(""),[g,y]=i.exports.useState(""),[O,E]=i.exports.useState(!1),[w,C]=i.exports.useState({filterData:[],propertyData:{}}),[f,$]=i.exports.useState([]),[Q,I]=i.exports.useState(0),[u,G]=i.exports.useState(""),Y=d=>{const{contractstartdate:l,contractenddate:o}=d;let b=new Date(l),c=new Date(o);return(c.getFullYear()-b.getFullYear())*12+(c.getMonth()-b.getMonth())+" Months"};i.exports.useEffect(()=>{if(p!=null&&p.length){const d=p.map(l=>{const{rentalamount:o}=l;return Number(o)});I(d.reduce((l,o)=>l+o,0))}},[p==null?void 0:p.length]),i.exports.useEffect(()=>{fetch("http://portals.rarehomesgroup.com/property").then(d=>d.json()).then(d=>{const l=d==null?void 0:d.map(o=>({label:o.unitnumber+" | "+o.communityname+" | "+o.projectname+" | "+o.buildingname,value:o._id}));$(l)})},[]),i.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const o=await(await fetch(`http://portals.rarehomesgroup.com/property/${e==null?void 0:e.propertyid}`)).json();o&&G(o)}})()},[e==null?void 0:e.propertyid]),i.exports.useEffect(()=>{(async()=>{const o=await(await fetch("http://portals.rarehomesgroup.com/booking")).json();L(o)})()},[]);const[q,U]=i.exports.useState({startDate:"",endDate:""}),H=i.exports.useRef(null),W=async()=>{const l=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/tenantsummaryreport/${e.propertyid}`)).json();F(l.data),C(l==null?void 0:l.data),C({filterData:l==null?void 0:l.data,propertyData:u}),console.log("=============>",l)};i.exports.useEffect(()=>{if(N!=null&&N.length&&(e==null?void 0:e.propertyid)&&(e==null?void 0:e.startDate)&&(e==null?void 0:e.endDate)){const d=N.filter(l=>{let o=!0;return e.propertyid&&l.propertyid!==e.propertyid&&(o=!1),(l==null?void 0:l.checkindate)<(e==null?void 0:e.startDate)&&(l==null?void 0:l.checkindate)>(e==null?void 0:e.endDate)&&(o=!1),o});F(d)}W()},[e==null?void 0:e.propertyid,e==null?void 0:e.startDate,e==null?void 0:e.endDate,N]);const A=()=>{y(""),r({...e,filteredDates:[]}),U({startDate:null,endDate:null})},v=async d=>{if(console.log("newValue",d),E(!0),y(d),!d){r({...e,filteredDates:[]});return}const o=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/report/${e.propertyid}?contractstartdate=${d.startDate}&contractenddate=${d.endDate}`)).json();E(!1),r({...e,filteredDates:o==null?void 0:o.data}),u.customername,u.communityname,u.projectname,u.unitnumber,u.buildingname,C({filterData:o==null?void 0:o.data,propertyData:u})},T=async d=>{console.log("Export button clicked",d);const{filterData:l,propertyData:o}=d,b=new B.Workbook,c=b.addWorksheet("Sheet1");c.mergeCells("A1:F1"),c.addRow(["TENANCY REPORTS"]),c.addRow([]),c.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),c.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const R=[];R.push(o),R.map(a=>{c.addRow([a.customername,a.communityname,a.projectname,a.unitnumber,a.buildingname])}),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow(["CONTRACT DETAILS"]),c.addRow([]),c.addRow(["Tenancy contract No","Status","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period","RENTAL INCOME"]),c.addRow([]),l.forEach(a=>{c.addRow([a.tenantcontractno,new Date(a.contractenddate).toDateString()>new Date?"Active":"Expire",a.guestname,new Date(a.contractstartdate).toDateString(),new Date(a.contractenddate).toDateString(),Y(a),"AED "+a.rentalamount])}),c.addRow([]),c.addRow([]);const _=l.map(a=>Number(a.rentalamount)).reduce((a,m)=>a+m,0),j=c.addRow(["GROSS RENT INCOME","","","",""," AED "+_.toLocaleString()]);if(_>5e3){const a={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};j.fill=a;const m={argb:"FFFFFF"};[j].forEach(M=>{M.eachCell({includeEmpty:!0},D=>{D.font={color:m}})})}c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([]),c.getRow(2).font={bold:!0},c.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},c.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},c.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},c.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},c.getRow(11).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},c.getRow(2).font={color:{argb:"FFFFFF"}},c.getRow(4).font={color:{argb:"FFFFFF"}},c.getRow(8).font={color:{argb:"FFFFFF"}},c.getRow(11).font={color:{argb:"FFFFFF"}},c.getRow(9).font={color:{argb:"FFFFFF"}};const n=await b.xlsx.writeBuffer();saveAs(new Blob([n]),"tenancy_Summery.xlsx")};return s(x,{children:s("div",{className:"xl:col-span-2 col-span-1",children:h(Z,{title:"Tenancy Summary",children:[s("div",{className:"flex flex-row-reverse",children:e&&((z=e.filteredDates)==null?void 0:z.length)>0?h("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>T(w),children:[s("img",{src:J,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]}):h("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>T(w),children:[s("img",{src:J,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})}),h("div",{children:[h("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[s("div",{className:"w-[100%] col-span-3",children:s("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})}),s("div",{className:"w-[100%] col-span-3",children:s(V,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:f,value:f&&g?f.filter(function(d){return d.value===(e==null?void 0:e.propertyid)}):f.filter(function(d){return d.value===(e==null?void 0:e.propertyid)}),onChange:d=>{g?A():r({...e,propertyid:d==null?void 0:d.value})},styles:te,id:"hh",placeholder:"Select and Search property"})})]}),e.propertyid&&s(x,{children:h("div",{className:"flex justify-end mt-[25px]",children:[s("div",{className:"w-[150px]",children:s("div",{className:"date-range-custom relative",children:s(k,{value:q,inputClassName:"input-class",containerClassName:"container-class",onChange:v,placeholder:"SELECT DATE"})})}),g&&s("div",{className:"flex justify-end",children:s("div",{className:"w-[90px]",children:s("div",{className:"date-range-custom relative",children:s("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:A,children:"Reset"})})})})]})})]}),O===!0?s(x,{children:s("div",{className:"flex items-center justify-center h-[100%]",children:s("img",{src:ee,width:150,height:150})})}):(P=e==null?void 0:e.filteredDates)!=null&&P.length?s(x,{children:s(K,{allBooking:e.filteredDates,propertyData:u,ref:H})}):s(x,{children:s(K,{allBooking:p,propertyData:u,ref:H})})]})})})};export{le as default};
