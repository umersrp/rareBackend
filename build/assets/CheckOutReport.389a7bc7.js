import{r as n,j as e,F as p,c as o,C as h,aC as m}from"./index.f2f04dad.js";import{C as d}from"./CheckInTable.a7581edd.js";import{N as f}from"./not-found.46bdbc04.js";import"./GlobalFilter.87a0ecb5.js";const C=()=>{const[r,l]=n.exports.useState(new Date),[s,i]=n.exports.useState([]);return n.exports.useEffect(()=>{const t=new Date;t.setDate(t.getDate()-1);const a=t.toISOString().substring(0,10)+"T19:00:00.000Z";(async()=>{const c=await(await fetch(`http://dev-rare.srp.ai/booking/api/checkout/?fromdate=${a}&toDate=${a}`)).json();return i(c==null?void 0:c.booking)})()},[]),e(p,{children:o(h,{children:[o("div",{className:"flex justify-between items-center mb-6 flex-wrap gap-y-[18px]",children:[e("h4",{className:"card-title",children:"Check-out Date Report"}),o("div",{className:"flex items-center gap-x-[15px] flex-wrap gap-y-[18px]",children:[e("p",{children:"Select Check-out Date:"}),e("div",{className:"flex justify-between flex-wrap items-center",children:e("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse ",children:e("div",{className:"date-range-custom2 relative",children:e(m,{className:"form-control py-2",value:r,onChange:t=>l(t),id:"default-picker"})})})}),e("button",{className:"btn-dark py-[6px] px-[24px] rounded-[5px]",onClick:async()=>{const a=await(await fetch(`http://dev-rare.srp.ai/booking/api/checkout/?fromdate=${new Date(r[0]).toISOString()}&toDate=${new Date(r[0]).toISOString()}`)).json();return i(a==null?void 0:a.booking)},children:"Search"})]})]}),s!=null&&s.length?e(d,{allBooking:s}):e("div",{className:"flex justify-center items-center",children:e("img",{src:f,alt:"NotFound",className:"h-[564px] object-contain"})})]})})};export{C as default};
