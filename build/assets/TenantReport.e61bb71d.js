import{R as U,j as t,F as h,r as o,b as A,c as i,f as de,aq as pe}from"./index.40803122.js";import{L as Y}from"./Rare logo New Gif Loading.02c4dc82.js";import{E as me}from"./excel.9601f4f9.js";import{E as ue}from"./exceljs.min.bd11292a.js";import{T as he}from"./Table.f63c5584.js";import{D as ge}from"./index.esm.fc6ea848.js";import"./jspdf.es.min.444cae57.js";import"./html2canvas.esm.0eae2bf4.js";import"./ThemeProvider.2d72db89.js";const Q=U.forwardRef(({indeterminate:D,...k},R)=>{const w=U.useRef(),d=R||w;return U.useEffect(()=>{d.current.indeterminate=D},[d,D]),t(h,{children:t("input",{type:"checkbox",ref:d,...k,className:"table-checkbox"})})}),be={option:(D,k)=>({...D,fontSize:"14px"})},Ce=({title:D,allData:k})=>{var $;const[R,w]=o.exports.useState([]),[d,S]=o.exports.useState([]),J=localStorage.getItem("isAuth"),b=JSON.parse(J),[Ne,W]=o.exports.useState();o.exports.useState(0),o.exports.useState(0),o.exports.useState();const[ye,z]=o.exports.useState(),[T,V]=o.exports.useState([]),[O,j]=o.exports.useState(!1),[G,B]=o.exports.useState(!1),[K,X]=o.exports.useState({filterData:[],propertyData:{}}),[m,P]=o.exports.useState({propertyid:"",filteredDates:[]}),[L,Z]=o.exports.useState({startDate:"",endDate:""}),[I,H]=o.exports.useState("");console.log("selectedProperty",m);const ee=async e=>{B(!0),H(e);const a=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/report/${m==null?void 0:m.propertyid}?contractstartdate=${e.startDate}&contractenddate=${e.endDate}`)).json(),n=C.find(p=>{if(p._id===m.propertyid)return p}),r={customername:n.customername,communityname:n.communityname,projectname:n.projectname,unitnumber:n.unitnumber,buildingname:n.buildingname,fromdate:e.startDate,todate:e.endDate};B(!1),P({...m,filteredDates:a==null?void 0:a.data}),S(a==null?void 0:a.data),X({filterData:a==null?void 0:a.data,propertyData:r})},[C,te]=o.exports.useState([]);o.exports.useEffect(()=>{(async()=>{const a=await(await fetch(`http://portals.rarehomesgroup.com/booking/pagination/pages?ownerid=${b==null?void 0:b._id}&page=0&perPage=all`)).json();a!=null&&a.booking?S([]):S([])})()},[]);const ae=e=>{const l=new Set;return e.filter(a=>l.has(a._id)?!1:(l.add(a._id),!0))};o.exports.useEffect(()=>{(async()=>{try{const l=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${b==null?void 0:b._id}&sort=descending&type=customer&page=0&perPage=all`,a=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${b==null?void 0:b._id}&sort=descending&type=customer&page=0&perPage=all`,n=await fetch(l);if(!n.ok&&n.status!==400)throw new Error(`API 1 failed with status: ${n.status}`);const r=n.status===400?[]:await n.json(),p=await fetch(a);if(!p.ok&&p.status!==400)throw new Error(`API 2 failed with status: ${p.status}`);const x=p.status===400?[]:await p.json(),c=[...r,...x].map(g=>g._id),N=(await Promise.all(c.map(async g=>await(await fetch(`http://portals.rarehomesgroup.com/booking/ownerrepresentative/pages?propertyid=${g}&page=0&perPage=all`)).json()))).flat([2]),y=ae(N);w(y)}catch(l){console.error("Error fetching data:",l),setLoadingData(!1)}})()},[]),o.exports.useEffect(()=>{(async()=>{const l=R.map(async n=>{const{propertyid:r}=n;return await(await fetch(`http://portals.rarehomesgroup.com/property/${r}`)).json()}),a=await Promise.all(l);te(a)})()},[R]),o.exports.useEffect(()=>{if(j(!0),C.length){const e=[...new Map(C.map(a=>[a._id,a])).values()],l=e==null?void 0:e.map(a=>({label:a.unitnumber+" | "+a.communityname+" | "+a.projectname+" | "+a.buildingname,value:a._id}));j(!1),V(l)}},[C]),o.exports.useState(!1);const M=()=>{H(""),S([]),P({...m,filteredDates:[]}),Z({startDate:null,endDate:null})};o.exports.useEffect(()=>{var l;let e=0;for(let a=0;a<(d==null?void 0:d.length);a++){let n=parseInt((l=d[a])==null?void 0:l.nonight);e+=n}W(e)},[d==null?void 0:d.length]),o.exports.useEffect(()=>{let e=d.map(l=>Number(l.roomrenthostpayable)).reduce((l,a)=>l+a,0);z(e)},[d==null?void 0:d.length]),o.exports.useRef(null);const _=e=>{const{contractstartdate:l,contractenddate:a}=e;let n=new Date(l),r=new Date(a);return(r.getFullYear()-n.getFullYear())*12+(r.getMonth()-n.getMonth())+" Months"},re=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:l})=>t("span",{children:l.indexOf(e)+1})},{Header:"guest name",accessor:"guestname",Cell:e=>{var l,a,n,r,p;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?((n=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:n.slice(0,15))+(((p=(r=e==null?void 0:e.cell)==null?void 0:r.value)==null?void 0:p.length)>15?"...":""):"Not Available"})}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var l,a,n,r;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(l=e==null?void 0:e.cell)!=null&&l.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((r=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:r.length)>15?"...":""):"Not Available"})})})}},{Header:"checkin date",accessor:"checkindate",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"checkout date",accessor:"checkoutdate",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"RATE PER DAY",accessor:"tourismfee",Cell:e=>{var r,p,x,E,c,f,N,y,g,v,F,s;let l=(x=(p=(r=e==null?void 0:e.cell)==null?void 0:r.row)==null?void 0:p.original)!=null&&x.nonight?parseFloat((f=(c=(E=e==null?void 0:e.cell)==null?void 0:E.row)==null?void 0:c.original)==null?void 0:f.nonight):0,n=((g=(y=(N=e==null?void 0:e.cell)==null?void 0:N.row)==null?void 0:y.original)!=null&&g.roomrenthostpayable?parseFloat((s=(F=(v=e==null?void 0:e.cell)==null?void 0:v.row)==null?void 0:F.original)==null?void 0:s.roomrenthostpayable):0)/l;return t("span",{children:n?parseFloat(n).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?parseFloat((a=e==null?void 0:e.cell)==null?void 0:a.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}}],le=o.exports.useMemo(()=>re,[]),ne=o.exports.useMemo(()=>d);A.exports.useTable({columns:le,data:ne,initialState:{pageIndex:0,pageSize:50}},A.exports.useGlobalFilter,A.exports.useSortBy,A.exports.usePagination,A.exports.useRowSelect,e=>{e.visibleColumns.push(l=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>t("div",{children:t(Q,{...a()})}),Cell:({row:a})=>t("div",{children:t(Q,{...a.getToggleRowSelectedProps()})})},...l])}),console.log("==========>",d);const oe=async e=>{console.log("Export button clicked",e);const{filterData:l,propertyData:a}=e,n=new ue.Workbook,r=n.addWorksheet("Sheet1");r.mergeCells("A1:F1"),r.addRow(["TENANCY REPORTS"]),r.addRow([]),r.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),r.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"Property code",key:"propertycode",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const p=[];p.push(a),p.map(c=>{r.addRow([c.customername,c.communityname,c.projectname,c.unitnumber,c.buildingname,c.propertycode])}),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),[["Statement Period"],[L.startDate,L.endDate]].forEach(c=>{r.addRow(c)}),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),l.forEach(c=>{const f=r.addRow(["CONTRACT DETAILS"]);r.addRow([]);const N=r.addRow(["Tenancy contract No","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period"]);r.addRow([c.tenantcontractno,c.guestname,new Date(c.contractstartdate).toDateString(),new Date(c.contractenddate).toDateString(),_(c)]);const y=r.addRow(["RENTAL INCOME PERIOD","STATUS","CHEQUE NUMBER","CHEQUE DATE","CHEQUE AMOUNT","EARLY TERMINATION (RENT REFUND)","CASH COLLECTED","DEPOSITED IN OWNER ACCOUNT","BOUNCED / UNREALISED"]);c.chequeDetails.map(s=>{r.addRow(["NOT AVAILABLE",new Date(c.contractstartdate).toDateString()>new Date?"Active":"Expire",s==null?void 0:s.chequenumbe,new Date(s==null?void 0:s.chequedate).toDateString(),"AED "+(s==null?void 0:s.totalamount),"NOT AVAILABLE","AED "+s.totalamount,s==null?void 0:s.rentalamount,"NOT AVAILABLE","NOT AVAILABLE"])}),r.addRow([]);const g=c.chequeDetails.map(s=>Number(s.totalamount)).reduce((s,q)=>s+q,0),v=r.addRow(["RENT TO BE REALISED","","",""," AED "+g.toLocaleString(),+" AED"+" "+g.toLocaleString()]);if(g>5e3){const s={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},q={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}};v.fill=s,y.fill=s,N.fill=s,f.fill=q;const se={argb:"FFFFFF"};[v,y,N,f].forEach(ce=>{ce.eachCell({includeEmpty:!0},ie=>{ie.font={color:se}})})}r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([])}),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]),r.getRow(2).font={bold:!0},r.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},r.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(2).font={color:{argb:"FFFFFF"}},r.getRow(4).font={color:{argb:"FFFFFF"}},r.getRow(8).font={color:{argb:"FFFFFF"}},r.getRow(7).font={color:{argb:"FFFFFF"}},r.getRow(9).font={color:{argb:"FFFFFF"}};const E=await n.xlsx.writeBuffer();saveAs(new Blob([E]),"tenancy_report.xlsx")},u=({title:e,value:l})=>i("tr",{className:"bg-slate-200 border border-gray-300 ",children:[t("td",{className:"px-2 py-2 whitespace-nowrap text-sm font-semibold text-slate-800 border-r  ",children:e}),t("td",{className:"px-2 py-2 whitespace-nowrap text-sm text-gray-500 capitalize bg-white",children:l})]});return t(h,{children:t("div",{className:"xl:col-span-2 col-span-1",children:i(de,{title:"Complete Tenancy Details",children:[t("div",{className:"flex flex-row-reverse",children:m&&(($=m.filteredDates)==null?void 0:$.length)?i("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>oe(K),children:[t("img",{src:me,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]}):null}),i("div",{children:[i("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[O===!0?null:t(h,{children:t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),t("div",{className:"w-[100%] col-span-3",children:O===!0?t(h,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:Y,width:150,height:150})})}):t(h,{children:t(pe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:T,value:T&&I?T.filter(function(e){return e.value===(m==null?void 0:m.propertyid)}):T.filter(function(e){return e.value===(m==null?void 0:m.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{I?M():P({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:be,id:"hh"})})})]}),"  ",(m==null?void 0:m.propertyid)&&t(h,{children:i("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(ge,{value:L,inputClassName:"input-class",containerClassName:"container-class",onChange:ee})})}),I&&t(h,{children:t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",onClick:M,children:"Reset"})})})})})]})})]}),console.log("kkkk",d.map(e=>e.chequeDetails.map(l=>JSON.parse(Number(l.totalamount))).reduce((l,a)=>l+a,0))),G===!0?t(h,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:Y,width:150,height:150})})}):t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"overflow-hidden p-[20px] ",children:t("div",{className:"w-[100%] col-span-3",children:d&&d.length>0?d.map(e=>{var l;return i(h,{children:[" ",i("div",{className:"w-[100%] col-span-3",children:[t("div",{className:"w-[100%] col-span-3 mb-4",children:t("div",{className:"borderBottom"})}),t("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CONTRACT DETAILS"})]}),i("div",{className:"mt-[25px] flex justify-between",children:[t("div",{className:"overflow-hidden p-2 w-[35%]",children:i("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[t("thead",{children:t("tr",{children:t("h4",{className:"text-[16px] text-slate-800",children:"PROPERTY DETAILS"})})}),i("tbody",{children:[t(u,{title:"Property Code",value:e.propertycode?e.propertycode:"Not Available"}),t(u,{title:"Landlord Name",value:e.propertyid.customername?e.propertyid.customername:"Not Available"}),t(u,{title:"Community Name",value:e.propertyid.communityname?e.propertyid.communityname:"Not Available"}),t(u,{title:"Project Name",value:e.propertyid.projectname?e.propertyid.projectname:"Not Available"}),t(u,{title:"Apartment No",value:e.propertyid.unitnumber?e.propertyid.unitnumber:"Not Available"}),t(u,{title:"Building No",value:e.propertyid.buildingname?e.propertyid.buildingname:"Not Available"})]})]})}),t("div",{className:"overflow-hidden p-2 w-[35%]",children:i("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[t("h4",{className:"text-[16px] text-slate-800",children:"TENANCY DETAILS "}),i("tbody",{className:"transition-all duration-1000 ease-in",children:[t(u,{title:"Tenancy contract No",value:e.tenantcontractno?e.tenantcontractno:"Not Available"}),t(u,{title:"Tenant Name",value:e.guestname?e.guestname:"Not Available"}),t(u,{title:"Tenancy Start Date",value:e?new Date(e.contractstartdate).toDateString():"Not Available"}),t(u,{title:"Tenancy Expiry Date",value:e?new Date(e.contractenddate).toDateString():"Not Available"}),t(u,{title:"Tenancy Period",value:e?_(e):"Not Available"})]})]})}),t("div",{className:"overflow-hidden p-2 w-[30%]",children:i("table",{className:"min-w-full divide-y divide-gray-200 animate-slide-right",children:[t("h4",{className:"text-[16px] text-slate-800",children:"AMOUNTS DETAILS "}),i("tbody",{className:"transition-all duration-1000 ease-in",children:[t(u,{title:"Rental Amount",value:e.rentalamount?"AED "+e.rentalamount:"Not Available"}),t(u,{title:"Payment Terms",value:e.noofchequeorinstallment?e.noofchequeorinstallment+" installments":"Not Available"}),t(u,{title:"Each Installment",value:e?"AED "+(Number(e.rentalamount)/e.noofchequeorinstallment).toFixed(2):"Not Available"})]})]})})]}),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"p-[20px]",children:i(he,{responsive:"lg",bordered:!0,children:[t("thead",{className:"border bg-black-200 text-black",children:i("tr",{className:"w-[150px] h-[60px]",children:[t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"Sr no"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"RENTAL INCOME PERIOD"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"STATUS"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE NUMBER"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE DATE"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE AMOUNT"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"EARLY TERMINATION (RENT REFUND)"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CASH COLLECTED"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"DEPOSITED IN OWNER ACCOUNT"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"BOUNCED / UNREALISED"})]})}),i("tbody",{children:[e&&((l=e==null?void 0:e.chequeDetails)==null?void 0:l.length)>0&&e.chequeDetails.map((a,n)=>i("tr",{className:"w-[150px] h-[100px]",children:[t("td",{className:"border border-gray-100 text-center",children:n+1}),t("td",{className:"border border-gray-100 text-center",children:a.someOtherProperty?a.someOtherProperty:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:new Date(e.contractenddate).toDateString()>new Date?"Active":"Expire"}),t("td",{className:"border border-gray-100 text-center",children:a.chequenumbe?a.chequenumbe:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:a.chequedate?new Date(a.chequedate).toDateString():"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:a.totalamount?"AED "+a.totalamount:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:a.someOtherProperty?a.someOtherProperty:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:a.totalamount?"AED "+a.totalamount:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:a.chequenumbeqq?a.chequenumbeqqq:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:a.chequenumbesss?a.chequenumbesss:"Not Available"})]},a._id)),i("tr",{children:[t("td",{colSpan:"5",className:"border border-gray-100 text-center",children:"Total"}),i("td",{className:"border border-gray-100 text-center",children:["AED"," ",e.chequeDetails.map(a=>JSON.parse(Number(a.totalamount))).reduce((a,n)=>a+n,0)]}),t("td",{className:"border border-gray-100 text-center"}),i("td",{className:"border border-gray-100 text-center",children:["AED"," ",e.chequeDetails.map(a=>JSON.parse(Number(a.totalamount))).reduce((a,n)=>a+n,0)]}),t("td",{colSpan:"2",className:"border border-gray-100 text-center"})]})]})]})})})]})}):t(h,{children:O===!0?null:t(h,{children:t("div",{className:"pl-6",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})})})})})]})})})};export{Ce as default};
