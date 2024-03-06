import{u as Ne,a as Se,j as e,_ as be,r,b as R,F as pe,I as oe,i as ie,C as re,c as ne,U as de,d as De,e as y,G as ce,f as me}from"./index.1dc4ee55.js";import{I as Ce,R as Ae}from"./image-block-2.4917eca9.js";import{S as _}from"./SelectMonth.d94c83d6.js";import{U as je}from"./user-6.e3c6bad3.js";import{l as Xe,w as Re}from"./index.29fb81f3.js";import"./index.esm.ea65deda.js";import{N as Le}from"./not-found.46bdbc04.js";var ue="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\partials\\widget\\chart\\radials.jsx";const $e=()=>{const[f]=Ne(),{width:h,breakpoints:g}=Se();return e("div",{children:e(be,{options:{chart:{toolbar:{show:!1}},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px",color:f?"#CBD5E1":"#475569"},value:{fontSize:"16px",color:f?"#CBD5E1":"#475569"},total:{show:!0,label:"Total",color:f?"#CBD5E1":"#475569",formatter:function(){return 249}}},track:{background:"#E2E8F0",strokeWidth:"97%"}}},labels:["A","B","C","D"],colors:["#4669FA","#FA916B","#50C793","#0CE7FA"]},series:[44,55,67,83],type:"radialBar",height:h>g.md?360:250},void 0,!1,{fileName:ue,lineNumber:48,columnNumber:7},void 0)},void 0,!1,{fileName:ue,lineNumber:47,columnNumber:5},void 0)};var d="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\partials\\Table\\company-table.jsx";const Pe=({allBooking:f})=>{const h=[{Header:"Sr no",accessor:"id",Cell:({row:l,flatRows:o})=>e("span",{children:o.indexOf(l)+1},void 0,!1,{fileName:d,lineNumber:53,columnNumber:11},void 0)},{Header:"Booking Number",accessor:"bookingnumber",Cell:l=>{var o,E,x,A;return e("span",{children:(o=l==null?void 0:l.cell)!=null&&o.value?((x=(E=l==null?void 0:l.cell)==null?void 0:E.value)==null?void 0:x.slice(0,15))+(((A=l==null?void 0:l.cell)==null?void 0:A.value.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:d,lineNumber:61,columnNumber:16},void 0)}},{Header:"Unit No",accessor:l=>`${l.propertyid}`,Cell:l=>{var x;const[o,E]=r.exports.useState("");return r.exports.useEffect(()=>{(async()=>{var C,j;if((C=l==null?void 0:l.cell)!=null&&C.value){const b=await(await fetch(`http://dev-rare.srp.ai/property/${(j=l==null?void 0:l.cell)==null?void 0:j.value}`)).json();b&&E(b==null?void 0:b.unitnumber)}})()},[]),e("span",{children:(x=l==null?void 0:l.cell)!=null&&x.value?(o==null?void 0:o.slice(0,15))+((o==null?void 0:o.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:d,lineNumber:81,columnNumber:16},void 0)}},{Header:"Owner Name",accessor:"ownerid",Cell:l=>{var x;const[o,E]=r.exports.useState("");return r.exports.useEffect(()=>{(async()=>{var C,j;if((C=l==null?void 0:l.cell)!=null&&C.value){const b=await(await fetch(`http://dev-rare.srp.ai/users/${(j=l==null?void 0:l.cell)==null?void 0:j.value}`)).json();b&&E((b==null?void 0:b.firstname)+" "+(b==null?void 0:b.lastname))}else E("Not Available")})()},[]),e("div",{children:e("span",{className:"inline-flex items-center",children:e("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(x=l==null?void 0:l.cell)!=null&&x.value?(o==null?void 0:o.slice(0,15))+((o==null?void 0:o.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:d,lineNumber:106,columnNumber:15},void 0)},void 0,!1,{fileName:d,lineNumber:105,columnNumber:13},void 0)},void 0,!1,{fileName:d,lineNumber:104,columnNumber:11},void 0)}},{Header:"Guest Name",accessor:"guestname",Cell:l=>{var o;return e("span",{children:(o=l==null?void 0:l.cell)==null?void 0:o.value},void 0,!1,{fileName:d,lineNumber:118,columnNumber:16},void 0)}}],g=r.exports.useMemo(()=>h,[]),L=r.exports.useMemo(()=>f),$=R.exports.useTable({columns:g,data:L,initialState:{pageSize:6}},R.exports.useGlobalFilter,R.exports.useSortBy,R.exports.usePagination,R.exports.useRowSelect),{getTableProps:a,getTableBodyProps:P,headerGroups:D,footerGroups:V,page:m,nextPage:T,previousPage:n,canNextPage:X,canPreviousPage:k,pageOptions:B,state:u,gotoPage:O,pageCount:G,setPageSize:M,setGlobalFilter:H,prepareRow:Y}=$,{pageIndex:z,pageSize:q}=u;return e(pe,{children:e("div",{children:[e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:e("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...a,children:[e("thead",{className:" bg-slate-200 dark:bg-slate-700",children:D.map(l=>e("tr",{...l.getHeaderGroupProps(),children:l.headers.map(o=>e("th",{...o.getHeaderProps(o.getSortByToggleProps()),scope:"col",className:" table-th ",children:[o.render("Header"),e("span",{children:o.isSorted?o.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""},void 0,!1,{fileName:d,lineNumber:183,columnNumber:27},void 0)]},void 0,!0,{fileName:d,lineNumber:175,columnNumber:25},void 0))},void 0,!1,{fileName:d,lineNumber:173,columnNumber:21},void 0))},void 0,!1,{fileName:d,lineNumber:171,columnNumber:17},void 0),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...P,children:m.map(l=>(Y(l),e("tr",{...l.getRowProps(),children:l.cells.map(o=>e("td",{...o.getCellProps(),className:"table-td",children:o.render("Cell")},void 0,!1,{fileName:d,lineNumber:205,columnNumber:29},void 0))},void 0,!1,{fileName:d,lineNumber:202,columnNumber:23},void 0)))},void 0,!1,{fileName:d,lineNumber:195,columnNumber:17},void 0)]},void 0,!0,{fileName:d,lineNumber:167,columnNumber:15},void 0)},void 0,!1,{fileName:d,lineNumber:166,columnNumber:13},void 0)},void 0,!1,{fileName:d,lineNumber:165,columnNumber:11},void 0)},void 0,!1,{fileName:d,lineNumber:164,columnNumber:9},void 0),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-center mt-6 items-center",children:e("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${k?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>n(),disabled:!k,children:e(oe,{icon:"heroicons-outline:chevron-left"},void 0,!1,{fileName:d,lineNumber:227,columnNumber:17},void 0)},void 0,!1,{fileName:d,lineNumber:221,columnNumber:15},void 0)},void 0,!1,{fileName:d,lineNumber:220,columnNumber:13},void 0),B.map((l,o)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${o===z?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>O(o),children:l+1},void 0,!1,{fileName:d,lineNumber:232,columnNumber:17},void 0)},o,!1,{fileName:d,lineNumber:231,columnNumber:15},void 0)),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${X?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>T(),disabled:!X,children:e(oe,{icon:"heroicons-outline:chevron-right"},void 0,!1,{fileName:d,lineNumber:252,columnNumber:17},void 0)},void 0,!1,{fileName:d,lineNumber:246,columnNumber:15},void 0)},void 0,!1,{fileName:d,lineNumber:245,columnNumber:13},void 0)]},void 0,!0,{fileName:d,lineNumber:219,columnNumber:11},void 0)},void 0,!1,{fileName:d,lineNumber:218,columnNumber:9},void 0)]},void 0,!0,{fileName:d,lineNumber:163,columnNumber:7},void 0)},void 0,!1)};var F="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\partials\\widget\\recent-activity.jsx";const Te=[{id:1,img:ie},{id:2,img:re},{id:3,img:ne},{id:4,img:de},{id:5,img:De},{id:6,img:je},{id:7,img:ie},{id:6,img:re},{id:7,img:ne},{id:8,img:de}],Be=()=>e("div",{children:e("ul",{className:"list-item space-y-3 h-full overflow-x-auto",children:Te.map((f,h)=>e("li",{className:"flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0",children:[e("div",{children:e("div",{className:"w-8 h-8 rounded-[100%]",children:e("img",{src:f.img,alt:"",className:"w-full h-full rounded-[100%] object-cover"},void 0,!1,{fileName:F,lineNumber:63,columnNumber:17},void 0)},void 0,!1,{fileName:F,lineNumber:62,columnNumber:15},void 0)},void 0,!1,{fileName:F,lineNumber:61,columnNumber:13},void 0),e("div",{className:"text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]",children:e("div",{className:"text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap",children:"Finance KPI Mobile app launch preparion meeting."},void 0,!1,{fileName:F,lineNumber:71,columnNumber:15},void 0)},void 0,!1,{fileName:F,lineNumber:70,columnNumber:13},void 0),e("div",{className:"flex-1 ltr:text-right rtl:text-left",children:e("div",{className:"text-sm font-light text-slate-400 dark:text-slate-400",children:"1 hours"},void 0,!1,{fileName:F,lineNumber:76,columnNumber:15},void 0)},void 0,!1,{fileName:F,lineNumber:75,columnNumber:13},void 0)]},h,!0,{fileName:F,lineNumber:57,columnNumber:11},void 0))},void 0,!1,{fileName:F,lineNumber:55,columnNumber:7},void 0)},void 0,!1,{fileName:F,lineNumber:54,columnNumber:5},void 0);var p="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\partials\\widget\\most-sales.jsx";const Oe=[{title:"Nevada",amount:"$125k",cls:"bg-primary-500 ring-primary-500"},{title:"Colorado",amount:"$$325k",cls:"bg-success-500 ring-success-500"},{title:"Iowa",amount:"$67",cls:"bg-info-500 ring-info-500"},{title:"Arkansas",amount:"$354k",cls:"bg-warning-500 ring-warning-500"},{title:"Wyoming",amount:"$195k",cls:"bg-success-500 ring-success-500"},{title:"Other countries",amount:"$295k",cls:"bg-secondary-500 ring-secondary-500"}],Ye=({filterMap:f})=>e("div",{className:"md:flex items-center",children:[e("div",{className:"flex-none",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-sm font-normal mb-[6px]",children:"Total earnings"},void 0,!1,{fileName:p,lineNumber:42,columnNumber:9},void 0),f==="usa"&&e("div",{className:"text-lg font-medium mb-[6px] dark:text-white text-slate-900",children:"$12,65,64787.00"},void 0,!1,{fileName:p,lineNumber:46,columnNumber:11},void 0),f==="global"&&e("div",{className:"text-lg font-medium mb-[6px] dark:text-white text-slate-900",children:"$12,65.00"},void 0,!1,{fileName:p,lineNumber:51,columnNumber:11},void 0),e("div",{className:"text-xs font-light dark:text-slate-200",children:[e("span",{className:"text-primary-500",children:"+08%"},void 0,!1,{fileName:p,lineNumber:56,columnNumber:11},void 0)," From last month"]},void 0,!0,{fileName:p,lineNumber:55,columnNumber:9},void 0),e("ul",{className:"bg-slate-50 dark:bg-slate-900 rounded p-4 min-w-[184px] space-y-5 mt-4",children:Oe.map((h,g)=>e("li",{className:"flex justify-between text-xs text-slate-600 dark:text-slate-300",children:[e("span",{className:"flex space-x-2 rtl:space-x-reverse items-center",children:[e("span",{className:` inline-flex h-[6px] w-[6px] bg-primary-500 ring-opacity-25 rounded-full ring-4
                        ${h.cls}
                        `},void 0,!1,{fileName:p,lineNumber:65,columnNumber:17},void 0),e("span",{children:h.title},void 0,!1,{fileName:p,lineNumber:70,columnNumber:17},void 0)]},void 0,!0,{fileName:p,lineNumber:64,columnNumber:15},void 0),e("span",{children:h.amount},void 0,!1,{fileName:p,lineNumber:72,columnNumber:15},void 0)]},g,!0,{fileName:p,lineNumber:60,columnNumber:13},void 0))},void 0,!1,{fileName:p,lineNumber:58,columnNumber:9},void 0)]},void 0,!0,{fileName:p,lineNumber:41,columnNumber:7},void 0),e("div",{className:"flex-1",children:e(Xe.CheckboxSVGMap,{map:Re,className:"h-[350px] w-full dash-codevmap"},void 0,!1,{fileName:p,lineNumber:78,columnNumber:9},void 0)},void 0,!1,{fileName:p,lineNumber:77,columnNumber:7},void 0)]},void 0,!0,{fileName:p,lineNumber:40,columnNumber:5},void 0);var fe="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\components\\partials\\widget\\chart\\radar-chart.jsx";const ze=()=>{const[f]=Ne();return e("div",{children:e(be,{series:[67],options:{chart:{toolbar:{show:!1}},plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"22px",color:f?"#E2E8F0":"#475569"},value:{fontSize:"16px",color:f?"#E2E8F0":"#475569"},total:{show:!0,label:"Total",color:f?"#E2E8F0":"#475569",formatter:function(){return 249}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},colors:["#4669FA"]},type:"radialBar",height:"320"},void 0,!1,{fileName:fe,lineNumber:57,columnNumber:7},void 0)},void 0,!1,{fileName:fe,lineNumber:56,columnNumber:5},void 0)};var t="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\dashboard\\index.jsx";const We=()=>{const[f,h]=r.exports.useState("usa"),[g,L]=r.exports.useState([]),$=localStorage.getItem("isAuth"),a=JSON.parse($),P=a==null?void 0:a.roleid,[D,V]=r.exports.useState();r.exports.useEffect(()=>{a!=null&&a.roleid&&(async()=>{const c=await(await fetch("http://dev-rare.srp.ai/roles/"+P)).json();return V(c)})()},[a==null?void 0:a.roleid,P]);const[m,T]=r.exports.useState([]),[n,X]=r.exports.useState([]),[k,B]=r.exports.useState([]),[u,O]=r.exports.useState([]);r.exports.useEffect(()=>{a!=null&&a.type?a!=null&&a.type&&(async()=>{const c=await(await fetch(`http://dev-rare.srp.ai/property/api/app/search/${a==null?void 0:a.email}`)).json();return T(c)})():(async()=>{const c=await(await fetch("http://dev-rare.srp.ai/property")).json();return T(c)})()},[a==null?void 0:a.type]),r.exports.useEffect(()=>{a!=null&&a.type?a!=null&&a.type&&(async()=>{const c=await(await fetch(`http://dev-rare.srp.ai/booking/api/search/mobile/${a==null?void 0:a.email}`)).json();return X(c)})():(async()=>{const c=await(await fetch("http://dev-rare.srp.ai/booking")).json();return X(c)})()},[a==null?void 0:a.type]),r.exports.useEffect(()=>{a!=null&&a.type||(async()=>{const c=await(await fetch("http://dev-rare.srp.ai/users/api/customer/withoutdate?sort=descending&type=customer&page=0&perPage=all")).json();return B(c==null?void 0:c.users)})()},[a==null?void 0:a.type]),r.exports.useEffect(()=>{a!=null&&a.type&&(async()=>{const c=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/api/app/search/${a==null?void 0:a.email}`)).json();O(c)})()},[a==null?void 0:a.type]),r.exports.useEffect(()=>{a!=null&&a.type||(async()=>{const i=new Date;i.setDate(i.getDate());const c=i.toISOString().substring(0,10)+"T19:00:00.000Z",w=await(await fetch(`http://dev-rare.srp.ai/booking/api/checkin/?fromdate=${c}&toDate=${c}`)).json();return L(w==null?void 0:w.booking)})()},[a==null?void 0:a.type]);const[G,M]=r.exports.useState(0),[H,Y]=r.exports.useState(0),[z,q]=r.exports.useState(0),[l,o]=r.exports.useState(0),[E,x]=r.exports.useState(0);r.exports.useEffect(()=>{var s,i;if((m==null?void 0:m.length)&&(a==null?void 0:a.type)){const c=m.reduce((N,S)=>S.propertystatus==="Short Term"?N+1:N,0);q(c);const v=m.reduce((N,S)=>S.propertystatus==="Sale"?N+1:N,0);Y(v);const w=m.reduce((N,S)=>S.propertystatus==="Rent"?N+1:N,0);M(w);let se=0;for(let N=0;N<(m==null?void 0:m.length);N++){let S=parseFloat((s=m[N])!=null&&s.propertyvaluation?(i=m[N])==null?void 0:i.propertyvaluation:0);se+=S}x(se);const Ee=m.reduce((N,S)=>S.tenant_id?N+1:N,0);o(Ee)}},[m,a==null?void 0:a.type]);const A={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},C={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},j={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},I=[{name:A,title:"Total no of Properties",count:m!=null&&m.length?m==null?void 0:m.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:C,title:"Total no of Bookings",count:n!=null&&n.length?n==null?void 0:n.filter(s=>s.cancelled===!1).length:0,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:j,title:"Total no of Customers",count:k!=null&&k.length?k==null?void 0:k.length:0,bg:"bg-[#EAE5FF] dark:bg-slate-900	"}],b={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},W={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},J={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},he=[{name:b,title:"Total no of Properties",icon:"heroicons:building-office-2",count:m?m==null?void 0:m.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:W,title:"Property For Rent",icon:"heroicons:home",count:G,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:J,title:"Property For Sale",icon:"heroicons:arrow-trending-down",count:H,bg:"bg-[#EAE5FF] dark:bg-slate-900	"},{name:b,title:"Property For Short Term",count:z,bg:"bg-[#E5F9FF] dark:bg-slate-900	",icon:"heroicons:key"},{name:W,title:"Vacant Property",icon:"heroicons:chart-pie",count:l,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:J,title:"Total Property Revenue",count:parseFloat(E).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED",bg:"bg-[#EAE5FF] dark:bg-slate-900	",icon:"heroicons:home-modern"}],[K,ve]=r.exports.useState(0);r.exports.useEffect(()=>{var s,i;if((u==null?void 0:u.length)&&(a==null?void 0:a.type)){let c=0;for(let v=0;v<(u==null?void 0:u.length);v++){let w=parseFloat((s=u[v])!=null&&s.rentalamount?(i=u[v])==null?void 0:i.rentalamount:0);c+=w}ve(c)}},[u==null?void 0:u.length,a==null?void 0:a.type]);const Z={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},ge={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},xe={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},Q=u==null?void 0:u.filter(s=>{const i=(s==null?void 0:s.contractenddate)&&(s==null?void 0:s.contractenddate)!=="undefined"&&(s==null?void 0:s.contractenddate)!==void 0&&(s==null?void 0:s.contractenddate)!==null&&(s==null?void 0:s.contractenddate)!=="null"?new Date(s==null?void 0:s.contractenddate):null;return i<=new Date&&i&&i!=="undefined"&&i!==void 0&&i!==null&&i!=="null"&&i.toString()!=="Invalid Date"}).length,U=new Date,ee=new Date;ee.setDate(U.getDate()+90);const ae=u==null?void 0:u.filter(s=>{const i=new Date(s==null?void 0:s.contractstartdate);return i>=U&&i<=ee}).length,we=[{name:Z,title:"Total no of Tenancy Contracts",count:u?u==null?void 0:u.length:0,icon:"heroicons:document-minus",bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:ge,title:"Expired Contracts",count:Q||0,bg:"bg-[#FFEDE5] dark:bg-slate-900	",icon:"heroicons:document-magnifying-glass"},{name:xe,title:"Upcoming Contracts in 90 days",count:ae||0,bg:"bg-[#EAE5FF] dark:bg-slate-900	",icon:"heroicons:document-magnifying-glass"},{name:Z,title:"Total Rental Revenue",count:K?parseFloat(K).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":0,bg:"bg-[#E5F9FF] dark:bg-slate-900	",icon:"heroicons:banknotes"}],[te,ye]=r.exports.useState(0);r.exports.useEffect(()=>{var s,i;if((n==null?void 0:n.length)&&(a==null?void 0:a.type)){let c=0;for(let v=0;v<(n==null?void 0:n.length);v++){let w=parseFloat((s=n[v])==null?void 0:s.roomrentamount);!isNaN(w)&&((i=n[v])==null?void 0:i.cancelled)===!1&&(c+=w)}ye(c||0)}},[n==null?void 0:n.length,a==null?void 0:a.type]);const[Fe,le]=r.exports.useState(0);r.exports.useEffect(()=>{if((a==null?void 0:a.type)&&(n==null?void 0:n.length)){let s=n==null?void 0:n.filter(i=>i.cancelled===!1).length;le(s)}else{let s=n==null?void 0:n.length;le(s)}},[a==null?void 0:a.type,n]);const ke=[{name:A,title:"Total No of Check-In",count:Fe,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:C,title:"Total Collection",count:te?te.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":0,bg:"bg-[#FFEDE5] dark:bg-slate-900	"}];return e("div",{children:[(a==null?void 0:a.type)||(D==null?void 0:D.rolename)==="hrmate role"||(D==null?void 0:D.viewhrmate)===!0?null:e("div",{className:"grid grid-cols-12 gap-5 mb-5",children:[e("div",{className:"2xl:col-span-3 lg:col-span-4 col-span-12"},void 0,!1,{fileName:t,lineNumber:1004,columnNumber:13},void 0),e("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:e(y,{bodyClass:"p-4",children:e("div",{className:"grid md:grid-cols-3 col-span-1 gap-4",children:e(ce,{statistics:I},void 0,!1,{fileName:t,lineNumber:1010,columnNumber:19},void 0)},void 0,!1,{fileName:t,lineNumber:1009,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:1008,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:1007,columnNumber:13},void 0)]},void 0,!0,{fileName:t,lineNumber:1003,columnNumber:11},void 0),a!=null&&a.type?e(pe,{children:[e("div",{className:"grid grid-cols-12 gap-5 mb-5",children:e("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:e(y,{children:e("div",{className:"flex grid-cols-12 gap-5",children:e("div",{className:"xl:col-span-8 col-span-12",children:[e(Ce,{message:a!=null&&a.type?`Welcome, ${(a==null?void 0:a.firstname)+" "+(a==null?void 0:a.lastname)}\u{1F44B}`:"Dashboard"},void 0,!1,{fileName:t,lineNumber:1043,columnNumber:13},void 0),e("div",{className:"flex md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3",children:e(me,{statistics:he},void 0,!1,{fileName:t,lineNumber:1046,columnNumber:9},void 0)},void 0,!1,{fileName:t,lineNumber:1045,columnNumber:7},void 0)]},void 0,!0,{fileName:t,lineNumber:1042,columnNumber:5},void 0)},void 0,!1,{fileName:t,lineNumber:1041,columnNumber:3},void 0)},void 0,!1,{fileName:t,lineNumber:1039,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:1038,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:1036,columnNumber:13},void 0),e("div",{className:"grid grid-cols-12 gap-5 mb-5",children:e("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:e("div",{className:"gap-2",children:e(y,{bodyClass:"p-4",children:e("div",{className:"grid md:grid-cols-2 col-span-1 gap-4",children:e(me,{statistics:we},void 0,!1,{fileName:t,lineNumber:1063,columnNumber:21},void 0)},void 0,!1,{fileName:t,lineNumber:1062,columnNumber:19},void 0)},void 0,!1,{fileName:t,lineNumber:1061,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:1060,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:1059,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:1058,columnNumber:13},void 0),e("div",{className:"grid grid-cols-12 gap-5 mb-5",children:e("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:e(y,{bodyClass:" p-4",children:e("div",{className:"grid md:grid-cols-2 col-span-1 gap-4",children:e(ce,{statistics:ke},void 0,!1,{fileName:t,lineNumber:1080,columnNumber:21},void 0)},void 0,!1,{fileName:t,lineNumber:1079,columnNumber:19},void 0)},void 0,!1,{fileName:t,lineNumber:1078,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:1077,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:1076,columnNumber:13},void 0)]},void 0,!0):e("div",{className:"grid grid-cols-12 gap-5",children:[e("div",{className:"lg:col-span-8 col-span-12",children:e(y,{children:e("div",{className:"legend-ring",children:e(Ae,{},void 0,!1,{fileName:t,lineNumber:1090,columnNumber:19},void 0)},void 0,!1,{fileName:t,lineNumber:1089,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:1088,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:1087,columnNumber:13},void 0),e("div",{className:"lg:col-span-4 col-span-12",children:e(y,{title:"Overview",headerslot:e(_,{},void 0,!1,{fileName:t,lineNumber:1095,columnNumber:50},void 0),children:e($e,{},void 0,!1,{fileName:t,lineNumber:1096,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:1095,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:1094,columnNumber:13},void 0),a!=null&&a.type?null:e("div",{className:"lg:col-span-8 col-span-12",children:e(y,{title:"Today's Check-in",noborder:!0,children:g!=null&&g.length?e(Pe,{allBooking:g},void 0,!1,{fileName:t,lineNumber:1105,columnNumber:25},void 0):e("div",{className:"flex justify-center items-center",children:e("img",{src:Le,alt:"NotFound",className:"h-[564px] object-contain"},void 0,!1,{fileName:t,lineNumber:1107,columnNumber:27},void 0)},void 0,!1,{fileName:t,lineNumber:1106,columnNumber:25},void 0)},void 0,!1,{fileName:t,lineNumber:1102,columnNumber:19},void 0)},void 0,!1,{fileName:t,lineNumber:1101,columnNumber:17},void 0),e("div",{className:"lg:col-span-4 col-span-12",children:e(y,{title:"Recent Activity",headerslot:e(_,{},void 0,!1,{fileName:t,lineNumber:1114,columnNumber:57},void 0),children:e(Be,{},void 0,!1,{fileName:t,lineNumber:1115,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:1114,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:1113,columnNumber:13},void 0),e("div",{className:"lg:col-span-8 col-span-12",children:e(y,{title:"Most Sales",headerslot:e("div",{className:"border border-slate-200 dark:border-slate-700 dark:bg-slate-900 rounded p-1 flex items-center",children:[e("span",{className:` flex - 1 text - sm font - normal px - 3 py - 1 transition - all duration - 150 rounded cursor - pointer
                ${f==="global"?"bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-300":"dark:text-slate-300"}
      `,onClick:()=>h("global"),children:"Global"},void 0,!1,{fileName:t,lineNumber:1123,columnNumber:21},void 0),e("span",{className:` flex - 1 text - sm font - normal px - 3 py - 1 rounded transition - all duration - 150 cursor - pointer
                  ${f==="usa"?"bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-300":"dark:text-slate-300"}
      `,onClick:()=>h("usa"),children:"USA"},void 0,!1,{fileName:t,lineNumber:1134,columnNumber:21},void 0)]},void 0,!0,{fileName:t,lineNumber:1122,columnNumber:19},void 0),children:e(Ye,{filterMap:f},void 0,!1,{fileName:t,lineNumber:1148,columnNumber:17},void 0)},void 0,!1,{fileName:t,lineNumber:1119,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:1118,columnNumber:13},void 0),e("div",{className:"lg:col-span-4 col-span-12",children:e(y,{title:"Overview",headerslot:e(_,{},void 0,!1,{fileName:t,lineNumber:1152,columnNumber:50},void 0),children:[e(ze,{},void 0,!1,{fileName:t,lineNumber:1153,columnNumber:17},void 0),e("div",{className:"bg-slate-50 dark:bg-slate-900 rounded p-4 mt-8 flex justify-between flex-wrap",children:[e("div",{className:"space-y-1",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-xs font-normal",children:"Invested amount"},void 0,!1,{fileName:t,lineNumber:1156,columnNumber:21},void 0),e("div",{className:"text-sm font-medium text-slate-900 dark:text-white",children:"$8264.35"},void 0,!1,{fileName:t,lineNumber:1159,columnNumber:21},void 0),e("div",{className:"text-slate-500 dark:text-slate-300 text-xs font-normal",children:"+0.001.23 (0.2%)"},void 0,!1,{fileName:t,lineNumber:1162,columnNumber:21},void 0)]},void 0,!0,{fileName:t,lineNumber:1155,columnNumber:19},void 0),e("div",{className:"space-y-1",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-xs font-normal",children:"Invested amount"},void 0,!1,{fileName:t,lineNumber:1168,columnNumber:21},void 0),e("div",{className:"text-sm font-medium text-slate-900 dark:text-white",children:"$8264.35"},void 0,!1,{fileName:t,lineNumber:1171,columnNumber:21},void 0)]},void 0,!0,{fileName:t,lineNumber:1167,columnNumber:19},void 0),e("div",{className:"space-y-1",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-xs font-normal",children:"Invested amount"},void 0,!1,{fileName:t,lineNumber:1177,columnNumber:21},void 0),e("div",{className:"text-sm font-medium text-slate-900 dark:text-white",children:"$8264.35"},void 0,!1,{fileName:t,lineNumber:1180,columnNumber:21},void 0)]},void 0,!0,{fileName:t,lineNumber:1176,columnNumber:19},void 0)]},void 0,!0,{fileName:t,lineNumber:1154,columnNumber:17},void 0)]},void 0,!0,{fileName:t,lineNumber:1152,columnNumber:15},void 0)},void 0,!1,{fileName:t,lineNumber:1151,columnNumber:13},void 0)]},void 0,!0,{fileName:t,lineNumber:1086,columnNumber:11},void 0)]},void 0,!0,{fileName:t,lineNumber:999,columnNumber:5},void 0)};export{We as default};
