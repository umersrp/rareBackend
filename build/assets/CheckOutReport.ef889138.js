import{r as s,j as e,F as m,e as u,aB as d}from"./index.1dc4ee55.js";import{C as N}from"./CheckInTable.a18a183e.js";import{N as f}from"./not-found.46bdbc04.js";import"./GlobalFilter.84d37d0f.js";var t="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\booking-management\\CheckOutReport.jsx";const w=()=>{const[i,c]=s.exports.useState(new Date),[o,l]=s.exports.useState([]);return s.exports.useEffect(()=>{const a=new Date;a.setDate(a.getDate()-1);const r=a.toISOString().substring(0,10)+"T19:00:00.000Z";(async()=>{const n=await(await fetch(`http://dev-rare.srp.ai/booking/api/checkout/?fromdate=${r}&toDate=${r}`)).json();return l(n==null?void 0:n.booking)})()},[]),e(m,{children:e(u,{children:[e("div",{className:"flex justify-between items-center mb-6 flex-wrap gap-y-[18px]",children:[e("h4",{className:"card-title",children:"Check-out Date Report"},void 0,!1,{fileName:t,lineNumber:33,columnNumber:21},void 0),e("div",{className:"flex items-center gap-x-[15px] flex-wrap gap-y-[18px]",children:[e("p",{children:"Select Check-out Date:"},void 0,!1,{fileName:t,lineNumber:35,columnNumber:25},void 0),e("div",{className:"flex justify-between flex-wrap items-center",children:e("div",{className:"flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse ",children:e("div",{className:"date-range-custom2 relative",children:e(d,{className:"form-control py-2",value:i,onChange:a=>c(a),id:"default-picker"},void 0,!1,{fileName:t,lineNumber:39,columnNumber:37},void 0)},void 0,!1,{fileName:t,lineNumber:38,columnNumber:33},void 0)},void 0,!1,{fileName:t,lineNumber:37,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:36,columnNumber:25},void 0),e("button",{className:"btn-dark py-[6px] px-[24px] rounded-[5px]",onClick:async()=>{const r=await(await fetch(`http://dev-rare.srp.ai/booking/api/checkout/?fromdate=${new Date(i[0]).toISOString()}&toDate=${new Date(i[0]).toISOString()}`)).json();return l(r==null?void 0:r.booking)},children:"Search"},void 0,!1,{fileName:t,lineNumber:48,columnNumber:25},void 0)]},void 0,!0,{fileName:t,lineNumber:34,columnNumber:21},void 0)]},void 0,!0,{fileName:t,lineNumber:32,columnNumber:17},void 0),o!=null&&o.length?e(N,{allBooking:o},void 0,!1,{fileName:t,lineNumber:53,columnNumber:25},void 0):e("div",{className:"flex justify-center items-center",children:e("img",{src:f,alt:"NotFound",className:"h-[564px] object-contain"},void 0,!1,{fileName:t,lineNumber:55,columnNumber:29},void 0)},void 0,!1,{fileName:t,lineNumber:54,columnNumber:25},void 0)]},void 0,!0,{fileName:t,lineNumber:31,columnNumber:13},void 0)},void 0,!1)};export{w as default};
