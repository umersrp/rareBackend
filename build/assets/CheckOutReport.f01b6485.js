import{r as o,j as e,F as p,c as n,f as m,aC as h}from"./index.a2dcacb2.js";import{C as d}from"./CheckInTable.0cf30945.js";import{N as f}from"./not-found.46bdbc04.js";import"./GlobalFilter.c265c2b1.js";const D=()=>{const[r,l]=o.exports.useState(new Date),[a,i]=o.exports.useState([]);return o.exports.useEffect(()=>{const t=new Date;t.setDate(t.getDate()-1);const s=t.toISOString().substring(0,10)+"T19:00:00.000Z";(async()=>{const c=await(await fetch(`http://portals.rarehomesgroup.com/booking/api/checkout/?fromdate=${s}&toDate=${s}`)).json();return i(c==null?void 0:c.booking)})()},[]),e(p,{children:n(m,{children:[n("div",{className:"flex justify-between items-center mb-6 flex-wrap gap-y-[18px]",children:[e("h4",{className:"card-title",children:"Check-out Date Report"}),n("div",{className:"flex items-center gap-x-[15px] flex-wrap gap-y-[18px]",children:[e("p",{children:"Select Check-out Date:"}),e("div",{className:"flex justify-between flex-wrap items-center",children:e("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse ",children:e("div",{className:"date-range-custom2 relative",children:e(h,{className:"form-control py-2",value:r,onChange:t=>l(t),id:"default-picker"})})})}),e("button",{className:"btn-dark py-[6px] px-[24px] rounded-[5px]",onClick:async()=>{const s=await(await fetch(`http://portals.rarehomesgroup.com/booking/api/checkout/?fromdate=${new Date(r[0]).toISOString()}&toDate=${new Date(r[0]).toISOString()}`)).json();return i(s==null?void 0:s.booking)},children:"Search"})]})]}),a!=null&&a.length?e(d,{allBooking:a}):e("div",{className:"flex justify-center items-center",children:e("img",{src:f,alt:"NotFound",className:"h-[564px] object-contain"})})]})})};export{D as default};
