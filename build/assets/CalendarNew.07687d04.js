import{aP as F,r as t,c as i,j as l}from"./index.78be7783.js";import{aj as I,ak as T}from"./index.f93ed1f6.js";const H=()=>{F(e=>e.calendar);const[z,m]=t.exports.useState(!1),[L,g]=t.exports.useState(null),[_,p]=t.exports.useState(null),[$,b]=t.exports.useState(!1),[r,c]=t.exports.useState([]),[h,x]=t.exports.useState([]),[v,k]=t.exports.useState([]),[G,f]=t.exports.useState([]),[n,C]=t.exports.useState([]),[d,u]=t.exports.useState("");t.exports.useEffect(()=>{if(r){const e=[...new Map(v.map(a=>[a.propertyid,a])).values()];C(e),f(e)}},[r]),t.exports.useEffect(()=>{(async()=>{const s=await(await fetch("http://dev-rare.srp.ai/booking")).json();return c(s),k(s),x(s)})()},[]),console.log(r,"allBooking"),t.exports.useState("");const S=e=>{d===e?(u(""),c(h)):(u(e),(async()=>{const o=await(await fetch(`http://dev-rare.srp.ai/booking/api/property/${e}`)).json();return c(o)})())},A=[{label:"Approved",value:"Approved",activeClass:"ring-primary-500 bg-primary-500"},{label:"Cancelled",value:"Cancelled",activeClass:"ring-danger-500 bg-danger-500"}],N=r.map(e=>{const a=e.unitnumber,s=e.checkindate;let o;(e==null?void 0:e.cancelled)===!0?o="Cancelled":o="Approved";const j=e.checkoutdate;return{...e,title:a,date:s,calendar:o,end:j}}),[B,U]=t.exports.useState(A.map(e=>e.value)),E=e=>{m(!0),g(e)},w=e=>{b(!0),p(e)},D=e=>e.event.extendedProps.calendar==="Cancelled"?"danger":e.event.extendedProps.bookingagent==="Airbnb"?"airbnb-color":e.event.extendedProps.bookingagent==="Booking.com"||e.event.extendedProps.bookingagent==="booking.com"?"booking-color":"primary",M=N.filter(e=>B.includes(e.calendar)),P=e=>l("div",{className:"text-center w-[100%]",children:e.event.title});return i("div",{className:"dashcode-calender",children:[l("h4",{className:"font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6",children:"Calendar"}),i("div",{className:"grid grid-cols-12 gap-4",children:[l("div",{className:"lg:col-span-3 col-span-12",children:n==null?void 0:n.map((e,a)=>i("div",{className:`w-[100%] border-2 border-b-slate-400 border-l-transparent border-r-transparent border-t-transparent py-[5px] cursor-pointer hover:bg-black-200 pl-[5px] ${d===(e==null?void 0:e.propertyid)?"bg-black-200":""}`,onClick:()=>S(e.propertyid),children:[l("div",{className:"font-semibold",children:e==null?void 0:e.unitnumber}),l("div",{className:"text-[15px]",children:(e==null?void 0:e.project_name)+" | "+(e==null?void 0:e.community_name)})]},a))}),l("div",{className:"lg:col-span-9 col-span-12",children:n==null?void 0:n.map((e,a)=>l("div",{className:"horizontal-calendar",children:l("div",{className:"calendar-container",children:l(I,{plugins:[T],headerToolbar:a===0?{left:"prev today",center:"title",right:"next"}:!1,events:M.filter(s=>s.propertyid===e.propertyid),eventContent:P,editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:4,weekends:!0,dateClick:E,eventClick:w,eventClassNames:D,initialView:"timeGridWeek",slotMinTime:"00:00:00",slotMaxTime:"01:00:00",allDaySlot:!1,slotDuration:"1:00:00",slotLabelInterval:{hours:1},slotLabelFormat:{hour:"numeric",minute:"2-digit",hour12:!1}})})},a))})]})]})};export{H as default};
