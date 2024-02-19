import{R as I,j as t,F as p,r as c,b as N,c as s,C as te,aq as ae}from"./index.39225be0.js";import{L as H}from"./Rare logo New Gif Loading.02c4dc82.js";import{T as re}from"./Table.ff8582ba.js";import{D as le}from"./index.esm.cc37baa8.js";import"./jspdf.es.min.d348c16e.js";import"./html2canvas.esm.0eae2bf4.js";import"./index.186db273.js";const M=I.forwardRef(({indeterminate:u,...A},b)=>{const S=I.useRef(),i=b||S;return I.useEffect(()=>{i.current.indeterminate=u},[i,u]),t(p,{children:t("input",{type:"checkbox",ref:i,...A,className:"table-checkbox"})})}),se={option:(u,A)=>({...u,fontSize:"14px"})},xe=({title:u,allData:A})=>{const[b,S]=c.exports.useState([]),[i,g]=c.exports.useState([]),$=localStorage.getItem("isAuth"),h=JSON.parse($),[ne,_]=c.exports.useState();c.exports.useState(0),c.exports.useState(0),c.exports.useState();const[ce,B]=c.exports.useState(),[f,Y]=c.exports.useState([]),[E,q]=c.exports.useState(!1),[Q,j]=c.exports.useState(!1),[d,z]=c.exports.useState({propertyid:"",filteredDates:[]}),[G,W]=c.exports.useState({startDate:"",endDate:""}),[C,F]=c.exports.useState("");console.log("selectedProperty",d);const J=async e=>{j(!0),F(e);const a=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/report/${d==null?void 0:d.propertyid}?contractstartdate=${e.startDate}&contractenddate=${e.endDate}`)).json();j(!1),z({...d,filteredDates:a==null?void 0:a.data}),g(a==null?void 0:a.data)},[P,K]=c.exports.useState([]);c.exports.useEffect(()=>{(async()=>{const a=await(await fetch(`http://dev-rare.srp.ai/booking/pagination/pages?ownerid=${h==null?void 0:h._id}&page=0&perPage=all`)).json();a!=null&&a.booking?g([]):g([])})()},[]);const V=e=>{const r=new Set;return e.filter(a=>r.has(a._id)?!1:(r.add(a._id),!0))};c.exports.useEffect(()=>{(async()=>{try{const r=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${h==null?void 0:h._id}&sort=descending&type=customer&page=0&perPage=all`,a=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${h==null?void 0:h._id}&sort=descending&type=customer&page=0&perPage=all`,l=await fetch(r);if(!l.ok&&l.status!==400)throw new Error(`API 1 failed with status: ${l.status}`);const n=l.status===400?[]:await l.json(),o=await fetch(a);if(!o.ok&&o.status!==400)throw new Error(`API 2 failed with status: ${o.status}`);const x=o.status===400?[]:await o.json(),v=[...n,...x].map(m=>m._id),y=(await Promise.all(v.map(async m=>await(await fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${m}&page=0&perPage=all`)).json()))).flat([2]),D=V(y);S(D)}catch(r){console.error("Error fetching data:",r),setLoadingData(!1)}})()},[]),c.exports.useEffect(()=>{(async()=>{const r=b.map(async l=>{const{propertyid:n}=l;return await(await fetch(`http://dev-rare.srp.ai/property/${n}`)).json()}),a=await Promise.all(r);K(a)})()},[b]),c.exports.useEffect(()=>{if(q(!0),P.length){const e=[...new Map(P.map(a=>[a._id,a])).values()],r=e==null?void 0:e.map(a=>({label:a.unitnumber+" | "+a.communityname+" | "+a.projectname+" | "+a.buildingname,value:a._id}));q(!1),Y(r)}},[P]),c.exports.useState(!1);const L=()=>{F(""),g([]),W({startDate:null,endDate:null})};c.exports.useEffect(()=>{var r;let e=0;for(let a=0;a<(i==null?void 0:i.length);a++){let l=parseInt((r=i[a])==null?void 0:r.nonight);e+=l}_(e)},[i==null?void 0:i.length]),c.exports.useEffect(()=>{let e=i.map(r=>Number(r.roomrenthostpayable)).reduce((r,a)=>r+a,0);B(e)},[i==null?void 0:i.length]),c.exports.useRef(null);const X=e=>{const{contractstartdate:r,contractenddate:a}=e;let l=new Date(r),n=new Date(a);return(n.getFullYear()-l.getFullYear())*12+(n.getMonth()-l.getMonth())+" Months"},Z=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:r})=>t("span",{children:r.indexOf(e)+1})},{Header:"guest name",accessor:"guestname",Cell:e=>{var r,a,l,n,o;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?((l=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:l.slice(0,15))+(((o=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:o.length)>15?"...":""):"Not Available"})}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var r,a;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var r,a,l,n;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(r=e==null?void 0:e.cell)!=null&&r.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((n=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:n.length)>15?"...":""):"Not Available"})})})}},{Header:"checkin date",accessor:"checkindate",Cell:e=>{var r,a;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"checkout date",accessor:"checkoutdate",Cell:e=>{var r,a;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var r,a;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"RATE PER DAY",accessor:"tourismfee",Cell:e=>{var n,o,x,T,v,R,y,D,m,k,O,U;let r=(x=(o=(n=e==null?void 0:e.cell)==null?void 0:n.row)==null?void 0:o.original)!=null&&x.nonight?parseFloat((R=(v=(T=e==null?void 0:e.cell)==null?void 0:T.row)==null?void 0:v.original)==null?void 0:R.nonight):0,l=((m=(D=(y=e==null?void 0:e.cell)==null?void 0:y.row)==null?void 0:D.original)!=null&&m.roomrenthostpayable?parseFloat((U=(O=(k=e==null?void 0:e.cell)==null?void 0:k.row)==null?void 0:O.original)==null?void 0:U.roomrenthostpayable):0)/r;return t("span",{children:l?parseFloat(l).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var r,a;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?parseFloat((a=e==null?void 0:e.cell)==null?void 0:a.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}}],w=c.exports.useMemo(()=>Z,[]),ee=c.exports.useMemo(()=>i);return N.exports.useTable({columns:w,data:ee,initialState:{pageIndex:0,pageSize:50}},N.exports.useGlobalFilter,N.exports.useSortBy,N.exports.usePagination,N.exports.useRowSelect,e=>{e.visibleColumns.push(r=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>t("div",{children:t(M,{...a()})}),Cell:({row:a})=>t("div",{children:t(M,{...a.getToggleRowSelectedProps()})})},...r])}),console.log("==========>",i),t(p,{children:t("div",{className:"xl:col-span-2 col-span-1",children:s(te,{title:"Tenancy Reports",children:[t("div",{className:"flex flex-row-reverse"}),s("div",{children:[s("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[E===!0?null:t(p,{children:t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),t("div",{className:"w-[100%] col-span-3",children:E===!0?t(p,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:H,width:150,height:150})})}):t(p,{children:t(ae,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:f,value:f&&C?f.filter(function(e){return e.value===(d==null?void 0:d.propertyid)}):f.filter(function(e){return e.value===(d==null?void 0:d.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{C?L():z({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:se,id:"hh"})})})]}),"  ",(d==null?void 0:d.propertyid)&&t(p,{children:s("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(le,{value:G,inputClassName:"input-class",containerClassName:"container-class",onChange:J})})}),C&&t(p,{children:t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",onClick:L,children:"Reset"})})})})})]})})]}),Q===!0?t(p,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:H,width:150,height:150})})}):t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"overflow-hidden p-[20px] ",children:t("div",{className:"w-[100%] col-span-3",children:i&&i.length>0?i.map(e=>{var r,a;return s(p,{children:[" ",s("div",{className:"w-[100%] col-span-3",children:[t("div",{className:"w-[100%] col-span-3 mb-4",children:t("div",{className:"borderBottom"})}),t("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CONTRACT DETAILS"})]}),s("div",{className:"mt-[25px] flex justify-between",children:[s("div",{children:[s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Property Code:"," "]}),t("p",{className:"capitalize",children:e.propertycode?e.propertycode:"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Landlord Name:"," "]}),t("p",{className:"capitalize",children:e.propertyid?(r=e.propertyid)==null?void 0:r.customername:"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Community Name:"," "]}),t("p",{className:"capitalize",children:e.propertyid?e.propertyid.communityname:"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Project Name:"," "]}),t("p",{className:"capitalize",children:e.propertyid?e.propertyid.projectname:"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Apartment No:"," "]}),t("p",{className:"capitalize",children:e.propertyid?e.propertyid.unitnumber:"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Building No: "}),t("p",{className:"capitalize",children:e.propertyid?e.propertyid.buildingname:"Not Avaiable"})]})]}),s("div",{children:[s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Tenancy contract No:"," "]}),t("p",{className:"capitalize",children:e.tenantcontractno?e.tenantcontractno:"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Tenant Name: "}),t("p",{className:"capitalize",children:e.guestname?e.guestname:"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Tenancy Start Date:"," "]}),t("p",{className:"capitalize",children:e?new Date(e.contractstartdate).toDateString():"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Tenancy Expiry Date"," "]}),t("p",{className:"capitalize",children:e?new Date(e.contractenddate).toDateString():"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Tenancy Period:"," "]}),t("p",{className:"capitalize",children:e?X(e):"Not Avaiable"})]})]}),s("div",{children:[s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Rental Amount:"," "]}),t("p",{className:"capitalize",children:e?"AED "+e.rentalamount:"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Payment Terms:"," "]}),t("p",{className:"capitalize",children:e?"AED "+Number(e.rentalamount/e.noofchequeorinstallment).toFixed(2):"Not Avaiable"})]}),s("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:["Each Installment:"," "]}),t("p",{className:"capitalize",children:e?e.noofchequeorinstallment+" installments":"Not Avaiable"})]})]})]}),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"p-[20px]",children:s(re,{responsive:"lg",bordered:!0,children:[t("thead",{className:"border bg-black-200 text-black",children:s("tr",{className:"w-[150px] h-[60px]",children:[t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"Sr no"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"RENTAL INCOME PERIOD"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"STATUS"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE NUMBER"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE DATE"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CHEQUE AMOUNT"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"EARLY TERMINATION (RENT REFUND)"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"CASH COLLECTED"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"DEPOSITED IN OWNER ACCOUNT"}),t("th",{className:"text-center border-r border-gray-500 text-[12px]",children:"BOUNCED / UNREALISED"})]})}),s("tbody",{children:[e&&((a=e==null?void 0:e.chequeDetails)==null?void 0:a.length)>0&&e.chequeDetails.map((l,n)=>s("tr",{className:"w-[150px] h-[100px]",children:[t("td",{className:"border border-gray-100 text-center",children:n+1}),t("td",{className:"border border-gray-100 text-center",children:l.someProperty?l.someProperty:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:l.someOtherProperty?l.someOtherProperty:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:l.chequenumbe?l.chequenumbe:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:l.chequedate?new Date(l.chequedate).toDateString():"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:l.totalamount?"AED "+l.totalamount:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:l.someOtherProperty?l.someOtherProperty:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:l.totalamount?"AED "+l.totalamount:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:l.chequenumbe?l.chequenumbe:"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:l.chequenumbe?l.chequenumbe:"Not Available"})]},l._id)),s("tr",{children:[t("td",{colSpan:"5",className:"border border-gray-100 text-center",children:"Total"}),s("td",{className:"border border-gray-100 text-center",children:["AED"," ",i.map(l=>l.chequeDetails.map(n=>Number(n.totalamount)).reduce((n,o)=>n+o,0))]}),t("td",{className:"border border-gray-100 text-center"}),s("td",{className:"border border-gray-100 text-center",children:["AED"," ",i.map(l=>l.chequeDetails.map(n=>Number(n.totalamount)).reduce((n,o)=>n+o,0))]}),t("td",{colSpan:"2",className:"border border-gray-100 text-center"})]})]})]})})})]})}):t(p,{children:E===!0?null:t(p,{children:t("div",{className:"pl-6",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})})})})})]})})})};export{xe as default};
