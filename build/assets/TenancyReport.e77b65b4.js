import{R as X,r as m,b as S,j as t,F as h,C as Z,ap as D}from"./index.1a14bb64.js";import{D as k}from"./index.esm.7b24e97e.js";import"./jspdf.es.min.43b934cf.js";import"./html2canvas.esm.0eae2bf4.js";import{E as B}from"./excel.9601f4f9.js";import{E as ee}from"./exceljs.min.7a7f6662.js";var n="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\summary-reports\\ReportTable.jsx";const K=X.forwardRef(({allBooking:e,propertyData:s},f)=>{const y=a=>{const{contractstartdate:l,contractenddate:r}=a;let N=new Date(l),P=new Date(r);return(P.getFullYear()-N.getFullYear())*12+(P.getMonth()-N.getMonth())+" Months"},p=[{Header:"Sr no",accessor:"id",Cell:({row:a,flatRows:l})=>t("span",{children:l.indexOf(a)+1},void 0,!1,{fileName:n,lineNumber:29,columnNumber:24},void 0)},{Header:"Tenancy contract No",accessor:"tenantcontractno",Cell:a=>{var l,r;return t("span",{children:(l=a==null?void 0:a.cell)!=null&&l.value?(r=a==null?void 0:a.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:n,lineNumber:36,columnNumber:24},void 0)}},{Header:"Status",accessor:a=>`${a.contractenddate}`,Cell:a=>{var l,r;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${new Date((l=a==null?void 0:a.cell)==null?void 0:l.value)>new Date?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:new Date((r=a==null?void 0:a.cell)==null?void 0:r.value)>new Date?"Active":"Expired"},void 0,!1,{fileName:n,lineNumber:45,columnNumber:25},void 0)},void 0,!1,{fileName:n,lineNumber:44,columnNumber:21},void 0)}},{Header:"Tenancy Start Date",accessor:"contractstartdate",Cell:a=>{var l,r;return t("span",{children:(l=a==null?void 0:a.cell)!=null&&l.value?new Date((r=a==null?void 0:a.cell)==null?void 0:r.value).toDateString():"Not Available"},void 0,!1,{fileName:n,lineNumber:62,columnNumber:24},void 0)}},{Header:"Tenancy Expiry Date",accessor:"contractenddate",Cell:a=>{var l,r;return t("span",{children:(l=a==null?void 0:a.cell)!=null&&l.value?new Date((r=a==null?void 0:a.cell)==null?void 0:r.value).toDateString():"Not Available"},void 0,!1,{fileName:n,lineNumber:71,columnNumber:24},void 0)}},{Header:"Tenancy Period",accessor:"refund",Cell:a=>{const{original:l}=a.row;return console.log("original",l),t("span",{children:l?y(l):"Not Available"},void 0,!1,{fileName:n,lineNumber:80,columnNumber:24},void 0)}},{Header:"Rental Amount",accessor:"rentalamount",Cell:a=>{var l,r,N;return t("span",{children:(l=a==null?void 0:a.cell)!=null&&l.value?((N=Number((r=a==null?void 0:a.cell)==null?void 0:r.value))==null?void 0:N.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}))+" AED":"Not Available"},void 0,!1,{fileName:n,lineNumber:87,columnNumber:24},void 0)}}],j=m.exports.useMemo(()=>p,[]),g=m.exports.useMemo(()=>e),E=S.exports.useTable({columns:j,data:g,initialState:{pageIndex:0,pageSize:50}},S.exports.useGlobalFilter,S.exports.useSortBy,S.exports.usePagination,S.exports.useRowSelect),{getTableProps:O,getTableBodyProps:C,headerGroups:L,footerGroups:M,page:v,nextPage:I,previousPage:Q,canNextPage:G,canPreviousPage:b,pageOptions:Y,state:U,gotoPage:q,pageCount:V,setPageSize:_,setGlobalFilter:W,prepareRow:w}=E,[R,H]=m.exports.useState(0),[$,T]=m.exports.useState(0),[d,o]=m.exports.useState(0),[c,x]=m.exports.useState(0),[i,F]=m.exports.useState(0),[z,A]=m.exports.useState(0);return m.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(l=>{const{rentalamount:r}=l;return Number(r)});H(a.reduce((l,r)=>l+r,0))}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(l=>{const{totalNonight:r}=l;return r});T(a.reduce((l,r)=>l+r,0))}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(r=>{const{Occupancy:N}=r;return N});let l=Math.round(a.reduce((r,N)=>r+N,0)/a.length);x(l)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var a;if(e!=null&&e.length){let l=0;for(let r=0;r<(e==null?void 0:e.length);r++){let N=parseFloat((a=e[r])==null?void 0:a.totalNonight);l+=N}F(l||0)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var a;if(e!=null&&e.length){let l=0;for(let r=0;r<(e==null?void 0:e.length);r++){let N=parseFloat((a=e[r])==null?void 0:a.averageCost);l+=N}A(l||0)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var a;if(e!=null&&e.length){let l=0;for(let r=0;r<(e==null?void 0:e.length);r++){let N=parseFloat((a=e[r])==null?void 0:a.totalhostpayble);l+=N}o(l||0)}},[e==null?void 0:e.length]),t(h,{children:e&&(e==null?void 0:e.length)>0?t(h,{children:t("div",{ref:f,children:[t("div",{className:"mt-[25px]",children:[t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Landlord Name: "},void 0,!1,{fileName:n,lineNumber:238,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.owner_name?s==null?void 0:s.owner_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:239,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:237,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Community Name: "},void 0,!1,{fileName:n,lineNumber:242,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.communityname?s==null?void 0:s.communityname:"Not Available"},void 0,!1,{fileName:n,lineNumber:243,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:241,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Project Name: "},void 0,!1,{fileName:n,lineNumber:246,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.project_name?s==null?void 0:s.project_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:247,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:245,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Apartment No: "},void 0,!1,{fileName:n,lineNumber:250,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.unitnumber?s==null?void 0:s.unitnumber:"Not Available"},void 0,!1,{fileName:n,lineNumber:251,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:249,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Building No: "},void 0,!1,{fileName:n,lineNumber:254,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.building_name?s==null?void 0:s.building_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:255,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:253,columnNumber:21},void 0)]},void 0,!0,{fileName:n,lineNumber:236,columnNumber:17},void 0),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"",children:t("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...O,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:L.map(a=>t("tr",{...a.getHeaderGroupProps(),children:a.headers.map(l=>t("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:"table-th",children:[l.render("Header"),t("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:n,lineNumber:276,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:270,columnNumber:53},void 0))},void 0,!1,{fileName:n,lineNumber:267,columnNumber:41},void 0))},void 0,!1,{fileName:n,lineNumber:265,columnNumber:33},void 0),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...C,children:[v&&v.length>0&&v.map(a=>(w(a),t(h,{children:t("tr",{...a.getRowProps(),children:a.cells.map(l=>t("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")},void 0,!1,{fileName:n,lineNumber:297,columnNumber:61},void 0))},void 0,!1,{fileName:n,lineNumber:294,columnNumber:49},void 0)},void 0,!1))),t("tr",{className:"borderBottom",children:[t("td",{},void 0,!1,{fileName:n,lineNumber:307,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:308,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:309,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:310,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:311,columnNumber:41},void 0),t("td",{className:"font-semibold",children:"GROSS RENT INCOME"},void 0,!1,{fileName:n,lineNumber:312,columnNumber:41},void 0),t("td",{className:"table-td font-semibold",children:(R==null?void 0:R.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}))+" AED"},void 0,!1,{fileName:n,lineNumber:313,columnNumber:41},void 0)]},void 0,!0,{fileName:n,lineNumber:306,columnNumber:37},void 0)]},void 0,!0,{fileName:n,lineNumber:285,columnNumber:33},void 0)]},void 0,!0,{fileName:n,lineNumber:261,columnNumber:29},void 0)},void 0,!1,{fileName:n,lineNumber:260,columnNumber:25},void 0)},void 0,!1,{fileName:n,lineNumber:259,columnNumber:21},void 0)},void 0,!1,{fileName:n,lineNumber:258,columnNumber:17},void 0)]},void 0,!0,{fileName:n,lineNumber:235,columnNumber:13},void 0)},void 0,!1):t("div",{className:"pl-2",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:n,lineNumber:420,columnNumber:13},void 0)},void 0,!1,{fileName:n,lineNumber:419,columnNumber:13},void 0)},void 0,!1)}),te="/assets/RARE-Logo-animate.7e47c055.gif";var u="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\summary-reports\\TenancyReport.jsx";const ae={option:(e,s)=>({...e,fontSize:"14px"})},ce=()=>{var $,T;const[e,s]=m.exports.useState({propertyid:"",filteredDates:[]}),[f,y]=m.exports.useState([]),[p,j]=m.exports.useState(""),[g,E]=m.exports.useState(""),[O,C]=m.exports.useState(!1),[L,M]=m.exports.useState({filterData:[],propertyData:{}}),[v,I]=m.exports.useState([]),[Q,G]=m.exports.useState(0),[b,Y]=m.exports.useState(""),U=d=>{const{contractstartdate:o,contractenddate:c}=d;let x=new Date(o),i=new Date(c);return(i.getFullYear()-x.getFullYear())*12+(i.getMonth()-x.getMonth())+" Months"};m.exports.useEffect(()=>{if(f!=null&&f.length){const d=f.map(o=>{const{rentalamount:c}=o;return Number(c)});G(d.reduce((o,c)=>o+c,0))}},[f==null?void 0:f.length]),m.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(d=>d.json()).then(d=>{const o=d==null?void 0:d.map(c=>({label:c.unitnumber+" | "+c.communityname+" | "+c.projectname+" | "+c.buildingname,value:c._id}));I(o)})},[]),m.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const c=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();c&&Y(c)}})()},[e==null?void 0:e.propertyid]),m.exports.useEffect(()=>{(async()=>{const c=await(await fetch("http://dev-rare.srp.ai/booking")).json();j(c)})()},[]);const[q,V]=m.exports.useState({startDate:"",endDate:""}),_=m.exports.useRef(null),W=async()=>{const o=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/tenantsummaryreport/${e.propertyid}`)).json();y(o.data),M(o==null?void 0:o.data),console.log("=============>",o)};m.exports.useEffect(()=>{if(p!=null&&p.length&&(e==null?void 0:e.propertyid)&&(e==null?void 0:e.startDate)&&(e==null?void 0:e.endDate)){const d=p.filter(o=>{let c=!0;return e.propertyid&&o.propertyid!==e.propertyid&&(c=!1),(o==null?void 0:o.checkindate)<(e==null?void 0:e.startDate)&&(o==null?void 0:o.checkindate)>(e==null?void 0:e.endDate)&&(c=!1),c});y(d)}W()},[e==null?void 0:e.propertyid,e==null?void 0:e.startDate,e==null?void 0:e.endDate,p]);const w=()=>{E(""),s({...e,filteredDates:[]}),V({startDate:null,endDate:null})},R=async d=>{if(console.log("newValue",d),C(!0),E(d),!d){s({...e,filteredDates:[]});return}const c=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${e.propertyid}?contractstartdate=${d.startDate}&contractenddate=${d.endDate}`)).json();C(!1),s({...e,filteredDates:c==null?void 0:c.data}),b.customername,b.communityname,b.projectname,b.unitnumber,b.buildingname,M({filterData:c==null?void 0:c.data,propertyData:b})},H=async d=>{console.log("Export button clicked",d);const{filterData:o,propertyData:c}=d,x=new ee.Workbook,i=x.addWorksheet("Sheet1");i.mergeCells("A1:F1"),i.addRow(["TENANCY REPORTS"]),i.addRow([]),i.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),i.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const F=[];F.push(c),F.map(r=>{i.addRow([r.customername,r.communityname,r.projectname,r.unitnumber,r.buildingname])}),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow(["CONTRACT DETAILS"]),i.addRow([]),i.addRow(["Tenancy contract No","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period","RENTAL INCOME"]),i.addRow([]),o.forEach(r=>{i.addRow([r.tenantcontractno,r.guestname,new Date(r.contractstartdate).toDateString(),new Date(r.contractenddate).toDateString(),U(r),r.rentalamount])}),i.addRow([]),i.addRow([]);const z=o.map(r=>Number(r.rentalamount)).reduce((r,N)=>r+N,0),A=i.addRow(["GROSS RENT INCOME","","","",""," AED "+z.toLocaleString()]);if(z>5e3){const r={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};A.fill=r;const N={argb:"FFFFFF"};[A].forEach(P=>{P.eachCell({includeEmpty:!0},J=>{J.font={color:N}})})}i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.getRow(2).font={bold:!0},i.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},i.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},i.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},i.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},i.getRow(11).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},i.getRow(2).font={color:{argb:"FFFFFF"}},i.getRow(4).font={color:{argb:"FFFFFF"}},i.getRow(8).font={color:{argb:"FFFFFF"}},i.getRow(11).font={color:{argb:"FFFFFF"}},i.getRow(9).font={color:{argb:"FFFFFF"}};const l=await x.xlsx.writeBuffer();saveAs(new Blob([l]),"tenancy_Summery.xlsx")};return t(h,{children:t("div",{className:"xl:col-span-2 col-span-1",children:t(Z,{title:"Tenancy Summary",children:[t("div",{className:"flex flex-row-reverse",children:[e&&(($=e.filteredDates)==null?void 0:$.length)>0?t("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>H(L),children:[t("img",{src:B,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:u,lineNumber:376,columnNumber:5},void 0),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:u,lineNumber:377,columnNumber:5},void 0)]},void 0,!0,{fileName:u,lineNumber:375,columnNumber:1},void 0):null,"                    "]},void 0,!0,{fileName:u,lineNumber:372,columnNumber:21},void 0),t("div",{children:[t("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:u,lineNumber:386,columnNumber:33},void 0)},void 0,!1,{fileName:u,lineNumber:385,columnNumber:29},void 0),t("div",{className:"w-[100%] col-span-3",children:t(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:v,value:v&&g?v.filter(function(d){return d.value===(e==null?void 0:e.propertyid)}):v.filter(function(d){return d.value===(e==null?void 0:e.propertyid)}),onChange:d=>{g?w():s({...e,propertyid:d==null?void 0:d.value})},styles:ae,id:"hh",placeholder:"Select and Search property"},void 0,!1,{fileName:u,lineNumber:394,columnNumber:33},void 0)},void 0,!1,{fileName:u,lineNumber:390,columnNumber:29},void 0)]},void 0,!0,{fileName:u,lineNumber:381,columnNumber:25},void 0),e.propertyid&&t(h,{children:t("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(k,{value:q,inputClassName:"input-class",containerClassName:"container-class",onChange:R,placeholder:"SELECT DATE"},void 0,!1,{fileName:u,lineNumber:441,columnNumber:49},void 0)},void 0,!1,{fileName:u,lineNumber:440,columnNumber:45},void 0)},void 0,!1,{fileName:u,lineNumber:439,columnNumber:41},void 0),g&&t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:w,children:"Reset"},void 0,!1,{fileName:u,lineNumber:455,columnNumber:61},void 0)},void 0,!1,{fileName:u,lineNumber:454,columnNumber:57},void 0)},void 0,!1,{fileName:u,lineNumber:453,columnNumber:53},void 0)},void 0,!1,{fileName:u,lineNumber:452,columnNumber:49},void 0)]},void 0,!0,{fileName:u,lineNumber:438,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:u,lineNumber:380,columnNumber:21},void 0),O===!0?t(h,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:te,width:150,height:150},void 0,!1,{fileName:u,lineNumber:474,columnNumber:37},void 0)},void 0,!1,{fileName:u,lineNumber:473,columnNumber:33},void 0)},void 0,!1):(T=e==null?void 0:e.filteredDates)!=null&&T.length?t(h,{children:t(K,{allBooking:e.filteredDates,propertyData:b,ref:_},void 0,!1,{fileName:u,lineNumber:480,columnNumber:37},void 0)},void 0,!1):t(h,{children:t(K,{allBooking:f,propertyData:b,ref:_},void 0,!1,{fileName:u,lineNumber:485,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:u,lineNumber:371,columnNumber:17},void 0)},void 0,!1,{fileName:u,lineNumber:370,columnNumber:13},void 0)},void 0,!1)};export{ce as default};