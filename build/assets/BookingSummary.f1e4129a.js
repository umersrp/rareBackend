import{R as oe,r as d,E as Ne,b as j,j as s,F as g,c as u,f as xe,aq as be}from"./index.1ecd67a9.js";import{D as ge}from"./index.esm.5ffb8825.js";import"./jspdf.es.min.cf4021a1.js";import"./html2canvas.esm.0eae2bf4.js";import{E as ve}from"./exceljs.min.3e6a1443.js";import{E as de}from"./excel.9601f4f9.js";const ie=oe.forwardRef(({allBooking:e,propertyData:m,fetchDetails:a=!1},I)=>{const A=[{Header:"Sr no",accessor:"id",Cell:({row:t,flatRows:n})=>s("span",{children:n.indexOf(t)+1})},{Header:"MONTH / PERIOD",accessor:"TimePerid",Cell:t=>{var n,l,x,E;return a?s("button",{onClick:()=>{var T,H;return K(m._id,(T=t==null?void 0:t.cell)!=null&&T.value?(H=t==null?void 0:t.cell)==null?void 0:H.value:"")},children:(n=t==null?void 0:t.cell)!=null&&n.value?(l=t==null?void 0:t.cell)==null?void 0:l.value:"Not Available"}):s("span",{children:(x=t==null?void 0:t.cell)!=null&&x.value?(E=t==null?void 0:t.cell)==null?void 0:E.value:"Not Available"})}},{Header:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH",accessor:"TotalDaysinMonth",Cell:t=>{var n,l;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?(l=t==null?void 0:t.cell)==null?void 0:l.value:"Not Available"})}},{Header:"NO OF NIGHTS BOOKED",accessor:"No_of_Booked_Nights",Cell:t=>{var n,l;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?(l=t==null?void 0:t.cell)==null?void 0:l.value:"Not Available"})}},{Header:"AVERAGE RATE PER NIGHT",accessor:"AveragePerNight",Cell:t=>{var n,l;return u("span",{className:"text-[12px]",children:[s("strong",{children:"AED"})," ",(n=t==null?void 0:t.cell)!=null&&n.value?Number((l=t==null?void 0:t.cell)==null?void 0:l.value).toFixed(2):"Not Available"]})}},{Header:"OCCUPANCY RATE",accessor:"OccpancyRate",Cell:t=>{var n,l;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?Math.round(Number((l=t==null?void 0:t.cell)==null?void 0:l.value).toFixed(2))+" %":"Not Available"})}},{Header:"REFUND /CANCELLATION",accessor:"refund",Cell:t=>{var n,l;return s("span",{children:(n=t==null?void 0:t.cell)!=null&&n.value?(l=t==null?void 0:t.cell)==null?void 0:l.value:"Not Available"})}},{Header:"TOTAL BOOKING AMOUNT",accessor:"TotalHostPayable",Cell:t=>{var n,l;return u("span",{className:"text-[12px]",children:[s("strong",{children:"AED"})," ",(n=t==null?void 0:t.cell)!=null&&n.value?Number((l=t==null?void 0:t.cell)==null?void 0:l.value).toFixed(2):"Not Available"]})}}],V=d.exports.useMemo(()=>A,[]),_=d.exports.useMemo(()=>e),G=Ne(),y=j.exports.useTable({columns:V,data:_,initialState:{pageIndex:0,pageSize:50}},j.exports.useGlobalFilter,j.exports.useSortBy,j.exports.usePagination,j.exports.useRowSelect),{getTableProps:D,getTableBodyProps:f,headerGroups:O,footerGroups:me,page:C,nextPage:W,previousPage:Q,canNextPage:Y,canPreviousPage:$,pageOptions:X,state:Z,gotoPage:U,pageCount:he,setPageSize:ue,setGlobalFilter:w,prepareRow:k}=y,[L,B]=d.exports.useState(0),[F,ee]=d.exports.useState(0),[R,te]=d.exports.useState(0),[M,se]=d.exports.useState(0),[ae,ne]=d.exports.useState(0);d.exports.useState(0);const[ce,J]=d.exports.useState(0);d.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(n=>{const{TotalDaysinMonth:l}=n;return l});B(t.reduce((n,l)=>n+l,0))}},[e==null?void 0:e.length]),d.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(n=>{const{No_of_Booked_Nights:l}=n;return l});ee(t.reduce((n,l)=>n+l,0))}},[e==null?void 0:e.length]),d.exports.useEffect(()=>{if(e!=null&&e.length){const t=e.map(l=>{const{OccpancyRate:x}=l;return x});let n=Math.round(t.reduce((l,x)=>l+Number(x),0)/t.length);se(n)}},[e==null?void 0:e.length]),d.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let l=0;l<(e==null?void 0:e.length);l++){let x=parseFloat((t=e[l])==null?void 0:t.totalNonight);n+=x}ne(n||0)}},[e==null?void 0:e.length]),d.exports.useEffect(()=>{var t;if(e!=null&&e.length){let n=0;for(let l=0;l<(e==null?void 0:e.length);l++){let x=Number((t=e[l])==null?void 0:t.TotalHostPayable);n+=x}te(n||0)}},[e==null?void 0:e.length]),d.exports.useEffect(()=>{m._id&&J(m._id)},[m._id]);function K(t,n){let l=new Date(n);if(t){let x=new Date(l.getFullYear(),l.getMonth(),1).toJSON().split("T")[0],E=new Date(l.getFullYear(),l.getMonth()+1,0).toJSON().split("T")[0],T=`/booking-reports?startDate=${x}&endDate=${E}&propertyId=${t}`;G(T)}}return s(g,{children:e&&e.length>0?s(g,{children:u("div",{ref:I,children:[u("div",{className:"mt-[25px]",children:[u("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Landlord Name: "}),s("p",{className:"capitalize",children:m!=null&&m.owner_name?m==null?void 0:m.owner_name:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Community Name: "}),s("p",{className:"capitalize",children:m.community_name?m.community_name:m!=null&&m.communityname?m==null?void 0:m.communityname:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Project Name: "}),s("p",{className:"capitalize",children:m!=null&&m.project_name?m==null?void 0:m.project_name:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Apartment No: "}),s("p",{className:"capitalize",children:m!=null&&m.unitnumber?m==null?void 0:m.unitnumber:"Not Available"})]}),u("div",{className:"flex gap-x-[10px]",children:[s("p",{className:"font-semibold",children:"Building No: "}),s("p",{className:"capitalize",children:m!=null&&m.building_name?m==null?void 0:m.building_name:"Not Available"})]})]}),s("div",{className:"overflow-x-auto -mx-6 mt-6",children:s("div",{className:"inline-block min-w-full align-middle",children:s("div",{className:"",children:u("table",{className:"min-w-[100%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...D,children:[s("thead",{className:"bg-slate-200 dark:bg-slate-700",children:O.map(t=>s("tr",{...t.getHeaderGroupProps(),children:t.headers.map(n=>u("th",{...n.getHeaderProps(n.getSortByToggleProps()),scope:"col",className:"table-th",children:[n.render("Header"),s("span",{children:n.isSorted?n.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),u("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...f,children:[C&&C.length>0&&C.map(t=>(k(t),s(g,{children:s("tr",{...t.getRowProps(),children:t.cells.map(n=>s("td",{...n.getCellProps(),className:"table-td",children:n.render("Cell")}))})}))),u("tr",{children:[s("td",{}),s("td",{className:"font-semibold",children:"TOTAL"}),u("td",{className:"table-td font-semibold",children:[L==null?void 0:L.toLocaleString()," Available Nights"]}),u("td",{className:"table-td font-semibold",children:[F==null?void 0:F.toLocaleString()," Booked Nights"]}),u("td",{className:"table-td font-semibold",children:["AED ",Number(R/F).toFixed(2)]}),u("td",{className:"table-td font-semibold",children:[M==null?void 0:M.toLocaleString()," %"]}),s("td",{}),u("td",{className:"table-td font-semibold",children:["AED ",R==null?void 0:R.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),s("td",{})]})]})]})})})})]})}):s(g,{children:s("h6",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"No Property Data Found"})})})}),Se={option:(e,m)=>({...e,fontSize:"14px"})},Ae=()=>{var T,H;const[e,m]=d.exports.useState({propertyid:"",filteredDates:[]}),[a,I]=d.exports.useState([]),[A,V]=d.exports.useState(""),[_,G]=d.exports.useState(""),[y,D]=d.exports.useState([]),[f,O]=d.exports.useState(""),[me,C]=d.exports.useState(""),[W,Q]=d.exports.useState({}),[Y,$]=d.exports.useState({PropertyData:{},filteredData:[]}),[X,Z]=d.exports.useState({PropertyData:{},filteredData:[]}),[U,he]=d.exports.useState([]),[ue,w]=d.exports.useState(""),[k,L]=d.exports.useState(0),[B,F]=d.exports.useState(0),[ee,R]=d.exports.useState(0),[te,M]=d.exports.useState(0),[se,ae]=d.exports.useState(0),[ne,ce]=d.exports.useState(0);d.exports.useEffect(()=>{if(a!=null&&a.length){const i=a.map(r=>{const{TotalDaysinMonth:c}=r;return c});console.log("days"),L(i.reduce((r,c)=>r+c,0))}},[a==null?void 0:a.length]),d.exports.useEffect(()=>{if(a!=null&&a.length){const i=a.map(r=>{const{No_of_Booked_Nights:c}=r;return c});F(i.reduce((r,c)=>r+c,0))}},[a==null?void 0:a.length]),d.exports.useEffect(()=>{if(a!=null&&a.length){const i=a.map(c=>{const{OccpancyRate:h}=c;return h});let r=Math.round(i.reduce((c,h)=>c+Number(h),0)/i.length);M(r)}},[a==null?void 0:a.length]),d.exports.useEffect(()=>{var i;if(a!=null&&a.length){let r=0;for(let c=0;c<(a==null?void 0:a.length);c++){let h=parseFloat((i=a[c])==null?void 0:i.totalNonight);r+=h}ae(r||0)}},[a==null?void 0:a.length]),d.exports.useEffect(()=>{var i;if(a!=null&&a.length){let r=0;for(let c=0;c<(a==null?void 0:a.length);c++){let h=Number((i=a[c])==null?void 0:i.AveragePerNight);r+=h}ce(r||0)}},[a==null?void 0:a.length]),d.exports.useEffect(()=>{var i;if(a!=null&&a.length){let r=0;for(let c=0;c<(a==null?void 0:a.length);c++){let h=Number((i=a[c])==null?void 0:i.TotalHostPayable);r+=h}console.log("totalbookednights",r),R(r||0)}},[a==null?void 0:a.length]),d.exports.useEffect(()=>{fetch("http://portals.rarehomesgroup.com/property").then(i=>i.json()).then(i=>{const r=i==null?void 0:i.map(c=>({label:c.unitnumber+" | "+c.communityname+" | "+c.projectname+" | "+c.buildingname,value:c._id}));D(r)})},[]),d.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){w(e.propertyid);const c=await(await fetch(`http://portals.rarehomesgroup.com/property/${e==null?void 0:e.propertyid}`)).json();$(U==null?void 0:U.data),c&&O(c)}})()},[e==null?void 0:e.propertyid]),d.exports.useEffect(()=>{(async()=>{if(e!=null&&e.propertyid){let r=`http://portals.rarehomesgroup.com/booking/summarybyDates/${e==null?void 0:e.propertyid}`;newValue&&(newValue==null?void 0:newValue.startDate)&&(newValue==null?void 0:newValue.endDate)&&(r+=`?fromdate=${newValue.startDate}&todate=${newValue.endDate}`);const h=await(await fetch(r)).json();$(h==null?void 0:h.data),V(h==null?void 0:h.data)}})()},[]);const[J,K]=d.exports.useState({startDate:"",endDate:""}),t=d.exports.useRef(null),n=async()=>{if(e!=null&&e.propertyid){let i=new Date().toISOString(),r=new Date(i).getFullYear(),c=new Date(i).getMonth(),h=new Date(r,c+1,0).toJSON().split("T")[0],v=new Date(r,new Date(i).getMonth()-5,1).toJSON().split("T")[0],p=`http://portals.rarehomesgroup.com/booking/summarybyDates/${e==null?void 0:e.propertyid}`;v&&h&&(p+=`?fromdate=${v}&todate=${h}`);const S=await(await fetch(p)).json();I(S.data?S.data:[]);const z={owner_name:f==null?void 0:f.owner_name,building_name:f==null?void 0:f.building_name,community_name:f==null?void 0:f.communityname,project_name:f==null?void 0:f.project_name,unitnumber:f==null?void 0:f.unitnumber};$({filteredData:S==null?void 0:S.data,PropertyData:z})}};d.exports.useEffect(()=>{if(A!=null&&A.length&&(e==null?void 0:e.propertyid)&&(e==null?void 0:e.startDate)&&(e==null?void 0:e.endDate)){const i=A.filter(r=>{let c=!0;return e.propertyid&&r.propertyid!==e.propertyid&&(c=!1),(r==null?void 0:r.checkindate)<(e==null?void 0:e.startDate)&&(r==null?void 0:r.checkindate)>(e==null?void 0:e.endDate)&&(c=!1),c});I(i)}n()},[e==null?void 0:e.propertyid,e==null?void 0:e.startDate,e==null?void 0:e.endDate,A,Y]);const l=()=>{G(""),m({...e,filteredDates:[]}),K({startDate:null,endDate:null})},x=async i=>{if(O(!0),G(i),!i){m({...e,filteredDates:[]});return}const c=await(await fetch(`http://portals.rarehomesgroup.com/booking/summarybyDates/${e==null?void 0:e.propertyid}?fromdate=${i.startDate}&todate=${i.endDate}`)).json();O(!1);let h=f;m({...e,filteredDates:c==null?void 0:c.data});const v={owner_name:h.owner_name,building_name:h.building_name,community_name:h.communityname,project_name:h.project_name,unitnumber:h.unitnumber};Q(v),C(v),Z({filteredData:c==null?void 0:c.data,PropertyData:v})};function E(i){var S,z,le,re;const{filteredData:r,PropertyData:c}=i;let h=[];h.push(c),console.log("122222",h,r);const v=new ve.Workbook,p=v.addWorksheet("CombinedSheet");p.mergeCells("A1:W1"),p.addRow(["BOOKING SUMMARY"]),p.columns=[{header:"Landlord Name",key:"owner_name",width:30},{header:"Community Name",key:"community_name",width:40},{header:"Project Name",key:"project_name",width:25},{header:"Apartment No",key:"unitnumber",width:25},{header:"Building No",key:"building_name",width:25},{header:"",key:"",width:20},{header:"",key:"",width:55},{header:"",key:"",width:55}],h&&(console.log("PropertyData",c),[["Landlord Name","Community Name","Project Name","Apartment No","Building No"],...h.map(b=>[b.owner_name,b.community_name,b.project_name,b.unitnumber,b.building_name])].forEach(b=>{p.addRow(b)}),p.addRow([]),p.addRow([]));const q=p.addRow(["MONTH / PERIOD","TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH","NO OF NIGHTS BOOKED","AVERAGE RATE PER NIGHT","OCCUPANCY RATE","REFUND /CANCELLATION","TOTAL BOOKING AMOUNT"]);if(r){r.forEach(o=>{p.addRow([o==null?void 0:o.TimePerid,o==null?void 0:o.TotalDaysinMonth,o==null?void 0:o.No_of_Booked_Nights,Number(o==null?void 0:o.AveragePerNight).toFixed(2),Math.round(Number(o==null?void 0:o.OccpancyRate).toFixed(0))+"%","NOT AVAILABLE",o==null?void 0:o.TotalHostPayable])}),p.addRow([]);const P=r.map(o=>Number(o.AveragePerNight)).reduce((o,N)=>o+N,0),b=p.addRow(["TOTAL",((S=r.map(o=>Number(o.TotalDaysinMonth)).reduce((o,N)=>o+N,0))==null?void 0:S.toLocaleString())+" Available Nights",((z=r.map(o=>Number(o.No_of_Booked_Nights)).reduce((o,N)=>o+N,0))==null?void 0:z.toLocaleString())+"  Booked Nights","AED "+(P==null?void 0:P.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),Math.round(Number(r.map(o=>Number(o.OccpancyRate)).reduce((o,N)=>o+N,0)/r.length).toFixed(0))+"%","","AED "+((re=(le=r.map(o=>Number(o.TotalHostPayable)).reduce((o,N)=>o+N,0))==null?void 0:le.toLocaleString())==null?void 0:re.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))]);{const o={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}};b.fill=o,q.fill=o;const N={argb:"FFFFFF"};[b,q].forEach(pe=>{pe.eachCell({includeEmpty:!0},fe=>{fe.font={color:N}})})}}p.getRow(2).font={bold:!0},p.getRow(2).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},p.getRow(3).fill={type:"pattern",pattern:"solid",fgColor:{argb:"808080"}},p.getRow(7).fill={type:"pattern",pattern:"solid",fgColor:{argb:"000000"}},p.getRow(2).font={color:{argb:"FFFFFF"}},p.getRow(3).font={color:{argb:"FFFFFF"}},p.getRow(7).font={color:{argb:"FFFFFF"}},p.getRow(7).alignment={horizontal:"center"},v.xlsx.writeBuffer().then(P=>{const b=new Blob([P],{type:"application/octet-stream"}),o=URL.createObjectURL(b),N=document.createElement("a");N.href=o,N.download="booking-"+new Date+".xlsx",document.body.appendChild(N),N.click(),document.body.removeChild(N)})}return s(g,{children:s("div",{className:"xl:col-span-2 col-span-1",children:u(xe,{title:"Booking Summary",children:[e.propertyid?(e==null?void 0:e.filteredDates)&&((T=e==null?void 0:e.filteredDates)==null?void 0:T.length)?s(g,{children:s("div",{className:"flex flex-row-reverse",children:u("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>E(X),children:[s("img",{src:de,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):s(g,{children:s("div",{className:"flex flex-row-reverse",children:u("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>E(Y),children:[s("img",{src:de,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),s("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]})})}):null,u("div",{children:[u("form",{className:"lg:grid-cols-3 grid gap-5 grid-cols-1 ",children:[s("div",{className:"w-[100%] col-span-3",children:s("h4",{className:"text-base text-slate-800 dark:text-slate-300 mb-[0.5rem] mt-[0.5rem]",children:"Select Property"})}),s("div",{className:"w-[100%] col-span-3",children:s(be,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:y,value:y&&_?y.filter(function(i){return i.value===(e==null?void 0:e.propertyid)}):y.filter(function(i){return i.value===(e==null?void 0:e.propertyid)}),onChange:i=>{_?l():m({...e,propertyid:i==null?void 0:i.value})},styles:Se,id:"hh",placeholder:"Select and Search property"})})]}),e.propertyid&&s(g,{children:u("div",{className:"flex justify-end mt-[25px]",children:[s("div",{className:"w-[150px]",children:s("div",{className:"date-range-custom relative",children:s(ge,{value:J,inputClassName:"input-class",containerClassName:"container-class",onChange:x,placeholder:"SELECT DATE"})})}),_&&s("div",{className:"flex justify-end",children:s("div",{className:"w-[90px]",children:s("div",{className:"date-range-custom relative",children:s("button",{className:"btn btn-dark text-white  text-center",type:"button",onClick:l,children:"Reset"})})})})]})})]}),(H=e.filteredDates)!=null&&H.length?s(g,{children:s(ie,{allBooking:e.filteredDates,propertyData:W,ref:t,fetchDetails:!0})}):s(g,{children:f?s(ie,{allBooking:a,propertyData:f,ref:t,fetchDetails:!0}):""})]})})})},_e=oe.memo(Ae);export{_e as default};
