import{r as s,j as e,F as u,e as d,aB as N}from"./index.934a5c91.js";import{C as f}from"./CheckInTable.71556e56.js";import{N as p}from"./not-found.46bdbc04.js";import"./GlobalFilter.1a2b52a5.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\CheckInReport.jsx";const w=()=>{const[t,m]=s.exports.useState(new Date),[i,l]=s.exports.useState([]);return s.exports.useEffect(()=>{(async()=>{const r=new Date;r.setDate(r.getDate()-1);const c=r.toISOString().substring(0,10)+"T19:00:00.000Z",o=await(await fetch(`http://dev-rare.srp.ai/booking/api/checkin/?fromdate=${c}&toDate=${c}`)).json();return l(o==null?void 0:o.booking)})()},[]),e(u,{children:e(d,{children:[e("div",{className:"flex justify-between items-center mb-6 flex-wrap gap-y-[18px]",children:[e("h4",{className:"card-title",children:"Check-in Date Report"},void 0,!1,{fileName:a,lineNumber:35,columnNumber:21},void 0),e("div",{className:"flex items-center gap-x-[15px] flex-wrap gap-y-[18px]",children:[e("p",{children:"Select Check-in Date:"},void 0,!1,{fileName:a,lineNumber:37,columnNumber:25},void 0),e("div",{className:"flex justify-between flex-wrap items-center",children:e("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse ",children:e("div",{className:"date-range-custom2 relative",children:e(N,{className:"form-control py-2",value:t,onChange:n=>m(n),id:"default-picker"},void 0,!1,{fileName:a,lineNumber:41,columnNumber:37},void 0)},void 0,!1,{fileName:a,lineNumber:40,columnNumber:33},void 0)},void 0,!1,{fileName:a,lineNumber:39,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:38,columnNumber:25},void 0),e("button",{className:"btn-dark py-[6px] px-[24px] rounded-[5px]",onClick:async()=>{const r=await(await fetch(`http://dev-rare.srp.ai/booking/api/checkin/?fromdate=${new Date(t[0]).toISOString()}&toDate=${new Date(t[0]).toISOString()}`)).json();return l(r==null?void 0:r.booking)},children:"Search"},void 0,!1,{fileName:a,lineNumber:50,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:36,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:34,columnNumber:17},void 0),i!=null&&i.length?e(f,{allBooking:i},void 0,!1,{fileName:a,lineNumber:55,columnNumber:25},void 0):e("div",{className:"flex justify-center items-center",children:e("img",{src:p,alt:"NotFound",className:"h-[564px] object-contain"},void 0,!1,{fileName:a,lineNumber:57,columnNumber:29},void 0)},void 0,!1,{fileName:a,lineNumber:56,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:33,columnNumber:13},void 0)},void 0,!1)};export{w as default};
