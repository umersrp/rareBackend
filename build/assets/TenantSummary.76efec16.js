import{R as $,j as t,F as p,r as l,b as g,c,C as ne,aq as ce}from"./index.5d56e3e7.js";import{L as Y}from"./Rare logo New Gif Loading.02c4dc82.js";import{T as ie}from"./Table.d6680afb.js";import{D as oe}from"./index.esm.5650a726.js";import"./jspdf.es.min.0d52b7fd.js";import"./html2canvas.esm.0eae2bf4.js";import"./index.186db273.js";const G=$.forwardRef(({indeterminate:u,...D},b)=>{const S=$.useRef(),s=b||S;return $.useEffect(()=>{s.current.indeterminate=u},[s,u]),t(p,{children:t("input",{type:"checkbox",ref:s,...D,className:"table-checkbox"})})}),de={option:(u,D)=>({...u,fontSize:"14px"})},ve=({title:u,allData:D})=>{var _,O,z,B,U;const[b,S]=l.exports.useState([]),[s,A]=l.exports.useState([]),J=localStorage.getItem("isAuth"),m=JSON.parse(J),[pe,K]=l.exports.useState();l.exports.useState(0),l.exports.useState(0),l.exports.useState();const[me,V]=l.exports.useState(),[f,W]=l.exports.useState([]),[C,I]=l.exports.useState(!1),[Q,H]=l.exports.useState(!1);l.exports.useState();const[i,P]=l.exports.useState({propertyid:"",filteredDates:[]}),[X,Z]=l.exports.useState({startDate:"",endDate:""}),[k,L]=l.exports.useState("");console.log("selectedProperty",i);const w=async e=>{H(!0),L(e);const a=await(await fetch(`http://portals.rarehomesgroup.com//tenantcontract/report/${i.propertyid}?contractstartdate=${e.startDate}&contractenddate=${e.endDate}`)).json();H(!1),P({...i,filteredDates:a==null?void 0:a.data}),A(a==null?void 0:a.data)},[E,ee]=l.exports.useState([]);l.exports.useEffect(()=>{(async()=>{const a=await(await fetch(`http://portals.rarehomesgroup.com//tenantcontract/tenantsummaryreport/${i.propertyid}`)).json();A(a==null?void 0:a.data)})()},[i.propertyid]);const te=e=>{const r=new Set;return e.filter(a=>r.has(a._id)?!1:(r.add(a._id),!0))};l.exports.useEffect(()=>{(async()=>{try{const r=`http://portals.rarehomesgroup.com//property/api/advancesearch?customerid=${m==null?void 0:m._id}&sort=descending&type=customer&page=0&perPage=all`,a=`http://portals.rarehomesgroup.com//property/api/advancesearch?owner_representative_id=${m==null?void 0:m._id}&sort=descending&type=customer&page=0&perPage=all`,n=await fetch(r);if(!n.ok&&n.status!==400)throw new Error(`API 1 failed with status: ${n.status}`);const o=n.status===400?[]:await n.json(),d=await fetch(a);if(!d.ok&&d.status!==400)throw new Error(`API 2 failed with status: ${d.status}`);const x=d.status===400?[]:await d.json(),N=[...o,...x].map(h=>h._id),v=(await Promise.all(N.map(async h=>await(await fetch(`http://portals.rarehomesgroup.com//booking/ownerrepresentative/pages?propertyid=${h}&page=0&perPage=all`)).json()))).flat([2]),y=te(v);S(y)}catch(r){console.error("Error fetching data:",r),setLoadingData(!1)}})()},[]),l.exports.useEffect(()=>{(async()=>{const r=b.map(async n=>{const{propertyid:o}=n;return await(await fetch(`http://portals.rarehomesgroup.com//property/${o}`)).json()}),a=await Promise.all(r);ee(a)})()},[b]),l.exports.useEffect(()=>{if(I(!0),E.length){const e=[...new Map(E.map(a=>[a._id,a])).values()],r=e==null?void 0:e.map(a=>({label:a.unitnumber+" | "+a.communityname+" | "+a.projectname+" | "+a.buildingname,value:a._id}));I(!1),W(r)}},[E]),l.exports.useState(!1);const M=async()=>{L(""),A([]),P({propertyid:""}),Z({startDate:null,endDate:null})};l.exports.useEffect(()=>{var r;let e=0;for(let a=0;a<(s==null?void 0:s.length);a++){let n=parseInt((r=s[a])==null?void 0:r.nonight);e+=n}K(e)},[s==null?void 0:s.length]),l.exports.useEffect(()=>{let e=s.map(r=>Number(r.roomrenthostpayable)).reduce((r,a)=>r+a,0);V(e)},[s==null?void 0:s.length]),l.exports.useRef(null);const ae=e=>{const{contractstartdate:r,contractenddate:a}=e;let n=new Date(r),o=new Date(a);return(o.getFullYear()-n.getFullYear())*12+(o.getMonth()-n.getMonth())+" Months"},re=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:r})=>t("span",{children:r.indexOf(e)+1})},{Header:"guest name",accessor:"guestname",Cell:e=>{var r,a,n,o,d;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?((n=(a=e==null?void 0:e.cell)==null?void 0:a.value)==null?void 0:n.slice(0,15))+(((d=(o=e==null?void 0:e.cell)==null?void 0:o.value)==null?void 0:d.length)>15?"...":""):"Not Available"})}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var r,a;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Booking Ref#",accessor:"confirmationcode",Cell:e=>{var r,a,n,o;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(r=e==null?void 0:e.cell)!=null&&r.value?((a=e==null?void 0:e.cell)==null?void 0:a.value.slice(0,15))+(((o=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:o.length)>15?"...":""):"Not Available"})})})}},{Header:"checkin date",accessor:"checkindate",Cell:e=>{var r,a;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"checkout date",accessor:"checkoutdate",Cell:e=>{var r,a;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var r,a;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"RATE PER DAY",accessor:"tourismfee",Cell:e=>{var o,d,x,T,N,j,v,y,h,R,F,q;let r=(x=(d=(o=e==null?void 0:e.cell)==null?void 0:o.row)==null?void 0:d.original)!=null&&x.nonight?parseFloat((j=(N=(T=e==null?void 0:e.cell)==null?void 0:T.row)==null?void 0:N.original)==null?void 0:j.nonight):0,n=((h=(y=(v=e==null?void 0:e.cell)==null?void 0:v.row)==null?void 0:y.original)!=null&&h.roomrenthostpayable?parseFloat((q=(F=(R=e==null?void 0:e.cell)==null?void 0:R.row)==null?void 0:F.original)==null?void 0:q.roomrenthostpayable):0)/r;return t("span",{children:n?parseFloat(n).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var r,a;return t("span",{children:(r=e==null?void 0:e.cell)!=null&&r.value?parseFloat((a=e==null?void 0:e.cell)==null?void 0:a.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}}],se=l.exports.useMemo(()=>re,[]),le=l.exports.useMemo(()=>s);return g.exports.useTable({columns:se,data:le,initialState:{pageIndex:0,pageSize:50}},g.exports.useGlobalFilter,g.exports.useSortBy,g.exports.usePagination,g.exports.useRowSelect,e=>{e.visibleColumns.push(r=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:a})=>t("div",{children:t(G,{...a()})}),Cell:({row:a})=>t("div",{children:t(G,{...a.getToggleRowSelectedProps()})})},...r])}),console.log("==========>",s),t(p,{children:t("div",{className:"xl:col-span-2 col-span-1",children:c(ne,{title:"Tenancy Summary Report",children:[t("div",{className:"flex flex-row-reverse"}),c("div",{children:[c("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[C===!0?null:t(p,{children:t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),t("div",{className:"w-[100%] col-span-3",children:C===!0?t(p,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:Y,width:150,height:150})})}):t(p,{children:t(ce,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:f,value:f&&k?f.filter(function(e){return e.value===(i==null?void 0:i.propertyid)}):f.filter(function(e){return e.value===(i==null?void 0:i.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{k?M():P({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:de,id:"hh"})})})]}),"  ",(i==null?void 0:i.propertyid)&&t(p,{children:c("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(oe,{value:X,inputClassName:"input-class",containerClassName:"container-class",onChange:w})})}),k&&t(p,{children:t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",onClick:M,children:"Reset"})})})})})]})})]}),Q===!0?t(p,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:Y,width:150,height:150})})}):s&&s.length?t(p,{children:t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:c("div",{className:"overflow-hidden p-[20px] ",children:[c("div",{className:"w-[100%] col-span-3",children:[t("div",{className:"w-[100%] col-span-3 mb-4",children:t("div",{className:"borderBottom"})}),t("h4",{className:"text-lg font-semibold text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"CONTRACT DETAILS"})]}),t("div",{className:"mt-[25px] flex justify-between",children:c("div",{children:[c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Landlord Name: "}),t("p",{className:"capitalize",children:s?(_=s[0])==null?void 0:_.propertyid.ownernamedeed:"Not Avaiable"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Community Name: "}),t("p",{className:"capitalize",children:s?(O=s[0])==null?void 0:O.propertyid.communityname:"Not Avaiable"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Project Name: "}),t("p",{className:"capitalize",children:s?(z=s[0])==null?void 0:z.propertyid.projectname:"Not Avaiable"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Apartment No: "}),t("p",{className:"capitalize",children:s?(B=s[0])==null?void 0:B.propertyid.unitnumber:"Not Avaiable"})]}),c("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Building No: "}),t("p",{className:"capitalize",children:s?(U=s[0])==null?void 0:U.propertyid.buildingname:"Not Avaiable"})]})]})}),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"p-[20px]",children:c(ie,{responsive:"lg",bordered:!0,className:"w-[1280px]",children:[t("thead",{className:"border bg-black-200 text-black",children:c("tr",{className:"w-[150px] h-[60px]",children:[t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Sr no"}),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy contract No:"}),t("th",{className:"text-center border-r border-gray-500 text-[14px] w-[120px]",children:"Status"}),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy Start Date:"}),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy Expiry Date"}),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Tenancy Period:"}),t("th",{className:"text-center border-r border-gray-500 text-[14px]",children:"Rental Amount"})]})}),c("tbody",{children:[i.propertyid&&s&&s.length>0&&s.map((e,r)=>t(p,{children:c("tr",{children:[t("td",{className:"border border-gray-100 text-center",children:r+1}),t("td",{className:"border border-gray-100 text-center",children:e.tenantcontractno?e.tenantcontractno:"Not Available"}),t("td",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${new Date(e.contractenddate)>new Date?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:new Date(e.contractenddate)>new Date?"Active":"Expired"}),t("td",{className:"border border-gray-100 text-center",children:e.contractstartdate?new Date(e.contractstartdate).toDateString():"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:e.contractenddate?new Date(e.contractenddate).toDateString():"Not Available"}),t("td",{className:"border border-gray-100 text-center",children:e?ae(e):"Not Available"}),c("td",{className:"border border-gray-100 text-center",children:["AED ",e.rentalamount?e.rentalamount:"Not Available"]})]})})),c("tr",{children:[t("td",{colSpan:"6",className:"border border-gray-300 text-center"}),c("td",{className:"border border-gray-300 text-center",children:["AED ",s.map(e=>Number(e.rentalamount)).reduce((e,r)=>e+r,0)]})]})]})]})})})]})})})}):t(p,{children:C===!0?null:t(p,{children:t("div",{className:"pl-6",children:t("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})]})})})};export{ve as default};
