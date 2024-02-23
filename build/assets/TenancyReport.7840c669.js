import{R as X,r as o,b as S,j as s,F as x,c as h,C as Z,aq as V}from"./index.c54703c8.js";import{D}from"./index.esm.7abe9e7b.js";import"./jspdf.es.min.0bf79d92.js";import"./html2canvas.esm.0eae2bf4.js";import{E as k}from"./excel.9601f4f9.js";import{E as B}from"./exceljs.min.1234236f.js";const K=X.forwardRef(({allBooking:e,propertyData:r},u)=>{const F=t=>{const{contractstartdate:n,contractenddate:a}=t;let m=new Date(n),T=new Date(a);return(T.getFullYear()-m.getFullYear())*12+(T.getMonth()-m.getMonth())+" Months"},N=[{Header:"Sr no",accessor:"id",Cell:({row:t,flatRows:n})=>s("span",{children:n.indexOf(t)+1})},{Header:"Tenancy contract No",accessor:"tenantcontractno",Cell:t=>{var n,a;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?(a=t==null?void 0:t.cell)==null?void 0:a.value:"Not Available"})}},{Header:"Status",accessor:t=>`${t.contractenddate}`,Cell:t=>{var n,a;return s("span",{className:"block w-full",children:s("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${new Date((n=t==null?void 0:t.cell)==null?void 0:n.value)>new Date?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"} `,children:new Date((a=t==null?void 0:t.cell)==null?void 0:a.value)>new Date?"Active":"Expired"})})}},{Header:"Tenancy Start Date",accessor:"contractstartdate",Cell:t=>{var n,a;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?new Date((a=t==null?void 0:t.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Tenancy Expiry Date",accessor:"contractenddate",Cell:t=>{var n,a;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?new Date((a=t==null?void 0:t.cell)==null?void 0:a.value).toDateString():"Not Available"})}},{Header:"Tenancy Period",accessor:"refund",Cell:t=>{const{original:n}=t.row;return console.log("original",n),s("span",{children:n?F(n):"Not Available"})}},{Header:"Rental Amount",accessor:"rentalamount",Cell:t=>{var n,a,m;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?((m=Number((a=t==null?void 0:t.cell)==null?void 0:a.value))==null?void 0:m.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}))+" AED":"Not Available"})}}],P=o.exports.useMemo(()=>N,[]),g=o.exports.useMemo(()=>e),y=S.exports.useTable({columns:P,data:g,initialState:{pageIndex:0,pageSize:50}},S.exports.useGlobalFilter,S.exports.useSortBy,S.exports.usePagination,S.exports.useRowSelect),{getTableProps:j,getTableBodyProps:w,headerGroups:M,footerGroups:L,page:f,nextPage:$,previousPage:Q,canNextPage:I,canPreviousPage:p,pageOptions:G,state:Y,gotoPage:q,pageCount:U,setPageSize:O,setGlobalFilter:W,prepareRow:C}=y,[v,H]=o.exports.useState(0),[z,E]=o.exports.useState(0),[d,i]=o.exports.useState(0),[l,b]=o.exports.useState(0),[c,R]=o.exports.useState(0),[_,A]=o.exports.useState(0);return o.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(n=>{const{rentalamount:a}=n;return Number(a)});H(t.reduce((n,a)=>n+a,0))}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(n=>{const{totalNonight:a}=n;return a});E(t.reduce((n,a)=>n+a,0))}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(a=>{const{Occupancy:m}=a;return m});let n=Math.round(t.reduce((a,m)=>a+m,0)/t.length);b(n)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let a=0;a<(e==null?void 0:e.length);a++){let m=parseFloat((t=e[a])==null?void 0:t.totalNonight);n+=m}R(n||0)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let a=0;a<(e==null?void 0:e.length);a++){let m=parseFloat((t=e[a])==null?void 0:t.averageCost);n+=m}A(n||0)}},[e==null?void 0:e.length]),o.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let a=0;a<(e==null?void 0:e.length);a++){let m=parseFloat((t=e[a])==null?void 0:t.totalhostpayble);n+=m}i(n||0)}},[e==null?void 0:e.length]),s(x,{children:e&&(e==null?void 0:e.length)>0?s(x,{children:h("div",{ref:u,children:[h("div",{className:"mt-[25px]",children:[h("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Landlord Name: "}),s("p",{className:"capitalize",children:r!=null&&r.owner_name?r==null?void 0:r.owner_name:"Not Available"})]}),h("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Community Name: "}),s("p",{className:"capitalize",children:r!=null&&r.communityname?r==null?void 0:r.communityname:"Not Available"})]}),h("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Project Name: "}),s("p",{className:"capitalize",children:r!=null&&r.project_name?r==null?void 0:r.project_name:"Not Available"})]}),h("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Apartment No: "}),s("p",{className:"capitalize",children:r!=null&&r.unitnumber?r==null?void 0:r.unitnumber:"Not Available"})]}),h("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Building No: "}),s("p",{className:"capitalize",children:r!=null&&r.building_name?r==null?void 0:r.building_name:"Not Available"})]})]}),s("div",{className:"overflow-x-auto -mx-6 mt-6",children:s("div",{className:"inline-block min-w-full align-middle",children:s("div",{className:"",children:h("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...j,children:[s("thead",{className:"bg-slate-200 dark:bg-slate-700",children:M.map(t=>s("tr",{...t.getHeaderGroupProps(),children:t.headers.map(n=>h("th",{...n.getHeaderProps(n.getSortByToggleProps()),scope:"col",className:"table-th",children:[n.render("Header"),s("span",{children:n.isSorted?n.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),h("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...w,children:[f&&f.length>0&&f.map(t=>(C(t),s(x,{children:s("tr",{...t.getRowProps(),children:t.cells.map(n=>s("td",{...n.getCellProps(),className:"table-td",children:n.render("Cell")}))})}))),h("tr",{className:"borderBottom",children:[s("td",{}),s("td",{}),s("td",{}),s("td",{}),s("td",{}),s("td",{className:"font-semibold",children:"GROSS RENT INCOME"}),s("td",{className:"table-td font-semibold",children:(v==null?void 0:v.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}))+" AED"})]})]})]})})})})]})}):s("div",{className:"pl-2",children:s("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})}),ee="/assets/RARE-Logo-animate.7e47c055.gif",te={option:(e,r)=>({...e,fontSize:"14px"})},le=()=>{var z,E;const[e,r]=o.exports.useState({propertyid:"",filteredDates:[]}),[u,F]=o.exports.useState([]),[N,P]=o.exports.useState(""),[g,y]=o.exports.useState(""),[j,w]=o.exports.useState(!1),[M,L]=o.exports.useState({filterData:[],propertyData:{}}),[f,$]=o.exports.useState([]),[Q,I]=o.exports.useState(0),[p,G]=o.exports.useState(""),Y=d=>{const{contractstartdate:i,contractenddate:l}=d;let b=new Date(i),c=new Date(l);return(c.getFullYear()-b.getFullYear())*12+(c.getMonth()-b.getMonth())+" Months"};o.exports.useEffect(()=>{if(u!=null&&u.length){const d=u.map(i=>{const{rentalamount:l}=i;return Number(l)});I(d.reduce((i,l)=>i+l,0))}},[u==null?void 0:u.length]),o.exports.useEffect(()=>{fetch("http://portals.rarehomesgroup.com/property").then(d=>d.json()).then(d=>{const i=d==null?void 0:d.map(l=>({label:l.unitnumber+" | "+l.communityname+" | "+l.projectname+" | "+l.buildingname,value:l._id}));$(i)})},[]),o.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){const l=await(await fetch(`http://portals.rarehomesgroup.com/property/${e==null?void 0:e.propertyid}`)).json();l&&G(l)}})()},[e==null?void 0:e.propertyid]),o.exports.useEffect(()=>{(async()=>{const l=await(await fetch("http://portals.rarehomesgroup.com/booking")).json();P(l)})()},[]);const[q,U]=o.exports.useState({startDate:"",endDate:""}),O=o.exports.useRef(null),W=async()=>{const i=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/tenantsummaryreport/${e.propertyid}`)).json();F(i.data),L(i==null?void 0:i.data),console.log("=============>",i)};o.exports.useEffect(()=>{if(N!=null&&N.length&&(e==null?void 0:e.propertyid)&&(e==null?void 0:e.startDate)&&(e==null?void 0:e.endDate)){const d=N.filter(i=>{let l=!0;return e.propertyid&&i.propertyid!==e.propertyid&&(l=!1),(i==null?void 0:i.checkindate)<(e==null?void 0:e.startDate)&&(i==null?void 0:i.checkindate)>(e==null?void 0:e.endDate)&&(l=!1),l});F(d)}W()},[e==null?void 0:e.propertyid,e==null?void 0:e.startDate,e==null?void 0:e.endDate,N]);const C=()=>{y(""),r({...e,filteredDates:[]}),U({startDate:null,endDate:null})},v=async d=>{if(console.log("newValue",d),w(!0),y(d),!d){r({...e,filteredDates:[]});return}const l=await(await fetch(`http://portals.rarehomesgroup.com/tenantcontract/report/${e.propertyid}?contractstartdate=${d.startDate}&contractenddate=${d.endDate}`)).json();w(!1),r({...e,filteredDates:l==null?void 0:l.data}),p.customername,p.communityname,p.projectname,p.unitnumber,p.buildingname,L({filterData:l==null?void 0:l.data,propertyData:p})},H=async d=>{console.log("Export button clicked",d);const{filterData:i,propertyData:l}=d,b=new B.Workbook,c=b.addWorksheet("Sheet1");c.mergeCells("A1:F1"),c.addRow(["TENANCY REPORTS"]),c.addRow([]),c.addRow(["Landlord Name","Community Name","Project Name","Apartment No","Building No"]),c.columns=[{header:"Landlord Name",key:"customername",width:30},{header:"Community Name",key:"communityname",width:40},{header:"Project Name",key:"projectname",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"buildingname",width:25},{header:"",key:"nonight",width:20},{header:"",key:"roomrenthostpayable",width:55}];const R=[];R.push(l),R.map(a=>{c.addRow([a.customername,a.communityname,a.projectname,a.unitnumber,a.buildingname])}),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow(["CONTRACT DETAILS"]),c.addRow([]),c.addRow(["Tenancy contract No","Tenant Name","Tenancy Start Date","Tenancy Expiry Date","Tenancy Period","RENTAL INCOME"]),c.addRow([]),i.forEach(a=>{c.addRow([a.tenantcontractno,a.guestname,new Date(a.contractstartdate).toDateString(),new Date(a.contractenddate).toDateString(),Y(a),a.rentalamount])}),c.addRow([]),c.addRow([]);const _=i.map(a=>Number(a.rentalamount)).reduce((a,m)=>a+m,0),A=c.addRow(["GROSS RENT INCOME","","","",""," AED "+_.toLocaleString()]);if(_>5e3){const a={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};A.fill=a;const m={argb:"FFFFFF"};[A].forEach(T=>{T.eachCell({includeEmpty:!0},J=>{J.font={color:m}})})}c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([]),c.addRow([]),c.getRow(2).font={bold:!0},c.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},c.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},c.getRow(4).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},c.getRow(9).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},c.getRow(11).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},c.getRow(2).font={color:{argb:"FFFFFF"}},c.getRow(4).font={color:{argb:"FFFFFF"}},c.getRow(8).font={color:{argb:"FFFFFF"}},c.getRow(11).font={color:{argb:"FFFFFF"}},c.getRow(9).font={color:{argb:"FFFFFF"}};const n=await b.xlsx.writeBuffer();saveAs(new Blob([n]),"tenancy_Summery.xlsx")};return s(x,{children:s("div",{className:"xl:col-span-2 col-span-1",children:h(Z,{title:"Tenancy Summary",children:[h("div",{className:"flex flex-row-reverse",children:[e&&((z=e.filteredDates)==null?void 0:z.length)>0?h("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>H(M),children:[s("img",{src:k,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]}):null,"                    "]}),h("div",{children:[h("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[s("div",{className:"w-[100%] col-span-3",children:s("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})}),s("div",{className:"w-[100%] col-span-3",children:s(V,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:f,value:f&&g?f.filter(function(d){return d.value===(e==null?void 0:e.propertyid)}):f.filter(function(d){return d.value===(e==null?void 0:e.propertyid)}),onChange:d=>{g?C():r({...e,propertyid:d==null?void 0:d.value})},styles:te,id:"hh",placeholder:"Select and Search property"})})]}),e.propertyid&&s(x,{children:h("div",{className:"flex justify-end mt-[25px]",children:[s("div",{className:"w-[150px]",children:s("div",{className:"date-range-custom relative",children:s(D,{value:q,inputClassName:"input-class",containerClassName:"container-class",onChange:v,placeholder:"SELECT DATE"})})}),g&&s("div",{className:"flex justify-end",children:s("div",{className:"w-[90px]",children:s("div",{className:"date-range-custom relative",children:s("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:C,children:"Reset"})})})})]})})]}),j===!0?s(x,{children:s("div",{className:"flex items-center justify-center h-[100%]",children:s("img",{src:ee,width:150,height:150})})}):(E=e==null?void 0:e.filteredDates)!=null&&E.length?s(x,{children:s(K,{allBooking:e.filteredDates,propertyData:p,ref:O})}):s(x,{children:s(K,{allBooking:u,propertyData:p,ref:O})})]})})})};export{le as default};