import{r,ce as p,af as h,j as e,F as s,e as b,L as g,cg as M}from"./index.cef99591.js";import{I as A,M as x}from"./InvoicesTable.15bb2a09.js";import"./GlobalFilter.52bc46cc.js";var a="C:\\Users\\LENOVO\\Desktop\\rareProjects\\Rare_Frontend\\src\\pages\\maintenance-management\\AllMaintenanceManagement.jsx";const y=()=>{const[n,o]=r.exports.useState([]),[f,t]=r.exports.useState(!1),N=localStorage.getItem("isAuth"),m=JSON.parse(N),{data:c}=p(m==null?void 0:m.roleid),l=h();r.exports.useEffect(()=>{t(!0),l.pathname==="/allmaintenancemanagement-invoices"?(async()=>{const i=await(await fetch("http://dev-rare.srp.ai/maintenancemanagement/api/q?converted_invoice=true")).json();o(i),t(!1)})():(async()=>{const i=await(await fetch("http://dev-rare.srp.ai/maintenancemanagement")).json();o(i),t(!1)})()},[l.pathname]);const v=()=>{t(!0),(async()=>{const i=await(await fetch("http://dev-rare.srp.ai/maintenancemanagement")).json();o(i),t(!1)})()};return e(s,{children:f===!1?e(s,{children:n!=null&&n.length?e("div",{className:" space-y-5",children:l.pathname==="/allmaintenancemanagement-invoices"?e(A,{title:"All Maintenance Management Invoices",allData:n},void 0,!1,{fileName:a,lineNumber:59,columnNumber:45},void 0):e(x,{pagelink:"/maintenancemanagementform",linktitle:"Create Maintenance Management Quotations",title:"All Maintenance Management Quotations",allData:n,updateData:v},void 0,!1,{fileName:a,lineNumber:60,columnNumber:45},void 0)},void 0,!1,{fileName:a,lineNumber:56,columnNumber:33},void 0):e(b,{children:l.pathname==="/allmaintenancemanagement-invoices"?e(s,{children:[e("div",{className:"flex justify-between items-center mb-6",children:e("h4",{className:"card-title",children:"All Maintenance Management Invoices"},void 0,!1,{fileName:a,lineNumber:68,columnNumber:53},void 0)},void 0,!1,{fileName:a,lineNumber:67,columnNumber:49},void 0),e("p",{children:"No Maintenance Management Invoices Found"},void 0,!1,{fileName:a,lineNumber:70,columnNumber:49},void 0)]},void 0,!0):e(s,{children:[e("div",{className:"flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:"All Maintenance Management Quotations"},void 0,!1,{fileName:a,lineNumber:74,columnNumber:53},void 0),(c==null?void 0:c.createtenant)===!0&&e(g,{to:"/maintenancemanagementform",className:"btn-dark py-[8px] px-[24px] rounded-[5px]",children:"Add Maintenance Management Quotations"},void 0,!1,{fileName:a,lineNumber:77,columnNumber:61},void 0)]},void 0,!0,{fileName:a,lineNumber:73,columnNumber:49},void 0),e("p",{children:"No Maintenance Management Quotations Found"},void 0,!1,{fileName:a,lineNumber:81,columnNumber:49},void 0)]},void 0,!0)},void 0,!1,{fileName:a,lineNumber:63,columnNumber:33},void 0)},void 0,!1):e(M,{},void 0,!1,{fileName:a,lineNumber:87,columnNumber:23},void 0)},void 0,!1)};export{y as default};
