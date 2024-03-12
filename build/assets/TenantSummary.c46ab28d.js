import{R as L,j as t,F as u,r as s,b as S,e as Ne,ap as be}from"./index.f4ae43fb.js";import{L as Q}from"./Rare logo New Gif Loading.02c4dc82.js";import{T as pe}from"./Table.26468bfb.js";import{D as fe}from"./index.esm.ac50d7d8.js";import"./jspdf.es.min.4535123a.js";import"./html2canvas.esm.0eae2bf4.js";import{E as X}from"./excel.9601f4f9.js";import{E as ve}from"./exceljs.min.f6461516.js";import"./ThemeProvider.b2c479e9.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\tenancy-contract\\summaryReport\\TenantSummary.jsx";const Z=L.forwardRef(({indeterminate:h,...A},F)=>{const C=L.useRef(),n=F||C;return L.useEffect(()=>{n.current.indeterminate=h},[n,h]),t(u,{children:t("input",{type:"checkbox",ref:n,...A,className:"table-checkbox"},void 0,!1,{fileName:a,lineNumber:35,columnNumber:17},void 0)},void 0,!1)}),he={option:(h,A)=>({...h,fontSize:"14px"})},we=({title:h,allData:A})=>{var Y,G,z,W,q,J,K;const[F,C]=s.exports.useState([]),[n,k]=s.exports.useState([]),ee=localStorage.getItem("isAuth"),f=JSON.parse(ee),[ge,te]=s.exports.useState();s.exports.useState(0),s.exports.useState(0),s.exports.useState();const[xe,ae]=s.exports.useState(),[E,re]=s.exports.useState([]),[w,O]=s.exports.useState(!1),[le,I]=s.exports.useState(!1);s.exports.useState();const[_,$]=s.exports.useState({filterData:[],propertyData:{}}),[d,T]=s.exports.useState({propertyid:"",filteredDates:[]}),[oe,ie]=s.exports.useState({startDate:"",endDate:""}),[P,M]=s.exports.useState(""),[g,ne]=s.exports.useState([]);console.log("selectedProperty",d);const se=async e=>{I(!0),M(e);const r=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${d.propertyid}?contractstartdate=${e.startDate}&contractenddate=${e.endDate}`)).json(),i=g.find(m=>{if(m._id===d.propertyid)return m}),l={customername:i.customername,communityname:i.communityname,projectname:i.projectname,unitnumber:i.unitnumber,buildingname:i.buildingname,fromdate:e.startDate,todate:e.endDate};console.log("@@@@@11",l),I(!1),T({...d,filteredDates:r==null?void 0:r.data}),$({filterData:r==null?void 0:r.data,propertyData:l}),k(r==null?void 0:r.data)};s.exports.useEffect(()=>{(async()=>{const r=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/tenantsummaryreport/${d.propertyid}`)).json();k(r==null?void 0:r.data);const i=g.find(m=>{if(m._id===d.propertyid)return m}),l={customername:i.customername,communityname:i.communityname,projectname:i.projectname,unitnumber:i.unitnumber,buildingname:i.buildingname};$({filterData:r==null?void 0:r.data,propertyData:l})})()},[d.propertyid]);const ce=e=>{const o=new Set;return e.filter(r=>o.has(r._id)?!1:(o.add(r._id),!0))};s.exports.useEffect(()=>{(async()=>{try{const o=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${f==null?void 0:f._id}&sort=descending&type=customer&page=0&perPage=all`,r=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${f==null?void 0:f._id}&sort=descending&type=customer&page=0&perPage=all`,i=await fetch(o);if(!i.ok&&i.status!==400)throw new Error(`API 1 failed with status: ${i.status}`);const l=i.status===400?[]:await i.json(),m=await fetch(r);if(!m.ok&&m.status!==400)throw new Error(`API 2 failed with status: ${m.status}`);const N=m.status===400?[]:await m.json(),y=[...l,...N].map(p=>p._id),c=(await Promise.all(y.map(async p=>await(await fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${p}&page=0&perPage=all`)).json()))).flat([2]),b=ce(c);C(b)}catch(o){console.error("Error fetching data:",o),setLoadingData(!1)}})()},[]),s.exports.useEffect(()=>{(async()=>{const o=F.map(async i=>{const{propertyid:l}=i;return await(await fetch(`http://dev-rare.srp.ai/property/${l}`)).json()}),r=await Promise.all(o);ne(r)})()},[F]),s.exports.useEffect(()=>{if(O(!0),g.length){const e=[...new Map(g.map(r=>[r._id,r])).values()],o=e==null?void 0:e.map(r=>({label:r.unitnumber+" | "+r.communityname+" | "+r.projectname+" | "+r.buildingname,value:r._id}));O(!1),re(o)}},[g]),s.exports.useState(!1);const H=async()=>{M(""),k([]),T({propertyid:""}),ie({startDate:null,endDate:null})};s.exports.useEffect(()=>{var o;let e=0;for(let r=0;r<(n==null?void 0:n.length);r++){let i=parseInt((o=n[r])==null?void 0:o.nonight);e+=i}te(e)},[n==null?void 0:n.length]),s.exports.useEffect(()=>{let e=n.map(o=>Number(o.roomrenthostpayable)).reduce((o,r)=>o+r,0);ae(e)},[n==null?void 0:n.length]),s.exports.useRef(null);const B=e=>{const{contractstartdate:o,contractenddate:r}=e;let i=new Date(o),l=new Date(r);return(l.getFullYear()-i.getFullYear())*12+(l.getMonth()-i.getMonth())+" Months"},U=async e=>{console.log("Export button clicked",e);const{filterData:o,propertyData:r}=e,i=new ve.Workbook,l=i.addWorksheet("Sheet1");l.mergeCells("A1:F1"),l.addRow(["TENANCY REPORTS"]),l.addRow([]),l.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),l.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const m=[];m.push(r),m.map(c=>{l.addRow([c.customername,c.communityname,c.projectname,c.unitnumber,c.buildingname])}),l.addRow([]),l.addRow([]),l.addRow([]),l.addRow(["CONTRACT DETAILS"]),l.addRow([]),l.addRow(["Tenancy contract No","Status","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period","RENTAL INCOME"]),l.addRow([]),o.forEach(c=>{l.addRow([c.tenantcontractno,new Date(c.contractenddate)>new Date?"Active":"Expired",c.guestname,new Date(c.contractstartdate).toDateString(),new Date(c.contractenddate).toDateString(),B(c),"AED "+c.rentalamount])}),l.addRow([]),l.addRow([]),l.addRow([]);const N=o.map(c=>Number(c.rentalamount)).reduce((c,b)=>c+b,0),v=l.addRow(["GROSS RENT INCOME","","","","","","AED "+N.toLocaleString()]);if(N>5e3){const c={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};v.fill=c;const b={argb:"FFFFFF"};[v].forEach(p=>{p.eachCell({includeEmpty:!0},R=>{R.font={color:b}})})}l.addRow([]),l.addRow([]),l.addRow([]),l.addRow([]),l.addRow([]),l.addRow([]),l.addRow([]),l.addRow([]),l.getRow(2).font={bold:!0},l.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},l.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},l.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},l.getRow(14).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},l.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},l.getRow(11).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},l.getRow(2).font={color:{argb:"FFFFFF"}},l.getRow(4).font={color:{argb:"FFFFFF"}},l.getRow(14).font={color:{argb:"FFFFFF"}},l.getRow(11).font={color:{argb:"FFFFFF"}},l.getRow(7).font={color:{argb:"FFFFFF"}},l.getRow(8).font={color:{argb:"000000"}},l.getRow(9).font={color:{argb:"FFFFFF"}};const D=await i.xlsx.writeBuffer();saveAs(new Blob([D]),"tenancy_Summery.xlsx")},me=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:o})=>t("span",{children:o.indexOf(e)+1},void 0,!1,{fileName:a,lineNumber:624,columnNumber:24},void 0)},{Header:"guest name",accessor:"guestname",Cell:e=>{var o,r,i,l,m;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?((i=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:i.slice(0,15))+(((m=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:m.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:631,columnNumber:24},void 0)}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var o,r;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?new Date((r=e==null?void 0:e.cell)==null?void 0:r.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:638,columnNumber:24},void 0)}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var o,r,i,l;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(o=e==null?void 0:e.cell)!=null&&o.value?((r=e==null?void 0:e.cell)==null?void 0:r.value.slice(0,15))+(((l=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:l.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:a,lineNumber:648,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:647,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:646,columnNumber:21},void 0)}},{Header:"checkin date",accessor:"checkindate",Cell:e=>{var o,r;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?new Date((r=e==null?void 0:e.cell)==null?void 0:r.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:660,columnNumber:24},void 0)}},{Header:"checkout date",accessor:"checkoutdate",Cell:e=>{var o,r;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?new Date((r=e==null?void 0:e.cell)==null?void 0:r.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:667,columnNumber:24},void 0)}},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var o,r;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(r=e==null?void 0:e.cell)==null?void 0:r.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:675,columnNumber:24},void 0)}},{Header:"RATE PER DAY",accessor:"tourismfee",Cell:e=>{var l,m,N,v,y,D,c,b,p,R,j,V;let o=(N=(m=(l=e==null?void 0:e.cell)==null?void 0:l.row)==null?void 0:m.original)!=null&&N.nonight?parseFloat((D=(y=(v=e==null?void 0:e.cell)==null?void 0:v.row)==null?void 0:y.original)==null?void 0:D.nonight):0,i=((p=(b=(c=e==null?void 0:e.cell)==null?void 0:c.row)==null?void 0:b.original)!=null&&p.roomrenthostpayable?parseFloat((V=(j=(R=e==null?void 0:e.cell)==null?void 0:R.row)==null?void 0:j.original)==null?void 0:V.roomrenthostpayable):0)/o;return t("span",{children:i?parseFloat(i).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"},void 0,!1,{fileName:a,lineNumber:687,columnNumber:21},void 0)}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var o,r;return t("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?parseFloat((r=e==null?void 0:e.cell)==null?void 0:r.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"},void 0,!1,{fileName:a,lineNumber:696,columnNumber:21},void 0)}}],de=s.exports.useMemo(()=>me,[]),ue=s.exports.useMemo(()=>n);S.exports.useTable({columns:de,data:ue,initialState:{pageIndex:0,pageSize:50}},S.exports.useGlobalFilter,S.exports.useSortBy,S.exports.usePagination,S.exports.useRowSelect,e=>{e.visibleColumns.push(o=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:r})=>t("div",{children:t(Z,{...r()},void 0,!1,{fileName:a,lineNumber:738,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:737,columnNumber:25},void 0),Cell:({row:r})=>t("div",{children:t(Z,{...r.getToggleRowSelectedProps()},void 0,!1,{fileName:a,lineNumber:743,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:742,columnNumber:25},void 0)},...o])}),console.log("==========>",n);const x=({title:e,value:o})=>t("tr",{className:"bg-slate-200 border border-gray-300 ",children:[t("td",{className:"px-2 py-2 whitespace-nowrap text-sm font-semibold text-slate-800 border-r  ",children:e},void 0,!1,{fileName:a,lineNumber:776,columnNumber:17},void 0),t("td",{className:"px-2 py-2 whitespace-nowrap text-sm text-gray-500 capitalize bg-white",children:o},void 0,!1,{fileName:a,lineNumber:777,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:775,columnNumber:13},void 0);return t(u,{children:t("div",{className:"xl:col-span-2 col-span-1",children:t(Ne,{title:"Tenancy Summary Report",children:[t("div",{className:"flex flex-row-reverse",children:d.propertyid?d.filteredDates&&((Y=d.filteredDates)==null?void 0:Y.length)?t("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>U(_),children:[t("img",{src:X,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:a,lineNumber:793,columnNumber:29},void 0),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:a,lineNumber:794,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:792,columnNumber:25},void 0):t("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>U(_),children:[t("img",{src:X,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:a,lineNumber:800,columnNumber:29},void 0),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:a,lineNumber:801,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:799,columnNumber:29},void 0):null},void 0,!1,{fileName:a,lineNumber:786,columnNumber:21},void 0),t("div",{children:[t("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[w===!0?null:t(u,{children:t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:a,lineNumber:815,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:814,columnNumber:29},void 0)},void 0,!1),t("div",{className:"w-[100%] col-span-3",children:w===!0?t(u,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:Q,width:150,height:150},void 0,!1,{fileName:a,lineNumber:830,columnNumber:50},void 0)},void 0,!1,{fileName:a,lineNumber:829,columnNumber:42},void 0)},void 0,!1):t(u,{children:t(be,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:E,value:E&&P?E.filter(function(e){return e.value===(d==null?void 0:d.propertyid)}):E.filter(function(e){return e.value===(d==null?void 0:d.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{P?H():T({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:he,id:"hh"},void 0,!1,{fileName:a,lineNumber:835,columnNumber:45},void 0)},void 0,!1)},void 0,!1,{fileName:a,lineNumber:822,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:806,columnNumber:25},void 0),"  ",(d==null?void 0:d.propertyid)&&t(u,{children:t("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(fe,{value:oe,inputClassName:"input-class",containerClassName:"container-class",onChange:se},void 0,!1,{fileName:a,lineNumber:870,columnNumber:49},void 0)},void 0,!1,{fileName:a,lineNumber:869,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:868,columnNumber:41},void 0),P&&t(u,{children:t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",onClick:H,children:"Reset"},void 0,!1,{fileName:a,lineNumber:884,columnNumber:65},void 0)},void 0,!1,{fileName:a,lineNumber:883,columnNumber:61},void 0)},void 0,!1,{fileName:a,lineNumber:882,columnNumber:57},void 0)},void 0,!1,{fileName:a,lineNumber:881,columnNumber:53},void 0)},void 0,!1)]},void 0,!0,{fileName:a,lineNumber:867,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:a,lineNumber:805,columnNumber:21},void 0),le===!0?t(u,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:Q,width:150,height:150},void 0,!1,{fileName:a,lineNumber:927,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:926,columnNumber:33},void 0)},void 0,!1):n&&n.length?t(u,{children:t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"overflow-hidden p-[20px] ",children:[t("div",{className:"w-[100%] col-span-3",children:[t("div",{className:"w-[100%] col-span-3 mb-4",children:t("div",{className:"borderBottom"},void 0,!1,{fileName:a,lineNumber:939,columnNumber:69},void 0)},void 0,!1,{fileName:a,lineNumber:938,columnNumber:65},void 0),t("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CONTRACT DETAILS"},void 0,!1,{fileName:a,lineNumber:941,columnNumber:65},void 0)]},void 0,!0,{fileName:a,lineNumber:937,columnNumber:37},void 0),t("div",{className:"overflow-hidden p-2 w-[35%]",children:t("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[t("thead",{children:t("tr",{children:t("h4",{className:"text-[16px] text-slate-800",children:"PROPERTY DETAILS"},void 0,!1,{fileName:a,lineNumber:976,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:975,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:974,columnNumber:17},void 0),t("tbody",{children:[t(x,{title:"Landlord Name",value:n?((G=n[0])==null?void 0:G.propertyid.ownernamedeed)||((z=n[0])==null?void 0:z.propertyid.customername):"Not Avaiable"},void 0,!1,{fileName:a,lineNumber:982,columnNumber:21},void 0),t(x,{title:"Community Name",value:n?(W=n[0])==null?void 0:W.propertyid.communityname:"Not Avaiable"},void 0,!1,{fileName:a,lineNumber:983,columnNumber:21},void 0),t(x,{title:"Project Name",value:n?(q=n[0])==null?void 0:q.propertyid.projectname:"Not Avaiable"},void 0,!1,{fileName:a,lineNumber:984,columnNumber:21},void 0),t(x,{title:"Apartment No",value:n?(J=n[0])==null?void 0:J.propertyid.unitnumber:"Not Avaiable"},void 0,!1,{fileName:a,lineNumber:985,columnNumber:21},void 0),t(x,{title:"Building No",value:n?(K=n[0])==null?void 0:K.propertyid.buildingname:"Not Avaiable"},void 0,!1,{fileName:a,lineNumber:986,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:980,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:973,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:972,columnNumber:61},void 0),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"p-[20px]",children:t(pe,{responsive:"lg",bordered:!0,className:"w-[1280px]",children:[t("thead",{className:"border bg-black-200 text-black",children:t("tr",{className:"w-[200px] h-[60px]",children:[t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Sr no"},void 0,!1,{fileName:a,lineNumber:996,columnNumber:81},void 0),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy contract No:"},void 0,!1,{fileName:a,lineNumber:997,columnNumber:81},void 0),t("th",{className:"text-center border-r border-gray-500 text-[14px] w-[150px] ",children:"Status"},void 0,!1,{fileName:a,lineNumber:998,columnNumber:81},void 0),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy Start Date:"},void 0,!1,{fileName:a,lineNumber:999,columnNumber:81},void 0),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy Expiry Date"},void 0,!1,{fileName:a,lineNumber:1e3,columnNumber:81},void 0),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy Period:"},void 0,!1,{fileName:a,lineNumber:1001,columnNumber:81},void 0),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Rental Amount"},void 0,!1,{fileName:a,lineNumber:1002,columnNumber:81},void 0)]},void 0,!0,{fileName:a,lineNumber:995,columnNumber:77},void 0)},void 0,!1,{fileName:a,lineNumber:994,columnNumber:73},void 0),t("tbody",{children:[d.propertyid&&n&&n.length>0&&n.map((e,o)=>t(u,{children:t("tr",{className:"h-[80px]",children:[t("td",{className:"border border-gray-100 text-center",children:o+1},void 0,!1,{fileName:a,lineNumber:1014,columnNumber:101},void 0),t("td",{className:"border border-gray-100 text-center",children:e.tenantcontractno?e.tenantcontractno:"Not Available"},void 0,!1,{fileName:a,lineNumber:1015,columnNumber:105},void 0),t("div",{className:"flex justify-center",children:t("td",{className:` inline-block mt-[30px] min-w-[100px] text-center  rounded-[999px] bg-opacity-25 ${new Date(e.contractenddate)>new Date?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:new Date(e.contractenddate)>new Date?"Active":"Expired"},void 0,!1,{fileName:a,lineNumber:1017,columnNumber:105},void 0)},void 0,!1,{fileName:a,lineNumber:1016,columnNumber:105},void 0),t("td",{className:"border border-gray-100 text-center",children:e.contractstartdate?new Date(e.contractstartdate).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:1026,columnNumber:105},void 0),t("td",{className:"border border-gray-100 text-center",children:e.contractenddate?new Date(e.contractenddate).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:1027,columnNumber:105},void 0),t("td",{className:"border border-gray-100 text-center",children:e?B(e):"Not Available"},void 0,!1,{fileName:a,lineNumber:1028,columnNumber:105},void 0),t("td",{className:"border border-gray-100 text-center",children:["AED ",e.rentalamount?e.rentalamount:"Not Available"]},void 0,!0,{fileName:a,lineNumber:1029,columnNumber:105},void 0)]},void 0,!0,{fileName:a,lineNumber:1012,columnNumber:97},void 0)},void 0,!1)),t("tr",{children:[t("td",{colSpan:"6",className:"border border-gray-300 text-end p-3",children:"GROSS RENT INCOME"},void 0,!1,{fileName:a,lineNumber:1040,columnNumber:73},void 0),t("td",{className:"border border-gray-300 text-center",children:["AED ",n.map(e=>Number(e.rentalamount)).reduce((e,o)=>e+o,0).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})]},void 0,!0,{fileName:a,lineNumber:1042,columnNumber:73},void 0)]},void 0,!0,{fileName:a,lineNumber:1039,columnNumber:73},void 0)]},void 0,!0,{fileName:a,lineNumber:1005,columnNumber:89},void 0)]},void 0,!0,{fileName:a,lineNumber:993,columnNumber:69},void 0)},void 0,!1,{fileName:a,lineNumber:992,columnNumber:65},void 0)},void 0,!1,{fileName:a,lineNumber:991,columnNumber:61},void 0)]},void 0,!0,{fileName:a,lineNumber:936,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:935,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:934,columnNumber:29},void 0)},void 0,!1):t(u,{children:w===!0?null:t(u,{children:t("div",{className:"pl-6",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:a,lineNumber:1063,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:1062,columnNumber:33},void 0)},void 0,!1)},void 0,!1)]},void 0,!0,{fileName:a,lineNumber:785,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:784,columnNumber:13},void 0)},void 0,!1)};export{we as default};
