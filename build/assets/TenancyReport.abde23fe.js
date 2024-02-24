import{R as X,r as m,b as S,j as t,F as p,C as Z,ap as k}from"./index.c664f3bc.js";import{D as B}from"./index.esm.c0412ed2.js";import"./jspdf.es.min.3dd449f9.js";import"./html2canvas.esm.0eae2bf4.js";import{E as J}from"./excel.9601f4f9.js";import{E as ee}from"./exceljs.min.25be85e7.js";var n="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\summary-reports\\ReportTable.jsx";const K=X.forwardRef(({allBooking:e,propertyData:s},f)=>{const y=a=>{const{contractstartdate:r,contractenddate:l}=a;let N=new Date(r),L=new Date(l);return(L.getFullYear()-N.getFullYear())*12+(L.getMonth()-N.getMonth())+" Months"},h=[{Header:"Sr no",accessor:"id",Cell:({row:a,flatRows:r})=>t("span",{children:r.indexOf(a)+1},void 0,!1,{fileName:n,lineNumber:29,columnNumber:24},void 0)},{Header:"Tenancy contract No",accessor:"tenantcontractno",Cell:a=>{var r,l;return t("span",{children:(r=a==null?void 0:a.cell)!=null&&r.value?(l=a==null?void 0:a.cell)==null?void 0:l.value:"Not Available"},void 0,!1,{fileName:n,lineNumber:36,columnNumber:24},void 0)}},{Header:"Status",accessor:a=>`${a.contractenddate}`,Cell:a=>{var r,l;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${new Date((r=a==null?void 0:a.cell)==null?void 0:r.value)>new Date?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:new Date((l=a==null?void 0:a.cell)==null?void 0:l.value)>new Date?"Active":"Expired"},void 0,!1,{fileName:n,lineNumber:45,columnNumber:25},void 0)},void 0,!1,{fileName:n,lineNumber:44,columnNumber:21},void 0)}},{Header:"Tenancy Start Date",accessor:"contractstartdate",Cell:a=>{var r,l;return t("span",{children:(r=a==null?void 0:a.cell)!=null&&r.value?new Date((l=a==null?void 0:a.cell)==null?void 0:l.value).toDateString():"Not Available"},void 0,!1,{fileName:n,lineNumber:62,columnNumber:24},void 0)}},{Header:"Tenancy Expiry Date",accessor:"contractenddate",Cell:a=>{var r,l;return t("span",{children:(r=a==null?void 0:a.cell)!=null&&r.value?new Date((l=a==null?void 0:a.cell)==null?void 0:l.value).toDateString():"Not Available"},void 0,!1,{fileName:n,lineNumber:71,columnNumber:24},void 0)}},{Header:"Tenancy Period",accessor:"refund",Cell:a=>{const{original:r}=a.row;return console.log("original",r),t("span",{children:r?y(r):"Not Available"},void 0,!1,{fileName:n,lineNumber:80,columnNumber:24},void 0)}},{Header:"Rental Amount",accessor:"rentalamount",Cell:a=>{var r,l,N;return t("span",{children:(r=a==null?void 0:a.cell)!=null&&r.value?((N=Number((l=a==null?void 0:a.cell)==null?void 0:l.value))==null?void 0:N.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}))+" AED":"Not Available"},void 0,!1,{fileName:n,lineNumber:87,columnNumber:24},void 0)}}],M=m.exports.useMemo(()=>h,[]),g=m.exports.useMemo(()=>e),E=S.exports.useTable({columns:M,data:g,initialState:{pageIndex:0,pageSize:50}},S.exports.useGlobalFilter,S.exports.useSortBy,S.exports.usePagination,S.exports.useRowSelect),{getTableProps:_,getTableBodyProps:w,headerGroups:C,footerGroups:A,page:v,nextPage:I,previousPage:Q,canNextPage:G,canPreviousPage:b,pageOptions:Y,state:D,gotoPage:U,pageCount:q,setPageSize:H,setGlobalFilter:V,prepareRow:T}=E,[R,P]=m.exports.useState(0),[$,j]=m.exports.useState(0),[c,o]=m.exports.useState(0),[d,x]=m.exports.useState(0),[i,F]=m.exports.useState(0),[z,O]=m.exports.useState(0);return m.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(r=>{const{rentalamount:l}=r;return Number(l)});P(a.reduce((r,l)=>r+l,0))}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(r=>{const{totalNonight:l}=r;return l});j(a.reduce((r,l)=>r+l,0))}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(l=>{const{Occupancy:N}=l;return N});let r=Math.round(a.reduce((l,N)=>l+N,0)/a.length);x(r)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var a;if(e!=null&&e.length){let r=0;for(let l=0;l<(e==null?void 0:e.length);l++){let N=parseFloat((a=e[l])==null?void 0:a.totalNonight);r+=N}F(r||0)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var a;if(e!=null&&e.length){let r=0;for(let l=0;l<(e==null?void 0:e.length);l++){let N=parseFloat((a=e[l])==null?void 0:a.averageCost);r+=N}O(r||0)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var a;if(e!=null&&e.length){let r=0;for(let l=0;l<(e==null?void 0:e.length);l++){let N=parseFloat((a=e[l])==null?void 0:a.totalhostpayble);r+=N}o(r||0)}},[e==null?void 0:e.length]),t(p,{children:e&&(e==null?void 0:e.length)>0?t(p,{children:t("div",{ref:f,children:[t("div",{className:"mt-[25px]",children:[t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Landlord Name: "},void 0,!1,{fileName:n,lineNumber:238,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.owner_name?s==null?void 0:s.owner_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:239,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:237,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Community Name: "},void 0,!1,{fileName:n,lineNumber:242,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.communityname?s==null?void 0:s.communityname:"Not Available"},void 0,!1,{fileName:n,lineNumber:243,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:241,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Project Name: "},void 0,!1,{fileName:n,lineNumber:246,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.project_name?s==null?void 0:s.project_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:247,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:245,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Apartment No: "},void 0,!1,{fileName:n,lineNumber:250,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.unitnumber?s==null?void 0:s.unitnumber:"Not Available"},void 0,!1,{fileName:n,lineNumber:251,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:249,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Building No: "},void 0,!1,{fileName:n,lineNumber:254,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.building_name?s==null?void 0:s.building_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:255,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:253,columnNumber:21},void 0)]},void 0,!0,{fileName:n,lineNumber:236,columnNumber:17},void 0),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"",children:t("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",..._,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:C.map(a=>t("tr",{...a.getHeaderGroupProps(),children:a.headers.map(r=>t("th",{...r.getHeaderProps(r.getSortByToggleProps()),scope:"col",className:"table-th",children:[r.render("Header"),t("span",{children:r.isSorted?r.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:n,lineNumber:276,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:270,columnNumber:53},void 0))},void 0,!1,{fileName:n,lineNumber:267,columnNumber:41},void 0))},void 0,!1,{fileName:n,lineNumber:265,columnNumber:33},void 0),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...w,children:[v&&v.length>0&&v.map(a=>(T(a),t(p,{children:t("tr",{...a.getRowProps(),children:a.cells.map(r=>t("td",{...r.getCellProps(),className:"table-td",children:r.render("Cell")},void 0,!1,{fileName:n,lineNumber:297,columnNumber:61},void 0))},void 0,!1,{fileName:n,lineNumber:294,columnNumber:49},void 0)},void 0,!1))),t("tr",{className:"borderBottom",children:[t("td",{},void 0,!1,{fileName:n,lineNumber:307,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:308,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:309,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:310,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:311,columnNumber:41},void 0),t("td",{className:"font-semibold",children:"GROSS RENT INCOME"},void 0,!1,{fileName:n,lineNumber:312,columnNumber:41},void 0),t("td",{className:"table-td font-semibold",children:(R==null?void 0:R.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}))+" AED"},void 0,!1,{fileName:n,lineNumber:313,columnNumber:41},void 0)]},void 0,!0,{fileName:n,lineNumber:306,columnNumber:37},void 0)]},void 0,!0,{fileName:n,lineNumber:285,columnNumber:33},void 0)]},void 0,!0,{fileName:n,lineNumber:261,columnNumber:29},void 0)},void 0,!1,{fileName:n,lineNumber:260,columnNumber:25},void 0)},void 0,!1,{fileName:n,lineNumber:259,columnNumber:21},void 0)},void 0,!1,{fileName:n,lineNumber:258,columnNumber:17},void 0)]},void 0,!0,{fileName:n,lineNumber:235,columnNumber:13},void 0)},void 0,!1):t("div",{className:"pl-2",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:n,lineNumber:420,columnNumber:13},void 0)},void 0,!1,{fileName:n,lineNumber:419,columnNumber:13},void 0)},void 0,!1)}),te="/assets/RARE-Logo-animate.7e47c055.gif";var u="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\summary-reports\\TenancyReport.jsx";const ae={option:(e,s)=>({...e,fontSize:"14px"})},oe=()=>{var $,j;const[e,s]=m.exports.useState({propertyid:"",filteredDates:[]}),[f,y]=m.exports.useState([]),[h,M]=m.exports.useState(""),[g,E]=m.exports.useState(""),[_,w]=m.exports.useState(!1),[C,A]=m.exports.useState({filterData:[],propertyData:{}}),[v,I]=m.exports.useState([]),[Q,G]=m.exports.useState(0),[b,Y]=m.exports.useState(""),D=c=>{const{contractstartdate:o,contractenddate:d}=c;let x=new Date(o),i=new Date(d);return(i.getFullYear()-x.getFullYear())*12+(i.getMonth()-x.getMonth())+" Months"};m.exports.useEffect(()=>{if(f!=null&&f.length){const c=f.map(o=>{const{rentalamount:d}=o;return Number(d)});G(c.reduce((o,d)=>o+d,0))}},[f==null?void 0:f.length]),m.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(c=>c.json()).then(c=>{const o=c==null?void 0:c.map(d=>({label:d.unitnumber+" | "+d.communityname+" | "+d.projectname+" | "+d.buildingname,value:d._id}));I(o)})},[]),m.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const d=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();d&&Y(d)}})()},[e==null?void 0:e.propertyid]),m.exports.useEffect(()=>{(async()=>{const d=await(await fetch("http://dev-rare.srp.ai/booking")).json();M(d)})()},[]);const[U,q]=m.exports.useState({startDate:"",endDate:""}),H=m.exports.useRef(null),V=async()=>{const o=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/tenantsummaryreport/${e.propertyid}`)).json();y(o.data),A(o==null?void 0:o.data),A({filterData:o==null?void 0:o.data,propertyData:b}),console.log("=============>",o)};m.exports.useEffect(()=>{if(h!=null&&h.length&&(e==null?void 0:e.propertyid)&&(e==null?void 0:e.startDate)&&(e==null?void 0:e.endDate)){const c=h.filter(o=>{let d=!0;return e.propertyid&&o.propertyid!==e.propertyid&&(d=!1),(o==null?void 0:o.checkindate)<(e==null?void 0:e.startDate)&&(o==null?void 0:o.checkindate)>(e==null?void 0:e.endDate)&&(d=!1),d});y(c)}V()},[e==null?void 0:e.propertyid,e==null?void 0:e.startDate,e==null?void 0:e.endDate,h]);const T=()=>{E(""),s({...e,filteredDates:[]}),q({startDate:null,endDate:null})},R=async c=>{if(console.log("newValue",c),w(!0),E(c),!c){s({...e,filteredDates:[]});return}const d=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${e.propertyid}?contractstartdate=${c.startDate}&contractenddate=${c.endDate}`)).json();w(!1),s({...e,filteredDates:d==null?void 0:d.data}),b.customername,b.communityname,b.projectname,b.unitnumber,b.buildingname,A({filterData:d==null?void 0:d.data,propertyData:b})},P=async c=>{console.log("Export button clicked",c);const{filterData:o,propertyData:d}=c,x=new ee.Workbook,i=x.addWorksheet("Sheet1");i.mergeCells("A1:F1"),i.addRow(["TENANCY REPORTS"]),i.addRow([]),i.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),i.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const F=[];F.push(d),F.map(l=>{i.addRow([l.customername,l.communityname,l.projectname,l.unitnumber,l.buildingname])}),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow(["CONTRACT DETAILS"]),i.addRow([]),i.addRow(["Tenancy contract No","Status","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period","RENTAL INCOME"]),i.addRow([]),o.forEach(l=>{i.addRow([l.tenantcontractno,new Date(l.contractenddate).toDateString()>new Date?"Active":"Expire",l.guestname,new Date(l.contractstartdate).toDateString(),new Date(l.contractenddate).toDateString(),D(l),"AED "+l.rentalamount])}),i.addRow([]),i.addRow([]);const z=o.map(l=>Number(l.rentalamount)).reduce((l,N)=>l+N,0),O=i.addRow(["GROSS RENT INCOME","","","",""," AED "+z.toLocaleString()]);if(z>5e3){const l={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};O.fill=l;const N={argb:"FFFFFF"};[O].forEach(L=>{L.eachCell({includeEmpty:!0},W=>{W.font={color:N}})})}i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.getRow(2).font={bold:!0},i.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},i.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},i.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},i.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},i.getRow(11).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},i.getRow(2).font={color:{argb:"FFFFFF"}},i.getRow(4).font={color:{argb:"FFFFFF"}},i.getRow(8).font={color:{argb:"FFFFFF"}},i.getRow(11).font={color:{argb:"FFFFFF"}},i.getRow(9).font={color:{argb:"FFFFFF"}};const r=await x.xlsx.writeBuffer();saveAs(new Blob([r]),"tenancy_Summery.xlsx")};return t(p,{children:t("div",{className:"xl:col-span-2 col-span-1",children:t(Z,{title:"Tenancy Summary",children:[t("div",{className:"flex flex-row-reverse",children:e&&(($=e.filteredDates)==null?void 0:$.length)>0?t("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>P(C),children:[t("img",{src:J,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:u,lineNumber:376,columnNumber:25},void 0),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:u,lineNumber:377,columnNumber:25},void 0)]},void 0,!0,{fileName:u,lineNumber:375,columnNumber:21},void 0):t("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>P(C),children:[t("img",{src:J,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:u,lineNumber:383,columnNumber:25},void 0),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:u,lineNumber:384,columnNumber:25},void 0)]},void 0,!0,{fileName:u,lineNumber:382,columnNumber:21},void 0)},void 0,!1,{fileName:u,lineNumber:372,columnNumber:21},void 0),t("div",{children:[t("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:u,lineNumber:395,columnNumber:33},void 0)},void 0,!1,{fileName:u,lineNumber:394,columnNumber:29},void 0),t("div",{className:"w-[100%] col-span-3",children:t(k,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:v,value:v&&g?v.filter(function(c){return c.value===(e==null?void 0:e.propertyid)}):v.filter(function(c){return c.value===(e==null?void 0:e.propertyid)}),onChange:c=>{g?T():s({...e,propertyid:c==null?void 0:c.value})},styles:ae,id:"hh",placeholder:"Select and Search property"},void 0,!1,{fileName:u,lineNumber:403,columnNumber:33},void 0)},void 0,!1,{fileName:u,lineNumber:399,columnNumber:29},void 0)]},void 0,!0,{fileName:u,lineNumber:390,columnNumber:25},void 0),e.propertyid&&t(p,{children:t("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(B,{value:U,inputClassName:"input-class",containerClassName:"container-class",onChange:R,placeholder:"SELECT DATE"},void 0,!1,{fileName:u,lineNumber:450,columnNumber:49},void 0)},void 0,!1,{fileName:u,lineNumber:449,columnNumber:45},void 0)},void 0,!1,{fileName:u,lineNumber:448,columnNumber:41},void 0),g&&t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:T,children:"Reset"},void 0,!1,{fileName:u,lineNumber:464,columnNumber:61},void 0)},void 0,!1,{fileName:u,lineNumber:463,columnNumber:57},void 0)},void 0,!1,{fileName:u,lineNumber:462,columnNumber:53},void 0)},void 0,!1,{fileName:u,lineNumber:461,columnNumber:49},void 0)]},void 0,!0,{fileName:u,lineNumber:447,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:u,lineNumber:389,columnNumber:21},void 0),_===!0?t(p,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:te,width:150,height:150},void 0,!1,{fileName:u,lineNumber:483,columnNumber:37},void 0)},void 0,!1,{fileName:u,lineNumber:482,columnNumber:33},void 0)},void 0,!1):(j=e==null?void 0:e.filteredDates)!=null&&j.length?t(p,{children:t(K,{allBooking:e.filteredDates,propertyData:b,ref:H},void 0,!1,{fileName:u,lineNumber:489,columnNumber:37},void 0)},void 0,!1):t(p,{children:t(K,{allBooking:f,propertyData:b,ref:H},void 0,!1,{fileName:u,lineNumber:494,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:u,lineNumber:371,columnNumber:17},void 0)},void 0,!1,{fileName:u,lineNumber:370,columnNumber:13},void 0)},void 0,!1)};export{oe as default};
