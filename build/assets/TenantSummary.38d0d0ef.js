import{R as I,j as t,F as m,r as s,b as S,c as p,f as ue,aq as he}from"./index.87c66dcd.js";import{L as X}from"./Rare logo New Gif Loading.02c4dc82.js";import{T as ge}from"./Table.3f80acd6.js";import{D as xe}from"./index.esm.7c88dbf2.js";import"./jspdf.es.min.917e9e61.js";import"./html2canvas.esm.0eae2bf4.js";import{E as Z}from"./excel.9601f4f9.js";import{E as be}from"./exceljs.min.595e8581.js";import"./index.186db273.js";import"./ThemeProvider.c3b08413.js";const V=I.forwardRef(({indeterminate:y,...E},F)=>{const C=I.useRef(),l=F||C;return I.useEffect(()=>{l.current.indeterminate=y},[l,y]),t(m,{children:t("input",{type:"checkbox",ref:l,...E,className:"table-checkbox"})})}),ye={option:(y,E)=>({...y,fontSize:"14px"})},Te=({title:y,allData:E})=>{var Y,G,q,z,W,J,K;const[F,C]=s.exports.useState([]),[l,k]=s.exports.useState([]),ee=localStorage.getItem("isAuth"),x=JSON.parse(ee),[fe,te]=s.exports.useState();s.exports.useState(0),s.exports.useState(0),s.exports.useState();const[Ne,ae]=s.exports.useState(),[A,re]=s.exports.useState([]),[w,L]=s.exports.useState(!1),[ne,O]=s.exports.useState(!1);s.exports.useState();const[$,M]=s.exports.useState({filterData:[],propertyData:{}}),[d,T]=s.exports.useState({propertyid:"",filteredDates:[]}),[oe,le]=s.exports.useState({startDate:"",endDate:""}),[P,_]=s.exports.useState(""),[f,se]=s.exports.useState([]);console.log("selectedProperty",d);const ce=async e=>{O(!0),_(e);const a=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/report/${d.propertyid}?contractstartdate=${e.startDate}&contractenddate=${e.endDate}`)).json(),o=f.find(i=>{if(i._id===d.propertyid)return i}),r={customername:o.customername,communityname:o.communityname,projectname:o.projectname,unitnumber:o.unitnumber,buildingname:o.buildingname,fromdate:e.startDate,todate:e.endDate};console.log("@@@@@11",r),O(!1),T({...d,filteredDates:a==null?void 0:a.data}),M({filterData:a==null?void 0:a.data,propertyData:r}),k(a==null?void 0:a.data)};s.exports.useEffect(()=>{(async()=>{const a=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/tenantsummaryreport/${d.propertyid}`)).json();k(a==null?void 0:a.data);const o=f.find(i=>{if(i._id===d.propertyid)return i}),r={customername:o.customername,communityname:o.communityname,projectname:o.projectname,unitnumber:o.unitnumber,buildingname:o.buildingname};M({filterData:a==null?void 0:a.data,propertyData:r})})()},[d.propertyid]);const ie=e=>{const n=new Set;return e.filter(a=>n.has(a._id)?!1:(n.add(a._id),!0))};s.exports.useEffect(()=>{(async()=>{try{const n=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${x==null?void 0:x._id}&sort=descending&type=customer&page=0&perPage=all`,a=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${x==null?void 0:x._id}&sort=descending&type=customer&page=0&perPage=all`,o=await fetch(n);if(!o.ok&&o.status!==400)throw new Error(`API 1 failed with status: ${o.status}`);const r=o.status===400?[]:await o.json(),i=await fetch(a);if(!i.ok&&i.status!==400)throw new Error(`API 2 failed with status: ${i.status}`);const u=i.status===400?[]:await i.json(),v=[...r,...u].map(g=>g._id),c=(await Promise.all(v.map(async g=>await(await fetch(`http://portals.rarehomesgroup.com/booking/ownerrepresentative/pages?propertyid=${g}&page=0&perPage=all`)).json()))).flat([2]),h=ie(c);C(h)}catch(n){console.error("Error fetching data:",n),setLoadingData(!1)}})()},[]),s.exports.useEffect(()=>{(async()=>{const n=F.map(async o=>{const{propertyid:r}=o;return await(await fetch(`http://portals.rarehomesgroup.com/property/${r}`)).json()}),a=await Promise.all(n);se(a)})()},[F]),s.exports.useEffect(()=>{if(L(!0),f.length){const e=[...new Map(f.map(a=>[a._id,a])).values()],n=e==null?void 0:e.map(a=>({label:a.unitnumber+" | "+a.communityname+" | "+a.projectname+" | "+a.buildingname,value:a._id}));L(!1),re(n)}},[f]),s.exports.useState(!1);const H=async()=>{_(""),k([]),T({propertyid:""}),le({startDate:null,endDate:null})};s.exports.useEffect(()=>{var n;let e=0;for(let a=0;a<(l==null?void 0:l.length);a++){let o=parseInt((n=l[a])==null?void 0:n.nonight);e+=o}te(e)},[l==null?void 0:l.length]),s.exports.useEffect(()=>{let e=l.map(n=>Number(n.roomrenthostpayable)).reduce((n,a)=>n+a,0);ae(e)},[l==null?void 0:l.length]),s.exports.useRef(null);const B=e=>{const{contractstartdate:n,contractenddate:a}=e;let o=new Date(n),r=new Date(a);return(r.getFullYear()-o.getFullYear())*12+(r.getMonth()-o.getMonth())+" Months"},U=async e=>{console.log("Export button clicked",e);const{filterData:n,propertyData:a}=e,o=new be.Workbook,r=o.addWorksheet("Sheet1");r.mergeCells("A1:F1"),r.addRow(["TENANCY REPORTS"]),r.addRow([]),r.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),r.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const i=[];i.push(a),i.map(c=>{r.addRow([c.customername,c.communityname,c.projectname,c.unitnumber,c.buildingname])}),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow(["CONTRACT DETAILS"]),r.addRow([]),r.addRow(["Tenancy contract No","Status","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period","RENTAL INCOME"]),r.addRow([]),n.forEach(c=>{r.addRow([c.tenantcontractno,new Date(c.contractenddate)>new Date?"Active":"Expired",c.guestname,new Date(c.contractstartdate).toDateString(),new Date(c.contractenddate).toDateString(),B(c),"AED "+c.rentalamount])}),r.addRow([]),r.addRow([]),r.addRow([]);const u=n.map(c=>Number(c.rentalamount)).reduce((c,h)=>c+h,0),b=r.addRow(["GROSS RENT INCOME","","","","","","AED "+u.toLocaleString()]);if(u>5e3){const c={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};b.fill=c;const h={argb:"FFFFFF"};[b].forEach(g=>{g.eachCell({includeEmpty:!0},R=>{R.font={color:h}})})}r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),r.getRow(2).font={bold:!0},r.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},r.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},r.getRow(14).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},r.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(11).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},r.getRow(2).font={color:{argb:"FFFFFF"}},r.getRow(4).font={color:{argb:"FFFFFF"}},r.getRow(14).font={color:{argb:"FFFFFF"}},r.getRow(11).font={color:{argb:"FFFFFF"}},r.getRow(7).font={color:{argb:"FFFFFF"}},r.getRow(8).font={color:{argb:"000000"}},r.getRow(9).font={color:{argb:"FFFFFF"}};const D=await o.xlsx.writeBuffer();saveAs(new Blob([D]),"tenancy_Summery.xlsx")},de=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:n})=>t("span",{children:n.indexOf(e)+1})},{Header:"guest name",accessor:"guestname",Cell:e=>{var n,a,o,r,i;return t("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?((o=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:o.slice(0,15))+(((i=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:i.length)>15?"...":""):"Not Available"})}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var n,a;return t("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var n,a,o,r;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(n=e==null?void 0:e.cell)!=null&&n.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((r=(o=e==null?void 0:e.cell)==null?void 0:o.value)==null?void 0:r.length)>15?"...":""):"Not Available"})})})}},{Header:"checkin date",accessor:"checkindate",Cell:e=>{var n,a;return t("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"checkout date",accessor:"checkoutdate",Cell:e=>{var n,a;return t("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var n,a;return t("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"RATE PER DAY",accessor:"tourismfee",Cell:e=>{var r,i,u,b,v,D,c,h,g,R,j,Q;let n=(u=(i=(r=e==null?void 0:e.cell)==null?void 0:r.row)==null?void 0:i.original)!=null&&u.nonight?parseFloat((D=(v=(b=e==null?void 0:e.cell)==null?void 0:b.row)==null?void 0:v.original)==null?void 0:D.nonight):0,o=((g=(h=(c=e==null?void 0:e.cell)==null?void 0:c.row)==null?void 0:h.original)!=null&&g.roomrenthostpayable?parseFloat((Q=(j=(R=e==null?void 0:e.cell)==null?void 0:R.row)==null?void 0:j.original)==null?void 0:Q.roomrenthostpayable):0)/n;return t("span",{children:o?parseFloat(o).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var n,a;return t("span",{children:(n=e==null?void 0:e.cell)!=null&&n.value?parseFloat((a=e==null?void 0:e.cell)==null?void 0:a.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}}],pe=s.exports.useMemo(()=>de,[]),me=s.exports.useMemo(()=>l);S.exports.useTable({columns:pe,data:me,initialState:{pageIndex:0,pageSize:50}},S.exports.useGlobalFilter,S.exports.useSortBy,S.exports.usePagination,S.exports.useRowSelect,e=>{e.visibleColumns.push(n=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>t("div",{children:t(V,{...a()})}),Cell:({row:a})=>t("div",{children:t(V,{...a.getToggleRowSelectedProps()})})},...n])}),console.log("==========>",l);const N=({title:e,value:n})=>p("tr",{className:"bg-slate-200 border border-gray-300 ",children:[t("td",{className:"px-2 py-2 whitespace-nowrap text-sm font-semibold text-slate-800 border-r  ",children:e}),t("td",{className:"px-2 py-2 whitespace-nowrap text-sm text-gray-500 capitalize bg-white",children:n})]});return t(m,{children:t("div",{className:"xl:col-span-2 col-span-1",children:p(ue,{title:"Tenancy Summary Report",children:[t("div",{className:"flex flex-row-reverse",children:d.propertyid?d.filteredDates&&((Y=d.filteredDates)==null?void 0:Y.length)?p("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>U($),children:[t("img",{src:Z,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]}):p("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>U($),children:[t("img",{src:Z,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]}):null}),p("div",{children:[p("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[w===!0?null:t(m,{children:t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),t("div",{className:"w-[100%] col-span-3",children:w===!0?t(m,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:X,width:150,height:150})})}):t(m,{children:t(he,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:A,value:A&&P?A.filter(function(e){return e.value===(d==null?void 0:d.propertyid)}):A.filter(function(e){return e.value===(d==null?void 0:d.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{P?H():T({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:ye,id:"hh"})})})]}),"  ",(d==null?void 0:d.propertyid)&&t(m,{children:p("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(xe,{value:oe,inputClassName:"input-class",containerClassName:"container-class",onChange:ce})})}),P&&t(m,{children:t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",onClick:H,children:"Reset"})})})})})]})})]}),ne===!0?t(m,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:X,width:150,height:150})})}):l&&l.length?t(m,{children:t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:p("div",{className:"overflow-hidden p-[20px] ",children:[p("div",{className:"w-[100%] col-span-3",children:[t("div",{className:"w-[100%] col-span-3 mb-4",children:t("div",{className:"borderBottom"})}),t("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CONTRACT DETAILS"})]}),t("div",{className:"overflow-hidden p-2 w-[35%]",children:p("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[t("thead",{children:t("tr",{children:t("h4",{className:"text-[16px] text-slate-800",children:"PROPERTY DETAILS"})})}),p("tbody",{children:[t(N,{title:"Landlord Name",value:l?((G=l[0])==null?void 0:G.propertyid.ownernamedeed)||((q=l[0])==null?void 0:q.propertyid.customername):"Not Avaiable"}),t(N,{title:"Community Name",value:l?(z=l[0])==null?void 0:z.propertyid.communityname:"Not Avaiable"}),t(N,{title:"Project Name",value:l?(W=l[0])==null?void 0:W.propertyid.projectname:"Not Avaiable"}),t(N,{title:"Apartment No",value:l?(J=l[0])==null?void 0:J.propertyid.unitnumber:"Not Avaiable"}),t(N,{title:"Building No",value:l?(K=l[0])==null?void 0:K.propertyid.buildingname:"Not Avaiable"})]})]})}),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"p-[20px]",children:p(ge,{responsive:"lg",bordered:!0,className:"w-[1280px]",children:[t("thead",{className:"border bg-black-200 text-black",children:p("tr",{className:"w-[200px] h-[60px]",children:[t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Sr no"}),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy contract No:"}),t("th",{className:"text-center border-r border-gray-500 text-[14px] w-[150px] ",children:"Status"}),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy Start Date:"}),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy Expiry Date"}),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy Period:"}),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Rental Amount"})]})}),p("tbody",{children:[d.propertyid&&l&&l.length>0&&l.map((e,n)=>t(m,{children:p("tr",{className:"h-[80px]",children:[t("td",{className:"border border-gray-100 text-center",children:n+1}),t("td",{className:"border border-gray-100 text-center",children:e.tenantcontractno?e.tenantcontractno:"Not Available"}),t("div",{className:"flex justify-center",children:t("td",{className:` inline-block mt-[30px] min-w-[100px] text-center  rounded-[999px] bg-opacity-25 ${new Date(e.contractenddate)>new Date?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:new Date(e.contractenddate)>new Date?"Active":"Expired"})}),t("td",{className:"border border-gray-100 text-center",children:e.contractstartdate?new Date(e.contractstartdate).toDateString():"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:e.contractenddate?new Date(e.contractenddate).toDateString():"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:e?B(e):"Not Available"}),p("td",{className:"border border-gray-100 text-center",children:["AED ",e.rentalamount?e.rentalamount:"Not Available"]})]})})),p("tr",{children:[t("td",{colSpan:"6",className:"border border-gray-300 text-end p-3",children:"GROSS RENT INCOME"}),p("td",{className:"border border-gray-300 text-center",children:["AED ",l.map(e=>Number(e.rentalamount)).reduce((e,n)=>e+n,0).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})]})]})]})]})})})]})})})}):t(m,{children:w===!0?null:t(m,{children:t("div",{className:"pl-6",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})]})})})};export{Te as default};
