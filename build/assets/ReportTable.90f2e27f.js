import{R as w,j as a,F as f,r as n,b as T,e as Oe,cd as _e,ap as Pe}from"./index.9c32dce1.js";import{D as Le}from"./index.esm.6bcb6cb3.js";import"./jspdf.es.min.eb7ae8ca.js";import"./html2canvas.esm.0eae2bf4.js";import{E as Ie}from"./exceljs.min.182e27a0.js";import{E as ne}from"./excel.9601f4f9.js";var t="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\booking\\summary-reports\\ReportTable.jsx";const se=w.forwardRef(({indeterminate:R,...P},C)=>{const L=w.useRef(),s=C||L;return w.useEffect(()=>{s.current.indeterminate=R},[s,R]),a(f,{children:a("input",{type:"checkbox",ref:s,...P,className:"table-checkbox"},void 0,!1,{fileName:t,lineNumber:33,columnNumber:17},void 0)},void 0,!1)}),Be={option:(R,P)=>({...R,fontSize:"14px"})},ea=({title:R,allData:P})=>{var J,Q,X,Z,ee,ae,te,le,oe,ie,re;const[C,L]=n.exports.useState([]);n.exports.useState([]);const[s,I]=n.exports.useState([]),ce=localStorage.getItem("isAuth"),E=JSON.parse(ce),[M,de]=n.exports.useState();n.exports.useState(0),n.exports.useState(0),n.exports.useState();const[y,me]=n.exports.useState(),[F,ue]=n.exports.useState([]),[B,O]=n.exports.useState(!1),[U,G]=n.exports.useState({filteredData:[],PropertyData:{}});n.exports.useState(!1);const[c,H]=n.exports.useState({propertyid:"",filteredDates:[]}),[Ne,pe]=n.exports.useState({startDate:"",endDate:""}),[j,$]=n.exports.useState("");console.log("selectedProperty",c,"ownerBooking",s);const fe=async e=>{O(!0),$(e);const l=await(await fetch(`http://dev-rare.srp.ai/booking/summarybyDates/${c==null?void 0:c.propertyid}?fromdate=${e.startDate}&todate=${e.endDate}`)).json();console.log("=============>",l),O(!1),H({...c,filteredDates:l==null?void 0:l.data}),I(l==null?void 0:l.data);const x=c.propertyname.split(" | ").shift(),A=u.map(S=>{const{owner_name:N,building_name:m,communityname:h,project_name:p,unitnumber:g}=S;if(x==g)return{owner_name:N,building_name:m,community_name:h,project_name:p,unitnumber:g,fromdates:e.startDate,todates:e.endDate}}),D=z(A);G({filteredData:l==null?void 0:l.data,PropertyData:D})},[u,be]=n.exports.useState([]),ve=e=>{const o=new Set;return e.filter(l=>o.has(l._id)?!1:(o.add(l._id),!0))},z=e=>{const o=new Set;return e.filter(l=>l!==void 0&&!o.has(l.unitnumber)?(o.add(l.unitnumber),!0):!1)};n.exports.useEffect(()=>{(async()=>{try{const o=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${E==null?void 0:E._id}&sort=descending&type=customer&page=0&perPage=all`,l=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${E==null?void 0:E._id}&sort=descending&type=customer&page=0&perPage=all`,d=await fetch(o);if(!d.ok&&d.status!==400)throw new Error(`API 1 failed with status: ${d.status}`);const r=d.status===400?[]:await d.json(),b=await fetch(l);if(!b.ok&&b.status!==400)throw new Error(`API 2 failed with status: ${b.status}`);const x=b.status===400?[]:await b.json(),D=[...r,...x].map(h=>h._id),N=(await Promise.all(D.map(async h=>await(await fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${h}&page=0&perPage=all`)).json()))).flat([2]),m=ve(N);L(m)}catch(o){console.error("Error fetching data:",o),setLoadingData(!1)}})()},[]),n.exports.useEffect(()=>{(async()=>{const o=C.map(async d=>{const{propertyid:r}=d;return await(await fetch(`http://dev-rare.srp.ai/property/${r}`)).json()}),l=await Promise.all(o);be(l)})()},[C]),n.exports.useEffect(()=>{if(O(!0),u.length){const e=[...new Map(u.map(l=>[l._id,l])).values()],o=e==null?void 0:e.map(l=>({label:l.unitnumber+" | "+l.communityname+" | "+l.projectname+" | "+l.buildingname,value:l._id}));O(!1),ue(o)}},[u]),n.exports.useEffect(()=>{(async()=>{const l=await(await fetch(`http://dev-rare.srp.ai/booking/summary/${c==null?void 0:c.propertyid}`)).json();I(l==null?void 0:l.data);const x=c.propertyname.split(" | ").shift(),A=u.map(S=>{const{owner_name:N,building_name:m,communityname:h,project_name:p,unitnumber:g}=S;if(x==g)return{owner_name:N,building_name:m,community_name:h,project_name:p,unitnumber:g}}),D=z(A);G({filteredData:l==null?void 0:l.data,PropertyData:D})})()},[c.propertyid]);function V(e){var x,A,D,S;const{filteredData:o,PropertyData:l}=e;console.log("kkkkwwwwwww",e);const d=new Ie.Workbook,r=d.addWorksheet("CombinedSheet");r.mergeCells("A1:W1"),r.addRow(["BOOKING SUMMARY"]),r.columns=[{header:"Landlord Name",key:"owner_name",width:30},{header:"Community Name",key:"community_name",width:40},{header:"Project Name",key:"project_name",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"building_name",width:25},{header:"",key:"",width:20},{header:"",key:"",width:55},{header:"",key:"",width:55}],l&&([["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...l.map(m=>[m.owner_name,m.community_name,m.project_name,m.unitnumber,m.building_name])].forEach(m=>{r.addRow(m)}),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]));const b=r.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATION","TOTAL BOOKING AMOUNT"]);if(o){o.forEach(i=>{r.addRow([i==null?void 0:i.TimePerid,i==null?void 0:i.TotalDaysinMonth,i==null?void 0:i.No_of_Booked_Nights,"AED  "+Number(i==null?void 0:i.AveragePerNight).toFixed(2),Math.round(Number(i==null?void 0:i.OccpancyRate).toFixed(0))+"%","NOT AVAILABLE","AED  "+Number(i==null?void 0:i.TotalHostPayable).toFixed(2)])}),r.addRow([]);const N=o.map(i=>Number(i.AveragePerNight)).reduce((i,v)=>i+v,0),m=o.map(i=>i.OccpancyRate),p=m.reduce((i,v)=>i+Number(v),0)/m.length,g=Math.round(p);console.log("222",N);const _=r.addRow(["TOTAL",((x=o.map(i=>Number(i.TotalDaysinMonth)).reduce((i,v)=>i+v,0))==null?void 0:x.toLocaleString())+" Available Nights",((A=o.map(i=>Number(i.No_of_Booked_Nights)).reduce((i,v)=>i+v,0))==null?void 0:A.toLocaleString())+"  Booked Nights","AED "+(N==null?void 0:N.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),(g==null?void 0:g.toLocaleString())+"%","","AED "+((S=(D=o.map(i=>Number(i.TotalHostPayable)).reduce((i,v)=>i+v,0))==null?void 0:D.toLocaleString())==null?void 0:S.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))]);{const i={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};_.fill=i,b.fill=i;const v={argb:"FFFFFF"};[_,b].forEach(Ce=>{Ce.eachCell({includeEmpty:!0},Fe=>{Fe.font={color:v}})})}}r.getRow(2).font={bold:!0},r.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},r.getRow(6).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},r.getRow(2).font={color:{argb:"FFFFFF"}},r.getRow(6).font={color:{argb:"FFFFFF"}},r.getRow(3).font={color:{argb:"FFFFFF"}},r.getRow(7).alignment={horizontal:"center"},d.xlsx.writeBuffer().then(N=>{const m=new Blob([N],{type:"application/octet-stream"}),h=URL.createObjectURL(m),p=document.createElement("a");p.href=h,p.download="booking-summary"+new Date+".xlsx",document.body.appendChild(p),p.click(),document.body.removeChild(p)})}n.exports.useState(!1);const[k,he]=n.exports.useState(0),[K,ge]=n.exports.useState(0),[W,q]=n.exports.useState(0),Y=()=>{$(""),I([]),H({propertyid:""}),pe({startDate:null,endDate:null})};n.exports.useEffect(()=>{var o;let e=0;for(let l=0;l<(s==null?void 0:s.length);l++){let d=parseInt((o=s[l])==null?void 0:o.TotalDaysinMonth);e+=d}de(e)},[s==null?void 0:s.length]),n.exports.useEffect(()=>{var o;let e=0;for(let l=0;l<(s==null?void 0:s.length);l++){let d=parseInt((o=s[l])==null?void 0:o.No_of_Booked_Nights);e+=d}he(e)},[s==null?void 0:s.length]),n.exports.useEffect(()=>{const e=s.map(d=>d.OccpancyRate),l=e.reduce((d,r)=>d+Number(r),0)/e.length;ge(Math.round(l))},[s==null?void 0:s.length]),n.exports.useEffect(()=>{const e=s.map(d=>Number(d.TotalHostPayable)).reduce((d,r)=>d+r,0);me(e);const o=s.reduce((d,r)=>d+parseInt(r.No_of_Booked_Nights),0),l=y!==0?o/y:0;q(l)},[s,y]),n.exports.useEffect(()=>{const e=y/k;console.log("averages",e),q(Number(e).toFixed(2))},[k,y]),console.log("averages11111",W),n.exports.useRef(null);const xe=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:o})=>a("span",{children:o.indexOf(e)+1},void 0,!1,{fileName:t,lineNumber:610,columnNumber:24},void 0)},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:e=>{var o,l;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"},void 0,!1,{fileName:t,lineNumber:617,columnNumber:24},void 0)}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:e=>{var o,l;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:624,columnNumber:24},void 0)}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:e=>{var o,l;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:631,columnNumber:24},void 0)}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:e=>{var o,l;return a("span",{className:"text-[12px]",children:[a("strong",{children:"AED"},void 0,!1,{fileName:t,lineNumber:638,columnNumber:54},void 0)," ",(o=e==null?void 0:e.cell)!=null&&o.value?Number((l=e==null?void 0:e.cell)==null?void 0:l.value).toFixed(2):"Not Available"]},void 0,!0,{fileName:t,lineNumber:638,columnNumber:24},void 0)}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:e=>{var o,l;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?((l=e==null?void 0:e.cell)==null?void 0:l.value)+" %":"Not Available"},void 0,!1,{fileName:t,lineNumber:645,columnNumber:24},void 0)}},{Header:"REFUND /CANCELLATIONT",accessor:"nonight",Cell:e=>{var o,l;return a("span",{children:(o=e==null?void 0:e.cell)!=null&&o.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"},void 0,!1,{fileName:t,lineNumber:652,columnNumber:24},void 0)}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:e=>{var o,l;return a("span",{className:"text-[12px]",children:[a("strong",{children:"AED"},void 0,!1,{fileName:t,lineNumber:659,columnNumber:54},void 0)," ",(o=e==null?void 0:e.cell)!=null&&o.value?Number((l=e==null?void 0:e.cell)==null?void 0:l.value).toFixed(2):"Not Available"]},void 0,!0,{fileName:t,lineNumber:659,columnNumber:24},void 0)}}],ye=n.exports.useMemo(()=>xe,[]),De=n.exports.useMemo(()=>s),Ae=T.exports.useTable({columns:ye,data:De,initialState:{pageIndex:0,pageSize:50}},T.exports.useGlobalFilter,T.exports.useSortBy,T.exports.usePagination,T.exports.useRowSelect,e=>{e.visibleColumns.push(o=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:l})=>a("div",{children:a(se,{...l()},void 0,!1,{fileName:t,lineNumber:702,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:701,columnNumber:25},void 0),Cell:({row:l})=>a("div",{children:a(se,{...l.getToggleRowSelectedProps()},void 0,!1,{fileName:t,lineNumber:707,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:706,columnNumber:25},void 0)},...o])}),{getTableProps:Se,getTableBodyProps:Ee,headerGroups:Re,footerGroups:He,page:ke,nextPage:je,previousPage:we,canNextPage:Me,canPreviousPage:Ue,pageOptions:Ge,state:$e,gotoPage:ze,pageCount:Ve,setPageSize:Ke,setGlobalFilter:We,prepareRow:Te}=Ae;return a(f,{children:a("div",{className:"xl:col-span-2 col-span-1",children:a(Oe,{title:"Booking Summary Report",children:[c.propertyid?(c==null?void 0:c.filteredDates)&&((J=c==null?void 0:c.filteredDates)==null?void 0:J.length)?a(f,{children:a("div",{className:"flex flex-row-reverse",children:a("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>V(U),children:[a("img",{src:ne,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:t,lineNumber:748,columnNumber:25},void 0),a("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:t,lineNumber:749,columnNumber:25},void 0)]},void 0,!0,{fileName:t,lineNumber:747,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:746,columnNumber:25},void 0)},void 0,!1):a(f,{children:a("div",{className:"flex flex-row-reverse",children:a("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>V(U),children:[a("img",{src:ne,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"},void 0,!1,{fileName:t,lineNumber:759,columnNumber:25},void 0),a("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"},void 0,!1,{fileName:t,lineNumber:760,columnNumber:25},void 0)]},void 0,!0,{fileName:t,lineNumber:758,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:757,columnNumber:25},void 0)},void 0,!1):null,a("div",{children:[a("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[B===!0?null:a(f,{children:a("div",{className:"w-[100%] col-span-3",children:a("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"},void 0,!1,{fileName:t,lineNumber:776,columnNumber:37},void 0)},void 0,!1,{fileName:t,lineNumber:775,columnNumber:33},void 0)},void 0,!1),a("div",{className:"w-[100%] col-span-3",children:B===!0?a(f,{children:a("div",{className:"flex items-center justify-center h-[100%]",children:a("img",{src:_e,width:150,height:150},void 0,!1,{fileName:t,lineNumber:791,columnNumber:49},void 0)},void 0,!1,{fileName:t,lineNumber:790,columnNumber:46},void 0)},void 0,!1):a(f,{children:a(Pe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:F,value:F&&j?F.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}):F.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{j?Y():H({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:Be,id:"hh"},void 0,!1,{fileName:t,lineNumber:796,columnNumber:41},void 0)},void 0,!1)},void 0,!1,{fileName:t,lineNumber:783,columnNumber:33},void 0)]},void 0,!0,{fileName:t,lineNumber:767,columnNumber:21},void 0),"  ",(c==null?void 0:c.propertyid)&&a(f,{children:a("div",{className:"flex justify-end mt-[25px]",children:[a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(Le,{value:Ne,inputClassName:"input-class",containerClassName:"container-class",onChange:fe},void 0,!1,{fileName:t,lineNumber:831,columnNumber:53},void 0)},void 0,!1,{fileName:t,lineNumber:830,columnNumber:45},void 0)},void 0,!1,{fileName:t,lineNumber:829,columnNumber:37},void 0),j&&a(f,{children:a("div",{className:"flex justify-end",children:a("div",{className:"w-[90px]",children:a("div",{className:"date-range-custom relative",children:a("button",{className:"btn btn-dark text-white  text-center",onClick:Y,children:"Reset"},void 0,!1,{fileName:t,lineNumber:845,columnNumber:45},void 0)},void 0,!1,{fileName:t,lineNumber:844,columnNumber:45},void 0)},void 0,!1,{fileName:t,lineNumber:843,columnNumber:41},void 0)},void 0,!1,{fileName:t,lineNumber:842,columnNumber:33},void 0)},void 0,!1)]},void 0,!0,{fileName:t,lineNumber:828,columnNumber:33},void 0)},void 0,!1)]},void 0,!0,{fileName:t,lineNumber:766,columnNumber:21},void 0),a("div",{className:"overflow-x-auto -mx-6",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:"overflow-hidden ",children:s&&s.length>0?a(f,{children:[" ",a("div",{className:"mt-[25px] p-8",children:[a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Landlord Name: "},void 0,!1,{fileName:t,lineNumber:899,columnNumber:65},void 0),a("p",{className:"capitalize",children:(Q=u[0])!=null&&Q.owner_name?(X=u[0])==null?void 0:X.owner_name:"Not Available"},void 0,!1,{fileName:t,lineNumber:900,columnNumber:65},void 0)]},void 0,!0,{fileName:t,lineNumber:898,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Community Name: "},void 0,!1,{fileName:t,lineNumber:903,columnNumber:65},void 0),a("p",{className:"capitalize",children:(Z=u[0])!=null&&Z.communityname?(ee=u[0])==null?void 0:ee.communityname:"Not Available"},void 0,!1,{fileName:t,lineNumber:904,columnNumber:65},void 0)]},void 0,!0,{fileName:t,lineNumber:902,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Project Name: "},void 0,!1,{fileName:t,lineNumber:907,columnNumber:65},void 0),a("p",{className:"capitalize",children:(ae=u[0])!=null&&ae.project_name?(te=u[0])==null?void 0:te.project_name:"Not Available"},void 0,!1,{fileName:t,lineNumber:908,columnNumber:65},void 0)]},void 0,!0,{fileName:t,lineNumber:906,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Apartment No: "},void 0,!1,{fileName:t,lineNumber:911,columnNumber:65},void 0),a("p",{className:"capitalize",children:(le=u[0])!=null&&le.unitnumber?(oe=u[0])==null?void 0:oe.unitnumber:"Not Available"},void 0,!1,{fileName:t,lineNumber:912,columnNumber:65},void 0)]},void 0,!0,{fileName:t,lineNumber:910,columnNumber:61},void 0),a("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Building No: "},void 0,!1,{fileName:t,lineNumber:915,columnNumber:65},void 0),a("p",{className:"capitalize",children:(ie=u[0])!=null&&ie.building_name?(re=u[0])==null?void 0:re.building_name:"Not Available"},void 0,!1,{fileName:t,lineNumber:916,columnNumber:65},void 0)]},void 0,!0,{fileName:t,lineNumber:914,columnNumber:61},void 0)]},void 0,!0,{fileName:t,lineNumber:897,columnNumber:41},void 0)," ",a("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Se,children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Re.map(e=>a("tr",{...e.getHeaderGroupProps(),children:e.headers.map(o=>a("th",{...o.getHeaderProps(o.getSortByToggleProps()),scope:"col",className:" table-th ",children:[o.render("Header"),a("span",{children:o.isSorted?o.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:t,lineNumber:936,columnNumber:69},void 0)]},void 0,!0,{fileName:t,lineNumber:928,columnNumber:65},void 0))},void 0,!1,{fileName:t,lineNumber:926,columnNumber:57},void 0))},void 0,!1,{fileName:t,lineNumber:924,columnNumber:49},void 0),a("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Ee,children:[ke.map(e=>(Te(e),a("tr",{...e.getRowProps(),children:e.cells.map(o=>a("td",{...o.getCellProps(),className:"table-td",children:o.render("Cell")},void 0,!1,{fileName:t,lineNumber:961,columnNumber:73},void 0))},void 0,!1,{fileName:t,lineNumber:958,columnNumber:61},void 0))),a("tr",{children:[a("td",{className:"table-td font-bold text-[12px]",children:"TOTAL"},void 0,!1,{fileName:t,lineNumber:970,columnNumber:57},void 0),a("td",{},void 0,!1,{fileName:t,lineNumber:971,columnNumber:57},void 0),a("td",{},void 0,!1,{fileName:t,lineNumber:972,columnNumber:57},void 0),a("td",{className:"table-td font-bold text-[12px]",children:[M?M.toLocaleString():0," Available Nights"]},void 0,!0,{fileName:t,lineNumber:973,columnNumber:57},void 0),a("td",{className:"table-td font-bold text-[12px]",children:[k?k.toLocaleString():0," Booked Nights"]},void 0,!0,{fileName:t,lineNumber:974,columnNumber:1},void 0),console.log("=====>",W),a("td",{className:"table-td font-bold text-[12px]",children:["Average: ",Number(y/k).toFixed(2)]},void 0,!0,{fileName:t,lineNumber:976,columnNumber:1},void 0),a("td",{className:"table-td font-bold text-[12px]",children:[K?K.toLocaleString():0,"%"]},void 0,!0,{fileName:t,lineNumber:977,columnNumber:1},void 0),a("td",{className:"table-td font-bold text-[12px]"},void 0,!1,{fileName:t,lineNumber:978,columnNumber:1},void 0),a("td",{className:"table-td font-bold text-[12px]",children:["AED ",y?y.toLocaleString():0]},void 0,!0,{fileName:t,lineNumber:979,columnNumber:1},void 0)]},void 0,!0,{fileName:t,lineNumber:969,columnNumber:53},void 0)]},void 0,!0,{fileName:t,lineNumber:948,columnNumber:49},void 0)]},void 0,!0,{fileName:t,lineNumber:920,columnNumber:45},void 0)]},void 0,!0):a(f,{children:B===!0?null:a(f,{children:a("div",{className:"pl-6",children:a("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"},void 0,!1,{fileName:t,lineNumber:991,columnNumber:57},void 0)},void 0,!1,{fileName:t,lineNumber:990,columnNumber:53},void 0)},void 0,!1)},void 0,!1)},void 0,!1,{fileName:t,lineNumber:889,columnNumber:41},void 0)},void 0,!1,{fileName:t,lineNumber:888,columnNumber:37},void 0)},void 0,!1,{fileName:t,lineNumber:887,columnNumber:37},void 0)]},void 0,!0,{fileName:t,lineNumber:739,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:738,columnNumber:9},void 0)},void 0,!1)};export{ea as default};
