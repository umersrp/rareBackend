import{R as j,j as a,F as g,r as l,b as T,c as d,f as Oe,aq as Pe}from"./index.a065b7d1.js";import{L as _e}from"./Rare logo New Gif Loading.02c4dc82.js";import{D as Le}from"./index.esm.fafc077b.js";import"./jspdf.es.min.265f6a3e.js";import"./html2canvas.esm.0eae2bf4.js";import{E as Ie}from"./exceljs.min.b26b2141.js";import{E as ne}from"./excel.9601f4f9.js";const ce=j.forwardRef(({indeterminate:R,..._},C)=>{const L=j.useRef(),n=C||L;return j.useEffect(()=>{n.current.indeterminate=R},[n,R]),a(g,{children:a("input",{type:"checkbox",ref:n,..._,className:"table-checkbox"})})}),Be={option:(R,_)=>({...R,fontSize:"14px"})},tt=({title:R,allData:_})=>{var J,Q,X,Z,ee,te,ae,se,oe,re,le;const[C,L]=l.exports.useState([]);l.exports.useState([]);const[n,I]=l.exports.useState([]),ie=localStorage.getItem("isAuth"),E=JSON.parse(ie),[M,de]=l.exports.useState();l.exports.useState(0),l.exports.useState(0),l.exports.useState();const[v,pe]=l.exports.useState(),[F,ue]=l.exports.useState([]),[B,O]=l.exports.useState(!1),[U,G]=l.exports.useState({filteredData:[],PropertyData:{}});l.exports.useState(!1);const[c,H]=l.exports.useState({propertyid:"",filteredDates:[]}),[me,he]=l.exports.useState({startDate:"",endDate:""}),[w,$]=l.exports.useState("");console.log("selectedProperty",c,"ownerBooking",n);const ge=async e=>{O(!0),$(e);const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/summarybyDates/${c==null?void 0:c.propertyid}?fromdate=${e.startDate}&todate=${e.endDate}`)).json();console.log("=============>",t),O(!1),H({...c,filteredDates:t==null?void 0:t.data}),I(t==null?void 0:t.data);const y=c.propertyname.split(" | ").shift(),A=u.map(S=>{const{owner_name:m,building_name:p,communityname:x,project_name:h,unitnumber:b}=S;if(y==b)return{owner_name:m,building_name:p,community_name:x,project_name:h,unitnumber:b,fromdates:e.startDate,todates:e.endDate}}),D=z(A);G({filteredData:t==null?void 0:t.data,PropertyData:D})},[u,Ne]=l.exports.useState([]),fe=e=>{const s=new Set;return e.filter(t=>s.has(t._id)?!1:(s.add(t._id),!0))},z=e=>{const s=new Set;return e.filter(t=>t!==void 0&&!s.has(t.unitnumber)?(s.add(t.unitnumber),!0):!1)};l.exports.useEffect(()=>{(async()=>{try{const s=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${E==null?void 0:E._id}&sort=descending&type=customer&page=0&perPage=all`,t=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${E==null?void 0:E._id}&sort=descending&type=customer&page=0&perPage=all`,i=await fetch(s);if(!i.ok&&i.status!==400)throw new Error(`API 1 failed with status: ${i.status}`);const r=i.status===400?[]:await i.json(),N=await fetch(t);if(!N.ok&&N.status!==400)throw new Error(`API 2 failed with status: ${N.status}`);const y=N.status===400?[]:await N.json(),D=[...r,...y].map(x=>x._id),m=(await Promise.all(D.map(async x=>await(await fetch(`http://portals.rarehomesgroup.com/booking/ownerrepresentative/pages?propertyid=${x}&page=0&perPage=all`)).json()))).flat([2]),p=fe(m);L(p)}catch(s){console.error("Error fetching data:",s),setLoadingData(!1)}})()},[]),l.exports.useEffect(()=>{(async()=>{const s=C.map(async i=>{const{propertyid:r}=i;return await(await fetch(`http://portals.rarehomesgroup.com/property/${r}`)).json()}),t=await Promise.all(s);Ne(t)})()},[C]),l.exports.useEffect(()=>{if(O(!0),u.length){const e=[...new Map(u.map(t=>[t._id,t])).values()],s=e==null?void 0:e.map(t=>({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname+" | "+t.buildingname,value:t._id}));O(!1),ue(s)}},[u]),l.exports.useEffect(()=>{(async()=>{const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/summary/${c==null?void 0:c.propertyid}`)).json();I(t==null?void 0:t.data);const y=c.propertyname.split(" | ").shift(),A=u.map(S=>{const{owner_name:m,building_name:p,communityname:x,project_name:h,unitnumber:b}=S;if(y==b)return{owner_name:m,building_name:p,community_name:x,project_name:h,unitnumber:b}}),D=z(A);G({filteredData:t==null?void 0:t.data,PropertyData:D})})()},[c.propertyid]);function K(e){var y,A,D,S;const{filteredData:s,PropertyData:t}=e;console.log("kkkkwwwwwww",e);const i=new Ie.Workbook,r=i.addWorksheet("CombinedSheet");r.mergeCells("A1:W1"),r.addRow(["BOOKING SUMMARY"]),r.columns=[{header:"Landlord Name",key:"owner_name",width:30},{header:"Community Name",key:"community_name",width:40},{header:"Project Name",key:"project_name",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"building_name",width:25},{header:"",key:"",width:20},{header:"",key:"",width:55},{header:"",key:"",width:55}],t&&([["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...t.map(p=>[p.owner_name,p.community_name,p.project_name,p.unitnumber,p.building_name])].forEach(p=>{r.addRow(p)}),r.addRow([]),r.addRow([]),r.addRow([]),r.addRow([]));const N=r.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATION","TOTAL BOOKING AMOUNT"]);if(s){s.forEach(o=>{r.addRow([o==null?void 0:o.TimePerid,o==null?void 0:o.TotalDaysinMonth,o==null?void 0:o.No_of_Booked_Nights,"AED  "+Number(o==null?void 0:o.AveragePerNight).toFixed(2),Math.round(Number(o==null?void 0:o.OccpancyRate).toFixed(0))+"%","NOT AVAILABLE","AED  "+Number(o==null?void 0:o.TotalHostPayable).toFixed(2)])}),r.addRow([]);const m=s.map(o=>Number(o.AveragePerNight)).reduce((o,f)=>o+f,0),p=s.map(o=>o.OccpancyRate),h=p.reduce((o,f)=>o+Number(f),0)/p.length,b=Math.round(h);console.log("222",m);const P=r.addRow(["TOTAL",((y=s.map(o=>Number(o.TotalDaysinMonth)).reduce((o,f)=>o+f,0))==null?void 0:y.toLocaleString())+" Available Nights",((A=s.map(o=>Number(o.No_of_Booked_Nights)).reduce((o,f)=>o+f,0))==null?void 0:A.toLocaleString())+"  Booked Nights","AED "+(m==null?void 0:m.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),(b==null?void 0:b.toLocaleString())+"%","","AED "+((S=(D=s.map(o=>Number(o.TotalHostPayable)).reduce((o,f)=>o+f,0))==null?void 0:D.toLocaleString())==null?void 0:S.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))]);{const o={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};P.fill=o,N.fill=o;const f={argb:"FFFFFF"};[P,N].forEach(Ce=>{Ce.eachCell({includeEmpty:!0},Fe=>{Fe.font={color:f}})})}}r.getRow(2).font={bold:!0},r.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},r.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},r.getRow(6).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},r.getRow(2).font={color:{argb:"FFFFFF"}},r.getRow(6).font={color:{argb:"FFFFFF"}},r.getRow(3).font={color:{argb:"FFFFFF"}},r.getRow(7).alignment={horizontal:"center"},i.xlsx.writeBuffer().then(m=>{const p=new Blob([m],{type:"application/octet-stream"}),x=URL.createObjectURL(p),h=document.createElement("a");h.href=x,h.download="booking-summary"+new Date+".xlsx",document.body.appendChild(h),h.click(),document.body.removeChild(h)})}l.exports.useState(!1);const[k,xe]=l.exports.useState(0),[q,be]=l.exports.useState(0),[V,W]=l.exports.useState(0),Y=()=>{$(""),I([]),H({propertyid:""}),he({startDate:null,endDate:null})};l.exports.useEffect(()=>{var s;let e=0;for(let t=0;t<(n==null?void 0:n.length);t++){let i=parseInt((s=n[t])==null?void 0:s.TotalDaysinMonth);e+=i}de(e)},[n==null?void 0:n.length]),l.exports.useEffect(()=>{var s;let e=0;for(let t=0;t<(n==null?void 0:n.length);t++){let i=parseInt((s=n[t])==null?void 0:s.No_of_Booked_Nights);e+=i}xe(e)},[n==null?void 0:n.length]),l.exports.useEffect(()=>{const e=n.map(i=>i.OccpancyRate),t=e.reduce((i,r)=>i+Number(r),0)/e.length;be(Math.round(t))},[n==null?void 0:n.length]),l.exports.useEffect(()=>{const e=n.map(i=>Number(i.TotalHostPayable)).reduce((i,r)=>i+r,0);pe(e);const s=n.reduce((i,r)=>i+parseInt(r.No_of_Booked_Nights),0),t=v!==0?s/v:0;W(t)},[n,v]),l.exports.useEffect(()=>{const e=v/k;console.log("averages",e),W(Number(e).toFixed(2))},[k,v]),console.log("averages11111",V),l.exports.useRef(null);const ye=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:s})=>a("span",{children:s.indexOf(e)+1})},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:e=>{var s,t;return a("span",{children:(s=e==null?void 0:e.cell)!=null&&s.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:e=>{var s,t;return a("span",{children:(s=e==null?void 0:e.cell)!=null&&s.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:e=>{var s,t;return a("span",{children:(s=e==null?void 0:e.cell)!=null&&s.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:e=>{var s,t;return d("span",{className:"text-[12px]",children:[a("strong",{children:"AED"})," ",(s=e==null?void 0:e.cell)!=null&&s.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"]})}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:e=>{var s,t;return a("span",{children:(s=e==null?void 0:e.cell)!=null&&s.value?((t=e==null?void 0:e.cell)==null?void 0:t.value)+" %":"Not Available"})}},{Header:"REFUND /CANCELLATIONT",accessor:"nonight",Cell:e=>{var s,t;return a("span",{children:(s=e==null?void 0:e.cell)!=null&&s.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:e=>{var s,t;return d("span",{className:"text-[12px]",children:[a("strong",{children:"AED"})," ",(s=e==null?void 0:e.cell)!=null&&s.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"]})}}],ve=l.exports.useMemo(()=>ye,[]),De=l.exports.useMemo(()=>n),Ae=T.exports.useTable({columns:ve,data:De,initialState:{pageIndex:0,pageSize:50}},T.exports.useGlobalFilter,T.exports.useSortBy,T.exports.usePagination,T.exports.useRowSelect,e=>{e.visibleColumns.push(s=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>a("div",{children:a(ce,{...t()})}),Cell:({row:t})=>a("div",{children:a(ce,{...t.getToggleRowSelectedProps()})})},...s])}),{getTableProps:Se,getTableBodyProps:Ee,headerGroups:Re,footerGroups:He,page:ke,nextPage:we,previousPage:je,canNextPage:Me,canPreviousPage:Ue,pageOptions:Ge,state:$e,gotoPage:ze,pageCount:Ke,setPageSize:qe,setGlobalFilter:Ve,prepareRow:Te}=Ae;return a(g,{children:a("div",{className:"xl:col-span-2 col-span-1",children:d(Oe,{title:"Booking Summary Report",children:[c.propertyid?(c==null?void 0:c.filteredDates)&&((J=c==null?void 0:c.filteredDates)==null?void 0:J.length)?a(g,{children:a("div",{className:"flex flex-row-reverse",children:d("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>K(U),children:[a("img",{src:ne,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),a("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):a(g,{children:a("div",{className:"flex flex-row-reverse",children:d("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>K(U),children:[a("img",{src:ne,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),a("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):null,d("div",{children:[d("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[B===!0?null:a(g,{children:a("div",{className:"w-[100%] col-span-3",children:a("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),a("div",{className:"w-[100%] col-span-3",children:B===!0?a(g,{children:a("div",{className:"flex items-center justify-center h-[100%]",children:a("img",{src:_e,width:150,height:150})})}):a(g,{children:a(Pe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:F,value:F&&w?F.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}):F.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{w?Y():H({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:Be,id:"hh"})})})]}),"  ",(c==null?void 0:c.propertyid)&&a(g,{children:d("div",{className:"flex justify-end mt-[25px]",children:[a("div",{className:"w-[150px]",children:a("div",{className:"date-range-custom relative",children:a(Le,{value:me,inputClassName:"input-class",containerClassName:"container-class",onChange:ge})})}),w&&a(g,{children:a("div",{className:"flex justify-end",children:a("div",{className:"w-[90px]",children:a("div",{className:"date-range-custom relative",children:a("button",{className:"btn btn-dark text-white  text-center",onClick:Y,children:"Reset"})})})})})]})})]}),a("div",{className:"overflow-x-auto -mx-6",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:"overflow-hidden ",children:n&&n.length>0?d(g,{children:[" ",d("div",{className:"mt-[25px] p-8",children:[d("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Landlord Name: "}),a("p",{className:"capitalize",children:(Q=u[0])!=null&&Q.owner_name?(X=u[0])==null?void 0:X.owner_name:"Not Available"})]}),d("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Community Name: "}),a("p",{className:"capitalize",children:(Z=u[0])!=null&&Z.communityname?(ee=u[0])==null?void 0:ee.communityname:"Not Available"})]}),d("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Project Name: "}),a("p",{className:"capitalize",children:(te=u[0])!=null&&te.project_name?(ae=u[0])==null?void 0:ae.project_name:"Not Available"})]}),d("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Apartment No: "}),a("p",{className:"capitalize",children:(se=u[0])!=null&&se.unitnumber?(oe=u[0])==null?void 0:oe.unitnumber:"Not Available"})]}),d("div",{className:"flex gap-x-[10px]",children:[a("p",{className:"font-semibold",children:"Building No: "}),a("p",{className:"capitalize",children:(re=u[0])!=null&&re.building_name?(le=u[0])==null?void 0:le.building_name:"Not Available"})]})]})," ",d("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Se,children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Re.map(e=>a("tr",{...e.getHeaderGroupProps(),children:e.headers.map(s=>d("th",{...s.getHeaderProps(s.getSortByToggleProps()),scope:"col",className:" table-th ",children:[s.render("Header"),a("span",{children:s.isSorted?s.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),d("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Ee,children:[ke.map(e=>(Te(e),a("tr",{...e.getRowProps(),children:e.cells.map(s=>a("td",{...s.getCellProps(),className:"table-td",children:s.render("Cell")}))}))),d("tr",{children:[a("td",{className:"table-td font-bold text-[12px]",children:"TOTAL"}),a("td",{}),a("td",{}),d("td",{className:"table-td font-bold text-[12px]",children:[M?M.toLocaleString():0," Available Nights"]}),d("td",{className:"table-td font-bold text-[12px]",children:[k?k.toLocaleString():0," Booked Nights"]}),console.log("=====>",V),d("td",{className:"table-td font-bold text-[12px]",children:["Average: ",Number(v/k).toFixed(2)]}),d("td",{className:"table-td font-bold text-[12px]",children:[q?q.toLocaleString():0,"%"]}),a("td",{className:"table-td font-bold text-[12px]"}),d("td",{className:"table-td font-bold text-[12px]",children:["AED ",v?v.toLocaleString():0]})]})]})]})]}):a(g,{children:B===!0?null:a(g,{children:a("div",{className:"pl-6",children:a("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})})})})]})})})};export{tt as default};
