import{r,bM as u,ag as M,j as e,F as c,f as A,c as m,L as v,bO as x}from"./index.da1c4237.js";import{I as D,M as b}from"./InvoicesTable.8837d2d0.js";import"./GlobalFilter.a06339dd.js";const y=()=>{const[a,o]=r.exports.useState([]),[d,n]=r.exports.useState(!1),g=localStorage.getItem("isAuth"),i=JSON.parse(g),{data:l}=u(i==null?void 0:i.roleid),s=M();r.exports.useEffect(()=>{n(!0),s.pathname==="/allmaintenancemanagement-invoices"?(async()=>{const t=await(await fetch("http://portals.rarehomesgroup.com/maintenancemanagement/api/q?converted_invoice=true")).json();o(t),n(!1)})():(async()=>{const t=await(await fetch("http://portals.rarehomesgroup.com/maintenancemanagement")).json();o(t),n(!1)})()},[s.pathname]);const f=()=>{n(!0),(async()=>{const t=await(await fetch("http://portals.rarehomesgroup.com/maintenancemanagement")).json();o(t),n(!1)})()};return e(c,{children:d===!1?e(c,{children:a!=null&&a.length?e("div",{className:" space-y-5",children:s.pathname==="/allmaintenancemanagement-invoices"?e(D,{title:"All Maintenance Management Invoices",allData:a}):e(b,{pagelink:"/maintenancemanagementform",linktitle:"Create Maintenance Management Quotations",title:"All Maintenance Management Quotations",allData:a,updateData:f})}):e(A,{children:s.pathname==="/allmaintenancemanagement-invoices"?m(c,{children:[e("div",{className:"flex justify-between items-center mb-6",children:e("h4",{className:"card-title",children:"All Maintenance Management Invoices"})}),e("p",{children:"No Maintenance Management Invoices Found"})]}):m(c,{children:[m("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:"All Maintenance Management Quotations"}),(l==null?void 0:l.createtenant)===!0&&e(v,{to:"/maintenancemanagementform",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add Maintenance Management Quotations"})]}),e("p",{children:"No Maintenance Management Quotations Found"})]})})}):e(x,{})})};export{y as default};
