import{R as z,r as s,j as e,F as w,e as G,ap as J,b$ as K}from"./index.3bc655c6.js";import{D as X}from"./index.esm.219ce335.js";import"./jspdf.es.min.8c90b2dd.js";import"./html2canvas.esm.0eae2bf4.js";import{T as Z}from"./Table.97fd35b0.js";import{E as ee}from"./excel.9601f4f9.js";import{L as re}from"./Rare logo New Gif Loading.02c4dc82.js";import{E as te}from"./exceljs.min.528141ce.js";import"./ThemeProvider.583a0bde.js";var r="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\reports\\ReportTable.jsx";const le=z.forwardRef(({allBooking:t,propertyData:y},T)=>{const A=l=>{const{contractstartdate:N,contractenddate:a}=l;let b=new Date(N),g=new Date(a);return(g.getFullYear()-b.getFullYear())*12+(g.getMonth()-b.getMonth())+" Months"};s.exports.useState(0),s.exports.useState(0),s.exports.useState(0);const c=({title:l,value:N})=>e("tr",{className:"bg-slate-200 border border-gray-300 ",children:[e("td",{className:"px-2 py-2 whitespace-nowrap text-sm font-semibold text-slate-800 border-r  ",children:l},void 0,!1,{fileName:r,lineNumber:264,columnNumber:17},void 0),e("td",{className:"px-2 py-2 whitespace-nowrap text-sm text-gray-500 capitalize bg-white",children:N},void 0,!1,{fileName:r,lineNumber:265,columnNumber:17},void 0)]},void 0,!0,{fileName:r,lineNumber:263,columnNumber:13},void 0);return e("div",{children:t&&t.length>0&&t.map(l=>{var N;return e("div",{ref:T,children:[e("div",{className:"w-[100%] col-span-3 mb-4",children:e("div",{className:"borderBottom"},void 0,!1,{fileName:r,lineNumber:279,columnNumber:33},void 0)},void 0,!1,{fileName:r,lineNumber:278,columnNumber:29},void 0),e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CONTRACT DETAILS"},void 0,!1,{fileName:r,lineNumber:282,columnNumber:33},void 0)},void 0,!1,{fileName:r,lineNumber:281,columnNumber:29},void 0),e("div",{className:"mt-[25px] flex justify-between",children:[e("div",{className:"overflow-hidden p-2 w-[35%]",children:e("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[e("thead",{children:e("tr",{children:e("h4",{className:"text-[16px] text-slate-800",children:"PROPERTY DETAILS"},void 0,!1,{fileName:r,lineNumber:291,columnNumber:25},void 0)},void 0,!1,{fileName:r,lineNumber:290,columnNumber:21},void 0)},void 0,!1,{fileName:r,lineNumber:289,columnNumber:17},void 0),e("tbody",{children:[e(c,{title:"Property Code",value:l.propertycode?l.propertycode:"Not Available"},void 0,!1,{fileName:r,lineNumber:295,columnNumber:21},void 0),e(c,{title:"Landlord Name",value:l.propertyid.customername?l.propertyid.customername:"Not Available"},void 0,!1,{fileName:r,lineNumber:296,columnNumber:21},void 0),e(c,{title:"Community Name",value:l.propertyid.communityname?l.propertyid.communityname:"Not Available"},void 0,!1,{fileName:r,lineNumber:297,columnNumber:21},void 0),e(c,{title:"Project Name",value:l.propertyid.projectname?l.propertyid.projectname:"Not Available"},void 0,!1,{fileName:r,lineNumber:298,columnNumber:21},void 0),e(c,{title:"Apartment No",value:l.propertyid.unitnumber?l.propertyid.unitnumber:"Not Available"},void 0,!1,{fileName:r,lineNumber:299,columnNumber:21},void 0),e(c,{title:"Building No",value:l.propertyid.buildingname?l.propertyid.buildingname:"Not Available"},void 0,!1,{fileName:r,lineNumber:300,columnNumber:21},void 0)]},void 0,!0,{fileName:r,lineNumber:294,columnNumber:17},void 0)]},void 0,!0,{fileName:r,lineNumber:288,columnNumber:13},void 0)},void 0,!1,{fileName:r,lineNumber:287,columnNumber:29},void 0),e("div",{className:"overflow-hidden p-2 w-[35%]",children:e("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[e("h4",{className:"text-[16px] text-slate-800",children:"TENANCY DETAILS "},void 0,!1,{fileName:r,lineNumber:306,columnNumber:13},void 0),e("tbody",{className:"transition-all duration-1000 ease-in",children:[e(c,{title:"Tenancy contract No",value:l.tenantcontractno?l.tenantcontractno:"Not Available"},void 0,!1,{fileName:r,lineNumber:309,columnNumber:21},void 0),e(c,{title:"Tenant Name",value:l.guestname?l.guestname:"Not Available"},void 0,!1,{fileName:r,lineNumber:310,columnNumber:21},void 0),e(c,{title:"Tenancy Start Date",value:l?new Date(l.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:r,lineNumber:311,columnNumber:21},void 0),e(c,{title:"Tenancy Expiry Date",value:l?new Date(l.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:r,lineNumber:312,columnNumber:21},void 0),e(c,{title:"Tenancy Period",value:l?A(l):"Not Available"},void 0,!1,{fileName:r,lineNumber:313,columnNumber:21},void 0)]},void 0,!0,{fileName:r,lineNumber:308,columnNumber:17},void 0)]},void 0,!0,{fileName:r,lineNumber:305,columnNumber:9},void 0)},void 0,!1,{fileName:r,lineNumber:304,columnNumber:9},void 0),e("div",{className:"overflow-hidden p-2 w-[30%]",children:e("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[e("h4",{className:"text-[16px] text-slate-800",children:"AMOUNTS DETAILS "},void 0,!1,{fileName:r,lineNumber:319,columnNumber:13},void 0),e("tbody",{className:"transition-all duration-1000 ease-in",children:[e(c,{title:"Rental Amount",value:l?"AED "+l.rentalamount:"Not Available"},void 0,!1,{fileName:r,lineNumber:322,columnNumber:21},void 0),e(c,{title:"Payment Terms",value:l?l.noofchequeorinstallment+" installments":"Not Available"},void 0,!1,{fileName:r,lineNumber:323,columnNumber:21},void 0),e(c,{title:"Each Installment",value:l?"AED "+(Number(l.rentalamount)/l.noofchequeorinstallment).toFixed(2):"Not Available"},void 0,!1,{fileName:r,lineNumber:324,columnNumber:21},void 0)]},void 0,!0,{fileName:r,lineNumber:321,columnNumber:17},void 0)]},void 0,!0,{fileName:r,lineNumber:318,columnNumber:9},void 0)},void 0,!1,{fileName:r,lineNumber:317,columnNumber:9},void 0)]},void 0,!0,{fileName:r,lineNumber:286,columnNumber:29},void 0),e("div",{className:"overflow-x-auto -mx-6 mt-6",children:[e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem] p-[20px]",children:"CHEQUE MANAGEMENT DETAIL"},void 0,!1,{fileName:r,lineNumber:333,columnNumber:37},void 0)},void 0,!1,{fileName:r,lineNumber:332,columnNumber:33},void 0),e("div",{className:"p-[20px]",children:e(Z,{responsive:"lg",bordered:!0,children:[e("thead",{className:"border text-black table-back",children:e("tr",{className:"w-[150px] h-[60px]",children:[e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"Sr no"},void 0,!1,{fileName:r,lineNumber:342,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"RENTAL INCOME PERIOD"},void 0,!1,{fileName:r,lineNumber:343,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"STATUS"},void 0,!1,{fileName:r,lineNumber:344,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE NUMBER"},void 0,!1,{fileName:r,lineNumber:345,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE DATE"},void 0,!1,{fileName:r,lineNumber:346,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE AMOUNT"},void 0,!1,{fileName:r,lineNumber:347,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"EARLY TERMINATION (RENT REFUND)"},void 0,!1,{fileName:r,lineNumber:348,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CASH COLLECTED"},void 0,!1,{fileName:r,lineNumber:349,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"DEPOSITED IN OWNER ACCOUNT"},void 0,!1,{fileName:r,lineNumber:350,columnNumber:49},void 0),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"BOUNCED / UNREALISED"},void 0,!1,{fileName:r,lineNumber:351,columnNumber:49},void 0)]},void 0,!0,{fileName:r,lineNumber:341,columnNumber:45},void 0)},void 0,!1,{fileName:r,lineNumber:340,columnNumber:41},void 0),e("tbody",{children:[l&&((N=l==null?void 0:l.chequeDetails)==null?void 0:N.length)>0&&(l==null?void 0:l.chequeDetails.map((a,b)=>e("tr",{className:"w-[150px] h-[100px]",children:[e("td",{className:"border border-gray-100 text-center",children:b+1},void 0,!1,{fileName:r,lineNumber:359,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:a.someProperty?a.someProperty:"Not Available"},void 0,!1,{fileName:r,lineNumber:360,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:a.someOtherProperty?a.someOtherProperty:"Not Available"},void 0,!1,{fileName:r,lineNumber:361,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:a.chequenumbe?a.chequenumbe:"Not Available"},void 0,!1,{fileName:r,lineNumber:362,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:a.chequedate?new Date(a.chequedate).toDateString():"Not Available"},void 0,!1,{fileName:r,lineNumber:363,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:[e("strong",{children:"AED"},void 0,!1,{fileName:r,lineNumber:364,columnNumber:108},void 0),a.totalamount?Number(a.totalamount).toLocaleString():"Not Available"]},void 0,!0,{fileName:r,lineNumber:364,columnNumber:57},void 0),e("td",{className:"border border-gray-100 text-center",children:a.someOtherProperty?a.someOtherProperty:"Not Available"},void 0,!1,{fileName:r,lineNumber:367,columnNumber:60},void 0),e("td",{className:"border border-gray-100 text-center",children:[e("strong",{children:"AED"},void 0,!1,{fileName:r,lineNumber:368,columnNumber:111},void 0),a.totalamount?Number(a.totalamount).toLocaleString():"Not Available"]},void 0,!0,{fileName:r,lineNumber:368,columnNumber:60},void 0),"                                                         ",e("td",{className:"border border-gray-100 text-center",children:"Not Available"},void 0,!1,{fileName:r,lineNumber:370,columnNumber:119},void 0),e("td",{className:"border border-gray-100 text-center",children:a.someOtherProperty?a.someOtherProperty:"Not Available"},void 0,!1,{fileName:r,lineNumber:371,columnNumber:57},void 0)]},a._id,!0,{fileName:r,lineNumber:358,columnNumber:53},void 0))),e("tr",{children:[e("td",{colSpan:"5",className:"border border-gray-100 text-center font-semibold",children:"RENT TO BE REALISED"},void 0,!1,{fileName:r,lineNumber:375,columnNumber:49},void 0),e("td",{className:"border border-gray-100 text-center font-semibold",children:[e("strong",{children:"AED"},void 0,!1,{fileName:r,lineNumber:376,columnNumber:114},void 0),l.chequeDetails.map(a=>Number(a.totalamount)).reduce((a,b)=>a+b,0).toLocaleString()]},void 0,!0,{fileName:r,lineNumber:376,columnNumber:49},void 0),"                                                ",e("td",{className:"border border-gray-100 text-center"},void 0,!1,{fileName:r,lineNumber:381,columnNumber:102},void 0),e("td",{className:"border border-gray-100 text-center font-semibold",children:[e("strong",{children:"AED"},void 0,!1,{fileName:r,lineNumber:382,columnNumber:114},void 0),l.chequeDetails.map(a=>Number(a.totalamount)).reduce((a,b)=>a+b,0).toLocaleString()]},void 0,!0,{fileName:r,lineNumber:382,columnNumber:49},void 0),e("td",{colSpan:"2",className:"border border-gray-100 text-center"},void 0,!1,{fileName:r,lineNumber:388,columnNumber:49},void 0)]},void 0,!0,{fileName:r,lineNumber:374,columnNumber:45},void 0)]},void 0,!0,{fileName:r,lineNumber:354,columnNumber:41},void 0)]},void 0,!0,{fileName:r,lineNumber:339,columnNumber:37},void 0)},void 0,!1,{fileName:r,lineNumber:338,columnNumber:33},void 0)]},void 0,!0,{fileName:r,lineNumber:330,columnNumber:29},void 0),e("div",{},void 0,!1,{fileName:r,lineNumber:396,columnNumber:29},void 0)]},void 0,!0,{fileName:r,lineNumber:277,columnNumber:25},void 0)})},void 0,!1,{fileName:r,lineNumber:270,columnNumber:9},void 0)});var m="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\tenant-contract\\reports\\TenancyReport.jsx";const oe={option:(t,y)=>({...t,fontSize:"14px"})},ve=()=>{var F,L;const[t,y]=s.exports.useState({propertyid:"",filteredDates:[]}),[T,A]=s.exports.useState([]),[c,l]=s.exports.useState(""),[N,a]=s.exports.useState(""),[b,g]=s.exports.useState(!1),[x,j]=s.exports.useState([]),[p,U]=s.exports.useState(""),[k,S]=s.exports.useState({filterData:[],propertyData:{}}),B=n=>{const{contractstartdate:u,contractenddate:i}=n;let h=new Date(u),E=new Date(i);return(E.getFullYear()-h.getFullYear())*12+(E.getMonth()-h.getMonth())+" Months"},M=async n=>{console.log("Export button clicked",n);const{filterData:u,propertyData:i}=n;let h=[];h.push(i);const E=new te.Workbook,o=E.addWorksheet("Sheet1");o.mergeCells("A1:H1"),o.addRow(["TENANCY REPORTS"]),o.addRow([]),o.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),o.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}],h&&(console.log("vvvv",h),[...h.map(v=>[v.owner_name,v.community_name,v.project_name,v.unitnumber,v.building_name])].forEach(v=>{o.addRow(v)}),o.addRow([]),o.addRow([]),o.addRow(["Statement Period"]),console.log("...",N.startDate),o.addRow([N.startDate,N.endDate]),o.addRow([]),o.addRow([]),o.addRow([]),o.addRow([])),u.forEach(f=>{const v=o.addRow(["CONTRACT DETAILS"]);o.addRow([]);const O=o.addRow(["Tenancy contract No","Tenant Name","Property Code","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period"]);o.addRow([f.tenantcontractno,f.guestname,f.propertycode,new Date(f.contractstartdate).toDateString(),new Date(f.contractenddate).toDateString(),B(f)]),o.addRow([]);const P=o.addRow(["RENTAL INCOME PERIOD","STATUS","CHEQUE NUMBER","CHEQUE DATE","CHEQUE AMOUNT","EARLY TERMINATION (RENT REFUND)","CASH COLLECTED","DEPOSITED IN OWNER ACCOUNT","BOUNCED / UNREALISED"]);f.chequeDetails.map(d=>{o.addRow(["NOT AVAILABLE","NOT AVAILABLE","chq#"+(d==null?void 0:d.chequenumbe),new Date(d==null?void 0:d.chequedate).toDateString()," AED"+(d==null?void 0:d.totalamount),"NOT AVAILABLE","AED"+d.totalamount,"NOT AVAILABLE",d==null?void 0:d.rentalamount,"NOT AVAILABLE"])}),o.addRow([]);const R=f.chequeDetails.map(d=>Number(d.totalamount)).reduce((d,D)=>d+D,0),I=o.addRow(["RENT TO BE REALISED","","","","","AED"+R.toLocaleString()," AED"+R.toLocaleString()]);if(R>5e3){const d={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},D={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}};I.fill=d,P.fill=d,O.fill=d,v.fill=D;const Y={argb:"FFFFFF"};[I,P,O,v].forEach(Q=>{Q.eachCell({includeEmpty:!0},W=>{W.font={color:Y}})})}o.addRow([]),o.addRow([]),o.addRow([]),o.addRow([])}),o.addRow([]),o.addRow([]),o.addRow([]),o.addRow([]),o.getRow(2).font={bold:!0},o.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},o.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},o.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},o.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},o.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},o.getRow(2).font={color:{argb:"FFFFFF"}},o.getRow(4).font={color:{argb:"FFFFFF"}},o.getRow(8).font={color:{argb:"FFFFFF"}},o.getRow(7).font={color:{argb:"FFFFFF"}},o.getRow(9).font={color:{argb:"FFFFFF"}};const V=await E.xlsx.writeBuffer();K.exports.saveAs(new Blob([V]),"tenancy_report.xlsx")};s.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(n=>n.json()).then(n=>{const u=n==null?void 0:n.map(i=>({label:i.unitnumber+" | "+i.communityname+" | "+i.projectname+" | "+i.buildingname,value:i._id}));j(u)})},[]),s.exports.useEffect(()=>{(async()=>{if(t!=null&&t.propertyid){const i=await(await fetch(`http://dev-rare.srp.ai/property/${t==null?void 0:t.propertyid}`)).json();i&&U(i)}})()},[t==null?void 0:t.propertyid]),s.exports.useEffect(()=>{(async()=>{const i=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${t==null?void 0:t.propertyid}?contractstartdate=${newValue.startDate}&contractenddate=${newValue.endDate}`)).json();S(i==null?void 0:i.data),l(i==null?void 0:i.data)})()},[]);const[q,_]=s.exports.useState({startDate:"",endDate:""}),H=s.exports.useRef(null);s.exports.useEffect(()=>{if(c!=null&&c.length&&(t==null?void 0:t.propertyid)&&(t==null?void 0:t.startDate)&&(t==null?void 0:t.endDate)){const n=c.filter(u=>{let i=!0;return t.propertyid&&u.propertyid!==t.propertyid&&(i=!1),(u==null?void 0:u.checkindate)<(t==null?void 0:t.startDate)&&(u==null?void 0:u.checkindate)>(t==null?void 0:t.endDate)&&(i=!1),i});A(n)}},[t==null?void 0:t.propertyid,t==null?void 0:t.startDate,t==null?void 0:t.endDate,c]);const C=()=>{a(""),y({...t,filteredDates:[]}),_({startDate:null,endDate:null})},$=async n=>{if(g(!0),console.log("newValue",n),a(n),!n){y({...t,filteredDates:[]});return}const i=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${t==null?void 0:t.propertyid}?contractstartdate=${n.startDate}&contractenddate=${n.endDate}`)).json();g(!1),y({...t,filteredDates:i==null?void 0:i.data}),p.customername,p.communityname,p.projectname,p.unitnumber,p.buildingname,console.log("lllll",p),S({filterData:i==null?void 0:i.data,propertyData:p})};return e(w,{children:e("div",{className:"xl:col-span-2 col-span-1",children:e(G,{title:"Tenancy Reports",children:[e("div",{className:"flex flex-row-reverse",children:t&&((F=t.filteredDates)==null?void 0:F.length)>0?e("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>M(k),children:[e("img",{src:ee,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:m,lineNumber:644,columnNumber:33},void 0),e("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:m,lineNumber:645,columnNumber:33},void 0)]},void 0,!0,{fileName:m,lineNumber:643,columnNumber:29},void 0):null},void 0,!1,{fileName:m,lineNumber:640,columnNumber:21},void 0),e("div",{children:[e("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:m,lineNumber:658,columnNumber:33},void 0)},void 0,!1,{fileName:m,lineNumber:657,columnNumber:29},void 0),e("div",{className:"w-[100%] col-span-3",children:e(J,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:x,value:x&&N?x.filter(function(n){return n.value===(t==null?void 0:t.propertyid)}):x.filter(function(n){return n.value===(t==null?void 0:t.propertyid)}),onChange:n=>{N?C():y({...t,propertyid:n==null?void 0:n.value})},styles:oe,id:"hh",placeholder:"Select and Search property"},void 0,!1,{fileName:m,lineNumber:666,columnNumber:33},void 0)},void 0,!1,{fileName:m,lineNumber:662,columnNumber:29},void 0)]},void 0,!0,{fileName:m,lineNumber:653,columnNumber:25},void 0),t.propertyid&&e(w,{children:e("div",{className:"flex justify-end mt-[25px]",children:[e("div",{className:"w-[150px]",children:e("div",{className:"date-range-custom relative",children:e(X,{value:q,inputClassName:"input-class",containerClassName:"container-class",onChange:$,placeholder:"SELECT DATE"},void 0,!1,{fileName:m,lineNumber:714,columnNumber:49},void 0)},void 0,!1,{fileName:m,lineNumber:713,columnNumber:45},void 0)},void 0,!1,{fileName:m,lineNumber:712,columnNumber:41},void 0),N&&e("div",{className:"flex justify-end",children:e("div",{className:"w-[90px]",children:e("div",{className:"date-range-custom relative",children:e("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:C,children:"Reset"},void 0,!1,{fileName:m,lineNumber:728,columnNumber:61},void 0)},void 0,!1,{fileName:m,lineNumber:727,columnNumber:57},void 0)},void 0,!1,{fileName:m,lineNumber:726,columnNumber:53},void 0)},void 0,!1,{fileName:m,lineNumber:725,columnNumber:49},void 0)]},void 0,!0,{fileName:m,lineNumber:711,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:m,lineNumber:652,columnNumber:21},void 0),b===!0?e(w,{children:e("div",{className:"flex items-center justify-center h-[100%]",children:e("img",{src:re,width:150,height:150},void 0,!1,{fileName:m,lineNumber:746,columnNumber:37},void 0)},void 0,!1,{fileName:m,lineNumber:745,columnNumber:33},void 0)},void 0,!1):(L=t.filteredDates)!=null&&L.length?e(w,{children:e(le,{allBooking:t.filteredDates,propertyData:p,ref:H},void 0,!1,{fileName:m,lineNumber:752,columnNumber:37},void 0)},void 0,!1):e(w,{children:e("h6",{className:"text-base text-slate-800 dark:text-slate-300  mt-[0.5rem] mb-12",children:"No Property Data Found"},void 0,!1,{fileName:m,lineNumber:756,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:m,lineNumber:639,columnNumber:17},void 0)},void 0,!1,{fileName:m,lineNumber:638,columnNumber:13},void 0)},void 0,!1)};export{ve as default};
