import{R as I,j as s,F as m,r as n,b as R,c as p,C as Ce,aq as Oe}from"./index.b108767f.js";import{L as Pe}from"./Rare logo New Gif Loading.02c4dc82.js";import{D as Fe}from"./index.esm.515e215d.js";import"./jspdf.es.min.eed24c14.js";import"./html2canvas.esm.0eae2bf4.js";import{E as ke}from"./exceljs.min.27a43ca2.js";import{E as _e}from"./excel.9601f4f9.js";const ee=I.forwardRef(({indeterminate:D,...O},E)=>{const P=I.useRef(),l=E||P;return I.useEffect(()=>{l.current.indeterminate=D},[l,D]),s(m,{children:s("input",{type:"checkbox",ref:l,...O,className:"table-checkbox"})})}),Le={option:(D,O)=>({...D,fontSize:"14px"})},Ze=({title:D,allData:O})=>{var $,z,K,W,Y,q,V,J,Q,X,Z;const[E,P]=n.exports.useState([]);n.exports.useState([]);const[l,F]=n.exports.useState([]),te=localStorage.getItem("isAuth"),b=JSON.parse(te),[H,ae]=n.exports.useState();n.exports.useState(0),n.exports.useState(0),n.exports.useState();const[M,se]=n.exports.useState(),[T,re]=n.exports.useState([]),[k,C]=n.exports.useState(!1),[le,oe]=n.exports.useState({filteredData:[],PropertyData:{}});n.exports.useState(!1);const[i,_]=n.exports.useState({propertyid:"",filteredDates:[]}),[ne,ce]=n.exports.useState({startDate:"",endDate:""}),[L,B]=n.exports.useState("");console.log("selectedProperty",i,"ownerBooking",l);const ie=async e=>{C(!0),B(e);const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/summarybyDates/${i==null?void 0:i.propertyid}?fromdate=${e.startDate}&todate=${e.endDate}`)).json();console.log("=============>",t),C(!1),_({...i,filteredDates:t==null?void 0:t.data}),F(t==null?void 0:t.data);const f=i.propertyname.split(" | ").shift(),S=u.map(A=>{const{owner_name:y,building_name:v,communityname:h,project_name:N,unitnumber:r}=A;if(f==r)return{owner_name:y,building_name:v,community_name:h,project_name:N,unitnumber:r,fromdates:e.startDate,todates:e.endDate}}),x=ue(S);oe({filteredData:t==null?void 0:t.data,PropertyData:x})},[u,de]=n.exports.useState([]),pe=e=>{const a=new Set;return e.filter(t=>a.has(t._id)?!1:(a.add(t._id),!0))},ue=e=>{const a=new Set;return e.filter(t=>t!==void 0&&!a.has(t.unitnumber)?(a.add(t.unitnumber),!0):!1)};n.exports.useEffect(()=>{(async()=>{try{const a=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${b==null?void 0:b._id}&sort=descending&type=customer&page=0&perPage=all`,t=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${b==null?void 0:b._id}&sort=descending&type=customer&page=0&perPage=all`,d=await fetch(a);if(!d.ok&&d.status!==400)throw new Error(`API 1 failed with status: ${d.status}`);const c=d.status===400?[]:await d.json(),g=await fetch(t);if(!g.ok&&g.status!==400)throw new Error(`API 2 failed with status: ${g.status}`);const f=g.status===400?[]:await g.json(),x=[...c,...f].map(h=>h._id),y=(await Promise.all(x.map(async h=>await(await fetch(`http://portals.rarehomesgroup.com/booking/ownerrepresentative/pages?propertyid=${h}&page=0&perPage=all`)).json()))).flat([2]),v=pe(y);P(v)}catch(a){console.error("Error fetching data:",a),setLoadingData(!1)}})()},[]),n.exports.useEffect(()=>{(async()=>{const a=E.map(async d=>{const{propertyid:c}=d;return await(await fetch(`http://portals.rarehomesgroup.com/property/${c}`)).json()}),t=await Promise.all(a);de(t)})()},[E]),n.exports.useEffect(()=>{if(C(!0),u.length){const e=[...new Map(u.map(t=>[t._id,t])).values()],a=e==null?void 0:e.map(t=>({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname+" | "+t.buildingname,value:t._id}));C(!1),re(a)}},[u]),n.exports.useEffect(()=>{(async()=>{const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/summary/${i==null?void 0:i.propertyid}`)).json();F(t==null?void 0:t.data)})()},[i.propertyid]);function he(e){var f,S,x,A,y,v;const{filteredData:a,PropertyData:t}=e;console.log("122222",a,t,e);const d=new ke.Workbook,c=d.addWorksheet("CombinedSheet");if(c.mergeCells("A1:W1"),c.addRow(["PROPERTY SUMMARY"]),c.columns=[{header:"Landlord Name",key:"owner_name",width:30},{header:"Community Name",key:"community_name",width:40},{header:"Project Name",key:"project_name",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"building_name",width:25},{header:"",key:"",width:20},{header:"",key:"",width:55},{header:"",key:"",width:55}],t){[["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...t.map(o=>[o.owner_name,o.community_name,o.project_name,o.unitnumber,o.building_name])].forEach(o=>{c.addRow(o)}),c.addRow([]),[["Date Range"],...t.map(o=>["from: "+o.fromdates,"to: "+o.todates])].forEach(o=>{c.addRow(o)}),c.addRow([]),c.addRow([]);const r=c.addRow(["MONTHWISE BOOKING SUMMARY"]);c.addRow([]),r.eachCell(o=>{o.font={size:11}})}const g=c.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATION","TOTAL BOOKING AMOUNT"]);if(a){a.forEach(r=>{c.addRow([r==null?void 0:r.TimePerid,r==null?void 0:r.TotalDaysinMonth,r==null?void 0:r.No_of_Booked_Nights,"AED  "+Number(r==null?void 0:r.AveragePerNight).toFixed(2),Math.round(Number(r==null?void 0:r.OccpancyRate).toFixed(0))+"%","NOT AVAILABLE","AED  "+(r==null?void 0:r.TotalHostPayable)])}),c.addRow([]);const h=a.map(r=>Number(r.AveragePerNight)).reduce((r,o)=>r+o,0),N=c.addRow(["TOTAL",((f=a.map(r=>Number(r.TotalDaysinMonth)).reduce((r,o)=>r+o,0))==null?void 0:f.toLocaleString())+" Available Nights",((S=a.map(r=>Number(r.No_of_Booked_Nights)).reduce((r,o)=>r+o,0))==null?void 0:S.toLocaleString())+"  Booked Nights","AED "+(h==null?void 0:h.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),((A=(x=a.map(r=>Number(r.OccpancyRate)).reduce((r,o)=>r+o,0))==null?void 0:x.toLocaleString())==null?void 0:A.toLocaleString())+"%","","AED "+((v=(y=a.map(r=>Number(r.TotalHostPayable)).reduce((r,o)=>r+o,0))==null?void 0:y.toLocaleString())==null?void 0:v.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))]);{const r={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};N.fill=r,g.fill=r;const o={argb:"FFFFFF"};[N,g].forEach(Ee=>{Ee.eachCell({includeEmpty:!0},Te=>{Te.font={color:o}})})}}c.getRow(2).font={bold:!0},c.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},c.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},c.getRow(6).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},c.getRow(2).font={color:{argb:"FFFFFF"}},c.getRow(6).font={color:{argb:"FFFFFF"}},c.getRow(3).font={color:{argb:"FFFFFF"}},c.getRow(7).alignment={horizontal:"center"},d.xlsx.writeBuffer().then(h=>{const N=new Blob([h],{type:"application/octet-stream"}),r=URL.createObjectURL(N),o=document.createElement("a");o.href=r,o.download="booking-"+new Date+".xlsx",document.body.appendChild(o),o.click(),document.body.removeChild(o)})}n.exports.useState(!1);const[j,me]=n.exports.useState(0),[U,ge]=n.exports.useState(0),[G,Ne]=n.exports.useState(0),w=()=>{B(""),F([]),_({propertyid:""}),ce({startDate:null,endDate:null})};n.exports.useEffect(()=>{var a;let e=0;for(let t=0;t<(l==null?void 0:l.length);t++){let d=parseInt((a=l[t])==null?void 0:a.TotalDaysinMonth);e+=d}ae(e)},[l==null?void 0:l.length]),n.exports.useEffect(()=>{var a;let e=0;for(let t=0;t<(l==null?void 0:l.length);t++){let d=parseInt((a=l[t])==null?void 0:a.No_of_Booked_Nights);e+=d}me(e)},[l==null?void 0:l.length]),n.exports.useEffect(()=>{const e=l.map(d=>d.OccpancyRate),t=e.reduce((d,c)=>d+Number(c),0)/e.length;ge(Math.round(t))},[l==null?void 0:l.length]),n.exports.useEffect(()=>{const a=l.map(t=>t.AveragePerNight).reduce((t,d)=>t+d,0);Ne(a)},[l==null?void 0:l.length]),n.exports.useEffect(()=>{let e=l.map(a=>Number(a.TotalHostPayable)).reduce((a,t)=>a+t,0);se(e)},[l==null?void 0:l.length]),n.exports.useRef(null);const fe=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>s("span",{children:a.indexOf(e)+1})},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"})}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((t=e==null?void 0:e.cell)==null?void 0:t.value)+" %":"Not Available"})}},{Header:"REFUND /CANCELLATIONT",accessor:"nonight",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"})}}],be=n.exports.useMemo(()=>fe,[]),xe=n.exports.useMemo(()=>l),ye=R.exports.useTable({columns:be,data:xe,initialState:{pageIndex:0,pageSize:50}},R.exports.useGlobalFilter,R.exports.useSortBy,R.exports.usePagination,R.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>s("div",{children:s(ee,{...t()})}),Cell:({row:t})=>s("div",{children:s(ee,{...t.getToggleRowSelectedProps()})})},...a])}),{getTableProps:ve,getTableBodyProps:De,headerGroups:Se,footerGroups:Ie,page:Ae,nextPage:He,previousPage:Me,canNextPage:Be,canPreviousPage:je,pageOptions:Ue,state:Ge,gotoPage:we,pageCount:$e,setPageSize:ze,setGlobalFilter:Ke,prepareRow:Re}=ye;return s(m,{children:s("div",{className:"xl:col-span-2 col-span-1",children:p(Ce,{title:"Booking Summary Report",children:[(i==null?void 0:i.filteredDates)&&(($=i==null?void 0:i.filteredDates)==null?void 0:$.length)?s(m,{children:s("div",{className:"flex flex-row-reverse",children:p("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>he(le),children:[s("img",{src:_e,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):null,p("div",{children:[p("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[k===!0?null:s(m,{children:s("div",{className:"w-[100%] col-span-3",children:s("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),s("div",{className:"w-[100%] col-span-3",children:k===!0?s(m,{children:s("div",{className:"flex items-center justify-center h-[100%]",children:s("img",{src:Pe,width:150,height:150})})}):s(m,{children:s(Oe,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:T,value:T&&L?T.filter(function(e){return e.value===(i==null?void 0:i.propertyid)}):T.filter(function(e){return e.value===(i==null?void 0:i.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{L?w():_({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:Le,id:"hh"})})})]}),"  ",(i==null?void 0:i.propertyid)&&s(m,{children:p("div",{className:"flex justify-end mt-[25px]",children:[s("div",{className:"w-[150px]",children:s("div",{className:"date-range-custom relative",children:s(Fe,{value:ne,inputClassName:"input-class",containerClassName:"container-class",onChange:ie})})}),L&&s(m,{children:s("div",{className:"flex justify-end",children:s("div",{className:"w-[90px]",children:s("div",{className:"date-range-custom relative",children:s("button",{className:"btn btn-dark text-white  text-center",onClick:w,children:"Reset"})})})})})]})})]}),s("div",{className:"overflow-x-auto -mx-6",children:s("div",{className:"inline-block min-w-full align-middle",children:s("div",{className:"overflow-hidden ",children:l&&l.length>0?p(m,{children:[" ",p("div",{className:"mt-[25px] p-8",children:[p("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Landlord Name: "}),s("p",{className:"capitalize",children:(z=u[0])!=null&&z.owner_name?(K=u[0])==null?void 0:K.owner_name:"Not Available"})]}),p("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Community Name: "}),s("p",{className:"capitalize",children:(W=u[0])!=null&&W.communityname?(Y=u[0])==null?void 0:Y.communityname:"Not Available"})]}),p("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Project Name: "}),s("p",{className:"capitalize",children:(q=u[0])!=null&&q.project_name?(V=u[0])==null?void 0:V.project_name:"Not Available"})]}),p("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Apartment No: "}),s("p",{className:"capitalize",children:(J=u[0])!=null&&J.unitnumber?(Q=u[0])==null?void 0:Q.unitnumber:"Not Available"})]}),p("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Building No: "}),s("p",{className:"capitalize",children:(X=u[0])!=null&&X.building_name?(Z=u[0])==null?void 0:Z.building_name:"Not Available"})]})]})," ",p("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ve,children:[s("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Se.map(e=>s("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>p("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),s("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),p("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...De,children:[Ae.map(e=>(Re(e),s("tr",{...e.getRowProps(),children:e.cells.map(a=>s("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))}))),p("tr",{children:[s("td",{className:"table-td",children:"TOTAL"}),s("td",{}),s("td",{}),p("td",{className:"table-td",children:[H?H.toLocaleString():0," Avaiable Nights"]}),p("td",{className:"table-td",children:[j?j.toLocaleString():0," Booked Nights"]}),p("td",{className:"table-td",children:[G?G.toLocaleString():0," AED"]}),p("td",{className:"table-td",children:[U?U.toLocaleString():0," %"]}),s("td",{className:"table-td"}),p("td",{className:"table-td",children:[M?M.toLocaleString():0," AED"]})]})]})]})]}):s(m,{children:k===!0?null:s(m,{children:s("div",{className:"pl-6",children:s("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})})})})]})})})};export{Ze as default};
