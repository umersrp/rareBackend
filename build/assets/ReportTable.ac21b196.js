import{R as j,j as a,F as f,r as n,b as R,e as Pe,ap as Fe}from"./index.e476e824.js";import{L as _e}from"./Rare logo New Gif Loading.02c4dc82.js";import{D as Le}from"./index.esm.be37293d.js";import"./jspdf.es.min.f15927dd.js";import"./html2canvas.esm.0eae2bf4.js";import{E as Ie}from"./exceljs.min.0da20f7a.js";import{E as re}from"./excel.9601f4f9.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\booking\\summary-reports\\ReportTable.jsx";const ne=j.forwardRef(({indeterminate:E,...P},T)=>{const F=j.useRef(),r=T||F;return j.useEffect(()=>{r.current.indeterminate=E},[r,E]),a(f,{children:a("input",{type:"checkbox",ref:r,...P,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:33,columnNumber:17},void 0)},void 0,!1)}),He={option:(E,P)=>({...E,fontSize:"14px"})},aa=({title:E,allData:P})=>{var q,J,Q,X,Z,ee,ae,te,le,oe,ie;const[T,F]=n.exports.useState([]);n.exports.useState([]);const[r,_]=n.exports.useState([]),se=localStorage.getItem("isAuth"),A=JSON.parse(se),[B,ce]=n.exports.useState();n.exports.useState(0),n.exports.useState(0),n.exports.useState();const[M,de]=n.exports.useState(),[C,me]=n.exports.useState([]),[L,k]=n.exports.useState(!1),[w,U]=n.exports.useState({filteredData:[],PropertyData:{}});n.exports.useState(!1);const[c,I]=n.exports.useState({propertyid:"",filteredDates:[]}),[ue,Ne]=n.exports.useState({startDate:"",endDate:""}),[H,G]=n.exports.useState("");console.log("selectedProperty",c,"ownerBooking",r);const pe=async e=>{k(!0),G(e);const t=await(await fetch(`http://dev-rare.srp.ai/booking/summarybyDates/${c==null?void 0:c.propertyid}?fromdate=${e.startDate}&todate=${e.endDate}`)).json();console.log("=============>",t),k(!1),I({...c,filteredDates:t==null?void 0:t.data}),_(t==null?void 0:t.data);const x=c.propertyname.split(" | ").shift(),D=u.map(S=>{const{owner_name:N,building_name:m,communityname:h,project_name:p,unitnumber:g}=S;if(x==g)return{owner_name:N,building_name:m,community_name:h,project_name:p,unitnumber:g,fromdates:e.startDate,todates:e.endDate}}),y=$(D);U({filteredData:t==null?void 0:t.data,PropertyData:y})},[u,fe]=n.exports.useState([]),be=e=>{const o=new Set;return e.filter(t=>o.has(t._id)?!1:(o.add(t._id),!0))},$=e=>{const o=new Set;return e.filter(t=>t!==void 0&&!o.has(t.unitnumber)?(o.add(t.unitnumber),!0):!1)};n.exports.useEffect(()=>{(async()=>{try{const o=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${A==null?void 0:A._id}&sort=descending&type=customer&page=0&perPage=all`,t=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${A==null?void 0:A._id}&sort=descending&type=customer&page=0&perPage=all`,d=await fetch(o);if(!d.ok&&d.status!==400)throw new Error(`API 1 failed with status: ${d.status}`);const s=d.status===400?[]:await d.json(),b=await fetch(t);if(!b.ok&&b.status!==400)throw new Error(`API 2 failed with status: ${b.status}`);const x=b.status===400?[]:await b.json(),y=[...s,...x].map(h=>h._id),N=(await Promise.all(y.map(async h=>await(await fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${h}&page=0&perPage=all`)).json()))).flat([2]),m=be(N);F(m)}catch(o){console.error("Error fetching data:",o),setLoadingData(!1)}})()},[]),n.exports.useEffect(()=>{(async()=>{const o=T.map(async d=>{const{propertyid:s}=d;return await(await fetch(`http://dev-rare.srp.ai/property/${s}`)).json()}),t=await Promise.all(o);fe(t)})()},[T]),n.exports.useEffect(()=>{if(k(!0),u.length){const e=[...new Map(u.map(t=>[t._id,t])).values()],o=e==null?void 0:e.map(t=>({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname+" | "+t.buildingname,value:t._id}));k(!1),me(o)}},[u]),n.exports.useEffect(()=>{(async()=>{const t=await(await fetch(`http://dev-rare.srp.ai/booking/summary/${c==null?void 0:c.propertyid}`)).json();_(t==null?void 0:t.data);const x=c.propertyname.split(" | ").shift(),D=u.map(S=>{const{owner_name:N,building_name:m,communityname:h,project_name:p,unitnumber:g}=S;if(x==g)return{owner_name:N,building_name:m,community_name:h,project_name:p,unitnumber:g}}),y=$(D);U({filteredData:t==null?void 0:t.data,PropertyData:y})})()},[c.propertyid]);function z(e){var x,D,y,S;const{filteredData:o,PropertyData:t}=e;console.log("kkkkwwwwwww",e);const d=new Ie.Workbook,s=d.addWorksheet("CombinedSheet");s.mergeCells("A1:W1"),s.addRow(["PROPERTY SUMMARY"]),s.columns=[{header:"Landlord Name",key:"owner_name",width:30},{header:"Community Name",key:"community_name",width:40},{header:"Project Name",key:"project_name",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"building_name",width:25},{header:"",key:"",width:20},{header:"",key:"",width:55},{header:"",key:"",width:55}],t&&([["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...t.map(m=>[m.owner_name,m.community_name,m.project_name,m.unitnumber,m.building_name])].forEach(m=>{s.addRow(m)}),s.addRow([]),s.addRow([]),s.addRow([]),s.addRow([]));const b=s.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATION","TOTAL BOOKING AMOUNT"]);if(o){o.forEach(i=>{s.addRow([i==null?void 0:i.TimePerid,i==null?void 0:i.TotalDaysinMonth,i==null?void 0:i.No_of_Booked_Nights,"AED  "+Number(i==null?void 0:i.AveragePerNight).toFixed(2),Math.round(Number(i==null?void 0:i.OccpancyRate).toFixed(0))+"%","NOT AVAILABLE","AED  "+Number(i==null?void 0:i.TotalHostPayable).toFixed(2)])}),s.addRow([]);const N=o.map(i=>Number(i.AveragePerNight)).reduce((i,v)=>i+v,0),m=o.map(i=>i.OccpancyRate),p=m.reduce((i,v)=>i+Number(v),0)/m.length,g=Math.round(p);console.log("222",N);const O=s.addRow(["TOTAL",((x=o.map(i=>Number(i.TotalDaysinMonth)).reduce((i,v)=>i+v,0))==null?void 0:x.toLocaleString())+" Available Nights",((D=o.map(i=>Number(i.No_of_Booked_Nights)).reduce((i,v)=>i+v,0))==null?void 0:D.toLocaleString())+"  Booked Nights","AED "+(N==null?void 0:N.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),(g==null?void 0:g.toLocaleString())+"%","","AED "+((S=(y=o.map(i=>Number(i.TotalHostPayable)).reduce((i,v)=>i+v,0))==null?void 0:y.toLocaleString())==null?void 0:S.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))]);{const i={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};O.fill=i,b.fill=i;const v={argb:"FFFFFF"};[O,b].forEach(ke=>{ke.eachCell({includeEmpty:!0},Oe=>{Oe.font={color:v}})})}}s.getRow(2).font={bold:!0},s.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},s.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},s.getRow(6).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},s.getRow(2).font={color:{argb:"FFFFFF"}},s.getRow(6).font={color:{argb:"FFFFFF"}},s.getRow(3).font={color:{argb:"FFFFFF"}},s.getRow(7).alignment={horizontal:"center"},d.xlsx.writeBuffer().then(N=>{const m=new Blob([N],{type:"application/octet-stream"}),h=URL.createObjectURL(m),p=document.createElement("a");p.href=h,p.download="booking-"+new Date+".xlsx",document.body.appendChild(p),p.click(),document.body.removeChild(p)})}n.exports.useState(!1);const[V,ve]=n.exports.useState(0),[K,he]=n.exports.useState(0),[W,ge]=n.exports.useState(0),Y=()=>{G(""),_([]),I({propertyid:""}),Ne({startDate:null,endDate:null})};n.exports.useEffect(()=>{var o;let e=0;for(let t=0;t<(r==null?void 0:r.length);t++){let d=parseInt((o=r[t])==null?void 0:o.TotalDaysinMonth);e+=d}ce(e)},[r==null?void 0:r.length]),n.exports.useEffect(()=>{var o;let e=0;for(let t=0;t<(r==null?void 0:r.length);t++){let d=parseInt((o=r[t])==null?void 0:o.No_of_Booked_Nights);e+=d}ve(e)},[r==null?void 0:r.length]),n.exports.useEffect(()=>{const e=r.map(d=>d.OccpancyRate),t=e.reduce((d,s)=>d+Number(s),0)/e.length;he(Math.round(t))},[r==null?void 0:r.length]),n.exports.useEffect(()=>{const o=r.map(t=>t.AveragePerNight).reduce((t,d)=>t+d,0);ge(o)},[r==null?void 0:r.length]),n.exports.useEffect(()=>{let e=r.map(o=>Number(o.TotalHostPayable)).reduce((o,t)=>o+t,0);de(e)},[r==null?void 0:r.length]),n.exports.useRef(null);const xe=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:o})=>a("span",{children:o.indexOf(e)+1},void 0,!1,{fileName:l,lineNumber:600,columnNumber:24},void 0)},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:e=>{var o,t;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"},void 0,!1,{fileName:l,lineNumber:607,columnNumber:24},void 0)}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:e=>{var o,t;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:614,columnNumber:24},void 0)}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:e=>{var o,t;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:621,columnNumber:24},void 0)}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:e=>{var o,t;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"},void 0,!1,{fileName:l,lineNumber:628,columnNumber:24},void 0)}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:e=>{var o,t;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?((t=e==null?void 0:e.cell)==null?void 0:t.value)+" %":"Not Available"},void 0,!1,{fileName:l,lineNumber:635,columnNumber:24},void 0)}},{Header:"REFUND /CANCELLATIONT",accessor:"nonight",Cell:e=>{var o,t;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"},void 0,!1,{fileName:l,lineNumber:642,columnNumber:24},void 0)}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:e=>{var o,t;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"},void 0,!1,{fileName:l,lineNumber:649,columnNumber:24},void 0)}}],ye=n.exports.useMemo(()=>xe,[]),De=n.exports.useMemo(()=>r),Se=R.exports.useTable({columns:ye,data:De,initialState:{pageIndex:0,pageSize:50}},R.exports.useGlobalFilter,R.exports.useSortBy,R.exports.usePagination,R.exports.useRowSelect,e=>{e.visibleColumns.push(o=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>a("div",{children:a(ne,{...t()},void 0,!1,{fileName:l,lineNumber:692,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:691,columnNumber:25},void 0),Cell:({row:t})=>a("div",{children:a(ne,{...t.getToggleRowSelectedProps()},void 0,!1,{fileName:l,lineNumber:697,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:696,columnNumber:25},void 0)},...o])}),{getTableProps:Ae,getTableBodyProps:Ee,headerGroups:Re,footerGroups:je,page:Te,nextPage:Be,previousPage:Me,canNextPage:we,canPreviousPage:Ue,pageOptions:Ge,state:$e,gotoPage:ze,pageCount:Ve,setPageSize:Ke,setGlobalFilter:We,prepareRow:Ce}=Se;return a(f,{children:a("div",{className:"xl:col-span-2 col-span-1",children:a(Pe,{title:"Booking Summary Report",children:[c.propertyid?(c==null?void 0:c.filteredDates)&&((q=c==null?void 0:c.filteredDates)==null?void 0:q.length)?a(f,{children:a("div",{className:"flex flex-row-reverse",children:a("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>z(w),children:[a("img",{src:re,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:l,lineNumber:738,columnNumber:25},void 0),a("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:l,lineNumber:739,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:737,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:736,columnNumber:25},void 0)},void 0,!1):a(f,{children:a("div",{className:"flex flex-row-reverse",children:a("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>z(w),children:[a("img",{src:re,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:l,lineNumber:749,columnNumber:25},void 0),a("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:l,lineNumber:750,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:748,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:747,columnNumber:25},void 0)},void 0,!1):null,a("div",{children:[a("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[L===!0?null:a(f,{children:a("div",{className:"w-[100%] col-span-3",children:a("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:l,lineNumber:766,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:765,columnNumber:33},void 0)},void 0,!1),a("div",{className:"w-[100%] col-span-3",children:L===!0?a(f,{children:a("div",{className:"flex items-center justify-center h-[100%]",children:a("img",{src:_e,width:150,height:150},void 0,!1,{fileName:l,lineNumber:781,columnNumber:49},void 0)},void 0,!1,{fileName:l,lineNumber:780,columnNumber:46},void 0)},void 0,!1):a(f,{children:a(Fe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:C,value:C&&H?C.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}):C.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{H?Y():I({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:He,id:"hh"},void 0,!1,{fileName:l,lineNumber:786,columnNumber:41},void 0)},void 0,!1)},void 0,!1,{fileName:l,lineNumber:773,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:757,columnNumber:21},void 0),"  ",(c==null?void 0:c.propertyid)&&a(f,{children:a("div",{className:"flex justify-end mt-[25px]",children:[a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(Le,{value:ue,inputClassName:"input-class",containerClassName:"container-class",onChange:pe},void 0,!1,{fileName:l,lineNumber:821,columnNumber:53},void 0)},void 0,!1,{fileName:l,lineNumber:820,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:819,columnNumber:37},void 0),H&&a(f,{children:a("div",{className:"flex justify-end",children:a("div",{className:"w-[90px]",children:a("div",{className:"date-range-custom relative",children:a("button",{className:"btn btn-dark text-white  text-center",onClick:Y,children:"Reset"},void 0,!1,{fileName:l,lineNumber:835,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:834,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:833,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:832,columnNumber:33},void 0)},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:818,columnNumber:33},void 0)},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:756,columnNumber:21},void 0),a("div",{className:"overflow-x-auto -mx-6",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:"overflow-hidden ",children:r&&r.length>0?a(f,{children:[" ",a("div",{className:"mt-[25px] p-8",children:[a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Landlord Name: "},void 0,!1,{fileName:l,lineNumber:889,columnNumber:65},void 0),a("p",{className:"capitalize",children:(J=u[0])!=null&&J.owner_name?(Q=u[0])==null?void 0:Q.owner_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:890,columnNumber:65},void 0)]},void 0,!0,{fileName:l,lineNumber:888,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Community Name: "},void 0,!1,{fileName:l,lineNumber:893,columnNumber:65},void 0),a("p",{className:"capitalize",children:(X=u[0])!=null&&X.communityname?(Z=u[0])==null?void 0:Z.communityname:"Not Available"},void 0,!1,{fileName:l,lineNumber:894,columnNumber:65},void 0)]},void 0,!0,{fileName:l,lineNumber:892,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Project Name: "},void 0,!1,{fileName:l,lineNumber:897,columnNumber:65},void 0),a("p",{className:"capitalize",children:(ee=u[0])!=null&&ee.project_name?(ae=u[0])==null?void 0:ae.project_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:898,columnNumber:65},void 0)]},void 0,!0,{fileName:l,lineNumber:896,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Apartment No: "},void 0,!1,{fileName:l,lineNumber:901,columnNumber:65},void 0),a("p",{className:"capitalize",children:(te=u[0])!=null&&te.unitnumber?(le=u[0])==null?void 0:le.unitnumber:"Not Available"},void 0,!1,{fileName:l,lineNumber:902,columnNumber:65},void 0)]},void 0,!0,{fileName:l,lineNumber:900,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Building No: "},void 0,!1,{fileName:l,lineNumber:905,columnNumber:65},void 0),a("p",{className:"capitalize",children:(oe=u[0])!=null&&oe.building_name?(ie=u[0])==null?void 0:ie.building_name:"Not Available"},void 0,!1,{fileName:l,lineNumber:906,columnNumber:65},void 0)]},void 0,!0,{fileName:l,lineNumber:904,columnNumber:61},void 0)]},void 0,!0,{fileName:l,lineNumber:887,columnNumber:41},void 0)," ",a("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Ae,children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Re.map(e=>a("tr",{...e.getHeaderGroupProps(),children:e.headers.map(o=>a("th",{...o.getHeaderProps(o.getSortByToggleProps()),scope:"col",className:" table-th ",children:[o.render("Header"),a("span",{children:o.isSorted?o.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:l,lineNumber:926,columnNumber:69},void 0)]},void 0,!0,{fileName:l,lineNumber:918,columnNumber:65},void 0))},void 0,!1,{fileName:l,lineNumber:916,columnNumber:57},void 0))},void 0,!1,{fileName:l,lineNumber:914,columnNumber:49},void 0),a("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Ee,children:[Te.map(e=>(Ce(e),a("tr",{...e.getRowProps(),children:e.cells.map(o=>a("td",{...o.getCellProps(),className:"table-td",children:o.render("Cell")},void 0,!1,{fileName:l,lineNumber:951,columnNumber:73},void 0))},void 0,!1,{fileName:l,lineNumber:948,columnNumber:61},void 0))),a("tr",{children:[a("td",{className:"table-td",children:"TOTAL"},void 0,!1,{fileName:l,lineNumber:960,columnNumber:57},void 0),a("td",{},void 0,!1,{fileName:l,lineNumber:961,columnNumber:57},void 0),a("td",{},void 0,!1,{fileName:l,lineNumber:962,columnNumber:57},void 0),a("td",{className:"table-td",children:[B?B.toLocaleString():0," Avaiable Nights"]},void 0,!0,{fileName:l,lineNumber:963,columnNumber:57},void 0),a("td",{className:"table-td",children:[V?V.toLocaleString():0," Booked Nights"]},void 0,!0,{fileName:l,lineNumber:964,columnNumber:57},void 0),a("td",{className:"table-td",children:[W?W.toLocaleString():0," AED"]},void 0,!0,{fileName:l,lineNumber:965,columnNumber:57},void 0),a("td",{className:"table-td",children:[K?K.toLocaleString():0," %"]},void 0,!0,{fileName:l,lineNumber:966,columnNumber:57},void 0),a("td",{className:"table-td"},void 0,!1,{fileName:l,lineNumber:967,columnNumber:57},void 0),a("td",{className:"table-td",children:[M?M.toLocaleString():0," AED"]},void 0,!0,{fileName:l,lineNumber:968,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:959,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:938,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:910,columnNumber:45},void 0)]},void 0,!0):a(f,{children:L===!0?null:a(f,{children:a("div",{className:"pl-6",children:a("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:l,lineNumber:980,columnNumber:57},void 0)},void 0,!1,{fileName:l,lineNumber:979,columnNumber:53},void 0)},void 0,!1)},void 0,!1)},void 0,!1,{fileName:l,lineNumber:879,columnNumber:41},void 0)},void 0,!1,{fileName:l,lineNumber:878,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:877,columnNumber:37},void 0)]},void 0,!0,{fileName:l,lineNumber:729,columnNumber:17},void 0)},void 0,!1,{fileName:l,lineNumber:728,columnNumber:9},void 0)},void 0,!1)};export{aa as default};
