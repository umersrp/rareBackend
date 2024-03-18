import{R as k,j as a,F as D,r as i,b as C,e as me,ap as H,I as ue}from"./index.7a61c5a8.js";import"./index.esm.3db9df7c.js";var s="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\owner-pages\\booking\\TranscationMonthly.jsx";const K=k.forwardRef(({indeterminate:S,...T},o)=>{const g=k.useRef(),R=o||g;return k.useEffect(()=>{R.current.indeterminate=S},[R,S]),a(D,{children:a("input",{type:"checkbox",ref:R,...T,className:"table-checkbox"},void 0,!1,{fileName:s,lineNumber:27,columnNumber:17},void 0)},void 0,!1)}),F={option:(S,T)=>({...S,fontSize:"14px"})},pe=({title:S,allData:T})=>{const[o,g]=i.exports.useState([]),R=localStorage.getItem("isAuth"),c=JSON.parse(R),[de,J]=i.exports.useState(),[Ne,W]=i.exports.useState(),[fe,Q]=i.exports.useState();i.exports.useState({startDate:"",endDate:""}),i.exports.useEffect(()=>{(async()=>{try{const t=`http://dev-rare.srp.ai/property/api/advancesearch?customerid=${c==null?void 0:c._id}&sort=descending&type=customer&page=0&perPage=all`,l=`http://dev-rare.srp.ai/property/api/advancesearch?owner_representative_id=${c==null?void 0:c._id}&sort=descending&type=customer&page=0&perPage=all`,n=await fetch(t);if(!n.ok&&n.status!==400)throw new Error(`API 1 failed with status: ${n.status}`);const m=n.status===400?[]:await n.json(),d=await fetch(l);if(!d.ok&&d.status!==400)throw new Error(`API 2 failed with status: ${d.status}`);const y=d.status===400?[]:await d.json(),M=[...m,...y].map(b=>b._id).map(b=>fetch(`http://dev-rare.srp.ai/booking/ownerrepresentative/pages?propertyid=${b}&page=0&perPage=all`).then(h=>h.json())),p=(await Promise.all(M)).reduce((b,h)=>b.concat(h),[]);g(p)}catch(t){console.error("Error fetching data:",t),setLoadingData(!1)}})()},[]);const[v,X]=i.exports.useState([]);i.exports.useEffect(()=>{o!=null&&o.length&&(async()=>{let t=[];for(let l of o)if(l!=null&&l.propertyid)try{const m=await(await fetch(`http://dev-rare.srp.ai/property/${l.propertyid}`)).json();t.push(m)}catch(n){console.error(n)}X(t)})()},[o,o==null?void 0:o.length]);const[E,Z]=i.exports.useState([]),[B,j]=i.exports.useState(!1);i.exports.useEffect(()=>{if(j(!0),v!=null&&v.length){const e=[...new Map(v.map(l=>[l._id,l])).values()],t=e==null?void 0:e.map(l=>({label:l.unitnumber+" | "+l.communityname+" | "+l.projectname,value:l._id}));j(!1),Z(t)}},[v==null?void 0:v.length]);const[u,I]=i.exports.useState();i.exports.useEffect(()=>{(async()=>{const l=await(await fetch(`http://dev-rare.srp.ai/booking/pagination/pages?ownerid=${c==null?void 0:c._id}&page=0&perPage=all`)).json();return g(l==null?void 0:l.booking)})()},[]);const L=[{value:"2023",label:"2023"},{value:"2022",label:"2022"},{value:"2021",label:"2021"},{value:"2020",label:"2020"},{value:"2019",label:"2019"},{value:"2018",label:"2018"},{value:"2017",label:"2017"},{value:"2016",label:"2016"},{value:"2015",label:"2015"},{value:"2014",label:"2014"}],[f,_]=i.exports.useState({yearid:"2023",yearname:"2023"}),[$,U]=i.exports.useState(!1),w=async()=>{const t=await(await fetch(`http://dev-rare.srp.ai/booking/api/yearly?${c!=null&&c._id?"ownerid="+(c==null?void 0:c._id)+"&":""}${u!=null&&u.propertyid?"propertyid="+(u==null?void 0:u.propertyid)+"&":""}${"year="+(f==null?void 0:f.yearid)}`)).json();U(!0);const l=[];t.booking.forEach(n=>{(c==null?void 0:c._id)===n.ownerid&&l.push(n),g(l)})},ee=async()=>{if($===!0){const t=await(await fetch(`http://dev-rare.srp.ai/booking/pagination/pages?ownerid=${c==null?void 0:c._id}&page=0&perPage=all`)).json();return U(!1),I(),_({yearid:"2023",yearname:"2023"}),g(t==null?void 0:t.booking)}};i.exports.useEffect(()=>{var t;let e=0;for(let l=0;l<(o==null?void 0:o.length);l++){let n=parseInt((t=o[l])==null?void 0:t.nonight);e+=n}J(e)},[o==null?void 0:o.length]),i.exports.useEffect(()=>{var t;let e=0;for(let l=0;l<(o==null?void 0:o.length);l++){let n=parseInt((t=o[l])==null?void 0:t.tourismfee);e+=n}W(e)},[o==null?void 0:o.length]),i.exports.useEffect(()=>{var t,l;let e=0;for(let n=0;n<(o==null?void 0:o.length);n++){let m=parseInt((t=o[n])==null?void 0:t.nonight)*parseInt((l=o[n])==null?void 0:l.tourismfee);e+=m}Q(e)},[o==null?void 0:o.length]);const[N,le]=i.exports.useState([]),[z,te]=i.exports.useState(!0);i.exports.useEffect(()=>{var l;const e=new Date().getFullYear(),t=[];if(o!=null&&o.length)for(let n=0;n<12;n++){const m=n+1,d=new Date(e,n,1).toLocaleString("default",{month:"long"}),y=new Date(e,m,0).getDate();let P=new Set,A=0;for(let p=0;p<o.length;p++){const b=new Date(o[p].checkindate),h=new Date(o[p].checkoutdate);if((b.getFullYear()!==e||b.getMonth()!==n)&&(h.getFullYear()!==e||h.getMonth()!==n))continue;const x=new Date(b);for(;x<h;)x.getMonth()===n&&x.getFullYear()===e&&P.add(x.getDate()),x.setDate(x.getDate()+1);A=(l=o[p])==null?void 0:l.tourismfee}const M=P.size,q={name:d,days:y,totalDays:M,tourismFee:A,totalRoomRent:M*A};t.push(q)}le(t),z&&te(!1)},[o,z]);const[r,G]=i.exports.useState();i.exports.useEffect(()=>{N&&G(N)},[N]),i.exports.useEffect(()=>{if(N){const e={};for(const t of N)e[t.name]?(e[t.name].totalDays+=t.totalDays,e[t.name].totalroomrent+=t.totalroomrent):e[t.name]={...t};Object.values(e)}},[N.length]),i.exports.useEffect(()=>{if(N){const e=Object.values(N.reduce((t,l)=>(t[l.name]?(t[l.name].totalDays+=l.totalDays,t[l.name].totalroomrent+=l.totalroomrent):t[l.name]={...l},t),{}));G(e)}},[N.length]),i.exports.useEffect(()=>{N.length&&[...new Map(N.map(e=>[e.name,e])).values()]},[N.length]);const ae=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:t})=>a("span",{children:t.indexOf(e)+1},void 0,!1,{fileName:s,lineNumber:455,columnNumber:24},void 0)},{Header:"guest name",accessor:"guestname",Cell:e=>{var t,l,n,m,d;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?((n=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:n.slice(0,15))+(((d=(m=e==null?void 0:e.cell)==null?void 0:m.value)==null?void 0:d.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:462,columnNumber:24},void 0)}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"},void 0,!1,{fileName:s,lineNumber:469,columnNumber:24},void 0)}},{Header:"Booking Ref#",accessor:"confirmation code",Cell:e=>{var t,l,n,m;return a("div",{children:a("span",{className:"inline-flex items-center",children:a("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(t=e==null?void 0:e.cell)!=null&&t.value?((l=e==null?void 0:e.cell)==null?void 0:l.value.slice(0,15))+(((m=(n=e==null?void 0:e.cell)==null?void 0:n.value)==null?void 0:m.length)>15?"...":""):"Not Available"},void 0,!1,{fileName:s,lineNumber:479,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:478,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:477,columnNumber:21},void 0)}},{Header:"checkin date",accessor:"checkindate",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"},void 0,!1,{fileName:s,lineNumber:491,columnNumber:24},void 0)}},{Header:"checkout date",accessor:"checkoutdate",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?new Date((l=e==null?void 0:e.cell)==null?void 0:l.value).toDateString():"Not Available"},void 0,!1,{fileName:s,lineNumber:498,columnNumber:24},void 0)}},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"},void 0,!1,{fileName:s,lineNumber:506,columnNumber:24},void 0)}},{Header:"Rate per Day",accessor:"tourismfee",Cell:e=>{var t,l;return a("span",{children:(t=e==null?void 0:e.cell)!=null&&t.value?(l=e==null?void 0:e.cell)==null?void 0:l.value:"Not Available"},void 0,!1,{fileName:s,lineNumber:513,columnNumber:24},void 0)}},{Header:"Booking Amount",accessor:"totalroomrent",Cell:e=>{var t,l,n,m,d,y;return a("span",{children:((n=(l=(t=e==null?void 0:e.cell)==null?void 0:t.row)==null?void 0:l.original)==null?void 0:n.nonight)*((y=(d=(m=e==null?void 0:e.cell)==null?void 0:m.row)==null?void 0:d.original)==null?void 0:y.tourismfee)},void 0,!1,{fileName:s,lineNumber:521,columnNumber:24},void 0)}}],se=i.exports.useMemo(()=>ae,[]),ne=i.exports.useMemo(()=>o);C.exports.useTable({columns:se,data:ne,initialState:{pageIndex:0,pageSize:50}},C.exports.useGlobalFilter,C.exports.useSortBy,C.exports.usePagination,C.exports.useRowSelect,e=>{e.visibleColumns.push(t=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:l})=>a("div",{children:a(K,{...l()},void 0,!1,{fileName:s,lineNumber:562,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:561,columnNumber:25},void 0),Cell:({row:l})=>a("div",{children:a(K,{...l.getToggleRowSelectedProps()},void 0,!1,{fileName:s,lineNumber:567,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:566,columnNumber:25},void 0)},...t])});const[V,oe]=i.exports.useState();i.exports.useEffect(()=>{var e;if(r&&r.length){let t=0;for(let l=0;l<(r==null?void 0:r.length);l++){let n=parseInt((e=r[l])==null?void 0:e.days);t+=n}oe(t)}},[r]);const[O,ie]=i.exports.useState();i.exports.useEffect(()=>{var e,t;if(r&&r.length){let l=0;for(let n=0;n<(r==null?void 0:r.length);n++)if(((e=r[n])==null?void 0:e.totalDays)>0){let m=parseInt((t=r[n])==null?void 0:t.totalDays);l+=m}ie(l)}},[r]);const[Y,re]=i.exports.useState();i.exports.useEffect(()=>{var e,t;if(r&&r.length){let l=0;for(let n=0;n<(r==null?void 0:r.length);n++)if(((e=r[n])==null?void 0:e.totalRoomRent)>0){let m=parseInt((t=r[n])==null?void 0:t.totalRoomRent);l+=m}re(l)}},[r]);const ce=()=>{let e=document.getElementById("printablediv").innerHTML,t=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=t};return a(D,{children:a(me,{children:[a("div",{className:"flex justify-between items-center mb-6",children:[a("h4",{className:"card-title",children:"TRANSACTION MONTHLY SUMMARY REPORT"},void 0,!1,{fileName:s,lineNumber:657,columnNumber:21},void 0),a("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse",children:[a("div",{className:"w-[400px] relative",children:B===!0?a(D,{children:[a("div",{className:"absolute w-[100%] z-10 h-[100%] opacity-[0.8]",style:{background:"#e2e8f0"},children:a("div",{className:"flex items-center justify-center h-[100%]",children:a("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"},void 0,!1,{fileName:s,lineNumber:671,columnNumber:53},void 0),a("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},void 0,!1,{fileName:s,lineNumber:679,columnNumber:53},void 0)]},void 0,!0,{fileName:s,lineNumber:665,columnNumber:49},void 0)},void 0,!1,{fileName:s,lineNumber:664,columnNumber:45},void 0)},void 0,!1,{fileName:s,lineNumber:663,columnNumber:41},void 0),a(H,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:E,value:E.filter(function(e){return e.value===(u==null?void 0:u.propertyid)}),placeholder:"Select Property",onChange:e=>{I({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:F,id:"hh"},void 0,!1,{fileName:s,lineNumber:687,columnNumber:41},void 0)]},void 0,!0):a(H,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:E,value:E.filter(function(e){return e.value===(u==null?void 0:u.propertyid)}),placeholder:"Select Property",onChange:e=>{I({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:F,id:"hh"},void 0,!1,{fileName:s,lineNumber:703,columnNumber:37},void 0)},void 0,!1,{fileName:s,lineNumber:659,columnNumber:25},void 0),a("div",{className:"w-[150px]",children:a(H,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:L,value:L.filter(function(e){return e.value===(f==null?void 0:f.yearid)}),placeholder:"Select Year",onChange:e=>{_({yearid:e==null?void 0:e.value,yearname:e==null?void 0:e.label},"select box")},styles:F,id:"hh"},void 0,!1,{fileName:s,lineNumber:721,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:720,columnNumber:25},void 0),(u==null?void 0:u.propertyid)||f?a("button",{className:"btn-dark py-[10px] px-[20px] rounded-[5px]",onClick:w,children:"Filter"},void 0,!1,{fileName:s,lineNumber:739,columnNumber:33},void 0):null,$===!0?a("button",{className:"btn-secondary py-[10px] px-[20px] rounded-[5px]",onClick:ee,children:"Reset"},void 0,!1,{fileName:s,lineNumber:743,columnNumber:33},void 0):null,a("button",{type:"button",onClick:ce,className:"inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse",children:[a("span",{className:"text-lg",children:a(ue,{icon:"heroicons:printer"},void 0,!1,{fileName:s,lineNumber:751,columnNumber:33},void 0)},void 0,!1,{fileName:s,lineNumber:750,columnNumber:29},void 0),a("span",{children:"Print"},void 0,!1,{fileName:s,lineNumber:753,columnNumber:29},void 0)]},void 0,!0,{fileName:s,lineNumber:745,columnNumber:25},void 0),a(D,{},void 0,!1)]},void 0,!0,{fileName:s,lineNumber:658,columnNumber:21},void 0)]},void 0,!0,{fileName:s,lineNumber:656,columnNumber:17},void 0),a("div",{className:"overflow-x-auto -mx-6",id:"printablediv",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:"overflow-hidden ",children:a("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:a("tr",{role:"row",children:[a("th",{className:" table-th ",children:"MONTH / PERIOD"},void 0,!1,{fileName:s,lineNumber:843,columnNumber:41},void 0),a("th",{className:" table-th ",children:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH"},void 0,!1,{fileName:s,lineNumber:844,columnNumber:41},void 0),a("th",{className:" table-th ",children:"NO OF NIGHTS BOOKED"},void 0,!1,{fileName:s,lineNumber:845,columnNumber:41},void 0),a("th",{className:" table-th ",children:"AVERAGE RATE PER NIGHT"},void 0,!1,{fileName:s,lineNumber:846,columnNumber:41},void 0),a("th",{className:" table-th ",children:"OCCUPANCY RATE"},void 0,!1,{fileName:s,lineNumber:847,columnNumber:41},void 0),a("th",{className:" table-th ",children:"REFUND /CANCELLATION"},void 0,!1,{fileName:s,lineNumber:848,columnNumber:41},void 0),a("th",{className:" table-th ",children:"TOTAL BOOKING AMOUNT"},void 0,!1,{fileName:s,lineNumber:849,columnNumber:41},void 0)]},void 0,!0,{fileName:s,lineNumber:842,columnNumber:37},void 0)},void 0,!1,{fileName:s,lineNumber:841,columnNumber:33},void 0),a("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",children:[r&&r.length?r.map((e,t)=>{let l=0;(e==null?void 0:e.totalDays)>0&&(l=Math.abs((e==null?void 0:e.totalRoomRent)/(e==null?void 0:e.totalDays)));let n=Math.abs((e==null?void 0:e.totalDays)/(e==null?void 0:e.days)*100);return a("tr",{role:"row",children:[a("td",{className:"table-td",children:a("span",{children:(e==null?void 0:e.name)+" "+(f==null?void 0:f.yearname)},void 0,!1,{fileName:s,lineNumber:864,columnNumber:61},void 0)},void 0,!1,{fileName:s,lineNumber:863,columnNumber:57},void 0),a("td",{className:"table-td",children:a("span",{children:(e==null?void 0:e.days)+" Nights"},void 0,!1,{fileName:s,lineNumber:867,columnNumber:61},void 0)},void 0,!1,{fileName:s,lineNumber:866,columnNumber:57},void 0),a("td",{className:"table-td",children:a("span",{children:(e==null?void 0:e.totalDays)+" Nights"},void 0,!1,{fileName:s,lineNumber:870,columnNumber:61},void 0)},void 0,!1,{fileName:s,lineNumber:869,columnNumber:57},void 0),a("td",{className:"table-td",children:a("span",{children:l},void 0,!1,{fileName:s,lineNumber:873,columnNumber:61},void 0)},void 0,!1,{fileName:s,lineNumber:872,columnNumber:57},void 0),a("td",{className:"table-td",children:a("span",{children:n.toFixed(2)+"%"},void 0,!1,{fileName:s,lineNumber:876,columnNumber:61},void 0)},void 0,!1,{fileName:s,lineNumber:875,columnNumber:57},void 0),a("td",{className:"table-td",children:a("span",{children:"-"},void 0,!1,{fileName:s,lineNumber:879,columnNumber:61},void 0)},void 0,!1,{fileName:s,lineNumber:878,columnNumber:57},void 0),a("td",{className:"table-td",children:a("span",{children:e==null?void 0:e.totalRoomRent},void 0,!1,{fileName:s,lineNumber:882,columnNumber:61},void 0)},void 0,!1,{fileName:s,lineNumber:881,columnNumber:57},void 0)]},void 0,!0,{fileName:s,lineNumber:862,columnNumber:53},void 0)}):"Not Found",a("tr",{children:[a("td",{className:"table-td font-bold",children:"TOTAL"},void 0,!1,{fileName:s,lineNumber:889,columnNumber:41},void 0),a("td",{className:"table-td font-bold",children:V},void 0,!1,{fileName:s,lineNumber:890,columnNumber:41},void 0),a("td",{className:"table-td font-bold",children:O},void 0,!1,{fileName:s,lineNumber:891,columnNumber:41},void 0),a("td",{className:"table-td font-bold",children:Math.abs(Y/O).toFixed(2)},void 0,!1,{fileName:s,lineNumber:892,columnNumber:41},void 0),a("td",{className:"table-td font-bold",children:Math.abs(O/V*100).toFixed(2)},void 0,!1,{fileName:s,lineNumber:893,columnNumber:41},void 0),a("td",{className:"table-td font-bold",children:"-"},void 0,!1,{fileName:s,lineNumber:894,columnNumber:41},void 0),a("td",{className:"table-td font-bold",children:Y},void 0,!1,{fileName:s,lineNumber:895,columnNumber:41},void 0)]},void 0,!0,{fileName:s,lineNumber:888,columnNumber:37},void 0)]},void 0,!0,{fileName:s,lineNumber:852,columnNumber:33},void 0)]},void 0,!0,{fileName:s,lineNumber:840,columnNumber:29},void 0)},void 0,!1,{fileName:s,lineNumber:778,columnNumber:25},void 0)},void 0,!1,{fileName:s,lineNumber:777,columnNumber:21},void 0)},void 0,!1,{fileName:s,lineNumber:776,columnNumber:17},void 0),a(D,{},void 0,!1)]},void 0,!0,{fileName:s,lineNumber:655,columnNumber:13},void 0)},void 0,!1)};export{pe as default};