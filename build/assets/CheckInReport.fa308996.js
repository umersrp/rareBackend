import{r as n,j as e,F as m,c as o,f as h,aC as d}from"./index.97b86580.js";import{C as f}from"./CheckInTable.cce44f4b.js";import{N as x}from"./not-found.46bdbc04.js";import"./GlobalFilter.73265e44.js";const D=()=>{const[a,p]=n.exports.useState(new Date),[s,i]=n.exports.useState([]);return n.exports.useEffect(()=>{(async()=>{const t=new Date;t.setDate(t.getDate()-1);const l=t.toISOString().substring(0,10)+"T19:00:00.000Z",c=await(await fetch(`http://portals.rarehomesgroup.com/booking/api/checkin/?fromdate=${l}&toDate=${l}`)).json();return i(c==null?void 0:c.booking)})()},[]),e(m,{children:o(h,{children:[o("div",{className:"flex justify-between items-center mb-6 flex-wrap gap-y-[18px]",children:[e("h4",{className:"card-title",children:"Check-in Date Report"}),o("div",{className:"flex items-center gap-x-[15px] flex-wrap gap-y-[18px]",children:[e("p",{children:"Select Check-in Date:"}),e("div",{className:"flex justify-between flex-wrap items-center",children:e("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse ",children:e("div",{className:"date-range-custom2 relative",children:e(d,{className:"form-control py-2",value:a,onChange:r=>p(r),id:"default-picker"})})})}),e("button",{className:"btn-dark py-[6px] px-[24px] rounded-[5px]",onClick:async()=>{const t=await(await fetch(`http://portals.rarehomesgroup.com/booking/api/checkin/?fromdate=${new Date(a[0]).toISOString()}&toDate=${new Date(a[0]).toISOString()}`)).json();return i(t==null?void 0:t.booking)},children:"Search"})]})]}),s!=null&&s.length?e(f,{allBooking:s}):e("div",{className:"flex justify-center items-center",children:e("img",{src:x,alt:"NotFound",className:"h-[564px] object-contain"})})]})})};export{D as default};
