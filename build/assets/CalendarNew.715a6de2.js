import{aO as F,r as t,j as a}from"./index.a5c50dfb.js";import{aj as _,ak as I}from"./index.00d68e80.js";var l="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\CalendarNew.jsx";const R=()=>{F(e=>e.calendar);const[L,u]=t.exports.useState(!1),[O,b]=t.exports.useState(null),[T,v]=t.exports.useState(null),[V,N]=t.exports.useState(!1),[i,c]=t.exports.useState([]),[f,g]=t.exports.useState([]),[p,h]=t.exports.useState([]),[z,x]=t.exports.useState([]),[o,k]=t.exports.useState([]),[d,m]=t.exports.useState("");t.exports.useEffect(()=>{if(i){const e=[...new Map(p.map(n=>[n.propertyid,n])).values()];k(e),x(e)}},[i]),t.exports.useEffect(()=>{(async()=>{const s=await(await fetch("http://dev-rare.srp.ai/booking")).json();return c(s),h(s),g(s)})()},[]),console.log(i,"allBooking"),t.exports.useState("");const C=e=>{d===e?(m(""),c(f)):(m(e),(async()=>{const r=await(await fetch(`http://dev-rare.srp.ai/booking/api/property/${e}`)).json();return c(r)})())},S=[{label:"Approved",value:"Approved",activeClass:"ring-primary-500 bg-primary-500"},{label:"Cancelled",value:"Cancelled",activeClass:"ring-danger-500 bg-danger-500"}],A=i.map(e=>{const n=e.unitnumber,s=e.checkindate;let r;(e==null?void 0:e.cancelled)===!0?r="Cancelled":r="Approved";const P=e.checkoutdate;return{...e,title:n,date:s,calendar:r,end:P}}),[E,U]=t.exports.useState(S.map(e=>e.value)),D=e=>{u(!0),b(e)},w=e=>{N(!0),v(e)},B=e=>e.event.extendedProps.calendar==="Cancelled"?"danger":e.event.extendedProps.bookingagent==="Airbnb"?"airbnb-color":e.event.extendedProps.bookingagent==="Booking.com"||e.event.extendedProps.bookingagent==="booking.com"?"booking-color":"primary",j=A.filter(e=>E.includes(e.calendar)),M=e=>a("div",{className:"text-center w-[100%]",children:e.event.title},void 0,!1,{fileName:l,lineNumber:284,columnNumber:13},void 0);return a("div",{className:"dashcode-calender",children:[a("h4",{className:"font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6",children:"Calendar"},void 0,!1,{fileName:l,lineNumber:295,columnNumber:13},void 0),a("div",{className:"grid grid-cols-12 gap-4",children:[a("div",{className:"lg:col-span-3 col-span-12",children:o==null?void 0:o.map((e,n)=>a("div",{className:`w-[100%] border-2 border-b-slate-400 border-l-transparent border-r-transparent border-t-transparent py-[5px] cursor-pointer hover:bg-black-200 pl-[5px] ${d===(e==null?void 0:e.propertyid)?"bg-black-200":""}`,onClick:()=>C(e.propertyid),children:[a("div",{className:"font-semibold",children:e==null?void 0:e.unitnumber},void 0,!1,{fileName:l,lineNumber:307,columnNumber:29},void 0),a("div",{className:"text-[15px]",children:(e==null?void 0:e.project_name)+" | "+(e==null?void 0:e.community_name)},void 0,!1,{fileName:l,lineNumber:308,columnNumber:29},void 0)]},n,!0,{fileName:l,lineNumber:302,columnNumber:25},void 0))},void 0,!1,{fileName:l,lineNumber:299,columnNumber:17},void 0),a("div",{className:"lg:col-span-9 col-span-12",children:o==null?void 0:o.map((e,n)=>a("div",{className:"horizontal-calendar",children:a("div",{className:"calendar-container",children:a(_,{plugins:[I],headerToolbar:n===0?{left:"prev today",center:"title",right:"next"}:!1,events:j.filter(s=>s.propertyid===e.propertyid),eventContent:M,editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:4,weekends:!0,dateClick:D,eventClick:w,eventClassNames:B,initialView:"timeGridWeek",slotMinTime:"00:00:00",slotMaxTime:"01:00:00",allDaySlot:!1,slotDuration:"1:00:00",slotLabelInterval:{hours:1},slotLabelFormat:{hour:"numeric",minute:"2-digit",hour12:!1}},void 0,!1,{fileName:l,lineNumber:317,columnNumber:33},void 0)},void 0,!1,{fileName:l,lineNumber:316,columnNumber:29},void 0)},n,!1,{fileName:l,lineNumber:315,columnNumber:25},void 0))},void 0,!1,{fileName:l,lineNumber:312,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:298,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:294,columnNumber:9},void 0)};export{R as default};
