import{R as z,r as s,j as e,F as x,e as G,ao as J,b$ as K}from"./index.e066b4ed.js";import{D as X}from"./index.esm.cc3edbc1.js";import"./jspdf.es.min.3ac7dfcd.js";import"./html2canvas.esm.0eae2bf4.js";import{T as Z}from"./Table.442c843a.js";import{E as ee}from"./excel.9601f4f9.js";import{L as re}from"./Rare logo New Gif Loading.02c4dc82.js";import{E as te}from"./exceljs.min.882e101c.js";import"./ThemeProvider.cadafd32.js";var r="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\reports\\ReportTable.jsx";const le=z.forwardRef(({allBooking:t,propertyData:p},D)=>{const E=l=>{const{contractstartdate:b,contractenddate:a}=l;let v=new Date(b),h=new Date(a);return(h.getFullYear()-v.getFullYear())*12+(h.getMonth()-v.getMonth())+" Months"};s.exports.useState(0),s.exports.useState(0),s.exports.useState(0);const c=({title:l,value:b})=>e("tr",{className:"bg-slate-200 border border-gray-300 ",children:[e("td",{className:"px-2 py-2 whitespace-nowrap text-sm font-semibold text-slate-800 border-r  ",children:l},void 0,!1,{fileName:r,lineNumber:264,columnNumber:17},void 0),e("td",{className:"px-2 py-2 whitespace-nowrap text-sm text-gray-500 capitalize bg-white",children:b},void 0,!1,{fileName:r,lineNumber:265,columnNumber:17},void 0)]},void 0,!0,{fileName:r,lineNumber:263,columnNumber:13},void 0);return e("div",{children:t&&t.length>0&&t.map(l=>{var b;return e("div",{ref:D,children:[e("div",{className:"w-[100%] col-span-3 mb-4",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:r,lineNumber:279,columnNumber:33},void 0)},void 0,!1,{fileName:r,lineNumber:278,columnNumber:29},void 0),e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CONTRACT DETAILS"},void 0,!1,{fileName:r,lineNumber:282,columnNumber:33},void 0)},void 0,!1,{fileName:r,lineNumber:281,columnNumber:29},void 0),e("div",{className:"mt-[25px] flex justify-between",children:[e("div",{className:"overflow-hidden p-2 w-[35%]",children:e("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[e("thead",{children:e("tr",{children:e("h4",{className:"text-[16px] text-slate-800",children:"PROPERTY DETAILS"},void 0,!1,{fileName:r,lineNumber:291,columnNumber:25},void 0)},void 0,!1,{fileName:r,lineNumber:290,columnNumber:21},void 0)},void 0,!1,{fileName:r,lineNumber:289,columnNumber:17},void 0),e("tbody",{children:[e(c,{title:"Property Code",value:l.propertycode?l.propertycode:"Not Available"},void 0,!1,{fileName:r,lineNumber:295,columnNumber:21},void 0),e(c,{title:"Landlord Name",value:l.propertyid.customername?l.propertyid.customername:"Not Available"},void 0,!1,{fileName:r,lineNumber:296,columnNumber:21},void 0),e(c,{title:"Community Name",value:l.propertyid.communityname?l.propertyid.communityname:"Not Available"},void 0,!1,{fileName:r,lineNumber:297,columnNumber:21},void 0),e(c,{title:"Project Name",value:l.propertyid.projectname?l.propertyid.projectname:"Not Available"},void 0,!1,{fileName:r,lineNumber:298,columnNumber:21},void 0),e(c,{title:"Apartment No",value:l.propertyid.unitnumber?l.propertyid.unitnumber:"Not Available"},void 0,!1,{fileName:r,lineNumber:299,columnNumber:21},void 0),e(c,{title:"Building No",value:l.propertyid.buildingname?l.propertyid.buildingname:"Not Available"},void 0,!1,{fileName:r,lineNumber:300,columnNumber:21},void 0)]},void 0,!0,{fileName:r,lineNumber:294,columnNumber:17},void 0)]},void 0,!0,{fileName:r,lineNumber:288,columnNumber:13},void 0)},void 0,!1,{fileName:r,lineNumber:287,columnNumber:29},void 0),e("div",{className:"overflow-hidden p-2 w-[35%]",children:e("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[e("h4",{className:"text-[16px] text-slate-800",children:"TENANCY DETAILS "},void 0,!1,{fileName:r,lineNumber:306,columnNumber:13},void 0),e("tbody",{className:"transition-all duration-1000 ease-in",children:[e(c,{title:"Tenancy contract No",value:l.tenantcontractno?l.tenantcontractno:"Not Available"},void 0,!1,{fileName:r,lineNumber:309,columnNumber:21},void 0),e(c,{title:"Tenant Name",value:l.guestname?l.guestname:"Not Available"},void 0,!1,{fileName:r,lineNumber:310,columnNumber:21},void 0),e(c,{title:"Tenancy Start Date",value:l?new Date(l.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:r,lineNumber:311,columnNumber:21},void 0),e(c,{title:"Tenancy Expiry Date",value:l?new Date(l.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:r,lineNumber:312,columnNumber:21},void 0),e(c,{title:"Tenancy Period",value:l?E(l):"Not Available"},void 0,!1,{fileName:r,lineNumber:313,columnNumber:21},void 0)]},void 0,!0,{fileName:r,lineNumber:308,columnNumber:17},void 0)]},void 0,!0,{fileName:r,lineNumber:305,columnNumber:9},void 0)},void 0,!1,{fileName:r,lineNumber:304,columnNumber:9},void 0),e("div",{className:"overflow-hidden p-2 w-[30%]",children:e("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[e("h4",{className:"text-[16px] text-slate-800",children:"AMOUNTS DETAILS "},void 0,!1,{fileName:r,lineNumber:319,columnNumber:13},void 0),e("tbody",{className:"transition-all duration-1000 ease-in",children:[e(c,{title:"Rental Amount",value:l?"AED "+l.rentalamount:"Not Available"},void 0,!1,{fileName:r,lineNumber:322,columnNumber:21},void 0),e(c,{title:"Payment Terms",value:l?l.noofchequeorinstallment+" installments":"Not Available"},void 0,!1,{fileName:r,lineNumber:323,columnNumber:21},void 0),e(c,{title:"Each Installment",value:l?"AED "+(Number(l.rentalamount)/l.noofchequeorinstallment).toFixed(2):"Not Available"},void 0,!1,{fileName:r,lineNumber:324,columnNumber:21},void 0)]},void 0,!0,{fileName:r,lineNumber:321,columnNumber:17},void 0)]},void 0,!0,{fileName:r,lineNumber:318,columnNumber:9},void 0)},void 0,!1,{fileName:r,lineNumber:317,columnNumber:9},void 0)]},void 0,!0,{fileName:r,lineNumber:286,columnNumber:29},void 0),e("div",{className:"overflow-x-auto -mx-6 mt-6",children:[e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem] p-[20px]",children:"CHEQUE MANAGEMENT DETAIL"},void 0,!1,{fileName:r,lineNumber:333,columnNumber:37},void 0)},void 0,!1,{fileName:r,lineNumber:332,columnNumber:33},void 0),e("div",{className:"p-[20px]",children:e(Z,{responsive:"lg",bordered:!0,children:[e("thead",{className:"border text-black table-back",children:e("tr",{className:"w-[150px] h-[60px]",children:[e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"Sr no"},void 0,!1,{fileName:r,lineNumber:342,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"RENTAL INCOME PERIOD"},void 0,!1,{fileName:r,lineNumber:343,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"STATUS"},void 0,!1,{fileName:r,lineNumber:344,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE NUMBER"},void 0,!1,{fileName:r,lineNumber:345,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE DATE"},void 0,!1,{fileName:r,lineNumber:346,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE AMOUNT"},void 0,!1,{fileName:r,lineNumber:347,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"EARLY TERMINATION (RENT REFUND)"},void 0,!1,{fileName:r,lineNumber:348,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CASH COLLECTED"},void 0,!1,{fileName:r,lineNumber:349,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"DEPOSITED IN OWNER ACCOUNT"},void 0,!1,{fileName:r,lineNumber:350,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"BOUNCED / UNREALISED"},void 0,!1,{fileName:r,lineNumber:351,columnNumber:49},void 0)]},void 0,!0,{fileName:r,lineNumber:341,columnNumber:45},void 0)},void 0,!1,{fileName:r,lineNumber:340,columnNumber:41},void 0),e("tbody",{children:[l&&((b=l==null?void 0:l.chequeDetails)==null?void 0:b.length)>0&&(l==null?void 0:l.chequeDetails.map((a,v)=>e("tr",{className:"w-[150px] h-[100px]",children:[e("td",{className:"border border-gray-100 text-center",children:v+1},void 0,!1,{fileName:r,lineNumber:359,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:a.someProperty?a.someProperty:"Not Available"},void 0,!1,{fileName:r,lineNumber:360,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:a.someOtherProperty?a.someOtherProperty:"Not Available"},void 0,!1,{fileName:r,lineNumber:361,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:a.chequenumbe?a.chequenumbe:"Not Available"},void 0,!1,{fileName:r,lineNumber:362,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:a.chequedate?new Date(a.chequedate).toDateString():"Not Available"},void 0,!1,{fileName:r,lineNumber:363,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:[a.totalamount?Number(a.totalamount).toLocaleString():"Not Available"," AED"]},void 0,!0,{fileName:r,lineNumber:364,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:a.someOtherProperty?a.someOtherProperty:"Not Available"},void 0,!1,{fileName:r,lineNumber:367,columnNumber:60},void 0),e("td",{className:"border border-gray-100 text-center",children:[a.totalamount?Number(a.totalamount).toLocaleString():"Not Available"," AED"]},void 0,!0,{fileName:r,lineNumber:368,columnNumber:60},void 0),"                                                         ",e("td",{className:"border border-gray-100 text-center",children:"Not Available"},void 0,!1,{fileName:r,lineNumber:370,columnNumber:119},void 0),e("td",{className:"border border-gray-100 text-center",children:a.someOtherProperty?a.someOtherProperty:"Not Available"},void 0,!1,{fileName:r,lineNumber:371,columnNumber:57},void 0)]},a._id,!0,{fileName:r,lineNumber:358,columnNumber:53},void 0))),e("tr",{children:[e("td",{colSpan:"5",className:"border border-gray-100 text-center font-semibold",children:"RENT TO BE REALISED"},void 0,!1,{fileName:r,lineNumber:375,columnNumber:49},void 0),e("td",{className:"border border-gray-100 text-center font-semibold",children:[l.chequeDetails.map(a=>Number(a.totalamount)).reduce((a,v)=>a+v,0).toLocaleString()," AED"]},void 0,!0,{fileName:r,lineNumber:376,columnNumber:49},void 0),"                                                ",e("td",{className:"border border-gray-100 text-center"},void 0,!1,{fileName:r,lineNumber:381,columnNumber:102},void 0),e("td",{className:"border border-gray-100 text-center font-semibold",children:[l.chequeDetails.map(a=>Number(a.totalamount)).reduce((a,v)=>a+v,0).toLocaleString()," AED"]},void 0,!0,{fileName:r,lineNumber:382,columnNumber:49},void 0),e("td",{colSpan:"2",className:"border border-gray-100 text-center"},void 0,!1,{fileName:r,lineNumber:388,columnNumber:49},void 0)]},void 0,!0,{fileName:r,lineNumber:374,columnNumber:45},void 0)]},void 0,!0,{fileName:r,lineNumber:354,columnNumber:41},void 0)]},void 0,!0,{fileName:r,lineNumber:339,columnNumber:37},void 0)},void 0,!1,{fileName:r,lineNumber:338,columnNumber:33},void 0)]},void 0,!0,{fileName:r,lineNumber:330,columnNumber:29},void 0),e("div",{},void 0,!1,{fileName:r,lineNumber:396,columnNumber:29},void 0)]},void 0,!0,{fileName:r,lineNumber:277,columnNumber:25},void 0)})},void 0,!1,{fileName:r,lineNumber:270,columnNumber:9},void 0)});var m="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\reports\\TenancyReport.jsx";const oe={option:(t,p)=>({...t,fontSize:"14px"})},ve=()=>{var C,F;const[t,p]=s.exports.useState({propertyid:"",filteredDates:[]}),[D,E]=s.exports.useState([]),[c,l]=s.exports.useState(""),[b,a]=s.exports.useState(""),[v,h]=s.exports.useState(!1),[y,j]=s.exports.useState([]),[f,U]=s.exports.useState(""),[k,T]=s.exports.useState({filterData:[],propertyData:{}}),B=n=>{const{contractstartdate:u,contractenddate:i}=n;let g=new Date(u),o=new Date(i);return(o.getFullYear()-g.getFullYear())*12+(o.getMonth()-g.getMonth())+" Months"},M=async n=>{console.log("Export button clicked",n);const{filterData:u,propertyData:i}=n,g=new te.Workbook,o=g.addWorksheet("Sheet1");o.mergeCells("A1:F1"),o.addRow(["TENANCY REPORTS"]),o.addRow([]),o.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),o.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const w=[];w.push(i),w.map(N=>{o.addRow([N.customername,N.communityname,N.projectname,N.unitnumber,N.buildingname])}),o.addRow([]),o.addRow([]),o.addRow([]),u.forEach(N=>{const L=o.addRow(["CONTRACT DETAILS"]);o.addRow([]);const O=o.addRow(["Tenancy contract No","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period"]);o.addRow([N.tenantcontractno,N.guestname,new Date(N.contractstartdate).toDateString(),new Date(N.contractenddate).toDateString(),B(N)]),o.addRow([]);const P=o.addRow(["RENTAL INCOME PERIOD","STATUS","CHEQUE NUMBER","CHEQUE DATE","CHEQUE AMOUNT","EARLY TERMINATION (RENT REFUND)","CASH COLLECTED","DEPOSITED IN OWNER ACCOUNT","BOUNCED / UNREALISED"]);N.chequeDetails.map(d=>{o.addRow(["NOT AVAILABLE","NOT AVAILABLE",d==null?void 0:d.chequenumbe,new Date(d==null?void 0:d.chequedate).toDateString(),(d==null?void 0:d.totalamount)+" AED",d.state,d.totalamount+" AED",d==null?void 0:d.rentalamount,"NOT AVAILABLE","NOT AVAILABLE"])}),o.addRow([]);const A=N.chequeDetails.map(d=>Number(d.totalamount)).reduce((d,R)=>d+R,0),I=o.addRow(["RENT TO BE REALISED","","","",""+A.toLocaleString()+" AED","",""+A.toLocaleString()+" AED"]);if(A>5e3){const d={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},R={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}};I.fill=d,P.fill=d,O.fill=d,L.fill=R;const _={argb:"FFFFFF"};[I,P,O,L].forEach(Q=>{Q.eachCell({includeEmpty:!0},W=>{W.font={color:_}})})}o.addRow([]),o.addRow([]),o.addRow([]),o.addRow([])}),o.addRow([]),o.addRow([]),o.addRow([]),o.addRow([]),o.getRow(2).font={bold:!0},o.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},o.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},o.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},o.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},o.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},o.getRow(2).font={color:{argb:"FFFFFF"}},o.getRow(4).font={color:{argb:"FFFFFF"}},o.getRow(8).font={color:{argb:"FFFFFF"}},o.getRow(7).font={color:{argb:"FFFFFF"}},o.getRow(9).font={color:{argb:"FFFFFF"}};const V=await g.xlsx.writeBuffer();K.exports.saveAs(new Blob([V]),"tenancy_report.xlsx")};s.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(n=>n.json()).then(n=>{const u=n==null?void 0:n.map(i=>({label:i.unitnumber+" | "+i.communityname+" | "+i.projectname+" | "+i.buildingname,value:i._id}));j(u)})},[]),s.exports.useEffect(()=>{(async()=>{if(t!=null&&t.propertyid){const i=await(await fetch(`http://dev-rare.srp.ai/property/${t==null?void 0:t.propertyid}`)).json();i&&U(i)}})()},[t==null?void 0:t.propertyid]),s.exports.useEffect(()=>{(async()=>{const i=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${t==null?void 0:t.propertyid}?contractstartdate=${newValue.startDate}&contractenddate=${newValue.endDate}`)).json();T(i==null?void 0:i.data),l(i==null?void 0:i.data)})()},[]);const[q,$]=s.exports.useState({startDate:"",endDate:""}),H=s.exports.useRef(null);s.exports.useEffect(()=>{if(c!=null&&c.length&&(t==null?void 0:t.propertyid)&&(t==null?void 0:t.startDate)&&(t==null?void 0:t.endDate)){const n=c.filter(u=>{let i=!0;return t.propertyid&&u.propertyid!==t.propertyid&&(i=!1),(u==null?void 0:u.checkindate)<(t==null?void 0:t.startDate)&&(u==null?void 0:u.checkindate)>(t==null?void 0:t.endDate)&&(i=!1),i});E(n)}},[t==null?void 0:t.propertyid,t==null?void 0:t.startDate,t==null?void 0:t.endDate,c]);const S=()=>{a(""),p({...t,filteredDates:[]}),$({startDate:null,endDate:null})},Y=async n=>{if(h(!0),console.log("newValue",n),a(n),!n){p({...t,filteredDates:[]});return}const i=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${t==null?void 0:t.propertyid}?contractstartdate=${n.startDate}&contractenddate=${n.endDate}`)).json();h(!1),p({...t,filteredDates:i==null?void 0:i.data}),f.customername,f.communityname,f.projectname,f.unitnumber,f.buildingname,console.log("lllll",f),T({filterData:i==null?void 0:i.data,propertyData:f})};return e(x,{children:e("div",{className:"xl:col-span-2 col-span-1",children:e(G,{title:"Tenancy Reports",children:[e("div",{className:"flex flex-row-reverse",children:t&&((C=t.filteredDates)==null?void 0:C.length)>0?e("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>M(k),children:[e("img",{src:ee,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:m,lineNumber:590,columnNumber:33},void 0),e("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:m,lineNumber:591,columnNumber:33},void 0)]},void 0,!0,{fileName:m,lineNumber:589,columnNumber:29},void 0):null},void 0,!1,{fileName:m,lineNumber:586,columnNumber:21},void 0),e("div",{children:[e("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:m,lineNumber:604,columnNumber:33},void 0)},void 0,!1,{fileName:m,lineNumber:603,columnNumber:29},void 0),e("div",{className:"w-[100%] col-span-3",children:e(J,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:y,value:y&&b?y.filter(function(n){return n.value===(t==null?void 0:t.propertyid)}):y.filter(function(n){return n.value===(t==null?void 0:t.propertyid)}),onChange:n=>{b?S():p({...t,propertyid:n==null?void 0:n.value})},styles:oe,id:"hh",placeholder:"Select and Search property"},void 0,!1,{fileName:m,lineNumber:612,columnNumber:33},void 0)},void 0,!1,{fileName:m,lineNumber:608,columnNumber:29},void 0)]},void 0,!0,{fileName:m,lineNumber:599,columnNumber:25},void 0),t.propertyid&&e(x,{children:e("div",{className:"flex justify-end mt-[25px]",children:[e("div",{className:"w-[150px]",children:e("div",{className:"date-range-custom relative",children:e(X,{value:q,inputClassName:"input-class",containerClassName:"container-class",onChange:Y,placeholder:"SELECT DATE"},void 0,!1,{fileName:m,lineNumber:660,columnNumber:49},void 0)},void 0,!1,{fileName:m,lineNumber:659,columnNumber:45},void 0)},void 0,!1,{fileName:m,lineNumber:658,columnNumber:41},void 0),b&&e("div",{className:"flex justify-end",children:e("div",{className:"w-[90px]",children:e("div",{className:"date-range-custom relative",children:e("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:S,children:"Reset"},void 0,!1,{fileName:m,lineNumber:674,columnNumber:61},void 0)},void 0,!1,{fileName:m,lineNumber:673,columnNumber:57},void 0)},void 0,!1,{fileName:m,lineNumber:672,columnNumber:53},void 0)},void 0,!1,{fileName:m,lineNumber:671,columnNumber:49},void 0)]},void 0,!0,{fileName:m,lineNumber:657,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:m,lineNumber:598,columnNumber:21},void 0),v===!0?e(x,{children:e("div",{className:"flex items-center justify-center h-[100%]",children:e("img",{src:re,width:150,height:150},void 0,!1,{fileName:m,lineNumber:692,columnNumber:37},void 0)},void 0,!1,{fileName:m,lineNumber:691,columnNumber:33},void 0)},void 0,!1):(F=t.filteredDates)!=null&&F.length?e(x,{children:e(le,{allBooking:t.filteredDates,propertyData:f,ref:H},void 0,!1,{fileName:m,lineNumber:698,columnNumber:37},void 0)},void 0,!1):e(x,{children:e("h6",{className:"text-base text-slate-800 dark:text-slate-300  mt-[0.5rem] mb-12",children:"No Property Data Found"},void 0,!1,{fileName:m,lineNumber:702,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:m,lineNumber:585,columnNumber:17},void 0)},void 0,!1,{fileName:m,lineNumber:584,columnNumber:13},void 0)},void 0,!1)};export{ve as default};
