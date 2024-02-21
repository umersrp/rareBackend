import{R as _,j as s,F as h,r,b as x,c as i,C as Ee,aq as Te}from"./index.9ea1484a.js";import{L as Ce}from"./Rare logo New Gif Loading.02c4dc82.js";import{D as Oe}from"./index.esm.245adb29.js";import"./jspdf.es.min.7ec26602.js";import"./html2canvas.esm.0eae2bf4.js";import{E as Pe}from"./exceljs.min.4bfac7f4.js";import{E as Re}from"./excel.9601f4f9.js";const w=_.forwardRef(({indeterminate:f,...D},b)=>{const A=_.useRef(),l=b||A;return _.useEffect(()=>{l.current.indeterminate=f},[l,f]),s(h,{children:s("input",{type:"checkbox",ref:l,...D,className:"table-checkbox"})})}),ke={option:(f,D)=>({...f,fontSize:"14px"})},Xe=({title:f,allData:D})=>{var U,G,$,z,V,q,K,W,Y,J,Q;const[b,A]=r.exports.useState([]);r.exports.useState([]);const[l,E]=r.exports.useState([]),ee=localStorage.getItem("isAuth"),N=JSON.parse(ee),[L,te]=r.exports.useState();r.exports.useState(0),r.exports.useState(0),r.exports.useState();const[I,ae]=r.exports.useState(),[v,se]=r.exports.useState([]),[T,y]=r.exports.useState(!1),[le,re]=r.exports.useState({filteredData:[],PropertyData:{}});r.exports.useState(!1);const[o,C]=r.exports.useState({propertyid:"",filteredDates:[]}),[ne,oe]=r.exports.useState({startDate:"",endDate:""}),[O,H]=r.exports.useState("");console.log("selectedProperty",o,"ownerBooking",l);const ce=async e=>{y(!0),H(e);const t=await(await fetch(`http://dev-rare.srp.ai/booking/summarybyDates/${o==null?void 0:o.propertyid}?fromdate=${e.startDate}&todate=${e.endDate}`)).json();console.log("=============>",t),y(!1),C({...o,filteredDates:t==null?void 0:t.data}),E(t==null?void 0:t.data);const u=o.propertyname.split(" | ").shift(),S=p.map(X=>{const{owner_name:P,building_name:R,communityname:g,project_name:Z,unitnumber:k}=X;if(u==k)return{owner_name:P,building_name:R,community_name:g,project_name:Z,unitnumber:k}}),m=pe(S);re({filteredData:t==null?void 0:t.data,PropertyData:m})},[p,ie]=r.exports.useState([]),de=e=>{const a=new Set;return e.filter(t=>a.has(t._id)?!1:(a.add(t._id),!0))},pe=e=>{const a=new Set;return e.filter(t=>t!==void 0&&!a.has(t.unitnumber)?(a.add(t.unitnumber),!0):!1)};r.exports.useEffect(()=>{(async()=>{try{const a=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${N==null?void 0:N._id}&sort=descending&type=customer&page=0&perPage=all`,t=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${N==null?void 0:N._id}&sort=descending&type=customer&page=0&perPage=all`,c=await fetch(a);if(!c.ok&&c.status!==400)throw new Error(`API 1 failed with status: ${c.status}`);const d=c.status===400?[]:await c.json(),n=await fetch(t);if(!n.ok&&n.status!==400)throw new Error(`API 2 failed with status: ${n.status}`);const u=n.status===400?[]:await n.json(),m=[...d,...u].map(g=>g._id),P=(await Promise.all(m.map(async g=>await(await fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${g}&page=0&perPage=all`)).json()))).flat([2]),R=de(P);A(R)}catch(a){console.error("Error fetching data:",a),setLoadingData(!1)}})()},[]),r.exports.useEffect(()=>{(async()=>{const a=b.map(async c=>{const{propertyid:d}=c;return await(await fetch(`http://dev-rare.srp.ai/property/${d}`)).json()}),t=await Promise.all(a);ie(t)})()},[b]),r.exports.useEffect(()=>{if(y(!0),p.length){const e=[...new Map(p.map(t=>[t._id,t])).values()],a=e==null?void 0:e.map(t=>({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname+" | "+t.buildingname,value:t._id}));y(!1),se(a)}},[p]),r.exports.useEffect(()=>{(async()=>{const t=await(await fetch(`http://dev-rare.srp.ai/booking/summary/${o==null?void 0:o.propertyid}`)).json();E(t==null?void 0:t.data)})()},[o.propertyid]);function ue(e){const{filteredData:a,PropertyData:t}=e,c=new Pe.Workbook,d=c.addWorksheet("CombinedSheet");d.mergeCells("A1:E1"),d.addRow(["PROPERTY DETAIL"]),d.columns=[{header:"Landlord Name",key:"owner_name",width:40,fgColor:{argb:"008000"}},{header:"Community Name",key:"community_name",width:40,fgColor:{argb:"008000"}},{header:"Project Name",key:"project_name",width:40},{header:"Apartment No",key:"unitnumber",width:35},{header:"Building No",key:"building_name",width:55}],t&&([["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...t.map(u=>[u.owner_name,u.community_name,u.project_name,u.unitnumber,u.building_name])].forEach(u=>{d.addRow(u)}),d.addRow([])),d.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATIONT","TOTAL BOOKING AMOUNT"]),a&&a.forEach(n=>{d.addRow([n==null?void 0:n.TimePerid,n==null?void 0:n.TotalDaysinMonth,n==null?void 0:n.No_of_Booked_Nights,n==null?void 0:n.AveragePerNight,n==null?void 0:n.OccpancyRate,n.Occp,n==null?void 0:n.TotalHostPayable])}),d.getRow(2).font={bold:!0},d.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"008000"}},d.getRow(8).fill={type:"pattern",pattern:"solid",fgColor:{argb:"008000"}},c.xlsx.writeBuffer().then(n=>{const u=new Blob([n],{type:"application/octet-stream"}),S=URL.createObjectURL(u),m=document.createElement("a");m.href=S,m.download="booking-"+new Date+".xlsx",document.body.appendChild(m),m.click(),document.body.removeChild(m)})}r.exports.useState(!1);const[j,he]=r.exports.useState(0),[B,me]=r.exports.useState(0),[M,Ne]=r.exports.useState(0),F=()=>{H(""),E([]),C({propertyid:""}),oe({startDate:null,endDate:null})};r.exports.useEffect(()=>{var a;let e=0;for(let t=0;t<(l==null?void 0:l.length);t++){let c=parseInt((a=l[t])==null?void 0:a.TotalDaysinMonth);e+=c}te(e)},[l==null?void 0:l.length]),r.exports.useEffect(()=>{var a;let e=0;for(let t=0;t<(l==null?void 0:l.length);t++){let c=parseInt((a=l[t])==null?void 0:a.No_of_Booked_Nights);e+=c}he(e)},[l==null?void 0:l.length]),r.exports.useEffect(()=>{const e=l.map(c=>c.OccpancyRate),t=e.reduce((c,d)=>c+Number(d),0)/e.length;me(Math.round(t))},[l==null?void 0:l.length]),r.exports.useEffect(()=>{const a=l.map(t=>t.AveragePerNight).reduce((t,c)=>t+c,0);Ne(a)},[l==null?void 0:l.length]),r.exports.useEffect(()=>{let e=l.map(a=>Number(a.TotalHostPayable)).reduce((a,t)=>a+t,0);ae(e)},[l==null?void 0:l.length]),r.exports.useRef(null);const fe=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>s("span",{children:a.indexOf(e)+1})},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"})}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((t=e==null?void 0:e.cell)==null?void 0:t.value)+" %":"Not Available"})}},{Header:"REFUND /CANCELLATIONT",accessor:"nonight",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?Number((t=e==null?void 0:e.cell)==null?void 0:t.value).toFixed(2):"Not Available"})}}],ge=r.exports.useMemo(()=>fe,[]),xe=r.exports.useMemo(()=>l),be=x.exports.useTable({columns:ge,data:xe,initialState:{pageIndex:0,pageSize:50}},x.exports.useGlobalFilter,x.exports.useSortBy,x.exports.usePagination,x.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>s("div",{children:s(w,{...t()})}),Cell:({row:t})=>s("div",{children:s(w,{...t.getToggleRowSelectedProps()})})},...a])}),{getTableProps:ve,getTableBodyProps:ye,headerGroups:Se,footerGroups:_e,page:De,nextPage:Le,previousPage:Ie,canNextPage:He,canPreviousPage:je,pageOptions:Be,state:Me,gotoPage:Fe,pageCount:Ue,setPageSize:Ge,setGlobalFilter:$e,prepareRow:Ae}=be;return s(h,{children:s("div",{className:"xl:col-span-2 col-span-1",children:i(Ee,{title:"Booking Summary Report",children:[(o==null?void 0:o.filteredDates)&&((U=o==null?void 0:o.filteredDates)==null?void 0:U.length)?s(h,{children:s("div",{className:"flex flex-row-reverse",children:i("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>ue(le),children:[s("img",{src:Re,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):null,i("div",{children:[i("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[T===!0?null:s(h,{children:s("div",{className:"w-[100%] col-span-3",children:s("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})})}),s("div",{className:"w-[100%] col-span-3",children:T===!0?s(h,{children:s("div",{className:"flex items-center justify-center h-[100%]",children:s("img",{src:Ce,width:150,height:150})})}):s(h,{children:s(Te,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:v,value:v&&O?v.filter(function(e){return e.value===(o==null?void 0:o.propertyid)}):v.filter(function(e){return e.value===(o==null?void 0:o.propertyid)}),placeholder:"Select and Search Property",onChange:e=>{O?F():C({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:ke,id:"hh"})})})]}),"  ",(o==null?void 0:o.propertyid)&&s(h,{children:i("div",{className:"flex justify-end mt-[25px]",children:[s("div",{className:"w-[150px]",children:s("div",{className:"date-range-custom relative",children:s(Oe,{value:ne,inputClassName:"input-class",containerClassName:"container-class",onChange:ce})})}),O&&s(h,{children:s("div",{className:"flex justify-end",children:s("div",{className:"w-[90px]",children:s("div",{className:"date-range-custom relative",children:s("button",{className:"btn btn-dark text-white  text-center",onClick:F,children:"Reset"})})})})})]})})]}),s("div",{className:"overflow-x-auto -mx-6",children:s("div",{className:"inline-block min-w-full align-middle",children:s("div",{className:"overflow-hidden ",children:l&&l.length>0?i(h,{children:[" ",i("div",{className:"mt-[25px] p-8",children:[i("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Landlord Name: "}),s("p",{className:"capitalize",children:(G=p[0])!=null&&G.owner_name?($=p[0])==null?void 0:$.owner_name:"Not Available"})]}),i("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Community Name: "}),s("p",{className:"capitalize",children:(z=p[0])!=null&&z.communityname?(V=p[0])==null?void 0:V.communityname:"Not Available"})]}),i("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Project Name: "}),s("p",{className:"capitalize",children:(q=p[0])!=null&&q.project_name?(K=p[0])==null?void 0:K.project_name:"Not Available"})]}),i("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Apartment No: "}),s("p",{className:"capitalize",children:(W=p[0])!=null&&W.unitnumber?(Y=p[0])==null?void 0:Y.unitnumber:"Not Available"})]}),i("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Building No: "}),s("p",{className:"capitalize",children:(J=p[0])!=null&&J.building_name?(Q=p[0])==null?void 0:Q.building_name:"Not Available"})]})]})," ",i("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...ve,children:[s("thead",{className:"bg-slate-200 dark:bg-slate-700",children:Se.map(e=>s("tr",{...e.getHeaderGroupProps(),children:e.headers.map(a=>i("th",{...a.getHeaderProps(a.getSortByToggleProps()),scope:"col",className:" table-th ",children:[a.render("Header"),s("span",{children:a.isSorted?a.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),i("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...ye,children:[De.map(e=>(Ae(e),s("tr",{...e.getRowProps(),children:e.cells.map(a=>s("td",{...a.getCellProps(),className:"table-td",children:a.render("Cell")}))}))),i("tr",{children:[s("td",{className:"table-td",children:"TOTAL"}),s("td",{}),s("td",{}),i("td",{className:"table-td",children:[L?L.toLocaleString():0," Avaiable Nights"]}),i("td",{className:"table-td",children:[j?j.toLocaleString():0," Booked Nights"]}),i("td",{className:"table-td",children:[M?M.toLocaleString():0," AED"]}),i("td",{className:"table-td",children:[B?B.toLocaleString():0," %"]}),s("td",{className:"table-td"}),i("td",{className:"table-td",children:[I?I.toLocaleString():0," AED"]})]})]})]})]}):s(h,{children:T===!0?null:s(h,{children:s("div",{className:"pl-6",children:s("h6",{className:" text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})})})})})]})})})};export{Xe as default};
