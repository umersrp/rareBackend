import{R as L,j as t,F as x,r as s,e as ue,I as de,ap as y}from"./index.4c1e8891.js";import"./index.esm.51195a21.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\BookingTranscation.jsx";L.forwardRef(({indeterminate:b,...D},r)=>{const v=L.useRef(),h=r||v;return L.useEffect(()=>{h.current.indeterminate=b},[h,b]),t(x,{children:t("input",{type:"checkbox",ref:h,...D,className:"table-checkbox"},void 0,!1,{fileName:l,lineNumber:28,columnNumber:17},void 0)},void 0,!1)});const g={option:(b,D)=>({...b,fontSize:"14px"})},ye=({title:b,allData:D})=>{const[r,v]=s.exports.useState([]),h=localStorage.getItem("isAuth");JSON.parse(h);const[Ne,K]=s.exports.useState(),[fe,W]=s.exports.useState(),[be,J]=s.exports.useState();s.exports.useState({startDate:"",endDate:""});const[R,Y]=s.exports.useState([]);s.exports.useEffect(()=>{r!=null&&r.length&&(async()=>{let o=[];for(let a of r)if(a!=null&&a.ownerid)try{const N=await(await fetch(`http://dev-rare.srp.ai/users/${a.ownerid}`)).json();o.push(N)}catch(n){console.error(n)}Y(o)})()},[r]);const[w,Q]=s.exports.useState([]),[X,j]=s.exports.useState(!1);s.exports.useEffect(()=>{if(j(!0),R.length){const e=[...new Map(R.map(a=>[a._id,a])).values()],o=e==null?void 0:e.map(a=>({label:a.firstname+" "+a.lastname+" | "+a.email,value:a._id}));j(!1),Q(o)}},[R.length]);const[c,E]=s.exports.useState(),[O,Z]=s.exports.useState([]);s.exports.useEffect(()=>{r!=null&&r.length&&(async()=>{let o=[];for(let a of r)if(a!=null&&a.propertyid)try{const N=await(await fetch(`http://dev-rare.srp.ai/property/${a.propertyid}`)).json();o.push(N)}catch(n){console.error(n)}Z(o)})()},[r,r==null?void 0:r.length]);const[S,B]=s.exports.useState([]),[ee,I]=s.exports.useState(!1);s.exports.useEffect(()=>{if(I(!0),O.length){const e=[...new Map(O.map(a=>[a._id,a])).values()],o=[];e.forEach(a=>{a._id!==void 0&&o.push({label:a.unitnumber+" | "+a.communityname+" | "+a.projectname,value:a._id})}),I(!1),B(o)}},[O.length]);const[m,M]=s.exports.useState(),P=[{value:"2023",label:"2023"},{value:"2022",label:"2022"},{value:"2021",label:"2021"},{value:"2020",label:"2020"},{value:"2019",label:"2019"},{value:"2018",label:"2018"},{value:"2017",label:"2017"},{value:"2016",label:"2016"},{value:"2015",label:"2015"},{value:"2014",label:"2014"}],[u,H]=s.exports.useState({yearid:"2023",yearname:"2023"}),[k,z]=s.exports.useState(!1),te=async()=>{const o=await(await fetch(`http://dev-rare.srp.ai/booking/api/yearly?${c!=null&&c.ownerid?"ownerid="+(c==null?void 0:c.ownerid)+"&":""}${m!=null&&m.propertyid?"propertyid="+(m==null?void 0:m.propertyid)+"&":""}${"year="+(u==null?void 0:u.yearid)}`)).json();return z(!0),v(o==null?void 0:o.booking)},le=async()=>{if(k===!0){const o=await(await fetch("http://dev-rare.srp.ai/booking")).json();return z(!1),E(),M(),H({yearid:"2023",yearname:"2023"}),v(o)}};s.exports.useEffect(()=>{(async()=>{const a=await(await fetch("http://dev-rare.srp.ai/booking")).json();return v(a)})()},[]),s.exports.useEffect(()=>{var o;let e=0;for(let a=0;a<(r==null?void 0:r.length);a++){let n=parseFloat((o=r[a])==null?void 0:o.nonight);e+=n}K(e)},[r==null?void 0:r.length]),s.exports.useEffect(()=>{var o;let e=0;for(let a=0;a<(r==null?void 0:r.length);a++){let n=parseFloat((o=r[a])==null?void 0:o.tourismfee);e+=n}W(e)},[r==null?void 0:r.length]),s.exports.useEffect(()=>{var o,a;let e=0;for(let n=0;n<(r==null?void 0:r.length);n++){let N=parseFloat((o=r[n])==null?void 0:o.nonight)*parseFloat((a=r[n])==null?void 0:a.tourismfee);e+=N}J(e)},[r==null?void 0:r.length]);const[d,ae]=s.exports.useState([]),[U,oe]=s.exports.useState(!0);s.exports.useEffect(()=>{var a;const e=parseFloat(u==null?void 0:u.yearid),o=[];if(r!=null&&r.length)for(let n=0;n<12;n++){const N=n+1,ie=new Date(e,n,1).toLocaleString("default",{month:"long"}),ce=new Date(e,N,0).getDate();let q=new Set,C=0;for(let p=0;p<(r==null?void 0:r.length);p++){const A=new Date(r[p].checkindate),F=new Date(r[p].checkoutdate);if((A.getFullYear()!==e||A.getMonth()!==n)&&(F.getFullYear()!==e||F.getMonth()!==n))continue;const f=new Date(A);for(;f<F;)f.getMonth()===n&&f.getFullYear()===e&&q.add(f.getDate()),f.setDate(f.getDate()+1);C=(a=r[p])==null?void 0:a.tourismfee}const G=q.size,me={name:ie,days:ce,totalDays:G,tourismFee:C,totalRoomRent:G*C};o.push(me)}ae(o),U&&oe(!1)},[r,U]);const[i,$]=s.exports.useState();s.exports.useEffect(()=>{d&&$(d)},[d]),s.exports.useEffect(()=>{if(d){const e={};for(const o of d)e[o.name]?(e[o.name].totalDays+=o.totalDays,e[o.name].totalroomrent+=o.totalroomrent):e[o.name]={...o};Object.values(e)}},[d.length]),s.exports.useEffect(()=>{if(d){const e=Object.values(d.reduce((o,a)=>(o[a.name]?(o[a.name].totalDays+=a.totalDays,o[a.name].totalroomrent+=a.totalroomrent):o[a.name]={...a},o),{}));$(e)}},[d.length]),s.exports.useEffect(()=>{d.length&&[...new Map(d.map(e=>[e.name,e])).values()]},[d.length]);const[_,re]=s.exports.useState();s.exports.useEffect(()=>{var e;if(i&&i.length){let o=0;for(let a=0;a<(i==null?void 0:i.length);a++){let n=parseFloat((e=i[a])==null?void 0:e.days);o+=n}re(o)}},[i]);const[T,se]=s.exports.useState();s.exports.useEffect(()=>{var e,o;if(i&&i.length){let a=0;for(let n=0;n<(i==null?void 0:i.length);n++)if(((e=i[n])==null?void 0:e.totalDays)>0){let N=parseFloat((o=i[n])==null?void 0:o.totalDays);a+=N}se(a)}},[i]);const[V,ne]=s.exports.useState();return s.exports.useEffect(()=>{var e,o;if(i&&i.length){let a=0;for(let n=0;n<(i==null?void 0:i.length);n++)if(((e=i[n])==null?void 0:e.totalRoomRent)>0){let N=parseFloat((o=i[n])==null?void 0:o.totalRoomRent);a+=N}ne(a)}},[i]),t(x,{children:t(ue,{children:[t("div",{className:"flex justify-between items-center mb-6",children:[t("h4",{className:"card-title",children:"TRANSACTION MONTHLY SUMMARY REPORT"},void 0,!1,{fileName:l,lineNumber:464,columnNumber:21},void 0),t("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse",children:t("button",{type:"button",onClick:()=>{let e=document.getElementById("printablediv").innerHTML,o=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=o},className:"inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse",children:[t("span",{className:"text-lg",children:t(de,{icon:"heroicons:printer"},void 0,!1,{fileName:l,lineNumber:575,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:574,columnNumber:29},void 0),t("span",{children:"Print"},void 0,!1,{fileName:l,lineNumber:577,columnNumber:29},void 0)]},void 0,!0,{fileName:l,lineNumber:569,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:465,columnNumber:21},void 0)]},void 0,!0,{fileName:l,lineNumber:463,columnNumber:17},void 0),t("div",{className:"mb-6",children:t("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse",children:[t("div",{className:"w-[400px] relative",children:ee===!0?t(x,{children:[t("div",{className:"absolute w-[100%] z-10 h-[100%] opacity-[0.8]",style:{background:"#e2e8f0"},children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[t("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"},void 0,!1,{fileName:l,lineNumber:596,columnNumber:53},void 0),t("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},void 0,!1,{fileName:l,lineNumber:604,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:590,columnNumber:49},void 0)},void 0,!1,{fileName:l,lineNumber:589,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:588,columnNumber:41},void 0),t(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:S,value:S.filter(function(e){return e.value===(m==null?void 0:m.propertyid)}),placeholder:"Select Property",onChange:e=>{M({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:g,id:"hh"},void 0,!1,{fileName:l,lineNumber:612,columnNumber:41},void 0)]},void 0,!0):t(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:S,value:S.filter(function(e){return e.value===(m==null?void 0:m.propertyid)}),placeholder:"Select Property",onChange:e=>{M({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:g,id:"hh"},void 0,!1,{fileName:l,lineNumber:628,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:584,columnNumber:25},void 0),t("div",{className:"w-[300px] relative",children:X===!0?t(x,{children:[t("div",{className:"absolute w-[100%] z-10 h-[100%] opacity-[0.8]",style:{background:"#e2e8f0"},children:t("div",{className:"flex items-center justify-center h-[100%]",children:t("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[t("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"},void 0,!1,{fileName:l,lineNumber:657,columnNumber:53},void 0),t("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},void 0,!1,{fileName:l,lineNumber:665,columnNumber:53},void 0)]},void 0,!0,{fileName:l,lineNumber:651,columnNumber:49},void 0)},void 0,!1,{fileName:l,lineNumber:650,columnNumber:45},void 0)},void 0,!1,{fileName:l,lineNumber:649,columnNumber:41},void 0),t(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:w,value:w.filter(function(e){return e.value===(c==null?void 0:c.ownerid)}),placeholder:"Select owner",onChange:e=>{E({ownerid:e==null?void 0:e.value,ownername:e==null?void 0:e.label},"select box")},styles:g,id:"hh"},void 0,!1,{fileName:l,lineNumber:673,columnNumber:41},void 0)]},void 0,!0):t(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:w,value:w.filter(function(e){return e.value===(c==null?void 0:c.ownerid)}),placeholder:"Select owner",onChange:e=>{E({ownerid:e==null?void 0:e.value,ownername:e==null?void 0:e.label},"select box")},styles:g,id:"hh"},void 0,!1,{fileName:l,lineNumber:689,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:645,columnNumber:25},void 0),t("div",{className:"w-[150px]",children:t(y,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:P,value:P.filter(function(e){return e.value===(u==null?void 0:u.yearid)}),placeholder:"Select Year",onChange:e=>{H({yearid:e==null?void 0:e.value,yearname:e==null?void 0:e.label},"select box")},styles:g,id:"hh"},void 0,!1,{fileName:l,lineNumber:707,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:706,columnNumber:25},void 0),c||m||u?t("button",{className:"btn-dark py-[10px] px-[20px] rounded-[5px]",onClick:te,children:"Filter"},void 0,!1,{fileName:l,lineNumber:725,columnNumber:33},void 0):null,k===!0?t("button",{className:"btn-secondary py-[10px] px-[20px] rounded-[5px]",onClick:le,children:"Reset"},void 0,!1,{fileName:l,lineNumber:729,columnNumber:33},void 0):null]},void 0,!0,{fileName:l,lineNumber:583,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:582,columnNumber:17},void 0),t("div",{className:"overflow-x-auto -mx-6",id:"printablediv",children:t("div",{className:"inline-block min-w-full align-middle",children:t("div",{className:"overflow-hidden ",children:t("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",children:[t("thead",{className:"bg-slate-200 dark:bg-slate-700",children:t("tr",{role:"row",children:[t("th",{className:" table-th ",children:"MONTH / PERIOD"},void 0,!1,{fileName:l,lineNumber:739,columnNumber:41},void 0),t("th",{className:" table-th ",children:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH"},void 0,!1,{fileName:l,lineNumber:740,columnNumber:41},void 0),t("th",{className:" table-th ",children:"NO OF NIGHTS BOOKED"},void 0,!1,{fileName:l,lineNumber:741,columnNumber:41},void 0),t("th",{className:" table-th ",children:"AVERAGE RATE PER NIGHT"},void 0,!1,{fileName:l,lineNumber:742,columnNumber:41},void 0),t("th",{className:" table-th ",children:"OCCUPANCY RATE"},void 0,!1,{fileName:l,lineNumber:743,columnNumber:41},void 0),t("th",{className:" table-th ",children:"REFUND /CANCELLATION"},void 0,!1,{fileName:l,lineNumber:744,columnNumber:41},void 0),t("th",{className:" table-th ",children:"TOTAL BOOKING AMOUNT"},void 0,!1,{fileName:l,lineNumber:745,columnNumber:41},void 0)]},void 0,!0,{fileName:l,lineNumber:738,columnNumber:37},void 0)},void 0,!1,{fileName:l,lineNumber:737,columnNumber:33},void 0),t("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",children:[i&&i.length?i.map((e,o)=>{let a=0;(e==null?void 0:e.totalDays)>0&&(a=Math.abs((e==null?void 0:e.totalRoomRent)/(e==null?void 0:e.totalDays)));let n=Math.abs((e==null?void 0:e.totalDays)/(e==null?void 0:e.days)*100);return t("tr",{role:"row",children:[t("td",{className:"table-td",children:t("span",{children:(e==null?void 0:e.name)+" "+(u==null?void 0:u.yearname)},void 0,!1,{fileName:l,lineNumber:760,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:759,columnNumber:57},void 0),t("td",{className:"table-td",children:t("span",{children:(e==null?void 0:e.days)+" Nights"},void 0,!1,{fileName:l,lineNumber:763,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:762,columnNumber:57},void 0),t("td",{className:"table-td",children:t("span",{children:(e==null?void 0:e.totalDays)+" Nights"},void 0,!1,{fileName:l,lineNumber:766,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:765,columnNumber:57},void 0),t("td",{className:"table-td",children:t("span",{children:a.toLocaleString()},void 0,!1,{fileName:l,lineNumber:769,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:768,columnNumber:57},void 0),t("td",{className:"table-td",children:t("span",{children:n.toLocaleString()+"%"},void 0,!1,{fileName:l,lineNumber:772,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:771,columnNumber:57},void 0),t("td",{className:"table-td",children:t("span",{children:"-"},void 0,!1,{fileName:l,lineNumber:775,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:774,columnNumber:57},void 0),t("td",{className:"table-td",children:t("span",{children:e==null?void 0:e.totalRoomRent},void 0,!1,{fileName:l,lineNumber:778,columnNumber:61},void 0)},void 0,!1,{fileName:l,lineNumber:777,columnNumber:57},void 0)]},void 0,!0,{fileName:l,lineNumber:758,columnNumber:53},void 0)}):"Not Found",i&&i.length?t("tr",{children:[t("td",{className:"table-td font-bold",children:"TOTAL"},void 0,!1,{fileName:l,lineNumber:787,columnNumber:49},void 0),t("td",{className:"table-td font-bold",children:_},void 0,!1,{fileName:l,lineNumber:788,columnNumber:49},void 0),t("td",{className:"table-td font-bold",children:T},void 0,!1,{fileName:l,lineNumber:789,columnNumber:49},void 0),t("td",{className:"table-td font-bold",children:Math.abs(V/T).toLocaleString()},void 0,!1,{fileName:l,lineNumber:790,columnNumber:49},void 0),t("td",{className:"table-td font-bold",children:[Math.abs(T/_*100).toLocaleString()," %"]},void 0,!0,{fileName:l,lineNumber:791,columnNumber:49},void 0),t("td",{className:"table-td font-bold",children:"-"},void 0,!1,{fileName:l,lineNumber:792,columnNumber:49},void 0),t("td",{className:"table-td font-bold",children:V},void 0,!1,{fileName:l,lineNumber:793,columnNumber:49},void 0)]},void 0,!0,{fileName:l,lineNumber:786,columnNumber:45},void 0):null]},void 0,!0,{fileName:l,lineNumber:748,columnNumber:33},void 0)]},void 0,!0,{fileName:l,lineNumber:736,columnNumber:29},void 0)},void 0,!1,{fileName:l,lineNumber:735,columnNumber:25},void 0)},void 0,!1,{fileName:l,lineNumber:734,columnNumber:21},void 0)},void 0,!1,{fileName:l,lineNumber:733,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:462,columnNumber:13},void 0)},void 0,!1)};export{ye as default};
