import{R as _,r as i,j as e,c,F as f,f as z,aq as G,b$ as J}from"./index.89e71075.js";import{D as K}from"./index.esm.6c2bbf03.js";import"./jspdf.es.min.6d9b0c0a.js";import"./html2canvas.esm.0eae2bf4.js";import{T as X}from"./Table.e676e03e.js";import{E as Z}from"./excel.9601f4f9.js";import{L as ee}from"./Rare logo New Gif Loading.02c4dc82.js";import{E as te}from"./exceljs.min.7957c725.js";import"./index.186db273.js";import"./ThemeProvider.a9e11251.js";const re=_.forwardRef(({allBooking:t,propertyData:b},R)=>{const E=r=>{const{contractstartdate:h,contractenddate:o}=r;let N=new Date(h),y=new Date(o);return(y.getFullYear()-N.getFullYear())*12+(y.getMonth()-N.getMonth())+" Months"};i.exports.useState(0),i.exports.useState(0),i.exports.useState(0);const d=({title:r,value:h})=>c("tr",{className:"bg-slate-200 border border-gray-300 ",children:[e("td",{className:"px-2 py-2 whitespace-nowrap text-sm font-semibold text-slate-800 border-r  ",children:r}),e("td",{className:"px-2 py-2 whitespace-nowrap text-sm text-gray-500 capitalize bg-white",children:h})]});return e("div",{children:t&&t.length>0&&t.map(r=>{var h;return c("div",{ref:R,children:[e("div",{className:"w-[100%] col-span-3 mb-4",children:e("div",{className:"borderBottom"})}),e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CONTRACT DETAILS"})}),c("div",{className:"mt-[25px] flex justify-between",children:[e("div",{className:"overflow-hidden p-2 w-[35%]",children:c("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[e("thead",{children:e("tr",{children:e("h4",{className:"text-[16px] text-slate-800",children:"PROPERTY DETAILS"})})}),c("tbody",{children:[e(d,{title:"Property Code",value:r.propertycode?r.propertycode:"Not Available"}),e(d,{title:"Landlord Name",value:r.propertyid.customername?r.propertyid.customername:"Not Available"}),e(d,{title:"Community Name",value:r.propertyid.communityname?r.propertyid.communityname:"Not Available"}),e(d,{title:"Project Name",value:r.propertyid.projectname?r.propertyid.projectname:"Not Available"}),e(d,{title:"Apartment No",value:r.propertyid.unitnumber?r.propertyid.unitnumber:"Not Available"}),e(d,{title:"Building No",value:r.propertyid.buildingname?r.propertyid.buildingname:"Not Available"})]})]})}),e("div",{className:"overflow-hidden p-2 w-[35%]",children:c("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[e("h4",{className:"text-[16px] text-slate-800",children:"TENANCY DETAILS "}),c("tbody",{className:"transition-all duration-1000 ease-in",children:[e(d,{title:"Tenancy contract No",value:r.tenantcontractno?r.tenantcontractno:"Not Available"}),e(d,{title:"Tenant Name",value:r.guestname?r.guestname:"Not Available"}),e(d,{title:"Tenancy Start Date",value:r?new Date(r.contractstartdate).toDateString():"Not Available"}),e(d,{title:"Tenancy Expiry Date",value:r?new Date(r.contractenddate).toDateString():"Not Available"}),e(d,{title:"Tenancy Period",value:r?E(r):"Not Available"})]})]})}),e("div",{className:"overflow-hidden p-2 w-[30%]",children:c("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[e("h4",{className:"text-[16px] text-slate-800",children:"AMOUNTS DETAILS "}),c("tbody",{className:"transition-all duration-1000 ease-in",children:[e(d,{title:"Rental Amount",value:r?"AED "+r.rentalamount:"Not Available"}),e(d,{title:"Payment Terms",value:r?r.noofchequeorinstallment+" installments":"Not Available"}),e(d,{title:"Each Installment",value:r?"AED "+(Number(r.rentalamount)/r.noofchequeorinstallment).toFixed(2):"Not Available"})]})]})})]}),c("div",{className:"overflow-x-auto -mx-6 mt-6",children:[e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem] p-[20px]",children:"CHEQUE MANAGEMENT DETAIL"})}),e("div",{className:"p-[20px]",children:c(X,{responsive:"lg",bordered:!0,children:[e("thead",{className:"border text-black table-back",children:c("tr",{className:"w-[150px] h-[60px]",children:[e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"Sr no"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"RENTAL INCOME PERIOD"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"STATUS"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE NUMBER"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE DATE"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE AMOUNT"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"EARLY TERMINATION (RENT REFUND)"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CASH COLLECTED"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"DEPOSITED IN OWNER ACCOUNT"}),e("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"BOUNCED / UNREALISED"})]})}),c("tbody",{children:[r&&((h=r==null?void 0:r.chequeDetails)==null?void 0:h.length)>0&&(r==null?void 0:r.chequeDetails.map((o,N)=>c("tr",{className:"w-[150px] h-[100px]",children:[e("td",{className:"border border-gray-100 text-center",children:N+1}),e("td",{className:"border border-gray-100 text-center",children:o.someProperty?o.someProperty:"Not Available"}),e("td",{className:"border border-gray-100 text-center",children:o.someOtherProperty?o.someOtherProperty:"Not Available"}),e("td",{className:"border border-gray-100 text-center",children:o.chequenumbe?o.chequenumbe:"Not Available"}),e("td",{className:"border border-gray-100 text-center",children:o.chequedate?new Date(o.chequedate).toDateString():"Not Available"}),c("td",{className:"border border-gray-100 text-center",children:[o.totalamount?Number(o.totalamount).toLocaleString():"Not Available"," AED"]}),e("td",{className:"border border-gray-100 text-center",children:o.someOtherProperty?o.someOtherProperty:"Not Available"}),c("td",{className:"border border-gray-100 text-center",children:[o.totalamount?Number(o.totalamount).toLocaleString():"Not Available"," AED"]}),"                                                         ",e("td",{className:"border border-gray-100 text-center",children:"Not Available"}),e("td",{className:"border border-gray-100 text-center",children:o.someOtherProperty?o.someOtherProperty:"Not Available"})]},o._id))),c("tr",{children:[e("td",{colSpan:"5",className:"border border-gray-100 text-center font-semibold",children:"RENT TO BE REALISED"}),c("td",{className:"border border-gray-100 text-center font-semibold",children:[r.chequeDetails.map(o=>Number(o.totalamount)).reduce((o,N)=>o+N,0).toLocaleString()," AED"]}),"                                                ",e("td",{className:"border border-gray-100 text-center"}),c("td",{className:"border border-gray-100 text-center font-semibold",children:[r.chequeDetails.map(o=>Number(o.totalamount)).reduce((o,N)=>o+N,0).toLocaleString()," AED"]}),e("td",{colSpan:"2",className:"border border-gray-100 text-center"})]})]})]})})]}),e("div",{})]})})})}),ae={option:(t,b)=>({...t,fontSize:"14px"})},ue=()=>{var S,C;const[t,b]=i.exports.useState({propertyid:"",filteredDates:[]}),[R,E]=i.exports.useState([]),[d,r]=i.exports.useState(""),[h,o]=i.exports.useState(""),[N,y]=i.exports.useState(!1),[g,I]=i.exports.useState([]),[u,U]=i.exports.useState(""),[j,D]=i.exports.useState({filterData:[],propertyData:{}}),k=n=>{const{contractstartdate:p,contractenddate:l}=n;let x=new Date(p),a=new Date(l);return(a.getFullYear()-x.getFullYear())*12+(a.getMonth()-x.getMonth())+" Months"},B=async n=>{console.log("Export button clicked",n);const{filterData:p,propertyData:l}=n,x=new te.Workbook,a=x.addWorksheet("Sheet1");a.mergeCells("A1:F1"),a.addRow(["TENANCY REPORTS"]),a.addRow([]),a.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),a.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const w=[];w.push(l),w.map(m=>{a.addRow([m.customername,m.communityname,m.projectname,m.unitnumber,m.buildingname])}),a.addRow([]),a.addRow([]),a.addRow([]),p.forEach(m=>{const F=a.addRow(["CONTRACT DETAILS"]);a.addRow([]);const L=a.addRow(["Tenancy contract No","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period"]);a.addRow([m.tenantcontractno,m.guestname,new Date(m.contractstartdate).toDateString(),new Date(m.contractenddate).toDateString(),k(m)]),a.addRow([]);const O=a.addRow(["RENTAL INCOME PERIOD","STATUS","CHEQUE NUMBER","CHEQUE DATE","CHEQUE AMOUNT","EARLY TERMINATION (RENT REFUND)","CASH COLLECTED","DEPOSITED IN OWNER ACCOUNT","BOUNCED / UNREALISED"]);m.chequeDetails.map(s=>{a.addRow(["NOT AVAILABLE","NOT AVAILABLE",s==null?void 0:s.chequenumbe,new Date(s==null?void 0:s.chequedate).toDateString(),(s==null?void 0:s.totalamount)+" AED",s.state,s.totalamount+" AED",s==null?void 0:s.rentalamount,"NOT AVAILABLE","NOT AVAILABLE"])}),a.addRow([]);const A=m.chequeDetails.map(s=>Number(s.totalamount)).reduce((s,v)=>s+v,0),P=a.addRow(["RENT TO BE REALISED","","","",""+A.toLocaleString()+" AED","",""+A.toLocaleString()+" AED"]);if(A>5e3){const s={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},v={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}};P.fill=s,O.fill=s,L.fill=s,F.fill=v;const Q={argb:"FFFFFF"};[P,O,L,F].forEach(V=>{V.eachCell({includeEmpty:!0},W=>{W.font={color:Q}})})}a.addRow([]),a.addRow([]),a.addRow([]),a.addRow([])}),a.addRow([]),a.addRow([]),a.addRow([]),a.addRow([]),a.getRow(2).font={bold:!0},a.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},a.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},a.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},a.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},a.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},a.getRow(2).font={color:{argb:"FFFFFF"}},a.getRow(4).font={color:{argb:"FFFFFF"}},a.getRow(8).font={color:{argb:"FFFFFF"}},a.getRow(7).font={color:{argb:"FFFFFF"}},a.getRow(9).font={color:{argb:"FFFFFF"}};const $=await x.xlsx.writeBuffer();J.exports.saveAs(new Blob([$]),"tenancy_report.xlsx")};i.exports.useEffect(()=>{fetch("http://portals.rarehomesgroup.com/property").then(n=>n.json()).then(n=>{const p=n==null?void 0:n.map(l=>({label:l.unitnumber+" | "+l.communityname+" | "+l.projectname+" | "+l.buildingname,value:l._id}));I(p)})},[]),i.exports.useEffect(()=>{(async()=>{if(t!=null&&t.propertyid){const l=await(await fetch(`http://portals.rarehomesgroup.com/property/${t==null?void 0:t.propertyid}`)).json();l&&U(l)}})()},[t==null?void 0:t.propertyid]),i.exports.useEffect(()=>{(async()=>{const l=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/report/${t==null?void 0:t.propertyid}?contractstartdate=${newValue.startDate}&contractenddate=${newValue.endDate}`)).json();D(l==null?void 0:l.data),r(l==null?void 0:l.data)})()},[]);const[M,q]=i.exports.useState({startDate:"",endDate:""}),H=i.exports.useRef(null);i.exports.useEffect(()=>{if(d!=null&&d.length&&(t==null?void 0:t.propertyid)&&(t==null?void 0:t.startDate)&&(t==null?void 0:t.endDate)){const n=d.filter(p=>{let l=!0;return t.propertyid&&p.propertyid!==t.propertyid&&(l=!1),(p==null?void 0:p.checkindate)<(t==null?void 0:t.startDate)&&(p==null?void 0:p.checkindate)>(t==null?void 0:t.endDate)&&(l=!1),l});E(n)}},[t==null?void 0:t.propertyid,t==null?void 0:t.startDate,t==null?void 0:t.endDate,d]);const T=()=>{o(""),b({...t,filteredDates:[]}),q({startDate:null,endDate:null})},Y=async n=>{if(y(!0),console.log("newValue",n),o(n),!n){b({...t,filteredDates:[]});return}const l=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/report/${t==null?void 0:t.propertyid}?contractstartdate=${n.startDate}&contractenddate=${n.endDate}`)).json();y(!1),b({...t,filteredDates:l==null?void 0:l.data}),u.customername,u.communityname,u.projectname,u.unitnumber,u.buildingname,console.log("lllll",u),D({filterData:l==null?void 0:l.data,propertyData:u})};return e(f,{children:e("div",{className:"xl:col-span-2 col-span-1",children:c(z,{title:"Tenancy Reports",children:[e("div",{className:"flex flex-row-reverse",children:t&&((S=t.filteredDates)==null?void 0:S.length)>0?c("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>B(j),children:[e("img",{src:Z,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),e("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]}):null}),c("div",{children:[c("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[e("div",{className:"w-[100%] col-span-3",children:e("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})}),e("div",{className:"w-[100%] col-span-3",children:e(G,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:g,value:g&&h?g.filter(function(n){return n.value===(t==null?void 0:t.propertyid)}):g.filter(function(n){return n.value===(t==null?void 0:t.propertyid)}),onChange:n=>{h?T():b({...t,propertyid:n==null?void 0:n.value})},styles:ae,id:"hh",placeholder:"Select and Search property"})})]}),t.propertyid&&e(f,{children:c("div",{className:"flex justify-end mt-[25px]",children:[e("div",{className:"w-[150px]",children:e("div",{className:"date-range-custom relative",children:e(K,{value:M,inputClassName:"input-class",containerClassName:"container-class",onChange:Y,placeholder:"SELECT DATE"})})}),h&&e("div",{className:"flex justify-end",children:e("div",{className:"w-[90px]",children:e("div",{className:"date-range-custom relative",children:e("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:T,children:"Reset"})})})})]})})]}),N===!0?e(f,{children:e("div",{className:"flex items-center justify-center h-[100%]",children:e("img",{src:ee,width:150,height:150})})}):(C=t.filteredDates)!=null&&C.length?e(f,{children:e(re,{allBooking:t.filteredDates,propertyData:u,ref:H})}):e(f,{children:e("h6",{className:"text-base text-slate-800 dark:text-slate-300  mt-[0.5rem] mb-12",children:"No Property Data Found"})})]})})})};export{ue as default};
