import{r,bL as u,ag as M,j as e,F as c,C as v,c as m,L as A,bN as x}from"./index.78be7783.js";import{I as D,M as N}from"./InvoicesTable.93e39b34.js";import"./GlobalFilter.08e52778.js";const y=()=>{const[a,i]=r.exports.useState([]),[h,n]=r.exports.useState(!1),g=localStorage.getItem("isAuth"),l=JSON.parse(g),{data:o}=u(l==null?void 0:l.roleid),s=M();r.exports.useEffect(()=>{n(!0),s.pathname==="/allmaintenancemanagement-invoices"?(async()=>{const t=await(await fetch("http://dev-rare.srp.ai/maintenancemanagement/api/q?converted_invoice=true")).json();i(t),n(!1)})():(async()=>{const t=await(await fetch("http://dev-rare.srp.ai/maintenancemanagement")).json();i(t),n(!1)})()},[s.pathname]);const f=()=>{n(!0),(async()=>{const t=await(await fetch("http://dev-rare.srp.ai/maintenancemanagement")).json();i(t),n(!1)})()};return e(c,{children:h===!1?e(c,{children:a!=null&&a.length?e("div",{className:" space-y-5",children:s.pathname==="/allmaintenancemanagement-invoices"?e(D,{title:"All Maintenance Management Invoices",allData:a}):e(N,{pagelink:"/maintenancemanagementform",linktitle:"Create Maintenance Management Quotations",title:"All Maintenance Management Quotations",allData:a,updateData:f})}):e(v,{children:s.pathname==="/allmaintenancemanagement-invoices"?m(c,{children:[e("div",{className:"flex justify-between items-center mb-6",children:e("h4",{className:"card-title",children:"All Maintenance Management Invoices"})}),e("p",{children:"No Maintenance Management Invoices Found"})]}):m(c,{children:[m("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:"All Maintenance Management Quotations"}),(o==null?void 0:o.createtenant)===!0&&e(A,{to:"/maintenancemanagementform",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add Maintenance Management Quotations"})]}),e("p",{children:"No Maintenance Management Quotations Found"})]})})}):e(x,{})})};export{y as default};
