import{R as V,r as m,b as H,j as t,F as v,c as u,c5 as B,c6 as w,c9 as ee,C as te,aq as ae,b$ as se}from"./index.7a9ec31b.js";import{D as le}from"./index.esm.b43912ad.js";import"./jspdf.es.min.372240d0.js";import"./html2canvas.esm.0eae2bf4.js";import{L as ne}from"./Rare logo New Gif Loading.02c4dc82.js";import{E as ie}from"./exceljs.min.775ad4e7.js";import{E as re}from"./excel.9601f4f9.js";const ce=V.forwardRef(({allBooking:o,propertyData:i,loadingPropertyforData:s},F)=>{const h=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:l})=>t("span",{children:l.indexOf(e)+1})},{Header:"Guest Name",accessor:"guestname",Cell:e=>{var l,a;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})})})}},{Header:"Booking Date",accessor:"reservation_date",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?new Date((a=e==null?void 0:e.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Confirmation Code",accessor:"confirmationcode",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Check in Date",accessor:"checkindate",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})},sortType:(e,l,a,n)=>B(e,l,a,n)},{Header:"Check out Date",accessor:"checkoutdate",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"Not Available"})},sortType:(e,l,a,n)=>w(e,l,a,n)},{Header:"NO OF NIGHTS STAYED",accessor:"nonight",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?(a=e==null?void 0:e.cell)==null?void 0:a.value:"0.00"})}},{Header:"RATE PER NIGHT",accessor:"tourismfee",Cell:e=>{var d,p,g,c,C,R,r,b,T,j,X,Z;let l=(g=(p=(d=e==null?void 0:e.cell)==null?void 0:d.row)==null?void 0:p.original)!=null&&g.nonight?parseFloat((R=(C=(c=e==null?void 0:e.cell)==null?void 0:c.row)==null?void 0:C.original)==null?void 0:R.nonight):0,n=((T=(b=(r=e==null?void 0:e.cell)==null?void 0:r.row)==null?void 0:b.original)!=null&&T.roomrenthostpayable?parseFloat((Z=(X=(j=e==null?void 0:e.cell)==null?void 0:j.row)==null?void 0:X.original)==null?void 0:Z.roomrenthostpayable):0)/l;return t("span",{children:n?parseFloat(n).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var l,a;return t("span",{children:(l=e==null?void 0:e.cell)!=null&&l.value?parseFloat((a=e==null?void 0:e.cell)==null?void 0:a.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"})}}],P=m.exports.useMemo(()=>h,[]),S=m.exports.useMemo(()=>o),U=H.exports.useTable({columns:P,data:S,initialState:{pageIndex:0,pageSize:50}},H.exports.useGlobalFilter,H.exports.useSortBy,H.exports.usePagination,H.exports.useRowSelect),{getTableProps:D,getTableBodyProps:L,headerGroups:E,footerGroups:$,page:f,nextPage:K,previousPage:I,canNextPage:G,canPreviousPage:q,pageOptions:z,state:_,gotoPage:J,pageCount:W,setPageSize:O,setGlobalFilter:Y,prepareRow:A}=U,[x,Q]=m.exports.useState(0),[N,M]=m.exports.useState(0),[y,k]=m.exports.useState(0);return m.exports.useEffect(()=>{var e;if(o!=null&&o.length){let l=0;for(let a=0;a<(o==null?void 0:o.length);a++){let n=parseFloat((e=o[a])==null?void 0:e.nonight);l+=n}Q(l||0)}},[o==null?void 0:o.length]),m.exports.useEffect(()=>{if(o!=null&&o.length){let a=o.filter(n=>n.roomrenthostpayable!==void 0?n.roomrenthostpayable:null).map(n=>Number(n.roomrenthostpayable)).reduce((n,d)=>n+d,0);console.log("mmmmmmmmmmmm333",a),M(a.toFixed(2))}},[o==null?void 0:o.length]),m.exports.useEffect(()=>{if(x&&N){let e=N/x;k(e)}},[x,N]),t(v,{children:u("div",{ref:F,children:[u("div",{className:"mt-[25px]",children:[u("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Landlord Name: "}),t("p",{className:"capitalize",children:i!=null&&i.owner_name?i==null?void 0:i.owner_name:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Community Name: "}),t("p",{className:"capitalize",children:i!=null&&i.communityname?i==null?void 0:i.communityname:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Project Name: "}),t("p",{className:"capitalize",children:i!=null&&i.project_name?i==null?void 0:i.project_name:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Apartment No: "}),t("p",{className:"capitalize",children:i!=null&&i.unitnumber?i==null?void 0:i.unitnumber:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[t("p",{className:"font-semibold",children:"Building No: "}),t("p",{className:"capitalize",children:i!=null&&i.building_name?i==null?void 0:i.building_name:"Not Available"})]})]}),t("div",{className:"overflow-x-auto -mx-6 mt-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"",children:u("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...D,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:E.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(l=>u("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:"table-th",children:[l.render("Header"),t("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),u("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...L,children:[f&&f.length>0&&f.map(e=>(A(e),t(v,{children:t("tr",{...e.getRowProps(),children:e.cells.map(l=>t("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")}))})}))),u("tr",{children:[t("td",{}),t("td",{}),t("td",{}),t("td",{}),t("td",{}),t("td",{className:"font-semibold",children:"TOTAL"}),t("td",{className:"table-td font-semibold",children:(x==null?void 0:x.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" Nights"}),t("td",{className:"table-td font-semibold",children:(y==null?void 0:y.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" AED"}),t("td",{className:"table-td font-semibold",children:(N==null?void 0:N.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" AED"})]})]})]})})})})]})})}),oe={option:(o,i)=>({...o,fontSize:"14px"})},xe=()=>{var e,l;const[o,i]=ee(),[s,F]=m.exports.useState({propertyid:o.get("propertyId")?o.get("propertyId"):"",filteredDates:[]}),[h,P]=m.exports.useState([]),[S,U]=m.exports.useState(""),[D,L]=m.exports.useState(""),[E,$]=m.exports.useState([]),[f,K]=m.exports.useState(""),[I,G]=m.exports.useState(!1),[q,z]=m.exports.useState({filteredData:[],PropertyData:{}}),[_,J]=m.exports.useState({startDate:o.get("startDate")?new Date(o.get("startDate")):"",endDate:o.get("endDate")?new Date(o.get("endDate")):""}),W=m.exports.useRef(null),[O,Y]=m.exports.useState(0),[A,x]=m.exports.useState(0),[Q,N]=m.exports.useState(0);m.exports.useEffect(()=>{var a;if(h!=null&&h.length){let n=0;for(let d=0;d<(h==null?void 0:h.length);d++){let p=parseFloat((a=h[d])==null?void 0:a.nonight);n+=p}Y(n||0)}},[h==null?void 0:h.length]),m.exports.useEffect(()=>{if(h!=null&&h.length){let d=h.filter(p=>p.roomrenthostpayable!==void 0?p.roomrenthostpayable:null).map(p=>Number(p.roomrenthostpayable)).reduce((p,g)=>p+g,0);x(d.toFixed(2))}},[h==null?void 0:h.length]),m.exports.useEffect(()=>{if(O&&A){let a=A/O;N(a)}},[O,A]);async function M(a){const{filteredData:n,PropertyData:d}=a;let p=[];p.push(d);const g=new ie.Workbook,c=g.addWorksheet("Sheet1");if(c.mergeCells("A1:T1"),c.addRow(["Complete Booking Details"]),c.columns=[{header:"Landlord Name",key:"",width:30},{header:"Community Name",key:"",width:40},{header:"Project Name",key:"",width:25},{header:"Apartment No",key:"",width:25},{header:"Building No",key:"",width:25},{header:"Date Range",key:"",width:25},{header:"",key:"",width:25}],p&&([["Landlord Name","Community Name","Project Name","Apartment No","Building No","Date Range"],...p.map(r=>[r.owner_name,r.community_name,r.project_name,r.unitnumber,r.building_name])].forEach(r=>{c.addRow(r)}),c.addRow([]),[["Date Range"],...p.map(r=>[r.date_range])].forEach(r=>{c.addRow(r)}),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([])),c.addRow(["GUEST NAME","BOOKING DATE","CONFIRMATION CODE","CHECK IN DATE","CHECK OUT DATE","NO OF NIGHTS STAYED","RATE PER NIGHTS","BOOKING AMOUNT"]),n){n.forEach(r=>{c.addRow([r.guestname,r.Created_At,r.confirmationcode,r.checkin_date,r.checkout_date,r.nonight,"AED "+Number(r.roomrenthostpayable/r.nonight).toFixed(2),"AED "+Number(r.roomrenthostpayable).toFixed(2)])}),c.addRow([]);const C=n.map(r=>{const{roomrenthostpayable:b,nonight:T}=r;return JSON.parse(Number(b/T).toFixed(2))}).reduce((r,b)=>r+b,0),R=c.addRow(["","","","TOTAL","",O.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" Nights","AED "+C.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"AED "+A.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]);{const r={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};R.fill=r;const b={argb:"FFFFFF"};[R].forEach(T=>{T.eachCell({includeEmpty:!0},j=>{j.font={color:b}})})}}c.getRow(2).font={color:{argb:"FFFFFF"}},c.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},c.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},c.getRow(12).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},c.getRow(3).font={color:{argb:"FFFFFF"}},c.getRow(12).font={color:{argb:"FFFFFF"}},c.getRow(6).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},c.getRow(6).font={color:{argb:"FFFFFF"}},g.xlsx.writeBuffer().then(C=>{se.exports.saveAs(new Blob([C],{type:"application/octet-stream"}),"bookings.xlsx")})}m.exports.useEffect(()=>{fetch("http://portals.rarehomesgroup.com/property").then(a=>a.json()).then(a=>{const n=a==null?void 0:a.map(d=>({label:d.unitnumber+" | "+d.communityname+" | "+d.projectname+" | "+d.buildingname,value:d._id}));$(n)})},[]),m.exports.useEffect(()=>{(async()=>{if(s!=null&&s.propertyid){const d=await(await fetch(`http://portals.rarehomesgroup.com/property/${s==null?void 0:s.propertyid}`)).json();d&&K(d),_.startDate&&_.endDate&&k(_)}})()},[s==null?void 0:s.propertyid]),m.exports.useEffect(()=>{if(S!=null&&S.length&&(s==null?void 0:s.propertyid)&&(s==null?void 0:s.startDate)&&(s==null?void 0:s.endDate)){const a=S.filter(n=>{let d=!0;return s.propertyid&&n.propertyid!==s.propertyid&&(d=!1),(n==null?void 0:n.checkindate)<(s==null?void 0:s.startDate)&&(n==null?void 0:n.checkindate)>(s==null?void 0:s.endDate)&&(d=!1),d});P(a)}},[s==null?void 0:s.propertyid,s==null?void 0:s.startDate,s==null?void 0:s.endDate,S]);const y=()=>{L(""),F({...s,filteredDates:[]}),J({startDate:null,endDate:null})},k=async a=>{if(G(!0),L(a),!a){F({...s,filteredDates:[]});return}const n={owner_name:f.owner_name,building_name:f.building_name,community_name:f.communityname,project_name:f.project_name,unitnumber:f.unitnumber,date_range:a.startDate+" "+a.endDate};try{const g=(await(await fetch(`http://portals.rarehomesgroup.com/booking/api/reservationdate?propertyid=${s==null?void 0:s.propertyid}&checkindate=${a.startDate}&checkoutdate=${a.endDate}`)).json()).filter(c=>c.propertyid===s.propertyid&&c.cancelled===!1);G(!1),F({...s,filteredDates:g}),P(g),z({filteredData:g,PropertyData:n})}catch{console.log("error"),G(!1),F({...s,filteredDates:[]}),P([]),z({filteredData:[],PropertyData:n})}};return t(v,{children:t("div",{className:"xl:col-span-2 col-span-1",children:u(te,{title:"Complete Booking Details",children:[s&&((e=s.filteredDates)==null?void 0:e.length)?t(v,{children:t("div",{className:"flex flex-row-reverse",children:u("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>M(q),children:[t("img",{src:re,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):null,u("div",{children:[u("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[t("div",{className:"w-[100%] col-span-3",children:t("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})}),t("div",{className:"w-[100%] col-span-3",children:t(ae,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:E,value:E&&D?E.filter(function(a){return a.value===(s==null?void 0:s.propertyid)}):E.filter(function(a){return a.value===(s==null?void 0:s.propertyid)}),onChange:a=>{D?y():F({...s,propertyid:a==null?void 0:a.value})},styles:oe,id:"hh",placeholder:"Select and Search property"})})]}),s.propertyid&&t(v,{children:I===!0?null:u("div",{className:"flex justify-end mt-[25px]",children:[t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(le,{value:_,inputClassName:"input-class",containerClassName:"container-class",onChange:k,placeholder:"SELECT DATE"})})}),D&&t("div",{className:"flex justify-end",children:t("div",{className:"w-[90px]",children:t("div",{className:"date-range-custom relative",children:t("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:y,children:"Reset"})})})})]})})]}),I===!0?t(v,{children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("img",{src:ne,width:150,height:150})})}):(l=s.filteredDates)!=null&&l.length?t(v,{children:t(ce,{loadingPropertyforData:I,allBooking:s.filteredDates,propertyData:f,ref:W})}):f?t(v,{children:t("h6",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})}):""]})})})};export{xe as default};
