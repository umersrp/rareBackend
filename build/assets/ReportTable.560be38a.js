import{R as M,j as s,F as g,r as o,b as T,c as i,f as Fe,aq as Oe}from"./index.2430b158.js";import{L as _e}from"./Rare logo New Gif Loading.02c4dc82.js";import{D as Le}from"./index.esm.bf609f0f.js";import"./jspdf.es.min.835f29e3.js";import"./html2canvas.esm.0eae2bf4.js";import{E as Ie}from"./exceljs.min.f4c9dfea.js";import{E as oe}from"./excel.9601f4f9.js";const le=M.forwardRef(({indeterminate:E,..._},C)=>{const L=M.useRef(),l=C||L;return M.useEffect(()=>{l.current.indeterminate=E},[l,E]),s(g,{children:s("input",{type:"checkbox",ref:l,..._,className:"table-checkbox"})})}),He={option:(E,_)=>({...E,fontSize:"14px"})},tt=({title:E,allData:_})=>{var W,Y,J,Q,X,Z,ee,te,ae,se,re;const[C,L]=o.exports.useState([]);o.exports.useState([]);const[l,I]=o.exports.useState([]),ne=localStorage.getItem("isAuth"),S=JSON.parse(ne),[w,ce]=o.exports.useState();o.exports.useState(0),o.exports.useState(0),o.exports.useState();const[R,ie]=o.exports.useState(),[k,de]=o.exports.useState([]),[H,P]=o.exports.useState(!1),[U,G]=o.exports.useState({filteredData:[],PropertyData:{}});o.exports.useState(!1);const[c,B]=o.exports.useState({propertyid:"",filteredDates:[]}),[pe,ue]=o.exports.useState({startDate:"",endDate:""}),[j,$]=o.exports.useState("");console.log("selectedProperty",c,"ownerBooking",l);const me=async e=>{P(!0),$(e);const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/summarybyDates/${c==null?void 0:c.propertyid}?fromdate=${e.startDate}&todate=${e.endDate}`)).json();console.log("=============>",t),P(!1),B({...c,filteredDates:t==null?void 0:t.data}),I(t==null?void 0:t.data);const y=c.propertyname.split(" | ").shift(),D=u.map(A=>{const{owner_name:m,building_name:p,communityname:x,project_name:h,unitnumber:b}=A;if(y==b)return{owner_name:m,building_name:p,community_name:x,project_name:h,unitnumber:b,fromdates:e.startDate,todates:e.endDate}}),v=z(D);G({filteredData:t==null?void 0:t.data,PropertyData:v})},[u,he]=o.exports.useState([]),ge=e=>{const a=new Set;return e.filter(t=>a.has(t._id)?!1:(a.add(t._id),!0))},z=e=>{const a=new Set;return e.filter(t=>t!==void 0&&!a.has(t.unitnumber)?(a.add(t.unitnumber),!0):!1)};o.exports.useEffect(()=>{(async()=>{try{const a=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${S==null?void 0:S._id}&sort=descending&type=customer&page=0&perPage=all`,t=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${S==null?void 0:S._id}&sort=descending&type=customer&page=0&perPage=all`,d=await fetch(a);if(!d.ok&&d.status!==400)throw new Error(`API 1 failed with status: ${d.status}`);const n=d.status===400?[]:await d.json(),N=await fetch(t);if(!N.ok&&N.status!==400)throw new Error(`API 2 failed with status: ${N.status}`);const y=N.status===400?[]:await N.json(),v=[...n,...y].map(x=>x._id),m=(await Promise.all(v.map(async x=>await(await fetch(`http://portals.rarehomesgroup.com/booking/ownerrepresentative/pages?propertyid=${x}&page=0&perPage=all`)).json()))).flat([2]),p=ge(m);L(p)}catch(a){console.error("Error fetching data:",a),setLoadingData(!1)}})()},[]),o.exports.useEffect(()=>{(async()=>{const a=C.map(async d=>{const{propertyid:n}=d;return await(await fetch(`http://portals.rarehomesgroup.com/property/${n}`)).json()}),t=await Promise.all(a);he(t)})()},[C]),o.exports.useEffect(()=>{if(P(!0),u.length){const e=[...new Map(u.map(t=>[t._id,t])).values()],a=e==null?void 0:e.map(t=>({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname+" | "+t.buildingname,value:t._id}));P(!1),de(a)}},[u]),o.exports.useEffect(()=>{(async()=>{const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/summary/${c==null?void 0:c.propertyid}`)).json();I(t==null?void 0:t.data);const y=c.propertyname.split(" | ").shift(),D=u.map(A=>{const{owner_name:m,building_name:p,communityname:x,project_name:h,unitnumber:b}=A;if(y==b)return{owner_name:m,building_name:p,community_name:x,project_name:h,unitnumber:b}}),v=z(D);G({filteredData:t==null?void 0:t.data,PropertyData:v})})()},[c.propertyid]);function q(e){var y,D,v,A;const{filteredData:a,PropertyData:t}=e;console.log("kkkkwwwwwww",e);const d=new Ie.Workbook,n=d.addWorksheet("CombinedSheet");n.mergeCells("A1:W1"),n.addRow(["PROPERTY SUMMARY"]),n.columns=[{header:"Landlord Name",key:"owner_name",width:30},{header:"Community Name",key:"community_name",width:40},{header:"Project Name",key:"project_name",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"building_name",width:25},{header:"",key:"",width:20},{header:"",key:"",width:55},{header:"",key:"",width:55}],t&&([["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...t.map(p=>[p.owner_name,p.community_name,p.project_name,p.unitnumber,p.building_name])].forEach(p=>{n.addRow(p)}),n.addRow([]),n.addRow([]),n.addRow([]),n.addRow([]));const N=n.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATION","TOTAL BOOKING AMOUNT"]);if(a){a.forEach(r=>{n.addRow([r==null?void 0:r.TimePerid,r==null?void 0:r.TotalDaysinMonth,r==null?void 0:r.No_of_Booked_Nights,"AED  "+Number(r==null?void 0:r.AveragePerNight).toFixed(2),Math.round(Number(r==null?void 0:r.OccpancyRate).toFixed(0))+"%","NOT AVAILABLE","AED  "+Number(r==null?void 0:r.TotalHostPayable).toFixed(2)])}),n.addRow([]);const m=a.map(r=>Number(r.AveragePerNight)).reduce((r,f)=>r+f,0),p=a.map(r=>r.OccpancyRate),h=p.reduce((r,f)=>r+Number(f),0)/p.length,b=Math.round(h);console.log("222",m);const O=n.addRow(["TOTAL",((y=a.map(r=>Number(r.TotalDaysinMonth)).reduce((r,f)=>r+f,0))==null?void 0:y.toLocaleString())+" Available Nights",((D=a.map(r=>Number(r.No_of_Booked_Nights)).reduce((r,f)=>r+f,0))==null?void 0:D.toLocaleString())+"  Booked Nights","AED "+(m==null?void 0:m.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),(b==null?void 0:b.toLocaleString())+"%","","AED "+((A=(v=a.map(r=>Number(r.TotalHostPayable)).reduce((r,f)=>r+f,0))==null?void 0:v.toLocaleString())==null?void 0:A.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))]);{const r={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};O.fill=r,N.fill=r;const f={argb:"FFFFFF"};[O,N].forEach(ke=>{ke.eachCell({includeEmpty:!0},Pe=>{Pe.font={color:f}})})}}n.getRow(2).font={bold:!0},n.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},n.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},n.getRow(6).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},n.getRow(2).font={color:{argb:"FFFFFF"}},n.getRow(6).font={color:{argb:"FFFFFF"}},n.getRow(3).font={color:{argb:"FFFFFF"}},n.getRow(7).alignment={horizontal:"center"},d.xlsx.writeBuffer().then(m=>{const p=new Blob([m],{type:"application/octet-stream"}),x=URL.createObjectURL(p),h=document.createElement("a");h.href=x,h.download="booking-summary"+new Date+".xlsx",document.body.appendChild(h),h.click(),document.body.removeChild(h)})}o.exports.useState(!1);const[F,Ne]=o.exports.useState(0),[K,fe]=o.exports.useState(0),[xe,be]=o.exports.useState(0),V=()=>{$(""),I([]),B({propertyid:""}),ue({startDate:null,endDate:null})};o.exports.useEffect(()=>{var a;let e=0;for(let t=0;t<(l==null?void 0:l.length);t++){let d=parseInt((a=l[t])==null?void 0:a.TotalDaysinMonth);e+=d}ce(e)},[l==null?void 0:l.length]),o.exports.useEffect(()=>{var a;let e=0;for(let t=0;t<(l==null?void 0:l.length);t++){let d=parseInt((a=l[t])==null?void 0:a.No_of_Booked_Nights);e+=d}Ne(e)},[l==null?void 0:l.length]),o.exports.useEffect(()=>{const e=l.map(d=>d.OccpancyRate),t=e.reduce((d,n)=>d+Number(n),0)/e.length;fe(Math.round(t))},[l==null?void 0:l.length]),o.exports.useEffect(()=>{const e=R!==0?F/R:0;be(e)},[F,R]),o.exports.useEffect(()=>{let e=l.map(a=>Number(a.TotalHostPayable)).reduce((a,t)=>a+t,0);ie(e)},[l==null?void 0:l.length]),o.exports.useRef(null);const ye=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>s("span",{children:a.indexOf(e)+1})},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:e=>{var a,t;return i("span",{className:"text-[12px]",children:[s("strong",{children:"AED"})," ",(a=e==null?void 0:e.cell)!=null&&a.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"]})}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((t=e==null?void 0:e.cell)==null?void 0:t.value)+" %":"Not Available"})}},{Header:"REFUND /CANCELLATIONT",accessor:"nonight",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:e=>{var a,t;return i("span",{className:"text-[12px]",children:[s("strong",{children:"AED"})," ",(a=e==null?void 0:e.cell)!=null&&a.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"]})}}],ve=o.exports.useMemo(()=>ye,[]),De=o.exports.useMemo(()=>l),Ae=T.exports.useTable({columns:ve,data:De,initialState:{pageIndex:0,pageSize:50}},T.exports.useGlobalFilter,T.exports.useSortBy,T.exports.usePagination,T.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>s("div",{children:s(le,{...t()})}),Cell:({row:t})=>s("div",{children:s(le,{...t.getToggleRowSelectedProps()})})},...a])}),{getTableProps:Se,getTableBodyProps:Ee,headerGroups:Re,footerGroups:Be,page:Te,nextPage:je,previousPage:Me,canNextPage:we,canPreviousPage:Ue,pageOptions:Ge,state:$e,gotoPage:ze,pageCount:qe,setPageSize:Ke,setGlobalFilter:Ve,prepareRow:Ce}=Ae;return s(g,{children:s("div",{className:"xl:col-span-2 col-span-1",children:i(Fe,{title:"Booking Summary Report",children:[c.propertyid?(c==null?void 0:c.filteredDates)&&((W=c==null?void 0:c.filteredDates)==null?void 0:W.length)?s(g,{children:s("div",{className:"flex flex-row-reverse",children:i("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>q(U),children:[s("img",{src:oe,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):s(g,{children:s("div",{className:"flex flex-row-reverse",children:i("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>q(U),children:[s("img",{src:oe,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):null,i("div",{children:[i("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[H===!0?null:s(g,{children:s("div",{className:"w-[100%] col-span-3",children:s("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),s("div",{className:"w-[100%] col-span-3",children:H===!0?s(g,{children:s("div",{className:"flex items-center justify-center h-[100%]",children:s("img",{src:_e,width:150,height:150})})}):s(g,{children:s(Oe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:k,value:k&&j?k.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}):k.filter(function(e){return e.value===(c==null?void 0:c.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{j?V():B({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:He,id:"hh"})})})]}),"  ",(c==null?void 0:c.propertyid)&&s(g,{children:i("div",{className:"flex justify-end mt-[25px]",children:[s("div",{className:"w-[150px]",children:s("div",{className:"date-range-custom relative",children:s(Le,{value:pe,inputClassName:"input-class",containerClassName:"container-class",onChange:me})})}),j&&s(g,{children:s("div",{className:"flex justify-end",children:s("div",{className:"w-[90px]",children:s("div",{className:"date-range-custom relative",children:s("button",{className:"btn btn-dark text-white  text-center",onClick:V,children:"Reset"})})})})})]})})]}),s("div",{className:"overflow-x-auto -mx-6",children:s("div",{className:"inline-block min-w-full align-middle",children:s("div",{className:"overflow-hidden ",children:l&&l.length>0?i(g,{children:[" ",i("div",{className:"mt-[25px] p-8",children:[i("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Landlord Name: "}),s("p",{className:"capitalize",children:(Y=u[0])!=null&&Y.owner_name?(J=u[0])==null?void 0:J.owner_name:"Not Available"})]}),i("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Community Name: "}),s("p",{className:"capitalize",children:(Q=u[0])!=null&&Q.communityname?(X=u[0])==null?void 0:X.communityname:"Not Available"})]}),i("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Project Name: "}),s("p",{className:"capitalize",children:(Z=u[0])!=null&&Z.project_name?(ee=u[0])==null?void 0:ee.project_name:"Not Available"})]}),i("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Apartment No: "}),s("p",{className:"capitalize",children:(te=u[0])!=null&&te.unitnumber?(ae=u[0])==null?void 0:ae.unitnumber:"Not Available"})]}),i("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Building No: "}),s("p",{className:"capitalize",children:(se=u[0])!=null&&se.building_name?(re=u[0])==null?void 0:re.building_name:"Not Available"})]})]})," ",i("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...Se,children:[s("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Re.map(e=>s("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>i("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),s("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),i("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Ee,children:[Te.map(e=>(Ce(e),s("tr",{...e.getRowProps(),children:e.cells.map(a=>s("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))}))),i("tr",{children:[s("td",{className:"table-td font-bold text-[12px]",children:"TOTAL"}),s("td",{}),s("td",{}),i("td",{className:"table-td font-bold text-[12px]",children:[w?w.toLocaleString():0," Avaiable Nights"]}),i("td",{className:"table-td font-bold text-[12px]",children:[F?F.toLocaleString():0," Booked Nights"]}),i("td",{className:"table-td font-bold text-[12px]",children:["Average  Rate: ",xe.toFixed(2)]}),i("td",{className:"table-td font-bold text-[12px]",children:[K?K.toLocaleString():0," %"]}),s("td",{className:"table-td font-bold text-[12px]"}),i("td",{className:"table-td font-bold text-[12px]",children:["AED ",R?R.toLocaleString():0," "]})]})]})]})]}):s(g,{children:H===!0?null:s(g,{children:s("div",{className:"pl-6",children:s("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})})})})]})})})};export{tt as default};