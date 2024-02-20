import{u as ie,a as we,j as e,_ as ce,r,b as C,F as de,c as f,I as se,i as le,U as oe,d as re,e as ne,f as ye,C as w,G as B}from"./index.3f28faea.js";import{R as ke}from"./revenue-bar-chart.5d1cb917.js";import{S as I}from"./SelectMonth.a9cc592a.js";import{U as Fe}from"./user-6.e3c6bad3.js";import{l as Ne,w as Se}from"./index.f9b38acf.js";import{H as Ee}from"./HomeBredCurbs.013306eb.js";import{N as De}from"./not-found.46bdbc04.js";import"./index.esm.59c4e401.js";const Ae=()=>{const[p]=ie(),{width:u,breakpoints:g}=we();return e("div",{children:e(ce,{options:{chart:{toolbar:{show:!1}},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px",color:p?"#CBD5E1":"#475569"},value:{fontSize:"16px",color:p?"#CBD5E1":"#475569"},total:{show:!0,label:"Total",color:p?"#CBD5E1":"#475569",formatter:function(){return 249}}},track:{background:"#E2E8F0",strokeWidth:"97%"}}},labels:["A","B","C","D"],colors:["#4669FA","#FA916B","#50C793","#0CE7FA"]},series:[44,55,67,83],type:"radialBar",height:u>g.md?360:250})})},Ce=({allBooking:p})=>{const u=[{Header:"Sr no",accessor:"id",Cell:({row:a,flatRows:l})=>e("span",{children:l.indexOf(a)+1})},{Header:"Booking Number",accessor:"bookingnumber",Cell:a=>{var l,k,b,E;return e("span",{children:(l=a==null?void 0:a.cell)!=null&&l.value?((b=(k=a==null?void 0:a.cell)==null?void 0:k.value)==null?void 0:b.slice(0,15))+(((E=a==null?void 0:a.cell)==null?void 0:E.value.length)>15?"...":""):"Not Available"})}},{Header:"Unit No",accessor:a=>`${a.propertyid}`,Cell:a=>{var b;const[l,k]=r.exports.useState("");return r.exports.useEffect(()=>{(async()=>{var S,D;if((S=a==null?void 0:a.cell)!=null&&S.value){const m=await(await fetch(`http://dev-rare.srp.ai/property/${(D=a==null?void 0:a.cell)==null?void 0:D.value}`)).json();m&&k(m==null?void 0:m.unitnumber)}})()},[]),e("span",{children:(b=a==null?void 0:a.cell)!=null&&b.value?(l==null?void 0:l.slice(0,15))+((l==null?void 0:l.length)>15?"...":""):"Not Available"})}},{Header:"Owner Name",accessor:"ownerid",Cell:a=>{var b;const[l,k]=r.exports.useState("");return r.exports.useEffect(()=>{(async()=>{var S,D;if((S=a==null?void 0:a.cell)!=null&&S.value){const m=await(await fetch(`http://dev-rare.srp.ai/users/${(D=a==null?void 0:a.cell)==null?void 0:D.value}`)).json();m&&k((m==null?void 0:m.firstname)+" "+(m==null?void 0:m.lastname))}else k("Not Available")})()},[]),e("div",{children:e("span",{className:"inline-flex items-center",children:e("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:(b=a==null?void 0:a.cell)!=null&&b.value?(l==null?void 0:l.slice(0,15))+((l==null?void 0:l.length)>15?"...":""):"Not Available"})})})}},{Header:"Guest Name",accessor:"guestname",Cell:a=>{var l;return e("span",{children:(l=a==null?void 0:a.cell)==null?void 0:l.value})}}],g=r.exports.useMemo(()=>u,[]),X=r.exports.useMemo(()=>p),R=C.exports.useTable({columns:g,data:X,initialState:{pageSize:6}},C.exports.useGlobalFilter,C.exports.useSortBy,C.exports.usePagination,C.exports.useRowSelect),{getTableProps:t,getTableBodyProps:$,headerGroups:N,footerGroups:O,page:c,nextPage:L,previousPage:n,canNextPage:A,canPreviousPage:y,pageOptions:T,state:d,gotoPage:P,pageCount:H,setPageSize:G,setGlobalFilter:M,prepareRow:j}=R,{pageIndex:Y,pageSize:q}=d;return e(de,{children:f("div",{children:[e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:f("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...t,children:[e("thead",{className:" bg-slate-200 dark:bg-slate-700",children:N.map(a=>e("tr",{...a.getHeaderGroupProps(),children:a.headers.map(l=>f("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:" table-th ",children:[l.render("Header"),e("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...$,children:c.map(a=>(j(a),e("tr",{...a.getRowProps(),children:a.cells.map(l=>e("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")}))})))})]})})})}),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-center mt-6 items-center",children:f("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${y?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>n(),disabled:!y,children:e(se,{icon:"heroicons-outline:chevron-left"})})}),T.map((a,l)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${l===Y?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>P(l),children:a+1})},l)),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${A?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>L(),disabled:!A,children:e(se,{icon:"heroicons-outline:chevron-right"})})})]})})]})})},Xe=[{id:1,img:le},{id:2,img:oe},{id:3,img:re},{id:4,img:ne},{id:5,img:ye},{id:6,img:Fe},{id:7,img:le},{id:6,img:oe},{id:7,img:re},{id:8,img:ne}],Re=()=>e("div",{children:e("ul",{className:"list-item space-y-3 h-full overflow-x-auto",children:Xe.map((p,u)=>f("li",{className:"flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0",children:[e("div",{children:e("div",{className:"w-8 h-8 rounded-[100%]",children:e("img",{src:p.img,alt:"",className:"w-full h-full rounded-[100%] object-cover"})})}),e("div",{className:"text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]",children:e("div",{className:"text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap",children:"Finance KPI Mobile app launch preparion meeting."})}),e("div",{className:"flex-1 ltr:text-right rtl:text-left",children:e("div",{className:"text-sm font-light text-slate-400 dark:text-slate-400",children:"1 hours"})})]},u))})}),$e=[{title:"Nevada",amount:"$125k",cls:"bg-primary-500 ring-primary-500"},{title:"Colorado",amount:"$$325k",cls:"bg-success-500 ring-success-500"},{title:"Iowa",amount:"$67",cls:"bg-info-500 ring-info-500"},{title:"Arkansas",amount:"$354k",cls:"bg-warning-500 ring-warning-500"},{title:"Wyoming",amount:"$195k",cls:"bg-success-500 ring-success-500"},{title:"Other countries",amount:"$295k",cls:"bg-secondary-500 ring-secondary-500"}],Le=({filterMap:p})=>f("div",{className:"md:flex items-center",children:[f("div",{className:"flex-none",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-sm font-normal mb-[6px]",children:"Total earnings"}),p==="usa"&&e("div",{className:"text-lg font-medium mb-[6px] dark:text-white text-slate-900",children:"$12,65,64787.00"}),p==="global"&&e("div",{className:"text-lg font-medium mb-[6px] dark:text-white text-slate-900",children:"$12,65.00"}),f("div",{className:"text-xs font-light dark:text-slate-200",children:[e("span",{className:"text-primary-500",children:"+08%"})," From last month"]}),e("ul",{className:"bg-slate-50 dark:bg-slate-900 rounded p-4 min-w-[184px] space-y-5 mt-4",children:$e.map((u,g)=>f("li",{className:"flex justify-between text-xs text-slate-600 dark:text-slate-300",children:[f("span",{className:"flex space-x-2 rtl:space-x-reverse items-center",children:[e("span",{className:` inline-flex h-[6px] w-[6px] bg-primary-500 ring-opacity-25 rounded-full ring-4
                        ${u.cls}
                        `}),e("span",{children:u.title})]}),e("span",{children:u.amount})]},g))})]}),e("div",{className:"flex-1",children:e(Ne.CheckboxSVGMap,{map:Se,className:"h-[350px] w-full dash-codevmap"})})]}),Be=()=>{const[p]=ie();return e("div",{children:e(ce,{series:[67],options:{chart:{toolbar:{show:!1}},plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"22px",color:p?"#E2E8F0":"#475569"},value:{fontSize:"16px",color:p?"#E2E8F0":"#475569"},total:{show:!0,label:"Total",color:p?"#E2E8F0":"#475569",formatter:function(){return 249}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},colors:["#4669FA"]},type:"radialBar",height:"320"})})},Ge=()=>{const[p,u]=r.exports.useState("usa"),[g,X]=r.exports.useState([]),R=localStorage.getItem("isAuth"),t=JSON.parse(R),$=t==null?void 0:t.roleid,[N,O]=r.exports.useState();r.exports.useEffect(()=>{t!=null&&t.roleid&&(async()=>{const i=await(await fetch("http://dev-rare.srp.ai/roles/"+$)).json();return O(i)})()},[t==null?void 0:t.roleid,$]);const[c,L]=r.exports.useState([]),[n,A]=r.exports.useState([]),[y,T]=r.exports.useState([]),[d,P]=r.exports.useState([]);r.exports.useEffect(()=>{t!=null&&t.type?t!=null&&t.type&&(async()=>{const i=await(await fetch(`http://dev-rare.srp.ai/property/api/app/search/${t==null?void 0:t.email}`)).json();return L(i)})():(async()=>{const i=await(await fetch("http://dev-rare.srp.ai/property")).json();return L(i)})()},[t==null?void 0:t.type]),r.exports.useEffect(()=>{t!=null&&t.type?t!=null&&t.type&&(async()=>{const i=await(await fetch(`http://dev-rare.srp.ai/booking/api/search/mobile/${t==null?void 0:t.email}`)).json();return A(i)})():(async()=>{const i=await(await fetch("http://dev-rare.srp.ai/booking")).json();return A(i)})()},[t==null?void 0:t.type]),r.exports.useEffect(()=>{t!=null&&t.type||(async()=>{const i=await(await fetch("http://dev-rare.srp.ai/users/api/customer/withoutdate?sort=descending&type=customer&page=0&perPage=all")).json();return T(i==null?void 0:i.users)})()},[t==null?void 0:t.type]),r.exports.useEffect(()=>{t!=null&&t.type&&(async()=>{const i=await(await fetch(`http://dev-rare.srp.ai/tenantcontract/api/app/search/${t==null?void 0:t.email}`)).json();P(i)})()},[t==null?void 0:t.type]),r.exports.useEffect(()=>{t!=null&&t.type||(async()=>{const o=new Date;o.setDate(o.getDate());const i=o.toISOString().substring(0,10)+"T19:00:00.000Z",v=await(await fetch(`http://dev-rare.srp.ai/booking/api/checkin/?fromdate=${i}&toDate=${i}`)).json();return X(v==null?void 0:v.booking)})()},[t==null?void 0:t.type]);const[H,G]=r.exports.useState(0),[M,j]=r.exports.useState(0),[Y,q]=r.exports.useState(0),[a,l]=r.exports.useState(0),[k,b]=r.exports.useState(0);r.exports.useEffect(()=>{var s,o;if((c==null?void 0:c.length)&&(t==null?void 0:t.type)){const i=c.reduce((h,F)=>F.propertystatus==="Short Term"?h+1:h,0);q(i);const x=c.reduce((h,F)=>F.propertystatus==="Sale"?h+1:h,0);j(x);const v=c.reduce((h,F)=>F.propertystatus==="Rent"?h+1:h,0);G(v);let ae=0;for(let h=0;h<(c==null?void 0:c.length);h++){let F=parseFloat((s=c[h])!=null&&s.propertyvaluation?(o=c[h])==null?void 0:o.propertyvaluation:0);ae+=F}b(ae);const ve=c.reduce((h,F)=>F.tenant_id?h+1:h,0);l(ve)}},[c,t==null?void 0:t.type]);const E={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},S={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},D={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},z=[{name:E,title:"Total no of Properties",count:c!=null&&c.length?c==null?void 0:c.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:S,title:"Total no of Bookings",count:n!=null&&n.length?n==null?void 0:n.filter(s=>s.cancelled===!1).length:0,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:D,title:"Total no of Customers",count:y!=null&&y.length?y==null?void 0:y.length:0,bg:"bg-[#EAE5FF] dark:bg-slate-900	"}],m={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},V={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},W={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},fe=[{name:m,title:"Total no of Properties",count:c?c==null?void 0:c.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:V,title:"Property For Rent",count:H,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:W,title:"Property For Sale",count:M,bg:"bg-[#EAE5FF] dark:bg-slate-900	"},{name:m,title:"Property For Short Term",count:Y,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:V,title:"Vacant Property",count:a,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:W,title:"Total Property Revenue",count:parseFloat(k).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED",bg:"bg-[#EAE5FF] dark:bg-slate-900	"}],[_,pe]=r.exports.useState(0);r.exports.useEffect(()=>{var s,o;if((d==null?void 0:d.length)&&(t==null?void 0:t.type)){let i=0;for(let x=0;x<(d==null?void 0:d.length);x++){let v=parseFloat((s=d[x])!=null&&s.rentalamount?(o=d[x])==null?void 0:o.rentalamount:0);i+=v}pe(i)}},[d==null?void 0:d.length,t==null?void 0:t.type]);const J={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#00EBFF"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},he={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#FB8F65"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},me={series:[{data:[800,600,1e3,800,600,1e3,800,900]}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},offsetX:0,offsetY:0,zoom:{enabled:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#5743BE"],tooltip:{theme:"light"},grid:{show:!1,padding:{left:0,right:0}},yaxis:{show:!1},fill:{type:"solid",opacity:[.1]},legend:{show:!1},xaxis:{low:0,offsetX:0,offsetY:0,show:!1,labels:{low:0,offsetX:0,show:!1},axisBorder:{low:0,offsetX:0,show:!1}}}},K=d==null?void 0:d.filter(s=>{const o=(s==null?void 0:s.contractenddate)&&(s==null?void 0:s.contractenddate)!=="undefined"&&(s==null?void 0:s.contractenddate)!==void 0&&(s==null?void 0:s.contractenddate)!==null&&(s==null?void 0:s.contractenddate)!=="null"?new Date(s==null?void 0:s.contractenddate):null;return o<=new Date&&o&&o!=="undefined"&&o!==void 0&&o!==null&&o!=="null"&&o.toString()!=="Invalid Date"}).length,Z=new Date,Q=new Date;Q.setDate(Z.getDate()+90);const U=d==null?void 0:d.filter(s=>{const o=new Date(s==null?void 0:s.contractstartdate);return o>=Z&&o<=Q}).length,ue=[{name:J,title:"Total no of Tenancy Contracts",count:d?d==null?void 0:d.length:0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:he,title:"Expired Contracts",count:K||0,bg:"bg-[#FFEDE5] dark:bg-slate-900	"},{name:me,title:"Upcoming Contracts in 90 days",count:U||0,bg:"bg-[#EAE5FF] dark:bg-slate-900	"},{name:J,title:"Total Rental Revenue",count:_?parseFloat(_).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":0,bg:"bg-[#E5F9FF] dark:bg-slate-900	"}],[ee,xe]=r.exports.useState(0);r.exports.useEffect(()=>{var s,o;if((n==null?void 0:n.length)&&(t==null?void 0:t.type)){let i=0;for(let x=0;x<(n==null?void 0:n.length);x++){let v=parseFloat((s=n[x])==null?void 0:s.roomrentamount);!isNaN(v)&&((o=n[x])==null?void 0:o.cancelled)===!1&&(i+=v)}xe(i||0)}},[n==null?void 0:n.length,t==null?void 0:t.type]);const[ge,te]=r.exports.useState(0);r.exports.useEffect(()=>{if((t==null?void 0:t.type)&&(n==null?void 0:n.length)){let s=n==null?void 0:n.filter(o=>o.cancelled===!1).length;te(s)}else{let s=n==null?void 0:n.length;te(s)}},[t==null?void 0:t.type,n]);const be=[{name:E,title:"Total No of Check-In",count:ge,bg:"bg-[#E5F9FF] dark:bg-slate-900	"},{name:S,title:"Total Collection",count:ee?ee.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" AED":0,bg:"bg-[#FFEDE5] dark:bg-slate-900	"}];return f("div",{children:[e(Ee,{title:t!=null&&t.type?`Welcome, ${(t==null?void 0:t.firstname)+" "+(t==null?void 0:t.lastname)}\u{1F44B}`:"Dashboard"}),(t==null?void 0:t.type)||(N==null?void 0:N.rolename)==="hrmate role"||(N==null?void 0:N.viewhrmate)===!0?null:e("div",{className:"grid grid-cols-12 gap-5 mb-5",children:e("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:e(w,{bodyClass:"p-4",children:e("div",{className:"grid md:grid-cols-3 col-span-1 gap-4",children:e(B,{statistics:z})})})})}),t!=null&&t.type?f(de,{children:[e("div",{className:"grid grid-cols-12 gap-5 mb-5",children:e("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:e(w,{bodyClass:"p-4",children:e("div",{className:"grid md:grid-cols-3 col-span-1 gap-4",children:e(B,{statistics:fe})})})})}),e("div",{className:"grid grid-cols-12 gap-5 mb-5",children:e("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:e(w,{bodyClass:"p-4",children:e("div",{className:"grid md:grid-cols-2 col-span-1 gap-4",children:e(B,{statistics:ue})})})})}),e("div",{className:"grid grid-cols-12 gap-5 mb-5",children:e("div",{className:"2xl:col-span-12 lg:col-span-12 col-span-12",children:e(w,{bodyClass:"p-4",children:e("div",{className:"grid md:grid-cols-2 col-span-1 gap-4",children:e(B,{statistics:be})})})})})]}):f("div",{className:"grid grid-cols-12 gap-5",children:[e("div",{className:"lg:col-span-8 col-span-12",children:e(w,{children:e("div",{className:"legend-ring",children:e(ke,{})})})}),e("div",{className:"lg:col-span-4 col-span-12",children:e(w,{title:"Overview",headerslot:e(I,{}),children:e(Ae,{})})}),t!=null&&t.type?null:e("div",{className:"lg:col-span-8 col-span-12",children:e(w,{title:"Today's Check-in",noborder:!0,children:g!=null&&g.length?e(Ce,{allBooking:g}):e("div",{className:"flex justify-center items-center",children:e("img",{src:De,alt:"NotFound",className:"h-[564px] object-contain"})})})}),e("div",{className:"lg:col-span-4 col-span-12",children:e(w,{title:"Recent Activity",headerslot:e(I,{}),children:e(Re,{})})}),e("div",{className:"lg:col-span-8 col-span-12",children:e(w,{title:"Most Sales",headerslot:f("div",{className:"border border-slate-200 dark:border-slate-700 dark:bg-slate-900 rounded p-1 flex items-center",children:[e("span",{className:` flex - 1 text - sm font - normal px - 3 py - 1 transition - all duration - 150 rounded cursor - pointer
                ${p==="global"?"bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-300":"dark:text-slate-300"}
      `,onClick:()=>u("global"),children:"Global"}),e("span",{className:` flex - 1 text - sm font - normal px - 3 py - 1 rounded transition - all duration - 150 cursor - pointer
                  ${p==="usa"?"bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-300":"dark:text-slate-300"}
      `,onClick:()=>u("usa"),children:"USA"})]}),children:e(Le,{filterMap:p})})}),e("div",{className:"lg:col-span-4 col-span-12",children:f(w,{title:"Overview",headerslot:e(I,{}),children:[e(Be,{}),f("div",{className:"bg-slate-50 dark:bg-slate-900 rounded p-4 mt-8 flex justify-between flex-wrap",children:[f("div",{className:"space-y-1",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-xs font-normal",children:"Invested amount"}),e("div",{className:"text-sm font-medium text-slate-900 dark:text-white",children:"$8264.35"}),e("div",{className:"text-slate-500 dark:text-slate-300 text-xs font-normal",children:"+0.001.23 (0.2%)"})]}),f("div",{className:"space-y-1",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-xs font-normal",children:"Invested amount"}),e("div",{className:"text-sm font-medium text-slate-900 dark:text-white",children:"$8264.35"})]}),f("div",{className:"space-y-1",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-xs font-normal",children:"Invested amount"}),e("div",{className:"text-sm font-medium text-slate-900 dark:text-white",children:"$8264.35"})]})]})]})})]})]})};export{Ge as default};
