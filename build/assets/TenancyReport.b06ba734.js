import{R as q,r as i,j as e,c as l,F as u,C as z,aq as D,b$ as _}from"./index.b447658d.js";import{D as H}from"./index.esm.cad2bd76.js";import"./jspdf.es.min.be2b710c.js";import"./html2canvas.esm.0eae2bf4.js";import{T as $}from"./Table.b7f7e86a.js";import{E as Q}from"./excel.9601f4f9.js";import{L as Y}from"./Rare logo New Gif Loading.02c4dc82.js";import{E as V}from"./exceljs.min.dc1a8f6e.js";import"./index.186db273.js";const W=q.forwardRef(({allBooking:t,propertyData:r},w)=>{const E=a=>{const{contractstartdate:x,contractenddate:n}=a;let N=new Date(x),f=new Date(n);return(f.getFullYear()-N.getFullYear())*12+(f.getMonth()-N.getMonth())+" Months"};return i.exports.useState(0),i.exports.useState(0),i.exports.useState(0),e("div",{children:t&&t.length>0&&t.map(a=>{var x;return l("div",{ref:w,children:[e("div",{className:"w-[100%] col-span-3 mb-4",children:e("div",{className:"borderBottom"})}),e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CONTRACT DETAILS"})}),l("div",{className:"mt-[25px] flex justify-between",children:[l("div",{children:[l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Property Code: "}),e("p",{className:"capitalize",children:a.propertycode?a.propertycode:"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Landlord Name: "}),e("p",{className:"capitalize",children:r!=null&&r.owner_name?r==null?void 0:r.owner_name:"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Community Name: "}),e("p",{className:"capitalize",children:r!=null&&r.communityname?r==null?void 0:r.communityname:"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Project Name: "}),e("p",{className:"capitalize",children:r!=null&&r.project_name?r==null?void 0:r.project_name:"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Apartment No: "}),e("p",{className:"capitalize",children:r!=null&&r.unitnumber?r==null?void 0:r.unitnumber:"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Building No: "}),e("p",{className:"capitalize",children:r!=null&&r.building_name?r==null?void 0:r.building_name:"Not Available"})]})]}),l("div",{children:[l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Tenancy contract No: "}),e("p",{className:"capitalize",children:a.tenantcontractno?a.tenantcontractno:"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Tenant Name:  "}),e("p",{className:"capitalize",children:a.guestname?a.guestname:"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Tenancy Start Date: "}),e("p",{className:"capitalize",children:a?new Date(a.contractstartdate).toDateString():"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Tenancy Expiry Date "}),e("p",{className:"capitalize",children:a?new Date(a.contractenddate).toDateString():"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Tenancy Period: "}),e("p",{className:"capitalize",children:a?E(a):"Not Available"})]})]}),l("div",{children:[l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Rental Amount: "}),e("p",{className:"capitalize",children:a?"AED "+a.rentalamount:"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Payment Terms: "}),e("p",{className:"capitalize",children:a?a.noofchequeorinstallment+" installments":"Not Available"})]}),l("div",{className:"flex gap-x-[10px]",children:[e("p",{className:"font-semibold",children:"Each Installment: "}),e("p",{className:"capitalize",children:a?"AED "+Number(a.rentalamount/a.noofchequeorinstallment).toFixed(2):"Not Available"})]})]})]}),l("div",{className:"overflow-x-auto -mx-6 mt-6",children:[e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem] p-[20px]",children:"CHEQUE MANAGEMENT DETAIL"})}),e("div",{className:"p-[20px]",children:l($,{responsive:"lg",bordered:!0,children:[e("thead",{className:"border text-black table-back",children:l("tr",{className:"w-[150px] h-[60px]",children:[e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"Sr no"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"RENTAL INCOME PERIOD"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"STATUS"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE NUMBER"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE DATE"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE AMOUNT"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"EARLY TERMINATION (RENT REFUND)"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CASH COLLECTED"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"DEPOSITED IN OWNER ACCOUNT"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"BOUNCED / UNREALISED"})]})}),l("tbody",{children:[a&&((x=a==null?void 0:a.chequeDetails)==null?void 0:x.length)>0&&(a==null?void 0:a.chequeDetails.map((n,N)=>l("tr",{className:"w-[150px] h-[100px]",children:[e("td",{className:"border border-gray-100 text-center",children:N+1}),e("td",{className:"border border-gray-100 text-center",children:n.someProperty?n.someProperty:"Not Available"}),e("td",{className:"border border-gray-100 text-center",children:n.someOtherProperty?n.someOtherProperty:"Not Available"}),e("td",{className:"border border-gray-100 text-center",children:n.chequenumbe?n.chequenumbe:"Not Available"}),e("td",{className:"border border-gray-100 text-center",children:n.chequedate?new Date(n.chequedate).toDateString():"Not Available"}),l("td",{className:"border border-gray-100 text-center",children:[n.totalamount?Number(n.totalamount).toLocaleString():"Not Available"," AED"]}),e("td",{className:"border border-gray-100 text-center",children:n.someOtherProperty?n.someOtherProperty:"Not Available"}),l("td",{className:"border border-gray-100 text-center",children:[n.totalamount?Number(n.totalamount).toLocaleString():"Not Available"," AED"]}),"                                                         ",e("td",{className:"border border-gray-100 text-center",children:"Not Available"}),e("td",{className:"border border-gray-100 text-center",children:n.someOtherProperty?n.someOtherProperty:"Not Available"})]},n._id))),l("tr",{children:[e("td",{colSpan:"5",className:"border border-gray-100 text-center font-semibold",children:"RENT TO BE REALISED"}),l("td",{className:"border border-gray-100 text-center font-semibold",children:[a.chequeDetails.map(n=>Number(n.totalamount)).reduce((n,N)=>n+N).toLocaleString()," AED"]}),"                                                ",e("td",{className:"border border-gray-100 text-center"}),l("td",{className:"border border-gray-100 text-center font-semibold",children:[a.chequeDetails.map(n=>Number(n.totalamount)).reduce((n,N)=>n+N).toLocaleString()," AED"]}),e("td",{colSpan:"2",className:"border border-gray-100 text-center"})]})]})]})})]}),e("div",{})]})})})}),G={option:(t,r)=>({...t,fontSize:"14px"})},ne=()=>{var T,S;const[t,r]=i.exports.useState({propertyid:"",filteredDates:[]}),[w,E]=i.exports.useState([]),[a,x]=i.exports.useState(""),[n,N]=i.exports.useState(""),[f,v]=i.exports.useState(!1),[g,C]=i.exports.useState([]),[p,F]=i.exports.useState(""),[L,y]=i.exports.useState({filterData:[],propertyData:{}}),O=o=>{const{contractstartdate:d,contractenddate:c}=o;let b=new Date(d),s=new Date(c);return(s.getFullYear()-b.getFullYear())*12+(s.getMonth()-b.getMonth())+" Months"},P=async o=>{console.log("Export button clicked",o);const{filterData:d,propertyData:c}=o,b=new V.Workbook,s=b.addWorksheet("Sheet1");s.mergeCells("A1:F1"),s.addRow(["TENANCY REPORTS"]),s.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),s.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const A=[];A.push(c),A.map(h=>{s.addRow([h.customername,h.communityname,h.projectname,h.unitnumber,h.buildingname])}),s.addRow([]),s.addRow([]),s.addRow([]),s.addRow(["Tenancy contract No","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period"]),d.forEach(h=>{s.addRow([h.tenantcontractno,h.guestname,new Date(h.contractstartdate).toDateString(),new Date(h.contractenddate).toDateString(),O(h)])}),s.addRow([]),s.addRow([]),s.addRow([]),s.addRow([]);const B=["RENTAL INCOME PERIOD","STATUS","CHEQUE NUMBER","CHEQUE DATE","CHEQUE AMOUNT","EARLY TERMINATION (RENT REFUND)","CASH COLLECTED","DEPOSITED IN OWNER ACCOUNT","BOUNCED / UNREALISED"];s.addRow(B),d.forEach(h=>{h.chequeDetails.map(m=>{s.addRow(["NOT AVAILIBLE",m.status,m==null?void 0:m.chequenumbe,new Date(m==null?void 0:m.chequedate).toDateString(),m==null?void 0:m.totalamount,m.state,m.totalamount,m==null?void 0:m.rentalamount,"NOT AVAILIBLE","NOT AVAILIBLE"])})}),s.getRow(2).font={bold:!0},s.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},s.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},s.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},s.getRow(16).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},s.getRow(2).font={color:{argb:"FFFFFF"}},s.getRow(3).font={color:{argb:"FFFFFF"}},s.getRow(8).font={color:{argb:"FFFFFF"}},s.getRow(16).font={color:{argb:"FFFFFF"}};const M=await b.xlsx.writeBuffer();_.exports.saveAs(new Blob([M]),"tenancy_report.xlsx")};i.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(o=>o.json()).then(o=>{const d=o==null?void 0:o.map(c=>({label:c.unitnumber+" | "+c.communityname+" | "+c.projectname+" | "+c.buildingname,value:c._id}));C(d)})},[]),i.exports.useEffect(()=>{(async()=>{if(t!=null&&t.propertyid){const c=await(await fetch(`http://dev-rare.srp.ai/property/${t==null?void 0:t.propertyid}`)).json();c&&F(c)}})()},[t==null?void 0:t.propertyid]),i.exports.useEffect(()=>{(async()=>{const c=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${t==null?void 0:t.propertyid}?contractstartdate=${newValue.startDate}&contractenddate=${newValue.endDate}`)).json();y(c==null?void 0:c.data),x(c==null?void 0:c.data)})()},[]);const[I,j]=i.exports.useState({startDate:"",endDate:""}),U=i.exports.useRef(null);i.exports.useEffect(()=>{if(a!=null&&a.length&&(t==null?void 0:t.propertyid)&&(t==null?void 0:t.startDate)&&(t==null?void 0:t.endDate)){const o=a.filter(d=>{let c=!0;return t.propertyid&&d.propertyid!==t.propertyid&&(c=!1),(d==null?void 0:d.checkindate)<(t==null?void 0:t.startDate)&&(d==null?void 0:d.checkindate)>(t==null?void 0:t.endDate)&&(c=!1),c});E(o)}},[t==null?void 0:t.propertyid,t==null?void 0:t.startDate,t==null?void 0:t.endDate,a]);const R=()=>{N(""),r({...t,filteredDates:[]}),j({startDate:null,endDate:null})},k=async o=>{if(v(!0),console.log("newValue",o),N(o),!o){r({...t,filteredDates:[]});return}const c=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${t==null?void 0:t.propertyid}?contractstartdate=${o.startDate}&contractenddate=${o.endDate}`)).json();v(!1),r({...t,filteredDates:c==null?void 0:c.data}),p.customername,p.communityname,p.projectname,p.unitnumber,p.buildingname,y({filterData:c==null?void 0:c.data,propertyData:p})};return e(u,{children:e("div",{className:"xl:col-span-2 col-span-1",children:l(z,{title:"Tenancy Reports",children:[e("div",{className:"flex flex-row-reverse",children:t&&((T=t.filteredDates)==null?void 0:T.length)>0?l("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>P(L),children:[e("img",{src:Q,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),e("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]}):null}),l("div",{children:[l("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})}),e("div",{className:"w-[100%] col-span-3",children:e(D,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:g,value:g&&n?g.filter(function(o){return o.value===(t==null?void 0:t.propertyid)}):g.filter(function(o){return o.value===(t==null?void 0:t.propertyid)}),onChange:o=>{n?R():r({...t,propertyid:o==null?void 0:o.value})},styles:G,id:"hh",placeholder:"Select and Search property"})})]}),t.propertyid&&e(u,{children:l("div",{className:"flex justify-end mt-[25px]",children:[e("div",{className:"w-[150px]",children:e("div",{className:"date-range-custom relative",children:e(H,{value:I,inputClassName:"input-class",containerClassName:"container-class",onChange:k,placeholder:"SELECT DATE"})})}),n&&e("div",{className:"flex justify-end",children:e("div",{className:"w-[90px]",children:e("div",{className:"date-range-custom relative",children:e("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:R,children:"Reset"})})})})]})})]}),f===!0?e(u,{children:e("div",{className:"flex items-center justify-center h-[100%]",children:e("img",{src:Y,width:150,height:150})})}):(S=t.filteredDates)!=null&&S.length?e(u,{children:e(W,{allBooking:t.filteredDates,propertyData:p,ref:U})}):e(u,{children:e("h6",{className:"text-base text-slate-800 dark:text-slate-300  mt-[0.5rem] mb-12",children:"No Property Data Found"})})]})})})};export{ne as default};
