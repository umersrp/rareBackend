import{R as q,j as t,F as b,r as n,b as A,e as de,ap as ce}from"./index.6f3808da.js";import{L as $}from"./Rare logo New Gif Loading.02c4dc82.js";import{E as ue}from"./excel.9601f4f9.js";import{E as Ne}from"./exceljs.min.a3671192.js";import{T as be}from"./Table.8a87c133.js";import{D as ve}from"./index.esm.b64f00ea.js";import"./jspdf.es.min.af5067ae.js";import"./html2canvas.esm.0eae2bf4.js";import"./ThemeProvider.ab7f0eab.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\tenancy-contract\\TenantReport.jsx";const Y=q.forwardRef(({indeterminate:D,...k},R)=>{const w=q.useRef(),d=R||w;return q.useEffect(()=>{d.current.indeterminate=D},[d,D]),t(b,{children:t("input",{type:"checkbox",ref:d,...k,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:34,columnNumber:9},void 0)},void 0,!1)}),fe={option:(D,k)=>({...D,fontSize:"14px"})},Ce=({title:D,allData:k})=>{var _;const[R,w]=n.exports.useState([]),[d,S]=n.exports.useState([]),Q=localStorage.getItem("isAuth"),f=JSON.parse(Q),[pe,J]=n.exports.useState();n.exports.useState(0),n.exports.useState(0),n.exports.useState();const[he,V]=n.exports.useState(),[T,W]=n.exports.useState([]),[O,U]=n.exports.useState(!1),[z,j]=n.exports.useState(!1),[G,K]=n.exports.useState({filterData:[],propertyData:{}}),[u,P]=n.exports.useState({propertyid:"",filteredDates:[]}),[X,Z]=n.exports.useState({startDate:"",endDate:""}),[L,B]=n.exports.useState("");console.log("selectedProperty",u);const ee=async e=>{j(!0),B(e);const a=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${u==null?void 0:u.propertyid}?contractstartdate=${e.startDate}&contractenddate=${e.endDate}`)).json(),i=C.find(c=>{if(c._id===u.propertyid)return c}),r={customername:i.customername,communityname:i.communityname,projectname:i.projectname,unitnumber:i.unitnumber,buildingname:i.buildingname,fromdate:e.startDate,todate:e.endDate};j(!1),P({...u,filteredDates:a==null?void 0:a.data}),S(a==null?void 0:a.data),K({filterData:a==null?void 0:a.data,propertyData:r})},[C,te]=n.exports.useState([]);n.exports.useEffect(()=>{(async()=>{const a=await(await fetch(`http://dev-rare.srp.ai/booking/pagination/pages?ownerid=${f==null?void 0:f._id}&page=0&perPage=all`)).json();a!=null&&a.booking?S([]):S([])})()},[]);const le=e=>{const o=new Set;return e.filter(a=>o.has(a._id)?!1:(o.add(a._id),!0))};n.exports.useEffect(()=>{(async()=>{try{const o=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${f==null?void 0:f._id}&sort=descending&type=customer&page=0&perPage=all`,a=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${f==null?void 0:f._id}&sort=descending&type=customer&page=0&perPage=all`,i=await fetch(o);if(!i.ok&&i.status!==400)throw new Error(`API 1 failed with status: ${i.status}`);const r=i.status===400?[]:await i.json(),c=await fetch(a);if(!c.ok&&c.status!==400)throw new Error(`API 2 failed with status: ${c.status}`);const g=c.status===400?[]:await c.json(),m=[...r,...g].map(v=>v._id),p=(await Promise.all(m.map(async v=>await(await fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${v}&page=0&perPage=all`)).json()))).flat([2]),h=le(p);w(h)}catch(o){console.error("Error fetching data:",o),setLoadingData(!1)}})()},[]),n.exports.useEffect(()=>{(async()=>{const o=R.map(async i=>{const{propertyid:r}=i;return await(await fetch(`http://dev-rare.srp.ai/property/${r}`)).json()}),a=await Promise.all(o);te(a)})()},[R]),n.exports.useEffect(()=>{if(U(!0),C.length){const e=[...new Map(C.map(a=>[a._id,a])).values()],o=e==null?void 0:e.map(a=>({label:a.unitnumber+" | "+a.communityname+" | "+a.projectname+" | "+a.buildingname,value:a._id}));U(!1),W(o)}},[C]),n.exports.useState(!1);const H=()=>{B(""),S([]),P({...u,filteredDates:[]}),Z({startDate:null,endDate:null})};n.exports.useEffect(()=>{var o;let e=0;for(let a=0;a<(d==null?void 0:d.length);a++){let i=parseInt((o=d[a])==null?void 0:o.nonight);e+=i}J(e)},[d==null?void 0:d.length]),n.exports.useEffect(()=>{let e=d.map(o=>Number(o.roomrenthostpayable)).reduce((o,a)=>o+a,0);V(e)},[d==null?void 0:d.length]),n.exports.useRef(null);const M=e=>{const{contractstartdate:o,contractenddate:a}=e;let i=new Date(o),r=new Date(a);return(r.getFullYear()-i.getFullYear())*12+(r.getMonth()-i.getMonth())+" Months"},ae=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:o})=>t("span",{children:o.indexOf(e)+1},void 0,!1,{fileName:l,lineNumber:440,columnNumber:16},void 0)},{Header:"guest name",accessor:"guestname",Cell:e=>{var o,a,i,r,c;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?((i=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:i.slice(0,15))+(((c=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:c.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:l,lineNumber:448,columnNumber:11},void 0)}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var o,a;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:462,columnNumber:11},void 0)}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var o,a,i,r;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(o=e==null?void 0:e.cell)!=null&&o.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((r=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:r.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:l,lineNumber:477,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:476,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:475,columnNumber:11},void 0)}},{Header:"checkin date",accessor:"checkindate",Cell:e=>{var o,a;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:493,columnNumber:11},void 0)}},{Header:"checkout date",accessor:"checkoutdate",Cell:e=>{var o,a;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:506,columnNumber:11},void 0)}},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var o,a;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:520,columnNumber:11},void 0)}},{Header:"RATE PER DAY",accessor:"tourismfee",Cell:e=>{var r,c,g,E,m,y,p,h,v,x,F,s;let o=(g=(c=(r=e==null?void 0:e.cell)==null?void 0:r.row)==null?void 0:c.original)!=null&&g.nonight?parseFloat((y=(m=(E=e==null?void 0:e.cell)==null?void 0:E.row)==null?void 0:m.original)==null?void 0:y.nonight):0,i=((v=(h=(p=e==null?void 0:e.cell)==null?void 0:p.row)==null?void 0:h.original)!=null&&v.roomrenthostpayable?parseFloat((s=(F=(x=e==null?void 0:e.cell)==null?void 0:x.row)==null?void 0:F.original)==null?void 0:s.roomrenthostpayable):0)/o;return t("span",{children:i?parseFloat(i).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"},void 0,!1,{fileName:l,lineNumber:537,columnNumber:11},void 0)}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var o,a;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?parseFloat((a=e==null?void 0:e.cell)==null?void 0:a.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"},void 0,!1,{fileName:l,lineNumber:553,columnNumber:11},void 0)}}],re=n.exports.useMemo(()=>ae,[]),oe=n.exports.useMemo(()=>d);A.exports.useTable({columns:re,data:oe,initialState:{pageIndex:0,pageSize:50}},A.exports.useGlobalFilter,A.exports.useSortBy,A.exports.usePagination,A.exports.useRowSelect,e=>{e.visibleColumns.push(o=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>t("div",{children:t(Y,{...a()},void 0,!1,{fileName:l,lineNumber:602,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:601,columnNumber:13},void 0),Cell:({row:a})=>t("div",{children:t(Y,{...a.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:607,columnNumber:15},void 0)},void 0,!1,{fileName:l,lineNumber:606,columnNumber:13},void 0)},...o])}),console.log("==========>",d);const ie=async e=>{console.log("Export button clicked",e);const{filterData:o,propertyData:a}=e,i=new Ne.Workbook,r=i.addWorksheet("Sheet1");r.mergeCells("A1:F1"),r.addRow(["TENANCY REPORTS"]),r.addRow([]),r.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),r.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const c=[];c.push(a),c.map(m=>{r.addRow([m.customername,m.communityname,m.projectname,m.unitnumber,m.buildingname])}),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),[["Date Range"],...c.map(m=>["from: "+m.fromdate,"to: "+m.todate])].forEach(m=>{r.addRow(m)}),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),o.forEach(m=>{const y=r.addRow(["CONTRACT DETAILS"]);r.addRow([]);const p=r.addRow(["Tenancy contract No","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period"]);r.addRow([m.tenantcontractno,m.guestname,new Date(m.contractstartdate).toDateString(),new Date(m.contractenddate).toDateString(),M(m)]);const h=r.addRow(["RENTAL INCOME PERIOD","STATUS","CHEQUE NUMBER","CHEQUE DATE","CHEQUE AMOUNT","EARLY TERMINATION (RENT REFUND)","CASH COLLECTED","DEPOSITED IN OWNER ACCOUNT","BOUNCED / UNREALISED"]);m.chequeDetails.map(s=>{r.addRow(["NOT AVAILABLE",new Date(m.contractstartdate).toDateString()>new Date?"Active":"Expire",s==null?void 0:s.chequenumbe,new Date(s==null?void 0:s.chequedate).toDateString(),"AED "+(s==null?void 0:s.totalamount),"NOT AVAILABLE","AED "+s.totalamount,s==null?void 0:s.rentalamount,"NOT AVAILABLE","NOT AVAILABLE"])}),r.addRow([]);const v=m.chequeDetails.map(s=>Number(s.totalamount)).reduce((s,I)=>s+I,0),x=r.addRow(["RENT TO BE REALISED","","",""," AED "+v.toLocaleString(),""," AED "+v.toLocaleString()]);if(v>5e3){const s={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},I={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}};x.fill=s,h.fill=s,p.fill=s,y.fill=I;const ne={argb:"FFFFFF"};[x,h,p,y].forEach(me=>{me.eachCell({includeEmpty:!0},se=>{se.font={color:ne}})})}r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([])}),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),r.getRow(2).font={bold:!0},r.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},r.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(2).font={color:{argb:"FFFFFF"}},r.getRow(4).font={color:{argb:"FFFFFF"}},r.getRow(8).font={color:{argb:"FFFFFF"}},r.getRow(7).font={color:{argb:"FFFFFF"}},r.getRow(9).font={color:{argb:"FFFFFF"}};const E=await i.xlsx.writeBuffer();saveAs(new Blob([E]),"tenancy_report.xlsx")},N=({title:e,value:o})=>t("tr",{className:"bg-slate-200 border border-gray-300 ",children:[t("td",{className:"px-2 py-2 whitespace-nowrap text-sm font-semibold text-slate-800 border-r  ",children:e},void 0,!1,{fileName:l,lineNumber:899,columnNumber:13},void 0),t("td",{className:"px-2 py-2 whitespace-nowrap text-sm text-gray-500 capitalize bg-white",children:o},void 0,!1,{fileName:l,lineNumber:900,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:898,columnNumber:9},void 0);return t(b,{children:t("div",{className:"xl:col-span-2 col-span-1",children:t(de,{title:"Complete Tenancy Details",children:[t("div",{className:"flex flex-row-reverse",children:u&&((_=u.filteredDates)==null?void 0:_.length)?t("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>ie(G),children:[t("img",{src:ue,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:l,lineNumber:913,columnNumber:33},void 0),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:l,lineNumber:914,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:912,columnNumber:29},void 0):null},void 0,!1,{fileName:l,lineNumber:909,columnNumber:9},void 0),t("div",{children:[t("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[O===!0?null:t(b,{children:t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:l,lineNumber:929,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:928,columnNumber:19},void 0)},void 0,!1),t("div",{className:"w-[100%] col-span-3",children:O===!0?t(b,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:$,width:150,height:150},void 0,!1,{fileName:l,lineNumber:942,columnNumber:23},void 0)},void 0,!1,{fileName:l,lineNumber:941,columnNumber:21},void 0)},void 0,!1):t(b,{children:t(ce,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:T,value:T&&L?T.filter(function(e){return e.value===(u==null?void 0:u.propertyid)}):T.filter(function(e){return e.value===(u==null?void 0:u.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{L?H():P({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:fe,id:"hh"},void 0,!1,{fileName:l,lineNumber:947,columnNumber:21},void 0)},void 0,!1)},void 0,!1,{fileName:l,lineNumber:935,columnNumber:15},void 0)]},void 0,!0,{fileName:l,lineNumber:922,columnNumber:13},void 0),"  ",(u==null?void 0:u.propertyid)&&t(b,{children:t("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(ve,{value:X,inputClassName:"input-class",containerClassName:"container-class",onChange:ee},void 0,!1,{fileName:l,lineNumber:990,columnNumber:23},void 0)},void 0,!1,{fileName:l,lineNumber:989,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:988,columnNumber:19},void 0),L&&t(b,{children:t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",onClick:H,children:"Reset"},void 0,!1,{fileName:l,lineNumber:1003,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:1002,columnNumber:27},void 0)},void 0,!1,{fileName:l,lineNumber:1001,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:1e3,columnNumber:23},void 0)},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:987,columnNumber:17},void 0)},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:921,columnNumber:11},void 0),console.log("kkkk",d.map(e=>e.chequeDetails.map(o=>JSON.parse(Number(o.totalamount))).reduce((o,a)=>o+a,0))),z===!0?t(b,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:$,width:150,height:150},void 0,!1,{fileName:l,lineNumber:1052,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:1051,columnNumber:15},void 0)},void 0,!1):t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"overflow-hidden p-[20px] ",children:t("div",{className:"w-[100%] col-span-3",children:d&&d.length>0?d.map(e=>{var o;return t(b,{children:[" ",t("div",{className:"w-[100%] col-span-3",children:[t("div",{className:"w-[100%] col-span-3 mb-4",children:t("div",{className:"borderBottom"},void 0,!1,{fileName:l,lineNumber:1067,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:1066,columnNumber:31},void 0),t("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CONTRACT DETAILS"},void 0,!1,{fileName:l,lineNumber:1069,columnNumber:31},void 0)]},void 0,!0,{fileName:l,lineNumber:1065,columnNumber:29},void 0),t("div",{className:"mt-[25px] flex justify-between",children:[t("div",{className:"overflow-hidden p-2 w-[35%]",children:t("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[t("thead",{children:t("tr",{children:t("h4",{className:"text-[16px] text-slate-800",children:"PROPERTY DETAILS"},void 0,!1,{fileName:l,lineNumber:1080,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:1079,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:1078,columnNumber:17},void 0),t("tbody",{children:[t(N,{title:"Property Code",value:e.propertycode?e.propertycode:"Not Available"},void 0,!1,{fileName:l,lineNumber:1084,columnNumber:21},void 0),t(N,{title:"Landlord Name",value:e.propertyid.customername?e.propertyid.customername:"Not Available"},void 0,!1,{fileName:l,lineNumber:1085,columnNumber:21},void 0),t(N,{title:"Community Name",value:e.propertyid.communityname?e.propertyid.communityname:"Not Available"},void 0,!1,{fileName:l,lineNumber:1086,columnNumber:21},void 0),t(N,{title:"Project Name",value:e.propertyid.projectname?e.propertyid.projectname:"Not Available"},void 0,!1,{fileName:l,lineNumber:1087,columnNumber:21},void 0),t(N,{title:"Apartment No",value:e.propertyid.unitnumber?e.propertyid.unitnumber:"Not Available"},void 0,!1,{fileName:l,lineNumber:1088,columnNumber:21},void 0),t(N,{title:"Building No",value:e.propertyid.buildingname?e.propertyid.buildingname:"Not Available"},void 0,!1,{fileName:l,lineNumber:1089,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:1083,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:1077,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:1076,columnNumber:29},void 0),t("div",{className:"overflow-hidden p-2 w-[35%]",children:t("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[t("h4",{className:"text-[16px] text-slate-800",children:"TENANCY DETAILS "},void 0,!1,{fileName:l,lineNumber:1095,columnNumber:13},void 0),t("tbody",{className:"transition-all duration-1000 ease-in",children:[t(N,{title:"Tenancy contract No",value:e.tenantcontractno?e.tenantcontractno:"Not Available"},void 0,!1,{fileName:l,lineNumber:1098,columnNumber:21},void 0),t(N,{title:"Tenant Name",value:e.guestname?e.guestname:"Not Available"},void 0,!1,{fileName:l,lineNumber:1099,columnNumber:21},void 0),t(N,{title:"Tenancy Start Date",value:e?new Date(e.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:1100,columnNumber:21},void 0),t(N,{title:"Tenancy Expiry Date",value:e?new Date(e.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:1101,columnNumber:21},void 0),t(N,{title:"Tenancy Period",value:e?M(e):"Not Available"},void 0,!1,{fileName:l,lineNumber:1102,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:1097,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:1094,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:1093,columnNumber:9},void 0),t("div",{className:"overflow-hidden p-2 w-[30%]",children:t("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[t("h4",{className:"text-[16px] text-slate-800",children:"AMOUNTS DETAILS "},void 0,!1,{fileName:l,lineNumber:1108,columnNumber:13},void 0),t("tbody",{className:"transition-all duration-1000 ease-in",children:[t(N,{title:"Rental Amount",value:e.rentalamount?"AED "+e.rentalamount:"Not Available"},void 0,!1,{fileName:l,lineNumber:1111,columnNumber:21},void 0),t(N,{title:"Payment Terms",value:e.noofchequeorinstallment?e.noofchequeorinstallment+" installments":"Not Available"},void 0,!1,{fileName:l,lineNumber:1112,columnNumber:21},void 0),t(N,{title:"Each Installment",value:e?"AED "+(Number(e.rentalamount)/e.noofchequeorinstallment).toFixed(2):"Not Available"},void 0,!1,{fileName:l,lineNumber:1113,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:1110,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:1107,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:1106,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:1075,columnNumber:29},void 0),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"p-[20px]",children:t(be,{responsive:"lg",bordered:!0,children:[t("thead",{className:"border bg-black-200 text-black",children:t("tr",{className:"w-[150px] h-[60px]",children:[t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"Sr no"},void 0,!1,{fileName:l,lineNumber:1123,columnNumber:39},void 0),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"RENTAL INCOME PERIOD"},void 0,!1,{fileName:l,lineNumber:1126,columnNumber:39},void 0),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"STATUS"},void 0,!1,{fileName:l,lineNumber:1129,columnNumber:39},void 0),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE NUMBER"},void 0,!1,{fileName:l,lineNumber:1132,columnNumber:39},void 0),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE DATE"},void 0,!1,{fileName:l,lineNumber:1135,columnNumber:39},void 0),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE AMOUNT"},void 0,!1,{fileName:l,lineNumber:1138,columnNumber:39},void 0),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"EARLY TERMINATION (RENT REFUND)"},void 0,!1,{fileName:l,lineNumber:1141,columnNumber:39},void 0),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CASH COLLECTED"},void 0,!1,{fileName:l,lineNumber:1144,columnNumber:39},void 0),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"DEPOSITED IN OWNER ACCOUNT"},void 0,!1,{fileName:l,lineNumber:1147,columnNumber:39},void 0),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"BOUNCED / UNREALISED"},void 0,!1,{fileName:l,lineNumber:1150,columnNumber:39},void 0)]},void 0,!0,{fileName:l,lineNumber:1122,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:1121,columnNumber:35},void 0),t("tbody",{children:[e&&((o=e==null?void 0:e.chequeDetails)==null?void 0:o.length)>0&&e.chequeDetails.map((a,i)=>t("tr",{className:"w-[150px] h-[100px]",children:[t("td",{className:"border border-gray-100 text-center",children:i+1},void 0,!1,{fileName:l,lineNumber:1163,columnNumber:43},void 0),t("td",{className:"border border-gray-100 text-center",children:a.someOtherProperty?a.someOtherProperty:"Not Available"},void 0,!1,{fileName:l,lineNumber:1167,columnNumber:43},void 0),t("td",{className:"border border-gray-100 text-center",children:new Date(e.contractenddate).toDateString()>new Date?"Active":"Expire"},void 0,!1,{fileName:l,lineNumber:1173,columnNumber:43},void 0),t("td",{className:"border border-gray-100 text-center",children:a.chequenumbe?a.chequenumbe:"Not Available"},void 0,!1,{fileName:l,lineNumber:1180,columnNumber:43},void 0),t("td",{className:"border border-gray-100 text-center",children:a.chequedate?new Date(a.chequedate).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:1185,columnNumber:43},void 0),t("td",{className:"border border-gray-100 text-center",children:a.totalamount?"AED "+a.totalamount:"Not Available"},void 0,!1,{fileName:l,lineNumber:1192,columnNumber:43},void 0),t("td",{className:"border border-gray-100 text-center",children:a.someOtherProperty?a.someOtherProperty:"Not Available"},void 0,!1,{fileName:l,lineNumber:1197,columnNumber:43},void 0),t("td",{className:"border border-gray-100 text-center",children:a.totalamount?"AED "+a.totalamount:"Not Available"},void 0,!1,{fileName:l,lineNumber:1202,columnNumber:43},void 0),t("td",{className:"border border-gray-100 text-center",children:a.chequenumbeqq?a.chequenumbeqqq:"Not Available"},void 0,!1,{fileName:l,lineNumber:1207,columnNumber:43},void 0),t("td",{className:"border border-gray-100 text-center",children:a.chequenumbesss?a.chequenumbesss:"Not Available"},void 0,!1,{fileName:l,lineNumber:1212,columnNumber:43},void 0)]},a._id,!0,{fileName:l,lineNumber:1159,columnNumber:41},void 0)),t("tr",{children:[t("td",{colSpan:"5",className:"border border-gray-100 text-center",children:"Total"},void 0,!1,{fileName:l,lineNumber:1220,columnNumber:39},void 0),t("td",{className:"border border-gray-100 text-center",children:["AED"," ",e.chequeDetails.map(a=>JSON.parse(Number(a.totalamount))).reduce((a,i)=>a+i,0)]},void 0,!0,{fileName:l,lineNumber:1226,columnNumber:39},void 0),t("td",{className:"border border-gray-100 text-center"},void 0,!1,{fileName:l,lineNumber:1239,columnNumber:39},void 0),t("td",{className:"border border-gray-100 text-center",children:["AED"," ",e.chequeDetails.map(a=>JSON.parse(Number(a.totalamount))).reduce((a,i)=>a+i,0)]},void 0,!0,{fileName:l,lineNumber:1240,columnNumber:39},void 0),t("td",{colSpan:"2",className:"border border-gray-100 text-center"},void 0,!1,{fileName:l,lineNumber:1251,columnNumber:39},void 0)]},void 0,!0,{fileName:l,lineNumber:1219,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:1155,columnNumber:35},void 0)]},void 0,!0,{fileName:l,lineNumber:1120,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:1119,columnNumber:31},void 0)},void 0,!1,{fileName:l,lineNumber:1118,columnNumber:29},void 0)]},void 0,!0)}):t(b,{children:O===!0?null:t(b,{children:t("div",{className:"pl-6",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:l,lineNumber:1268,columnNumber:31},void 0)},void 0,!1,{fileName:l,lineNumber:1267,columnNumber:29},void 0)},void 0,!1)},void 0,!1)},void 0,!1,{fileName:l,lineNumber:1059,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:1058,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:1057,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:1056,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:908,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:907,columnNumber:7},void 0)},void 0,!1)};export{Ce as default};
