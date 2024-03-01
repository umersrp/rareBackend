import{R as k,j as s,F as D,r,b as C,c as u,f as de,ap as H,I as he}from"./index.adb849e2.js";import"./index.esm.f36d69e6.js";const K=k.forwardRef(({indeterminate:S,...M},n)=>{const N=k.useRef(),R=n||N;return k.useEffect(()=>{R.current.indeterminate=S},[R,S]),s(D,{children:s("input",{type:"checkbox",ref:R,...M,className:"table-checkbox"})})}),F={option:(S,M)=>({...S,fontSize:"14px"})},be=({title:S,allData:M})=>{const[n,N]=r.exports.useState([]),R=localStorage.getItem("isAuth"),c=JSON.parse(R),[pe,J]=r.exports.useState(),[ue,W]=r.exports.useState(),[fe,Q]=r.exports.useState();r.exports.useState({startDate:"",endDate:""}),r.exports.useEffect(()=>{(async()=>{try{const a=`http://portals.rarehomesgroup.com/property/api/advancesearch?customerid=${c==null?void 0:c._id}&sort=descending&type=customer&page=0&perPage=all`,t=`http://portals.rarehomesgroup.com/property/api/advancesearch?owner_representative_id=${c==null?void 0:c._id}&sort=descending&type=customer&page=0&perPage=all`,l=await fetch(a);if(!l.ok&&l.status!==400)throw new Error(`API 1 failed with status: ${l.status}`);const i=l.status===400?[]:await l.json(),h=await fetch(t);if(!h.ok&&h.status!==400)throw new Error(`API 2 failed with status: ${h.status}`);const v=h.status===400?[]:await h.json(),I=[...i,...v].map(m=>m._id).map(m=>fetch(`http://portals.rarehomesgroup.com/booking/ownerrepresentative/pages?propertyid=${m}&page=0&perPage=all`).then(y=>y.json())),b=(await Promise.all(I)).reduce((m,y)=>m.concat(y),[]);N(b)}catch(a){console.error("Error fetching data:",a),setLoadingData(!1)}})()},[]);const[g,X]=r.exports.useState([]);r.exports.useEffect(()=>{n!=null&&n.length&&(async()=>{let a=[];for(let t of n)if(t!=null&&t.propertyid)try{const i=await(await fetch(`http://portals.rarehomesgroup.com/property/${t.propertyid}`)).json();a.push(i)}catch(l){console.error(l)}X(a)})()},[n,n==null?void 0:n.length]);const[A,Z]=r.exports.useState([]),[B,L]=r.exports.useState(!1);r.exports.useEffect(()=>{if(L(!0),g!=null&&g.length){const e=[...new Map(g.map(t=>[t._id,t])).values()],a=e==null?void 0:e.map(t=>({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname,value:t._id}));L(!1),Z(a)}},[g==null?void 0:g.length]);const[d,T]=r.exports.useState();r.exports.useEffect(()=>{(async()=>{const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/pagination/pages?ownerid=${c==null?void 0:c._id}&page=0&perPage=all`)).json();return N(t==null?void 0:t.booking)})()},[]);const j=[{value:"2023",label:"2023"},{value:"2022",label:"2022"},{value:"2021",label:"2021"},{value:"2020",label:"2020"},{value:"2019",label:"2019"},{value:"2018",label:"2018"},{value:"2017",label:"2017"},{value:"2016",label:"2016"},{value:"2015",label:"2015"},{value:"2014",label:"2014"}],[f,$]=r.exports.useState({yearid:"2023",yearname:"2023"}),[_,U]=r.exports.useState(!1),w=async()=>{const a=await(await fetch(`http://portals.rarehomesgroup.com/booking/api/yearly?${c!=null&&c._id?"ownerid="+(c==null?void 0:c._id)+"&":""}${d!=null&&d.propertyid?"propertyid="+(d==null?void 0:d.propertyid)+"&":""}${"year="+(f==null?void 0:f.yearid)}`)).json();U(!0);const t=[];a.booking.forEach(l=>{(c==null?void 0:c._id)===l.ownerid&&t.push(l),N(t)})},ee=async()=>{if(_===!0){const a=await(await fetch(`http://portals.rarehomesgroup.com/booking/pagination/pages?ownerid=${c==null?void 0:c._id}&page=0&perPage=all`)).json();return U(!1),T(),$({yearid:"2023",yearname:"2023"}),N(a==null?void 0:a.booking)}};r.exports.useEffect(()=>{var a;let e=0;for(let t=0;t<(n==null?void 0:n.length);t++){let l=parseInt((a=n[t])==null?void 0:a.nonight);e+=l}J(e)},[n==null?void 0:n.length]),r.exports.useEffect(()=>{var a;let e=0;for(let t=0;t<(n==null?void 0:n.length);t++){let l=parseInt((a=n[t])==null?void 0:a.tourismfee);e+=l}W(e)},[n==null?void 0:n.length]),r.exports.useEffect(()=>{var a,t;let e=0;for(let l=0;l<(n==null?void 0:n.length);l++){let i=parseInt((a=n[l])==null?void 0:a.nonight)*parseInt((t=n[l])==null?void 0:t.tourismfee);e+=i}Q(e)},[n==null?void 0:n.length]);const[p,te]=r.exports.useState([]),[z,ae]=r.exports.useState(!0);r.exports.useEffect(()=>{var t;const e=new Date().getFullYear(),a=[];if(n!=null&&n.length)for(let l=0;l<12;l++){const i=l+1,h=new Date(e,l,1).toLocaleString("default",{month:"long"}),v=new Date(e,i,0).getDate();let P=new Set,E=0;for(let b=0;b<n.length;b++){const m=new Date(n[b].checkindate),y=new Date(n[b].checkoutdate);if((m.getFullYear()!==e||m.getMonth()!==l)&&(y.getFullYear()!==e||y.getMonth()!==l))continue;const x=new Date(m);for(;x<y;)x.getMonth()===l&&x.getFullYear()===e&&P.add(x.getDate()),x.setDate(x.getDate()+1);E=(t=n[b])==null?void 0:t.tourismfee}const I=P.size,q={name:h,days:v,totalDays:I,tourismFee:E,totalRoomRent:I*E};a.push(q)}te(a),z&&ae(!1)},[n,z]);const[o,G]=r.exports.useState();r.exports.useEffect(()=>{p&&G(p)},[p]),r.exports.useEffect(()=>{if(p){const e={};for(const a of p)e[a.name]?(e[a.name].totalDays+=a.totalDays,e[a.name].totalroomrent+=a.totalroomrent):e[a.name]={...a};Object.values(e)}},[p.length]),r.exports.useEffect(()=>{if(p){const e=Object.values(p.reduce((a,t)=>(a[t.name]?(a[t.name].totalDays+=t.totalDays,a[t.name].totalroomrent+=t.totalroomrent):a[t.name]={...t},a),{}));G(e)}},[p.length]),r.exports.useEffect(()=>{p.length&&[...new Map(p.map(e=>[e.name,e])).values()]},[p.length]);const se=[{Header:"Sr no",accessor:"id",Cell:({row:e,flatRows:a})=>s("span",{children:a.indexOf(e)+1})},{Header:"guest name",accessor:"guestname",Cell:e=>{var a,t,l,i,h;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?((l=(t=e==null?void 0:e.cell)==null?void 0:t.value)==null?void 0:l.slice(0,15))+(((h=(i=e==null?void 0:e.cell)==null?void 0:i.value)==null?void 0:h.length)>15?"...":""):"Not Available"})}},{Header:"reservation date",accessor:"reservationdate",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{Header:"Booking Ref#",accessor:"confirmation code",Cell:e=>{var a,t,l,i;return s("div",{children:s("span",{className:"inline-flex items-center",children:s("span",{className:"text-sm text-slate-600 dark:text-slate-300 lowercase",children:(a=e==null?void 0:e.cell)!=null&&a.value?((t=e==null?void 0:e.cell)==null?void 0:t.value.slice(0,15))+(((i=(l=e==null?void 0:e.cell)==null?void 0:l.value)==null?void 0:i.length)>15?"...":""):"Not Available"})})})}},{Header:"checkin date",accessor:"checkindate",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{Header:"checkout date",accessor:"checkoutdate",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?new Date((t=e==null?void 0:e.cell)==null?void 0:t.value).toDateString():"Not Available"})}},{id:"no nights stayed",Header:"no nights stayed",accessor:"nonight",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"Rate per Day",accessor:"tourismfee",Cell:e=>{var a,t;return s("span",{children:(a=e==null?void 0:e.cell)!=null&&a.value?(t=e==null?void 0:e.cell)==null?void 0:t.value:"Not Available"})}},{Header:"Booking Amount",accessor:"totalroomrent",Cell:e=>{var a,t,l,i,h,v;return s("span",{children:((l=(t=(a=e==null?void 0:e.cell)==null?void 0:a.row)==null?void 0:t.original)==null?void 0:l.nonight)*((v=(h=(i=e==null?void 0:e.cell)==null?void 0:i.row)==null?void 0:h.original)==null?void 0:v.tourismfee)})}}],le=r.exports.useMemo(()=>se,[]),ne=r.exports.useMemo(()=>n);C.exports.useTable({columns:le,data:ne,initialState:{pageIndex:0,pageSize:50}},C.exports.useGlobalFilter,C.exports.useSortBy,C.exports.usePagination,C.exports.useRowSelect,e=>{e.visibleColumns.push(a=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:t})=>s("div",{children:s(K,{...t()})}),Cell:({row:t})=>s("div",{children:s(K,{...t.getToggleRowSelectedProps()})})},...a])});const[Y,re]=r.exports.useState();r.exports.useEffect(()=>{var e;if(o&&o.length){let a=0;for(let t=0;t<(o==null?void 0:o.length);t++){let l=parseInt((e=o[t])==null?void 0:e.days);a+=l}re(a)}},[o]);const[O,oe]=r.exports.useState();r.exports.useEffect(()=>{var e,a;if(o&&o.length){let t=0;for(let l=0;l<(o==null?void 0:o.length);l++)if(((e=o[l])==null?void 0:e.totalDays)>0){let i=parseInt((a=o[l])==null?void 0:a.totalDays);t+=i}oe(t)}},[o]);const[V,ce]=r.exports.useState();r.exports.useEffect(()=>{var e,a;if(o&&o.length){let t=0;for(let l=0;l<(o==null?void 0:o.length);l++)if(((e=o[l])==null?void 0:e.totalRoomRent)>0){let i=parseInt((a=o[l])==null?void 0:a.totalRoomRent);t+=i}ce(t)}},[o]);const ie=()=>{let e=document.getElementById("printablediv").innerHTML,a=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=a};return s(D,{children:u(de,{children:[u("div",{className:"flex justify-between items-center mb-6",children:[s("h4",{className:"card-title",children:"TRANSACTION MONTHLY SUMMARY REPORT"}),u("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse",children:[s("div",{className:"w-[400px] relative",children:B===!0?u(D,{children:[s("div",{className:"absolute w-[100%] z-10 h-[100%] opacity-[0.8]",style:{background:"#e2e8f0"},children:s("div",{className:"flex items-center justify-center h-[100%]",children:u("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[s("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),s("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})}),s(H,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:A,value:A.filter(function(e){return e.value===(d==null?void 0:d.propertyid)}),placeholder:"Select Property",onChange:e=>{T({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:F,id:"hh"})]}):s(H,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:A,value:A.filter(function(e){return e.value===(d==null?void 0:d.propertyid)}),placeholder:"Select Property",onChange:e=>{T({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:F,id:"hh"})}),s("div",{className:"w-[150px]",children:s(H,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:j,value:j.filter(function(e){return e.value===(f==null?void 0:f.yearid)}),placeholder:"Select Year",onChange:e=>{$({yearid:e==null?void 0:e.value,yearname:e==null?void 0:e.label},"select box")},styles:F,id:"hh"})}),(d==null?void 0:d.propertyid)||f?s("button",{className:"btn-dark py-[10px] px-[20px] rounded-[5px]",onClick:w,children:"Filter"}):null,_===!0?s("button",{className:"btn-secondary py-[10px] px-[20px] rounded-[5px]",onClick:ee,children:"Reset"}):null,u("button",{type:"button",onClick:ie,className:"inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse",children:[s("span",{className:"text-lg",children:s(he,{icon:"heroicons:printer"})}),s("span",{children:"Print"})]}),s(D,{})]})]}),s("div",{className:"overflow-x-auto -mx-6",id:"printablediv",children:s("div",{className:"inline-block min-w-full align-middle",children:s("div",{className:"overflow-hidden ",children:u("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",children:[s("thead",{className:"bg-slate-200 dark:bg-slate-700",children:u("tr",{role:"row",children:[s("th",{className:" table-th ",children:"MONTH / PERIOD"}),s("th",{className:" table-th ",children:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH"}),s("th",{className:" table-th ",children:"NO OF NIGHTS BOOKED"}),s("th",{className:" table-th ",children:"AVERAGE RATE PER NIGHT"}),s("th",{className:" table-th ",children:"OCCUPANCY RATE"}),s("th",{className:" table-th ",children:"REFUND /CANCELLATION"}),s("th",{className:" table-th ",children:"TOTAL BOOKING AMOUNT"})]})}),u("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",children:[o&&o.length?o.map((e,a)=>{let t=0;(e==null?void 0:e.totalDays)>0&&(t=Math.abs((e==null?void 0:e.totalRoomRent)/(e==null?void 0:e.totalDays)));let l=Math.abs((e==null?void 0:e.totalDays)/(e==null?void 0:e.days)*100);return u("tr",{role:"row",children:[s("td",{className:"table-td",children:s("span",{children:(e==null?void 0:e.name)+" "+(f==null?void 0:f.yearname)})}),s("td",{className:"table-td",children:s("span",{children:(e==null?void 0:e.days)+" Nights"})}),s("td",{className:"table-td",children:s("span",{children:(e==null?void 0:e.totalDays)+" Nights"})}),s("td",{className:"table-td",children:s("span",{children:t})}),s("td",{className:"table-td",children:s("span",{children:l.toFixed(2)+"%"})}),s("td",{className:"table-td",children:s("span",{children:"-"})}),s("td",{className:"table-td",children:s("span",{children:e==null?void 0:e.totalRoomRent})})]})}):"Not Found",u("tr",{children:[s("td",{className:"table-td font-bold",children:"TOTAL"}),s("td",{className:"table-td font-bold",children:Y}),s("td",{className:"table-td font-bold",children:O}),s("td",{className:"table-td font-bold",children:Math.abs(V/O).toFixed(2)}),s("td",{className:"table-td font-bold",children:Math.abs(O/Y*100).toFixed(2)}),s("td",{className:"table-td font-bold",children:"-"}),s("td",{className:"table-td font-bold",children:V})]})]})]})})})}),s(D,{})]})})};export{be as default};
