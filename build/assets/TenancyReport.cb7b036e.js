import{R as X,r as m,b as S,j as t,F as p,e as Z,ap as k}from"./index.72434430.js";import{D as B}from"./index.esm.9be3aa93.js";import"./jspdf.es.min.ebbd5ef1.js";import"./html2canvas.esm.0eae2bf4.js";import{E as J}from"./excel.9601f4f9.js";import{E as ee}from"./exceljs.min.52779073.js";var n="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\summary-reports\\ReportTable.jsx";const K=X.forwardRef(({allBooking:e,propertyData:s},f)=>{const y=a=>{const{contractstartdate:l,contractenddate:r}=a;let N=new Date(l),L=new Date(r);return(L.getFullYear()-N.getFullYear())*12+(L.getMonth()-N.getMonth())+" Months"},h=[{Header:"Sr no",accessor:"id",Cell:({row:a,flatRows:l})=>t("span",{children:l.indexOf(a)+1},void 0,!1,{fileName:n,lineNumber:29,columnNumber:24},void 0)},{Header:"Tenancy contract No",accessor:"tenantcontractno",Cell:a=>{var l,r;return t("span",{children:(l=a==null?void 0:a.cell)!=null&&l.value?(r=a==null?void 0:a.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:n,lineNumber:36,columnNumber:24},void 0)}},{Header:"Status",accessor:a=>`${a.contractenddate}`,Cell:a=>{var l,r;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${new Date((l=a==null?void 0:a.cell)==null?void 0:l.value)>new Date?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:new Date((r=a==null?void 0:a.cell)==null?void 0:r.value)>new Date?"Active":"Expired"},void 0,!1,{fileName:n,lineNumber:45,columnNumber:25},void 0)},void 0,!1,{fileName:n,lineNumber:44,columnNumber:21},void 0)}},{Header:"Tenancy Start Date",accessor:"contractstartdate",Cell:a=>{var l,r;return t("span",{children:(l=a==null?void 0:a.cell)!=null&&l.value?new Date((r=a==null?void 0:a.cell)==null?void 0:r.value).toDateString():"Not Available"},void 0,!1,{fileName:n,lineNumber:62,columnNumber:24},void 0)}},{Header:"Tenancy Expiry Date",accessor:"contractenddate",Cell:a=>{var l,r;return t("span",{children:(l=a==null?void 0:a.cell)!=null&&l.value?new Date((r=a==null?void 0:a.cell)==null?void 0:r.value).toDateString():"Not Available"},void 0,!1,{fileName:n,lineNumber:71,columnNumber:24},void 0)}},{Header:"Tenancy Period",accessor:"refund",Cell:a=>{const{original:l}=a.row;return console.log("original",l),t("span",{children:l?y(l):"Not Available"},void 0,!1,{fileName:n,lineNumber:80,columnNumber:24},void 0)}},{Header:"Rental Amount",accessor:"rentalamount",Cell:a=>{var l,r,N;return t("span",{children:[t("strong",{children:"AED"},void 0,!1,{fileName:n,lineNumber:87,columnNumber:30},void 0),(l=a==null?void 0:a.cell)!=null&&l.value?((N=Number((r=a==null?void 0:a.cell)==null?void 0:r.value))==null?void 0:N.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}))+" ":"Not Available"]},void 0,!0,{fileName:n,lineNumber:87,columnNumber:24},void 0)}}],M=m.exports.useMemo(()=>h,[]),g=m.exports.useMemo(()=>e),E=S.exports.useTable({columns:M,data:g,initialState:{pageIndex:0,pageSize:50}},S.exports.useGlobalFilter,S.exports.useSortBy,S.exports.usePagination,S.exports.useRowSelect),{getTableProps:_,getTableBodyProps:w,headerGroups:C,footerGroups:A,page:v,nextPage:I,previousPage:Q,canNextPage:G,canPreviousPage:b,pageOptions:Y,state:D,gotoPage:U,pageCount:q,setPageSize:H,setGlobalFilter:V,prepareRow:T}=E,[R,P]=m.exports.useState(0),[$,j]=m.exports.useState(0),[o,d]=m.exports.useState(0),[c,x]=m.exports.useState(0),[i,F]=m.exports.useState(0),[z,O]=m.exports.useState(0);return m.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(l=>{const{rentalamount:r}=l;return Number(r)});P(a.reduce((l,r)=>l+r,0))}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(l=>{const{totalNonight:r}=l;return r});j(a.reduce((l,r)=>l+r,0))}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{if(e!=null&&e.length){const a=e.map(r=>{const{Occupancy:N}=r;return N});let l=Math.round(a.reduce((r,N)=>r+N,0)/a.length);x(l)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var a;if(e!=null&&e.length){let l=0;for(let r=0;r<(e==null?void 0:e.length);r++){let N=parseFloat((a=e[r])==null?void 0:a.totalNonight);l+=N}F(l||0)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var a;if(e!=null&&e.length){let l=0;for(let r=0;r<(e==null?void 0:e.length);r++){let N=parseFloat((a=e[r])==null?void 0:a.averageCost);l+=N}O(l||0)}},[e==null?void 0:e.length]),m.exports.useEffect(()=>{var a;if(e!=null&&e.length){let l=0;for(let r=0;r<(e==null?void 0:e.length);r++){let N=parseFloat((a=e[r])==null?void 0:a.totalhostpayble);l+=N}d(l||0)}},[e==null?void 0:e.length]),t(p,{children:e&&(e==null?void 0:e.length)>0?t(p,{children:t("div",{ref:f,children:[t("div",{className:"mt-[25px]",children:[t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Landlord Name: "},void 0,!1,{fileName:n,lineNumber:238,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.owner_name?s==null?void 0:s.owner_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:239,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:237,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Community Name: "},void 0,!1,{fileName:n,lineNumber:242,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.communityname?s==null?void 0:s.communityname:"Not Available"},void 0,!1,{fileName:n,lineNumber:243,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:241,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Project Name: "},void 0,!1,{fileName:n,lineNumber:246,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.project_name?s==null?void 0:s.project_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:247,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:245,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Apartment No: "},void 0,!1,{fileName:n,lineNumber:250,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.unitnumber?s==null?void 0:s.unitnumber:"Not Available"},void 0,!1,{fileName:n,lineNumber:251,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:249,columnNumber:21},void 0),t("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Building No: "},void 0,!1,{fileName:n,lineNumber:254,columnNumber:25},void 0),t("p",{className:"capitalize",children:s!=null&&s.building_name?s==null?void 0:s.building_name:"Not Available"},void 0,!1,{fileName:n,lineNumber:255,columnNumber:25},void 0)]},void 0,!0,{fileName:n,lineNumber:253,columnNumber:21},void 0)]},void 0,!0,{fileName:n,lineNumber:236,columnNumber:17},void 0),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"",children:t("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",..._,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:C.map(a=>t("tr",{...a.getHeaderGroupProps(),children:a.headers.map(l=>t("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:"table-th",children:[l.render("Header"),t("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:n,lineNumber:276,columnNumber:57},void 0)]},void 0,!0,{fileName:n,lineNumber:270,columnNumber:53},void 0))},void 0,!1,{fileName:n,lineNumber:267,columnNumber:41},void 0))},void 0,!1,{fileName:n,lineNumber:265,columnNumber:33},void 0),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...w,children:[v&&v.length>0&&v.map(a=>(T(a),t(p,{children:t("tr",{...a.getRowProps(),children:a.cells.map(l=>t("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")},void 0,!1,{fileName:n,lineNumber:297,columnNumber:61},void 0))},void 0,!1,{fileName:n,lineNumber:294,columnNumber:49},void 0)},void 0,!1))),t("tr",{className:"borderBottom",children:[t("td",{},void 0,!1,{fileName:n,lineNumber:307,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:308,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:309,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:310,columnNumber:41},void 0),t("td",{},void 0,!1,{fileName:n,lineNumber:311,columnNumber:41},void 0),t("td",{className:"font-semibold",children:"GROSS RENT INCOME"},void 0,!1,{fileName:n,lineNumber:312,columnNumber:41},void 0),t("td",{className:"table-td font-semibold",children:[t("strong",{children:"AED"},void 0,!1,{fileName:n,lineNumber:313,columnNumber:80},void 0),(R==null?void 0:R.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}))+" "]},void 0,!0,{fileName:n,lineNumber:313,columnNumber:41},void 0)]},void 0,!0,{fileName:n,lineNumber:306,columnNumber:37},void 0)]},void 0,!0,{fileName:n,lineNumber:285,columnNumber:33},void 0)]},void 0,!0,{fileName:n,lineNumber:261,columnNumber:29},void 0)},void 0,!1,{fileName:n,lineNumber:260,columnNumber:25},void 0)},void 0,!1,{fileName:n,lineNumber:259,columnNumber:21},void 0)},void 0,!1,{fileName:n,lineNumber:258,columnNumber:17},void 0)]},void 0,!0,{fileName:n,lineNumber:235,columnNumber:13},void 0)},void 0,!1):t("div",{className:"pl-2",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:n,lineNumber:420,columnNumber:13},void 0)},void 0,!1,{fileName:n,lineNumber:419,columnNumber:13},void 0)},void 0,!1)}),te="/assets/RARE-Logo-animate.7e47c055.gif";var u="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\summary-reports\\TenancyReport.jsx";const ae={option:(e,s)=>({...e,fontSize:"14px"})},de=()=>{var $,j;const[e,s]=m.exports.useState({propertyid:"",filteredDates:[]}),[f,y]=m.exports.useState([]),[h,M]=m.exports.useState(""),[g,E]=m.exports.useState(""),[_,w]=m.exports.useState(!1),[C,A]=m.exports.useState({filterData:[],propertyData:{}}),[v,I]=m.exports.useState([]),[Q,G]=m.exports.useState(0),[b,Y]=m.exports.useState(""),D=o=>{const{contractstartdate:d,contractenddate:c}=o;let x=new Date(d),i=new Date(c);return(i.getFullYear()-x.getFullYear())*12+(i.getMonth()-x.getMonth())+" Months"};m.exports.useEffect(()=>{if(f!=null&&f.length){const o=f.map(d=>{const{rentalamount:c}=d;return Number(c)});G(o.reduce((d,c)=>d+c,0))}},[f==null?void 0:f.length]),m.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(o=>o.json()).then(o=>{const d=o==null?void 0:o.map(c=>({label:c.unitnumber+" | "+c.communityname+" | "+c.projectname+" | "+c.buildingname,value:c._id}));I(d)})},[]),m.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const c=await(await fetch(`http://dev-rare.srp.ai/property/${e==null?void 0:e.propertyid}`)).json();c&&Y(c)}})()},[e==null?void 0:e.propertyid]),m.exports.useEffect(()=>{(async()=>{const c=await(await fetch("http://dev-rare.srp.ai/booking")).json();M(c)})()},[]);const[U,q]=m.exports.useState({startDate:"",endDate:""}),H=m.exports.useRef(null),V=async()=>{const d=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/tenantsummaryreport/${e.propertyid}`)).json();y(d.data),A(d==null?void 0:d.data),A({filterData:d==null?void 0:d.data,propertyData:b}),console.log("=============>",d)};m.exports.useEffect(()=>{if(h!=null&&h.length&&(e==null?void 0:e.propertyid)&&(e==null?void 0:e.startDate)&&(e==null?void 0:e.endDate)){const o=h.filter(d=>{let c=!0;return e.propertyid&&d.propertyid!==e.propertyid&&(c=!1),(d==null?void 0:d.checkindate)<(e==null?void 0:e.startDate)&&(d==null?void 0:d.checkindate)>(e==null?void 0:e.endDate)&&(c=!1),c});y(o)}V()},[e==null?void 0:e.propertyid,e==null?void 0:e.startDate,e==null?void 0:e.endDate,h]);const T=()=>{E(""),s({...e,filteredDates:[]}),q({startDate:null,endDate:null})},R=async o=>{if(console.log("newValue",o),w(!0),E(o),!o){s({...e,filteredDates:[]});return}const c=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${e.propertyid}?contractstartdate=${o.startDate}&contractenddate=${o.endDate}`)).json();w(!1),s({...e,filteredDates:c==null?void 0:c.data}),b.customername,b.communityname,b.projectname,b.unitnumber,b.buildingname,A({filterData:c==null?void 0:c.data,propertyData:b})},P=async o=>{console.log("Export button clicked",o);const{filterData:d,propertyData:c}=o,x=new ee.Workbook,i=x.addWorksheet("Sheet1");i.mergeCells("A1:F1"),i.addRow(["TENANCY REPORTS"]),i.addRow([]),i.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),i.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const F=[];F.push(c),F.map(r=>{i.addRow([r.customername,r.communityname,r.projectname,r.unitnumber,r.buildingname])}),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow(["CONTRACT DETAILS"]),i.addRow([]),i.addRow(["Tenancy contract No","Status","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period","RENTAL INCOME"]),i.addRow([]),d.forEach(r=>{i.addRow([r.tenantcontractno,new Date(r.contractenddate).toDateString()>new Date?"Active":"Expire",r.guestname,new Date(r.contractstartdate).toDateString(),new Date(r.contractenddate).toDateString(),D(r),"AED "+r.rentalamount])}),i.addRow([]),i.addRow([]);const z=d.map(r=>Number(r.rentalamount)).reduce((r,N)=>r+N,0),O=i.addRow(["GROSS RENT INCOME","","","",""," AED "+z.toLocaleString()]);if(z>5e3){const r={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};O.fill=r;const N={argb:"FFFFFF"};[O].forEach(L=>{L.eachCell({includeEmpty:!0},W=>{W.font={color:N}})})}i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.addRow([]),i.getRow(2).font={bold:!0},i.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},i.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},i.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},i.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},i.getRow(11).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},i.getRow(2).font={color:{argb:"FFFFFF"}},i.getRow(4).font={color:{argb:"FFFFFF"}},i.getRow(8).font={color:{argb:"FFFFFF"}},i.getRow(11).font={color:{argb:"FFFFFF"}},i.getRow(9).font={color:{argb:"FFFFFF"}};const l=await x.xlsx.writeBuffer();saveAs(new Blob([l]),"tenancy_Summery.xlsx")};return t(p,{children:t("div",{className:"xl:col-span-2 col-span-1",children:t(Z,{title:"Tenancy Summary",children:[t("div",{className:"flex flex-row-reverse",children:e&&(($=e.filteredDates)==null?void 0:$.length)>0?t("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>P(C),children:[t("img",{src:J,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:u,lineNumber:376,columnNumber:25},void 0),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:u,lineNumber:377,columnNumber:25},void 0)]},void 0,!0,{fileName:u,lineNumber:375,columnNumber:21},void 0):t("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>P(C),children:[t("img",{src:J,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:u,lineNumber:383,columnNumber:25},void 0),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:u,lineNumber:384,columnNumber:25},void 0)]},void 0,!0,{fileName:u,lineNumber:382,columnNumber:21},void 0)},void 0,!1,{fileName:u,lineNumber:372,columnNumber:21},void 0),t("div",{children:[t("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:u,lineNumber:395,columnNumber:33},void 0)},void 0,!1,{fileName:u,lineNumber:394,columnNumber:29},void 0),t("div",{className:"w-[100%] col-span-3",children:t(k,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:v,value:v&&g?v.filter(function(o){return o.value===(e==null?void 0:e.propertyid)}):v.filter(function(o){return o.value===(e==null?void 0:e.propertyid)}),onChange:o=>{g?T():s({...e,propertyid:o==null?void 0:o.value})},styles:ae,id:"hh",placeholder:"Select and Search property"},void 0,!1,{fileName:u,lineNumber:403,columnNumber:33},void 0)},void 0,!1,{fileName:u,lineNumber:399,columnNumber:29},void 0)]},void 0,!0,{fileName:u,lineNumber:390,columnNumber:25},void 0),e.propertyid&&t(p,{children:t("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(B,{value:U,inputClassName:"input-class",containerClassName:"container-class",onChange:R,placeholder:"SELECT DATE"},void 0,!1,{fileName:u,lineNumber:450,columnNumber:49},void 0)},void 0,!1,{fileName:u,lineNumber:449,columnNumber:45},void 0)},void 0,!1,{fileName:u,lineNumber:448,columnNumber:41},void 0),g&&t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:T,children:"Reset"},void 0,!1,{fileName:u,lineNumber:464,columnNumber:61},void 0)},void 0,!1,{fileName:u,lineNumber:463,columnNumber:57},void 0)},void 0,!1,{fileName:u,lineNumber:462,columnNumber:53},void 0)},void 0,!1,{fileName:u,lineNumber:461,columnNumber:49},void 0)]},void 0,!0,{fileName:u,lineNumber:447,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:u,lineNumber:389,columnNumber:21},void 0),_===!0?t(p,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:te,width:150,height:150},void 0,!1,{fileName:u,lineNumber:483,columnNumber:37},void 0)},void 0,!1,{fileName:u,lineNumber:482,columnNumber:33},void 0)},void 0,!1):(j=e==null?void 0:e.filteredDates)!=null&&j.length?t(p,{children:t(K,{allBooking:e.filteredDates,propertyData:b,ref:H},void 0,!1,{fileName:u,lineNumber:489,columnNumber:37},void 0)},void 0,!1):t(p,{children:t(K,{allBooking:f,propertyData:b,ref:H},void 0,!1,{fileName:u,lineNumber:494,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:u,lineNumber:371,columnNumber:17},void 0)},void 0,!1,{fileName:u,lineNumber:370,columnNumber:13},void 0)},void 0,!1)};export{de as default};
