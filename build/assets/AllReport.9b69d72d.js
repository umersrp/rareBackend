import{R as B,r as u,b as k,j as l,F,ca as w,cb as ee,cc as le,e as te,ap as ie,b$ as ae}from"./index.9f4d419b.js";import{D as oe}from"./index.esm.f1539909.js";import"./jspdf.es.min.7c1216f9.js";import"./html2canvas.esm.0eae2bf4.js";import{L as ne}from"./Rare logo New Gif Loading.02c4dc82.js";import{E as re}from"./exceljs.min.4f06160d.js";import{E as me}from"./excel.9601f4f9.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\booking-report\\ReportTable.jsx";const se=B.forwardRef(({allBooking:d,propertyData:r,loadingPropertyforData:i},S)=>{const f=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:o})=>l("span",{children:o.indexOf(e)+1},void 0,!1,{fileName:a,lineNumber:21,columnNumber:24},void 0)},{Header:"Guest Name",accessor:"guestname",Cell:e=>{var o,t;return l("div",{children:l("span",{className:"inline-flex items-center",children:l("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(o=e==null?void 0:e.cell)!=null&&o.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:31,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:30,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:29,columnNumber:21},void 0)}},{Header:"Booking Date",accessor:"reservation_date",Cell:e=>{var o,t;return l("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:a,lineNumber:44,columnNumber:24},void 0)}},{Header:"Confirmation Code",accessor:"confirmationcode",Cell:e=>{var o,t;return l("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:51,columnNumber:24},void 0)}},{Header:"Check in Date",accessor:"checkindate",Cell:e=>{var o,t;return l("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:58,columnNumber:24},void 0)},sortType:(e,o,t,n)=>w(e,o,t,n)},{Header:"Check out Date",accessor:"checkoutdate",Cell:e=>{var o,t;return l("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:a,lineNumber:66,columnNumber:24},void 0)},sortType:(e,o,t,n)=>ee(e,o,t,n)},{Header:"NO OF NIGHTS STAYED",accessor:"nonight",Cell:e=>{var o,t;return l("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"0.00"},void 0,!1,{fileName:a,lineNumber:74,columnNumber:24},void 0)}},{Header:"RATE PER NIGHT",accessor:"tourismfee",Cell:e=>{var c,b,h,s,E,P,m,x,T,L,X,Z;let o=(h=(b=(c=e==null?void 0:e.cell)==null?void 0:c.row)==null?void 0:b.original)!=null&&h.nonight?parseFloat((P=(E=(s=e==null?void 0:e.cell)==null?void 0:s.row)==null?void 0:E.original)==null?void 0:P.nonight):0,n=((T=(x=(m=e==null?void 0:e.cell)==null?void 0:m.row)==null?void 0:x.original)!=null&&T.roomrenthostpayable?parseFloat((Z=(X=(L=e==null?void 0:e.cell)==null?void 0:L.row)==null?void 0:X.original)==null?void 0:Z.roomrenthostpayable):0)/o;return l("span",{className:"text-[12px]",children:[l("strong",{children:"AED"},void 0,!1,{fileName:a,lineNumber:86,columnNumber:51},void 0)," ",n?parseFloat(n).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":"0.00"]},void 0,!0,{fileName:a,lineNumber:86,columnNumber:21},void 0)}},{Header:"BOOKING AMOUNT",accessor:"roomrenthostpayable",Cell:e=>{var o,t;return l("span",{className:"text-[12px]",children:[l("strong",{children:"AED"},void 0,!1,{fileName:a,lineNumber:95,columnNumber:51},void 0)," ",(o=e==null?void 0:e.cell)!=null&&o.value?parseFloat((t=e==null?void 0:e.cell)==null?void 0:t.value).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+"":"0.00"]},void 0,!0,{fileName:a,lineNumber:95,columnNumber:21},void 0)}}],D=u.exports.useMemo(()=>f,[]),C=u.exports.useMemo(()=>d),$=k.exports.useTable({columns:D,data:C,initialState:{pageIndex:0,pageSize:50}},k.exports.useGlobalFilter,k.exports.useSortBy,k.exports.usePagination,k.exports.useRowSelect),{getTableProps:_,getTableBodyProps:H,headerGroups:A,footerGroups:K,page:v,nextPage:q,previousPage:I,canNextPage:G,canPreviousPage:J,pageOptions:M,state:O,gotoPage:W,pageCount:Y,setPageSize:j,setGlobalFilter:Q,prepareRow:y}=$,[p,V]=u.exports.useState(0),[g,U]=u.exports.useState(0),[R,z]=u.exports.useState(0);return u.exports.useEffect(()=>{var e;if(d!=null&&d.length){let o=0;for(let t=0;t<(d==null?void 0:d.length);t++){let n=parseFloat((e=d[t])==null?void 0:e.nonight);o+=n}V(o||0)}},[d==null?void 0:d.length]),u.exports.useEffect(()=>{if(d!=null&&d.length){let t=d.filter(n=>n.roomrenthostpayable!==void 0?n.roomrenthostpayable:null).map(n=>Number(n.roomrenthostpayable)).reduce((n,c)=>n+c,0);console.log("mmmmmmmmmmmm333",t),U(t.toFixed(2))}},[d==null?void 0:d.length]),u.exports.useEffect(()=>{if(p&&g){let e=g/p;z(e)}},[p,g]),l(F,{children:l("div",{ref:S,children:[l("div",{className:"mt-[25px]",children:[l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Landlord Name: "},void 0,!1,{fileName:a,lineNumber:179,columnNumber:29},void 0),l("p",{className:"capitalize",children:r!=null&&r.owner_name?r==null?void 0:r.owner_name:"Not Available"},void 0,!1,{fileName:a,lineNumber:180,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:178,columnNumber:25},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Community Name: "},void 0,!1,{fileName:a,lineNumber:183,columnNumber:29},void 0),l("p",{className:"capitalize",children:r!=null&&r.communityname?r==null?void 0:r.communityname:"Not Available"},void 0,!1,{fileName:a,lineNumber:184,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:182,columnNumber:25},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Project Name: "},void 0,!1,{fileName:a,lineNumber:187,columnNumber:29},void 0),l("p",{className:"capitalize",children:r!=null&&r.project_name?r==null?void 0:r.project_name:"Not Available"},void 0,!1,{fileName:a,lineNumber:188,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:186,columnNumber:25},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Apartment No: "},void 0,!1,{fileName:a,lineNumber:191,columnNumber:29},void 0),l("p",{className:"capitalize",children:r!=null&&r.unitnumber?r==null?void 0:r.unitnumber:"Not Available"},void 0,!1,{fileName:a,lineNumber:192,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:190,columnNumber:25},void 0),l("div",{className:"flex gap-x-[10px]",children:[l("p",{className:"font-semibold",children:"Building No: "},void 0,!1,{fileName:a,lineNumber:195,columnNumber:29},void 0),l("p",{className:"capitalize",children:r!=null&&r.building_name?r==null?void 0:r.building_name:"Not Available"},void 0,!1,{fileName:a,lineNumber:196,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:194,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:177,columnNumber:21},void 0),l("div",{className:"overflow-x-auto -mx-6 mt-6",children:l("div",{className:"inline-block min-w-full align-middle",children:l("div",{className:"",children:l("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",..._,children:[l("thead",{className:"bg-slate-200 dark:bg-slate-700",children:A.map(e=>l("tr",{...e.getHeaderGroupProps(),children:e.headers.map(o=>l("th",{...o.getHeaderProps(o.getSortByToggleProps()),scope:"col",className:"table-th",children:[o.render("Header"),l("span",{children:o.isSorted?o.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:a,lineNumber:217,columnNumber:61},void 0)]},void 0,!0,{fileName:a,lineNumber:211,columnNumber:57},void 0))},void 0,!1,{fileName:a,lineNumber:208,columnNumber:45},void 0))},void 0,!1,{fileName:a,lineNumber:206,columnNumber:37},void 0),l("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...H,children:[v&&v.length>0&&v.map(e=>(y(e),l(F,{children:l("tr",{...e.getRowProps(),children:e.cells.map(o=>l("td",{...o.getCellProps(),className:"table-td",children:o.render("Cell")},void 0,!1,{fileName:a,lineNumber:238,columnNumber:65},void 0))},void 0,!1,{fileName:a,lineNumber:235,columnNumber:53},void 0)},void 0,!1))),l("tr",{children:[l("td",{},void 0,!1,{fileName:a,lineNumber:248,columnNumber:45},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:249,columnNumber:45},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:250,columnNumber:45},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:251,columnNumber:45},void 0),l("td",{},void 0,!1,{fileName:a,lineNumber:252,columnNumber:45},void 0),l("td",{className:"font-semibold",children:"TOTAL"},void 0,!1,{fileName:a,lineNumber:253,columnNumber:45},void 0),l("td",{className:"table-td font-semibold",children:(p==null?void 0:p.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" Nights"},void 0,!1,{fileName:a,lineNumber:254,columnNumber:45},void 0),l("td",{className:"table-td font-semibold",children:["AED   ",(R==null?void 0:R.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+""]},void 0,!0,{fileName:a,lineNumber:257,columnNumber:45},void 0),l("td",{className:"table-td font-semibold",children:["AED  ",(g==null?void 0:g.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+""]},void 0,!0,{fileName:a,lineNumber:260,columnNumber:45},void 0)]},void 0,!0,{fileName:a,lineNumber:247,columnNumber:41},void 0)]},void 0,!0,{fileName:a,lineNumber:226,columnNumber:37},void 0)]},void 0,!0,{fileName:a,lineNumber:202,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:201,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:200,columnNumber:25},void 0)},void 0,!1,{fileName:a,lineNumber:199,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:176,columnNumber:17},void 0)},void 0,!1)});var N="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\booking-report\\AllReport.jsx";const de={option:(d,r)=>({...d,fontSize:"14px"})},pe=()=>{var e,o;const[d,r]=le(),[i,S]=u.exports.useState({propertyid:d.get("propertyId")?d.get("propertyId"):"",filteredDates:[]}),[f,D]=u.exports.useState([]),[C,$]=u.exports.useState(""),[_,H]=u.exports.useState(""),[A,K]=u.exports.useState([]),[v,q]=u.exports.useState(""),[I,G]=u.exports.useState(!1),[J,M]=u.exports.useState({filteredData:[],PropertyData:{}}),[O,W]=u.exports.useState({startDate:d.get("startDate")?new Date(d.get("startDate")):"",endDate:d.get("endDate")?new Date(d.get("endDate")):""}),Y=u.exports.useRef(null),[j,Q]=u.exports.useState(0),[y,p]=u.exports.useState(0),[V,g]=u.exports.useState(0);u.exports.useEffect(()=>{var t;if(f!=null&&f.length){let n=0;for(let c=0;c<(f==null?void 0:f.length);c++){let b=parseFloat((t=f[c])==null?void 0:t.nonight);n+=b}Q(n||0)}},[f==null?void 0:f.length]),u.exports.useEffect(()=>{if(f!=null&&f.length){let c=f.filter(b=>b.roomrenthostpayable!==void 0?b.roomrenthostpayable:null).map(b=>Number(b.roomrenthostpayable)).reduce((b,h)=>b+h,0);p(c.toFixed(2))}},[f==null?void 0:f.length]),u.exports.useEffect(()=>{if(j&&y){let t=y/j;g(t)}},[j,y]);async function U(t){const{filteredData:n,PropertyData:c}=t;let b=[];b.push(c);const h=new re.Workbook,s=h.addWorksheet("Sheet1");if(s.mergeCells("A1:T1"),s.addRow(["Complete Booking Details"]),s.columns=[{header:"Landlord Name",key:"",width:30},{header:"Community Name",key:"",width:40},{header:"Project Name",key:"",width:25},{header:"Apartment No",key:"",width:25},{header:"Building No",key:"",width:25},{header:"Date Range",key:"",width:25},{header:"",key:"",width:25}],b&&([["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...b.map(m=>[m.owner_name,m.community_name,m.project_name,m.unitnumber,m.building_name])].forEach(m=>{s.addRow(m)}),s.addRow([]),[["Date Range"],...b.map(m=>[Date(m.date_range)])].forEach(m=>{s.addRow(m)}),s.addRow([]),s.addRow([]),s.addRow([]),s.addRow([])),s.addRow(["GUEST NAME","BOOKING DATE","CONFIRMATION CODE","CHECK IN DATE","CHECK OUT DATE","NO OF NIGHTS STAYED","RATE PER NIGHTS","BOOKING AMOUNT"]),n){n.forEach(m=>{s.addRow([m.guestname,m.Created_At,m.confirmationcode,m.checkin_date,m.checkout_date,m.nonight,"AED "+Number(m.roomrenthostpayable/m.nonight).toFixed(2),"AED "+Number(m.roomrenthostpayable).toFixed(2)])}),s.addRow([]);const E=n.map(m=>{const{roomrenthostpayable:x,nonight:T}=m;return JSON.parse(Number(x/T).toFixed(2))}).reduce((m,x)=>m+x,0),P=s.addRow(["","","","TOTAL","",j.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" Nights","AED "+E.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"AED "+y.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]);{const m={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};P.fill=m;const x={argb:"FFFFFF"};[P].forEach(T=>{T.eachCell({includeEmpty:!0},L=>{L.font={color:x}})})}}s.getRow(2).font={color:{argb:"FFFFFF"}},s.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},s.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},s.getRow(12).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},s.getRow(3).font={color:{argb:"FFFFFF"}},s.getRow(12).font={color:{argb:"FFFFFF"}},s.getRow(6).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},s.getRow(6).font={color:{argb:"FFFFFF"}},h.xlsx.writeBuffer().then(E=>{ae.exports.saveAs(new Blob([E],{type:"application/octet-stream"}),"bookings.xlsx")})}u.exports.useEffect(()=>{fetch("http://dev-rare.srp.ai/property").then(t=>t.json()).then(t=>{const n=t==null?void 0:t.map(c=>({label:c.unitnumber+" | "+c.communityname+" | "+c.projectname+" | "+c.buildingname,value:c._id}));K(n)})},[]),u.exports.useEffect(()=>{(async()=>{if(i!=null&&i.propertyid){const c=await(await fetch(`http://dev-rare.srp.ai/property/${i==null?void 0:i.propertyid}`)).json();c&&q(c),O.startDate&&O.endDate&&z(O)}})()},[i==null?void 0:i.propertyid]),u.exports.useEffect(()=>{if(C!=null&&C.length&&(i==null?void 0:i.propertyid)&&(i==null?void 0:i.startDate)&&(i==null?void 0:i.endDate)){const t=C.filter(n=>{let c=!0;return i.propertyid&&n.propertyid!==i.propertyid&&(c=!1),(n==null?void 0:n.checkindate)<(i==null?void 0:i.startDate)&&(n==null?void 0:n.checkindate)>(i==null?void 0:i.endDate)&&(c=!1),c});D(t)}},[i==null?void 0:i.propertyid,i==null?void 0:i.startDate,i==null?void 0:i.endDate,C]);const R=()=>{H(""),S({...i,filteredDates:[]}),W({startDate:null,endDate:null})},z=async t=>{if(G(!0),H(t),!t){S({...i,filteredDates:[]});return}const n={owner_name:v.owner_name,building_name:v.building_name,community_name:v.communityname,project_name:v.project_name,unitnumber:v.unitnumber,date_range:t.startDate+" "+t.endDate};try{const h=(await(await fetch(`http://dev-rare.srp.ai/booking/api/reservationdate?propertyid=${i==null?void 0:i.propertyid}&checkindate=${t.startDate}&checkoutdate=${t.endDate}`)).json()).filter(s=>s.propertyid===i.propertyid&&s.cancelled===!1);G(!1),S({...i,filteredDates:h}),D(h),M({filteredData:h,PropertyData:n})}catch{console.log("error"),G(!1),S({...i,filteredDates:[]}),D([]),M({filteredData:[],PropertyData:n})}};return l(F,{children:l("div",{className:"xl:col-span-2 col-span-1",children:l(te,{title:"Complete Booking Details",children:[i&&((e=i.filteredDates)==null?void 0:e.length)?l(F,{children:l("div",{className:"flex flex-row-reverse",children:l("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>U(J),children:[l("img",{src:me,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:N,lineNumber:410,columnNumber:33},void 0),l("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:N,lineNumber:411,columnNumber:33},void 0)]},void 0,!0,{fileName:N,lineNumber:409,columnNumber:33},void 0)},void 0,!1,{fileName:N,lineNumber:408,columnNumber:29},void 0)},void 0,!1):null,l("div",{children:[l("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[l("div",{className:"w-[100%] col-span-3",children:l("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:N,lineNumber:423,columnNumber:33},void 0)},void 0,!1,{fileName:N,lineNumber:422,columnNumber:29},void 0),l("div",{className:"w-[100%] col-span-3",children:l(ie,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:A,value:A&&_?A.filter(function(t){return t.value===(i==null?void 0:i.propertyid)}):A.filter(function(t){return t.value===(i==null?void 0:i.propertyid)}),onChange:t=>{_?R():S({...i,propertyid:t==null?void 0:t.value})},styles:de,id:"hh",placeholder:"Select and Search property"},void 0,!1,{fileName:N,lineNumber:431,columnNumber:33},void 0)},void 0,!1,{fileName:N,lineNumber:427,columnNumber:29},void 0)]},void 0,!0,{fileName:N,lineNumber:418,columnNumber:25},void 0),i.propertyid&&l(F,{children:I===!0?null:l("div",{className:"flex justify-end mt-[25px]",children:[l("div",{className:"w-[150px]",children:l("div",{className:"date-range-custom relative",children:l(oe,{value:O,inputClassName:"input-class",containerClassName:"container-class",onChange:z,placeholder:"SELECT DATE"},void 0,!1,{fileName:N,lineNumber:482,columnNumber:49},void 0)},void 0,!1,{fileName:N,lineNumber:481,columnNumber:45},void 0)},void 0,!1,{fileName:N,lineNumber:480,columnNumber:41},void 0),_&&l("div",{className:"flex justify-end",children:l("div",{className:"w-[90px]",children:l("div",{className:"date-range-custom relative",children:l("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:R,children:"Reset"},void 0,!1,{fileName:N,lineNumber:496,columnNumber:61},void 0)},void 0,!1,{fileName:N,lineNumber:495,columnNumber:57},void 0)},void 0,!1,{fileName:N,lineNumber:494,columnNumber:53},void 0)},void 0,!1,{fileName:N,lineNumber:493,columnNumber:49},void 0)]},void 0,!0,{fileName:N,lineNumber:479,columnNumber:37},void 0)},void 0,!1)]},void 0,!0,{fileName:N,lineNumber:417,columnNumber:21},void 0),I===!0?l(F,{children:l("div",{className:"flex items-center justify-center h-[100%]",children:l("img",{src:ne,width:150,height:150},void 0,!1,{fileName:N,lineNumber:515,columnNumber:37},void 0)},void 0,!1,{fileName:N,lineNumber:514,columnNumber:25},void 0)},void 0,!1):(o=i.filteredDates)!=null&&o.length?l(F,{children:l(se,{loadingPropertyforData:I,allBooking:i.filteredDates,propertyData:v,ref:Y},void 0,!1,{fileName:N,lineNumber:521,columnNumber:29},void 0)},void 0,!1):v?l(F,{children:l("h6",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:N,lineNumber:526,columnNumber:30},void 0)},void 0,!1):""]},void 0,!0,{fileName:N,lineNumber:404,columnNumber:17},void 0)},void 0,!1,{fileName:N,lineNumber:403,columnNumber:13},void 0)},void 0,!1)};export{pe as default};
