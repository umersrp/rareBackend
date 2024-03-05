import{r as p,b as L,c as v,F as Q,j as t,I as ee,bO as ie,f as te,aq as se,c1 as re}from"./index.59da7a86.js";import{D as ce}from"./index.esm.3174a18c.js";import{N as oe}from"./not-found.46bdbc04.js";import{E as de}from"./excel.9601f4f9.js";import{u as _,w as me}from"./jspdf.plugin.autotable.edd1dbba.js";import"./jspdf.es.min.d0d6fbeb.js";const he=({allBooking:k,exportToExcel:H,hrData:B,companyName:d,employeeName:I})=>{const V=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:s})=>t("span",{children:s.indexOf(e)+1})},{Header:"Name",accessor:e=>{var s;return`${(s=e.employeeData)==null?void 0:s.name}`},Cell:e=>{var s,i;return t("span",{children:(s=e==null?void 0:e.cell)!=null&&s.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"email",accessor:e=>{var s;return`${(s=e.employeeData)==null?void 0:s.email}`},Cell:e=>{var s,i;return t("span",{className:"normal-case",children:(s=e==null?void 0:e.cell)!=null&&s.value?(i=e==null?void 0:e.cell)==null?void 0:i.value:"Not Available"})}},{Header:"Date",accessor:e=>`${e.date}`,Cell:e=>{var s,i;return t("span",{className:"normal-case",children:(s=e==null?void 0:e.cell)!=null&&s.value?new Date((i=e==null?void 0:e.cell)==null?void 0:i.value).toDateString():"Not Available"})}},{Header:"Time In",accessor:e=>`${e.TimeIn}`,Cell:e=>{var h;const s=(h=e==null?void 0:e.cell)==null?void 0:h.value;if(!s)return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Not Available"})})});const c=(u=>{const[l,o,f]=u.split(":").map(Number);return new Date(2023,6,27,l,o,f).toLocaleString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0})})(s);return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:c})})})}},{Header:"Time In Address",accessor:e=>`${e.TimeInAddress}`,Cell:e=>{var s,i,c,h,u;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(s=e==null?void 0:e.cell)!=null&&s.value?((c=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:c.slice(0,25))+(((u=(h=e==null?void 0:e.cell)==null?void 0:h.value)==null?void 0:u.length)>25?"...":""):"Not Available"})})})}},{Header:"Time Out",accessor:e=>`${e.TimeOut}`,Cell:e=>{var h;const s=(h=e==null?void 0:e.cell)==null?void 0:h.value;if(!s)return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Not Available"})})});const c=(u=>{const[l,o,f]=u.split(":").map(Number);return new Date(2023,6,27,l,o,f).toLocaleString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0})})(s);return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:c})})})}},{Header:"Time Out Address",accessor:e=>`${e.TimeOutAddress}`,Cell:e=>{var s,i,c,h,u;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(s=e==null?void 0:e.cell)!=null&&s.value?((c=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:c.slice(0,25))+(((u=(h=e==null?void 0:e.cell)==null?void 0:h.value)==null?void 0:u.length)>25?"...":""):"Not Available"})})})}},{Header:"Total hours",accessor:e=>{var s;return`${(s=e.employeeData)==null?void 0:s.designation}`},Cell:e=>{var g,D,S,T,F,C;const s=(S=(D=(g=e==null?void 0:e.cell)==null?void 0:g.row)==null?void 0:D.original)==null?void 0:S.TimeIn,i=(C=(F=(T=e==null?void 0:e.cell)==null?void 0:T.row)==null?void 0:F.original)==null?void 0:C.TimeOut;if(!s||!i)return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Not Available"})})});const c=O=>{const[$,P,j]=O.split(":").map(parseFloat);return $*3600+P*60+j},h=c(s),l=c(i)-h;if(isNaN(l)||l<0)return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Invalid Time Format"})})});const o=Math.floor(l/3600),f=Math.floor(l%3600/60),m=`${o}:${f} Hours`;return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:m})})})}},{Header:"Over Time",accessor:e=>{var s;return`${(s=e.employeeData)==null?void 0:s.reportingto}`},Cell:e=>{var g,D,S,T,F,C;const s=(S=(D=(g=e==null?void 0:e.cell)==null?void 0:g.row)==null?void 0:D.original)==null?void 0:S.TimeIn,i=(C=(F=(T=e==null?void 0:e.cell)==null?void 0:T.row)==null?void 0:F.original)==null?void 0:C.TimeOut;if(!s||!i)return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Not Available"})})});const c=O=>{const[$,P,j]=O.split(":").map(parseFloat);return $*3600+P*60+j},h=c(s),l=c(i)-h;if(isNaN(l)||l<0)return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Invalid Time Format"})})});const o=Math.floor(l/3600),f=Math.floor(l%3600/60),m=o>11||o===11&&f>=30;return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${m?"text-success-500 bg-success-500":"text-danger-500 bg-danger-500"}`,children:m?"Yes":"No"})})}},{Header:"Late",accessor:e=>{var s;return`${(s=e.employeeData)==null?void 0:s.phonenumber}`},Cell:e=>{var l,o,f,m,g,D;const s=(f=(o=(l=e==null?void 0:e.cell)==null?void 0:l.row)==null?void 0:o.original)==null?void 0:f.TimeIn,i=(D=(g=(m=e==null?void 0:e.cell)==null?void 0:m.row)==null?void 0:g.original)==null?void 0:D.TimeOut;if(!s)return t("div",{children:t("span",{className:"inline-flex items-center",children:t("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Not Available"})})});const c=S=>{const[T,F,C]=S.split(":").map(parseFloat);return T*3600+F*60+C},h=c(s);c(i);const u=(d==null?void 0:d.label)==="admin@srca.com.pk"&&h>c("10:00:00")?"Yes":"No";return t("span",{className:"block w-full",children:t("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${u==="No"?"text-success-500 bg-success-500":""} 
            ${u==="Yes"?"text-danger-500 bg-danger-500":""}
            
             `,children:u})})}}],M=p.exports.useMemo(()=>V,[]),n=p.exports.useMemo(()=>k),z=L.exports.useTable({columns:M,data:n,initialState:{pageIndex:0,pageSize:50}},L.exports.useGlobalFilter,L.exports.useSortBy,L.exports.usePagination,L.exports.useRowSelect,e=>{e.visibleColumns.push(s=>[...s])}),{getTableProps:G,getTableBodyProps:Y,headerGroups:R,footerGroups:Z,page:U,nextPage:X,previousPage:W,canNextPage:r,canPreviousPage:y,pageOptions:E,state:q,gotoPage:x,pageCount:J,setPageSize:A,setGlobalFilter:w,prepareRow:K}=z,{globalFilter:a,pageIndex:N,pageSize:b}=q;return v(Q,{children:[t("div",{className:"md:flex justify-end items-center mb-6 gap-x-[25px]",children:(d==null?void 0:d.value)&&(I==null?void 0:I.value)&&(k==null?void 0:k.length)&&(new Date().getDate()===26||new Date().getDate()===30)?v("button",{className:"h-[34px] rounded-[10px] relative bg-white border1px flex items-center gap-x-[10px] justify-around px-[10px] py-[5px] cursor-pointer",onClick:()=>H(B),children:[t("img",{src:de,alt:"Excel icon",className:"w-[20px] h-[20px] noselect"}),t("p",{className:"text-[14px] leading regular color-black",children:"Export in Excel"})]}):null}),t("div",{className:"overflow-x-auto -mx-6",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"",children:v("table",{className:"min-w-[110%] overflow-x-scroll divide-y divide-slate-100 table-fixed dark:divide-slate-700",...G,children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:R.map(e=>t("tr",{...e.getHeaderGroupProps(),children:e.headers.map(s=>v("th",{...s.getHeaderProps(s.getSortByToggleProps()),scope:"col",className:" table-th ",children:[s.render("Header"),t("span",{children:s.isSorted?s.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...Y,children:U.map(e=>(K(e),t("tr",{...e.getRowProps(),children:e.cells.map(s=>t("td",{...s.getCellProps(),className:"table-td",children:s.render("Cell")}))})))})]})})})}),v("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[v("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[t("select",{className:"form-control py-2 w-max",value:b,onChange:e=>A(Number(e.target.value)),children:[50,100,200].map(e=>v("option",{value:e,children:["Show ",e]},e))}),v("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",v("span",{children:[N+1," of ",E.length]})]})]}),v("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>x(0),disabled:!y,children:t(ee,{icon:"heroicons:chevron-double-left-solid"})})}),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>W(),disabled:!y,children:"Prev"})}),E.map((e,s)=>t("li",{children:t("button",{href:"#","aria-current":"page",className:` ${s===N?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>x(s),children:e+1})},s)),t("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{className:` ${r?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>X(),disabled:!r,children:"Next"})}),t("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:t("button",{onClick:()=>x(J-1),disabled:!r,className:` ${r?"":"opacity-50 cursor-not-allowed"}`,children:t(ee,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})},ae={option:(k,H)=>({...k,fontSize:"14px"})},ue=({title:k,linktitle:H,pagelink:B})=>{const[d,I]=p.exports.useState([]),[V,M]=p.exports.useState(!1),[n,z]=p.exports.useState({startDate:"",endDate:""}),G=async a=>{z(a)};p.exports.useEffect(()=>{(async()=>{M(!0);const b=await(await fetch("http://portals.rarehomesgroup.com/booking")).json();return I(b),M(!1)})()},[]);const[Y,R]=p.exports.useState(),Z={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},U={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}};p.exports.useEffect(()=>{var N;let a=0;for(let b=0;b<(d==null?void 0:d.length);b++){let e=parseFloat((N=d[b])==null?void 0:N.roomrentamount);a+=e}R(a)},[d==null?void 0:d.length]),d!=null&&d.length&&(d==null||d.length),Y&&Y.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});const[X,W]=p.exports.useState([]),[r,y]=p.exports.useState();p.exports.useEffect(()=>{fetch("http://hrmate.srp.ai/company").then(a=>a.json()).then(a=>{const N=a==null?void 0:a.map(b=>({label:b.email,value:b.email}));W(N)})},[]);const[E,q]=p.exports.useState([]),[x,J]=p.exports.useState();p.exports.useEffect(()=>{r!=null&&r.value&&fetch("http://hrmate.srp.ai/employees/"+(r==null?void 0:r.value)).then(a=>a.json()).then(a=>{const N=a==null?void 0:a.map(b=>({label:b.email,value:b.email}));q(N)})},[r==null?void 0:r.value]);const[A,w]=p.exports.useState([]);console.log("eeee",A),p.exports.useEffect(()=>{(r==null?void 0:r.value)&&(x==null?void 0:x.value)&&(async()=>{const e=(await(await fetch(`http://hrmate.srp.ai/attendance/${r==null?void 0:r.value}/all/${x==null?void 0:x.value}?fromDate=${n==null?void 0:n.startDate}&toDate=${n==null?void 0:n.endDate}`)).json()).sort((s,i)=>new Date(s.date)-new Date(i.date));w(e),I(e)})()},[r==null?void 0:r.value,x==null?void 0:x.value,n==null?void 0:n.startDate,n==null?void 0:n.endDate]);function K(a){var u;console.log("=====>",a);let N;a.map(l=>{var o;N=(o=l.employeeData)==null?void 0:o.name});const b={font:{color:{rgb:"FFFFFF"}},fill:{fgColor:{rgb:"FF0000"}}},e={font:{color:{rgb:"000000"}},fill:{fgColor:{rgb:"00FF00"}}},s=[["Name","Email","Date","Time In","Time In Address","Time Out","Time Out Address","Hours Worked","Overtime","Late"],...a.map(l=>{var O,$;const o=l.TimeIn.split(":"),f=l.TimeOut.split(":"),m=new Date,g=new Date;if(m.setHours(parseInt(o[0],10)),m.setMinutes(parseInt(o[1],10)),m.setSeconds(parseInt(o[2],10)),g.setHours(parseInt(f[0],10)),g.setMinutes(parseInt(f[1],10)),g.setSeconds(parseInt(f[2],10)),isNaN(m)||isNaN(g))return[];const D=(g-m)/(1e3*60*60),S=P=>{const[j,le,ne]=P.split(":").map(parseFloat);return j*3600+le*60+ne},T=S(l==null?void 0:l.TimeIn),F=(r==null?void 0:r.label)==="admin@srca.com.pk"&&T>S("10:00:00")?"Yes":"No",C=D>11.5;return[(O=l.employeeData)==null?void 0:O.name,($=l.employeeData)==null?void 0:$.email,new Date(l.date).toDateString(),l.TimeIn,l.TimeInAddress,l.TimeOut,l.TimeOutAddress,D.toFixed(2)>0?D.toFixed(2):"Invalid Time",C?"Yes":"No",F]})],i=_.aoa_to_sheet(s);for(let l=1;l<=a.length;l++){const o=_.encode_cell({r:l,c:8}),f=(u=i[o])==null?void 0:u.v;let m;f==="Yes"?m=b:m=e;const g=i[o];g?g.s=m:i[o]={v:f,s:m}}const c=_.book_new();_.book_append_sheet(c,i,"Sheet1");const h=me(c,{bookType:"xlsx",type:"array"});re.exports.saveAs(new Blob([h],{type:"application/octet-stream"}),`${N}.xlsx`)}return t(Q,{children:V===!0?t(ie,{}):v(te,{children:[t("div",{className:"flex justify-between items-center mb-6",children:t("h4",{className:"card-title",children:"Employees Attendence"})}),t("div",{className:"grid grid-cols-12 gap-5 mb-5",children:t("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:t(te,{bodyClass:"p-4",children:v("div",{className:"flex justify-between items-center  mb-[15px]",children:[t("h4",{children:(n==null?void 0:n.startDate)&&(n==null?void 0:n.endDate)?"From: "+new Date(n==null?void 0:n.startDate).toDateString()+" - To: "+new Date(n==null?void 0:n.endDate).toDateString():"Please Select Date First"}),t("div",{className:"w-[150px]",children:t("div",{className:"date-range-custom relative",children:t(ce,{value:n,inputClassName:"input-class",containerClassName:"container-class",onChange:G,placeholder:"Select Date"})})})]})})})}),(n==null?void 0:n.startDate)&&(n==null?void 0:n.endDate)?v("div",{className:"flex justify-between items-center mb-[25px]",children:[v("div",{className:"w-[48%]",children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Company Name"}),t(se,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:X,value:X.filter(function(a){return(a==null?void 0:a.value)===(r==null?void 0:r.value)}),onChange:a=>{y(a)},styles:ae,id:"hh"})]}),v("div",{className:"w-[48%]",children:[t("label",{htmlFor:" hh",className:"form-label ",children:"Employee Name"}),t(se,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:E,value:E.filter(function(a){return(a==null?void 0:a.value)===(x==null?void 0:x.value)}),onChange:a=>{J(a)},styles:ae,id:"hh"})]})]}):null,A!=null&&A.length?t(he,{allBooking:A,exportToExcel:K,hrData:A,companyName:r,employeeName:x}):t("div",{className:"flex justify-center items-center",children:t("img",{src:oe,alt:"NotFound",className:"h-[564px] object-contain"})})]})})},Ne=()=>{const[k,H]=p.exports.useState([]);return p.exports.useEffect(()=>{(async()=>{const I=await(await fetch("http://portals.rarehomesgroup.com/booking")).json();return H(I)})()},[]),t(Q,{children:t("div",{className:" space-y-5",children:t(ue,{pagelink:"/add-booking",linktitle:"Add new Booking",title:"All Booking",allData:k})})})};export{Ne as default};
