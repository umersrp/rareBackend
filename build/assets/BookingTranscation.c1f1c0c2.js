import{R as L,j as a,F as x,r,c,f as pe,I as de,aq as g}from"./index.4113582e.js";import"./index.esm.af21ba6f.js";L.forwardRef(({indeterminate:m,...D},l)=>{const b=L.useRef(),y=l||b;return L.useEffect(()=>{y.current.indeterminate=m},[y,m]),a(x,{children:a("input",{type:"checkbox",ref:y,...D,className:"table-checkbox"})})});const v={option:(m,D)=>({...m,fontSize:"14px"})},ge=({title:m,allData:D})=>{const[l,b]=r.exports.useState([]),y=localStorage.getItem("isAuth");JSON.parse(y);const[ue,K]=r.exports.useState(),[fe,W]=r.exports.useState(),[me,J]=r.exports.useState();r.exports.useState({startDate:"",endDate:""});const[R,Y]=r.exports.useState([]);r.exports.useEffect(()=>{l!=null&&l.length&&(async()=>{let s=[];for(let t of l)if(t!=null&&t.ownerid)try{const u=await(await fetch(`http://portals.rarehomesgroup.com/users/${t.ownerid}`)).json();s.push(u)}catch(o){console.error(o)}Y(s)})()},[l]);const[w,Q]=r.exports.useState([]),[X,I]=r.exports.useState(!1);r.exports.useEffect(()=>{if(I(!0),R.length){const e=[...new Map(R.map(t=>[t._id,t])).values()],s=e==null?void 0:e.map(t=>({label:t.firstname+" "+t.lastname+" | "+t.email,value:t._id}));I(!1),Q(s)}},[R.length]);const[i,E]=r.exports.useState(),[M,Z]=r.exports.useState([]);r.exports.useEffect(()=>{l!=null&&l.length&&(async()=>{let s=[];for(let t of l)if(t!=null&&t.propertyid)try{const u=await(await fetch(`http://portals.rarehomesgroup.com/property/${t.propertyid}`)).json();s.push(u)}catch(o){console.error(o)}Z(s)})()},[l,l==null?void 0:l.length]);const[S,B]=r.exports.useState([]),[ee,P]=r.exports.useState(!1);r.exports.useEffect(()=>{if(P(!0),M.length){const e=[...new Map(M.map(t=>[t._id,t])).values()],s=[];e.forEach(t=>{t._id!==void 0&&s.push({label:t.unitnumber+" | "+t.communityname+" | "+t.projectname,value:t._id})}),P(!1),B(s)}},[M.length]);const[h,O]=r.exports.useState(),j=[{value:"2023",label:"2023"},{value:"2022",label:"2022"},{value:"2021",label:"2021"},{value:"2020",label:"2020"},{value:"2019",label:"2019"},{value:"2018",label:"2018"},{value:"2017",label:"2017"},{value:"2016",label:"2016"},{value:"2015",label:"2015"},{value:"2014",label:"2014"}],[p,H]=r.exports.useState({yearid:"2023",yearname:"2023"}),[z,$]=r.exports.useState(!1),te=async()=>{const s=await(await fetch(`http://portals.rarehomesgroup.com/booking/api/yearly?${i!=null&&i.ownerid?"ownerid="+(i==null?void 0:i.ownerid)+"&":""}${h!=null&&h.propertyid?"propertyid="+(h==null?void 0:h.propertyid)+"&":""}${"year="+(p==null?void 0:p.yearid)}`)).json();return $(!0),b(s==null?void 0:s.booking)},ae=async()=>{if(z===!0){const s=await(await fetch("http://portals.rarehomesgroup.com/booking")).json();return $(!1),E(),O(),H({yearid:"2023",yearname:"2023"}),b(s)}};r.exports.useEffect(()=>{(async()=>{const t=await(await fetch("http://portals.rarehomesgroup.com/booking")).json();return b(t)})()},[]),r.exports.useEffect(()=>{var s;let e=0;for(let t=0;t<(l==null?void 0:l.length);t++){let o=parseFloat((s=l[t])==null?void 0:s.nonight);e+=o}K(e)},[l==null?void 0:l.length]),r.exports.useEffect(()=>{var s;let e=0;for(let t=0;t<(l==null?void 0:l.length);t++){let o=parseFloat((s=l[t])==null?void 0:s.tourismfee);e+=o}W(e)},[l==null?void 0:l.length]),r.exports.useEffect(()=>{var s,t;let e=0;for(let o=0;o<(l==null?void 0:l.length);o++){let u=parseFloat((s=l[o])==null?void 0:s.nonight)*parseFloat((t=l[o])==null?void 0:t.tourismfee);e+=u}J(e)},[l==null?void 0:l.length]);const[d,se]=r.exports.useState([]),[U,le]=r.exports.useState(!0);r.exports.useEffect(()=>{var t;const e=parseFloat(p==null?void 0:p.yearid),s=[];if(l!=null&&l.length)for(let o=0;o<12;o++){const u=o+1,ce=new Date(e,o,1).toLocaleString("default",{month:"long"}),ie=new Date(e,u,0).getDate();let _=new Set,C=0;for(let N=0;N<(l==null?void 0:l.length);N++){const A=new Date(l[N].checkindate),F=new Date(l[N].checkoutdate);if((A.getFullYear()!==e||A.getMonth()!==o)&&(F.getFullYear()!==e||F.getMonth()!==o))continue;const f=new Date(A);for(;f<F;)f.getMonth()===o&&f.getFullYear()===e&&_.add(f.getDate()),f.setDate(f.getDate()+1);C=(t=l[N])==null?void 0:t.tourismfee}const V=_.size,he={name:ce,days:ie,totalDays:V,tourismFee:C,totalRoomRent:V*C};s.push(he)}se(s),U&&le(!1)},[l,U]);const[n,k]=r.exports.useState();r.exports.useEffect(()=>{d&&k(d)},[d]),r.exports.useEffect(()=>{if(d){const e={};for(const s of d)e[s.name]?(e[s.name].totalDays+=s.totalDays,e[s.name].totalroomrent+=s.totalroomrent):e[s.name]={...s};Object.values(e)}},[d.length]),r.exports.useEffect(()=>{if(d){const e=Object.values(d.reduce((s,t)=>(s[t.name]?(s[t.name].totalDays+=t.totalDays,s[t.name].totalroomrent+=t.totalroomrent):s[t.name]={...t},s),{}));k(e)}},[d.length]),r.exports.useEffect(()=>{d.length&&[...new Map(d.map(e=>[e.name,e])).values()]},[d.length]);const[q,re]=r.exports.useState();r.exports.useEffect(()=>{var e;if(n&&n.length){let s=0;for(let t=0;t<(n==null?void 0:n.length);t++){let o=parseFloat((e=n[t])==null?void 0:e.days);s+=o}re(s)}},[n]);const[T,oe]=r.exports.useState();r.exports.useEffect(()=>{var e,s;if(n&&n.length){let t=0;for(let o=0;o<(n==null?void 0:n.length);o++)if(((e=n[o])==null?void 0:e.totalDays)>0){let u=parseFloat((s=n[o])==null?void 0:s.totalDays);t+=u}oe(t)}},[n]);const[G,ne]=r.exports.useState();return r.exports.useEffect(()=>{var e,s;if(n&&n.length){let t=0;for(let o=0;o<(n==null?void 0:n.length);o++)if(((e=n[o])==null?void 0:e.totalRoomRent)>0){let u=parseFloat((s=n[o])==null?void 0:s.totalRoomRent);t+=u}ne(t)}},[n]),a(x,{children:c(pe,{children:[c("div",{className:"flex justify-between items-center mb-6",children:[a("h4",{className:"card-title",children:"TRANSACTION MONTHLY SUMMARY REPORT"}),a("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse",children:c("button",{type:"button",onClick:()=>{let e=document.getElementById("printablediv").innerHTML,s=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=s},className:"inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse",children:[a("span",{className:"text-lg",children:a(de,{icon:"heroicons:printer"})}),a("span",{children:"Print"})]})})]}),a("div",{className:"mb-6",children:c("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse",children:[a("div",{className:"w-[400px] relative",children:ee===!0?c(x,{children:[a("div",{className:"absolute w-[100%] z-10 h-[100%] opacity-[0.8]",style:{background:"#e2e8f0"},children:a("div",{className:"flex items-center justify-center h-[100%]",children:c("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})}),a(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:S,value:S.filter(function(e){return e.value===(h==null?void 0:h.propertyid)}),placeholder:"Select Property",onChange:e=>{O({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:v,id:"hh"})]}):a(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:S,value:S.filter(function(e){return e.value===(h==null?void 0:h.propertyid)}),placeholder:"Select Property",onChange:e=>{O({propertyid:e==null?void 0:e.value,propertyname:e==null?void 0:e.label},"select box")},styles:v,id:"hh"})}),a("div",{className:"w-[300px] relative",children:X===!0?c(x,{children:[a("div",{className:"absolute w-[100%] z-10 h-[100%] opacity-[0.8]",style:{background:"#e2e8f0"},children:a("div",{className:"flex items-center justify-center h-[100%]",children:c("svg",{className:"animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})}),a(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:w,value:w.filter(function(e){return e.value===(i==null?void 0:i.ownerid)}),placeholder:"Select owner",onChange:e=>{E({ownerid:e==null?void 0:e.value,ownername:e==null?void 0:e.label},"select box")},styles:v,id:"hh"})]}):a(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:w,value:w.filter(function(e){return e.value===(i==null?void 0:i.ownerid)}),placeholder:"Select owner",onChange:e=>{E({ownerid:e==null?void 0:e.value,ownername:e==null?void 0:e.label},"select box")},styles:v,id:"hh"})}),a("div",{className:"w-[150px]",children:a(g,{label:"Basic Select",className:"react-select",classNamePrefix:"select",options:j,value:j.filter(function(e){return e.value===(p==null?void 0:p.yearid)}),placeholder:"Select Year",onChange:e=>{H({yearid:e==null?void 0:e.value,yearname:e==null?void 0:e.label},"select box")},styles:v,id:"hh"})}),i||h||p?a("button",{className:"btn-dark py-[10px] px-[20px] rounded-[5px]",onClick:te,children:"Filter"}):null,z===!0?a("button",{className:"btn-secondary py-[10px] px-[20px] rounded-[5px]",onClick:ae,children:"Reset"}):null]})}),a("div",{className:"overflow-x-auto -mx-6",id:"printablediv",children:a("div",{className:"inline-block min-w-full align-middle",children:a("div",{className:"overflow-hidden ",children:c("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",children:[a("thead",{className:"bg-slate-200 dark:bg-slate-700",children:c("tr",{role:"row",children:[a("th",{className:" table-th ",children:"MONTH / PERIOD"}),a("th",{className:" table-th ",children:"TOTAL AVAILABLE NUMBER OF NIGHTS / MONTH"}),a("th",{className:" table-th ",children:"NO OF NIGHTS BOOKED"}),a("th",{className:" table-th ",children:"AVERAGE RATE PER NIGHT"}),a("th",{className:" table-th ",children:"OCCUPANCY RATE"}),a("th",{className:" table-th ",children:"REFUND /CANCELLATION"}),a("th",{className:" table-th ",children:"TOTAL BOOKING AMOUNT"})]})}),c("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",children:[n&&n.length?n.map((e,s)=>{let t=0;(e==null?void 0:e.totalDays)>0&&(t=Math.abs((e==null?void 0:e.totalRoomRent)/(e==null?void 0:e.totalDays)));let o=Math.abs((e==null?void 0:e.totalDays)/(e==null?void 0:e.days)*100);return c("tr",{role:"row",children:[a("td",{className:"table-td",children:a("span",{children:(e==null?void 0:e.name)+" "+(p==null?void 0:p.yearname)})}),a("td",{className:"table-td",children:a("span",{children:(e==null?void 0:e.days)+" Nights"})}),a("td",{className:"table-td",children:a("span",{children:(e==null?void 0:e.totalDays)+" Nights"})}),a("td",{className:"table-td",children:a("span",{children:t.toLocaleString()})}),a("td",{className:"table-td",children:a("span",{children:o.toLocaleString()+"%"})}),a("td",{className:"table-td",children:a("span",{children:"-"})}),a("td",{className:"table-td",children:a("span",{children:e==null?void 0:e.totalRoomRent})})]})}):"Not Found",n&&n.length?c("tr",{children:[a("td",{className:"table-td font-bold",children:"TOTAL"}),a("td",{className:"table-td font-bold",children:q}),a("td",{className:"table-td font-bold",children:T}),a("td",{className:"table-td font-bold",children:Math.abs(G/T).toLocaleString()}),c("td",{className:"table-td font-bold",children:[Math.abs(T/q*100).toLocaleString()," %"]}),a("td",{className:"table-td font-bold",children:"-"}),a("td",{className:"table-td font-bold",children:G})]}):null]})]})})})})]})})};export{ge as default};
