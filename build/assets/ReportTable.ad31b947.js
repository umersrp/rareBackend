import{R as j,j as s,F as g,r as l,b as R,c as d,C as Oe,aq as Fe}from"./index.3e2a71f6.js";import{L as _e}from"./Rare logo New Gif Loading.02c4dc82.js";import{D as Le}from"./index.esm.ec75262f.js";import"./jspdf.es.min.00bc4b15.js";import"./html2canvas.esm.0eae2bf4.js";import{E as Ie}from"./exceljs.min.b55b48dc.js";import{E as le}from"./excel.9601f4f9.js";const ne=j.forwardRef(({indeterminate:E,...O},T)=>{const F=j.useRef(),o=T||F;return j.useEffect(()=>{o.current.indeterminate=E},[o,E]),s(g,{children:s("input",{type:"checkbox",ref:o,...O,className:"table-checkbox"})})}),He={option:(E,O)=>({...E,fontSize:"14px"})},tt=({title:E,allData:O})=>{var Y,J,Q,X,Z,ee,te,ae,se,re,oe;const[T,F]=l.exports.useState([]);l.exports.useState([]);const[o,_]=l.exports.useState([]),ce=localStorage.getItem("isAuth"),A=JSON.parse(ce),[B,ie]=l.exports.useState();l.exports.useState(0),l.exports.useState(0),l.exports.useState();const[M,de]=l.exports.useState(),[C,pe]=l.exports.useState([]),[L,P]=l.exports.useState(!1),[w,U]=l.exports.useState({filteredData:[],PropertyData:{}});l.exports.useState(!1);const[c,I]=l.exports.useState({propertyid:"",filteredDates:[]}),[ue,me]=l.exports.useState({startDate:"",endDate:""}),[H,G]=l.exports.useState("");console.log("selectedProperty",c,"ownerBooking",o);const he=async e=>{P(!0),G(e);const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/summarybyDates/${c==null?void 0:c.propertyid}?fromdate=${e.startDate}&todate=${e.endDate}`)).json();console.log("=============>",t),P(!1),I({...c,filteredDates:t==null?void 0:t.data}),_(t==null?void 0:t.data);const y=c.propertyname.split(" | ").shift(),D=u.map(S=>{const{owner_name:m,building_name:p,communityname:x,project_name:h,unitnumber:b}=S;if(y==b)return{owner_name:m,building_name:p,community_name:x,project_name:h,unitnumber:b,fromdates:e.startDate,todates:e.endDate}}),v=$(D);U({filteredData:t==null?void 0:t.data,PropertyData:v})},[u,ge]=l.exports.useState([]),Ne=e=>{const a=new Set;return e.filter(t=>a.has(t._id)?!1:(a.add(t._id),!0))},$=e=>{const a=new Set;return e.filter(t=>t!==void 0&&!a.has(t.unitnumber)?(a.add(t.unitnumber),!0):!1)};l.exports.useEffect(()=>{(async()=>{try{const a=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${A==null?void 0:A._id}&sort=descending&type=customer&page=0&perPage=all`,t=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${A==null?void 0:A._id}&sort=descending&type=customer&page=0&perPage=all`,i=await fetch(a);if(!i.ok&&i.status!==400)throw new Error(`API 1 failed with status: ${i.status}`);const n=i.status===400?[]:await i.json(),N=await fetch(t);if(!N.ok&&N.status!==400)throw new Error(`API 2 failed with status: ${N.status}`);const y=N.status===400?[]:await N.json(),v=[...n,...y].map(x=>x._id),m=(await Promise.all(v.map(async x=>await(await fetch(`http://portals.rarehomesgroup.com/booking/ownerrepresentative/pages?propertyid=${x}&page=0&perPage=all`)).json()))).flat([2]),p=Ne(m);F(p)}catch(a){console.error("Error fetching data:",a),setLoadingData(!1)}})()},[]),l.exports.useEffect(()=>{(async()=>{const a=T.map(async i=>{const{propertyid:n}=i;return await(await fetch(`http://portals.rarehomesgroup.com/property/${n}`)).json()}),t=await Promise.all(a);ge(t)})()},[T]),l.exports.useEffect(()=>{if(P(!0),u.length){const e=[...new Map(u.map(t=>[t._id,t])).values()],a=e==null?void 0:e.map(t=>({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname+" | "+t.buildingname,value:t._id}));P(!1),pe(a)}},[u]),l.exports.useEffect(()=>{(async()=>{const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/summary/${c==null?void 0:c.propertyid}`)).json();_(t==null?void 0:t.data);const y=c.propertyname.split(" | ").shift(),D=u.map(S=>{const{owner_name:m,building_name:p,communityname:x,project_name:h,unitnumber:b}=S;if(y==b)return{owner_name:m,building_name:p,community_name:x,project_name:h,unitnumber:b}}),v=$(D);U({filteredData:t==null?void 0:t.data,PropertyData:v})})()},[c.propertyid]);function z(e){var y,D,v,S;const{filteredData:a,PropertyData:t}=e;console.log("kkkkwwwwwww",e);const i=new Ie.Workbook,n=i.addWorksheet("CombinedSheet");n.mergeCells("A1:W1"),n.addRow(["PROPERTY SUMMARY"]),n.columns=[{header:"Landlord Name",key:"owner_name",width:30},{header:"Community Name",key:"community_name",width:40},{header:"Project Name",key:"project_name",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"building_name",width:25},{header:"",key:"",width:20},{header:"",key:"",width:55},{header:"",key:"",width:55}],t&&([["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...t.map(p=>[p.owner_name,p.community_name,p.project_name,p.unitnumber,p.building_name])].forEach(p=>{n.addRow(p)}),n.addRow([]),n.addRow([]),n.addRow([]),n.addRow([]));const N=n.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATION","TOTAL BOOKING AMOUNT"]);if(a){a.forEach(r=>{n.addRow([r==null?void 0:r.TimePerid,r==null?void 0:r.TotalDaysinMonth,r==null?void 0:r.No_of_Booked_Nights,"AED  "+Number(r==null?void 0:r.AveragePerNight).toFixed(2),Math.round(Number(r==null?void 0:r.OccpancyRate).toFixed(0))+"%","NOT AVAILABLE","AED  "+Number(r==null?void 0:r.TotalHostPayable).toFixed(2)])}),n.addRow([]);const m=a.map(r=>Number(r.AveragePerNight)).reduce((r,f)=>r+f,0),p=a.map(r=>r.OccpancyRate),h=p.reduce((r,f)=>r+Number(f),0)/p.length,b=Math.round(h);console.log("222",m);const k=n.addRow(["TOTAL",((y=a.map(r=>Number(r.TotalDaysinMonth)).reduce((r,f)=>r+f,0))==null?void 0:y.toLocaleString())+" Available Nights",((D=a.map(r=>Number(r.No_of_Booked_Nights)).reduce((r,f)=>r+f,0))==null?void 0:D.toLocaleString())+"  Booked Nights","AED "+(m==null?void 0:m.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),(b==null?void 0:b.toLocaleString())+"%","","AED "+((S=(v=a.map(r=>Number(r.TotalHostPayable)).reduce((r,f)=>r+f,0))==null?void 0:v.toLocaleString())==null?void 0:S.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))]);{const r={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};k.fill=r,N.fill=r;const f={argb:"FFFFFF"};[k,N].forEach(Pe=>{Pe.eachCell({includeEmpty:!0},ke=>{ke.font={color:f}})})}}n.getRow(2).font={bold:!0},n.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},n.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},n.getRow(6).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},n.getRow(2).font={color:{argb:"FFFFFF"}},n.getRow(6).font={color:{argb:"FFFFFF"}},n.getRow(3).font={color:{argb:"FFFFFF"}},n.getRow(7).alignment={horizontal:"center"},i.xlsx.writeBuffer().then(m=>{const p=new Blob([m],{type:"application/octet-stream"}),x=URL.createObjectURL(p),h=document.createElement("a");h.href=x,h.download="booking-"+new Date+".xlsx",document.body.appendChild(h),h.click(),document.body.removeChild(h)})}l.exports.useState(!1);const[q,fe]=l.exports.useState(0),[K,xe]=l.exports.useState(0),[V,be]=l.exports.useState(0),W=()=>{G(""),_([]),I({propertyid:""}),me({startDate:null,endDate:null})};l.exports.useEffect(()=>{var a;let e=0;for(let t=0;t<(o==null?void 0:o.length);t++){let i=parseInt((a=o[t])==null?void 0:a.TotalDaysinMonth);e+=i}ie(e)},[o==null?void 0:o.length]),l.exports.useEffect(()=>{var a;let e=0;for(let t=0;t<(o==null?void 0:o.length);t++){let i=parseInt((a=o[t])==null?void 0:a.No_of_Booked_Nights);e+=i}fe(e)},[o==null?void 0:o.length]),l.exports.useEffect(()=>{const e=o.map(i=>i.OccpancyRate),t=e.reduce((i,n)=>i+Number(n),0)/e.length;xe(Math.round(t))},[o==null?void 0:o.length]),l.exports.useEffect(()=>{const a=o.map(t=>t.AveragePerNight).reduce((t,i)=>t+i,0);be(a)},[o==null?void 0:o.length]),l.exports.useEffect(()=>{let e=o.map(a=>Number(a.TotalHostPayable)).reduce((a,t)=>a+t,0);de(e)},[o==null?void 0:o.length]),l.exports.useRef(null);const ye=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>s("span",{children:a.indexOf(e)+1})},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"})}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((t=e==null?void 0:e.cell)==null?void 0:t.value)+" %":"Not Available"})}},{Header:"REFUND /CANCELLATIONT",accessor:"nonight",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"})}}],ve=l.exports.useMemo(()=>ye,[]),De=l.exports.useMemo(()=>o),Se=R.exports.useTable({columns:ve,data:De,initialState:{pageIndex:0,pageSize:50}},R.exports.useGlobalFilter,R.exports.useSortBy,R.exports.usePagination,R.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>s("div",{children:s(ne,{...t()})}),Cell:({row:t})=>s("div",{children:s(ne,{...t.getToggleRowSelectedProps()})})},...a])}),{getTableProps:Ae,getTableBodyProps:Ee,headerGroups:Re,footerGroups:je,page:Te,nextPage:Be,previousPage:Me,canNextPage:we,canPreviousPage:Ue,pageOptions:Ge,state:$e,gotoPage:ze,pageCount:qe,setPageSize:Ke,setGlobalFilter:Ve,prepareRow:Ce}=Se;return s(g,{children:s("div",{className:"xl:col-span-2 col-span-1",children:d(Oe,{title:"Booking Summary Report",children:[c.propertyid?(c==null?void 0:c.filteredDates)&&((Y=c==null?void 0:c.filteredDates)==null?void 0:Y.length)?s(g,{children:s("div",{className:"flex flex-row-reverse",children:d("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>z(w),children:[s("img",{src:le,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):s(g,{children:s("div",{className:"flex flex-row-reverse",children:d("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>z(w),children:[s("img",{src:le,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):null,d("div",{children:[d("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[L===!0?null:s(g,{children:s("div",{className:"w-[100%] col-span-3",children:s("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),s("div",{className:"w-[100%] col-span-3",children:L===!0?s(g,{children:s("div",{className:"flex items-center justify-center h-[100%]",children:s("img",{src:_e,width:150,height:150})})}):s(g,{children:s(Fe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:C,value:C&&H?C.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}):C.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{H?W():I({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:He,id:"hh"})})})]}),"  ",(c==null?void 0:c.propertyid)&&s(g,{children:d("div",{className:"flex justify-end mt-[25px]",children:[s("div",{className:"w-[150px]",children:s("div",{className:"date-range-custom relative",children:s(Le,{value:ue,inputClassName:"input-class",containerClassName:"container-class",onChange:he})})}),H&&s(g,{children:s("div",{className:"flex justify-end",children:s("div",{className:"w-[90px]",children:s("div",{className:"date-range-custom relative",children:s("button",{className:"btn btn-dark text-white  text-center",onClick:W,children:"Reset"})})})})})]})})]}),s("div",{className:"overflow-x-auto -mx-6",children:s("div",{className:"inline-block min-w-full align-middle",children:s("div",{className:"overflow-hidden ",children:o&&o.length>0?d(g,{children:[" ",d("div",{className:"mt-[25px] p-8",children:[d("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Landlord Name: "}),s("p",{className:"capitalize",children:(J=u[0])!=null&&J.owner_name?(Q=u[0])==null?void 0:Q.owner_name:"Not Available"})]}),d("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Community Name: "}),s("p",{className:"capitalize",children:(X=u[0])!=null&&X.communityname?(Z=u[0])==null?void 0:Z.communityname:"Not Available"})]}),d("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Project Name: "}),s("p",{className:"capitalize",children:(ee=u[0])!=null&&ee.project_name?(te=u[0])==null?void 0:te.project_name:"Not Available"})]}),d("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Apartment No: "}),s("p",{className:"capitalize",children:(ae=u[0])!=null&&ae.unitnumber?(se=u[0])==null?void 0:se.unitnumber:"Not Available"})]}),d("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Building No: "}),s("p",{className:"capitalize",children:(re=u[0])!=null&&re.building_name?(oe=u[0])==null?void 0:oe.building_name:"Not Available"})]})]})," ",d("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Ae,children:[s("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Re.map(e=>s("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>d("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),s("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),d("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Ee,children:[Te.map(e=>(Ce(e),s("tr",{...e.getRowProps(),children:e.cells.map(a=>s("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))}))),d("tr",{children:[s("td",{className:"table-td",children:"TOTAL"}),s("td",{}),s("td",{}),d("td",{className:"table-td",children:[B?B.toLocaleString():0," Avaiable Nights"]}),d("td",{className:"table-td",children:[q?q.toLocaleString():0," Booked Nights"]}),d("td",{className:"table-td",children:[V?V.toLocaleString():0," AED"]}),d("td",{className:"table-td",children:[K?K.toLocaleString():0," %"]}),s("td",{className:"table-td"}),d("td",{className:"table-td",children:[M?M.toLocaleString():0," AED"]})]})]})]})]}):s(g,{children:L===!0?null:s(g,{children:s("div",{className:"pl-6",children:s("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})})})})]})})})};export{tt as default};
