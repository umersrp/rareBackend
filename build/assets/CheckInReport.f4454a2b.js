import{r as c,j as e,F as h,c as o,C as m,aC as d}from"./index.cb22c4c1.js";import{C as f}from"./CheckInTable.80ef9631.js";import{N as x}from"./not-found.46bdbc04.js";import"./GlobalFilter.8a4f5850.js";const C=()=>{const[s,p]=c.exports.useState(new Date),[a,i]=c.exports.useState([]);return c.exports.useEffect(()=>{(async()=>{const t=new Date;t.setDate(t.getDate()-1);const l=t.toISOString().substring(0,10)+"T19:00:00.000Z",n=await(await fetch(`http://dev-rare.srp.ai/booking/api/checkin/?fromdate=${l}&toDate=${l}`)).json();return i(n==null?void 0:n.booking)})()},[]),e(h,{children:o(m,{children:[o("div",{className:"flex justify-between items-center mb-6 flex-wrap gap-y-[18px]",children:[e("h4",{className:"card-title",children:"Check-in Date Report"}),o("div",{className:"flex items-center gap-x-[15px] flex-wrap gap-y-[18px]",children:[e("p",{children:"Select Check-in Date:"}),e("div",{className:"flex justify-between flex-wrap items-center",children:e("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse ",children:e("div",{className:"date-range-custom2 relative",children:e(d,{className:"form-control py-2",value:s,onChange:r=>p(r),id:"default-picker"})})})}),e("button",{className:"btn-dark py-[6px] px-[24px] rounded-[5px]",onClick:async()=>{const t=await(await fetch(`http://dev-rare.srp.ai/booking/api/checkin/?fromdate=${new Date(s[0]).toISOString()}&toDate=${new Date(s[0]).toISOString()}`)).json();return i(t==null?void 0:t.booking)},children:"Search"})]})]}),a!=null&&a.length?e(f,{allBooking:a}):e("div",{className:"flex justify-center items-center",children:e("img",{src:x,alt:"NotFound",className:"h-[564px] object-contain"})})]})})};export{C as default};
